import { portfolio } from "@/content/portfolio.vi";
import { ContactShortcuts } from "./ContactShortcuts";
import { ResearchCore } from "./ResearchCore";

export function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <ResearchCore />
      <div className="container hero-inner">
        <div className="hero-copy">
          <h1 id="hero-title" aria-label={portfolio.person.name}>
            <span className="hero-name-mask"><span>Đồng</span></span>{" "}
            <span className="hero-name-mask"><span>Thành</span></span>{" "}
            <span className="hero-name-mask"><span>Đạt</span></span>
          </h1>
          <div className="hero-identity">
            <p className="hero-role">{portfolio.person.role}</p>
            <p className="hero-domains">{portfolio.person.domains}</p>
            <ContactShortcuts />
          </div>
          <div className="hero-statement">
            <p>{portfolio.person.headline}</p>
            <div className="button-row">
              <a className="button button-primary" href="#projects">
                Xem dự án
              </a>
              <a className="button button-secondary" href="#contact">
                Liên hệ
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
