"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type PointerEvent } from "react";

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
      onPointerDown={skip}
      aria-hidden="true"
    >
      <div className="portrait-intro-artwork">
        <Image
          src="/images/home-intro.webp"
          alt=""
          width={2560}
          height={1441}
          sizes="100vw"
          priority
        />
      </div>
      <span className="portrait-intro-hint">Chạm để bỏ qua</span>
    </div>
  );
}

export { COMPLETE_EVENT };
