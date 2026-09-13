import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        services: resolve(__dirname, 'services.html'),
        susan: resolve(__dirname, 'susan.html'),
        coaching: resolve(__dirname, 'purity-of-hearts.html'),
        contact: resolve(__dirname, 'contact.html')
      }
    }
  }
});
