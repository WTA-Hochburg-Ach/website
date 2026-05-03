import { c as createComponent } from './astro-component_Cto3ZtAx.mjs';
import 'piccolore';
import { r as renderComponent, a as renderTemplate } from './prerender_Dg6aT-fc.mjs';
import { $ as $$BaseLayout } from './BaseLayout_ZwrM1XnB.mjs';
import { g as getCollection } from './_astro_content_CX2cZDhn.mjs';

async function getStaticPaths() {
  const pages = await getCollection("pages");
  return pages.filter((page) => page.slug !== "index").map((page) => ({
    params: { slug: page.slug },
    props: page
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$slug;
  const { data, render } = Astro2.props;
  const { Content } = await render();
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": data.title }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Content", Content, {})} ` })}`;
}, "C:/Users/felix/OneDrive/Data/WTA Hochburg Ach/Github/WTA-Hochburg-Ach/src/pages/[slug].astro", void 0);

const $$file = "C:/Users/felix/OneDrive/Data/WTA Hochburg Ach/Github/WTA-Hochburg-Ach/src/pages/[slug].astro";
const $$url = "/[slug].html";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
