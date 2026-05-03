import { c as createComponent } from './astro-component_Cto3ZtAx.mjs';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from './prerender_Dg6aT-fc.mjs';
import { $ as $$BaseLayout } from './BaseLayout_ZwrM1XnB.mjs';
import { g as getCollection } from './_astro_content_CX2cZDhn.mjs';
import { s as sortByDateDescending, a as sortByDateAscending, i as isEvent, f as formatDateRange } from './news_BBhsA-1W.mjs';

const $$News = createComponent(async ($$result, $$props, $$slots) => {
  const baseUrl = "/";
  const withBase = (path = "") => `${baseUrl}${path}`;
  const allEntries = sortByDateDescending(await getCollection("news"));
  const featuredEvents = sortByDateAscending(allEntries.filter(isEvent)).slice(0, 3);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Aktuelles & Termine", "data-astro-cid-5kj6t6lp": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="content-block-spacious news-page-intro" data-astro-cid-5kj6t6lp> <h1 data-astro-cid-5kj6t6lp>Aktuelles & Termine</h1> <p class="lead-text" data-astro-cid-5kj6t6lp>Kurze Neuigkeiten, kommende Lehrgaenge und die gesamte Chronik findest du hier in einer gemeinsamen Uebersicht.</p> <p data-astro-cid-5kj6t6lp>Alle Eintraege sind chronologisch nach Datum geordnet. Termine fuehren zu ihrer Ausschreibung oder zu einer Detailseite, kurze News bleiben kompakt und schnell lesbar.</p> </section> ${featuredEvents.length > 0 && renderTemplate`<section class="content-block-spacious" data-astro-cid-5kj6t6lp> <h2 data-astro-cid-5kj6t6lp>Kommende Termine</h2> <div class="feature-grid featured-event-grid" data-astro-cid-5kj6t6lp> ${featuredEvents.map((item) => renderTemplate`<article${addAttribute(["feature-card", "featured-event-card", `tone-${item.data.color}`], "class:list")} data-astro-cid-5kj6t6lp> <span class="event-date" data-astro-cid-5kj6t6lp>${formatDateRange(item.data.date, item.data.endDate)}</span> <h3 data-astro-cid-5kj6t6lp>${item.data.title}</h3> ${item.data.location && renderTemplate`<p class="event-location" data-astro-cid-5kj6t6lp>${item.data.location}</p>`} <p data-astro-cid-5kj6t6lp>${item.data.preview}</p> <a class="read-more-btn"${addAttribute(withBase(`news/${item.slug}`), "href")} data-astro-cid-5kj6t6lp>Weiter lesen</a> </article>`)} </div> </section>`}<section class="content-block-spacious" data-astro-cid-5kj6t6lp> <h2 data-astro-cid-5kj6t6lp>Chronik</h2> <div class="chronicle-list" data-astro-cid-5kj6t6lp> ${allEntries.map((item) => renderTemplate`<article${addAttribute(["chronicle-card", `tone-${item.data.color}`], "class:list")} data-astro-cid-5kj6t6lp> <div data-astro-cid-5kj6t6lp> <div class="chronicle-meta" data-astro-cid-5kj6t6lp> <span class="event-date" data-astro-cid-5kj6t6lp>${formatDateRange(item.data.date, item.data.endDate)}</span> <span${addAttribute(["entry-type", item.data.type === "event" ? "entry-type-event" : "entry-type-news"], "class:list")} data-astro-cid-5kj6t6lp> ${item.data.type === "event" ? "Termin" : "Aktuelles"} </span> </div> <div class="chronicle-copy" data-astro-cid-5kj6t6lp> <h3 data-astro-cid-5kj6t6lp>${item.data.title}</h3> ${item.data.location && renderTemplate`<p class="event-location" data-astro-cid-5kj6t6lp>${item.data.location}</p>`} <p data-astro-cid-5kj6t6lp>${item.data.preview}</p> </div> </div> <div class="chronicle-actions" data-astro-cid-5kj6t6lp> <a class="read-more-btn"${addAttribute(withBase(`news/${item.slug}`), "href")} data-astro-cid-5kj6t6lp>Weiter lesen</a> </div> </article>`)} </div> </section> ` })}`;
}, "C:/Users/felix/OneDrive/Data/WTA Hochburg Ach/Github/WTA-Hochburg-Ach/src/pages/news.astro", void 0);
const $$file = "C:/Users/felix/OneDrive/Data/WTA Hochburg Ach/Github/WTA-Hochburg-Ach/src/pages/news.astro";
const $$url = "/news.html";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$News,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
