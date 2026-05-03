import { c as createComponent } from './astro-component_Cto3ZtAx.mjs';
import 'piccolore';
import { r as renderComponent, a as renderTemplate } from './prerender_Dg6aT-fc.mjs';
import { $ as $$BaseLayout } from './BaseLayout_ZwrM1XnB.mjs';
import { a as getEntryBySlug, g as getCollection } from './_astro_content_CX2cZDhn.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const page = await getEntryBySlug("pages", "index") ?? (await getCollection("pages")).find((p) => p.slug === "index" || p.slug === "");
  if (!page) {
    throw new Error("Index page not found");
  }
  const { Content } = await page.render();
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": page.data.title }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Content", Content, {})} ` })}`;
}, "C:/Users/felix/OneDrive/Data/WTA Hochburg Ach/Github/WTA-Hochburg-Ach/src/pages/index.astro", void 0);

const $$file = "C:/Users/felix/OneDrive/Data/WTA Hochburg Ach/Github/WTA-Hochburg-Ach/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
