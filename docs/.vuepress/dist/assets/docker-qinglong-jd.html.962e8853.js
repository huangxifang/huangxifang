import { _ as _export_sfc, r as resolveComponent, o as openBlock, a as createElementBlock, b as createBaseVNode, d as createVNode, F as Fragment, e as createTextVNode, c as createStaticVNode } from "./app.99fb5ebb.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "centos7\u5B89\u88C5\u9752\u9F99\u9762\u677F-jd\u7B7E\u5230",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#centos7\u5B89\u88C5\u9752\u9F99\u9762\u677F-jd\u7B7E\u5230",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" centos7\u5B89\u88C5\u9752\u9F99\u9762\u677F\uFF08JD\u7B7E\u5230\uFF09")
], -1);
const _hoisted_2 = /* @__PURE__ */ createTextVNode("\u9752\u9F99\u9762\u677F\u4ED3\u5E93\uFF1A");
const _hoisted_3 = {
  href: "https://github.com/whyour/qinglong",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_4 = /* @__PURE__ */ createTextVNode("https://github.com/whyour/qinglong");
const _hoisted_5 = /* @__PURE__ */ createTextVNode("JD\u7B7E\u5230\u4ED3\u5E93\uFF1A");
const _hoisted_6 = {
  href: "https://github.com/yuannian1112/jd_scripts",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_7 = /* @__PURE__ */ createTextVNode("https://github.com/yuannian1112/jd_scripts");
const _hoisted_8 = /* @__PURE__ */ createTextVNode("\u6559\u7A0B\u8BBA\u575B\uFF1A ");
const _hoisted_9 = {
  href: "https://www.kejiwanjia.com/newsflashes",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_10 = /* @__PURE__ */ createTextVNode("https://www.kejiwanjia.com/newsflashes");
const _hoisted_11 = /* @__PURE__ */ createTextVNode("\u73AF\u5883\u53D8\u91CF\uFF1A");
const _hoisted_12 = {
  href: "https://www.likecs.com/show-301298.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_13 = /* @__PURE__ */ createTextVNode("https://www.likecs.com/show-301298.html");
const _hoisted_14 = /* @__PURE__ */ createStaticVNode('<h2 id="\u5B89\u88C5docker" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5docker" aria-hidden="true">#</a> \u5B89\u88C5docker</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">curl</span> -sSL get.docker.com <span class="token operator">|</span> <span class="token function">sh</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="\u5B89\u88C5\u9752\u9F99\u955C\u50CF" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u9752\u9F99\u955C\u50CF" aria-hidden="true">#</a> \u5B89\u88C5\u9752\u9F99\u955C\u50CF</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> run -dit <span class="token punctuation">\\</span>\n  -v <span class="token environment constant">$PWD</span>/ql:/ql/data <span class="token punctuation">\\</span>\n  -p <span class="token number">5700</span>:5700 <span class="token punctuation">\\</span>\n  --name qinglong <span class="token punctuation">\\</span>\n  --hostname qinglong <span class="token punctuation">\\</span>\n  --restart unless-stopped <span class="token punctuation">\\</span>\n  whyour/qinglong:latest\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="\u62C9\u5E93" tabindex="-1"><a class="header-anchor" href="#\u62C9\u5E93" aria-hidden="true">#</a> \u62C9\u5E93</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> -it qinglong <span class="token function">bash</span>\nql repo https://github.com/yuannian1112/jd_scripts.git <span class="token string">&quot;jd_|jx_|getJDCookie&quot;</span> <span class="token string">&quot;activity|backUp&quot;</span> <span class="token string">&quot;^jd[^_]|USER|utils|jdCookie.js|sendNotify.js&quot;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="\u914D\u7F6E\u73AF\u5883\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u73AF\u5883\u53D8\u91CF" aria-hidden="true">#</a> \u914D\u7F6E\u73AF\u5883\u53D8\u91CF</h2><blockquote><p>\u590D\u5236JD\u767B\u5F55cookie</p></blockquote>', 8);
const _hoisted_22 = /* @__PURE__ */ createTextVNode("\u4EAC\u4E1Ccookie,\u591A\u4E2A\u8D26\u53F7\u7684cookie\u4F7F\u7528&\u9694\u5F00\uFF0C\u4F8B\uFF1Apt_key=XXX;pt_pin=XXX;&pt_key=XXX;pt_pin=XXX;&pt_key=XXX;pt_pin=XXX;\u3002\u5177\u4F53\u83B7\u53D6\u53C2\u8003\u6D4F\u89C8\u5668\u83B7\u53D6");
const _hoisted_23 = {
  href: "https://github.com/chinnkarahoi/jd_scripts/blob/master/backUp/GetJdCookie.md",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_24 = /* @__PURE__ */ createTextVNode("\u4EAC\u4E1Ccookie\u6559\u7A0B");
const _hoisted_25 = /* @__PURE__ */ createTextVNode(" \u6216\u8005 ");
const _hoisted_26 = {
  href: "https://github.com/chinnkarahoi/jd_scripts/blob/master/backUp/GetJdCookie.md",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_27 = /* @__PURE__ */ createTextVNode("\u83B7\u53D6\u4EAC\u4E1Ccookie\u6559\u7A0B");
const _hoisted_28 = /* @__PURE__ */ createTextVNode("\u63D2\u4EF6");
const _hoisted_29 = /* @__PURE__ */ createStaticVNode('<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token constant">CV</span> <span class="token operator">=</span> <span class="token string">&#39;JD cookie\u503C&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> CookieValue <span class="token operator">=</span> <span class="token constant">CV</span><span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">pt_key=.+?;</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token constant">CV</span><span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">pt_pin=.+?;</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">copy</span><span class="token punctuation">(</span>CookieValue<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>', 1);
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("p", null, [
      _hoisted_2,
      createBaseVNode("a", _hoisted_3, [
        _hoisted_4,
        createVNode(_component_ExternalLinkIcon)
      ])
    ]),
    createBaseVNode("p", null, [
      _hoisted_5,
      createBaseVNode("a", _hoisted_6, [
        _hoisted_7,
        createVNode(_component_ExternalLinkIcon)
      ])
    ]),
    createBaseVNode("p", null, [
      _hoisted_8,
      createBaseVNode("a", _hoisted_9, [
        _hoisted_10,
        createVNode(_component_ExternalLinkIcon)
      ])
    ]),
    createBaseVNode("p", null, [
      _hoisted_11,
      createBaseVNode("a", _hoisted_12, [
        _hoisted_13,
        createVNode(_component_ExternalLinkIcon)
      ])
    ]),
    _hoisted_14,
    createBaseVNode("p", null, [
      _hoisted_22,
      createBaseVNode("a", _hoisted_23, [
        _hoisted_24,
        createVNode(_component_ExternalLinkIcon)
      ]),
      _hoisted_25,
      createBaseVNode("a", _hoisted_26, [
        _hoisted_27,
        createVNode(_component_ExternalLinkIcon)
      ]),
      _hoisted_28
    ]),
    _hoisted_29
  ], 64);
}
var dockerQinglongJd_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "docker-qinglong-jd.html.vue"]]);
export { dockerQinglongJd_html as default };
