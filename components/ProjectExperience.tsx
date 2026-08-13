"use client";

import { useEffect, useState } from "react";
import type { Project } from "@/content/portfolio.vi";
import { PdfViewer } from "./PdfViewer";

type Report = {
  opening: string;
  memory: string;
  metrics: Array<{ value: string; label: string; detail: string }>;
  actions: Array<{ priority: string; title: string; action: string; measure: string }>;
  flow: string[];
  boundary: string;
  next: string;
};

const reports: Record<string, Report> = {
  mobifone: {
    opening: "Khách hàng vẫn đang hài lòng — nhưng lòng trung thành có thể bị bào mòn trước khi họ rời mạng.",
    memory: "Giữ chân không chỉ là chất lượng mạng. Mỗi điểm chạm dịch vụ, chăm sóc và trải nghiệm số đều góp vào quyết định ở lại.",
    metrics: [
      { value: "450", label: "khách hàng tại TP.HCM", detail: "mẫu khảo sát của nghiên cứu" },
      { value: "2.821", label: "phản hồi Google Maps", detail: "từ 50 chi nhánh tại TP.HCM" },
      { value: "65,3%", label: "mức giải thích tổng hợp", detail: "của chuỗi trải nghiệm → hài lòng → trung thành" },
    ],
    actions: [
      { priority: "01", title: "Bảo vệ giai đoạn 6–12 tháng", action: "Theo dõi điểm chạm hỗ trợ và trải nghiệm số của nhóm mới gắn bó; ưu tiên xử lý ma sát lặp lại trước khi nhu cầu chuyển mạng trở nên dễ hơn.", measure: "Sự hài lòng và lòng trung thành theo thời gian sử dụng" },
      { priority: "02", title: "Làm chăm sóc khách hàng dễ dự đoán", action: "Chuẩn hóa hướng dẫn, trạng thái xử lý và đường quay lại khi khách cần hỗ trợ.", measure: "Đánh giá chăm sóc khách hàng và tín hiệu phản hồi bên ngoài" },
      { priority: "03", title: "Khép khoảng cách trải nghiệm số", action: "Kiểm tra các thao tác thường xuyên có làm khách mất thời gian hoặc khó tự xử lý hay không.", measure: "Tính dễ sử dụng, hữu ích và giá trị cảm nhận" },
    ],
    flow: ["Chất lượng dịch vụ", "Chăm sóc khách hàng", "Sự hài lòng", "Lòng trung thành"],
    boundary: "Thiết kế cắt ngang cho thấy các mối liên hệ trong mẫu nghiên cứu; kết quả không phải churn rate toàn hệ thống và không chứng minh quan hệ nhân quả.",
    next: "Kết nối khảo sát định kỳ với dữ liệu vận hành và hành vi giữ chân theo từng giai đoạn sử dụng để kiểm chứng các điểm ma sát ưu tiên.",
  },
  "tiktok-shop": {
    opening: "Hoàn tiền xong chưa có nghĩa là đã phục hồi được khách hàng.",
    memory: "Hậu mãi có thể sửa một phần quan hệ, nhưng không thể xóa hoàn toàn lời hứa sản phẩm đã bị phá vỡ.",
    metrics: [
      { value: "1.087", label: "người mua", detail: "đã hoàn tất trả hàng hoặc hoàn tiền" },
      { value: "4", label: "tín hiệu có thể can thiệp", detail: "sai lệch, ma sát, công bằng, minh bạch" },
      { value: "2 waves", label: "ưu tiên hành động", detail: "phòng ngừa trước mua và phục hồi sau sự cố" },
    ],
    actions: [
      { priority: "01", title: "Ngăn sai lệch trước mua", action: "Giảm khoảng cách giữa claim và sản phẩm thực nhận ở các điểm có nguy cơ sai mô tả.", measure: "Tín hiệu sản phẩm không đúng mô tả" },
      { priority: "02", title: "Giảm công sức chứng minh sự cố", action: "Thiết kế quy trình trả hàng - hoàn tiền ít bước hơn, giữ được trạng thái và chỉ rõ việc cần làm tiếp theo.", measure: "Ma sát quy trình và tỷ lệ hoàn tất" },
      { priority: "03", title: "Phục hồi như một portfolio", action: "Đọc công bằng kết quả, ma sát và minh bạch thông tin như ba phần liên kết của một trải nghiệm phục hồi.", measure: "Niềm tin phục hồi và ý định tiếp tục mua" },
    ],
    flow: ["Lời hứa sản phẩm", "Trải nghiệm phục hồi", "Niềm tin phục hồi", "Lần mua tiếp theo"],
    boundary: "Kết quả mô tả mối liên hệ trong các sự cố đã được xử lý hậu mãi; không đủ để suy ra hiệu quả nhân quả của một thay đổi chính sách cụ thể.",
    next: "Nối dữ liệu sự cố với hành vi mua tiếp theo và thử nghiệm có đối chứng các can thiệp giảm sai lệch, ma sát và bất định thông tin.",
  },
  "mb-bank": {
    opening: "Bảo mật đáng tin vẫn có thể trở thành trải nghiệm khiến người dùng muốn giảm sử dụng.",
    memory: "Niềm tin không xóa được chi phí thao tác lặp lại. Mục tiêu là giữ lớp bảo vệ cần thiết và loại bỏ ma sát không tạo thêm an toàn.",
    metrics: [
      { value: "1.187", label: "hồ sơ khảo sát", detail: "về xác thực sinh trắc học tại TP.HCM" },
      { value: "0,532", label: "Trust → Continued Use", detail: "hệ số chuẩn hóa trong mô hình" },
      { value: "−0,363", label: "Effort → Continued Use", detail: "hệ số chuẩn hóa trong mô hình" },
    ],
    actions: [
      { priority: "01", title: "Giảm thử lại và mất trạng thái", action: "Theo dõi luồng theo mã lỗi, giữ trạng thái hợp lệ và đưa ra phương án xử lý thay thế khi xác thực thất bại.", measure: "First-pass success, retry, P90 thời gian, bỏ dở" },
      { priority: "02", title: "Giải thích đúng lúc", action: "Cho khách biết bước xác thực bảo vệ điều gì, lỗi nào đang xảy ra và phải làm gì tiếp theo.", measure: "Tính minh bạch, độ tin cậy và niềm tin" },
      { priority: "03", title: "Hỗ trợ theo ngữ cảnh", action: "Tăng hướng dẫn và hỗ trợ cho người gặp nhiều thử lại hoặc khó tự khắc phục lỗi.", measure: "Khoảng cách tự phục hồi và chuyển kênh hỗ trợ" },
    ],
    flow: ["Bảo vệ & độ tin cậy", "Niềm tin xác thực", "Nỗ lực thao tác", "Ý định tiếp tục dùng"],
    boundary: "Các hệ số thể hiện liên hệ trong mẫu cắt ngang, không chứng minh một thay đổi giao diện sẽ tạo ra đúng mức thay đổi sử dụng trong vận hành.",
    next: "Kết nối telemetry xác thực với khảo sát trải nghiệm và A/B test theo mã lỗi; chỉ mở rộng khi giảm ma sát mà không làm guardrail an toàn xấu đi.",
  },
};

