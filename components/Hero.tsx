import { portfolio } from "@/content/portfolio.vi";
import { ContactShortcuts } from "./ContactShortcuts";
import { HeroTitle } from "./HeroTitle";

export function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
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

        <div className="hero-signature-wrap" aria-hidden="true">
          <svg
            className="hero-signature"
            viewBox="0 0 673 417"
            role="presentation"
          >
            <defs>
              <mask id="hero-signature-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="673" height="417">
                <rect width="673" height="417" fill="black" />
                <g className="hero-signature-write-paths">
                  <path className="hero-signature-write hero-signature-write--1" pathLength="1" d="M 28 389 C 86 312 141 219 207 142 C 274 65 349 28 447 30 C 492 31 500 61 473 113 C 439 173 386 236 323 286 C 257 338 183 373 126 365 C 90 360 82 334 99 300 C 126 252 193 209 289 163" />
                  <path className="hero-signature-write hero-signature-write--2" pathLength="1" d="M 238 226 C 257 201 276 179 292 173 C 306 170 309 179 301 197 C 292 216 275 239 261 243 C 250 246 247 231 256 221 C 269 206 284 196 300 195" />
                  <path className="hero-signature-write hero-signature-write--3" pathLength="1" d="M 290 239 C 315 217 338 187 357 161 C 377 134 394 118 408 120 C 420 123 418 140 410 156 C 400 176 384 194 368 204 C 358 211 351 207 352 197 C 353 185 363 172 376 164" />
                  <path className="hero-signature-write hero-signature-write--4" pathLength="1" d="M 388 101 C 390 135 385 172 377 212 C 370 245 374 264 387 265 C 404 266 422 247 439 225" />
                  <path className="hero-signature-write hero-signature-write--5" pathLength="1" d="M 349 204 C 389 196 425 182 457 164 C 484 147 507 129 527 106" />
                  <path className="hero-signature-write hero-signature-write--6" pathLength="1" d="M 452 245 C 481 243 510 234 534 217 C 556 201 575 182 594 161" />
                  <circle className="hero-signature-write-dot" cx="549" cy="315" r="8" />
                </g>
              </mask>
            </defs>
            <image
              className="hero-signature-image"
              href="/images/signature-dat-source-white.png"
              x="0"
              y="0"
              width="673"
              height="417"
              preserveAspectRatio="none"
              mask="url(#hero-signature-mask)"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
