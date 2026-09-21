"use client";

import { useEffect, useRef, useState } from "react";
import { INTRO_COMPLETE_EVENT } from "./intro-events";

/**
 * Build-safe signature renderer.
 * Uses the Brittany Signature typeface in the browser and a layered write-on
 * animation; no third-party animation package is required.
 */
export function SignaturePenflow() {
  const [started, setStarted] = useState(false);
  const startedRef = useRef(false);

  useEffect(() => {
    const start = () => {
      if (startedRef.current) return;
      startedRef.current = true;
      setStarted(true);
    };

    window.addEventListener(INTRO_COMPLETE_EVENT, start);

    const frame = window.requestAnimationFrame(() => {
      const introOpen = document.body.classList.contains("intro-open");
      if (!introOpen) start();
    });

    const fallback = window.setTimeout(() => {
      if (!document.body.classList.contains("intro-open")) start();
    }, 2350);

    return () => {
      window.removeEventListener(INTRO_COMPLETE_EVENT, start);
      window.cancelAnimationFrame(frame);
      window.clearTimeout(fallback);
    };
  }, []);

  return (
    <div
      className={`hero-signature-wrap${started ? " is-started" : ""}`}
      aria-hidden="true"
    >
      <div className="hero-signature-stage">
        <div className="hero-signature-writing" aria-hidden="true">
          <span className="hero-signature-text">Dat.</span>
          <span className="hero-signature-pen-tip" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}
