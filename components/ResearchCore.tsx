"use client";

import { useEffect, useRef, useState, type CSSProperties, type PointerEvent } from "react";
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
const easeOut = (value: number) => 1 - Math.pow(1 - clamp(value), 4);

export function ResearchCore() {
  const shellRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const heroVisibleRef = useRef(true);
  const pageVisibleRef = useRef(true);
  const pointerExplodeRef = useRef(0);
  const tappedRef = useRef(false);
  const introStartedRef = useRef(0);
  const canSkipRef = useRef(false);
  const [introVisible, setIntroVisible] = useState(true);
  const [introFinishing, setIntroFinishing] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const query = new URLSearchParams(window.location.search);
    const forceIntro = query.get("intro") === "1";
    const forceExploded = query.get("explode") === "1";
    const navigation = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming | undefined;
    const played = window.sessionStorage.getItem("portfolio-v3-intro-played") === "true";
    const skip = forceExploded || (!forceIntro && played && navigation?.type !== "reload");
    const mobile = window.matchMedia("(max-width: 620px)").matches;
    const duration = reduced ? 520 : mobile ? 3400 : 4200;

    if (skip) {
      const immediate = window.setTimeout(() => setIntroVisible(false), 0);
      return () => window.clearTimeout(immediate);
    }

    document.body.classList.add("intro-open");
    window.sessionStorage.setItem("portfolio-v3-intro-played", "true");
    introStartedRef.current = performance.now();

    const skipReady = window.setTimeout(() => {
      canSkipRef.current = true;
    }, reduced ? 0 : 1000);
    const finishCue = window.setTimeout(() => setIntroFinishing(true), duration * 0.72);
    const finish = window.setTimeout(() => {
      setIntroVisible(false);
      document.body.classList.remove("intro-open");
    }, duration);

    return () => {
      window.clearTimeout(skipReady);
      window.clearTimeout(finishCue);
      window.clearTimeout(finish);
      document.body.classList.remove("intro-open");
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const shell = shellRef.current;
    if (!canvas || !shell) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mobile = window.matchMedia("(max-width: 620px)").matches;
    if (new URLSearchParams(window.location.search).get("explode") === "1") {
      pointerExplodeRef.current = 0.92;
    }
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: !mobile,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, mobile ? 1.25 : 1.6));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.08;
    renderer.setClearColor(0x000000, 0);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
    camera.position.set(0, 0.1, 8.7);

    const pmrem = new THREE.PMREMGenerator(renderer);
    const environment = pmrem.fromScene(new RoomEnvironment(), 0.035).texture;
    scene.environment = environment;

    const group = new THREE.Group();
    group.rotation.set(-0.12, -0.34, 0.06);
    scene.add(group);

    const ceramic = new THREE.MeshPhysicalMaterial({
      color: 0xf5f5f2,
      roughness: 0.17,
      metalness: 0.04,
      clearcoat: 1,
      clearcoatRoughness: 0.12,
      envMapIntensity: 1.3,
    });
    const aluminum = new THREE.MeshPhysicalMaterial({
      color: 0xaeb1b5,
      roughness: 0.2,
      metalness: 0.94,
      clearcoat: 0.35,
      envMapIntensity: 1.65,
    });
    const graphite = new THREE.MeshPhysicalMaterial({
      color: 0x111216,
      roughness: 0.19,
      metalness: 0.76,
      clearcoat: 0.8,
      clearcoatRoughness: 0.15,
      envMapIntensity: 1.2,
    });
    const smokedGlass = new THREE.MeshPhysicalMaterial({
      color: 0x8f969d,
      roughness: 0.08,
      metalness: 0.05,
      transmission: 0.52,
      thickness: 0.42,
      transparent: true,
      opacity: 0.72,
      clearcoat: 1,
      envMapIntensity: 1.5,
    });
    const optical = new THREE.MeshPhysicalMaterial({
      color: 0xdde5ea,
      roughness: 0.03,
      metalness: 0.02,
      transmission: 0.78,
      thickness: 0.28,
      ior: 1.42,
      transparent: true,
      opacity: 0.86,
      clearcoat: 1,
      envMapIntensity: 1.7,
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
      mesh.castShadow = false;
      mesh.receiveShadow = false;
      mesh.userData = {
        base: new THREE.Vector3(...base),
        offset: new THREE.Vector3(...offset),
        rotation: new THREE.Euler(...rotation),
        rotationOffset: new THREE.Euler(...rotationOffset),
      };
      parts.push(mesh);
      group.add(mesh);
      return mesh;
    };

    addPart(
      new THREE.SphereGeometry(1, 56, 40),
      ceramic,
      [0, 0, 0],
      [0, 0, 0.18],
      [0.08, -0.12, 0],
      [0, 0.1, 0],
      [1.12, 0.72, 0.58],
    );
    addPart(new THREE.TorusGeometry(0.98, 0.12, 28, 96), optical, [0, 0.01, 0.45], [0.72, 0.04, 1.08], [0, 0, 0], [0.08, 0.18, 0.04]);
    addPart(new THREE.TorusGeometry(0.72, 0.055, 22, 88), graphite, [0, 0, 0.57], [-0.62, -0.22, 0.78], [0.02, 0.05, 0], [0.08, -0.14, 0.06]);
    addPart(new THREE.TorusGeometry(1.42, 0.045, 18, 112), aluminum, [0, 0, -0.06], [-1.12, 0.62, -0.42], [0.35, 0.56, 0.16], [-0.24, -0.32, -0.08]);
    addPart(new THREE.CylinderGeometry(1.08, 1.08, 0.075, 72), smokedGlass, [0, 0, -0.58], [0.88, -0.42, -1.18], [Math.PI / 2, 0, 0], [0.12, -0.08, 0.04], [1, 0.78, 1]);
    addPart(new THREE.CylinderGeometry(0.045, 0.045, 2.15, 24), graphite, [0, 0.03, -0.24], [1.08, 0.34, -0.45], [0, 0, Math.PI / 2], [0.06, 0.12, 0.12]);
    addPart(new THREE.SphereGeometry(0.22, 36, 28), aluminum, [-1.18, 0.56, 0.08], [-1.18, 0.88, 0.34], [0, 0, 0], [0.2, -0.25, 0.1]);
    addPart(new THREE.SphereGeometry(0.16, 32, 24), optical, [1.18, 0.52, 0.06], [1.25, 0.94, 0.26], [0, 0, 0], [-0.14, 0.28, -0.1]);
    addPart(new THREE.SphereGeometry(0.13, 32, 24), graphite, [0.92, -0.82, 0.02], [1.02, -1.18, 0.18], [0, 0, 0], [0.08, 0.2, 0.12]);

    const key = new THREE.DirectionalLight(0xffffff, 4.6);
    key.position.set(-4.5, 5, 6);
    scene.add(key);
    const fill = new THREE.DirectionalLight(0xcbd8e2, 2.25);
    fill.position.set(5, 1.5, 4);
    scene.add(fill);
    const rim = new THREE.PointLight(0xf5fbff, 34, 18, 2);
    rim.position.set(1.5, 3.2, -4.5);
    scene.add(rim);
    const lower = new THREE.PointLight(0xaab7c3, 9, 14, 2);
    lower.position.set(-2, -3.5, 3);
    scene.add(lower);

    const shadow = new THREE.Mesh(
      new THREE.CircleGeometry(1.55, 64),
      new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.13, depthWrite: false }),
    );
    shadow.scale.set(1.65, 0.24, 1);
    shadow.position.set(0, -1.62, -0.9);
    scene.add(shadow);

    let width = 1;
    let height = 1;
    const resize = () => {
      const rect = shell.getBoundingClientRect();
      width = Math.max(1, Math.round(rect.width));
      height = Math.max(1, Math.round(rect.height));
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(shell);
    resize();

    const home = document.getElementById("home");
    const heroObserver = new IntersectionObserver(([entry]) => {
      heroVisibleRef.current = entry.isIntersecting;
    }, { threshold: 0.02 });
    if (home) heroObserver.observe(home);

    const onVisibility = () => {
      pageVisibleRef.current = document.visibilityState === "visible";
    };
    document.addEventListener("visibilitychange", onVisibility);

    let animationFrame = 0;
    let renderedExplode = 0;
    let last = performance.now();
    const introDuration = mobile ? 3400 : 4200;

    const render = (now: number) => {
      const delta = Math.min(48, now - last);
      last = now;
      const elapsed = introStartedRef.current ? now - introStartedRef.current : introDuration;
      const introActive = elapsed < introDuration && document.body.classList.contains("intro-open") && !reduced;

      if (pageVisibleRef.current && (introActive || heroVisibleRef.current)) {
        let cinematicExplode = 0;
        if (introActive) {
          if (elapsed > introDuration * 0.38 && elapsed < introDuration * 0.66) {
            cinematicExplode = easeOut((elapsed - introDuration * 0.38) / (introDuration * 0.16));
          }
          if (elapsed >= introDuration * 0.58) {
            cinematicExplode *= 1 - easeOut((elapsed - introDuration * 0.58) / (introDuration * 0.2));
          }
        }
        const desiredExplode = introActive ? cinematicExplode : pointerExplodeRef.current;
        const damping = 1 - Math.exp(-delta / (introActive ? 145 : 190));
        renderedExplode += (desiredExplode - renderedExplode) * damping;

        parts.forEach((part) => {
          const data = part.userData;
          part.position.copy(data.base).addScaledVector(data.offset, renderedExplode);
          part.rotation.set(
            data.rotation.x + data.rotationOffset.x * renderedExplode,
            data.rotation.y + data.rotationOffset.y * renderedExplode,
            data.rotation.z + data.rotationOffset.z * renderedExplode,
          );
        });

        if (introActive) {
          const reveal = easeOut(elapsed / (introDuration * 0.43));
          key.intensity = 0.55 + reveal * 4.05;
          fill.intensity = 0.15 + reveal * 2.1;
          lower.intensity = reveal * 9;
          group.rotation.y = -0.78 + reveal * 0.5 + renderedExplode * 0.08;
          group.rotation.x = 0.08 - reveal * 0.2;
          const cameraMove = easeOut(elapsed / (introDuration * 0.74));
          camera.position.z = 7.75 + cameraMove * 0.95;
        } else {
          const idle = now / 1000;
          group.rotation.y = -0.46 + Math.sin(idle * 0.58) * 0.026 + renderedExplode * 0.06;
          group.rotation.x = -0.12 + Math.cos(idle * 0.43) * 0.014;
          group.position.y = Math.sin(idle * 0.68) * 0.035;
          camera.position.z = mobile ? 9.25 : 8.7;
          key.intensity = 4.6;
          fill.intensity = 2.25;
          lower.intensity = 9;
        }

        renderer.render(scene, camera);
      }
      animationFrame = window.requestAnimationFrame(render);
    };
    animationFrame = window.requestAnimationFrame(render);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
      heroObserver.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      parts.forEach((part) => part.geometry.dispose());
      [ceramic, aluminum, graphite, smokedGlass, optical].forEach((material) => material.dispose());
      shadow.geometry.dispose();
      (shadow.material as THREE.Material).dispose();
      environment.dispose();
      pmrem.dispose();
      renderer.dispose();
    };
  }, []);

  const finishIntro = () => {
    if (!canSkipRef.current) return;
    setIntroFinishing(true);
    window.setTimeout(() => {
      document.body.classList.remove("intro-open");
      setIntroVisible(false);
    }, 420);
  };

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (introVisible || event.pointerType === "touch") return;
    const rect = event.currentTarget.getBoundingClientRect();
    const dx = event.clientX - (rect.left + rect.width / 2);
    const dy = event.clientY - (rect.top + rect.height / 2);
    const distance = Math.hypot(dx, dy);
    const range = Math.max(rect.width, rect.height) * 0.58;
    pointerExplodeRef.current = clamp(1 - distance / range);
    event.currentTarget.style.setProperty("--pointer-x", `${clamp((dx / rect.width) + 0.5) * 100}%`);
    event.currentTarget.style.setProperty("--pointer-y", `${clamp((dy / rect.height) + 0.5) * 100}%`);
  };

  const onPointerLeave = () => {
    if (!tappedRef.current) pointerExplodeRef.current = 0;
  };

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (introVisible) {
      finishIntro();
      return;
    }
    if (event.pointerType === "touch") {
      tappedRef.current = !tappedRef.current;
      pointerExplodeRef.current = tappedRef.current ? 0.78 : 0;
    }
  };

  return (
    <div
      className={`research-experience${introVisible ? " is-intro" : " is-hero"}${introFinishing ? " is-finishing" : ""}`}
      aria-hidden="true"
      onPointerDown={introVisible ? onPointerDown : undefined}
      style={{ "--intro-duration": "4.2s" } as CSSProperties}
    >
      {introVisible ? <div className="intro-backdrop" /> : null}
      <div
        ref={shellRef}
        className="research-canvas-shell"
        onPointerMove={onPointerMove}
        onPointerLeave={onPointerLeave}
        onPointerDown={onPointerDown}
      >
        <canvas ref={canvasRef} />
        <span className="research-core-reflection" />
      </div>
    </div>
  );
}
