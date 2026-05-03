import path, { posix } from 'node:path';
import 'esbuild';
import { markdownConfigDefaults, syntaxHighlightDefaults } from '@astrojs/markdown-remark';
import { bundledThemes } from 'shiki';
import * as z from 'zod/v4';
import { c as cspAlgorithmSchema, d as cspHashSchema, e as allowedDirectivesSchema, P as Pipeline, f as createStylesheetElementSet, g as createModuleScriptElement, h as findRouteToRewrite, i as createConsoleLogger, R as RenderContext, j as getParts, k as getPattern, l as createKey, S as SlotString, N as NOOP_MIDDLEWARE_FN } from './prerender_Dg6aT-fc.mjs';
import { prependForwardSlash, removeTrailingForwardSlash, appendForwardSlash, removeLeadingForwardSlash } from '@astrojs/internal-helpers/path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { g as getCollection } from './_astro_content_CX2cZDhn.mjs';

const errorMap = (issue) => {
  const baseErrorPath = flattenErrorPath(issue.path ?? []);
  if (issue.code === "invalid_union") {
    let typeOrLiteralErrByPath = /* @__PURE__ */ new Map();
    for (const unionError of issue.errors.flat()) {
      if (unionError.code === "invalid_type") {
        const flattenedErrorPath = flattenErrorPath(unionError.path);
        if (typeOrLiteralErrByPath.has(flattenedErrorPath)) {
          typeOrLiteralErrByPath.get(flattenedErrorPath).expected.push(unionError.expected);
        } else {
          typeOrLiteralErrByPath.set(flattenedErrorPath, {
            code: unionError.code,
            received: unionError.received,
            expected: [unionError.expected],
            message: unionError.message
          });
        }
      }
    }
    const messages = [prefix(baseErrorPath, "Did not match union.")];
    const details = [...typeOrLiteralErrByPath.entries()].filter(([, error]) => error.expected.length === issue.errors.flat().length).map(
      ([key, error]) => key === baseErrorPath ? (
        // Avoid printing the key again if it's a base error
        `> ${getTypeOrLiteralMsg(error)}`
      ) : `> ${prefix(key, getTypeOrLiteralMsg(error))}`
    );
    if (details.length === 0) {
      if ("discriminator" in issue && issue.discriminator && "options" in issue) {
        const options = issue.options;
        if (Array.isArray(options)) {
          details.push(
            `> Expected \`${issue.discriminator}\` to be ${options.map((o) => `\`${stringify(o)}\``).join(" | ")}`
          );
          details.push("> Received `" + stringify(issue.input) + "`");
        }
      }
    }
    if (details.length === 0) {
      const expectedShapes = [];
      for (const unionErrors of issue.errors) {
        const expectedShape = [];
        for (const _issue of unionErrors) {
          if (_issue.code === "invalid_union") {
            return errorMap(_issue);
          }
          const relativePath = flattenErrorPath(_issue.path).replace(baseErrorPath, "").replace(leadingPeriod, "");
          if ("expected" in _issue && typeof _issue.expected === "string") {
            expectedShape.push(
              relativePath ? `${relativePath}: ${_issue.expected}` : _issue.expected
            );
          } else if ("values" in _issue) {
            expectedShape.push(
              ..._issue.values.filter((v) => typeof v === "string").map((v) => `"${v}"`)
            );
          } else if (relativePath) {
            expectedShape.push(relativePath);
          }
        }
        if (expectedShape.length === 1 && !expectedShape[0]?.includes(":")) {
          expectedShapes.push(expectedShape.join(""));
        } else if (expectedShape.length > 0) {
          expectedShapes.push(`{ ${expectedShape.join("; ")} }`);
        }
      }
      if (expectedShapes.length) {
        details.push("> Expected type `" + expectedShapes.join(" | ") + "`");
        details.push("> Received `" + stringify(issue.input) + "`");
      }
    }
    return {
      message: messages.concat(details).join("\n")
    };
  } else if (issue.code === "invalid_key") {
    const keyIssues = issue.issues;
    if (Array.isArray(keyIssues) && keyIssues.length > 0) {
      const firstIssue = keyIssues[0];
      const msg = firstIssue.message || "Invalid key in record";
      return { message: prefix(baseErrorPath, msg) };
    }
    return { message: prefix(baseErrorPath, "Invalid key in record") };
  } else if (issue.code === "invalid_element") {
    const elementIssues = issue.issues;
    if (Array.isArray(elementIssues) && elementIssues.length > 0) {
      const firstIssue = elementIssues[0];
      const msg = firstIssue.message || "Invalid element";
      return { message: prefix(baseErrorPath, msg) };
    }
    return { message: prefix(baseErrorPath, "Invalid element") };
  } else if (issue.code === "invalid_type") {
    return {
      message: prefix(
        baseErrorPath,
        getTypeOrLiteralMsg({
          code: issue.code,
          received: typeof issue.input,
          expected: [issue.expected],
          message: issue.message
        })
      )
    };
  } else if (issue.message) {
    return { message: prefix(baseErrorPath, issue.message) };
  }
};
const getTypeOrLiteralMsg = (error) => {
  if (typeof error.received === "undefined" || error.received === "undefined")
    return error.message ?? "Required";
  const expectedDeduped = new Set(error.expected);
  switch (error.code) {
    case "invalid_type":
      return `Expected type \`${unionExpectedVals(expectedDeduped)}\`, received \`${stringify(
        error.received
      )}\``;
    case "invalid_literal":
      return `Expected \`${unionExpectedVals(expectedDeduped)}\`, received \`${stringify(
        error.received
      )}\``;
  }
};
const prefix = (key, msg) => key.length ? `**${key}**: ${msg}` : msg;
const unionExpectedVals = (expectedVals) => [...expectedVals].map((expectedVal) => stringify(expectedVal)).join(" | ");
const flattenErrorPath = (errorPath) => errorPath.join(".");
const stringify = (val) => JSON.stringify(val, null, 1).split(newlinePlusWhitespace).join(" ");
const newlinePlusWhitespace = /\n\s*/;
const leadingPeriod = /^\./;

var idle_prebuilt_default = `(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value=="object"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};"requestIdleCallback"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event("astro:idle"));})();`;

var load_prebuilt_default = `(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event("astro:load"));})();`;

var media_prebuilt_default = `(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener("change",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event("astro:media"));})();`;

var only_prebuilt_default = `(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event("astro:only"));})();`;

var visible_prebuilt_default = `(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value=="object"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event("astro:visible"));})();`;

function getDefaultClientDirectives() {
  return /* @__PURE__ */ new Map([
    ["idle", idle_prebuilt_default],
    ["load", load_prebuilt_default],
    ["media", media_prebuilt_default],
    ["only", only_prebuilt_default],
    ["visible", visible_prebuilt_default]
  ]);
}

const FONT_TYPES = ["woff2", "woff", "otf", "ttf", "eot"];

const WeightSchema = z.union([z.string(), z.number()]);
const StyleSchema = z.enum(["normal", "italic", "oblique"]);
const DisplaySchema = z.enum(["auto", "block", "swap", "fallback", "optional"]);
const FormatSchema = z.enum(FONT_TYPES);
const _FontProviderSchema = z.strictObject({
  name: z.string(),
  config: z.record(z.string(), z.any()).optional(),
  init: z.custom((v) => typeof v === "function").optional(),
  resolveFont: z.custom((v) => typeof v === "function"),
  listFonts: z.custom((v) => typeof v === "function").optional()
});
const FontProviderSchema = z.custom((v) => {
  return _FontProviderSchema.safeParse(v).success;
}, "Invalid FontProvider object");
const FontFamilySchema = z.object({
  name: z.string(),
  cssVariable: z.string(),
  provider: FontProviderSchema,
  weights: z.tuple([WeightSchema], WeightSchema).optional(),
  styles: z.tuple([StyleSchema], StyleSchema).optional(),
  subsets: z.tuple([z.string()], z.string()).optional(),
  formats: z.tuple([FormatSchema], FormatSchema).optional(),
  fallbacks: z.array(z.string()).optional(),
  optimizedFallbacks: z.boolean().optional(),
  display: DisplaySchema.optional(),
  stretch: z.string().optional(),
  featureSettings: z.string().optional(),
  variationSettings: z.string().optional(),
  unicodeRange: z.tuple([z.string()], z.string()).optional(),
  options: z.record(z.string(), z.any()).optional()
}).strict();

const SvgOptimizerSchema = z.object({
  name: z.string(),
  optimize: z.custom((v) => typeof v === "function")
});

const StringSchema = z.object({
  type: z.literal("string"),
  optional: z.boolean().optional(),
  default: z.string().optional(),
  max: z.number().optional(),
  min: z.number().min(0).optional(),
  length: z.number().optional(),
  url: z.boolean().optional(),
  includes: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional()
});
const NumberSchema = z.object({
  type: z.literal("number"),
  optional: z.boolean().optional(),
  default: z.number().optional(),
  gt: z.number().optional(),
  min: z.number().optional(),
  lt: z.number().optional(),
  max: z.number().optional(),
  int: z.boolean().optional()
});
const BooleanSchema = z.object({
  type: z.literal("boolean"),
  optional: z.boolean().optional(),
  default: z.boolean().optional()
});
const EnumSchema = z.object({
  type: z.literal("enum"),
  values: z.array(
    // We use "'" for codegen so it can't be passed here
    z.string().refine((v) => !v.includes("'"), {
      message: `The "'" character can't be used as an enum value`
    })
  ),
  optional: z.boolean().optional(),
  default: z.string().optional()
});
const EnvFieldType = z.union([
  StringSchema,
  NumberSchema,
  BooleanSchema,
  EnumSchema.superRefine((schema, ctx) => {
    if (schema.default) {
      if (!schema.values.includes(schema.default)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: `The default value "${schema.default}" must be one of the specified values: ${schema.values.join(", ")}.`
        });
      }
    }
  })
]);
const PublicClientEnvFieldMetadata = z.object({
  context: z.literal("client"),
  access: z.literal("public")
});
const PublicServerEnvFieldMetadata = z.object({
  context: z.literal("server"),
  access: z.literal("public")
});
const SecretServerEnvFieldMetadata = z.object({
  context: z.literal("server"),
  access: z.literal("secret")
});
const _EnvFieldMetadata = z.union([
  PublicClientEnvFieldMetadata,
  PublicServerEnvFieldMetadata,
  SecretServerEnvFieldMetadata
]);
const EnvFieldMetadata = z.custom().superRefine((data, ctx) => {
  const result = _EnvFieldMetadata.safeParse(data);
  if (result.success) {
    return;
  }
  for (const issue of result.error.issues) {
    if (issue.code === z.ZodIssueCode.invalid_union) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: `**Invalid combination** of "access" and "context" options:
  Secret client variables are not supported. Please review the configuration.
  Learn more at https://docs.astro.build/en/guides/environment-variables/#variable-types`,
        path: ["context", "access"]
      });
    } else {
      ctx.addIssue({
        ...issue,
        code: "custom"
      });
    }
  }
});
const EnvSchemaKey = z.string().min(1).refine(([firstChar]) => isNaN(Number.parseInt(firstChar)), {
  message: "A valid variable name cannot start with a number."
}).refine((str) => /^[A-Z0-9_]+$/.test(str), {
  message: "A valid variable name can only contain uppercase letters, numbers and underscores."
});
const EnvSchema = z.record(EnvSchemaKey, z.intersection(EnvFieldMetadata, EnvFieldType));

