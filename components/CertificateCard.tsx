import type { Certificate } from "@/content/portfolio.vi";
import Image from "next/image";

export function CertificateCard({ certificate }: { certificate: Certificate }) {
  return (
    <article className="certificate-card">
      <a className="certificate-preview" href={`/chung-chi/${certificate.slug}`}>
        <Image
          src={certificate.thumbnail}
          alt={`Chứng chỉ ${certificate.title}`}
          width={1320}
          height={1020}
          sizes="(max-width: 820px) calc(100vw - 40px), 50vw"
          loading="lazy"
        />
      </a>
      <div className="certificate-copy">
        <p className="certificate-meta">
          {certificate.issuer} · {certificate.date}
        </p>
        <h3>{certificate.title}</h3>
        <p>{certificate.summary}</p>
        <div className="certificate-actions">
          <a href={`/chung-chi/${certificate.slug}`}>Xem chứng chỉ</a>
          <a href={certificate.verificationUrl} target="_blank" rel="noreferrer">
            Xác minh ↗
          </a>
        </div>
      </div>
    </article>
  );
}
