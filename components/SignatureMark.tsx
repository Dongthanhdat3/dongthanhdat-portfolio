"use client";

import { useEffect, useState } from "react";
import { INTRO_COMPLETE_EVENT } from "./intro-events";
import {
  SIGNATURE_DOT,
  SIGNATURE_STROKES,
  SIGNATURE_TOTAL_MS,
  SIGNATURE_VIEWBOX,
} from "./signature-data";

// Hand-traced from the real "Đạt." signature artwork (public/images/signature-dat.webp).
// Rendered as vector pen strokes so it can be *drawn* on screen, left to right,
// stroke by stroke, exactly like a hand signing a page — instead of a photo
// wipe/slide. Timing of each stroke is proportional to its real pen length so
// the pace feels handwritten rather than mechanical. Total reveal: ~3.5s,
// starting the moment the homepage intro finishes.

export function SignatureMark() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const reveal = () => window.requestAnimationFrame(() => setActive(true));
    const prepare = window.setTimeout(() => {
      const waitingForIntro = document.body.classList.contains("intro-open");
      if (waitingForIntro) window.addEventListener(INTRO_COMPLETE_EVENT, reveal, { once: true });
      else reveal();
    }, 60);
    return () => {
      window.clearTimeout(prepare);
      window.removeEventListener(INTRO_COMPLETE_EVENT, reveal);
    };
  }, []);

  return (
    <div className={`signature-mark${active ? " is-active" : ""}`} aria-hidden="true">
      <svg
        className="signature-svg"
        viewBox={SIGNATURE_VIEWBOX}
        style={{ ["--signature-total" as string]: `${SIGNATURE_TOTAL_MS}ms` }}
      >
        <defs>
          <filter id="signature-glow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3.1" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="signature-dot-glow" x="-200%" y="-200%" width="500%" height="500%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2.6" />
          </filter>
        </defs>

        <g className="signature-strokes">
          {SIGNATURE_STROKES.map((stroke, i) => (
            <path
              key={stroke.id}
              className="signature-path"
              d={stroke.d}
              pathLength={1}
              strokeWidth={stroke.width}
              style={{
                ["--stroke-start" as string]: `${stroke.start}ms`,
                ["--stroke-duration" as string]: `${stroke.duration}ms`,
                ["--stroke-order" as string]: i,
              }}
            />
          ))}
        </g>

        {/* traveling nib highlight: a small bright point that rides each stroke
            as it is drawn, like light catching a moving pen tip. */}
        <g className="signature-nibs">
          {SIGNATURE_STROKES.map((stroke) => (
            <circle
              key={stroke.id}
              className="signature-nib"
              r={Math.max(stroke.width * 0.62, 3)}
              style={{
                ["--stroke-start" as string]: `${stroke.start}ms`,
                ["--stroke-duration" as string]: `${stroke.duration}ms`,
                offsetPath: `path("${stroke.d}")`,
              }}
            />
          ))}
        </g>

        {/* the closing dot: a small artistic flourish — pen presses down, a soft
            ink ring blooms and fades, echoing how the real signature ends. */}
        <g
          className="signature-dot-group"
          style={{
            ["--dot-start" as string]: `${SIGNATURE_DOT.start}ms`,
            ["--dot-duration" as string]: `${SIGNATURE_DOT.duration}ms`,
          }}
        >
          <circle
            className="signature-dot-ring"
            cx={SIGNATURE_DOT.cx}
            cy={SIGNATURE_DOT.cy}
            r="3"
            style={{ transformOrigin: `${SIGNATURE_DOT.cx}px ${SIGNATURE_DOT.cy}px` }}
          />
          <circle
            className="signature-dot-core"
            cx={SIGNATURE_DOT.cx}
            cy={SIGNATURE_DOT.cy}
            r="5.2"
            style={{ transformOrigin: `${SIGNATURE_DOT.cx}px ${SIGNATURE_DOT.cy}px` }}
          />
        </g>
      </svg>
    </div>
  );
}
