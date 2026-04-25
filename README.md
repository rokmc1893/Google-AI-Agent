# Google-AI-Agent

Google AI Agent 과정 저장소입니다. 현재 디렉터리에는 **Ruby Kiwi Web** 랜딩 페이지(React + Vite + TypeScript + Tailwind CSS v4)가 포함되어 있습니다.

## 주차별 제출 계획

아래 순서로 주차별 산출물을 나누어 커밋·푸시합니다.

| 주차   | 과제 제목     | 설명 |
| ------ | ------------- | ---- |
| 1주차  | **1차 과제**  | 초기 구조·히어로·스타일 기반 |
| 2주차  | **2차 과제**  | 본문·섹션·이미지 배치 |
| 3주차  | **3차 과제**  | 인터랙션·애니메이션(GSAP 등) |
| 4주차  | **4차 과제**  | 다국어·접근성·반응형 다듬기 |
| 5주차  | **5차 과제**  | 성능·빌드·에셋 정리 |
| 6주차  | **6차 과제**  | 마무리·문서·배포 준비 |

각 주차가 끝날 때 커밋 메시지에 `1차 과제`, `2차 과제`처럼 **차수 제목**을 넣어 두면 이후에 찾기 쉽습니다.

## Ruby Kiwi Web — 로컬 실행

```bash
npm install
npm run dev
```

## 빌드

```bash
npm run build
```

## 원격 저장소

- [Google-AI-Agent](https://github.com/rokmc1893/Google-AI-Agent)

## GitHub Pages 과제 제출 (예: `xinto99.github.io/landing-page/` 형식)

배포가 끝나면 주소는 다음 형태입니다.

`https://rokmc1893.github.io/Google-AI-Agent/`

(저장소 이름이 바뀌면 마지막 경로만 같이 바뀝니다.)

### 1) 저장소 설정 (최초 1회)

**무료 GitHub 계정에서는 비공개(Private) 저장소에 GitHub Pages를 켤 수 없습니다.**  
Pages 설정 화면에 “Upgrade or make this repository public…”만 보이면, 먼저 저장소를 **Public**으로 바꿔야 **Build and deployment** 블록이 나타납니다.

1. **Settings → General** → 맨 아래 **Danger Zone** → **Change repository visibility** → **Make public** (과제 제출용으로 흔히 사용).
2. **Settings → Pages** 로 이동합니다.
3. **Build and deployment** → **Source**를 **GitHub Actions** 로 바꿉니다.

배포는 **`gh-pages` 브랜치에 직접 푸시하지 않고**, GitHub이 제공하는 **Pages 전용 배포 API**를 씁니다. Actions 기본 토큰 권한(**Read** 위주)으로 동작합니다.

### 2) 배포 방법

- `main` 또는 `1주차` 브랜치에 푸시하면 워크플로가 `npm run build` 후 결과물을 Pages에 올립니다.
- Actions 탭에서 **Deploy to GitHub Pages** 워크플로가 초록색으로 끝나면, 위 Pages 주소로 접속해 확인합니다.

자세한 설명은 GitHub 문서 [Publishing with a custom GitHub Actions workflow](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#publishing-with-a-custom-github-actions-workflow) 를 참고하면 됩니다.

### 배포가 404로 실패할 때 (`Get Pages site failed` / `Creating Pages deployment failed`)

Actions 로그에 아래가 보이면 **앱 코드 문제가 아니라 Pages 설정/API 문제**입니다.

- `Get Pages site failed` … `repository has Pages enabled`
- `Failed to create deployment (status: 404)`

**대부분 순서는 다음 중 하나입니다.**

1. 저장소가 **Private**이라 Pages 자체가 비활성 → **Public**으로 전환 후 다시 **Settings → Pages**를 연다.
2. Pages는 켜졌는데 **Source가 GitHub Actions가 아님** → **Source: GitHub Actions** 로 저장한다.
3. 저장 후 Actions에서 **Re-run failed jobs** 하거나 새 커밋을 푸시한다.

자세한 제한은 [GitHub Pages limits](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits) 를 참고합니다.

### 3) 로컬에서 Pages와 동일한 경로로 빌드 테스트 (선택)

```bash
GITHUB_REPOSITORY=rokmc1893/Google-AI-Agent npm run build
npx vite preview
```
