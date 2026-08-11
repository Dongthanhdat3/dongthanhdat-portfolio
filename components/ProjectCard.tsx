import type { Project } from "@/content/portfolio.vi";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <a href={`/du-an/${project.slug}`} aria-label={`Xem dự án ${project.brand}`}>
        <div className={`brand-stage brand-${project.logoTreatment}`}>
          <span className="brand-wordmark">{project.brand}</span>
          <span className="brand-note">Đối tượng nghiên cứu</span>
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
