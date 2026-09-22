"use client";

import { useEffect, useRef, useState } from "react";
import { INTRO_REVEAL_EVENT } from "./intro-events";

/**
 * Path data traced directly from the real signature photo
 * (public/images/signature-dat.webp), so the reveal mask lines up with
 * this exact artwork. The D/a body is reused in two clipped passes (one
 * windowed to the D, one to the a) so the letters commit in true reading
 * order -- D, then a, then t, then the dot -- while the edges you actually
 * see still follow the real ink's curves, not a straight cut.
 */
const BODY_PATHS = [
  "M 438.845 11.934 C 408.638 19.895, 369.376 39.496, 337 62.779 C 288.115 97.935, 263.453 119.024, 211 170.528 C 192.303 188.886, 184.605 195.750, 178.500 199.506 C 174.100 202.213, 165.178 208.170, 158.673 212.745 L 146.845 221.063 158.113 208.281 C 164.310 201.252, 172.787 191.900, 176.952 187.500 C 181.117 183.100, 188.898 174.325, 194.244 168 C 199.589 161.675, 208.475 151.550, 213.989 145.500 C 223.493 135.073, 240.937 115.396, 253 101.496 C 270.154 81.730, 274.945 76.659, 284.248 68.425 C 297.169 56.987, 299 54.366, 299 47.307 C 299 39.717, 296.252 37, 288.573 37 C 283.112 37, 282.964 37.080, 274.278 44.750 C 258.733 58.475, 248.530 69.376, 245.769 75.207 C 243.407 80.196, 223.029 105.268, 208.957 120.500 C 205.908 123.800, 200.226 130.325, 196.330 135 C 192.433 139.675, 185.571 147.503, 181.080 152.395 C 176.589 157.287, 170.363 164.262, 167.245 167.895 C 164.127 171.528, 158.380 177.875, 154.474 182 C 148.140 188.690, 135.357 203.558, 123.248 218.317 C 120.910 221.168, 115.645 227.325, 111.549 232 C 107.453 236.675, 102.663 242.525, 100.904 245 C 99.146 247.475, 93.814 254, 89.055 259.500 C 77.732 272.589, 61.290 292.903, 55.280 301.231 C 52.651 304.874, 42.409 318.575, 32.520 331.677 C 22.631 344.780, 13.485 357.525, 12.196 360 C 7.064 369.849, 11.861 379, 22.156 379 C 27.264 379, 27.311 378.970, 36.890 369.716 C 66.129 341.470, 75.097 333, 75.762 333.002 C 76.168 333.004, 77.806 335.503, 79.401 338.557 C 87.755 354.544, 103.861 359.849, 126.466 354.059 C 144.235 349.508, 178.966 333.489, 200 320.144 C 203.025 318.225, 212.700 312.305, 221.500 306.990 C 259.800 283.855, 303.215 254.013, 333.506 230 C 354.087 213.685, 400.951 168.653, 414.679 152 C 418.533 147.325, 422.501 142.825, 423.497 142 C 428.553 137.813, 448.945 110.511, 457.715 96.187 C 474.659 68.516, 481.300 51.470, 481.361 35.500 C 481.421 19.597, 475.109 12.309, 459.294 10.022 C 450.470 8.746, 451.200 8.678, 438.845 11.934",
  "M 443.500 30.979 C 399.066 42.845, 345.611 76.100, 284.060 130.169 C 261.108 150.331, 256.872 154.376, 260.500 152.668 C 280.034 143.472, 327.370 127.852, 342.500 125.609 C 347.450 124.875, 353.075 123.433, 355 122.403 C 357.376 121.133, 360.587 120.527, 365 120.516 L 371.500 120.500 371.805 124.691 C 372.189 129.975, 369.709 131.873, 361.327 132.711 C 358.122 133.031, 354.612 133.902, 353.527 134.647 C 352.443 135.391, 350.868 136.008, 350.027 136.018 C 349.187 136.028, 346.501 137.391, 344.058 139.046 C 341.615 140.701, 337.115 142.767, 334.058 143.637 C 331.001 144.507, 323.100 147.396, 316.500 150.057 C 309.900 152.719, 298.425 157.162, 291 159.931 C 275.671 165.648, 252.344 177.035, 235.673 186.939 C 209.284 202.617, 191.154 217.722, 163.500 247.071 C 159.650 251.157, 154.475 256.303, 152 258.507 C 149.525 260.712, 139.625 270.750, 130 280.816 C 120.375 290.881, 109.731 301.313, 106.347 303.999 C 99.223 309.652, 97.428 313.525, 98.345 321.264 C 99.281 329.168, 103.455 333.643, 112.099 336.010 C 124.153 339.311, 167.716 318.964, 216 287.480 C 219.575 285.148, 224.300 282.331, 226.500 281.219 C 234.381 277.234, 279.836 246.156, 294.145 234.967 C 298.740 231.375, 305.425 226.286, 309 223.659 C 321.482 214.488, 356 184.732, 356 183.142 C 356 182.735, 359.211 179.726, 363.137 176.457 C 369.714 170.978, 385.453 154.598, 404.034 133.894 C 436.418 97.810, 465.187 47.035, 460.760 33.776 C 459.181 29.047, 453.926 28.195, 443.500 30.979",
  "M 366.500 254.818 C 349.244 263.761, 339.416 270, 342.586 270 C 347.003 270, 383 249.860, 383 247.389 C 383 246.431, 380.591 247.516, 366.500 254.818",
];
const T_PATH =
  "M 619 103.639 C 612.157 106.323, 592.383 121.175, 574.645 136.954 C 568.124 142.754, 559.927 149.975, 556.429 153 C 538.245 168.723, 531.056 175.057, 525.077 180.618 C 516.268 188.811, 515.791 188.996, 503.316 189.027 C 487.390 189.067, 463.981 190.706, 460.229 192.044 C 456.246 193.464, 455 195.594, 455 200.980 C 455 210.206, 463.299 212.808, 481.769 209.375 C 484.972 208.780, 485.018 208.822, 484.019 211.449 C 483.459 212.924, 482.993 215.338, 482.985 216.815 C 482.973 218.855, 480.060 222.623, 470.855 232.500 C 464.192 239.650, 456.116 248.938, 452.909 253.141 C 446.490 261.550, 444.042 262.940, 423.462 269.858 C 407.668 275.168, 401 275.970, 401 272.561 C 401 270.302, 410.525 256.551, 417.843 248.247 C 427.754 236.999, 431 231.586, 431 226.304 C 431 218.458, 424.761 215.700, 416.739 220 C 414.249 221.335, 411.093 222.001, 407.254 222.003 C 387.137 222.011, 347.401 241.640, 319.196 265.500 C 310.268 273.052, 306.845 285.936, 312.313 291.404 C 320.221 299.312, 346.870 292.070, 373.856 274.678 C 377.510 272.323, 380.950 270.123, 381.500 269.790 C 382.142 269.401, 382.383 271.803, 382.174 276.496 C 381.570 290.054, 387.197 294.777, 402.653 293.686 C 410.173 293.156, 428.195 288.107, 434.375 284.800 C 436.658 283.578, 437.962 285.184, 437.985 289.247 C 438.022 296.020, 448.933 303, 459.483 303 C 466.585 303, 483.695 297.310, 497.178 290.465 C 500.851 288.601, 506.553 285.979, 509.850 284.639 C 513.146 283.300, 517.791 280.867, 520.172 279.234 C 522.552 277.600, 527.875 274.572, 532 272.504 C 540.679 268.154, 541.110 267.686, 540.761 263 L 540.500 259.500 534.917 259.205 C 528.745 258.879, 522.942 260.905, 500.500 271.223 C 474.165 283.330, 458 287.566, 458 282.360 C 458 277.134, 470.390 260.876, 492 237.745 C 505.875 222.894, 530.213 207.021, 539.173 206.980 C 541.553 206.969, 546.425 206.553, 550 206.054 C 553.575 205.556, 566.625 204.875, 579 204.541 C 616.305 203.534, 623.481 201.629, 620.382 193.554 C 618.999 189.948, 615.971 189.509, 589 189 L 562.500 188.500 571 182.813 C 591.914 168.820, 620.917 140.343, 630.554 124.340 C 634.638 117.559, 635.323 109.855, 632.186 105.982 C 630.344 103.707, 622.418 102.298, 619 103.639";
