# ERP 대시보드 목업

React + TypeScript + Vite + [shadcn/ui](https://ui.shadcn.com)로 만든 간단한 ERP 대시보드 목업입니다. 화면의 모든 수치는 샘플 데이터입니다.

## 구성

- KPI 카드: 월 매출, 수주 건수, 미수금, 재고 부족 품목
- 월별 매출·매입 차트 (3/6/12개월 전환, 표 보기)
- 분류별 재고 금액 차트
- 최근 수주 목록 (상태 필터, 검색)
- 재고 부족 알림
- 라이트/다크 모드, 모바일 대응

대시보드 외의 메뉴는 "준비 중" 화면만 표시합니다.

## 실행

```bash
npm install
npm run dev
```

## 배포

`npm run build` 결과물(`dist/`)을 `gh-pages` 브랜치에 올리면 GitHub Pages에 반영됩니다. `main` 브랜치에 push하는 것만으로는 자동 배포되지 않습니다.

## shadcn 스킬

공식 shadcn 스킬이 `.claude/skills/shadcn`에 설치되어 있습니다.

```bash
npx skills add shadcn/ui --skill shadcn --agent claude-code
```
