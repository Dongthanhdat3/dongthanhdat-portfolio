"use client";

import { useEffect, useRef, type PointerEvent } from "react";
import * as THREE from "three";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";
import { INTRO_COMPLETE_EVENT, INTRO_REVEAL_EVENT } from "./intro-events";

type CorePart = THREE.Mesh & {
  userData: {
    base: THREE.Vector3;
    offset: THREE.Vector3;
    rotation: THREE.Euler;
    rotationOffset: THREE.Euler;
  };
};

type CachedBounds = {
  left: number;
  top: number;
  width: number;
  height: number;
};

const clamp = (value: number, min = 0, max = 1) => Math.min(max, Math.max(min, value));
const easeOut = (value: number) => 1 - Math.pow(1 - clamp(value), 4);
const smooth = (value: number) => {
  const progress = clamp(value);
  return progress * progress * (3 - 2 * progress);
};

export function ResearchCore() {
  const realtimeRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const zoneRef = useRef<HTMLDivElement>(null);
  const boundsRef = useRef<CachedBounds | null>(null);
  const pointerRef = useRef({ x: 0, y: 0, inside: false, dirty: false });
  const targetProximityRef = useRef(0);
  const targetTiltRef = useRef({ x: 0, y: 0 });
  const tappedRef = useRef(false);
  const requestRenderRef = useRef<() => void>(() => undefined);

  useEffect(() => {
    const realtime = realtimeRef.current;
    const canvas = canvasRef.current;
    const zone = zoneRef.current;
    const experience = realtime?.closest<HTMLElement>(".research-core-experience");
    const hero = document.getElementById("home");
    if (!realtime || !canvas || !zone || !experience || !hero) return;

    const query = new URLSearchParams(window.location.search);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mobile = window.matchMedia("(max-width: 620px)").matches;
    const memory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory ?? 8;
    const constrained = navigator.hardwareConcurrency <= 4 || memory <= 4;
    const navigation = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming | undefined;
    const played = window.sessionStorage.getItem("portfolio-v5-core-intro-played") === "true";
    const forced = query.get("intro") === "1";
    const forceExploded = query.get("explode") === "1";
    const skippedByQuery = query.get("skipIntro") === "1";
    const directHomepage = window.location.pathname === "/" && !window.location.hash;
    const homepageRefresh = window.location.pathname === "/" && navigation?.type === "reload";
    const shouldPlay = !skippedByQuery && (forced || homepageRefresh || (directHomepage && !played));
    const introDuration = reduced ? 440 : mobile || constrained ? 2950 : 3500;

    if (shouldPlay) {
      document.body.classList.add("intro-open");
      experience.classList.add("is-intro");
      window.sessionStorage.setItem("portfolio-v5-core-intro-played", "true");
    } else {
      experience.classList.add("is-hero");
    }

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: !mobile,
        alpha: true,
        powerPreference: "high-performance",
        precision: "mediump",
      });
    } catch {
      document.body.classList.remove("intro-open");
      experience.classList.remove("is-intro");
      experience.classList.add("is-hero", "is-fallback");
      window.dispatchEvent(new Event(INTRO_REVEAL_EVENT));
      window.dispatchEvent(new Event(INTRO_COMPLETE_EVENT));
      return;
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, mobile ? 1.2 : 1.5));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = shouldPlay ? 0.2 : 1.02;
    renderer.setClearColor(0x000000, 0);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(33, 1, 0.1, 60);
    camera.position.set(0, 0.06, shouldPlay ? 5.15 : mobile ? 9.5 : 8.35);

    const pmrem = new THREE.PMREMGenerator(renderer);
    const environment = pmrem.fromScene(new RoomEnvironment(), 0.035).texture;
    scene.environment = environment;

    const assembly = new THREE.Group();
    assembly.rotation.set(-0.075, -0.31, 0.055);
    scene.add(assembly);

    const ceramic = new THREE.MeshPhysicalMaterial({
      color: 0xebe9e4,
      roughness: 0.23,
      metalness: 0.02,
      clearcoat: 0.78,
      clearcoatRoughness: 0.2,
      envMapIntensity: 1.32,
    });
    const optical = new THREE.MeshPhysicalMaterial({
      color: 0xb9c8d0,
      roughness: 0.08,
      metalness: 0.02,
      transmission: 0.38,
      thickness: 0.18,
      ior: 1.4,
      transparent: true,
      opacity: 0.82,
      clearcoat: 1,
      envMapIntensity: 1.52,
    });
    const aluminum = new THREE.MeshStandardMaterial({
      color: 0x9b9fa5,
      roughness: 0.3,
      metalness: 0.94,
      envMapIntensity: 1.72,
    });
    const graphite = new THREE.MeshPhysicalMaterial({
      color: 0x08090b,
      roughness: 0.2,
      metalness: 0.88,
      clearcoat: 0.7,
      clearcoatRoughness: 0.16,
      envMapIntensity: 1.42,
    });
    const frosted = new THREE.MeshPhysicalMaterial({
      color: 0xc7cdd1,
      roughness: 0.38,
      metalness: 0.06,
      transmission: 0.16,
      transparent: true,
      opacity: 0.88,
      envMapIntensity: 1.16,
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

    // Insight: ceramic synthesis body and a restrained optical reading lens.
    addPart(new THREE.SphereGeometry(0.94, 40, 28), ceramic, [0, 0, 0], [0, 0, 0], [0.04, -0.1, 0], [0, 0.06, 0], [1.03, 0.86, 0.76]);
    addPart(new THREE.SphereGeometry(0.72, 36, 26), optical, [0.12, 0.02, 0.5], [0.16, 0.04, 0.84], [0.02, 0.08, 0], [0.02, 0.05, 0], [1, 0.82, 0.42]);

    // Structure: deliberately non-identical analytical frameworks.
    addPart(new THREE.TorusGeometry(1.12, 0.075, 14, 64), graphite, [0, 0.02, 0.08], [-0.88, -0.14, 0.42], [0.08, 0.3, 0.02], [0.12, -0.34, 0.08]);
    addPart(new THREE.TorusGeometry(1.48, 0.044, 12, 72), aluminum, [-0.03, 0.03, -0.02], [0.74, 0.78, -0.2], [0.62, 0.28, 0.48], [-0.3, 0.3, 0.26]);
    addPart(new THREE.TorusGeometry(1.68, 0.035, 10, 76), graphite, [0.02, -0.02, -0.16], [0.94, -0.68, -0.26], [-0.36, 0.58, -0.22], [0.26, -0.28, -0.22]);

    // Measurement: an asymmetric calibration arc prevents an atom-icon silhouette.
    addPart(new THREE.TorusGeometry(1.88, 0.021, 9, 56, Math.PI * 1.36), aluminum, [-0.05, 0.02, -0.24], [-0.74, 0.88, -0.18], [0.31, -0.5, 0.82], [-0.18, 0.24, -0.3]);

    // Observation: five calibrated respondent / data points.
    addPart(new THREE.SphereGeometry(0.18, 20, 16), aluminum, [-1.23, 0.55, 0.28], [-0.74, 0.54, 0.12]);
    addPart(new THREE.SphereGeometry(0.145, 20, 15), graphite, [1.3, 0.62, 0.1], [0.78, 0.6, 0.18]);
    addPart(new THREE.SphereGeometry(0.13, 18, 14), frosted, [1.08, -0.84, 0.3], [0.7, -0.64, 0.16]);
    addPart(new THREE.SphereGeometry(0.105, 16, 12), graphite, [-0.78, -1.02, -0.08], [-0.6, -0.6, -0.1]);
    addPart(new THREE.SphereGeometry(0.09, 16, 12), frosted, [0.2, 1.28, -0.22], [0.12, 0.74, -0.18]);

    const key = new THREE.DirectionalLight(0xffffff, shouldPlay ? 0.25 : 4.4);
    key.position.set(-4.8, 5.8, 5.2);
    scene.add(key);
    const fill = new THREE.DirectionalLight(0xa9b9c7, shouldPlay ? 0.08 : 1.35);
    fill.position.set(4.2, 1.1, 4.4);
    scene.add(fill);
    const rim = new THREE.DirectionalLight(0xffffff, shouldPlay ? 0.8 : 3.1);
    rim.position.set(1.2, 3.4, -4.6);
    scene.add(rim);

    let width = 1;
    let height = 1;
    let frame = 0;
    let idleTimer = 0;
    let visible = true;
    let pageVisible = document.visibilityState === "visible";
    let hiddenAt = 0;
    let introActive = shouldPlay;
    let introStart = performance.now();
    let introRevealed = !shouldPlay;
    let introCompleted = !shouldPlay;
    let renderedProximity = 0;
    let renderedTiltX = 0;
    let renderedTiltY = 0;
    let last = performance.now();
    let lastIdle = 0;

    if (forceExploded && !shouldPlay) {
      targetProximityRef.current = 1;
      renderedProximity = 1;
    }

    const heroX = () => mobile ? 0 : Math.min(2.26, camera.aspect * 1.27);
    const heroY = () => mobile ? -0.58 : -0.03;
    const heroScale = () => mobile ? 0.74 : 1;

    const revealHero = () => {
      if (introRevealed) return;
      introRevealed = true;
      experience.classList.add("is-transitioning");
      document.body.classList.add("intro-revealing");
      window.dispatchEvent(new Event(INTRO_REVEAL_EVENT));
    };

    const completeIntro = () => {
      if (introCompleted) return;
      introCompleted = true;
      introActive = false;
      revealHero();
      document.body.classList.remove("intro-open", "intro-revealing");
      experience.classList.remove("is-intro", "is-transitioning");
      experience.classList.add("is-hero");
      window.dispatchEvent(new Event(INTRO_COMPLETE_EVENT));
      window.setTimeout(() => cacheBounds(), 80);
    };

    const cacheBounds = () => {
      const rect = zone.getBoundingClientRect();
      boundsRef.current = { left: rect.left, top: rect.top, width: rect.width, height: rect.height };
    };

    const resize = () => {
      const rect = experience.getBoundingClientRect();
      width = Math.max(1, Math.round(rect.width));
      height = Math.max(1, Math.round(rect.height));
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      cacheBounds();
      requestRenderRef.current();
    };

    const applyParts = (explode: number) => {
      for (const part of parts) {
        const data = part.userData;
        part.position.copy(data.base).addScaledVector(data.offset, explode);
        part.rotation.set(
          data.rotation.x + data.rotationOffset.x * explode,
          data.rotation.y + data.rotationOffset.y * explode,
          data.rotation.z + data.rotationOffset.z * explode,
        );
      }
    };

    const scheduleIdle = () => {
      window.clearTimeout(idleTimer);
      if (!visible || !pageVisible || reduced || introActive) return;
      idleTimer = window.setTimeout(() => requestRenderRef.current(), 118);
    };

    const updatePointerTarget = () => {
      const pointer = pointerRef.current;
      if (!pointer.dirty) return;
      pointer.dirty = false;
      const bounds = boundsRef.current;
      if (!pointer.inside || !bounds) {
        targetProximityRef.current = 0;
        targetTiltRef.current = { x: 0, y: 0 };
        return;
      }
      const centerX = bounds.left + bounds.width * 0.52;
      const centerY = bounds.top + bounds.height * 0.5;
      const dx = pointer.x - centerX;
      const dy = pointer.y - centerY;
      const visualRadius = Math.min(bounds.width, bounds.height) * (mobile ? 0.31 : 0.3);
      const reach = mobile ? 90 : clamp(bounds.width * 0.28, 150, 220);
      const distanceOutside = Math.max(0, Math.hypot(dx, dy) - visualRadius);
      targetProximityRef.current = tappedRef.current ? 0.7 : smooth(1 - distanceOutside / reach);
      targetTiltRef.current = {
        x: clamp(-dy / Math.max(1, bounds.height * 0.5), -1, 1) * THREE.MathUtils.degToRad(2),
        y: clamp(dx / Math.max(1, bounds.width * 0.5), -1, 1) * THREE.MathUtils.degToRad(2.5),
      };
      experience.style.setProperty("--core-light-x", `${clamp((pointer.x - bounds.left) / bounds.width) * 100}%`);
      experience.style.setProperty("--core-light-y", `${clamp((pointer.y - bounds.top) / bounds.height) * 100}%`);
    };

    const render = (now: number) => {
      frame = 0;
      if (!visible || !pageVisible) return;
      const delta = Math.min(48, Math.max(1, now - last));
      last = now;
      updatePointerTarget();

      let explode = 0;
      if (introActive) {
        const progress = clamp((now - introStart) / introDuration);
        const lightReveal = easeOut((progress - 0.02) / 0.24);
        const pullBack = easeOut((progress - 0.12) / 0.26);
        const finalMove = easeOut((progress - 0.76) / 0.24);
        const explodeIn = easeOut((progress - 0.33) / 0.18);
        const assemble = smooth((progress - 0.585) / 0.215);
        explode = 0.92 * explodeIn * (1 - assemble);

        camera.position.z = 5.15 + pullBack * 1.95 + finalMove * (mobile ? 2.4 : 1.25);
        assembly.position.set(heroX() * finalMove, heroY() * finalMove, 0);
        const scale = 1 + (heroScale() - 1) * finalMove;
        assembly.scale.setScalar(scale);
        assembly.rotation.y = -0.08 - pullBack * 0.25 + finalMove * 0.03;
        assembly.rotation.x = -0.02 - pullBack * 0.055;
        assembly.rotation.z = 0.08 - pullBack * 0.025;
        renderer.toneMappingExposure = 0.18 + lightReveal * 0.84;
        key.intensity = 0.2 + lightReveal * 4.2;
        fill.intensity = 0.06 + lightReveal * 1.29;
        rim.intensity = 0.9 + lightReveal * 2.2;

        if (progress >= 0.82) revealHero();
        if (progress >= 1) completeIntro();
      } else {
        const approach = targetProximityRef.current > renderedProximity;
        const damping = 1 - Math.exp(-delta / (approach ? 180 : 280));
        renderedProximity += (targetProximityRef.current - renderedProximity) * damping;
        renderedTiltX += (targetTiltRef.current.x - renderedTiltX) * (1 - Math.exp(-delta / 250));
        renderedTiltY += (targetTiltRef.current.y - renderedTiltY) * (1 - Math.exp(-delta / 250));
        if (Math.abs(targetProximityRef.current - renderedProximity) < 0.0008) renderedProximity = targetProximityRef.current;
        explode = renderedProximity * 0.68;
        const idle = now / 1000;
        assembly.position.set(heroX(), heroY() + (reduced ? 0 : Math.sin(idle * 0.55) * 0.018), 0);
        assembly.scale.setScalar(heroScale());
        assembly.rotation.y = -0.28 + renderedTiltY + (reduced ? 0 : Math.sin(idle * 0.34) * 0.009);
        assembly.rotation.x = -0.075 + renderedTiltX;
        assembly.rotation.z = 0.055;
        camera.position.z = mobile ? 9.5 : 8.35;
        renderer.toneMappingExposure = 1.02;
        key.intensity = 4.4;
        key.position.x = -4.8 + renderedTiltY * 12;
        fill.intensity = 1.35;
        rim.intensity = 3.1;
      }

      applyParts(explode);
      renderer.render(scene, camera);

      const settling = introActive
        || Math.abs(targetProximityRef.current - renderedProximity) > 0.002
        || Math.abs(targetTiltRef.current.x - renderedTiltX) > 0.0002
        || Math.abs(targetTiltRef.current.y - renderedTiltY) > 0.0002;
      if (settling) requestRenderRef.current();
      else if (now - lastIdle > 80) {
        lastIdle = now;
        scheduleIdle();
      }
    };

    requestRenderRef.current = () => {
      if (!frame && visible && pageVisible) frame = window.requestAnimationFrame(render);
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(experience);
    resizeObserver.observe(zone);

    const heroObserver = new IntersectionObserver(([entry]) => {
      visible = entry.intersectionRatio > 0.34 || introActive;
      experience.classList.toggle("is-offscreen", !visible);
      if (visible) requestRenderRef.current();
      else {
        window.cancelAnimationFrame(frame);
        frame = 0;
        window.clearTimeout(idleTimer);
      }
    }, { threshold: [0, 0.2, 0.35, 0.6] });
    heroObserver.observe(hero);

    const onVisibility = () => {
      const nextVisible = document.visibilityState === "visible";
      if (!nextVisible) hiddenAt = performance.now();
      if (nextVisible && hiddenAt && introActive) introStart += performance.now() - hiddenAt;
      pageVisible = nextVisible;
      if (pageVisible) requestRenderRef.current();
      else {
        window.cancelAnimationFrame(frame);
        frame = 0;
        window.clearTimeout(idleTimer);
      }
    };
    document.addEventListener("visibilitychange", onVisibility);

    const onResize = () => cacheBounds();
    window.addEventListener("resize", onResize, { passive: true });

    const onWindowPointerMove = (event: globalThis.PointerEvent) => {
      if (event.pointerType === "touch" || (!visible && !introActive)) return;
      pointerRef.current.x = event.clientX;
      pointerRef.current.y = event.clientY;
      pointerRef.current.inside = true;
      pointerRef.current.dirty = true;
      requestRenderRef.current();
    };
    const onWindowPointerOut = (event: globalThis.PointerEvent) => {
      if (event.relatedTarget) return;
      pointerRef.current.inside = false;
      pointerRef.current.dirty = true;
      targetProximityRef.current = 0;
      targetTiltRef.current = { x: 0, y: 0 };
      requestRenderRef.current();
    };
    const onWindowPointerDown = (event: globalThis.PointerEvent) => {
      if (event.pointerType !== "touch" || zone.contains(event.target as Node)) return;
      tappedRef.current = false;
      targetProximityRef.current = 0;
      requestRenderRef.current();
    };
    window.addEventListener("pointermove", onWindowPointerMove, { passive: true });
    window.addEventListener("pointerout", onWindowPointerOut, { passive: true });
    window.addEventListener("pointerdown", onWindowPointerDown, { passive: true });

    experience.classList.add("has-webgl");
    resize();
    applyParts(0);
    if (!shouldPlay) {
      assembly.position.set(heroX(), heroY(), 0);
      assembly.scale.setScalar(heroScale());
      window.dispatchEvent(new Event(INTRO_REVEAL_EVENT));
      window.dispatchEvent(new Event(INTRO_COMPLETE_EVENT));
    }
    requestRenderRef.current();

    return () => {
      document.body.classList.remove("intro-open", "intro-revealing");
      window.cancelAnimationFrame(frame);
      window.clearTimeout(idleTimer);
      resizeObserver.disconnect();
      heroObserver.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onWindowPointerMove);
      window.removeEventListener("pointerout", onWindowPointerOut);
      window.removeEventListener("pointerdown", onWindowPointerDown);
      for (const part of parts) part.geometry.dispose();
      for (const material of [ceramic, optical, aluminum, graphite, frosted]) material.dispose();
      environment.dispose();
      pmrem.dispose();
      renderer.dispose();
      requestRenderRef.current = () => undefined;
    };
  }, []);

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    const experience = realtimeRef.current?.closest<HTMLElement>(".research-core-experience");
    if (experience?.classList.contains("is-intro")) return;
    if (event.pointerType !== "touch") return;
    tappedRef.current = !tappedRef.current;
    targetProximityRef.current = tappedRef.current ? 0.7 : 0;
    requestRenderRef.current();
  };

  return (
    <div ref={realtimeRef} className="research-core-realtime">
      <canvas ref={canvasRef} />
      <span className="research-core-reflection" aria-hidden="true" />
      <div
        ref={zoneRef}
        className="research-core-proximity-zone"
        onPointerDown={onPointerDown}
      />
    </div>
  );
}
