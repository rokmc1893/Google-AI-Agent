import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// GitHub Pages 프로젝트 사이트: https://<user>.github.io/<repo>/
// CI에서만 GITHUB_REPOSITORY가 잡히므로, 로컬 `npm run dev`는 base가 '/'로 유지됩니다.
const repoName = (process.env.GITHUB_REPOSITORY ?? '').split('/')[1]
const base = repoName ? `/${repoName}/` : '/'

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
})
