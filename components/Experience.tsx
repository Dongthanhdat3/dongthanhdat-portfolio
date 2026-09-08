import { portfolio } from "@/content/portfolio.vi";
import { Reveal } from "./Reveal";
import { AnimatedMetric } from "./AnimatedMetric";

export function Experience() {
  const experience = portfolio.experience;

  return (
    <section
      id="experience"
      className="section experience-section"
      aria-labelledby="experience-title"
    >
      <div className="container experience-inner">
        <Reveal>
          <div className="section-heading split-heading experience-heading">
            <div>
              <p className="eyebrow experience-eyebrow">Kinh nghiệm thực tế</p>
              <h2 id="experience-title">Kinh nghiệm</h2>
            </div>
            <p className="experience-heading-note">
              Từ nội dung đến hiệu quả: trải nghiệm thực tế trong việc phát triển,
              tối ưu và đánh giá nội dung truyền thông.
            </p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <article className="experience-record">
            <div className="experience-index" aria-hidden="true">
              01
            </div>

            <div className="experience-main">
              <div className="experience-meta">
                <span>{experience.period}</span>
                <span>Marketing · Content</span>
              </div>
              <h3>{experience.role} <span>–</span> {experience.company}</h3>
              <p className="experience-summary">{experience.summary}</p>

              <ul className="experience-bullets">
                {experience.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>

            <div className="experience-results" aria-label="Kết quả nổi bật">
              <svg
                className="experience-border-tracer"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <rect
                  className="experience-border-tracer-path"
                  x="0.8"
                  y="0.8"
                  width="98.4"
                  height="98.4"
                  rx="5.5"
                  ry="5.5"
                  pathLength="100"
                />
              </svg>
              <p className="experience-results-label">Kết quả nổi bật</p>
              <div className="experience-metrics">
                {experience.metrics.map((metric, index) => (
                  <div className="experience-metric" key={metric.label}>
                    <strong>
                      <AnimatedMetric
                        value={metric.value}
                        delay={index * 180}
                        duration={1800 + index * 120}
                      />
                    </strong>
                    <span>{metric.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