const CacheProviderConfigSchema = z.object({
  config: z.record(z.string(), z.any()).optional(),
  entrypoint: z.union([z.string(), z.instanceof(URL)]),
  name: z.string().optional()
});
const CacheOptionsSchema = z.object({
  maxAge: z.number().int().min(0).optional(),
  swr: z.number().int().min(0).optional(),
  tags: z.array(z.string()).optional()
});
const CacheSchema = z.object({
  provider: CacheProviderConfigSchema.optional()
});
const RouteRuleSchema = CacheOptionsSchema;
const RouteRulesSchema = z.record(z.string(), RouteRuleSchema);

const SessionDriverConfigSchema = z.object({
  config: z.record(z.string(), z.any()).optional(),
  entrypoint: z.union([z.string(), z.instanceof(URL)])
});
const SessionSchema = z.object({
  driver: z.union([
    z.string().superRefine(() => {
      console.warn(
        `Using deprecated \`session.driver\` string signature. Learn how to migrate: https://docs.astro.build/en/guides/upgrade-to/v6/#deprecated-session-driver-string-signature`
      );
    }),
    SessionDriverConfigSchema
  ]).optional(),
  options: z.record(z.string(), z.any()).optional(),
  cookie: z.union([
    z.object({
      name: z.string().optional(),
      domain: z.string().optional(),
      path: z.string().optional(),
      maxAge: z.number().optional(),
      sameSite: z.union([z.enum(["strict", "lax", "none"]), z.boolean()]).optional(),
      secure: z.boolean().optional()
    }),
    z.string().transform((name) => ({ name }))
  ]).optional(),
  ttl: z.number().optional()
});

