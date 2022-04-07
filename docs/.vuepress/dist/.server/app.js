"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
var vueRouter = require("vue-router");
var vue = require("vue");
require("@vue/devtools-api");
var core = require("@vueuse/core");
var nprogress$1 = require("nprogress");
var serverRenderer = require("vue/server-renderer");
function _interopNamespace(e) {
  if (e && e.__esModule)
    return e;
  var n = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (e) {
    Object.keys(e).forEach(function(k) {
      if (k !== "default") {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function() {
            return e[k];
          }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}
var nprogress__namespace = /* @__PURE__ */ _interopNamespace(nprogress$1);
const ClientOnly = vue.defineComponent({
  setup(_, ctx) {
    const isMounted = vue.ref(false);
    vue.onMounted(() => {
      isMounted.value = true;
    });
    return () => {
      var _a, _b;
      return isMounted.value ? (_b = (_a = ctx.slots).default) === null || _b === void 0 ? void 0 : _b.call(_a) : null;
    };
  }
});
const pagesComponents = {
  "v-8daa1a0e": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$2;
  })),
  "v-224c7cf6": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return easyToIgnore_html$2;
  })),
  "v-aa042210": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return common_html$2;
  })),
  "v-46d404d8": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return development_html$2;
  })),
  "v-6bfe5e5d": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return configRegistry_html$2;
  })),
  "v-8a42673c": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return command_html$2;
  })),
  "v-76bb3376": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return wechatTime_html$2;
  })),
  "v-f81671a0": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return install_html$2;
  })),
  "v-5a7523b2": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return cron_html$2;
  })),
  "v-03093e3d": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return hook_html$2;
  })),
  "v-57c453ba": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return swoole_html$2;
  })),
  "v-3706649a": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _404_html$2;
  }))
};
const pagesData$1 = {
  "v-8daa1a0e": () => Promise.resolve().then(function() {
    return index_html;
  }).then(({ data: data2 }) => data2),
  "v-224c7cf6": () => Promise.resolve().then(function() {
    return easyToIgnore_html;
  }).then(({ data: data2 }) => data2),
  "v-aa042210": () => Promise.resolve().then(function() {
    return common_html;
  }).then(({ data: data2 }) => data2),
  "v-46d404d8": () => Promise.resolve().then(function() {
    return development_html;
  }).then(({ data: data2 }) => data2),
  "v-6bfe5e5d": () => Promise.resolve().then(function() {
    return configRegistry_html;
  }).then(({ data: data2 }) => data2),
  "v-8a42673c": () => Promise.resolve().then(function() {
    return command_html;
  }).then(({ data: data2 }) => data2),
  "v-76bb3376": () => Promise.resolve().then(function() {
    return wechatTime_html;
  }).then(({ data: data2 }) => data2),
  "v-f81671a0": () => Promise.resolve().then(function() {
    return install_html;
  }).then(({ data: data2 }) => data2),
  "v-5a7523b2": () => Promise.resolve().then(function() {
    return cron_html;
  }).then(({ data: data2 }) => data2),
  "v-03093e3d": () => Promise.resolve().then(function() {
    return hook_html;
  }).then(({ data: data2 }) => data2),
  "v-57c453ba": () => Promise.resolve().then(function() {
    return swoole_html;
  }).then(({ data: data2 }) => data2),
  "v-3706649a": () => Promise.resolve().then(function() {
    return _404_html;
  }).then(({ data: data2 }) => data2)
};
const pagesData = vue.ref(pagesData$1);
const pageDataEmpty = vue.readonly({
  key: "",
  path: "",
  title: "",
  lang: "",
  frontmatter: {},
  excerpt: "",
  headers: []
});
const pageData = vue.ref(pageDataEmpty);
const usePageData = () => pageData;
if (false) {
  __VUE_HMR_RUNTIME__.updatePageData = (data2) => {
    pagesData.value[data2.key] = () => Promise.resolve(data2);
    if (data2.key === pageData.value.key) {
      pageData.value = data2;
    }
  };
}
const pageFrontmatterSymbol = Symbol("");
const usePageFrontmatter = () => {
  const pageFrontmatter = vue.inject(pageFrontmatterSymbol);
  if (!pageFrontmatter) {
    throw new Error("usePageFrontmatter() is called without provider.");
  }
  return pageFrontmatter;
};
const pageHeadSymbol = Symbol("");
const usePageHead = () => {
  const pageHead = vue.inject(pageHeadSymbol);
  if (!pageHead) {
    throw new Error("usePageHead() is called without provider.");
  }
  return pageHead;
};
const pageHeadTitleSymbol = Symbol("");
const pageLangSymbol = Symbol("");
const usePageLang = () => {
  const pageLang = vue.inject(pageLangSymbol);
  if (!pageLang) {
    throw new Error("usePageLang() is called without provider.");
  }
  return pageLang;
};
const routeLocaleSymbol = Symbol("");
const useRouteLocale = () => {
  const routeLocale = vue.inject(routeLocaleSymbol);
  if (!routeLocale) {
    throw new Error("useRouteLocale() is called without provider.");
  }
  return routeLocale;
};
const siteData$1 = {
  "base": "/huangxifang/",
  "lang": "zh-CN",
  "title": "\u9EC4\u897F\u65B9\u4E2A\u4EBA\u535A\u5BA2",
  "description": "\u4E2A\u4EBA\u535A\u5BA2\uFF0C\u8BB0\u5F55\u5DE5\u4F5C\u5185\u5BB9\u70B9\u6EF4",
  "head": [],
  "locales": {}
};
const siteData = vue.ref(siteData$1);
const useSiteData = () => siteData;
if (false) {
  __VUE_HMR_RUNTIME__.updateSiteData = (data2) => {
    siteData.value = data2;
  };
}
const siteLocaleDataSymbol = Symbol("");
const useSiteLocaleData = () => {
  const siteLocaleData = vue.inject(siteLocaleDataSymbol);
  if (!siteLocaleData) {
    throw new Error("useSiteLocaleData() is called without provider.");
  }
  return siteLocaleData;
};
const Content = (props) => {
  let key;
  if (props.pageKey) {
    key = props.pageKey;
  } else {
    const page = usePageData();
    key = page.value.key;
  }
  const component = pagesComponents[key];
  if (component) {
    return vue.h(component);
  }
  return vue.h("div", "404 Not Found");
};
Content.displayName = "Content";
Content.props = {
  pageKey: {
    type: String,
    required: false
  }
};
const layoutComponents = {
  "404": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _404$1;
  })),
  "Layout": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return Layout$1;
  }))
};
process.env.NODE_ENV !== "production" ? Object.freeze({}) : {};
process.env.NODE_ENV !== "production" ? Object.freeze([]) : [];
const isArray = Array.isArray;
const isFunction = (val) => typeof val === "function";
const isString = (val) => typeof val === "string";
const resolveHeadIdentifier = ([tag, attrs, content]) => {
  if (tag === "meta" && attrs.name) {
    return `${tag}.${attrs.name}`;
  }
  if (["title", "base"].includes(tag)) {
    return tag;
  }
  if (tag === "template" && attrs.id) {
    return `${tag}.${attrs.id}`;
  }
  return JSON.stringify([tag, attrs, content]);
};
const dedupeHead = (head) => {
  const identifierSet = /* @__PURE__ */ new Set();
  const result = [];
  head.forEach((item) => {
    const identifier = resolveHeadIdentifier(item);
    if (!identifierSet.has(identifier)) {
      identifierSet.add(identifier);
      result.push(item);
    }
  });
  return result;
};
const isLinkHttp = (link) => /^(https?:)?\/\//.test(link);
const isLinkMailto = (link) => /^mailto:/.test(link);
const isLinkTel = (link) => /^tel:/.test(link);
const isPlainObject = (val) => Object.prototype.toString.call(val) === "[object Object]";
const removeEndingSlash = (str) => str.replace(/\/$/, "");
const removeLeadingSlash = (str) => str.replace(/^\//, "");
const resolveLocalePath = (locales2, routePath) => {
  const localePaths = Object.keys(locales2).sort((a, b) => {
    const levelDelta = b.split("/").length - a.split("/").length;
    if (levelDelta !== 0) {
      return levelDelta;
    }
    return b.length - a.length;
  });
  for (const localePath of localePaths) {
    if (routePath.startsWith(localePath)) {
      return localePath;
    }
  }
  return "/";
};
const Vuepress = vue.defineComponent({
  name: "Vuepress",
  setup() {
    const page = usePageData();
    const layoutComponent = vue.computed(() => {
      let layoutName;
      if (page.value.path) {
        const frontmatterLayout = page.value.frontmatter.layout;
        if (isString(frontmatterLayout)) {
          layoutName = frontmatterLayout;
        } else {
          layoutName = "Layout";
        }
      } else {
        layoutName = "404";
      }
      return layoutComponents[layoutName] || vue.resolveComponent(layoutName, false);
    });
    return () => vue.h(layoutComponent.value);
  }
});
const defineClientAppEnhance = (clientAppEnhance) => clientAppEnhance;
const defineClientAppSetup = (clientAppSetup) => clientAppSetup;
const withBase = (url) => {
  if (isLinkHttp(url))
    return url;
  const base = useSiteData().value.base;
  return `${base}${removeLeadingSlash(url)}`;
};
const resolvers = vue.reactive({
  resolvePageData: async (pageKey) => {
    const pageDataResolver = pagesData.value[pageKey];
    const pageData2 = await (pageDataResolver === null || pageDataResolver === void 0 ? void 0 : pageDataResolver());
    return pageData2 !== null && pageData2 !== void 0 ? pageData2 : pageDataEmpty;
  },
  resolvePageFrontmatter: (pageData2) => pageData2.frontmatter,
  resolvePageHead: (headTitle, frontmatter, siteLocale) => {
    const description = isString(frontmatter.description) ? frontmatter.description : siteLocale.description;
    const head = [
      ...isArray(frontmatter.head) ? frontmatter.head : [],
      ...siteLocale.head,
      ["title", {}, headTitle],
      ["meta", { name: "description", content: description }]
    ];
    return dedupeHead(head);
  },
  resolvePageHeadTitle: (page, siteLocale) => `${page.title ? `${page.title} | ` : ``}${siteLocale.title}`,
  resolvePageLang: (pageData2) => pageData2.lang || "en",
  resolveRouteLocale: (locales2, routePath) => resolveLocalePath(locales2, routePath),
  resolveSiteLocaleData: (site, routeLocale) => __spreadValues(__spreadValues({}, site), site.locales[routeLocale])
});
var vars$3 = "";
var externalLinkIcon = "";
const svg = vue.h("svg", {
  "class": "external-link-icon",
  "xmlns": "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  "focusable": "false",
  "x": "0px",
  "y": "0px",
  "viewBox": "0 0 100 100",
  "width": "15",
  "height": "15"
}, [
  vue.h("path", {
    fill: "currentColor",
    d: "M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"
  }),
  vue.h("polygon", {
    fill: "currentColor",
    points: "45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"
  })
]);
const ExternalLinkIcon = vue.defineComponent({
  name: "ExternalLinkIcon",
  props: {
    locales: {
      type: Object,
      required: false,
      default: () => ({})
    }
  },
  setup(props) {
    const routeLocale = useRouteLocale();
    const locale = vue.computed(() => {
      var _a;
      return (_a = props.locales[routeLocale.value]) !== null && _a !== void 0 ? _a : {
        openInNewWindow: "open in new window"
      };
    });
    return () => vue.h("span", [
      svg,
      vue.h("span", {
        class: "external-link-icon-sr-only"
      }, locale.value.openInNewWindow)
    ]);
  }
});
const locales = { "/": { "openInNewWindow": "open in new window" } };
var clientAppEnhance0 = defineClientAppEnhance(({ app }) => {
  app.component("ExternalLinkIcon", vue.h(ExternalLinkIcon, { locales }));
});
var vars$2 = "";
var mediumZoom = "";
var clientAppEnhance1 = defineClientAppEnhance(({ app, router }) => {
  return;
});
const themeData$1 = {
  "logo": "https://vuejs.org/images/logo.png",
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "navbar": [],
  "darkMode": true,
  "repo": null,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "sidebar": "auto",
  "sidebarDepth": 2,
  "editLink": true,
  "editLinkText": "Edit this page",
  "lastUpdated": true,
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
};
const themeData = vue.ref(themeData$1);
const useThemeData = () => themeData;
if (false) {
  __VUE_HMR_RUNTIME__.updateThemeData = (data2) => {
    themeData.value = data2;
  };
}
const themeLocaleDataSymbol = Symbol("");
const useThemeLocaleData$1 = () => {
  const themeLocaleData = vue.inject(themeLocaleDataSymbol);
  if (!themeLocaleData) {
    throw new Error("useThemeLocaleData() is called without provider.");
  }
  return themeLocaleData;
};
const resolveThemeLocaleData = (theme, routeLocale) => {
  var _a;
  return __spreadValues(__spreadValues({}, theme), (_a = theme.locales) === null || _a === void 0 ? void 0 : _a[routeLocale]);
};
var clientAppEnhance2 = defineClientAppEnhance(({ app }) => {
  const themeData2 = useThemeData();
  const routeLocale = app._context.provides[routeLocaleSymbol];
  const themeLocaleData = vue.computed(() => resolveThemeLocaleData(themeData2.value, routeLocale.value));
  app.provide(themeLocaleDataSymbol, themeLocaleData);
  Object.defineProperties(app.config.globalProperties, {
    $theme: {
      get() {
        return themeData2.value;
      }
    },
    $themeLocale: {
      get() {
        return themeLocaleData.value;
      }
    }
  });
});
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$y = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  props: {
    type: {
      type: String,
      required: false,
      default: "tip"
    },
    text: {
      type: String,
      required: false,
      default: ""
    },
    vertical: {
      type: String,
      required: false,
      default: void 0
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<span${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: ["badge", __props.type],
        style: {
          verticalAlign: __props.vertical
        }
      }, _attrs))}>`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, () => {
        _push(`${serverRenderer.ssrInterpolate(__props.text)}`);
      }, _push, _parent);
      _push(`</span>`);
    };
  }
});
const _sfc_setup$y = _sfc_main$y.setup;
_sfc_main$y.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/global/Badge.vue");
  return _sfc_setup$y ? _sfc_setup$y(props, ctx) : void 0;
};
var Badge = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["__file", "Badge.vue"]]);
var CodeGroup = vue.defineComponent({
  name: "CodeGroup",
  setup(_, { slots }) {
    const activeIndex = vue.ref(-1);
    const tabRefs = vue.ref([]);
    const activateNext = (i = activeIndex.value) => {
      if (i < tabRefs.value.length - 1) {
        activeIndex.value = i + 1;
      } else {
        activeIndex.value = 0;
      }
      tabRefs.value[activeIndex.value].focus();
    };
    const activatePrev = (i = activeIndex.value) => {
      if (i > 0) {
        activeIndex.value = i - 1;
      } else {
        activeIndex.value = tabRefs.value.length - 1;
      }
      tabRefs.value[activeIndex.value].focus();
    };
    const keyboardHandler = (event, i) => {
      if (event.key === " " || event.key === "Enter") {
        event.preventDefault();
        activeIndex.value = i;
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        activateNext(i);
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        activatePrev(i);
      }
    };
    return () => {
      var _a;
      const items = (((_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)) || []).filter((vnode) => vnode.type.name === "CodeGroupItem").map((vnode) => {
        if (vnode.props === null) {
          vnode.props = {};
        }
        return vnode;
      });
      if (items.length === 0) {
        return null;
      }
      if (activeIndex.value < 0 || activeIndex.value > items.length - 1) {
        activeIndex.value = items.findIndex((vnode) => vnode.props.active === "" || vnode.props.active === true);
        if (activeIndex.value === -1) {
          activeIndex.value = 0;
        }
      } else {
        items.forEach((vnode, i) => {
          vnode.props.active = i === activeIndex.value;
        });
      }
      return vue.h("div", { class: "code-group" }, [
        vue.h("div", { class: "code-group__nav" }, vue.h("ul", { class: "code-group__ul" }, items.map((vnode, i) => {
          const isActive = i === activeIndex.value;
          return vue.h("li", { class: "code-group__li" }, vue.h("button", {
            ref: (element) => {
              if (element) {
                tabRefs.value[i] = element;
              }
            },
            class: {
              "code-group__nav-tab": true,
              "code-group__nav-tab-active": isActive
            },
            ariaPressed: isActive,
            ariaExpanded: isActive,
            onClick: () => activeIndex.value = i,
            onKeydown: (e) => keyboardHandler(e, i)
          }, vnode.props.title));
        }))),
        items
      ]);
    };
  }
});
const __default__$1 = vue.defineComponent({
  name: "CodeGroupItem"
});
const _sfc_main$x = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, __default__$1), {
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      required: true
    },
    active: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: ["code-group-item", { "code-group-item__active": __props.active }],
        "aria-selected": __props.active
      }, _attrs))}>`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
}));
const _sfc_setup$x = _sfc_main$x.setup;
_sfc_main$x.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/global/CodeGroupItem.vue");
  return _sfc_setup$x ? _sfc_setup$x(props, ctx) : void 0;
};
var CodeGroupItem = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["__file", "CodeGroupItem.vue"]]);
const darkModeSymbol = Symbol("");
const useDarkMode = () => {
  const isDarkMode = vue.inject(darkModeSymbol);
  if (!isDarkMode) {
    throw new Error("useDarkMode() is called without provider.");
  }
  return isDarkMode;
};
const setupDarkMode = () => {
  const themeLocale = useThemeLocaleData();
  const isDarkPreferred = core.usePreferredDark();
  const darkStorage = core.useStorage("vuepress-color-scheme", "auto");
  const isDarkMode = vue.computed({
    get() {
      if (!themeLocale.value.darkMode) {
        return false;
      }
      if (darkStorage.value === "auto") {
        return isDarkPreferred.value;
      }
      return darkStorage.value === "dark";
    },
    set(val) {
      if (val === isDarkPreferred.value) {
        darkStorage.value = "auto";
      } else {
        darkStorage.value = val ? "dark" : "light";
      }
    }
  });
  vue.provide(darkModeSymbol, isDarkMode);
  updateHtmlDarkClass(isDarkMode);
};
const updateHtmlDarkClass = (isDarkMode) => {
  const update = (value = isDarkMode.value) => {
    const htmlEl = window === null || window === void 0 ? void 0 : window.document.querySelector("html");
    htmlEl === null || htmlEl === void 0 ? void 0 : htmlEl.classList.toggle("dark", value);
  };
  vue.onMounted(() => {
    vue.watch(isDarkMode, update, { immediate: true });
  });
  vue.onUnmounted(() => update());
};
const useResolveRouteWithRedirect = (...args) => {
  const router = vueRouter.useRouter();
  const route = router.resolve(...args);
  const lastMatched = route.matched[route.matched.length - 1];
  if (!(lastMatched === null || lastMatched === void 0 ? void 0 : lastMatched.redirect)) {
    return route;
  }
  const { redirect } = lastMatched;
  const resolvedRedirect = isFunction(redirect) ? redirect(route) : redirect;
  const resolvedRedirectObj = isString(resolvedRedirect) ? { path: resolvedRedirect } : resolvedRedirect;
  return useResolveRouteWithRedirect(__spreadValues({
    hash: route.hash,
    query: route.query,
    params: route.params
  }, resolvedRedirectObj));
};
const useNavLink = (item) => {
  const resolved = useResolveRouteWithRedirect(item);
  return {
    text: resolved.meta.title || item,
    link: resolved.name === "404" ? item : resolved.fullPath
  };
};
let promise = null;
let promiseResolve = null;
const scrollPromise = {
  wait: () => promise,
  pending: () => {
    promise = new Promise((resolve) => promiseResolve = resolve);
  },
  resolve: () => {
    promiseResolve === null || promiseResolve === void 0 ? void 0 : promiseResolve();
    promise = null;
    promiseResolve = null;
  }
};
const useScrollPromise = () => scrollPromise;
const sidebarItemsSymbol = Symbol("sidebarItems");
const useSidebarItems = () => {
  const sidebarItems = vue.inject(sidebarItemsSymbol);
  if (!sidebarItems) {
    throw new Error("useSidebarItems() is called without provider.");
  }
  return sidebarItems;
};
const setupSidebarItems = () => {
  const themeLocale = useThemeLocaleData();
  const frontmatter = usePageFrontmatter();
  const sidebarItems = vue.computed(() => resolveSidebarItems(frontmatter.value, themeLocale.value));
  vue.provide(sidebarItemsSymbol, sidebarItems);
};
const resolveSidebarItems = (frontmatter, themeLocale) => {
  var _a, _b, _c, _d;
  const sidebarConfig = (_b = (_a = frontmatter.sidebar) !== null && _a !== void 0 ? _a : themeLocale.sidebar) !== null && _b !== void 0 ? _b : "auto";
  const sidebarDepth = (_d = (_c = frontmatter.sidebarDepth) !== null && _c !== void 0 ? _c : themeLocale.sidebarDepth) !== null && _d !== void 0 ? _d : 2;
  if (frontmatter.home || sidebarConfig === false) {
    return [];
  }
  if (sidebarConfig === "auto") {
    return resolveAutoSidebarItems(sidebarDepth);
  }
  if (isArray(sidebarConfig)) {
    return resolveArraySidebarItems(sidebarConfig, sidebarDepth);
  }
  if (isPlainObject(sidebarConfig)) {
    return resolveMultiSidebarItems(sidebarConfig, sidebarDepth);
  }
  return [];
};
const headerToSidebarItem = (header, sidebarDepth) => ({
  text: header.title,
  link: `#${header.slug}`,
  children: headersToSidebarItemChildren(header.children, sidebarDepth)
});
const headersToSidebarItemChildren = (headers, sidebarDepth) => sidebarDepth > 0 ? headers.map((header) => headerToSidebarItem(header, sidebarDepth - 1)) : [];
const resolveAutoSidebarItems = (sidebarDepth) => {
  const page = usePageData();
  return [
    {
      text: page.value.title,
      children: headersToSidebarItemChildren(page.value.headers, sidebarDepth)
    }
  ];
};
const resolveArraySidebarItems = (sidebarConfig, sidebarDepth) => {
  const route = vueRouter.useRoute();
  const page = usePageData();
  const handleChildItem = (item) => {
    var _a;
    let childItem;
    if (isString(item)) {
      childItem = useNavLink(item);
    } else {
      childItem = item;
    }
    if (childItem.children) {
      return __spreadProps(__spreadValues({}, childItem), {
        children: childItem.children.map((item2) => handleChildItem(item2))
      });
    }
    if (childItem.link === route.path) {
      const headers = ((_a = page.value.headers[0]) === null || _a === void 0 ? void 0 : _a.level) === 1 ? page.value.headers[0].children : page.value.headers;
      return __spreadProps(__spreadValues({}, childItem), {
        children: headersToSidebarItemChildren(headers, sidebarDepth)
      });
    }
    return childItem;
  };
  return sidebarConfig.map((item) => handleChildItem(item));
};
const resolveMultiSidebarItems = (sidebarConfig, sidebarDepth) => {
  var _a;
  const route = vueRouter.useRoute();
  const sidebarPath = resolveLocalePath(sidebarConfig, route.path);
  const matchedSidebarConfig = (_a = sidebarConfig[sidebarPath]) !== null && _a !== void 0 ? _a : [];
  return resolveArraySidebarItems(matchedSidebarConfig, sidebarDepth);
};
const useThemeLocaleData = () => useThemeLocaleData$1();
var index = "";
var clientAppEnhance3 = defineClientAppEnhance(({ app, router }) => {
  app.component("Badge", Badge);
  app.component("CodeGroup", CodeGroup);
  app.component("CodeGroupItem", CodeGroupItem);
  app.component("AutoLinkExternalIcon", () => {
    const ExternalLinkIcon2 = app.component("ExternalLinkIcon");
    if (ExternalLinkIcon2) {
      return vue.h(ExternalLinkIcon2);
    }
    return null;
  });
  app.component("NavbarSearch", () => {
    const SearchComponent = app.component("Docsearch") || app.component("SearchBox");
    if (SearchComponent) {
      return vue.h(SearchComponent);
    }
    return null;
  });
  const scrollBehavior = router.options.scrollBehavior;
  router.options.scrollBehavior = async (...args) => {
    await useScrollPromise().wait();
    return scrollBehavior(...args);
  };
});
const clientAppEnhances = [
  clientAppEnhance0,
  clientAppEnhance1,
  clientAppEnhance2,
  clientAppEnhance3
];
function r(r2, e, n) {
  var i, t, o;
  e === void 0 && (e = 50), n === void 0 && (n = {});
  var a = (i = n.isImmediate) != null && i, u = (t = n.callback) != null && t, c = n.maxWait, v = Date.now(), l = [];
  function f() {
    if (c !== void 0) {
      var r3 = Date.now() - v;
      if (r3 + e >= c)
        return c - r3;
    }
    return e;
  }
  var d = function() {
    var e2 = [].slice.call(arguments), n2 = this;
    return new Promise(function(i2, t2) {
      var c2 = a && o === void 0;
      if (o !== void 0 && clearTimeout(o), o = setTimeout(function() {
        if (o = void 0, v = Date.now(), !a) {
          var i3 = r2.apply(n2, e2);
          u && u(i3), l.forEach(function(r3) {
            return (0, r3.resolve)(i3);
          }), l = [];
        }
      }, f()), c2) {
        var d2 = r2.apply(n2, e2);
        return u && u(d2), i2(d2);
      }
      l.push({ resolve: i2, reject: t2 });
    });
  };
  return d.cancel = function(r3) {
    o !== void 0 && clearTimeout(o), l.forEach(function(e2) {
      return (0, e2.reject)(r3);
    }), l = [];
  }, d;
}
const getScrollTop = () => window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
var vars$1 = "";
var backToTop = "";
const BackToTop = vue.defineComponent({
  name: "BackToTop",
  setup() {
    const scrollTop = vue.ref(0);
    const show = vue.computed(() => scrollTop.value > 300);
    const onScroll = r(() => {
      scrollTop.value = getScrollTop();
    }, 100);
    vue.onMounted(() => {
      scrollTop.value = getScrollTop();
      window.addEventListener("scroll", () => onScroll());
    });
    const backToTopEl = vue.h("div", { class: "back-to-top", onClick: scrollToTop });
    return () => vue.h(vue.Transition, {
      name: "back-to-top"
    }, () => show.value ? backToTopEl : null);
  }
});
const clientAppRootComponents = [
  BackToTop
];
var clientAppSetup0 = defineClientAppSetup(() => {
  return;
});
var vars = "";
var nprogress = "";
const useNprogress = () => {
  vue.onMounted(() => {
    const router = vueRouter.useRouter();
    const loadedPages = /* @__PURE__ */ new Set();
    loadedPages.add(router.currentRoute.value.path);
    nprogress__namespace.configure({ showSpinner: false });
    router.beforeEach((to) => {
      if (!loadedPages.has(to.path)) {
        nprogress__namespace.start();
      }
    });
    router.afterEach((to) => {
      loadedPages.add(to.path);
      nprogress__namespace.done();
    });
  });
};
var clientAppSetup1 = defineClientAppSetup(() => {
  useNprogress();
});
var clientAppSetup2 = defineClientAppSetup(() => {
  setupDarkMode();
  setupSidebarItems();
});
const clientAppSetups = [
  clientAppSetup0,
  clientAppSetup1,
  clientAppSetup2
];
const routeItems = [
  ["v-8daa1a0e", "/", { "title": "\u6307\u5357" }, ["/index.html", "/README.md"]],
  ["v-224c7cf6", "/css/easyToIgnore.html", { "title": "49\u4E2A\u5728\u5DE5\u4F5C\u4E2D\u5E38\u7528\u4E14\u5BB9\u6613\u9057\u5FD8\u7684CSS\u6837\u5F0F\u6E05\u5355\u6574\u7406" }, ["/css/easyToIgnore", "/css/easyToIgnore.md"]],
  ["v-aa042210", "/git/common.html", { "title": "Git\u5E38\u7528\u547D\u4EE4" }, ["/git/common", "/git/common.md"]],
  ["v-46d404d8", "/git/development.html", { "title": "Git\u5F00\u53D1\u6D41\u7A0B\u5EFA\u8BAE" }, ["/git/development", "/git/development.md"]],
  ["v-6bfe5e5d", "/npm/configRegistry.html", { "title": "npm\u8BBE\u7F6E\u6DD8\u5B9D\u6E90" }, ["/npm/configRegistry", "/npm/configRegistry.md"]],
  ["v-8a42673c", "/linux/command.html", { "title": "Linux \u5E38\u7528\u547D\u4EE4" }, ["/linux/command", "/linux/command.md"]],
  ["v-76bb3376", "/php/wechatTime.html", { "title": "\u65F6\u95F4\u5904\u7406" }, ["/php/wechatTime", "/php/wechatTime.md"]],
  ["v-f81671a0", "/yarn/install.html", { "title": "Yarn\u5B89\u88C5" }, ["/yarn/install", "/yarn/install.md"]],
  ["v-5a7523b2", "/php/thinkphp/cron.html", { "title": "TP5\u5B9A\u65F6\u4EFB\u52A1+\u5B9D\u5854\u8BA1\u5212\u4EFB\u52A1" }, ["/php/thinkphp/cron", "/php/thinkphp/cron.md"]],
  ["v-03093e3d", "/php/thinkphp/hook.html", { "title": "TP\u6846\u67B6\u884C\u4E3A\u94A9\u5B50\u4F7F\u7528\u65B9\u6CD5" }, ["/php/thinkphp/hook", "/php/thinkphp/hook.md"]],
  ["v-57c453ba", "/php/thinkphp/swoole.html", { "title": "TP6\u5B89\u88C5think-swoole" }, ["/php/thinkphp/swoole", "/php/thinkphp/swoole.md"]],
  ["v-3706649a", "/404.html", { "title": "" }, ["/404"]]
];
const pagesRoutes = routeItems.reduce((result, [name, path, meta, redirects]) => {
  result.push({
    name,
    path,
    component: Vuepress,
    meta
  }, ...redirects.map((item) => ({
    path: item,
    redirect: path
  })));
  return result;
}, [
  {
    name: "404",
    path: "/:catchAll(.*)",
    component: Vuepress
  }
]);
const historyCreator = vueRouter.createMemoryHistory;
const createVueRouter = () => {
  const router = vueRouter.createRouter({
    history: historyCreator(removeEndingSlash(siteData.value.base)),
    routes: pagesRoutes,
    scrollBehavior: (to, from, savedPosition) => {
      if (savedPosition)
        return savedPosition;
      if (to.hash)
        return { el: to.hash };
      return { top: 0 };
    }
  });
  router.beforeResolve(async (to, from) => {
    var _a;
    if (to.path !== from.path || from === vueRouter.START_LOCATION) {
      [pageData.value] = await Promise.all([
        resolvers.resolvePageData(to.name),
        (_a = pagesComponents[to.name]) === null || _a === void 0 ? void 0 : _a.__asyncLoader()
      ]);
    }
  });
  return router;
};
const setupGlobalComponents = (app) => {
  app.component("ClientOnly", ClientOnly);
  app.component("Content", Content);
};
const setupGlobalComputed = (app, router) => {
  const routeLocale = vue.computed(() => resolvers.resolveRouteLocale(siteData.value.locales, router.currentRoute.value.path));
  const siteLocaleData = vue.computed(() => resolvers.resolveSiteLocaleData(siteData.value, routeLocale.value));
  const pageFrontmatter = vue.computed(() => resolvers.resolvePageFrontmatter(pageData.value));
  const pageHeadTitle = vue.computed(() => resolvers.resolvePageHeadTitle(pageData.value, siteLocaleData.value));
  const pageHead = vue.computed(() => resolvers.resolvePageHead(pageHeadTitle.value, pageFrontmatter.value, siteLocaleData.value));
  const pageLang = vue.computed(() => resolvers.resolvePageLang(pageData.value));
  app.provide(routeLocaleSymbol, routeLocale);
  app.provide(siteLocaleDataSymbol, siteLocaleData);
  app.provide(pageFrontmatterSymbol, pageFrontmatter);
  app.provide(pageHeadTitleSymbol, pageHeadTitle);
  app.provide(pageHeadSymbol, pageHead);
  app.provide(pageLangSymbol, pageLang);
  Object.defineProperties(app.config.globalProperties, {
    $frontmatter: { get: () => pageFrontmatter.value },
    $head: { get: () => pageHead.value },
    $headTitle: { get: () => pageHeadTitle.value },
    $lang: { get: () => pageLang.value },
    $page: { get: () => pageData.value },
    $routeLocale: { get: () => routeLocale.value },
    $site: { get: () => siteData.value },
    $siteLocale: { get: () => siteLocaleData.value },
    $withBase: { get: () => withBase }
  });
  return {
    pageData,
    pageFrontmatter,
    pageHead,
    pageHeadTitle,
    pageLang,
    routeLocale,
    siteData,
    siteLocaleData
  };
};
const setupUpdateHead = () => {
  vueRouter.useRoute();
  const head = usePageHead();
  const lang = usePageLang();
  {
    const ssrContext = vue.useSSRContext();
    if (ssrContext) {
      ssrContext.head = head.value;
      ssrContext.lang = lang.value;
    }
    return;
  }
};
const appCreator = vue.createSSRApp;
const createVueApp = async () => {
  const app = appCreator({
    name: "VuepressApp",
    setup() {
      setupUpdateHead();
      for (const clientAppSetup of clientAppSetups) {
        clientAppSetup();
      }
      return () => [
        vue.h(vueRouter.RouterView),
        ...clientAppRootComponents.map((comp) => vue.h(comp))
      ];
    }
  });
  const router = createVueRouter();
  setupGlobalComponents(app);
  setupGlobalComputed(app, router);
  for (const clientAppEnhance of clientAppEnhances) {
    await clientAppEnhance({ app, router, siteData });
  }
  app.use(router);
  return {
    app,
    router
  };
};
const _sfc_main$w = {};
function _sfc_ssrRender$c(_ctx, _push, _parent, _attrs) {
  const _component_RouterLink = vue.resolveComponent("RouterLink");
  _push(`<!--[--><h1 id="\u6307\u5357" tabindex="-1"><a class="header-anchor" href="#\u6307\u5357" aria-hidden="true">#</a> \u6307\u5357</h1><h2 id="linux" tabindex="-1"><a class="header-anchor" href="#linux" aria-hidden="true">#</a> Linux</h2><h3 id="linux\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#linux\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> `);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/linux/command.html" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Linux\u5E38\u7528\u547D\u4EE4`);
      } else {
        return [
          vue.createTextVNode("Linux\u5E38\u7528\u547D\u4EE4")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h3><h2 id="git" tabindex="-1"><a class="header-anchor" href="#git" aria-hidden="true">#</a> Git</h2><h3 id="git\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#git\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> `);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/git/common.html" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Git\u5E38\u7528\u547D\u4EE4`);
      } else {
        return [
          vue.createTextVNode("Git\u5E38\u7528\u547D\u4EE4")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h3><h3 id="git\u9879\u76EE\u5F00\u53D1\u5EFA\u8BAE" tabindex="-1"><a class="header-anchor" href="#git\u9879\u76EE\u5F00\u53D1\u5EFA\u8BAE" aria-hidden="true">#</a> `);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/git/development.html" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Git\u9879\u76EE\u5F00\u53D1\u5EFA\u8BAE`);
      } else {
        return [
          vue.createTextVNode("Git\u9879\u76EE\u5F00\u53D1\u5EFA\u8BAE")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h3><h2 id="css" tabindex="-1"><a class="header-anchor" href="#css" aria-hidden="true">#</a> CSS</h2><h3 id="_49\u4E2A\u5728\u5DE5\u4F5C\u4E2D\u5E38\u7528\u4E14\u5BB9\u6613\u9057\u5FD8\u7684css\u6837\u5F0F\u6E05\u5355\u6574\u7406" tabindex="-1"><a class="header-anchor" href="#_49\u4E2A\u5728\u5DE5\u4F5C\u4E2D\u5E38\u7528\u4E14\u5BB9\u6613\u9057\u5FD8\u7684css\u6837\u5F0F\u6E05\u5355\u6574\u7406" aria-hidden="true">#</a> `);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/css/easyToIgnore.html" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`49\u4E2A\u5728\u5DE5\u4F5C\u4E2D\u5E38\u7528\u4E14\u5BB9\u6613\u9057\u5FD8\u7684CSS\u6837\u5F0F\u6E05\u5355\u6574\u7406`);
      } else {
        return [
          vue.createTextVNode("49\u4E2A\u5728\u5DE5\u4F5C\u4E2D\u5E38\u7528\u4E14\u5BB9\u6613\u9057\u5FD8\u7684CSS\u6837\u5F0F\u6E05\u5355\u6574\u7406")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h3><h2 id="php" tabindex="-1"><a class="header-anchor" href="#php" aria-hidden="true">#</a> PHP</h2><h3 id="\u65F6\u95F4\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#\u65F6\u95F4\u5904\u7406" aria-hidden="true">#</a> `);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/php/wechatTime.html" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u65F6\u95F4\u5904\u7406`);
      } else {
        return [
          vue.createTextVNode("\u65F6\u95F4\u5904\u7406")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h3><h3 id="thinkphp" tabindex="-1"><a class="header-anchor" href="#thinkphp" aria-hidden="true">#</a> ThinkPHP</h3><h4 id="\u94A9\u5B50" tabindex="-1"><a class="header-anchor" href="#\u94A9\u5B50" aria-hidden="true">#</a> `);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/php/thinkphp/hook.html" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u94A9\u5B50`);
      } else {
        return [
          vue.createTextVNode("\u94A9\u5B50")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h4><h4 id="tp5\u5B9A\u65F6\u4EFB\u52A1" tabindex="-1"><a class="header-anchor" href="#tp5\u5B9A\u65F6\u4EFB\u52A1" aria-hidden="true">#</a> `);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/php/thinkphp/cron.html" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`TP5\u5B9A\u65F6\u4EFB\u52A1`);
      } else {
        return [
          vue.createTextVNode("TP5\u5B9A\u65F6\u4EFB\u52A1")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h4><h4 id="tp6\u5B89\u88C5think-swoole" tabindex="-1"><a class="header-anchor" href="#tp6\u5B89\u88C5think-swoole" aria-hidden="true">#</a> `);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/php/thinkphp/swoole.html" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`TP6\u5B89\u88C5think-swoole`);
      } else {
        return [
          vue.createTextVNode("TP6\u5B89\u88C5think-swoole")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h4><h2 id="npm" tabindex="-1"><a class="header-anchor" href="#npm" aria-hidden="true">#</a> NPM</h2><h3 id="npm\u8BBE\u7F6E\u6DD8\u5B9D\u955C\u50CF" tabindex="-1"><a class="header-anchor" href="#npm\u8BBE\u7F6E\u6DD8\u5B9D\u955C\u50CF" aria-hidden="true">#</a> `);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/npm/configRegistry.html" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`npm\u8BBE\u7F6E\u6DD8\u5B9D\u955C\u50CF`);
      } else {
        return [
          vue.createTextVNode("npm\u8BBE\u7F6E\u6DD8\u5B9D\u955C\u50CF")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h3><h2 id="yarn" tabindex="-1"><a class="header-anchor" href="#yarn" aria-hidden="true">#</a> Yarn</h2><h3 id="yarn\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#yarn\u5B89\u88C5" aria-hidden="true">#</a> `);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/yarn/install.html" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Yarn\u5B89\u88C5`);
      } else {
        return [
          vue.createTextVNode("Yarn\u5B89\u88C5")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h3><!--]-->`);
}
const _sfc_setup$w = _sfc_main$w.setup;
_sfc_main$w.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/index.html.vue");
  return _sfc_setup$w ? _sfc_setup$w(props, ctx) : void 0;
};
var index_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["ssrRender", _sfc_ssrRender$c], ["__file", "index.html.vue"]]);
var index_html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": index_html$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$v = {};
function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="_49\u4E2A\u5728\u5DE5\u4F5C\u4E2D\u5E38\u7528\u4E14\u5BB9\u6613\u9057\u5FD8\u7684css\u6837\u5F0F\u6E05\u5355\u6574\u7406" tabindex="-1"><a class="header-anchor" href="#_49\u4E2A\u5728\u5DE5\u4F5C\u4E2D\u5E38\u7528\u4E14\u5BB9\u6613\u9057\u5FD8\u7684css\u6837\u5F0F\u6E05\u5355\u6574\u7406" aria-hidden="true">#</a> 49\u4E2A\u5728\u5DE5\u4F5C\u4E2D\u5E38\u7528\u4E14\u5BB9\u6613\u9057\u5FD8\u7684CSS\u6837\u5F0F\u6E05\u5355\u6574\u7406</h1><h3 id="_1\u3001\u6587\u5B57\u8D85\u51FA\u90E8\u5206\u663E\u793A\u7701\u7565\u53F7" tabindex="-1"><a class="header-anchor" href="#_1\u3001\u6587\u5B57\u8D85\u51FA\u90E8\u5206\u663E\u793A\u7701\u7565\u53F7" aria-hidden="true">#</a> <strong>1\u3001\u6587\u5B57\u8D85\u51FA\u90E8\u5206\u663E\u793A\u7701\u7565\u53F7</strong></h3><p>\u5355\u884C\u6587\u672C\u7684\u6EA2\u51FA\u663E\u793A\u7701\u7565\u53F7\uFF08\u4E00\u5B9A\u8981\u6709\u5BBD\u5EA6\uFF09</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code> <span class="token selector">p</span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span>200rpx<span class="token punctuation">;</span>
    <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
    <span class="token property">text-overflow</span><span class="token punctuation">:</span>ellipsis<span class="token punctuation">;</span>
    <span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u591A\u884C\u6587\u672C\u6EA2\u51FA\u663E\u793A\u7701\u7565\u53F7</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">p</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> -webkit-box<span class="token punctuation">;</span>
    <span class="token property">-webkit-box-orient</span><span class="token punctuation">:</span> vertical<span class="token punctuation">;</span>
    <span class="token property">-webkit-line-clamp</span><span class="token punctuation">:</span> 3<span class="token punctuation">;</span>
    <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="_2\u3001\u4E2D\u82F1\u6587\u81EA\u52A8\u6362\u884C" tabindex="-1"><a class="header-anchor" href="#_2\u3001\u4E2D\u82F1\u6587\u81EA\u52A8\u6362\u884C" aria-hidden="true">#</a> <strong>2\u3001\u4E2D\u82F1\u6587\u81EA\u52A8\u6362\u884C</strong></h3><p>word-break:break-all;\u53EA\u5BF9\u82F1\u6587\u8D77\u4F5C\u7528\uFF0C\u4EE5\u5B57\u6BCD\u4F5C\u4E3A\u6362\u884C\u4F9D\u636Eword-wrap:break-word; \u53EA\u5BF9\u82F1\u6587\u8D77\u4F5C\u7528\uFF0C\u4EE5\u5355\u8BCD\u4F5C\u4E3A\u6362\u884C\u4F9D\u636Ewhite-space:pre-wrap; \u53EA\u5BF9\u4E2D\u6587\u8D77\u4F5C\u7528\uFF0C\u5F3A\u5236\u6362\u884Cwhite-space:nowrap; \u5F3A\u5236\u4E0D\u6362\u884C\uFF0C\u90FD\u8D77\u4F5C\u7528</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">p</span><span class="token punctuation">{</span>
  <span class="token property">word-wrap</span><span class="token punctuation">:</span> break-word<span class="token punctuation">;</span>
  <span class="token property">white-space</span><span class="token punctuation">:</span> normal<span class="token punctuation">;</span>
  <span class="token property">word-break</span><span class="token punctuation">:</span> break-all<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">//\u4E0D\u6362\u884C
.wrap</span> <span class="token punctuation">{</span>
  <span class="token property">white-space</span><span class="token punctuation">:</span>nowrap<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">//\u81EA\u52A8\u6362\u884C
.wrap</span> <span class="token punctuation">{</span>
  <span class="token property">word-wrap</span><span class="token punctuation">:</span> break-word<span class="token punctuation">;</span>
  <span class="token property">word-break</span><span class="token punctuation">:</span> normal<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">//\u5F3A\u5236\u6362\u884C
.wrap</span> <span class="token punctuation">{</span>
  <span class="token property">word-break</span><span class="token punctuation">:</span>break-all<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h3 id="_3\u3001\u6587\u5B57\u9634\u5F71" tabindex="-1"><a class="header-anchor" href="#_3\u3001\u6587\u5B57\u9634\u5F71" aria-hidden="true">#</a> <strong>3\u3001\u6587\u5B57\u9634\u5F71</strong></h3><p>text-shadow \u4E3A\u7F51\u9875\u5B57\u4F53\u6DFB\u52A0\u9634\u5F71\uFF0C\u901A\u8FC7\u5BF9text-shadow\u5C5E\u6027\u8BBE\u7F6E\u76F8\u5173\u7684\u5C5E\u6027\u503C\u3002\u5C5E\u6027\u4E0E\u503C\u7684\u8BF4\u660E\u5982\u4E0B\uFF1Atext-shadow: [X-offset,Y-offset,Blur,Color];</p><blockquote><p>X-offset:\u6307\u9634\u5F71\u5C45\u4E8E\u5B57\u4F53\u6C34\u5E73\u504F\u79FB\u7684\u4F4D\u7F6E\u3002 Y-offset:\u6307\u9634\u5F71\u5C45\u4E8E\u5B57\u4F53\u5782\u76F4\u504F\u79FB\u7684\u4F4D\u7F6E\u3002 Blur:\u6307\u9634\u5F71\u7684\u6A21\u7CCA\u503C\u3002 color:\u6307\u9634\u5F71\u7684\u989C\u8272\uFF1B</p></blockquote><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">h1</span><span class="token punctuation">{</span>
  <span class="token property">text-shadow</span><span class="token punctuation">:</span> 5px 5px 5px #FF0000<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="_4\u3001\u8BBE\u7F6Eplaceholder\u7684\u5B57\u4F53\u6837\u5F0F" tabindex="-1"><a class="header-anchor" href="#_4\u3001\u8BBE\u7F6Eplaceholder\u7684\u5B57\u4F53\u6837\u5F0F" aria-hidden="true">#</a> <strong>4\u3001\u8BBE\u7F6Eplaceholder\u7684\u5B57\u4F53\u6837\u5F0F</strong></h3><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">input::-webkit-input-placeholder</span> <span class="token punctuation">{</span> <span class="token comment">/* Chrome/Opera/Safari */</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">input::-moz-placeholder</span> <span class="token punctuation">{</span> <span class="token comment">/* Firefox 19+ */</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">input:-ms-input-placeholder</span> <span class="token punctuation">{</span> <span class="token comment">/* IE 10+ */</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">input:-moz-placeholder</span> <span class="token punctuation">{</span> <span class="token comment">/* Firefox 18- */</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="_5\u3001\u4E0D\u56FA\u5B9A\u9AD8\u5BBD-div-\u5782\u76F4\u5C45\u4E2D\u7684\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#_5\u3001\u4E0D\u56FA\u5B9A\u9AD8\u5BBD-div-\u5782\u76F4\u5C45\u4E2D\u7684\u65B9\u6CD5" aria-hidden="true">#</a> <strong>5\u3001\u4E0D\u56FA\u5B9A\u9AD8\u5BBD div \u5782\u76F4\u5C45\u4E2D\u7684\u65B9\u6CD5</strong></h3><p>\u65B9\u6CD5\u4E00\uFF1A\u4F2A\u5143\u7D20\u548C inline-block / vertical-align\uFF08\u517C\u5BB9 IE8\uFF09</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.box-wrap:before</span> <span class="token punctuation">{</span>
      <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
      <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
      <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
      <span class="token property">margin-right</span><span class="token punctuation">:</span> -0.25em<span class="token punctuation">;</span> //\u5FAE\u8C03\u6574\u7A7A\u683C
<span class="token punctuation">}</span>
<span class="token selector">.box</span> <span class="token punctuation">{</span>
     <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
     <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u65B9\u6CD5\u4E8C\uFF1Aflex(\u4E0D\u517C\u5BB9 ie8 \u4EE5\u4E0B)</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.box-wrap {
     height: 300px;
     justify-content:center;
     align-items:center;
     display:flex;
     background-color:#666;
 }
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u65B9\u6CD5\u4E09\uFF1Atransform(\u4E0D\u517C\u5BB9 ie8 \u4EE5\u4E0B)</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code> <span class="token selector">.box-wrap</span> <span class="token punctuation">{</span>
     <span class="token property">width</span><span class="token punctuation">:</span>100%<span class="token punctuation">;</span>
     <span class="token property">height</span><span class="token punctuation">:</span>300px<span class="token punctuation">;</span>
     <span class="token property">background</span><span class="token punctuation">:</span><span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0.7<span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token property">position</span><span class="token punctuation">:</span>relative<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.box</span><span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span>absolute<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span>50%<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span>50%<span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span><span class="token function">translateX</span><span class="token punctuation">(</span>-50%<span class="token punctuation">)</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span><span class="token function">translateX</span><span class="token punctuation">(</span>-50%<span class="token punctuation">)</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u65B9\u6CD5\u56DB\uFF1A\u8BBE\u7F6E margin:auto\uFF08\u8BE5\u65B9\u6CD5\u5F97\u4E25\u683C\u610F\u4E49\u4E0A\u7684\u975E\u56FA\u5B9A\u5BBD\u9AD8\uFF0C\u800C\u662F 50%\u7684\u7236\u7EA7\u7684\u5BBD\u9AD8\u3002\uFF09</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.box-wrap</span> <span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span>100%<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span>300px<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span>#f00<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.box-content</span><span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>
    <span class="token property">bottom</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>
    <span class="token property">right</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span>50%<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span>50%<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span>auto<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span>#ff0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h3 id="_6\u3001\u89E3\u51B3ios\u9875\u9762\u6ED1\u52A8\u5361\u987F" tabindex="-1"><a class="header-anchor" href="#_6\u3001\u89E3\u51B3ios\u9875\u9762\u6ED1\u52A8\u5361\u987F" aria-hidden="true">#</a> <strong>6\u3001\u89E3\u51B3IOS\u9875\u9762\u6ED1\u52A8\u5361\u987F</strong></h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>body,html{
    -webkit-overflow-scrolling: touch;
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="_7\u3001\u8BBE\u7F6E\u6EDA\u52A8\u6761\u6837\u5F0F" tabindex="-1"><a class="header-anchor" href="#_7\u3001\u8BBE\u7F6E\u6EDA\u52A8\u6761\u6837\u5F0F" aria-hidden="true">#</a> <strong>7\u3001\u8BBE\u7F6E\u6EDA\u52A8\u6761\u6837\u5F0F</strong></h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.test::-webkit-scrollbar{
  /*\u6EDA\u52A8\u6761\u6574\u4F53\u6837\u5F0F*/
  width : 10px;  /*\u9AD8\u5BBD\u5206\u522B\u5BF9\u5E94\u6A2A\u7AD6\u6EDA\u52A8\u6761\u7684\u5C3A\u5BF8*/
  height: 1px;
}
.test::-webkit-scrollbar-thumb {
  /*\u6EDA\u52A8\u6761\u91CC\u9762\u5C0F\u65B9\u5757*/
  border-radius   : 10px;
  background-color: skyblue;
  background-image: -webkit-linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.2) 25%,
      transparent 25%,
      transparent 50%,
      rgba(255, 255, 255, 0.2) 50%,
      rgba(255, 255, 255, 0.2) 75%,
      transparent 75%,
      transparent
  );
}
.test::-webkit-scrollbar-track {
  /*\u6EDA\u52A8\u6761\u91CC\u9762\u8F68\u9053*/
  box-shadow   : inset 0 0 5px rgba(0, 0, 0, 0.2);
  background   : #ededed;
  border-radius: 10px;
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h3 id="_8\u3001\u5B9E\u73B0\u9690\u85CF\u6EDA\u52A8\u6761\u540C\u65F6\u53C8\u53EF\u4EE5\u6EDA\u52A8" tabindex="-1"><a class="header-anchor" href="#_8\u3001\u5B9E\u73B0\u9690\u85CF\u6EDA\u52A8\u6761\u540C\u65F6\u53C8\u53EF\u4EE5\u6EDA\u52A8" aria-hidden="true">#</a> <strong>8\u3001\u5B9E\u73B0\u9690\u85CF\u6EDA\u52A8\u6761\u540C\u65F6\u53C8\u53EF\u4EE5\u6EDA\u52A8</strong></h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.demo::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}

.demo {
  scrollbar-width: none; /* firefox */
  -ms-overflow-style: none; /* IE 10+ */
  overflow-x: hidden;
  overflow-y: auto;
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="_9\u3001css-\u7ED8\u5236\u4E09\u89D2\u5F62" tabindex="-1"><a class="header-anchor" href="#_9\u3001css-\u7ED8\u5236\u4E09\u89D2\u5F62" aria-hidden="true">#</a> <strong>9\u3001css \u7ED8\u5236\u4E09\u89D2\u5F62</strong></h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>div {
    width: 0;
    height: 0;
    border-width: 0 40px 40px;
    border-style: solid;
    border-color: transparent transparent red;
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u6548\u679C\u5982\u4E0B\uFF1A<img src="https://mmbiz.qpic.cn/mmbiz_jpg/eXCSRjyNYcYERnXdE2gkJTCeTUr3cHkgXey6ogtnicicXQLkubiaG2diahNcthLLR9uvrRLG2C3AsAQ2KdAH1EF5eg/640?wx_fmt=jpeg&amp;tp=webp&amp;wxfrom=5&amp;wx_lazy=1&amp;wx_co=1" alt="\u56FE\u7247"> \u5B9E\u73B0\u5E26\u8FB9\u6846\u7684\u4E09\u89D2\u5F62\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;div id=&quot;blue&quot;&gt;&lt;div&gt;

#blue {
    position:relative;
    width: 0;
    height: 0;
    border-width: 0 40px 40px;
    border-style: solid;
    border-color: transparent transparent blue;
}
#blue:after {
    content: &quot;&quot;;
    position: absolute;
    top: 1px;
    left: -38px;
    border-width: 0 38px 38px;
    border-style: solid;
    border-color: transparent transparent yellow;
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>\u6548\u679C\u5982\u4E0B\uFF1A<img src="https://mmbiz.qpic.cn/mmbiz_jpg/eXCSRjyNYcYERnXdE2gkJTCeTUr3cHkgO8leHDaur8qRsJawNUE4KicC1lZr6uYTZV5VmiahKq5Vic9UklkQepKQA/640?wx_fmt=jpeg&amp;tp=webp&amp;wxfrom=5&amp;wx_lazy=1&amp;wx_co=1" alt="\u56FE\u7247"> \u6CE8: \u5982\u679C\u60F3\u7ED8\u5236\u53F3\u76F4\u89D2\u4E09\u89D2\uFF0C\u5219\u5C06\u5DE6 border \u8BBE\u7F6E\u4E3A 0\uFF1B\u5982\u679C\u60F3\u7ED8\u5236\u5DE6\u76F4\u89D2\u4E09\u89D2\uFF0C\u5C06\u53F3 border \u8BBE\u7F6E\u4E3A 0 \u5373\u53EF\uFF08\u5176\u5B83\u60C5\u51B5\u540C\u7406\uFF09\u3002</p><h3 id="_10\u3001table\u8868\u683C\u8FB9\u6846\u5408\u5E76" tabindex="-1"><a class="header-anchor" href="#_10\u3001table\u8868\u683C\u8FB9\u6846\u5408\u5E76" aria-hidden="true">#</a> <strong>10\u3001Table\u8868\u683C\u8FB9\u6846\u5408\u5E76</strong></h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>table,tr,td{
  border: 1px solid #666;
}
table{
  border-collapse: collapse;
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="_11\u3001css-\u9009\u53D6\u7B2C-n-\u4E2A\u6807\u7B7E\u5143\u7D20" tabindex="-1"><a class="header-anchor" href="#_11\u3001css-\u9009\u53D6\u7B2C-n-\u4E2A\u6807\u7B7E\u5143\u7D20" aria-hidden="true">#</a> <strong>11\u3001css \u9009\u53D6\u7B2C n \u4E2A\u6807\u7B7E\u5143\u7D20</strong></h3><blockquote><p>first-child first-child \u8868\u793A\u9009\u62E9\u5217\u8868\u4E2D\u7684\u7B2C\u4E00\u4E2A\u6807\u7B7E\u3002 last-child last-child \u8868\u793A\u9009\u62E9\u5217\u8868\u4E2D\u7684\u6700\u540E\u4E00\u4E2A\u6807\u7B7E nth-child(3) \u8868\u793A\u9009\u62E9\u5217\u8868\u4E2D\u7684\u7B2C 3 \u4E2A\u6807\u7B7E nth-child(2n) \u8FD9\u4E2A\u8868\u793A\u9009\u62E9\u5217\u8868\u4E2D\u7684\u5076\u6570\u6807\u7B7E nth-child(2n-1) \u8FD9\u4E2A\u8868\u793A\u9009\u62E9\u5217\u8868\u4E2D\u7684\u5947\u6570\u6807\u7B7E nth-child(n+3) \u8FD9\u4E2A\u8868\u793A\u9009\u62E9\u5217\u8868\u4E2D\u7684\u6807\u7B7E\u4ECE\u7B2C 3 \u4E2A\u5F00\u59CB\u5230\u6700\u540E\u3002 nth-child(-n+3) \u8FD9\u4E2A\u8868\u793A\u9009\u62E9\u5217\u8868\u4E2D\u7684\u6807\u7B7E\u4ECE 0 \u5230 3\uFF0C\u5373\u5C0F\u4E8E 3 \u7684\u6807\u7B7E\u3002 nth-last-child(3) \u8FD9\u4E2A\u8868\u793A\u9009\u62E9\u5217\u8868\u4E2D\u7684\u5012\u6570\u7B2C 3 \u4E2A\u6807\u7B7E\u3002</p></blockquote><p>\u4F7F\u7528\u65B9\u6CD5\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>li:first-child{}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="_12\u3001\u79FB\u52A8\u7AEF\u8F6F\u952E\u76D8\u53D8\u4E3A\u641C\u7D22\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#_12\u3001\u79FB\u52A8\u7AEF\u8F6F\u952E\u76D8\u53D8\u4E3A\u641C\u7D22\u65B9\u5F0F" aria-hidden="true">#</a> <strong>12\u3001\u79FB\u52A8\u7AEF\u8F6F\u952E\u76D8\u53D8\u4E3A\u641C\u7D22\u65B9\u5F0F</strong></h3><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u8F6F\u952E\u76D8\u4E0A\u8BE5\u952E\u4F4D\u4E3A\u524D\u5F80\u6216\u8005\u786E\u8BA4\u7B49\u6587\u5B57\uFF0C\u8981\u4F7F\u5176\u53D8\u4E3A\u641C\u7D22\u6587\u5B57\uFF0C\u9700\u8981\u5728 input \u4E0A\u52A0\u4E0A type \u58F0\u660E\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;form action=&quot;#&quot;&gt;
    &lt;input type=&quot;search&quot; placeholder=&quot;\u8BF7\u8F93\u5165...&quot; name=&quot;search&quot; /&gt;
&lt;/form&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u9700\u8981\u4E00\u4E2A form \u6807\u7B7E\u5957\u8D77\u6765,\u5E76\u4E14\u8BBE\u7F6E action \u5C5E\u6027,\u8FD9\u6837\u5199\u5B8C\u4E4B\u540E\u8F93\u5165\u6CD5\u7684\u53F3\u4E0B\u89D2\u5C31\u4F1A\u81EA\u52A8\u53D8\u6210\u641C\u7D22,\u540C\u65F6\uFF0C\u4F7F\u7528\u4E86 search \u7C7B\u578B\u540E\uFF0C\u641C\u7D22\u6846\u4E0A\u4F1A\u9ED8\u8BA4\u81EA\u5E26\u5220\u9664\u6309\u94AE\u3002</p><h3 id="_13\u3001onerror-\u5904\u7406\u56FE\u7247\u5F02\u5E38" tabindex="-1"><a class="header-anchor" href="#_13\u3001onerror-\u5904\u7406\u56FE\u7247\u5F02\u5E38" aria-hidden="true">#</a> <strong>13\u3001onerror \u5904\u7406\u56FE\u7247\u5F02\u5E38</strong></h3><p>\u4F7F\u7528 onerror \u5F02\u5E38\u5904\u7406\u65F6\uFF0C\u82E5 onerror \u7684\u56FE\u7247\u4E5F\u51FA\u73B0\u95EE\u9898\uFF0C\u5219\u56FE\u7247\u663E\u793A\u4F1A\u9677\u5165\u6B7B\u5FAA\u73AF\uFF0C\u6240\u4EE5\u8981\u5728\u8D4B\u503C\u5F02\u5E38\u56FE\u7247\u4E4B\u540E\uFF0C\u5C06\u5730\u5740\u7F6E\u7A7A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;img onerror=&quot;this.src=&#39;url;this.onerror=null&#39;&quot; /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="_14\u3001\u80CC\u666F\u56FE\u7247\u7684\u5927\u5C0F" tabindex="-1"><a class="header-anchor" href="#_14\u3001\u80CC\u666F\u56FE\u7247\u7684\u5927\u5C0F" aria-hidden="true">#</a> <strong>14\u3001\u80CC\u666F\u56FE\u7247\u7684\u5927\u5C0F</strong></h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.bg-img{
    background:url(../img/find_pw_on_2.png)  no-repeat center center !important;
    background-size: 27px auto !important;
    /*background-size: 100% 100%;*/
    /*background-size: 50px 100px*/
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="_15\u3001\u6587\u5B57\u4E4B\u95F4\u7684\u95F4\u8DDD" tabindex="-1"><a class="header-anchor" href="#_15\u3001\u6587\u5B57\u4E4B\u95F4\u7684\u95F4\u8DDD" aria-hidden="true">#</a> <strong>15\u3001\u6587\u5B57\u4E4B\u95F4\u7684\u95F4\u8DDD</strong></h3><p>\u5355\u8BCDtext-indent\u62AC\u5934\u8DDD\u79BB\uFF0Cletter-spacing\u5B57\u4E0E\u5B57\u95F4\u8DDD</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>p{
  text-indent\uFF1A10px\uFF1B//\u5355\u8BCD\u62AC\u5934\u8DDD\u79BB
  letter-spacing\uFF1A10px\uFF1B//\u95F4\u8DDD
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="_16\u3001\u5143\u7D20\u5360\u6EE1\u6574\u4E2A\u5C4F\u5E55" tabindex="-1"><a class="header-anchor" href="#_16\u3001\u5143\u7D20\u5360\u6EE1\u6574\u4E2A\u5C4F\u5E55" aria-hidden="true">#</a> <strong>16\u3001\u5143\u7D20\u5360\u6EE1\u6574\u4E2A\u5C4F\u5E55</strong></h3><p>heigth\u5982\u679C\u4F7F\u7528100%\uFF0C\u4F1A\u6839\u636E\u7236\u7EA7\u7684\u9AD8\u5EA6\u6765\u51B3\u5B9A\uFF0C\u6240\u4EE5\u4F7F\u7528100vh\u5355\u4F4D\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.dom{
  width:100%;
  height:100vh;
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="_17\u3001css\u5B9E\u73B0\u6587\u672C\u4E24\u7AEF\u5BF9\u9F50" tabindex="-1"><a class="header-anchor" href="#_17\u3001css\u5B9E\u73B0\u6587\u672C\u4E24\u7AEF\u5BF9\u9F50" aria-hidden="true">#</a> <strong>17\u3001CSS\u5B9E\u73B0\u6587\u672C\u4E24\u7AEF\u5BF9\u9F50</strong></h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.wrap {
    text-align: justify;
    text-justify: distribute-all-lines;  //ie6-8
    text-align-last: justify;  //\u4E00\u4E2A\u5757\u6216\u884C\u7684\u6700\u540E\u4E00\u884C\u5BF9\u9F50\u65B9\u5F0F
    -moz-text-align-last: justify;
    -webkit-text-align-last: justify;
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="_18\u3001\u5B9E\u73B0\u6587\u5B57\u7AD6\u5411\u6392\u7248" tabindex="-1"><a class="header-anchor" href="#_18\u3001\u5B9E\u73B0\u6587\u5B57\u7AD6\u5411\u6392\u7248" aria-hidden="true">#</a> <strong>18\u3001\u5B9E\u73B0\u6587\u5B57\u7AD6\u5411\u6392\u7248</strong></h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u5355\u5217\u5C55\u793A\u65F6
.wrap {
    width: 25px;
    line-height: 18px;
    height: auto;
    font-size: 12px;
    padding: 8px 5px;
    word-wrap: break-word;/*\u82F1\u6587\u7684\u65F6\u5019\u9700\u8981\u52A0\u4E0A\u8FD9\u53E5\uFF0C\u81EA\u52A8\u6362\u884C*/ 
}
// \u591A\u5217\u5C55\u793A\u65F6
.wrap {
    height: 210px;
    line-height: 30px;
    text-align: justify;
    writing-mode: vertical-lr;  //\u4ECE\u5DE6\u5411\u53F3    
    writing-mode: tb-lr;        //IE\u4ECE\u5DE6\u5411\u53F3
    //writing-mode: vertical-rl;  -- \u4ECE\u53F3\u5411\u5DE6
    //writing-mode: tb-rl;        -- \u4ECE\u53F3\u5411\u5DE6
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h3 id="_19\u3001\u4F7F\u5143\u7D20\u9F20\u6807\u4E8B\u4EF6\u5931\u6548" tabindex="-1"><a class="header-anchor" href="#_19\u3001\u4F7F\u5143\u7D20\u9F20\u6807\u4E8B\u4EF6\u5931\u6548" aria-hidden="true">#</a> <strong>19\u3001\u4F7F\u5143\u7D20\u9F20\u6807\u4E8B\u4EF6\u5931\u6548</strong></h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.wrap {
  // \u5982\u679C\u6309tab\u80FD\u9009\u4E2D\u8BE5\u5143\u7D20\uFF0C\u5982button\uFF0C\u7136\u540E\u6309\u56DE\u8F66\u8FD8\u662F\u80FD\u6267\u884C\u5BF9\u5E94\u7684\u4E8B\u4EF6\uFF0C\u5982click\u3002
 pointer-events: none;
 cursor: default;
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="_20\u3001\u7981\u6B62\u7528\u6237\u9009\u62E9" tabindex="-1"><a class="header-anchor" href="#_20\u3001\u7981\u6B62\u7528\u6237\u9009\u62E9" aria-hidden="true">#</a> <strong>20\u3001\u7981\u6B62\u7528\u6237\u9009\u62E9</strong></h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.wrap {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="_21\u3001\u4F7F\u7528\u786C\u4EF6\u52A0\u901F" tabindex="-1"><a class="header-anchor" href="#_21\u3001\u4F7F\u7528\u786C\u4EF6\u52A0\u901F" aria-hidden="true">#</a> <strong>21\u3001\u4F7F\u7528\u786C\u4EF6\u52A0\u901F</strong></h3><p>\u5728\u6D4F\u89C8\u5668\u4E2D\u7528css\u5F00\u542F\u786C\u4EF6\u52A0\u901F\uFF0C\u4F7FGPU (Graphics Processing Unit) \u53D1\u6325\u529F\u80FD\uFF0C\u4ECE\u800C\u63D0\u5347\u6027\u80FD\u3002\u786C\u4EF6\u52A0\u901F\u5728\u79FB\u52A8\u7AEF\u5C24\u5176\u6709\u7528\uFF0C\u56E0\u4E3A\u5B83\u53EF\u4EE5\u6709\u6548\u7684\u51CF\u5C11\u8D44\u6E90\u7684\u5229\u7528\u3002 \u76EE\u524D\u4E3B\u6D41\u6D4F\u89C8\u5668\u4F1A\u68C0\u6D4B\u5230\u9875\u9762\u4E2D\u67D0\u4E2ADOM\u5143\u7D20\u5E94\u7528\u4E86\u67D0\u4E9BCSS\u89C4\u5219\u65F6\u5C31\u4F1A\u5F00\u542F\uFF0C\u6700\u663E\u8457\u7684\u7279\u5F81\u7684\u5143\u7D20\u76843D\u53D8\u6362\u3002\u5982\u679C\u4E0D\u4F7F\u75283D\u53D8\u5F62\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u4E0B\u9762\u65B9\u5F0F\u6765\u5F00\u542F\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.wrap {
    transform: translateZ(0);
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="_22\u3001\u9875\u9762\u52A8\u753B\u51FA\u73B0\u95EA\u70C1\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#_22\u3001\u9875\u9762\u52A8\u753B\u51FA\u73B0\u95EA\u70C1\u95EE\u9898" aria-hidden="true">#</a> <strong>22\u3001\u9875\u9762\u52A8\u753B\u51FA\u73B0\u95EA\u70C1\u95EE\u9898</strong></h3><p>\u5728 Chrome and Safari\u4E2D\uFF0C\u5F53\u6211\u4EEC\u4F7F\u7528CSS transforms \u6216\u8005 animations\u65F6\u53EF\u80FD\u4F1A\u6709\u9875\u9762\u95EA\u70C1\u7684\u6548\u679C\uFF0C\u4E0B\u9762\u7684\u4EE3\u7801\u53EF\u4EE5\u4FEE\u590D\u6B64\u60C5\u51B5\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.cube {
   -webkit-backface-visibility: hidden;
   backface-visibility: hidden;
 
   -webkit-perspective: 1000;
   perspective: 1000;
   /* Other transform properties here */
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u5728webkit\u5185\u6838\u7684\u6D4F\u89C8\u5668\u4E2D\uFF0C\u53E6\u4E00\u4E2A\u884C\u4E4B\u6709\u6548\u7684\u65B9\u6CD5\u662F</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.cube {
   -webkit-transform: translate3d(0, 0, 0);
   transform: translate3d(0, 0, 0);
  /* Other transform properties here */
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="_23\u3001\u5B57\u6BCD\u5927\u5C0F\u5199\u8F6C\u6362" tabindex="-1"><a class="header-anchor" href="#_23\u3001\u5B57\u6BCD\u5927\u5C0F\u5199\u8F6C\u6362" aria-hidden="true">#</a> <strong>23\u3001\u5B57\u6BCD\u5927\u5C0F\u5199\u8F6C\u6362</strong></h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>p {text-transform: uppercase}  // \u5C06\u6240\u6709\u5B57\u6BCD\u53D8\u6210\u5927\u5199\u5B57\u6BCD
p {text-transform: lowercase}  // \u5C06\u6240\u6709\u5B57\u6BCD\u53D8\u6210\u5C0F\u5199\u5B57\u6BCD
p {text-transform: capitalize} // \u9996\u5B57\u6BCD\u5927\u5199
p {font-variant: small-caps}   // \u5C06\u5B57\u4F53\u53D8\u6210\u5C0F\u578B\u7684\u5927\u5199\u5B57\u6BCD
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="_24\u3001\u5C06\u4E00\u4E2A\u5BB9\u5668\u8BBE\u4E3A\u900F\u660E" tabindex="-1"><a class="header-anchor" href="#_24\u3001\u5C06\u4E00\u4E2A\u5BB9\u5668\u8BBE\u4E3A\u900F\u660E" aria-hidden="true">#</a> <strong>24\u3001\u5C06\u4E00\u4E2A\u5BB9\u5668\u8BBE\u4E3A\u900F\u660E</strong></h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.wrap { 
  filter:alpha(opacity=50); 
  -moz-opacity:0.5; 
  -khtml-opacity: 0.5; 
  opacity: 0.5; 
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="_25\u3001\u6D88\u9664transition\u95EA\u5C4F" tabindex="-1"><a class="header-anchor" href="#_25\u3001\u6D88\u9664transition\u95EA\u5C4F" aria-hidden="true">#</a> <strong>25\u3001\u6D88\u9664transition\u95EA\u5C4F</strong></h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.wrap {
    -webkit-transform-style: preserve-3d;
    -webkit-backface-visibility: hidden;
    -webkit-perspective: 1000;
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="_26\u3001\u8BC6\u522B\u5B57\u7B26\u4E32\u91CC\u7684-n-\u5E76\u6362\u884C" tabindex="-1"><a class="header-anchor" href="#_26\u3001\u8BC6\u522B\u5B57\u7B26\u4E32\u91CC\u7684-n-\u5E76\u6362\u884C" aria-hidden="true">#</a> <strong>26\u3001\u8BC6\u522B\u5B57\u7B26\u4E32\u91CC\u7684 &#39;\\n&#39; \u5E76\u6362\u884C</strong></h3><p>\u4E00\u822C\u5728\u5BCC\u6587\u672C\u4E2D\u8FD4\u56DE\u6362\u884C\u7B26\u4E0D\u662F<br>\u7684\u6807\u7B7E\uFF0C\u800C\u4E14\\n\u3002\u4E0D\u4F7F\u7528\u6B63\u5219\u8F6C\u6362\u7684\u60C5\u51B5\u4E0B\uFF0C\u53EF\u901A\u8FC7\u4E0B\u9762\u6837\u5F0F\u5B9E\u73B0\u6362\u884C\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>body {
   white-space: pre-line;
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="_27\u3001\u79FB\u9664a\u6807\u7B7E\u88AB\u70B9\u94FE\u63A5\u7684\u8FB9\u6846" tabindex="-1"><a class="header-anchor" href="#_27\u3001\u79FB\u9664a\u6807\u7B7E\u88AB\u70B9\u94FE\u63A5\u7684\u8FB9\u6846" aria-hidden="true">#</a> <strong>27\u3001\u79FB\u9664a\u6807\u7B7E\u88AB\u70B9\u94FE\u63A5\u7684\u8FB9\u6846</strong></h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>a {
  outline: none\uFF1B//\u6216\u8005outline: 0
  text-decoration:none; //\u53D6\u6D88\u9ED8\u8BA4\u4E0B\u5212\u7EBF
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="_28\u3001css\u663E\u793A\u94FE\u63A5\u4E4B\u540E\u7684url" tabindex="-1"><a class="header-anchor" href="#_28\u3001css\u663E\u793A\u94FE\u63A5\u4E4B\u540E\u7684url" aria-hidden="true">#</a> <strong>28\u3001CSS\u663E\u793A\u94FE\u63A5\u4E4B\u540E\u7684URL</strong></h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;a href=&quot;//www.webqdkf.com&quot;&gt;\u6709\u8BFE\u524D\u7AEF\u7F51&lt;/a&gt;
&lt;style&gt;
a:after {content: &quot; (&quot; attr(href) &quot;)&quot;;}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="_29\u3001select\u5185\u5BB9\u5C45\u4E2D\u663E\u793A\u3001\u4E0B\u62C9\u5185\u5BB9\u53F3\u5BF9\u9F50" tabindex="-1"><a class="header-anchor" href="#_29\u3001select\u5185\u5BB9\u5C45\u4E2D\u663E\u793A\u3001\u4E0B\u62C9\u5185\u5BB9\u53F3\u5BF9\u9F50" aria-hidden="true">#</a> <strong>29\u3001select\u5185\u5BB9\u5C45\u4E2D\u663E\u793A\u3001\u4E0B\u62C9\u5185\u5BB9\u53F3\u5BF9\u9F50</strong></h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>select{
    text-align: center;
    text-align-last: center;
}
select option {
    direction: rtl;
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="_30\u3001\u4FEE\u6539input\u8F93\u5165\u6846\u4E2D\u5149\u6807\u7684\u989C\u8272\u4E0D\u6539\u53D8\u5B57\u4F53\u7684\u989C\u8272" tabindex="-1"><a class="header-anchor" href="#_30\u3001\u4FEE\u6539input\u8F93\u5165\u6846\u4E2D\u5149\u6807\u7684\u989C\u8272\u4E0D\u6539\u53D8\u5B57\u4F53\u7684\u989C\u8272" aria-hidden="true">#</a> <strong>30\u3001\u4FEE\u6539input\u8F93\u5165\u6846\u4E2D\u5149\u6807\u7684\u989C\u8272\u4E0D\u6539\u53D8\u5B57\u4F53\u7684\u989C\u8272</strong></h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>input{
    color:  #fff;
    caret-color: red;
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="_31\u3001\u5B50\u5143\u7D20\u56FA\u5B9A\u5BBD\u5EA6-\u7236\u5143\u7D20\u5BBD\u5EA6\u88AB\u6491\u5F00" tabindex="-1"><a class="header-anchor" href="#_31\u3001\u5B50\u5143\u7D20\u56FA\u5B9A\u5BBD\u5EA6-\u7236\u5143\u7D20\u5BBD\u5EA6\u88AB\u6491\u5F00" aria-hidden="true">#</a> <strong>31\u3001\u5B50\u5143\u7D20\u56FA\u5B9A\u5BBD\u5EA6 \u7236\u5143\u7D20\u5BBD\u5EA6\u88AB\u6491\u5F00</strong></h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u7236\u5143\u7D20\u4E0B\u7684\u5B50\u5143\u7D20\u662F\u884C\u5185\u5143\u7D20
.wrap {
  white-space: nowrap;
}
// \u82E5\u7236\u5143\u7D20\u4E0B\u7684\u5B50\u5143\u7D20\u662F\u5757\u7EA7\u5143\u7D20
.wrap {
  white-space: nowrap;  // \u5B50\u5143\u7D20\u4E0D\u88AB\u6362\u884C
  display: inline-block;
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="_32\u3001\u8BA9div\u91CC\u7684\u56FE\u7247\u548C\u6587\u5B57\u540C\u65F6\u4E0A\u4E0B\u5C45\u4E2D" tabindex="-1"><a class="header-anchor" href="#_32\u3001\u8BA9div\u91CC\u7684\u56FE\u7247\u548C\u6587\u5B57\u540C\u65F6\u4E0A\u4E0B\u5C45\u4E2D" aria-hidden="true">#</a> <strong>32\u3001\u8BA9div\u91CC\u7684\u56FE\u7247\u548C\u6587\u5B57\u540C\u65F6\u4E0A\u4E0B\u5C45\u4E2D</strong></h3><p>\u8FD9\u91CC\u4E0D\u4F7F\u7528flex\u5E03\u5C40\u7684\u60C5\u51B5\u3002\u901A\u8FC7vertival-align</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.wrap {
  height: 100,
  line-height: 100
}
img {
  vertival-align\uFF1Amiddle
}
// vertical-align css\u7684\u5C5E\u6027vertical-align\u7528\u6765\u6307\u5B9A\u884C\u5185\u5143\u7D20\uFF08inline\uFF09\u6216\u8868\u683C\u5355\u5143\u683C\uFF08table-cell\uFF09\u5143\u7D20\u7684\u5782\u76F4\u5BF9\u9F50\u65B9\u5F0F\u3002\u53EA\u5BF9\u884C\u5185\u5143\u7D20\u3001\u8868\u683C\u5355\u5143\u683C\u5143\u7D20\u751F\u6548\uFF0C\u4E0D\u80FD\u7528\u5B83\u5782\u76F4\u5BF9\u9F50\u5757\u7EA7\u5143\u7D20
// vertical-align\uFF1Abaseline/top/middle/bottom/sub/text-top;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="_33\u3001\u5B9E\u73B0\u5BBD\u9AD8\u7B49\u6BD4\u4F8B\u81EA\u9002\u5E94\u77E9\u5F62" tabindex="-1"><a class="header-anchor" href="#_33\u3001\u5B9E\u73B0\u5BBD\u9AD8\u7B49\u6BD4\u4F8B\u81EA\u9002\u5E94\u77E9\u5F62" aria-hidden="true">#</a> <strong>33\u3001\u5B9E\u73B0\u5BBD\u9AD8\u7B49\u6BD4\u4F8B\u81EA\u9002\u5E94\u77E9\u5F62</strong></h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.scale {
  width: 100%;
  padding-bottom: 56.25%;
  height: 0;
  position: relative; 
}
.item {
  position: absolute; 
  width: 100%;
  height: 100%;
  background-color: 499e56;
}    
&lt;div class=&quot;scale&quot;&gt;
     &lt;div class=&quot;item&quot;&gt;
         \u8FD9\u91CC\u662F\u6240\u6709\u5B50\u5143\u7D20\u7684\u5BB9\u5668
     &lt;/div&gt;
 &lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h3 id="_34\u3001transfrom\u7684rotate\u5C5E\u6027\u5728span\u6807\u7B7E\u4E0B\u5931\u6548" tabindex="-1"><a class="header-anchor" href="#_34\u3001transfrom\u7684rotate\u5C5E\u6027\u5728span\u6807\u7B7E\u4E0B\u5931\u6548" aria-hidden="true">#</a> <strong>34\u3001transfrom\u7684rotate\u5C5E\u6027\u5728span\u6807\u7B7E\u4E0B\u5931\u6548</strong></h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>span {
  display: inline-block
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="_35\u3001css\u52A0\u8F7D\u52A8\u753B" tabindex="-1"><a class="header-anchor" href="#_35\u3001css\u52A0\u8F7D\u52A8\u753B" aria-hidden="true">#</a> <strong>35\u3001CSS\u52A0\u8F7D\u52A8\u753B</strong></h3><p>\u4E3B\u8981\u662F\u901A\u8FC7css\u65CB\u8F6C\u52A8\u753B\u7684\u5B9E\u73B0\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.dom{
  -webkit-animation:circle 1s infinite linear;
}
@keyframes circle{
  0%{ transform: rotate(0deg); }
  100%{ transform: rotate(360deg); }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u5B9E\u73B0\u5982\u4E0B\u6548\u679C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;div class=&quot;loader&quot;&gt;&lt;/div&gt;
&lt;style&gt;
.loader {
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #3498db;
  width: 80px;
  height: 80px;
  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;
}

@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h3 id="_36\u3001\u6587\u5B57\u6E10\u53D8\u6548\u679C\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#_36\u3001\u6587\u5B57\u6E10\u53D8\u6548\u679C\u5B9E\u73B0" aria-hidden="true">#</a> <strong>36\u3001\u6587\u5B57\u6E10\u53D8\u6548\u679C\u5B9E\u73B0</strong></h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;div class=&quot;text_signature &quot; &gt;fly63\u524D\u7AEF\u7F51\uFF0C\u4E00\u4E2A\u514D\u8D39\u5B66\u4E60\u524D\u7AEF\u77E5\u8BC6\u7684\u7F51\u7AD9&lt;/div&gt;
&lt;style&gt;
.text_signature {
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: linear-gradient(to right, #ec2239, #40a4e2,#ea96f5);
    width: 320px;
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="_37\u3001\u597D\u770B\u7684\u8FB9\u6846\u9634\u5F71" tabindex="-1"><a class="header-anchor" href="#_37\u3001\u597D\u770B\u7684\u8FB9\u6846\u9634\u5F71" aria-hidden="true">#</a> <strong>37\u3001\u597D\u770B\u7684\u8FB9\u6846\u9634\u5F71</strong></h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;div class=&quot;text_shadow&quot;&gt;&lt;/div&gt;
&lt;style&gt; 
.text_shadow{
  width:500px;
  height:100px;
  box-shadow: 0px 0px 13px 1px rgba(51, 51, 51, 0.1);
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="_38\u3001\u597D\u770B\u7684\u80CC\u666F\u6E10\u53D8" tabindex="-1"><a class="header-anchor" href="#_38\u3001\u597D\u770B\u7684\u80CC\u666F\u6E10\u53D8" aria-hidden="true">#</a> <strong>38\u3001\u597D\u770B\u7684\u80CC\u666F\u6E10\u53D8</strong></h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;div class=&quot;text_gradient&quot;&gt;&lt;/div&gt;
&lt;style&gt; 
.text_gradient{
  width:500px;
  height:100px;
  background: linear-gradient(25deg, rgb(79, 107, 208), rgb(98, 141, 185), rgb(102, 175, 161), rgb(92, 210, 133)) rgb(182, 228, 253);
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="_39\u3001\u5B9E\u73B0\u7ACB\u4F53\u5B57\u7684\u6548\u679C" tabindex="-1"><a class="header-anchor" href="#_39\u3001\u5B9E\u73B0\u7ACB\u4F53\u5B57\u7684\u6548\u679C" aria-hidden="true">#</a> <strong>39\u3001\u5B9E\u73B0\u7ACB\u4F53\u5B57\u7684\u6548\u679C</strong></h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;div class=&quot;text_solid&quot;&gt;\u6709\u8BFE\u524D\u7AEF\u7F51-web\u524D\u7AEF\u6280\u672F\u5B66\u4E60\u5E73\u53F0&lt;/div&gt;
&lt;style&gt; 
.text_solid{
    font-size: 32px;
    text-align: center;
    font-weight: bold;
    line-height:100px;
    text-transform:uppercase;
    position: relative;
  background-color: #333;
    color:#fff;
    text-shadow:
    0px 1px 0px #c0c0c0,
    0px 2px 0px #b0b0b0,
    0px 3px 0px #a0a0a0,
    0px 4px 0px #909090,
    0px 5px 10px rgba(0, 0, 0, 0.6);
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h3 id="_40\u3001\u5168\u5C4F\u80CC\u666F\u56FE\u7247\u7684\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#_40\u3001\u5168\u5C4F\u80CC\u666F\u56FE\u7247\u7684\u5B9E\u73B0" aria-hidden="true">#</a> <strong>40\u3001\u5168\u5C4F\u80CC\u666F\u56FE\u7247\u7684\u5B9E\u73B0</strong></h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.swper{
  background-image: url(./img/bg.jpg);
  width:100%;
  height:100%;//\u7236\u7EA7\u9AD8\u4E0D\u4E3A100%\u8BF7\u4F7F\u7528100vh
  zoom: 1;
  background-color: #fff;
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
  background-position: center 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="_41\u3001\u5B9E\u73B0\u6587\u5B57\u63CF\u8FB9\u76842\u79CD\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#_41\u3001\u5B9E\u73B0\u6587\u5B57\u63CF\u8FB9\u76842\u79CD\u65B9\u6CD5" aria-hidden="true">#</a> <strong>41\u3001\u5B9E\u73B0\u6587\u5B57\u63CF\u8FB9\u76842\u79CD\u65B9\u6CD5</strong></h3><p>\u65B9\u5F0F\u4E00\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.stroke {
      -webkit-text-stroke: 1px greenyellow;
     text-stroke: 1px greenyellow;
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u65B9\u5F0F\u4E8C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.stroke {
  text-shadow:#000 1px 0 0,#000 0 1px 0,#000 -1px 0 0,#000 0 -1px 0;
  -webkit-text-shadow:#000 1px 0 0,#000 0 1px 0,#000 -1px 0 0,#000 0 -1px 0;
  -moz-text-shadow:#000 1px 0 0,#000 0 1px 0,#000 -1px 0 0,#000 0 -1px 0;
  *filter: Glow(color=#000, strength=1);
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="_42\u3001\u5143\u7D20\u900F\u660E\u5EA6\u7684\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#_42\u3001\u5143\u7D20\u900F\u660E\u5EA6\u7684\u5B9E\u73B0" aria-hidden="true">#</a> <strong>42\u3001\u5143\u7D20\u900F\u660E\u5EA6\u7684\u5B9E\u73B0</strong></h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.dom{
  opacity:0.4;
  filter:alpha(opacity=40); /* IE8 \u53CA\u5176\u66F4\u65E9\u7248\u672C */
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u4F7F\u7528rgba()\u8BBE\u7F6E\u989C\u8272\u900F\u660E\u5EA6\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.demo{
  background:rgba(255,0,0,1);
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u8BF4\u660E\uFF1ARGBA \u662F\u4EE3\u8868Red\uFF08\u7EA2\u8272\uFF09 Green\uFF08\u7EFF\u8272\uFF09 Blue\uFF08\u84DD\u8272\uFF09\u548C Alpha\uFF08\u4E0D\u900F\u660E\u5EA6\uFF09\u4E09\u4E2A\u5355\u8BCD\u7684\u7F29\u5199\u3002</p><h3 id="_43\u3001\u89E3\u51B31px\u8FB9\u6846\u53D8\u7C97\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#_43\u3001\u89E3\u51B31px\u8FB9\u6846\u53D8\u7C97\u95EE\u9898" aria-hidden="true">#</a> <strong>43\u3001\u89E3\u51B31px\u8FB9\u6846\u53D8\u7C97\u95EE\u9898</strong></h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.dom{
  height: 1px;
  background: #dbdbdb;
  transform:scaleY(0.5);
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>Ps\uFF1A\u51FA\u73B01px\u53D8\u7C97\u7684\u539F\u56E0\uFF0C\u6BD4\u5982\u57282\u500D\u5C4F\u65F61px\u7684\u50CF\u7D20\u5B9E\u9645\u5BF9\u5E942\u4E2A\u7269\u7406\u50CF\u7D20\u3002</p><h3 id="_44\u3001css\u4E0D\u540C\u5355\u4F4D\u7684\u8FD0\u7B97" tabindex="-1"><a class="header-anchor" href="#_44\u3001css\u4E0D\u540C\u5355\u4F4D\u7684\u8FD0\u7B97" aria-hidden="true">#</a> <strong>44\u3001CSS\u4E0D\u540C\u5355\u4F4D\u7684\u8FD0\u7B97</strong></h3><p>css\u81EA\u5DF1\u4E5F\u80FD\u591F\u8FDB\u884C\u7B80\u5355\u7684\u8FD0\u7B97\uFF0C\u4E3B\u8981\u662F\u7528\u5230\u4E86calc\u8FD9\u4E2A\u51FD\u6570\u3002\u5B9E\u73B0\u4E0D\u540C\u5355\u4F4D\u7684\u52A0\u51CF\u8FD0\u7B97\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.div{ 
   width: calc(100% - 50px); 
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="_45\u3001css\u5B9E\u73B0\u6587\u5B57\u6A21\u7CCA\u6548\u679C" tabindex="-1"><a class="header-anchor" href="#_45\u3001css\u5B9E\u73B0\u6587\u5B57\u6A21\u7CCA\u6548\u679C" aria-hidden="true">#</a> <strong>45\u3001CSS\u5B9E\u73B0\u6587\u5B57\u6A21\u7CCA\u6548\u679C</strong></h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.vague_text{
  color: transparent; 
  text-shadow: #111 0 0 5px;
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="_46\u3001\u901A\u8FC7\u6EE4\u955C\u8BA9\u56FE\u6807\u53D8\u7070" tabindex="-1"><a class="header-anchor" href="#_46\u3001\u901A\u8FC7\u6EE4\u955C\u8BA9\u56FE\u6807\u53D8\u7070" aria-hidden="true">#</a> <strong>46\u3001\u901A\u8FC7\u6EE4\u955C\u8BA9\u56FE\u6807\u53D8\u7070</strong></h3><p>\u4E00\u5F20\u5F69\u8272\u7684\u56FE\u7247\u5C31\u80FD\u5B9E\u73B0\u9F20\u6807\u79FB\u5165\u53D8\u5F69\u8272\uFF0C\u79FB\u51FA\u53D8\u7070\u7684\u6548\u679C\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;a href=&#39;&#39; class=&#39;icon&#39;&gt;&lt;img src=&#39;01.jpg&#39; /&gt;&lt;/a&gt;
&lt;style&gt;
.icon{
  -webkit-filter: grayscale(100%);
  -moz-filter: grayscale(100%);
  -ms-filter: grayscale(100%);
  -o-filter: grayscale(100%);   
  filter: grayscale(100%);
  filter: gray;
}
.icon:hover{
  filter: none;
  -webkit-filter: grayscale(0%);
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h3 id="_47\u3001\u56FE\u7247\u81EA\u9002\u5E94object-fit" tabindex="-1"><a class="header-anchor" href="#_47\u3001\u56FE\u7247\u81EA\u9002\u5E94object-fit" aria-hidden="true">#</a> <strong>47\u3001\u56FE\u7247\u81EA\u9002\u5E94object-fit</strong></h3><p>\u5F53\u56FE\u7247\u6BD4\u4F8B\u4E0D\u56FA\u5B9A\u65F6\uFF0C\u60F3\u8981\u8BA9\u56FE\u7247\u81EA\u9002\u5E94\uFF0C\u4E00\u822C\u90FD\u4F1A\u7528background-size:cover/contain\uFF0C\u4F46\u662F\u8FD9\u4E2A\u53EA\u9002\u7528\u4E8E\u80CC\u666F\u56FE\u3002css3\u4E2D\u53EF\u4F7F\u7528object-fit\u5C5E\u6027\u6765\u89E3\u51B3\u56FE\u7247\u88AB\u62C9\u4F38\u6216\u662F\u88AB\u7F29\u653E\u7684\u95EE\u9898\u3002\u4F7F\u7528\u7684\u63D0\u524D\u6761\u4EF6\uFF1A\u56FE\u7247\u7684\u7236\u7EA7\u5BB9\u5668\u8981\u6709\u5BBD\u9AD8\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>fill: \u9ED8\u8BA4\u503C\u3002\u5185\u5BB9\u62C9\u4F38\u586B\u6EE1\u6574\u4E2Acontent box, \u4E0D\u4FDD\u8BC1\u4FDD\u6301\u539F\u6709\u7684\u6BD4\u4F8B\u3002contain: \u4FDD\u6301\u539F\u6709\u5C3A\u5BF8\u6BD4\u4F8B\u3002\u957F\u5EA6\u548C\u9AD8\u5EA6\u4E2D\u957F\u7684\u90A3\u6761\u8FB9\u8DDF\u5BB9\u5668\u5927\u5C0F\u4E00\u81F4\uFF0C\u77ED\u7684\u90A3\u6761\u7B49\u6BD4\u7F29\u653E\uFF0C\u53EF\u80FD\u4F1A\u6709\u7559\u767D\u3002cover: \u4FDD\u6301\u539F\u6709\u5C3A\u5BF8\u6BD4\u4F8B\u3002\u5BBD\u5EA6\u548C\u9AD8\u5EA6\u4E2D\u77ED\u7684\u90A3\u6761\u8FB9\u8DDF\u5BB9\u5668\u5927\u5C0F\u4E00\u81F4\uFF0C\u957F\u7684\u90A3\u6761\u7B49\u6BD4\u7F29\u653E\u3002\u53EF\u80FD\u4F1A\u6709\u90E8\u5206\u533A\u57DF\u4E0D\u53EF\u89C1\u3002\uFF08\u5E38\u7528\uFF09none: \u4FDD\u6301\u539F\u6709\u5C3A\u5BF8\u6BD4\u4F8B\u3002\u540C\u65F6\u4FDD\u6301\u66FF\u6362\u5185\u5BB9\u539F\u59CB\u5C3A\u5BF8\u5927\u5C0F\u3002scale-down:\u4FDD\u6301\u539F\u6709\u5C3A\u5BF8\u6BD4\u4F8B,\u5982\u679C\u5BB9\u5668\u5C3A\u5BF8\u5927\u4E8E\u56FE\u7247\u5185\u5BB9\u5C3A\u5BF8\uFF0C\u4FDD\u6301\u56FE\u7247\u7684\u539F\u6709\u5C3A\u5BF8\uFF0C\u4E0D\u4F1A\u653E\u5927\u5931\u771F\uFF1B\u5BB9\u5668\u5C3A\u5BF8\u5C0F\u4E8E\u56FE\u7247\u5185\u5BB9\u5C3A\u5BF8\uFF0C\u7528\u6CD5\u8DDFcontain\u4E00\u6837\u3002</p><h3 id="_48\u3001\u884C\u5185\u6807\u7B7E\u5143\u7D20\u51FA\u73B0\u95F4\u9699\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#_48\u3001\u884C\u5185\u6807\u7B7E\u5143\u7D20\u51FA\u73B0\u95F4\u9699\u95EE\u9898" aria-hidden="true">#</a> <strong>48\u3001\u884C\u5185\u6807\u7B7E\u5143\u7D20\u51FA\u73B0\u95F4\u9699\u95EE\u9898</strong></h3><p>\u65B9\u5F0F\u4E00\uFF1A\u7236\u7EA7font-size\u8BBE\u7F6E\u4E3A0</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.father{
 font-size:0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u65B9\u5F0F\u4E8C\uFF1A\u7236\u5143\u7D20\u4E0A\u8BBE\u7F6Eword-spacing\u7684\u503C\u4E3A\u5408\u9002\u7684\u8D1F\u503C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.father{
   word-spacing:-2px
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u5176\u5B83\u65B9\u6848\uFF1A1\u5C06\u884C\u5185\u5143\u7D20\u5199\u4E3A1\u884C(\u5F71\u54CD\u9605\u8BFB)\uFF1B2\u4F7F\u7528\u6D6E\u52A8\u6837\u5F0F\uFF08\u4F1A\u5F71\u54CD\u5E03\u5C40\uFF09\u3002</p><h3 id="_49\u3001\u89E3\u51B3vertical-align\u5C5E\u6027\u4E0D\u751F\u6548" tabindex="-1"><a class="header-anchor" href="#_49\u3001\u89E3\u51B3vertical-align\u5C5E\u6027\u4E0D\u751F\u6548" aria-hidden="true">#</a> <strong>49\u3001\u89E3\u51B3vertical-align\u5C5E\u6027\u4E0D\u751F\u6548</strong></h3><p>\u5728\u4F7F\u7528vertical-align:middle\u5B9E\u73B0\u5782\u76F4\u5C45\u4E2D\u7684\u65F6\u5019\uFF0C\u7ECF\u5E38\u4F1A\u53D1\u73B0\u4E0D\u751F\u6548\u7684\u60C5\u51B5\u3002\u8FD9\u91CC\u9700\u8981\u6CE8\u610F\u5B83\u751F\u6548\u9700\u8981\u6EE1\u8DB3\u7684\u6761\u4EF6\uFF1A</p><blockquote><p>**\u4F5C\u7528\u73AF\u5883\uFF1A**\u7236\u5143\u7D20\u8BBE\u7F6Eline-height\u3002\u9700\u8981\u548Cheight\u4E00\u81F4\u3002\u6216\u8005\u5C06display\u5C5E\u6027\u8BBE\u7F6E\u4E3Atable-cell\uFF0C\u5C06\u5757\u5143\u7D20\u8F6C\u5316\u4E3A\u5355\u5143\u683C\u3002 **\u4F5C\u7528\u5BF9\u8C61\uFF1A**\u5B50\u5143\u7D20\u4E2D\u7684inline-block\u548Cinline\u5143\u7D20\u3002</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;div class=&quot;box&quot;&gt;
  &lt;img src=&quot;.\\test.jpg&quot;/&gt;
  &lt;span&gt;\u5185\u90E8\u6587\u5B57&lt;/span&gt;
&lt;/div&gt;
&lt;style&gt;
.box{
  width:300px; 
  line-height: 300px;
  font-size: 16px; 
}
.box img{
  width: 30px; 
  height:30px; 
  vertical-align:middle
}
.box span{
  vertical-align:middle
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>PS\uFF1Avertical-align\u4E0D\u53EF\u7EE7\u627F\uFF0C\u5FC5\u987B\u5BF9\u5B50\u5143\u7D20\u5355\u72EC\u8BBE\u7F6E\u3002\u540C\u65F6\u9700\u8981\u6CE8\u610F\u7684\u662Fline-height\u7684\u9AD8\u5EA6\u57FA\u4E8Efont-size\uFF08\u5373\u5B57\u4F53\u7684\u9AD8\u5EA6\uFF09\uFF0C\u5982\u679C\u6587\u5B57\u8981\u8F6C\u884C\u4F1A\u51FA\u73B0\u5F02\u5E38\u54E6\u3002\u672C\u6587\u5B8C~</p><!--]-->`);
}
const _sfc_setup$v = _sfc_main$v.setup;
_sfc_main$v.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/css/easyToIgnore.html.vue");
  return _sfc_setup$v ? _sfc_setup$v(props, ctx) : void 0;
};
var easyToIgnore_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["ssrRender", _sfc_ssrRender$b], ["__file", "easyToIgnore.html.vue"]]);
var easyToIgnore_html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": easyToIgnore_html$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$u = {};
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="git\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#git\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> Git\u5E38\u7528\u547D\u4EE4</h1><h2 id="\u67E5\u770B\u8FDC\u7A0B\u4ED3\u5E93\u5730\u5740" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u8FDC\u7A0B\u4ED3\u5E93\u5730\u5740" aria-hidden="true">#</a> \u67E5\u770B\u8FDC\u7A0B\u4ED3\u5E93\u5730\u5740</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> remote -v
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="\u5207\u6362\u8FDC\u7A0B\u4ED3\u5E93\u5730\u5740" tabindex="-1"><a class="header-anchor" href="#\u5207\u6362\u8FDC\u7A0B\u4ED3\u5E93\u5730\u5740" aria-hidden="true">#</a> \u5207\u6362\u8FDC\u7A0B\u4ED3\u5E93\u5730\u5740</h2><ol><li><p>\u5207\u6362\u8FDC\u7A0B\u4ED3\u5E93\u5730\u5740</p><p>\u3010git remote set-url origin URL\u3011 \u66F4\u6362\u8FDC\u7A0B\u4ED3\u5E93\u5730\u5740\uFF0CURL\u4E3A\u65B0\u5730\u5740\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> remote set-url origin URL
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li><li><p>\u5148\u5220\u9664\u8FDC\u7A0B\u4ED3\u5E93\u5730\u5740\uFF0C\u7136\u540E\u518D\u6DFB\u52A0</p><p>\u3010git remote rm origin\u3011 \u5220\u9664\u73B0\u6709\u8FDC\u7A0B\u4ED3\u5E93 \u3010git remote add origin url\u3011\u6DFB\u52A0\u65B0\u8FDC\u7A0B\u4ED3\u5E93</p></li></ol><!--]-->`);
}
const _sfc_setup$u = _sfc_main$u.setup;
_sfc_main$u.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/git/common.html.vue");
  return _sfc_setup$u ? _sfc_setup$u(props, ctx) : void 0;
};
var common_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["ssrRender", _sfc_ssrRender$a], ["__file", "common.html.vue"]]);
var common_html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": common_html$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$t = {};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="git\u5F00\u53D1\u6D41\u7A0B\u5EFA\u8BAE" tabindex="-1"><a class="header-anchor" href="#git\u5F00\u53D1\u6D41\u7A0B\u5EFA\u8BAE" aria-hidden="true">#</a> <strong>Git\u5F00\u53D1\u6D41\u7A0B\u5EFA\u8BAE</strong></h1><h2 id="git\u76EE\u524D\u4E3B\u8981\u5206\u652F" tabindex="-1"><a class="header-anchor" href="#git\u76EE\u524D\u4E3B\u8981\u5206\u652F" aria-hidden="true">#</a> <strong>Git\u76EE\u524D\u4E3B\u8981\u5206\u652F</strong></h2><table><thead><tr><th>\u5206\u652F</th><th>\u5907\u6CE8</th><th>\u57DF\u540D</th></tr></thead><tbody><tr><td>master</td><td>\u7EBF\u4E0A\u5206\u652F</td><td>http://\u6B63\u5F0F\u57DF\u540D</td></tr><tr><td>login</td><td>\u6D4B\u8BD5\u5206\u652F</td><td>http://\u6D4B\u8BD5\u57DF\u540D</td></tr><tr><td>\u5F00\u53D1\u5206\u652F</td><td>\u672C\u5730\u5F00\u53D1\u5206\u652F</td><td>localhost</td></tr></tbody></table><h2 id="\u5FAE\u5C0F\u529F\u80FD\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#\u5FAE\u5C0F\u529F\u80FD\u6A21\u5757" aria-hidden="true">#</a> <strong>\u5FAE\u5C0F\u529F\u80FD\u6A21\u5757</strong></h2><p>\u5FAE\u5C0F\u529F\u80FD\u53EF\u76F4\u63A5\u5728 <strong>master</strong> \u5206\u652F\u5F00\u53D1\u5B8C\u6210\u540E\uFF0C\u672C\u5730\u6D4B\u8BD5\uFF0C\u6D4B\u8BD5\u901A\u8FC7\u540E\u76F4\u63A5 <strong>push</strong> \u5230\u7EBF\u4E0A\u5206\u652F\uFF0C\u8FDB\u884C\u4E0A\u7EBF\u3002</p><h2 id="\u4E2D\u5927\u578B\u529F\u80FD\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#\u4E2D\u5927\u578B\u529F\u80FD\u6A21\u5757" aria-hidden="true">#</a> <strong>\u4E2D\u5927\u578B\u529F\u80FD\u6A21\u5757</strong></h2><h4 id="\u65E0\u9700\u6D4B\u8BD5\u6D41\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u65E0\u9700\u6D4B\u8BD5\u6D41\u7A0B" aria-hidden="true">#</a> <strong>\u65E0\u9700\u6D4B\u8BD5\u6D41\u7A0B</strong></h4><p>\u4ECE <strong>master</strong> \u521B\u5EFA\u5206\u652F <strong>\u5206\u652FA</strong> \u8FDB\u884C\u5F00\u53D1\uFF0C\u5F00\u53D1\u5B8C\u6210\u540E\uFF0C\u672C\u5730\u6D4B\u8BD5\u901A\u8FC7\uFF0C\u5408\u5E76\u5230 <strong>master</strong> \u518D\u6B21\u6D4B\u8BD5\u6CA1\u95EE\u9898\u540E\u53EF <strong>push</strong> \u5230\u7EBF\u4E0A\u5206\u652F\uFF0C\u8FDB\u884C\u4E0A\u7EBF\u3002\u4E4B\u540E\u5220\u9664\u672C\u5730\u53CA\u7EBF\u4E0A <strong>\u5206\u652FA\u3002</strong></p><h4 id="\u9700\u6D4B\u8BD5\u6D41\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u9700\u6D4B\u8BD5\u6D41\u7A0B" aria-hidden="true">#</a> <strong>\u9700\u6D4B\u8BD5\u6D41\u7A0B</strong></h4><p>\u4ECE <strong>master</strong> \u521B\u5EFA\u5206\u652F <strong>\u5206\u652FA</strong> \u8FDB\u884C\u5F00\u53D1\uFF0C\u5F00\u53D1\u5B8C\u6210\u540E\uFF0C\u5408\u5E76 <strong>\u5206\u652FA</strong> \u5230 <strong>login</strong> \u5206\u652F\uFF0C<strong>push</strong> \u5230\u7EBF\u4E0A\uFF0C\u4F7F\u7528\u6D4B\u8BD5\u57DF\u540D\u8FDB\u884C\u6D4B\u8BD5\u3002</p><p>\u6D4B\u8BD5\u51FA\u73B0\u95EE\u9898\uFF0C\u7EE7\u7EED\u5728 <strong>\u5206\u652FA</strong> \u4FEE\u590D\u95EE\u9898\u3002\u4FEE\u590D\u5B8C\u6210\u540E\uFF0C\u5408\u5E76\u5230 <strong>login</strong> \u5206\u652F\uFF0C<strong>push</strong> \u5230\u7EBF\u4E0A\uFF0C\u518D\u6B21\u6D4B\u8BD5\u3002</p><p>\u5982\u6D4B\u8BD5\u901A\u8FC7\uFF0C\u5219\u5408\u5E76 <strong>\u5206\u652FA</strong> \u5230 <strong>master</strong> \u5206\u652F\u5E76 <strong>push</strong> \u5230\u7EBF\u4E0A\uFF0C\u8FDB\u884C\u4E0A\u7EBF\u3002\u4E4B\u540E\u5220\u9664\u672C\u5730\u53CA\u7EBF\u4E0A <strong>\u5206\u652FA\u3002</strong></p><p><strong>PS\uFF1A</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>master \u5206\u652F\u53EF\u4EE5\u5408\u5E76\u5230 login \u5206\u652F\uFF0Clogin \u5206\u652F\u4E0D\u8981\u5408\u5E76\u5230 master \u5206\u652F\u3002
\u4E0D\u8981\u5728 login \u5206\u652F\u76F4\u63A5\u5F00\u53D1\u529F\u80FD\u3002
\u5206\u652F\u547D\u540D\u5C3D\u91CF\u4F7F\u7528\u6709\u4EE3\u8868\u6027\u7684\u540D\u79F0\uFF0C\u4E5F\u53EF\u76F4\u63A5\u4F7F\u7528\u4E2D\u6587\uFF0C\u9632\u6B62\u5206\u652F\u8FC7\u591A\u540E\u5206\u8FA8\u4E0D\u6E05\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u65E5\u5E38\u5F00\u53D1\u4E2D\u53D1\u73B0\u6D41\u7A0B\u6709\u95EE\u9898\u53CA\u65F6\u5546\u8BA8\u65B9\u6848\uFF0C\u4FEE\u6539\u73B0\u6709\u6D41\u7A0B\u3002</p><!--]-->`);
}
const _sfc_setup$t = _sfc_main$t.setup;
_sfc_main$t.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/git/development.html.vue");
  return _sfc_setup$t ? _sfc_setup$t(props, ctx) : void 0;
};
var development_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["ssrRender", _sfc_ssrRender$9], ["__file", "development.html.vue"]]);
var development_html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": development_html$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$s = {};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="npm\u8BBE\u7F6E\u6DD8\u5B9D\u6E90" tabindex="-1"><a class="header-anchor" href="#npm\u8BBE\u7F6E\u6DD8\u5B9D\u6E90" aria-hidden="true">#</a> npm\u8BBE\u7F6E\u6DD8\u5B9D\u6E90</h1><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> config <span class="token builtin class-name">set</span> registry http://registry.npm.taobao.org/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u8FD8\u539F</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> config <span class="token builtin class-name">set</span> registry https://registry.npmjs.org/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><!--]-->`);
}
const _sfc_setup$s = _sfc_main$s.setup;
_sfc_main$s.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/npm/configRegistry.html.vue");
  return _sfc_setup$s ? _sfc_setup$s(props, ctx) : void 0;
};
var configRegistry_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["ssrRender", _sfc_ssrRender$8], ["__file", "configRegistry.html.vue"]]);
var configRegistry_html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": configRegistry_html$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$r = {};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="linux-\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#linux-\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> Linux \u5E38\u7528\u547D\u4EE4</h1><h2 id="\u67E5\u627E\u76EE\u5F55" tabindex="-1"><a class="header-anchor" href="#\u67E5\u627E\u76EE\u5F55" aria-hidden="true">#</a> \u67E5\u627E\u76EE\u5F55</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">find</span> / -name <span class="token string">&#39;\u67E5\u627E\u5173\u952E\u5B57&#39;</span> -type d
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><strong>tips:</strong> <code>/</code> \u4E3A\u67E5\u627E\u8303\u56F4</p><h2 id="\u67E5\u627E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u67E5\u627E\u6587\u4EF6" aria-hidden="true">#</a> \u67E5\u627E\u6587\u4EF6</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">find</span> / -name <span class="token string">&#39;\u67E5\u627E\u5173\u952E\u5B57&#39;</span> -print
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="\u89E3\u538B\u538B\u7F29\u5305" tabindex="-1"><a class="header-anchor" href="#\u89E3\u538B\u538B\u7F29\u5305" aria-hidden="true">#</a> \u89E3\u538B\u538B\u7F29\u5305</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">tar</span> -zxvf \u538B\u7F29\u5305\u540D\u79F0
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="\u4E00\u3001\u6587\u4EF6\u548C\u76EE\u5F55" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u6587\u4EF6\u548C\u76EE\u5F55" aria-hidden="true">#</a> <strong>\u4E00\u3001\u6587\u4EF6\u548C\u76EE\u5F55</strong></h2><h3 id="_1-cd\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#_1-cd\u547D\u4EE4" aria-hidden="true">#</a> <strong>1. cd\u547D\u4EE4</strong></h3><p>\u5B83\u7528\u4E8E\u5207\u6362\u5F53\u524D\u76EE\u5F55\uFF0C\u5B83\u7684\u53C2\u6570\u662F\u8981\u5207\u6362\u5230\u7684\u76EE\u5F55\u7684\u8DEF\u5F84\uFF0C\u53EF\u4EE5\u662F\u7EDD\u5BF9\u8DEF\u5F84\uFF0C\u4E5F\u53EF\u4EE5\u662F\u76F8\u5BF9\u8DEF\u5F84\uFF1A</p><ul><li>cd /home \u8FDB\u5165 &#39;/ home&#39; \u76EE\u5F55</li><li>cd .. \u8FD4\u56DE\u4E0A\u4E00\u7EA7\u76EE\u5F55</li><li>cd ../.. \u8FD4\u56DE\u4E0A\u4E24\u7EA7\u76EE\u5F55</li><li>cd \u8FDB\u5165\u4E2A\u4EBA\u7684\u4E3B\u76EE\u5F55</li><li>cd ~user1 \u8FDB\u5165\u4E2A\u4EBA\u7684\u4E3B\u76EE\u5F55</li><li>cd - \u8FD4\u56DE\u4E0A\u6B21\u6240\u5728\u7684\u76EE\u5F55</li></ul><h3 id="_2-pwd\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#_2-pwd\u547D\u4EE4" aria-hidden="true">#</a> <strong>2. pwd\u547D\u4EE4</strong></h3><p>pwd \u663E\u793A\u5DE5\u4F5C\u8DEF\u5F84</p><h3 id="_3-ls\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#_3-ls\u547D\u4EE4" aria-hidden="true">#</a> <strong>3. ls\u547D\u4EE4</strong></h3><p>\u67E5\u770B\u6587\u4EF6\u4E0E\u76EE\u5F55\u7684\u547D\u4EE4\uFF0Clist\u4E4B\u610F\uFF1A</p><ul><li>ls \u67E5\u770B\u76EE\u5F55\u4E2D\u7684\u6587\u4EF6</li><li>ls -l \u663E\u793A\u6587\u4EF6\u548C\u76EE\u5F55\u7684\u8BE6\u7EC6\u8D44\u6599</li><li>ls -a \u5217\u51FA\u5168\u90E8\u6587\u4EF6\uFF0C\u5305\u542B\u9690\u85CF\u6587\u4EF6</li><li>ls -R \u8FDE\u540C\u5B50\u76EE\u5F55\u7684\u5185\u5BB9\u4E00\u8D77\u5217\u51FA\uFF08\u9012\u5F52\u5217\u51FA\uFF09\uFF0C\u7B49\u4E8E\u8BE5\u76EE\u5F55\u4E0B\u7684\u6240\u6709\u6587\u4EF6\u90FD\u4F1A\u663E\u793A\u51FA\u6765</li><li>ls [0-9] \u663E\u793A\u5305\u542B\u6570\u5B57\u7684\u6587\u4EF6\u540D\u548C\u76EE\u5F55\u540D</li></ul><h3 id="_4-cp-\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#_4-cp-\u547D\u4EE4" aria-hidden="true">#</a> <strong>4. cp \u547D\u4EE4</strong></h3><p>\u7528\u4E8E\u590D\u5236\u6587\u4EF6\uFF0Ccopy\u4E4B\u610F\uFF0C\u5B83\u8FD8\u53EF\u4EE5\u628A\u591A\u4E2A\u6587\u4EF6\u4E00\u6B21\u6027\u5730\u590D\u5236\u5230\u4E00\u4E2A\u76EE\u5F55\u4E0B\uFF1A</p><ul><li>-a \uFF1A\u5C06\u6587\u4EF6\u7684\u7279\u6027\u4E00\u8D77\u590D\u5236</li><li>-p \uFF1A\u8FDE\u540C\u6587\u4EF6\u7684\u5C5E\u6027\u4E00\u8D77\u590D\u5236\uFF0C\u800C\u975E\u4F7F\u7528\u9ED8\u8BA4\u65B9\u5F0F\uFF0C\u4E0E-a\u76F8\u4F3C\uFF0C\u5E38\u7528\u4E8E\u5907\u4EFD</li><li>-i \uFF1A\u82E5\u76EE\u6807\u6587\u4EF6\u5DF2\u7ECF\u5B58\u5728\u65F6\uFF0C\u5728\u8986\u76D6\u65F6\u4F1A\u5148\u8BE2\u95EE\u64CD\u4F5C\u7684\u8FDB\u884C</li><li>-r \uFF1A\u9012\u5F52\u6301\u7EED\u590D\u5236\uFF0C\u7528\u4E8E\u76EE\u5F55\u7684\u590D\u5236\u884C\u4E3A</li><li>-u \uFF1A\u76EE\u6807\u6587\u4EF6\u4E0E\u6E90\u6587\u4EF6\u6709\u5DEE\u5F02\u65F6\u624D\u4F1A\u590D\u5236</li></ul><p><strong>eg.</strong></p><h4 id="\u590D\u5236\u6587\u4EF6\u5230\u6307\u5B9A\u76EE\u5F55" tabindex="-1"><a class="header-anchor" href="#\u590D\u5236\u6587\u4EF6\u5230\u6307\u5B9A\u76EE\u5F55" aria-hidden="true">#</a> \u590D\u5236\u6587\u4EF6\u5230\u6307\u5B9A\u76EE\u5F55</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cp</span> filename /www/wwwroot
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="\u590D\u5236\u6587\u4EF6\u5939\u5230\u53E6\u4E00\u4E2A\u4F4D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u590D\u5236\u6587\u4EF6\u5939\u5230\u53E6\u4E00\u4E2A\u4F4D\u7F6E" aria-hidden="true">#</a> \u590D\u5236\u6587\u4EF6\u5939\u5230\u53E6\u4E00\u4E2A\u4F4D\u7F6E</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cp</span> -pir /www/wwwroot/ao_dan_si/vendor /www/wwwroot/bak_dir/vendor
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="_5-mv\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#_5-mv\u547D\u4EE4" aria-hidden="true">#</a> <strong>5. mv\u547D\u4EE4</strong></h3><p>\u7528\u4E8E\u79FB\u52A8\u6587\u4EF6\u3001\u76EE\u5F55\u6216\u66F4\u540D\uFF0Cmove\u4E4B\u610F\uFF1A</p><ul><li>-f \uFF1Aforce\u5F3A\u5236\u7684\u610F\u601D\uFF0C\u5982\u679C\u76EE\u6807\u6587\u4EF6\u5DF2\u7ECF\u5B58\u5728\uFF0C\u4E0D\u4F1A\u8BE2\u95EE\u800C\u76F4\u63A5\u8986\u76D6</li><li>-i \uFF1A\u82E5\u76EE\u6807\u6587\u4EF6\u5DF2\u7ECF\u5B58\u5728\uFF0C\u5C31\u4F1A\u8BE2\u95EE\u662F\u5426\u8986\u76D6</li><li>-u \uFF1A\u82E5\u76EE\u6807\u6587\u4EF6\u5DF2\u7ECF\u5B58\u5728\uFF0C\u4E14\u6BD4\u76EE\u6807\u6587\u4EF6\u65B0\uFF0C\u624D\u4F1A\u66F4\u65B0</li></ul><h3 id="_6-rm-\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#_6-rm-\u547D\u4EE4" aria-hidden="true">#</a> <strong>6. rm \u547D\u4EE4</strong></h3><p>\u7528\u4E8E\u5220\u9664\u6587\u4EF6\u6216\u76EE\u5F55\uFF0Cremove\u4E4B\u610F\uFF1A</p><ul><li>-f \uFF1A\u5C31\u662Fforce\u7684\u610F\u601D\uFF0C\u5FFD\u7565\u4E0D\u5B58\u5728\u7684\u6587\u4EF6\uFF0C\u4E0D\u4F1A\u51FA\u73B0\u8B66\u544A\u6D88\u606F</li><li>-i \uFF1A\u4E92\u52A8\u6A21\u5F0F\uFF0C\u5728\u5220\u9664\u524D\u4F1A\u8BE2\u95EE\u7528\u6237\u662F\u5426\u64CD\u4F5C</li><li>-r \uFF1A\u9012\u5F52\u5220\u9664\uFF0C\u6700\u5E38\u7528\u4E8E\u76EE\u5F55\u5220\u9664\uFF0C\u5B83\u662F\u4E00\u4E2A\u975E\u5E38\u5371\u9669\u7684\u53C2\u6570</li></ul><blockquote><p>\u5220\u9664\u5F53\u524D\u76EE\u5F55\u4E0B\u6240\u6709\u6587\u4EF6</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">rm</span> -rf *
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="\u4E8C\u3001\u67E5\u770B\u6587\u4EF6\u5185\u5BB9" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u67E5\u770B\u6587\u4EF6\u5185\u5BB9" aria-hidden="true">#</a> <strong>\u4E8C\u3001\u67E5\u770B\u6587\u4EF6\u5185\u5BB9</strong></h2><h3 id="_7-cat\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#_7-cat\u547D\u4EE4" aria-hidden="true">#</a> <strong>7. cat\u547D\u4EE4</strong></h3><p>\u7528\u4E8E\u67E5\u770B\u6587\u672C\u6587\u4EF6\u7684\u5185\u5BB9\uFF0C\u540E\u63A5\u8981\u67E5\u770B\u7684\u6587\u4EF6\u540D\uFF0C\u901A\u5E38\u53EF\u7528\u7BA1\u9053\u4E0Emore\u548Cless\u4E00\u8D77\u4F7F\u7528\uFF1A</p><ul><li><p>cat file1 \u4ECE\u7B2C\u4E00\u4E2A\u5B57\u8282\u5F00\u59CB\u6B63\u5411\u67E5\u770B\u6587\u4EF6\u7684\u5185\u5BB9</p></li><li><p>tac file1 \u4ECE\u6700\u540E\u4E00\u884C\u5F00\u59CB\u53CD\u5411\u67E5\u770B\u4E00\u4E2A\u6587\u4EF6\u7684\u5185\u5BB9</p></li><li><p>cat -n file1 \u6807\u793A\u6587\u4EF6\u7684\u884C\u6570</p></li><li><p>more file1 \u67E5\u770B\u4E00\u4E2A\u957F\u6587\u4EF6\u7684\u5185\u5BB9</p></li><li><p>head -n 2 file1 \u67E5\u770B\u4E00\u4E2A\u6587\u4EF6\u7684\u524D\u4E24\u884C</p></li><li><p>tail -n 2 file1 \u67E5\u770B\u4E00\u4E2A\u6587\u4EF6\u7684\u6700\u540E\u4E24\u884C</p></li><li><p>tail -n +1000 file1 \u4ECE1000\u884C\u5F00\u59CB\u663E\u793A\uFF0C\u663E\u793A1000\u884C\u4EE5\u540E\u7684</p></li><li><p>cat filename | head -n 3000 | tail -n +1000 \u663E\u793A1000\u884C\u52303000\u884C</p></li><li><p>cat filename | tail -n +3000 | head -n 1000 \u4ECE\u7B2C3000\u884C\u5F00\u59CB\uFF0C\u663E\u793A1000(\u5373\u663E\u793A3000~3999\u884C)</p></li></ul><h2 id="\u4E09\u3001\u6587\u4EF6\u641C\u7D22" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u6587\u4EF6\u641C\u7D22" aria-hidden="true">#</a> <strong>\u4E09\u3001\u6587\u4EF6\u641C\u7D22</strong></h2><h3 id="_8-find\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#_8-find\u547D\u4EE4" aria-hidden="true">#</a> <strong>8. find\u547D\u4EE4\uFF08\uFF09</strong></h3><ul><li>find / -name file1 \u4ECE &#39;/&#39; \u5F00\u59CB\u8FDB\u5165\u6839\u6587\u4EF6\u7CFB\u7EDF\u641C\u7D22\u6587\u4EF6\u548C\u76EE\u5F55</li><li>find / -user user1 \u641C\u7D22\u5C5E\u4E8E\u7528\u6237 &#39;user1&#39; \u7684\u6587\u4EF6\u548C\u76EE\u5F55</li><li>find /usr/bin -type f -atime +100 \u641C\u7D22\u5728\u8FC7\u53BB100\u5929\u5185\u672A\u88AB\u4F7F\u7528\u8FC7\u7684\u6267\u884C\u6587\u4EF6</li><li>find /usr/bin -type f -mtime -10 \u641C\u7D22\u572810\u5929\u5185\u88AB\u521B\u5EFA\u6216\u8005\u4FEE\u6539\u8FC7\u7684\u6587\u4EF6</li><li>whereis halt \u663E\u793A\u4E00\u4E2A\u4E8C\u8FDB\u5236\u6587\u4EF6\u3001\u6E90\u7801\u6216man\u7684\u4F4D\u7F6E</li><li>which halt \u663E\u793A\u4E00\u4E2A\u4E8C\u8FDB\u5236\u6587\u4EF6\u6216\u53EF\u6267\u884C\u6587\u4EF6\u7684\u5B8C\u6574\u8DEF\u5F84</li></ul><p>\u5220\u9664\u5927\u4E8E50M\u7684\u6587\u4EF6\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">find</span> /var/mail/ -size +50M -exec <span class="token function">rm</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> \uFF3C<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="\u56DB\u3001\u6587\u4EF6\u7684\u6743\u9650" tabindex="-1"><a class="header-anchor" href="#\u56DB\u3001\u6587\u4EF6\u7684\u6743\u9650" aria-hidden="true">#</a> <strong>\u56DB\u3001\u6587\u4EF6\u7684\u6743\u9650</strong></h2><p>\u4F7F\u7528 &quot;+&quot; \u8BBE\u7F6E\u6743\u9650\uFF0C\u4F7F\u7528 &quot;-&quot; \u7528\u4E8E\u53D6\u6D88\u641C\u7D22\u516C\u4F17\u53F7Linux\u4E2D\u6587\u793E\u533A\u540E\u53F0\u56DE\u590D\u201C\u547D\u4EE4\u884C\u201D\uFF0C\u83B7\u53D6\u4E00\u4EFD\u60CA\u559C\u793C\u5305\u3002</p><h3 id="_9-chmod-\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#_9-chmod-\u547D\u4EE4" aria-hidden="true">#</a> <strong>9. chmod \u547D\u4EE4</strong></h3><ul><li>ls -lh \u663E\u793A\u6743\u9650</li><li>chmod ugo+rwx directory1 \u8BBE\u7F6E\u76EE\u5F55\u7684\u6240\u6709\u4EBA(u)\u3001\u7FA4\u7EC4(g)\u4EE5\u53CA\u5176\u4ED6\u4EBA(o)\u4EE5\u8BFB\uFF08r\uFF0C4 \uFF09\u3001\u5199(w\uFF0C2)\u548C\u6267\u884C(x\uFF0C1)\u7684\u6743\u9650</li><li>chmod go-rwx directory1 \u5220\u9664\u7FA4\u7EC4(g)\u4E0E\u5176\u4ED6\u4EBA(o)\u5BF9\u76EE\u5F55\u7684\u8BFB\u5199\u6267\u884C\u6743\u9650</li></ul><h3 id="_10-chown-\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#_10-chown-\u547D\u4EE4" aria-hidden="true">#</a> <strong>10. chown \u547D\u4EE4</strong></h3><p>\u6539\u53D8\u6587\u4EF6\u7684\u6240\u6709\u8005\uFF1A</p><ul><li>chown user1 file1 \u6539\u53D8\u4E00\u4E2A\u6587\u4EF6\u7684\u6240\u6709\u4EBA\u5C5E\u6027</li><li>chown -R user1 directory1 \u6539\u53D8\u4E00\u4E2A\u76EE\u5F55\u7684\u6240\u6709\u4EBA\u5C5E\u6027\u5E76\u540C\u65F6\u6539\u53D8\u6539\u76EE\u5F55\u4E0B\u6240\u6709\u6587\u4EF6\u7684\u5C5E\u6027</li><li>chown user1:group1 file1 \u6539\u53D8\u4E00\u4E2A\u6587\u4EF6\u7684\u6240\u6709\u4EBA\u548C\u7FA4\u7EC4\u5C5E\u6027</li></ul><h3 id="_11-chgrp-\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#_11-chgrp-\u547D\u4EE4" aria-hidden="true">#</a> <strong>11. chgrp \u547D\u4EE4</strong></h3><p>\u6539\u53D8\u6587\u4EF6\u6240\u5C5E\u7528\u6237\u7EC4\uFF1A</p><ul><li>chgrp group1 file1 \u6539\u53D8\u6587\u4EF6\u7684\u7FA4\u7EC4</li></ul><h2 id="\u4E94\u3001\u6587\u672C\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#\u4E94\u3001\u6587\u672C\u5904\u7406" aria-hidden="true">#</a> <strong>\u4E94\u3001\u6587\u672C\u5904\u7406</strong></h2><h3 id="_12-grep-\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#_12-grep-\u547D\u4EE4" aria-hidden="true">#</a> <strong>12. grep \u547D\u4EE4</strong></h3><p>\u5206\u6790\u4E00\u884C\u7684\u4FE1\u606F\uFF0C\u82E5\u5F53\u4E2D\u6709\u6211\u4EEC\u6240\u9700\u8981\u7684\u4FE1\u606F\uFF0C\u5C31\u5C06\u8BE5\u884C\u663E\u793A\u51FA\u6765\uFF0C\u8BE5\u547D\u4EE4\u901A\u5E38\u4E0E\u7BA1\u9053\u547D\u4EE4\u4E00\u8D77\u4F7F\u7528\uFF0C\u7528\u4E8E\u5BF9\u4E00\u4E9B\u547D\u4EE4\u7684\u8F93\u51FA\u8FDB\u884C\u7B5B\u9009\u52A0\u5DE5\u7B49\u7B49\uFF1A</p><ul><li>grep Aug /var/log/messages \u5728\u6587\u4EF6 &#39;/var/log/messages&#39;\u4E2D\u67E5\u627E\u5173\u952E\u8BCD&quot;Aug&quot;</li><li>grep ^Aug /var/log/messages \u5728\u6587\u4EF6 &#39;/var/log/messages&#39;\u4E2D\u67E5\u627E\u4EE5&quot;Aug&quot;\u5F00\u59CB\u7684\u8BCD\u6C47</li><li>grep [0-9] /var/log/messages \u9009\u62E9 &#39;/var/log/messages&#39; \u6587\u4EF6\u4E2D\u6240\u6709\u5305\u542B\u6570\u5B57\u7684\u884C</li><li>grep Aug -R /var/log/* \u5728\u76EE\u5F55 &#39;/var/log&#39; \u53CA\u968F\u540E\u7684\u76EE\u5F55\u4E2D\u641C\u7D22\u5B57\u7B26\u4E32&quot;Aug&quot;</li><li>sed &#39;s/stringa1/stringa2/g&#39; example.txt \u5C06example.txt\u6587\u4EF6\u4E2D\u7684 &quot;string1&quot; \u66FF\u6362\u6210 &quot;string2&quot;</li><li>sed &#39;/^$/d&#39; example.txt \u4ECEexample.txt\u6587\u4EF6\u4E2D\u5220\u9664\u6240\u6709\u7A7A\u767D\u884C\uFF08\u641C\u7D22\u516C\u4F17\u53F7Java\u77E5\u97F3\uFF0C\u56DE\u590D\u201C2021\u201D\uFF0C\u9001\u4F60\u4E00\u4EFDJava\u9762\u8BD5\u9898\u5B9D\u5178\uFF09</li></ul><h3 id="_13-paste-\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#_13-paste-\u547D\u4EE4" aria-hidden="true">#</a> <strong>13. paste \u547D\u4EE4</strong></h3><ul><li>paste file1 file2 \u5408\u5E76\u4E24\u4E2A\u6587\u4EF6\u6216\u4E24\u680F\u7684\u5185\u5BB9</li><li>paste -d &#39;+&#39; file1 file2 \u5408\u5E76\u4E24\u4E2A\u6587\u4EF6\u6216\u4E24\u680F\u7684\u5185\u5BB9\uFF0C\u4E2D\u95F4\u7528&quot;+&quot;\u533A\u5206</li></ul><h3 id="_14-sort-\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#_14-sort-\u547D\u4EE4" aria-hidden="true">#</a> <strong>14. sort \u547D\u4EE4</strong></h3><ul><li>sort file1 file2 \u6392\u5E8F\u4E24\u4E2A\u6587\u4EF6\u7684\u5185\u5BB9</li><li>sort file1 file2 | uniq \u53D6\u51FA\u4E24\u4E2A\u6587\u4EF6\u7684\u5E76\u96C6(\u91CD\u590D\u7684\u884C\u53EA\u4FDD\u7559\u4E00\u4EFD)</li><li>sort file1 file2 | uniq -u \u5220\u9664\u4EA4\u96C6\uFF0C\u7559\u4E0B\u5176\u4ED6\u7684\u884C</li><li>sort file1 file2 | uniq -d \u53D6\u51FA\u4E24\u4E2A\u6587\u4EF6\u7684\u4EA4\u96C6(\u53EA\u7559\u4E0B\u540C\u65F6\u5B58\u5728\u4E8E\u4E24\u4E2A\u6587\u4EF6\u4E2D\u7684\u6587\u4EF6)</li></ul><h3 id="_15-comm-\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#_15-comm-\u547D\u4EE4" aria-hidden="true">#</a> 15. comm \u547D\u4EE4</h3><ul><li>comm -1 file1 file2 \u6BD4\u8F83\u4E24\u4E2A\u6587\u4EF6\u7684\u5185\u5BB9\u53EA\u5220\u9664 &#39;file1&#39; \u6240\u5305\u542B\u7684\u5185\u5BB9</li><li>comm -2 file1 file2 \u6BD4\u8F83\u4E24\u4E2A\u6587\u4EF6\u7684\u5185\u5BB9\u53EA\u5220\u9664 &#39;file2&#39; \u6240\u5305\u542B\u7684\u5185\u5BB9</li><li>comm -3 file1 file2 \u6BD4\u8F83\u4E24\u4E2A\u6587\u4EF6\u7684\u5185\u5BB9\u53EA\u5220\u9664\u4E24\u4E2A\u6587\u4EF6\u5171\u6709\u7684\u90E8\u5206</li></ul><h2 id="\u516D\u3001\u6253\u5305\u548C\u538B\u7F29\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u516D\u3001\u6253\u5305\u548C\u538B\u7F29\u6587\u4EF6" aria-hidden="true">#</a> <strong>\u516D\u3001\u6253\u5305\u548C\u538B\u7F29\u6587\u4EF6</strong></h2><h3 id="_16-tar-\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#_16-tar-\u547D\u4EE4" aria-hidden="true">#</a> <strong>16. tar \u547D\u4EE4</strong></h3><p>\u5BF9\u6587\u4EF6\u8FDB\u884C\u6253\u5305\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u5E76\u4E0D\u4F1A\u538B\u7F29\uFF0C\u5982\u679C\u6307\u5B9A\u4E86\u76F8\u5E94\u7684\u53C2\u6570\uFF0C\u5B83\u8FD8\u4F1A\u8C03\u7528\u76F8\u5E94\u7684\u538B\u7F29\u7A0B\u5E8F\uFF08\u5982gzip\u548Cbzip\u7B49\uFF09\u8FDB\u884C\u538B\u7F29\u548C\u89E3\u538B\uFF1A</p><ul><li><p>-c \uFF1A\u65B0\u5EFA\u6253\u5305\u6587\u4EF6</p></li><li><p>-t \uFF1A\u67E5\u770B\u6253\u5305\u6587\u4EF6\u7684\u5185\u5BB9\u542B\u6709\u54EA\u4E9B\u6587\u4EF6\u540D</p></li><li><p>-x \uFF1A\u89E3\u6253\u5305\u6216\u89E3\u538B\u7F29\u7684\u529F\u80FD\uFF0C\u53EF\u4EE5\u642D\u914D-C\uFF08\u5927\u5199\uFF09\u6307\u5B9A\u89E3\u538B\u7684\u76EE\u5F55\uFF0C\u6CE8\u610F-c,-t,-x\u4E0D\u80FD\u540C\u65F6\u51FA\u73B0\u5728\u540C\u4E00\u6761\u547D\u4EE4\u4E2D</p></li><li><p>-j \uFF1A\u901A\u8FC7bzip2\u7684\u652F\u6301\u8FDB\u884C\u538B\u7F29/\u89E3\u538B\u7F29</p></li><li><p>-z \uFF1A\u901A\u8FC7gzip\u7684\u652F\u6301\u8FDB\u884C\u538B\u7F29/\u89E3\u538B\u7F29</p></li><li><p>-v \uFF1A\u5728\u538B\u7F29/\u89E3\u538B\u7F29\u8FC7\u7A0B\u4E2D\uFF0C\u5C06\u6B63\u5728\u5904\u7406\u7684\u6587\u4EF6\u540D\u663E\u793A\u51FA\u6765</p></li><li><p>-f filename \uFF1Afilename\u4E3A\u8981\u5904\u7406\u7684\u6587\u4EF6</p></li><li><p>-C dir \uFF1A\u6307\u5B9A\u538B\u7F29/\u89E3\u538B\u7F29\u7684\u76EE\u5F55dir</p></li><li><p><strong>\u538B\u7F29</strong>\uFF1Atar -jcv -f filename.tar.bz2 \u8981\u88AB\u5904\u7406\u7684\u6587\u4EF6\u6216\u76EE\u5F55\u540D\u79F0</p></li><li><p><strong>\u67E5\u8BE2</strong>\uFF1Atar -jtv -f filename.tar.bz2</p></li><li><p><strong>\u89E3\u538B</strong>\uFF1Atar -jxv -f filename.tar.bz2 -C \u6B32\u89E3\u538B\u7F29\u7684\u76EE\u5F55</p></li><li><p>bunzip2 file1.bz2 \u89E3\u538B\u4E00\u4E2A\u53EB\u505A &#39;file1.bz2&#39;\u7684\u6587\u4EF6</p></li><li><p>bzip2 file1 \u538B\u7F29\u4E00\u4E2A\u53EB\u505A &#39;file1&#39; \u7684\u6587\u4EF6</p></li><li><p>gunzip file1.gz \u89E3\u538B\u4E00\u4E2A\u53EB\u505A &#39;file1.gz&#39;\u7684\u6587\u4EF6</p></li><li><p>gzip file1 \u538B\u7F29\u4E00\u4E2A\u53EB\u505A &#39;file1&#39;\u7684\u6587\u4EF6</p></li><li><p>gzip -9 file1 \u6700\u5927\u7A0B\u5EA6\u538B\u7F29</p></li><li><p>rar a file1.rar test_file \u521B\u5EFA\u4E00\u4E2A\u53EB\u505A &#39;file1.rar&#39; \u7684\u5305</p></li><li><p>rar a file1.rar file1 file2 dir1 \u540C\u65F6\u538B\u7F29 &#39;file1&#39;, &#39;file2&#39; \u4EE5\u53CA\u76EE\u5F55 &#39;dir1&#39;</p></li><li><p>rar x file1.rar \u89E3\u538Brar\u5305</p></li><li><p>zip file1.zip file1 \u521B\u5EFA\u4E00\u4E2Azip\u683C\u5F0F\u7684\u538B\u7F29\u5305</p></li><li><p>unzip file1.zip \u89E3\u538B\u4E00\u4E2Azip\u683C\u5F0F\u538B\u7F29\u5305</p></li><li><p>zip -r file1.zip file1 file2 dir1 \u5C06\u51E0\u4E2A\u6587\u4EF6\u548C\u76EE\u5F55\u540C\u65F6\u538B\u7F29\u6210\u4E00\u4E2Azip\u683C\u5F0F\u7684\u538B\u7F29\u5305</p></li></ul><p><strong>eg.</strong></p><h4 id="\u89E3\u538B\u6587\u4EF6-tar-gz" tabindex="-1"><a class="header-anchor" href="#\u89E3\u538B\u6587\u4EF6-tar-gz" aria-hidden="true">#</a> \u89E3\u538B\u6587\u4EF6 tar.gz</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">tar</span> -zxvf Mycat-server-1.6.7.6-test-20201104174609-linux.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="\u4E03\u3001\u7CFB\u7EDF\u548C\u5173\u673A-\u7CFB\u7EDF\u7684\u5173\u673A\u3001\u91CD\u542F\u4EE5\u53CA\u767B\u51FA" tabindex="-1"><a class="header-anchor" href="#\u4E03\u3001\u7CFB\u7EDF\u548C\u5173\u673A-\u7CFB\u7EDF\u7684\u5173\u673A\u3001\u91CD\u542F\u4EE5\u53CA\u767B\u51FA" aria-hidden="true">#</a> <strong>\u4E03\u3001\u7CFB\u7EDF\u548C\u5173\u673A (\u7CFB\u7EDF\u7684\u5173\u673A\u3001\u91CD\u542F\u4EE5\u53CA\u767B\u51FA )</strong></h2><ul><li>shutdown -h now \u5173\u95ED\u7CFB\u7EDF(1)</li><li>init 0 \u5173\u95ED\u7CFB\u7EDF(2)</li><li>telinit 0 \u5173\u95ED\u7CFB\u7EDF(3)</li><li>shutdown -h hours:minutes &amp; \u6309\u9884\u5B9A\u65F6\u95F4\u5173\u95ED\u7CFB\u7EDF</li><li>shutdown -c \u53D6\u6D88\u6309\u9884\u5B9A\u65F6\u95F4\u5173\u95ED\u7CFB\u7EDF</li><li>shutdown -r now \u91CD\u542F(1)</li><li>reboot \u91CD\u542F(2)</li><li>logout \u6CE8\u9500</li><li>time \u6D4B\u7B97\u4E00\u4E2A\u547D\u4EE4\uFF08\u5373\u7A0B\u5E8F\uFF09\u7684\u6267\u884C\u65F6\u95F4</li></ul><p><strong>\u516B\u3001\u8FDB\u7A0B\u76F8\u5173\u7684\u547D\u4EE4</strong></p><h3 id="_17\u3001jps\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#_17\u3001jps\u547D\u4EE4" aria-hidden="true">#</a> 17\u3001jps\u547D\u4EE4</h3><p>\u663E\u793A\u5F53\u524D\u7CFB\u7EDF\u7684java\u8FDB\u7A0B\u60C5\u51B5\uFF0C\u53CA\u5176id\u53F7\uFF1A</p><ul><li>jps(Java Virtual Machine Process Status Tool)\u662FJDK 1.5\u63D0\u4F9B\u7684\u4E00\u4E2A\u663E\u793A\u5F53\u524D\u6240\u6709java\u8FDB\u7A0Bpid\u7684\u547D\u4EE4\uFF0C\u7B80\u5355\u5B9E\u7528\uFF0C\u975E\u5E38\u9002\u5408\u5728linux/unix\u5E73\u53F0\u4E0A\u7B80\u5355\u5BDF\u770B\u5F53\u524Djava\u8FDB\u7A0B\u7684\u4E00\u4E9B\u7B80\u5355\u60C5\u51B5\u3002</li></ul><h3 id="_18\u3001ps\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#_18\u3001ps\u547D\u4EE4" aria-hidden="true">#</a> 18\u3001ps\u547D\u4EE4</h3><p>\u7528\u4E8E\u5C06\u67D0\u4E2A\u65F6\u95F4\u70B9\u7684\u8FDB\u7A0B\u8FD0\u884C\u60C5\u51B5\u9009\u53D6\u4E0B\u6765\u5E76\u8F93\u51FA\uFF0Cprocess\u4E4B\u610F\uFF1A</p><ul><li>-A \uFF1A\u6240\u6709\u7684\u8FDB\u7A0B\u5747\u663E\u793A\u51FA\u6765</li><li>-a \uFF1A\u4E0D\u4E0Eterminal\u6709\u5173\u7684\u6240\u6709\u8FDB\u7A0B</li><li>-u \uFF1A\u6709\u6548\u7528\u6237\u7684\u76F8\u5173\u8FDB\u7A0B</li><li>-x \uFF1A\u4E00\u822C\u4E0Ea\u53C2\u6570\u4E00\u8D77\u4F7F\u7528\uFF0C\u53EF\u5217\u51FA\u8F83\u5B8C\u6574\u7684\u4FE1\u606F</li><li>-l \uFF1A\u8F83\u957F\uFF0C\u8F83\u8BE6\u7EC6\u5730\u5C06PID\u7684\u4FE1\u606F\u5217\u51FA</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">ps</span> aux <span class="token comment"># \u67E5\u770B\u7CFB\u7EDF\u6240\u6709\u7684\u8FDB\u7A0B\u6570\u636E</span>
<span class="token function">ps</span> ax <span class="token comment"># \u67E5\u770B\u4E0D\u4E0Eterminal\u6709\u5173\u7684\u6240\u6709\u8FDB\u7A0B</span>
<span class="token function">ps</span> -lA <span class="token comment"># \u67E5\u770B\u7CFB\u7EDF\u6240\u6709\u7684\u8FDB\u7A0B\u6570\u636E</span>
<span class="token function">ps</span> axjf <span class="token comment"># \u67E5\u770B\u8FDE\u540C\u4E00\u90E8\u5206\u8FDB\u7A0B\u6811\u72B6\u6001</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="_19-kill\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#_19-kill\u547D\u4EE4" aria-hidden="true">#</a> <strong>19. kill\u547D\u4EE4</strong></h3><p>\u7528\u4E8E\u5411\u67D0\u4E2A\u5DE5\u4F5C\uFF08%jobnumber\uFF09\u6216\u8005\u662F\u67D0\u4E2APID\uFF08\u6570\u5B57\uFF09\u4F20\u9001\u4E00\u4E2A\u4FE1\u53F7\uFF0C\u5B83\u901A\u5E38\u4E0Eps\u548Cjobs\u547D\u4EE4\u4E00\u8D77\u4F7F\u7528\uFF1A</p><h3 id="_20-killall\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#_20-killall\u547D\u4EE4" aria-hidden="true">#</a> <strong>20. killall\u547D\u4EE4</strong></h3><p>\uFF08\u5411\u4E00\u4E2A\u547D\u4EE4\u542F\u52A8\u7684\u8FDB\u7A0B\u53D1\u9001\u4E00\u4E2A\u4FE1\u53F7\uFF09</p><h3 id="_21-top\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#_21-top\u547D\u4EE4" aria-hidden="true">#</a> <strong>21. top\u547D\u4EE4</strong></h3><p>\u662FLinux\u4E0B\u5E38\u7528\u7684\u6027\u80FD\u5206\u6790\u5DE5\u5177\uFF0C\u80FD\u591F\u5B9E\u65F6\u663E\u793A\u7CFB\u7EDF\u4E2D\u5404\u4E2A\u8FDB\u7A0B\u7684\u8D44\u6E90\u5360\u7528\u72B6\u51B5\uFF0C\u7C7B\u4F3C\u4E8EWindows\u7684\u4EFB\u52A1\u7BA1\u7406\u5668\u3002</p><p>\u5982\u4F55\u6740\u6B7B\u8FDB\u7A0B\uFF1A</p><ul><li>\u56FE\u5F62\u5316\u754C\u9762\u7684\u65B9\u5F0F</li><li>kill -9 pid \uFF08-9\u8868\u793A\u5F3A\u5236\u5173\u95ED\uFF09</li><li>killall -9 \u7A0B\u5E8F\u7684\u540D\u5B57</li><li>pkill \u7A0B\u5E8F\u7684\u540D\u5B57</li></ul><p>\u67E5\u770B\u8FDB\u7A0B\u7AEF\u53E3\u53F7\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">netstat</span> -tunlp<span class="token operator">|</span><span class="token function">grep</span> \u7AEF\u53E3\u53F7
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><!--]-->`);
}
const _sfc_setup$r = _sfc_main$r.setup;
_sfc_main$r.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/linux/command.html.vue");
  return _sfc_setup$r ? _sfc_setup$r(props, ctx) : void 0;
};
var command_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["ssrRender", _sfc_ssrRender$7], ["__file", "command.html.vue"]]);
var command_html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": command_html$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$q = {};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="\u65F6\u95F4\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#\u65F6\u95F4\u5904\u7406" aria-hidden="true">#</a> \u65F6\u95F4\u5904\u7406</h1><h2 id="\u5224\u65AD\u4E0A\u5348\u8FD8\u662F\u4E0B\u5348" tabindex="-1"><a class="header-anchor" href="#\u5224\u65AD\u4E0A\u5348\u8FD8\u662F\u4E0B\u5348" aria-hidden="true">#</a> \u5224\u65AD\u4E0A\u5348\u8FD8\u662F\u4E0B\u5348</h2><blockquote><p>php\u5224\u65AD\u4E0A\u5348\u8FD8\u662F\u4E0B\u5348\u7684\u5B9E\u73B0\u65B9\u6CD5\uFF1A\u9996\u5148\u8BBE\u7F6E\u4E2D\u56FD\u65F6\u533A\uFF1B\u7136\u540E\u5B9A\u4E49\u4E00\u4E2AGetDateTime\u65B9\u6CD5\uFF1B\u7136\u540E\u901A\u8FC7if else\u8BED\u53E5\u5224\u65AD\u5F53\u524D\u65F6\u95F4\u662F\u4E0A\u5348\u8FD8\u662F\u4E0B\u5348\uFF1B\u6700\u540E\u8F93\u51FA\u5224\u65AD\u7ED3\u679C\u5373\u53EF\u3002</p></blockquote><p>\u6839\u636E\u5F53\u524D\u65F6\u95F4\u5224\u65AD\u4E0A\u5348\u597D\u3001\u4E0B\u5348\u597D</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">header</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;Content-type:text/html;charset=utf-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">date_default_timezone_set</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;PRC&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u8BBE\u7F6E\u4E2D\u56FD\u65F6\u533A</span>

<span class="token keyword">echo</span> <span class="token function">str_replace</span><span class="token punctuation">(</span><span class="token keyword">array</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;AM&#39;</span><span class="token punctuation">,</span><span class="token string single-quoted-string">&#39;PM&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token keyword">array</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;\u4E0A\u5348&#39;</span><span class="token punctuation">,</span><span class="token string single-quoted-string">&#39;\u4E0B\u5348&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token function">date</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;Y-m-d A H:i:s&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">function</span> <span class="token function-definition function">GetDateTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token variable">$Datetime</span> <span class="token operator">=</span> <span class="token function">date</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;H&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token variable">$text</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token variable">$Datetime</span> <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> <span class="token variable">$Datetime</span> <span class="token operator">&lt;</span> <span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token variable">$text</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;\u5929\u8FD8\u6CA1\u4EAE\uFF0C\u591C\u732B\u5B50\uFF0C\u8981\u6CE8\u610F\u8EAB\u4F53\u54E6\uFF01 &quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token variable">$Datetime</span><span class="token operator">&gt;=</span><span class="token number">7</span> <span class="token operator">&amp;&amp;</span> <span class="token variable">$Datetime</span><span class="token operator">&lt;</span><span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token variable">$text</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;\u4E0A\u5348\u597D\uFF01\u4ECA\u5929\u5929\u6C14\u771F\u4E0D\u9519\u2026\u2026\u54C8\u54C8\u54C8\uFF0C\u4E0D\u53BB\u73A9\u5417\uFF1F&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token variable">$Datetime</span> <span class="token operator">&gt;=</span> <span class="token number">12</span> <span class="token operator">&amp;&amp;</span> <span class="token variable">$Datetime</span> <span class="token operator">&lt;</span> <span class="token number">14</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token variable">$text</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;\u4E2D\u5348\u597D\uFF01\u5348\u4F11\u65F6\u95F4\u54E6\uFF0C\u670B\u53CB\u4E00\u5B9A\u662F\u4E0D\u4E60\u60EF\u5348\u7761\u7684\u5427\uFF1F\uFF01&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token variable">$Datetime</span> <span class="token operator">&gt;=</span> <span class="token number">14</span> <span class="token operator">&amp;&amp;</span> <span class="token variable">$Datetime</span> <span class="token operator">&lt;</span> <span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token variable">$text</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;\u4E0B\u5348\u8336\u7684\u65F6\u95F4\u5230\u4E86\uFF0C\u4F11\u606F\u4E00\u4E0B\u5427\uFF01 &quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token variable">$Datetime</span> <span class="token operator">&gt;=</span> <span class="token number">18</span> <span class="token operator">&amp;&amp;</span> <span class="token variable">$Datetime</span> <span class="token operator">&lt;</span> <span class="token number">22</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token variable">$text</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;\u4E0B\u5348\u8336\u7684\u65F6\u95F4\u5230\u4E86\uFF0C\u4F11\u606F\u4E00\u4E0B\u5427\uFF01 &quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token variable">$Datetime</span> <span class="token operator">&gt;=</span> <span class="token number">22</span> <span class="token operator">&amp;&amp;</span> <span class="token variable">$Datetime</span> <span class="token operator">&lt;</span> <span class="token number">24</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token variable">$text</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;\u5F88\u665A\u4E86\u54E6\uFF0C\u6CE8\u610F\u4F11\u606F\u5440\uFF01&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token variable">$text</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h2 id="\u8BA1\u7B97\u65F6\u95F4\u5DEE" tabindex="-1"><a class="header-anchor" href="#\u8BA1\u7B97\u65F6\u95F4\u5DEE" aria-hidden="true">#</a> <strong>\u8BA1\u7B97\u65F6\u95F4\u5DEE</strong></h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code>
<span class="token variable">$startdate</span><span class="token operator">=</span><span class="token function">date</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Y-m-d H:i:s&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">//\u5F53\u524D\u65F6\u95F4</span>
<span class="token variable">$enddate</span><span class="token operator">=</span><span class="token string double-quoted-string">&quot;2020-12-12 12:12:12&quot;</span><span class="token punctuation">;</span>     <span class="token comment">//\u7ED3\u675F\u65F6\u95F4</span>
<span class="token variable">$date</span><span class="token operator">=</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token function">strtotime</span><span class="token punctuation">(</span><span class="token variable">$enddate</span><span class="token punctuation">)</span><span class="token operator">-</span><span class="token function">strtotime</span><span class="token punctuation">(</span><span class="token variable">$startdate</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">86400</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;\u76F8\u5DEE\u5929\u6570\uFF1A&quot;</span><span class="token operator">.</span><span class="token variable">$date</span><span class="token operator">.</span><span class="token string double-quoted-string">&quot;\u5929&lt;br&gt;&lt;br&gt;&quot;</span><span class="token punctuation">;</span>
<span class="token variable">$hour</span><span class="token operator">=</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token function">strtotime</span><span class="token punctuation">(</span><span class="token variable">$enddate</span><span class="token punctuation">)</span><span class="token operator">-</span><span class="token function">strtotime</span><span class="token punctuation">(</span><span class="token variable">$startdate</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">%</span><span class="token number">86400</span><span class="token operator">/</span><span class="token number">3600</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;\u76F8\u5DEE\u5C0F\u65F6\u6570\uFF1A&quot;</span><span class="token operator">.</span><span class="token variable">$hour</span><span class="token operator">.</span><span class="token string double-quoted-string">&quot;\u5C0F\u65F6&lt;br&gt;&lt;br&gt;&quot;</span><span class="token punctuation">;</span>
<span class="token variable">$minute</span><span class="token operator">=</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token function">strtotime</span><span class="token punctuation">(</span><span class="token variable">$enddate</span><span class="token punctuation">)</span><span class="token operator">-</span><span class="token function">strtotime</span><span class="token punctuation">(</span><span class="token variable">$startdate</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">%</span><span class="token number">86400</span><span class="token operator">/</span><span class="token number">60</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">echo</span><span class="token string double-quoted-string">&quot;\u76F8\u5DEE\u5206\u949F\u6570\uFF1A&quot;</span><span class="token operator">.</span><span class="token variable">$minute</span><span class="token operator">.</span><span class="token string double-quoted-string">&quot;\u5206\u949F&lt;br&gt;&lt;br&gt;&quot;</span><span class="token punctuation">;</span>
<span class="token variable">$second</span><span class="token operator">=</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token function">strtotime</span><span class="token punctuation">(</span><span class="token variable">$enddate</span><span class="token punctuation">)</span><span class="token operator">-</span><span class="token function">strtotime</span><span class="token punctuation">(</span><span class="token variable">$startdate</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">%</span><span class="token number">86400</span><span class="token operator">%</span><span class="token number">60</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">echo</span><span class="token string double-quoted-string">&quot;\u76F8\u5DEE\u79D2\u6570\uFF1A&quot;</span><span class="token operator">.</span><span class="token variable">$second</span><span class="token operator">.</span><span class="token string double-quoted-string">&quot;\u79D2&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="\u57FA\u4E8E\u5FAE\u4FE1\u670B\u53CB\u5708\u5B9E\u73B0\u65F6\u95F4\u663E\u793A\u6837\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u57FA\u4E8E\u5FAE\u4FE1\u670B\u53CB\u5708\u5B9E\u73B0\u65F6\u95F4\u663E\u793A\u6837\u5F0F" aria-hidden="true">#</a> \u57FA\u4E8E\u5FAE\u4FE1\u670B\u53CB\u5708\u5B9E\u73B0\u65F6\u95F4\u663E\u793A\u6837\u5F0F</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">timer</span><span class="token punctuation">(</span><span class="token keyword type-hint">array</span> <span class="token variable">$array</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
        <span class="token comment">//\u83B7\u53D6\u5F53\u524D\u65F6\u95F4 &amp; \u65F6 &amp; \u5206</span>
        <span class="token variable">$today</span> <span class="token operator">=</span> <span class="token function">date</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Y-m-d H:i:s&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token variable">$D</span> <span class="token operator">=</span> <span class="token function">date</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;d&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token variable">$H</span> <span class="token operator">=</span> <span class="token function">date</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;H&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token variable">$M</span> <span class="token operator">=</span> <span class="token function">date</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;i&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token variable">$array</span> <span class="token keyword">as</span> <span class="token variable">$key</span> <span class="token operator">=&gt;</span> <span class="token variable">$value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token variable">$d</span> <span class="token operator">=</span> <span class="token function">substr</span><span class="token punctuation">(</span><span class="token variable">$value</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;create_time&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>      <span class="token comment">//\u83B7\u53D6\u521B\u5EFA\u65E5\u671F\uFF1A\u5355\u4F4D\uFF1A\u65E5</span>
            <span class="token variable">$h</span> <span class="token operator">=</span> <span class="token function">substr</span><span class="token punctuation">(</span><span class="token variable">$value</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;create_time&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">//\u83B7\u53D6\u53D1\u5E03\u521B\u5EFA\u65E5\u671F\uFF1A\u5355\u4F4D\uFF1A\u65F6</span>
            <span class="token variable">$m</span> <span class="token operator">=</span> <span class="token function">substr</span><span class="token punctuation">(</span><span class="token variable">$value</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;create_time&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">14</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">//\u83B7\u53D6\u53D1\u5E03\u521B\u5EFA\u65E5\u671F\uFF1A\u5355\u4F4D\uFF1A\u65F6</span>
            <span class="token comment">//\u83B7\u53D6\u5F53\u524D\u65F6\u95F4\u4E0E\u53D1\u5E03\u65F6\u95F4\u7684\u76F8\u5DEE\u7684\u5929\u6570</span>
            <span class="token variable">$date</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token function">strtotime</span><span class="token punctuation">(</span><span class="token variable">$today</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token function">strtotime</span><span class="token punctuation">(</span><span class="token variable">$value</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;create_time&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">86400</span><span class="token punctuation">;</span>
            <span class="token keyword">switch</span> <span class="token punctuation">(</span><span class="token variable">$date</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// date&lt;1 \u8868\u793A\u65F6\u95F4\u5DEE\u572824\u5C0F\u65F6\u5185</span>
                <span class="token keyword">case</span> <span class="token variable">$date</span> <span class="token operator">&lt;</span> <span class="token number">1</span><span class="token punctuation">:</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$D</span> <span class="token operator">!=</span> <span class="token variable">$d</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  <span class="token comment">//\u5224\u65AD\u5F53\u524D\u65E5\u671F\u662F\u5426\u76F8\u540C\uFF0C\u4E0D\u76F8\u540C\u5219\uFF0824-\u53D1\u5E03\u65E5\u671F+\u5F53\u524D\u65F6\u95F4\uFF09</span>
                        <span class="token variable">$hour</span> <span class="token operator">=</span> <span class="token number">24</span> <span class="token operator">-</span> <span class="token variable">$h</span> <span class="token operator">+</span> <span class="token variable">$H</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                        <span class="token variable">$hour</span> <span class="token operator">=</span> <span class="token function">abs</span><span class="token punctuation">(</span><span class="token variable">$H</span> <span class="token operator">-</span> <span class="token variable">$h</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">//\u53D1\u5E03\u5982\u671F\u4E0E\u5F53\u524D\u65F6\u95F4\u76F8\u540C\u5219\u53D6\u4E24\u6570\u76F8\u51CF\u7684\u7EDD\u5BF9\u503C</span>
                    <span class="token punctuation">}</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$hour</span> <span class="token operator">&lt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$m</span> <span class="token operator">==</span> <span class="token variable">$M</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                            <span class="token variable">$array</span><span class="token punctuation">[</span><span class="token variable">$key</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;create_time&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;\u521A\u521A&quot;</span><span class="token punctuation">;</span>
                            <span class="token keyword">break</span><span class="token punctuation">;</span>
                        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$m</span> <span class="token operator">&lt;</span> <span class="token variable">$M</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                            <span class="token variable">$minute</span> <span class="token operator">=</span> <span class="token variable">$M</span> <span class="token operator">-</span> <span class="token variable">$m</span><span class="token punctuation">;</span>
                            <span class="token variable">$array</span><span class="token punctuation">[</span><span class="token variable">$key</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;create_time&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token variable">$minute</span> <span class="token operator">.</span> <span class="token string double-quoted-string">&quot;\u5206\u949F\u524D&quot;</span><span class="token punctuation">;</span>
                            <span class="token keyword">break</span><span class="token punctuation">;</span>
                        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                            <span class="token variable">$minute</span> <span class="token operator">=</span> <span class="token number">60</span> <span class="token operator">-</span> <span class="token variable">$m</span> <span class="token operator">+</span> <span class="token variable">$M</span><span class="token punctuation">;</span>
                            <span class="token variable">$array</span><span class="token punctuation">[</span><span class="token variable">$key</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;create_time&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token variable">$minute</span> <span class="token operator">.</span> <span class="token string double-quoted-string">&quot;\u5206\u949F\u524D&quot;</span><span class="token punctuation">;</span>
                            <span class="token keyword">break</span><span class="token punctuation">;</span>
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                        <span class="token variable">$array</span><span class="token punctuation">[</span><span class="token variable">$key</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;create_time&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token variable">$hour</span> <span class="token operator">.</span> <span class="token string double-quoted-string">&quot;\u5C0F\u65F6\u524D&quot;</span><span class="token punctuation">;</span>
                        <span class="token keyword">break</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                    <span class="token keyword">break</span><span class="token punctuation">;</span>
                <span class="token keyword">case</span> <span class="token variable">$date</span> <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">:</span>
                    <span class="token variable">$array</span><span class="token punctuation">[</span><span class="token variable">$key</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;create_time&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;\u6628\u5929&quot;</span><span class="token punctuation">;</span>
                    <span class="token keyword">break</span><span class="token punctuation">;</span>
                <span class="token keyword">case</span> <span class="token variable">$date</span> <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">:</span>
                    <span class="token variable">$array</span><span class="token punctuation">[</span><span class="token variable">$key</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;create_time&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;\u4E24\u5929\u524D&quot;</span><span class="token punctuation">;</span>
                    <span class="token keyword">break</span><span class="token punctuation">;</span>
                <span class="token keyword">default</span><span class="token punctuation">:</span>
                    <span class="token variable">$array</span><span class="token punctuation">[</span><span class="token variable">$key</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;create_time&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token variable">$array</span><span class="token punctuation">[</span><span class="token variable">$key</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;create_time&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
                    <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token variable">$array</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br></div></div><!--]-->`);
}
const _sfc_setup$q = _sfc_main$q.setup;
_sfc_main$q.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/php/wechatTime.html.vue");
  return _sfc_setup$q ? _sfc_setup$q(props, ctx) : void 0;
};
var wechatTime_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["ssrRender", _sfc_ssrRender$6], ["__file", "wechatTime.html.vue"]]);
var wechatTime_html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": wechatTime_html$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$p = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="yarn\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#yarn\u5B89\u88C5" aria-hidden="true">#</a> Yarn\u5B89\u88C5</h1><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> -g <span class="token function">yarn</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u67E5\u770B\u7248\u672C\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">yarn</span> --version
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="yarn-\u6DD8\u5B9D\u6E90\u5B89\u88C5-\u5206\u522B\u590D\u5236\u7C98\u8D34\u4EE5\u4E0B\u4EE3\u7801\u884C\u5230\u9ED1\u7A97\u53E3\u8FD0\u884C\u5373\u53EF" tabindex="-1"><a class="header-anchor" href="#yarn-\u6DD8\u5B9D\u6E90\u5B89\u88C5-\u5206\u522B\u590D\u5236\u7C98\u8D34\u4EE5\u4E0B\u4EE3\u7801\u884C\u5230\u9ED1\u7A97\u53E3\u8FD0\u884C\u5373\u53EF" aria-hidden="true">#</a> Yarn \u6DD8\u5B9D\u6E90\u5B89\u88C5\uFF0C\u5206\u522B\u590D\u5236\u7C98\u8D34\u4EE5\u4E0B\u4EE3\u7801\u884C\u5230\u9ED1\u7A97\u53E3\u8FD0\u884C\u5373\u53EF</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">yarn</span> config <span class="token builtin class-name">set</span> registry https://registry.npm.taobao.org -g
<span class="token function">yarn</span> config <span class="token builtin class-name">set</span> sass_binary_site http://cdn.npm.taobao.org/dist/node-sass -g

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><!--]-->`);
}
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/yarn/install.html.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
var install_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["ssrRender", _sfc_ssrRender$5], ["__file", "install.html.vue"]]);
var install_html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": install_html$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$o = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="tp5\u5B9A\u65F6\u4EFB\u52A1-\u5B9D\u5854\u8BA1\u5212\u4EFB\u52A1" tabindex="-1"><a class="header-anchor" href="#tp5\u5B9A\u65F6\u4EFB\u52A1-\u5B9D\u5854\u8BA1\u5212\u4EFB\u52A1" aria-hidden="true">#</a> TP5\u5B9A\u65F6\u4EFB\u52A1+\u5B9D\u5854\u8BA1\u5212\u4EFB\u52A1</h1><h2 id="\u5B9E\u73B0\u6B65\u9AA4" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u6B65\u9AA4" aria-hidden="true">#</a> \u5B9E\u73B0\u6B65\u9AA4</h2><ol><li><p>\u5728 <strong><code>application/command</code></strong> \u76EE\u5F55\u4E0B \u6DFB\u52A0\u8BA1\u5212\u4EFB\u52A1\u6587\u4EF6</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">namespace</span> <span class="token package">app<span class="token punctuation">\\</span>command</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">think<span class="token punctuation">\\</span>console<span class="token punctuation">\\</span>Command</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">think<span class="token punctuation">\\</span>console<span class="token punctuation">\\</span>Input</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">think<span class="token punctuation">\\</span>console<span class="token punctuation">\\</span>Output</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">think<span class="token punctuation">\\</span>Db</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">think<span class="token punctuation">\\</span>Log</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">TaskDemo</span> <span class="token keyword">extends</span> <span class="token class-name">Command</span>
<span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function-definition function">configure</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">//\u6267\u884C\u547D\u4EE4</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;TaskDemo&#39;</span><span class="token punctuation">)</span>
            <span class="token operator">-&gt;</span><span class="token function">setDescription</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;\u8BA1\u5212\u4EFB\u52A1\u63CF\u8FF0&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function-definition function">execute</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Input</span> <span class="token variable">$input</span><span class="token punctuation">,</span> <span class="token class-name type-declaration">Output</span> <span class="token variable">$output</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
     <span class="token comment">//\u4E1A\u52A1\u903B\u8F91</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">startWork</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div></li><li><p>\u5728<code>application</code> \u76EE\u5F55\u4E0B\u627E\u5230<code>command.php</code></p><p>\u6587\u4EF6\u5185\u6DFB\u52A0\u8BA1\u5212\u4EFB\u52A1\u8DEF\u5F84</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">return</span> <span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;app\\command\\TaskDemo&#39;</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li></ol><h2 id="\u5B9D\u5854\u4E2D\u914D\u7F6E\u5B9A\u65F6\u4EFB\u52A1" tabindex="-1"><a class="header-anchor" href="#\u5B9D\u5854\u4E2D\u914D\u7F6E\u5B9A\u65F6\u4EFB\u52A1" aria-hidden="true">#</a> \u5B9D\u5854\u4E2D\u914D\u7F6E\u5B9A\u65F6\u4EFB\u52A1</h2><ol><li><p>\u8BA1\u5212\u4EFB\u52A1</p></li><li><p>\u6DFB\u52A0\u8BA1\u5212\u4EFB\u52A1</p><table><thead><tr><th>\u4EFB\u52A1\u7C7B\u578B</th><th>Shell\u811A\u672C</th></tr></thead><tbody><tr><td>\u4EFB\u52A1\u540D\u79F0</td><td>\u540D\u79F0</td></tr><tr><td>\u6267\u884C\u5468\u671F</td><td>\u6839\u636E\u81EA\u8EAB\u4EFB\u52A1\u51B3\u5B9A</td></tr><tr><td>\u811A\u672C\u5185\u5BB9</td><td>\u5982\u4E0B</td></tr></tbody></table><blockquote><p>\u811A\u672C\u5185\u5BB9</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /www/wwwroot/webname
php think TaskDemo
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li></ol><!--]-->`);
}
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/php/thinkphp/cron.html.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
var cron_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["ssrRender", _sfc_ssrRender$4], ["__file", "cron.html.vue"]]);
var cron_html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": cron_html$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$n = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="tp\u6846\u67B6\u884C\u4E3A\u94A9\u5B50\u4F7F\u7528\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#tp\u6846\u67B6\u884C\u4E3A\u94A9\u5B50\u4F7F\u7528\u65B9\u6CD5" aria-hidden="true">#</a> TP\u6846\u67B6\u884C\u4E3A\u94A9\u5B50\u4F7F\u7528\u65B9\u6CD5</h1><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">u_hook</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;businessRechargeAfter&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;recharge_money&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$num</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;uid&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$uid</span> <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><!--]-->`);
}
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/php/thinkphp/hook.html.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
var hook_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["ssrRender", _sfc_ssrRender$3], ["__file", "hook.html.vue"]]);
var hook_html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": hook_html$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$m = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="tp6\u5B89\u88C5think-swoole" tabindex="-1"><a class="header-anchor" href="#tp6\u5B89\u88C5think-swoole" aria-hidden="true">#</a> TP6\u5B89\u88C5think-swoole</h1><h2 id="composer-\u8FD0\u884C\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#composer-\u8FD0\u884C\u73AF\u5883" aria-hidden="true">#</a> composer \u8FD0\u884C\u73AF\u5883</h2><p>\u73AF\u5883\u8981\u6C42\uFF1ALinux\u73AF\u5883\u6216\u8005MacOs\u4E0B\u8FD0\u884C</p><h2 id="php\u7248\u672C" tabindex="-1"><a class="header-anchor" href="#php\u7248\u672C" aria-hidden="true">#</a> PHP\u7248\u672C</h2><p>PHP\u8981\u6C42\u7248\u672C\u81F3\u5C11PHP7.1+</p><h2 id="\u5B89\u88C5\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u547D\u4EE4" aria-hidden="true">#</a> \u5B89\u88C5\u547D\u4EE4</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">composer</span> require topthink/think-swoole
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="\u6CE8\u610F" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u610F" aria-hidden="true">#</a> <strong>\u6CE8\u610F</strong></h2><p>\u5982\u679C\u62A5<code>Undefined index: process</code> \u9519\u8BEF \uFF0C\u6709\u4EE5\u4E0B\u4E24\u79CD\u539F\u56E0\uFF1A</p><ol><li><p>\u7FFB\u8BD1\uFF1A\u8FDB\u7A0B\u4F9D\u8D56\u4E8Eproc_open \u8FD9\u4E2A\u51FD\u6570\uFF0C\u5728\u6211\u5B89\u88C5\u7684PHP\u4E2D\u8FD9\u4E2A\u51FD\u6570\u4E0D\u53EF\u7528\u3002</p><p>\u7981\u7528\u51FD\u6570\u53BB\u6389\u8FD9\u4E2A\u5373\u53EF\uFF0C\u5728php.ini\u6587\u4EF6\u91CC\u9762 \u4F7F\u7528/proc_open \u627E\u5230\u53BB\u9664\u8FD9\u4E2A\u5355\u8BCD\u5373\u53EF\uFF01</p></li><li><p>\u6CA1\u6709\u6DFB\u52A0Swoole\u6269\u5C55 \u5B89\u88C5\u5B8Cswoole\u4E4B\u540E\u53EF\u4EE5\u4E86</p></li></ol><h2 id="\u4F7F\u7528\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u65B9\u6CD5" aria-hidden="true">#</a> \u4F7F\u7528\u65B9\u6CD5</h2><!--]-->`);
}
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/php/thinkphp/swoole.html.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
var swoole_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["ssrRender", _sfc_ssrRender$2], ["__file", "swoole.html.vue"]]);
var swoole_html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": swoole_html$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$l = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
}
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/404.html.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
var _404_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["ssrRender", _sfc_ssrRender$1], ["__file", "404.html.vue"]]);
var _404_html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _404_html$1
}, Symbol.toStringTag, { value: "Module" }));
const data$b = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "\u6307\u5357",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Linux",
      "slug": "linux",
      "children": [
        {
          "level": 3,
          "title": "Linux\u5E38\u7528\u547D\u4EE4",
          "slug": "linux\u5E38\u7528\u547D\u4EE4",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Git",
      "slug": "git",
      "children": [
        {
          "level": 3,
          "title": "Git\u5E38\u7528\u547D\u4EE4",
          "slug": "git\u5E38\u7528\u547D\u4EE4",
          "children": []
        },
        {
          "level": 3,
          "title": "Git\u9879\u76EE\u5F00\u53D1\u5EFA\u8BAE",
          "slug": "git\u9879\u76EE\u5F00\u53D1\u5EFA\u8BAE",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "CSS",
      "slug": "css",
      "children": [
        {
          "level": 3,
          "title": "49\u4E2A\u5728\u5DE5\u4F5C\u4E2D\u5E38\u7528\u4E14\u5BB9\u6613\u9057\u5FD8\u7684CSS\u6837\u5F0F\u6E05\u5355\u6574\u7406",
          "slug": "_49\u4E2A\u5728\u5DE5\u4F5C\u4E2D\u5E38\u7528\u4E14\u5BB9\u6613\u9057\u5FD8\u7684css\u6837\u5F0F\u6E05\u5355\u6574\u7406",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "PHP",
      "slug": "php",
      "children": [
        {
          "level": 3,
          "title": "\u65F6\u95F4\u5904\u7406",
          "slug": "\u65F6\u95F4\u5904\u7406",
          "children": []
        },
        {
          "level": 3,
          "title": "ThinkPHP",
          "slug": "thinkphp",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "NPM",
      "slug": "npm",
      "children": [
        {
          "level": 3,
          "title": "npm\u8BBE\u7F6E\u6DD8\u5B9D\u955C\u50CF",
          "slug": "npm\u8BBE\u7F6E\u6DD8\u5B9D\u955C\u50CF",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Yarn",
      "slug": "yarn",
      "children": [
        {
          "level": 3,
          "title": "Yarn\u5B89\u88C5",
          "slug": "yarn\u5B89\u88C5",
          "children": []
        }
      ]
    }
  ],
  "git": {
    "updatedTime": 1649327669e3,
    "contributors": [
      {
        "name": "huangxifang",
        "email": "2906568991@qq.com",
        "commits": 3
      }
    ]
  },
  "filePathRelative": "README.md"
};
var index_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$b
}, Symbol.toStringTag, { value: "Module" }));
const data$a = {
  "key": "v-224c7cf6",
  "path": "/css/easyToIgnore.html",
  "title": "49\u4E2A\u5728\u5DE5\u4F5C\u4E2D\u5E38\u7528\u4E14\u5BB9\u6613\u9057\u5FD8\u7684CSS\u6837\u5F0F\u6E05\u5355\u6574\u7406",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 3,
      "title": "1\u3001\u6587\u5B57\u8D85\u51FA\u90E8\u5206\u663E\u793A\u7701\u7565\u53F7",
      "slug": "_1\u3001\u6587\u5B57\u8D85\u51FA\u90E8\u5206\u663E\u793A\u7701\u7565\u53F7",
      "children": []
    },
    {
      "level": 3,
      "title": "2\u3001\u4E2D\u82F1\u6587\u81EA\u52A8\u6362\u884C",
      "slug": "_2\u3001\u4E2D\u82F1\u6587\u81EA\u52A8\u6362\u884C",
      "children": []
    },
    {
      "level": 3,
      "title": "3\u3001\u6587\u5B57\u9634\u5F71",
      "slug": "_3\u3001\u6587\u5B57\u9634\u5F71",
      "children": []
    },
    {
      "level": 3,
      "title": "4\u3001\u8BBE\u7F6Eplaceholder\u7684\u5B57\u4F53\u6837\u5F0F",
      "slug": "_4\u3001\u8BBE\u7F6Eplaceholder\u7684\u5B57\u4F53\u6837\u5F0F",
      "children": []
    },
    {
      "level": 3,
      "title": "5\u3001\u4E0D\u56FA\u5B9A\u9AD8\u5BBD div \u5782\u76F4\u5C45\u4E2D\u7684\u65B9\u6CD5",
      "slug": "_5\u3001\u4E0D\u56FA\u5B9A\u9AD8\u5BBD-div-\u5782\u76F4\u5C45\u4E2D\u7684\u65B9\u6CD5",
      "children": []
    },
    {
      "level": 3,
      "title": "6\u3001\u89E3\u51B3IOS\u9875\u9762\u6ED1\u52A8\u5361\u987F",
      "slug": "_6\u3001\u89E3\u51B3ios\u9875\u9762\u6ED1\u52A8\u5361\u987F",
      "children": []
    },
    {
      "level": 3,
      "title": "7\u3001\u8BBE\u7F6E\u6EDA\u52A8\u6761\u6837\u5F0F",
      "slug": "_7\u3001\u8BBE\u7F6E\u6EDA\u52A8\u6761\u6837\u5F0F",
      "children": []
    },
    {
      "level": 3,
      "title": "8\u3001\u5B9E\u73B0\u9690\u85CF\u6EDA\u52A8\u6761\u540C\u65F6\u53C8\u53EF\u4EE5\u6EDA\u52A8",
      "slug": "_8\u3001\u5B9E\u73B0\u9690\u85CF\u6EDA\u52A8\u6761\u540C\u65F6\u53C8\u53EF\u4EE5\u6EDA\u52A8",
      "children": []
    },
    {
      "level": 3,
      "title": "9\u3001css \u7ED8\u5236\u4E09\u89D2\u5F62",
      "slug": "_9\u3001css-\u7ED8\u5236\u4E09\u89D2\u5F62",
      "children": []
    },
    {
      "level": 3,
      "title": "10\u3001Table\u8868\u683C\u8FB9\u6846\u5408\u5E76",
      "slug": "_10\u3001table\u8868\u683C\u8FB9\u6846\u5408\u5E76",
      "children": []
    },
    {
      "level": 3,
      "title": "11\u3001css \u9009\u53D6\u7B2C n \u4E2A\u6807\u7B7E\u5143\u7D20",
      "slug": "_11\u3001css-\u9009\u53D6\u7B2C-n-\u4E2A\u6807\u7B7E\u5143\u7D20",
      "children": []
    },
    {
      "level": 3,
      "title": "12\u3001\u79FB\u52A8\u7AEF\u8F6F\u952E\u76D8\u53D8\u4E3A\u641C\u7D22\u65B9\u5F0F",
      "slug": "_12\u3001\u79FB\u52A8\u7AEF\u8F6F\u952E\u76D8\u53D8\u4E3A\u641C\u7D22\u65B9\u5F0F",
      "children": []
    },
    {
      "level": 3,
      "title": "13\u3001onerror \u5904\u7406\u56FE\u7247\u5F02\u5E38",
      "slug": "_13\u3001onerror-\u5904\u7406\u56FE\u7247\u5F02\u5E38",
      "children": []
    },
    {
      "level": 3,
      "title": "14\u3001\u80CC\u666F\u56FE\u7247\u7684\u5927\u5C0F",
      "slug": "_14\u3001\u80CC\u666F\u56FE\u7247\u7684\u5927\u5C0F",
      "children": []
    },
    {
      "level": 3,
      "title": "15\u3001\u6587\u5B57\u4E4B\u95F4\u7684\u95F4\u8DDD",
      "slug": "_15\u3001\u6587\u5B57\u4E4B\u95F4\u7684\u95F4\u8DDD",
      "children": []
    },
    {
      "level": 3,
      "title": "16\u3001\u5143\u7D20\u5360\u6EE1\u6574\u4E2A\u5C4F\u5E55",
      "slug": "_16\u3001\u5143\u7D20\u5360\u6EE1\u6574\u4E2A\u5C4F\u5E55",
      "children": []
    },
    {
      "level": 3,
      "title": "17\u3001CSS\u5B9E\u73B0\u6587\u672C\u4E24\u7AEF\u5BF9\u9F50",
      "slug": "_17\u3001css\u5B9E\u73B0\u6587\u672C\u4E24\u7AEF\u5BF9\u9F50",
      "children": []
    },
    {
      "level": 3,
      "title": "18\u3001\u5B9E\u73B0\u6587\u5B57\u7AD6\u5411\u6392\u7248",
      "slug": "_18\u3001\u5B9E\u73B0\u6587\u5B57\u7AD6\u5411\u6392\u7248",
      "children": []
    },
    {
      "level": 3,
      "title": "19\u3001\u4F7F\u5143\u7D20\u9F20\u6807\u4E8B\u4EF6\u5931\u6548",
      "slug": "_19\u3001\u4F7F\u5143\u7D20\u9F20\u6807\u4E8B\u4EF6\u5931\u6548",
      "children": []
    },
    {
      "level": 3,
      "title": "20\u3001\u7981\u6B62\u7528\u6237\u9009\u62E9",
      "slug": "_20\u3001\u7981\u6B62\u7528\u6237\u9009\u62E9",
      "children": []
    },
    {
      "level": 3,
      "title": "21\u3001\u4F7F\u7528\u786C\u4EF6\u52A0\u901F",
      "slug": "_21\u3001\u4F7F\u7528\u786C\u4EF6\u52A0\u901F",
      "children": []
    },
    {
      "level": 3,
      "title": "22\u3001\u9875\u9762\u52A8\u753B\u51FA\u73B0\u95EA\u70C1\u95EE\u9898",
      "slug": "_22\u3001\u9875\u9762\u52A8\u753B\u51FA\u73B0\u95EA\u70C1\u95EE\u9898",
      "children": []
    },
    {
      "level": 3,
      "title": "23\u3001\u5B57\u6BCD\u5927\u5C0F\u5199\u8F6C\u6362",
      "slug": "_23\u3001\u5B57\u6BCD\u5927\u5C0F\u5199\u8F6C\u6362",
      "children": []
    },
    {
      "level": 3,
      "title": "24\u3001\u5C06\u4E00\u4E2A\u5BB9\u5668\u8BBE\u4E3A\u900F\u660E",
      "slug": "_24\u3001\u5C06\u4E00\u4E2A\u5BB9\u5668\u8BBE\u4E3A\u900F\u660E",
      "children": []
    },
    {
      "level": 3,
      "title": "25\u3001\u6D88\u9664transition\u95EA\u5C4F",
      "slug": "_25\u3001\u6D88\u9664transition\u95EA\u5C4F",
      "children": []
    },
    {
      "level": 3,
      "title": "26\u3001\u8BC6\u522B\u5B57\u7B26\u4E32\u91CC\u7684 '\\n' \u5E76\u6362\u884C",
      "slug": "_26\u3001\u8BC6\u522B\u5B57\u7B26\u4E32\u91CC\u7684-n-\u5E76\u6362\u884C",
      "children": []
    },
    {
      "level": 3,
      "title": "27\u3001\u79FB\u9664a\u6807\u7B7E\u88AB\u70B9\u94FE\u63A5\u7684\u8FB9\u6846",
      "slug": "_27\u3001\u79FB\u9664a\u6807\u7B7E\u88AB\u70B9\u94FE\u63A5\u7684\u8FB9\u6846",
      "children": []
    },
    {
      "level": 3,
      "title": "28\u3001CSS\u663E\u793A\u94FE\u63A5\u4E4B\u540E\u7684URL",
      "slug": "_28\u3001css\u663E\u793A\u94FE\u63A5\u4E4B\u540E\u7684url",
      "children": []
    },
    {
      "level": 3,
      "title": "29\u3001select\u5185\u5BB9\u5C45\u4E2D\u663E\u793A\u3001\u4E0B\u62C9\u5185\u5BB9\u53F3\u5BF9\u9F50",
      "slug": "_29\u3001select\u5185\u5BB9\u5C45\u4E2D\u663E\u793A\u3001\u4E0B\u62C9\u5185\u5BB9\u53F3\u5BF9\u9F50",
      "children": []
    },
    {
      "level": 3,
      "title": "30\u3001\u4FEE\u6539input\u8F93\u5165\u6846\u4E2D\u5149\u6807\u7684\u989C\u8272\u4E0D\u6539\u53D8\u5B57\u4F53\u7684\u989C\u8272",
      "slug": "_30\u3001\u4FEE\u6539input\u8F93\u5165\u6846\u4E2D\u5149\u6807\u7684\u989C\u8272\u4E0D\u6539\u53D8\u5B57\u4F53\u7684\u989C\u8272",
      "children": []
    },
    {
      "level": 3,
      "title": "31\u3001\u5B50\u5143\u7D20\u56FA\u5B9A\u5BBD\u5EA6 \u7236\u5143\u7D20\u5BBD\u5EA6\u88AB\u6491\u5F00",
      "slug": "_31\u3001\u5B50\u5143\u7D20\u56FA\u5B9A\u5BBD\u5EA6-\u7236\u5143\u7D20\u5BBD\u5EA6\u88AB\u6491\u5F00",
      "children": []
    },
    {
      "level": 3,
      "title": "32\u3001\u8BA9div\u91CC\u7684\u56FE\u7247\u548C\u6587\u5B57\u540C\u65F6\u4E0A\u4E0B\u5C45\u4E2D",
      "slug": "_32\u3001\u8BA9div\u91CC\u7684\u56FE\u7247\u548C\u6587\u5B57\u540C\u65F6\u4E0A\u4E0B\u5C45\u4E2D",
      "children": []
    },
    {
      "level": 3,
      "title": "33\u3001\u5B9E\u73B0\u5BBD\u9AD8\u7B49\u6BD4\u4F8B\u81EA\u9002\u5E94\u77E9\u5F62",
      "slug": "_33\u3001\u5B9E\u73B0\u5BBD\u9AD8\u7B49\u6BD4\u4F8B\u81EA\u9002\u5E94\u77E9\u5F62",
      "children": []
    },
    {
      "level": 3,
      "title": "34\u3001transfrom\u7684rotate\u5C5E\u6027\u5728span\u6807\u7B7E\u4E0B\u5931\u6548",
      "slug": "_34\u3001transfrom\u7684rotate\u5C5E\u6027\u5728span\u6807\u7B7E\u4E0B\u5931\u6548",
      "children": []
    },
    {
      "level": 3,
      "title": "35\u3001CSS\u52A0\u8F7D\u52A8\u753B",
      "slug": "_35\u3001css\u52A0\u8F7D\u52A8\u753B",
      "children": []
    },
    {
      "level": 3,
      "title": "36\u3001\u6587\u5B57\u6E10\u53D8\u6548\u679C\u5B9E\u73B0",
      "slug": "_36\u3001\u6587\u5B57\u6E10\u53D8\u6548\u679C\u5B9E\u73B0",
      "children": []
    },
    {
      "level": 3,
      "title": "37\u3001\u597D\u770B\u7684\u8FB9\u6846\u9634\u5F71",
      "slug": "_37\u3001\u597D\u770B\u7684\u8FB9\u6846\u9634\u5F71",
      "children": []
    },
    {
      "level": 3,
      "title": "38\u3001\u597D\u770B\u7684\u80CC\u666F\u6E10\u53D8",
      "slug": "_38\u3001\u597D\u770B\u7684\u80CC\u666F\u6E10\u53D8",
      "children": []
    },
    {
      "level": 3,
      "title": "39\u3001\u5B9E\u73B0\u7ACB\u4F53\u5B57\u7684\u6548\u679C",
      "slug": "_39\u3001\u5B9E\u73B0\u7ACB\u4F53\u5B57\u7684\u6548\u679C",
      "children": []
    },
    {
      "level": 3,
      "title": "40\u3001\u5168\u5C4F\u80CC\u666F\u56FE\u7247\u7684\u5B9E\u73B0",
      "slug": "_40\u3001\u5168\u5C4F\u80CC\u666F\u56FE\u7247\u7684\u5B9E\u73B0",
      "children": []
    },
    {
      "level": 3,
      "title": "41\u3001\u5B9E\u73B0\u6587\u5B57\u63CF\u8FB9\u76842\u79CD\u65B9\u6CD5",
      "slug": "_41\u3001\u5B9E\u73B0\u6587\u5B57\u63CF\u8FB9\u76842\u79CD\u65B9\u6CD5",
      "children": []
    },
    {
      "level": 3,
      "title": "42\u3001\u5143\u7D20\u900F\u660E\u5EA6\u7684\u5B9E\u73B0",
      "slug": "_42\u3001\u5143\u7D20\u900F\u660E\u5EA6\u7684\u5B9E\u73B0",
      "children": []
    },
    {
      "level": 3,
      "title": "43\u3001\u89E3\u51B31px\u8FB9\u6846\u53D8\u7C97\u95EE\u9898",
      "slug": "_43\u3001\u89E3\u51B31px\u8FB9\u6846\u53D8\u7C97\u95EE\u9898",
      "children": []
    },
    {
      "level": 3,
      "title": "44\u3001CSS\u4E0D\u540C\u5355\u4F4D\u7684\u8FD0\u7B97",
      "slug": "_44\u3001css\u4E0D\u540C\u5355\u4F4D\u7684\u8FD0\u7B97",
      "children": []
    },
    {
      "level": 3,
      "title": "45\u3001CSS\u5B9E\u73B0\u6587\u5B57\u6A21\u7CCA\u6548\u679C",
      "slug": "_45\u3001css\u5B9E\u73B0\u6587\u5B57\u6A21\u7CCA\u6548\u679C",
      "children": []
    },
    {
      "level": 3,
      "title": "46\u3001\u901A\u8FC7\u6EE4\u955C\u8BA9\u56FE\u6807\u53D8\u7070",
      "slug": "_46\u3001\u901A\u8FC7\u6EE4\u955C\u8BA9\u56FE\u6807\u53D8\u7070",
      "children": []
    },
    {
      "level": 3,
      "title": "47\u3001\u56FE\u7247\u81EA\u9002\u5E94object-fit",
      "slug": "_47\u3001\u56FE\u7247\u81EA\u9002\u5E94object-fit",
      "children": []
    },
    {
      "level": 3,
      "title": "48\u3001\u884C\u5185\u6807\u7B7E\u5143\u7D20\u51FA\u73B0\u95F4\u9699\u95EE\u9898",
      "slug": "_48\u3001\u884C\u5185\u6807\u7B7E\u5143\u7D20\u51FA\u73B0\u95F4\u9699\u95EE\u9898",
      "children": []
    },
    {
      "level": 3,
      "title": "49\u3001\u89E3\u51B3vertical-align\u5C5E\u6027\u4E0D\u751F\u6548",
      "slug": "_49\u3001\u89E3\u51B3vertical-align\u5C5E\u6027\u4E0D\u751F\u6548",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 1649323648e3,
    "contributors": [
      {
        "name": "huangxifang",
        "email": "2906568991@qq.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "css/easyToIgnore.md"
};
var easyToIgnore_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$a
}, Symbol.toStringTag, { value: "Module" }));
const data$9 = {
  "key": "v-aa042210",
  "path": "/git/common.html",
  "title": "Git\u5E38\u7528\u547D\u4EE4",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "\u67E5\u770B\u8FDC\u7A0B\u4ED3\u5E93\u5730\u5740",
      "slug": "\u67E5\u770B\u8FDC\u7A0B\u4ED3\u5E93\u5730\u5740",
      "children": []
    },
    {
      "level": 2,
      "title": "\u5207\u6362\u8FDC\u7A0B\u4ED3\u5E93\u5730\u5740",
      "slug": "\u5207\u6362\u8FDC\u7A0B\u4ED3\u5E93\u5730\u5740",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 1649323648e3,
    "contributors": [
      {
        "name": "huangxifang",
        "email": "2906568991@qq.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "git/common.md"
};
var common_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$9
}, Symbol.toStringTag, { value: "Module" }));
const data$8 = {
  "key": "v-46d404d8",
  "path": "/git/development.html",
  "title": "Git\u5F00\u53D1\u6D41\u7A0B\u5EFA\u8BAE",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Git\u76EE\u524D\u4E3B\u8981\u5206\u652F",
      "slug": "git\u76EE\u524D\u4E3B\u8981\u5206\u652F",
      "children": []
    },
    {
      "level": 2,
      "title": "\u5FAE\u5C0F\u529F\u80FD\u6A21\u5757",
      "slug": "\u5FAE\u5C0F\u529F\u80FD\u6A21\u5757",
      "children": []
    },
    {
      "level": 2,
      "title": "\u4E2D\u5927\u578B\u529F\u80FD\u6A21\u5757",
      "slug": "\u4E2D\u5927\u578B\u529F\u80FD\u6A21\u5757",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 1649323648e3,
    "contributors": [
      {
        "name": "huangxifang",
        "email": "2906568991@qq.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "git/development.md"
};
var development_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$8
}, Symbol.toStringTag, { value: "Module" }));
const data$7 = {
  "key": "v-6bfe5e5d",
  "path": "/npm/configRegistry.html",
  "title": "npm\u8BBE\u7F6E\u6DD8\u5B9D\u6E90",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1649323648e3,
    "contributors": [
      {
        "name": "huangxifang",
        "email": "2906568991@qq.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "npm/configRegistry.md"
};
var configRegistry_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$7
}, Symbol.toStringTag, { value: "Module" }));
const data$6 = {
  "key": "v-8a42673c",
  "path": "/linux/command.html",
  "title": "Linux \u5E38\u7528\u547D\u4EE4",
  "lang": "zh-CN",
  "frontmatter": {
    "lang": "zh-CN",
    "title": "Linux \u5E38\u7528\u547D\u4EE4",
    "description": "Linux \u5E38\u7528\u547D\u4EE4"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "\u67E5\u627E\u76EE\u5F55",
      "slug": "\u67E5\u627E\u76EE\u5F55",
      "children": []
    },
    {
      "level": 2,
      "title": "\u67E5\u627E\u6587\u4EF6",
      "slug": "\u67E5\u627E\u6587\u4EF6",
      "children": []
    },
    {
      "level": 2,
      "title": "\u89E3\u538B\u538B\u7F29\u5305",
      "slug": "\u89E3\u538B\u538B\u7F29\u5305",
      "children": []
    },
    {
      "level": 2,
      "title": "\u4E00\u3001\u6587\u4EF6\u548C\u76EE\u5F55",
      "slug": "\u4E00\u3001\u6587\u4EF6\u548C\u76EE\u5F55",
      "children": [
        {
          "level": 3,
          "title": "1. cd\u547D\u4EE4",
          "slug": "_1-cd\u547D\u4EE4",
          "children": []
        },
        {
          "level": 3,
          "title": "2. pwd\u547D\u4EE4",
          "slug": "_2-pwd\u547D\u4EE4",
          "children": []
        },
        {
          "level": 3,
          "title": "3. ls\u547D\u4EE4",
          "slug": "_3-ls\u547D\u4EE4",
          "children": []
        },
        {
          "level": 3,
          "title": "4. cp \u547D\u4EE4",
          "slug": "_4-cp-\u547D\u4EE4",
          "children": []
        },
        {
          "level": 3,
          "title": "5.  mv\u547D\u4EE4",
          "slug": "_5-mv\u547D\u4EE4",
          "children": []
        },
        {
          "level": 3,
          "title": "6.  rm \u547D\u4EE4",
          "slug": "_6-rm-\u547D\u4EE4",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "\u4E8C\u3001\u67E5\u770B\u6587\u4EF6\u5185\u5BB9",
      "slug": "\u4E8C\u3001\u67E5\u770B\u6587\u4EF6\u5185\u5BB9",
      "children": [
        {
          "level": 3,
          "title": "7. cat\u547D\u4EE4",
          "slug": "_7-cat\u547D\u4EE4",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "\u4E09\u3001\u6587\u4EF6\u641C\u7D22",
      "slug": "\u4E09\u3001\u6587\u4EF6\u641C\u7D22",
      "children": [
        {
          "level": 3,
          "title": "8. find\u547D\u4EE4\uFF08\uFF09",
          "slug": "_8-find\u547D\u4EE4",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "\u56DB\u3001\u6587\u4EF6\u7684\u6743\u9650",
      "slug": "\u56DB\u3001\u6587\u4EF6\u7684\u6743\u9650",
      "children": [
        {
          "level": 3,
          "title": "9. chmod \u547D\u4EE4",
          "slug": "_9-chmod-\u547D\u4EE4",
          "children": []
        },
        {
          "level": 3,
          "title": "10. chown \u547D\u4EE4",
          "slug": "_10-chown-\u547D\u4EE4",
          "children": []
        },
        {
          "level": 3,
          "title": "11. chgrp \u547D\u4EE4",
          "slug": "_11-chgrp-\u547D\u4EE4",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "\u4E94\u3001\u6587\u672C\u5904\u7406",
      "slug": "\u4E94\u3001\u6587\u672C\u5904\u7406",
      "children": [
        {
          "level": 3,
          "title": "12. grep \u547D\u4EE4",
          "slug": "_12-grep-\u547D\u4EE4",
          "children": []
        },
        {
          "level": 3,
          "title": "13. paste \u547D\u4EE4",
          "slug": "_13-paste-\u547D\u4EE4",
          "children": []
        },
        {
          "level": 3,
          "title": "14. sort \u547D\u4EE4",
          "slug": "_14-sort-\u547D\u4EE4",
          "children": []
        },
        {
          "level": 3,
          "title": "15. comm \u547D\u4EE4",
          "slug": "_15-comm-\u547D\u4EE4",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "\u516D\u3001\u6253\u5305\u548C\u538B\u7F29\u6587\u4EF6",
      "slug": "\u516D\u3001\u6253\u5305\u548C\u538B\u7F29\u6587\u4EF6",
      "children": [
        {
          "level": 3,
          "title": "16. tar \u547D\u4EE4",
          "slug": "_16-tar-\u547D\u4EE4",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "\u4E03\u3001\u7CFB\u7EDF\u548C\u5173\u673A (\u7CFB\u7EDF\u7684\u5173\u673A\u3001\u91CD\u542F\u4EE5\u53CA\u767B\u51FA )",
      "slug": "\u4E03\u3001\u7CFB\u7EDF\u548C\u5173\u673A-\u7CFB\u7EDF\u7684\u5173\u673A\u3001\u91CD\u542F\u4EE5\u53CA\u767B\u51FA",
      "children": [
        {
          "level": 3,
          "title": "17\u3001jps\u547D\u4EE4",
          "slug": "_17\u3001jps\u547D\u4EE4",
          "children": []
        },
        {
          "level": 3,
          "title": "18\u3001ps\u547D\u4EE4",
          "slug": "_18\u3001ps\u547D\u4EE4",
          "children": []
        },
        {
          "level": 3,
          "title": "19. kill\u547D\u4EE4",
          "slug": "_19-kill\u547D\u4EE4",
          "children": []
        },
        {
          "level": 3,
          "title": "20. killall\u547D\u4EE4",
          "slug": "_20-killall\u547D\u4EE4",
          "children": []
        },
        {
          "level": 3,
          "title": "21. top\u547D\u4EE4",
          "slug": "_21-top\u547D\u4EE4",
          "children": []
        }
      ]
    }
  ],
  "git": {
    "updatedTime": 1649323648e3,
    "contributors": [
      {
        "name": "huangxifang",
        "email": "2906568991@qq.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "linux/command.md"
};
var command_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$6
}, Symbol.toStringTag, { value: "Module" }));
const data$5 = {
  "key": "v-76bb3376",
  "path": "/php/wechatTime.html",
  "title": "\u65F6\u95F4\u5904\u7406",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "\u5224\u65AD\u4E0A\u5348\u8FD8\u662F\u4E0B\u5348",
      "slug": "\u5224\u65AD\u4E0A\u5348\u8FD8\u662F\u4E0B\u5348",
      "children": []
    },
    {
      "level": 2,
      "title": "\u8BA1\u7B97\u65F6\u95F4\u5DEE",
      "slug": "\u8BA1\u7B97\u65F6\u95F4\u5DEE",
      "children": []
    },
    {
      "level": 2,
      "title": "\u57FA\u4E8E\u5FAE\u4FE1\u670B\u53CB\u5708\u5B9E\u73B0\u65F6\u95F4\u663E\u793A\u6837\u5F0F",
      "slug": "\u57FA\u4E8E\u5FAE\u4FE1\u670B\u53CB\u5708\u5B9E\u73B0\u65F6\u95F4\u663E\u793A\u6837\u5F0F",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 1649323648e3,
    "contributors": [
      {
        "name": "huangxifang",
        "email": "2906568991@qq.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "php/wechatTime.md"
};
var wechatTime_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$5
}, Symbol.toStringTag, { value: "Module" }));
const data$4 = {
  "key": "v-f81671a0",
  "path": "/yarn/install.html",
  "title": "Yarn\u5B89\u88C5",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Yarn \u6DD8\u5B9D\u6E90\u5B89\u88C5\uFF0C\u5206\u522B\u590D\u5236\u7C98\u8D34\u4EE5\u4E0B\u4EE3\u7801\u884C\u5230\u9ED1\u7A97\u53E3\u8FD0\u884C\u5373\u53EF",
      "slug": "yarn-\u6DD8\u5B9D\u6E90\u5B89\u88C5-\u5206\u522B\u590D\u5236\u7C98\u8D34\u4EE5\u4E0B\u4EE3\u7801\u884C\u5230\u9ED1\u7A97\u53E3\u8FD0\u884C\u5373\u53EF",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 1649323648e3,
    "contributors": [
      {
        "name": "huangxifang",
        "email": "2906568991@qq.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "yarn/install.md"
};
var install_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$4
}, Symbol.toStringTag, { value: "Module" }));
const data$3 = {
  "key": "v-5a7523b2",
  "path": "/php/thinkphp/cron.html",
  "title": "TP5\u5B9A\u65F6\u4EFB\u52A1+\u5B9D\u5854\u8BA1\u5212\u4EFB\u52A1",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "\u5B9E\u73B0\u6B65\u9AA4",
      "slug": "\u5B9E\u73B0\u6B65\u9AA4",
      "children": []
    },
    {
      "level": 2,
      "title": "\u5B9D\u5854\u4E2D\u914D\u7F6E\u5B9A\u65F6\u4EFB\u52A1",
      "slug": "\u5B9D\u5854\u4E2D\u914D\u7F6E\u5B9A\u65F6\u4EFB\u52A1",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 1649323648e3,
    "contributors": [
      {
        "name": "huangxifang",
        "email": "2906568991@qq.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "php/thinkphp/cron.md"
};
var cron_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$3
}, Symbol.toStringTag, { value: "Module" }));
const data$2 = {
  "key": "v-03093e3d",
  "path": "/php/thinkphp/hook.html",
  "title": "TP\u6846\u67B6\u884C\u4E3A\u94A9\u5B50\u4F7F\u7528\u65B9\u6CD5",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1649323648e3,
    "contributors": [
      {
        "name": "huangxifang",
        "email": "2906568991@qq.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "php/thinkphp/hook.md"
};
var hook_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$2
}, Symbol.toStringTag, { value: "Module" }));
const data$1 = {
  "key": "v-57c453ba",
  "path": "/php/thinkphp/swoole.html",
  "title": "TP6\u5B89\u88C5think-swoole",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "composer \u8FD0\u884C\u73AF\u5883",
      "slug": "composer-\u8FD0\u884C\u73AF\u5883",
      "children": []
    },
    {
      "level": 2,
      "title": "PHP\u7248\u672C",
      "slug": "php\u7248\u672C",
      "children": []
    },
    {
      "level": 2,
      "title": "\u5B89\u88C5\u547D\u4EE4",
      "slug": "\u5B89\u88C5\u547D\u4EE4",
      "children": []
    },
    {
      "level": 2,
      "title": "\u6CE8\u610F",
      "slug": "\u6CE8\u610F",
      "children": []
    },
    {
      "level": 2,
      "title": "\u4F7F\u7528\u65B9\u6CD5",
      "slug": "\u4F7F\u7528\u65B9\u6CD5",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 1649323648e3,
    "contributors": [
      {
        "name": "huangxifang",
        "email": "2906568991@qq.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "php/thinkphp/swoole.md"
};
var swoole_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$1
}, Symbol.toStringTag, { value: "Module" }));
const data = {
  "key": "v-3706649a",
  "path": "/404.html",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {
    "layout": "404"
  },
  "excerpt": "",
  "headers": [],
  "git": {},
  "filePathRelative": null
};
var _404_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$k = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    var _a, _b, _c;
    const routeLocale = useRouteLocale();
    const themeLocale = useThemeLocaleData();
    const messages = (_a = themeLocale.value.notFound) != null ? _a : ["Not Found"];
    const getMsg = () => messages[Math.floor(Math.random() * messages.length)];
    const homeLink = (_b = themeLocale.value.home) != null ? _b : routeLocale.value;
    const homeText = (_c = themeLocale.value.backToHome) != null ? _c : "Back to home";
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = vue.resolveComponent("RouterLink");
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "theme-container" }, _attrs))}><div class="theme-default-content"><h1>404</h1><blockquote>${serverRenderer.ssrInterpolate(getMsg())}</blockquote>`);
      _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: vue.unref(homeLink) }, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${serverRenderer.ssrInterpolate(vue.unref(homeText))}`);
          } else {
            return [
              vue.createTextVNode(vue.toDisplayString(vue.unref(homeText)), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/layouts/404.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
var _404 = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["__file", "404.vue"]]);
var _404$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _404
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$j = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Content = vue.resolveComponent("Content");
  _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "theme-default-content custom" }, _attrs))}>`);
  _push(serverRenderer.ssrRenderComponent(_component_Content, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/HomeContent.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
var HomeContent = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["ssrRender", _sfc_ssrRender], ["__file", "HomeContent.vue"]]);
const _sfc_main$i = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const frontmatter = usePageFrontmatter();
    const features = vue.computed(() => {
      if (isArray(frontmatter.value.features)) {
        return frontmatter.value.features;
      }
      return [];
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (vue.unref(features).length) {
        _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "features" }, _attrs))}><!--[-->`);
        serverRenderer.ssrRenderList(vue.unref(features), (feature) => {
          _push(`<div class="feature"><h2>${serverRenderer.ssrInterpolate(feature.title)}</h2><p>${serverRenderer.ssrInterpolate(feature.details)}</p></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/HomeFeatures.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
var HomeFeatures = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["__file", "HomeFeatures.vue"]]);
const _sfc_main$h = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const frontmatter = usePageFrontmatter();
    const footer = vue.computed(() => frontmatter.value.footer);
    const footerHtml = vue.computed(() => frontmatter.value.footerHtml);
    return (_ctx, _push, _parent, _attrs) => {
      if (vue.unref(footer)) {
        _push(`<!--[-->`);
        if (vue.unref(footerHtml)) {
          _push(`<div class="footer">${vue.unref(footer)}</div>`);
        } else {
          _push(`<div class="footer">${serverRenderer.ssrInterpolate(vue.unref(footer))}</div>`);
        }
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/HomeFooter.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
var HomeFooter = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["__file", "HomeFooter.vue"]]);
const __default__ = vue.defineComponent({
  inheritAttrs: false
});
const _sfc_main$g = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, __default__), {
  __ssrInlineRender: true,
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const route = vueRouter.useRoute();
    const site = useSiteData();
    const { item } = vue.toRefs(props);
    const hasHttpProtocol = vue.computed(() => isLinkHttp(item.value.link));
    const hasNonHttpProtocol = vue.computed(() => isLinkMailto(item.value.link) || isLinkTel(item.value.link));
    const linkTarget = vue.computed(() => {
      if (hasNonHttpProtocol.value)
        return void 0;
      if (item.value.target)
        return item.value.target;
      if (hasHttpProtocol.value)
        return "_blank";
      return void 0;
    });
    const isBlankTarget = vue.computed(() => linkTarget.value === "_blank");
    const isRouterLink = vue.computed(() => !hasHttpProtocol.value && !hasNonHttpProtocol.value && !isBlankTarget.value);
    const linkRel = vue.computed(() => {
      if (hasNonHttpProtocol.value)
        return void 0;
      if (item.value.rel)
        return item.value.rel;
      if (isBlankTarget.value)
        return "noopener noreferrer";
      return void 0;
    });
    const linkAriaLabel = vue.computed(() => item.value.ariaLabel || item.value.text);
    const shouldBeActiveInSubpath = vue.computed(() => {
      const localeKeys = Object.keys(site.value.locales);
      if (localeKeys.length) {
        return !localeKeys.some((key) => key === item.value.link);
      }
      return item.value.link !== "/";
    });
    const isActiveInSubpath = vue.computed(() => {
      if (!shouldBeActiveInSubpath.value) {
        return false;
      }
      return route.path.startsWith(item.value.link);
    });
    const isActive = vue.computed(() => {
      if (!isRouterLink.value) {
        return false;
      }
      if (item.value.activeMatch) {
        return new RegExp(item.value.activeMatch).test(route.path);
      }
      return isActiveInSubpath.value;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = vue.resolveComponent("RouterLink");
      const _component_AutoLinkExternalIcon = vue.resolveComponent("AutoLinkExternalIcon");
      if (vue.unref(isRouterLink)) {
        _push(serverRenderer.ssrRenderComponent(_component_RouterLink, vue.mergeProps({
          class: { "router-link-active": vue.unref(isActive) },
          to: vue.unref(item).link,
          "aria-label": vue.unref(linkAriaLabel)
        }, _ctx.$attrs, _attrs), {
          default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              serverRenderer.ssrRenderSlot(_ctx.$slots, "before", {}, null, _push2, _parent2, _scopeId);
              _push2(` ${serverRenderer.ssrInterpolate(vue.unref(item).text)} `);
              serverRenderer.ssrRenderSlot(_ctx.$slots, "after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                vue.renderSlot(_ctx.$slots, "before"),
                vue.createTextVNode(" " + vue.toDisplayString(vue.unref(item).text) + " ", 1),
                vue.renderSlot(_ctx.$slots, "after")
              ];
            }
          }),
          _: 3
        }, _parent));
      } else {
        _push(`<a${serverRenderer.ssrRenderAttrs(vue.mergeProps({
          class: "external-link",
          href: vue.unref(item).link,
          rel: vue.unref(linkRel),
          target: vue.unref(linkTarget),
          "aria-label": vue.unref(linkAriaLabel)
        }, _ctx.$attrs, _attrs))}>`);
        serverRenderer.ssrRenderSlot(_ctx.$slots, "before", {}, null, _push, _parent);
        _push(` ${serverRenderer.ssrInterpolate(vue.unref(item).text)} `);
        if (vue.unref(isBlankTarget)) {
          _push(serverRenderer.ssrRenderComponent(_component_AutoLinkExternalIcon, null, null, _parent));
        } else {
          _push(`<!---->`);
        }
        serverRenderer.ssrRenderSlot(_ctx.$slots, "after", {}, null, _push, _parent);
        _push(`</a>`);
      }
    };
  }
}));
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/AutoLink.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
var AutoLink = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["__file", "AutoLink.vue"]]);
const _sfc_main$f = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const frontmatter = usePageFrontmatter();
    const siteLocale = useSiteLocaleData();
    const isDarkMode = useDarkMode();
    const heroImage = vue.computed(() => {
      if (isDarkMode.value && frontmatter.value.heroImageDark !== void 0) {
        return frontmatter.value.heroImageDark;
      }
      return frontmatter.value.heroImage;
    });
    const heroText = vue.computed(() => {
      if (frontmatter.value.heroText === null) {
        return null;
      }
      return frontmatter.value.heroText || siteLocale.value.title || "Hello";
    });
    const heroAlt = vue.computed(() => frontmatter.value.heroAlt || heroText.value || "hero");
    const tagline = vue.computed(() => {
      if (frontmatter.value.tagline === null) {
        return null;
      }
      return frontmatter.value.tagline || siteLocale.value.description || "Welcome to your VuePress site";
    });
    const actions = vue.computed(() => {
      if (!isArray(frontmatter.value.actions)) {
        return [];
      }
      return frontmatter.value.actions.map(({ text, link, type = "primary" }) => ({
        text,
        link,
        type
      }));
    });
    const HomeHeroImage = () => {
      if (!heroImage.value)
        return null;
      const img = vue.h("img", {
        src: withBase(heroImage.value),
        alt: heroAlt.value
      });
      if (frontmatter.value.heroImageDark === void 0) {
        return img;
      }
      return vue.h(ClientOnly, () => img);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "hero" }, _attrs))}>`);
      _push(serverRenderer.ssrRenderComponent(HomeHeroImage, null, null, _parent));
      if (vue.unref(heroText)) {
        _push(`<h1 id="main-title">${serverRenderer.ssrInterpolate(vue.unref(heroText))}</h1>`);
      } else {
        _push(`<!---->`);
      }
      if (vue.unref(tagline)) {
        _push(`<p class="description">${serverRenderer.ssrInterpolate(vue.unref(tagline))}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (vue.unref(actions).length) {
        _push(`<p class="actions"><!--[-->`);
        serverRenderer.ssrRenderList(vue.unref(actions), (action) => {
          _push(serverRenderer.ssrRenderComponent(AutoLink, {
            key: action.text,
            class: ["action-button", [action.type]],
            item: action
          }, null, _parent));
        });
        _push(`<!--]--></p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</header>`);
    };
  }
});
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/HomeHero.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
var HomeHero = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__file", "HomeHero.vue"]]);
const _sfc_main$e = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "home" }, _attrs))}>`);
      _push(serverRenderer.ssrRenderComponent(HomeHero, null, null, _parent));
      _push(serverRenderer.ssrRenderComponent(HomeFeatures, null, null, _parent));
      _push(serverRenderer.ssrRenderComponent(HomeContent, null, null, _parent));
      _push(serverRenderer.ssrRenderComponent(HomeFooter, null, null, _parent));
      _push(`</main>`);
    };
  }
});
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/Home.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
var Home = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["__file", "Home.vue"]]);
const _sfc_main$d = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const routeLocale = useRouteLocale();
    const siteLocale = useSiteLocaleData();
    const themeLocale = useThemeLocaleData();
    const isDarkMode = useDarkMode();
    const navbarBrandLink = vue.computed(() => themeLocale.value.home || routeLocale.value);
    const navbarBrandTitle = vue.computed(() => siteLocale.value.title);
    const navbarBrandLogo = vue.computed(() => {
      if (isDarkMode.value && themeLocale.value.logoDark !== void 0) {
        return themeLocale.value.logoDark;
      }
      return themeLocale.value.logo;
    });
    const NavbarBrandLogo = () => {
      if (!navbarBrandLogo.value)
        return null;
      const img = vue.h("img", {
        class: "logo",
        src: withBase(navbarBrandLogo.value),
        alt: navbarBrandTitle.value
      });
      if (themeLocale.value.logoDark === void 0) {
        return img;
      }
      return vue.h(ClientOnly, () => img);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = vue.resolveComponent("RouterLink");
      _push(serverRenderer.ssrRenderComponent(_component_RouterLink, vue.mergeProps({ to: vue.unref(navbarBrandLink) }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer.ssrRenderComponent(NavbarBrandLogo, null, null, _parent2, _scopeId));
            if (vue.unref(navbarBrandTitle)) {
              _push2(`<span class="${serverRenderer.ssrRenderClass([{ "can-hide": vue.unref(navbarBrandLogo) }, "site-name"])}"${_scopeId}>${serverRenderer.ssrInterpolate(vue.unref(navbarBrandTitle))}</span>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              vue.createVNode(NavbarBrandLogo),
              vue.unref(navbarBrandTitle) ? (vue.openBlock(), vue.createBlock("span", {
                key: 0,
                class: ["site-name", { "can-hide": vue.unref(navbarBrandLogo) }]
              }, vue.toDisplayString(vue.unref(navbarBrandTitle)), 3)) : vue.createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/NavbarBrand.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
var NavbarBrand = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__file", "NavbarBrand.vue"]]);
const _sfc_main$c = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/DropdownTransition.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
var DropdownTransition = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__file", "DropdownTransition.vue"]]);
const _sfc_main$b = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const { item } = vue.toRefs(props);
    const dropdownAriaLabel = vue.computed(() => item.value.ariaLabel || item.value.text);
    const open = vue.ref(false);
    const route = vueRouter.useRoute();
    vue.watch(() => route.path, () => {
      open.value = false;
    });
    const isLastItemOfArray = (item2, arr) => arr[arr.length - 1] === item2;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: ["navbar-dropdown-wrapper", { open: open.value }]
      }, _attrs))}><button class="navbar-dropdown-title" type="button"${serverRenderer.ssrRenderAttr("aria-label", vue.unref(dropdownAriaLabel))}><span class="title">${serverRenderer.ssrInterpolate(vue.unref(item).text)}</span><span class="arrow down"></span></button><button class="navbar-dropdown-title-mobile" type="button"${serverRenderer.ssrRenderAttr("aria-label", vue.unref(dropdownAriaLabel))}><span class="title">${serverRenderer.ssrInterpolate(vue.unref(item).text)}</span><span class="${serverRenderer.ssrRenderClass([open.value ? "down" : "right", "arrow"])}"></span></button>`);
      _push(serverRenderer.ssrRenderComponent(DropdownTransition, null, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<ul style="${serverRenderer.ssrRenderStyle(open.value ? null : { display: "none" })}" class="navbar-dropdown"${_scopeId}><!--[-->`);
            serverRenderer.ssrRenderList(vue.unref(item).children, (child) => {
              _push2(`<li class="navbar-dropdown-item"${_scopeId}>`);
              if (child.children) {
                _push2(`<!--[--><h4 class="navbar-dropdown-subtitle"${_scopeId}>`);
                if (child.link) {
                  _push2(serverRenderer.ssrRenderComponent(AutoLink, { item: child }, null, _parent2, _scopeId));
                } else {
                  _push2(`<span${_scopeId}>${serverRenderer.ssrInterpolate(child.text)}</span>`);
                }
                _push2(`</h4><ul class="navbar-dropdown-subitem-wrapper"${_scopeId}><!--[-->`);
                serverRenderer.ssrRenderList(child.children, (grandchild) => {
                  _push2(`<li class="navbar-dropdown-subitem"${_scopeId}>`);
                  _push2(serverRenderer.ssrRenderComponent(AutoLink, { item: grandchild }, null, _parent2, _scopeId));
                  _push2(`</li>`);
                });
                _push2(`<!--]--></ul><!--]-->`);
              } else {
                _push2(serverRenderer.ssrRenderComponent(AutoLink, { item: child }, null, _parent2, _scopeId));
              }
              _push2(`</li>`);
            });
            _push2(`<!--]--></ul>`);
          } else {
            return [
              vue.withDirectives(vue.createVNode("ul", { class: "navbar-dropdown" }, [
                (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList(vue.unref(item).children, (child) => {
                  return vue.openBlock(), vue.createBlock("li", {
                    key: child.text,
                    class: "navbar-dropdown-item"
                  }, [
                    child.children ? (vue.openBlock(), vue.createBlock(vue.Fragment, { key: 0 }, [
                      vue.createVNode("h4", { class: "navbar-dropdown-subtitle" }, [
                        child.link ? (vue.openBlock(), vue.createBlock(AutoLink, {
                          key: 0,
                          item: child,
                          onFocusout: ($event) => isLastItemOfArray(child, vue.unref(item).children) && child.children.length === 0 && (open.value = false)
                        }, null, 8, ["item", "onFocusout"])) : (vue.openBlock(), vue.createBlock("span", { key: 1 }, vue.toDisplayString(child.text), 1))
                      ]),
                      vue.createVNode("ul", { class: "navbar-dropdown-subitem-wrapper" }, [
                        (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList(child.children, (grandchild) => {
                          return vue.openBlock(), vue.createBlock("li", {
                            key: grandchild.link,
                            class: "navbar-dropdown-subitem"
                          }, [
                            vue.createVNode(AutoLink, {
                              item: grandchild,
                              onFocusout: ($event) => isLastItemOfArray(grandchild, child.children) && isLastItemOfArray(child, vue.unref(item).children) && (open.value = false)
                            }, null, 8, ["item", "onFocusout"])
                          ]);
                        }), 128))
                      ])
                    ], 64)) : (vue.openBlock(), vue.createBlock(AutoLink, {
                      key: 1,
                      item: child,
                      onFocusout: ($event) => isLastItemOfArray(child, vue.unref(item).children) && (open.value = false)
                    }, null, 8, ["item", "onFocusout"]))
                  ]);
                }), 128))
              ], 512), [
                [vue.vShow, open.value]
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/NavbarDropdown.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
var NavbarDropdown = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__file", "NavbarDropdown.vue"]]);
const normalizePath = (path) => decodeURI(path).replace(/#.*$/, "").replace(/(index)?\.(md|html)$/, "");
const isActiveLink = (link, route) => {
  if (route.hash === link) {
    return true;
  }
  const currentPath = normalizePath(route.path);
  const targetPath = normalizePath(link);
  return currentPath === targetPath;
};
const isActiveSidebarItem = (item, route) => {
  if (item.link && isActiveLink(item.link, route)) {
    return true;
  }
  if (item.children) {
    return item.children.some((child) => isActiveSidebarItem(child, route));
  }
  return false;
};
const resolveRepoType = (repo) => {
  if (!isLinkHttp(repo) || /github\.com/.test(repo))
    return "GitHub";
  if (/bitbucket\.org/.test(repo))
    return "Bitbucket";
  if (/gitlab\.com/.test(repo))
    return "GitLab";
  if (/gitee\.com/.test(repo))
    return "Gitee";
  return null;
};
const editLinkPatterns = {
  GitHub: ":repo/edit/:branch/:path",
  GitLab: ":repo/-/edit/:branch/:path",
  Gitee: ":repo/edit/:branch/:path",
  Bitbucket: ":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"
};
const resolveEditLinkPatterns = ({ docsRepo, editLinkPattern }) => {
  if (editLinkPattern) {
    return editLinkPattern;
  }
  const repoType = resolveRepoType(docsRepo);
  if (repoType !== null) {
    return editLinkPatterns[repoType];
  }
  return null;
};
const resolveEditLink = ({ docsRepo, docsBranch, docsDir, filePathRelative, editLinkPattern }) => {
  if (!filePathRelative)
    return null;
  const pattern = resolveEditLinkPatterns({ docsRepo, editLinkPattern });
  if (!pattern)
    return null;
  return pattern.replace(/:repo/, isLinkHttp(docsRepo) ? docsRepo : `https://github.com/${docsRepo}`).replace(/:branch/, docsBranch).replace(/:path/, removeLeadingSlash(`${removeEndingSlash(docsDir)}/${filePathRelative}`));
};
const _sfc_main$a = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const useNavbarSelectLanguage = () => {
      const router = vueRouter.useRouter();
      const routeLocale = useRouteLocale();
      const siteLocale = useSiteLocaleData();
      const themeLocale = useThemeLocaleData();
      return vue.computed(() => {
        var _a, _b;
        const localePaths = Object.keys(siteLocale.value.locales);
        if (localePaths.length < 2) {
          return [];
        }
        const currentPath = router.currentRoute.value.path;
        const currentFullPath = router.currentRoute.value.fullPath;
        const languageDropdown = {
          text: (_a = themeLocale.value.selectLanguageText) != null ? _a : "unknown language",
          ariaLabel: (_b = themeLocale.value.selectLanguageAriaLabel) != null ? _b : "unkown language",
          children: localePaths.map((targetLocalePath) => {
            var _a2, _b2, _c, _d, _e, _f;
            const targetSiteLocale = (_b2 = (_a2 = siteLocale.value.locales) == null ? void 0 : _a2[targetLocalePath]) != null ? _b2 : {};
            const targetThemeLocale = (_d = (_c = themeLocale.value.locales) == null ? void 0 : _c[targetLocalePath]) != null ? _d : {};
            const targetLang = `${targetSiteLocale.lang}`;
            const text = (_e = targetThemeLocale.selectLanguageName) != null ? _e : targetLang;
            let link;
            if (targetLang === siteLocale.value.lang) {
              link = currentFullPath;
            } else {
              const targetLocalePage = currentPath.replace(routeLocale.value, targetLocalePath);
              if (router.getRoutes().some((item) => item.path === targetLocalePage)) {
                link = targetLocalePage;
              } else {
                link = (_f = targetThemeLocale.home) != null ? _f : targetLocalePath;
              }
            }
            return {
              text,
              link
            };
          })
        };
        return [languageDropdown];
      });
    };
    const useNavbarRepo = () => {
      const themeLocale = useThemeLocaleData();
      const repo = vue.computed(() => themeLocale.value.repo);
      const repoType = vue.computed(() => repo.value ? resolveRepoType(repo.value) : null);
      const repoLink = vue.computed(() => {
        if (repo.value && !isLinkHttp(repo.value)) {
          return `https://github.com/${repo.value}`;
        }
        return repo.value;
      });
      const repoLabel = vue.computed(() => {
        if (!repoLink.value)
          return null;
        if (themeLocale.value.repoLabel)
          return themeLocale.value.repoLabel;
        if (repoType.value === null)
          return "Source";
        return repoType.value;
      });
      return vue.computed(() => {
        if (!repoLink.value || !repoLabel.value) {
          return [];
        }
        return [
          {
            text: repoLabel.value,
            link: repoLink.value
          }
        ];
      });
    };
    const resolveNavbarItem = (item) => {
      if (isString(item)) {
        return useNavLink(item);
      }
      if (item.children) {
        return __spreadProps(__spreadValues({}, item), {
          children: item.children.map(resolveNavbarItem)
        });
      }
      return item;
    };
    const useNavbarConfig = () => {
      const themeLocale = useThemeLocaleData();
      return vue.computed(() => (themeLocale.value.navbar || []).map(resolveNavbarItem));
    };
    const navbarConfig = useNavbarConfig();
    const navbarSelectLanguage = useNavbarSelectLanguage();
    const navbarRepo = useNavbarRepo();
    const navbarLinks = vue.computed(() => [
      ...navbarConfig.value,
      ...navbarSelectLanguage.value,
      ...navbarRepo.value
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      if (vue.unref(navbarLinks).length) {
        _push(`<nav${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "navbar-items" }, _attrs))}><!--[-->`);
        serverRenderer.ssrRenderList(vue.unref(navbarLinks), (item) => {
          _push(`<div class="navbar-item">`);
          if (item.children) {
            _push(serverRenderer.ssrRenderComponent(NavbarDropdown, { item }, null, _parent));
          } else {
            _push(serverRenderer.ssrRenderComponent(AutoLink, { item }, null, _parent));
          }
          _push(`</div>`);
        });
        _push(`<!--]--></nav>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/NavbarItems.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
var NavbarItems = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__file", "NavbarItems.vue"]]);
const _sfc_main$9 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const themeLocale = useThemeLocaleData();
    const isDarkMode = useDarkMode();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: "toggle-dark-button",
        title: vue.unref(themeLocale).toggleDarkMode
      }, _attrs))}><svg style="${serverRenderer.ssrRenderStyle(!vue.unref(isDarkMode) ? null : { display: "none" })}" class="icon" focusable="false" viewBox="0 0 32 32"><path d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z" fill="currentColor"></path><path d="M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z" fill="currentColor"></path><path d="M2 15.005h5v2H2z" fill="currentColor"></path><path d="M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 25.005h2v5h-2z" fill="currentColor"></path><path d="M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z" fill="currentColor"></path><path d="M25 15.005h5v2h-5z" fill="currentColor"></path><path d="M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 2.005h2v5h-2z" fill="currentColor"></path></svg><svg style="${serverRenderer.ssrRenderStyle(vue.unref(isDarkMode) ? null : { display: "none" })}" class="icon" focusable="false" viewBox="0 0 32 32"><path d="M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z" fill="currentColor"></path></svg></button>`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/ToggleDarkModeButton.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
var ToggleDarkModeButton = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__file", "ToggleDarkModeButton.vue"]]);
const _sfc_main$8 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  emits: ["toggle"],
  setup(__props) {
    const themeLocale = useThemeLocaleData();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: "toggle-sidebar-button",
        title: vue.unref(themeLocale).toggleSidebar,
        "aria-expanded": "false",
        role: "button",
        tabindex: "0"
      }, _attrs))}><div class="icon" aria-hidden="true"><span></span><span></span><span></span></div></div>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/ToggleSidebarButton.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
var ToggleSidebarButton = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__file", "ToggleSidebarButton.vue"]]);
const _sfc_main$7 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  emits: ["toggle-sidebar"],
  setup(__props) {
    const themeLocale = useThemeLocaleData();
    const navbar = vue.ref(null);
    const navbarBrand = vue.ref(null);
    const linksWrapperMaxWidth = vue.ref(0);
    const linksWrapperStyle = vue.computed(() => {
      if (!linksWrapperMaxWidth.value) {
        return {};
      }
      return {
        maxWidth: linksWrapperMaxWidth.value + "px"
      };
    });
    const enableDarkMode = vue.computed(() => themeLocale.value.darkMode);
    vue.onMounted(() => {
      const MOBILE_DESKTOP_BREAKPOINT = 719;
      const navbarHorizontalPadding = getCssValue(navbar.value, "paddingLeft") + getCssValue(navbar.value, "paddingRight");
      const handleLinksWrapWidth = () => {
        var _a;
        if (window.innerWidth <= MOBILE_DESKTOP_BREAKPOINT) {
          linksWrapperMaxWidth.value = 0;
        } else {
          linksWrapperMaxWidth.value = navbar.value.offsetWidth - navbarHorizontalPadding - (((_a = navbarBrand.value) == null ? void 0 : _a.offsetWidth) || 0);
        }
      };
      handleLinksWrapWidth();
      window.addEventListener("resize", handleLinksWrapWidth, false);
      window.addEventListener("orientationchange", handleLinksWrapWidth, false);
    });
    function getCssValue(el, property) {
      var _a, _b, _c;
      const val = (_c = (_b = (_a = el == null ? void 0 : el.ownerDocument) == null ? void 0 : _a.defaultView) == null ? void 0 : _b.getComputedStyle(el, null)) == null ? void 0 : _c[property];
      const num = Number.parseInt(val, 10);
      return Number.isNaN(num) ? 0 : num;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NavbarSearch = vue.resolveComponent("NavbarSearch");
      _push(`<header${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        ref_key: "navbar",
        ref: navbar,
        class: "navbar"
      }, _attrs))}>`);
      _push(serverRenderer.ssrRenderComponent(ToggleSidebarButton, null, null, _parent));
      _push(`<span>`);
      _push(serverRenderer.ssrRenderComponent(NavbarBrand, null, null, _parent));
      _push(`</span><div class="navbar-items-wrapper" style="${serverRenderer.ssrRenderStyle(vue.unref(linksWrapperStyle))}">`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "before", {}, null, _push, _parent);
      _push(serverRenderer.ssrRenderComponent(NavbarItems, { class: "can-hide" }, null, _parent));
      serverRenderer.ssrRenderSlot(_ctx.$slots, "after", {}, null, _push, _parent);
      if (vue.unref(enableDarkMode)) {
        _push(serverRenderer.ssrRenderComponent(ToggleDarkModeButton, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(serverRenderer.ssrRenderComponent(_component_NavbarSearch, null, null, _parent));
      _push(`</div></header>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/Navbar.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
var Navbar = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__file", "Navbar.vue"]]);
const _sfc_main$6 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const useEditNavLink = () => {
      const themeLocale2 = useThemeLocaleData();
      const page = usePageData();
      const frontmatter = usePageFrontmatter();
      return vue.computed(() => {
        var _a, _b, _c;
        const showEditLink = (_b = (_a = frontmatter.value.editLink) != null ? _a : themeLocale2.value.editLink) != null ? _b : true;
        if (!showEditLink) {
          return null;
        }
        const {
          repo,
          docsRepo = repo,
          docsBranch = "main",
          docsDir = "",
          editLinkText
        } = themeLocale2.value;
        if (!docsRepo)
          return null;
        const editLink = resolveEditLink({
          docsRepo,
          docsBranch,
          docsDir,
          filePathRelative: page.value.filePathRelative,
          editLinkPattern: (_c = frontmatter.value.editLinkPattern) != null ? _c : themeLocale2.value.editLinkPattern
        });
        if (!editLink)
          return null;
        return {
          text: editLinkText != null ? editLinkText : "Edit this page",
          link: editLink
        };
      });
    };
    const useLastUpdated = () => {
      const themeLocale2 = useThemeLocaleData();
      const page = usePageData();
      const frontmatter = usePageFrontmatter();
      return vue.computed(() => {
        var _a, _b, _c, _d;
        const showLastUpdated = (_b = (_a = frontmatter.value.lastUpdated) != null ? _a : themeLocale2.value.lastUpdated) != null ? _b : true;
        if (!showLastUpdated)
          return null;
        if (!((_c = page.value.git) == null ? void 0 : _c.updatedTime))
          return null;
        const updatedDate = new Date((_d = page.value.git) == null ? void 0 : _d.updatedTime);
        return updatedDate.toLocaleString();
      });
    };
    const useContributors = () => {
      const themeLocale2 = useThemeLocaleData();
      const page = usePageData();
      const frontmatter = usePageFrontmatter();
      return vue.computed(() => {
        var _a, _b, _c, _d;
        const showContributors = (_b = (_a = frontmatter.value.contributors) != null ? _a : themeLocale2.value.contributors) != null ? _b : true;
        if (!showContributors)
          return null;
        return (_d = (_c = page.value.git) == null ? void 0 : _c.contributors) != null ? _d : null;
      });
    };
    const themeLocale = useThemeLocaleData();
    const editNavLink = useEditNavLink();
    const lastUpdated = useLastUpdated();
    const contributors = useContributors();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = vue.resolveComponent("ClientOnly");
      _push(`<footer${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "page-meta" }, _attrs))}>`);
      if (vue.unref(editNavLink)) {
        _push(`<div class="meta-item edit-link">`);
        _push(serverRenderer.ssrRenderComponent(AutoLink, {
          class: "meta-item-label",
          item: vue.unref(editNavLink)
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (vue.unref(lastUpdated)) {
        _push(`<div class="meta-item last-updated"><span class="meta-item-label">${serverRenderer.ssrInterpolate(vue.unref(themeLocale).lastUpdatedText)}: </span>`);
        _push(serverRenderer.ssrRenderComponent(_component_ClientOnly, null, {
          default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="meta-item-info"${_scopeId}>${serverRenderer.ssrInterpolate(vue.unref(lastUpdated))}</span>`);
            } else {
              return [
                vue.createVNode("span", { class: "meta-item-info" }, vue.toDisplayString(vue.unref(lastUpdated)), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (vue.unref(contributors) && vue.unref(contributors).length) {
        _push(`<div class="meta-item contributors"><span class="meta-item-label">${serverRenderer.ssrInterpolate(vue.unref(themeLocale).contributorsText)}: </span><span class="meta-item-info"><!--[-->`);
        serverRenderer.ssrRenderList(vue.unref(contributors), (contributor, index2) => {
          _push(`<!--[--><span class="contributor"${serverRenderer.ssrRenderAttr("title", `email: ${contributor.email}`)}>${serverRenderer.ssrInterpolate(contributor.name)}</span>`);
          if (index2 !== vue.unref(contributors).length - 1) {
            _push(`<!--[-->, <!--]-->`);
          } else {
            _push(`<!---->`);
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--></span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</footer>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/PageMeta.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
var PageMeta = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__file", "PageMeta.vue"]]);
const _sfc_main$5 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const resolveFromFrontmatterConfig = (conf) => {
      if (conf === false) {
        return null;
      }
      if (isString(conf)) {
        return useNavLink(conf);
      }
      if (isPlainObject(conf)) {
        return conf;
      }
      return false;
    };
    const resolveFromSidebarItems = (sidebarItems2, currentPath, offset) => {
      const index2 = sidebarItems2.findIndex((item) => item.link === currentPath);
      if (index2 !== -1) {
        const targetItem = sidebarItems2[index2 + offset];
        if (!(targetItem == null ? void 0 : targetItem.link)) {
          return null;
        }
        return targetItem;
      }
      for (const item of sidebarItems2) {
        if (item.children) {
          const childResult = resolveFromSidebarItems(item.children, currentPath, offset);
          if (childResult) {
            return childResult;
          }
        }
      }
      return null;
    };
    const frontmatter = usePageFrontmatter();
    const sidebarItems = useSidebarItems();
    const route = vueRouter.useRoute();
    const prevNavLink = vue.computed(() => {
      const prevConfig = resolveFromFrontmatterConfig(frontmatter.value.prev);
      if (prevConfig !== false) {
        return prevConfig;
      }
      return resolveFromSidebarItems(sidebarItems.value, route.path, -1);
    });
    const nextNavLink = vue.computed(() => {
      const nextConfig = resolveFromFrontmatterConfig(frontmatter.value.next);
      if (nextConfig !== false) {
        return nextConfig;
      }
      return resolveFromSidebarItems(sidebarItems.value, route.path, 1);
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (vue.unref(prevNavLink) || vue.unref(nextNavLink)) {
        _push(`<nav${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "page-nav" }, _attrs))}><p class="inner">`);
        if (vue.unref(prevNavLink)) {
          _push(`<span class="prev">`);
          _push(serverRenderer.ssrRenderComponent(AutoLink, { item: vue.unref(prevNavLink) }, null, _parent));
          _push(`</span>`);
        } else {
          _push(`<!---->`);
        }
        if (vue.unref(nextNavLink)) {
          _push(`<span class="next">`);
          _push(serverRenderer.ssrRenderComponent(AutoLink, { item: vue.unref(nextNavLink) }, null, _parent));
          _push(`</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</p></nav>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/PageNav.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
var PageNav = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__file", "PageNav.vue"]]);
const _sfc_main$4 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Content = vue.resolveComponent("Content");
      _push(`<main${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "page" }, _attrs))}>`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "top", {}, null, _push, _parent);
      _push(`<div class="theme-default-content">`);
      _push(serverRenderer.ssrRenderComponent(_component_Content, null, null, _parent));
      _push(`</div>`);
      _push(serverRenderer.ssrRenderComponent(PageMeta, null, null, _parent));
      _push(serverRenderer.ssrRenderComponent(PageNav, null, null, _parent));
      serverRenderer.ssrRenderSlot(_ctx.$slots, "bottom", {}, null, _push, _parent);
      _push(`</main>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/Page.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
var Page = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__file", "Page.vue"]]);
const _sfc_main$3 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  props: {
    item: {
      type: Object,
      required: true
    },
    depth: {
      type: Number,
      required: false,
      default: 0
    }
  },
  setup(__props) {
    const props = __props;
    const { item, depth } = vue.toRefs(props);
    const route = vueRouter.useRoute();
    const router = vueRouter.useRouter();
    const isActive = vue.computed(() => isActiveSidebarItem(item.value, route));
    const itemClass = vue.computed(() => ({
      "sidebar-item": true,
      "sidebar-heading": depth.value === 0,
      "active": isActive.value,
      "collapsible": item.value.collapsible
    }));
    const isOpen = vue.ref(true);
    const onClick = vue.ref(void 0);
    if (item.value.collapsible) {
      isOpen.value = isActive.value;
      onClick.value = () => {
        isOpen.value = !isOpen.value;
      };
      router.afterEach(() => {
        isOpen.value = isActive.value;
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_SidebarItem = vue.resolveComponent("SidebarItem", true);
      _push(`<li${serverRenderer.ssrRenderAttrs(_attrs)}>`);
      if (vue.unref(item).link) {
        _push(serverRenderer.ssrRenderComponent(AutoLink, {
          class: vue.unref(itemClass),
          item: vue.unref(item)
        }, null, _parent));
      } else {
        _push(`<p tabindex="0" class="${serverRenderer.ssrRenderClass(vue.unref(itemClass))}">${serverRenderer.ssrInterpolate(vue.unref(item).text)} `);
        if (vue.unref(item).collapsible) {
          _push(`<span class="${serverRenderer.ssrRenderClass([isOpen.value ? "down" : "right", "arrow"])}"></span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</p>`);
      }
      if ((_a = vue.unref(item).children) == null ? void 0 : _a.length) {
        _push(serverRenderer.ssrRenderComponent(DropdownTransition, null, {
          default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<ul style="${serverRenderer.ssrRenderStyle(isOpen.value ? null : { display: "none" })}" class="sidebar-item-children"${_scopeId}><!--[-->`);
              serverRenderer.ssrRenderList(vue.unref(item).children, (child) => {
                _push2(serverRenderer.ssrRenderComponent(_component_SidebarItem, {
                  key: `${vue.unref(depth)}${child.text}${child.link}`,
                  item: child,
                  depth: vue.unref(depth) + 1
                }, null, _parent2, _scopeId));
              });
              _push2(`<!--]--></ul>`);
            } else {
              return [
                vue.withDirectives(vue.createVNode("ul", { class: "sidebar-item-children" }, [
                  (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList(vue.unref(item).children, (child) => {
                    return vue.openBlock(), vue.createBlock(_component_SidebarItem, {
                      key: `${vue.unref(depth)}${child.text}${child.link}`,
                      item: child,
                      depth: vue.unref(depth) + 1
                    }, null, 8, ["item", "depth"]);
                  }), 128))
                ], 512), [
                  [vue.vShow, isOpen.value]
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</li>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/SidebarItem.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
var SidebarItem = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__file", "SidebarItem.vue"]]);
const _sfc_main$2 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const route = vueRouter.useRoute();
    const sidebarItems = useSidebarItems();
    vue.watch(() => route.hash, (hash) => {
      const sidebar = document.querySelector(".sidebar");
      if (!sidebar)
        return;
      const activeSidebarItem = document.querySelector(`.sidebar a.sidebar-item[href="${route.path}${hash}"]`);
      if (!activeSidebarItem)
        return;
      const sidebarTop = sidebar.getBoundingClientRect().top;
      const sidebarHeight = sidebar.getBoundingClientRect().height;
      const activeSidebarItemTop = activeSidebarItem.getBoundingClientRect().top;
      const activeSidebarItemHeight = activeSidebarItem.getBoundingClientRect().height;
      if (activeSidebarItemTop < sidebarTop) {
        activeSidebarItem.scrollIntoView(true);
      } else if (activeSidebarItemTop + activeSidebarItemHeight > sidebarTop + sidebarHeight) {
        activeSidebarItem.scrollIntoView(false);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (vue.unref(sidebarItems).length) {
        _push(`<ul${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "sidebar-items" }, _attrs))}><!--[-->`);
        serverRenderer.ssrRenderList(vue.unref(sidebarItems), (item) => {
          _push(serverRenderer.ssrRenderComponent(SidebarItem, {
            key: item.link || item.text,
            item
          }, null, _parent));
        });
        _push(`<!--]--></ul>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/SidebarItems.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var SidebarItems = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__file", "SidebarItems.vue"]]);
const _sfc_main$1 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<aside${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "sidebar" }, _attrs))}>`);
      _push(serverRenderer.ssrRenderComponent(NavbarItems, null, null, _parent));
      serverRenderer.ssrRenderSlot(_ctx.$slots, "top", {}, null, _push, _parent);
      _push(serverRenderer.ssrRenderComponent(SidebarItems, null, null, _parent));
      serverRenderer.ssrRenderSlot(_ctx.$slots, "bottom", {}, null, _push, _parent);
      _push(`</aside>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/Sidebar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var Sidebar = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__file", "Sidebar.vue"]]);
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const page = usePageData();
    const frontmatter = usePageFrontmatter();
    const themeLocale = useThemeLocaleData();
    const shouldShowNavbar = vue.computed(() => frontmatter.value.navbar !== false && themeLocale.value.navbar !== false);
    const sidebarItems = useSidebarItems();
    const isSidebarOpen = vue.ref(false);
    const toggleSidebar = (to) => {
      isSidebarOpen.value = typeof to === "boolean" ? to : !isSidebarOpen.value;
    };
    const containerClass = vue.computed(() => [
      {
        "no-navbar": !shouldShowNavbar.value,
        "no-sidebar": !sidebarItems.value.length,
        "sidebar-open": isSidebarOpen.value
      },
      frontmatter.value.pageClass
    ]);
    let unregisterRouterHook;
    vue.onMounted(() => {
      const router = vueRouter.useRouter();
      unregisterRouterHook = router.afterEach(() => {
        toggleSidebar(false);
      });
    });
    vue.onUnmounted(() => {
      unregisterRouterHook();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: ["theme-container", vue.unref(containerClass)]
      }, _attrs))}>`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "navbar", {}, () => {
        if (vue.unref(shouldShowNavbar)) {
          _push(serverRenderer.ssrRenderComponent(Navbar, null, {
            before: vue.withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                serverRenderer.ssrRenderSlot(_ctx.$slots, "navbar-before", {}, null, _push2, _parent2, _scopeId);
              } else {
                return [
                  vue.renderSlot(_ctx.$slots, "navbar-before")
                ];
              }
            }),
            after: vue.withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                serverRenderer.ssrRenderSlot(_ctx.$slots, "navbar-after", {}, null, _push2, _parent2, _scopeId);
              } else {
                return [
                  vue.renderSlot(_ctx.$slots, "navbar-after")
                ];
              }
            }),
            _: 3
          }, _parent));
        } else {
          _push(`<!---->`);
        }
      }, _push, _parent);
      _push(`<div class="sidebar-mask"></div>`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "sidebar", {}, () => {
        _push(serverRenderer.ssrRenderComponent(Sidebar, null, {
          top: vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              serverRenderer.ssrRenderSlot(_ctx.$slots, "sidebar-top", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                vue.renderSlot(_ctx.$slots, "sidebar-top")
              ];
            }
          }),
          bottom: vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              serverRenderer.ssrRenderSlot(_ctx.$slots, "sidebar-bottom", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                vue.renderSlot(_ctx.$slots, "sidebar-bottom")
              ];
            }
          }),
          _: 3
        }, _parent));
      }, _push, _parent);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "page", {}, () => {
        if (vue.unref(frontmatter).home) {
          _push(serverRenderer.ssrRenderComponent(Home, null, null, _parent));
        } else {
          _push(serverRenderer.ssrRenderComponent(Page, vue.mergeProps({
            key: vue.unref(page).path
          }, _attrs), {
            top: vue.withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                serverRenderer.ssrRenderSlot(_ctx.$slots, "page-top", {}, null, _push2, _parent2, _scopeId);
              } else {
                return [
                  vue.renderSlot(_ctx.$slots, "page-top")
                ];
              }
            }),
            bottom: vue.withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                serverRenderer.ssrRenderSlot(_ctx.$slots, "page-bottom", {}, null, _push2, _parent2, _scopeId);
              } else {
                return [
                  vue.renderSlot(_ctx.$slots, "page-bottom")
                ];
              }
            }),
            _: 3
          }, _parent));
        }
      }, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/layouts/Layout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var Layout = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "Layout.vue"]]);
var Layout$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": Layout
}, Symbol.toStringTag, { value: "Module" }));
exports.createVueApp = createVueApp;
