# 개발 블로그

Astro 기반의 개인 개발 블로그입니다. MDX, React, Tailwind CSS를 사용합니다.

## 요구 사항

- Node.js `>=22.12.0`
- npm

## 시작하기

### 1. 의존성 설치

```bash
npm install
```

### 2. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 `http://localhost:4321`로 접속합니다.

### 3. 프로덕션 빌드

```bash
npm run build
```

빌드 결과물은 `dist/` 디렉토리에 생성됩니다.

### 4. 빌드 결과 미리보기

```bash
npm run preview
```

## 명령어 요약

| 명령어                    | 설명                                        |
| :------------------------ | :------------------------------------------ |
| `npm install`             | 의존성 설치                                 |
| `npm run dev`             | 개발 서버 실행 (`localhost:4321`)           |
| `npm run build`           | 프로덕션 빌드 (`./dist/`)                   |
| `npm run preview`         | 빌드 결과 로컬 미리보기                     |
| `npm run astro -- --help` | Astro CLI 도움말                            |

## 프로젝트 구조

```
src/
├── assets/         # 폰트, 이미지 등 정적 자원
├── components/     # 재사용 가능한 컴포넌트
├── content/        # 블로그 포스트 (MDX)
│   └── blog/
├── layouts/        # 페이지 레이아웃
├── pages/          # 라우팅 페이지
├── styles/         # 전역 스타일
└── consts.ts       # 사이트 메타데이터 상수
```

## 설정

`src/consts.ts`에서 사이트 기본 정보를 수정합니다.

```ts
export const SITE_TITLE = '개발 블로그';
export const SITE_DESCRIPTION = '...';
export const SITE_AUTHOR = '...';
export const GITHUB_URL = 'https://github.com/your-username';
```

`astro.config.mjs`에서 배포 URL을 설정합니다.

```js
export default defineConfig({
  site: 'https://your-username.github.io',
  // ...
});
```

## 블로그 포스트 작성

`src/content/blog/` 디렉토리에 `.md` 또는 `.mdx` 파일을 추가합니다.

```markdown
---
title: '포스트 제목'
description: '포스트 설명'
pubDate: '2026-01-01'
---

본문 내용...
```

## 기술 스택

- [Astro](https://astro.build/) — 정적 사이트 프레임워크
- [React](https://react.dev/) — 인터랙티브 컴포넌트
- [Tailwind CSS](https://tailwindcss.com/) — 스타일링
- [MDX](https://mdxjs.com/) — 마크다운 + JSX
- [Giscus](https://giscus.app/) — 댓글 시스템 (GitHub Discussions 기반)
