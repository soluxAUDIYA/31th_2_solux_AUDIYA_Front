<<<<<<< HEAD
# 어디야 프론트엔드

React + TypeScript + Vite. 1/3까지 목업 데이터(MSW)로 전 화면을 만들고, 1/4부터 백엔드와 연동합니다.

## 시작하기

```bash
npm install
npx msw init public      # 최초 1회 (목업 API 워커 생성)
cp .env.example .env
npm run dev
```

`http://localhost:5173/dev` 에서 모든 화면으로 바로 이동할 수 있습니다.

## 역할 분담

| 담당 | 화면 (피그마 프로토타입 번호) | 작업 폴더 |
| --- | --- | --- |
| A | 회원가입·로그인 01~06, 보호자 알림·인증 18~19 | `features/auth`, `features/guardian`, `app`, `entities/guardian`, `entities/safety` |
| B | 메인 07~10 (홈·검색·즐겨찾기·경로·귀가 진행) | `features/home`, `shared/map`, `entities/place` |
| C | 메인 11~13 (AI 통화·SOS·귀가 완료), 마이페이지 14~17 | `features/call`, `features/mypage`, `entities/persona`, `entities/trip` |

모든 파일 첫 줄에 `// 담당: A | 피그마: 03` 형식으로 소유자와 화면 번호가 적혀 있습니다.

## 폴더 구조

```
src/
├─ app/                 라우터, 레이아웃, 개발용 화면 목록 (A)
├─ shared/
│  ├─ ui/               공통 UI — 파일마다 담당 표시 (A·B·C)
│  ├─ map/              지도 관련 (B)
│  ├─ lib/              apiClient, 입력값 검증, 포맷 (A)
│  ├─ mocks/handlers/   MSW 목업 API — 각자 담당 파일
│  └─ styles/           디자인 토큰 (A)
├─ entities/            두 명 이상이 쓰는 도메인 타입·컴포넌트
│  ├─ guardian/  (A)   safety/ (A)   persona/ (C)   place/ (B)   trip/ (C)
└─ features/
   ├─ auth/      (A) 01~06
   ├─ guardian/  (A) 18~19
   ├─ home/      (B) 07~10
   ├─ call/      (C) 11~13
   └─ mypage/    (C) 14~17
```

각 기능 폴더는 `pages/`(화면), `components/`(그 화면에서만 쓰는 부품), `api.ts`(API 함수)로 나뉩니다.

## 공유 컴포넌트 (다른 사람이 가져다 쓰는 것)

| 컴포넌트 | 소유 | 쓰는 곳 | 마감 |
| --- | --- | --- | --- |
| `PersonaAvatar`, 페르소나 데이터 | C | B의 07 홈 | 11/11 |
| `OtpField` | A | A의 03·04-1·06-2 | 11/12 |
| `GuardianVerifyForm` | A | C의 15 비상연락처 관리 | 11/20 |
| `SafetyPhraseFields` | A | C의 16 안전설정 관리 | 11/20 |
| `MiniMap` | B | C의 12 SOS 요청 완료, A의 19 | 11/20 |
| `ReturnStatsCard` | C | A의 19-B | 11/20 |

마감 전이라 아직 없으면 임시 마크업으로 진행하고, 완성되면 교체합니다.

## 작업 규칙

- **import 경로**: `@/` 는 `src/` 를 가리킵니다. 예: `import { Button } from '@/shared/ui';`
- **다른 사람 폴더 수정**: 직접 고치지 말고 소유자에게 요청하거나, 고쳤다면 PR에서 소유자를 리뷰어로 지정합니다.
- **라우트 추가**: `app/routes.ts`(ROUTES, devRoutes)와 `app/router.tsx`를 함께 수정합니다.
- **API 호출**: 반드시 `shared/lib/apiClient` 를 거치고, 응답 형식은 백엔드 명세에 맞춘 목업을 `shared/mocks/handlers/` 에 둡니다. 1/4에는 `.env`의 `VITE_USE_MOCK=false` 로 바꾸면 실제 API로 전환됩니다.

## 브랜치

- `main`: 항상 실행되는 상태 유지, 직접 push 금지
- `feat/<담당>-<화면번호>-<내용>` 예: `feat/A-03-identity-verify`, `feat/B-09-route-select`
- PR 올리기 전 `npm run typecheck` 통과 확인
=======
# AUDIYA Backend

AI 기반 안심귀가 서비스 '어디야'의 프론트 레포지토리입니다.

## 주요 기능
- 회원가입 및 로그인
- 사용자 및 비상연락처 관리
- 안심귀가 기록 및 위치 데이터 관리
- AI 오디오 메이트 연동
- 위험 감지 및 SOS 처리
- 보호자 SMS 알림

## Project
SOLUX 31기 2학기 프로젝트
>>>>>>> 6b45a58e98de5cd9f9c39a14a62fe5e15fa78fb3
