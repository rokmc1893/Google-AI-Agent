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

## 브랜치

- **작업은 `main`만** 사용하면 됩니다.
- **`gh-pages`** 는 GitHub Actions가 빌드 결과만 올리는 **배포 전용** 브랜치입니다. Pages가 동작하려면 필요하므로 **삭제하지 마세요.** (Code 탭에 보여도 정상입니다.)

## GitHub Pages — 이 저장소에서 쓸 주소

원격 저장소 이름이 **`Google-AI-Agent`** 이므로, 사이트 주소는 **아래 하나만** 맞습니다.

### **https://rokmc1893.github.io/Google-AI-Agent/**

`https://rokmc1893.github.io/landing-page/` 로 열면 **항상 404**가 납니다. (`landing-page`라는 **이름의 저장소**가 따로 있을 때만 그 주소가 열립니다. 지금 작업 중인 저장소와는 무관합니다.)

일반 규칙: **`https://<아이디>.github.io/<GitHub에 보이는 저장소 이름>/`**

저장소 이름을 바꾸면 URL도 같이 바뀝니다. (예: 이름을 `landing-page`로 바꾼 뒤 배포하면 `.../landing-page/`가 됩니다.)

### 1) 저장소 설정 (최초 1회) — **브랜치 배포 방식**

`actions/deploy-pages` 방식은 저장소에서 **Pages 소스 = GitHub Actions** 로 켜져 있어야 해서, 설정이 비어 있으면 **404**가 자주 납니다.  
그래서 이 저장소는 더 단순한 방식으로 바꿨습니다: **`gh-pages` 브랜치에 빌드 결과(`dist`)를 푸시**하고, Pages에서는 **그 브랜치를 웹 루트로 서빙**합니다.

1. **저장소를 Public으로** (무료 계정 + Private이면 Pages가 막히는 경우가 많습니다.)  
   **Settings → General → Danger Zone → Change repository visibility → Make public**
2. **Actions가 브랜치에 쓸 수 있게 권한 허용** (이 단계 없으면 `gh-pages` 푸시가 실패합니다.)  
   **Settings → Actions → General → Workflow permissions** → **Read and write permissions** → Save
3. **한 번 워크플로 실행**  
   **`main`** 에 푸시하면 **Deploy to GitHub Pages** 워크플로가 돌고, 성공 시 **`gh-pages` 브랜치**가 생기거나 갱신됩니다.
4. **Pages에 브랜치 연결**  
   **Settings → Pages** → **Build and deployment** → **Source: Deploy from a branch**  
   → Branch: **`gh-pages`** / Folder: **`/(root)`** → Save  
   (`gh-pages`가 드롭다운에 없으면 3번 워크플로가 끝난 뒤 새로고침합니다.)

### 2) 배포 이후 확인

- Actions에서 해당 실행이 **초록색(성공)** 인지 확인합니다.
- 잠시 후 **`https://rokmc1893.github.io/<저장소이름>/`** 로 접속합니다. (저장소 이름과 경로가 동일)

### 브라우저에 **「There isn't a GitHub Pages site here」** / **404** 가 뜰 때

이 문구는 **“이 주소에 GitHub Pages가 아직 연결되어 있지 않다”**는 뜻입니다. (앱 코드 오류와는 별개입니다.)

아래를 **위에서부터** 확인하세요.

1. **주소가 정확한지**  
   프로젝트 페이지는 **`https://rokmc1893.github.io/<저장소이름>/`** 처럼 **저장소 이름까지** 포함해야 합니다. (저장소를 `landing-page`로 바꿨다면 `.../landing-page/`)  
   `https://rokmc1893.github.io/` 만 열면 (특정 저장소 경로 없이) 대부분 이렇게 뜹니다.

2. **Pages 소스가 `gh-pages` 브랜치인지**  
   예전에 **Source: GitHub Actions** 로 두었다면, 지금 워크플로는 **`gh-pages`에 올리는 방식**이라 설정을 바꿔야 합니다.  
   **Settings → Pages** → **Deploy from a branch** → **`gh-pages`** / **`/(root)`** → **Save**  
   (여전히 **GitHub Actions**로 되어 있으면 이 주소에 사이트가 안 붙을 수 있습니다.)

3. **`gh-pages` 브랜치가 있는지**  
   GitHub **Code** 탭에서 브랜치를 **`gh-pages`** 로 바꿔 보세요.  
   없으면 Actions의 **Deploy to GitHub Pages** 워크플로가 실패했거나 아직 안 돌았습니다. **Read and write** 권한 후 다시 실행하세요.

4. **저장소가 Public인지**  
   Private이면 무료 계정에서 Pages가 막혀 이 화면이 나올 수 있습니다.

5. **저장 직후 1~5분** 정도 지나 다시 새로고침해 보세요.

### 배포가 실패할 때 (자주 나는 원인)

| 증상 | 조치 |
| --- | --- |
| `remote: Permission denied` / 푸시 실패 | **Workflow permissions**를 **Read and write**로 바꿨는지 확인 |
| 사이트는 열리는데 **하얀 화면·404** | 주소의 **저장소 이름**이 GitHub 저장소 이름과 같은지 확인. CI 빌드는 상대 `base`(`./`)이며 `gh-pages` **루트**에 올라갑니다. |
| Pages 설정에 **브랜치 선택이 안 보임** | 저장소 **Public** 여부, 그리고 **`gh-pages` 브랜치가 생성됐는지** 확인 |

자세한 제한은 [GitHub Pages limits](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits) 를 참고합니다.

### 3) 로컬에서 Pages와 비슷하게 빌드 테스트 (선택)

CI와 같이 **상대 경로(`./`) base**로 빌드하려면:

```bash
GITHUB_ACTIONS=true GITHUB_REPOSITORY=rokmc1893/<저장소이름> npm run build
npx vite preview
```

배포와 **동일한 절대 경로**로 로컬에서 보려면 `GITHUB_ACTIONS` 없이:

```bash
GITHUB_REPOSITORY=rokmc1893/<저장소이름> npm run build
npx vite preview
```

예: 저장소가 `landing-page`이면 빌드 후 `http://localhost:4173/landing-page/` 로 접속합니다.

또한 `public/.nojekyll` 을 두어 GitHub Pages의 Jekyll 처리로 인한 누락을 막습니다.
