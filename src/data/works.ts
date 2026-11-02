// 작업물 사진 목록 — 사진 파일은 src/assets/images/works/ 에 있습니다.
// 새 사진을 올리려면 그 폴더에 파일을 넣고 아래 목록에 한 줄 추가하세요.

export const CATEGORIES = [
  { key: 'lathe', title: '로구로 공예품', description: '목선반으로 돌려 깎은 그릇·받침·생활 소품' },
  { key: 'column', title: '기둥 · 난간 · 다리', description: '견본에 맞춰 같은 모양으로 수량 제작하는 몰딩 부재' },
  { key: 'furniture', title: '재단 · 가구 · 인테리어', description: '원목 재단부터 가구 프레임, 창살문까지' },
  { key: 'custom', title: '주문 제작 · 학생 작품', description: '간판, 조명, 전시 작품 등 하나뿐인 주문 제작' },
  { key: 'workshop', title: '작업장', description: '을지로 성창공예의 일하는 모습' },
] as const;

export type CategoryKey = (typeof CATEGORIES)[number]['key'];

const w = (file: string, caption: string) => ({
  src: `~/assets/images/works/${file}.jpg`,
  alt: caption,
  caption,
  category: file.split('-')[0] as CategoryKey,
});

export const WORKS = [
  w('lathe-80', '원목 받침대'),
  w('lathe-81', '나뭇결을 살린 받침대 한 쌍'),
  w('lathe-82', '소나무 결 원목 받침대'),
  w('lathe-83', '원목 받침대 — 수종별 비교'),
  w('lathe-84', '원목 받침대 두 가지'),
  w('lathe-85', '원목 볼'),
  w('lathe-79', '뚜껑 있는 원목 합(盒)'),
  w('lathe-25', '나팔형 원목 볼 한 쌍'),
  w('lathe-24', '나팔형 원목 볼'),
  w('lathe-28', '대형 원목 항아리'),
  w('lathe-21', '선반 가공한 그릇과 화병'),
  w('lathe-27', '원목 접시와 볼'),
  w('lathe-23', '대리석 무늬 도장 화병'),
  w('lathe-56', '대형 후추 그라인더 한 쌍'),
  w('lathe-05', '원목 후추 그라인더 세트'),
  w('lathe-01', '버섯·조롱박 모양 후추통'),
  w('lathe-69', '흑색 후추 그라인더'),
  w('lathe-70', '원목 후추·소금통 세트'),
  w('lathe-71', '원목 후추·소금통 세트'),
  w('lathe-72', '원목 후추·소금통 세트'),
  w('lathe-73', '원목 후추·소금통 네 가지'),
  w('lathe-74', '원목 후추·소금통 세트'),
  w('lathe-75', '원목 후추·소금통 네 가지'),
  w('lathe-77', '원목 후추·소금통 세트'),
  w('lathe-50', '원목 머그잔 세트'),
  w('lathe-51', '원목 찻잔과 수저통'),
  w('lathe-55', '옻칠 원목 공기와 수저'),
  w('lathe-52', '와인잔 원목 받침'),
  w('lathe-02', '원목 찻잔과 받침'),
  w('lathe-03', '뚜껑 찻잔 세트'),
  w('lathe-78', '원목 코스터'),
  w('lathe-88', '원목 나팔형 스마트폰 스피커'),
  w('lathe-89', '원목 나팔형 스마트폰 스피커'),

  w('column-04', '꽈배기·장식 기둥 견본'),
  w('column-14', '선반에서 가공 중인 기둥'),
  w('column-16', '선반에서 가공 중인 기둥'),
  w('column-12', '테이블 다리 수량 제작'),
  w('column-13', '난간 동자 수량 제작'),
  w('column-06', '계단 난간 동자'),
  w('column-15', '사각 난간 동자'),
  w('column-29', '난간 동자 출고 준비'),
  w('column-49', '난간 동자 적재'),
  w('column-37', '기둥 수량 생산'),
  w('column-19', '테이블 다리 묶음'),
  w('column-26', '화병형 가구 다리'),
  w('column-32', '가구 다리 견본'),
  w('column-10', '장식 기둥 머리'),
  w('column-17', '장식 기둥 머리 세트'),
  w('column-36', '금색 장식 기둥 머리'),
  w('column-43', '금색 볼 장식 봉'),
  w('column-11', '뾰족 장식 기둥'),
  w('column-30', '긴 장식 기둥 묶음'),
  w('column-09', '긴 원목 기둥'),
  w('column-35', '원목 봉 묶음'),
  w('column-18', '둥근 손잡이 막대 수량 가공'),
  w('column-31', '대형 기둥용 원목'),

  w('furniture-57', '전통 창살문'),
  w('furniture-42', '원목 원형 테이블'),
  w('furniture-22', '원목 스툴'),
  w('furniture-20', '곡선 가구 부재'),
  w('furniture-07', '원목 프레임 재단'),
  w('furniture-44', '원목 벤치 프레임'),
  w('furniture-45', '대형 원목 구조물'),
  w('furniture-48', '원목 계단 구조물'),

  w('custom-40', '원목 스탠드 조명'),
  w('custom-41', '원목 스탠드 조명'),
  w('custom-38', '전시용 조명 스탠드 제작'),
  w('custom-39', '전시용 조명 스탠드'),
  w('custom-53', '각인 원목 현판'),
  w('custom-34', '각인 원목 간판'),
  w('custom-33', '원목 와인 거치대'),
  w('custom-68', '원목 옷걸이 스탠드'),
  w('custom-87', '구름무늬 원목 트레이'),
  w('custom-86', '원목 조각 트레이 작업'),

  w('workshop-46', '을지로 성창공예 매장'),
  w('workshop-47', '매장 앞 출고 작업'),
  w('workshop-08', '직접 만들어 쓰는 선반 공구'),
];

export const worksBy = (key: CategoryKey) => WORKS.filter((item) => item.category === key);

// 첫 화면 슬라이드쇼와 대표 작업에 쓰는 사진
export const HERO_SLIDES = ['lathe-80', 'column-04', 'lathe-25', 'column-14', 'lathe-81', 'furniture-57'];
export const FEATURED = [
  'lathe-80',
  'column-13',
  'lathe-56',
  'custom-40',
  'lathe-25',
  'furniture-57',
  'column-36',
  'lathe-50',
];
export const pick = (files: string[]) =>
  files.map((file) => WORKS.find((item) => item.src.endsWith(`/${file}.jpg`))!).filter(Boolean);
