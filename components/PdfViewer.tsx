"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function PdfViewer({
  src,
  preview,
  title,
}: {
  src: string;
  preview: string;
  title: string;
}) {
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const [mountViewer, setMountViewer] = useState(false);

  useEffect(() => {
    const schedule = "requestIdleCallback" in window
      ? window.requestIdleCallback(() => setMountViewer(true), { timeout: 240 })
      : window.setTimeout(() => setMountViewer(true), 80);
    return () => {
      if ("cancelIdleCallback" in window) window.cancelIdleCallback(schedule as number);
      else window.clearTimeout(schedule as number);
    };
  }, []);

  return (
    <section className="pdf-section" aria-labelledby="tai-lieu-heading">
      <div className="pdf-toolbar">
        <div>
          <p className="eyebrow">Tài liệu đầy đủ</p>
          <h2 id="tai-lieu-heading">Đọc nghiên cứu</h2>
        </div>
        <div className="pdf-actions">
          <a className="button button-secondary" href={src} target="_blank" rel="noreferrer">
            Mở PDF toàn màn hình
          </a>
          <a className="button button-primary" href={src} download>
            Tải PDF
          </a>
        </div>
      </div>

      <div className="pdf-frame" data-status={status}>
        <Image className="pdf-preview" src={preview} alt={`Trang đầu ${title}`} width={1406} height={1988} priority />
        {status === "loading" && <span className="pdf-progress" aria-label="Đang chuẩn bị tài liệu" />}
        {status === "error" ? (
          <div className="pdf-state pdf-error">
            <p>Trình duyệt không thể hiển thị tài liệu này trong trang.</p>
            <a href={src} target="_blank" rel="noreferrer">
              Mở PDF trong cửa sổ mới
            </a>
          </div>
        ) : mountViewer ? (
          <iframe
            src={`${src}#view=FitH`}
            title={title}
            loading="lazy"
            onLoad={() => setStatus("ready")}
            onError={() => setStatus("error")}
          />
        ) : null}
      </div>
    </section>
  );
}
