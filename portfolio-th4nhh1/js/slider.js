// js/slider.js — carousel dự án nổi bật, tự viết, có inert + tự chạy có thể dừng

function initSlider() {
  const root = document.getElementById("project-slider");
  const track = document.getElementById("project-track");
  if (!root || !track) return;

  const slides = Array.from(track.querySelectorAll(".slide"));
  const dotsWrap = document.getElementById("slide-dots");
  const prevBtn = document.getElementById("slide-prev");
  const nextBtn = document.getElementById("slide-next");
  if (!slides.length) return;

  let index = 0;
  let timer = null;
  const AUTOPLAY_MS = 5000;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Sinh chấm chỉ dẫn từ số slide thật, không viết cứng trong HTML
  const dots = slides.map((_, i) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.setAttribute("role", "tab");
    dot.setAttribute("aria-label", `Đi tới dự án ${i + 1}`);
    dot.className = "h-2.5 w-2.5 rounded-pill bg-line transition-colors aria-selected:bg-brand-600 dark:bg-line-invert dark:aria-selected:bg-accent-500";
    dot.addEventListener("click", () => go(i, true));
    dotsWrap?.appendChild(dot);
    return dot;
  });

  function go(next, userAction) {
    index = (next + slides.length) % slides.length;
    track.style.transform = `translateX(-${index * 100}%)`;
    slides.forEach((s, i) => s.toggleAttribute("inert", i !== index));
    dots.forEach((d, i) => d.setAttribute("aria-selected", String(i === index)));
    if (userAction) restart();
  }

  function start() {
    if (reduceMotion || slides.length < 2) return;
    stop();
    timer = setInterval(() => go(index + 1), AUTOPLAY_MS);
  }
  function stop() {
    if (timer) clearInterval(timer);
    timer = null;
  }
  function restart() {
    stop();
    start();
  }

  prevBtn?.addEventListener("click", () => go(index - 1, true));
  nextBtn?.addEventListener("click", () => go(index + 1, true));

  root.addEventListener("mouseenter", stop);
  root.addEventListener("mouseleave", start);
  root.addEventListener("focusin", stop);
  root.addEventListener("focusout", start);
  document.addEventListener("visibilitychange", () => (document.hidden ? stop() : start()));

  go(0);
  start();
}

initSlider();
