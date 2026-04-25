import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// GitHub Pages: https://<user>.github.io/<repo>/
// - CI(Actions)에서는 상대 경로 base('./')로 빌드해 저장소 이름 대소문자·경로 불일치로 인한 404를 줄입니다.
// - 로컬 dev는 '/'.
const repoName = (process.env.GITHUB_REPOSITORY ?? '').split('/')[1]
const base = process.env.GITHUB_ACTIONS === 'true' ? './' : repoName ? `/${repoName}/` : '/'

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
})
