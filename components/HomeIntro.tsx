"use client";

import { useEffect, useState } from "react";
import { INTRO_COMPLETE_EVENT, INTRO_REVEAL_EVENT } from "./intro-events";

type Phase = "idle" | "active" | "revealing" | "closing" | "done";

export function HomeIntro() {
  const [phase, setPhase] = useState<Phase>("idle");

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const forced = query.get("intro") === "1";
    const skippedByQuery = query.get("skipIntro") === "1";
    const played = window.sessionStorage.getItem("portfolio-v12-home-intro-played") === "true";
    const directHomepage = window.location.pathname === "/" && !window.location.hash;
    const shouldPlay = !reduced && !skippedByQuery && (forced || (directHomepage && !played));

    if (!shouldPlay) {
      window.dispatchEvent(new Event(INTRO_REVEAL_EVENT));
      window.dispatchEvent(new Event(INTRO_COMPLETE_EVENT));
      setPhase("done");
      return;
    }

    setPhase("active");
    document.body.classList.add("intro-open");
    window.sessionStorage.setItem("portfolio-v12-home-intro-played", "true");

    const revealTimer = window.setTimeout(() => {
      document.body.classList.add("intro-revealing");
      setPhase("revealing");
      window.dispatchEvent(new Event(INTRO_REVEAL_EVENT));
    }, 980);

    const closeTimer = window.setTimeout(() => {
      setPhase("closing");
    }, 1640);

    const completeTimer = window.setTimeout(() => {
      document.body.classList.remove("intro-open", "intro-revealing");
      setPhase("done");
      window.dispatchEvent(new Event(INTRO_COMPLETE_EVENT));
    }, 2050);

    return () => {
      window.clearTimeout(revealTimer);
      window.clearTimeout(closeTimer);
      window.clearTimeout(completeTimer);
      document.body.classList.remove("intro-open", "intro-revealing");
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div className={`home-intro home-intro--${phase}`} aria-hidden="true">
      <div className="home-intro-noise" />
      <div className="home-intro-beam home-intro-beam--left" />
      <div className="home-intro-beam home-intro-beam--right" />
      <div className="home-intro-orbit home-intro-orbit--one" />
      <div className="home-intro-orbit home-intro-orbit--two" />
      <div className="home-intro-grid" />
      <div className="home-intro-copy">
        <p className="home-intro-kicker">Research Portfolio</p>
        <h2>Đồng Thành Đạt</h2>
        <p className="home-intro-line">Clarity in insight · restraint in form · precision in execution</p>
      </div>
    </div>
  );
}
