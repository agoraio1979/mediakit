import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/mediakit/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    copyPublicDir: true,
    rollupOptions: {
      input: {
        main: './index.html'
      }
    }
  },
  // Copia i file JSON nella build
  publicDir: 'public'
})