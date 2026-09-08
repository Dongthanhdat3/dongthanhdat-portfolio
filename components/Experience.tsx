"use client";

import { useEffect, useMemo, useRef, useState, type PointerEvent } from "react";
import { portfolio } from "@/content/portfolio.vi";
import { Reveal } from "./Reveal";

type MetricCounterProps = {
  value: string;
  label: string;
  active: boolean;
  delay?: number;
};

function MetricCounter({ value, label, active, delay = 0 }: MetricCounterProps) {
  const numericTarget = useMemo(() => {
    const match = value.replace(/,/g, ".").match(/[0-9]+(?:\.[0-9]+)?/);
    return match ? Number(match[0]) : 0;
  }, [value]);
  const suffix = value.match(/[%K+]+$/)?.[0] ?? "";
  const hasDecimal = numericTarget % 1 !== 0;
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!active) {
      setCurrent(0);
      return;
    }

    let frame = 0;
    let start = 0;
    const duration = 1250;
    const wait = window.setTimeout(() => {
      start = performance.now();

      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCurrent(numericTarget * eased);
        if (progress < 1) frame = requestAnimationFrame(tick);
      };

      frame = requestAnimationFrame(tick);
    }, delay);

    return () => {
      window.clearTimeout(wait);
      cancelAnimationFrame(frame);
    };
  }, [active, delay, numericTarget]);

  const formatted = new Intl.NumberFormat("vi-VN", {
    minimumFractionDigits: hasDecimal ? 1 : 0,
    maximumFractionDigits: hasDecimal ? 1 : 0,
  }).format(active ? current : 0);

  return (
    <div className="experience-metric">
      <strong aria-label={`${value} ${label}`}>
        {formatted}
        {suffix}
      </strong>
      <span>{label}</span>
    </div>
  );
}

export function Experience() {
  const experience = portfolio.experience;
  const [expanded, setExpanded] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const node = imageRef.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    node.style.setProperty("--media-rotate-x", `${(-y * 2.2).toFixed(2)}deg`);
    node.style.setProperty("--media-rotate-y", `${(x * 3.2).toFixed(2)}deg`);
    node.style.setProperty("--media-shine-x", `${50 + x * 18}%`);
    node.style.setProperty("--media-shine-y", `${50 + y * 15}%`);
  };

  const resetPointer = () => {
    const node = imageRef.current;
    if (!node) return;
    node.style.setProperty("--media-rotate-x", "0deg");
    node.style.setProperty("--media-rotate-y", "0deg");
    node.style.setProperty("--media-shine-x", "50%");
    node.style.setProperty("--media-shine-y", "45%");
  };

  return (
    <section
      id="experience"
      className="section experience-section"
      aria-labelledby="experience-title"
    >
      <div className="container experience-inner">
        <Reveal>
          <div className="section-heading split-heading experience-heading">
            <div>
              <p className="eyebrow experience-eyebrow">Kinh nghiệm thực tế</p>
              <h2 id="experience-title">Kinh nghiệm</h2>
            </div>
            <p className="experience-heading-note">
              Từ nội dung đến hiệu quả: trải nghiệm thực tế trong việc phát triển,
              tối ưu và đánh giá nội dung truyền thông.
            </p>
          </div>
        </Reveal>

        <Reveal delay={60}>
          <article className={`experience-card${expanded ? " is-expanded" : ""}`}>
            <button
              type="button"
              className="experience-card-toggle"
              aria-expanded={expanded}
              aria-controls="experience-mobifone-details"
              onClick={() => setExpanded((current) => !current)}
            >
              <span className="experience-index" aria-hidden="true">01</span>
              <span className="experience-card-heading">
                <span className="experience-meta">
                  <span>{experience.period}</span>
                  <span>Marketing · Content</span>
                </span>
                <span className="experience-card-title">{experience.role} <i>–</i> {experience.company}</span>
              </span>
              <span className="experience-card-action">
                <span>{expanded ? "Thu gọn" : "Xem chi tiết"}</span>
                <span className="experience-card-arrow" aria-hidden="true">↗</span>
              </span>
            </button>

            <div
              id="experience-mobifone-details"
              className="experience-card-details"
              aria-hidden={!expanded}
            >
              <div className="experience-media-wrap">
                <div
                  ref={imageRef}
                  className="experience-media"
                  onPointerMove={handlePointerMove}
                  onPointerLeave={resetPointer}
                >
                  <div className="experience-media-frame">
                    <img
                      src="/experience/mobifone-youtube.jpg"
                      alt="Kênh YouTube Giải pháp Công nghệ Thông tin MobiFone"
                    />
                  </div>
                  <div className="experience-media-caption">
                    <span>MobiFone · YouTube</span>
                    <span>Thực tế triển khai nội dung</span>
                  </div>
                </div>
              </div>

              <div className="experience-detail-grid">
                <div className="experience-main">
                  <p className="experience-summary">{experience.summary}</p>
                  <ul className="experience-bullets">
                    {experience.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>

                <div className="experience-results" aria-label="Kết quả nổi bật">
                  <p className="experience-results-label">Kết quả nổi bật</p>
                  <div className="experience-results-line" aria-hidden="true" />
                  <div className="experience-metrics">
                    {experience.metrics.map((metric, index) => (
                      <MetricCounter
                        key={metric.label}
                        value={metric.value}
                        label={metric.label}
                        active={expanded}
                        delay={index * 130}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
