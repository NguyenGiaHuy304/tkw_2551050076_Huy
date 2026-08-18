// js/contact-form.js — kiểm tra hợp lệ phía trình duyệt cho form liên hệ.
// Trang này chưa nối backend thật: khi submit hợp lệ, chỉ hiện thông báo
// thành công. Muốn gửi thật, nối endpoint (Formspree, EmailJS, API riêng...)
// vào phần TODO bên dưới.

export function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  const status = document.getElementById("form-status");

  const rules = {
    fullname: (el) => (el.value.trim() ? "" : "Vui lòng nhập họ tên."),
    email: (el) => (el.validity.valid ? "" : "Email chưa đúng định dạng."),
    phone: (el) => (el.value === "" || el.validity.valid ? "" : "Số điện thoại gồm 10 chữ số, bắt đầu bằng 0."),
    message: (el) => (el.value.trim() ? "" : "Vui lòng nhập nội dung."),
    consent: (el) => (el.checked ? "" : "Cần đồng ý để mình liên hệ lại."),
  };

  function showError(name, message) {
    const el = form.elements[name];
    const errorEl = document.getElementById(`${el.id}-error`);
    if (errorEl) errorEl.textContent = message;
  }

  function validate() {
    let ok = true;
    Object.entries(rules).forEach(([name, rule]) => {
      const el = form.elements[name];
      if (!el) return;
      const message = rule(el);
      showError(name, message);
      if (message) ok = false;
    });
    return ok;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!validate()) {
      status.textContent = "Có vài ô cần kiểm tra lại ở trên.";
      status.className = "mt-3 text-sm text-brand-600 dark:text-accent-500";
      return;
    }

    // TODO: thay đoạn dưới bằng fetch("...", { method: "POST", body: ... })
    // tới dịch vụ nhận form thật khi có backend.
    status.textContent = "Cảm ơn bạn! Mình đã nhận được tin nhắn và sẽ phản hồi sớm nhất có thể.";
    status.className = "mt-3 text-sm text-green-600";
    form.reset();
  });

  // Xóa lỗi ngay khi người dùng sửa lại ô đó
  form.addEventListener("input", (e) => {
    const name = e.target.name;
    if (rules[name]) showError(name, "");
  });
}
