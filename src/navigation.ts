import { getBlogPermalink } from './utils/permalinks';
import { MAP_LINKS, shopFor } from './data/shop';
import { localize, useT, type Lang } from './i18n';

// 상단 메뉴. 소식(블로그)은 한국어로만 있어서 한국어 페이지에서만 보여 줍니다.
export const getHeaderData = (lang: Lang = 'ko') => {
  const t = useT(lang).nav;
  const shop = shopFor(lang);
  return {
    links: [
      { text: t.about, href: localize(lang, '/about') },
      { text: t.services, href: localize(lang, '/services') },
      { text: t.works, href: localize(lang, '/works') },
      ...(lang === 'ko' ? [{ text: t.news, href: getBlogPermalink() }] : []),
      { text: t.contact, href: localize(lang, '/contact') },
    ],
    actions: [{ variant: 'primary' as const, text: t.call, href: shop.tel.href, icon: 'tabler:phone' }],
  };
};

export const getFooterData = (lang: Lang = 'ko') => {
  const t = useT(lang);
  const shop = shopFor(lang);
  return {
    links: [
      {
        title: t.footer.explore,
        links: [
          { text: t.nav.about, href: localize(lang, '/about') },
          { text: t.nav.services, href: localize(lang, '/services') },
          { text: t.nav.woods, href: localize(lang, '/woods') },
          { text: t.nav.works, href: localize(lang, '/works') },
          ...(lang === 'ko' ? [{ text: t.nav.news, href: getBlogPermalink() }] : []),
        ],
      },
      {
        title: t.footer.order,
        links: [
          { text: t.footer.orderForm, href: localize(lang, '/contact') },
          { text: `${t.footer.shopPhone} ${shop.tel.label}`, href: shop.tel.href },
          { text: `${t.footer.mobilePhone} ${shop.mobile.label}`, href: shop.mobile.href },
        ],
      },
      {
        title: t.footer.visit,
        links: [
          { text: shop.addressShort, href: lang === 'ko' ? MAP_LINKS.naver : MAP_LINKS.google },
          { text: shop.hours },
          { text: shop.closed },
        ],
      },
    ],
    secondaryLinks: [],
    socialLinks: [],
    tagline: t.footer.tagline,
    footNote: `© ${new Date().getFullYear()} ${shop.name}. ${t.footer.rights}`,
  };
};

export const headerData = getHeaderData('ko');
export const footerData = getFooterData('ko');