const ASTRO_CONFIG_DEFAULTS = {
  root: ".",
  srcDir: "./src",
  publicDir: "./public",
  outDir: "./dist",
  cacheDir: "./node_modules/.astro",
  base: "/",
  trailingSlash: "ignore",
  build: {
    format: "directory",
    client: "./client/",
    server: "./server/",
    assets: "_astro",
    serverEntry: "entry.mjs",
    redirects: true,
    inlineStylesheets: "auto",
    concurrency: 1
  },
  image: {
    endpoint: { entrypoint: void 0, route: "/_image" },
    service: { entrypoint: "astro/assets/services/sharp", config: {} },
    responsiveStyles: false
  },
  devToolbar: {
    enabled: true
  },
  compressHTML: true,
  server: {
    host: false,
    port: 4321,
    open: false,
    allowedHosts: []
  },
  integrations: [],
  markdown: markdownConfigDefaults,
  vite: {},
  legacy: {
    collectionsBackwardsCompat: false
  },
  redirects: {},
  security: {
    checkOrigin: true,
    allowedDomains: [],
    csp: false,
    actionBodySizeLimit: 1024 * 1024,
    serverIslandBodySizeLimit: 1024 * 1024
  },
  env: {
    schema: {},
    validateSecrets: false
  },
  prerenderConflictBehavior: "warn",
  experimental: {
    clientPrerender: false,
    contentIntellisense: false,
    chromeDevtoolsWorkspace: false,
    rustCompiler: false,
    queuedRendering: {
      enabled: false
    },
    logger: {
      entrypoint: "astro/logger/node"
    }
  }
};
const highlighterTypesSchema = z.union([z.literal("shiki"), z.literal("prism")]).default(syntaxHighlightDefaults.type);
const quoteCharacterMapSchema = z.object({
  double: z.string(),
  single: z.string()
});
const smartypantsOptionsSchema = z.object({
  backticks: z.union([z.boolean(), z.literal("all")]).default(true),
  closingQuotes: quoteCharacterMapSchema.default({
    double: "\u201D",
    single: "\u2019"
  }),
  dashes: z.union([z.boolean(), z.literal("inverted"), z.literal("oldschool")]).default(true),
  ellipses: z.union([z.boolean(), z.literal("spaced"), z.literal("unspaced")]).default(true),
  openingQuotes: quoteCharacterMapSchema.default({
    double: "\u201C",
    single: "\u2018"
  }),
  quotes: z.boolean().default(true)
});
const AstroConfigSchema = z.object({
  root: z.string().optional().default(ASTRO_CONFIG_DEFAULTS.root).transform((val) => new URL(val)),
  srcDir: z.string().optional().default(ASTRO_CONFIG_DEFAULTS.srcDir).transform((val) => new URL(val)),
  publicDir: z.string().optional().default(ASTRO_CONFIG_DEFAULTS.publicDir).transform((val) => new URL(val)),
  outDir: z.string().optional().default(ASTRO_CONFIG_DEFAULTS.outDir).transform((val) => new URL(val)),
  cacheDir: z.string().optional().default(ASTRO_CONFIG_DEFAULTS.cacheDir).transform((val) => new URL(val)),
  site: z.string().url().optional(),
  compressHTML: z.union([z.boolean(), z.literal("jsx")]).optional().default(ASTRO_CONFIG_DEFAULTS.compressHTML),
  base: z.string().optional().default(ASTRO_CONFIG_DEFAULTS.base),
  trailingSlash: z.union([z.literal("always"), z.literal("never"), z.literal("ignore")]).optional().default(ASTRO_CONFIG_DEFAULTS.trailingSlash),
  output: z.union([z.literal("static"), z.literal("server"), z.literal("hybrid")]).optional().default("static").refine((val) => val !== "hybrid", {
    message: 'The `output: "hybrid"` option has been removed. Use `output: "static"` (the default) instead, which now behaves the same way.'
  }),
  scopedStyleStrategy: z.union([z.literal("where"), z.literal("class"), z.literal("attribute")]).optional().default("attribute"),
  adapter: z.object({ name: z.string(), hooks: z.object({}).loose().default({}) }).optional(),
  integrations: z.preprocess(
    // preprocess
    (val) => Array.isArray(val) ? val.flat(Number.POSITIVE_INFINITY).filter(Boolean) : val,
    // validate
    z.array(z.object({ name: z.string(), hooks: z.object({}).loose().default({}) }))
  ).optional().default(ASTRO_CONFIG_DEFAULTS.integrations),
  build: z.object({
    format: z.union([z.literal("file"), z.literal("directory"), z.literal("preserve")]).optional().default(ASTRO_CONFIG_DEFAULTS.build.format),
    client: z.string().optional().default(ASTRO_CONFIG_DEFAULTS.build.client).transform((val) => new URL(val)),
    server: z.string().optional().default(ASTRO_CONFIG_DEFAULTS.build.server).transform((val) => new URL(val)),
    assets: z.string().optional().default(ASTRO_CONFIG_DEFAULTS.build.assets),
    assetsPrefix: z.string().optional().or(z.object({ fallback: z.string() }).and(z.record(z.string(), z.string()))).optional(),
    serverEntry: z.string().optional().default(ASTRO_CONFIG_DEFAULTS.build.serverEntry),
    redirects: z.boolean().optional().default(ASTRO_CONFIG_DEFAULTS.build.redirects),
    inlineStylesheets: z.enum(["always", "auto", "never"]).optional().default(ASTRO_CONFIG_DEFAULTS.build.inlineStylesheets),
    concurrency: z.number().min(1).optional().default(ASTRO_CONFIG_DEFAULTS.build.concurrency)
  }).prefault({}),
  server: z.preprocess(
    // preprocess
    // NOTE: Uses the "error" command here because this is overwritten by the
    // individualized schema parser with the correct command.
    (val) => typeof val === "function" ? val({ command: "error" }) : val,
    // validate
    z.object({
      open: z.union([z.string(), z.boolean()]).optional().default(ASTRO_CONFIG_DEFAULTS.server.open),
      host: z.union([z.string(), z.boolean()]).optional().default(ASTRO_CONFIG_DEFAULTS.server.host),
      port: z.number().optional().default(ASTRO_CONFIG_DEFAULTS.server.port),
      headers: z.custom().optional(),
      allowedHosts: z.union([z.array(z.string()), z.literal(true)]).optional().default(ASTRO_CONFIG_DEFAULTS.server.allowedHosts)
    })
  ).prefault({}),
  redirects: z.record(
    z.string(),
    z.union([
      z.string(),
      z.object({
        status: z.union([
          z.literal(300),
          z.literal(301),
          z.literal(302),
          z.literal(303),
          z.literal(304),
          z.literal(307),
          z.literal(308)
        ]),
        destination: z.string()
      })
    ])
  ).default(ASTRO_CONFIG_DEFAULTS.redirects),
  prefetch: z.union([
    z.boolean(),
    z.object({
      prefetchAll: z.boolean().optional(),
      defaultStrategy: z.enum(["tap", "hover", "viewport", "load"]).optional()
    })
  ]).optional(),
  image: z.object({
    endpoint: z.object({
      route: z.literal("/_image").or(z.string()).default(ASTRO_CONFIG_DEFAULTS.image.endpoint.route),
      entrypoint: z.string().optional()
    }).default(ASTRO_CONFIG_DEFAULTS.image.endpoint),
    service: z.object({
      entrypoint: z.union([z.literal("astro/assets/services/sharp"), z.string()]).default(ASTRO_CONFIG_DEFAULTS.image.service.entrypoint),
      config: z.record(z.string(), z.any()).default({})
    }).default(ASTRO_CONFIG_DEFAULTS.image.service),
    domains: z.array(z.string()).default([]),
    remotePatterns: z.array(
      z.object({
        protocol: z.string().optional(),
        hostname: z.string().optional(),
        port: z.string().optional(),
        pathname: z.string().optional()
      })
    ).default([]),
    layout: z.enum(["constrained", "fixed", "full-width", "none"]).optional(),
    objectFit: z.string().optional(),
    objectPosition: z.string().optional(),
    breakpoints: z.array(z.number()).optional(),
    responsiveStyles: z.boolean().default(ASTRO_CONFIG_DEFAULTS.image.responsiveStyles)
  }).prefault(ASTRO_CONFIG_DEFAULTS.image),
  devToolbar: z.object({
    enabled: z.boolean().default(ASTRO_CONFIG_DEFAULTS.devToolbar.enabled),
    placement: z.enum(["bottom-left", "bottom-center", "bottom-right"]).optional()
  }).default(ASTRO_CONFIG_DEFAULTS.devToolbar),
  markdown: z.object({
    syntaxHighlight: z.union([
      z.object({
        type: highlighterTypesSchema,
        excludeLangs: z.array(z.string()).optional()
      }).default(syntaxHighlightDefaults),
      highlighterTypesSchema,
      z.literal(false)
    ]).default(ASTRO_CONFIG_DEFAULTS.markdown.syntaxHighlight),
    shikiConfig: z.object({
      langs: z.custom().array().transform((langs) => {
        for (const lang of langs) {
          if (typeof lang === "object") {
            if (lang.id) {
              lang.name = lang.id;
            }
            if (lang.grammar) {
              Object.assign(lang, lang.grammar);
            }
          }
        }
        return langs;
      }).default([]),
      langAlias: z.record(z.string(), z.string()).optional().default(ASTRO_CONFIG_DEFAULTS.markdown.shikiConfig.langAlias),
      theme: z.enum(Object.keys(bundledThemes)).or(z.custom()).default(ASTRO_CONFIG_DEFAULTS.markdown.shikiConfig.theme),
      themes: z.record(
        z.string(),
        z.enum(Object.keys(bundledThemes)).or(z.custom())
      ).optional().default(ASTRO_CONFIG_DEFAULTS.markdown.shikiConfig.themes),
      defaultColor: z.union([z.literal("light"), z.literal("dark"), z.string(), z.literal(false)]).optional(),
      wrap: z.boolean().or(z.null()).default(ASTRO_CONFIG_DEFAULTS.markdown.shikiConfig.wrap),
      transformers: z.custom().array().default(ASTRO_CONFIG_DEFAULTS.markdown.shikiConfig.transformers)
    }).prefault({}),
    remarkPlugins: z.union([
      z.string(),
      z.tuple([z.string(), z.any()]),
      z.custom((data) => typeof data === "function"),
      z.tuple([z.custom((data) => typeof data === "function"), z.any()])
    ]).array().default(ASTRO_CONFIG_DEFAULTS.markdown.remarkPlugins),
    rehypePlugins: z.union([
      z.string(),
      z.tuple([z.string(), z.any()]),
      z.custom((data) => typeof data === "function"),
      z.tuple([z.custom((data) => typeof data === "function"), z.any()])
    ]).array().default(ASTRO_CONFIG_DEFAULTS.markdown.rehypePlugins),
    remarkRehype: z.custom((data) => data instanceof Object && !Array.isArray(data)).default(ASTRO_CONFIG_DEFAULTS.markdown.remarkRehype),
    gfm: z.boolean().default(ASTRO_CONFIG_DEFAULTS.markdown.gfm),
    smartypants: z.union([z.boolean(), smartypantsOptionsSchema]).transform((val) => {
      if (val === true) return smartypantsOptionsSchema.parse({});
      return val;
    }).prefault(ASTRO_CONFIG_DEFAULTS.markdown.smartypants)
  }).prefault({}),
  vite: z.custom((data) => data instanceof Object && !Array.isArray(data)).default(ASTRO_CONFIG_DEFAULTS.vite),
  i18n: z.optional(
    z.object({
      defaultLocale: z.string(),
      locales: z.array(
        z.union([
          z.string(),
          z.object({
            path: z.string(),
            codes: z.tuple([z.string()], z.string())
          })
        ])
      ),
      domains: z.record(
        z.string(),
        z.string().url(
          "The domain value must be a valid URL, and it has to start with 'https' or 'http'."
        )
      ).optional(),
      fallback: z.record(z.string(), z.string()).optional(),
      routing: z.literal("manual").or(
        z.object({
          prefixDefaultLocale: z.boolean().optional().default(false),
          redirectToDefaultLocale: z.boolean().optional().default(false),
          fallbackType: z.enum(["redirect", "rewrite"]).optional().default("redirect")
        })
      ).optional().prefault({})
    }).optional()
  ),
  security: z.object({
    checkOrigin: z.boolean().default(ASTRO_CONFIG_DEFAULTS.security.checkOrigin),
    allowedDomains: z.array(
      z.object({
        hostname: z.string().optional(),
        protocol: z.string().optional(),
        port: z.string().optional()
      })
    ).optional().default(ASTRO_CONFIG_DEFAULTS.security.allowedDomains),
    actionBodySizeLimit: z.number().optional().default(ASTRO_CONFIG_DEFAULTS.security.actionBodySizeLimit),
    serverIslandBodySizeLimit: z.number().optional().default(ASTRO_CONFIG_DEFAULTS.security.serverIslandBodySizeLimit),
    csp: z.union([
      z.boolean().optional().default(ASTRO_CONFIG_DEFAULTS.security.csp),
      z.object({
        algorithm: cspAlgorithmSchema,
        directives: z.array(allowedDirectivesSchema).optional(),
        styleDirective: z.object({
          resources: z.array(z.string()).optional(),
          hashes: z.array(cspHashSchema).optional()
        }).optional(),
        scriptDirective: z.object({
          resources: z.array(z.string()).optional(),
          hashes: z.array(cspHashSchema).optional(),
          strictDynamic: z.boolean().optional()
        }).optional()
      })
    ]).optional().default(ASTRO_CONFIG_DEFAULTS.security.csp)
  }).optional().default(ASTRO_CONFIG_DEFAULTS.security),
  env: z.object({
    schema: EnvSchema.optional().default(ASTRO_CONFIG_DEFAULTS.env.schema),
    validateSecrets: z.boolean().optional().default(ASTRO_CONFIG_DEFAULTS.env.validateSecrets)
  }).strict().optional().default(ASTRO_CONFIG_DEFAULTS.env),
  session: SessionSchema.optional(),
  prerenderConflictBehavior: z.enum(["error", "warn", "ignore"]).optional().default(ASTRO_CONFIG_DEFAULTS.prerenderConflictBehavior),
  fonts: z.array(FontFamilySchema).optional(),
  experimental: z.strictObject({
    clientPrerender: z.boolean().optional().default(ASTRO_CONFIG_DEFAULTS.experimental.clientPrerender),
    contentIntellisense: z.boolean().optional().default(ASTRO_CONFIG_DEFAULTS.experimental.contentIntellisense),
    chromeDevtoolsWorkspace: z.boolean().optional().default(ASTRO_CONFIG_DEFAULTS.experimental.chromeDevtoolsWorkspace),
    svgOptimizer: SvgOptimizerSchema.optional(),
    cache: CacheSchema.optional(),
    routeRules: RouteRulesSchema.optional(),
    rustCompiler: z.boolean().optional().default(ASTRO_CONFIG_DEFAULTS.experimental.rustCompiler),
    queuedRendering: z.object({
      enabled: z.boolean().optional().prefault(false),
      poolSize: z.number().int().nonnegative().optional(),
      contentCache: z.boolean().optional()
    }).optional().prefault(ASTRO_CONFIG_DEFAULTS.experimental.queuedRendering),
    logger: z.object({
      entrypoint: z.string(),
      config: z.record(z.string(), z.any()).optional()
    }).optional()
  }).prefault({}),
  legacy: z.object({
    collectionsBackwardsCompat: z.boolean().optional().default(false)
  }).prefault({})
});

