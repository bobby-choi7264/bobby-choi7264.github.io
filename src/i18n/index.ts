// 여러 나라 말 지원. 한국어가 기본(주소 앞에 아무것도 없음)이고,
// 영어·일본어·중국어는 주소 앞에 /en/, /ja/, /zh/ 가 붙습니다.
// 문구를 고치려면 같은 폴더의 ko.ts, en.ts, ja.ts, zh.ts 를 고치세요.
import { getPermalink, trimSlash } from '~/utils/permalinks';
import ko from './ko';
import en from './en';
import ja from './ja';
import zh from './zh';

export const LOCALES = ['ko', 'en', 'ja', 'zh'] as const;
export type Lang = (typeof LOCALES)[number];
export const DEFAULT_LANG: Lang = 'ko';
export const FOREIGN_LOCALES = LOCALES.filter((lang) => lang !== DEFAULT_LANG);

export const LANG_META: Record<Lang, { label: string; short: string; html: string; og: string }> = {
  ko: { label: '한국어', short: 'KO', html: 'ko', og: 'ko_KR' },
  en: { label: 'English', short: 'EN', html: 'en', og: 'en_US' },
  ja: { label: '日本語', short: 'JA', html: 'ja', og: 'ja_JP' },
  zh: { label: '简体中文', short: '中文', html: 'zh-CN', og: 'zh_CN' },
};

export type Dict = typeof ko;
const DICTS: Record<Lang, Dict> = { ko, en, ja, zh };
export const useT = (lang: Lang): Dict => DICTS[lang];

// 여러 나라 말로 만든 페이지 (소식 글은 한국어만 있습니다)
export const TRANSLATED_PAGES = ['/', '/about', '/services', '/works', '/contact'];

export const isLang = (value: unknown): value is Lang => LOCALES.includes(value as Lang);

/** 주소에서 언어를 읽습니다. 예: /ja/works/ → 'ja' */
export const langFromPath = (pathname: string): Lang => {
  const first = trimSlash(pathname).split('/')[0];
  return isLang(first) ? first : DEFAULT_LANG;
};

/** 언어 앞머리를 뗀 주소. 예: /ja/works/ → /works */
export const stripLang = (pathname: string): string => {
  const parts = trimSlash(pathname).split('/').filter(Boolean);
  if (isLang(parts[0])) parts.shift();
  return '/' + parts.join('/');
};

/** 언어에 맞는 주소. 예: localize('ja', '/works') → /ja/works/ */
export const localize = (lang: Lang, path = '/'): string => {
  if (path.startsWith('#') || /^[a-z]+:/i.test(path)) return path;
  const [base, hash = ''] = path.split('#');
  const url = getPermalink(lang === DEFAULT_LANG ? base : `/${lang}/${trimSlash(base)}`);
  return hash ? `${url}#${hash}` : url;
};

/** 지금 보고 있는 페이지를 다른 언어로 볼 때의 주소 (번역이 없는 페이지면 그 언어의 홈) */
export const switchPath = (pathname: string, to: Lang): string => {
  const page = stripLang(pathname);
  return TRANSLATED_PAGES.includes(page) ? localize(to, page) : localize(to, '/');
};

/** 다른 나라 말 페이지들의 주소를 만드는 getStaticPaths */
export const foreignPaths = () => FOREIGN_LOCALES.map((lang) => ({ params: { lang } }));
