// 가게 기본 정보 — 전화번호·주소가 바뀌면 이 파일과 src/i18n/ 의 각 언어 파일(shop 부분)을 고치세요.
import { useT, type Lang } from '~/i18n';

export const SHOP = {
  name: '성창공예',
  prefix: '거목', // 상호 위에 얹는 호. 표시는 BrandCrown.astro
  nameEn: 'SEONGCHANG CRAFT',
  owner: '최관규', // 대표 (명함: 崔寬圭)
  address: '서울특별시 중구 을지로 219',
  addressShort: '서울 중구 을지로 219',
  hours: '월~토 08:00~18:00',
  closed: '일요일·공휴일 휴무',
  tel: { label: '02-2292-0062', href: 'tel:0222920062' },
  tel2: { label: '02-814-5998', href: 'tel:028145998' }, // 간판에 있는 두 번째 가게 전화
  mobile: { label: '010-8548-7264', href: 'tel:01085487264', sms: 'sms:01085487264' },
};

// 해외에서도 걸리는 국제 번호 (외국어 페이지에서 사용)
const INTL = {
  tel: 'tel:+82222920062',
  tel2: 'tel:+8228145998',
  mobile: 'tel:+821085487264',
  sms: 'sms:+821085487264',
};

/** 언어에 맞는 가게 정보 (주소·영업시간 문구, 전화 표기) */
export const shopFor = (lang: Lang) => {
  const t = useT(lang).shop;
  const ko = lang === 'ko';
  return {
    name: SHOP.name,
    nameEn: SHOP.nameEn,
    address: t.address,
    addressShort: t.addressShort,
    hours: t.hours,
    closed: t.closed,
    tel: { label: t.telLabel, href: ko ? SHOP.tel.href : INTL.tel },
    tel2: { label: t.telLabel2, href: ko ? SHOP.tel2.href : INTL.tel2 },
    mobile: { label: t.mobileLabel, href: ko ? SHOP.mobile.href : INTL.mobile, sms: ko ? SHOP.mobile.sms : INTL.sms },
  };
};

const q = encodeURIComponent(SHOP.addressShort);
const MAP_HL: Record<Lang, string> = { ko: 'ko', en: 'en', ja: 'ja', zh: 'zh-CN' };

// 사장님이 2021년까지 쓰신 네이버 블로그 (바닥글, 소개 페이지에서 연결)
export const BLOG_URL = 'https://blog.naver.com/choikg7264';

export const MAP_LINKS = {
  // 네이버 스마트플레이스에 등록된 성창공예 가게 화면 (장소 번호 1605088597)
  naver: 'https://map.naver.com/p/entry/place/1605088597',
  // 같은 가게의 방문자 리뷰 화면 (주문·문의 페이지 '후기 남기기' 칸, 가게 안내문 QR과 같은 주소)
  naverReview: 'https://m.place.naver.com/place/1605088597/review/visitor',
  kakao: `https://map.kakao.com/link/search/${q}`,
  google: `https://www.google.com/maps/search/?api=1&query=${q}`,
  embed: `https://maps.google.com/maps?q=${q}&hl=ko&z=17&output=embed`,
};
export const mapEmbed = (lang: Lang) => `https://maps.google.com/maps?q=${q}&hl=${MAP_HL[lang]}&z=17&output=embed`;

// 작업 분야 4가지. 이름과 설명은 src/i18n/ 의 각 언어 파일 services 부분에 있습니다.
export const SERVICES = [
  { key: 'lathe', icon: 'tabler:rotate-clockwise-2' },
  { key: 'column', icon: 'tabler:ruler-measure' },
  { key: 'custom', icon: 'tabler:school' },
  { key: 'furniture', icon: 'tabler:hammer' },
] as const;
export type ServiceKey = (typeof SERVICES)[number]['key'];
