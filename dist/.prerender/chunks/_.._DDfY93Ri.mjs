import { c as createComponent } from './astro-component_Cto3ZtAx.mjs';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from './prerender_Dg6aT-fc.mjs';
import { $ as $$BaseLayout } from './BaseLayout_ZwrM1XnB.mjs';
import { g as getCollection } from './_astro_content_CX2cZDhn.mjs';
import { f as formatDateRange } from './news_BBhsA-1W.mjs';

async function getStaticPaths() {
  const entries = await getCollection("news");
  return entries.map((entry) => ({
    params: { slug: entry.slug },
    props: { entry }
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$;
  const { entry } = Astro2.props;
  const { Content } = await entry.render();
  const baseUrl = "/";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": entry.data.title, "description": entry.data.preview, "data-astro-cid-cubnwgbf": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="content-block-spacious news-article" data-astro-cid-cubnwgbf> <p class="news-back" data-astro-cid-cubnwgbf> <a${addAttribute(`${baseUrl}news`, "href")} class="button button-outline" data-astro-cid-cubnwgbf>Zur Uebersicht</a> </p> <div class="news-header-meta" data-astro-cid-cubnwgbf> <span class="event-date" data-astro-cid-cubnwgbf>${formatDateRange(entry.data.date, entry.data.endDate)}</span> <span${addAttribute(["entry-type", entry.data.type === "event" ? "entry-type-event" : "entry-type-news"], "class:list")} data-astro-cid-cubnwgbf> ${entry.data.type === "event" ? "Termin" : "Aktuelles"} </span> </div> <h1 data-astro-cid-cubnwgbf>${entry.data.title}</h1> ${entry.data.location && renderTemplate`<p class="news-location" data-astro-cid-cubnwgbf>${entry.data.location}</p>`} ${entry.data.preview && renderTemplate`<p class="lead-text" data-astro-cid-cubnwgbf>${entry.data.preview}</p>`} ${(entry.data.pdfs?.de || entry.data.pdfs?.en) && renderTemplate`<div class="news-actions" data-astro-cid-cubnwgbf> ${entry.data.pdfs?.de && renderTemplate`<a${addAttribute(entry.data.pdfs.de, "href")} class="button button-primary" target="_blank" rel="noopener" data-astro-cid-cubnwgbf>
PDF Deutsch
</a>`} ${entry.data.pdfs?.en && renderTemplate`<a${addAttribute(entry.data.pdfs.en, "href")} class="button button-outline" target="_blank" rel="noopener" data-astro-cid-cubnwgbf>
PDF English
</a>`} <a${addAttribute(entry.data.pdfs?.de || entry.data.pdfs?.en || "#", "href")} class="button button-outline" target="_blank" rel="noopener" data-astro-cid-cubnwgbf>
Vorschau
</a> </div>`} <div class="news-article-content" data-astro-cid-cubnwgbf> ${renderComponent($$result2, "Content", Content, { "data-astro-cid-cubnwgbf": true })} </div> </article> ` })}`;
}, "C:/Users/felix/OneDrive/Data/WTA Hochburg Ach/Github/WTA-Hochburg-Ach/src/pages/news/[...slug].astro", void 0);
const $$file = "C:/Users/felix/OneDrive/Data/WTA Hochburg Ach/Github/WTA-Hochburg-Ach/src/pages/news/[...slug].astro";
const $$url = "/news/[...slug].html";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
