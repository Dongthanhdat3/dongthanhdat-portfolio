"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type CSSProperties, type PointerEvent } from "react";

const COMPLETE_EVENT = "portfolio:intro-complete";

export function IntroPortrait() {
  const [visible, setVisible] = useState(true);
  const [finishing, setFinishing] = useState(false);
  const canSkip = useRef(false);

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const forced = query.get("intro") === "1";
    const skippedByQuery = query.get("skipIntro") === "1";
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mobile = window.matchMedia("(max-width: 620px)").matches;
    const navigation = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming | undefined;
    const played = window.sessionStorage.getItem("portfolio-v4-intro-played") === "true";
    const shouldSkip = skippedByQuery || (!forced && played && navigation?.type !== "reload");
    const memory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory ?? 8;
    const constrained = navigator.hardwareConcurrency <= 4 || memory <= 4;
    const duration = reduced ? 520 : mobile || constrained ? 3800 : 5000;

    const complete = () => {
      document.body.classList.remove("intro-open");
      setVisible(false);
      window.dispatchEvent(new Event(COMPLETE_EVENT));
    };

    if (shouldSkip) {
      const immediate = window.setTimeout(complete, 0);
      return () => window.clearTimeout(immediate);
    }

    document.body.classList.add("intro-open");
    document.documentElement.style.setProperty("--portrait-intro-duration", `${duration}ms`);
    window.sessionStorage.setItem("portfolio-v4-intro-played", "true");

    const preloadCore = window.setTimeout(
      () => void import("./ResearchCore"),
      reduced ? 0 : Math.round(duration * 0.58),
    );
    const skipReady = window.setTimeout(() => { canSkip.current = true; }, reduced ? 0 : 1000);
    const finishCue = window.setTimeout(() => setFinishing(true), duration - (reduced ? 120 : 950));
    const finish = window.setTimeout(complete, duration);

    return () => {
      window.clearTimeout(preloadCore);
      window.clearTimeout(skipReady);
      window.clearTimeout(finishCue);
      window.clearTimeout(finish);
      document.body.classList.remove("intro-open");
    };
  }, []);

  const skip = (event: PointerEvent<HTMLDivElement>) => {
    if (!canSkip.current || event.pointerType === "mouse" && event.button !== 0) return;
    setFinishing(true);
    window.setTimeout(() => {
      document.body.classList.remove("intro-open");
      setVisible(false);
      window.dispatchEvent(new Event(COMPLETE_EVENT));
    }, 520);
  };

  if (!visible) return null;

  return (
    <div
      className={`portrait-intro${finishing ? " is-finishing" : ""}`}
      style={{ "--intro-parallax-x": "0px", "--intro-parallax-y": "0px" } as CSSProperties}
      onPointerDown={skip}
      aria-hidden="true"
    >
      <div className="portrait-intro-field" />
      <div className="portrait-intro-rim" />

      <div className="portrait-intro-name portrait-intro-name-back">
        <span>DONG</span>
        <span className="is-outline">THANH</span>
        <span>DAT</span>
      </div>

      <div className="portrait-intro-person">
        <div className="portrait-intro-shadow" />
        <Image
          src="/images/avatar-cutout.webp"
          alt=""
          width={1440}
          height={1800}
          sizes="(max-width: 620px) 94vw, 760px"
          priority
        />
      </div>

      <div className="portrait-intro-name portrait-intro-name-front">
        <span className="is-ghost">DONG</span>
        <span className="is-outline">THANH</span>
        <span>DAT</span>
      </div>

      <svg className="portrait-signature" viewBox="0 0 220 92" role="presentation">
        <path d="M18 70 C35 38, 45 17, 61 16 C75 15, 76 27, 68 42 C58 60, 40 70, 21 70 M27 66 C46 59, 59 46, 65 31" />
        <path d="M82 56 C86 42, 99 37, 107 43 C114 49, 108 61, 98 63 C89 65, 84 59, 89 51 C93 45, 101 44, 108 47 M109 46 C106 55, 108 63, 117 61 C125 59, 132 52, 139 44" />
        <path d="M132 34 C147 33, 164 30, 180 25 M154 22 C148 35, 139 51, 139 60 C139 68, 149 65, 166 53" />
      </svg>

      <span className="portrait-intro-hint">Chạm để bỏ qua</span>
    </div>
  );
}

export { COMPLETE_EVENT };
