import { portfolio } from "@/content/portfolio.vi";
import { ContactShortcuts } from "./ContactShortcuts";
import { HeroTitle } from "./HeroTitle";
import { ResearchCoreLoader } from "./ResearchCoreLoader";

export function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <ResearchCoreLoader />
      <div className="container hero-inner">
        <div className="hero-copy">
          <HeroTitle name={portfolio.person.name} />
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
