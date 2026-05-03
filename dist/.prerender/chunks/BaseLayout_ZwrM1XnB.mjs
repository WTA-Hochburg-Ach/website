import { c as createComponent } from './astro-component_Cto3ZtAx.mjs';
import 'piccolore';
import { o as createRenderInstruction, m as maybeRenderHead, b as addAttribute, a as renderTemplate, s as spreadAttributes, r as renderComponent, F as Fragment, u as unescapeHTML, p as renderSlot, q as renderHead, n as defineScriptVars } from './prerender_Dg6aT-fc.mjs';
import 'clsx';
import { getIconData, iconToSVG } from '@iconify/utils';

async function renderScript(result, id) {
  const inlined = result.inlinedScripts.get(id);
  let content = "";
  if (inlined != null) {
    if (inlined) {
      content = `<script type="module">${inlined}</script>`;
    }
  } else {
    const resolved = await result.resolve(id);
    content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"></script>`;
  }
  return createRenderInstruction({ type: "script", id, content });
}

const siteMeta = {
  name: "Wanomichi Takemusu Aikido Hochburg-Ach",
  description: "Traditionelles Aikido in Duttendorf mit regelmaessigem Training, Lehrgaengen und einem offenen Vereinsleben."
};
const siteLinks = {
  home: "",
  about: "ueber-uns",
  training: "training",
  schedule: "trainingsplan",
  events: "termine",
  news: "news",
  gallery: "foto-galerie",
  contact: "kontakt",
  legal: "impressum"
};
const navItems = [
  {
    href: siteLinks.about,
    labelKey: "nav.about",
    summaryKey: "nav.about_summary",
    summary: "Verein, Trainingsort, Probetraining und Trainer."
  },
  {
    href: siteLinks.training,
    labelKey: "nav.training",
    summaryKey: "nav.training_summary",
    summary: "Aikido, Waffentraining und Trainingsaufbau."
  },
  {
    href: siteLinks.events,
    labelKey: "nav.events",
    summaryKey: "nav.events_summary",
    summary: "Kalender, Timeline, Ausschreibungen und PDF-Downloads."
  },
  {
    href: siteLinks.news,
    labelKey: "nav.news",
    summaryKey: "nav.news_summary",
    summary: "Kurze Neuigkeiten und die chronologische Historie."
  },
  {
    href: siteLinks.gallery,
    labelKey: "nav.gallery",
    summaryKey: "nav.gallery_summary",
    summary: "Bilder, Rueckblicke und Impressionen aus dem Dojo."
  },
  {
    href: siteLinks.contact,
    labelKey: "nav.contact",
    summaryKey: "nav.contact_summary",
    summary: "Ansprechpartner, Adresse, Telefon und Anfahrt."
  }
];
const venue = {
  name: "Mehrzweckhalle der neuen Mittelschule",
  street: "Athaler Strasse 1",
  postalCode: "5122",
  city: "Duttendorf",
  mapQuery: "Athaler Strasse 1, 5122 Duttendorf"
};
const contactData = {
  email: "dojo@aikido-hochburg-ach.at",
  phone: {
    href: "tel:+436504600020",
    compact: "+43 650 4600020",
    split: ["+43 650", "4600020"]
  },
  socialinstagram: {
    href: "https://www.instagram.com/aikido.hochburg.ach/"},
  socialfacebook: {
    href: "https://www.facebook.com/aikido.hochburg.ach/"}
};
const boardMembers = [
  {
    role: "Obmann",
    name: "Christian Dostal",
    street: "Birkenweg 29",
    cityLine: "5122 Hochburg-Ach",
    country: "Oesterreich",
    phoneLabel: "+43 650 / 4600020",
    phoneHref: "tel:+436504600020",
    email: contactData.email,
    splitPhone: true
  },
  {
    role: "2. Vorstand",
    name: "Karin Sturm",
    street: "Sternstrasse 11",
    cityLine: "84577 Tuessling",
    country: "Deutschland",
    phoneLabel: "+49 157 / 71977750",
    phoneHref: "tel:+4915771977750",
    email: contactData.email
  },
  {
    role: "Kassier",
    name: "Sandra Solaja-Pelzer",
    street: "Franziskanerstrasse 2",
    cityLine: "84503 Altoetting",
    country: "Deutschland",
    phoneLabel: "+49 163 / 1760984",
    phoneHref: "tel:+491631760984",
    email: contactData.email
  }
];
const trainingSchedule = [
  {
    day: "Montag",
    time: "18:00 - 19:30",
    label: "Training"
  },
  {
    day: "Freitag",
    time: "16:00 - 17:00",
    label: "Fragen und Vertiefung"
  },
  {
    day: "Freitag",
    time: "17:00 - 18:30",
    label: "Training"
  },
  {
    day: "Samstag",
    time: "10:00 - 12:00",
    label: "Waffentraining in ungeraden Wochen"
  }
];
const footerLinks = [
  {
    titleKey: "footer.dojo_title",
    items: [
      { href: siteLinks.about, labelKey: "nav.about" },
      { href: siteLinks.training, labelKey: "nav.training" },
      { href: siteLinks.schedule, labelKey: "nav.schedule" },
      { href: siteLinks.contact, labelKey: "nav.contact" }
    ]
  },
  {
    titleKey: "footer.updates_title",
    items: [
      { href: siteLinks.news, labelKey: "footer.news_and_events" },
      { href: siteLinks.events, labelKey: "footer.event_overview" },
      { href: siteLinks.gallery, labelKey: "nav.gallery" },
      { href: siteLinks.legal, labelKey: "footer.legal_and_privacy" }
    ]
  }
];
const footerSocialLinks = [
  {
    label: "E-Mail",
    href: `mailto:${contactData.email}`,
    icon: "lucide:mail"
  },
  {
    label: "Telefon",
    href: contactData.phone.href,
    icon: "lucide:phone"
  },
  {
    label: "Instagram",
    href: contactData.socialinstagram.href,
    icon: "lucide:instagram",
    external: true
  },
  {
    label: "Facebook",
    href: contactData.socialfacebook.href,
    icon: "lucide:facebook",
    external: true
  },
  {
    label: "Google Maps",
    href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(venue.mapQuery)}`,
    icon: "lucide:map-pin",
    external: true
  }
];

const $$Navigation = createComponent(($$result, $$props, $$slots) => {
  const baseUrl = "/";
  const withBase = (path = "") => `${baseUrl}${path}`;
  const fallbackLabels = {
    "nav.about": "Ueber uns",
    "nav.training": "Training",
    "nav.events": "Termine",
    "nav.news": "Aktuelles",
    "nav.gallery": "Galerie",
    "nav.contact": "Kontakt"
  };
  return renderTemplate`${maybeRenderHead()}<div class="utility-bar"> <div class="utility-inner"> <button class="theme-btn" id="theme-toggle" type="button" aria-label="Farbschema wechseln"> <span class="theme-track" aria-hidden="true"> <span class="theme-thumb"> <svg class="theme-icon theme-icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"> <circle cx="12" cy="12" r="4.2"></circle> <path d="M12 2.5v2.2M12 19.3v2.2M4.8 4.8l1.6 1.6M17.6 17.6l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.8 19.2l1.6-1.6M17.6 6.4l1.6-1.6"></path> </svg> <svg class="theme-icon theme-icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"> <path d="M20 15.5A8.5 8.5 0 1 1 12.5 4a6.5 6.5 0 0 0 7.5 11.5Z"></path> <path d="M16.5 3.5v2M21 8h-2M18.9 5.1l-1.4 1.4"></path> </svg> </span> </span> <span class="theme-copy"> <span class="theme-kicker" data-i18n="common.theme">Theme</span> <span class="theme-label" data-theme-label>Hell</span> </span> </button> <div class="lang-selector"> <button class="lang-btn" type="button" aria-label="Sprache aendern" aria-expanded="false"> <svg class="lang-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"> <circle cx="12" cy="12" r="9"></circle> <path d="M3 12h18"></path> <path d="M12 3a14 14 0 0 1 0 18"></path> <path d="M12 3a14 14 0 0 0 0 18"></path> </svg> <span class="lang-copy"> <strong data-current-lang>DE</strong> <span data-i18n="common.language">Sprache</span> </span> <svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"> <polyline points="6 9 12 15 18 9"></polyline> </svg> </button> <div class="lang-dropdown"> <a href="#" class="lang-option" data-lang="de"> <span>Deutsch</span> <span>DE</span> </a> <a href="#" class="lang-option" data-lang="en"> <span>English</span> <span>EN</span> </a> <a href="#" class="lang-option" data-lang="fr"> <span>Français</span> <span>FR</span> </a> </div> </div> </div> </div> <nav class="nav"> <div class="nav-inner"> <a${addAttribute(withBase(siteLinks.home), "href")} class="logo"> <span class="logo-kicker">Wanomichi Takemusu</span> <span class="logo-name">Aikido</span> <span class="logo-location">Hochburg-Ach</span> </a> <button class="menu-toggle" type="button" aria-label="Menue oeffnen" aria-expanded="false"> <span class="hamburger"></span> </button> <ul class="nav-links"> ${navItems.map((item) => renderTemplate`<li class="nav-item"> <a${addAttribute(withBase(item.href), "href")} class="nav-link"> <span class="nav-link-label"${addAttribute(item.labelKey, "data-i18n")}> ${fallbackLabels[item.labelKey]} </span> <span class="nav-link-hint"${addAttribute(item.summaryKey, "data-i18n")}> ${item.summary} </span> </a> <div class="nav-flyout"> <p${addAttribute(item.summaryKey, "data-i18n")}>${item.summary}</p> </div> </li>`)} </ul> </div> <img${addAttribute(`${baseUrl}assets/brush.svg`, "src")} alt="" class="nav-brush"> </nav> ${renderScript($$result, "C:/Users/felix/OneDrive/Data/WTA Hochburg Ach/Github/WTA-Hochburg-Ach/src/components/Navigation.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/felix/OneDrive/Data/WTA Hochburg Ach/Github/WTA-Hochburg-Ach/src/components/Navigation.astro", void 0);

const icons = {};

const cache = /* @__PURE__ */ new WeakMap();

const $$Icon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Icon;
  class AstroIconError extends Error {
    constructor(message) {
      super(message);
      this.hint = "";
    }
  }
  const req = Astro2.request;
  const { name = "", title, desc, "is:inline": inline = false, ...props } = Astro2.props;
  const map = cache.get(req) ?? /* @__PURE__ */ new Map();
  const i = map.get(name) ?? 0;
  map.set(name, i + 1);
  cache.set(req, map);
  const includeSymbol = !inline && i === 0;
  let [setName, iconName] = name.split(":");
  if (!setName && iconName) {
    const err = new AstroIconError(`Invalid "name" provided!`);
    throw err;
  }
  if (!iconName) {
    iconName = setName;
    setName = "local";
    if (!icons[setName]) {
      const err = new AstroIconError('Unable to load the "local" icon set!');
      throw err;
    }
    if (!(iconName in icons[setName].icons)) {
      const err = new AstroIconError(`Unable to locate "${name}" icon!`);
      throw err;
    }
  }
  const collection = icons[setName];
  if (!collection) {
    const err = new AstroIconError(`Unable to locate the "${setName}" icon set!`);
    throw err;
  }
  const iconData = getIconData(collection, iconName ?? setName);
  if (!iconData) {
    const err = new AstroIconError(`Unable to locate "${name}" icon!`);
    throw err;
  }
  const id = `ai:${collection.prefix}:${iconName ?? setName}`;
  if (props.size) {
    props.width = props.size;
    props.height = props.size;
    delete props.size;
  }
  const renderData = iconToSVG(iconData);
  const normalizedProps = { ...renderData.attributes, ...props };
  const normalizedBody = renderData.body;
  const { viewBox } = normalizedProps;
  if (includeSymbol) {
    delete normalizedProps.viewBox;
  }
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(normalizedProps)}${addAttribute(name, "data-icon")}> ${title && renderTemplate`<title>${title}</title>`} ${desc && renderTemplate`<desc>${desc}</desc>`} ${inline ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "id": id }, { "default": ($$result2) => renderTemplate`${unescapeHTML(normalizedBody)}` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${includeSymbol && renderTemplate`<symbol${addAttribute(id, "id")}${addAttribute(viewBox, "viewBox")}>${unescapeHTML(normalizedBody)}</symbol>`}<use${addAttribute(`#${id}`, "href")}></use> ` })}`} </svg>`;
}, "C:/Users/felix/OneDrive/Data/WTA Hochburg Ach/Github/WTA-Hochburg-Ach/node_modules/astro-icon/components/Icon.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const baseUrl = "/";
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  const withBase = (path = "") => `${baseUrl}${path}`;
  const footerLabelFallbacks = {
    "nav.about": "Ueber uns",
    "nav.training": "Training",
    "nav.schedule": "Trainingsplan",
    "nav.contact": "Kontakt",
    "footer.news_and_events": "Aktuelles & Termine",
    "footer.event_overview": "Terminuebersicht",
    "nav.gallery": "Galerie",
    "footer.legal_and_privacy": "Impressum & Datenschutz"
  };
  return renderTemplate`${maybeRenderHead()}<footer class="footer" data-astro-cid-sz7xmlte> <div class="footer-content" data-astro-cid-sz7xmlte> <div class="footer-grid" data-astro-cid-sz7xmlte> ${footerLinks.map((section) => renderTemplate`<div class="footer-section" data-astro-cid-sz7xmlte> <h4${addAttribute(section.titleKey, "data-i18n")} data-astro-cid-sz7xmlte> ${section.titleKey === "footer.dojo_title" ? "WTA Hochburg-Ach" : "Aktuelles"} </h4> <ul data-astro-cid-sz7xmlte> ${section.items.map((item) => renderTemplate`<li data-astro-cid-sz7xmlte> <a${addAttribute(withBase(item.href), "href")}${addAttribute(item.labelKey, "data-i18n")} data-astro-cid-sz7xmlte> ${footerLabelFallbacks[item.labelKey]} </a> </li>`)} </ul> </div>`)} <div class="footer-section" data-astro-cid-sz7xmlte> <h4 data-i18n="footer.times_title" data-astro-cid-sz7xmlte>Trainingszeiten</h4> <ul data-astro-cid-sz7xmlte> ${trainingSchedule.map((item, index) => renderTemplate`<li${addAttribute(
    index === 0 ? "footer.times_monday" : index === 1 ? "footer.times_friday_questions" : index === 2 ? "footer.times_friday_training" : "footer.times_saturday",
    "data-i18n"
  )} data-astro-cid-sz7xmlte> ${item.day}: ${item.time} ${item.label} </li>`)} </ul> </div> <div class="footer-section" data-astro-cid-sz7xmlte> <h4 data-i18n="footer.contact_title" data-astro-cid-sz7xmlte>Kontakt</h4> <ul data-astro-cid-sz7xmlte> <li data-astro-cid-sz7xmlte><a${addAttribute(`mailto:${contactData.email}`, "href")} data-astro-cid-sz7xmlte>${contactData.email}</a></li> <li data-astro-cid-sz7xmlte><a${addAttribute(contactData.phone.href, "href")} data-astro-cid-sz7xmlte>${contactData.phone.compact}</a></li> <li data-i18n="footer.address_line1" data-astro-cid-sz7xmlte>${venue.street}</li> <li data-i18n="footer.address_line2" data-astro-cid-sz7xmlte>${venue.postalCode} ${venue.city}</li> </ul> <div class="footer-social" data-astro-cid-sz7xmlte> ${footerSocialLinks.map((item) => renderTemplate`<a${addAttribute(item.href, "href")}${addAttribute(item.label, "aria-label")}${addAttribute(item.external || item.href.startsWith("http") ? "_blank" : void 0, "target")}${addAttribute(item.external || item.href.startsWith("http") ? "noopener noreferrer" : void 0, "rel")} data-astro-cid-sz7xmlte> ${renderComponent($$result, "Icon", $$Icon, { "name": item.icon, "size": "24", "data-astro-cid-sz7xmlte": true })} </a>`)} </div> </div> </div> </div> <img${addAttribute(`${baseUrl}assets/brush.svg`, "src")} alt="" class="footer-brush" data-astro-cid-sz7xmlte> <div class="footer-bottom" data-astro-cid-sz7xmlte> <p data-i18n="footer.copyright" data-i18n-attr="data-year:footer.year"${addAttribute(currentYear, "data-year")} data-astro-cid-sz7xmlte>
