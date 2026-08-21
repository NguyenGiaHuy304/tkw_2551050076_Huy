document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('js-enabled');

  // 1. HAMBURGER MENU TOGGLE
  const menuToggleBtn = document.getElementById('menu-toggle');
  const siteNav = document.getElementById('site-nav');

  if (menuToggleBtn && siteNav) {
    menuToggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      menuToggleBtn.classList.toggle('active');
      siteNav.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach((link) => {
      link.addEventListener('click', () => {
        menuToggleBtn.classList.remove('active');
        siteNav.classList.remove('active');
      });
    });

    document.addEventListener('click', (e) => {
      if (!siteNav.contains(e.target) && !menuToggleBtn.contains(e.target)) {
        menuToggleBtn.classList.remove('active');
        siteNav.classList.remove('active');
      }
    });
  }

  // 2. THEME TOGGLE
  const themeToggleBtn = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem('theme') || 'dark';

  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeButtonText(savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      updateThemeButtonText(newTheme);
    });
  }

  function updateThemeButtonText(theme) {
    if (themeToggleBtn) {
      themeToggleBtn.textContent = theme === 'dark' ? '☀️ Light' : '🌙 Dark';
    }
  }

  // 3. SCROLL REVEAL ANIMATION
  const revealElements = document.querySelectorAll('.reveal');
  
  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    revealElements.forEach((el) => {
      const elementTop = el.getBoundingClientRect().top;
      if (elementTop < windowHeight - 80) {
        el.classList.add('active');
      }
    });
  };

  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();
});