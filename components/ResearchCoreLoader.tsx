"use client";

import { lazy, Suspense } from "react";

const RealtimeHeyjoEmblem = lazy(() =>
  import("./HeyjoEmblem").then((module) => ({ default: module.HeyjoEmblem })),
);

export function HeyjoEmblemLoader() {
  return (
    <div className="heyjo-emblem-experience" aria-hidden="true">
      <Suspense fallback={null}>
        <RealtimeHeyjoEmblem />
      </Suspense>
    </div>
  );
}
