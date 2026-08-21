import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: './',
  server: {
    port: 5175,
    open: true
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'pages/about.html'),
        skills: resolve(__dirname, 'pages/skills.html'),
        projects: resolve(__dirname, 'pages/projects.html'),
        projectDetail: resolve(__dirname, 'pages/project-detail.html'),
        blog: resolve(__dirname, 'pages/blog.html'),
        blogDetail: resolve(__dirname, 'pages/blog-detail.html'),
        contact: resolve(__dirname, 'pages/contact.html'),
      }
    }
  }
});