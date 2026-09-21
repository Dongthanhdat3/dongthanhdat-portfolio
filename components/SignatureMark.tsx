"use client";

import { useEffect, useRef, useState } from "react";
import { INTRO_REVEAL_EVENT } from "./intro-events";

/**
 * The four strokes below are real vector outlines of "Dat." set in the
 * Herr Von Muellerhoff typeface (a monoline signature/calligraphy face,
 * SIL Open Font License) — extracted once at build time with opentype.js,
 * not traced from a picture. Each glyph keeps its own outline so it can be
 * revealed on its own timing, the way a hand lifts the pen between letters.
 */
const STROKES = [
  {
    id: "D",
    d: "M19.20-33.90L18-37.50Q17.10-37.50 14.70-27.90Q7.80-0.30 7.80 18.15Q7.80 36.60 14.10 36.60Q15 36.60 46.20-0.60Q35.40-6 28.20-15Q21-24 19.20-33.90M186.30-178.80Q190.50-184.80 193.20-184.80Q195.90-184.80 195.90-177.30Q195.90-164.10 83.70-34.20L87.60-34.20Q99.30-34.20 113.40-40.20Q127.50-46.20 139.20-54.60Q162.30-70.80 177-86.10L183-92.10Q185.70-95.10 187.50-95.10Q189.30-95.10 189.30-93.90Q189.30-92.10 186.90-89.70L180.60-83.40Q176.40-79.20 164.25-69Q152.10-58.80 140.55-51Q129-43.20 113.85-36.75Q98.70-30.30 86.70-30.30Q82.50-30.30 80.70-30.60Q68.40-17.70 55.50-2.10Q65.40 1.50 74.40 1.50Q103.80 1.50 140.40-19.35Q177-40.20 206.40-69.30Q235.80-98.40 256.05-131.10Q276.30-163.80 276.30-186.30Q276.30-219.30 233.70-219.30Q207.60-219.30 181.05-207.75Q154.50-196.20 134.10-177.90Q113.70-159.60 97.35-138.15Q81-116.70 72.30-96Q63.60-75.30 63.60-58.80Q63.60-42.30 75.30-36.60Q169.20-153.90 186.30-178.80M29.10-58.50L27.30-45.90Q27.30-33.60 33.30-22.50Q39.30-11.40 49.80-5.10L72-32.70Q54.30-40.20 54.30-63.30Q54.30-86.40 67.80-113.25Q81.30-140.10 104.25-164.70Q127.20-189.30 162.60-206.10Q198-222.90 236.70-222.90Q260.10-222.90 271.50-212.40Q282.90-201.90 282.90-182.85Q282.90-163.80 271.35-138.75Q259.80-113.70 238.80-88.65Q217.80-63.60 192-42.45Q166.20-21.30 134.10-8.10Q102 5.10 71.70 5.10Q61.20 5.10 52.20 1.80Q30 26.40 18.30 38.40Q12.30 44.40 7.80 44.40Q-0.30 44.40-0.30 23.85Q-0.30 3.30 9.60-28.95Q19.50-61.20 27-61.20Q29.10-61.20 29.10-58.50",
    draw: { start: 0, duration: 850 },
    fill: { start: 680, duration: 260 },
  },
  {
    id: "a",
    d: "M298.20-27.60L310.50-35.70L310.80-31.80Q262.50 0.30 252 0.30Q250.20 0.30 250.20-1.80Q250.20-8.10 255-19.80L256.50-24Q256.50-24.60 255.45-24.60Q254.40-24.60 237.90-12.60Q221.70-0.60 216.75-0.60Q211.80-0.60 211.80-9.60Q211.80-34.50 240.15-58.20Q268.50-81.90 308.40-81.90Q312-81.90 312-78.90Q312-75.90 283.80-43.95Q255.60-12 255.60-5.40Q255.60-4.20 257.40-4.20Q259.20-4.20 272.70-12Q286.20-19.80 298.20-27.60M262.80-35.40Q267.90-39.30 282.60-56.10Q297.30-72.90 297.30-75.60Q297.30-76.80 294.90-76.80Q281.10-76.80 262.80-64.05Q244.50-51.30 231.75-35.10Q219-18.90 219-9Q219-7.20 220.80-7.20Q222.60-7.20 226.65-9.45Q230.70-11.70 236.55-15.75Q242.40-19.80 246.60-22.80Q261-33.60 262.80-35.40",
    draw: { start: 620, duration: 620 },
    fill: { start: 1120, duration: 220 },
  },
  {
    id: "t",
    d: "M354.30-35.40L354.60-32.10Q307.50 0 294.60 0Q291.30 0 291.30-2.10Q291.30-10.50 312.90-40.20Q334.50-69.90 362.70-103.20Q333.90-103.80 327.30-103.80Q320.70-103.80 320.70-107.10Q320.70-108.30 323.40-108.30L366.30-107.40Q402.90-150.30 406.80-150.30Q414.90-150.30 414.90-147.75Q414.90-145.20 381.60-107.10L432-106.20Q435.90-106.20 435.90-105.15Q435.90-104.10 434.70-103.80Q432.90-102.90 405-102.90L378-102.90Q358.50-80.70 349.50-70.65Q340.50-60.60 326.10-43.80Q299.40-12.60 299.40-6.60Q299.40-5.40 301.65-5.40Q303.90-5.40 316.80-12.45Q329.70-19.50 336.30-24.30",
    draw: { start: 1150, duration: 480 },
    fill: { start: 1540, duration: 200 },
  },
  {
    id: "dot",
    d: "M371.40-9.45Q371.40-7.20 367.35-2.70Q363.30 1.80 358.35 1.80Q353.40 1.80 353.40-2.70Q353.40-7.20 357.75-11.25Q362.10-15.30 365.25-15.30Q368.40-15.30 369.90-13.50Q371.40-11.70 371.40-9.45",
    draw: { start: 1650, duration: 160 },
    fill: { start: 1760, duration: 160 },
  },
] as const;

