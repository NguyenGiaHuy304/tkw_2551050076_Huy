# Portfolio — Nguyễn Gia Huy (Th4nhH1)

Website portfolio cá nhân, dựng bằng HTML semantic + Tailwind CSS + JavaScript
thuần (không thư viện ngoài), theo đúng kỹ thuật của 4 buổi Thực hành Thiết kế Web.

## Chạy thử

```bash
npm install
npm run dev     # build CSS + theo dõi thay đổi, để nguyên terminal
```

Sau đó mở `index.html` bằng Live Server (VS Code) hoặc bất kỳ static server nào.

Khi xong việc, build bản rút gọn để deploy:

```bash
npm run build
```

**Lưu ý khi deploy (GitHub Pages...)**: nhớ commit cả thư mục `dist/` —
`dist/output.css` không được đưa vào `.gitignore`, nếu không trang sẽ trắng trơn.

## Cấu trúc

```
index.html          Trang chủ: hero, số liệu, giới thiệu, kỹ năng, dự án nổi bật, học vấn, CTA
projects.html        Toàn bộ dự án, có bộ lọc theo loại
contact.html          Thông tin liên hệ + form + FAQ
src/input.css        Token màu/chữ (@theme) + component (@layer components)
dist/output.css      CSS build ra, đừng sửa tay file này
js/
  main.js             Điểm khởi tạo duy nhất cho cả 3 trang
  nav.js              Menu mobile, navbar đổi trạng thái khi cuộn, nút lên đầu trang
  theme.js            Công tắc sáng/tối
  faq.js              Accordion câu hỏi thường gặp
  reveal.js           Hiệu ứng lộ dần khi cuộn + bộ đếm số liệu
  slider.js           Carousel dự án nổi bật (tự viết)
  filter.js           Lọc dự án theo loại (Web / Thuật toán)
  contact-form.js      Kiểm tra hợp lệ form liên hệ (chưa nối backend thật)
assets/               SVG placeholder (avatar, favicon, ảnh dự án)
```

## Token màu — lấy cảm hứng từ MrBeast

Đỏ (`--color-brand-600: #e4002b`) làm chủ đạo, vàng (`--color-accent-500: #ffc700`)
chỉ dùng làm điểm nhấn nhỏ (badge, gạch chân, hover), nền tối ngả nâu-đỏ ấm
(`#120a0a`) thay vì đen tuyệt đối — đúng nguyên tắc "nền tối không phải màu đen"
ở buổi 3. Đổi màu thương hiệu chỉ cần sửa trong `src/input.css`, không rải rác
mã màu khắp HTML.

**Trang mặc định hiển thị chế độ TỐI** — khác quy tắc gốc của buổi 4 (vốn ưu
tiên `prefers-color-scheme` khi người dùng chưa từng chọn). Đây là chủ đích của
chủ trang; đã ghi chú lại trong từng file HTML, ngay tại script chống nháy trắng.

## Việc cần bạn tự bổ sung (đã đánh dấu `TODO` trong code)

- [ ] Tên trường ở mục Học vấn (`index.html`)
- [ ] Email và link GitHub thật (footer + trang Liên hệ) — hiện đang là placeholder
- [ ] Link demo/GitHub thật cho từng dự án (`projects.html`, slider ở `index.html`)
- [ ] Ảnh chụp thật cho 3 dự án, thay cho SVG placeholder trong `assets/projects/`
- [ ] Ảnh đại diện thật, thay `assets/avatar.svg`
- [ ] Nút "Tải CV": hiện chưa có, thêm khi có file PDF (gợi ý: đặt file vào
      `assets/cv-nguyen-gia-huy.pdf` rồi thêm nút `<a class="btn btn-outline" href="./assets/cv-nguyen-gia-huy.pdf" download>Tải CV</a>` ở hero)
- [ ] Form liên hệ (`js/contact-form.js`) mới chỉ validate và hiện thông báo
      giả lập — cần nối một dịch vụ nhận form thật (Formspree, EmailJS, hoặc
      backend riêng) để email thật sự được gửi đi

## Giới hạn đã biết

Header và footer hiện đang chép tay ở cả 3 trang (đúng như buổi 3 có nhắc:
đây là giới hạn thật của HTML tĩnh, không phải lỗi thiết kế). Sửa nav ở một
trang cần sửa cả 3 — nếu có thêm thời gian, đây là ứng viên đầu tiên để đưa
vào một framework component sau này.

## Bảy tính năng tương tác (buổi 4)

1. Menu mobile — `aria-expanded`, đóng bằng ESC / bấm ra ngoài
2. Navbar đổi trạng thái khi cuộn — `IntersectionObserver`
3. Accordion FAQ — event delegation, chỉ mở một mục
4. Công tắc sáng/tối — `localStorage`, mặc định tối
5. Bộ đếm số liệu — `Intl.NumberFormat('vi-VN')`, chạy khi cuộn tới
6. Slider dự án nổi bật — tự viết, có `inert` cho slide ẩn, tự dừng khi hover/focus
7. Hiệu ứng lộ dần khi cuộn — tôn trọng `prefers-reduced-motion`

Bonus: nút lên đầu trang, bộ lọc dự án theo loại.
