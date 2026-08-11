"use client";

import { useEffect, useState } from "react";
import { portfolio } from "@/content/portfolio.vi";

export function Intro() {
  const [visible, setVisible] = useState(true);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const navigation = performance.getEntriesByType("navigation")[0] as
      | PerformanceNavigationTiming
      | undefined;
    const playedInApp = window.sessionStorage.getItem("portfolio-intro-played") === "true";
    const shouldSkip = playedInApp && navigation?.type !== "reload";

    if (shouldSkip) {
      const skipTimer = window.setTimeout(() => setVisible(false), 0);
      return () => window.clearTimeout(skipTimer);
    }

    document.body.classList.add("intro-open");
    window.sessionStorage.setItem("portfolio-intro-played", "true");

    const exitTimer = window.setTimeout(() => setExiting(true), reduced ? 180 : 1880);
    const removeTimer = window.setTimeout(() => setVisible(false), reduced ? 320 : 2350);

    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(removeTimer);
      document.body.classList.remove("intro-open");
    };
  }, []);

  useEffect(() => {
    if (!visible) document.body.classList.remove("intro-open");
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className={`intro-overlay${exiting ? " is-exiting" : ""}`}
      aria-hidden="true"
      onClick={() => setExiting(true)}
    >
      <div className="intro-studio">
        <div className="signature-sculpture">
          <span className="signature-orbit" />
          <span className="signature-axis signature-axis-one" />
          <span className="signature-axis signature-axis-two" />
          <span className="signature-glass" />
          <span className="signature-node signature-node-one" />
          <span className="signature-node signature-node-two" />
        </div>
        <span className="signature-shadow" />
      </div>
      <p className="intro-name">{portfolio.person.name}</p>
    </div>
  );
}
