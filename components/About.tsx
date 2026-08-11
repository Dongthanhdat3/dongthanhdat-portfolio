import { portfolio } from "@/content/portfolio.vi";
import Image from "next/image";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="section about-section" aria-labelledby="about-title">
      <div className="container about-grid">
        <Reveal>
          <div className="about-image-wrap">
            <Image
              className="about-image"
              src={portfolio.person.avatar}
              alt="Chân dung Đồng Thành Đạt"
              width={1440}
              height={1800}
              sizes="(max-width: 620px) calc(100vw - 40px), (max-width: 820px) 44vw, 560px"
              loading="lazy"
            />
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="about-copy">
            <p className="eyebrow">Định hướng nghề nghiệp</p>
            <h2 id="about-title">About Me</h2>
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