function validateAssetsPrefix(config) {
  if (config.build.assetsPrefix && typeof config.build.assetsPrefix !== "string" && !config.build.assetsPrefix.fallback) {
    return [
      {
        message: "The `fallback` is mandatory when defining the option as an object.",
        path: ["build", "assetsPrefix"]
      }
    ];
  }
  return [];
}
function validateRemotePatterns(remotePatterns) {
  const issues = [];
  for (let i = 0; i < remotePatterns.length; i++) {
    const { hostname, pathname } = remotePatterns[i];
    if (hostname && hostname.includes("*") && !(hostname.startsWith("*.") || hostname.startsWith("**."))) {
      issues.push({
        message: "wildcards can only be placed at the beginning of the hostname",
        path: ["image", "remotePatterns", i, "hostname"]
      });
    }
    if (pathname && pathname.includes("*") && !(pathname.endsWith("/*") || pathname.endsWith("/**"))) {
      issues.push({
        message: "wildcards can only be placed at the end of a pathname",
        path: ["image", "remotePatterns", i, "pathname"]
      });
    }
  }
  return issues;
}
function validateI18nRedirectToDefaultLocale(i18n) {
  if (i18n && typeof i18n.routing !== "string" && i18n.routing.prefixDefaultLocale === false && i18n.routing.redirectToDefaultLocale === true) {
    return [
      {
        message: "The option `i18n.routing.redirectToDefaultLocale` can be used only when `i18n.routing.prefixDefaultLocale` is set to `true`; otherwise, redirects might cause infinite loops. Remove the option `i18n.routing.redirectToDefaultLocale`, or change its value to `false`.",
        path: ["i18n", "routing", "redirectToDefaultLocale"]
      }
    ];
  }
  return [];
}
function validateOutDirNotInPublicDir(outDir, publicDir) {
  if (outDir.toString().startsWith(publicDir.toString())) {
    return [
      {
        message: "The value of `outDir` must not point to a path within the folder set as `publicDir`, this will cause an infinite loop",
        path: ["outDir"]
      }
    ];
  }
  return [];
}
function validateI18nDefaultLocale(i18n) {
  const locales = i18n.locales.map((locale) => typeof locale === "string" ? locale : locale.path);
  if (!locales.includes(i18n.defaultLocale)) {
    return [
      {
        message: `The default locale \`${i18n.defaultLocale}\` is not present in the \`i18n.locales\` array.`,
        path: ["i18n", "locales"]
      }
    ];
  }
  return [];
}
function validateI18nFallback(i18n) {
  const issues = [];
  const { defaultLocale, fallback } = i18n;
  if (!fallback) return [];
  const locales = i18n.locales.map((locale) => typeof locale === "string" ? locale : locale.path);
  for (const [fallbackFrom, fallbackTo] of Object.entries(fallback)) {
    if (!locales.includes(fallbackFrom)) {
      issues.push({
        message: `The locale \`${fallbackFrom}\` key in the \`i18n.fallback\` record doesn't exist in the \`i18n.locales\` array.`,
        path: ["i18n", "fallbacks"]
      });
    }
    if (fallbackFrom === defaultLocale) {
      issues.push({
        message: `You can't use the default locale as a key. The default locale can only be used as value.`,
        path: ["i18n", "fallbacks"]
      });
    }
    if (!locales.includes(fallbackTo)) {
      issues.push({
        message: `The locale \`${fallbackTo}\` value in the \`i18n.fallback\` record doesn't exist in the \`i18n.locales\` array.`,
        path: ["i18n", "fallbacks"]
      });
    }
  }
  return issues;
}
function validateI18nDomains(config) {
  const issues = [];
  const i18n = config.i18n;
  if (!i18n?.domains) return [];
  const entries = Object.entries(i18n.domains);
  const hasDomains = Object.keys(i18n.domains).length > 0;
  if (entries.length > 0 && !hasDomains) {
    issues.push({
      message: `When specifying some domains, the property \`i18n.routing.strategy\` must be set to \`"domains"\`.`,
      path: ["i18n", "routing", "strategy"]
    });
  }
  if (hasDomains) {
    if (!config.site) {
      issues.push({
        message: "The option `site` isn't set. When using the 'domains' strategy for `i18n`, `site` is required to create absolute URLs for locales that aren't mapped to a domain.",
        path: ["site"]
      });
    }
    if (config.output !== "server") {
      issues.push({
        message: 'Domain support is only available when `output` is `"server"`.',
        path: ["output"]
      });
    }
  }
  const locales = i18n.locales.map((locale) => typeof locale === "string" ? locale : locale.path);
  for (const [domainKey, domainValue] of entries) {
    if (!locales.includes(domainKey)) {
      issues.push({
        message: `The locale \`${domainKey}\` key in the \`i18n.domains\` record doesn't exist in the \`i18n.locales\` array.`,
        path: ["i18n", "domains"]
      });
    }
    if (!domainValue.startsWith("https") && !domainValue.startsWith("http")) {
      issues.push({
        message: "The domain value must be a valid URL, and it has to start with 'https' or 'http'.",
        path: ["i18n", "domains"]
      });
    } else {
      try {
        const domainUrl = new URL(domainValue);
        if (domainUrl.pathname !== "/") {
          issues.push({
            message: `The URL \`${domainValue}\` must contain only the origin. A subsequent pathname isn't allowed here. Remove \`${domainUrl.pathname}\`.`,
            path: ["i18n", "domains"]
          });
        }
      } catch {
      }
    }
  }
  return issues;
}
function validateFontsCssVariables(fonts) {
  const issues = [];
  for (let i = 0; i < fonts.length; i++) {
    const { cssVariable } = fonts[i];
    if (!cssVariable.startsWith("--") || cssVariable.includes(" ") || cssVariable.includes(":")) {
      issues.push({
        message: `**cssVariable** property "${cssVariable}" contains invalid characters for CSS variable generation. It must start with -- and be a valid indent: https://developer.mozilla.org/en-US/docs/Web/CSS/ident.`,
        path: ["fonts", i, "cssVariable"]
      });
    }
  }
  return issues;
}

