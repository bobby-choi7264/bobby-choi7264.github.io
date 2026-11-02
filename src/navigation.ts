import { getPermalink, getBlogPermalink } from './utils/permalinks';
import { SHOP, MAP_LINKS } from './data/shop';

export const headerData = {
  links: [
    { text: '소개', href: getPermalink('/about') },
    { text: '작업 분야', href: getPermalink('/services') },
    { text: '작업물', href: getPermalink('/works') },
    { text: '소식', href: getBlogPermalink() },
    { text: '주문·문의', href: getPermalink('/contact') },
  ],
  actions: [{ variant: 'primary' as const, text: '전화하기', href: SHOP.tel.href, icon: 'tabler:phone' }],
};

export const footerData = {
  links: [
    {
      title: '둘러보기',
      links: [
        { text: '소개', href: getPermalink('/about') },
        { text: '작업 분야', href: getPermalink('/services') },
        { text: '작업물', href: getPermalink('/works') },
        { text: '소식', href: getBlogPermalink() },
      ],
    },
    {
      title: '주문·문의',
      links: [
        { text: '주문서 작성', href: getPermalink('/contact') },
        { text: `가게 ${SHOP.tel.label}`, href: SHOP.tel.href },
        { text: `휴대폰 ${SHOP.mobile.label}`, href: SHOP.mobile.href },
      ],
    },
    {
      title: '오시는 길',
      links: [{ text: SHOP.addressShort, href: MAP_LINKS.naver }, { text: SHOP.hours }, { text: SHOP.closed }],
    },
  ],
  secondaryLinks: [],
  socialLinks: [],
  footNote: `© ${new Date().getFullYear()} ${SHOP.name}. All rights reserved.`,
};
