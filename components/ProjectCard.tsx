import type { Project } from "@/content/portfolio.vi";
import Image from "next/image";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="project-card">
      <a href={`/du-an/${project.slug}`} aria-label={`Xem dự án ${project.brand}`}>
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
          <h3>{project.title}</h3>
          <span className="project-arrow" aria-hidden="true">
            ↗
          </span>
        </div>
      </a>
    </article>
  );
}
