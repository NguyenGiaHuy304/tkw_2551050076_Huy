// js/main.js — điểm khởi động duy nhất cho index.html, projects.html, contact.html

import { initNav, initHeaderOnScroll, initToTop } from "./nav.js";
import { initTheme } from "./theme.js";
import { initFaq } from "./faq.js";
import { initReveal, initCounters } from "./reveal.js";
import { initSlider } from "./slider.js";
import { initFilter } from "./filter.js";
import { initContactForm } from "./contact-form.js";

initNav();
initHeaderOnScroll();
initToTop();
initTheme();
initFaq();
initReveal();
initCounters();
initSlider();
initFilter();
initContactForm();

const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = String(new Date().getFullYear());
