"use client";

import { useEffect, useState } from "react";
import { COMPLETE_EVENT } from "./IntroPortrait";

export function HeroTitle({ name }: { name: string }) {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const reveal = () => window.requestAnimationFrame(() => setRevealed(true));
    const waitingForIntro = document.body.classList.contains("intro-open");
    if (waitingForIntro) window.addEventListener(COMPLETE_EVENT, reveal, { once: true });
    else reveal();
    return () => window.removeEventListener(COMPLETE_EVENT, reveal);
  }, []);

  return (
    <h1 id="hero-title" className={revealed ? "is-revealed" : ""} aria-label={name}>
      <span className="hero-name-mask"><span>Đồng</span></span>{" "}
      <span className="hero-name-mask"><span>Thành</span></span>{" "}
      <span className="hero-name-mask"><span>Đạt</span></span>
    </h1>
  );
}
