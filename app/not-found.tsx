import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found-page">
      <div className="container">
        <p className="eyebrow">404</p>
        <h1>Không tìm thấy trang</h1>
        <p>Nội dung bạn đang tìm không tồn tại hoặc đã được di chuyển.</p>
        <Link prefetch={false} className="button button-primary" href="/">
          Về trang chủ
        </Link>
      </div>
    </main>
  );
}
