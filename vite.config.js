import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/mediakit/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})
