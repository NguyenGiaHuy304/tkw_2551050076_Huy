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
        about: resolve(__dirname, 'about.html'),
        skills: resolve(__dirname, 'skills.html'),
        projects: resolve(__dirname, 'projects.html'),
        projectDetail: resolve(__dirname, 'project-detail.html'),
        blog: resolve(__dirname, 'blog.html'),
        blogDetail: resolve(__dirname, 'blog-detail.html'),
        contact: resolve(__dirname, 'contact.html')
      }
    }
  }
});
