import { certificates } from "@/content/portfolio.vi";
import { CertificateCard } from "./CertificateCard";
import { Reveal } from "./Reveal";

export function Certificates() {
  return (
    <section id="certificates" className="section certificates-section" aria-labelledby="certificates-title">
      <div className="container">
        <Reveal>
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">Học tập bổ sung</p>
              <h2 id="certificates-title">Chứng chỉ chuyên môn</h2>
            </div>
            <p>
              Các chương trình bổ sung nền tảng về phân tích dữ liệu, thống kê, mô hình dự báo và machine learning.
            </p>
          </div>
        </Reveal>
        <div className="certificate-grid">
          {certificates.map((certificate, index) => (
            <Reveal delay={index * 90} key={certificate.slug}>
              <CertificateCard certificate={certificate} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
