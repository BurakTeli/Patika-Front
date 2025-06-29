import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "./", // ✅ BU SATIR EKLENDİ — Netlify için önemli
  plugins: [react()],
})
