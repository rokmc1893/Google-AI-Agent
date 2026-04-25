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

### 1) 저장소 설정 (최초 1회) — **브랜치 배포 방식**

`actions/deploy-pages` 방식은 저장소에서 **Pages 소스 = GitHub Actions** 로 켜져 있어야 해서, 설정이 비어 있으면 **404**가 자주 납니다.  
그래서 이 저장소는 더 단순한 방식으로 바꿨습니다: **`gh-pages` 브랜치에 빌드 결과(`dist`)를 푸시**하고, Pages에서는 **그 브랜치를 웹 루트로 서빙**합니다.

1. **저장소를 Public으로** (무료 계정 + Private이면 Pages가 막히는 경우가 많습니다.)  
   **Settings → General → Danger Zone → Change repository visibility → Make public**
2. **Actions가 브랜치에 쓸 수 있게 권한 허용** (이 단계 없으면 `gh-pages` 푸시가 실패합니다.)  
   **Settings → Actions → General → Workflow permissions** → **Read and write permissions** → Save
3. **한 번 워크플로 실행**  
   `main` 또는 `1주차`에 푸시하면 **Deploy to GitHub Pages** 워크플로가 돌고, 성공 시 **`gh-pages` 브랜치**가 생깁니다.
4. **Pages에 브랜치 연결**  
   **Settings → Pages** → **Build and deployment** → **Source: Deploy from a branch**  
   → Branch: **`gh-pages`** / Folder: **`/(root)`** → Save  
   (`gh-pages`가 드롭다운에 없으면 3번 워크플로가 끝난 뒤 새로고침합니다.)

### 2) 배포 이후 확인

- Actions에서 해당 실행이 **초록색(성공)** 인지 확인합니다.
- 잠시 후 `https://rokmc1893.github.io/Google-AI-Agent/` 로 접속합니다.

### 배포가 실패할 때 (자주 나는 원인)

| 증상 | 조치 |
| --- | --- |
| `remote: Permission denied` / 푸시 실패 | **Workflow permissions**를 **Read and write**로 바꿨는지 확인 |
| 사이트는 열리는데 **하얀 화면·404** | `vite.config.ts`의 `base`가 저장소 이름과 맞는지 확인 (CI에서는 `GITHUB_REPOSITORY`로 자동 설정) |
| Pages 설정에 **브랜치 선택이 안 보임** | 저장소 **Public** 여부, 그리고 **`gh-pages` 브랜치가 생성됐는지** 확인 |

자세한 제한은 [GitHub Pages limits](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits) 를 참고합니다.

### 3) 로컬에서 Pages와 동일한 경로로 빌드 테스트 (선택)

```bash
GITHUB_REPOSITORY=rokmc1893/Google-AI-Agent npm run build
npx vite preview
```
