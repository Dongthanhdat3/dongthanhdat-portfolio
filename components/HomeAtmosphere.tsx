"use client";

import type { PointerEvent, ReactNode } from "react";
import { HomeIntro } from "./HomeIntro";

export function HomeAtmosphere({ children }: { children: ReactNode }) {
  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    if (event.pointerType === "touch") return;
    const root = event.currentTarget;
    root.style.setProperty("--home-pointer-x", `${event.clientX}px`);
    root.style.setProperty("--home-pointer-y", `${event.clientY}px`);
  };

  return (
    <main className="home-graphite" onPointerMove={handlePointerMove}>
      <HomeIntro />
      {children}
    </main>
  );
}