const AstroConfigRefinedSchema = z.custom().superRefine((config, ctx) => {
  let issues = [];
  issues = issues.concat(
    validateAssetsPrefix(config),
    validateRemotePatterns(config.image.remotePatterns),
    validateI18nRedirectToDefaultLocale(config.i18n),
    validateOutDirNotInPublicDir(config.outDir, config.publicDir)
  );
  if (config.i18n) {
    issues = issues.concat(
      validateI18nDefaultLocale(config.i18n),
      validateI18nFallback(config.i18n),
      validateI18nDomains(config)
    );
  }
  if (config.fonts && config.fonts.length > 0) {
    issues = issues.concat(validateFontsCssVariables(config.fonts));
  }
  for (const issue of issues) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: issue.message,
      path: issue.path
    });
  }
});

function resolveDirAsUrl(dir, root) {
  let resolvedDir = path.resolve(root, dir);
  if (!resolvedDir.endsWith(path.sep)) {
    resolvedDir += path.sep;
  }
  return pathToFileURL(resolvedDir);
}
function createRelativeSchema(cmd, fileProtocolRoot) {
  let originalBuildClient;
  let originalBuildServer;
  const AstroConfigRelativeSchema = AstroConfigSchema.extend({
    root: z.string().default(ASTRO_CONFIG_DEFAULTS.root).transform((val) => resolveDirAsUrl(val, fileProtocolRoot)),
    srcDir: z.string().default(ASTRO_CONFIG_DEFAULTS.srcDir).transform((val) => resolveDirAsUrl(val, fileProtocolRoot)),
    compressHTML: z.union([z.boolean(), z.literal("jsx")]).optional().default(ASTRO_CONFIG_DEFAULTS.compressHTML),
    publicDir: z.string().default(ASTRO_CONFIG_DEFAULTS.publicDir).transform((val) => resolveDirAsUrl(val, fileProtocolRoot)),
    outDir: z.string().default(ASTRO_CONFIG_DEFAULTS.outDir).transform((val) => resolveDirAsUrl(val, fileProtocolRoot)),
    cacheDir: z.string().default(ASTRO_CONFIG_DEFAULTS.cacheDir).transform((val) => resolveDirAsUrl(val, fileProtocolRoot)),
    build: z.object({
      format: z.union([z.literal("file"), z.literal("directory"), z.literal("preserve")]).optional().default(ASTRO_CONFIG_DEFAULTS.build.format),
      // NOTE: `client` and `server` are transformed relative to the default outDir first,
      // later we'll fix this to be relative to the actual `outDir`
      client: z.string().optional().default(ASTRO_CONFIG_DEFAULTS.build.client).transform((val) => {
        originalBuildClient = val;
        return resolveDirAsUrl(
          val,
          path.resolve(fileProtocolRoot, ASTRO_CONFIG_DEFAULTS.outDir)
        );
      }),
      server: z.string().optional().default(ASTRO_CONFIG_DEFAULTS.build.server).transform((val) => {
        originalBuildServer = val;
        return resolveDirAsUrl(
          val,
          path.resolve(fileProtocolRoot, ASTRO_CONFIG_DEFAULTS.outDir)
        );
      }),
      assets: z.string().optional().default(ASTRO_CONFIG_DEFAULTS.build.assets),
      assetsPrefix: z.string().optional().or(z.object({ fallback: z.string() }).and(z.record(z.string(), z.string())).optional()),
      serverEntry: z.string().optional().default(ASTRO_CONFIG_DEFAULTS.build.serverEntry),
      redirects: z.boolean().optional().default(ASTRO_CONFIG_DEFAULTS.build.redirects),
      inlineStylesheets: z.enum(["always", "auto", "never"]).optional().default(ASTRO_CONFIG_DEFAULTS.build.inlineStylesheets),
      concurrency: z.number().min(1).optional().default(ASTRO_CONFIG_DEFAULTS.build.concurrency)
    }).optional().prefault({}),
    server: z.preprocess(
      // preprocess
      (val) => {
        if (typeof val === "function") {
          return val({ command: "preview" });
        }
        return val;
      },
      // validate
      z.object({
        open: z.union([z.string(), z.boolean()]).optional().default(ASTRO_CONFIG_DEFAULTS.server.open),
        host: z.union([z.string(), z.boolean()]).optional().default(ASTRO_CONFIG_DEFAULTS.server.host),
        port: z.number().optional().default(ASTRO_CONFIG_DEFAULTS.server.port),
        headers: z.custom().optional(),
        allowedHosts: z.union([z.array(z.string()), z.literal(true)]).optional().default(ASTRO_CONFIG_DEFAULTS.server.allowedHosts)
      })
    ).prefault({})
  }).transform((config) => {
    if (config.outDir.toString() !== resolveDirAsUrl(ASTRO_CONFIG_DEFAULTS.outDir, fileProtocolRoot).toString()) {
      const outDirPath = fileURLToPath(config.outDir);
      config.build.client = resolveDirAsUrl(originalBuildClient, outDirPath);
      config.build.server = resolveDirAsUrl(originalBuildServer, outDirPath);
    }
    if (config.trailingSlash === "never") {
      config.base = prependForwardSlash(removeTrailingForwardSlash(config.base));
      config.image.endpoint.route = prependForwardSlash(
        removeTrailingForwardSlash(config.image.endpoint.route)
      );
    } else if (config.trailingSlash === "always") {
      config.base = prependForwardSlash(appendForwardSlash(config.base));
      config.image.endpoint.route = prependForwardSlash(
        appendForwardSlash(config.image.endpoint.route)
      );
    } else {
      config.base = prependForwardSlash(config.base);
      config.image.endpoint.route = prependForwardSlash(config.image.endpoint.route);
    }
    return config;
  });
  return AstroConfigRelativeSchema;
}

