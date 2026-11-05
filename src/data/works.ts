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
  w(
    'workshop-183',
    '로구로 앞에서 기둥을 깎는 장인',
    'The craftsman turning a column at the lathe',
    'ろくろの前で柱を削る職人',
    '在车床前车削柱子的匠人'
  ),
  w(
    'lathe-169',
    '로구로에서 속을 파내는 원목 그릇',
    'Hollowing out a wooden bowl on the lathe',
    'ろくろで内側をくり抜く木の器',
    '在车床上掏挖原木碗'
  ),
  w(
    'lathe-170',
    '나뭇결이 살아 있는 깊은 원목 그릇',
    'Deep wooden bowl with rich grain',
    '木目の美しい深い木の器',
    '木纹鲜明的深口原木碗'
  ),
  w(
    'column-171',
    '한 묶음으로 묶은 구슬 모양 기둥',
    'Bundled bead-turned spindles',
    '束ねた玉形の柱',
    '成捆的串珠形柱子'
  ),
  w(
    'column-182',
    '각재에서 완성까지 — 로구로로 기둥 깎는 순서',
    'From square timber to finished column on the lathe',
    '角材から完成まで — ろくろで柱を削る順序',
    '从方料到成品——车削柱子的步骤'
  ),
  w(
    'column-178',
    '1. 각재를 로구로에 겁니다',
    '1. Mounting the square timber on the lathe',
    '1. 角材をろくろに取り付ける',
    '1. 将方料装上车床'
  ),
  w('column-179', '2. 거친 날로 둥글게 깎습니다', '2. Rough-turning it round', '2. 荒削りで丸くする', '2. 粗车成圆形'),
  w('column-180', '3. 아래쪽 모양을 잡습니다', '3. Shaping the lower end', '3. 下側の形を出す', '3. 车出下端造型'),
  w(
    'column-181',
    '4. 위쪽 턱을 깎아 냅니다',
    '4. Cutting the upper collar',
    '4. 上側の段を削り出す',
    '4. 车出上端凸缘'
  ),
  w(
    'furniture-172',
    '구슬 모양 다리를 깎아 만든 긴 테이블',
    'Long table with bead-turned legs',
    '玉形の脚を削り出した長テーブル',
    '串珠形桌腿长桌'
  ),
  w(
    'furniture-173',
    '나무못을 줄지어 박은 원목 거치대',
    'Wooden racks with rows of pegs',
    '木釘を並べた木製ラック',
    '排列木钉的原木架'
  ),
  w(
    'furniture-184',
    '칸막이를 넣은 원목 진열장',
    'Solid-wood display shelf with dividers',
    '仕切り付きの木製陳列棚',
    '带隔板的原木陈列架'
  ),
  w(
    'furniture-185',
    '꽃 모양 창살문을 단 장식장',
    'Cabinet with floral lattice doors',
    '花形の格子扉を付けたキャビネット',
    '花形格栅门装饰柜'
  ),
  w(
    'furniture-186',
    '구슬 모양 기둥을 세운 벽면 책장',
    'Wall shelving with bead-turned columns',
    '玉形の柱を立てた壁面書棚',
    '串珠柱墙面书架'
  ),
  w(
    'furniture-187',
    '구슬 모양 기둥 다리의 원형 테이블',
    'Round table with a bead-turned pedestal',
    '玉形の脚の丸いテーブル',
    '串珠柱脚圆桌'
  ),
  w(
    'furniture-188',
    '레스토랑 주문으로 만든 다리 깎은 테이블',
    'Tables with turned legs, ordered by a restaurant',
    'レストランの注文で作った挽き脚のテーブル',
    '餐厅订制的车腿餐桌'
  ),
  w(
    'furniture-174',
    '조각 장식을 넣은 원목 카운터',
    'Carved solid-wood counter',
    '彫刻入りの木製カウンター',
    '带雕花的原木柜台'
  ),
  w(
    'custom-175',
    '방송 납품 소품 — 삼지창 한 쌍',
    'Broadcast props: a pair of tridents',
    '放送局納品の小道具 — 三叉槍一対',
    '供电视台的道具——一对三叉戟'
  ),
  w(
    'custom-176',
    '판재를 층층이 끼운 탑 모양 작품',
    'Tower of layered boards on a turned post',
    '板を層状に重ねた塔形の作品',
    '层叠板材的塔形作品'
  ),
  w(
    'custom-177',
    '긴 자루를 단 큰 나무 메(망치)',
    'Large wooden mallet with a long handle',
    '長い柄の大きな木槌',
    '长柄大木槌'
  ),
  w(
    'furniture-140',
    '3단 원형 원목 진열대',
    'Three-tier round wooden display stand',
    '三段の丸い木製ディスプレイ台',
    '三层圆形原木展示架'
  ),
  w(
    'furniture-141',
    '3단 원형 진열대 — 가게 앞에서',
    'Three-tier display stand in front of the shop',
    '三段の丸いディスプレイ台 — 店の前で',
    '三层圆形展示架——摄于店门前'
  ),
  w(
    'furniture-142',
    '3단 원형 진열대 — 저녁 무렵',
    'Three-tier display stand in the evening',
    '三段の丸いディスプレイ台 — 夕暮れどき',
    '三层圆形展示架——傍晚'
  ),
  w(
    'custom-143',
    '사람 키만 한 대형 원목 체스 말',
    'Giant wooden chess pieces',
    '人の背丈ほどの大きな木のチェス駒',
    '近一人高的大型原木国际象棋棋子'
  ),
  w(
    'custom-144',
    '대형 체스 말 — 킹·퀸·나이트',
    'Giant chess pieces: king, queen and knight',
    '大きなチェス駒 — キング・クイーン・ナイト',
    '大型棋子——国王、王后与骑士'
  ),
  w(
    'custom-145',
    '대형 체스 말 한 벌',
    'A full set of giant chess pieces',
    '大きなチェス駒 ひと揃い',
    '一整套大型棋子'
  ),
  w(
    'custom-146',
    '대형 체스 말 — 다듬기 전',
    'Giant chess pieces before finishing',
    '大きなチェス駒 — 仕上げ前',
    '大型棋子——打磨前'
  ),
  w(
    'custom-147',
    '대형 체스 말 — 나이트',
    'Giant chess piece: the knight',
    '大きなチェス駒 — ナイト',
    '大型棋子——骑士'
  ),
  w(
    'custom-148',
    '대형 체스 말 — 비숍',
    'Giant chess piece: the bishop',
    '大きなチェス駒 — ビショップ',
    '大型棋子——主教'
  ),
  w(
    'custom-149',
    '대형 체스 말 — 비숍과 폰',
    'Giant chess pieces: bishops and pawns',
    '大きなチェス駒 — ビショップとポーン',
    '大型棋子——主教与兵'
  ),
  w(
    'custom-150',
    '대형 체스 말 — 폰 여러 개',
    'Giant chess pieces: a row of pawns',
    '大きなチェス駒 — ポーンがずらり',
    '大型棋子——一排兵'
  ),
  w(
    'custom-151',
    '같은 모양으로 여러 개 만든 원목 소품',
    'Wooden pieces made in a matching batch',
    '同じ形で何台も作った木の小物',
    '同款批量制作的原木小件'
  ),
  w(
    'column-152',
    '포장을 마친 난간 동자 — 대량 납품',
    'Balusters bundled for a bulk delivery',
    '梱包を終えた手すり子 — 大量納品',
    '打包完成的栏杆立柱——批量交货'
  ),
  w(
    'column-153',
    '난간 동자 대량 납품 — 옆에서 본 모습',
    'Bulk balusters seen from the side',
    '手すり子の大量納品 — 横から',
    '批量栏杆立柱——侧面'
  ),
  w(
    'column-154',
    '묶음으로 포장한 원목 봉',
    'Turned wooden spindles in bundles',
    '束ねて梱包した木の丸棒',
    '成捆包装的原木车削杆'
  ),
  w('column-155', '난간 엄지기둥 여러 개', 'A batch of newel posts', '親柱をまとめて', '一批栏杆端柱'),
  w(
    'column-156',
    '흰색으로 칠한 원목 난간',
    'White-painted wooden balustrade',
    '白く塗装した木の手すり',
    '白色涂装原木栏杆'
  ),
  w(
    'column-157',
    '배불뚝이 모양 테이블 다리 네 개',
    'Four bulbous table legs',
    'ふくらみのあるテーブル脚 4本',
    '四根鼓腹形桌腿'
  ),
  w('column-158', '묶어 둔 원목 테이블 다리', 'Bundled wooden table legs', '束ねた木のテーブル脚', '捆好的原木桌腿'),
  w(
    'column-159',
    '볼트를 끼운 둥근 원목 가구 발',
    'Round wooden furniture feet with bolts',
    'ボルト付きの丸い木の家具脚',
    '带螺栓的圆形原木家具脚'
  ),
  w(
    'column-160',
    '둥근 원목 가구 발 — 위아래 모습',
    'Round wooden furniture feet, top and bottom',
    '丸い木の家具脚 — 上と下',
    '圆形原木家具脚——正反面'
  ),
  w(
    'lathe-161',
    '로구로로 깎은 대형 원목 화병',
    'Large lathe-turned wooden vase',
    'ろくろで挽いた大きな木の花瓶',
    '车床旋制的大型原木花瓶'
  ),
  w('lathe-162', '달걀 모양 대형 꼭지 장식', 'Large egg-shaped wooden finial', '卵形の大きな飾り頭', '蛋形大型木顶饰'),
  w('lathe-163', '원목 촛대 세 가지', 'Three wooden candlesticks', '木の燭台 三種', '三款原木烛台'),
  w(
    'lathe-164',
    '원목 촛대 대량 제작',
    'Wooden candlesticks made in quantity',
    '木の燭台をまとめて制作',
    '批量制作的原木烛台'
  ),
  w('lathe-165', '원목 키친타월 걸이', 'Wooden paper towel holder', '木のキッチンペーパーホルダー', '原木厨房纸巾架'),
  w(
    'lathe-166',
    '둥근 받침이 달린 원목 스탠드 두 개',
    'Two wooden stands with round trays',
    '丸いトレイ付きの木のスタンド 2台',
    '两款带圆托盘的原木立架'
  ),
  w('lathe-167', '원목 나무망치 두 자루', 'Two wooden mallets', '木槌 2本', '两把原木木槌'),
  w('lathe-168', '원목 밀대', 'Wooden rolling pin', '木の麺棒', '原木擀面杖'),
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
  w('lathe-85', '원목 받침대 — 위에서 본 모습', 'Wooden stands seen from above', '上から見た木の台', '俯视原木底座'),
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
    '로구로로 깎은 그릇과 화병',
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
  w('lathe-69', '흑색 후추 그라인더', 'Black-finished pepper mill', '黒いペッパーミル', '黑色胡椒研磨器'),
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
    '上漆原木饭碗与汤匙'
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
    '로구로 위의 작은 원목 망치들',
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
    '로구로에서 깎고 있는 기둥',
    'A column being turned on the lathe',
    'ろくろで加工中の柱',
    '车床上正在加工的柱子'
  ),
  w(
    'column-16',
    '로구로에서 깎고 있는 기둥',
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
  w('column-109', '구슬 머리 기둥', 'Columns with ball tops', '玉飾り付きの柱', '圆球柱头的柱子'),
  w('column-110', '묶어 둔 난간 동자', 'Bundled balusters', '束ねた手すり子', '成捆的栏杆柱'),
  w(
    'column-111',
    '로구로에서 깎고 있는 다리',
    'A leg being turned on the lathe',
    'ろくろで挽いている脚',
    '车床上正在车削的腿'
  ),
  w(
    'column-112',
    '로구로에서 깎고 있는 원뿔형 부재',
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
  w('column-114', '구슬 이음 기둥 묶음', 'Bundle of bead-turned columns', '玉つなぎの柱の束', '成捆的串珠柱'),
  w(
    'column-115',
    '로구로에 걸린 구슬 장식 봉',
    'A beaded rod on the lathe',
    'ろくろ上の玉飾りの棒',
    '车床上的串珠装饰杆'
  ),
  w('column-116', '홈을 새긴 구슬 장식 봉', 'Beaded rod with carved grooves', '溝を刻んだ玉飾りの棒', '刻槽串珠装饰杆'),
  w('column-117', '흰색 도장 장식 기둥', 'White-painted decorative column', '白塗装の装飾柱', '白色涂装装饰柱'),
  w('column-118', '촛대형 장식 기둥', 'Candlestick-style decorative columns', '燭台形の装飾柱', '烛台形装饰柱'),
  w('column-119', '가구 다리 묶음', 'A batch of furniture legs', '家具脚の束', '一批家具腿'),
  w('column-120', '긴 기둥 다섯 개', 'Five tall columns', '長い柱 五本', '五根长柱'),
  w('column-121', '홈 파인 원형 기둥', 'Fluted round columns', '溝彫りの丸柱', '凹槽圆柱'),
  w(
    'column-122',
    '로구로에서 깎고 있는 굵은 부재',
    'A thick piece being turned on the lathe',
    'ろくろで加工中の太い部材',
    '车床上加工中的粗部件'
  ),
  w(
    'column-123',
    '로구로에서 깎고 있는 봉',
    'A rod being turned on the lathe',
    'ろくろで加工中の棒',
    '车床上加工中的杆'
  ),
  w('column-124', '꽈배기 계단 엄지기둥', 'Twisted stair newel post', 'ねじり形の階段親柱', '麻花楼梯起步柱'),
  w(
    'column-125',
    '구슬 머리 계단 엄지기둥',
    'Ball-topped stair newel posts',
    '玉飾り付きの階段親柱',
    '圆球顶楼梯起步柱'
  ),
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
  w(
    'workshop-08',
    '직접 만들어 쓰는 로구로 공구',
    'Lathe tools we make ourselves',
    '自作のろくろ工具',
    '自制的车床刀具'
  ),
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
  w('workshop-139', '오래된 로구로 기계와 부품', 'An old lathe and turned parts', '古いろくろと部品', '老车床与零件'),
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
// 맨 앞 사진은 입장 화면이 걷힐 때 보이는 사진이기도 함 (대표 사진: 작업 영상에서 뽑은 장면)
// 슬라이드는 6장 기준으로 tailwind.css의 heroFade가 맞춰져 있음. 장수를 바꾸면 그쪽도 고칠 것
export const HERO_SLIDES = ['workshop-183', 'lathe-80', 'column-04', 'lathe-25', 'furniture-140', 'column-14'];
// 위 사진 중 중요한 부분(장인 얼굴과 손)이 오른쪽에 있는 사진. 휴대폰 세로 화면에서 그쪽이 보이게 맞춤
export const HERO_RIGHT = ['workshop-183'];
// 위 사진 중 세로로 긴 사진. 넓은 화면에서는 잘리지 않게 전체를 오른쪽에 두고 빈 곳은 흐린 사진으로 채움
export const HERO_TALL = ['furniture-140'];
export const FEATURED = [
  'workshop-183',
  'furniture-140',
  'custom-145',
  'lathe-80',
  'column-13',
  'lathe-56',
  'custom-40',
  'lathe-25',
];
export const pick = (files: string[], lang: Lang = 'ko') =>
  files.map((file) => worksIn(lang).find((item) => item.file === file)!).filter(Boolean);

// 같은 물건을 구도만 바꿔 찍은 사진 묶음. 갤러리에는 맨 앞 사진 하나만 보이고,
// 누르면 묶음 안의 사진을 넘겨 볼 수 있습니다. 설명도 맨 앞 사진의 것을 씁니다.
export const GROUPS: string[][] = [
  ['furniture-140', 'furniture-141', 'furniture-142'],
  ['custom-145', 'custom-143', 'custom-144', 'custom-146', 'custom-147', 'custom-148', 'custom-149', 'custom-150'],
  ['column-182', 'column-178', 'column-179', 'column-180', 'column-181'],
  ['column-152', 'column-153'],
  ['column-159', 'column-160'],
  ['lathe-163', 'lathe-164'],
  // 후추·소금통과 그라인더는 모두 한 묶음
  [
    'lathe-70',
    'lathe-71',
    'lathe-72',
    'lathe-73',
    'lathe-74',
    'lathe-75',
    'lathe-77',
    'lathe-05',
    'lathe-01',
    'lathe-56',
    'lathe-69',
  ],
  ['lathe-83', 'lathe-80', 'lathe-81', 'lathe-82', 'lathe-84', 'lathe-85'],
  ['lathe-03', 'lathe-02', 'lathe-51'],
  ['lathe-25', 'lathe-24'],
  ['lathe-88', 'lathe-89'],
  ['lathe-103', 'lathe-104'],
  ['lathe-27', 'lathe-21'],
  ['column-14', 'column-16', 'column-111', 'column-112', 'column-122', 'column-123'],
  ['column-114', 'column-115', 'column-116'],
  ['column-13', 'column-12', 'column-107', 'column-119', 'column-37'],
  ['column-29', 'column-06', 'column-15', 'column-49', 'column-110'],
  ['column-19', 'column-30', 'column-26', 'column-32'],
  ['column-125', 'column-126', 'column-17', 'column-109'],
  ['column-09', 'column-11', 'column-35', 'column-120'],
  ['column-36', 'column-43'],
  ['custom-40', 'custom-41', 'custom-38', 'custom-39'],
  ['custom-87', 'custom-86'],
  ['custom-34', 'custom-33'],
  ['furniture-45', 'furniture-44', 'furniture-48'],
  ['furniture-129', 'furniture-42'],
  ['furniture-128', 'column-117'],
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
