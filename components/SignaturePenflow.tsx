"use client";

import { useEffect, useRef, useState } from "react";
import { Penflow } from "penflow/react";
import { INTRO_COMPLETE_EVENT } from "./intro-events";

const BRITTANY_SIGNATURE_FONT =
  "https://raw.githubusercontent.com/sonnylazuardi/deliciasonny.com/master/static/fonts/BrittanySignature.ttf";

export function SignaturePenflow() {
  const [started, setStarted] = useState(false);
  const [playheadKey, setPlayheadKey] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    const start = () => {
      if (startedRef.current) return;
      startedRef.current = true;
      setPlayheadKey((current) => current + 1);
      setStarted(true);
    };

    window.addEventListener(INTRO_COMPLETE_EVENT, start);

    const frame = window.requestAnimationFrame(() => {
      const introOpen = document.body.classList.contains("intro-open");
      const played = window.sessionStorage.getItem("portfolio-v12-home-intro-played") === "true";
      if (!introOpen && played) start();
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
    <div className={`hero-signature-wrap${started ? " is-started" : ""}`} aria-hidden="true">
      <div className="hero-signature-stage">
        <Penflow
          text="Dat."
          fontUrl={BRITTANY_SIGNATURE_FONT}
          className="hero-signature-penflow"
          color="#FFFFFF"
          size={182}
          speed={1.6}
          quality="high"
          seed="dong-thanh-dat-signature"
          brushScale={0.064}
          animate={started}
          incremental={false}
          playheadKey={playheadKey}
        />
      </div>
    </div>
  );
}
