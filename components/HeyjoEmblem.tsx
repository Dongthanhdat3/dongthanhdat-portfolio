"use client";

import { useEffect, useRef, type PointerEvent } from "react";
import * as THREE from "three";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";
import { INTRO_COMPLETE_EVENT, INTRO_REVEAL_EVENT } from "./intro-events";

const clamp = (number: number, min = 0, max = 1) => Math.min(max, Math.max(min, number));
const ease = (number: number) => 1 - Math.pow(1 - clamp(number), 4);

function markShape() {
  const shape = new THREE.Shape();
  shape.moveTo(-1.34, -0.72);
  shape.lineTo(-0.42, -0.2);
  shape.lineTo(-0.95, 1.08);
  shape.lineTo(-0.28, 0.63);
  shape.lineTo(0.12, 0.03);
  shape.lineTo(0.82, 1.23);
  shape.lineTo(0.47, 0.13);
  shape.lineTo(1.46, 0.55);
  shape.lineTo(0.4, -0.33);
  shape.lineTo(-0.08, -1.42);
  shape.lineTo(-0.06, -0.36);
  shape.lineTo(-0.92, -1.13);
  shape.lineTo(-0.33, -0.31);
  shape.closePath();
  return shape;
}

export function HeyjoEmblem() {
  const rootRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const zoneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const canvas = canvasRef.current;
    const zone = zoneRef.current;
    const experience = root?.closest<HTMLElement>(".heyjo-emblem-experience");
    const hero = document.getElementById("home");
    if (!root || !canvas || !zone || !experience || !hero) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mobile = window.matchMedia("(max-width: 620px)").matches;
    const navigation = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming | undefined;
    const directHome = window.location.pathname === "/" && !window.location.hash;
    const shouldPlay = !reduced && (navigation?.type === "reload" || (directHome && window.sessionStorage.getItem("heyjo-intro-v7") !== "1"));
    if (shouldPlay) {
      window.sessionStorage.setItem("heyjo-intro-v7", "1");
      document.body.classList.add("intro-open");
      experience.classList.add("is-intro");
    } else experience.classList.add("is-hero");

    let renderer: THREE.WebGLRenderer;
    try { renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: !mobile, powerPreference: "high-performance" }); }
    catch { experience.classList.add("is-fallback"); document.body.classList.remove("intro-open"); window.dispatchEvent(new Event(INTRO_REVEAL_EVENT)); window.dispatchEvent(new Event(INTRO_COMPLETE_EVENT)); return; }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, mobile ? 1.2 : 1.5));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.setClearColor(0x000000, 0);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(32, 1, .1, 40);
    const pmrem = new THREE.PMREMGenerator(renderer);
    const environment = pmrem.fromScene(new RoomEnvironment(), .035).texture;
    scene.environment = environment;
    const emblem = new THREE.Group();
    scene.add(emblem);
    const chrome = new THREE.MeshPhysicalMaterial({ color: 0xc4cad0, metalness: 1, roughness: .17, clearcoat: .7, clearcoatRoughness: .13, envMapIntensity: 1.65 });
    const graphite = new THREE.MeshPhysicalMaterial({ color: 0x101115, metalness: .95, roughness: .22, clearcoat: .52, clearcoatRoughness: .14, envMapIntensity: 1.3 });
    const geometry = new THREE.ExtrudeGeometry(markShape(), { depth: .34, bevelEnabled: true, bevelSegments: 4, bevelSize: .075, bevelThickness: .075, curveSegments: 12 });
    geometry.center();
    const mark = new THREE.Mesh(geometry, chrome);
    mark.rotation.set(.08, -.18, .02);
    emblem.add(mark);
    const ringA = new THREE.Mesh(new THREE.TorusGeometry(1.72, .042, 12, 96), chrome);
    ringA.rotation.set(.52, .35, -.42);
    const ringB = new THREE.Mesh(new THREE.TorusGeometry(1.98, .025, 10, 96), graphite);
    ringB.rotation.set(-.36, .68, .32);
    emblem.add(ringA, ringB);
    const key = new THREE.DirectionalLight(0xffffff, 4.8); key.position.set(-4, 5.5, 5);
    const rim = new THREE.DirectionalLight(0xbed7ff, 3.5); rim.position.set(4, 2, -5);
    const fill = new THREE.DirectionalLight(0xffffff, 1.1); fill.position.set(-1, -3, 3);
    scene.add(key, rim, fill);

    let active = true, pageVisible = document.visibilityState === "visible", frame = 0, last = performance.now(), start = performance.now(), introDone = !shouldPlay;
    let dragging = false, pointerId = -1, lastX = 0, lastY = 0, velocityX = 0, velocityY = 0;
    let current = new THREE.Quaternion(), target = new THREE.Quaternion();
    const base = new THREE.Euler(-.04, -.4, .06); target.setFromEuler(base); current.copy(target);
    const introDuration = 3500;
    const heroX = () => mobile ? 0 : Math.min(2.4, camera.aspect * 1.28);
    const heroY = () => mobile ? -.58 : -.04;

    const resize = () => { const rect = experience.getBoundingClientRect(); renderer.setSize(Math.max(1, rect.width), Math.max(1, rect.height), false); camera.aspect = rect.width / Math.max(1, rect.height); camera.updateProjectionMatrix(); };
    const render = (now: number) => {
      frame = 0; if (!active || !pageVisible) return;
      const delta = Math.min(42, now - last); last = now;
      if (shouldPlay && !introDone) {
        const p = clamp((now - start) / introDuration);
        const turn = ease((p - .12) / .53);
        const impact = ease((p - .82) / .15);
        camera.position.set(0, .05, 5.2 - impact * 1.5);
        emblem.position.set(heroX() * ease((p - .89) / .11), heroY() * ease((p - .89) / .11), 0);
        emblem.scale.setScalar(1 + impact * 1.85);
        target.setFromEuler(new THREE.Euler(.1 - turn * .08, Math.PI * .94 * turn - .4, .05 * Math.sin(turn * Math.PI)));
        key.intensity = .22 + ease((p - .1) / .3) * 4.6;
        rim.intensity = .4 + ease((p - .24) / .35) * 3.2;
        if (p > .91) window.dispatchEvent(new Event(INTRO_REVEAL_EVENT));
        if (p >= 1) { introDone = true; document.body.classList.remove("intro-open"); experience.classList.remove("is-intro"); experience.classList.add("is-hero"); window.dispatchEvent(new Event(INTRO_COMPLETE_EVENT)); }
      } else {
        const t = now / 1000;
        if (!dragging) {
          velocityX *= .91; velocityY *= .91;
          if (Math.abs(velocityX) + Math.abs(velocityY) > .00004) {
            const q = new THREE.Quaternion().setFromEuler(new THREE.Euler(velocityY, velocityX, 0)); target.multiply(q);
          }
        }
        camera.position.set(0, .06, mobile ? 8.8 : 7.9);
        emblem.position.set(heroX(), heroY() + (reduced ? 0 : Math.sin(t * .58) * .022), 0);
        emblem.scale.setScalar(mobile ? .78 : 1);
        if (!dragging && Math.abs(velocityX) + Math.abs(velocityY) < .0001) {
          const living = new THREE.Quaternion().setFromEuler(new THREE.Euler(Math.sin(t * .52) * .012, Math.sin(t * .25) * .032, 0));
          target.slerp(living.multiply(new THREE.Quaternion().setFromEuler(base)), .006);
        }
      }
      current.slerp(target, 1 - Math.exp(-delta / 88)); emblem.quaternion.copy(current);
      renderer.render(scene, camera); frame = requestAnimationFrame(render);
    };
    const observer = new IntersectionObserver(([entry]) => { active = entry.isIntersecting || experience.classList.contains("is-intro"); }, { threshold: .1 }); observer.observe(hero);
    const onVisibility = () => { pageVisible = document.visibilityState === "visible"; if (pageVisible && !frame) frame = requestAnimationFrame(render); };
    const onDown = (event: globalThis.PointerEvent) => { if (experience.classList.contains("is-intro")) return; dragging = true; pointerId = event.pointerId; lastX = event.clientX; lastY = event.clientY; velocityX = velocityY = 0; zone.setPointerCapture(pointerId); zone.classList.add("is-dragging"); };
    const onMove = (event: globalThis.PointerEvent) => { if (!dragging || event.pointerId !== pointerId) return; const dx = event.clientX - lastX, dy = event.clientY - lastY; lastX = event.clientX; lastY = event.clientY; velocityX = dx * .007; velocityY = dy * .007; target.premultiply(new THREE.Quaternion().setFromEuler(new THREE.Euler(velocityY, velocityX, 0))); };
    const onUp = (event: globalThis.PointerEvent) => { if (event.pointerId !== pointerId) return; dragging = false; zone.releasePointerCapture(pointerId); zone.classList.remove("is-dragging"); };
    const ro = new ResizeObserver(resize); ro.observe(experience); resize(); frame = requestAnimationFrame(render);
    document.addEventListener("visibilitychange", onVisibility); zone.addEventListener("pointerdown", onDown); zone.addEventListener("pointermove", onMove); zone.addEventListener("pointerup", onUp); zone.addEventListener("pointercancel", onUp);
    return () => { cancelAnimationFrame(frame); observer.disconnect(); ro.disconnect(); document.removeEventListener("visibilitychange", onVisibility); zone.removeEventListener("pointerdown", onDown); zone.removeEventListener("pointermove", onMove); zone.removeEventListener("pointerup", onUp); zone.removeEventListener("pointercancel", onUp); geometry.dispose(); ringA.geometry.dispose(); ringB.geometry.dispose(); chrome.dispose(); graphite.dispose(); environment.dispose(); pmrem.dispose(); renderer.dispose(); };
  }, []);

  return <div ref={rootRef} className="heyjo-emblem-realtime"><canvas ref={canvasRef} /><div ref={zoneRef} className="heyjo-emblem-zone" onPointerDown={(event: PointerEvent<HTMLDivElement>) => event.stopPropagation()} /></div>;
}
