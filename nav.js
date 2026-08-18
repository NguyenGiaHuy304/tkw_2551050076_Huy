// js/nav.js — menu mobile, navbar khi cuộn, nút lên đầu trang

export function initNav() {
  const toggle = document.getElementById("nav-toggle");
  const menu = document.getElementById("mobile-menu");
  if (!toggle || !menu) return;

  const icon = document.getElementById("nav-toggle-icon");
  const iconMenu = "M4 6h16M4 12h16M4 18h16";
  const iconClose = "M6 18L18 6M6 6l12 12";

  function setOpen(open) {
    menu.classList.toggle("hidden", !open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Đóng menu" : "Mở menu");
    document.body.classList.toggle("overflow-hidden", open);
    if (icon) icon.setAttribute("d", open ? iconClose : iconMenu);
  }

  toggle.addEventListener("click", () => {
    setOpen(toggle.getAttribute("aria-expanded") !== "true");
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
      setOpen(false);
      toggle.focus();
    }
  });

  document.addEventListener("click", (e) => {
    const header = document.getElementById("site-header");
    if (toggle.getAttribute("aria-expanded") === "true" && header && !header.contains(e.target)) {
      setOpen(false);
    }
  });

  // Đóng menu mobile khi màn hình phóng lên desktop
  window.matchMedia("(min-width: 1024px)").addEventListener("change", (e) => {
    if (e.matches) setOpen(false);
  });
}

export function initHeaderOnScroll() {
  const header = document.getElementById("site-header");
  const sentinel = document.getElementById("nav-sentinel");
  if (!header || !sentinel) return;

  const observer = new IntersectionObserver(([entry]) => {
    const scrolled = !entry.isIntersecting;
    header.classList.toggle("shadow-sm", scrolled);
    header.classList.toggle("border-line", scrolled);
    header.classList.toggle("dark:border-line-invert", scrolled);
  });
  observer.observe(sentinel);
}

export function initToTop() {
  const btn = document.getElementById("to-top");
  if (!btn) return;

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
