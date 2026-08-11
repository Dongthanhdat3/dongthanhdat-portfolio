"use client";

import Image from "next/image";
import { lazy, Suspense, useEffect, useState } from "react";
import { COMPLETE_EVENT } from "./IntroPortrait";

const RealtimeResearchCore = lazy(() =>
  import("./ResearchCore").then((module) => ({ default: module.ResearchCore })),
);

export function ResearchCoreLoader() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const show = () => setReady(true);
    if (document.body.classList.contains("intro-open")) {
      window.addEventListener(COMPLETE_EVENT, show, { once: true });
      return () => window.removeEventListener(COMPLETE_EVENT, show);
    }
    const idle = window.setTimeout(show, 80);
    return () => window.clearTimeout(idle);
  }, []);

  return (
    <div className="research-core-stage" aria-hidden="true">
      <div className="research-core-static">
        <Image
          src="/images/research-core-static.webp"
          alt=""
          width={720}
          height={720}
          sizes="(max-width: 620px) 100vw, 720px"
          priority
        />
      </div>
      {ready ? (
        <Suspense fallback={null}>
          <RealtimeResearchCore />
        </Suspense>
      ) : null}
      <span className="research-core-hint">Di chuột hoặc chạm để phân rã</span>
    </div>
  );
}
