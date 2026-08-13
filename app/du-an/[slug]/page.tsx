import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ProjectExperience } from "@/components/ProjectExperience";
import { commercialReports } from "@/content/commercialReports";
import { findProject, projects } from "@/content/portfolio.vi";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const project = findProject((await params).slug);
  if (!project) return {};
  return {
    title: project.brand,
    description: project.description,
    alternates: { canonical: `/du-an/${project.slug}` },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const project = findProject((await params).slug);
  if (!project) notFound();

  const businessReport = commercialReports[project.slug];
  if (!businessReport) notFound();

  return (
    <main className="detail-page">
      <section className="detail-hero">
        <div className="container detail-hero-inner">
          <Link prefetch={false} className="back-link" href="/#projects">
            ← Trở lại dự án
          </Link>
          <div className="detail-intro-grid">
            <div className="detail-intro-copy">
              <p className="eyebrow">{project.category}</p>
              <div className={`detail-brand brand-${project.logoTreatment}`}>
                <Image src={project.cover} alt={`Logo ${project.brand}`} width={1200} height={720} priority />
                <span>Dự án nghiên cứu</span>
              </div>
              <h1>{project.title}</h1>
              <p className="detail-summary">{project.description}</p>
            </div>
            <div className={`detail-product-visual brand-${project.logoTreatment}`} aria-hidden="true">
              <span className="detail-product-glow" />
              <span className="detail-product-plaque">
                <Image src={project.cover} alt="" width={1200} height={720} priority />
              </span>
              <span className="detail-product-shadow" />
            </div>
          </div>

          <dl className="detail-metadata">
            <div>
              <dt>Dữ liệu</dt>
              <dd>{project.sample}</dd>
            </div>
            <div>
              <dt>Phương pháp</dt>
              <dd>{project.methods}</dd>
            </div>
            <div>
              <dt>Công cụ</dt>
              <dd>{project.tools.join(" · ")}</dd>
            </div>
          </dl>

          <div className="theme-list" aria-label="Chủ đề chính">
            {project.keyThemes.map((theme) => (
              <span key={theme}>{theme}</span>
            ))}
          </div>
        </div>
      </section>

      <div className="container project-experience-container">
        <ProjectExperience
          brand={project.brand}
          businessReport={businessReport}
          pdf={project.pdf}
        />
      </div>
    </main>
  );
}
