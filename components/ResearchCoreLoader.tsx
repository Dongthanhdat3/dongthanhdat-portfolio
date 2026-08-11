"use client";

import Image from "next/image";
import { lazy, Suspense } from "react";

const RealtimeResearchCore = lazy(() =>
  import("./ResearchCore").then((module) => ({ default: module.ResearchCore })),
);

export function ResearchCoreLoader() {
  return (
    <div className="research-core-experience" aria-hidden="true">
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
      <Suspense fallback={null}>
        <RealtimeResearchCore />
      </Suspense>
    </div>
  );
}
