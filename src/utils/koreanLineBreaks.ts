// 휴대폰에서 한국어 문장이 어색한 자리에서 줄바꿈되지 않게 다듬습니다. (src/middleware.ts가 모든 한국어 페이지에 적용)
// 글자 자체는 바꾸지 않고, 함께 있어야 할 말 사이의 빈칸만 '줄을 바꾸지 않는 빈칸'(NBSP)으로 바꿉니다.
// 새 문구를 추가해도 자동으로 적용되며, 끊기면 안 되는 낱말이 또 나오면 COMPOUNDS에 추가하면 됩니다.
const NBSP = ' ';

// 한 덩어리로 읽는 낱말
const COMPOUNDS = [
  '대량 생산',
  '수량 제작',
  '수량 주문',
  '본 제작',
  '주문 제작',
  '졸업 작품',
  '방송국 소품',
  '생활 소품',
  '전통 옻칠',
  '옻칠 마감',
  '원목 그릇',
  '난간 동자',
  '가구 다리',
  '가구 부속',
  '장식 기둥',
  '작업 사진',
  '작업 영상',
];

const RULES: [RegExp, string][] = [
  // '할 수 있습니다'
  [/([가-힣]) 수 (있|없)/g, `$1${NBSP}수${NBSP}$2`],
  // 앞말에 붙어야 하는 말: 말린 것, 만들 때, 받는 곳, 나무 중
  [/([가-힣]) (것|때|곳|뿐)/g, `$1${NBSP}$2`],
  [/([가-힣]) 중 /g, `$1${NBSP}중 `],
  // 수와 단위: 한 장, 수백 개, 몇 달, 여덟 가지
  [/(^|[^가-힣])(한|두|세|네|몇|여러|여덟|수백|수십) (개|장|점|번|벌|해|달|가지)(?![가-힣]{2})/g, `$1$2${NBSP}$3`],
  // 도와주는 말: 옮겨 냅니다, 읽어 가며, 안내해 드립니다, 알려 주세요, 깎아 두고
  [
    /([가-힣]) (드립니다|드리겠습니다|드리니|드려|드리|주세요|주시면|주셔도|줍니다|주면|냅니다|내는|내며|낸|가며|갑니다|보세요|둡니다|두고|왔습니다|온)(?![가-힣])/g,
    `$1${NBSP}$2`,
  ],
  // 뒷말을 꾸미는 짧은 말: 잘 맞습니다, 덜 휩니다, 다 마른
  [/(^|[^가-힣])(잘|덜|더|못|꼭|다) ([가-힣])/g, `$1$2${NBSP}$3`],
  // 줄 맨 앞에 — 또는 · 가 오지 않게
  [/([^\s]) (—|·) /g, `$1${NBSP}$2 `],
];
const compoundRe = new RegExp(COMPOUNDS.join('|'), 'g');

// '그릇·접시·합'은 통째로 한 줄에 둠
const DOT_RUN = /[가-힣A-Za-z0-9]+(?:·[가-힣A-Za-z0-9]+)+/g;

const polishText = (text: string) => {
  if (!/[가-힣]/.test(text)) return text;
  let out = text.replace(compoundRe, (m) => m.replace(' ', NBSP));
  for (const [re, to] of RULES) out = out.replace(re, to);
  return out.replace(DOT_RUN, '<span class="ko-nobreak">$&</span>');
};

// 태그와 스크립트 같은 부분은 건드리지 않고, 화면에 보이는 글자만 다듬음
const SPLIT =
  /(<(?:script|style|textarea|title|option|svg|noscript)\b[\s\S]*?<\/(?:script|style|textarea|title|option|svg|noscript)>|<!--[\s\S]*?-->|<[^>]+>)/g;

export const polishKoreanHtml = (html: string) => {
  const bodyAt = html.indexOf('<body');
  if (bodyAt < 0) return html;
  const body = html
    .slice(bodyAt)
    .split(SPLIT)
    .map((part, i) => (i % 2 ? part : polishText(part)))
    .join('');
  return html.slice(0, bodyAt) + body;
};
