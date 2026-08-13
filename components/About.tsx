import { portfolio } from "@/content/portfolio.vi";
import { Reveal } from "./Reveal";
import { PortraitStage } from "./PortraitStage";

export function About() {
  return (
    <section id="about" className="section about-section" aria-labelledby="about-title">
      <div className="container about-grid">
        <Reveal>
          <PortraitStage src={portfolio.person.avatar} />
        </Reveal>
        <Reveal delay={100}>
          <div className="about-copy">
            <p className="eyebrow">Định hướng nghề nghiệp</p>
            <h2 id="about-title">Giới thiệu</h2>
            <div className="about-paragraphs">
              {portfolio.person.about.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            {portfolio.person.cv ? (
              <a className="button button-secondary" href={portfolio.person.cv} download>
                Tải CV
              </a>
            ) : null}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
