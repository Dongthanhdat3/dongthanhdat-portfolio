import type { CommercialReportData } from "@/content/commercialReports";

type ProjectExperienceProps = {
  brand: string;
  businessReport: CommercialReportData;
  pdf: string;
};

export function ProjectExperience({ brand, businessReport, pdf }: ProjectExperienceProps) {
  return (
    <section
      className={`project-business-story project-business-story--${businessReport.theme}`}
      aria-label={`Báo cáo kinh doanh ${brand}`}
    >
      <div className="project-business-orb" aria-hidden="true" />
      <div className="project-business-inner">
        <header className="project-business-opening">
          <p className="project-business-kicker">{businessReport.kicker}</p>
          <h2>{businessReport.title}</h2>
          <p className="project-business-summary">{businessReport.summary}</p>
          <p className="project-business-context">{businessReport.context}</p>

          <div className="project-business-metrics" aria-label="Chỉ số nổi bật">
            {businessReport.metrics.map((metric) => (
              <div className="project-business-metric" data-project-spotlight key={`${metric.value}-${metric.label}`}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </div>
        </header>

        <section className="project-business-section" aria-labelledby={`findings-${businessReport.theme}`}>
          <h3 id={`findings-${businessReport.theme}`}>Phát hiện chính</h3>
          <div className="project-business-findings">
            {businessReport.findings.map((finding) => (
              <article className="project-business-finding" data-project-spotlight key={finding.index}>
                <span className="project-business-index">{finding.index}</span>
                <div>
                  <h4>{finding.title}</h4>
                  <p>{finding.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="project-business-section" aria-labelledby={`recommendations-${businessReport.theme}`}>
          <h3 id={`recommendations-${businessReport.theme}`}>Khuyến nghị hành động</h3>
          <div className="project-business-recommendations">
            {businessReport.recommendations.map((recommendation) => (
              <article className="project-business-recommendation" data-project-spotlight key={`${recommendation.tag}-${recommendation.title}`}>
                <span>{recommendation.tag}</span>
                <h4>{recommendation.title}</h4>
                <p>{recommendation.description}</p>
              </article>
            ))}
          </div>
        </section>

        <aside className="project-business-evidence" data-project-spotlight>
          <h3>{businessReport.evidenceTitle}</h3>
          <p>{businessReport.evidence}</p>
        </aside>

        <footer className="project-business-footer">
          <p>{businessReport.ctaText}</p>
          <a href={pdf} target="_blank" rel="noopener noreferrer" data-project-spotlight>
            Mở báo cáo đầy đủ →
          </a>
        </footer>
      </div>
    </section>
  );
}
