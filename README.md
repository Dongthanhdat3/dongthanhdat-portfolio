# Portfolio — Đồng Thành Đạt

Portfolio tiếng Việt dành cho định hướng **Market Research Analyst**, xây bằng React, TypeScript, Next App Router conventions và vinext. Nội dung được tách khỏi UI trong `content/portfolio.vi.ts`.

## Chạy dự án

Yêu cầu Node.js `>=22.13.0`.

```bash
npm install
npm run dev
npm run build
npm test
```

## Cập nhật nội dung

- Nội dung chính, dự án, chứng chỉ và liên hệ: `content/portfolio.vi.ts`.
- Ảnh chân dung tối ưu: `public/images/avatar-v5.webp`.
- File ảnh gốc: `assets-source/avatar-v5.png`.
- PDF dự án: `public/projects/`.
- PDF và thumbnail chứng chỉ: `public/certificates/`.
- Social preview: `public/og.png`.

### Thay ảnh chân dung

Thay `assets-source/avatar-v5.png`, sau đó xuất derivative WebP có alpha vào `public/images/avatar-v5.webp` ở chiều cao khoảng 1.800 px.

### Thêm CV

Đặt CV tại `public/cv/cv-dong-thanh-dat.pdf`, sau đó đổi `portfolio.person.cv` từ `null` thành `"/cv/cv-dong-thanh-dat.pdf"`. Nút **Tải CV** chỉ xuất hiện khi có file thật.

### Thay hoặc thêm tài liệu

Đặt file vào thư mục phù hợp trong `public/`, sau đó cập nhật một bản ghi duy nhất trong `content/portfolio.vi.ts`. Không cần sửa component giao diện.

## Metadata và triển khai

Đặt biến môi trường sau bằng URL public thật để canonical và social metadata dùng đúng domain:

```bash
NEXT_PUBLIC_SITE_URL=https://ten-mien-cua-ban.example
```

Dự án dùng asset tương đối, không phụ thuộc localhost hay đường dẫn máy cá nhân. Build hiện tại tương thích với Sites/vinext. Cấu trúc App Router và content layer cũng được giữ tách biệt để thuận tiện chuyển sang runtime Next.js chuẩn khi triển khai trên Vercel.

## Design reference

Các audit Apple, Tesla, portfolio cũ và design tokens nằm trong `design-reference/`; chúng không được đưa vào public bundle. Quyết định thiết kế được tóm tắt trong `DESIGN.md`.