const DOT_PATH =
  "M 529.712 294.012 C 522.405 299.759, 526.572 311, 536.009 311 C 543.634 311, 548.048 298.696, 542.139 293.912 C 539.003 291.372, 533.007 291.420, 529.712 294.012";

// Sequential phases in true writing order: D, then a, then t, then the dot.
// The D/a phases reuse the same body ink but each is windowed (clip-path)
// to its own letter, so the D commits fully before the a begins.
const PHASES = [
  { id: "D", paths: BODY_PATHS, clip: "inset(0 33% 0 0)", start: 0, duration: 1250 },
  { id: "a", paths: BODY_PATHS, clip: "inset(0 12% 0 40%)", start: 1080, duration: 1200 },
  { id: "t", paths: [T_PATH], clip: "inset(0 0 0 40%)", start: 2180, duration: 1300 },
  { id: "dot", paths: [DOT_PATH], clip: "inset(0 0 0 76%)", start: 3480, duration: 380 },
] as const;

const VIEW_WIDTH = 645;
const VIEW_HEIGHT = 389;
const MASK_STROKE_WIDTH = 46;
// Center of the final dot, used to anchor the flourish burst.
const DOT_X = 535;
const DOT_Y = 301;
const FLOURISH_DELAY = 3860;

export function SignatureMark() {
  const [active, setActive] = useState(false);
  const pathRefs = useRef<Record<string, SVGPathElement | null>>({});

  useEffect(() => {
    const reveal = () => window.requestAnimationFrame(() => setActive(true));
    const prepare = window.setTimeout(() => {
      const waitingForIntro = document.body.classList.contains("intro-open");
      if (waitingForIntro) window.addEventListener(INTRO_REVEAL_EVENT, reveal, { once: true });
      else reveal();
    }, 60);
    return () => {
      window.clearTimeout(prepare);
      window.removeEventListener(INTRO_REVEAL_EVENT, reveal);
    };
  }, []);

  useEffect(() => {
    if (!active) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    for (const phase of PHASES) {
      phase.paths.forEach((_, i) => {
        const el = pathRefs.current[`${phase.id}-${i}`];
        if (!el) return;
        const length = el.getTotalLength();
        el.style.setProperty("--len", String(length));
        el.style.setProperty("--draw-delay", reduceMotion ? "0ms" : `${phase.start}ms`);
        el.style.setProperty("--draw-duration", reduceMotion ? "1ms" : `${phase.duration}ms`);
      });
    }
  }, [active]);

  return (
    <div
      className={`signature-mark${active ? " is-active" : ""}`}
      style={{ aspectRatio: `${VIEW_WIDTH} / ${VIEW_HEIGHT}` }}
      aria-hidden="true"
    >
      <svg viewBox={`0 0 ${VIEW_WIDTH} ${VIEW_HEIGHT}`} width="100%" height="100%" focusable="false">
        <defs>
          <mask id="signature-reveal-mask" maskUnits="userSpaceOnUse" x={0} y={0} width={VIEW_WIDTH} height={VIEW_HEIGHT}>
            {PHASES.map((phase) => (
              <g
                key={phase.id}
                className="signature-phase"
                style={{ clipPath: phase.clip, WebkitClipPath: phase.clip }}
                fill="none"
                stroke="#fff"
                strokeWidth={MASK_STROKE_WIDTH}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {phase.paths.map((d, i) => (
                  <path
                    key={`${phase.id}-${i}`}
                    ref={(el) => {
                      pathRefs.current[`${phase.id}-${i}`] = el;
                    }}
                    className="signature-mask-stroke"
                    d={d}
                  />
                ))}
              </g>
            ))}
          </mask>
        </defs>
        <image
          href="/images/signature-dat.webp"
          x={0}
          y={0}
          width={VIEW_WIDTH}
          height={VIEW_HEIGHT}
          mask="url(#signature-reveal-mask)"
          className="signature-photo"
        />
        <g className="signature-flourish" style={{ ["--flourish-delay" as string]: `${FLOURISH_DELAY}ms` }}>
          <circle className="signature-flourish-burst" cx={DOT_X} cy={DOT_Y} r={4} />
          {[0, 60, 120, 180, 240, 300].map((angle) => (
            <line
              key={angle}
              className="signature-flourish-spark"
              x1={DOT_X}
              y1={DOT_Y}
              x2={DOT_X + Math.cos((angle * Math.PI) / 180) * 8}
              y2={DOT_Y + Math.sin((angle * Math.PI) / 180) * 8}
            />
          ))}
        </g>
      </svg>
    </div>
  );
}