async function validateConfig(userConfig, root, cmd) {
  const AstroConfigRelativeSchema = createRelativeSchema(cmd, root);
  return await validateConfigRefined(
    await AstroConfigRelativeSchema.parseAsync(userConfig, {
      error(issue) {
        if (issue.path?.[0] === "experimental") {
          return {
            message: `Invalid or outdated experimental feature.
Check for incorrect spelling or outdated Astro version.
See https://docs.astro.build/en/reference/experimental-flags/ for a list of all current experiments.`
          };
        }
        return errorMap(issue);
      }
    })
  );
}
async function validateConfigRefined(updatedConfig) {
  return await AstroConfigRefinedSchema.parseAsync(updatedConfig, { error: errorMap });
}

function validateSegment(segment, file = "") {
  if (!file) file = segment;
  if (segment.includes("][")) {
    throw new Error(`Invalid route ${file} \u2014 parameters must be separated`);
  }
  if (countOccurrences("[", segment) !== countOccurrences("]", segment)) {
    throw new Error(`Invalid route ${file} \u2014 brackets are unbalanced`);
  }
  if ((/.+\[\.\.\.[^\]]+\]/.test(segment) || /\[\.\.\.[^\]]+\].+/.test(segment)) && file.endsWith(".astro")) {
    throw new Error(`Invalid route ${file} \u2014 rest parameter must be a standalone segment`);
  }
}
function countOccurrences(needle, haystack) {
  let count = 0;
  for (const hay of haystack) {
    if (hay === needle) count += 1;
  }
  return count;
}

