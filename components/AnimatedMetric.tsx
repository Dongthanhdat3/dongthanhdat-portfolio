"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type ParsedMetric = {
  target: number;
  suffix: string;
  decimals: number;
};

function parseMetric(value: string): ParsedMetric {
  const match = value.trim().match(/^(\d+(?:[.,]\d+)?)(.*)$/);

  if (!match) {
    return { target: 0, suffix: value, decimals: 0 };
  }

  const numericPart = match[1];
  const decimalPart = numericPart.match(/[.,](\d+)/)?.[1] ?? "";

  return {
    target: Number(numericPart.replace(",", ".")),
    suffix: match[2],
    decimals: decimalPart.length,
  };
}

function formatMetric(value: number, metric: ParsedMetric) {
  return `${value.toLocaleString("vi-VN", {
    useGrouping: false,
    minimumFractionDigits: metric.decimals,
    maximumFractionDigits: metric.decimals,
  })}${metric.suffix}`;
}

export function AnimatedMetric({
  value,
  delay = 0,
  duration = 1800,
}: {
  value: string;
  delay?: number;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const hasPlayed = useRef(false);
  const metric = useMemo(() => parseMetric(value), [value]);
  const [displayValue, setDisplayValue] = useState(() => formatMetric(0, metric));

  useEffect(() => {
    const node = ref.current;
    if (!node || hasPlayed.current) return;

    const showFinalValue = () => {
      hasPlayed.current = true;
      setDisplayValue(formatMetric(metric.target, metric));
    };

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      showFinalValue();
      return;
    }

    let frameId = 0;
    let startTime: number | null = null;
    let delayTimeout: number | null = null;

    const animate = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;

      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      const current = metric.target * eased;

      setDisplayValue(formatMetric(current, metric));

      if (progress < 1) {
        frameId = window.requestAnimationFrame(animate);
      } else {
        showFinalValue();
      }
    };

    const startAnimation = () => {
      if (hasPlayed.current) return;
      delayTimeout = window.setTimeout(() => {
        if (hasPlayed.current) return;
        hasPlayed.current = true;
        frameId = window.requestAnimationFrame(animate);
      }, delay);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasPlayed.current) return;
        startAnimation();
        observer.disconnect();
      },
      { threshold: 0.55 },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      if (delayTimeout !== null) window.clearTimeout(delayTimeout);
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, [delay, duration, metric]);

  return (
    <span ref={ref} className="experience-counter" aria-label={value}>
      {displayValue}
    </span>
  );
}
