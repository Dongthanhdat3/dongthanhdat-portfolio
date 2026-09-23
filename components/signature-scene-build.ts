import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import { OutputPass } from "three/examples/jsm/postprocessing/OutputPass.js";

// A stylised chrome sculpture inspired by the reference artwork: a fused
// central knot with sharp tapered blades fanning out (a "wishbone" pair of
// top spikes, a long tail, and a curling right-hand ribbon), threaded
// through by two thin rings — all rendered as real, lit, reflective 3D
// geometry rather than a picture, so it can be rotated and dragged.

interface SceneHandle {
  dispose: () => void;
}

function buildStudioEnvTexture(): THREE.Texture {
  const w = 1024;
  const h = 512;
  const cv = document.createElement("canvas");
  cv.width = w;
  cv.height = h;
  const ctx = cv.getContext("2d")!;
  ctx.fillStyle = "#000000";
  ctx.fillRect(0, 0, w, h);
  const spots: Array<[number, number, number, number]> = [
    [0.30, 0.32, 190, 0.85],
    [0.66, 0.30, 170, 0.8],
    [0.50, 0.55, 260, 0.55],
    [0.82, 0.62, 140, 0.7],
    [0.14, 0.60, 120, 0.5],
    [0.50, 0.08, 260, 0.35],
    [0.28, 0.42, 420, 0.28],
    [0.70, 0.46, 460, 0.26],
    [0.50, 0.72, 380, 0.22],
    [0.50, 0.30, 520, 0.16],
  ];
  for (const [sx, sy, r, a] of spots) {
    const cx = sx * w;
    const cy = sy * h;
    const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
    g.addColorStop(0, `rgba(255,255,255,${a})`);
    g.addColorStop(0.35, `rgba(210,225,255,${a * 0.35})`);
    g.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h);
  }
  const vg = ctx.createLinearGradient(0, 0, 0, h);
  vg.addColorStop(0, "rgba(40,45,60,0.12)");
  vg.addColorStop(1, "rgba(0,0,0,0)");
  ctx.fillStyle = vg;
  ctx.fillRect(0, 0, w, h);
  const tex = new THREE.CanvasTexture(cv);
  tex.mapping = THREE.EquirectangularReflectionMapping;
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

function taper(center: number, exp = 1.4, min = 0.009) {
  return (t: number) => Math.max(center * Math.pow(1 - t, exp), min);
}

function buildBlade(
  points: THREE.Vector3[],
  opts: { segments?: number; widthFn: (t: number) => number; heightFn: (t: number) => number; twist?: number }
) {
  const { segments = 140, widthFn, heightFn, twist = 0 } = opts;
  const curve = new THREE.CatmullRomCurve3(points, false, "catmullrom", 0.5);
  const frames = curve.computeFrenetFrames(segments, false);
  const positions: number[] = [];
  const normals: number[] = [];
  const idxRings: THREE.Vector3[][] = [];

  for (let i = 0; i <= segments; i++) {
    const t = i / segments;
    const p = curve.getPointAt(t);
    const n = frames.normals[i];
    const b = frames.binormals[i];
    const a = twist * t * Math.PI;
    const cosA = Math.cos(a);
    const sinA = Math.sin(a);
    const n2 = n.clone().multiplyScalar(cosA).add(b.clone().multiplyScalar(sinA));
    const b2 = b.clone().multiplyScalar(cosA).sub(n.clone().multiplyScalar(sinA));
    const w = widthFn(t);
    const h = heightFn(t);
    const right = p.clone().add(n2.clone().multiplyScalar(w));
    const top = p.clone().add(b2.clone().multiplyScalar(h));
    const left = p.clone().add(n2.clone().multiplyScalar(-w));
    const bottom = p.clone().add(b2.clone().multiplyScalar(-h));
    idxRings.push([right, top, left, bottom]);
  }

  const addQuad = (p0: THREE.Vector3, p1: THREE.Vector3, p2: THREE.Vector3, p3: THREE.Vector3) => {
    const nrm = new THREE.Triangle(p0, p1, p2).getNormal(new THREE.Vector3());
    for (const p of [p0, p1, p2, p0, p2, p3]) {
      positions.push(p.x, p.y, p.z);
      normals.push(nrm.x, nrm.y, nrm.z);
    }
  };
  const addTri = (p0: THREE.Vector3, p1: THREE.Vector3, p2: THREE.Vector3) => {
    const nrm = new THREE.Triangle(p0, p1, p2).getNormal(new THREE.Vector3());
    for (const p of [p0, p1, p2]) {
      positions.push(p.x, p.y, p.z);
      normals.push(nrm.x, nrm.y, nrm.z);
    }
  };

  for (let i = 0; i < segments; i++) {
    const a0 = idxRings[i];
    const a1 = idxRings[i + 1];
    addQuad(a0[0], a1[0], a1[1], a0[1]);
    addQuad(a0[1], a1[1], a1[2], a0[2]);
    addQuad(a0[2], a1[2], a1[3], a0[3]);
    addQuad(a0[3], a1[3], a1[0], a0[0]);
  }

  const root = idxRings[0];
  const rootCenter = points[0];
  addTri(root[1], root[0], rootCenter);
  addTri(root[2], root[1], rootCenter);
  addTri(root[3], root[2], rootCenter);
  addTri(root[0], root[3], rootCenter);

  const geom = new THREE.BufferGeometry();
  geom.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
  geom.setAttribute("normal", new THREE.Float32BufferAttribute(normals, 3));
  return geom;
}

