// js/faq.js — accordion, mỗi lúc chỉ mở một mục, dùng event delegation

function initFaq() {
  const root = document.getElementById("faq");
  if (!root) return;

  const triggers = Array.from(root.querySelectorAll("[data-faq-trigger]"));

  function setOpen(trigger, open) {
    const panel = document.getElementById(trigger.getAttribute("aria-controls"));
    trigger.setAttribute("aria-expanded", String(open));
    if (panel) panel.hidden = !open;
    const icon = trigger.querySelector("svg");
    if (icon) icon.style.transform = open ? "rotate(180deg)" : "";
  }

  root.addEventListener("click", (e) => {
    const trigger = e.target.closest("[data-faq-trigger]");
    if (!trigger) return;
    const willOpen = trigger.getAttribute("aria-expanded") !== "true";
    triggers.forEach((t) => setOpen(t, false));
    if (willOpen) setOpen(trigger, true);
  });
}

initFaq();
