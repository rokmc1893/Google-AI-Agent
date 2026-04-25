import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// GitHub Pages: https://<user>.github.io/<repo>/landingpage/
// - CI(Actions)에서는 상대 base('./') — dist가 gh-pages/landingpage/에 올라가도 에셋 경로가 맞습니다.
// - 로컬 미리보기(저장소 이름 있음)는 실제 URL과 동일한 base로 맞춥니다.
const pagesSubpath = 'landingpage'
const repoName = (process.env.GITHUB_REPOSITORY ?? '').split('/')[1]
const base =
  process.env.GITHUB_ACTIONS === 'true'
    ? './'
    : repoName
      ? `/${repoName}/${pagesSubpath}/`
      : '/'

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
})
