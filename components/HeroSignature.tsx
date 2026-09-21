export function HeroSignature() {
  return (
    <div className="hero-signature-wrap" aria-hidden="true">
      <svg
        className="hero-signature-vector"
        viewBox="0 0 625 369"
        role="presentation"
      >
        <defs>
          <filter id="signature-white-glow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="3.4" result="blur" />
            <feColorMatrix
              in="blur"
              type="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 .72 0"
              result="glow"
            />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g
          fill="none"
          stroke="#FFFFFF"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
          filter="url(#signature-white-glow)"
        >
          <path
            className="hero-signature-stroke signature-stroke-1"
            pathLength="1"
            d="M4 354 C40 315 72 255 105 205 C145 145 182 90 230 45 C280 8 342 -9 385 14 C406 26 395 68 365 111 C330 158 286 198 238 235 C190 271 140 309 122 329 C113 341 130 352 153 350 C190 344 236 317 282 286 C329 254 366 222 399 188"
          />
          <path
            className="hero-signature-stroke signature-stroke-2"
            pathLength="1"
            d="M8 352 C42 320 86 260 120 214 C163 159 204 112 247 71 C268 51 282 37 291 24"
          />
          <path
            className="hero-signature-stroke signature-stroke-3"
            pathLength="1"
            d="M152 168 C189 149 230 129 278 110 C311 96 337 88 360 82"
          />
          <path
            className="hero-signature-stroke signature-stroke-4"
            pathLength="1"
            d="M320 247 C334 230 357 218 381 211 C394 207 404 208 409 213 C411 218 399 232 386 242 C369 256 349 262 334 259 C325 257 324 252 330 246 C340 238 351 233 360 230"
          />
          <path
            className="hero-signature-stroke signature-stroke-5"
            pathLength="1"
            d="M392 250 C405 261 420 261 431 253 C443 244 453 230 459 212 C469 184 486 157 507 138 C530 117 551 98 568 82"
          />
          <path
            className="hero-signature-stroke signature-stroke-6"
            pathLength="1"
            d="M430 181 C454 181 477 181 501 181 C530 181 557 180 583 180"
          />
          <path
            className="hero-signature-stroke signature-stroke-7"
            pathLength="1"
            d="M442 245 C457 229 472 214 489 198"
          />
        </g>

        <circle className="hero-signature-dot" cx="490" cy="271" r="5.6" />

        <g className="hero-signature-pen-glints" fill="#FFFFFF">
          <circle className="signature-glint glint-1" cx="4" cy="354" r="3.4" />
          <circle className="signature-glint glint-2" cx="291" cy="24" r="3.2" />
          <circle className="signature-glint glint-3" cx="360" cy="82" r="3.1" />
          <circle className="signature-glint glint-4" cx="360" cy="230" r="3.2" />
          <circle className="signature-glint glint-5" cx="568" cy="82" r="3.4" />
          <circle className="signature-glint glint-6" cx="583" cy="180" r="3.2" />
          <circle className="signature-glint glint-7" cx="489" cy="198" r="3.1" />
        </g>
      </svg>
    </div>
  );
}
