// 공유 미리보기 이미지(카톡·페이스북 등에 링크를 보낼 때 뜨는 그림) 4장을 다시 만듭니다.
// 장인 경력 연수는 src/data/years.ts에서 가져오므로, 해가 바뀌면 이 스크립트만 다시 돌리면 됩니다.
// Mac에서 실행: node scripts/make-og.mjs   (Mac 기본 글꼴을 쓰므로 GitHub 서버에서는 돌리지 않음)
// 결과: src/assets/images/og/og-ko|en|ja|zh.jpg (1200×630)
import sharp from 'sharp';
import { YEARS } from '../src/data/years.ts';

const W = 1200;
const H = 630;
const PHOTO = 'src/assets/images/works/column-16.jpg';
const OUT = 'src/assets/images/og';

const TEXT = {
  ko: {
    font: "'Apple SD Gothic Neo', sans-serif",
    line1: `${YEARS}년 한 길,`,
    line2: '나무만 깎았습니다',
    sub: '로구로 목기 · 몰딩 · 무엇이든 주문 제작',
    contact: '서울 중구 을지로 219 · 02-2292-0062',
  },
  en: {
    font: "'Helvetica Neue', 'Apple SD Gothic Neo', sans-serif",
    line1: `${YEARS} years, one craft —`,
    line2: 'nothing but wood',
    sub: 'Woodturning & custom woodwork, made to order',
    contact: 'Euljiro, Seoul · +82 2-2292-0062',
  },
  ja: {
    font: "'Hiragino Sans', 'Apple SD Gothic Neo', sans-serif",
    line1: `${YEARS}年ひと筋、`,
    line2: '木だけを挽いてきました',
    sub: 'ろくろ挽きの器・木工品をオーダーメイドで',
    contact: 'ソウル乙支路 · +82 2-2292-0062',
  },
  zh: {
    font: "'PingFang SC', 'Apple SD Gothic Neo', sans-serif",
    line1: `${YEARS}年如一日，`,
    line2: '只与木头打交道',
    sub: '车床木器 · 线条 · 各类木作定制',
    contact: '首尔乙支路 · +82 2-2292-0062',
  },
};

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// 성창공예 마크(통나무 단면). src/components/common/Mark.astro와 같은 모양
const mark = (x, y, size) => `
  <g transform="translate(${x} ${y}) scale(${size / 48})">
    <mask id="m"><circle cx="24" cy="24" r="22" fill="#fff"/>
      <g fill="none" stroke="#000" stroke-linecap="round">
        <ellipse cx="22.6" cy="25" rx="15.5" ry="14.6" stroke-width="1.9"/>
        <ellipse cx="21.6" cy="25.6" rx="9.8" ry="9.1" stroke-width="1.9"/>
        <ellipse cx="21" cy="26" rx="4.2" ry="3.9" stroke-width="1.9"/>
        <path d="M24.5 2.5 L26.8 13.5" stroke-width="2.4"/>
      </g></mask>
    <circle cx="24" cy="24" r="22" fill="#e0ba78" mask="url(#m)"/>
  </g>`;

const overlay = (t) => `
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs>
    <linearGradient id="shade" x1="0" x2="1" y1="0" y2="0">
      <stop offset="0" stop-color="#140e09" stop-opacity="0.92"/>
      <stop offset="0.55" stop-color="#140e09" stop-opacity="0.62"/>
      <stop offset="1" stop-color="#140e09" stop-opacity="0.25"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#shade)"/>
  <rect x="28" y="28" width="${W - 56}" height="${H - 56}" fill="none" stroke="#e0ba78" stroke-opacity="0.35"/>
  ${mark(88, 92, 64)}
  <text x="180" y="128" font-family="'Apple SD Gothic Neo', sans-serif" font-size="30" font-weight="700" fill="#e0ba78">성창공예</text>
  <text x="180" y="158" font-family="'Helvetica Neue', sans-serif" font-size="13" letter-spacing="3.5" fill="#e0ba78" fill-opacity="0.85">SEONGCHANG CRAFT</text>
  <g font-family="${t.font}" font-weight="700">
    <text x="86" y="285" font-size="58" fill="#fbf6ee">${esc(t.line1)}</text>
    <text x="86" y="372" font-size="58" fill="#e0ba78">${esc(t.line2)}</text>
  </g>
  <rect x="86" y="444" width="54" height="2" fill="#e0ba78"/>
  <g font-family="${t.font}">
    <text x="86" y="500" font-size="22" fill="#efe6d8">${esc(t.sub)}</text>
    <text x="86" y="545" font-size="18" fill="#e0ba78" fill-opacity="0.9">${esc(t.contact)}</text>
  </g>
</svg>`;

const photo = await sharp(PHOTO)
  .resize(W, H, { fit: 'cover', position: 'center' })
  .modulate({ brightness: 0.85 })
  .toBuffer();
for (const [lang, t] of Object.entries(TEXT)) {
  const file = `${OUT}/og-${lang}.jpg`;
  await sharp(photo)
    .composite([{ input: Buffer.from(overlay(t)) }])
    .jpeg({ quality: 84, mozjpeg: true })
    .toFile(file);
  console.log('만듦:', file);
}
