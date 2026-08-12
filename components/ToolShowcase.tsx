"use client";

import Image from "next/image";
import { useRef, type PointerEvent } from "react";
import { portfolio } from "@/content/portfolio.vi";

export function ToolShowcase() {
  const activeTouchRef = useRef<HTMLElement | null>(null);

  const move = (event: PointerEvent<HTMLButtonElement>) => {
    if (event.pointerType === "touch") return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    event.currentTarget.style.setProperty("--tool-rx", `${(0.5 - y) * 5}deg`);
    event.currentTarget.style.setProperty("--tool-ry", `${(x - 0.5) * 6}deg`);
    event.currentTarget.style.setProperty("--tool-light-x", `${x * 100}%`);
    event.currentTarget.style.setProperty("--tool-light-y", `${y * 100}%`);
  };

  const reset = (event: PointerEvent<HTMLButtonElement>) => {
    event.currentTarget.style.setProperty("--tool-rx", "0deg");
    event.currentTarget.style.setProperty("--tool-ry", "0deg");
  };

  const toggleTouch = (event: PointerEvent<HTMLButtonElement>) => {
    if (event.pointerType !== "touch") return;
    if (activeTouchRef.current && activeTouchRef.current !== event.currentTarget) {
      activeTouchRef.current.classList.remove("is-touched");
    }
    event.currentTarget.classList.toggle("is-touched");
    activeTouchRef.current = event.currentTarget.classList.contains("is-touched")
      ? event.currentTarget
      : null;
  };

  return (
    <div className="tool-lab" aria-labelledby="tool-lab-title">
      <div className="container tool-lab-inner">
        <div className="tool-lab-heading">
          <p className="eyebrow eyebrow-inverse">Analytical toolkit</p>
          <h3 id="tool-lab-title">Công cụ phân tích</h3>
          <p>Sáu công cụ, một quy trình thống nhất từ dữ liệu thô đến quyết định.</p>
        </div>
        <div className="tool-gallery">
          {portfolio.tools.map((tool, index) => (
            <button
              className={`tool-item tool-${tool.slug}`}
              key={tool.name}
              type="button"
              aria-label={`${tool.name} — chạm để xem cấu trúc`}
              onPointerMove={move}
              onPointerLeave={reset}
              onPointerDown={toggleTouch}
            >
              <span className="tool-index">0{index + 1}</span>
              <span className="tool-object-stage" aria-hidden="true">
                <span className="tool-product-shadow" />
                <span className="tool-product-shell">
                  <span className="tool-product-back" />
                  <span className="tool-product-face">
                    <Image src={tool.image} alt="" width={640} height={640} sizes="220px" loading="lazy" />
                  </span>
                  <span className="tool-product-ring" />
                </span>
              </span>
              <span className="tool-name">{tool.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
