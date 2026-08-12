import { portfolio } from "@/content/portfolio.vi";
import { Reveal } from "./Reveal";

export function Education() {
  return (
    <section id="education" className="section education-section" aria-labelledby="education-title">
      <div className="container">
        <Reveal>
          <p className="eyebrow">Nền tảng học thuật</p>
          <h2 id="education-title">Học vấn</h2>
          <div className="education-record">
            <p className="education-period">{portfolio.education.period}</p>
            <div>
              <h3>{portfolio.education.institution}</h3>
              <p>{portfolio.education.degree}</p>
              <p className="education-graduation">{portfolio.education.graduation}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
