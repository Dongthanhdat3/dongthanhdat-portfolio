"use client";

import { useId, useState } from "react";
import { CommercialReport } from "@/components/CommercialReport";
import { PdfViewer } from "@/components/PdfViewer";
import type { CommercialReportData } from "@/content/commercialReports";

type ReportMode = "business" | "research";

type ProjectExperienceProps = {
  brand: string;
  businessReport: CommercialReportData;
  pdf: string;
  pdfPreview: string;
};

export function ProjectExperience({ brand, businessReport, pdf, pdfPreview }: ProjectExperienceProps) {
  const [mode, setMode] = useState<ReportMode>("business");
  const id = useId();
  const businessPanelId = `${id}-business-panel`;
  const researchPanelId = `${id}-research-panel`;

  return (
    <section className="project-experience" aria-labelledby={`${id}-experience-title`}>
      <div className="project-experience-head">
        <div>
          <p className="eyebrow">Project Experience</p>
          <h2 id={`${id}-experience-title`}>Hai góc nhìn cho cùng một dự án</h2>
          <p>
            Bắt đầu bằng góc nhìn kinh doanh để nắm quyết định, sau đó chuyển sang bản nghiên cứu đầy đủ khi cần kiểm tra phương pháp và bằng chứng.
          </p>
        </div>

        <div className="project-report-tabs" role="tablist" aria-label={`Chọn loại báo cáo ${brand}`}>
          <button
            type="button"
            role="tab"
            aria-selected={mode === "business"}
            aria-controls={businessPanelId}
            id={`${id}-business-tab`}
            className={mode === "business" ? "is-active" : undefined}
            onClick={() => setMode("business")}
          >
            <span>Báo cáo kinh doanh</span>
            <small>Ưu tiên hiển thị</small>
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={mode === "research"}
            aria-controls={researchPanelId}
            id={`${id}-research-tab`}
            className={mode === "research" ? "is-active" : undefined}
            onClick={() => setMode("research")}
          >
            <span>Báo cáo nghiên cứu</span>
            <small>PDF đầy đủ</small>
          </button>
        </div>
      </div>

      {mode === "business" ? (
        <div
          id={businessPanelId}
          role="tabpanel"
          aria-labelledby={`${id}-business-tab`}
          className="project-report-panel"
        >
          <CommercialReport report={businessReport} brand={brand} />
        </div>
      ) : (
        <div
          id={researchPanelId}
          role="tabpanel"
          aria-labelledby={`${id}-research-tab`}
          className="project-report-panel"
        >
          <PdfViewer
            src={pdf}
            previewSrc={pdfPreview}
            title={`Tài liệu dự án ${brand}`}
          />
        </div>
      )}
    </section>
  );
}
