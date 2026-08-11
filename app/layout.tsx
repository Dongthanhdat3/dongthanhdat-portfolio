import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "./globals.css";

const fallbackSiteUrl = "https://dong-thanh-dat-portfolio.pages.dev";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? fallbackSiteUrl;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Đồng Thành Đạt — Market Research Analyst",
    template: "%s — Đồng Thành Đạt",
  },
  description:
    "Portfolio của Đồng Thành Đạt, định hướng Market Research Analyst với trọng tâm nghiên cứu thị trường, Consumer Insights và phân tích dữ liệu.",
  authors: [{ name: "Đồng Thành Đạt" }],
  alternates: { canonical: "/" },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "/",
    title: "Đồng Thành Đạt — Market Research Analyst",
    description:
      "Nghiên cứu thị trường, Consumer Insights và phân tích dữ liệu để hỗ trợ quyết định kinh doanh.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Đồng Thành Đạt — Market Research Analyst" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Đồng Thành Đạt — Market Research Analyst",
    description:
      "Nghiên cứu thị trường, Consumer Insights và phân tích dữ liệu để hỗ trợ quyết định kinh doanh.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi">
      <body>
        <a className="skip-link" href="#main-content">
          Bỏ qua điều hướng
        </a>
        <Header />
        <div id="main-content">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