// Combined bounding box of the four strokes above, with a little breathing room.
const BOX = { minX: -20.3, minY: -242.9, width: 476.2, height: 307.3 };
const GLOW_DELAY = 1920;

export function SignatureMark() {
  const [active, setActive] = useState(false);
  const pathRefs = useRef<Partial<Record<string, SVGPathElement | null>>>({});

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
    for (const stroke of STROKES) {
      const el = pathRefs.current[stroke.id];
      if (!el) continue;
      const length = el.getTotalLength();
      el.style.setProperty("--len", String(length));
      el.style.setProperty("--draw-delay", reduceMotion ? "0ms" : `${stroke.draw.start}ms`);
      el.style.setProperty("--draw-duration", reduceMotion ? "1ms" : `${stroke.draw.duration}ms`);
      el.style.setProperty("--fill-delay", reduceMotion ? "0ms" : `${stroke.fill.start}ms`);
      el.style.setProperty("--fill-duration", reduceMotion ? "1ms" : `${stroke.fill.duration}ms`);
    }
  }, [active]);

  const viewBox = `${BOX.minX} ${BOX.minY} ${BOX.width} ${BOX.height}`;

  return (
    <div
      className={`signature-mark${active ? " is-active" : ""}`}
      style={{ aspectRatio: `${BOX.width} / ${BOX.height}`, ["--glow-delay" as string]: `${GLOW_DELAY}ms` }}
      aria-hidden="true"
    >
      <svg viewBox={viewBox} width="100%" height="100%" fill="none" focusable="false">
        {STROKES.map((stroke) => (
          <path
            key={stroke.id}
            ref={(el) => {
              pathRefs.current[stroke.id] = el;
            }}
            className="signature-mark-glyph"
            d={stroke.d}
          />
        ))}
      </svg>
    </div>
  );
}
