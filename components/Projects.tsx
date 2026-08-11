import { projects } from "@/content/portfolio.vi";
import { ProjectCard } from "./ProjectCard";
import { Reveal } from "./Reveal";

export function Projects() {
  return (
    <section id="projects" className="section projects-section" aria-labelledby="projects-title">
      <div className="container">
        <Reveal>
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">Bằng chứng năng lực</p>
              <h2 id="projects-title">Dự án tiêu biểu</h2>
            </div>
            <p>
              Ba dự án cho thấy cách tôi tiếp cận vấn đề từ góc nhìn nghiên cứu, dữ liệu và quyết định kinh doanh.
            </p>
          </div>
        </Reveal>
        <div className="project-grid">
          {projects.map((project, index) => (
            <Reveal delay={index * 80} key={project.slug}>
              <ProjectCard project={project} index={index} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
