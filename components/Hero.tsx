import { portfolio } from "@/content/portfolio.vi";

export function Hero() {
  return (
    <section id="trang-chu" className="hero" aria-labelledby="hero-title">
      <div className="container hero-inner">
        <p className="eyebrow hero-eyebrow">{portfolio.person.eyebrow}</p>
        <h1 id="hero-title">{portfolio.person.name}</h1>
        <div className="hero-bottom">
          <div>
            <p className="hero-role">{portfolio.person.role}</p>
            <p className="hero-domains">{portfolio.person.domains}</p>
          </div>
          <div className="hero-statement">
            <p>{portfolio.person.headline}</p>
            <div className="button-row">
              <a className="button button-primary" href="#du-an">
                Xem dự án
              </a>
              <a className="button button-secondary" href="#lien-he">
                Liên hệ
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
