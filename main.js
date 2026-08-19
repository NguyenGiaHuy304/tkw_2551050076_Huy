// js/main.js — chạy sau cùng, chỉ làm việc còn lại (năm ở footer).
// Các module khác (nav.js, theme.js, faq.js, reveal.js, slider.js,
// filter.js, contact-form.js) tự gọi hàm khởi tạo của mình ở cuối file,
// và đều tự kiểm tra "phần tử của mình có tồn tại trên trang này không"
// trước khi làm gì — nên nạp chung một bộ script cho cả 3 trang vẫn an toàn.

const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = String(new Date().getFullYear());
