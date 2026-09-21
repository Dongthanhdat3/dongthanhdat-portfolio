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
            viewBox="0 0 700 280"
            role="presentation"
          >
            <g className="hero-signature-strokes">
              <path className="hero-signature-stroke hero-signature-stroke--1" d="M92 222 C118 190 143 150 174 111 C204 74 235 44 259 40 C281 36 293 53 288 78 C281 109 250 150 216 181 C185 209 149 232 128 226 C111 221 116 200 138 177 C171 143 214 113 258 94" />
              <path className="hero-signature-stroke hero-signature-stroke--2" d="M247 153 C266 135 286 119 304 116 C318 114 322 121 314 132 C305 145 286 160 272 163 C261 165 257 155 266 148 C278 138 294 132 311 131" />
              <path className="hero-signature-stroke hero-signature-stroke--3" d="M302 160 C329 145 352 125 372 108 C392 90 410 79 425 81 C437 83 435 94 427 104 C417 118 400 130 384 137 C374 142 366 139 367 132 C368 124 378 115 391 110" />
              <path className="hero-signature-stroke hero-signature-stroke--4" d="M403 68 C405 91 400 116 392 142 C385 164 389 177 402 178 C419 179 438 167 456 152" />
              <path className="hero-signature-stroke hero-signature-stroke--5" d="M363 137 C404 132 442 123 475 110 C503 99 526 87 548 71" />
              <path className="hero-signature-stroke hero-signature-stroke--6" d="M470 165 C499 164 529 157 554 146 C578 135 598 122 618 108" />
              <path className="hero-signature-dot" d="M596 194 C596 188 601 184 607 185 C613 186 616 191 614 197 C612 203 606 206 601 203 C597 201 595 198 596 194 Z" />
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}