export function createSignatureScene(
  container: HTMLDivElement,
  canvas: HTMLCanvasElement,
  opts: { reducedMotion: boolean }
): SceneHandle {
  const scene = new THREE.Scene();
  scene.background = null;

  const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 100);
  camera.position.set(0, 0.1, 5.1);
  camera.lookAt(0, -0.1, 0);

  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true,
    powerPreference: "high-performance",
  });
  renderer.setClearColor(0x000000, 0);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 0.95;
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  const pmrem = new THREE.PMREMGenerator(renderer);
  const envTex = buildStudioEnvTexture();
  const envRT = pmrem.fromEquirectangular(envTex);
  scene.environment = envRT.texture;
  envTex.dispose();
  pmrem.dispose();

  const key = new THREE.DirectionalLight(0xffffff, 1.6);
  key.position.set(3, 4, 5);
  scene.add(key);

  const rim = new THREE.DirectionalLight(0x9ec8ff, 1.1);
  rim.position.set(-4, -2, -3);
  scene.add(rim);

  const fillLight = new THREE.PointLight(0xffffff, 0.35, 20);
  fillLight.position.set(-2.4, 2.6, 3.5);
  scene.add(fillLight);

  const backLight = new THREE.PointLight(0x6fa8ff, 0.4, 20);
  backLight.position.set(2.6, -3.4, -2.2);
  scene.add(backLight);

  scene.add(new THREE.AmbientLight(0x0a0a0e, 0.45));

  const chrome = new THREE.MeshPhysicalMaterial({
    color: 0xffffff,
    metalness: 1,
    roughness: 0.14,
    clearcoat: 0.5,
    clearcoatRoughness: 0.12,
    envMapIntensity: 2.6,
    reflectivity: 1,
  });

  const group = new THREE.Group();

  const KNOT = new THREE.Vector3(0, -0.06, 0.04);
  const FORK = new THREE.Vector3(0.04, 0.3, 0.02);

  function addBlade(pts: THREE.Vector3[], wCenter: number, hCenter: number, exp = 1.5, twist = 0) {
    const geo = buildBlade(pts, {
      widthFn: taper(wCenter, exp),
      heightFn: taper(hCenter, exp),
      twist,
    });
    const mesh = new THREE.Mesh(geo, chrome);
    group.add(mesh);
    return mesh;
  }

  addBlade([KNOT, new THREE.Vector3(0.02, 0.12, 0.05), FORK], 0.3, 0.17, 1.1, 0.2);

  addBlade(
    [
      FORK,
      new THREE.Vector3(-0.04, 0.52, 0.12),
      new THREE.Vector3(0.1, 0.86, 0.0),
      new THREE.Vector3(0.42, 1.32, -0.08),
    ],
    0.2, 0.115, 1.55, 0.7
  );

  addBlade(
    [
      FORK,
      new THREE.Vector3(-0.26, 0.44, 0.16),
      new THREE.Vector3(-0.52, 0.66, 0.06),
      new THREE.Vector3(-0.74, 0.8, -0.04),
    ],
    0.185, 0.105, 1.45, -0.5
  );

  addBlade(
    [
      KNOT,
      new THREE.Vector3(-0.16, -0.32, 0.14),
      new THREE.Vector3(-0.4, -0.62, 0.26),
      new THREE.Vector3(-0.56, -0.92, 0.1),
      new THREE.Vector3(-0.64, -1.16, -0.06),
    ],
    0.205, 0.12, 1.4, 0.55
  );

  addBlade(
    [
      KNOT,
      new THREE.Vector3(0.3, -0.08, -0.14),
      new THREE.Vector3(0.58, -0.3, -0.28),
      new THREE.Vector3(0.8, -0.6, -0.22),
      new THREE.Vector3(0.92, -0.9, -0.1),
    ],
    0.19, 0.11, 1.4, -0.6
  );

  addBlade(
    [
      new THREE.Vector3(0.55, -0.22, -0.08),
      new THREE.Vector3(0.74, -0.5, -0.14),
      new THREE.Vector3(0.98, -0.92, -0.02),
    ],
    0.135, 0.075, 1.35, 0.3
  );

  function makeRing(radius: number, tube: number, center: THREE.Vector3, rot: THREE.Euler) {
    const geo = new THREE.TorusGeometry(radius, tube, 24, 160);
    const mesh = new THREE.Mesh(geo, chrome);
    mesh.position.copy(center);
    mesh.rotation.copy(rot);
    group.add(mesh);
  }

  makeRing(0.6, 0.013, new THREE.Vector3(-0.2, 0.05, -0.08), new THREE.Euler(0.2, 0.4, 0.12));
  makeRing(0.5, 0.011, new THREE.Vector3(0.3, -0.12, -0.16), new THREE.Euler(-0.15, 0.45, -0.1));

  group.position.y = -0.05;
  group.rotation.z = -0.22;
  scene.add(group);

  const composer = new EffectComposer(renderer);
  composer.addPass(new RenderPass(scene, camera));
  const bloom = new UnrealBloomPass(new THREE.Vector2(1, 1), 0.3, 0.4, 0.95);
  composer.addPass(bloom);
  composer.addPass(new OutputPass());

  // ---- interaction: drag to spin, gentle momentum, continuous 180° auto sweep ----
  let manualOffset = 0;
  let velocity = 0;
  let dragging = false;
  let lastX = 0;
  let pointerId: number | null = null;

  const onPointerDown = (e: PointerEvent) => {
    dragging = true;
    lastX = e.clientX;
    velocity = 0;
    pointerId = e.pointerId;
    canvas.setPointerCapture(e.pointerId);
    canvas.style.cursor = "grabbing";
  };
  const onPointerMove = (e: PointerEvent) => {
    if (!dragging) return;
    const dx = e.clientX - lastX;
    velocity = dx * 0.0065;
    manualOffset += dx * 0.0065;
    lastX = e.clientX;
  };
  const onPointerUp = () => {
    dragging = false;
    canvas.style.cursor = "grab";
    if (pointerId !== null && canvas.hasPointerCapture(pointerId)) {
      canvas.releasePointerCapture(pointerId);
    }
  };

  canvas.style.cursor = "grab";
  canvas.style.touchAction = "none";
  canvas.addEventListener("pointerdown", onPointerDown);
  canvas.addEventListener("pointermove", onPointerMove);
  window.addEventListener("pointerup", onPointerUp);

  const SWEEP = Math.PI; // 180 degrees
  const PERIOD = 9.0; // seconds per full there-and-back sweep — a moderate pace

  let raf = 0;
  let disposed = false;
  const clock = new THREE.Clock();
  let autoT = 0;

  function resize() {
    const w = Math.max(container.clientWidth, 1);
    const h = Math.max(container.clientHeight, 1);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    const pr = Math.min(window.devicePixelRatio || 1, 2);
    renderer.setPixelRatio(pr);
    renderer.setSize(w, h, false);
    composer.setSize(w, h);
  }

  const ro = new ResizeObserver(resize);
  ro.observe(container);
  resize();

  function animate() {
    if (disposed) return;
    raf = requestAnimationFrame(animate);
    const dt = Math.min(clock.getDelta(), 0.05);
    autoT += dt;

    if (!dragging) {
      manualOffset += velocity;
      velocity *= 0.94;
    }

    const autoAngle = opts.reducedMotion
      ? 0
      : Math.sin(autoT * ((Math.PI * 2) / PERIOD)) * (SWEEP / 2);

    group.rotation.y = autoAngle + manualOffset;
    group.rotation.x = opts.reducedMotion ? 0 : Math.sin(autoT * 0.15) * 0.06;

    composer.render();
  }
  animate();

  return {
    dispose() {
      disposed = true;
      cancelAnimationFrame(raf);
      ro.disconnect();
      canvas.removeEventListener("pointerdown", onPointerDown);
      canvas.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      composer.dispose();
      envRT.texture.dispose();
      group.traverse((obj) => {
        if (obj instanceof THREE.Mesh) {
          obj.geometry.dispose();
        }
      });
      chrome.dispose();
      renderer.dispose();
    },
  };
}
