"use client";

import { useEffect, useRef, type PointerEvent } from "react";
import * as THREE from "three";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";

type CorePart = THREE.Mesh & {
  userData: {
    base: THREE.Vector3;
    offset: THREE.Vector3;
    rotation: THREE.Euler;
    rotationOffset: THREE.Euler;
  };
};

const clamp = (value: number, min = 0, max = 1) => Math.min(max, Math.max(min, value));

export function ResearchCore() {
  const shellRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const targetExplode = useRef(0);
  const tapped = useRef(false);
  const requestRenderRef = useRef<() => void>(() => undefined);

  useEffect(() => {
    const canvas = canvasRef.current;
    const shell = shellRef.current;
    if (!canvas || !shell) return;

    const mobile = window.matchMedia("(max-width: 620px)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const forceExploded = new URLSearchParams(window.location.search).get("explode") === "1";
    if (forceExploded) targetExplode.current = 0.88;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: !mobile,
      alpha: true,
      powerPreference: "high-performance",
      precision: "mediump",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, mobile ? 1.15 : 1.4));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.03;
    renderer.setClearColor(0x000000, 0);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(33, 1, 0.1, 60);
    camera.position.set(0, 0.05, mobile ? 9.15 : 8.15);

    const pmrem = new THREE.PMREMGenerator(renderer);
    const environment = pmrem.fromScene(new RoomEnvironment(), 0.025).texture;
    scene.environment = environment;

    const assembly = new THREE.Group();
    assembly.rotation.set(-0.075, -0.32, 0.055);
    scene.add(assembly);

    const ceramic = new THREE.MeshPhysicalMaterial({
      color: 0xf2f1ed,
      roughness: 0.2,
      metalness: 0.02,
      clearcoat: 0.82,
      clearcoatRoughness: 0.18,
      envMapIntensity: 1.25,
    });
    const optical = new THREE.MeshPhysicalMaterial({
      color: 0xcbd8df,
      roughness: 0.06,
      metalness: 0.02,
      transmission: 0.44,
      thickness: 0.22,
      ior: 1.38,
      transparent: true,
      opacity: 0.86,
      clearcoat: 1,
      envMapIntensity: 1.45,
    });
    const aluminum = new THREE.MeshStandardMaterial({
      color: 0xa6a9ad,
      roughness: 0.27,
      metalness: 0.92,
      envMapIntensity: 1.5,
    });
    const graphite = new THREE.MeshPhysicalMaterial({
      color: 0x111317,
      roughness: 0.24,
      metalness: 0.82,
      clearcoat: 0.62,
      clearcoatRoughness: 0.18,
      envMapIntensity: 1.18,
    });
    const frosted = new THREE.MeshPhysicalMaterial({
      color: 0xd8dde0,
      roughness: 0.34,
      metalness: 0.05,
      transmission: 0.18,
      transparent: true,
      opacity: 0.9,
      envMapIntensity: 1.05,
    });

    const parts: CorePart[] = [];
    const addPart = (
      geometry: THREE.BufferGeometry,
      material: THREE.Material,
      base: [number, number, number],
      offset: [number, number, number],
      rotation: [number, number, number] = [0, 0, 0],
      rotationOffset: [number, number, number] = [0, 0, 0],
      scale: [number, number, number] = [1, 1, 1],
    ) => {
      const mesh = new THREE.Mesh(geometry, material) as CorePart;
      mesh.position.set(...base);
      mesh.rotation.set(...rotation);
      mesh.scale.set(...scale);
      mesh.userData = {
        base: new THREE.Vector3(...base),
        offset: new THREE.Vector3(...offset),
        rotation: new THREE.Euler(...rotation),
        rotationOffset: new THREE.Euler(...rotationOffset),
      };
      parts.push(mesh);
      assembly.add(mesh);
      return mesh;
    };

    // Insight: a ceramic synthesis core wrapped by an optical reading surface.
    addPart(new THREE.SphereGeometry(0.94, 44, 30), ceramic, [0, 0, 0], [0, 0, 0], [0.04, -0.1, 0], [0, 0.06, 0], [1.03, 0.86, 0.76]);
    addPart(new THREE.SphereGeometry(0.72, 40, 28), optical, [0.12, 0.02, 0.5], [0.08, 0, 0.5], [0.02, 0.08, 0], [0.02, 0.05, 0], [1, 0.82, 0.42]);

    // Structure: calibrated analytical rings, deliberately offset and inclined.
    addPart(new THREE.TorusGeometry(1.12, 0.075, 16, 72), graphite, [0, 0.02, 0.08], [-0.56, -0.08, 0.25], [0.08, 0.3, 0.02], [0.08, -0.24, 0.05]);
    addPart(new THREE.TorusGeometry(1.48, 0.044, 14, 80), aluminum, [-0.03, 0.03, -0.02], [0.44, 0.48, -0.12], [0.62, 0.28, 0.48], [-0.22, 0.22, 0.18]);
    addPart(new THREE.TorusGeometry(1.68, 0.035, 12, 84), graphite, [0.02, -0.02, -0.16], [0.58, -0.4, -0.16], [-0.36, 0.58, -0.22], [0.18, -0.2, -0.16]);

    // Observation: five respondents/data points distributed around the model.
    addPart(new THREE.SphereGeometry(0.18, 24, 18), aluminum, [-1.23, 0.55, 0.28], [-0.48, 0.35, 0.08]);
    addPart(new THREE.SphereGeometry(0.145, 22, 16), graphite, [1.3, 0.62, 0.1], [0.5, 0.38, 0.12]);
    addPart(new THREE.SphereGeometry(0.13, 20, 15), frosted, [1.08, -0.84, 0.3], [0.44, -0.4, 0.1]);
    addPart(new THREE.SphereGeometry(0.105, 18, 14), graphite, [-0.78, -1.02, -0.08], [-0.38, -0.38, -0.06]);
    addPart(new THREE.SphereGeometry(0.09, 18, 14), frosted, [0.2, 1.28, -0.22], [0.08, 0.45, -0.12]);

    const key = new THREE.DirectionalLight(0xffffff, 4.1);
    key.position.set(-4.5, 5.5, 5);
    scene.add(key);
    const fill = new THREE.DirectionalLight(0xb9c7d2, 1.9);
    fill.position.set(4, 1.2, 4.5);
    scene.add(fill);
    const rim = new THREE.DirectionalLight(0xffffff, 2.6);
    rim.position.set(1.5, 3, -4);
    scene.add(rim);

    let width = 1;
    let height = 1;
    let frame = 0;
    let idleTimer = 0;
    let renderedExplode = forceExploded ? 0.88 : 0;
    let visible = true;
    let pageVisible = document.visibilityState === "visible";
    let last = performance.now();
    let lastIdle = 0;

    const resize = () => {
      const rect = shell.getBoundingClientRect();
      width = Math.max(1, Math.round(rect.width));
      height = Math.max(1, Math.round(rect.height));
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.position.z = mobile ? 9.15 : 8.15 / Math.min(1, Math.max(0.82, camera.aspect));
      camera.updateProjectionMatrix();
      requestRenderRef.current();
    };

    const applyParts = () => {
      parts.forEach((part) => {
        const data = part.userData;
        part.position.copy(data.base).addScaledVector(data.offset, renderedExplode);
        part.rotation.set(
          data.rotation.x + data.rotationOffset.x * renderedExplode,
          data.rotation.y + data.rotationOffset.y * renderedExplode,
          data.rotation.z + data.rotationOffset.z * renderedExplode,
        );
      });
    };

    const scheduleIdle = () => {
      window.clearTimeout(idleTimer);
      if (!visible || !pageVisible || reduced) return;
      idleTimer = window.setTimeout(() => requestRenderRef.current(), 96);
    };

    const render = (now: number) => {
      frame = 0;
      if (!visible || !pageVisible) return;
      const delta = Math.min(48, Math.max(1, now - last));
      last = now;
      const damping = 1 - Math.exp(-delta / (targetExplode.current > renderedExplode ? 145 : 235));
      renderedExplode += (targetExplode.current - renderedExplode) * damping;
      if (Math.abs(targetExplode.current - renderedExplode) < 0.001) renderedExplode = targetExplode.current;
      applyParts();

      if (!reduced) {
        const idle = now / 1000;
        assembly.rotation.y = -0.32 + Math.sin(idle * 0.57) * 0.021 + renderedExplode * 0.035;
        assembly.rotation.x = -0.075 + Math.cos(idle * 0.49) * 0.0105;
        assembly.position.y = Math.sin(idle * 0.63) * 0.026;
      }

      renderer.render(scene, camera);
      const settling = Math.abs(targetExplode.current - renderedExplode) > 0.002;
      if (settling) requestRenderRef.current();
      else if (now - lastIdle > 60) {
        lastIdle = now;
        scheduleIdle();
      }
    };

    requestRenderRef.current = () => {
      if (!frame && visible && pageVisible) frame = window.requestAnimationFrame(render);
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(shell);
    const heroObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) requestRenderRef.current();
      else {
        window.cancelAnimationFrame(frame);
        frame = 0;
        window.clearTimeout(idleTimer);
      }
    }, { threshold: 0.02 });
    heroObserver.observe(shell);

    const onVisibility = () => {
      pageVisible = document.visibilityState === "visible";
      if (pageVisible) requestRenderRef.current();
      else {
        window.cancelAnimationFrame(frame);
        frame = 0;
        window.clearTimeout(idleTimer);
      }
    };
    document.addEventListener("visibilitychange", onVisibility);

    resize();
    applyParts();
    requestRenderRef.current();

    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(idleTimer);
      resizeObserver.disconnect();
      heroObserver.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      parts.forEach((part) => part.geometry.dispose());
      [ceramic, optical, aluminum, graphite, frosted].forEach((material) => material.dispose());
      environment.dispose();
      pmrem.dispose();
      renderer.dispose();
      requestRenderRef.current = () => undefined;
    };
  }, []);

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "touch") return;
    const rect = event.currentTarget.getBoundingClientRect();
    const dx = event.clientX - (rect.left + rect.width / 2);
    const dy = event.clientY - (rect.top + rect.height / 2);
    const distance = Math.hypot(dx, dy);
    const range = Math.max(rect.width, rect.height) * 0.54;
    targetExplode.current = clamp(1 - distance / range) * 0.82;
    event.currentTarget.style.setProperty("--pointer-x", `${clamp(dx / rect.width + 0.5) * 100}%`);
    event.currentTarget.style.setProperty("--pointer-y", `${clamp(dy / rect.height + 0.5) * 100}%`);
    requestRenderRef.current();
  };

  const onPointerLeave = () => {
    if (!tapped.current) targetExplode.current = 0;
    requestRenderRef.current();
  };

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "touch") return;
    tapped.current = !tapped.current;
    targetExplode.current = tapped.current ? 0.72 : 0;
    requestRenderRef.current();
  };

  return (
    <div
      ref={shellRef}
      className="research-core-realtime"
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      onPointerDown={onPointerDown}
    >
      <canvas ref={canvasRef} />
    </div>
  );
}
