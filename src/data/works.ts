// 작업물 사진 목록 — 사진 파일은 src/assets/images/works/ 에 있습니다.
// 새 사진을 올리려면 그 폴더에 파일을 넣고 아래 목록에 한 줄 추가하세요.
// w('파일 이름', '한국어 설명', '영어', '일본어', '중국어') 순서입니다.
import type { Lang } from '~/i18n';

export const CATEGORY_KEYS = ['lathe', 'column', 'furniture', 'custom', 'workshop'] as const;
export type CategoryKey = (typeof CATEGORY_KEYS)[number];

type Captions = Record<Lang, string>;

const w = (file: string, ko: string, en: string, ja: string, zh: string) => ({
  file,
  src: `~/assets/images/works/${file}.jpg`,
  captions: { ko, en, ja, zh } as Captions,
  category: file.split('-')[0] as CategoryKey,
});

const ALL = [
  w('lathe-80', '원목 받침대', 'Solid wood stand', '無垢材の台', '原木底座'),
  w(
    'lathe-81',
    '나뭇결을 살린 받침대 한 쌍',
    'A pair of stands showing the grain',
    '木目を生かした台（一対）',
    '保留木纹的底座一对'
  ),
  w('lathe-82', '소나무 결 원목 받침대', 'Pine-grain wooden stand', '松の木目の台', '松木纹原木底座'),
  w(
    'lathe-83',
    '원목 받침대 — 수종별 비교',
    'Wooden stands in different woods',
    '無垢材の台 — 樹種くらべ',
    '原木底座——不同木种对比'
  ),
  w('lathe-84', '원목 받침대 두 가지', 'Two wooden stands', '無垢材の台 二種', '两款原木底座'),
  w('lathe-85', '원목 볼', 'Wooden bowl', '木のボウル', '原木碗'),
  w('lathe-79', '뚜껑 있는 원목 합(盒)', 'Lidded wooden box', 'ふた付きの木の合（盒）', '带盖原木盒'),
  w(
    'lathe-25',
    '나팔형 원목 볼 한 쌍',
    'A pair of flared wooden bowls',
    'ラッパ形の木のボウル（一対）',
    '喇叭形原木碗一对'
  ),
  w('lathe-24', '나팔형 원목 볼', 'Flared wooden bowl', 'ラッパ形の木のボウル', '喇叭形原木碗'),
  w('lathe-28', '대형 원목 항아리', 'Large wooden jar', '大きな木の壺', '大型原木罐'),
  w(
    'lathe-21',
    '선반 가공한 그릇과 화병',
    'Lathe-turned bowl and vase',
    'ろくろで挽いた器と花瓶',
    '车床旋制的碗与花瓶'
  ),
  w('lathe-27', '원목 접시와 볼', 'Wooden plates and bowls', '木の皿とボウル', '原木盘与碗'),
  w(
    'lathe-23',
    '대리석 무늬 도장 화병',
    'Vase with a marble-pattern finish',
    '大理石模様に塗装した花瓶',
    '大理石纹涂装花瓶'
  ),
  w(
    'lathe-56',
    '대형 후추 그라인더 한 쌍',
    'A pair of large pepper mills',
    '大きなペッパーミル（一対）',
    '大型胡椒研磨器一对'
  ),
  w('lathe-05', '원목 후추 그라인더 세트', 'Wooden pepper mill set', '木のペッパーミル セット', '原木胡椒研磨器套装'),
  w(
    'lathe-01',
    '버섯·조롱박 모양 후추통',
    'Mushroom- and gourd-shaped pepper shakers',
    'キノコ・ひょうたん形のこしょう入れ',
    '蘑菇与葫芦造型胡椒罐'
  ),
  w('lathe-69', '흑색 후추 그라인더', 'Black pepper mill', '黒いペッパーミル', '黑色胡椒研磨器'),
  w('lathe-70', '원목 후추·소금통 세트', 'Wooden salt & pepper set', '木の塩・こしょう入れ セット', '原木胡椒盐罐套装'),
  w('lathe-71', '원목 후추·소금통 세트', 'Wooden salt & pepper set', '木の塩・こしょう入れ セット', '原木胡椒盐罐套装'),
  w('lathe-72', '원목 후추·소금통 세트', 'Wooden salt & pepper set', '木の塩・こしょう入れ セット', '原木胡椒盐罐套装'),
  w(
    'lathe-73',
    '원목 후추·소금통 네 가지',
    'Four wooden salt & pepper shakers',
    '木の塩・こしょう入れ 四種',
    '四款原木胡椒盐罐'
  ),
  w('lathe-74', '원목 후추·소금통 세트', 'Wooden salt & pepper set', '木の塩・こしょう入れ セット', '原木胡椒盐罐套装'),
  w(
    'lathe-75',
    '원목 후추·소금통 네 가지',
    'Four wooden salt & pepper shakers',
    '木の塩・こしょう入れ 四種',
    '四款原木胡椒盐罐'
  ),
  w('lathe-77', '원목 후추·소금통 세트', 'Wooden salt & pepper set', '木の塩・こしょう入れ セット', '原木胡椒盐罐套装'),
  w('lathe-50', '원목 머그잔 세트', 'Wooden mug set', '木のマグ セット', '原木马克杯套装'),
  w('lathe-51', '원목 찻잔과 수저통', 'Wooden teacup and utensil holder', '木の湯のみと箸立て', '原木茶杯与筷筒'),
  w(
    'lathe-55',
    '옻칠 원목 공기와 수저',
    'Lacquered wooden rice bowls and spoons',
    '漆塗りの木の椀と匙',
    '漆器原木饭碗与汤匙'
  ),
  w('lathe-52', '와인잔 원목 받침', 'Wooden wine glass stand', 'ワイングラスの木の台', '原木红酒杯托'),
  w('lathe-02', '원목 찻잔과 받침', 'Wooden teacup and saucer', '木の湯のみと茶托', '原木茶杯与杯托'),
  w('lathe-03', '뚜껑 찻잔 세트', 'Lidded teacup set', 'ふた付き湯のみ セット', '带盖茶杯套装'),
  w('lathe-78', '원목 코스터', 'Wooden coasters', '木のコースター', '原木杯垫'),
  w(
    'lathe-88',
    '원목 나팔형 스마트폰 스피커',
    'Flared wooden smartphone speaker',
    'ラッパ形の木のスマホスピーカー',
    '喇叭形原木手机扩音器'
  ),
  w(
    'lathe-89',
    '원목 나팔형 스마트폰 스피커',
    'Flared wooden smartphone speaker',
    'ラッパ形の木のスマホスピーカー',
    '喇叭形原木手机扩音器'
  ),
  w(
    'lathe-101',
    '선반 위의 작은 원목 망치들',
    'Small wooden mallets on the lathe',
    'ろくろ台の上の小さな木槌',
    '车床上的小木槌'
  ),
  w(
    'lathe-102',
    '제과점 원목 밀대와 거치대',
    'Wooden rolling pins and rack for a bakery',
    'パン屋の木製めん棒とラック',
    '面包店的原木擀面杖与架子'
  ),
  w(
    'lathe-103',
    '병 모양 원목 소품 수량 제작',
    'Bottle-shaped wooden pieces made in volume',
    '瓶形の木製小物の量産',
    '批量制作的瓶形木件'
  ),
  w('lathe-104', '병 모양 원목 소품', 'Bottle-shaped wooden pieces', '瓶形の木製小物', '瓶形木件'),
  w('lathe-105', '원목 공구 손잡이', 'Wooden tool handle', '木製の工具の柄', '原木工具手柄'),
  w(
    'lathe-106',
    '원목 목탁 수량 제작',
    'Wooden moktak (temple blocks) made in volume',
    '木魚（モクタク）の量産',
    '批量制作的木鱼'
  ),

  w(
    'column-04',
    '꽈배기·장식 기둥 견본',
    'Twisted and decorative column samples',
    'ねじり・装飾柱の見本',
    '麻花柱与装饰柱样品'
  ),
  w(
    'column-14',
    '선반에서 가공 중인 기둥',
    'A column being turned on the lathe',
    'ろくろで加工中の柱',
    '车床上正在加工的柱子'
  ),
  w(
    'column-16',
    '선반에서 가공 중인 기둥',
    'A column being turned on the lathe',
    'ろくろで加工中の柱',
    '车床上正在加工的柱子'
  ),
  w('column-12', '테이블 다리 수량 제작', 'Table legs made in volume', 'テーブル脚の量産', '批量制作的桌腿'),
  w('column-13', '난간 동자 수량 제작', 'Balusters made in volume', '手すり子の量産', '批量制作的栏杆柱'),
  w('column-06', '계단 난간 동자', 'Stair balusters', '階段の手すり子', '楼梯栏杆柱'),
  w('column-15', '사각 난간 동자', 'Square balusters', '角形の手すり子', '方形栏杆柱'),
  w('column-29', '난간 동자 출고 준비', 'Balusters ready for shipping', '出荷準備中の手すり子', '待出货的栏杆柱'),
  w('column-49', '난간 동자 적재', 'Stacked balusters', '積み上げた手すり子', '堆放的栏杆柱'),
  w('column-37', '기둥 수량 생산', 'Columns in volume production', '柱の量産', '批量生产的柱子'),
  w('column-19', '테이블 다리 묶음', 'Bundled table legs', '束ねたテーブル脚', '成捆的桌腿'),
  w('column-26', '화병형 가구 다리', 'Vase-shaped furniture legs', '花瓶形の家具脚', '花瓶形家具腿'),
  w('column-32', '가구 다리 견본', 'Furniture leg samples', '家具脚の見本', '家具腿样品'),
  w('column-10', '장식 기둥 머리', 'Decorative column tops', '装飾柱の頭', '装饰柱头'),
  w('column-17', '장식 기둥 머리 세트', 'Set of decorative column tops', '装飾柱の頭 セット', '装饰柱头套装'),
  w('column-36', '금색 장식 기둥 머리', 'Gold-finished column tops', '金色の装飾柱頭', '金色装饰柱头'),
  w('column-43', '금색 볼 장식 봉', 'Rods with gold ball finials', '金色の玉飾り付きの棒', '金色圆球装饰杆'),
  w('column-11', '뾰족 장식 기둥', 'Pointed decorative columns', '先のとがった装飾柱', '尖顶装饰柱'),
  w('column-30', '긴 장식 기둥 묶음', 'Bundle of long decorative columns', '長い装飾柱の束', '成捆的长装饰柱'),
  w('column-09', '긴 원목 기둥', 'Long solid wood columns', '長い無垢材の柱', '长原木柱'),
  w('column-35', '원목 봉 묶음', 'Bundle of wooden rods', '木の丸棒の束', '成捆的原木圆棒'),
  w(
    'column-18',
    '둥근 손잡이 막대 수량 가공',
    'Round handle rods made in volume',
    '丸い取っ手棒の量産加工',
    '批量加工的圆把手棒'
  ),
  w('column-31', '대형 기둥용 원목', 'Timber for large columns', '大きな柱用の原木', '大型柱用原木'),
  w('column-107', '화병형 난간 동자', 'Vase-shaped balusters', '花瓶形の手すり子', '花瓶形栏杆柱'),
  w('column-108', '긴 장식 기둥 한 쌍', 'A pair of tall decorative columns', '背の高い装飾柱（一対）', '一对高装饰柱'),
  w('column-109', '구슬 머리 기둥', 'Columns with ball tops', '玉頭の柱', '圆球柱头的柱子'),
  w('column-110', '묶어 둔 난간 동자', 'Bundled balusters', '束ねた手すり子', '成捆的栏杆柱'),
  w(
    'column-111',
    '선반에서 깎고 있는 다리',
    'A leg being turned on the lathe',
    'ろくろで挽いている脚',
    '车床上正在车削的腿'
  ),
  w(
    'column-112',
    '선반에서 깎고 있는 원뿔형 부재',
    'A tapered piece being turned on the lathe',
    'ろくろで挽いている円すい形の部材',
    '车床上正在车削的锥形部件'
  ),
  w(
    'column-113',
    '뾰족 머리 장식 기둥 네 개',
    'Four spire-topped decorative posts',
    'とがった頭の装飾柱 四本',
    '四根尖顶装饰柱'
  ),
  w('column-114', '구슬 이음 기둥 묶음', 'Stacked bead-turned columns', '玉つなぎの柱の束', '成排的串珠柱'),
  w('column-115', '선반 위의 구슬 장식 봉', 'A beaded rod on the lathe', 'ろくろ上の玉飾りの棒', '车床上的串珠装饰杆'),
  w('column-116', '홈을 새긴 구슬 장식 봉', 'Beaded rod with carved grooves', '溝を刻んだ玉飾りの棒', '刻槽串珠装饰杆'),
  w('column-117', '흰색 도장 장식 기둥', 'White-painted decorative column', '白塗装の装飾柱', '白色涂装装饰柱'),
  w('column-118', '촛대형 장식 기둥', 'Candlestick-style decorative columns', '燭台形の装飾柱', '烛台形装饰柱'),
  w('column-119', '가구 다리 묶음', 'A batch of furniture legs', '家具脚の一群', '一批家具腿'),
  w('column-120', '긴 기둥 다섯 개', 'Five tall columns', '長い柱 五本', '五根长柱'),
  w('column-121', '홈 파인 원형 기둥', 'Fluted round columns', '溝彫りの丸柱', '凹槽圆柱'),
  w(
    'column-122',
    '선반에서 가공 중인 굵은 부재',
    'A thick piece being turned on the lathe',
    'ろくろで加工中の太い部材',
    '车床上加工中的粗部件'
  ),
  w('column-123', '선반에서 가공 중인 봉', 'A rod being turned on the lathe', 'ろくろで加工中の棒', '车床上加工中的杆'),
  w('column-124', '꽈배기 계단 엄지기둥', 'Twisted stair newel post', 'ねじり形の階段親柱', '麻花楼梯起步柱'),
  w('column-125', '구슬 머리 계단 엄지기둥', 'Ball-topped stair newel posts', '玉頭の階段親柱', '圆球顶楼梯起步柱'),
  w('column-126', '출고를 기다리는 엄지기둥', 'Newel posts waiting to ship', '出荷を待つ親柱', '待出货的起步柱'),

  w('furniture-57', '전통 창살문', 'Traditional lattice door', '伝統的な格子戸', '传统窗棂门'),
  w('furniture-42', '원목 원형 테이블', 'Round solid wood table', '無垢材の丸テーブル', '原木圆桌'),
  w('furniture-22', '원목 스툴', 'Wooden stool', '木のスツール', '原木凳'),
  w('furniture-20', '곡선 가구 부재', 'Curved furniture parts', '曲線の家具部材', '曲线家具部件'),
  w('furniture-07', '원목 프레임 재단', 'Cutting wooden frames', '無垢材フレームの裁断', '原木框架裁切'),
  w('furniture-44', '원목 벤치 프레임', 'Wooden bench frame', '木のベンチフレーム', '原木长凳框架'),
  w('furniture-45', '대형 원목 구조물', 'Large wooden structure', '大型の木の構造物', '大型原木结构'),
  w('furniture-48', '원목 계단 구조물', 'Wooden stair structure', '木の階段構造', '原木楼梯结构'),
  w(
    'furniture-127',
    '원목 X자 접이식 거치대',
    'Folding X-frame wooden stand',
    '木製のX字折りたたみ台',
    '原木X形折叠架'
  ),
  w('furniture-128', '흰색 테이블 받침 기둥', 'White pedestal table base', '白いテーブルの脚柱', '白色桌子底座柱'),
  w(
    'furniture-129',
    '원뿔 다리 원목 사이드 테이블',
    'Side table with a conical wooden base',
    '円すい脚の木製サイドテーブル',
    '锥形底座原木边桌'
  ),

  w('custom-40', '원목 스탠드 조명', 'Wooden floor lamp', '木のスタンド照明', '原木落地灯'),
  w('custom-41', '원목 스탠드 조명', 'Wooden floor lamp', '木のスタンド照明', '原木落地灯'),
  w(
    'custom-38',
    '전시용 조명 스탠드 제작',
    'Making lamp stands for an exhibition',
    '展示用照明スタンドの制作',
    '展览用灯架制作'
  ),
  w('custom-39', '전시용 조명 스탠드', 'Lamp stands for an exhibition', '展示用照明スタンド', '展览用灯架'),
  w('custom-53', '각인 원목 현판', 'Engraved wooden plaque', '彫刻入りの木の扁額', '雕刻原木匾额'),
  w('custom-34', '각인 원목 간판', 'Engraved wooden signboard', '彫刻入りの木の看板', '雕刻原木招牌'),
  w('custom-33', '원목 와인 거치대', 'Wooden wine rack', '木のワインラック', '原木红酒架'),
  w('custom-68', '원목 옷걸이 스탠드', 'Wooden coat stand', '木のコートスタンド', '原木衣帽架'),
  w('custom-87', '구름무늬 원목 트레이', 'Wooden tray with a cloud pattern', '雲模様の木のトレー', '云纹原木托盘'),
  w('custom-86', '원목 조각 트레이 작업', 'Carving a wooden tray', '木のトレーの彫刻作業', '原木托盘雕刻'),
  w('custom-130', 'T자 원목 손잡이', 'T-shaped wooden handle', 'T字形の木製取っ手', 'T形原木把手'),
  w('custom-131', '원목 채와 공 세트', 'Wooden mallets and balls', '木製のスティックとボール', '原木球杆与球'),
  w('custom-132', '긴 원목 패들', 'Long wooden paddles', '長い木製パドル', '长原木桨'),
  w('custom-133', '원목 배 키(타륜)', 'Wooden ship’s wheel', '木製の舵輪', '原木船舵轮'),
  w('custom-134', '연꽃 모양 조각 부재', 'Lotus-shaped carved pieces', '蓮の花形の彫刻部材', '莲花形雕刻部件'),
  w('custom-135', '관절이 움직이는 원목 인형', 'Jointed wooden figure', '関節が動く木の人形', '关节可动的原木人偶'),
  w('custom-136', '원목 숟가락', 'Wooden spoons', '木のスプーン', '原木勺子'),

  w(
    'workshop-46',
    '을지로 성창공예 매장',
    'The Seongchang Craft workshop in Euljiro',
    '乙支路のソンチャン工芸',
    '乙支路 Seongchang 工艺店面'
  ),
  w(
    'workshop-47',
    '매장 앞 출고 작업',
    'Loading an order in front of the shop',
    '店先での出荷作業',
    '店门前的出货作业'
  ),
  w('workshop-08', '직접 만들어 쓰는 선반 공구', 'Lathe tools we make ourselves', '自作のろくろ工具', '自制的车床刀具'),
  w(
    'workshop-137',
    '을지로 매장 앞에 쌓인 난간 동자',
    'Balusters stacked in front of the Euljiro shop',
    '乙支路の店先に積まれた手すり子',
    '堆在乙支路店门前的栏杆柱'
  ),
  w(
    'workshop-138',
    '기둥이 가득한 작업장 안',
    'Inside the workshop, full of columns',
    '柱でいっぱいの工房の中',
    '摆满柱子的工坊内部'
  ),
  w('workshop-139', '오래된 선반 기계와 부품', 'An old lathe and turned parts', '古い旋盤と部品', '老车床与零件'),
];

