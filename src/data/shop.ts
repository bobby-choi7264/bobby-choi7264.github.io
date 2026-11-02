// 가게 기본 정보 — 전화번호·주소·영업시간이 바뀌면 이 파일만 고치면 됩니다.

export const SHOP = {
  name: '성창공예',
  nameEn: 'SEONGCHANG CRAFT',
  address: '서울특별시 중구 을지로 219',
  addressShort: '서울 중구 을지로 219',
  hours: '월~토 08:00 ~ 18:00',
  closed: '일요일·공휴일 휴무',
  tel: { label: '02-2292-0062', href: 'tel:0222920062' },
  mobile: { label: '010-8548-7264', href: 'tel:01085487264', sms: 'sms:01085487264' },
};

const q = encodeURIComponent(SHOP.addressShort);

export const MAP_LINKS = {
  naver: `https://map.naver.com/p/search/${q}`,
  kakao: `https://map.kakao.com/link/search/${q}`,
  google: `https://www.google.com/maps/search/?api=1&query=${q}`,
  embed: `https://maps.google.com/maps?q=${q}&hl=ko&z=17&output=embed`,
};

export const SERVICES = [
  {
    key: 'lathe',
    title: '로구로 전문',
    icon: 'tabler:rotate-clockwise-2',
    description: '목선반(로구로)으로 나무를 돌려 깎습니다. 그릇·접시·합 같은 목기가 특히 자신 있는 분야이고, 기둥·다리·손잡이도 정밀하게 만듭니다.',
  },
  {
    key: 'column',
    title: '몰딩 · 재단',
    icon: 'tabler:ruler-measure',
    description: '난간 기둥, 계단 동자, 가구 다리, 몰딩까지 도면과 견본에 맞춰 같은 모양으로 대량 생산합니다. 방송국 납품도 합니다.',
  },
  {
    key: 'custom',
    title: '학생 작품',
    icon: 'tabler:school',
    description: '디자인·공예 전공 학생들의 졸업 작품과 과제를 함께 고민하며 원하는 형태로 구현해 드립니다.',
  },
  {
    key: 'furniture',
    title: '공예품 일절',
    icon: 'tabler:hammer',
    description: '간판, 조명, 생활 소품, 창살, 가구 부속까지 — 나무로 만들 수 있는 것은 상담해 주세요.',
  },
];
