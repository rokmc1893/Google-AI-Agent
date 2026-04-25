import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// GitHub Pages: https://rokmc1893.github.io/Google-AI-Agent/
export default defineConfig({
  base: '/Google-AI-Agent/',
  plugins: [react(), tailwindcss()],
})
