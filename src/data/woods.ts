// 나무 고르기 페이지(/woods)의 나무 목록. 목공예·로구로 작업에서 흔히 쓰는 나무의 일반적인 특징을 정리했습니다
// (2026-11 Claude가 목재 자료를 바탕으로 작성. 사장님 경험과 다른 부분이 있으면 고쳐 주세요).
// hard: 단단한 정도 1(무름)~5(아주 단단)
// density: 기건 비중(공기 중에서 말린 나무의 무게, 물 = 1). 산지와 나무에 따라 차이가 있어 범위로 적음
// colors: 나뭇결 색 그림에 쓰는 밝은색·어두운색
import type { Lang } from '~/i18n';

type Text = Record<Lang, string>;
export interface Wood {
  key: string;
  hard: number;
  density: string;
  colors: [string, string];
  name: Text;
  latin: string;
  look: Text;
  feel: Text;
  turning: Text;
  care: Text;
  uses: Text;
}

export const WOODS: Wood[] = [
  {
    key: 'zelkova',
    hard: 4,
    density: '0.62–0.75',
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
      ko: '단단하고 잘 뒤틀리지 않아 대를 물려 씁니다. 반닫이·장 같은 우리 전통 가구와 목기에 가장 많이 쓰인 나무입니다.',
      en: 'Hard and stable enough to pass down for generations. The classic wood of traditional Korean chests, cabinets and tableware.',
      ja: '硬くて狂いが少なく、代々受け継いで使えます。韓国の伝統的な箪笥や器に最もよく使われてきた木です。',
      zh: '坚硬且不易变形，可以代代相传。是韩国传统箱柜和木器中使用最多的木材。',
    },
    turning: {
      ko: '물관 구멍이 굵은 나무라 깎으면 결이 힘차게 드러납니다. 단단해서 날을 자주 갈아 가며 깎습니다.',
      en: 'Its large, open pores make the grain stand out boldly once turned. It is hard on tools, so we sharpen often.',
      ja: '導管が太い木なので、挽くと木目が力強く現れます。硬いので刃をこまめに研ぎながら挽きます。',
      zh: '导管粗大，车削后纹理格外鲜明。木质坚硬，需要勤磨刀具。',
    },
    care: {
      ko: '구멍이 굵어 칠이 잘 스며듭니다. 옻칠과 특히 잘 어울려, 전통 목기는 느티나무에 옻칠한 것이 많습니다.',
      en: 'The open pores soak up finish well. It pairs beautifully with ottchil (Korean lacquer) — many traditional bowls are lacquered zelkova.',
      ja: '導管が太く、塗料がよく染み込みます。漆との相性が特に良く、伝統の器にはケヤキの漆塗りが多くあります。',
      zh: '导管粗，涂料容易渗入。与大漆尤其相配，许多传统木器都是榉木髹漆而成。',
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
    density: '0.70–0.85',
    colors: ['#c8a374', '#8f6b42'],
    latin: 'Quercus spp.',
    name: { ko: '참나무(오크)', en: 'Oak', ja: 'オーク（ナラ）', zh: '橡木' },
    look: {
      ko: '밝은 황갈색에 곧고 굵은 결',
      en: 'Light tan with straight, open grain',
      ja: '明るい黄褐色にまっすぐで太い木目',
      zh: '浅黄褐色，纹理笔直粗犷',
    },
    feel: {
      ko: '무겁고 튼튼해서 힘을 받는 곳에 잘 맞습니다. 결을 곧게 켜면 호랑이 무늬 같은 은결이 나타납니다.',
      en: 'Heavy and strong, ideal for parts that bear weight. Cut along the radius, it shows a shimmering “tiger stripe” ray fleck.',
      ja: '重くて丈夫なので、力のかかる部分に向きます。柾目に挽くと虎斑（とらふ）と呼ばれる模様が現れます。',
      zh: '沉重结实，适合承重部位。径切时会出现虎斑般的射线花纹。',
    },
    turning: {
      ko: '단단하고 결이 거칠어 날이 무디면 표면이 뜯깁니다. 덜 마른 나무는 마르면서 갈라지기 쉬워 충분히 말린 것을 씁니다.',
      en: 'Hard and coarse, so a dull tool tears the surface. It checks easily while drying, so we use well-seasoned stock.',
      ja: '硬く目が粗いため、刃が鈍ると表面がむしれます。乾燥途中で割れやすいので、十分に乾かした材を使います。',
      zh: '质硬纹粗，刀具一钝表面就会起毛撕裂。干燥过程中容易开裂，所以选用充分干燥的木料。',
    },
    care: {
      ko: '탄닌 성분이 많아 쇠와 물에 함께 닿으면 검게 얼룩질 수 있습니다. 철 못·철 수세미는 피하고 오일이나 우레탄으로 마감합니다.',
      en: 'Rich in tannin, it can stain black where iron and water meet. Avoid steel nails and steel wool; finish with oil or urethane.',
      ja: 'タンニンが多く、鉄と水に触れると黒いしみになることがあります。鉄釘やスチールウールは避け、オイルやウレタンで仕上げます。',
      zh: '单宁含量高，同时接触铁和水会出现黑斑。避免使用铁钉和钢丝绒，用木蜡油或聚氨酯漆收尾。',
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
    density: '0.55–0.65',
    colors: ['#7a5236', '#3f2717'],
    latin: 'Juglans nigra',
    name: { ko: '호두나무(월넛)', en: 'Walnut', ja: 'ウォールナット', zh: '胡桃木' },
    look: {
      ko: '짙은 초콜릿색, 차분하고 고급스러운 결',
      en: 'Deep chocolate brown with a calm, refined grain',
      ja: '深いチョコレート色、落ち着いた上品な木目',
      zh: '深巧克力色，纹理沉稳高雅',
    },
    feel: {
      ko: '무게가 알맞고 결이 차분해 고급 소품에 많이 찾습니다. 대부분 북미산 수입 나무라 값은 높은 편입니다.',
      en: 'Pleasantly weighted with a calm figure, it is a favorite for fine pieces. Most is imported from North America, so it costs more.',
      ja: 'ほどよい重さと落ち着いた木目で、上質な小物に人気です。ほとんどが北米からの輸入材のため、価格は高めです。',
      zh: '重量适中、纹理沉稳，常用于高档小物。大多从北美进口，价格偏高。',
    },
    turning: {
      ko: '날이 매끄럽게 들어가 섬세한 곡선이 잘 나옵니다. 로구로로 깎기에 가장 좋은 나무 중 하나이고, 사포질도 곱게 됩니다.',
      en: 'The tool glides through it, so fine curves come out cleanly. One of the best woods for turning, and it sands to a smooth finish.',
      ja: '刃がなめらかに入り、繊細な曲線がきれいに出ます。ろくろ挽きに最も向く木のひとつで、研磨も美しく仕上がります。',
      zh: '下刀顺滑，细腻的曲线也能干净地车出。是最适合车削的木材之一，打磨后也很细腻。',
    },
    care: {
      ko: '오일을 바르면 색이 한층 깊어집니다. 해가 지나면 짙은 갈색이 조금 밝고 따뜻한 빛으로 바뀝니다.',
      en: 'An oil finish deepens the color. Over the years, the dark brown mellows to a slightly lighter, warmer tone.',
      ja: 'オイルを塗ると色がいっそう深まります。年月とともに濃い茶色が少し明るく温かみのある色に変わります。',
      zh: '涂上木蜡油后颜色更显深沉。随着岁月流逝，深褐色会变得稍浅、更温润。',
    },
    uses: {
      ko: '그릇·접시, 조명, 고급 소품',
      en: 'Bowls & plates, lamps, fine accessories',
      ja: '器・皿、照明、上質な小物',
      zh: '碗盘、灯具、高档小物',
    },
  },
  {
    key: 'ash',
    hard: 4,
    density: '0.65–0.72',
    colors: ['#dcc49c', '#a88a5e'],
    latin: 'Fraxinus spp.',
    name: { ko: '물푸레나무(애쉬)', en: 'Ash', ja: 'タモ（アッシュ）', zh: '白蜡木' },
    look: {
      ko: '밝은 크림색에 또렷한 결',
      en: 'Pale cream with clearly defined grain',
      ja: '明るいクリーム色にくっきりした木目',
      zh: '浅奶油色，纹理清晰',
    },
    feel: {
      ko: "단단하면서도 탄력이 있어 충격에 잘 부러지지 않습니다. 껍질을 물에 담그면 물이 푸르게 변해 '물푸레'라는 이름이 붙었습니다.",
      en: 'Hard yet springy, so it resists breaking under impact. Its Korean name, mulpure (“water turns blue”), comes from the bark tinting water blue.',
      ja: '硬いうえに粘りがあり、衝撃で折れにくい木です。樹皮を水に浸すと水が青くなることから、韓国では「ムルプレ（水が青い）」と呼ばれます。',
      zh: '坚硬又有韧性，受冲击也不易折断。树皮泡水后水会变蓝，所以韩语名叫“水青木（물푸레）”。',
    },
    turning: {
      ko: '결이 곧아 깎이는 느낌이 깨끗합니다. 연장 자루나 야구 방망이처럼 길고 가는 봉도 휘지 않게 깎을 수 있습니다.',
      en: 'Straight-grained and clean-cutting. Long, slender pieces like tool handles and baseball bats turn without bowing.',
      ja: '木目がまっすぐで、すっきりと削れます。工具の柄やバットのような細長い棒も、反らさずに挽けます。',
      zh: '纹理笔直，车削手感干净利落。工具柄、棒球棒这类细长的棒材也能车得笔直不弯。',
    },
    care: {
      ko: '결은 참나무와 비슷하지만 색이 밝아 색을 입히기 좋습니다. 원목 그대로 오일 마감해도 깔끔합니다.',
      en: 'Its grain resembles oak, but the light color takes stain well. A clear oil finish also looks crisp.',
      ja: '木目はオークに似ていますが、色が明るいので着色に向きます。素地のままオイル仕上げにしてもすっきりします。',
      zh: '纹理与橡木相似，但颜色浅，很适合染色。保留原木色上木蜡油也很清爽。',
    },
    uses: {
      ko: '연장 자루, 가구 다리, 봉',
      en: 'Tool handles, furniture legs, rods',
      ja: '工具の柄、家具の脚、棒',
      zh: '工具柄、家具腿、棒材',
    },
  },
  {
    key: 'cherry',
    hard: 3,
    density: '0.55–0.62',
    colors: ['#b8774c', '#7d4527'],
    latin: 'Prunus spp.',
    name: { ko: '벚나무(체리)', en: 'Cherry', ja: 'チェリー（サクラ）', zh: '樱桃木' },
    look: {
      ko: '붉은 기가 도는 갈색, 곱고 매끄러운 결',
      en: 'Reddish brown with a fine, smooth grain',
      ja: '赤みを帯びた茶色、きめ細かくなめらかな木目',
      zh: '带红调的褐色，纹理细腻光滑',
    },
    feel: {
      ko: '결이 곱고 고르게 짜여 손에 닿는 물건에 좋습니다. 해인사 팔만대장경 경판도 상당수가 산벚나무로 알려져 있습니다.',
      en: 'Fine and even-textured, it is lovely for things you hold. Many of the Tripitaka Koreana printing blocks at Haeinsa are said to be wild cherry.',
      ja: 'きめ細かく均一で、手に触れる物に向いています。海印寺の八万大蔵経の版木も、多くが山桜だといわれています。',
      zh: '纹理细密均匀，适合手常接触的物件。海印寺八万大藏经的经板据说也有相当一部分是山樱木。',
    },
    turning: {
      ko: '조직이 촘촘해 아주 매끈하게 깎입니다. 무딘 날로 오래 문지르면 탄 자국이 나기 쉬워 날을 날카롭게 씁니다.',
      en: 'Its dense texture turns very smoothly. A dull tool rubbing too long leaves burn marks, so we keep edges sharp.',
      ja: '組織が緻密で、とてもなめらかに挽けます。鈍った刃で長くこすると焦げ跡がつきやすいので、刃は鋭く保ちます。',
      zh: '组织致密，车出来非常光滑。钝刀长时间摩擦容易留下焦痕，所以要保持刀具锋利。',
    },
    care: {
      ko: '빛을 받으면 몇 달 사이에 색이 눈에 띄게 진해집니다. 처음의 연한 분홍빛이 붉은 갈색으로 깊어지는 것이 매력입니다.',
      en: 'Light darkens it noticeably within months. Watching the pale pink deepen into reddish brown is part of its charm.',
      ja: '光に当たると数か月で目に見えて色が濃くなります。淡いピンクが赤茶色へと深まっていくのが魅力です。',
      zh: '受光照后几个月内颜色会明显变深。由最初的淡粉色渐渐沉淀为红褐色，正是它的魅力。',
    },
    uses: {
      ko: '목기, 찻잔 받침, 생활 소품',
      en: 'Tableware, saucers, everyday goods',
      ja: '木の器、茶托、生活小物',
      zh: '木器、杯托、生活小物',
    },
  },
  {
    key: 'maple',
    hard: 5,
    density: '0.63–0.75',
    colors: ['#ecd8b4', '#c2a679'],
    latin: 'Acer spp.',
    name: { ko: '단풍나무(메이플)', en: 'Maple', ja: 'メープル（カエデ）', zh: '枫木' },
    look: {
      ko: '하얗게 밝은 색, 결이 촘촘하고 매끈',
      en: 'Bright, almost white, with a tight, smooth grain',
      ja: '白っぽく明るい色、緻密でなめらかな木目',
      zh: '颜色明亮近白，纹理致密光滑',
    },
    feel: {
      ko: '아주 단단하고 결이 촘촘해 냄새나 맛이 배지 않습니다. 그래서 도마·주걱 같은 주방용품에 오래 쓰여 왔습니다.',
      en: 'Very hard and close-grained, it does not pick up smells or flavors — which is why it has long been used for cutting boards and spatulas.',
      ja: 'とても硬く緻密で、においや味が移りません。そのため、まな板やへらなどの台所用品に長く使われてきました。',
      zh: '非常坚硬、纹理致密，不吸味也不串味，因此长期用来制作砧板、锅铲等厨房用品。',
    },
    turning: {
      ko: '단단해서 정밀한 모양을 깎기 좋지만, 빠르게 돌리면 열로 탄 자국이 생겨 속도를 맞춰 깎습니다.',
      en: 'Its hardness holds crisp detail, but at high speed friction can scorch it, so we adjust the speed.',
      ja: '硬いので精密な形を挽くのに向きますが、高速で回すと摩擦熱で焦げることがあるため、回転数を調整します。',
      zh: '质地坚硬，适合车出精细造型；但转速过快会因摩擦发热留下焦痕，所以要调整转速。',
    },
    care: {
      ko: '색을 입히면 얼룩덜룩해지기 쉬워 밝은 원래 색을 살려 마감하는 경우가 많습니다. 해가 지나면 살짝 노란빛을 띱니다.',
      en: 'Stain tends to go blotchy, so it is usually finished to keep its natural pale color, which yellows slightly with age.',
      ja: '着色するとむらになりやすいため、明るい素地の色を生かして仕上げることが多い木です。年月とともにやや黄色みを帯びます。',
      zh: '染色容易不均匀，所以多保留原本的浅色来收尾。随着时间推移会略微泛黄。',
    },
    uses: {
      ko: '도마·주방 소품, 그릇, 장난감',
      en: 'Cutting boards & kitchenware, bowls, toys',
      ja: 'まな板・台所小物、器、おもちゃ',
      zh: '砧板与厨房小物、碗、玩具',
    },
  },
  {
    key: 'pine',
    hard: 2,
    density: '0.45–0.55',
    colors: ['#e2bf85', '#b48447'],
    latin: 'Pinus densiflora',
    name: { ko: '소나무', en: 'Korean red pine', ja: 'アカマツ', zh: '赤松' },
    look: {
      ko: '노란빛에 선명한 나이테',
      en: 'Yellowish with crisp growth rings',
      ja: '黄みがかった色にくっきりした年輪',
      zh: '偏黄色，年轮清晰',
    },
    feel: {
      ko: '가볍고 다루기 쉬우며 값 부담이 적습니다. 한옥 기둥과 대들보에 써 온 나무로, 큰 물건이나 여러 개 만들 때 좋습니다.',
      en: 'Light, easy to work and affordable. The traditional timber for hanok posts and beams, it suits large pieces and quantity orders.',
      ja: '軽くて扱いやすく、価格も手頃です。韓屋の柱や梁に使われてきた木で、大きな物や数を作るときに向きます。',
      zh: '轻便好加工，价格实惠。韩屋的柱子和大梁一直用它，适合做大件或批量制作。',
    },
    turning: {
      ko: '나이테의 무른 부분과 단단한 부분 차이가 커서, 날을 날카롭게 세워야 결이 뜯기지 않습니다.',
      en: 'Soft earlywood and hard latewood alternate sharply, so only a keen edge avoids tearing the grain.',
      ja: '年輪の柔らかい部分と硬い部分の差が大きいため、刃を鋭く立てないと木目がむしれます。',
      zh: '年轮中软硬部分差别很大，刀口必须锋利，否则纹理容易被撕裂。',
    },
    care: {
      ko: '송진이 있어 칠 위로 배어 나올 수 있습니다. 잘 마른 나무를 고르고, 마감 전에 바탕칠로 한 번 막아 줍니다.',
      en: 'Resin can bleed through a finish. We choose well-dried stock and seal it before the final coat.',
      ja: '松やにが塗膜の上ににじみ出ることがあります。よく乾いた材を選び、仕上げの前に下塗りで一度止めます。',
      zh: '松脂可能会渗出漆面。要挑选充分干燥的木料，并在上面漆前先打一层底漆封住。',
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
    density: '0.25–0.30',
    colors: ['#e6d3b3', '#bfa37c'],
    latin: 'Paulownia tomentosa',
    name: { ko: '오동나무', en: 'Paulownia', ja: '桐', zh: '泡桐' },
    look: {
      ko: '연한 회갈색, 은은한 결',
      en: 'Pale grayish brown with a soft, subtle grain',
      ja: '淡い灰褐色、やわらかな木目',
      zh: '浅灰褐色，纹理淡雅',
    },
    feel: {
      ko: '우리가 쓰는 나무 가운데 가장 가볍고, 습기에도 잘 변하지 않습니다. 장롱과 상자, 가야금의 울림판에 써 왔습니다.',
      en: 'The lightest wood in common use, and it barely moves with humidity. Used for wardrobes, boxes and the soundboard of the gayageum.',
      ja: '一般に使われる木の中で最も軽く、湿気でもほとんど狂いません。箪笥や箱、伽耶琴（カヤグム）の響板に使われてきました。',
      zh: '是常用木材中最轻的，受潮也几乎不变形。一直用于衣柜、箱子和伽倻琴的共鸣板。',
    },
    turning: {
      ko: '아주 물러서 결이 보풀처럼 일어나기 쉽습니다. 날카로운 날로 가볍게 깎고 고운 사포로 마무리합니다.',
      en: 'So soft that the fibers fuzz up easily. We take light cuts with a sharp tool and finish with fine sandpaper.',
      ja: 'とても柔らかく、繊維がけば立ちやすい木です。鋭い刃で軽く挽き、細かい紙やすりで仕上げます。',
      zh: '木质很软，纤维容易起毛。要用锋利的刀具轻车，再用细砂纸打磨收尾。',
    },
    care: {
      ko: '눌리면 쉽게 자국이 나서 힘 받는 곳에는 맞지 않습니다. 겉을 불에 살짝 그을려 결을 살리는 마감도 있습니다.',
      en: 'It dents easily, so it is not for load-bearing parts. One traditional finish lightly scorches the surface to bring out the grain.',
      ja: '押されると跡がつきやすく、力のかかる部分には向きません。表面を軽く焼いて木目を引き立てる「焼桐」という仕上げもあります。',
      zh: '受压容易留下凹痕，不适合承重部位。也有把表面轻轻烧烤、突显纹理的传统做法。',
    },
    uses: {
      ko: '상자, 가벼운 소품, 장식',
      en: 'Boxes, light accessories, decorative pieces',
      ja: '箱、軽い小物、飾り',
      zh: '盒子、轻便小物、装饰',
    },
  },
];

/** 만들 물건별 추천 나무(key는 위 WOODS의 key) */
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
  {
    title: {
      ko: '도마·주걱 같은 주방용품',
      en: 'Cutting boards & kitchen utensils',
      ja: 'まな板・へらなどの台所用品',
      zh: '砧板、锅铲等厨房用品',
    },
    woods: ['maple', 'cherry', 'walnut'],
  },
  {
    title: {
      ko: '옻칠 목기·전통 소품',
      en: 'Lacquered tableware & traditional pieces',
      ja: '漆塗りの器・伝統的な小物',
      zh: '大漆木器与传统小物',
    },
    woods: ['zelkova', 'pine', 'paulownia'],
  },
];
