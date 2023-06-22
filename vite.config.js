import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    build: {
      outDir: "../backend/public", // this line place index.html in the public folder
      assetsDir: "./dist",
      emptyOutDir: true,
      chunkSizeWarningLimit: 1500

    },

  }
})