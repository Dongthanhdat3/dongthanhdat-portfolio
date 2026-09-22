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
    const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 100);
    camera.position.set(0, 0.12, 8.7);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 3));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.08;
    mount.appendChild(renderer.domElement);

    const root = new THREE.Group();
    root.rotation.set(-0.08, 0.34, 0.04);
    scene.add(root);

    const ambient = new THREE.AmbientLight(0xbfc7d5, 1.35);
    scene.add(ambient);

    const key = new THREE.DirectionalLight(0xffffff, 4.4);
    key.position.set(4.8, 5.4, 7.8);
    key.castShadow = true;
    scene.add(key);

    const rim = new THREE.PointLight(0x9aa9c4, 13, 11, 2.0);
    rim.position.set(-3.4, 1.7, 2.8);
    scene.add(rim);

    const fill = new THREE.PointLight(0xdce6ff, 5.5, 9, 2);
    fill.position.set(3.2, -1.8, 3.6);
    scene.add(fill);

    const topLight = new THREE.PointLight(0xffffff, 3.5, 7, 2);
    topLight.position.set(0.5, 4.2, 2.4);
    scene.add(topLight);

    const coreMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x9ea5af,
      metalness: 0.88,
      roughness: 0.18,
      clearcoat: 0.82,
      clearcoatRoughness: 0.16,
      emissive: 0x11141a,
      emissiveIntensity: 0.24,
    });

    const core = new THREE.Mesh(new THREE.IcosahedronGeometry(1.34, 6), coreMaterial);
    core.castShadow = true;
    core.receiveShadow = true;
    root.add(core);

    const inner = new THREE.Mesh(
      new THREE.SphereGeometry(0.84, 72, 72),
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
    inner.castShadow = true;
    inner.receiveShadow = true;
    root.add(inner);

    const shellGeometry = new THREE.SphereGeometry(1.60, 96, 72);
    const shellMaterial = new THREE.MeshBasicMaterial({ color: 0xf7f9fd, wireframe: true, transparent: true, opacity: 0.09, depthWrite: false });
    const shell = new THREE.Mesh(shellGeometry, shellMaterial);
    root.add(shell);

    const shellHalo = new THREE.Mesh(
      new THREE.SphereGeometry(1.69, 72, 54),
      new THREE.MeshBasicMaterial({ color: 0x9ca9bd, transparent: true, opacity: 0.035, side: THREE.BackSide, depthWrite: false }),
    );
    root.add(shellHalo);

    const ringMaterial = new THREE.MeshBasicMaterial({ color: 0xf5f7fb, transparent: true, opacity: 0.38, depthWrite: false });
    const ringA = new THREE.Mesh(new THREE.TorusGeometry(1.95, 0.011, 16, 320), ringMaterial);
    ringA.rotation.set(0.72, -0.28, 0.18);
    root.add(ringA);

    const ringB = new THREE.Mesh(new THREE.TorusGeometry(2.22, 0.008, 16, 320), ringMaterial.clone());
    (ringB.material as THREE.MeshBasicMaterial).opacity = 0.21;
    ringB.rotation.set(-0.24, 0.78, 0.46);
    root.add(ringB);

    const ringC = new THREE.Mesh(new THREE.TorusGeometry(1.68, 0.006, 16, 320), ringMaterial.clone());
    (ringC.material as THREE.MeshBasicMaterial).opacity = 0.18;
    ringC.rotation.set(1.18, 0.36, -0.28);
    root.add(ringC);

    const points = new THREE.Group();
    root.add(points);

    const nodeGeometry = new THREE.SphereGeometry(0.044, 24, 24);
    const nodeMaterial = new THREE.MeshPhysicalMaterial({ color: 0xffffff, metalness: 0.25, roughness: 0.22, clearcoat: 0.7, clearcoatRoughness: 0.1, emissive: 0x777f8d, emissiveIntensity: 0.14 });
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

    const particleCount = 220;
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
    const particleMaterial = new THREE.PointsMaterial({ color: 0xd6dce7, size: 0.018, transparent: true, opacity: 0.48, sizeAttenuation: true, depthWrite: false });
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
      (rim as THREE.PointLight).intensity = 13 + hoverBoost * 3 + pulse * 5;
      (coreMaterial as THREE.MeshPhysicalMaterial).emissiveIntensity = 0.24 + hoverBoost * 0.12 + pulse * 0.38;
      (particleMaterial as THREE.PointsMaterial).opacity = 0.48 + hoverBoost * 0.18;
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
      shellHalo.geometry.dispose();
      (shellHalo.material as THREE.Material).dispose();
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
