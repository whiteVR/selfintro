# XR · 메타버스 전문가 포트폴리오

React + Vite + TypeScript + Three.js(React Three Fiber)로 제작한 개인 소개(포트폴리오) 페이지입니다.
디자인 콘셉트: **몰입형 다크 XR** (네온 시안/퍼플, 3D 파티클 히어로, 스크롤 인터랙션).

## 로컬 실행

```bash
npm install      # 최초 1회
npm run dev      # 개발 서버 (http://localhost:5173)
npm run build    # 프로덕션 빌드 → dist/
npm run preview  # 빌드 결과 미리보기
```

## 콘텐츠 수정

모든 텍스트/경력/프로젝트 데이터는 한 파일에 모여 있습니다:

```
src/data/profile.ts
```

- `profile.name`, `profile.phone`, `profile.location` 은 원본 자료에서 비어 있어 **자리표시자**입니다. 실제 값으로 교체하세요.
- 프로필 사진은 `public/assets/이름1.png` 의 좌측 인물 영역을 크롭해 사용합니다. 별도 정사각형 사진이 있으면 `public/assets/`에 넣고 `profile.photo` 경로를 바꾸세요.

## 배포 루틴 (택 1)

### 1) GitHub Pages — 자동 (권장)
1. GitHub에 저장소 생성 후 push (`main` 브랜치)
2. 저장소 **Settings → Pages → Build and deployment → Source: GitHub Actions** 선택
3. 이후 `main`에 push할 때마다 `.github/workflows/deploy.yml`이 자동 빌드·배포

```bash
git init && git add . && git commit -m "init"
git branch -M main
git remote add origin https://github.com/<사용자>/<저장소>.git
git push -u origin main
```

### 2) GitHub Pages — 수동(gh-pages)
```bash
npm run deploy   # dist/를 gh-pages 브랜치로 푸시
```
(저장소 Settings → Pages → Source를 `gh-pages` 브랜치로 지정)

### 3) Vercel / Netlify — 무설정
- 저장소를 연결하면 자동 감지됩니다. 빌드 명령 `npm run build`, 출력 디렉터리 `dist`.

> `vite.config.ts`의 `base: './'` 덕분에 GitHub Pages 서브경로/Vercel/Netlify 어디에 올려도 asset 경로가 유효합니다.

## 기술 스택
React 18 · Vite 5 · TypeScript · Three.js / @react-three/fiber · CSS Modules
