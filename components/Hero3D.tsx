"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function Hero3D() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(27, 1, 0.1, 100);
    camera.position.set(0, 0.1, 7.4);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.08;
    mount.appendChild(renderer.domElement);

    const root = new THREE.Group();
    root.rotation.set(-0.08, 0.34, 0.04);
    scene.add(root);

    const ambient = new THREE.AmbientLight(0xbfc7d5, 1.6);
    scene.add(ambient);

    const key = new THREE.DirectionalLight(0xffffff, 3.4);
    key.position.set(4, 5, 7);
    scene.add(key);

    const rim = new THREE.PointLight(0x9aa9c4, 11, 10, 2.2);
    rim.position.set(-3.2, 1.5, 2.6);
    scene.add(rim);

    const coreMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x9ea5af,
      metalness: 0.88,
      roughness: 0.18,
      clearcoat: 0.82,
      clearcoatRoughness: 0.16,
      emissive: 0x11141a,
      emissiveIntensity: 0.24,
    });

    const core = new THREE.Mesh(new THREE.IcosahedronGeometry(1.34, 5), coreMaterial);
    root.add(core);

    const inner = new THREE.Mesh(
      new THREE.SphereGeometry(0.84, 48, 48),
      new THREE.MeshPhysicalMaterial({
        color: 0x1f232b,
        metalness: 0.12,
        roughness: 0.2,
        transmission: 0.26,
        thickness: 0.44,
        clearcoat: 1,
        clearcoatRoughness: 0.08,
        emissive: 0x4a5160,
        emissiveIntensity: 0.17,
      }),
    );
    root.add(inner);

    const shell = new THREE.Mesh(
      new THREE.SphereGeometry(1.58, 64, 64),
      new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true, transparent: true, opacity: 0.075 }),
    );
    root.add(shell);

    const ringMaterial = new THREE.MeshBasicMaterial({ color: 0xf2f4f8, transparent: true, opacity: 0.45 });
    const ringA = new THREE.Mesh(new THREE.TorusGeometry(1.95, 0.012, 12, 220), ringMaterial);
    ringA.rotation.set(0.72, -0.28, 0.18);
    root.add(ringA);

    const ringB = new THREE.Mesh(new THREE.TorusGeometry(2.23, 0.009, 12, 220), ringMaterial.clone());
    (ringB.material as THREE.MeshBasicMaterial).opacity = 0.21;
    ringB.rotation.set(-0.24, 0.78, 0.46);
    root.add(ringB);

    const ringC = new THREE.Mesh(new THREE.TorusGeometry(1.68, 0.007, 12, 220), ringMaterial.clone());
    (ringC.material as THREE.MeshBasicMaterial).opacity = 0.18;
    ringC.rotation.set(1.18, 0.36, -0.28);
    root.add(ringC);

    const points = new THREE.Group();
    root.add(points);

    const nodeGeometry = new THREE.SphereGeometry(0.042, 18, 18);
    const nodeMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const nodeCount = 12;
    for (let i = 0; i < nodeCount; i += 1) {
      const angle = (i / nodeCount) * Math.PI * 2;
      const node = new THREE.Mesh(nodeGeometry, nodeMaterial);
      const radius = i % 2 === 0 ? 2.02 : 1.82;
      node.position.set(
        Math.cos(angle) * radius,
        Math.sin(angle * 1.7) * 0.32,
        Math.sin(angle) * radius,
      );
      points.add(node);
    }

    const particleCount = 150;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i += 1) {
      const r = 2.25 + Math.random() * 1.7;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.cos(phi);
      positions[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta);
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const particleMaterial = new THREE.PointsMaterial({ color: 0xcfd5de, size: 0.018, transparent: true, opacity: 0.55, sizeAttenuation: true });
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    root.add(particles);

    const pointer = { x: 0, y: 0, targetX: 0, targetY: 0 };
    let hovered = false;
    let raf = 0;
    let last = performance.now();
    let pulse = 0;

    const onPointerMove = (event: PointerEvent) => {
      const rect = mount.getBoundingClientRect();
      pointer.targetX = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      pointer.targetY = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    };

    const onPointerEnter = () => {
      hovered = true;
    };

    const onPointerLeave = () => {
      hovered = false;
      pointer.targetX = 0;
      pointer.targetY = 0;
    };

    const onClick = () => {
      pulse = 1;
    };

    mount.addEventListener("pointermove", onPointerMove);
    mount.addEventListener("pointerenter", onPointerEnter);
    mount.addEventListener("pointerleave", onPointerLeave);
    mount.addEventListener("click", onClick);

    const resize = () => {
      const width = Math.max(1, mount.clientWidth);
      const height = Math.max(1, mount.clientHeight);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(mount);
    resize();

    const tick = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;

      pointer.x += (pointer.targetX - pointer.x) * Math.min(1, dt * 5.5);
      pointer.y += (pointer.targetY - pointer.y) * Math.min(1, dt * 5.5);

      root.rotation.y += dt * (hovered ? 0.13 : 0.06);
      root.rotation.x += dt * 0.028;
      root.rotation.z = THREE.MathUtils.lerp(root.rotation.z, pointer.x * 0.08, 0.08);
      root.position.x = THREE.MathUtils.lerp(root.position.x, pointer.x * 0.13, 0.08);
      root.position.y = THREE.MathUtils.lerp(root.position.y, -pointer.y * 0.1, 0.08);

      ringA.rotation.z += dt * 0.16;
      ringB.rotation.x += dt * -0.11;
      ringC.rotation.y += dt * 0.13;
      particles.rotation.y += dt * 0.018;
      points.rotation.y += dt * 0.035;

      const hoverBoost = hovered ? 1 : 0;
      (rim as THREE.PointLight).intensity = 11 + hoverBoost * 3 + pulse * 5;
      (coreMaterial as THREE.MeshPhysicalMaterial).emissiveIntensity = 0.24 + hoverBoost * 0.12 + pulse * 0.38;
      (particleMaterial as THREE.PointsMaterial).opacity = 0.55 + hoverBoost * 0.16;
      root.scale.setScalar(1 + (hovered ? 0.028 : 0) + pulse * 0.055);

      pulse *= Math.pow(0.035, dt);

      renderer.render(scene, camera);
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      resizeObserver.disconnect();
      mount.removeEventListener("pointermove", onPointerMove);
      mount.removeEventListener("pointerenter", onPointerEnter);
      mount.removeEventListener("pointerleave", onPointerLeave);
      mount.removeEventListener("click", onClick);
      renderer.dispose();
      core.geometry.dispose();
      coreMaterial.dispose();
      inner.geometry.dispose();
      (inner.material as THREE.Material).dispose();
      shell.geometry.dispose();
      (shell.material as THREE.Material).dispose();
      ringA.geometry.dispose();
      ringA.material.dispose();
      ringB.geometry.dispose();
      ringB.material.dispose();
      ringC.geometry.dispose();
      ringC.material.dispose();
      nodeGeometry.dispose();
      nodeMaterial.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="hero-3d" aria-hidden="true" />;
}