class ContainerPipeline extends Pipeline {
  /**
   * Internal cache to store components instances by `RouteData`.
   * @private
   */
  #componentsInterner = /* @__PURE__ */ new WeakMap();
  getName() {
    return "ContainerPipeline";
  }
  static create({
    logger,
    manifest,
    renderers,
    resolve,
    streaming
  }) {
    return new ContainerPipeline(logger, manifest, "development", renderers, resolve, streaming);
  }
  componentMetadata(_routeData) {
  }
  headElements(routeData) {
    const routeInfo = this.manifest.routes.find((route) => route.routeData === routeData);
    const links = /* @__PURE__ */ new Set();
    const scripts = /* @__PURE__ */ new Set();
    const styles = createStylesheetElementSet(routeInfo?.styles ?? []);
    for (const script of routeInfo?.scripts ?? []) {
      if ("stage" in script) {
        if (script.stage === "head-inline") {
          scripts.add({
            props: {},
            children: script.children
          });
        }
      } else {
        scripts.add(createModuleScriptElement(script));
      }
    }
    return { links, styles, scripts };
  }
  async tryRewrite(payload, request) {
    const { newUrl, pathname, routeData } = findRouteToRewrite({
      payload,
      request,
      routes: this.manifest?.routes.map((r) => r.routeData),
      trailingSlash: this.manifest.trailingSlash,
      buildFormat: this.manifest.buildFormat,
      base: this.manifest.base,
      outDir: this.manifest.outDir
    });
    const componentInstance = await this.getComponentByRoute(routeData);
    return { componentInstance, routeData, newUrl, pathname };
  }
  insertRoute(route, componentInstance) {
    this.#componentsInterner.set(route, {
      page() {
        return Promise.resolve(componentInstance);
      },
      onRequest: this.resolvedMiddleware
    });
  }
  // At the moment it's not used by the container via any public API
  async getComponentByRoute(routeData) {
    const page = this.#componentsInterner.get(routeData);
    if (page) {
      return page.page();
    }
    throw new Error("Couldn't find component for route " + routeData.pathname);
  }
}

