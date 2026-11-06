import { defineMiddleware } from 'astro:middleware';
import { polishKoreanHtml } from '~/utils/koreanLineBreaks';

// 한국어 페이지의 줄바꿈 다듬기. 빌드할 때 페이지마다 한 번 실행됩니다.
export const onRequest = defineMiddleware(async ({ url }, next) => {
  const response = await next();
  const isHtml = response.headers.get('content-type')?.includes('text/html');
  if (!isHtml || /^\/(en|ja|zh)(\/|$)/.test(url.pathname)) return response;
  return new Response(polishKoreanHtml(await response.text()), response);
});
