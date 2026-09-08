import { portfolio } from "@/content/portfolio.vi";
import { Reveal } from "./Reveal";

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
          <div className="experience-heading">
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
              <p className="experience-results-label">Kết quả nổi bật</p>
              <div className="experience-metrics">
                {experience.metrics.map((metric) => (
                  <div className="experience-metric" key={metric.label}>
                    <strong>{metric.value}</strong>
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
