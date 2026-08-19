// js/filter.js — lọc thẻ dự án theo nhóm, không dùng thư viện ngoài

function initFilter() {
  const root = document.getElementById("project-filters");
  const grid = document.getElementById("project-grid");
  if (!root || !grid) return;

  const buttons = Array.from(root.querySelectorAll("[data-filter]"));
  const cards = Array.from(grid.querySelectorAll(".project-card"));
  const empty = document.getElementById("project-empty");

  root.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-filter]");
    if (!btn) return;

    buttons.forEach((b) => b.setAttribute("aria-pressed", String(b === btn)));
    const filter = btn.dataset.filter;

    let visibleCount = 0;
    cards.forEach((card) => {
      const match = filter === "all" || card.dataset.category === filter;
      card.classList.toggle("hidden", !match);
      if (match) visibleCount += 1;
    });

    if (empty) empty.classList.toggle("hidden", visibleCount !== 0);
  });
}

initFilter();