export function ProjectExperience({ project }: { project: Project }) {
  const [view, setView] = useState<"commercial" | "research">("commercial");
  const report = reports[project.slug];

  useEffect(() => {
    if (new URLSearchParams(window.location.search).get("view") === "research") setView("research");
  }, []);

  const select = (next: "commercial" | "research") => {
    setView(next);
    const url = new URL(window.location.href);
    next === "research" ? url.searchParams.set("view", "research") : url.searchParams.delete("view");
    window.history.replaceState(null, "", url);
  };

  return (
    <section className="project-experience" aria-label="Cách đọc dự án">
      <div className="container">
        <div className="project-view-switcher" role="tablist" aria-label="Chọn cách đọc dự án">
          <button className={view === "commercial" ? "is-active" : ""} role="tab" aria-selected={view === "commercial"} onClick={() => select("commercial")}>
            <strong>Báo cáo kinh doanh</strong><span>Commercial Report</span>
          </button>
          <button className={view === "research" ? "is-active" : ""} role="tab" aria-selected={view === "research"} onClick={() => select("research")}>
            <strong>Báo cáo nghiên cứu</strong><span>Full Research PDF</span>
          </button>
        </div>
        {view === "commercial" ? <CommercialReport project={project} report={report} onResearch={() => select("research")} /> : <PdfViewer src={project.pdf} preview={project.preview} title={`Tài liệu dự án ${project.brand}`} />}
      </div>
    </section>
  );
}

function CommercialReport({ project, report, onResearch }: { project: Project; report: Report; onResearch: () => void }) {
  return <article className={`commercial-report brand-${project.logoTreatment}`}>
    <header className="commercial-opening">
      <p className="eyebrow">Decision brief · {project.brand}</p>
      <h2>{report.opening}</h2>
      <div className="report-snapshot"><span>Mẫu: {project.sample}</span><span>Trọng tâm: {project.keyThemes[0]}</span><span>Tác giả: Đồng Thành Đạt</span></div>
    </header>
    <section className="report-section report-summary"><p className="eyebrow">60 giây cho người ra quyết định</p><div className="metric-grid">{report.metrics.map((metric) => <div className="metric-card" key={metric.label}><strong>{metric.value}</strong><h3>{metric.label}</h3><p>{metric.detail}</p></div>)}</div></section>
    <section className="report-memory"><p>Nếu chỉ nhớ một điều</p><h3>{report.memory}</h3></section>
    <section className="report-section"><div className="report-section-heading"><p className="eyebrow">Ưu tiên hành động</p><h3>Đi từ điểm ma sát có thể can thiệp đến tín hiệu cần theo dõi.</h3></div><div className="action-grid">{report.actions.map((action) => <article className="action-card" key={action.priority}><span>{action.priority}</span><h4>{action.title}</h4><p>{action.action}</p><small><b>Theo dõi:</b> {action.measure}</small></article>)}</div></section>
    <section className="report-section report-flow"><p className="eyebrow">Chuỗi bằng chứng</p><div>{report.flow.map((item, index) => <span key={item}>{item}{index < report.flow.length - 1 && <i aria-hidden="true">→</i>}</span>)}</div><p>Các bước mô tả cấu trúc diễn giải từ nghiên cứu, không phải một tuyên bố nhân quả.</p></section>
    <section className="report-section report-boundary"><p className="eyebrow">Dữ liệu chưa cho phép kết luận gì?</p><p>{report.boundary}</p><p><b>Nên kiểm chứng tiếp:</b> {report.next}</p></section>
    <section className="report-section report-evidence"><p className="eyebrow">Dữ liệu & bằng chứng kỹ thuật</p><h3>Đi sâu khi bạn cần kiểm tra phương pháp, thang đo và bảng kết quả.</h3><div className="evidence-actions"><button onClick={onResearch}>Xem báo cáo nghiên cứu đầy đủ</button><a href={project.workbookUrl} target="_blank" rel="noopener noreferrer">Mở dữ liệu Excel</a></div></section>
  </article>;
}
