# 성창공예 홈페이지

서울 을지로 성창공예(로구로·몰딩·목공예 주문제작) 홈페이지입니다.
주소: https://bobby-choi7264.github.io

## 자주 고치는 곳

| 바꾸고 싶은 것 | 파일 |
| --- | --- |
| 전화번호·주소·영업시간·작업 분야 | `src/data/shop.ts` |
| 작업물 사진 목록·설명 | `src/data/works.ts` (사진은 `src/assets/images/works/`) |
| 소식(블로그) 글 | `src/data/post/` 에 `.md` 파일 추가 |
| 색상·글꼴 | `src/components/CustomStyles.astro` |

## 실행

```bash
npm install       # 처음 한 번
npm run dev       # 개발 서버 http://localhost:4321
npm run build     # 배포용 빌드 확인
```

main 브랜치에 push하면 GitHub Actions(`.github/workflows/deploy.yml`)가 자동으로 GitHub Pages에 배포합니다.

## 라이선스

[AstroWind](https://github.com/arthelokyo/astrowind) 템플릿(MIT, `LICENSE.md`)을 바탕으로 만들었습니다.
작업 사진과 가게 정보의 권리는 성창공예에 있습니다.
