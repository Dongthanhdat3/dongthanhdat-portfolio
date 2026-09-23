"use client";

import { useEffect, useRef, useState } from "react";
import { INTRO_COMPLETE_EVENT } from "./intro-events";

// A stylised 3D chrome sculpture (Three.js/WebGL) replacing the flat
// signature mark. It is real, lit, reflective geometry — not a picture —
// so it can be rotated: it sweeps 0deg -> 90deg -> -90deg -> 0deg
// continuously at a moderate pace, and the person can grab and drag it to
// spin it themselves (with a little momentum on release). See
// signature-scene-build.ts for the geometry/scene setup.

export function SignatureScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const reveal = () => window.requestAnimationFrame(() => setReady(true));
    const prepare = window.setTimeout(() => {
      const waitingForIntro = document.body.classList.contains("intro-open");
      if (waitingForIntro) window.addEventListener(INTRO_COMPLETE_EVENT, reveal, { once: true });
      else reveal();
    }, 60);
    return () => {
      window.clearTimeout(prepare);
      window.removeEventListener(INTRO_COMPLETE_EVENT, reveal);
    };
  }, []);

  useEffect(() => {
    if (!ready) return;
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    // Skip WebGL entirely on small/touch viewports where the piece is
    // hidden anyway (see CSS), and respect prefers-reduced-motion by
    // keeping the sculpture still (drag still works) instead of
    // auto-sweeping.
    const narrow = window.matchMedia("(max-width: 1100px)").matches;
    if (narrow) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let cancelled = false;
    let handle: { dispose: () => void } | null = null;

    import("./signature-scene-build").then(({ createSignatureScene }) => {
      if (cancelled) return;
      try {
        handle = createSignatureScene(container, canvas, { reducedMotion });
      } catch (err) {
        console.error("SignatureScene init failed", err);
      }
    });

    return () => {
      cancelled = true;
      handle?.dispose();
    };
  }, [ready]);

  return (
    <div ref={containerRef} className={`signature-scene${ready ? " is-active" : ""}`} aria-hidden="true">
      <canvas ref={canvasRef} />
    </div>
  );
}
