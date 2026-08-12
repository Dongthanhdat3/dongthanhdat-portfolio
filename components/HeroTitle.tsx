"use client";

import { useEffect, useState } from "react";
import { INTRO_REVEAL_EVENT } from "./intro-events";

export function HeroTitle({ name }: { name: string }) {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const reveal = () => window.requestAnimationFrame(() => setRevealed(true));
    const prepare = window.setTimeout(() => {
      const waitingForIntro = document.body.classList.contains("intro-open");
      if (waitingForIntro) window.addEventListener(INTRO_REVEAL_EVENT, reveal, { once: true });
      else reveal();
    }, 48);
    return () => {
      window.clearTimeout(prepare);
      window.removeEventListener(INTRO_REVEAL_EVENT, reveal);
    };
  }, []);

  return (
    <h1 id="hero-title" className={revealed ? "is-revealed" : ""} aria-label={name}>
      <span className="hero-name-mask"><span>Đồng</span></span>{" "}
      <span className="hero-name-mask"><span>Thành</span></span>{" "}
      <span className="hero-name-mask"><span>Đạt</span></span>
    </h1>
  );
}