© ${currentYear} Wanomichi Takemusu Aikido Hochburg-Ach
</p> <p class="footer-tagline" data-i18n="footer.tagline" data-astro-cid-sz7xmlte>Aikido - der Weg der Harmonie</p> </div> </footer>`;
}, "C:/Users/felix/OneDrive/Data/WTA Hochburg Ach/Github/WTA-Hochburg-Ach/src/components/Footer.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$ScrollTop = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", `<button id="scrollTop" aria-label="Nach oben" data-astro-cid-5qrr6s65>↑</button>  <script>
  const btn = document.getElementById('scrollTop');

  window.addEventListener('scroll', () => {
    btn.classList.toggle('show', window.scrollY > 400);
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
<\/script>`])), maybeRenderHead());
}, "C:/Users/felix/OneDrive/Data/WTA Hochburg Ach/Github/WTA-Hochburg-Ach/src/components/ScrollTop.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    title,
    description = siteMeta.description,
    content
  } = Astro2.props;
  const canonicalURL = Astro2.site ? new URL(Astro2.url.pathname, Astro2.site) : null;
  const baseUrl = "/";
  return renderTemplate(_a || (_a = __template(['<html lang="de"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="description"', '><meta name="color-scheme" content="light dark"><meta name="keywords" content="Aikido, Dojo, Kampfkunst, Braunau, Training, Hochburg-Ach"><meta name="author"', '><meta property="og:type" content="website">', '<meta property="og:title"', '><meta property="og:description"', '><meta property="og:locale" content="de_DE"><link rel="icon" type="image/svg+xml"', "><title>", "</title>", "<script>(function(){", `
    window.__SITE_BASE__ = baseUrl;

    try {
      const storedTheme = localStorage.getItem('theme');
      const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      document.documentElement.dataset.theme = storedTheme || preferredTheme;
    } catch {
      document.documentElement.dataset.theme = 'light';
    }
  })();</script><link rel="stylesheet"`, '><link rel="stylesheet"', '><link rel="stylesheet"', '><link rel="stylesheet"', '><link rel="stylesheet"', '><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet"><script', "></script>", '</head> <body> <div class="site-wrapper"> ', ' <main class="content"> ', " </main> ", " </div> ", " </body></html>"])), addAttribute(description, "content"), addAttribute(siteMeta.name, "content"), canonicalURL && renderTemplate`<meta property="og:url"${addAttribute(canonicalURL, "content")}>`, addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(`${baseUrl}favicon.svg`, "href"), title, canonicalURL && renderTemplate`<link rel="canonical"${addAttribute(canonicalURL, "href")}>`, defineScriptVars({ baseUrl }), addAttribute(`${baseUrl}styles/colors.css`, "href"), addAttribute(`${baseUrl}styles/base.css`, "href"), addAttribute(`${baseUrl}styles/components.css`, "href"), addAttribute(`${baseUrl}styles/navigation.css`, "href"), addAttribute(`${baseUrl}styles/legal.css`, "href"), addAttribute(`${baseUrl}scripts/i18n.js`, "src"), renderHead(), renderComponent($$result, "Navigation", $$Navigation, {}), content ? renderTemplate`<div>${unescapeHTML(content)}</div>` : renderTemplate`${renderSlot($$result, $$slots["default"])}`, renderComponent($$result, "Footer", $$Footer, {}), renderComponent($$result, "ScrollTop", $$ScrollTop, {}));
}, "C:/Users/felix/OneDrive/Data/WTA Hochburg Ach/Github/WTA-Hochburg-Ach/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $, boardMembers as b, contactData as c, venue as v };
