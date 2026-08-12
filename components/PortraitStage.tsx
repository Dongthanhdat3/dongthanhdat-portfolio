"use client";

import Image from "next/image";
import { useRef, type PointerEvent } from "react";

export function PortraitStage({ src }: { src: string }) {
  const stageRef = useRef<HTMLDivElement>(null);

  const move = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "touch") return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    event.currentTarget.style.setProperty("--portrait-x", `${x * 3}px`);
    event.currentTarget.style.setProperty("--portrait-y", `${y * 3}px`);
    event.currentTarget.style.setProperty("--shadow-x", `${x * -1.5}px`);
    event.currentTarget.style.setProperty("--shadow-y", `${y * -1.5}px`);
  };

  const reset = () => {
    stageRef.current?.style.setProperty("--portrait-x", "0px");
    stageRef.current?.style.setProperty("--portrait-y", "0px");
    stageRef.current?.style.setProperty("--shadow-x", "0px");
    stageRef.current?.style.setProperty("--shadow-y", "0px");
  };

  return (
    <div ref={stageRef} className="about-image-wrap" onPointerMove={move} onPointerLeave={reset}>
      <span className="portrait-light" aria-hidden="true" />
      <span className="portrait-shadow" aria-hidden="true" />
      <Image
        className="about-image"
        src={src}
        alt="Chân dung Đồng Thành Đạt"
        width={1440}
        height={1800}
        sizes="(max-width: 620px) calc(100vw - 40px), (max-width: 820px) 44vw, 560px"
        loading="lazy"
      />
    </div>
  );
}
