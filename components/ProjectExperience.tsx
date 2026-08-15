import type { CommercialReportData } from "@/content/commercialReports";

type ProjectExperienceProps = {
  brand: string;
  businessReport: CommercialReportData;
  pdf: string;
  englishPdf: string;
};

export function ProjectExperience({ brand, businessReport, pdf, englishPdf }: ProjectExperienceProps) {
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
          {businessReport.recommendationIntro && <p className="project-business-section-intro">{businessReport.recommendationIntro}</p>}

          {businessReport.waves && (
            <div className="project-business-wave-track">
              {businessReport.waves.map((wave) => (
                <article className={`project-business-wave${wave.muted ? " is-muted" : ""}`} key={`${wave.badge}-${wave.title}`}>
                  <span className="project-business-wave-badge">{wave.badge}</span>
                  <div className="project-business-wave-copy">
                    <span className="project-business-wave-label">{wave.label}</span>
                    <h4>{wave.title}</h4>
                    <p>{wave.description}</p>
                    {wave.branches && (
                      <div className="project-business-wave-branches">
                        {wave.branches.map((branch) => (
                          <div className="project-business-wave-branch" data-project-spotlight key={`${branch.tag}-${branch.title}`}>
                            <span>{branch.tag}</span>
                            <h5>{branch.title}</h5>
                            <p>{branch.description}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          )}

          {businessReport.priorities && (
            <div className="project-business-priority-list">
              {businessReport.priorities.map((item) => (
                <article className="project-business-priority" data-project-spotlight key={item.rank}>
                  <span className="project-business-priority-rank">{item.rank}</span>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                  <div className="project-business-priority-track" aria-hidden="true">
                    <span style={{ width: `${item.strength}%` }} />
                  </div>
                </article>
              ))}
            </div>
          )}

          {businessReport.maintain && (
            <aside className="project-business-maintain" data-project-spotlight>
              <span>{businessReport.maintain.tag}</span>
              <h4>{businessReport.maintain.title}</h4>
              <p>{businessReport.maintain.description}</p>
            </aside>
          )}
        </section>

        <aside className="project-business-evidence" data-project-spotlight>
          <h3>{businessReport.evidenceTitle}</h3>
          <p>{businessReport.evidence}</p>
        </aside>

        <footer className="project-business-footer">
          <p>{businessReport.ctaText}</p>
          <div className="project-business-report-actions">
            <a href={englishPdf} target="_blank" rel="noopener noreferrer" data-project-spotlight>
              Open the English report
            </a>
            <a href={pdf} target="_blank" rel="noopener noreferrer" data-project-spotlight>
              Mở báo cáo tiếng Việt
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
}