export type Work = { src: string; alt: string; caption: string; category: CategoryKey; file: string };

const localize =
  (lang: Lang) =>
  (item: (typeof ALL)[number]): Work => ({
    file: item.file,
    src: item.src,
    alt: item.captions[lang],
    caption: item.captions[lang],
    category: item.category,
  });

export const WORKS_COUNT = ALL.length;
export const worksIn = (lang: Lang = 'ko'): Work[] => ALL.map(localize(lang));
export const worksBy = (key: CategoryKey, lang: Lang = 'ko') => worksIn(lang).filter((item) => item.category === key);

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
export const pick = (files: string[], lang: Lang = 'ko') =>
  files.map((file) => worksIn(lang).find((item) => item.file === file)!).filter(Boolean);

// 같은 물건을 구도만 바꿔 찍은 사진 묶음. 갤러리에는 맨 앞 사진 하나만 보이고,
// 누르면 묶음 안의 사진을 넘겨 볼 수 있습니다. 설명도 맨 앞 사진의 것을 씁니다.
export const GROUPS: string[][] = [
  ['lathe-70', 'lathe-71', 'lathe-72', 'lathe-73', 'lathe-74', 'lathe-75', 'lathe-77'],
  ['lathe-83', 'lathe-80', 'lathe-81', 'lathe-82', 'lathe-84'],
  ['lathe-05', 'lathe-01'],
  ['lathe-03', 'lathe-02'],
  ['lathe-25', 'lathe-24'],
  ['lathe-88', 'lathe-89'],
  ['lathe-103', 'lathe-104'],
  ['column-14', 'column-16', 'column-111', 'column-112', 'column-115', 'column-116', 'column-122', 'column-123'],
  ['column-13', 'column-12', 'column-119', 'column-37'],
  ['column-29', 'column-06', 'column-15', 'column-49', 'column-110'],
  ['column-19', 'column-30', 'column-26', 'column-32'],
  ['column-125', 'column-126', 'column-17'],
  ['column-09', 'column-11', 'column-35', 'column-120'],
  ['column-36', 'column-43'],
  ['custom-40', 'custom-41'],
  ['custom-38', 'custom-39'],
  ['custom-87', 'custom-86'],
  ['custom-53', 'custom-34'],
  ['furniture-45', 'furniture-44', 'furniture-48'],
  ['workshop-46', 'workshop-47'],
];

export type GalleryWork = Work & { photos: { src: string; alt: string }[] };

/** 갤러리용 목록: 묶음은 하나로 합치고(photos에 묶음 사진 전체), 나머지는 사진 한 장씩 */
export const galleryIn = (lang: Lang = 'ko'): GalleryWork[] => {
  const works = worksIn(lang);
  const byFile = new Map(works.map((w) => [w.file, w]));
  const member = new Map(GROUPS.flatMap((files) => files.map((f) => [f, files] as const)));
  const items: GalleryWork[] = [];
  for (const work of works) {
    const group = member.get(work.file);
    if (!group) {
      items.push({ ...work, photos: [{ src: work.src, alt: work.alt }] });
      continue;
    }
    if (items.some((item) => item.file === group[0])) continue;
    const lead = byFile.get(group[0])!;
    items.push({
      ...lead,
      photos: group.map((f) => byFile.get(f)!).map((w) => ({ src: w.src, alt: w.alt })),
    });
  }
  return items;
};
export const galleryBy = (key: CategoryKey, lang: Lang = 'ko') =>
  galleryIn(lang).filter((item) => item.category === key);
export const GALLERY_COUNT = galleryIn().length;
