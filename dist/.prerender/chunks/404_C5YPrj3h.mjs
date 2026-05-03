import { c as createComponent } from './astro-component_Cto3ZtAx.mjs';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from './prerender_Dg6aT-fc.mjs';
import { $ as $$BaseLayout } from './BaseLayout_ZwrM1XnB.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Seite nicht gefunden", "description": "Die gesuchte Seite konnte nicht gefunden werden.", "data-astro-cid-zetdm5md": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="content-block-spacious not-found" data-astro-cid-zetdm5md> <p class="not-found-code" data-astro-cid-zetdm5md>404</p> <h1 data-astro-cid-zetdm5md>Seite nicht gefunden</h1> <p class="lead-text" data-astro-cid-zetdm5md>Die gesuchte Seite existiert nicht oder wurde verschoben.</p> <p data-astro-cid-zetdm5md><a${addAttribute("/", "href")} class="button button-primary" data-astro-cid-zetdm5md>Zur Startseite</a></p> </section> ` })}`;
}, "C:/Users/felix/OneDrive/Data/WTA Hochburg Ach/Github/WTA-Hochburg-Ach/src/pages/404.astro", void 0);
const $$file = "C:/Users/felix/OneDrive/Data/WTA Hochburg Ach/Github/WTA-Hochburg-Ach/src/pages/404.astro";
const $$url = "/404.html";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
