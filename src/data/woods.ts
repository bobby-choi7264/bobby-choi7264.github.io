// 나무 고르기 페이지(/woods)의 나무 목록. 목공예에서 흔히 쓰는 나무의 일반적인 특징입니다.
// 가게에 늘 있는 나무 목록이 아니므로, 사장님 확인을 받아 고치거나 빼도 됩니다.
// hard: 단단한 정도 1(무름)~5(아주 단단), colors: 나뭇결 색 그림에 쓰는 밝은색·어두운색
import type { Lang } from '~/i18n';

type Text = Record<Lang, string>;
export interface Wood {
  key: string;
  hard: number;
  colors: [string, string];
  name: Text;
  latin: string;
  look: Text;
  feel: Text;
  uses: Text;
}

export const WOODS: Wood[] = [
  {
    key: 'zelkova',
    hard: 4,
    colors: ['#c9925a', '#8a5a32'],
    latin: 'Zelkova serrata',
    name: { ko: '느티나무', en: 'Zelkova', ja: 'ケヤキ', zh: '榉木' },
    look: {
      ko: '누런 갈색에 굵고 화려한 결',
      en: 'Golden brown with bold, striking grain',
      ja: '黄褐色に太く華やかな木目',
      zh: '黄褐色，纹理粗犷华丽',
    },
    feel: {
      ko: '단단하고 잘 뒤틀리지 않아 오래 씁니다. 우리 전통 가구와 목기에 많이 쓰였습니다.',
      en: 'Hard and stable, so it lasts for generations. A traditional favorite for Korean furniture and tableware.',
      ja: '硬くて狂いが少なく、長く使えます。韓国の伝統家具や木の器によく使われてきました。',
      zh: '坚硬且不易变形，经久耐用。是韩国传统家具和木器的常用木材。',
    },
    uses: {
      ko: '목기·합, 기둥, 전통 가구',
      en: 'Bowls & lidded boxes, columns, traditional furniture',
      ja: '器・蓋物、柱、伝統家具',
      zh: '木碗·木盒、柱子、传统家具',
    },
  },
  {
    key: 'oak',
    hard: 4,
    colors: ['#c8a374', '#8f6b42'],
    latin: 'Quercus',
    name: { ko: '참나무 (오크)', en: 'Oak', ja: 'オーク（ナラ）', zh: '橡木' },
    look: {
      ko: '밝은 황갈색에 곧고 굵은 결',
      en: 'Light tan with straight, open grain',
      ja: '明るい黄褐色にまっすぐで太い木目',
      zh: '浅黄褐色，纹理笔直粗犷',
    },
    feel: {
      ko: '무겁고 튼튼해서 힘을 받는 곳에 잘 맞습니다. 손때가 묻을수록 멋이 납니다.',
      en: 'Heavy and strong, ideal for parts that bear weight. It looks better the more it is handled.',
      ja: '重くて丈夫なので、力のかかる部分に向きます。使い込むほど味が出ます。',
      zh: '沉重结实，适合承重部位。越用越有韵味。',
    },
    uses: {
      ko: '계단 난간, 가구 다리, 손잡이',
      en: 'Stair balusters, furniture legs, handles',
      ja: '階段の手すり、家具の脚、取っ手',
      zh: '楼梯栏杆、家具腿、把手',
    },
  },
  {
    key: 'walnut',
    hard: 3,
    colors: ['#7a5236', '#3f2717'],
    latin: 'Juglans',
    name: { ko: '호두나무 (월넛)', en: 'Walnut', ja: 'ウォールナット', zh: '胡桃木' },
    look: {
      ko: '짙은 초콜릿색, 차분하고 고급스러운 결',
      en: 'Deep chocolate brown with a calm, refined grain',
      ja: '濃いチョコレート色、落ち着いた上品な木目',
      zh: '深巧克力色，纹理沉稳高雅',
    },
    feel: {
      ko: '깎는 느낌이 부드러워 섬세한 곡선이 잘 나옵니다. 고급 소품에 많이 찾습니다.',
      en: 'Turns smoothly and holds fine curves well. A popular choice for premium pieces.',
      ja: '削り心地がなめらかで、繊細な曲線がきれいに出ます。高級な小物に人気です。',
      zh: '车削手感顺滑，能做出细腻的曲线。常用于高档小物。',
    },
    uses: {
      ko: '그릇·접시, 조명, 고급 소품',
      en: 'Bowls & plates, lamps, premium accessories',
      ja: '器・皿、照明、高級小物',
      zh: '碗盘、灯具、高档小物',
    },
  },
  {
    key: 'ash',
    hard: 4,
    colors: ['#dcc49c', '#a88a5e'],
    latin: 'Fraxinus',
    name: { ko: '물푸레나무 (애쉬)', en: 'Ash', ja: 'タモ（アッシュ）', zh: '白蜡木' },
    look: {
      ko: '밝은 크림색에 또렷한 결',
      en: 'Pale cream with a clear, defined grain',
      ja: '明るいクリーム色にくっきりした木目',
      zh: '浅奶油色，纹理清晰',
    },
    feel: {
      ko: '단단하면서도 탄력이 있어 잘 부러지지 않습니다. 예부터 연장 자루로 썼습니다.',
      en: 'Hard yet springy, so it resists snapping. Long used for tool handles.',
      ja: '硬いのにしなりがあり、折れにくい木です。昔から道具の柄に使われてきました。',
      zh: '坚硬又有弹性，不易折断。自古用来做工具柄。',
    },
    uses: {
      ko: '연장 자루, 가구 다리, 봉',
      en: 'Tool handles, furniture legs, rods',
      ja: '道具の柄、家具の脚、丸棒',
      zh: '工具柄、家具腿、圆棒',
    },
  },
  {
    key: 'cherry',
    hard: 3,
    colors: ['#b8774c', '#7d4527'],
    latin: 'Prunus',
    name: { ko: '벚나무 (체리)', en: 'Cherry', ja: 'チェリー（サクラ）', zh: '樱桃木' },
    look: {
      ko: '붉은 기가 도는 갈색, 곱고 매끄러운 결',
      en: 'Reddish brown with a fine, smooth grain',
      ja: '赤みのある褐色、細かくなめらかな木目',
      zh: '偏红的褐色，纹理细腻顺滑',
    },
    feel: {
      ko: '시간이 지날수록 색이 깊어집니다. 표면이 고와서 손에 닿는 물건에 좋습니다.',
      en: 'Its color deepens beautifully with age. The fine surface feels lovely in the hand.',
      ja: '年月とともに色が深まります。肌が細かく、手に触れる品に向きます。',
      zh: '颜色会随时间愈发深沉。表面细腻，适合手常接触的物件。',
    },
    uses: {
      ko: '목기, 찻잔 받침, 생활 소품',
      en: 'Tableware, coasters, everyday items',
      ja: '木の器、茶托、生活小物',
      zh: '木器、杯垫、生活小物',
    },
  },
  {
    key: 'maple',
    hard: 4,
    colors: ['#ecd8b4', '#c2a679'],
    latin: 'Acer',
    name: { ko: '단풍나무 (메이플)', en: 'Maple', ja: 'メープル（カエデ）', zh: '枫木' },
    look: {
      ko: '하얗게 밝은 색, 결이 촘촘하고 매끈',
      en: 'Bright, almost white, with a tight, even grain',
      ja: '白っぽく明るい色、木目が詰まってなめらか',
      zh: '颜色白亮，纹理细密光滑',
    },
    feel: {
      ko: '단단하고 표면이 매끄러워 위생적입니다. 밝은 분위기를 낼 때 좋습니다.',
      en: 'Hard with a smooth, hygienic surface. Great when you want a light, clean look.',
      ja: '硬く表面がなめらかで衛生的です。明るい雰囲気にしたいときに。',
      zh: '坚硬且表面光滑，比较卫生。适合想要明亮感觉的作品。',
    },
    uses: {
      ko: '도마·주방 소품, 그릇, 장난감',
      en: 'Cutting boards & kitchenware, bowls, toys',
      ja: 'まな板・キッチン用品、器、おもちゃ',
      zh: '砧板·厨房用品、碗、玩具',
    },
  },
  {
    key: 'pine',
    hard: 2,
    colors: ['#e2bf85', '#b48447'],
    latin: 'Pinus',
    name: { ko: '소나무', en: 'Pine', ja: '松（パイン）', zh: '松木' },
    look: {
      ko: '노란빛에 선명한 나이테',
      en: 'Yellowish with distinct growth rings',
      ja: '黄みがかった色にはっきりした年輪',
      zh: '偏黄色，年轮清晰',
    },
    feel: {
      ko: '가볍고 부드러워 다루기 쉽고, 값 부담이 적습니다. 큰 물건이나 여러 개 만들 때 좋습니다.',
      en: 'Light, soft and easy to work, and kind to the budget. Good for large pieces or larger quantities.',
      ja: '軽くて柔らかく扱いやすく、価格も手頃です。大きな物や数をつくるときに。',
      zh: '轻软易加工，价格也较实惠。适合大件或批量制作。',
    },
    uses: {
      ko: '기둥, 학생 작품, 시제품',
      en: 'Columns, student projects, prototypes',
      ja: '柱、学生作品、試作品',
      zh: '柱子、学生作品、样品',
    },
  },
  {
    key: 'paulownia',
    hard: 1,
    colors: ['#e6d3b3', '#bfa37c'],
    latin: 'Paulownia',
    name: { ko: '오동나무', en: 'Paulownia', ja: '桐', zh: '泡桐木' },
    look: {
      ko: '연한 회갈색, 은은한 결',
      en: 'Soft greyish beige with a subtle grain',
      ja: '淡い灰褐色、やさしい木目',
      zh: '浅灰褐色，纹理淡雅',
    },
    feel: {
      ko: '아주 가볍고 습기에 강한 편이라 상자와 장에 써 왔습니다. 무르므로 힘 받는 곳엔 맞지 않습니다.',
      en: 'Very light and fairly moisture-resistant, traditionally used for boxes and chests. Too soft for load-bearing parts.',
      ja: 'とても軽く湿気に強いので、箱や箪笥に使われてきました。柔らかいので力のかかる所には不向きです。',
      zh: '非常轻且较耐潮，传统上用于盒子和衣柜。质地较软，不适合承重部位。',
    },
    uses: {
      ko: '상자, 가벼운 소품, 장식',
      en: 'Boxes, lightweight items, decorations',
      ja: '箱、軽い小物、飾り',
      zh: '盒子、轻便小物、装饰',
    },
  },
];

/** 만들 물건별 추천 나무 (key는 위 WOODS의 key) */
export const PICKS: { title: Text; woods: string[] }[] = [
  {
    title: {
      ko: '그릇·접시·합 같은 목기',
      en: 'Bowls, plates & lidded boxes',
      ja: '器・皿・蓋物',
      zh: '碗、盘、木盒等木器',
    },
    woods: ['zelkova', 'walnut', 'cherry', 'maple'],
  },
  {
    title: {
      ko: '계단 난간·가구 다리',
      en: 'Stair balusters & furniture legs',
      ja: '階段の手すり・家具の脚',
      zh: '楼梯栏杆、家具腿',
    },
    woods: ['oak', 'ash', 'zelkova'],
  },
  {
    title: {
      ko: '학생 작품·시제품',
      en: 'Student projects & prototypes',
      ja: '学生作品・試作品',
      zh: '学生作品、样品',
    },
    woods: ['pine', 'ash', 'maple'],
  },
  {
    title: {
      ko: '조명·인테리어 소품',
      en: 'Lamps & interior accents',
      ja: '照明・インテリア小物',
      zh: '灯具、室内装饰',
    },
    woods: ['walnut', 'oak', 'cherry'],
  },
];
