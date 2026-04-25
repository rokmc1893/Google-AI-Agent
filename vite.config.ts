import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// GitHub Pages 프로젝트 사이트: https://<user>.github.io/<저장소이름>/
// - CI(Actions): 상대 base('./')로 빌드 (저장소 이름·대소문자 불일치로 인한 404 완화)
// - 로컬: GITHUB_REPOSITORY가 있으면 /<repo>/ 로 미리보기
const repoName = (process.env.GITHUB_REPOSITORY ?? '').split('/')[1]
const base =
  process.env.GITHUB_ACTIONS === 'true' ? './' : repoName ? `/${repoName}/` : '/'

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
})
