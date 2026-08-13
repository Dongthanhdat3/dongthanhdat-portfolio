"use client";

import type { Project } from "@/content/portfolio.vi";
import Image from "next/image";
import Link from "next/link";
import type { PointerEvent } from "react";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const prefetch = () => {
    void fetch(`/du-an/${project.slug}`, { priority: "low" } as RequestInit).catch(() => undefined);
  };
  const move = (event: PointerEvent<HTMLAnchorElement>) => {
    if (event.pointerType === "touch") return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    event.currentTarget.style.setProperty("--card-rx", `${(0.5 - y) * 3.2}deg`);
    event.currentTarget.style.setProperty("--card-ry", `${(x - 0.5) * 4}deg`);
    event.currentTarget.style.setProperty("--card-light-x", `${x * 100}%`);
    event.currentTarget.style.setProperty("--card-light-y", `${y * 100}%`);
  };

  const reset = (event: PointerEvent<HTMLAnchorElement>) => {
    event.currentTarget.style.setProperty("--card-rx", "0deg");
    event.currentTarget.style.setProperty("--card-ry", "0deg");
  };

  return (
    <article className="project-card">
      <Link href={`/du-an/${project.slug}`} aria-label={`Xem dự án ${project.brand}`} onPointerMove={move} onPointerLeave={reset} onPointerEnter={prefetch} onFocus={prefetch}>
        <div className={`brand-stage brand-${project.logoTreatment}`}>
          <span className="project-index">{String(index + 1).padStart(2, "0")}</span>
          <div className="brand-plaque">
            <Image
              src={project.cover}
              alt={`Logo ${project.brand}`}
              width={1200}
              height={720}
              sizes="(max-width: 620px) 74vw, (max-width: 1080px) 42vw, 26vw"
            />
          </div>
          <span className="brand-note">Dự án nghiên cứu</span>
        </div>
        <div className="project-card-copy">
          <p className="project-category">{project.category}</p>
          <p className="project-brand">{project.brand}</p>
          <h3>{project.cardTitle}</h3>
          <span className="project-arrow" aria-hidden="true">
            ↗
          </span>
        </div>
      </Link>
    </article>
  );
}
