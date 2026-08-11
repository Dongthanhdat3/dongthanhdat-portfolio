# Academic Minimalism × Premium Product UI

## Hướng thiết kế

Portfolio ưu tiên bằng chứng nghiên cứu, hierarchy rõ và khoảng trắng lớn. Apple/Tesla chỉ được dùng để học cách kiểm soát nhịp, scale và motion; không dùng lại nhận diện, hình ảnh, font hay bố cục của họ.

## Hệ thống

- **Màu:** nền `#FFFFFF`, secondary neutral `#4C4C4E`, chữ chính `#111111`, surface `#F7F7F7`.
- **Typography:** Inter cho toàn bộ giao diện; hierarchy đến từ scale, spacing và weight 400–600.
- **Layout:** container tối đa 1.280 px; section spacing linh hoạt 100–160 px; grid 2/3 cột chuyển thành một cột có chủ đích trên mobile.
- **Thành phần:** border 1 px, radius 12–18 px, shadow chỉ xuất hiện rất nhẹ khi hover.
- **Motion:** 180/320/650 ms với easing mềm; reveal 18 px; tắt gần như hoàn toàn khi `prefers-reduced-motion`.

## Nguyên tắc responsive

Mobile là bố cục độc lập: tên giảm scale để còn hai dòng ở 390 px, About chuyển thành ảnh trước–nội dung sau, capabilities dùng divider ngang, project/certificate thành một cột và PDF actions chiếm toàn chiều rộng.

## Nội dung

Không có Experience, Services, counters, blog hay claim không được chứng minh. Ba dự án và hai chứng chỉ dùng PDF thật; CV được giữ ẩn cho đến khi có asset thật.
