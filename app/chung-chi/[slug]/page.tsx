import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PdfViewer } from "@/components/PdfViewer";
import { certificates, findCertificate } from "@/content/portfolio.vi";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return certificates.map((certificate) => ({ slug: certificate.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const certificate = findCertificate((await params).slug);
  if (!certificate) return {};
  return {
    title: certificate.title,
    description: certificate.summary,
    alternates: { canonical: `/chung-chi/${certificate.slug}` },
  };
}

export default async function CertificatePage({ params }: PageProps) {
  const certificate = findCertificate((await params).slug);
  if (!certificate) notFound();

  return (
    <main className="detail-page certificate-detail-page">
      <section className="detail-hero">
        <div className="container detail-hero-inner">
          <Link prefetch={false} className="back-link" href="/#certificates">
            ← Trở lại chứng chỉ
          </Link>
          <p className="eyebrow">Chứng chỉ chuyên môn</p>
          <h1>{certificate.title}</h1>
          <p className="detail-summary">{certificate.summary}</p>

          <dl className="detail-metadata certificate-metadata">
            <div>
              <dt>Đơn vị cấp</dt>
              <dd>{certificate.issuer}</dd>
            </div>
            <div>
              <dt>Hoàn thành</dt>
              <dd>{certificate.date}</dd>
            </div>
            <div>
              <dt>Chương trình</dt>
              <dd>{certificate.courseCount} khóa học</dd>
            </div>
            <div>
              <dt>Mã chứng chỉ</dt>
              <dd>{certificate.credentialId}</dd>
            </div>
          </dl>
          <a className="text-link" href={certificate.verificationUrl} target="_blank" rel="noreferrer">
            Xác minh trên Coursera ↗
          </a>
        </div>
      </section>
      <div className="container">
        <PdfViewer src={certificate.pdf} title={certificate.title} />
      </div>
    </main>
  );
}
