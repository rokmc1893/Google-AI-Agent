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

배포는 **`gh-pages` 브랜치에 직접 푸시하지 않고**, GitHub이 제공하는 **Pages 전용 배포 API**를 씁니다. 그래서 예전처럼 Actions에 **Read and write**를 켤 필요가 없습니다(기본 **Read**로 충분).

1. **Settings → Pages** 로 이동합니다.
2. **Build and deployment** → **Source**를 **GitHub Actions** 로 바꿉니다.  
   (이전에 **Deploy from a branch** + `gh-pages` 로 두었다면, 반드시 **GitHub Actions** 로 바꿔 주세요.)

### 2) 배포 방법

- `main` 또는 `1주차` 브랜치에 푸시하면 워크플로가 `npm run build` 후 결과물을 Pages에 올립니다.
- Actions 탭에서 **Deploy to GitHub Pages** 워크플로가 초록색으로 끝나면, 위 Pages 주소로 접속해 확인합니다.

자세한 설명은 GitHub 문서 [Publishing with a custom GitHub Actions workflow](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#publishing-with-a-custom-github-actions-workflow) 를 참고하면 됩니다.

### 배포가 404로 실패할 때 (`Creating Pages deployment failed`)

Actions 로그에 **`Failed to create deployment (status: 404)`** 가 나오면, 코드 문제가 아니라 **저장소에서 GitHub Pages가 아직 “켜지지 않은” 상태**인 경우가 많습니다.

1. **Settings → Pages** 로 이동합니다.
2. **Build and deployment**에서 **Source**를 **`GitHub Actions`** 로 선택하고 저장합니다.  
   (한 번도 Pages를 켠 적이 없으면 이 설정이 비어 있어 배포 API가 404를 반환합니다.)
3. 저장소가 **비공개**인 경우, 무료 플랜에서는 Pages 사용 조건이 달라질 수 있으니 [GitHub Pages 제한](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits) 을 확인합니다.
4. 설정을 저장한 뒤, Actions에서 **실패한 워크플로를 “Re-run failed jobs”** 하거나, 빈 커밋으로 다시 푸시해 배포를 재시도합니다.

### 3) 로컬에서 Pages와 동일한 경로로 빌드 테스트 (선택)

```bash
GITHUB_REPOSITORY=rokmc1893/Google-AI-Agent npm run build
npx vite preview
```
