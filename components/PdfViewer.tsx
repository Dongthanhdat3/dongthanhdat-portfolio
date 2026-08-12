"use client";

import { useState } from "react";

export function PdfViewer({
  src,
  title,
}: {
  src: string;
  title: string;
}) {
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");

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
        {status === "loading" && (
          <div className="pdf-state" role="status">
            <span className="loading-line" />
            Đang tải tài liệu…
          </div>
        )}
        {status === "error" ? (
          <div className="pdf-state pdf-error">
            <p>Trình duyệt không thể hiển thị tài liệu này trong trang.</p>
            <a href={src} target="_blank" rel="noreferrer">
              Mở PDF trong cửa sổ mới
            </a>
          </div>
        ) : (
          <iframe
            src={`${src}#view=FitH`}
            title={title}
            loading="lazy"
            onLoad={() => setStatus("ready")}
            onError={() => setStatus("error")}
          />
        )}
      </div>
    </section>
  );
}
