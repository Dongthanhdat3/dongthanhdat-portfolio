"use client";

import type { PointerEvent, ReactNode } from "react";

type ProjectTheme = "tiktok" | "mbbank" | "mobifone";

export function ProjectAtmosphere({ children, theme }: { children: ReactNode; theme: ProjectTheme }) {
  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    if (event.pointerType === "touch") return;

    const root = event.currentTarget;
    root.style.setProperty("--project-pointer-x", `${event.clientX}px`);
    root.style.setProperty("--project-pointer-y", `${event.clientY}px`);

    const target = (event.target as HTMLElement | null)?.closest<HTMLElement>("[data-project-spotlight]");
    if (!target) return;

    const rect = target.getBoundingClientRect();
    target.style.setProperty("--spotlight-x", `${event.clientX - rect.left}px`);
    target.style.setProperty("--spotlight-y", `${event.clientY - rect.top}px`);
  };

  return (
    <main
      className={`detail-page project-detail-page project-detail-page--${theme}`}
      onPointerMove={handlePointerMove}
    >
      {children}
    </main>
  );
}
