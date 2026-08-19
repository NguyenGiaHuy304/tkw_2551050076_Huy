// js/theme.js — công tắc sáng/tối, đồng bộ với script inline trong <head>

function initTheme() {
  const btn = document.getElementById("theme-toggle");
  if (!btn) return;

  function sync() {
    const isDark = document.documentElement.classList.contains("dark");
    // Công tắc bật (aria-checked=true) khi đang ở chế độ SÁNG,
    // vì nút biểu trưng cho hành động "bật ánh sáng".
    btn.setAttribute("aria-checked", String(!isDark));
    btn.setAttribute("aria-label", isDark ? "Bật chế độ sáng" : "Bật chế độ tối");
  }

  btn.addEventListener("click", () => {
    const nowDark = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", nowDark);
    localStorage.setItem("theme", nowDark ? "dark" : "light");
    sync();
  });

  sync();
}

initTheme();
