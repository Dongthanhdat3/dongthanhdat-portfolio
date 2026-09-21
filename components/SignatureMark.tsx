"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { INTRO_REVEAL_EVENT } from "./intro-events";

// Intrinsic size of /public/images/signature-dat.webp (kept tight-cropped).
const IMAGE_WIDTH = 645;
const IMAGE_HEIGHT = 389;

export function SignatureMark() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const reveal = () => window.requestAnimationFrame(() => setActive(true));
    const prepare = window.setTimeout(() => {
      const waitingForIntro = document.body.classList.contains("intro-open");
      if (waitingForIntro) window.addEventListener(INTRO_REVEAL_EVENT, reveal, { once: true });
      else reveal();
    }, 60);
    return () => {
      window.clearTimeout(prepare);
      window.removeEventListener(INTRO_REVEAL_EVENT, reveal);
    };
  }, []);

  return (
    <div
      className={`signature-mark${active ? " is-active" : ""}`}
      style={{ aspectRatio: `${IMAGE_WIDTH} / ${IMAGE_HEIGHT}` }}
      aria-hidden="true"
    >
      <span className="signature-glow-edge" />
      <Image
        className="signature-photo"
        src="/images/signature-dat.webp"
        alt=""
        width={IMAGE_WIDTH}
        height={IMAGE_HEIGHT}
        priority
      />
    </div>
  );
}
