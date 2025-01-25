var ki = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
import { Fragment as er, isVNode as Li, Comment as Fi, Text as Go, computed as x, inject as le, provide as pe, ref as ae, defineComponent as M, shallowRef as D, getCurrentInstance as en, watch as ne, unref as Xt, watchEffect as Je, onBeforeUnmount as $t, triggerRef as Di, createVNode as h, h as We, onBeforeMount as Wi, onMounted as Ze, onUpdated as Xo, nextTick as tn, Teleport as Vo, reactive as ye, Transition as Uo, render as ht, onUnmounted as Gi, TransitionGroup as Ko, toRaw as Xi, openBlock as Vi, createBlock as Ui, withCtx as Ki, createTextVNode as qi, createApp as Yi } from "vue";
var Mp = ki((ue, fe) => {
  function vt(e) {
    "@babel/helpers - typeof";
    return vt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
      return typeof t;
    } : function(t) {
      return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    }, vt(e);
  }
  function Qi(e, t) {
    if (vt(e) != "object" || !e) return e;
    var n = e[Symbol.toPrimitive];
    if (n !== void 0) {
      var r = n.call(e, t || "default");
      if (vt(r) != "object") return r;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (t === "string" ? String : Number)(e);
  }
  function Ji(e) {
    var t = Qi(e, "string");
    return vt(t) == "symbol" ? t : t + "";
  }
  function Zi(e, t, n) {
    return (t = Ji(t)) in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e;
  }
  function Ir(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t && (r = r.filter(function(o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })), n.push.apply(n, r);
    }
    return n;
  }
  function j(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t] != null ? arguments[t] : {};
      t % 2 ? Ir(Object(n), !0).forEach(function(r) {
        Zi(e, r, n[r]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ir(Object(n)).forEach(function(r) {
        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
      });
    }
    return e;
  }
  function d() {
    return d = Object.assign ? Object.assign.bind() : function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    }, d.apply(null, arguments);
  }
  const el = Array.isArray, tl = (e) => typeof e == "string", nl = (e) => e !== null && typeof e == "object";
  function ze(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 ? arguments[2] : void 0;
    return typeof e == "function" ? e(t) : e ?? n;
  }
  function rl(e) {
    let t;
    const n = new Promise((o) => {
      t = e(() => {
        o(!0);
      });
    }), r = () => {
      t == null || t();
    };
    return r.then = (o, a) => n.then(o, a), r.promise = n, r;
  }
  function B() {
    const e = [];
    for (let t = 0; t < arguments.length; t++) {
      const n = t < 0 || arguments.length <= t ? void 0 : arguments[t];
      if (n) {
        if (tl(n))
          e.push(n);
        else if (el(n))
          for (let r = 0; r < n.length; r++) {
            const o = B(n[r]);
            o && e.push(o);
          }
        else if (nl(n))
          for (const r in n)
            n[r] && e.push(r);
      }
    }
    return e.join(" ");
  }
  const ol = (e) => e != null && e !== "", al = (e, t) => {
    const n = d({}, e);
    return Object.keys(t).forEach((r) => {
      const o = n[r];
      if (o)
        o.type || o.default ? o.default = t[r] : o.def ? o.def(t[r]) : n[r] = {
          type: o,
          default: t[r]
        };
      else
        throw new Error(`not have ${r} prop`);
    }), n;
  }, il = Symbol("skipFlatten"), yt = function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
    const n = Array.isArray(e) ? e : [e], r = [];
    return n.forEach((o) => {
      Array.isArray(o) ? r.push(...yt(o, t)) : o && o.type === er ? o.key === il ? r.push(o) : r.push(...yt(o.children, t)) : o && Li(o) ? t && !qo(o) ? r.push(o) : t || r.push(o) : ol(o) && r.push(o);
    }), r;
  }, En = (e) => {
    var t;
    let n = ((t = e == null ? void 0 : e.vnode) === null || t === void 0 ? void 0 : t.el) || e && (e.$el || e);
    for (; n && !n.tagName; )
      n = n.nextSibling;
    return n;
  };
  function qo(e) {
    return e && (e.type === Fi || e.type === er && e.children.length === 0 || e.type === Go && e.children.trim() === "");
  }
  function Yo() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    const t = [];
    return e.forEach((n) => {
      Array.isArray(n) ? t.push(...n) : (n == null ? void 0 : n.type) === er ? t.push(...Yo(n.children)) : t.push(n);
    }), t.filter((n) => !qo(n));
  }
  let Qo = (e) => setTimeout(e, 16), Jo = (e) => clearTimeout(e);
  typeof window < "u" && "requestAnimationFrame" in window && (Qo = (e) => window.requestAnimationFrame(e), Jo = (e) => window.cancelAnimationFrame(e));
  let Er = 0;
  const tr = /* @__PURE__ */ new Map();
  function Zo(e) {
    tr.delete(e);
  }
  function _n(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
    Er += 1;
    const n = Er;
    function r(o) {
      if (o === 0)
        Zo(n), e();
      else {
        const a = Qo(() => {
          r(o - 1);
        });
        tr.set(n, a);
      }
    }
    return r(t), n;
  }
  _n.cancel = (e) => {
    const t = tr.get(e);
    return Zo(t), Jo(t);
  };
  const Vt = function() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return t;
  }, nr = (e) => {
    const t = e;
    return t.install = function(n) {
      n.component(t.displayName || t.name, e);
    }, e;
  };
  function _r() {
    return {
      type: [Function, Array]
    };
  }
  function K(e) {
    return {
      type: Object,
      default: e
    };
  }
  function ft(e) {
    return {
      type: Boolean,
      default: e
    };
  }
  function An(e, t) {
    const n = {
      validator: () => !0,
      default: e
    };
    return n;
  }
  function Ar(e) {
    return {
      type: Array,
      default: e
    };
  }
  function Mr(e) {
    return {
      type: String,
      default: e
    };
  }
  function ll(e, t) {
    return e ? {
      type: e,
      default: t
    } : An(t);
  }
  const rr = "anticon", cl = Symbol("GlobalFormContextKey"), sl = (e) => {
    pe(cl, e);
  }, ul = () => ({
    iconPrefixCls: String,
    getTargetContainer: {
      type: Function
    },
    getPopupContainer: {
      type: Function
    },
    prefixCls: String,
    getPrefixCls: {
      type: Function
    },
    renderEmpty: {
      type: Function
    },
    transformCellText: {
      type: Function
    },
    csp: K(),
    input: K(),
    autoInsertSpaceInButton: {
      type: Boolean,
      default: void 0
    },
    locale: K(),
    pageHeader: K(),
    componentSize: {
      type: String
    },
    componentDisabled: {
      type: Boolean,
      default: void 0
    },
    direction: {
      type: String,
      default: "ltr"
    },
    space: K(),
    virtual: {
      type: Boolean,
      default: void 0
    },
    dropdownMatchSelectWidth: {
      type: [Number, Boolean],
      default: !0
    },
    form: K(),
    pagination: K(),
    theme: K(),
    select: K(),
    wave: K()
  }), or = Symbol("configProvider"), ea = {
    getPrefixCls: (e, t) => t || (e ? `ant-${e}` : "ant"),
    iconPrefixCls: x(() => rr),
    getPopupContainer: x(() => () => document.body),
    direction: x(() => "ltr")
  }, ar = () => le(or, ea), fl = (e) => pe(or, e), ta = Symbol("DisabledContextKey"), ir = () => le(ta, ae(void 0)), dl = (e) => {
    const t = ir();
    return pe(ta, x(() => {
      var n;
      return (n = e.value) !== null && n !== void 0 ? n : t.value;
    })), e;
  }, pl = {
    // Options.jsx
    items_per_page: "/ page",
    jump_to: "Go to",
    jump_to_confirm: "confirm",
    page: "",
    // Pagination.jsx
    prev_page: "Previous Page",
    next_page: "Next Page",
    prev_5: "Previous 5 Pages",
    next_5: "Next 5 Pages",
    prev_3: "Previous 3 Pages",
    next_3: "Next 3 Pages"
  }, gl = {
    locale: "en_US",
    today: "Today",
    now: "Now",
    backToToday: "Back to today",
    ok: "Ok",
    clear: "Clear",
    month: "Month",
    year: "Year",
    timeSelect: "select time",
    dateSelect: "select date",
    weekSelect: "Choose a week",
    monthSelect: "Choose a month",
    yearSelect: "Choose a year",
    decadeSelect: "Choose a decade",
    yearFormat: "YYYY",
    dateFormat: "M/D/YYYY",
    dayFormat: "D",
    dateTimeFormat: "M/D/YYYY HH:mm:ss",
    monthBeforeYear: !0,
    previousMonth: "Previous month (PageUp)",
    nextMonth: "Next month (PageDown)",
    previousYear: "Last year (Control + left)",
    nextYear: "Next year (Control + right)",
    previousDecade: "Last decade",
    nextDecade: "Next decade",
    previousCentury: "Last century",
    nextCentury: "Next century"
  }, na = {
    placeholder: "Select time",
    rangePlaceholder: ["Start time", "End time"]
  }, jr = {
    lang: d({
      placeholder: "Select date",
      yearPlaceholder: "Select year",
      quarterPlaceholder: "Select quarter",
      monthPlaceholder: "Select month",
      weekPlaceholder: "Select week",
      rangePlaceholder: ["Start date", "End date"],
      rangeYearPlaceholder: ["Start year", "End year"],
      rangeQuarterPlaceholder: ["Start quarter", "End quarter"],
      rangeMonthPlaceholder: ["Start month", "End month"],
      rangeWeekPlaceholder: ["Start week", "End week"]
    }, gl),
    timePickerLocale: d({}, na)
  }, q = "${label} is not a valid ${type}", bt = {
    locale: "en",
    Pagination: pl,
    DatePicker: jr,
    TimePicker: na,
    Calendar: jr,
    global: {
      placeholder: "Please select"
    },
    Table: {
      filterTitle: "Filter menu",
      filterConfirm: "OK",
      filterReset: "Reset",
      filterEmptyText: "No filters",
      filterCheckall: "Select all items",
      filterSearchPlaceholder: "Search in filters",
      emptyText: "No data",
      selectAll: "Select current page",
      selectInvert: "Invert current page",
      selectNone: "Clear all data",
      selectionAll: "Select all data",
      sortTitle: "Sort",
      expand: "Expand row",
      collapse: "Collapse row",
      triggerDesc: "Click to sort descending",
      triggerAsc: "Click to sort ascending",
      cancelSort: "Click to cancel sorting"
    },
    Tour: {
      Next: "Next",
      Previous: "Previous",
      Finish: "Finish"
    },
    Modal: {
      okText: "OK",
      cancelText: "Cancel",
      justOkText: "OK"
    },
    Popconfirm: {
      okText: "OK",
      cancelText: "Cancel"
    },
    Transfer: {
      titles: ["", ""],
      searchPlaceholder: "Search here",
      itemUnit: "item",
      itemsUnit: "items",
      remove: "Remove",
      selectCurrent: "Select current page",
      removeCurrent: "Remove current page",
      selectAll: "Select all data",
      removeAll: "Remove all data",
      selectInvert: "Invert current page"
    },
    Upload: {
      uploading: "Uploading...",
      removeFile: "Remove file",
      uploadError: "Upload error",
      previewFile: "Preview file",
      downloadFile: "Download file"
    },
    Empty: {
      description: "No data"
    },
    Icon: {
      icon: "icon"
    },
    Text: {
      edit: "Edit",
      copy: "Copy",
      copied: "Copied",
      expand: "Expand"
    },
    PageHeader: {
      back: "Back"
    },
    Form: {
      optional: "(optional)",
      defaultValidateMessages: {
        default: "Field validation error for ${label}",
        required: "Please enter ${label}",
        enum: "${label} must be one of [${enum}]",
        whitespace: "${label} cannot be a blank character",
        date: {
          format: "${label} date format is invalid",
          parse: "${label} cannot be converted to a date",
          invalid: "${label} is an invalid date"
        },
        types: {
          string: q,
          method: q,
          array: q,
          object: q,
          number: q,
          date: q,
          boolean: q,
          integer: q,
          float: q,
          regexp: q,
          email: q,
          url: q,
          hex: q
        },
        string: {
          len: "${label} must be ${len} characters",
          min: "${label} must be at least ${min} characters",
          max: "${label} must be up to ${max} characters",
          range: "${label} must be between ${min}-${max} characters"
        },
        number: {
          len: "${label} must be equal to ${len}",
          min: "${label} must be minimum ${min}",
          max: "${label} must be maximum ${max}",
          range: "${label} must be between ${min}-${max}"
        },
        array: {
          len: "Must be ${len} ${label}",
          min: "At least ${min} ${label}",
          max: "At most ${max} ${label}",
          range: "The amount of ${label} must be between ${min}-${max}"
        },
        pattern: {
          mismatch: "${label} does not match the pattern ${pattern}"
        }
      }
    },
    Image: {
      preview: "Preview"
    },
    QRCode: {
      expired: "QR code expired",
      refresh: "Refresh",
      scanned: "Scanned"
    }
  }, ra = M({
    compatConfig: {
      MODE: 3
    },
    name: "LocaleReceiver",
    props: {
      componentName: String,
      defaultLocale: {
        type: [Object, Function]
      },
      children: {
        type: Function
      }
    },
    setup(e, t) {
      let {
        slots: n
      } = t;
      const r = le("localeData", {}), o = x(() => {
        const {
          componentName: i = "global",
          defaultLocale: l
        } = e, c = l || bt[i || "global"], {
          antLocale: s
        } = r, f = i && s ? s[i] : {};
        return d(d({}, typeof c == "function" ? c() : c), f || {});
      }), a = x(() => {
        const {
          antLocale: i
        } = r, l = i && i.locale;
        return i && i.exist && !l ? bt.locale : l;
      });
      return () => {
        const i = e.children || n.default, {
          antLocale: l
        } = r;
        return i == null ? void 0 : i(o.value, a.value, l);
      };
    }
  });
  function lr(e) {
    for (var t = 0, n, r = 0, o = e.length; o >= 4; ++r, o -= 4)
      n = e.charCodeAt(r) & 255 | (e.charCodeAt(++r) & 255) << 8 | (e.charCodeAt(++r) & 255) << 16 | (e.charCodeAt(++r) & 255) << 24, n = /* Math.imul(k, m): */
      (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), n ^= /* k >>> r: */
      n >>> 24, t = /* Math.imul(k, m): */
      (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
    switch (o) {
      case 3:
        t ^= (e.charCodeAt(r + 2) & 255) << 16;
      case 2:
        t ^= (e.charCodeAt(r + 1) & 255) << 8;
      case 1:
        t ^= e.charCodeAt(r) & 255, t = /* Math.imul(h, m): */
        (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
    }
    return t ^= t >>> 13, t = /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
  }
  const Hr = "%";
  class ml {
    constructor(t) {
      this.cache = /* @__PURE__ */ new Map(), this.instanceId = t;
    }
    get(t) {
      return this.cache.get(Array.isArray(t) ? t.join(Hr) : t) || null;
    }
    update(t, n) {
      const r = Array.isArray(t) ? t.join(Hr) : t, o = this.cache.get(r), a = n(o);
      a === null ? this.cache.delete(r) : this.cache.set(r, a);
    }
  }
  const oa = "data-token-hash", Pe = "data-css-hash", ke = "__cssinjs_instance__";
  function Ct() {
    const e = Math.random().toString(12).slice(2);
    if (typeof document < "u" && document.head && document.body) {
      const t = document.body.querySelectorAll(`style[${Pe}]`) || [], {
        firstChild: n
      } = document.head;
      Array.from(t).forEach((o) => {
        o[ke] = o[ke] || e, o[ke] === e && document.head.insertBefore(o, n);
      });
      const r = {};
      Array.from(document.querySelectorAll(`style[${Pe}]`)).forEach((o) => {
        var a;
        const i = o.getAttribute(Pe);
        r[i] ? o[ke] === e && ((a = o.parentNode) === null || a === void 0 || a.removeChild(o)) : r[i] = !0;
      });
    }
    return new ml(e);
  }
  const aa = Symbol("StyleContextKey"), hl = () => {
    var e, t, n;
    const r = en();
    let o;
    if (r && r.appContext) {
      const a = (n = (t = (e = r.appContext) === null || e === void 0 ? void 0 : e.config) === null || t === void 0 ? void 0 : t.globalProperties) === null || n === void 0 ? void 0 : n.__ANTDV_CSSINJS_CACHE__;
      a ? o = a : (o = Ct(), r.appContext.config.globalProperties && (r.appContext.config.globalProperties.__ANTDV_CSSINJS_CACHE__ = o));
    } else
      o = Ct();
    return o;
  }, ia = {
    cache: Ct(),
    defaultCache: !0,
    hashPriority: "low"
  }, nn = () => {
    const e = hl();
    return le(aa, D(d(d({}, ia), {
      cache: e
    })));
  }, vl = (e) => {
    const t = nn(), n = D(d(d({}, ia), {
      cache: Ct()
    }));
    return ne([() => Xt(e), t], () => {
      const r = d({}, t.value), o = Xt(e);
      Object.keys(o).forEach((i) => {
        const l = o[i];
        o[i] !== void 0 && (r[i] = l);
      });
      const {
        cache: a
      } = o;
      r.cache = r.cache || Ct(), r.defaultCache = !a && t.value.defaultCache, n.value = r;
    }, {
      immediate: !0
    }), pe(aa, n), n;
  }, yl = () => ({
    autoClear: ft(),
    /** @private Test only. Not work in production. */
    mock: Mr(),
    /**
     * Only set when you need ssr to extract style on you own.
     * If not provided, it will auto create <style /> on the end of Provider in server side.
     */
    cache: K(),
    /** Tell children that this context is default generated context */
    defaultCache: ft(),
    /** Use `:where` selector to reduce hashId css selector priority */
    hashPriority: Mr(),
    /** Tell cssinjs where to inject style in */
    container: ll(),
    /** Component wil render inline  `<style />` for fallback in SSR. Not recommend. */
    ssrInline: ft(),
    /** Transform css before inject in document. Please note that `transformers` do not support dynamic update */
    transformers: Ar(),
    /**
     * Linters to lint css before inject in document.
     * Styles will be linted after transforming.
     * Please note that `linters` do not support dynamic update.
     */
    linters: Ar()
  });
  nr(M({
    name: "AStyleProvider",
    inheritAttrs: !1,
    props: yl(),
    setup(e, t) {
      let {
        slots: n
      } = t;
      return vl(e), () => {
        var r;
        return (r = n.default) === null || r === void 0 ? void 0 : r.call(n);
      };
    }
  }));
  function la(e, t, n, r) {
    const o = nn(), a = D(""), i = D();
    Je(() => {
      a.value = [e, ...t.value].join("%");
    });
    const l = (c) => {
      o.value.cache.update(c, (s) => {
        const [f = 0, u] = s || [];
        return f - 1 === 0 ? (r == null || r(u, !1), null) : [f - 1, u];
      });
    };
    return ne(a, (c, s) => {
      s && l(s), o.value.cache.update(c, (f) => {
        const [u = 0, p] = f || [], b = p || n();
        return [u + 1, b];
      }), i.value = o.value.cache.get(a.value)[1];
    }, {
      immediate: !0
    }), $t(() => {
      l(a.value);
    }), i;
  }
  function et() {
    return !!(typeof window < "u" && window.document && window.document.createElement);
  }
  function bl(e, t) {
    return e && e.contains ? e.contains(t) : !1;
  }
  const Rr = "data-vc-order", Cl = "vc-util-key", Mn = /* @__PURE__ */ new Map();
  function ca() {
    let {
      mark: e
    } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return e ? e.startsWith("data-") ? e : `data-${e}` : Cl;
  }
  function rn(e) {
    return e.attachTo ? e.attachTo : document.querySelector("head") || document.body;
  }
  function xl(e) {
    return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
  }
  function sa(e) {
    return Array.from((Mn.get(e) || e).children).filter((t) => t.tagName === "STYLE");
  }
  function ua(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!et())
      return null;
    const {
      csp: n,
      prepend: r
    } = t, o = document.createElement("style");
    o.setAttribute(Rr, xl(r)), n != null && n.nonce && (o.nonce = n == null ? void 0 : n.nonce), o.innerHTML = e;
    const a = rn(t), {
      firstChild: i
    } = a;
    if (r) {
      if (r === "queue") {
        const l = sa(a).filter((c) => ["prepend", "prependQueue"].includes(c.getAttribute(Rr)));
        if (l.length)
          return a.insertBefore(o, l[l.length - 1].nextSibling), o;
      }
      a.insertBefore(o, i);
    } else
      a.appendChild(o);
    return o;
  }
  function fa(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const n = rn(t);
    return sa(n).find((r) => r.getAttribute(ca(t)) === e);
  }
  function da(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const n = fa(e, t);
    n && rn(t).removeChild(n);
  }
  function Sl(e, t) {
    const n = Mn.get(e);
    if (!n || !bl(document, n)) {
      const r = ua("", t), {
        parentNode: o
      } = r;
      Mn.set(e, o), e.removeChild(r);
    }
  }
  function Ut(e, t) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    var r, o, a;
    const i = rn(n);
    Sl(i, n);
    const l = fa(t, n);
    if (l)
      return !((r = n.csp) === null || r === void 0) && r.nonce && l.nonce !== ((o = n.csp) === null || o === void 0 ? void 0 : o.nonce) && (l.nonce = (a = n.csp) === null || a === void 0 ? void 0 : a.nonce), l.innerHTML !== e && (l.innerHTML = e), l;
    const c = ua(e, n);
    return c.setAttribute(ca(n), t), c;
  }
  function $l(e, t) {
    if (e.length !== t.length)
      return !1;
    for (let n = 0; n < e.length; n++)
      if (e[n] !== t[n])
        return !1;
    return !0;
  }
  class Ge {
    constructor() {
      this.cache = /* @__PURE__ */ new Map(), this.keys = [], this.cacheCallTimes = 0;
    }
    size() {
      return this.keys.length;
    }
    internalGet(t) {
      let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, r = {
        map: this.cache
      };
      return t.forEach((o) => {
        var a;
        r ? r = (a = r == null ? void 0 : r.map) === null || a === void 0 ? void 0 : a.get(o) : r = void 0;
      }), r != null && r.value && n && (r.value[1] = this.cacheCallTimes++), r == null ? void 0 : r.value;
    }
    get(t) {
      var n;
      return (n = this.internalGet(t, !0)) === null || n === void 0 ? void 0 : n[0];
    }
    has(t) {
      return !!this.internalGet(t);
    }
    set(t, n) {
      if (!this.has(t)) {
        if (this.size() + 1 > Ge.MAX_CACHE_SIZE + Ge.MAX_CACHE_OFFSET) {
          const [o] = this.keys.reduce((a, i) => {
            const [, l] = a;
            return this.internalGet(i)[1] < l ? [i, this.internalGet(i)[1]] : a;
          }, [this.keys[0], this.cacheCallTimes]);
          this.delete(o);
        }
        this.keys.push(t);
      }
      let r = this.cache;
      t.forEach((o, a) => {
        if (a === t.length - 1)
          r.set(o, {
            value: [n, this.cacheCallTimes++]
          });
        else {
          const i = r.get(o);
          i ? i.map || (i.map = /* @__PURE__ */ new Map()) : r.set(o, {
            map: /* @__PURE__ */ new Map()
          }), r = r.get(o).map;
        }
      });
    }
    deleteByPath(t, n) {
      var r;
      const o = t.get(n[0]);
      if (n.length === 1)
        return o.map ? t.set(n[0], {
          map: o.map
        }) : t.delete(n[0]), (r = o.value) === null || r === void 0 ? void 0 : r[0];
      const a = this.deleteByPath(o.map, n.slice(1));
      return (!o.map || o.map.size === 0) && !o.value && t.delete(n[0]), a;
    }
    delete(t) {
      if (this.has(t))
        return this.keys = this.keys.filter((n) => !$l(n, t)), this.deleteByPath(this.cache, t);
    }
  }
  Ge.MAX_CACHE_SIZE = 20;
  Ge.MAX_CACHE_OFFSET = 5;
  let Nr = {};
  function wl(e, t) {
  }
  function Tl(e, t, n) {
    !t && !Nr[n] && (Nr[n] = !0);
  }
  function Ol(e, t) {
    Tl(wl, e, t);
  }
  function Pl() {
  }
  let pa = Pl, Br = 0;
  class ga {
    constructor(t) {
      this.derivatives = Array.isArray(t) ? t : [t], this.id = Br, t.length === 0 && pa(t.length > 0), Br += 1;
    }
    getDerivativeToken(t) {
      return this.derivatives.reduce((n, r) => r(t, n), void 0);
    }
  }
  const gn = new Ge();
  function ma(e) {
    const t = Array.isArray(e) ? e : [e];
    return gn.has(t) || gn.set(t, new ga(t)), gn.get(t);
  }
  const zr = /* @__PURE__ */ new WeakMap();
  function Kt(e) {
    let t = zr.get(e) || "";
    return t || (Object.keys(e).forEach((n) => {
      const r = e[n];
      t += n, r instanceof ga ? t += r.id : r && typeof r == "object" ? t += Kt(r) : t += r;
    }), zr.set(e, t)), t;
  }
  function Il(e, t) {
    return lr(`${t}_${Kt(e)}`);
  }
  const dt = `random-${Date.now()}-${Math.random()}`.replace(/\./g, ""), ha = "_bAmBoO_";
  function El(e, t, n) {
    var r, o;
    if (et()) {
      Ut(e, dt);
      const a = document.createElement("div");
      a.style.position = "fixed", a.style.left = "0", a.style.top = "0", t == null || t(a), document.body.appendChild(a);
      const i = n ? n(a) : (r = getComputedStyle(a).content) === null || r === void 0 ? void 0 : r.includes(ha);
      return (o = a.parentNode) === null || o === void 0 || o.removeChild(a), da(dt), i;
    }
    return !1;
  }
  let mn;
  function _l() {
    return mn === void 0 && (mn = El(`@layer ${dt} { .${dt} { content: "${ha}"!important; } }`, (e) => {
      e.className = dt;
    })), mn;
  }
  const kr = {}, Al = "css", we = /* @__PURE__ */ new Map();
  function Ml(e) {
    we.set(e, (we.get(e) || 0) + 1);
  }
  function jl(e, t) {
    typeof document < "u" && document.querySelectorAll(`style[${oa}="${e}"]`).forEach((r) => {
      var o;
      r[ke] === t && ((o = r.parentNode) === null || o === void 0 || o.removeChild(r));
    });
  }
  const Hl = 0;
  function Rl(e, t) {
    we.set(e, (we.get(e) || 0) - 1);
    const n = Array.from(we.keys()), r = n.filter((o) => (we.get(o) || 0) <= 0);
    n.length - r.length > Hl && r.forEach((o) => {
      jl(o, t), we.delete(o);
    });
  }
  const Nl = (e, t, n, r) => {
    const o = n.getDerivativeToken(e);
    let a = d(d({}, o), t);
    return r && (a = r(a)), a;
  };
  function Bl(e, t) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ae({});
    const r = nn(), o = x(() => d({}, ...t.value)), a = x(() => Kt(o.value)), i = x(() => Kt(n.value.override || kr));
    return la("token", x(() => [n.value.salt || "", e.value.id, a.value, i.value]), () => {
      const {
        salt: c = "",
        override: s = kr,
        formatToken: f,
        getComputedToken: u
      } = n.value, p = u ? u(o.value, s, e.value) : Nl(o.value, s, e.value, f), v = Il(p, c);
      p._tokenKey = v, Ml(v);
      const b = `${Al}-${lr(v)}`;
      return p._hashId = b, [p, b];
    }, (c) => {
      var s;
      Rl(c[0]._tokenKey, (s = r.value) === null || s === void 0 ? void 0 : s.cache.instanceId);
    });
  }
  var zl = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    // SVG-related properties
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1
  }, va = "comm", ya = "rule", ba = "decl", kl = "@import", Ll = "@keyframes", Fl = "@layer", Ca = Math.abs, cr = String.fromCharCode;
  function xa(e) {
    return e.trim();
  }
  function zt(e, t, n) {
    return e.replace(t, n);
  }
  function Dl(e, t, n) {
    return e.indexOf(t, n);
  }
  function Le(e, t) {
    return e.charCodeAt(t) | 0;
  }
  function Xe(e, t, n) {
    return e.slice(t, n);
  }
  function oe(e) {
    return e.length;
  }
  function Wl(e) {
    return e.length;
  }
  function At(e, t) {
    return t.push(e), e;
  }
  var on = 1, Ve = 1, Sa = 0, Z = 0, R = 0, tt = "";
  function sr(e, t, n, r, o, a, i, l) {
    return { value: e, root: t, parent: n, type: r, props: o, children: a, line: on, column: Ve, length: i, return: "", siblings: l };
  }
  function Gl() {
    return R;
  }
  function Xl() {
    return R = Z > 0 ? Le(tt, --Z) : 0, Ve--, R === 10 && (Ve = 1, on--), R;
  }
  function te() {
    return R = Z < Sa ? Le(tt, Z++) : 0, Ve++, R === 10 && (Ve = 1, on++), R;
  }
  function he() {
    return Le(tt, Z);
  }
  function kt() {
    return Z;
  }
  function an(e, t) {
    return Xe(tt, e, t);
  }
  function xt(e) {
    switch (e) {
      // \0 \t \n \r \s whitespace token
      case 0:
      case 9:
      case 10:
      case 13:
      case 32:
        return 5;
      // ! + , / > @ ~ isolate token
      case 33:
      case 43:
      case 44:
      case 47:
      case 62:
      case 64:
      case 126:
      // ; { } breakpoint token
      case 59:
      case 123:
      case 125:
        return 4;
      // : accompanied token
      case 58:
        return 3;
      // " ' ( [ opening delimit token
      case 34:
      case 39:
      case 40:
      case 91:
        return 2;
      // ) ] closing delimit token
      case 41:
      case 93:
        return 1;
    }
    return 0;
  }
  function Vl(e) {
    return on = Ve = 1, Sa = oe(tt = e), Z = 0, [];
  }
  function Ul(e) {
    return tt = "", e;
  }
  function hn(e) {
    return xa(an(Z - 1, jn(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
  }
  function Kl(e) {
    for (; (R = he()) && R < 33; )
      te();
    return xt(e) > 2 || xt(R) > 3 ? "" : " ";
  }
  function ql(e, t) {
    for (; --t && te() && !(R < 48 || R > 102 || R > 57 && R < 65 || R > 70 && R < 97); )
      ;
    return an(e, kt() + (t < 6 && he() == 32 && te() == 32));
  }
  function jn(e) {
    for (; te(); )
      switch (R) {
        // ] ) " '
        case e:
          return Z;
        // " '
        case 34:
        case 39:
          e !== 34 && e !== 39 && jn(R);
          break;
        // (
        case 40:
          e === 41 && jn(e);
          break;
        // \
        case 92:
          te();
          break;
      }
    return Z;
  }
  function Yl(e, t) {
    for (; te() && e + R !== 57; )
      if (e + R === 84 && he() === 47)
        break;
    return "/*" + an(t, Z - 1) + "*" + cr(e === 47 ? e : te());
  }
  function Ql(e) {
    for (; !xt(he()); )
      te();
    return an(e, Z);
  }
  function Jl(e) {
    return Ul(Lt("", null, null, null, [""], e = Vl(e), 0, [0], e));
  }
  function Lt(e, t, n, r, o, a, i, l, c) {
    for (var s = 0, f = 0, u = i, p = 0, v = 0, b = 0, y = 1, S = 1, C = 1, $ = 0, P = "", w = o, T = a, E = r, g = P; S; )
      switch (b = $, $ = te()) {
        // (
        case 40:
          if (b != 108 && Le(g, u - 1) == 58) {
            Dl(g += zt(hn($), "&", "&\f"), "&\f", Ca(s ? l[s - 1] : 0)) != -1 && (C = -1);
            break;
          }
        // " ' [
        case 34:
        case 39:
        case 91:
          g += hn($);
          break;
        // \t \n \r \s
        case 9:
        case 10:
        case 13:
        case 32:
          g += Kl(b);
          break;
        // \
        case 92:
          g += ql(kt() - 1, 7);
          continue;
        // /
        case 47:
          switch (he()) {
            case 42:
            case 47:
              At(Zl(Yl(te(), kt()), t, n, c), c), (xt(b || 1) == 5 || xt(he() || 1) == 5) && oe(g) && Xe(g, -1, void 0) !== " " && (g += " ");
              break;
            default:
              g += "/";
          }
          break;
        // {
        case 123 * y:
          l[s++] = oe(g) * C;
        // } ; \0
        case 125 * y:
        case 59:
        case 0:
          switch ($) {
            // \0 }
            case 0:
            case 125:
              S = 0;
            // ;
            case 59 + f:
              C == -1 && (g = zt(g, /\f/g, "")), v > 0 && (oe(g) - u || y === 0 && b === 47) && At(v > 32 ? Fr(g + ";", r, n, u - 1, c) : Fr(zt(g, " ", "") + ";", r, n, u - 2, c), c);
              break;
            // @ ;
            case 59:
              g += ";";
            // { rule/at-rule
            default:
              if (At(E = Lr(g, t, n, s, f, o, l, P, w = [], T = [], u, a), a), $ === 123)
                if (f === 0)
                  Lt(g, t, E, E, w, a, u, l, T);
                else {
                  switch (p) {
                    // c(ontainer)
                    case 99:
                      if (Le(g, 3) === 110) break;
                    // l(ayer)
                    case 108:
                      if (Le(g, 2) === 97) break;
                    default:
                      f = 0;
                    // d(ocument) m(edia) s(upports)
                    case 100:
                    case 109:
                    case 115:
                  }
                  f ? Lt(e, E, E, r && At(Lr(e, E, E, 0, 0, o, l, P, o, w = [], u, T), T), o, T, u, l, r ? w : T) : Lt(g, E, E, E, [""], T, 0, l, T);
                }
          }
          s = f = v = 0, y = C = 1, P = g = "", u = i;
          break;
        // :
        case 58:
          u = 1 + oe(g), v = b;
        default:
          if (y < 1) {
            if ($ == 123)
              --y;
            else if ($ == 125 && y++ == 0 && Xl() == 125)
              continue;
          }
          switch (g += cr($), $ * y) {
            // &
            case 38:
              C = f > 0 ? 1 : (g += "\f", -1);
              break;
            // ,
            case 44:
              l[s++] = (oe(g) - 1) * C, C = 1;
              break;
            // @
            case 64:
              he() === 45 && (g += hn(te())), p = he(), f = u = oe(P = g += Ql(kt())), $++;
              break;
            // -
            case 45:
              b === 45 && oe(g) == 2 && (y = 0);
          }
      }
    return a;
  }
  function Lr(e, t, n, r, o, a, i, l, c, s, f, u) {
    for (var p = o - 1, v = o === 0 ? a : [""], b = Wl(v), y = 0, S = 0, C = 0; y < r; ++y)
      for (var $ = 0, P = Xe(e, p + 1, p = Ca(S = i[y])), w = e; $ < b; ++$)
        (w = xa(S > 0 ? v[$] + " " + P : zt(P, /&\f/g, v[$]))) && (c[C++] = w);
    return sr(e, t, n, o === 0 ? ya : l, c, s, f, u);
  }
  function Zl(e, t, n, r) {
    return sr(e, t, n, va, cr(Gl()), Xe(e, 2, -2), 0, r);
  }
  function Fr(e, t, n, r, o) {
    return sr(e, t, n, ba, Xe(e, 0, r), Xe(e, r + 1, -1), r, o);
  }
  function Hn(e, t) {
    for (var n = "", r = 0; r < e.length; r++)
      n += t(e[r], r, e, t) || "";
    return n;
  }
  function ec(e, t, n, r) {
    switch (e.type) {
      case Fl:
        if (e.children.length) break;
      case kl:
      case ba:
        return e.return = e.return || e.value;
      case va:
        return "";
      case Ll:
        return e.return = e.value + "{" + Hn(e.children, r) + "}";
      case ya:
        if (!oe(e.value = e.props.join(","))) return "";
    }
    return oe(n = Hn(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
  }
  const Dr = "data-ant-cssinjs-cache-path", tc = "_FILE_STYLE__";
  let Ie, $a = !0;
  function nc() {
    var e;
    if (!Ie && (Ie = {}, et())) {
      const t = document.createElement("div");
      t.className = Dr, t.style.position = "fixed", t.style.visibility = "hidden", t.style.top = "-9999px", document.body.appendChild(t);
      let n = getComputedStyle(t).content || "";
      n = n.replace(/^"/, "").replace(/"$/, ""), n.split(";").forEach((o) => {
        const [a, i] = o.split(":");
        Ie[a] = i;
      });
      const r = document.querySelector(`style[${Dr}]`);
      r && ($a = !1, (e = r.parentNode) === null || e === void 0 || e.removeChild(r)), document.body.removeChild(t);
    }
  }
  function rc(e) {
    return nc(), !!Ie[e];
  }
  function oc(e) {
    const t = Ie[e];
    let n = null;
    if (t && et())
      if ($a)
        n = tc;
      else {
        const r = document.querySelector(`style[${Pe}="${Ie[e]}"]`);
        r ? n = r.innerHTML : delete Ie[e];
      }
    return [n, t];
  }
  const Wr = et(), ac = "_skip_check_", wa = "_multi_value_";
  function Gr(e) {
    return Hn(Jl(e), ec).replace(/\{%%%\:[^;];}/g, ";");
  }
  function ic(e) {
    return typeof e == "object" && e && (ac in e || wa in e);
  }
  function lc(e, t, n) {
    if (!t)
      return e;
    const r = `.${t}`, o = n === "low" ? `:where(${r})` : r;
    return e.split(",").map((i) => {
      var l;
      const c = i.trim().split(/\s+/);
      let s = c[0] || "";
      const f = ((l = s.match(/^\w+/)) === null || l === void 0 ? void 0 : l[0]) || "";
      return s = `${f}${o}${s.slice(f.length)}`, [s, ...c.slice(1)].join(" ");
    }).join(",");
  }
  const Xr = /* @__PURE__ */ new Set(), Rn = function(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
      root: n,
      injectHash: r,
      parentSelectors: o
    } = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
      root: !0,
      parentSelectors: []
    };
    const {
      hashId: a,
      layer: i,
      path: l,
      hashPriority: c,
      transformers: s = [],
      linters: f = []
    } = t;
    let u = "", p = {};
    function v(S) {
      const C = S.getName(a);
      if (!p[C]) {
        const [$] = Rn(S.style, t, {
          root: !1,
          parentSelectors: o
        });
        p[C] = `@keyframes ${S.getName(a)}${$}`;
      }
    }
    function b(S) {
      let C = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
      return S.forEach(($) => {
        Array.isArray($) ? b($, C) : $ && C.push($);
      }), C;
    }
    if (b(Array.isArray(e) ? e : [e]).forEach((S) => {
      const C = typeof S == "string" && !n ? {} : S;
      if (typeof C == "string")
        u += `${C}
`;
      else if (C._keyframe)
        v(C);
      else {
        const $ = s.reduce((P, w) => {
          var T;
          return ((T = w == null ? void 0 : w.visit) === null || T === void 0 ? void 0 : T.call(w, P)) || P;
        }, C);
        Object.keys($).forEach((P) => {
          var w;
          const T = $[P];
          if (typeof T == "object" && T && (P !== "animationName" || !T._keyframe) && !ic(T)) {
            let E = !1, g = P.trim(), O = !1;
            (n || r) && a ? g.startsWith("@") ? E = !0 : g = lc(P, a, c) : n && !a && (g === "&" || g === "") && (g = "", O = !0);
            const [_, z] = Rn(T, t, {
              root: O,
              injectHash: E,
              parentSelectors: [...o, g]
            });
            p = d(d({}, p), z), u += `${g}${_}`;
          } else {
            let E = function(O, _) {
              const z = O.replace(/[A-Z]/g, (U) => `-${U.toLowerCase()}`);
              let V = _;
              !zl[O] && typeof V == "number" && V !== 0 && (V = `${V}px`), O === "animationName" && (_ != null && _._keyframe) && (v(_), V = _.getName(a)), u += `${z}:${V};`;
            };
            const g = (w = T == null ? void 0 : T.value) !== null && w !== void 0 ? w : T;
            typeof T == "object" && (T != null && T[wa]) && Array.isArray(g) ? g.forEach((O) => {
              E(P, O);
            }) : E(P, g);
          }
        });
      }
    }), !n)
      u = `{${u}}`;
    else if (i && _l()) {
      const S = i.split(",");
      u = `@layer ${S[S.length - 1].trim()} {${u}}`, S.length > 1 && (u = `@layer ${i}{%%%:%}${u}`);
    }
    return [u, p];
  };
  function cc(e, t) {
    return lr(`${e.join("%")}${t}`);
  }
  function Nn(e, t) {
    const n = nn(), r = x(() => e.value.token._tokenKey), o = x(() => [r.value, ...e.value.path]);
    let a = Wr;
    return la(
      "style",
      o,
      // Create cache if needed
      () => {
        const {
          path: i,
          hashId: l,
          layer: c,
          nonce: s,
          clientOnly: f,
          order: u = 0
        } = e.value, p = o.value.join("|");
        if (rc(p)) {
          const [g, O] = oc(p);
          if (g)
            return [g, r.value, O, {}, f, u];
        }
        const v = t(), {
          hashPriority: b,
          container: y,
          transformers: S,
          linters: C,
          cache: $
        } = n.value, [P, w] = Rn(v, {
          hashId: l,
          hashPriority: b,
          layer: c,
          path: i.join("-"),
          transformers: S,
          linters: C
        }), T = Gr(P), E = cc(o.value, T);
        if (a) {
          const g = {
            mark: Pe,
            prepend: "queue",
            attachTo: y,
            priority: u
          }, O = typeof s == "function" ? s() : s;
          O && (g.csp = {
            nonce: O
          });
          const _ = Ut(T, E, g);
          _[ke] = $.instanceId, _.setAttribute(oa, r.value), Object.keys(w).forEach((z) => {
            Xr.has(z) || (Xr.add(z), Ut(Gr(w[z]), `_effect-${z}`, {
              mark: Pe,
              prepend: "queue",
              attachTo: y
            }));
          });
        }
        return [T, r.value, E, w, f, u];
      },
      // Remove cache if no need
      (i, l) => {
        let [, , c] = i;
        (l || n.value.autoClear) && Wr && da(c, {
          mark: Pe
        });
      }
    ), (i) => i;
  }
  class Ee {
    constructor(t, n) {
      this._keyframe = !0, this.name = t, this.style = n;
    }
    getName() {
      let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      return t ? `${t}-${this.name}` : this.name;
    }
  }
  const sc = "4.2.6";
  function L(e, t) {
    uc(e) && (e = "100%");
    var n = fc(e);
    return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))), n && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : (t === 360 ? e = (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e = e % t / parseFloat(String(t)), e);
  }
  function Mt(e) {
    return Math.min(1, Math.max(0, e));
  }
  function uc(e) {
    return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
  }
  function fc(e) {
    return typeof e == "string" && e.indexOf("%") !== -1;
  }
  function Ta(e) {
    return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
  }
  function jt(e) {
    return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
  }
  function Oe(e) {
    return e.length === 1 ? "0" + e : String(e);
  }
  function dc(e, t, n) {
    return {
      r: L(e, 255) * 255,
      g: L(t, 255) * 255,
      b: L(n, 255) * 255
    };
  }
  function Vr(e, t, n) {
    e = L(e, 255), t = L(t, 255), n = L(n, 255);
    var r = Math.max(e, t, n), o = Math.min(e, t, n), a = 0, i = 0, l = (r + o) / 2;
    if (r === o)
      i = 0, a = 0;
    else {
      var c = r - o;
      switch (i = l > 0.5 ? c / (2 - r - o) : c / (r + o), r) {
        case e:
          a = (t - n) / c + (t < n ? 6 : 0);
          break;
        case t:
          a = (n - e) / c + 2;
          break;
        case n:
          a = (e - t) / c + 4;
          break;
      }
      a /= 6;
    }
    return { h: a, s: i, l };
  }
  function vn(e, t, n) {
    return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * (6 * n) : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
  }
  function pc(e, t, n) {
    var r, o, a;
    if (e = L(e, 360), t = L(t, 100), n = L(n, 100), t === 0)
      o = n, a = n, r = n;
    else {
      var i = n < 0.5 ? n * (1 + t) : n + t - n * t, l = 2 * n - i;
      r = vn(l, i, e + 1 / 3), o = vn(l, i, e), a = vn(l, i, e - 1 / 3);
    }
    return { r: r * 255, g: o * 255, b: a * 255 };
  }
  function Bn(e, t, n) {
    e = L(e, 255), t = L(t, 255), n = L(n, 255);
    var r = Math.max(e, t, n), o = Math.min(e, t, n), a = 0, i = r, l = r - o, c = r === 0 ? 0 : l / r;
    if (r === o)
      a = 0;
    else {
      switch (r) {
        case e:
          a = (t - n) / l + (t < n ? 6 : 0);
          break;
        case t:
          a = (n - e) / l + 2;
          break;
        case n:
          a = (e - t) / l + 4;
          break;
      }
      a /= 6;
    }
    return { h: a, s: c, v: i };
  }
  function gc(e, t, n) {
    e = L(e, 360) * 6, t = L(t, 100), n = L(n, 100);
    var r = Math.floor(e), o = e - r, a = n * (1 - t), i = n * (1 - o * t), l = n * (1 - (1 - o) * t), c = r % 6, s = [n, i, a, a, l, n][c], f = [l, n, n, i, a, a][c], u = [a, a, l, n, n, i][c];
    return { r: s * 255, g: f * 255, b: u * 255 };
  }
  function zn(e, t, n, r) {
    var o = [
      Oe(Math.round(e).toString(16)),
      Oe(Math.round(t).toString(16)),
      Oe(Math.round(n).toString(16))
    ];
    return r && o[0].startsWith(o[0].charAt(1)) && o[1].startsWith(o[1].charAt(1)) && o[2].startsWith(o[2].charAt(1)) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) : o.join("");
  }
  function mc(e, t, n, r, o) {
    var a = [
      Oe(Math.round(e).toString(16)),
      Oe(Math.round(t).toString(16)),
      Oe(Math.round(n).toString(16)),
      Oe(hc(r))
    ];
    return o && a[0].startsWith(a[0].charAt(1)) && a[1].startsWith(a[1].charAt(1)) && a[2].startsWith(a[2].charAt(1)) && a[3].startsWith(a[3].charAt(1)) ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) + a[3].charAt(0) : a.join("");
  }
  function hc(e) {
    return Math.round(parseFloat(e) * 255).toString(16);
  }
  function Ur(e) {
    return Y(e) / 255;
  }
  function Y(e) {
    return parseInt(e, 16);
  }
  function vc(e) {
    return {
      r: e >> 16,
      g: (e & 65280) >> 8,
      b: e & 255
    };
  }
  var kn = {
    aliceblue: "#f0f8ff",
    antiquewhite: "#faebd7",
    aqua: "#00ffff",
    aquamarine: "#7fffd4",
    azure: "#f0ffff",
    beige: "#f5f5dc",
    bisque: "#ffe4c4",
    black: "#000000",
    blanchedalmond: "#ffebcd",
    blue: "#0000ff",
    blueviolet: "#8a2be2",
    brown: "#a52a2a",
    burlywood: "#deb887",
    cadetblue: "#5f9ea0",
    chartreuse: "#7fff00",
    chocolate: "#d2691e",
    coral: "#ff7f50",
    cornflowerblue: "#6495ed",
    cornsilk: "#fff8dc",
    crimson: "#dc143c",
    cyan: "#00ffff",
    darkblue: "#00008b",
    darkcyan: "#008b8b",
    darkgoldenrod: "#b8860b",
    darkgray: "#a9a9a9",
    darkgreen: "#006400",
    darkgrey: "#a9a9a9",
    darkkhaki: "#bdb76b",
    darkmagenta: "#8b008b",
    darkolivegreen: "#556b2f",
    darkorange: "#ff8c00",
    darkorchid: "#9932cc",
    darkred: "#8b0000",
    darksalmon: "#e9967a",
    darkseagreen: "#8fbc8f",
    darkslateblue: "#483d8b",
    darkslategray: "#2f4f4f",
    darkslategrey: "#2f4f4f",
    darkturquoise: "#00ced1",
    darkviolet: "#9400d3",
    deeppink: "#ff1493",
    deepskyblue: "#00bfff",
    dimgray: "#696969",
    dimgrey: "#696969",
    dodgerblue: "#1e90ff",
    firebrick: "#b22222",
    floralwhite: "#fffaf0",
    forestgreen: "#228b22",
    fuchsia: "#ff00ff",
    gainsboro: "#dcdcdc",
    ghostwhite: "#f8f8ff",
    goldenrod: "#daa520",
    gold: "#ffd700",
    gray: "#808080",
    green: "#008000",
    greenyellow: "#adff2f",
    grey: "#808080",
    honeydew: "#f0fff0",
    hotpink: "#ff69b4",
    indianred: "#cd5c5c",
    indigo: "#4b0082",
    ivory: "#fffff0",
    khaki: "#f0e68c",
    lavenderblush: "#fff0f5",
    lavender: "#e6e6fa",
    lawngreen: "#7cfc00",
    lemonchiffon: "#fffacd",
    lightblue: "#add8e6",
    lightcoral: "#f08080",
    lightcyan: "#e0ffff",
    lightgoldenrodyellow: "#fafad2",
    lightgray: "#d3d3d3",
    lightgreen: "#90ee90",
    lightgrey: "#d3d3d3",
    lightpink: "#ffb6c1",
    lightsalmon: "#ffa07a",
    lightseagreen: "#20b2aa",
    lightskyblue: "#87cefa",
    lightslategray: "#778899",
    lightslategrey: "#778899",
    lightsteelblue: "#b0c4de",
    lightyellow: "#ffffe0",
    lime: "#00ff00",
    limegreen: "#32cd32",
    linen: "#faf0e6",
    magenta: "#ff00ff",
    maroon: "#800000",
    mediumaquamarine: "#66cdaa",
    mediumblue: "#0000cd",
    mediumorchid: "#ba55d3",
    mediumpurple: "#9370db",
    mediumseagreen: "#3cb371",
    mediumslateblue: "#7b68ee",
    mediumspringgreen: "#00fa9a",
    mediumturquoise: "#48d1cc",
    mediumvioletred: "#c71585",
    midnightblue: "#191970",
    mintcream: "#f5fffa",
    mistyrose: "#ffe4e1",
    moccasin: "#ffe4b5",
    navajowhite: "#ffdead",
    navy: "#000080",
    oldlace: "#fdf5e6",
    olive: "#808000",
    olivedrab: "#6b8e23",
    orange: "#ffa500",
    orangered: "#ff4500",
    orchid: "#da70d6",
    palegoldenrod: "#eee8aa",
    palegreen: "#98fb98",
    paleturquoise: "#afeeee",
    palevioletred: "#db7093",
    papayawhip: "#ffefd5",
    peachpuff: "#ffdab9",
    peru: "#cd853f",
    pink: "#ffc0cb",
    plum: "#dda0dd",
    powderblue: "#b0e0e6",
    purple: "#800080",
    rebeccapurple: "#663399",
    red: "#ff0000",
    rosybrown: "#bc8f8f",
    royalblue: "#4169e1",
    saddlebrown: "#8b4513",
    salmon: "#fa8072",
    sandybrown: "#f4a460",
    seagreen: "#2e8b57",
    seashell: "#fff5ee",
    sienna: "#a0522d",
    silver: "#c0c0c0",
    skyblue: "#87ceeb",
    slateblue: "#6a5acd",
    slategray: "#708090",
    slategrey: "#708090",
    snow: "#fffafa",
    springgreen: "#00ff7f",
    steelblue: "#4682b4",
    tan: "#d2b48c",
    teal: "#008080",
    thistle: "#d8bfd8",
    tomato: "#ff6347",
    turquoise: "#40e0d0",
    violet: "#ee82ee",
    wheat: "#f5deb3",
    white: "#ffffff",
    whitesmoke: "#f5f5f5",
    yellow: "#ffff00",
    yellowgreen: "#9acd32"
  };
  function Be(e) {
    var t = { r: 0, g: 0, b: 0 }, n = 1, r = null, o = null, a = null, i = !1, l = !1;
    return typeof e == "string" && (e = Cc(e)), typeof e == "object" && (ce(e.r) && ce(e.g) && ce(e.b) ? (t = dc(e.r, e.g, e.b), i = !0, l = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : ce(e.h) && ce(e.s) && ce(e.v) ? (r = jt(e.s), o = jt(e.v), t = gc(e.h, r, o), i = !0, l = "hsv") : ce(e.h) && ce(e.s) && ce(e.l) && (r = jt(e.s), a = jt(e.l), t = pc(e.h, r, a), i = !0, l = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (n = e.a)), n = Ta(n), {
      ok: i,
      format: e.format || l,
      r: Math.min(255, Math.max(t.r, 0)),
      g: Math.min(255, Math.max(t.g, 0)),
      b: Math.min(255, Math.max(t.b, 0)),
      a: n
    };
  }
  var yc = "[-\\+]?\\d+%?", bc = "[-\\+]?\\d*\\.\\d+%?", ve = "(?:".concat(bc, ")|(?:").concat(yc, ")"), yn = "[\\s|\\(]+(".concat(ve, ")[,|\\s]+(").concat(ve, ")[,|\\s]+(").concat(ve, ")\\s*\\)?"), bn = "[\\s|\\(]+(".concat(ve, ")[,|\\s]+(").concat(ve, ")[,|\\s]+(").concat(ve, ")[,|\\s]+(").concat(ve, ")\\s*\\)?"), ee = {
    CSS_UNIT: new RegExp(ve),
    rgb: new RegExp("rgb" + yn),
    rgba: new RegExp("rgba" + bn),
    hsl: new RegExp("hsl" + yn),
    hsla: new RegExp("hsla" + bn),
    hsv: new RegExp("hsv" + yn),
    hsva: new RegExp("hsva" + bn),
    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
  };
  function Cc(e) {
    if (e = e.trim().toLowerCase(), e.length === 0)
      return !1;
    var t = !1;
    if (kn[e])
      e = kn[e], t = !0;
    else if (e === "transparent")
      return { r: 0, g: 0, b: 0, a: 0, format: "name" };
    var n = ee.rgb.exec(e);
    return n ? { r: n[1], g: n[2], b: n[3] } : (n = ee.rgba.exec(e), n ? { r: n[1], g: n[2], b: n[3], a: n[4] } : (n = ee.hsl.exec(e), n ? { h: n[1], s: n[2], l: n[3] } : (n = ee.hsla.exec(e), n ? { h: n[1], s: n[2], l: n[3], a: n[4] } : (n = ee.hsv.exec(e), n ? { h: n[1], s: n[2], v: n[3] } : (n = ee.hsva.exec(e), n ? { h: n[1], s: n[2], v: n[3], a: n[4] } : (n = ee.hex8.exec(e), n ? {
      r: Y(n[1]),
      g: Y(n[2]),
      b: Y(n[3]),
      a: Ur(n[4]),
      format: t ? "name" : "hex8"
    } : (n = ee.hex6.exec(e), n ? {
      r: Y(n[1]),
      g: Y(n[2]),
      b: Y(n[3]),
      format: t ? "name" : "hex"
    } : (n = ee.hex4.exec(e), n ? {
      r: Y(n[1] + n[1]),
      g: Y(n[2] + n[2]),
      b: Y(n[3] + n[3]),
      a: Ur(n[4] + n[4]),
      format: t ? "name" : "hex8"
    } : (n = ee.hex3.exec(e), n ? {
      r: Y(n[1] + n[1]),
      g: Y(n[2] + n[2]),
      b: Y(n[3] + n[3]),
      format: t ? "name" : "hex"
    } : !1)))))))));
  }
  function ce(e) {
    return !!ee.CSS_UNIT.exec(String(e));
  }
  var k = (
    /** @class */
    function() {
      function e(t, n) {
        t === void 0 && (t = ""), n === void 0 && (n = {});
        var r;
        if (t instanceof e)
          return t;
        typeof t == "number" && (t = vc(t)), this.originalInput = t;
        var o = Be(t);
        this.originalInput = t, this.r = o.r, this.g = o.g, this.b = o.b, this.a = o.a, this.roundA = Math.round(100 * this.a) / 100, this.format = (r = n.format) !== null && r !== void 0 ? r : o.format, this.gradientType = n.gradientType, this.r < 1 && (this.r = Math.round(this.r)), this.g < 1 && (this.g = Math.round(this.g)), this.b < 1 && (this.b = Math.round(this.b)), this.isValid = o.ok;
      }
      return e.prototype.isDark = function() {
        return this.getBrightness() < 128;
      }, e.prototype.isLight = function() {
        return !this.isDark();
      }, e.prototype.getBrightness = function() {
        var t = this.toRgb();
        return (t.r * 299 + t.g * 587 + t.b * 114) / 1e3;
      }, e.prototype.getLuminance = function() {
        var t = this.toRgb(), n, r, o, a = t.r / 255, i = t.g / 255, l = t.b / 255;
        return a <= 0.03928 ? n = a / 12.92 : n = Math.pow((a + 0.055) / 1.055, 2.4), i <= 0.03928 ? r = i / 12.92 : r = Math.pow((i + 0.055) / 1.055, 2.4), l <= 0.03928 ? o = l / 12.92 : o = Math.pow((l + 0.055) / 1.055, 2.4), 0.2126 * n + 0.7152 * r + 0.0722 * o;
      }, e.prototype.getAlpha = function() {
        return this.a;
      }, e.prototype.setAlpha = function(t) {
        return this.a = Ta(t), this.roundA = Math.round(100 * this.a) / 100, this;
      }, e.prototype.isMonochrome = function() {
        var t = this.toHsl().s;
        return t === 0;
      }, e.prototype.toHsv = function() {
        var t = Bn(this.r, this.g, this.b);
        return { h: t.h * 360, s: t.s, v: t.v, a: this.a };
      }, e.prototype.toHsvString = function() {
        var t = Bn(this.r, this.g, this.b), n = Math.round(t.h * 360), r = Math.round(t.s * 100), o = Math.round(t.v * 100);
        return this.a === 1 ? "hsv(".concat(n, ", ").concat(r, "%, ").concat(o, "%)") : "hsva(".concat(n, ", ").concat(r, "%, ").concat(o, "%, ").concat(this.roundA, ")");
      }, e.prototype.toHsl = function() {
        var t = Vr(this.r, this.g, this.b);
        return { h: t.h * 360, s: t.s, l: t.l, a: this.a };
      }, e.prototype.toHslString = function() {
        var t = Vr(this.r, this.g, this.b), n = Math.round(t.h * 360), r = Math.round(t.s * 100), o = Math.round(t.l * 100);
        return this.a === 1 ? "hsl(".concat(n, ", ").concat(r, "%, ").concat(o, "%)") : "hsla(".concat(n, ", ").concat(r, "%, ").concat(o, "%, ").concat(this.roundA, ")");
      }, e.prototype.toHex = function(t) {
        return t === void 0 && (t = !1), zn(this.r, this.g, this.b, t);
      }, e.prototype.toHexString = function(t) {
        return t === void 0 && (t = !1), "#" + this.toHex(t);
      }, e.prototype.toHex8 = function(t) {
        return t === void 0 && (t = !1), mc(this.r, this.g, this.b, this.a, t);
      }, e.prototype.toHex8String = function(t) {
        return t === void 0 && (t = !1), "#" + this.toHex8(t);
      }, e.prototype.toHexShortString = function(t) {
        return t === void 0 && (t = !1), this.a === 1 ? this.toHexString(t) : this.toHex8String(t);
      }, e.prototype.toRgb = function() {
        return {
          r: Math.round(this.r),
          g: Math.round(this.g),
          b: Math.round(this.b),
          a: this.a
        };
      }, e.prototype.toRgbString = function() {
        var t = Math.round(this.r), n = Math.round(this.g), r = Math.round(this.b);
        return this.a === 1 ? "rgb(".concat(t, ", ").concat(n, ", ").concat(r, ")") : "rgba(".concat(t, ", ").concat(n, ", ").concat(r, ", ").concat(this.roundA, ")");
      }, e.prototype.toPercentageRgb = function() {
        var t = function(n) {
          return "".concat(Math.round(L(n, 255) * 100), "%");
        };
        return {
          r: t(this.r),
          g: t(this.g),
          b: t(this.b),
          a: this.a
        };
      }, e.prototype.toPercentageRgbString = function() {
        var t = function(n) {
          return Math.round(L(n, 255) * 100);
        };
        return this.a === 1 ? "rgb(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%)") : "rgba(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%, ").concat(this.roundA, ")");
      }, e.prototype.toName = function() {
        if (this.a === 0)
          return "transparent";
        if (this.a < 1)
          return !1;
        for (var t = "#" + zn(this.r, this.g, this.b, !1), n = 0, r = Object.entries(kn); n < r.length; n++) {
          var o = r[n], a = o[0], i = o[1];
          if (t === i)
            return a;
        }
        return !1;
      }, e.prototype.toString = function(t) {
        var n = !!t;
        t = t ?? this.format;
        var r = !1, o = this.a < 1 && this.a >= 0, a = !n && o && (t.startsWith("hex") || t === "name");
        return a ? t === "name" && this.a === 0 ? this.toName() : this.toRgbString() : (t === "rgb" && (r = this.toRgbString()), t === "prgb" && (r = this.toPercentageRgbString()), (t === "hex" || t === "hex6") && (r = this.toHexString()), t === "hex3" && (r = this.toHexString(!0)), t === "hex4" && (r = this.toHex8String(!0)), t === "hex8" && (r = this.toHex8String()), t === "name" && (r = this.toName()), t === "hsl" && (r = this.toHslString()), t === "hsv" && (r = this.toHsvString()), r || this.toHexString());
      }, e.prototype.toNumber = function() {
        return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
      }, e.prototype.clone = function() {
        return new e(this.toString());
      }, e.prototype.lighten = function(t) {
        t === void 0 && (t = 10);
        var n = this.toHsl();
        return n.l += t / 100, n.l = Mt(n.l), new e(n);
      }, e.prototype.brighten = function(t) {
        t === void 0 && (t = 10);
        var n = this.toRgb();
        return n.r = Math.max(0, Math.min(255, n.r - Math.round(255 * -(t / 100)))), n.g = Math.max(0, Math.min(255, n.g - Math.round(255 * -(t / 100)))), n.b = Math.max(0, Math.min(255, n.b - Math.round(255 * -(t / 100)))), new e(n);
      }, e.prototype.darken = function(t) {
        t === void 0 && (t = 10);
        var n = this.toHsl();
        return n.l -= t / 100, n.l = Mt(n.l), new e(n);
      }, e.prototype.tint = function(t) {
        return t === void 0 && (t = 10), this.mix("white", t);
      }, e.prototype.shade = function(t) {
        return t === void 0 && (t = 10), this.mix("black", t);
      }, e.prototype.desaturate = function(t) {
        t === void 0 && (t = 10);
        var n = this.toHsl();
        return n.s -= t / 100, n.s = Mt(n.s), new e(n);
      }, e.prototype.saturate = function(t) {
        t === void 0 && (t = 10);
        var n = this.toHsl();
        return n.s += t / 100, n.s = Mt(n.s), new e(n);
      }, e.prototype.greyscale = function() {
        return this.desaturate(100);
      }, e.prototype.spin = function(t) {
        var n = this.toHsl(), r = (n.h + t) % 360;
        return n.h = r < 0 ? 360 + r : r, new e(n);
      }, e.prototype.mix = function(t, n) {
        n === void 0 && (n = 50);
        var r = this.toRgb(), o = new e(t).toRgb(), a = n / 100, i = {
          r: (o.r - r.r) * a + r.r,
          g: (o.g - r.g) * a + r.g,
          b: (o.b - r.b) * a + r.b,
          a: (o.a - r.a) * a + r.a
        };
        return new e(i);
      }, e.prototype.analogous = function(t, n) {
        t === void 0 && (t = 6), n === void 0 && (n = 30);
        var r = this.toHsl(), o = 360 / n, a = [this];
        for (r.h = (r.h - (o * t >> 1) + 720) % 360; --t; )
          r.h = (r.h + o) % 360, a.push(new e(r));
        return a;
      }, e.prototype.complement = function() {
        var t = this.toHsl();
        return t.h = (t.h + 180) % 360, new e(t);
      }, e.prototype.monochromatic = function(t) {
        t === void 0 && (t = 6);
        for (var n = this.toHsv(), r = n.h, o = n.s, a = n.v, i = [], l = 1 / t; t--; )
          i.push(new e({ h: r, s: o, v: a })), a = (a + l) % 1;
        return i;
      }, e.prototype.splitcomplement = function() {
        var t = this.toHsl(), n = t.h;
        return [
          this,
          new e({ h: (n + 72) % 360, s: t.s, l: t.l }),
          new e({ h: (n + 216) % 360, s: t.s, l: t.l })
        ];
      }, e.prototype.onBackground = function(t) {
        var n = this.toRgb(), r = new e(t).toRgb(), o = n.a + r.a * (1 - n.a);
        return new e({
          r: (n.r * n.a + r.r * r.a * (1 - n.a)) / o,
          g: (n.g * n.a + r.g * r.a * (1 - n.a)) / o,
          b: (n.b * n.a + r.b * r.a * (1 - n.a)) / o,
          a: o
        });
      }, e.prototype.triad = function() {
        return this.polyad(3);
      }, e.prototype.tetrad = function() {
        return this.polyad(4);
      }, e.prototype.polyad = function(t) {
        for (var n = this.toHsl(), r = n.h, o = [this], a = 360 / t, i = 1; i < t; i++)
          o.push(new e({ h: (r + i * a) % 360, s: n.s, l: n.l }));
        return o;
      }, e.prototype.equals = function(t) {
        return this.toRgbString() === new e(t).toRgbString();
      }, e;
    }()
  ), Ht = 2, Kr = 0.16, xc = 0.05, Sc = 0.05, $c = 0.15, Oa = 5, Pa = 4, wc = [{
    index: 7,
    opacity: 0.15
  }, {
    index: 6,
    opacity: 0.25
  }, {
    index: 5,
    opacity: 0.3
  }, {
    index: 5,
    opacity: 0.45
  }, {
    index: 5,
    opacity: 0.65
  }, {
    index: 5,
    opacity: 0.85
  }, {
    index: 4,
    opacity: 0.9
  }, {
    index: 3,
    opacity: 0.95
  }, {
    index: 2,
    opacity: 0.97
  }, {
    index: 1,
    opacity: 0.98
  }];
  function qr(e) {
    var t = e.r, n = e.g, r = e.b, o = Bn(t, n, r);
    return {
      h: o.h * 360,
      s: o.s,
      v: o.v
    };
  }
  function Rt(e) {
    var t = e.r, n = e.g, r = e.b;
    return "#".concat(zn(t, n, r, !1));
  }
  function Tc(e, t, n) {
    var r = n / 100, o = {
      r: (t.r - e.r) * r + e.r,
      g: (t.g - e.g) * r + e.g,
      b: (t.b - e.b) * r + e.b
    };
    return o;
  }
  function Yr(e, t, n) {
    var r;
    return Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? r = n ? Math.round(e.h) - Ht * t : Math.round(e.h) + Ht * t : r = n ? Math.round(e.h) + Ht * t : Math.round(e.h) - Ht * t, r < 0 ? r += 360 : r >= 360 && (r -= 360), r;
  }
  function Qr(e, t, n) {
    if (e.h === 0 && e.s === 0)
      return e.s;
    var r;
    return n ? r = e.s - Kr * t : t === Pa ? r = e.s + Kr : r = e.s + xc * t, r > 1 && (r = 1), n && t === Oa && r > 0.1 && (r = 0.1), r < 0.06 && (r = 0.06), Number(r.toFixed(2));
  }
  function Jr(e, t, n) {
    var r;
    return n ? r = e.v + Sc * t : r = e.v - $c * t, r > 1 && (r = 1), Number(r.toFixed(2));
  }
  function _e(e) {
    for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = [], r = Be(e), o = Oa; o > 0; o -= 1) {
      var a = qr(r), i = Rt(Be({
        h: Yr(a, o, !0),
        s: Qr(a, o, !0),
        v: Jr(a, o, !0)
      }));
      n.push(i);
    }
    n.push(Rt(r));
    for (var l = 1; l <= Pa; l += 1) {
      var c = qr(r), s = Rt(Be({
        h: Yr(c, l),
        s: Qr(c, l),
        v: Jr(c, l)
      }));
      n.push(s);
    }
    return t.theme === "dark" ? wc.map(function(f) {
      var u = f.index, p = f.opacity, v = Rt(Tc(Be(t.backgroundColor || "#141414"), Be(n[u]), p * 100));
      return v;
    }) : n;
  }
  var Cn = {
    red: "#F5222D",
    volcano: "#FA541C",
    orange: "#FA8C16",
    gold: "#FAAD14",
    yellow: "#FADB14",
    lime: "#A0D911",
    green: "#52C41A",
    cyan: "#13C2C2",
    blue: "#1890FF",
    geekblue: "#2F54EB",
    purple: "#722ED1",
    magenta: "#EB2F96",
    grey: "#666666"
  }, Ft = {}, xn = {};
  Object.keys(Cn).forEach(function(e) {
    Ft[e] = _e(Cn[e]), Ft[e].primary = Ft[e][5], xn[e] = _e(Cn[e], {
      theme: "dark",
      backgroundColor: "#141414"
    }), xn[e].primary = xn[e][5];
  });
  var Oc = Ft.blue;
  const Pc = (e) => {
    const {
      controlHeight: t
    } = e;
    return {
      controlHeightSM: t * 0.75,
      controlHeightXS: t * 0.5,
      controlHeightLG: t * 1.25
    };
  };
  function Ic(e) {
    const {
      sizeUnit: t,
      sizeStep: n
    } = e;
    return {
      sizeXXL: t * (n + 8),
      sizeXL: t * (n + 4),
      sizeLG: t * (n + 2),
      sizeMD: t * (n + 1),
      sizeMS: t * n,
      size: t * n,
      sizeSM: t * (n - 1),
      sizeXS: t * (n - 2),
      sizeXXS: t * (n - 3)
      // 4
    };
  }
  const Ia = {
    blue: "#1677ff",
    purple: "#722ED1",
    cyan: "#13C2C2",
    green: "#52C41A",
    magenta: "#EB2F96",
    pink: "#eb2f96",
    red: "#F5222D",
    orange: "#FA8C16",
    yellow: "#FADB14",
    volcano: "#FA541C",
    geekblue: "#2F54EB",
    gold: "#FAAD14",
    lime: "#A0D911"
  }, ln = d(d({}, Ia), {
    // Color
    colorPrimary: "#1677ff",
    colorSuccess: "#52c41a",
    colorWarning: "#faad14",
    colorError: "#ff4d4f",
    colorInfo: "#1677ff",
    colorTextBase: "",
    colorBgBase: "",
    // Font
    fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
'Noto Color Emoji'`,
    fontSize: 14,
    // Line
    lineWidth: 1,
    lineType: "solid",
    // Motion
    motionUnit: 0.1,
    motionBase: 0,
    motionEaseOutCirc: "cubic-bezier(0.08, 0.82, 0.17, 1)",
    motionEaseInOutCirc: "cubic-bezier(0.78, 0.14, 0.15, 0.86)",
    motionEaseOut: "cubic-bezier(0.215, 0.61, 0.355, 1)",
    motionEaseInOut: "cubic-bezier(0.645, 0.045, 0.355, 1)",
    motionEaseOutBack: "cubic-bezier(0.12, 0.4, 0.29, 1.46)",
    motionEaseInBack: "cubic-bezier(0.71, -0.46, 0.88, 0.6)",
    motionEaseInQuint: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
    motionEaseOutQuint: "cubic-bezier(0.23, 1, 0.32, 1)",
    // Radius
    borderRadius: 6,
    // Size
    sizeUnit: 4,
    sizeStep: 4,
    sizePopupArrow: 16,
    // Control Base
    controlHeight: 32,
    // zIndex
    zIndexBase: 0,
    zIndexPopupBase: 1e3,
    // Image
    opacityImage: 1,
    // Wireframe
    wireframe: !1
  });
  function Ec(e, t) {
    let {
      generateColorPalettes: n,
      generateNeutralColorPalettes: r
    } = t;
    const {
      colorSuccess: o,
      colorWarning: a,
      colorError: i,
      colorInfo: l,
      colorPrimary: c,
      colorBgBase: s,
      colorTextBase: f
    } = e, u = n(c), p = n(o), v = n(a), b = n(i), y = n(l), S = r(s, f);
    return d(d({}, S), {
      colorPrimaryBg: u[1],
      colorPrimaryBgHover: u[2],
      colorPrimaryBorder: u[3],
      colorPrimaryBorderHover: u[4],
      colorPrimaryHover: u[5],
      colorPrimary: u[6],
      colorPrimaryActive: u[7],
      colorPrimaryTextHover: u[8],
      colorPrimaryText: u[9],
      colorPrimaryTextActive: u[10],
      colorSuccessBg: p[1],
      colorSuccessBgHover: p[2],
      colorSuccessBorder: p[3],
      colorSuccessBorderHover: p[4],
      colorSuccessHover: p[4],
      colorSuccess: p[6],
      colorSuccessActive: p[7],
      colorSuccessTextHover: p[8],
      colorSuccessText: p[9],
      colorSuccessTextActive: p[10],
      colorErrorBg: b[1],
      colorErrorBgHover: b[2],
      colorErrorBorder: b[3],
      colorErrorBorderHover: b[4],
      colorErrorHover: b[5],
      colorError: b[6],
      colorErrorActive: b[7],
      colorErrorTextHover: b[8],
      colorErrorText: b[9],
      colorErrorTextActive: b[10],
      colorWarningBg: v[1],
      colorWarningBgHover: v[2],
      colorWarningBorder: v[3],
      colorWarningBorderHover: v[4],
      colorWarningHover: v[4],
      colorWarning: v[6],
      colorWarningActive: v[7],
      colorWarningTextHover: v[8],
      colorWarningText: v[9],
      colorWarningTextActive: v[10],
      colorInfoBg: y[1],
      colorInfoBgHover: y[2],
      colorInfoBorder: y[3],
      colorInfoBorderHover: y[4],
      colorInfoHover: y[4],
      colorInfo: y[6],
      colorInfoActive: y[7],
      colorInfoTextHover: y[8],
      colorInfoText: y[9],
      colorInfoTextActive: y[10],
      colorBgMask: new k("#000").setAlpha(0.45).toRgbString(),
      colorWhite: "#fff"
    });
  }
  const _c = (e) => {
    let t = e, n = e, r = e, o = e;
    return e < 6 && e >= 5 ? t = e + 1 : e < 16 && e >= 6 ? t = e + 2 : e >= 16 && (t = 16), e < 7 && e >= 5 ? n = 4 : e < 8 && e >= 7 ? n = 5 : e < 14 && e >= 8 ? n = 6 : e < 16 && e >= 14 ? n = 7 : e >= 16 && (n = 8), e < 6 && e >= 2 ? r = 1 : e >= 6 && (r = 2), e > 4 && e < 8 ? o = 4 : e >= 8 && (o = 6), {
      borderRadius: e > 16 ? 16 : e,
      borderRadiusXS: r,
      borderRadiusSM: n,
      borderRadiusLG: t,
      borderRadiusOuter: o
    };
  };
  function Ac(e) {
    const {
      motionUnit: t,
      motionBase: n,
      borderRadius: r,
      lineWidth: o
    } = e;
    return d({
      // motion
      motionDurationFast: `${(n + t).toFixed(1)}s`,
      motionDurationMid: `${(n + t * 2).toFixed(1)}s`,
      motionDurationSlow: `${(n + t * 3).toFixed(1)}s`,
      // line
      lineWidthBold: o + 1
    }, _c(r));
  }
  const se = (e, t) => new k(e).setAlpha(t).toRgbString(), lt = (e, t) => new k(e).darken(t).toHexString(), Mc = (e) => {
    const t = _e(e);
    return {
      1: t[0],
      2: t[1],
      3: t[2],
      4: t[3],
      5: t[4],
      6: t[5],
      7: t[6],
      8: t[4],
      9: t[5],
      10: t[6]
      // 8: colors[7],
      // 9: colors[8],
      // 10: colors[9],
    };
  }, jc = (e, t) => {
    const n = e || "#fff", r = t || "#000";
    return {
      colorBgBase: n,
      colorTextBase: r,
      colorText: se(r, 0.88),
      colorTextSecondary: se(r, 0.65),
      colorTextTertiary: se(r, 0.45),
      colorTextQuaternary: se(r, 0.25),
      colorFill: se(r, 0.15),
      colorFillSecondary: se(r, 0.06),
      colorFillTertiary: se(r, 0.04),
      colorFillQuaternary: se(r, 0.02),
      colorBgLayout: lt(n, 4),
      colorBgContainer: lt(n, 0),
      colorBgElevated: lt(n, 0),
      colorBgSpotlight: se(r, 0.85),
      colorBorder: lt(n, 15),
      colorBorderSecondary: lt(n, 6)
    };
  };
  function Hc(e) {
    const t = new Array(10).fill(null).map((n, r) => {
      const o = r - 1, a = e * Math.pow(2.71828, o / 5), i = r > 1 ? Math.floor(a) : Math.ceil(a);
      return Math.floor(i / 2) * 2;
    });
    return t[1] = e, t.map((n) => {
      const r = n + 8;
      return {
        size: n,
        lineHeight: r / n
      };
    });
  }
  const Rc = (e) => {
    const t = Hc(e), n = t.map((o) => o.size), r = t.map((o) => o.lineHeight);
    return {
      fontSizeSM: n[0],
      fontSize: n[1],
      fontSizeLG: n[2],
      fontSizeXL: n[3],
      fontSizeHeading1: n[6],
      fontSizeHeading2: n[5],
      fontSizeHeading3: n[4],
      fontSizeHeading4: n[3],
      fontSizeHeading5: n[2],
      lineHeight: r[1],
      lineHeightLG: r[2],
      lineHeightSM: r[0],
      lineHeightHeading1: r[6],
      lineHeightHeading2: r[5],
      lineHeightHeading3: r[4],
      lineHeightHeading4: r[3],
      lineHeightHeading5: r[2]
    };
  };
  function Nc(e) {
    const t = Object.keys(Ia).map((n) => {
      const r = _e(e[n]);
      return new Array(10).fill(1).reduce((o, a, i) => (o[`${n}-${i + 1}`] = r[i], o), {});
    }).reduce((n, r) => (n = d(d({}, n), r), n), {});
    return d(d(d(d(d(d(d({}, e), t), Ec(e, {
      generateColorPalettes: Mc,
      generateNeutralColorPalettes: jc
    })), Rc(e.fontSize)), Ic(e)), Pc(e)), Ac(e));
  }
  function Sn(e) {
    return e >= 0 && e <= 255;
  }
  function Nt(e, t) {
    const {
      r: n,
      g: r,
      b: o,
      a
    } = new k(e).toRgb();
    if (a < 1)
      return e;
    const {
      r: i,
      g: l,
      b: c
    } = new k(t).toRgb();
    for (let s = 0.01; s <= 1; s += 0.01) {
      const f = Math.round((n - i * (1 - s)) / s), u = Math.round((r - l * (1 - s)) / s), p = Math.round((o - c * (1 - s)) / s);
      if (Sn(f) && Sn(u) && Sn(p))
        return new k({
          r: f,
          g: u,
          b: p,
          a: Math.round(s * 100) / 100
        }).toRgbString();
    }
    return new k({
      r: n,
      g: r,
      b: o,
      a: 1
    }).toRgbString();
  }
  var Bc = function(e, t) {
    var n = {};
    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
    return n;
  };
  function zc(e) {
    const {
      override: t
    } = e, n = Bc(e, ["override"]), r = d({}, t);
    Object.keys(ln).forEach((v) => {
      delete r[v];
    });
    const o = d(d({}, n), r), a = 480, i = 576, l = 768, c = 992, s = 1200, f = 1600, u = 2e3;
    return d(d(d({}, o), {
      colorLink: o.colorInfoText,
      colorLinkHover: o.colorInfoHover,
      colorLinkActive: o.colorInfoActive,
      // ============== Background ============== //
      colorFillContent: o.colorFillSecondary,
      colorFillContentHover: o.colorFill,
      colorFillAlter: o.colorFillQuaternary,
      colorBgContainerDisabled: o.colorFillTertiary,
      // ============== Split ============== //
      colorBorderBg: o.colorBgContainer,
      colorSplit: Nt(o.colorBorderSecondary, o.colorBgContainer),
      // ============== Text ============== //
      colorTextPlaceholder: o.colorTextQuaternary,
      colorTextDisabled: o.colorTextQuaternary,
      colorTextHeading: o.colorText,
      colorTextLabel: o.colorTextSecondary,
      colorTextDescription: o.colorTextTertiary,
      colorTextLightSolid: o.colorWhite,
      colorHighlight: o.colorError,
      colorBgTextHover: o.colorFillSecondary,
      colorBgTextActive: o.colorFill,
      colorIcon: o.colorTextTertiary,
      colorIconHover: o.colorText,
      colorErrorOutline: Nt(o.colorErrorBg, o.colorBgContainer),
      colorWarningOutline: Nt(o.colorWarningBg, o.colorBgContainer),
      // Font
      fontSizeIcon: o.fontSizeSM,
      // Control
      lineWidth: o.lineWidth,
      controlOutlineWidth: o.lineWidth * 2,
      // Checkbox size and expand icon size
      controlInteractiveSize: o.controlHeight / 2,
      controlItemBgHover: o.colorFillTertiary,
      controlItemBgActive: o.colorPrimaryBg,
      controlItemBgActiveHover: o.colorPrimaryBgHover,
      controlItemBgActiveDisabled: o.colorFill,
      controlTmpOutline: o.colorFillQuaternary,
      controlOutline: Nt(o.colorPrimaryBg, o.colorBgContainer),
      lineType: o.lineType,
      borderRadius: o.borderRadius,
      borderRadiusXS: o.borderRadiusXS,
      borderRadiusSM: o.borderRadiusSM,
      borderRadiusLG: o.borderRadiusLG,
      fontWeightStrong: 600,
      opacityLoading: 0.65,
      linkDecoration: "none",
      linkHoverDecoration: "none",
      linkFocusDecoration: "none",
      controlPaddingHorizontal: 12,
      controlPaddingHorizontalSM: 8,
      paddingXXS: o.sizeXXS,
      paddingXS: o.sizeXS,
      paddingSM: o.sizeSM,
      padding: o.size,
      paddingMD: o.sizeMD,
      paddingLG: o.sizeLG,
      paddingXL: o.sizeXL,
      paddingContentHorizontalLG: o.sizeLG,
      paddingContentVerticalLG: o.sizeMS,
      paddingContentHorizontal: o.sizeMS,
      paddingContentVertical: o.sizeSM,
      paddingContentHorizontalSM: o.size,
      paddingContentVerticalSM: o.sizeXS,
      marginXXS: o.sizeXXS,
      marginXS: o.sizeXS,
      marginSM: o.sizeSM,
      margin: o.size,
      marginMD: o.sizeMD,
      marginLG: o.sizeLG,
      marginXL: o.sizeXL,
      marginXXL: o.sizeXXL,
      boxShadow: `
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,
      boxShadowSecondary: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowTertiary: `
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,
      screenXS: a,
      screenXSMin: a,
      screenXSMax: i - 1,
      screenSM: i,
      screenSMMin: i,
      screenSMMax: l - 1,
      screenMD: l,
      screenMDMin: l,
      screenMDMax: c - 1,
      screenLG: c,
      screenLGMin: c,
      screenLGMax: s - 1,
      screenXL: s,
      screenXLMin: s,
      screenXLMax: f - 1,
      screenXXL: f,
      screenXXLMin: f,
      screenXXLMax: u - 1,
      screenXXXL: u,
      screenXXXLMin: u,
      // FIXME: component box-shadow, should be removed
      boxShadowPopoverArrow: "3px 3px 7px rgba(0, 0, 0, 0.1)",
      boxShadowCard: `
      0 1px 2px -2px ${new k("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new k("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new k("rgba(0, 0, 0, 0.09)").toRgbString()}
    `,
      boxShadowDrawerRight: `
      -6px 0 16px 0 rgba(0, 0, 0, 0.08),
      -3px 0 6px -4px rgba(0, 0, 0, 0.12),
      -9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowDrawerLeft: `
      6px 0 16px 0 rgba(0, 0, 0, 0.08),
      3px 0 6px -4px rgba(0, 0, 0, 0.12),
      9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowDrawerUp: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowDrawerDown: `
      0 -6px 16px 0 rgba(0, 0, 0, 0.08),
      0 -3px 6px -4px rgba(0, 0, 0, 0.12),
      0 -9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowTabsOverflowLeft: "inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)",
      boxShadowTabsOverflowRight: "inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)",
      boxShadowTabsOverflowTop: "inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)",
      boxShadowTabsOverflowBottom: "inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)"
    }), r);
  }
  const Ea = (e) => ({
    boxSizing: "border-box",
    margin: 0,
    padding: 0,
    color: e.colorText,
    fontSize: e.fontSize,
    // font-variant: @font-variant-base;
    lineHeight: e.lineHeight,
    listStyle: "none",
    // font-feature-settings: @font-feature-settings-base;
    fontFamily: e.fontFamily
  }), kc = () => ({
    display: "inline-flex",
    alignItems: "center",
    color: "inherit",
    fontStyle: "normal",
    lineHeight: 0,
    textAlign: "center",
    textTransform: "none",
    // for SVG icon, see https://blog.prototypr.io/align-svg-icons-to-text-and-say-goodbye-to-font-icons-d44b3d7b26b4
    verticalAlign: "-0.125em",
    textRendering: "optimizeLegibility",
    "-webkit-font-smoothing": "antialiased",
    "-moz-osx-font-smoothing": "grayscale",
    "> *": {
      lineHeight: 1
    },
    svg: {
      display: "inline-block"
    }
  }), Lc = (e) => ({
    a: {
      color: e.colorLink,
      textDecoration: e.linkDecoration,
      backgroundColor: "transparent",
      outline: "none",
      cursor: "pointer",
      transition: `color ${e.motionDurationSlow}`,
      "-webkit-text-decoration-skip": "objects",
      "&:hover": {
        color: e.colorLinkHover
      },
      "&:active": {
        color: e.colorLinkActive
      },
      "&:active,\n  &:hover": {
        textDecoration: e.linkHoverDecoration,
        outline: 0
      },
      // https://github.com/ant-design/ant-design/issues/22503
      "&:focus": {
        textDecoration: e.linkFocusDecoration,
        outline: 0
      },
      "&[disabled]": {
        color: e.colorTextDisabled,
        cursor: "not-allowed"
      }
    }
  }), Fc = (e, t) => {
    const {
      fontFamily: n,
      fontSize: r
    } = e, o = `[class^="${t}"], [class*=" ${t}"]`;
    return {
      [o]: {
        fontFamily: n,
        fontSize: r,
        boxSizing: "border-box",
        "&::before, &::after": {
          boxSizing: "border-box"
        },
        [o]: {
          boxSizing: "border-box",
          "&::before, &::after": {
            boxSizing: "border-box"
          }
        }
      }
    };
  }, Dc = (e) => ({
    outline: `${e.lineWidthBold}px solid ${e.colorPrimaryBorder}`,
    outlineOffset: 1,
    transition: "outline-offset 0s, outline 0s"
  }), Wc = (e) => ({
    "&:focus-visible": d({}, Dc(e))
  });
  function nt(e, t, n) {
    return (r) => {
      const o = x(() => r == null ? void 0 : r.value), [a, i, l] = wt(), {
        getPrefixCls: c,
        iconPrefixCls: s
      } = ar(), f = x(() => c()), u = x(() => ({
        theme: a.value,
        token: i.value,
        hashId: l.value,
        path: ["Shared", f.value]
      }));
      Nn(u, () => [{
        // Link
        "&": Lc(i.value)
      }]);
      const p = x(() => ({
        theme: a.value,
        token: i.value,
        hashId: l.value,
        path: [e, o.value, s.value]
      }));
      return [Nn(p, () => {
        const {
          token: v,
          flush: b
        } = Xc(i.value), y = typeof n == "function" ? n(v) : n, S = d(d({}, y), i.value[e]), C = `.${o.value}`, $ = je(v, {
          componentCls: C,
          prefixCls: o.value,
          iconCls: `.${s.value}`,
          antCls: `.${f.value}`
        }, S), P = t($, {
          hashId: l.value,
          prefixCls: o.value,
          rootPrefixCls: f.value,
          iconPrefixCls: s.value,
          overrideComponentToken: i.value[e]
        });
        return b(e, S), [Fc(i.value, o.value), P];
      }), l];
    };
  }
  const _a = typeof CSSINJS_STATISTIC < "u";
  let Ln = !0;
  function je() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    if (!_a)
      return d({}, ...t);
    Ln = !1;
    const r = {};
    return t.forEach((o) => {
      Object.keys(o).forEach((i) => {
        Object.defineProperty(r, i, {
          configurable: !0,
          enumerable: !0,
          get: () => o[i]
        });
      });
    }), Ln = !0, r;
  }
  function Gc() {
  }
  function Xc(e) {
    let t, n = e, r = Gc;
    return _a && (t = /* @__PURE__ */ new Set(), n = new Proxy(e, {
      get(o, a) {
        return Ln && t.add(a), o[a];
      }
    }), r = (o, a) => {
      Array.from(t);
    }), {
      token: n,
      keys: t,
      flush: r
    };
  }
  const Vc = ma(Nc), Aa = {
    token: ln,
    hashed: !0
  }, Ma = Symbol("DesignTokenContext"), Fn = D(), Uc = (e) => {
    pe(Ma, e), ne(e, () => {
      Fn.value = Xt(e), Di(Fn);
    }, {
      immediate: !0,
      deep: !0
    });
  }, Kc = M({
    props: {
      value: K()
    },
    setup(e, t) {
      let {
        slots: n
      } = t;
      return Uc(x(() => e.value)), () => {
        var r;
        return (r = n.default) === null || r === void 0 ? void 0 : r.call(n);
      };
    }
  });
  function wt() {
    const e = le(Ma, x(() => Fn.value || Aa)), t = x(() => `${sc}-${e.value.hashed || ""}`), n = x(() => e.value.theme || Vc), r = Bl(n, x(() => [ln, e.value.token]), x(() => ({
      salt: t.value,
      override: d({
        override: e.value.token
      }, e.value.components),
      formatToken: zc
    })));
    return [n, x(() => r.value[0]), x(() => e.value.hashed ? r.value[1] : "")];
  }
  const ur = M({
    compatConfig: {
      MODE: 3
    },
    setup() {
      const [, e] = wt(), t = x(() => new k(e.value.colorBgBase).toHsl().l < 0.5 ? {
        opacity: 0.65
      } : {});
      return () => h("svg", {
        style: t.value,
        width: "184",
        height: "152",
        viewBox: "0 0 184 152",
        xmlns: "http://www.w3.org/2000/svg"
      }, [h("g", {
        fill: "none",
        "fill-rule": "evenodd"
      }, [h("g", {
        transform: "translate(24 31.67)"
      }, [h("ellipse", {
        "fill-opacity": ".8",
        fill: "#F5F5F7",
        cx: "67.797",
        cy: "106.89",
        rx: "67.797",
        ry: "12.668"
      }, null), h("path", {
        d: "M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z",
        fill: "#AEB8C2"
      }, null), h("path", {
        d: "M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z",
        fill: "url(#linearGradient-1)",
        transform: "translate(13.56)"
      }, null), h("path", {
        d: "M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z",
        fill: "#F5F5F7"
      }, null), h("path", {
        d: "M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z",
        fill: "#DCE0E6"
      }, null)]), h("path", {
        d: "M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z",
        fill: "#DCE0E6"
      }, null), h("g", {
        transform: "translate(149.65 15.383)",
        fill: "#FFF"
      }, [h("ellipse", {
        cx: "20.654",
        cy: "3.167",
        rx: "2.849",
        ry: "2.815"
      }, null), h("path", {
        d: "M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"
      }, null)])])]);
    }
  });
  ur.PRESENTED_IMAGE_DEFAULT = !0;
  const ja = M({
    compatConfig: {
      MODE: 3
    },
    setup() {
      const [, e] = wt(), t = x(() => {
        const {
          colorFill: n,
          colorFillTertiary: r,
          colorFillQuaternary: o,
          colorBgContainer: a
        } = e.value;
        return {
          borderColor: new k(n).onBackground(a).toHexString(),
          shadowColor: new k(r).onBackground(a).toHexString(),
          contentColor: new k(o).onBackground(a).toHexString()
        };
      });
      return () => h("svg", {
        width: "64",
        height: "41",
        viewBox: "0 0 64 41",
        xmlns: "http://www.w3.org/2000/svg"
      }, [h("g", {
        transform: "translate(0 1)",
        fill: "none",
        "fill-rule": "evenodd"
      }, [h("ellipse", {
        fill: t.value.shadowColor,
        cx: "32",
        cy: "33",
        rx: "32",
        ry: "7"
      }, null), h("g", {
        "fill-rule": "nonzero",
        stroke: t.value.borderColor
      }, [h("path", {
        d: "M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"
      }, null), h("path", {
        d: "M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z",
        fill: t.value.contentColor
      }, null)])])]);
    }
  });
  ja.PRESENTED_IMAGE_SIMPLE = !0;
  const qc = (e) => {
    const {
      componentCls: t,
      margin: n,
      marginXS: r,
      marginXL: o,
      fontSize: a,
      lineHeight: i
    } = e;
    return {
      [t]: {
        marginInline: r,
        fontSize: a,
        lineHeight: i,
        textAlign: "center",
        // 原来 &-image 没有父子结构，现在为了外层承担我们的hashId，改成父子结果
        [`${t}-image`]: {
          height: e.emptyImgHeight,
          marginBottom: r,
          opacity: e.opacityImage,
          img: {
            height: "100%"
          },
          svg: {
            height: "100%",
            margin: "auto"
          }
        },
        // 原来 &-footer 没有父子结构，现在为了外层承担我们的hashId，改成父子结果
        [`${t}-footer`]: {
          marginTop: n
        },
        "&-normal": {
          marginBlock: o,
          color: e.colorTextDisabled,
          [`${t}-image`]: {
            height: e.emptyImgHeightMD
          }
        },
        "&-small": {
          marginBlock: r,
          color: e.colorTextDisabled,
          [`${t}-image`]: {
            height: e.emptyImgHeightSM
          }
        }
      }
    };
  }, Yc = nt("Empty", (e) => {
    const {
      componentCls: t,
      controlHeightLG: n
    } = e, r = je(e, {
      emptyImgCls: `${t}-img`,
      emptyImgHeight: n * 2.5,
      emptyImgHeightMD: n,
      emptyImgHeightSM: n * 0.875
    });
    return [qc(r)];
  });
  var Qc = function(e, t) {
    var n = {};
    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
    return n;
  };
  const Jc = () => ({
    prefixCls: String,
    imageStyle: K(),
    image: An(),
    description: An()
  }), fr = M({
    name: "AEmpty",
    compatConfig: {
      MODE: 3
    },
    inheritAttrs: !1,
    props: Jc(),
    setup(e, t) {
      let {
        slots: n = {},
        attrs: r
      } = t;
      const {
        direction: o,
        prefixCls: a
      } = ge("empty", e), [i, l] = Yc(a);
      return () => {
        var c, s;
        const f = a.value, u = d(d({}, e), r), {
          image: p = ((c = n.image) === null || c === void 0 ? void 0 : c.call(n)) || We(ur),
          description: v = ((s = n.description) === null || s === void 0 ? void 0 : s.call(n)) || void 0,
          imageStyle: b,
          class: y = ""
        } = u, S = Qc(u, ["image", "description", "imageStyle", "class"]), C = typeof p == "function" ? p() : p, $ = typeof C == "object" && "type" in C && C.type.PRESENTED_IMAGE_SIMPLE;
        return i(h(ra, {
          componentName: "Empty",
          children: (P) => {
            const w = typeof v < "u" ? v : P.description, T = typeof w == "string" ? w : "empty";
            let E = null;
            return typeof C == "string" ? E = h("img", {
              alt: T,
              src: C
            }, null) : E = C, h("div", j({
              class: B(f, y, l.value, {
                [`${f}-normal`]: $,
                [`${f}-rtl`]: o.value === "rtl"
              })
            }, S), [h("div", {
              class: `${f}-image`,
              style: b
            }, [E]), w && h("p", {
              class: `${f}-description`
            }, [w]), n.default && h("div", {
              class: `${f}-footer`
            }, [Yo(n.default())])]);
          }
        }, null));
      };
    }
  });
  fr.PRESENTED_IMAGE_DEFAULT = () => We(ur);
  fr.PRESENTED_IMAGE_SIMPLE = () => We(ja);
  const ct = nr(fr), Ha = (e) => {
    const {
      prefixCls: t
    } = ge("empty", e);
    return ((r) => {
      switch (r) {
        case "Table":
        case "List":
          return h(ct, {
            image: ct.PRESENTED_IMAGE_SIMPLE
          }, null);
        case "Select":
        case "TreeSelect":
        case "Cascader":
        case "Transfer":
        case "Mentions":
          return h(ct, {
            image: ct.PRESENTED_IMAGE_SIMPLE,
            class: `${t.value}-small`
          }, null);
        default:
          return h(ct, null, null);
      }
    })(e.componentName);
  };
  function Zc(e) {
    return h(Ha, {
      componentName: e
    }, null);
  }
  const Ra = Symbol("SizeContextKey"), Na = () => le(Ra, ae(void 0)), es = (e) => {
    const t = Na();
    return pe(Ra, x(() => e.value || t.value)), e;
  }, ge = (e, t) => {
    const n = Na(), r = ir(), o = le(or, d(d({}, ea), {
      renderEmpty: (g) => We(Ha, {
        componentName: g
      })
    })), a = x(() => o.getPrefixCls(e, t.prefixCls)), i = x(() => {
      var g, O;
      return (g = t.direction) !== null && g !== void 0 ? g : (O = o.direction) === null || O === void 0 ? void 0 : O.value;
    }), l = x(() => {
      var g;
      return (g = t.iconPrefixCls) !== null && g !== void 0 ? g : o.iconPrefixCls.value;
    }), c = x(() => o.getPrefixCls()), s = x(() => {
      var g;
      return (g = o.autoInsertSpaceInButton) === null || g === void 0 ? void 0 : g.value;
    }), f = o.renderEmpty, u = o.space, p = o.pageHeader, v = o.form, b = x(() => {
      var g, O;
      return (g = t.getTargetContainer) !== null && g !== void 0 ? g : (O = o.getTargetContainer) === null || O === void 0 ? void 0 : O.value;
    }), y = x(() => {
      var g, O, _;
      return (O = (g = t.getContainer) !== null && g !== void 0 ? g : t.getPopupContainer) !== null && O !== void 0 ? O : (_ = o.getPopupContainer) === null || _ === void 0 ? void 0 : _.value;
    }), S = x(() => {
      var g, O;
      return (g = t.dropdownMatchSelectWidth) !== null && g !== void 0 ? g : (O = o.dropdownMatchSelectWidth) === null || O === void 0 ? void 0 : O.value;
    }), C = x(() => {
      var g;
      return (t.virtual === void 0 ? ((g = o.virtual) === null || g === void 0 ? void 0 : g.value) !== !1 : t.virtual !== !1) && S.value !== !1;
    }), $ = x(() => t.size || n.value), P = x(() => {
      var g, O, _;
      return (g = t.autocomplete) !== null && g !== void 0 ? g : (_ = (O = o.input) === null || O === void 0 ? void 0 : O.value) === null || _ === void 0 ? void 0 : _.autocomplete;
    }), w = x(() => {
      var g;
      return (g = t.disabled) !== null && g !== void 0 ? g : r.value;
    }), T = x(() => {
      var g;
      return (g = t.csp) !== null && g !== void 0 ? g : o.csp;
    }), E = x(() => {
      var g, O;
      return (g = t.wave) !== null && g !== void 0 ? g : (O = o.wave) === null || O === void 0 ? void 0 : O.value;
    });
    return {
      configProvider: o,
      prefixCls: a,
      direction: i,
      size: $,
      getTargetContainer: b,
      getPopupContainer: y,
      space: u,
      pageHeader: p,
      form: v,
      autoInsertSpaceInButton: s,
      renderEmpty: f,
      virtual: C,
      dropdownMatchSelectWidth: S,
      rootPrefixCls: c,
      getPrefixCls: o.getPrefixCls,
      autocomplete: P,
      csp: T,
      iconPrefixCls: l,
      disabled: w,
      select: o.select,
      wave: E
    };
  };
  function ts(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
    }
  }
  function Ba(e, t, n) {
    return n && ts(e, n), e;
  }
  function Dt() {
    return (Dt = Object.assign || function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    }).apply(this, arguments);
  }
  function za(e, t) {
    e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t;
  }
  function ka(e, t) {
    if (e == null) return {};
    var n, r, o = {}, a = Object.keys(e);
    for (r = 0; r < a.length; r++) t.indexOf(n = a[r]) >= 0 || (o[n] = e[n]);
    return o;
  }
  function Zr(e) {
    return ((t = e) != null && typeof t == "object" && Array.isArray(t) === !1) == 1 && Object.prototype.toString.call(e) === "[object Object]";
    var t;
  }
  var La = Object.prototype, Fa = La.toString, ns = La.hasOwnProperty, Da = /^\s*function (\w+)/;
  function eo(e) {
    var t, n = (t = e == null ? void 0 : e.type) !== null && t !== void 0 ? t : e;
    if (n) {
      var r = n.toString().match(Da);
      return r ? r[1] : "";
    }
    return "";
  }
  var Ae = function(e) {
    var t, n;
    return Zr(e) !== !1 && typeof (t = e.constructor) == "function" && Zr(n = t.prototype) !== !1 && n.hasOwnProperty("isPrototypeOf") !== !1;
  }, rs = function(e) {
    return e;
  }, W = rs, St = function(e, t) {
    return ns.call(e, t);
  }, os = Number.isInteger || function(e) {
    return typeof e == "number" && isFinite(e) && Math.floor(e) === e;
  }, Ue = Array.isArray || function(e) {
    return Fa.call(e) === "[object Array]";
  }, Ke = function(e) {
    return Fa.call(e) === "[object Function]";
  }, qt = function(e) {
    return Ae(e) && St(e, "_vueTypes_name");
  }, Wa = function(e) {
    return Ae(e) && (St(e, "type") || ["_vueTypes_name", "validator", "default", "required"].some(function(t) {
      return St(e, t);
    }));
  };
  function dr(e, t) {
    return Object.defineProperty(e.bind(t), "__original", { value: e });
  }
  function He(e, t, n) {
    var r;
    n === void 0 && (n = !1);
    var o = !0, a = "";
    r = Ae(e) ? e : { type: e };
    var i = qt(r) ? r._vueTypes_name + " - " : "";
    if (Wa(r) && r.type !== null) {
      if (r.type === void 0 || r.type === !0 || !r.required && t === void 0) return o;
      Ue(r.type) ? (o = r.type.some(function(u) {
        return He(u, t, !0) === !0;
      }), a = r.type.map(function(u) {
        return eo(u);
      }).join(" or ")) : o = (a = eo(r)) === "Array" ? Ue(t) : a === "Object" ? Ae(t) : a === "String" || a === "Number" || a === "Boolean" || a === "Function" ? function(u) {
        if (u == null) return "";
        var p = u.constructor.toString().match(Da);
        return p ? p[1] : "";
      }(t) === a : t instanceof r.type;
    }
    if (!o) {
      var l = i + 'value "' + t + '" should be of type "' + a + '"';
      return n === !1 ? (W(l), !1) : l;
    }
    if (St(r, "validator") && Ke(r.validator)) {
      var c = W, s = [];
      if (W = function(u) {
        s.push(u);
      }, o = r.validator(t), W = c, !o) {
        var f = (s.length > 1 ? "* " : "") + s.join(`
* `);
        return s.length = 0, n === !1 ? (W(f), o) : f;
      }
    }
    return o;
  }
  function Q(e, t) {
    var n = Object.defineProperties(t, { _vueTypes_name: { value: e, writable: !0 }, isRequired: { get: function() {
      return this.required = !0, this;
    } }, def: { value: function(o) {
      return o !== void 0 || this.default ? Ke(o) || He(this, o, !0) === !0 ? (this.default = Ue(o) ? function() {
        return [].concat(o);
      } : Ae(o) ? function() {
        return Object.assign({}, o);
      } : o, this) : (W(this._vueTypes_name + ' - invalid default value: "' + o + '"'), this) : this;
    } } }), r = n.validator;
    return Ke(r) && (n.validator = dr(r, n)), n;
  }
  function ie(e, t) {
    var n = Q(e, t);
    return Object.defineProperty(n, "validate", { value: function(r) {
      return Ke(this.validator) && W(this._vueTypes_name + ` - calling .validate() will overwrite the current custom validator function. Validator info:
` + JSON.stringify(this)), this.validator = dr(r, this), this;
    } });
  }
  function to(e, t, n) {
    var r, o, a = (r = t, o = {}, Object.getOwnPropertyNames(r).forEach(function(u) {
      o[u] = Object.getOwnPropertyDescriptor(r, u);
    }), Object.defineProperties({}, o));
    if (a._vueTypes_name = e, !Ae(n)) return a;
    var i, l, c = n.validator, s = ka(n, ["validator"]);
    if (Ke(c)) {
      var f = a.validator;
      f && (f = (l = (i = f).__original) !== null && l !== void 0 ? l : i), a.validator = dr(f ? function(u) {
        return f.call(this, u) && c.call(this, u);
      } : c, a);
    }
    return Object.assign(a, s);
  }
  function cn(e) {
    return e.replace(/^(?!\s*$)/gm, "  ");
  }
  var as = function() {
    return ie("any", {});
  }, is = function() {
    return ie("function", { type: Function });
  }, ls = function() {
    return ie("boolean", { type: Boolean });
  }, cs = function() {
    return ie("string", { type: String });
  }, ss = function() {
    return ie("number", { type: Number });
  }, us = function() {
    return ie("array", { type: Array });
  }, fs = function() {
    return ie("object", { type: Object });
  }, ds = function() {
    return Q("integer", { type: Number, validator: function(e) {
      return os(e);
    } });
  }, ps = function() {
    return Q("symbol", { validator: function(e) {
      return typeof e == "symbol";
    } });
  };
  function gs(e, t) {
    if (t === void 0 && (t = "custom validation failed"), typeof e != "function") throw new TypeError("[VueTypes error]: You must provide a function as argument");
    return Q(e.name || "<<anonymous function>>", { validator: function(n) {
      var r = e(n);
      return r || W(this._vueTypes_name + " - " + t), r;
    } });
  }
  function ms(e) {
    if (!Ue(e)) throw new TypeError("[VueTypes error]: You must provide an array as argument.");
    var t = 'oneOf - value should be one of "' + e.join('", "') + '".', n = e.reduce(function(r, o) {
      if (o != null) {
        var a = o.constructor;
        r.indexOf(a) === -1 && r.push(a);
      }
      return r;
    }, []);
    return Q("oneOf", { type: n.length > 0 ? n : void 0, validator: function(r) {
      var o = e.indexOf(r) !== -1;
      return o || W(t), o;
    } });
  }
  function hs(e) {
    if (!Ue(e)) throw new TypeError("[VueTypes error]: You must provide an array as argument");
    for (var t = !1, n = [], r = 0; r < e.length; r += 1) {
      var o = e[r];
      if (Wa(o)) {
        if (qt(o) && o._vueTypes_name === "oneOf") {
          n = n.concat(o.type);
          continue;
        }
        if (Ke(o.validator) && (t = !0), o.type !== !0 && o.type) {
          n = n.concat(o.type);
          continue;
        }
      }
      n.push(o);
    }
    return n = n.filter(function(a, i) {
      return n.indexOf(a) === i;
    }), Q("oneOfType", t ? { type: n, validator: function(a) {
      var i = [], l = e.some(function(c) {
        var s = He(qt(c) && c._vueTypes_name === "oneOf" ? c.type || null : c, a, !0);
        return typeof s == "string" && i.push(s), s === !0;
      });
      return l || W("oneOfType - provided value does not match any of the " + i.length + ` passed-in validators:
` + cn(i.join(`
`))), l;
    } } : { type: n });
  }
  function vs(e) {
    return Q("arrayOf", { type: Array, validator: function(t) {
      var n, r = t.every(function(o) {
        return (n = He(e, o, !0)) === !0;
      });
      return r || W(`arrayOf - value validation error:
` + cn(n)), r;
    } });
  }
  function ys(e) {
    return Q("instanceOf", { type: e });
  }
  function bs(e) {
    return Q("objectOf", { type: Object, validator: function(t) {
      var n, r = Object.keys(t).every(function(o) {
        return (n = He(e, t[o], !0)) === !0;
      });
      return r || W(`objectOf - value validation error:
` + cn(n)), r;
    } });
  }
  function Cs(e) {
    var t = Object.keys(e), n = t.filter(function(o) {
      var a;
      return !!(!((a = e[o]) === null || a === void 0) && a.required);
    }), r = Q("shape", { type: Object, validator: function(o) {
      var a = this;
      if (!Ae(o)) return !1;
      var i = Object.keys(o);
      if (n.length > 0 && n.some(function(c) {
        return i.indexOf(c) === -1;
      })) {
        var l = n.filter(function(c) {
          return i.indexOf(c) === -1;
        });
        return W(l.length === 1 ? 'shape - required property "' + l[0] + '" is not defined.' : 'shape - required properties "' + l.join('", "') + '" are not defined.'), !1;
      }
      return i.every(function(c) {
        if (t.indexOf(c) === -1) return a._vueTypes_isLoose === !0 || (W('shape - shape definition does not include a "' + c + '" property. Allowed keys: "' + t.join('", "') + '".'), !1);
        var s = He(e[c], o[c], !0);
        return typeof s == "string" && W('shape - "' + c + `" property validation error:
 ` + cn(s)), s === !0;
      });
    } });
    return Object.defineProperty(r, "_vueTypes_isLoose", { writable: !0, value: !1 }), Object.defineProperty(r, "loose", { get: function() {
      return this._vueTypes_isLoose = !0, this;
    } }), r;
  }
  var re = function() {
    function e() {
    }
    return e.extend = function(t) {
      var n = this;
      if (Ue(t)) return t.forEach(function(u) {
        return n.extend(u);
      }), this;
      var r = t.name, o = t.validate, a = o !== void 0 && o, i = t.getter, l = i !== void 0 && i, c = ka(t, ["name", "validate", "getter"]);
      if (St(this, r)) throw new TypeError('[VueTypes error]: Type "' + r + '" already defined');
      var s, f = c.type;
      return qt(f) ? (delete c.type, Object.defineProperty(this, r, l ? { get: function() {
        return to(r, f, c);
      } } : { value: function() {
        var u, p = to(r, f, c);
        return p.validator && (p.validator = (u = p.validator).bind.apply(u, [p].concat([].slice.call(arguments)))), p;
      } })) : (s = l ? { get: function() {
        var u = Object.assign({}, c);
        return a ? ie(r, u) : Q(r, u);
      }, enumerable: !0 } : { value: function() {
        var u, p, v = Object.assign({}, c);
        return u = a ? ie(r, v) : Q(r, v), v.validator && (u.validator = (p = v.validator).bind.apply(p, [u].concat([].slice.call(arguments)))), u;
      }, enumerable: !0 }, Object.defineProperty(this, r, s));
    }, Ba(e, null, [{ key: "any", get: function() {
      return as();
    } }, { key: "func", get: function() {
      return is().def(this.defaults.func);
    } }, { key: "bool", get: function() {
      return ls().def(this.defaults.bool);
    } }, { key: "string", get: function() {
      return cs().def(this.defaults.string);
    } }, { key: "number", get: function() {
      return ss().def(this.defaults.number);
    } }, { key: "array", get: function() {
      return us().def(this.defaults.array);
    } }, { key: "object", get: function() {
      return fs().def(this.defaults.object);
    } }, { key: "integer", get: function() {
      return ds().def(this.defaults.integer);
    } }, { key: "symbol", get: function() {
      return ps();
    } }]), e;
  }();
  function Ga(e) {
    var t;
    return e === void 0 && (e = { func: function() {
    }, bool: !0, string: "", number: 0, array: function() {
      return [];
    }, object: function() {
      return {};
    }, integer: 0 }), (t = function(n) {
      function r() {
        return n.apply(this, arguments) || this;
      }
      return za(r, n), Ba(r, null, [{ key: "sensibleDefaults", get: function() {
        return Dt({}, this.defaults);
      }, set: function(o) {
        this.defaults = o !== !1 ? Dt({}, o !== !0 ? o : e) : {};
      } }]), r;
    }(re)).defaults = Dt({}, e), t;
  }
  re.defaults = {}, re.custom = gs, re.oneOf = ms, re.instanceOf = ys, re.oneOfType = hs, re.arrayOf = vs, re.objectOf = bs, re.shape = Cs, re.utils = { validate: function(e, t) {
    return He(t, e, !0) === !0;
  }, toType: function(e, t, n) {
    return n === void 0 && (n = !1), n ? ie(e, t) : Q(e, t);
  } };
  (function(e) {
    function t() {
      return e.apply(this, arguments) || this;
    }
    return za(t, e), t;
  })(Ga());
  const qe = Ga({
    func: void 0,
    bool: void 0,
    string: void 0,
    number: void 0,
    array: void 0,
    object: void 0,
    integer: void 0
  });
  qe.extend([{
    name: "looseBool",
    getter: !0,
    type: Boolean,
    default: void 0
  }, {
    name: "style",
    getter: !0,
    type: [String, Object],
    default: void 0
  }, {
    name: "VueNode",
    getter: !0,
    type: null
  }]);
  const Xa = (e, t, n) => {
    Ol(e, `[ant-design-vue: ${t}] ${n}`);
  };
  function xs(e) {
    let {
      prefixCls: t,
      animation: n,
      transitionName: r
    } = e;
    return n ? {
      name: `${t}-${n}`
    } : r ? {
      name: r
    } : {};
  }
  const Ss = (e) => {
    if (!e)
      return !1;
    if (e.offsetParent)
      return !0;
    if (e.getBBox) {
      const t = e.getBBox();
      if (t.width || t.height)
        return !0;
    }
    if (e.getBoundingClientRect) {
      const t = e.getBoundingClientRect();
      if (t.width || t.height)
        return !0;
    }
    return !1;
  };
  var Va = typeof global == "object" && global && global.Object === Object && global, $s = typeof self == "object" && self && self.Object === Object && self, be = Va || $s || Function("return this")(), Yt = be.Symbol, Ua = Object.prototype, ws = Ua.hasOwnProperty, Ts = Ua.toString, st = Yt ? Yt.toStringTag : void 0;
  function Os(e) {
    var t = ws.call(e, st), n = e[st];
    try {
      e[st] = void 0;
      var r = !0;
    } catch {
    }
    var o = Ts.call(e);
    return r && (t ? e[st] = n : delete e[st]), o;
  }
  var Ps = Object.prototype, Is = Ps.toString;
  function Es(e) {
    return Is.call(e);
  }
  var _s = "[object Null]", As = "[object Undefined]", no = Yt ? Yt.toStringTag : void 0;
  function Tt(e) {
    return e == null ? e === void 0 ? As : _s : no && no in Object(e) ? Os(e) : Es(e);
  }
  function Ka(e) {
    var t = typeof e;
    return e != null && (t == "object" || t == "function");
  }
  var Ms = "[object AsyncFunction]", js = "[object Function]", Hs = "[object GeneratorFunction]", Rs = "[object Proxy]";
  function qa(e) {
    if (!Ka(e))
      return !1;
    var t = Tt(e);
    return t == js || t == Hs || t == Ms || t == Rs;
  }
  var $n = be["__core-js_shared__"], ro = function() {
    var e = /[^.]+$/.exec($n && $n.keys && $n.keys.IE_PROTO || "");
    return e ? "Symbol(src)_1." + e : "";
  }();
  function Ns(e) {
    return !!ro && ro in e;
  }
  var Bs = Function.prototype, zs = Bs.toString;
  function Re(e) {
    if (e != null) {
      try {
        return zs.call(e);
      } catch {
      }
      try {
        return e + "";
      } catch {
      }
    }
    return "";
  }
  var ks = /[\\^$.*+?()[\]{}|]/g, Ls = /^\[object .+?Constructor\]$/, Fs = Function.prototype, Ds = Object.prototype, Ws = Fs.toString, Gs = Ds.hasOwnProperty, Xs = RegExp(
    "^" + Ws.call(Gs).replace(ks, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function Vs(e) {
    if (!Ka(e) || Ns(e))
      return !1;
    var t = qa(e) ? Xs : Ls;
    return t.test(Re(e));
  }
  function Us(e, t) {
    return e == null ? void 0 : e[t];
  }
  function Ot(e, t) {
    var n = Us(e, t);
    return Vs(n) ? n : void 0;
  }
  var Dn = Ot(be, "Map"), Ks = Array.isArray;
  function pr(e) {
    return e != null && typeof e == "object";
  }
  var qs = "[object Arguments]";
  function oo(e) {
    return pr(e) && Tt(e) == qs;
  }
  var Ya = Object.prototype, Ys = Ya.hasOwnProperty, Qs = Ya.propertyIsEnumerable, Js = oo(/* @__PURE__ */ function() {
    return arguments;
  }()) ? oo : function(e) {
    return pr(e) && Ys.call(e, "callee") && !Qs.call(e, "callee");
  };
  function Zs() {
    return !1;
  }
  var Qa = typeof ue == "object" && ue && !ue.nodeType && ue, ao = Qa && typeof fe == "object" && fe && !fe.nodeType && fe, eu = ao && ao.exports === Qa, io = eu ? be.Buffer : void 0, tu = io ? io.isBuffer : void 0, nu = tu || Zs, ru = 9007199254740991;
  function Ja(e) {
    return typeof e == "number" && e > -1 && e % 1 == 0 && e <= ru;
  }
  var ou = "[object Arguments]", au = "[object Array]", iu = "[object Boolean]", lu = "[object Date]", cu = "[object Error]", su = "[object Function]", uu = "[object Map]", fu = "[object Number]", du = "[object Object]", pu = "[object RegExp]", gu = "[object Set]", mu = "[object String]", hu = "[object WeakMap]", vu = "[object ArrayBuffer]", yu = "[object DataView]", bu = "[object Float32Array]", Cu = "[object Float64Array]", xu = "[object Int8Array]", Su = "[object Int16Array]", $u = "[object Int32Array]", wu = "[object Uint8Array]", Tu = "[object Uint8ClampedArray]", Ou = "[object Uint16Array]", Pu = "[object Uint32Array]", H = {};
  H[bu] = H[Cu] = H[xu] = H[Su] = H[$u] = H[wu] = H[Tu] = H[Ou] = H[Pu] = !0;
  H[ou] = H[au] = H[vu] = H[iu] = H[yu] = H[lu] = H[cu] = H[su] = H[uu] = H[fu] = H[du] = H[pu] = H[gu] = H[mu] = H[hu] = !1;
  function Iu(e) {
    return pr(e) && Ja(e.length) && !!H[Tt(e)];
  }
  function Eu(e) {
    return function(t) {
      return e(t);
    };
  }
  var Za = typeof ue == "object" && ue && !ue.nodeType && ue, pt = Za && typeof fe == "object" && fe && !fe.nodeType && fe, _u = pt && pt.exports === Za, wn = _u && Va.process, lo = function() {
    try {
      var e = pt && pt.require && pt.require("util").types;
      return e || wn && wn.binding && wn.binding("util");
    } catch {
    }
  }(), co = lo && lo.isTypedArray, Au = co ? Eu(co) : Iu, Mu = Object.prototype;
  function ei(e) {
    var t = e && e.constructor, n = typeof t == "function" && t.prototype || Mu;
    return e === n;
  }
  function ju(e, t) {
    return function(n) {
      return e(t(n));
    };
  }
  var Hu = ju(Object.keys, Object), Ru = Object.prototype, Nu = Ru.hasOwnProperty;
  function Bu(e) {
    if (!ei(e))
      return Hu(e);
    var t = [];
    for (var n in Object(e))
      Nu.call(e, n) && n != "constructor" && t.push(n);
    return t;
  }
  function zu(e) {
    return e != null && Ja(e.length) && !qa(e);
  }
  var Wn = Ot(be, "DataView"), Gn = Ot(be, "Promise"), Xn = Ot(be, "Set"), Vn = Ot(be, "WeakMap"), so = "[object Map]", ku = "[object Object]", uo = "[object Promise]", fo = "[object Set]", po = "[object WeakMap]", go = "[object DataView]", Lu = Re(Wn), Fu = Re(Dn), Du = Re(Gn), Wu = Re(Xn), Gu = Re(Vn), $e = Tt;
  (Wn && $e(new Wn(new ArrayBuffer(1))) != go || Dn && $e(new Dn()) != so || Gn && $e(Gn.resolve()) != uo || Xn && $e(new Xn()) != fo || Vn && $e(new Vn()) != po) && ($e = function(e) {
    var t = Tt(e), n = t == ku ? e.constructor : void 0, r = n ? Re(n) : "";
    if (r)
      switch (r) {
        case Lu:
          return go;
        case Fu:
          return so;
        case Du:
          return uo;
        case Wu:
          return fo;
        case Gu:
          return po;
      }
    return t;
  });
  Vt("bottomLeft", "bottomRight", "topLeft", "topRight");
  const ti = function(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return d(e ? {
      name: e,
      appear: !0,
      // appearFromClass: `${transitionName}-appear ${transitionName}-appear-prepare`,
      appearActiveClass: `${e}`,
      appearToClass: `${e}-appear ${e}-appear-active`,
      enterFromClass: `${e}-appear ${e}-enter ${e}-appear-prepare ${e}-enter-prepare`,
      enterActiveClass: `${e}`,
      enterToClass: `${e}-enter ${e}-appear ${e}-appear-active ${e}-enter-active`,
      leaveActiveClass: `${e} ${e}-leave`,
      leaveToClass: `${e}-leave-active`
    } : {
      css: !1
    }, t);
  }, ni = Symbol("PortalContextKey"), Xu = function(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      inTriggerContext: !0
    };
    pe(ni, {
      inTriggerContext: t.inTriggerContext,
      shouldRender: x(() => {
        const {
          sPopupVisible: n,
          popupRef: r,
          forceRender: o,
          autoDestroy: a
        } = e;
        let i = !1;
        return (n || r || o) && (i = !0), !n && a && (i = !1), i;
      })
    });
  }, Vu = () => {
    Xu({}, {
      inTriggerContext: !1
    });
    const e = le(ni, {
      shouldRender: x(() => !1),
      inTriggerContext: !1
    });
    return {
      shouldRender: x(() => e.shouldRender.value || e.inTriggerContext === !1)
    };
  }, Uu = M({
    compatConfig: {
      MODE: 3
    },
    name: "Portal",
    inheritAttrs: !1,
    props: {
      getContainer: qe.func.isRequired,
      didUpdate: Function
    },
    setup(e, t) {
      let {
        slots: n
      } = t, r = !0, o;
      const {
        shouldRender: a
      } = Vu();
      function i() {
        a.value && (o = e.getContainer());
      }
      Wi(() => {
        r = !1, i();
      }), Ze(() => {
        o || i();
      });
      const l = ne(a, () => {
        a.value && !o && (o = e.getContainer()), o && l();
      });
      return Xo(() => {
        tn(() => {
          var c;
          a.value && ((c = e.didUpdate) === null || c === void 0 || c.call(e, e));
        });
      }), () => {
        var c;
        return a.value ? r ? (c = n.default) === null || c === void 0 ? void 0 : c.call(n) : o ? h(Vo, {
          to: o
        }, n) : null : null;
      };
    }
  });
  function Se(e) {
    const t = typeof e == "function" ? e() : e, n = ae(t);
    function r(o) {
      n.value = o;
    }
    return [n, r];
  }
  var Ku = Symbol("iconContext"), ri = function() {
    return le(Ku, {
      prefixCls: ae("anticon"),
      rootClassName: ae(""),
      csp: ae()
    });
  };
  function gr() {
    return !!(typeof window < "u" && window.document && window.document.createElement);
  }
  function qu(e, t) {
    return e && e.contains ? e.contains(t) : !1;
  }
  var mo = "data-vc-order", Yu = "vc-icon-key", Un = /* @__PURE__ */ new Map();
  function oi() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.mark;
    return t ? t.startsWith("data-") ? t : "data-".concat(t) : Yu;
  }
  function mr(e) {
    if (e.attachTo)
      return e.attachTo;
    var t = document.querySelector("head");
    return t || document.body;
  }
  function Qu(e) {
    return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
  }
  function ai(e) {
    return Array.from((Un.get(e) || e).children).filter(function(t) {
      return t.tagName === "STYLE";
    });
  }
  function ii(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!gr())
      return null;
    var n = t.csp, r = t.prepend, o = document.createElement("style");
    o.setAttribute(mo, Qu(r)), n && n.nonce && (o.nonce = n.nonce), o.innerHTML = e;
    var a = mr(t), i = a.firstChild;
    if (r) {
      if (r === "queue") {
        var l = ai(a).filter(function(c) {
          return ["prepend", "prependQueue"].includes(c.getAttribute(mo));
        });
        if (l.length)
          return a.insertBefore(o, l[l.length - 1].nextSibling), o;
      }
      a.insertBefore(o, i);
    } else
      a.appendChild(o);
    return o;
  }
  function Ju(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = mr(t);
    return ai(n).find(function(r) {
      return r.getAttribute(oi(t)) === e;
    });
  }
  function Zu(e, t) {
    var n = Un.get(e);
    if (!n || !qu(document, n)) {
      var r = ii("", t), o = r.parentNode;
      Un.set(e, o), e.removeChild(r);
    }
  }
  function ef(e, t) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = mr(n);
    Zu(r, n);
    var o = Ju(t, n);
    if (o)
      return n.csp && n.csp.nonce && o.nonce !== n.csp.nonce && (o.nonce = n.csp.nonce), o.innerHTML !== e && (o.innerHTML = e), o;
    var a = ii(e, n);
    return a.setAttribute(oi(n), t), a;
  }
  function ho(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
      typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
        return Object.getOwnPropertyDescriptor(n, o).enumerable;
      }))), r.forEach(function(o) {
        tf(e, o, n[o]);
      });
    }
    return e;
  }
  function tf(e, t, n) {
    return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
  }
  function vo(e) {
    return typeof e == "object" && typeof e.name == "string" && typeof e.theme == "string" && (typeof e.icon == "object" || typeof e.icon == "function");
  }
  function Kn(e, t, n) {
    return n ? We(e.tag, ho({
      key: t
    }, n, e.attrs), (e.children || []).map(function(r, o) {
      return Kn(r, "".concat(t, "-").concat(e.tag, "-").concat(o));
    })) : We(e.tag, ho({
      key: t
    }, e.attrs), (e.children || []).map(function(r, o) {
      return Kn(r, "".concat(t, "-").concat(e.tag, "-").concat(o));
    }));
  }
  function li(e) {
    return _e(e)[0];
  }
  function ci(e) {
    return e ? Array.isArray(e) ? e : [e] : [];
  }
  var nf = `
.anticon {
  display: inline-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`;
  function si(e) {
    return e && e.getRootNode && e.getRootNode();
  }
  function rf(e) {
    return gr() ? si(e) instanceof ShadowRoot : !1;
  }
  function of(e) {
    return rf(e) ? si(e) : null;
  }
  var af = function() {
    var t = ri(), n = t.prefixCls, r = t.csp, o = en(), a = nf;
    n && (a = a.replace(/anticon/g, n.value)), tn(function() {
      if (gr()) {
        var i = o.vnode.el, l = of(i);
        ef(a, "@ant-design-vue-icons", {
          prepend: !0,
          csp: r.value,
          attachTo: l
        });
      }
    });
  }, lf = ["icon", "primaryColor", "secondaryColor"];
  function cf(e, t) {
    if (e == null) return {};
    var n = sf(e, t), r, o;
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e);
      for (o = 0; o < a.length; o++)
        r = a[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
    }
    return n;
  }
  function sf(e, t) {
    if (e == null) return {};
    var n = {}, r = Object.keys(e), o, a;
    for (a = 0; a < r.length; a++)
      o = r[a], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
    return n;
  }
  function Wt(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
      typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
        return Object.getOwnPropertyDescriptor(n, o).enumerable;
      }))), r.forEach(function(o) {
        uf(e, o, n[o]);
      });
    }
    return e;
  }
  function uf(e, t, n) {
    return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
  }
  var gt = ye({
    primaryColor: "#333",
    secondaryColor: "#E6E6E6",
    calculated: !1
  });
  function ff(e) {
    var t = e.primaryColor, n = e.secondaryColor;
    gt.primaryColor = t, gt.secondaryColor = n || li(t), gt.calculated = !!n;
  }
  function df() {
    return Wt({}, gt);
  }
  var Ce = function(t, n) {
    var r = Wt({}, t, n.attrs), o = r.icon, a = r.primaryColor, i = r.secondaryColor, l = cf(r, lf), c = gt;
    if (a && (c = {
      primaryColor: a,
      secondaryColor: i || li(a)
    }), vo(o), !vo(o))
      return null;
    var s = o;
    return s && typeof s.icon == "function" && (s = Wt({}, s, {
      icon: s.icon(c.primaryColor, c.secondaryColor)
    })), Kn(s.icon, "svg-".concat(s.name), Wt({}, l, {
      "data-icon": s.name,
      width: "1em",
      height: "1em",
      fill: "currentColor",
      "aria-hidden": "true"
    }));
  };
  Ce.props = {
    icon: Object,
    primaryColor: String,
    secondaryColor: String,
    focusable: String
  };
  Ce.inheritAttrs = !1;
  Ce.displayName = "IconBase";
  Ce.getTwoToneColors = df;
  Ce.setTwoToneColors = ff;
  function pf(e, t) {
    return vf(e) || hf(e, t) || mf(e, t) || gf();
  }
  function gf() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function mf(e, t) {
    if (e) {
      if (typeof e == "string") return yo(e, t);
      var n = Object.prototype.toString.call(e).slice(8, -1);
      if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return yo(e, t);
    }
  }
  function yo(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++)
      r[n] = e[n];
    return r;
  }
  function hf(e, t) {
    var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
    if (n != null) {
      var r = [], o = !0, a = !1, i, l;
      try {
        for (n = n.call(e); !(o = (i = n.next()).done) && (r.push(i.value), !(t && r.length === t)); o = !0)
          ;
      } catch (c) {
        a = !0, l = c;
      } finally {
        try {
          !o && n.return != null && n.return();
        } finally {
          if (a) throw l;
        }
      }
      return r;
    }
  }
  function vf(e) {
    if (Array.isArray(e)) return e;
  }
  function ui(e) {
    var t = ci(e), n = pf(t, 2), r = n[0], o = n[1];
    return Ce.setTwoToneColors({
      primaryColor: r,
      secondaryColor: o
    });
  }
  function yf() {
    var e = Ce.getTwoToneColors();
    return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
  }
  var bf = M({
    name: "InsertStyles",
    setup: function() {
      return af(), function() {
        return null;
      };
    }
  }), Cf = ["class", "icon", "spin", "rotate", "tabindex", "twoToneColor", "onClick"];
  function xf(e, t) {
    return Tf(e) || wf(e, t) || $f(e, t) || Sf();
  }
  function Sf() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function $f(e, t) {
    if (e) {
      if (typeof e == "string") return bo(e, t);
      var n = Object.prototype.toString.call(e).slice(8, -1);
      if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return bo(e, t);
    }
  }
  function bo(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++)
      r[n] = e[n];
    return r;
  }
  function wf(e, t) {
    var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
    if (n != null) {
      var r = [], o = !0, a = !1, i, l;
      try {
        for (n = n.call(e); !(o = (i = n.next()).done) && (r.push(i.value), !(t && r.length === t)); o = !0)
          ;
      } catch (c) {
        a = !0, l = c;
      } finally {
        try {
          !o && n.return != null && n.return();
        } finally {
          if (a) throw l;
        }
      }
      return r;
    }
  }
  function Tf(e) {
    if (Array.isArray(e)) return e;
  }
  function Co(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
      typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
        return Object.getOwnPropertyDescriptor(n, o).enumerable;
      }))), r.forEach(function(o) {
        ut(e, o, n[o]);
      });
    }
    return e;
  }
  function ut(e, t, n) {
    return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
  }
  function Of(e, t) {
    if (e == null) return {};
    var n = Pf(e, t), r, o;
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e);
      for (o = 0; o < a.length; o++)
        r = a[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
    }
    return n;
  }
  function Pf(e, t) {
    if (e == null) return {};
    var n = {}, r = Object.keys(e), o, a;
    for (a = 0; a < r.length; a++)
      o = r[a], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
    return n;
  }
  ui(Oc.primary);
  var X = function(t, n) {
    var r, o = Co({}, t, n.attrs), a = o.class, i = o.icon, l = o.spin, c = o.rotate, s = o.tabindex, f = o.twoToneColor, u = o.onClick, p = Of(o, Cf), v = ri(), b = v.prefixCls, y = v.rootClassName, S = (r = {}, ut(r, y.value, !!y.value), ut(r, b.value, !0), ut(r, "".concat(b.value, "-").concat(i.name), !!i.name), ut(r, "".concat(b.value, "-spin"), !!l || i.name === "loading"), r), C = s;
    C === void 0 && u && (C = -1);
    var $ = c ? {
      msTransform: "rotate(".concat(c, "deg)"),
      transform: "rotate(".concat(c, "deg)")
    } : void 0, P = ci(f), w = xf(P, 2), T = w[0], E = w[1];
    return h("span", Co({
      role: "img",
      "aria-label": i.name
    }, p, {
      onClick: u,
      class: [S, a],
      tabindex: C
    }), [h(Ce, {
      icon: i,
      primaryColor: T,
      secondaryColor: E,
      style: $
    }, null), h(bf, null, null)]);
  };
  X.props = {
    spin: Boolean,
    rotate: Number,
    icon: Object,
    twoToneColor: [String, Array]
  };
  X.displayName = "AntdIcon";
  X.inheritAttrs = !1;
  X.getTwoToneColor = yf;
  X.setTwoToneColor = ui;
  var If = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" } }] }, name: "loading", theme: "outlined" };
  function xo(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
      typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
        return Object.getOwnPropertyDescriptor(n, o).enumerable;
      }))), r.forEach(function(o) {
        Ef(e, o, n[o]);
      });
    }
    return e;
  }
  function Ef(e, t, n) {
    return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
  }
  var Me = function(t, n) {
    var r = xo({}, t, n.attrs);
    return h(X, xo({}, r, {
      icon: If
    }), null);
  };
  Me.displayName = "LoadingOutlined";
  Me.inheritAttrs = !1;
  var _f = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z" } }] }, name: "close", theme: "outlined" };
  function So(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
      typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
        return Object.getOwnPropertyDescriptor(n, o).enumerable;
      }))), r.forEach(function(o) {
        Af(e, o, n[o]);
      });
    }
    return e;
  }
  function Af(e, t, n) {
    return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
  }
  var Pt = function(t, n) {
    var r = So({}, t, n.attrs);
    return h(X, So({}, r, {
      icon: _f
    }), null);
  };
  Pt.displayName = "CloseOutlined";
  Pt.inheritAttrs = !1;
  var Mf = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z" } }] }, name: "close-circle", theme: "filled" };
  function $o(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
      typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
        return Object.getOwnPropertyDescriptor(n, o).enumerable;
      }))), r.forEach(function(o) {
        jf(e, o, n[o]);
      });
    }
    return e;
  }
  function jf(e, t, n) {
    return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
  }
  var rt = function(t, n) {
    var r = $o({}, t, n.attrs);
    return h(X, $o({}, r, {
      icon: Mf
    }), null);
  };
  rt.displayName = "CloseCircleFilled";
  rt.inheritAttrs = !1;
  function fi(e) {
    const t = Symbol("contextKey");
    return {
      useProvide: (o, a) => {
        const i = ye({});
        return pe(t, i), Je(() => {
          d(i, o, a || {});
        }), i;
      },
      useInject: () => le(t, e) || {}
    };
  }
  const Hf = (e) => {
    const {
      componentCls: t
    } = e;
    return {
      [t]: {
        display: "inline-flex",
        "&-block": {
          display: "flex",
          width: "100%"
        },
        "&-vertical": {
          flexDirection: "column"
        }
      }
    };
  }, Rf = (e) => {
    const {
      componentCls: t
    } = e;
    return {
      [t]: {
        display: "inline-flex",
        "&-rtl": {
          direction: "rtl"
        },
        "&-vertical": {
          flexDirection: "column"
        },
        "&-align": {
          flexDirection: "column",
          "&-center": {
            alignItems: "center"
          },
          "&-start": {
            alignItems: "flex-start"
          },
          "&-end": {
            alignItems: "flex-end"
          },
          "&-baseline": {
            alignItems: "baseline"
          }
        },
        [`${t}-item`]: {
          "&:empty": {
            display: "none"
          }
        }
      }
    };
  }, Nf = nt("Space", (e) => [Rf(e), Hf(e)]);
  var Bf = "[object Map]", zf = "[object Set]", kf = Object.prototype, Lf = kf.hasOwnProperty;
  function di(e) {
    if (e == null)
      return !0;
    if (zu(e) && (Ks(e) || typeof e == "string" || typeof e.splice == "function" || nu(e) || Au(e) || Js(e)))
      return !e.length;
    var t = $e(e);
    if (t == Bf || t == zf)
      return !e.size;
    if (ei(e))
      return !Bu(e).length;
    for (var n in e)
      if (Lf.call(e, n))
        return !1;
    return !0;
  }
  const Ff = () => ({
    compactSize: String,
    compactDirection: qe.oneOf(Vt("horizontal", "vertical")).def("horizontal"),
    isFirstItem: ft(),
    isLastItem: ft()
  }), sn = fi(null), Df = (e, t) => {
    const n = sn.useInject(), r = x(() => {
      if (!n || di(n)) return "";
      const {
        compactDirection: o,
        isFirstItem: a,
        isLastItem: i
      } = n, l = o === "vertical" ? "-vertical-" : "-";
      return B({
        [`${e.value}-compact${l}item`]: !0,
        [`${e.value}-compact${l}first-item`]: a,
        [`${e.value}-compact${l}last-item`]: i,
        [`${e.value}-compact${l}item-rtl`]: t.value === "rtl"
      });
    });
    return {
      compactSize: x(() => n == null ? void 0 : n.compactSize),
      compactDirection: x(() => n == null ? void 0 : n.compactDirection),
      compactItemClassnames: r
    };
  };
  M({
    name: "NoCompactStyle",
    setup(e, t) {
      let {
        slots: n
      } = t;
      return sn.useProvide(null), () => {
        var r;
        return (r = n.default) === null || r === void 0 ? void 0 : r.call(n);
      };
    }
  });
  const Wf = () => ({
    prefixCls: String,
    size: {
      type: String
    },
    direction: qe.oneOf(Vt("horizontal", "vertical")).def("horizontal"),
    align: qe.oneOf(Vt("start", "end", "center", "baseline")),
    block: {
      type: Boolean,
      default: void 0
    }
  }), Gf = M({
    name: "CompactItem",
    props: Ff(),
    setup(e, t) {
      let {
        slots: n
      } = t;
      return sn.useProvide(e), () => {
        var r;
        return (r = n.default) === null || r === void 0 ? void 0 : r.call(n);
      };
    }
  });
  M({
    name: "ASpaceCompact",
    inheritAttrs: !1,
    props: Wf(),
    setup(e, t) {
      let {
        attrs: n,
        slots: r
      } = t;
      const {
        prefixCls: o,
        direction: a
      } = ge("space-compact", e), i = sn.useInject(), [l, c] = Nf(o), s = x(() => B(o.value, c.value, {
        [`${o.value}-rtl`]: a.value === "rtl",
        [`${o.value}-block`]: e.block,
        [`${o.value}-vertical`]: e.direction === "vertical"
      }));
      return () => {
        var f;
        const u = yt(((f = r.default) === null || f === void 0 ? void 0 : f.call(r)) || []);
        return u.length === 0 ? null : l(h("div", j(j({}, n), {}, {
          class: [s.value, n.class]
        }), [u.map((p, v) => {
          var b;
          const y = p && p.key || `${o.value}-item-${v}`, S = !i || di(i);
          return h(Gf, {
            key: y,
            compactSize: (b = e.size) !== null && b !== void 0 ? b : "middle",
            compactDirection: e.direction,
            isFirstItem: v === 0 && (S || (i == null ? void 0 : i.isFirstItem)),
            isLastItem: v === u.length - 1 && (S || (i == null ? void 0 : i.isLastItem))
          }, {
            default: () => [p]
          });
        })]));
      };
    }
  });
  function Xf(e, t, n) {
    const {
      focusElCls: r,
      focus: o,
      borderElCls: a
    } = n, i = a ? "> *" : "", l = ["hover", o ? "focus" : null, "active"].filter(Boolean).map((c) => `&:${c} ${i}`).join(",");
    return {
      [`&-item:not(${t}-last-item)`]: {
        marginInlineEnd: -e.lineWidth
      },
      "&-item": d(d({
        [l]: {
          zIndex: 2
        }
      }, r ? {
        [`&${r}`]: {
          zIndex: 2
        }
      } : {}), {
        [`&[disabled] ${i}`]: {
          zIndex: 0
        }
      })
    };
  }
  function Vf(e, t, n) {
    const {
      borderElCls: r
    } = n, o = r ? `> ${r}` : "";
    return {
      [`&-item:not(${t}-first-item):not(${t}-last-item) ${o}`]: {
        borderRadius: 0
      },
      [`&-item:not(${t}-last-item)${t}-first-item`]: {
        [`& ${o}, &${e}-sm ${o}, &${e}-lg ${o}`]: {
          borderStartEndRadius: 0,
          borderEndEndRadius: 0
        }
      },
      [`&-item:not(${t}-first-item)${t}-last-item`]: {
        [`& ${o}, &${e}-sm ${o}, &${e}-lg ${o}`]: {
          borderStartStartRadius: 0,
          borderEndStartRadius: 0
        }
      }
    };
  }
  function Uf(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      focus: !0
    };
    const {
      componentCls: n
    } = e, r = `${n}-compact`;
    return {
      [r]: d(d({}, Xf(e, r, t)), Vf(n, r, t))
    };
  }
  var Kf = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0051.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z" } }, { tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }] }, name: "check-circle", theme: "outlined" };
  function wo(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
      typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
        return Object.getOwnPropertyDescriptor(n, o).enumerable;
      }))), r.forEach(function(o) {
        qf(e, o, n[o]);
      });
    }
    return e;
  }
  function qf(e, t, n) {
    return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
  }
  var hr = function(t, n) {
    var r = wo({}, t, n.attrs);
    return h(X, wo({}, r, {
      icon: Kf
    }), null);
  };
  hr.displayName = "CheckCircleOutlined";
  hr.inheritAttrs = !1;
  var Yf = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }, { tag: "path", attrs: { d: "M464 688a48 48 0 1096 0 48 48 0 10-96 0zm24-112h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z" } }] }, name: "exclamation-circle", theme: "outlined" };
  function To(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
      typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
        return Object.getOwnPropertyDescriptor(n, o).enumerable;
      }))), r.forEach(function(o) {
        Qf(e, o, n[o]);
      });
    }
    return e;
  }
  function Qf(e, t, n) {
    return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
  }
  var vr = function(t, n) {
    var r = To({}, t, n.attrs);
    return h(X, To({}, r, {
      icon: Yf
    }), null);
  };
  vr.displayName = "ExclamationCircleOutlined";
  vr.inheritAttrs = !1;
  var Jf = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }, { tag: "path", attrs: { d: "M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z" } }] }, name: "info-circle", theme: "outlined" };
  function Oo(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
      typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
        return Object.getOwnPropertyDescriptor(n, o).enumerable;
      }))), r.forEach(function(o) {
        Zf(e, o, n[o]);
      });
    }
    return e;
  }
  function Zf(e, t, n) {
    return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
  }
  var yr = function(t, n) {
    var r = Oo({}, t, n.attrs);
    return h(X, Oo({}, r, {
      icon: Jf
    }), null);
  };
  yr.displayName = "InfoCircleOutlined";
  yr.inheritAttrs = !1;
  var ed = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm0 76c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm128.01 198.83c.03 0 .05.01.09.06l45.02 45.01a.2.2 0 01.05.09.12.12 0 010 .07c0 .02-.01.04-.05.08L557.25 512l127.87 127.86a.27.27 0 01.05.06v.02a.12.12 0 010 .07c0 .03-.01.05-.05.09l-45.02 45.02a.2.2 0 01-.09.05.12.12 0 01-.07 0c-.02 0-.04-.01-.08-.05L512 557.25 384.14 685.12c-.04.04-.06.05-.08.05a.12.12 0 01-.07 0c-.03 0-.05-.01-.09-.05l-45.02-45.02a.2.2 0 01-.05-.09.12.12 0 010-.07c0-.02.01-.04.06-.08L466.75 512 338.88 384.14a.27.27 0 01-.05-.06l-.01-.02a.12.12 0 010-.07c0-.03.01-.05.05-.09l45.02-45.02a.2.2 0 01.09-.05.12.12 0 01.07 0c.02 0 .04.01.08.06L512 466.75l127.86-127.86c.04-.05.06-.06.08-.06a.12.12 0 01.07 0z" } }] }, name: "close-circle", theme: "outlined" };
  function Po(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
      typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
        return Object.getOwnPropertyDescriptor(n, o).enumerable;
      }))), r.forEach(function(o) {
        td(e, o, n[o]);
      });
    }
    return e;
  }
  function td(e, t, n) {
    return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
  }
  var br = function(t, n) {
    var r = Po({}, t, n.attrs);
    return h(X, Po({}, r, {
      icon: ed
    }), null);
  };
  br.displayName = "CloseCircleOutlined";
  br.inheritAttrs = !1;
  var nd = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" } }] }, name: "check-circle", theme: "filled" };
  function Io(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
      typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
        return Object.getOwnPropertyDescriptor(n, o).enumerable;
      }))), r.forEach(function(o) {
        rd(e, o, n[o]);
      });
    }
    return e;
  }
  function rd(e, t, n) {
    return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
  }
  var ot = function(t, n) {
    var r = Io({}, t, n.attrs);
    return h(X, Io({}, r, {
      icon: nd
    }), null);
  };
  ot.displayName = "CheckCircleFilled";
  ot.inheritAttrs = !1;
  var od = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "exclamation-circle", theme: "filled" };
  function Eo(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
      typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
        return Object.getOwnPropertyDescriptor(n, o).enumerable;
      }))), r.forEach(function(o) {
        ad(e, o, n[o]);
      });
    }
    return e;
  }
  function ad(e, t, n) {
    return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
  }
  var at = function(t, n) {
    var r = Eo({}, t, n.attrs);
    return h(X, Eo({}, r, {
      icon: od
    }), null);
  };
  at.displayName = "ExclamationCircleFilled";
  at.inheritAttrs = !1;
  var id = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "info-circle", theme: "filled" };
  function _o(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
      typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
        return Object.getOwnPropertyDescriptor(n, o).enumerable;
      }))), r.forEach(function(o) {
        ld(e, o, n[o]);
      });
    }
    return e;
  }
  function ld(e, t, n) {
    return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
  }
  var it = function(t, n) {
    var r = _o({}, t, n.attrs);
    return h(X, _o({}, r, {
      icon: id
    }), null);
  };
  it.displayName = "InfoCircleFilled";
  it.inheritAttrs = !1;
  const cd = (e) => {
    const {
      componentCls: t,
      colorPrimary: n
    } = e;
    return {
      [t]: {
        position: "absolute",
        background: "transparent",
        pointerEvents: "none",
        boxSizing: "border-box",
        color: `var(--wave-color, ${n})`,
        boxShadow: "0 0 0 0 currentcolor",
        opacity: 0.2,
        // =================== Motion ===================
        "&.wave-motion-appear": {
          transition: [`box-shadow 0.4s ${e.motionEaseOutCirc}`, `opacity 2s ${e.motionEaseOutCirc}`].join(","),
          "&-active": {
            boxShadow: "0 0 0 6px currentcolor",
            opacity: 0
          }
        }
      }
    };
  }, sd = nt("Wave", (e) => [cd(e)]);
  function ud(e) {
    const t = (e || "").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);
    return t && t[1] && t[2] && t[3] ? !(t[1] === t[2] && t[2] === t[3]) : !0;
  }
  function Tn(e) {
    return e && e !== "#fff" && e !== "#ffffff" && e !== "rgb(255, 255, 255)" && e !== "rgba(255, 255, 255, 1)" && ud(e) && !/rgba\((?:\d*, ){3}0\)/.test(e) && // any transparent rgba color
    e !== "transparent";
  }
  function fd(e) {
    const {
      borderTopColor: t,
      borderColor: n,
      backgroundColor: r
    } = getComputedStyle(e);
    return Tn(t) ? t : Tn(n) ? n : Tn(r) ? r : null;
  }
  function On(e) {
    return Number.isNaN(e) ? 0 : e;
  }
  const dd = M({
    props: {
      target: K(),
      className: String
    },
    setup(e) {
      const t = D(null), [n, r] = Se(null), [o, a] = Se([]), [i, l] = Se(0), [c, s] = Se(0), [f, u] = Se(0), [p, v] = Se(0), [b, y] = Se(!1);
      function S() {
        const {
          target: g
        } = e, O = getComputedStyle(g);
        r(fd(g));
        const _ = O.position === "static", {
          borderLeftWidth: z,
          borderTopWidth: V
        } = O;
        l(_ ? g.offsetLeft : On(-parseFloat(z))), s(_ ? g.offsetTop : On(-parseFloat(V))), u(g.offsetWidth), v(g.offsetHeight);
        const {
          borderTopLeftRadius: U,
          borderTopRightRadius: Ne,
          borderBottomLeftRadius: me,
          borderBottomRightRadius: m
        } = O;
        a([U, Ne, m, me].map((I) => On(parseFloat(I))));
      }
      let C, $, P;
      const w = () => {
        clearTimeout(P), _n.cancel($), C == null || C.disconnect();
      }, T = () => {
        var g;
        const O = (g = t.value) === null || g === void 0 ? void 0 : g.parentElement;
        O && (ht(null, O), O.parentElement && O.parentElement.removeChild(O));
      };
      Ze(() => {
        w(), P = setTimeout(() => {
          T();
        }, 5e3);
        const {
          target: g
        } = e;
        g && ($ = _n(() => {
          S(), y(!0);
        }), typeof ResizeObserver < "u" && (C = new ResizeObserver(S), C.observe(g)));
      }), $t(() => {
        w();
      });
      const E = (g) => {
        g.propertyName === "opacity" && T();
      };
      return () => {
        if (!b.value)
          return null;
        const g = {
          left: `${i.value}px`,
          top: `${c.value}px`,
          width: `${f.value}px`,
          height: `${p.value}px`,
          borderRadius: o.value.map((O) => `${O}px`).join(" ")
        };
        return n && (g["--wave-color"] = n.value), h(Uo, {
          appear: !0,
          name: "wave-motion",
          appearFromClass: "wave-motion-appear",
          appearActiveClass: "wave-motion-appear",
          appearToClass: "wave-motion-appear wave-motion-appear-active"
        }, {
          default: () => [h("div", {
            ref: t,
            class: e.className,
            style: g,
            onTransitionend: E
          }, null)]
        });
      };
    }
  });
  function pd(e, t) {
    const n = document.createElement("div");
    return n.style.position = "absolute", n.style.left = "0px", n.style.top = "0px", e == null || e.insertBefore(n, e == null ? void 0 : e.firstChild), ht(h(dd, {
      target: e,
      className: t
    }, null), n), () => {
      ht(null, n), n.parentElement && n.parentElement.removeChild(n);
    };
  }
  function gd(e, t) {
    const n = en();
    let r;
    function o() {
      var a;
      const i = En(n);
      r == null || r(), !(!((a = t == null ? void 0 : t.value) === null || a === void 0) && a.disabled || !i) && (r = pd(i, e.value));
    }
    return $t(() => {
      r == null || r();
    }), o;
  }
  const md = M({
    compatConfig: {
      MODE: 3
    },
    name: "Wave",
    props: {
      disabled: Boolean
    },
    setup(e, t) {
      let {
        slots: n
      } = t;
      const r = en(), {
        prefixCls: o,
        wave: a
      } = ge("wave", e), [, i] = sd(o), l = gd(x(() => B(o.value, i.value)), a);
      let c;
      const s = () => {
        En(r).removeEventListener("click", c, !0);
      };
      return Ze(() => {
        ne(() => e.disabled, () => {
          s(), tn(() => {
            const f = En(r);
            f == null || f.removeEventListener("click", c, !0), !(!f || f.nodeType !== 1 || e.disabled) && (c = (u) => {
              u.target.tagName === "INPUT" || !Ss(u.target) || // No need wave
              !f.getAttribute || f.getAttribute("disabled") || f.disabled || f.className.includes("disabled") || f.className.includes("-leave") || l();
            }, f.addEventListener("click", c, !0));
          });
        }, {
          immediate: !0,
          flush: "post"
        });
      }), $t(() => {
        s();
      }), () => {
        var f;
        return (f = n.default) === null || f === void 0 ? void 0 : f.call(n)[0];
      };
    }
  }), hd = () => ({
    prefixCls: String,
    type: String,
    htmlType: {
      type: String,
      default: "button"
    },
    shape: {
      type: String
    },
    size: {
      type: String
    },
    loading: {
      type: [Boolean, Object],
      default: () => !1
    },
    disabled: {
      type: Boolean,
      default: void 0
    },
    ghost: {
      type: Boolean,
      default: void 0
    },
    block: {
      type: Boolean,
      default: void 0
    },
    danger: {
      type: Boolean,
      default: void 0
    },
    icon: qe.any,
    href: String,
    target: String,
    title: String,
    onClick: _r(),
    onMousedown: _r()
  }), Ao = (e) => {
    e && (e.style.width = "0px", e.style.opacity = "0", e.style.transform = "scale(0)");
  }, Mo = (e) => {
    tn(() => {
      e && (e.style.width = `${e.scrollWidth}px`, e.style.opacity = "1", e.style.transform = "scale(1)");
    });
  }, jo = (e) => {
    e && e.style && (e.style.width = null, e.style.opacity = null, e.style.transform = null);
  }, vd = M({
    compatConfig: {
      MODE: 3
    },
    name: "LoadingIcon",
    props: {
      prefixCls: String,
      loading: [Boolean, Object],
      existIcon: Boolean
    },
    setup(e) {
      return () => {
        const {
          existIcon: t,
          prefixCls: n,
          loading: r
        } = e;
        if (t)
          return h("span", {
            class: `${n}-loading-icon`
          }, [h(Me, null, null)]);
        const o = !!r;
        return h(Uo, {
          name: `${n}-loading-icon-motion`,
          onBeforeEnter: Ao,
          onEnter: Mo,
          onAfterEnter: jo,
          onBeforeLeave: Mo,
          onLeave: (a) => {
            setTimeout(() => {
              Ao(a);
            });
          },
          onAfterLeave: jo
        }, {
          default: () => [o ? h("span", {
            class: `${n}-loading-icon`
          }, [h(Me, null, null)]) : null]
        });
      };
    }
  }), Ho = (e, t) => ({
    // Border
    [`> span, > ${e}`]: {
      "&:not(:last-child)": {
        [`&, & > ${e}`]: {
          "&:not(:disabled)": {
            borderInlineEndColor: t
          }
        }
      },
      "&:not(:first-child)": {
        [`&, & > ${e}`]: {
          "&:not(:disabled)": {
            borderInlineStartColor: t
          }
        }
      }
    }
  }), yd = (e) => {
    const {
      componentCls: t,
      fontSize: n,
      lineWidth: r,
      colorPrimaryHover: o,
      colorErrorHover: a
    } = e;
    return {
      [`${t}-group`]: [
        {
          position: "relative",
          display: "inline-flex",
          // Border
          [`> span, > ${t}`]: {
            "&:not(:last-child)": {
              [`&, & > ${t}`]: {
                borderStartEndRadius: 0,
                borderEndEndRadius: 0
              }
            },
            "&:not(:first-child)": {
              marginInlineStart: -r,
              [`&, & > ${t}`]: {
                borderStartStartRadius: 0,
                borderEndStartRadius: 0
              }
            }
          },
          [t]: {
            position: "relative",
            zIndex: 1,
            "&:hover,\n          &:focus,\n          &:active": {
              zIndex: 2
            },
            "&[disabled]": {
              zIndex: 0
            }
          },
          [`${t}-icon-only`]: {
            fontSize: n
          }
        },
        // Border Color
        Ho(`${t}-primary`, o),
        Ho(`${t}-danger`, a)
      ]
    };
  };
  function bd(e, t) {
    return {
      // border collapse
      [`&-item:not(${t}-last-item)`]: {
        marginBottom: -e.lineWidth
      },
      "&-item": {
        "&:hover,&:focus,&:active": {
          zIndex: 2
        },
        "&[disabled]": {
          zIndex: 0
        }
      }
    };
  }
  function Cd(e, t) {
    return {
      [`&-item:not(${t}-first-item):not(${t}-last-item)`]: {
        borderRadius: 0
      },
      [`&-item${t}-first-item:not(${t}-last-item)`]: {
        [`&, &${e}-sm, &${e}-lg`]: {
          borderEndEndRadius: 0,
          borderEndStartRadius: 0
        }
      },
      [`&-item${t}-last-item:not(${t}-first-item)`]: {
        [`&, &${e}-sm, &${e}-lg`]: {
          borderStartStartRadius: 0,
          borderStartEndRadius: 0
        }
      }
    };
  }
  function xd(e) {
    const t = `${e.componentCls}-compact-vertical`;
    return {
      [t]: d(d({}, bd(e, t)), Cd(e.componentCls, t))
    };
  }
  const Sd = (e) => {
    const {
      componentCls: t,
      iconCls: n
    } = e;
    return {
      [t]: {
        outline: "none",
        position: "relative",
        display: "inline-block",
        fontWeight: 400,
        whiteSpace: "nowrap",
        textAlign: "center",
        backgroundImage: "none",
        backgroundColor: "transparent",
        border: `${e.lineWidth}px ${e.lineType} transparent`,
        cursor: "pointer",
        transition: `all ${e.motionDurationMid} ${e.motionEaseInOut}`,
        userSelect: "none",
        touchAction: "manipulation",
        lineHeight: e.lineHeight,
        color: e.colorText,
        "> span": {
          display: "inline-block"
        },
        // Leave a space between icon and text.
        [`> ${n} + span, > span + ${n}`]: {
          marginInlineStart: e.marginXS
        },
        "> a": {
          color: "currentColor"
        },
        "&:not(:disabled)": d({}, Wc(e)),
        // make `btn-icon-only` not too narrow
        [`&-icon-only${t}-compact-item`]: {
          flex: "none"
        },
        // Special styles for Primary Button
        [`&-compact-item${t}-primary`]: {
          [`&:not([disabled]) + ${t}-compact-item${t}-primary:not([disabled])`]: {
            position: "relative",
            "&:before": {
              position: "absolute",
              top: -e.lineWidth,
              insetInlineStart: -e.lineWidth,
              display: "inline-block",
              width: e.lineWidth,
              height: `calc(100% + ${e.lineWidth * 2}px)`,
              backgroundColor: e.colorPrimaryHover,
              content: '""'
            }
          }
        },
        // Special styles for Primary Button
        "&-compact-vertical-item": {
          [`&${t}-primary`]: {
            [`&:not([disabled]) + ${t}-compact-vertical-item${t}-primary:not([disabled])`]: {
              position: "relative",
              "&:before": {
                position: "absolute",
                top: -e.lineWidth,
                insetInlineStart: -e.lineWidth,
                display: "inline-block",
                width: `calc(100% + ${e.lineWidth * 2}px)`,
                height: e.lineWidth,
                backgroundColor: e.colorPrimaryHover,
                content: '""'
              }
            }
          }
        }
      }
    };
  }, de = (e, t) => ({
    "&:not(:disabled)": {
      "&:hover": e,
      "&:active": t
    }
  }), $d = (e) => ({
    minWidth: e.controlHeight,
    paddingInlineStart: 0,
    paddingInlineEnd: 0,
    borderRadius: "50%"
  }), wd = (e) => ({
    borderRadius: e.controlHeight,
    paddingInlineStart: e.controlHeight / 2,
    paddingInlineEnd: e.controlHeight / 2
  }), qn = (e) => ({
    cursor: "not-allowed",
    borderColor: e.colorBorder,
    color: e.colorTextDisabled,
    backgroundColor: e.colorBgContainerDisabled,
    boxShadow: "none"
  }), Qt = (e, t, n, r, o, a, i) => ({
    [`&${e}-background-ghost`]: d(d({
      color: t || void 0,
      backgroundColor: "transparent",
      borderColor: n || void 0,
      boxShadow: "none"
    }, de(d({
      backgroundColor: "transparent"
    }, a), d({
      backgroundColor: "transparent"
    }, i))), {
      "&:disabled": {
        cursor: "not-allowed",
        color: r || void 0,
        borderColor: o || void 0
      }
    })
  }), Cr = (e) => ({
    "&:disabled": d({}, qn(e))
  }), pi = (e) => d({}, Cr(e)), Jt = (e) => ({
    "&:disabled": {
      cursor: "not-allowed",
      color: e.colorTextDisabled
    }
  }), gi = (e) => d(d(d(d(d({}, pi(e)), {
    backgroundColor: e.colorBgContainer,
    borderColor: e.colorBorder,
    boxShadow: `0 ${e.controlOutlineWidth}px 0 ${e.controlTmpOutline}`
  }), de({
    color: e.colorPrimaryHover,
    borderColor: e.colorPrimaryHover
  }, {
    color: e.colorPrimaryActive,
    borderColor: e.colorPrimaryActive
  })), Qt(e.componentCls, e.colorBgContainer, e.colorBgContainer, e.colorTextDisabled, e.colorBorder)), {
    [`&${e.componentCls}-dangerous`]: d(d(d({
      color: e.colorError,
      borderColor: e.colorError
    }, de({
      color: e.colorErrorHover,
      borderColor: e.colorErrorBorderHover
    }, {
      color: e.colorErrorActive,
      borderColor: e.colorErrorActive
    })), Qt(e.componentCls, e.colorError, e.colorError, e.colorTextDisabled, e.colorBorder)), Cr(e))
  }), Td = (e) => d(d(d(d(d({}, pi(e)), {
    color: e.colorTextLightSolid,
    backgroundColor: e.colorPrimary,
    boxShadow: `0 ${e.controlOutlineWidth}px 0 ${e.controlOutline}`
  }), de({
    color: e.colorTextLightSolid,
    backgroundColor: e.colorPrimaryHover
  }, {
    color: e.colorTextLightSolid,
    backgroundColor: e.colorPrimaryActive
  })), Qt(e.componentCls, e.colorPrimary, e.colorPrimary, e.colorTextDisabled, e.colorBorder, {
    color: e.colorPrimaryHover,
    borderColor: e.colorPrimaryHover
  }, {
    color: e.colorPrimaryActive,
    borderColor: e.colorPrimaryActive
  })), {
    [`&${e.componentCls}-dangerous`]: d(d(d({
      backgroundColor: e.colorError,
      boxShadow: `0 ${e.controlOutlineWidth}px 0 ${e.colorErrorOutline}`
    }, de({
      backgroundColor: e.colorErrorHover
    }, {
      backgroundColor: e.colorErrorActive
    })), Qt(e.componentCls, e.colorError, e.colorError, e.colorTextDisabled, e.colorBorder, {
      color: e.colorErrorHover,
      borderColor: e.colorErrorHover
    }, {
      color: e.colorErrorActive,
      borderColor: e.colorErrorActive
    })), Cr(e))
  }), Od = (e) => d(d({}, gi(e)), {
    borderStyle: "dashed"
  }), Pd = (e) => d(d(d({
    color: e.colorLink
  }, de({
    color: e.colorLinkHover
  }, {
    color: e.colorLinkActive
  })), Jt(e)), {
    [`&${e.componentCls}-dangerous`]: d(d({
      color: e.colorError
    }, de({
      color: e.colorErrorHover
    }, {
      color: e.colorErrorActive
    })), Jt(e))
  }), Id = (e) => d(d(d({}, de({
    color: e.colorText,
    backgroundColor: e.colorBgTextHover
  }, {
    color: e.colorText,
    backgroundColor: e.colorBgTextActive
  })), Jt(e)), {
    [`&${e.componentCls}-dangerous`]: d(d({
      color: e.colorError
    }, Jt(e)), de({
      color: e.colorErrorHover,
      backgroundColor: e.colorErrorBg
    }, {
      color: e.colorErrorHover,
      backgroundColor: e.colorErrorBg
    }))
  }), Ed = (e) => d(d({}, qn(e)), {
    [`&${e.componentCls}:hover`]: d({}, qn(e))
  }), _d = (e) => {
    const {
      componentCls: t
    } = e;
    return {
      [`${t}-default`]: gi(e),
      [`${t}-primary`]: Td(e),
      [`${t}-dashed`]: Od(e),
      [`${t}-link`]: Pd(e),
      [`${t}-text`]: Id(e),
      [`${t}-disabled`]: Ed(e)
    };
  }, xr = function(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    const {
      componentCls: n,
      iconCls: r,
      controlHeight: o,
      fontSize: a,
      lineHeight: i,
      lineWidth: l,
      borderRadius: c,
      buttonPaddingHorizontal: s
    } = e, f = Math.max(0, (o - a * i) / 2 - l), u = s - l, p = `${n}-icon-only`;
    return [
      // Size
      {
        [`${n}${t}`]: {
          fontSize: a,
          height: o,
          padding: `${f}px ${u}px`,
          borderRadius: c,
          [`&${p}`]: {
            width: o,
            paddingInlineStart: 0,
            paddingInlineEnd: 0,
            [`&${n}-round`]: {
              width: "auto"
            },
            "> span": {
              transform: "scale(1.143)"
              // 14px -> 16px
            }
          },
          // Loading
          [`&${n}-loading`]: {
            opacity: e.opacityLoading,
            cursor: "default"
          },
          [`${n}-loading-icon`]: {
            transition: `width ${e.motionDurationSlow} ${e.motionEaseInOut}, opacity ${e.motionDurationSlow} ${e.motionEaseInOut}`
          },
          [`&:not(${p}) ${n}-loading-icon > ${r}`]: {
            marginInlineEnd: e.marginXS
          }
        }
      },
      // Shape - patch prefixCls again to override solid border radius style
      {
        [`${n}${n}-circle${t}`]: $d(e)
      },
      {
        [`${n}${n}-round${t}`]: wd(e)
      }
    ];
  }, Ad = (e) => xr(e), Md = (e) => {
    const t = je(e, {
      controlHeight: e.controlHeightSM,
      padding: e.paddingXS,
      buttonPaddingHorizontal: 8,
      borderRadius: e.borderRadiusSM
    });
    return xr(t, `${e.componentCls}-sm`);
  }, jd = (e) => {
    const t = je(e, {
      controlHeight: e.controlHeightLG,
      fontSize: e.fontSizeLG,
      borderRadius: e.borderRadiusLG
    });
    return xr(t, `${e.componentCls}-lg`);
  }, Hd = (e) => {
    const {
      componentCls: t
    } = e;
    return {
      [t]: {
        [`&${t}-block`]: {
          width: "100%"
        }
      }
    };
  }, Rd = nt("Button", (e) => {
    const {
      controlTmpOutline: t,
      paddingContentHorizontal: n
    } = e, r = je(e, {
      colorOutlineDefault: t,
      buttonPaddingHorizontal: n
    });
    return [
      // Shared
      Sd(r),
      // Size
      Md(r),
      Ad(r),
      jd(r),
      // Block
      Hd(r),
      // Group (type, ghost, danger, disabled, loading)
      _d(r),
      // Button Group
      yd(r),
      // Space Compact
      Uf(e, {
        focus: !1
      }),
      xd(e)
    ];
  }), Nd = () => ({
    prefixCls: String,
    size: {
      type: String
    }
  }), mi = fi(), Yn = M({
    compatConfig: {
      MODE: 3
    },
    name: "AButtonGroup",
    props: Nd(),
    setup(e, t) {
      let {
        slots: n
      } = t;
      const {
        prefixCls: r,
        direction: o
      } = ge("btn-group", e), [, , a] = wt();
      mi.useProvide(ye({
        size: x(() => e.size)
      }));
      const i = x(() => {
        const {
          size: l
        } = e;
        let c = "";
        switch (l) {
          case "large":
            c = "lg";
            break;
          case "small":
            c = "sm";
            break;
          case "middle":
          case void 0:
            break;
          default:
            Xa(!l, "Button.Group", "Invalid prop `size`.");
        }
        return {
          [`${r.value}`]: !0,
          [`${r.value}-${c}`]: c,
          [`${r.value}-rtl`]: o.value === "rtl",
          [a.value]: !0
        };
      });
      return () => {
        var l;
        return h("div", {
          class: i.value
        }, [yt((l = n.default) === null || l === void 0 ? void 0 : l.call(n))]);
      };
    }
  }), Ro = /^[\u4e00-\u9fa5]{2}$/, No = Ro.test.bind(Ro);
  function Bt(e) {
    return e === "text" || e === "link";
  }
  const Fe = M({
    compatConfig: {
      MODE: 3
    },
    name: "AButton",
    inheritAttrs: !1,
    __ANT_BUTTON: !0,
    props: al(hd(), {
      type: "default"
    }),
    slots: Object,
    // emits: ['click', 'mousedown'],
    setup(e, t) {
      let {
        slots: n,
        attrs: r,
        emit: o,
        expose: a
      } = t;
      const {
        prefixCls: i,
        autoInsertSpaceInButton: l,
        direction: c,
        size: s
      } = ge("btn", e), [f, u] = Rd(i), p = mi.useInject(), v = ir(), b = x(() => {
        var m;
        return (m = e.disabled) !== null && m !== void 0 ? m : v.value;
      }), y = D(null), S = D(void 0);
      let C = !1;
      const $ = D(!1), P = D(!1), w = x(() => l.value !== !1), {
        compactSize: T,
        compactItemClassnames: E
      } = Df(i, c), g = x(() => typeof e.loading == "object" && e.loading.delay ? e.loading.delay || !0 : !!e.loading);
      ne(g, (m) => {
        clearTimeout(S.value), typeof g.value == "number" ? S.value = setTimeout(() => {
          $.value = m;
        }, g.value) : $.value = m;
      }, {
        immediate: !0
      });
      const O = x(() => {
        const {
          type: m,
          shape: I = "default",
          ghost: A,
          block: N,
          danger: xe
        } = e, J = i.value, It = {
          large: "lg",
          small: "sm",
          middle: void 0
        }, Et = T.value || (p == null ? void 0 : p.size) || s.value, _t = Et && It[Et] || "";
        return [E.value, {
          [u.value]: !0,
          [`${J}`]: !0,
          [`${J}-${I}`]: I !== "default" && I,
          [`${J}-${m}`]: m,
          [`${J}-${_t}`]: _t,
          [`${J}-loading`]: $.value,
          [`${J}-background-ghost`]: A && !Bt(m),
          [`${J}-two-chinese-chars`]: P.value && w.value,
          [`${J}-block`]: N,
          [`${J}-dangerous`]: !!xe,
          [`${J}-rtl`]: c.value === "rtl"
        }];
      }), _ = () => {
        const m = y.value;
        if (!m || l.value === !1)
          return;
        const I = m.textContent;
        C && No(I) ? P.value || (P.value = !0) : P.value && (P.value = !1);
      }, z = (m) => {
        if ($.value || b.value) {
          m.preventDefault();
          return;
        }
        o("click", m);
      }, V = (m) => {
        o("mousedown", m);
      }, U = (m, I) => {
        const A = I ? " " : "";
        if (m.type === Go) {
          let N = m.children.trim();
          return No(N) && (N = N.split("").join(A)), h("span", null, [N]);
        }
        return m;
      };
      return Je(() => {
        Xa(!(e.ghost && Bt(e.type)), "Button", "`link` or `text` button can't be a `ghost` button.");
      }), Ze(_), Xo(_), $t(() => {
        S.value && clearTimeout(S.value);
      }), a({
        focus: () => {
          var m;
          (m = y.value) === null || m === void 0 || m.focus();
        },
        blur: () => {
          var m;
          (m = y.value) === null || m === void 0 || m.blur();
        }
      }), () => {
        var m, I;
        const {
          icon: A = (m = n.icon) === null || m === void 0 ? void 0 : m.call(n)
        } = e, N = yt((I = n.default) === null || I === void 0 ? void 0 : I.call(n));
        C = N.length === 1 && !A && !Bt(e.type);
        const {
          type: xe,
          htmlType: J,
          href: It,
          title: Et,
          target: _t
        } = e, zi = $.value ? "loading" : A, fn = d(d({}, r), {
          title: Et,
          disabled: b.value,
          class: [O.value, r.class, {
            [`${i.value}-icon-only`]: N.length === 0 && !!zi
          }],
          onClick: z,
          onMousedown: V
        });
        b.value || delete fn.disabled;
        const Or = A && !$.value ? A : h(vd, {
          existIcon: !!A,
          prefixCls: i.value,
          loading: !!$.value
        }, null), Pr = N.map((pn) => U(pn, C && w.value));
        if (It !== void 0)
          return f(h("a", j(j({}, fn), {}, {
            href: It,
            target: _t,
            ref: y
          }), [Or, Pr]));
        let dn = h("button", j(j({}, fn), {}, {
          ref: y,
          type: J
        }), [Or, Pr]);
        if (!Bt(xe)) {
          const pn = /* @__PURE__ */ function() {
            return dn;
          }();
          dn = h(md, {
            ref: "wave",
            disabled: !!$.value
          }, {
            default: () => [pn]
          });
        }
        return f(dn);
      };
    }
  });
  Fe.Group = Yn;
  Fe.install = function(e) {
    return e.component(Fe.name, Fe), e.component(Yn.name, Yn), e;
  };
  let Pn = d({}, bt.Modal);
  function Bd(e) {
    e ? Pn = d(d({}, Pn), e) : Pn = d({}, bt.Modal);
  }
  const Qn = "internalMark", Gt = M({
    compatConfig: {
      MODE: 3
    },
    name: "ALocaleProvider",
    props: {
      locale: {
        type: Object
      },
      ANT_MARK__: String
    },
    setup(e, t) {
      let {
        slots: n
      } = t;
      pa(e.ANT_MARK__ === Qn);
      const r = ye({
        antLocale: d(d({}, e.locale), {
          exist: !0
        }),
        ANT_MARK__: Qn
      });
      return pe("localeData", r), ne(() => e.locale, (o) => {
        Bd(o && o.Modal), r.antLocale = d(d({}, o), {
          exist: !0
        });
      }, {
        immediate: !0
      }), () => {
        var o;
        return (o = n.default) === null || o === void 0 ? void 0 : o.call(n);
      };
    }
  });
  Gt.install = function(e) {
    return e.component(Gt.name, Gt), e;
  };
  const zd = nr(Gt), un = M({
    name: "Notice",
    inheritAttrs: !1,
    props: ["prefixCls", "duration", "updateMark", "noticeKey", "closeIcon", "closable", "props", "onClick", "onClose", "holder", "visible"],
    setup(e, t) {
      let {
        attrs: n,
        slots: r
      } = t, o, a = !1;
      const i = x(() => e.duration === void 0 ? 4.5 : e.duration), l = () => {
        i.value && !a && (o = setTimeout(() => {
          s();
        }, i.value * 1e3));
      }, c = () => {
        o && (clearTimeout(o), o = null);
      }, s = (u) => {
        u && u.stopPropagation(), c();
        const {
          onClose: p,
          noticeKey: v
        } = e;
        p && p(v);
      }, f = () => {
        c(), l();
      };
      return Ze(() => {
        l();
      }), Gi(() => {
        a = !0, c();
      }), ne([i, () => e.updateMark, () => e.visible], (u, p) => {
        let [v, b, y] = u, [S, C, $] = p;
        (v !== S || b !== C || y !== $ && $) && f();
      }, {
        flush: "post"
      }), () => {
        var u, p;
        const {
          prefixCls: v,
          closable: b,
          closeIcon: y = (u = r.closeIcon) === null || u === void 0 ? void 0 : u.call(r),
          onClick: S,
          holder: C
        } = e, {
          class: $,
          style: P
        } = n, w = `${v}-notice`, T = Object.keys(n).reduce((g, O) => ((O.startsWith("data-") || O.startsWith("aria-") || O === "role") && (g[O] = n[O]), g), {}), E = h("div", j({
          class: B(w, $, {
            [`${w}-closable`]: b
          }),
          style: P,
          onMouseenter: c,
          onMouseleave: l,
          onClick: S
        }, T), [h("div", {
          class: `${w}-content`
        }, [(p = r.default) === null || p === void 0 ? void 0 : p.call(r)]), b ? h("a", {
          tabindex: 0,
          onClick: s,
          class: `${w}-close`
        }, [y || h("span", {
          class: `${w}-close-x`
        }, null)]) : null]);
        return C ? h(Vo, {
          to: C
        }, {
          default: () => E
        }) : E;
      };
    }
  });
  var kd = function(e, t) {
    var n = {};
    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
    return n;
  };
  let Bo = 0;
  const Ld = Date.now();
  function zo() {
    const e = Bo;
    return Bo += 1, `rcNotification_${Ld}_${e}`;
  }
  const Zt = M({
    name: "Notification",
    inheritAttrs: !1,
    props: ["prefixCls", "transitionName", "animation", "maxCount", "closeIcon", "hashId"],
    setup(e, t) {
      let {
        attrs: n,
        expose: r,
        slots: o
      } = t;
      const a = /* @__PURE__ */ new Map(), i = ae([]), l = x(() => {
        const {
          prefixCls: f,
          animation: u = "fade"
        } = e;
        let p = e.transitionName;
        return !p && u && (p = `${f}-${u}`), ti(p);
      }), c = (f, u) => {
        const p = f.key || zo(), v = d(d({}, f), {
          key: p
        }), {
          maxCount: b
        } = e, y = i.value.map((C) => C.notice.key).indexOf(p), S = i.value.concat();
        y !== -1 ? S.splice(y, 1, {
          notice: v,
          holderCallback: u
        }) : (b && i.value.length >= b && (v.key = S[0].notice.key, v.updateMark = zo(), v.userPassKey = p, S.shift()), S.push({
          notice: v,
          holderCallback: u
        })), i.value = S;
      }, s = (f) => {
        i.value = Xi(i.value).filter((u) => {
          let {
            notice: {
              key: p,
              userPassKey: v
            }
          } = u;
          return (v || p) !== f;
        });
      };
      return r({
        add: c,
        remove: s,
        notices: i
      }), () => {
        var f;
        const {
          prefixCls: u,
          closeIcon: p = (f = o.closeIcon) === null || f === void 0 ? void 0 : f.call(o, {
            prefixCls: u
          })
        } = e, v = i.value.map((y, S) => {
          let {
            notice: C,
            holderCallback: $
          } = y;
          const P = S === i.value.length - 1 ? C.updateMark : void 0, {
            key: w,
            userPassKey: T
          } = C, {
            content: E
          } = C, g = d(d(d({
            prefixCls: u,
            closeIcon: typeof p == "function" ? p({
              prefixCls: u
            }) : p
          }, C), C.props), {
            key: w,
            noticeKey: T || w,
            updateMark: P,
            onClose: (O) => {
              var _;
              s(O), (_ = C.onClose) === null || _ === void 0 || _.call(C);
            },
            onClick: C.onClick
          });
          return $ ? h("div", {
            key: w,
            class: `${u}-hook-holder`,
            ref: (O) => {
              typeof w > "u" || (O ? (a.set(w, O), $(O, g)) : a.delete(w));
            }
          }, null) : h(un, j(j({}, g), {}, {
            class: B(g.class, e.hashId)
          }), {
            default: () => [typeof E == "function" ? E({
              prefixCls: u
            }) : E]
          });
        }), b = {
          [u]: 1,
          [n.class]: !!n.class,
          [e.hashId]: !0
        };
        return h("div", {
          class: b,
          style: n.style || {
            top: "65px",
            left: "50%"
          }
        }, [h(Ko, j({
          tag: "div"
        }, l.value), {
          default: () => [v]
        })]);
      };
    }
  });
  Zt.newInstance = function(t, n) {
    const r = t || {}, {
      name: o = "notification",
      getContainer: a,
      appContext: i,
      prefixCls: l,
      rootPrefixCls: c,
      transitionName: s,
      hasTransitionName: f,
      useStyle: u
    } = r, p = kd(r, ["name", "getContainer", "appContext", "prefixCls", "rootPrefixCls", "transitionName", "hasTransitionName", "useStyle"]), v = document.createElement("div");
    a ? a().appendChild(v) : document.body.appendChild(v);
    const b = M({
      compatConfig: {
        MODE: 3
      },
      name: "NotificationWrapper",
      setup(S, C) {
        let {
          attrs: $
        } = C;
        const P = D(), w = x(() => F.getPrefixCls(o, l)), [, T] = u(w);
        return Ze(() => {
          n({
            notice(E) {
              var g;
              (g = P.value) === null || g === void 0 || g.add(E);
            },
            removeNotice(E) {
              var g;
              (g = P.value) === null || g === void 0 || g.remove(E);
            },
            destroy() {
              ht(null, v), v.parentNode && v.parentNode.removeChild(v);
            },
            component: P
          });
        }), () => {
          const E = F, g = E.getRootPrefixCls(c, w.value), O = f ? s : `${w.value}-${s}`;
          return h(mt, j(j({}, E), {}, {
            prefixCls: g
          }), {
            default: () => [h(Zt, j(j({
              ref: P
            }, $), {}, {
              prefixCls: w.value,
              transitionName: O,
              hashId: T.value
            }), null)]
          });
        };
      }
    }), y = h(b, p);
    y.appContext = i || y.appContext, ht(y, v);
  };
  let ko = 0;
  const Fd = Date.now();
  function Lo() {
    const e = ko;
    return ko += 1, `rcNotification_${Fd}_${e}`;
  }
  const Dd = M({
    name: "HookNotification",
    inheritAttrs: !1,
    props: ["prefixCls", "transitionName", "animation", "maxCount", "closeIcon", "hashId", "remove", "notices", "getStyles", "getClassName", "onAllRemoved", "getContainer"],
    setup(e, t) {
      let {
        attrs: n,
        slots: r
      } = t;
      const o = /* @__PURE__ */ new Map(), a = x(() => e.notices), i = x(() => {
        let f = e.transitionName;
        if (!f && e.animation)
          switch (typeof e.animation) {
            case "string":
              f = e.animation;
              break;
            case "function":
              f = e.animation().name;
              break;
            case "object":
              f = e.animation.name;
              break;
            default:
              f = `${e.prefixCls}-fade`;
              break;
          }
        return ti(f);
      }), l = (f) => e.remove(f), c = ae({});
      ne(a, () => {
        const f = {};
        Object.keys(c.value).forEach((u) => {
          f[u] = [];
        }), e.notices.forEach((u) => {
          const {
            placement: p = "topRight"
          } = u.notice;
          p && (f[p] = f[p] || [], f[p].push(u));
        }), c.value = f;
      });
      const s = x(() => Object.keys(c.value));
      return () => {
        var f;
        const {
          prefixCls: u,
          closeIcon: p = (f = r.closeIcon) === null || f === void 0 ? void 0 : f.call(r, {
            prefixCls: u
          })
        } = e, v = s.value.map((b) => {
          var y, S;
          const C = c.value[b], $ = (y = e.getClassName) === null || y === void 0 ? void 0 : y.call(e, b), P = (S = e.getStyles) === null || S === void 0 ? void 0 : S.call(e, b), w = C.map((g, O) => {
            let {
              notice: _,
              holderCallback: z
            } = g;
            const V = O === a.value.length - 1 ? _.updateMark : void 0, {
              key: U,
              userPassKey: Ne
            } = _, {
              content: me
            } = _, m = d(d(d({
              prefixCls: u,
              closeIcon: typeof p == "function" ? p({
                prefixCls: u
              }) : p
            }, _), _.props), {
              key: U,
              noticeKey: Ne || U,
              updateMark: V,
              onClose: (I) => {
                var A;
                l(I), (A = _.onClose) === null || A === void 0 || A.call(_);
              },
              onClick: _.onClick
            });
            return z ? h("div", {
              key: U,
              class: `${u}-hook-holder`,
              ref: (I) => {
                typeof U > "u" || (I ? (o.set(U, I), z(I, m)) : o.delete(U));
              }
            }, null) : h(un, j(j({}, m), {}, {
              class: B(m.class, e.hashId)
            }), {
              default: () => [typeof me == "function" ? me({
                prefixCls: u
              }) : me]
            });
          }), T = {
            [u]: 1,
            [`${u}-${b}`]: 1,
            [n.class]: !!n.class,
            [e.hashId]: !0,
            [$]: !!$
          };
          function E() {
            var g;
            C.length > 0 || (Reflect.deleteProperty(c.value, b), (g = e.onAllRemoved) === null || g === void 0 || g.call(e));
          }
          return h("div", {
            key: b,
            class: T,
            style: n.style || P || {
              top: "65px",
              left: "50%"
            }
          }, [h(Ko, j(j({
            tag: "div"
          }, i.value), {}, {
            onAfterLeave: E
          }), {
            default: () => [w]
          })]);
        });
        return h(Uu, {
          getContainer: e.getContainer
        }, {
          default: () => [v]
        });
      };
    }
  });
  var Wd = function(e, t) {
    var n = {};
    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
    return n;
  };
  const Gd = () => document.body;
  let Fo = 0;
  function Xd() {
    const e = {};
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return n.forEach((o) => {
      o && Object.keys(o).forEach((a) => {
        const i = o[a];
        i !== void 0 && (e[a] = i);
      });
    }), e;
  }
  function hi() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const {
      getContainer: t = Gd,
      motion: n,
      prefixCls: r,
      maxCount: o,
      getClassName: a,
      getStyles: i,
      onAllRemoved: l
    } = e, c = Wd(e, ["getContainer", "motion", "prefixCls", "maxCount", "getClassName", "getStyles", "onAllRemoved"]), s = D([]), f = D(), u = (C, $) => {
      const P = C.key || Lo(), w = d(d({}, C), {
        key: P
      }), T = s.value.map((g) => g.notice.key).indexOf(P), E = s.value.concat();
      T !== -1 ? E.splice(T, 1, {
        notice: w,
        holderCallback: $
      }) : (o && s.value.length >= o && (w.key = E[0].notice.key, w.updateMark = Lo(), w.userPassKey = P, E.shift()), E.push({
        notice: w,
        holderCallback: $
      })), s.value = E;
    }, p = (C) => {
      s.value = s.value.filter(($) => {
        let {
          notice: {
            key: P,
            userPassKey: w
          }
        } = $;
        return (w || P) !== C;
      });
    }, v = () => {
      s.value = [];
    }, b = () => h(Dd, {
      ref: f,
      prefixCls: r,
      maxCount: o,
      notices: s.value,
      remove: p,
      getClassName: a,
      getStyles: i,
      animation: n,
      hashId: e.hashId,
      onAllRemoved: l,
      getContainer: t
    }, null), y = D([]), S = {
      open: (C) => {
        const $ = Xd(c, C);
        ($.key === null || $.key === void 0) && ($.key = `vc-notification-${Fo}`, Fo += 1), y.value = [...y.value, {
          type: "open",
          config: $
        }];
      },
      close: (C) => {
        y.value = [...y.value, {
          type: "close",
          key: C
        }];
      },
      destroy: () => {
        y.value = [...y.value, {
          type: "destroy"
        }];
      }
    };
    return ne(y, () => {
      y.value.length && (y.value.forEach((C) => {
        switch (C.type) {
          case "open":
            u(C.config);
            break;
          case "close":
            p(C.key);
            break;
          case "destroy":
            v();
            break;
        }
      }), y.value = []);
    }), [S, b];
  }
  const Vd = (e) => {
    const {
      componentCls: t,
      iconCls: n,
      boxShadowSecondary: r,
      colorBgElevated: o,
      colorSuccess: a,
      colorError: i,
      colorWarning: l,
      colorInfo: c,
      fontSizeLG: s,
      motionEaseInOutCirc: f,
      motionDurationSlow: u,
      marginXS: p,
      paddingXS: v,
      borderRadiusLG: b,
      zIndexPopup: y,
      // Custom token
      messageNoticeContentPadding: S
    } = e, C = new Ee("MessageMoveIn", {
      "0%": {
        padding: 0,
        transform: "translateY(-100%)",
        opacity: 0
      },
      "100%": {
        padding: v,
        transform: "translateY(0)",
        opacity: 1
      }
    }), $ = new Ee("MessageMoveOut", {
      "0%": {
        maxHeight: e.height,
        padding: v,
        opacity: 1
      },
      "100%": {
        maxHeight: 0,
        padding: 0,
        opacity: 0
      }
    });
    return [
      // ============================ Holder ============================
      {
        [t]: d(d({}, Ea(e)), {
          position: "fixed",
          top: p,
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
          pointerEvents: "none",
          zIndex: y,
          [`${t}-move-up`]: {
            animationFillMode: "forwards"
          },
          [`
        ${t}-move-up-appear,
        ${t}-move-up-enter
      `]: {
            animationName: C,
            animationDuration: u,
            animationPlayState: "paused",
            animationTimingFunction: f
          },
          [`
        ${t}-move-up-appear${t}-move-up-appear-active,
        ${t}-move-up-enter${t}-move-up-enter-active
      `]: {
            animationPlayState: "running"
          },
          [`${t}-move-up-leave`]: {
            animationName: $,
            animationDuration: u,
            animationPlayState: "paused",
            animationTimingFunction: f
          },
          [`${t}-move-up-leave${t}-move-up-leave-active`]: {
            animationPlayState: "running"
          },
          "&-rtl": {
            direction: "rtl",
            span: {
              direction: "rtl"
            }
          }
        })
      },
      // ============================ Notice ============================
      {
        [`${t}-notice`]: {
          padding: v,
          textAlign: "center",
          [n]: {
            verticalAlign: "text-bottom",
            marginInlineEnd: p,
            fontSize: s
          },
          [`${t}-notice-content`]: {
            display: "inline-block",
            padding: S,
            background: o,
            borderRadius: b,
            boxShadow: r,
            pointerEvents: "all"
          },
          [`${t}-success ${n}`]: {
            color: a
          },
          [`${t}-error ${n}`]: {
            color: i
          },
          [`${t}-warning ${n}`]: {
            color: l
          },
          [`
        ${t}-info ${n},
        ${t}-loading ${n}`]: {
            color: c
          }
        }
      },
      // ============================= Pure =============================
      {
        [`${t}-notice-pure-panel`]: {
          padding: 0,
          textAlign: "start"
        }
      }
    ];
  }, Sr = nt("Message", (e) => {
    const t = je(e, {
      messageNoticeContentPadding: `${(e.controlHeightLG - e.fontSize * e.lineHeight) / 2}px ${e.paddingSM}px`
    });
    return [Vd(t)];
  }, (e) => ({
    height: 150,
    zIndexPopup: e.zIndexPopupBase + 10
  })), Ud = {
    info: h(it, null, null),
    success: h(ot, null, null),
    error: h(rt, null, null),
    warning: h(at, null, null),
    loading: h(Me, null, null)
  }, vi = M({
    name: "PureContent",
    inheritAttrs: !1,
    props: ["prefixCls", "type", "icon"],
    setup(e, t) {
      let {
        slots: n
      } = t;
      return () => {
        var r;
        return h("div", {
          class: B(`${e.prefixCls}-custom-content`, `${e.prefixCls}-${e.type}`)
        }, [e.icon || Ud[e.type], h("span", null, [(r = n.default) === null || r === void 0 ? void 0 : r.call(n)])]);
      };
    }
  });
  M({
    name: "PurePanel",
    inheritAttrs: !1,
    props: ["prefixCls", "class", "type", "icon", "content"],
    setup(e, t) {
      let {
        slots: n,
        attrs: r
      } = t;
      var o;
      const {
        getPrefixCls: a
      } = ar(), i = x(() => e.prefixCls || a("message")), [, l] = Sr(i);
      return h(un, j(j({}, r), {}, {
        prefixCls: i.value,
        class: B(l.value, `${i.value}-notice-pure-panel`),
        noticeKey: "pure",
        duration: null
      }), {
        default: () => [h(vi, {
          prefixCls: i.value,
          type: e.type,
          icon: e.icon
        }, {
          default: () => [(o = n.default) === null || o === void 0 ? void 0 : o.call(n)]
        })]
      });
    }
  });
  var Kd = function(e, t) {
    var n = {};
    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
    return n;
  };
  const qd = 8, Yd = 3, Qd = M({
    name: "Holder",
    inheritAttrs: !1,
    props: ["top", "prefixCls", "getContainer", "maxCount", "duration", "rtl", "transitionName", "onAllRemoved", "animation", "staticGetContainer"],
    setup(e, t) {
      let {
        expose: n
      } = t;
      var r, o;
      const {
        getPrefixCls: a,
        getPopupContainer: i
      } = ge("message", e), l = x(() => a("message", e.prefixCls)), [, c] = Sr(l), s = () => {
        var y;
        const S = (y = e.top) !== null && y !== void 0 ? y : qd;
        return {
          left: "50%",
          transform: "translateX(-50%)",
          top: typeof S == "number" ? `${S}px` : S
        };
      }, f = () => B(c.value, e.rtl ? `${l.value}-rtl` : ""), u = () => {
        var y;
        return xs({
          prefixCls: l.value,
          animation: (y = e.animation) !== null && y !== void 0 ? y : "move-up",
          transitionName: e.transitionName
        });
      }, p = h("span", {
        class: `${l.value}-close-x`
      }, [h(Pt, {
        class: `${l.value}-close-icon`
      }, null)]), [v, b] = hi({
        //@ts-ignore
        getStyles: s,
        prefixCls: l.value,
        getClassName: f,
        motion: u,
        closable: !1,
        closeIcon: p,
        duration: (r = e.duration) !== null && r !== void 0 ? r : Yd,
        getContainer: (o = e.staticGetContainer) !== null && o !== void 0 ? o : i.value,
        maxCount: e.maxCount,
        onAllRemoved: e.onAllRemoved
      });
      return n(d(d({}, v), {
        prefixCls: l,
        hashId: c
      })), b;
    }
  });
  let Do = 0;
  function Jd(e) {
    const t = D(null), n = Symbol("messageHolderKey"), r = (c) => {
      var s;
      (s = t.value) === null || s === void 0 || s.close(c);
    }, o = (c) => {
      if (!t.value) {
        const T = () => {
        };
        return T.then = () => {
        }, T;
      }
      const {
        open: s,
        prefixCls: f,
        hashId: u
      } = t.value, p = `${f}-notice`, {
        content: v,
        icon: b,
        type: y,
        key: S,
        class: C,
        onClose: $
      } = c, P = Kd(c, ["content", "icon", "type", "key", "class", "onClose"]);
      let w = S;
      return w == null && (Do += 1, w = `antd-message-${Do}`), rl((T) => (s(d(d({}, P), {
        key: w,
        content: () => h(vi, {
          prefixCls: f,
          type: y,
          icon: typeof b == "function" ? b() : b
        }, {
          default: () => [typeof v == "function" ? v() : v]
        }),
        placement: "top",
        // @ts-ignore
        class: B(y && `${p}-${y}`, u, C),
        onClose: () => {
          $ == null || $(), T();
        }
      })), () => {
        r(w);
      }));
    }, i = {
      open: o,
      destroy: (c) => {
        var s;
        c !== void 0 ? r(c) : (s = t.value) === null || s === void 0 || s.destroy();
      }
    };
    return ["info", "success", "warning", "error", "loading"].forEach((c) => {
      const s = (f, u, p) => {
        let v;
        f && typeof f == "object" && "content" in f ? v = f : v = {
          content: f
        };
        let b, y;
        typeof u == "function" ? y = u : (b = u, y = p);
        const S = d(d({
          onClose: y,
          duration: b
        }, v), {
          type: c
        });
        return o(S);
      };
      i[c] = s;
    }), [i, () => h(Qd, j(j({
      key: n
    }, e), {}, {
      ref: t
    }), null)];
  }
  function Zd(e) {
    return Jd(e);
  }
  let yi = 3, bi, G, ep = 1, Ci = "", xi = "move-up", Si = !1, $i = () => document.body, wi, Ti = !1;
  function tp() {
    return ep++;
  }
  function np(e) {
    e.top !== void 0 && (bi = e.top, G = null), e.duration !== void 0 && (yi = e.duration), e.prefixCls !== void 0 && (Ci = e.prefixCls), e.getContainer !== void 0 && ($i = e.getContainer, G = null), e.transitionName !== void 0 && (xi = e.transitionName, G = null, Si = !0), e.maxCount !== void 0 && (wi = e.maxCount, G = null), e.rtl !== void 0 && (Ti = e.rtl);
  }
  function rp(e, t) {
    if (G) {
      t(G);
      return;
    }
    Zt.newInstance({
      appContext: e.appContext,
      prefixCls: e.prefixCls || Ci,
      rootPrefixCls: e.rootPrefixCls,
      transitionName: xi,
      hasTransitionName: Si,
      style: {
        top: bi
      },
      getContainer: $i || e.getPopupContainer,
      maxCount: wi,
      name: "message",
      useStyle: Sr
    }, (n) => {
      if (G) {
        t(G);
        return;
      }
      G = n, t(n);
    });
  }
  const Oi = {
    info: it,
    success: ot,
    error: rt,
    warning: at,
    loading: Me
  }, op = Object.keys(Oi);
  function ap(e) {
    const t = e.duration !== void 0 ? e.duration : yi, n = e.key || tp(), r = new Promise((a) => {
      const i = () => (typeof e.onClose == "function" && e.onClose(), a(!0));
      rp(e, (l) => {
        l.notice({
          key: n,
          duration: t,
          style: e.style || {},
          class: e.class,
          content: (c) => {
            let {
              prefixCls: s
            } = c;
            const f = Oi[e.type], u = f ? h(f, null, null) : "", p = B(`${s}-custom-content`, {
              [`${s}-${e.type}`]: e.type,
              [`${s}-rtl`]: Ti === !0
            });
            return h("div", {
              class: p
            }, [typeof e.icon == "function" ? e.icon() : e.icon || u, h("span", null, [typeof e.content == "function" ? e.content() : e.content])]);
          },
          onClose: i,
          onClick: e.onClick
        });
      });
    }), o = () => {
      G && G.removeNotice(n);
    };
    return o.then = (a, i) => r.then(a, i), o.promise = r, o;
  }
  function ip(e) {
    return Object.prototype.toString.call(e) === "[object Object]" && !!e.content;
  }
  const Ye = {
    open: ap,
    config: np,
    destroy(e) {
      if (G)
        if (e) {
          const {
            removeNotice: t
          } = G;
          t(e);
        } else {
          const {
            destroy: t
          } = G;
          t(), G = null;
        }
    }
  };
  function lp(e, t) {
    e[t] = (n, r, o) => ip(n) ? e.open(d(d({}, n), {
      type: t
    })) : (typeof r == "function" && (o = r, r = void 0), e.open({
      content: n,
      duration: r,
      type: t,
      onClose: o
    }));
  }
  op.forEach((e) => lp(Ye, e));
  Ye.warn = Ye.warning;
  Ye.useMessage = Zd;
  const cp = (e) => {
    const {
      componentCls: t,
      width: n,
      notificationMarginEdge: r
    } = e, o = new Ee("antNotificationTopFadeIn", {
      "0%": {
        marginTop: "-100%",
        opacity: 0
      },
      "100%": {
        marginTop: 0,
        opacity: 1
      }
    }), a = new Ee("antNotificationBottomFadeIn", {
      "0%": {
        marginBottom: "-100%",
        opacity: 0
      },
      "100%": {
        marginBottom: 0,
        opacity: 1
      }
    }), i = new Ee("antNotificationLeftFadeIn", {
      "0%": {
        right: {
          _skip_check_: !0,
          value: n
        },
        opacity: 0
      },
      "100%": {
        right: {
          _skip_check_: !0,
          value: 0
        },
        opacity: 1
      }
    });
    return {
      [`&${t}-top, &${t}-bottom`]: {
        marginInline: 0
      },
      [`&${t}-top`]: {
        [`${t}-fade-enter${t}-fade-enter-active, ${t}-fade-appear${t}-fade-appear-active`]: {
          animationName: o
        }
      },
      [`&${t}-bottom`]: {
        [`${t}-fade-enter${t}-fade-enter-active, ${t}-fade-appear${t}-fade-appear-active`]: {
          animationName: a
        }
      },
      [`&${t}-topLeft, &${t}-bottomLeft`]: {
        marginInlineEnd: 0,
        marginInlineStart: r,
        [`${t}-fade-enter${t}-fade-enter-active, ${t}-fade-appear${t}-fade-appear-active`]: {
          animationName: i
        }
      }
    };
  }, sp = (e) => {
    const {
      iconCls: t,
      componentCls: n,
      // .ant-notification
      boxShadowSecondary: r,
      fontSizeLG: o,
      notificationMarginBottom: a,
      borderRadiusLG: i,
      colorSuccess: l,
      colorInfo: c,
      colorWarning: s,
      colorError: f,
      colorTextHeading: u,
      notificationBg: p,
      notificationPadding: v,
      notificationMarginEdge: b,
      motionDurationMid: y,
      motionEaseInOut: S,
      fontSize: C,
      lineHeight: $,
      width: P,
      notificationIconSize: w
    } = e, T = `${n}-notice`, E = new Ee("antNotificationFadeIn", {
      "0%": {
        left: {
          _skip_check_: !0,
          value: P
        },
        opacity: 0
      },
      "100%": {
        left: {
          _skip_check_: !0,
          value: 0
        },
        opacity: 1
      }
    }), g = new Ee("antNotificationFadeOut", {
      "0%": {
        maxHeight: e.animationMaxHeight,
        marginBottom: a,
        opacity: 1
      },
      "100%": {
        maxHeight: 0,
        marginBottom: 0,
        paddingTop: 0,
        paddingBottom: 0,
        opacity: 0
      }
    });
    return [
      // ============================ Holder ============================
      {
        [n]: d(d(d(d({}, Ea(e)), {
          position: "fixed",
          zIndex: e.zIndexPopup,
          marginInlineEnd: b,
          [`${n}-hook-holder`]: {
            position: "relative"
          },
          [`&${n}-top, &${n}-bottom`]: {
            [`${n}-notice`]: {
              marginInline: "auto auto"
            }
          },
          [`&${n}-topLeft, &${n}-bottomLeft`]: {
            [`${n}-notice`]: {
              marginInlineEnd: "auto",
              marginInlineStart: 0
            }
          },
          //  animation
          [`${n}-fade-enter, ${n}-fade-appear`]: {
            animationDuration: e.motionDurationMid,
            animationTimingFunction: S,
            animationFillMode: "both",
            opacity: 0,
            animationPlayState: "paused"
          },
          [`${n}-fade-leave`]: {
            animationTimingFunction: S,
            animationFillMode: "both",
            animationDuration: y,
            animationPlayState: "paused"
          },
          [`${n}-fade-enter${n}-fade-enter-active, ${n}-fade-appear${n}-fade-appear-active`]: {
            animationName: E,
            animationPlayState: "running"
          },
          [`${n}-fade-leave${n}-fade-leave-active`]: {
            animationName: g,
            animationPlayState: "running"
          }
        }), cp(e)), {
          // RTL
          "&-rtl": {
            direction: "rtl",
            [`${n}-notice-btn`]: {
              float: "left"
            }
          }
        })
      },
      // ============================ Notice ============================
      {
        [T]: {
          position: "relative",
          width: P,
          maxWidth: `calc(100vw - ${b * 2}px)`,
          marginBottom: a,
          marginInlineStart: "auto",
          padding: v,
          overflow: "hidden",
          lineHeight: $,
          wordWrap: "break-word",
          background: p,
          borderRadius: i,
          boxShadow: r,
          [`${n}-close-icon`]: {
            fontSize: C,
            cursor: "pointer"
          },
          [`${T}-message`]: {
            marginBottom: e.marginXS,
            color: u,
            fontSize: o,
            lineHeight: e.lineHeightLG
          },
          [`${T}-description`]: {
            fontSize: C
          },
          [`&${T}-closable ${T}-message`]: {
            paddingInlineEnd: e.paddingLG
          },
          [`${T}-with-icon ${T}-message`]: {
            marginBottom: e.marginXS,
            marginInlineStart: e.marginSM + w,
            fontSize: o
          },
          [`${T}-with-icon ${T}-description`]: {
            marginInlineStart: e.marginSM + w,
            fontSize: C
          },
          // Icon & color style in different selector level
          // https://github.com/ant-design/ant-design/issues/16503
          // https://github.com/ant-design/ant-design/issues/15512
          [`${T}-icon`]: {
            position: "absolute",
            fontSize: w,
            lineHeight: 0,
            // icon-font
            [`&-success${t}`]: {
              color: l
            },
            [`&-info${t}`]: {
              color: c
            },
            [`&-warning${t}`]: {
              color: s
            },
            [`&-error${t}`]: {
              color: f
            }
          },
          [`${T}-close`]: {
            position: "absolute",
            top: e.notificationPaddingVertical,
            insetInlineEnd: e.notificationPaddingHorizontal,
            color: e.colorIcon,
            outline: "none",
            width: e.notificationCloseButtonSize,
            height: e.notificationCloseButtonSize,
            borderRadius: e.borderRadiusSM,
            transition: `background-color ${e.motionDurationMid}, color ${e.motionDurationMid}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            "&:hover": {
              color: e.colorIconHover,
              backgroundColor: e.wireframe ? "transparent" : e.colorFillContent
            }
          },
          [`${T}-btn`]: {
            float: "right",
            marginTop: e.marginSM
          }
        }
      },
      // ============================= Pure =============================
      {
        [`${T}-pure-panel`]: {
          margin: 0
        }
      }
    ];
  }, $r = nt("Notification", (e) => {
    const t = e.paddingMD, n = e.paddingLG, r = je(e, {
      // default.less variables
      notificationBg: e.colorBgElevated,
      notificationPaddingVertical: t,
      notificationPaddingHorizontal: n,
      // index.less variables
      notificationPadding: `${e.paddingMD}px ${e.paddingContentHorizontalLG}px`,
      notificationMarginBottom: e.margin,
      notificationMarginEdge: e.marginLG,
      animationMaxHeight: 150,
      notificationIconSize: e.fontSizeLG * e.lineHeightLG,
      notificationCloseButtonSize: e.controlHeightLG * 0.55
    });
    return [sp(r)];
  }, (e) => ({
    zIndexPopup: e.zIndexPopupBase + 50,
    width: 384
  }));
  function Pi(e, t) {
    return t || h("span", {
      class: `${e}-close-x`
    }, [h(Pt, {
      class: `${e}-close-icon`
    }, null)]);
  }
  h(it, null, null), h(ot, null, null), h(rt, null, null), h(at, null, null), h(Me, null, null);
  const up = {
    success: ot,
    info: it,
    error: rt,
    warning: at
  };
  function Ii(e) {
    let {
      prefixCls: t,
      icon: n,
      type: r,
      message: o,
      description: a,
      btn: i
    } = e, l = null;
    if (n)
      l = h("span", {
        class: `${t}-icon`
      }, [ze(n)]);
    else if (r) {
      const c = up[r];
      l = h(c, {
        class: `${t}-icon ${t}-icon-${r}`
      }, null);
    }
    return h("div", {
      class: B({
        [`${t}-with-icon`]: l
      }),
      role: "alert"
    }, [l, h("div", {
      class: `${t}-message`
    }, [o]), h("div", {
      class: `${t}-description`
    }, [a]), i && h("div", {
      class: `${t}-btn`
    }, [i])]);
  }
  M({
    name: "PurePanel",
    inheritAttrs: !1,
    props: ["prefixCls", "icon", "type", "message", "description", "btn", "closeIcon"],
    setup(e) {
      const {
        getPrefixCls: t
      } = ge("notification", e), n = x(() => e.prefixCls || t("notification")), r = x(() => `${n.value}-notice`), [, o] = $r(n);
      return () => h(un, j(j({}, e), {}, {
        prefixCls: n.value,
        class: B(o.value, `${r.value}-pure-panel`),
        noticeKey: "pure",
        duration: null,
        closable: e.closable,
        closeIcon: Pi(n.value, e.closeIcon)
      }), {
        default: () => [h(Ii, {
          prefixCls: r.value,
          icon: e.icon,
          type: e.type,
          message: e.message,
          description: e.description,
          btn: e.btn
        }, null)]
      });
    }
  });
  function Ei(e, t, n) {
    let r;
    switch (t = typeof t == "number" ? `${t}px` : t, n = typeof n == "number" ? `${n}px` : n, e) {
      case "top":
        r = {
          left: "50%",
          transform: "translateX(-50%)",
          right: "auto",
          top: t,
          bottom: "auto"
        };
        break;
      case "topLeft":
        r = {
          left: 0,
          top: t,
          bottom: "auto"
        };
        break;
      case "topRight":
        r = {
          right: 0,
          top: t,
          bottom: "auto"
        };
        break;
      case "bottom":
        r = {
          left: "50%",
          transform: "translateX(-50%)",
          right: "auto",
          top: "auto",
          bottom: n
        };
        break;
      case "bottomLeft":
        r = {
          left: 0,
          top: "auto",
          bottom: n
        };
        break;
      default:
        r = {
          right: 0,
          top: "auto",
          bottom: n
        };
        break;
    }
    return r;
  }
  function fp(e) {
    return {
      name: `${e}-fade`
    };
  }
  var dp = function(e, t) {
    var n = {};
    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
    return n;
  };
  const Wo = 24, pp = 4.5, gp = M({
    name: "Holder",
    inheritAttrs: !1,
    props: ["prefixCls", "class", "type", "icon", "content", "onAllRemoved"],
    setup(e, t) {
      let {
        expose: n
      } = t;
      const {
        getPrefixCls: r,
        getPopupContainer: o
      } = ge("notification", e), a = x(() => e.prefixCls || r("notification")), i = (p) => {
        var v, b;
        return Ei(p, (v = e.top) !== null && v !== void 0 ? v : Wo, (b = e.bottom) !== null && b !== void 0 ? b : Wo);
      }, [, l] = $r(a), c = () => B(l.value, {
        [`${a.value}-rtl`]: e.rtl
      }), s = () => fp(a.value), [f, u] = hi({
        prefixCls: a.value,
        getStyles: i,
        getClassName: c,
        motion: s,
        closable: !0,
        closeIcon: Pi(a.value),
        duration: pp,
        getContainer: () => {
          var p, v;
          return ((p = e.getPopupContainer) === null || p === void 0 ? void 0 : p.call(e)) || ((v = o.value) === null || v === void 0 ? void 0 : v.call(o)) || document.body;
        },
        maxCount: e.maxCount,
        hashId: l.value,
        onAllRemoved: e.onAllRemoved
      });
      return n(d(d({}, f), {
        prefixCls: a.value,
        hashId: l
      })), u;
    }
  });
  function mp(e) {
    const t = D(null), n = Symbol("notificationHolderKey"), r = (l) => {
      if (!t.value)
        return;
      const {
        open: c,
        prefixCls: s,
        hashId: f
      } = t.value, u = `${s}-notice`, {
        message: p,
        description: v,
        icon: b,
        type: y,
        btn: S,
        class: C
      } = l, $ = dp(l, ["message", "description", "icon", "type", "btn", "class"]);
      return c(d(d({
        placement: "topRight"
      }, $), {
        content: () => h(Ii, {
          prefixCls: u,
          icon: typeof b == "function" ? b() : b,
          type: y,
          message: typeof p == "function" ? p() : p,
          description: typeof v == "function" ? v() : v,
          btn: typeof S == "function" ? S() : S
        }, null),
        // @ts-ignore
        class: B(y && `${u}-${y}`, f, C)
      }));
    }, a = {
      open: r,
      destroy: (l) => {
        var c, s;
        l !== void 0 ? (c = t.value) === null || c === void 0 || c.close(l) : (s = t.value) === null || s === void 0 || s.destroy();
      }
    };
    return ["success", "info", "warning", "error"].forEach((l) => {
      a[l] = (c) => r(d(d({}, c), {
        type: l
      }));
    }), [a, () => h(gp, j(j({
      key: n
    }, e), {}, {
      ref: t
    }), null)];
  }
  function hp(e) {
    return mp(e);
  }
  const Te = {};
  let _i = 4.5, Ai = "24px", Mi = "24px", Jn = "", ji = "topRight", Hi = () => document.body, Ri = null, Zn = !1, Ni;
  function vp(e) {
    const {
      duration: t,
      placement: n,
      bottom: r,
      top: o,
      getContainer: a,
      closeIcon: i,
      prefixCls: l
    } = e;
    l !== void 0 && (Jn = l), t !== void 0 && (_i = t), n !== void 0 && (ji = n), r !== void 0 && (Mi = typeof r == "number" ? `${r}px` : r), o !== void 0 && (Ai = typeof o == "number" ? `${o}px` : o), a !== void 0 && (Hi = a), i !== void 0 && (Ri = i), e.rtl !== void 0 && (Zn = e.rtl), e.maxCount !== void 0 && (Ni = e.maxCount);
  }
  function yp(e, t) {
    let {
      prefixCls: n,
      placement: r = ji,
      getContainer: o = Hi,
      top: a,
      bottom: i,
      closeIcon: l = Ri,
      appContext: c
    } = e;
    const {
      getPrefixCls: s
    } = _p(), f = s("notification", n || Jn), u = `${f}-${r}-${Zn}`, p = Te[u];
    if (p) {
      Promise.resolve(p).then((b) => {
        t(b);
      });
      return;
    }
    const v = B(`${f}-${r}`, {
      [`${f}-rtl`]: Zn === !0
    });
    Zt.newInstance({
      name: "notification",
      prefixCls: n || Jn,
      useStyle: $r,
      class: v,
      style: Ei(r, a ?? Ai, i ?? Mi),
      appContext: c,
      getContainer: o,
      closeIcon: (b) => {
        let {
          prefixCls: y
        } = b;
        return h("span", {
          class: `${y}-close-x`
        }, [ze(l, {}, h(Pt, {
          class: `${y}-close-icon`
        }, null))]);
      },
      maxCount: Ni,
      hasTransitionName: !0
    }, (b) => {
      Te[u] = b, t(b);
    });
  }
  const bp = {
    success: hr,
    info: yr,
    error: br,
    warning: vr
  };
  function Cp(e) {
    const {
      icon: t,
      type: n,
      description: r,
      message: o,
      btn: a
    } = e, i = e.duration === void 0 ? _i : e.duration;
    yp(e, (l) => {
      l.notice({
        content: (c) => {
          let {
            prefixCls: s
          } = c;
          const f = `${s}-notice`;
          let u = null;
          if (t)
            u = () => h("span", {
              class: `${f}-icon`
            }, [ze(t)]);
          else if (n) {
            const p = bp[n];
            u = () => h(p, {
              class: `${f}-icon ${f}-icon-${n}`
            }, null);
          }
          return h("div", {
            class: u ? `${f}-with-icon` : ""
          }, [u && u(), h("div", {
            class: `${f}-message`
          }, [!r && u ? h("span", {
            class: `${f}-message-single-line-auto-margin`
          }, null) : null, ze(o)]), h("div", {
            class: `${f}-description`
          }, [ze(r)]), a ? h("span", {
            class: `${f}-btn`
          }, [ze(a)]) : null]);
        },
        duration: i,
        closable: !0,
        onClose: e.onClose,
        onClick: e.onClick,
        key: e.key,
        style: e.style || {},
        class: e.class
      });
    });
  }
  const Qe = {
    open: Cp,
    close(e) {
      Object.keys(Te).forEach((t) => Promise.resolve(Te[t]).then((n) => {
        n.removeNotice(e);
      }));
    },
    config: vp,
    destroy() {
      Object.keys(Te).forEach((e) => {
        Promise.resolve(Te[e]).then((t) => {
          t.destroy();
        }), delete Te[e];
      });
    }
  }, xp = ["success", "info", "warning", "error"];
  xp.forEach((e) => {
    Qe[e] = (t) => Qe.open(d(d({}, t), {
      type: e
    }));
  });
  Qe.warn = Qe.warning;
  Qe.useNotification = hp;
  const Sp = `-ant-${Date.now()}-${Math.random()}`;
  function $p(e, t) {
    const n = {}, r = (i, l) => {
      let c = i.clone();
      return c = (l == null ? void 0 : l(c)) || c, c.toRgbString();
    }, o = (i, l) => {
      const c = new k(i), s = _e(c.toRgbString());
      n[`${l}-color`] = r(c), n[`${l}-color-disabled`] = s[1], n[`${l}-color-hover`] = s[4], n[`${l}-color-active`] = s[6], n[`${l}-color-outline`] = c.clone().setAlpha(0.2).toRgbString(), n[`${l}-color-deprecated-bg`] = s[0], n[`${l}-color-deprecated-border`] = s[2];
    };
    if (t.primaryColor) {
      o(t.primaryColor, "primary");
      const i = new k(t.primaryColor), l = _e(i.toRgbString());
      l.forEach((s, f) => {
        n[`primary-${f + 1}`] = s;
      }), n["primary-color-deprecated-l-35"] = r(i, (s) => s.lighten(35)), n["primary-color-deprecated-l-20"] = r(i, (s) => s.lighten(20)), n["primary-color-deprecated-t-20"] = r(i, (s) => s.tint(20)), n["primary-color-deprecated-t-50"] = r(i, (s) => s.tint(50)), n["primary-color-deprecated-f-12"] = r(i, (s) => s.setAlpha(s.getAlpha() * 0.12));
      const c = new k(l[0]);
      n["primary-color-active-deprecated-f-30"] = r(c, (s) => s.setAlpha(s.getAlpha() * 0.3)), n["primary-color-active-deprecated-d-02"] = r(c, (s) => s.darken(2));
    }
    return t.successColor && o(t.successColor, "success"), t.warningColor && o(t.warningColor, "warning"), t.errorColor && o(t.errorColor, "error"), t.infoColor && o(t.infoColor, "info"), `
  :root {
    ${Object.keys(n).map((i) => `--${e}-${i}: ${n[i]};`).join(`
`)}
  }
  `.trim();
  }
  function wp(e, t) {
    const n = $p(e, t);
    et() && Ut(n, `${Sp}-dynamic-theme`);
  }
  const Tp = (e) => {
    const [t, n] = wt();
    return Nn(x(() => ({
      theme: t.value,
      token: n.value,
      hashId: "",
      path: ["ant-design-icons", e.value]
    })), () => [{
      [`.${e.value}`]: d(d({}, kc()), {
        [`.${e.value} .${e.value}-icon`]: {
          display: "block"
        }
      })
    }]);
  };
  function Op(e, t) {
    const n = x(() => (e == null ? void 0 : e.value) || {}), r = x(() => n.value.inherit === !1 || !(t != null && t.value) ? Aa : t.value);
    return x(() => {
      if (!(e != null && e.value))
        return t == null ? void 0 : t.value;
      const a = d({}, r.value.components);
      return Object.keys(e.value.components || {}).forEach((i) => {
        a[i] = d(d({}, a[i]), e.value.components[i]);
      }), d(d(d({}, r.value), n.value), {
        token: d(d({}, r.value.token), n.value.token),
        components: a
      });
    });
  }
  var Pp = function(e, t) {
    var n = {};
    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
    return n;
  };
  const Ip = "ant";
  function De() {
    return F.prefixCls || Ip;
  }
  function Bi() {
    return F.iconPrefixCls || rr;
  }
  const wr = ye({}), F = ye({});
  Je(() => {
    d(F, wr), F.prefixCls = De(), F.iconPrefixCls = Bi(), F.getPrefixCls = (e, t) => t || (e ? `${F.prefixCls}-${e}` : F.prefixCls), F.getRootPrefixCls = () => F.prefixCls ? F.prefixCls : De();
  });
  let In;
  const Ep = (e) => {
    In && In(), In = Je(() => {
      d(wr, ye(e)), d(F, ye(e));
    }), e.theme && wp(De(), e.theme);
  }, _p = () => ({
    getPrefixCls: (e, t) => t || (e ? `${De()}-${e}` : De()),
    getIconPrefixCls: Bi,
    getRootPrefixCls: () => F.prefixCls ? F.prefixCls : De()
  }), mt = M({
    compatConfig: {
      MODE: 3
    },
    name: "AConfigProvider",
    inheritAttrs: !1,
    props: ul(),
    setup(e, t) {
      let {
        slots: n
      } = t;
      const r = ar(), o = (m, I) => {
        const {
          prefixCls: A = "ant"
        } = e;
        if (I) return I;
        const N = A || r.getPrefixCls("");
        return m ? `${N}-${m}` : N;
      }, a = x(() => e.iconPrefixCls || r.iconPrefixCls.value || rr), i = x(() => a.value !== r.iconPrefixCls.value), l = x(() => {
        var m;
        return e.csp || ((m = r.csp) === null || m === void 0 ? void 0 : m.value);
      }), c = Tp(a), s = Op(x(() => e.theme), x(() => {
        var m;
        return (m = r.theme) === null || m === void 0 ? void 0 : m.value;
      })), f = (m) => (e.renderEmpty || n.renderEmpty || r.renderEmpty || Zc)(m), u = x(() => {
        var m, I;
        return (m = e.autoInsertSpaceInButton) !== null && m !== void 0 ? m : (I = r.autoInsertSpaceInButton) === null || I === void 0 ? void 0 : I.value;
      }), p = x(() => {
        var m;
        return e.locale || ((m = r.locale) === null || m === void 0 ? void 0 : m.value);
      });
      ne(p, () => {
        wr.locale = p.value;
      }, {
        immediate: !0
      });
      const v = x(() => {
        var m;
        return e.direction || ((m = r.direction) === null || m === void 0 ? void 0 : m.value);
      }), b = x(() => {
        var m, I;
        return (m = e.space) !== null && m !== void 0 ? m : (I = r.space) === null || I === void 0 ? void 0 : I.value;
      }), y = x(() => {
        var m, I;
        return (m = e.virtual) !== null && m !== void 0 ? m : (I = r.virtual) === null || I === void 0 ? void 0 : I.value;
      }), S = x(() => {
        var m, I;
        return (m = e.dropdownMatchSelectWidth) !== null && m !== void 0 ? m : (I = r.dropdownMatchSelectWidth) === null || I === void 0 ? void 0 : I.value;
      }), C = x(() => {
        var m;
        return e.getTargetContainer !== void 0 ? e.getTargetContainer : (m = r.getTargetContainer) === null || m === void 0 ? void 0 : m.value;
      }), $ = x(() => {
        var m;
        return e.getPopupContainer !== void 0 ? e.getPopupContainer : (m = r.getPopupContainer) === null || m === void 0 ? void 0 : m.value;
      }), P = x(() => {
        var m;
        return e.pageHeader !== void 0 ? e.pageHeader : (m = r.pageHeader) === null || m === void 0 ? void 0 : m.value;
      }), w = x(() => {
        var m;
        return e.input !== void 0 ? e.input : (m = r.input) === null || m === void 0 ? void 0 : m.value;
      }), T = x(() => {
        var m;
        return e.pagination !== void 0 ? e.pagination : (m = r.pagination) === null || m === void 0 ? void 0 : m.value;
      }), E = x(() => {
        var m;
        return e.form !== void 0 ? e.form : (m = r.form) === null || m === void 0 ? void 0 : m.value;
      }), g = x(() => {
        var m;
        return e.select !== void 0 ? e.select : (m = r.select) === null || m === void 0 ? void 0 : m.value;
      }), O = x(() => e.componentSize), _ = x(() => e.componentDisabled), z = x(() => {
        var m, I;
        return (m = e.wave) !== null && m !== void 0 ? m : (I = r.wave) === null || I === void 0 ? void 0 : I.value;
      }), V = {
        csp: l,
        autoInsertSpaceInButton: u,
        locale: p,
        direction: v,
        space: b,
        virtual: y,
        dropdownMatchSelectWidth: S,
        getPrefixCls: o,
        iconPrefixCls: a,
        theme: x(() => {
          var m, I;
          return (m = s.value) !== null && m !== void 0 ? m : (I = r.theme) === null || I === void 0 ? void 0 : I.value;
        }),
        renderEmpty: f,
        getTargetContainer: C,
        getPopupContainer: $,
        pageHeader: P,
        input: w,
        pagination: T,
        form: E,
        select: g,
        componentSize: O,
        componentDisabled: _,
        transformCellText: x(() => e.transformCellText),
        wave: z
      }, U = x(() => {
        const m = s.value || {}, {
          algorithm: I,
          token: A
        } = m, N = Pp(m, ["algorithm", "token"]), xe = I && (!Array.isArray(I) || I.length > 0) ? ma(I) : void 0;
        return d(d({}, N), {
          theme: xe,
          token: d(d({}, ln), A)
        });
      }), Ne = x(() => {
        var m, I;
        let A = {};
        return p.value && (A = ((m = p.value.Form) === null || m === void 0 ? void 0 : m.defaultValidateMessages) || ((I = bt.Form) === null || I === void 0 ? void 0 : I.defaultValidateMessages) || {}), e.form && e.form.validateMessages && (A = d(d({}, A), e.form.validateMessages)), A;
      });
      fl(V), sl({
        validateMessages: Ne
      }), es(O), dl(_);
      const me = (m) => {
        var I, A;
        let N = i.value ? c((I = n.default) === null || I === void 0 ? void 0 : I.call(n)) : (A = n.default) === null || A === void 0 ? void 0 : A.call(n);
        if (e.theme) {
          const xe = /* @__PURE__ */ function() {
            return N;
          }();
          N = h(Kc, {
            value: U.value
          }, {
            default: () => [xe]
          });
        }
        return h(zd, {
          locale: p.value || m,
          ANT_MARK__: Qn
        }, {
          default: () => [N]
        });
      };
      return Je(() => {
        v.value && (Ye.config({
          rtl: v.value === "rtl"
        }), Qe.config({
          rtl: v.value === "rtl"
        }));
      }), () => h(ra, {
        children: (m, I, A) => me(A)
      }, null);
    }
  });
  mt.config = Ep;
  mt.install = function(e) {
    e.component(mt.name, mt);
  };
  const Ap = /* @__PURE__ */ M({
    __name: "App",
    setup(e) {
      return (t, n) => (Vi(), Ui(Xt(Fe), null, {
        default: Ki(() => n[0] || (n[0] = [
          qi("hi")
        ])),
        _: 1
      }));
    }
  }), Tr = Yi({
    setup() {
      return Ye.success("1111111111"), {
        text: ae("Hello Vue!")
      };
    }
  });
  Tr.use(Fe);
  Tr.component("app", Ap);
  Tr.mount("#app");
});
export default Mp();
