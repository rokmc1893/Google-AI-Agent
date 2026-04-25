import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// 프로덕션(Pages): /Google-AI-Agent/ — 로컬 `npm run dev`는 base `/`로 열어 CSS/JS 404(글만 보임) 방지
export default defineConfig(({ mode }) => ({
  base: mode === 'development' ? '/' : '/Google-AI-Agent/',
  plugins: [react(), tailwindcss()],
}))