function createManifest(manifest, renderers, middleware) {
  function middlewareInstance() {
    return {
      onRequest: NOOP_MIDDLEWARE_FN
    };
  }
  const root = new URL(import.meta.url);
  return {
    rootDir: root,
    srcDir: manifest?.srcDir ?? new URL(ASTRO_CONFIG_DEFAULTS.srcDir, root),
    buildClientDir: manifest?.buildClientDir ?? new URL(ASTRO_CONFIG_DEFAULTS.build.client, root),
    buildServerDir: manifest?.buildServerDir ?? new URL(ASTRO_CONFIG_DEFAULTS.build.server, root),
    publicDir: manifest?.publicDir ?? new URL(ASTRO_CONFIG_DEFAULTS.publicDir, root),
    outDir: manifest?.outDir ?? new URL(ASTRO_CONFIG_DEFAULTS.outDir, root),
    cacheDir: manifest?.cacheDir ?? new URL(ASTRO_CONFIG_DEFAULTS.cacheDir, root),
    trailingSlash: manifest?.trailingSlash ?? ASTRO_CONFIG_DEFAULTS.trailingSlash,
    buildFormat: manifest?.buildFormat ?? ASTRO_CONFIG_DEFAULTS.build.format,
    compressHTML: manifest?.compressHTML ?? ASTRO_CONFIG_DEFAULTS.compressHTML,
    assetsDir: manifest?.assetsDir ?? ASTRO_CONFIG_DEFAULTS.build.assets,
    serverLike: manifest?.serverLike ?? true,
    middlewareMode: manifest?.middlewareMode ?? "classic",
    assets: manifest?.assets ?? /* @__PURE__ */ new Set(),
    assetsPrefix: manifest?.assetsPrefix ?? void 0,
    entryModules: manifest?.entryModules ?? {},
    routes: manifest?.routes ?? [],
    adapterName: "",
    clientDirectives: manifest?.clientDirectives ?? getDefaultClientDirectives(),
    renderers: renderers ?? manifest?.renderers ?? [],
    base: manifest?.base ?? ASTRO_CONFIG_DEFAULTS.base,
    userAssetsBase: manifest?.userAssetsBase ?? "",
    componentMetadata: manifest?.componentMetadata ?? /* @__PURE__ */ new Map(),
    inlinedScripts: manifest?.inlinedScripts ?? /* @__PURE__ */ new Map(),
    i18n: manifest?.i18n,
    checkOrigin: false,
    allowedDomains: manifest?.allowedDomains ?? [],
    actionBodySizeLimit: 1024 * 1024,
    serverIslandBodySizeLimit: 1024 * 1024,
    middleware: manifest?.middleware ?? middlewareInstance,
    key: createKey(),
    csp: manifest?.csp,
    image: manifest?.image ?? {},
    shouldInjectCspMetaTags: false,
    devToolbar: {
      enabled: false,
      latestAstroVersion: void 0,
      debugInfoOutput: "",
      placement: void 0
    },
    logLevel: "silent",
    experimentalQueuedRendering: manifest?.experimentalQueuedRendering ?? {
      enabled: false
    },
    experimentalLogger: manifest?.experimentalLogger ?? void 0
  };
}
class experimental_AstroContainer {
  #pipeline;
  /**
   * Internally used to check if the container was created with a manifest.
   * @private
   */
  #withManifest = false;
  constructor({
    streaming = false,
    manifest,
    renderers,
    resolve,
    astroConfig
  }) {
    this.#pipeline = ContainerPipeline.create({
      logger: createConsoleLogger({ level: "error" }),
      manifest: createManifest(manifest, renderers),
      streaming,
      renderers: renderers ?? manifest?.renderers ?? [],
      resolve: async (specifier) => {
        if (this.#withManifest) {
          return this.#containerResolve(specifier, astroConfig);
        } else if (resolve) {
          return resolve(specifier);
        }
        return specifier;
      }
    });
  }
  async #containerResolve(specifier, astroConfig) {
    const found = this.#pipeline.manifest.entryModules[specifier];
    if (found) {
      return new URL(found, astroConfig?.build.client).toString();
    }
    return found;
  }
  /**
   * Creates a new instance of a container.
   *
   * @param {AstroContainerOptions=} containerOptions
   */
  static async create(containerOptions = {}) {
    const { streaming = false, manifest, renderers = [], resolve } = containerOptions;
    const astroConfig = await validateConfig(ASTRO_CONFIG_DEFAULTS, process.cwd(), "container");
    return new experimental_AstroContainer({
      streaming,
      manifest,
      renderers,
      astroConfig,
      resolve
    });
  }
  /**
   * Use this function to manually add a **server** renderer to the container.
   *
   * This function is preferred when you require to use the container with a renderer in environments such as on-demand pages.
   *
   * ## Example
   *
   * ```js
   * import reactRenderer from "@astrojs/react/server.js";
   * import vueRenderer from "@astrojs/vue/server.js";
   * import customRenderer from "../renderer/customRenderer.js";
   * import { experimental_AstroContainer as AstroContainer } from "astro/container"
   *
   * const container = await AstroContainer.create();
   * container.addServerRenderer(reactRenderer);
   * container.addServerRenderer(vueRenderer);
   * container.addServerRenderer("customRenderer", customRenderer);
   * ```
   *
   * @param options {object}
   * @param options.name The name of the renderer. The name **isn't** arbitrary, and it should match the name of the package.
   * @param options.renderer The server renderer exported by integration.
   */
  addServerRenderer(options) {
    const { renderer } = options;
    if (!renderer.check || !renderer.renderToStaticMarkup) {
      throw new Error(
        "The renderer you passed isn't valid. A renderer is usually an object that exposes the `check` and `renderToStaticMarkup` functions.\nUsually, the renderer is exported by a /server.js entrypoint e.g. `import renderer from '@astrojs/react/server.js'`"
      );
    }
    if (isNamedRenderer(renderer)) {
      this.#pipeline.manifest.renderers.push({
        name: renderer.name,
        ssr: renderer
      });
    } else if ("name" in options) {
      this.#pipeline.manifest.renderers.push({
        name: options.name,
        ssr: renderer
      });
    } else {
      throw new Error(
        "The renderer name must be provided when adding a server renderer that is not a named renderer."
      );
    }
  }
  /**
   * Use this function to manually add a **client** renderer to the container.
   *
   * When rendering components that use the `client:*` directives, you need to use this function.
   *
   * ## Example
   *
   * ```js
   * import reactRenderer from "@astrojs/react/server.js";
   * import { experimental_AstroContainer as AstroContainer } from "astro/container"
   *
   * const container = await AstroContainer.create();
   * container.addServerRenderer(reactRenderer);
   * container.addClientRenderer({
   * 	name: "@astrojs/react",
   * 	entrypoint: "@astrojs/react/client.js"
   * });
   * ```
   *
   * @param options {object}
   * @param options.name The name of the renderer. The name **isn't** arbitrary, and it should match the name of the package.
   * @param options.entrypoint The entrypoint of the client renderer.
   */
  addClientRenderer(options) {
    const { entrypoint, name } = options;
    const rendererIndex = this.#pipeline.manifest.renderers.findIndex((r) => r.name === name);
    if (rendererIndex === -1) {
      throw new Error(
        "You tried to add the " + name + " client renderer, but its server renderer wasn't added. You must add the server renderer first. Use the `addServerRenderer` function."
      );
    }
    const renderer = this.#pipeline.manifest.renderers[rendererIndex];
    renderer.clientEntrypoint = entrypoint;
    this.#pipeline.manifest.renderers[rendererIndex] = renderer;
  }
  // NOTE: we keep this private via TS instead via `#` so it's still available on the surface, so we can play with it.
  // @ts-expect-error @ematipico: I plan to use it for a possible integration that could help people
  static async createFromManifest(manifest) {
    const astroConfig = await validateConfig(ASTRO_CONFIG_DEFAULTS, process.cwd(), "container");
    const container = new experimental_AstroContainer({
      manifest,
      astroConfig
    });
    container.#withManifest = true;
    return container;
  }
  #insertRoute({
    path,
    componentInstance,
    params = {},
    type = "page"
  }) {
    const pathUrl = new URL(path, "https://example.com");
    const routeData = this.#createRoute(pathUrl, params, type);
    this.#pipeline.manifest.routes.push({
      routeData,
      file: "",
      links: [],
      styles: [],
      scripts: []
    });
    this.#pipeline.insertRoute(routeData, componentInstance);
    return routeData;
  }
  /**
   * @description
   * It renders a component and returns the result as a string.
   *
   * ## Example
   *
   * ```js
   * import Card from "../src/components/Card.astro";
   *
   * const container = await AstroContainer.create();
   * const result = await container.renderToString(Card);
   *
   * console.log(result); // it's a string
   * ```
   *
   *
   * @param {AstroComponentFactory} component The instance of the component.
   * @param {ContainerRenderOptions=} options Possible options to pass when rendering the component.
   */
  async renderToString(component, options = {}) {
    if (options.slots) {
      options.slots = markAllSlotsAsSlotString(options.slots);
    }
    const response = await this.renderToResponse(component, options);
    return await response.text();
  }
  /**
   * @description
   * It renders a component and returns the `Response` as result of the rendering phase.
   *
   * ## Example
   *
   * ```js
   * import Card from "../src/components/Card.astro";
   *
   * const container = await AstroContainer.create();
   * const response = await container.renderToResponse(Card);
   *
   * console.log(response.status); // it's a number
   * ```
   *
   *
   * @param {AstroComponentFactory} component The instance of the component.
   * @param {ContainerRenderOptions=} options Possible options to pass when rendering the component.
   */
  async renderToResponse(component, options = {}) {
    const { routeType = "page", slots } = options;
    const request = options?.request ?? new Request("https://example.com/");
    const url = new URL(request.url);
    const componentInstance = routeType === "endpoint" ? component : this.#wrapComponent(component, options.params);
    const routeData = this.#insertRoute({
      path: request.url,
      componentInstance,
      params: options.params,
      type: routeType
    });
    const renderContext = await RenderContext.create({
      pipeline: this.#pipeline,
      routeData,
      status: 200,
      request,
      pathname: url.pathname,
      locals: options?.locals ?? {},
      partial: options?.partial ?? true,
      clientAddress: ""
    });
    if (options.params) {
      renderContext.params = options.params;
    }
    if (options.props) {
      renderContext.props = options.props;
    }
    return renderContext.render(componentInstance, slots);
  }
  /**
   * It stores an Astro **page** route. The first argument, `route`, gets associated to the `component`.
   *
   * This function can be useful when you want to render a route via `AstroContainer.renderToString`, where that
   * route eventually renders another route via `Astro.rewrite`.
   *
   * @param {string} route - The URL that will render the component.
   * @param {AstroComponentFactory} component - The component factory to be used for rendering the route.
   * @param {Record<string, string | undefined>} params - An object containing key-value pairs of route parameters.
   */
  insertPageRoute(route, component, params) {
    const url = new URL(route, "https://example.com/");
    const routeData = this.#createRoute(url, params ?? {}, "page");
    this.#pipeline.manifest.routes.push({
      routeData,
      file: "",
      links: [],
      styles: [],
      scripts: []
    });
    const componentInstance = this.#wrapComponent(component, params);
    this.#pipeline.insertRoute(routeData, componentInstance);
  }
  #createRoute(url, params, type) {
    const segments = removeLeadingForwardSlash(url.pathname).split(posix.sep).filter(Boolean).map((s) => {
      validateSegment(s);
      return getParts(s, url.pathname);
    });
    return {
      route: url.pathname,
      component: "",
      params: Object.keys(params),
      pattern: getPattern(
        segments,
        ASTRO_CONFIG_DEFAULTS.base,
        ASTRO_CONFIG_DEFAULTS.trailingSlash
      ),
      prerender: false,
      segments,
      type,
      fallbackRoutes: [],
      isIndex: false,
      origin: "internal",
      distURL: []
    };
  }
  /**
   * If the provided component isn't a default export, the function wraps it in an object `{default: Component }` to mimic the default export.
   * @param componentFactory
   * @param params
   * @private
   */
  #wrapComponent(componentFactory, params) {
    if (params) {
      return {
        default: componentFactory,
        getStaticPaths() {
          return [{ params }];
        }
      };
    }
    return { default: componentFactory };
  }
}
function isNamedRenderer(renderer) {
  return !!renderer?.name;
}
function markAllSlotsAsSlotString(slots) {
  const markedSlots = {};
  for (const slotName in slots) {
    markedSlots[slotName] = new SlotString(slots[slotName], null);
  }
  return markedSlots;
}

async function getStaticPaths() {
  const entries = await getCollection("news");
  return entries.map((entry) => ({
    params: { slug: entry.slug },
    props: { entry }
  }));
}
async function GET({ props }) {
  const { entry } = props;
  const { Content } = await entry.render();
  const container = await experimental_AstroContainer.create();
  const content = await container.renderToString(Content);
  return new Response(
    JSON.stringify({
      title: entry.data.title,
      date: entry.data.date,
      endDate: entry.data.endDate,
      location: entry.data.location,
      type: entry.data.type,
      pdfs: entry.data.pdfs,
      content
    }),
    {
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }
    }
  );
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  getStaticPaths
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
