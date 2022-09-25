const Oo = function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) r(s);
  new MutationObserver((s) => {
    for (const o of s)
      if (o.type === "childList")
        for (const i of o.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(s) {
    const o = {};
    return (
      s.integrity && (o.integrity = s.integrity),
      s.referrerpolicy && (o.referrerPolicy = s.referrerpolicy),
      s.crossorigin === "use-credentials"
        ? (o.credentials = "include")
        : s.crossorigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(s) {
    if (s.ep) return;
    s.ep = !0;
    const o = n(s);
    fetch(s.href, o);
  }
};
Oo();
function tr(e, t) {
  const n = Object.create(null),
    r = e.split(",");
  for (let s = 0; s < r.length; s++) n[r[s]] = !0;
  return t ? (s) => !!n[s.toLowerCase()] : (s) => !!n[s];
}
const Io =
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  To = tr(Io);
function gs(e) {
  return !!e || e === "";
}
function nr(e) {
  if ($(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n],
        s = le(r) ? $o(r) : nr(r);
      if (s) for (const o in s) t[o] = s[o];
    }
    return t;
  } else {
    if (le(e)) return e;
    if (ie(e)) return e;
  }
}
const So = /;(?![^(]*\))/g,
  ko = /:(.+)/;
function $o(e) {
  const t = {};
  return (
    e.split(So).forEach((n) => {
      if (n) {
        const r = n.split(ko);
        r.length > 1 && (t[r[0].trim()] = r[1].trim());
      }
    }),
    t
  );
}
function rr(e) {
  let t = "";
  if (le(e)) t = e;
  else if ($(e))
    for (let n = 0; n < e.length; n++) {
      const r = rr(e[n]);
      r && (t += r + " ");
    }
  else if (ie(e)) for (const n in e) e[n] && (t += n + " ");
  return t.trim();
}
const Ho = (e) =>
    le(e)
      ? e
      : e == null
      ? ""
      : $(e) || (ie(e) && (e.toString === ys || !j(e.toString)))
      ? JSON.stringify(e, _s, 2)
      : String(e),
  _s = (e, t) =>
    t && t.__v_isRef
      ? _s(e, t.value)
      : yt(t)
      ? {
          [`Map(${t.size})`]: [...t.entries()].reduce(
            (n, [r, s]) => ((n[`${r} =>`] = s), n),
            {}
          ),
        }
      : vs(t)
      ? { [`Set(${t.size})`]: [...t.values()] }
      : ie(t) && !$(t) && !xs(t)
      ? String(t)
      : t,
  ne = {},
  bt = [],
  Pe = () => {},
  Fo = () => !1,
  No = /^on[^a-z]/,
  gn = (e) => No.test(e),
  sr = (e) => e.startsWith("onUpdate:"),
  fe = Object.assign,
  or = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  },
  jo = Object.prototype.hasOwnProperty,
  U = (e, t) => jo.call(e, t),
  $ = Array.isArray,
  yt = (e) => _n(e) === "[object Map]",
  vs = (e) => _n(e) === "[object Set]",
  j = (e) => typeof e == "function",
  le = (e) => typeof e == "string",
  ir = (e) => typeof e == "symbol",
  ie = (e) => e !== null && typeof e == "object",
  bs = (e) => ie(e) && j(e.then) && j(e.catch),
  ys = Object.prototype.toString,
  _n = (e) => ys.call(e),
  Lo = (e) => _n(e).slice(8, -1),
  xs = (e) => _n(e) === "[object Object]",
  lr = (e) =>
    le(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
  sn = tr(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
  ),
  vn = (e) => {
    const t = Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  },
  Bo = /-(\w)/g,
  wt = vn((e) => e.replace(Bo, (t, n) => (n ? n.toUpperCase() : ""))),
  Uo = /\B([A-Z])/g,
  Mt = vn((e) => e.replace(Uo, "-$1").toLowerCase()),
  ws = vn((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  Mn = vn((e) => (e ? `on${ws(e)}` : "")),
  Vt = (e, t) => !Object.is(e, t),
  zn = (e, t) => {
    for (let n = 0; n < e.length; n++) e[n](t);
  },
  un = (e, t, n) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: n });
  },
  Do = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  };
let Ar;
const Ko = () =>
  Ar ||
  (Ar =
    typeof globalThis != "undefined"
      ? globalThis
      : typeof self != "undefined"
      ? self
      : typeof window != "undefined"
      ? window
      : typeof global != "undefined"
      ? global
      : {});
let Se;
class Es {
  constructor(t = !1) {
    (this.active = !0),
      (this.effects = []),
      (this.cleanups = []),
      !t &&
        Se &&
        ((this.parent = Se),
        (this.index = (Se.scopes || (Se.scopes = [])).push(this) - 1));
  }
  run(t) {
    if (this.active) {
      const n = Se;
      try {
        return (Se = this), t();
      } finally {
        Se = n;
      }
    }
  }
  on() {
    Se = this;
  }
  off() {
    Se = this.parent;
  }
  stop(t) {
    if (this.active) {
      let n, r;
      for (n = 0, r = this.effects.length; n < r; n++) this.effects[n].stop();
      for (n = 0, r = this.cleanups.length; n < r; n++) this.cleanups[n]();
      if (this.scopes)
        for (n = 0, r = this.scopes.length; n < r; n++) this.scopes[n].stop(!0);
      if (this.parent && !t) {
        const s = this.parent.scopes.pop();
        s &&
          s !== this &&
          ((this.parent.scopes[this.index] = s), (s.index = this.index));
      }
      this.active = !1;
    }
  }
}
function Vo(e) {
  return new Es(e);
}
function Wo(e, t = Se) {
  t && t.active && t.effects.push(e);
}
const cr = (e) => {
    const t = new Set(e);
    return (t.w = 0), (t.n = 0), t;
  },
  Cs = (e) => (e.w & et) > 0,
  Rs = (e) => (e.n & et) > 0,
  qo = ({ deps: e }) => {
    if (e.length) for (let t = 0; t < e.length; t++) e[t].w |= et;
  },
  Yo = (e) => {
    const { deps: t } = e;
    if (t.length) {
      let n = 0;
      for (let r = 0; r < t.length; r++) {
        const s = t[r];
        Cs(s) && !Rs(s) ? s.delete(e) : (t[n++] = s),
          (s.w &= ~et),
          (s.n &= ~et);
      }
      t.length = n;
    }
  },
  Fn = new WeakMap();
let Ft = 0,
  et = 1;
const Nn = 30;
let Ce;
const ot = Symbol(""),
  jn = Symbol("");
class ur {
  constructor(t, n = null, r) {
    (this.fn = t),
      (this.scheduler = n),
      (this.active = !0),
      (this.deps = []),
      (this.parent = void 0),
      Wo(this, r);
  }
  run() {
    if (!this.active) return this.fn();
    let t = Ce,
      n = Je;
    for (; t; ) {
      if (t === this) return;
      t = t.parent;
    }
    try {
      return (
        (this.parent = Ce),
        (Ce = this),
        (Je = !0),
        (et = 1 << ++Ft),
        Ft <= Nn ? qo(this) : Mr(this),
        this.fn()
      );
    } finally {
      Ft <= Nn && Yo(this),
        (et = 1 << --Ft),
        (Ce = this.parent),
        (Je = n),
        (this.parent = void 0),
        this.deferStop && this.stop();
    }
  }
  stop() {
    Ce === this
      ? (this.deferStop = !0)
      : this.active &&
        (Mr(this), this.onStop && this.onStop(), (this.active = !1));
  }
}
function Mr(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++) t[n].delete(e);
    t.length = 0;
  }
}
let Je = !0;
const Ps = [];
function zt() {
  Ps.push(Je), (Je = !1);
}
function Ot() {
  const e = Ps.pop();
  Je = e === void 0 ? !0 : e;
}
function ye(e, t, n) {
  if (Je && Ce) {
    let r = Fn.get(e);
    r || Fn.set(e, (r = new Map()));
    let s = r.get(n);
    s || r.set(n, (s = cr())), As(s);
  }
}
function As(e, t) {
  let n = !1;
  Ft <= Nn ? Rs(e) || ((e.n |= et), (n = !Cs(e))) : (n = !e.has(Ce)),
    n && (e.add(Ce), Ce.deps.push(e));
}
function Be(e, t, n, r, s, o) {
  const i = Fn.get(e);
  if (!i) return;
  let u = [];
  if (t === "clear") u = [...i.values()];
  else if (n === "length" && $(e))
    i.forEach((l, f) => {
      (f === "length" || f >= r) && u.push(l);
    });
  else
    switch ((n !== void 0 && u.push(i.get(n)), t)) {
      case "add":
        $(e)
          ? lr(n) && u.push(i.get("length"))
          : (u.push(i.get(ot)), yt(e) && u.push(i.get(jn)));
        break;
      case "delete":
        $(e) || (u.push(i.get(ot)), yt(e) && u.push(i.get(jn)));
        break;
      case "set":
        yt(e) && u.push(i.get(ot));
        break;
    }
  if (u.length === 1) u[0] && Ln(u[0]);
  else {
    const l = [];
    for (const f of u) f && l.push(...f);
    Ln(cr(l));
  }
}
function Ln(e, t) {
  const n = $(e) ? e : [...e];
  for (const r of n) r.computed && zr(r);
  for (const r of n) r.computed || zr(r);
}
function zr(e, t) {
  (e !== Ce || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run());
}
const Qo = tr("__proto__,__v_isRef,__isVue"),
  Ms = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== "arguments" && e !== "caller")
      .map((e) => Symbol[e])
      .filter(ir)
  ),
  Jo = ar(),
  Xo = ar(!1, !0),
  Zo = ar(!0),
  Or = Go();
function Go() {
  const e = {};
  return (
    ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
      e[t] = function (...n) {
        const r = W(this);
        for (let o = 0, i = this.length; o < i; o++) ye(r, "get", o + "");
        const s = r[t](...n);
        return s === -1 || s === !1 ? r[t](...n.map(W)) : s;
      };
    }),
    ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
      e[t] = function (...n) {
        zt();
        const r = W(this)[t].apply(this, n);
        return Ot(), r;
      };
    }),
    e
  );
}
function ar(e = !1, t = !1) {
  return function (r, s, o) {
    if (s === "__v_isReactive") return !e;
    if (s === "__v_isReadonly") return e;
    if (s === "__v_isShallow") return t;
    if (s === "__v_raw" && o === (e ? (t ? mi : Ss) : t ? Ts : Is).get(r))
      return r;
    const i = $(r);
    if (!e && i && U(Or, s)) return Reflect.get(Or, s, o);
    const u = Reflect.get(r, s, o);
    return (ir(s) ? Ms.has(s) : Qo(s)) || (e || ye(r, "get", s), t)
      ? u
      : ue(u)
      ? i && lr(s)
        ? u
        : u.value
      : ie(u)
      ? e
        ? ks(u)
        : Zt(u)
      : u;
  };
}
const ei = zs(),
  ti = zs(!0);
function zs(e = !1) {
  return function (n, r, s, o) {
    let i = n[r];
    if (Wt(i) && ue(i) && !ue(s)) return !1;
    if (
      !e &&
      !Wt(s) &&
      (Bn(s) || ((s = W(s)), (i = W(i))), !$(n) && ue(i) && !ue(s))
    )
      return (i.value = s), !0;
    const u = $(n) && lr(r) ? Number(r) < n.length : U(n, r),
      l = Reflect.set(n, r, s, o);
    return (
      n === W(o) && (u ? Vt(s, i) && Be(n, "set", r, s) : Be(n, "add", r, s)), l
    );
  };
}
function ni(e, t) {
  const n = U(e, t);
  e[t];
  const r = Reflect.deleteProperty(e, t);
  return r && n && Be(e, "delete", t, void 0), r;
}
function ri(e, t) {
  const n = Reflect.has(e, t);
  return (!ir(t) || !Ms.has(t)) && ye(e, "has", t), n;
}
function si(e) {
  return ye(e, "iterate", $(e) ? "length" : ot), Reflect.ownKeys(e);
}
const Os = { get: Jo, set: ei, deleteProperty: ni, has: ri, ownKeys: si },
  oi = {
    get: Zo,
    set(e, t) {
      return !0;
    },
    deleteProperty(e, t) {
      return !0;
    },
  },
  ii = fe({}, Os, { get: Xo, set: ti }),
  fr = (e) => e,
  bn = (e) => Reflect.getPrototypeOf(e);
function Gt(e, t, n = !1, r = !1) {
  e = e.__v_raw;
  const s = W(e),
    o = W(t);
  n || (t !== o && ye(s, "get", t), ye(s, "get", o));
  const { has: i } = bn(s),
    u = r ? fr : n ? mr : qt;
  if (i.call(s, t)) return u(e.get(t));
  if (i.call(s, o)) return u(e.get(o));
  e !== s && e.get(t);
}
function en(e, t = !1) {
  const n = this.__v_raw,
    r = W(n),
    s = W(e);
  return (
    t || (e !== s && ye(r, "has", e), ye(r, "has", s)),
    e === s ? n.has(e) : n.has(e) || n.has(s)
  );
}
function tn(e, t = !1) {
  return (
    (e = e.__v_raw), !t && ye(W(e), "iterate", ot), Reflect.get(e, "size", e)
  );
}
function Ir(e) {
  e = W(e);
  const t = W(this);
  return bn(t).has.call(t, e) || (t.add(e), Be(t, "add", e, e)), this;
}
function Tr(e, t) {
  t = W(t);
  const n = W(this),
    { has: r, get: s } = bn(n);
  let o = r.call(n, e);
  o || ((e = W(e)), (o = r.call(n, e)));
  const i = s.call(n, e);
  return (
    n.set(e, t), o ? Vt(t, i) && Be(n, "set", e, t) : Be(n, "add", e, t), this
  );
}
function Sr(e) {
  const t = W(this),
    { has: n, get: r } = bn(t);
  let s = n.call(t, e);
  s || ((e = W(e)), (s = n.call(t, e))), r && r.call(t, e);
  const o = t.delete(e);
  return s && Be(t, "delete", e, void 0), o;
}
function kr() {
  const e = W(this),
    t = e.size !== 0,
    n = e.clear();
  return t && Be(e, "clear", void 0, void 0), n;
}
function nn(e, t) {
  return function (r, s) {
    const o = this,
      i = o.__v_raw,
      u = W(i),
      l = t ? fr : e ? mr : qt;
    return (
      !e && ye(u, "iterate", ot), i.forEach((f, d) => r.call(s, l(f), l(d), o))
    );
  };
}
function rn(e, t, n) {
  return function (...r) {
    const s = this.__v_raw,
      o = W(s),
      i = yt(o),
      u = e === "entries" || (e === Symbol.iterator && i),
      l = e === "keys" && i,
      f = s[e](...r),
      d = n ? fr : t ? mr : qt;
    return (
      !t && ye(o, "iterate", l ? jn : ot),
      {
        next() {
          const { value: h, done: p } = f.next();
          return p
            ? { value: h, done: p }
            : { value: u ? [d(h[0]), d(h[1])] : d(h), done: p };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function Ke(e) {
  return function (...t) {
    return e === "delete" ? !1 : this;
  };
}
function li() {
  const e = {
      get(o) {
        return Gt(this, o);
      },
      get size() {
        return tn(this);
      },
      has: en,
      add: Ir,
      set: Tr,
      delete: Sr,
      clear: kr,
      forEach: nn(!1, !1),
    },
    t = {
      get(o) {
        return Gt(this, o, !1, !0);
      },
      get size() {
        return tn(this);
      },
      has: en,
      add: Ir,
      set: Tr,
      delete: Sr,
      clear: kr,
      forEach: nn(!1, !0),
    },
    n = {
      get(o) {
        return Gt(this, o, !0);
      },
      get size() {
        return tn(this, !0);
      },
      has(o) {
        return en.call(this, o, !0);
      },
      add: Ke("add"),
      set: Ke("set"),
      delete: Ke("delete"),
      clear: Ke("clear"),
      forEach: nn(!0, !1),
    },
    r = {
      get(o) {
        return Gt(this, o, !0, !0);
      },
      get size() {
        return tn(this, !0);
      },
      has(o) {
        return en.call(this, o, !0);
      },
      add: Ke("add"),
      set: Ke("set"),
      delete: Ke("delete"),
      clear: Ke("clear"),
      forEach: nn(!0, !0),
    };
  return (
    ["keys", "values", "entries", Symbol.iterator].forEach((o) => {
      (e[o] = rn(o, !1, !1)),
        (n[o] = rn(o, !0, !1)),
        (t[o] = rn(o, !1, !0)),
        (r[o] = rn(o, !0, !0));
    }),
    [e, n, t, r]
  );
}
const [ci, ui, ai, fi] = li();
function dr(e, t) {
  const n = t ? (e ? fi : ai) : e ? ui : ci;
  return (r, s, o) =>
    s === "__v_isReactive"
      ? !e
      : s === "__v_isReadonly"
      ? e
      : s === "__v_raw"
      ? r
      : Reflect.get(U(n, s) && s in r ? n : r, s, o);
}
const di = { get: dr(!1, !1) },
  hi = { get: dr(!1, !0) },
  pi = { get: dr(!0, !1) },
  Is = new WeakMap(),
  Ts = new WeakMap(),
  Ss = new WeakMap(),
  mi = new WeakMap();
function gi(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function _i(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : gi(Lo(e));
}
function Zt(e) {
  return Wt(e) ? e : hr(e, !1, Os, di, Is);
}
function vi(e) {
  return hr(e, !1, ii, hi, Ts);
}
function ks(e) {
  return hr(e, !0, oi, pi, Ss);
}
function hr(e, t, n, r, s) {
  if (!ie(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
  const o = s.get(e);
  if (o) return o;
  const i = _i(e);
  if (i === 0) return e;
  const u = new Proxy(e, i === 2 ? r : n);
  return s.set(e, u), u;
}
function xt(e) {
  return Wt(e) ? xt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Wt(e) {
  return !!(e && e.__v_isReadonly);
}
function Bn(e) {
  return !!(e && e.__v_isShallow);
}
function $s(e) {
  return xt(e) || Wt(e);
}
function W(e) {
  const t = e && e.__v_raw;
  return t ? W(t) : e;
}
function pr(e) {
  return un(e, "__v_skip", !0), e;
}
const qt = (e) => (ie(e) ? Zt(e) : e),
  mr = (e) => (ie(e) ? ks(e) : e);
function Hs(e) {
  Je && Ce && ((e = W(e)), As(e.dep || (e.dep = cr())));
}
function Fs(e, t) {
  (e = W(e)), e.dep && Ln(e.dep);
}
function ue(e) {
  return !!(e && e.__v_isRef === !0);
}
function Ns(e) {
  return js(e, !1);
}
function bi(e) {
  return js(e, !0);
}
function js(e, t) {
  return ue(e) ? e : new yi(e, t);
}
class yi {
  constructor(t, n) {
    (this.__v_isShallow = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = n ? t : W(t)),
      (this._value = n ? t : qt(t));
  }
  get value() {
    return Hs(this), this._value;
  }
  set value(t) {
    (t = this.__v_isShallow ? t : W(t)),
      Vt(t, this._rawValue) &&
        ((this._rawValue = t),
        (this._value = this.__v_isShallow ? t : qt(t)),
        Fs(this));
  }
}
function Xe(e) {
  return ue(e) ? e.value : e;
}
const xi = {
  get: (e, t, n) => Xe(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const s = e[t];
    return ue(s) && !ue(n) ? ((s.value = n), !0) : Reflect.set(e, t, n, r);
  },
};
function Ls(e) {
  return xt(e) ? e : new Proxy(e, xi);
}
class wi {
  constructor(t, n, r, s) {
    (this._setter = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._dirty = !0),
      (this.effect = new ur(t, () => {
        this._dirty || ((this._dirty = !0), Fs(this));
      })),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !s),
      (this.__v_isReadonly = r);
  }
  get value() {
    const t = W(this);
    return (
      Hs(t),
      (t._dirty || !t._cacheable) &&
        ((t._dirty = !1), (t._value = t.effect.run())),
      t._value
    );
  }
  set value(t) {
    this._setter(t);
  }
}
function Ei(e, t, n = !1) {
  let r, s;
  const o = j(e);
  return (
    o ? ((r = e), (s = Pe)) : ((r = e.get), (s = e.set)),
    new wi(r, s, o || !s, n)
  );
}
function Ze(e, t, n, r) {
  let s;
  try {
    s = r ? e(...r) : e();
  } catch (o) {
    yn(o, t, n);
  }
  return s;
}
function Ae(e, t, n, r) {
  if (j(e)) {
    const o = Ze(e, t, n, r);
    return (
      o &&
        bs(o) &&
        o.catch((i) => {
          yn(i, t, n);
        }),
      o
    );
  }
  const s = [];
  for (let o = 0; o < e.length; o++) s.push(Ae(e[o], t, n, r));
  return s;
}
function yn(e, t, n, r = !0) {
  const s = t ? t.vnode : null;
  if (t) {
    let o = t.parent;
    const i = t.proxy,
      u = n;
    for (; o; ) {
      const f = o.ec;
      if (f) {
        for (let d = 0; d < f.length; d++) if (f[d](e, i, u) === !1) return;
      }
      o = o.parent;
    }
    const l = t.appContext.config.errorHandler;
    if (l) {
      Ze(l, null, 10, [e, i, u]);
      return;
    }
  }
  Ci(e, n, s, r);
}
function Ci(e, t, n, r = !0) {
  console.error(e);
}
let an = !1,
  Un = !1;
const ve = [];
let Le = 0;
const jt = [];
let Nt = null,
  mt = 0;
const Lt = [];
let qe = null,
  gt = 0;
const Bs = Promise.resolve();
let gr = null,
  Dn = null;
function Us(e) {
  const t = gr || Bs;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Ri(e) {
  let t = Le + 1,
    n = ve.length;
  for (; t < n; ) {
    const r = (t + n) >>> 1;
    Yt(ve[r]) < e ? (t = r + 1) : (n = r);
  }
  return t;
}
function Ds(e) {
  (!ve.length || !ve.includes(e, an && e.allowRecurse ? Le + 1 : Le)) &&
    e !== Dn &&
    (e.id == null ? ve.push(e) : ve.splice(Ri(e.id), 0, e), Ks());
}
function Ks() {
  !an && !Un && ((Un = !0), (gr = Bs.then(qs)));
}
function Pi(e) {
  const t = ve.indexOf(e);
  t > Le && ve.splice(t, 1);
}
function Vs(e, t, n, r) {
  $(e)
    ? n.push(...e)
    : (!t || !t.includes(e, e.allowRecurse ? r + 1 : r)) && n.push(e),
    Ks();
}
function Ai(e) {
  Vs(e, Nt, jt, mt);
}
function Mi(e) {
  Vs(e, qe, Lt, gt);
}
function xn(e, t = null) {
  if (jt.length) {
    for (
      Dn = t, Nt = [...new Set(jt)], jt.length = 0, mt = 0;
      mt < Nt.length;
      mt++
    )
      Nt[mt]();
    (Nt = null), (mt = 0), (Dn = null), xn(e, t);
  }
}
function Ws(e) {
  if ((xn(), Lt.length)) {
    const t = [...new Set(Lt)];
    if (((Lt.length = 0), qe)) {
      qe.push(...t);
      return;
    }
    for (qe = t, qe.sort((n, r) => Yt(n) - Yt(r)), gt = 0; gt < qe.length; gt++)
      qe[gt]();
    (qe = null), (gt = 0);
  }
}
const Yt = (e) => (e.id == null ? 1 / 0 : e.id);
function qs(e) {
  (Un = !1), (an = !0), xn(e), ve.sort((n, r) => Yt(n) - Yt(r));
  const t = Pe;
  try {
    for (Le = 0; Le < ve.length; Le++) {
      const n = ve[Le];
      n && n.active !== !1 && Ze(n, null, 14);
    }
  } finally {
    (Le = 0),
      (ve.length = 0),
      Ws(),
      (an = !1),
      (gr = null),
      (ve.length || jt.length || Lt.length) && qs(e);
  }
}
function zi(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || ne;
  let s = n;
  const o = t.startsWith("update:"),
    i = o && t.slice(7);
  if (i && i in r) {
    const d = `${i === "modelValue" ? "model" : i}Modifiers`,
      { number: h, trim: p } = r[d] || ne;
    p && (s = n.map((x) => x.trim())), h && (s = n.map(Do));
  }
  let u,
    l = r[(u = Mn(t))] || r[(u = Mn(wt(t)))];
  !l && o && (l = r[(u = Mn(Mt(t)))]), l && Ae(l, e, 6, s);
  const f = r[u + "Once"];
  if (f) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[u]) return;
    (e.emitted[u] = !0), Ae(f, e, 6, s);
  }
}
function Ys(e, t, n = !1) {
  const r = t.emitsCache,
    s = r.get(e);
  if (s !== void 0) return s;
  const o = e.emits;
  let i = {},
    u = !1;
  if (!j(e)) {
    const l = (f) => {
      const d = Ys(f, t, !0);
      d && ((u = !0), fe(i, d));
    };
    !n && t.mixins.length && t.mixins.forEach(l),
      e.extends && l(e.extends),
      e.mixins && e.mixins.forEach(l);
  }
  return !o && !u
    ? (r.set(e, null), null)
    : ($(o) ? o.forEach((l) => (i[l] = null)) : fe(i, o), r.set(e, i), i);
}
function wn(e, t) {
  return !e || !gn(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, "")),
      U(e, t[0].toLowerCase() + t.slice(1)) || U(e, Mt(t)) || U(e, t));
}
let be = null,
  En = null;
function fn(e) {
  const t = be;
  return (be = e), (En = (e && e.type.__scopeId) || null), t;
}
function Oi(e) {
  En = e;
}
function Ii() {
  En = null;
}
function oe(e, t = be, n) {
  if (!t || e._n) return e;
  const r = (...s) => {
    r._d && Dr(-1);
    const o = fn(t),
      i = e(...s);
    return fn(o), r._d && Dr(1), i;
  };
  return (r._n = !0), (r._c = !0), (r._d = !0), r;
}
function On(e) {
  const {
    type: t,
    vnode: n,
    proxy: r,
    withProxy: s,
    props: o,
    propsOptions: [i],
    slots: u,
    attrs: l,
    emit: f,
    render: d,
    renderCache: h,
    data: p,
    setupState: x,
    ctx: P,
    inheritAttrs: H,
  } = e;
  let O, z;
  const N = fn(e);
  try {
    if (n.shapeFlag & 4) {
      const Y = s || r;
      (O = ke(d.call(Y, Y, h, o, x, p, P))), (z = l);
    } else {
      const Y = t;
      (O = ke(
        Y.length > 1 ? Y(o, { attrs: l, slots: u, emit: f }) : Y(o, null)
      )),
        (z = t.props ? l : Ti(l));
    }
  } catch (Y) {
    (Ut.length = 0), yn(Y, e, 1), (O = q(Et));
  }
  let V = O;
  if (z && H !== !1) {
    const Y = Object.keys(z),
      { shapeFlag: de } = V;
    Y.length && de & 7 && (i && Y.some(sr) && (z = Si(z, i)), (V = Ct(V, z)));
  }
  return (
    n.dirs && ((V = Ct(V)), (V.dirs = V.dirs ? V.dirs.concat(n.dirs) : n.dirs)),
    n.transition && (V.transition = n.transition),
    (O = V),
    fn(N),
    O
  );
}
const Ti = (e) => {
    let t;
    for (const n in e)
      (n === "class" || n === "style" || gn(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  },
  Si = (e, t) => {
    const n = {};
    for (const r in e) (!sr(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
    return n;
  };
function ki(e, t, n) {
  const { props: r, children: s, component: o } = e,
    { props: i, children: u, patchFlag: l } = t,
    f = o.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (n && l >= 0) {
    if (l & 1024) return !0;
    if (l & 16) return r ? $r(r, i, f) : !!i;
    if (l & 8) {
      const d = t.dynamicProps;
      for (let h = 0; h < d.length; h++) {
        const p = d[h];
        if (i[p] !== r[p] && !wn(f, p)) return !0;
      }
    }
  } else
    return (s || u) && (!u || !u.$stable)
      ? !0
      : r === i
      ? !1
      : r
      ? i
        ? $r(r, i, f)
        : !0
      : !!i;
  return !1;
}
function $r(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length) return !0;
  for (let s = 0; s < r.length; s++) {
    const o = r[s];
    if (t[o] !== e[o] && !wn(n, o)) return !0;
  }
  return !1;
}
function $i({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; ) ((e = t.vnode).el = n), (t = t.parent);
}
const Hi = (e) => e.__isSuspense;
function Fi(e, t) {
  t && t.pendingBranch
    ? $(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : Mi(e);
}
function on(e, t) {
  if (ce) {
    let n = ce.provides;
    const r = ce.parent && ce.parent.provides;
    r === n && (n = ce.provides = Object.create(r)), (n[e] = t);
  }
}
function Ge(e, t, n = !1) {
  const r = ce || be;
  if (r) {
    const s =
      r.parent == null
        ? r.vnode.appContext && r.vnode.appContext.provides
        : r.parent.provides;
    if (s && e in s) return s[e];
    if (arguments.length > 1) return n && j(t) ? t.call(r.proxy) : t;
  }
}
const Hr = {};
function ln(e, t, n) {
  return Qs(e, t, n);
}
function Qs(
  e,
  t,
  { immediate: n, deep: r, flush: s, onTrack: o, onTrigger: i } = ne
) {
  const u = ce;
  let l,
    f = !1,
    d = !1;
  if (
    (ue(e)
      ? ((l = () => e.value), (f = Bn(e)))
      : xt(e)
      ? ((l = () => e), (r = !0))
      : $(e)
      ? ((d = !0),
        (f = e.some((z) => xt(z) || Bn(z))),
        (l = () =>
          e.map((z) => {
            if (ue(z)) return z.value;
            if (xt(z)) return vt(z);
            if (j(z)) return Ze(z, u, 2);
          })))
      : j(e)
      ? t
        ? (l = () => Ze(e, u, 2))
        : (l = () => {
            if (!(u && u.isUnmounted)) return h && h(), Ae(e, u, 3, [p]);
          })
      : (l = Pe),
    t && r)
  ) {
    const z = l;
    l = () => vt(z());
  }
  let h,
    p = (z) => {
      h = O.onStop = () => {
        Ze(z, u, 4);
      };
    };
  if (Jt)
    return (p = Pe), t ? n && Ae(t, u, 3, [l(), d ? [] : void 0, p]) : l(), Pe;
  let x = d ? [] : Hr;
  const P = () => {
    if (!!O.active)
      if (t) {
        const z = O.run();
        (r || f || (d ? z.some((N, V) => Vt(N, x[V])) : Vt(z, x))) &&
          (h && h(), Ae(t, u, 3, [z, x === Hr ? void 0 : x, p]), (x = z));
      } else O.run();
  };
  P.allowRecurse = !!t;
  let H;
  s === "sync"
    ? (H = P)
    : s === "post"
    ? (H = () => he(P, u && u.suspense))
    : (H = () => Ai(P));
  const O = new ur(l, H);
  return (
    t
      ? n
        ? P()
        : (x = O.run())
      : s === "post"
      ? he(O.run.bind(O), u && u.suspense)
      : O.run(),
    () => {
      O.stop(), u && u.scope && or(u.scope.effects, O);
    }
  );
}
function Ni(e, t, n) {
  const r = this.proxy,
    s = le(e) ? (e.includes(".") ? Js(r, e) : () => r[e]) : e.bind(r, r);
  let o;
  j(t) ? (o = t) : ((o = t.handler), (n = t));
  const i = ce;
  Rt(this);
  const u = Qs(s, o.bind(r), n);
  return i ? Rt(i) : it(), u;
}
function Js(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let s = 0; s < n.length && r; s++) r = r[n[s]];
    return r;
  };
}
function vt(e, t) {
  if (!ie(e) || e.__v_skip || ((t = t || new Set()), t.has(e))) return e;
  if ((t.add(e), ue(e))) vt(e.value, t);
  else if ($(e)) for (let n = 0; n < e.length; n++) vt(e[n], t);
  else if (vs(e) || yt(e))
    e.forEach((n) => {
      vt(n, t);
    });
  else if (xs(e)) for (const n in e) vt(e[n], t);
  return e;
}
function It(e) {
  return j(e) ? { setup: e, name: e.name } : e;
}
const Bt = (e) => !!e.type.__asyncLoader,
  Xs = (e) => e.type.__isKeepAlive;
function ji(e, t) {
  Zs(e, "a", t);
}
function Li(e, t) {
  Zs(e, "da", t);
}
function Zs(e, t, n = ce) {
  const r =
    e.__wdc ||
    (e.__wdc = () => {
      let s = n;
      for (; s; ) {
        if (s.isDeactivated) return;
        s = s.parent;
      }
      return e();
    });
  if ((Cn(t, r, n), n)) {
    let s = n.parent;
    for (; s && s.parent; )
      Xs(s.parent.vnode) && Bi(r, t, n, s), (s = s.parent);
  }
}
function Bi(e, t, n, r) {
  const s = Cn(t, e, r, !0);
  Gs(() => {
    or(r[t], s);
  }, n);
}
function Cn(e, t, n = ce, r = !1) {
  if (n) {
    const s = n[e] || (n[e] = []),
      o =
        t.__weh ||
        (t.__weh = (...i) => {
          if (n.isUnmounted) return;
          zt(), Rt(n);
          const u = Ae(t, n, e, i);
          return it(), Ot(), u;
        });
    return r ? s.unshift(o) : s.push(o), o;
  }
}
const Ue =
    (e) =>
    (t, n = ce) =>
      (!Jt || e === "sp") && Cn(e, t, n),
  Ui = Ue("bm"),
  Di = Ue("m"),
  Ki = Ue("bu"),
  Vi = Ue("u"),
  Wi = Ue("bum"),
  Gs = Ue("um"),
  qi = Ue("sp"),
  Yi = Ue("rtg"),
  Qi = Ue("rtc");
function Ji(e, t = ce) {
  Cn("ec", e, t);
}
function tt(e, t, n, r) {
  const s = e.dirs,
    o = t && t.dirs;
  for (let i = 0; i < s.length; i++) {
    const u = s[i];
    o && (u.oldValue = o[i].value);
    let l = u.dir[r];
    l && (zt(), Ae(l, n, 8, [e.el, u, e, t]), Ot());
  }
}
const Xi = Symbol();
function In(e, t, n = {}, r, s) {
  if (be.isCE || (be.parent && Bt(be.parent) && be.parent.isCE))
    return q("slot", t === "default" ? null : { name: t }, r && r());
  let o = e[t];
  o && o._c && (o._d = !1), Me();
  const i = o && eo(o(n)),
    u = gl(
      _e,
      { key: n.key || `_${t}` },
      i || (r ? r() : []),
      i && e._ === 1 ? 64 : -2
    );
  return (
    !s && u.scopeId && (u.slotScopeIds = [u.scopeId + "-s"]),
    o && o._c && (o._d = !0),
    u
  );
}
function eo(e) {
  return e.some((t) =>
    pn(t) ? !(t.type === Et || (t.type === _e && !eo(t.children))) : !0
  )
    ? e
    : null;
}
const Kn = (e) => (e ? (ho(e) ? yr(e) || e.proxy : Kn(e.parent)) : null),
  dn = fe(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Kn(e.parent),
    $root: (e) => Kn(e.root),
    $emit: (e) => e.emit,
    $options: (e) => no(e),
    $forceUpdate: (e) => e.f || (e.f = () => Ds(e.update)),
    $nextTick: (e) => e.n || (e.n = Us.bind(e.proxy)),
    $watch: (e) => Ni.bind(e),
  }),
  Zi = {
    get({ _: e }, t) {
      const {
        ctx: n,
        setupState: r,
        data: s,
        props: o,
        accessCache: i,
        type: u,
        appContext: l,
      } = e;
      let f;
      if (t[0] !== "$") {
        const x = i[t];
        if (x !== void 0)
          switch (x) {
            case 1:
              return r[t];
            case 2:
              return s[t];
            case 4:
              return n[t];
            case 3:
              return o[t];
          }
        else {
          if (r !== ne && U(r, t)) return (i[t] = 1), r[t];
          if (s !== ne && U(s, t)) return (i[t] = 2), s[t];
          if ((f = e.propsOptions[0]) && U(f, t)) return (i[t] = 3), o[t];
          if (n !== ne && U(n, t)) return (i[t] = 4), n[t];
          Vn && (i[t] = 0);
        }
      }
      const d = dn[t];
      let h, p;
      if (d) return t === "$attrs" && ye(e, "get", t), d(e);
      if ((h = u.__cssModules) && (h = h[t])) return h;
      if (n !== ne && U(n, t)) return (i[t] = 4), n[t];
      if (((p = l.config.globalProperties), U(p, t))) return p[t];
    },
    set({ _: e }, t, n) {
      const { data: r, setupState: s, ctx: o } = e;
      return s !== ne && U(s, t)
        ? ((s[t] = n), !0)
        : r !== ne && U(r, t)
        ? ((r[t] = n), !0)
        : U(e.props, t) || (t[0] === "$" && t.slice(1) in e)
        ? !1
        : ((o[t] = n), !0);
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: n,
          ctx: r,
          appContext: s,
          propsOptions: o,
        },
      },
      i
    ) {
      let u;
      return (
        !!n[i] ||
        (e !== ne && U(e, i)) ||
        (t !== ne && U(t, i)) ||
        ((u = o[0]) && U(u, i)) ||
        U(r, i) ||
        U(dn, i) ||
        U(s.config.globalProperties, i)
      );
    },
    defineProperty(e, t, n) {
      return (
        n.get != null
          ? (e._.accessCache[t] = 0)
          : U(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      );
    },
  };
let Vn = !0;
function Gi(e) {
  const t = no(e),
    n = e.proxy,
    r = e.ctx;
  (Vn = !1), t.beforeCreate && Fr(t.beforeCreate, e, "bc");
  const {
    data: s,
    computed: o,
    methods: i,
    watch: u,
    provide: l,
    inject: f,
    created: d,
    beforeMount: h,
    mounted: p,
    beforeUpdate: x,
    updated: P,
    activated: H,
    deactivated: O,
    beforeDestroy: z,
    beforeUnmount: N,
    destroyed: V,
    unmounted: Y,
    render: de,
    renderTracked: pe,
    renderTriggered: Fe,
    errorCaptured: ct,
    serverPrefetch: ze,
    expose: De,
    inheritAttrs: Ne,
    components: we,
    directives: ut,
    filters: at,
  } = t;
  if ((f && el(f, r, null, e.appContext.config.unwrapInjectedRef), i))
    for (const ee in i) {
      const Q = i[ee];
      j(Q) && (r[ee] = Q.bind(n));
    }
  if (s) {
    const ee = s.call(n, n);
    ie(ee) && (e.data = Zt(ee));
  }
  if (((Vn = !0), o))
    for (const ee in o) {
      const Q = o[ee],
        me = j(Q) ? Q.bind(n, n) : j(Q.get) ? Q.get.bind(n, n) : Pe,
        dt = !j(Q) && j(Q.set) ? Q.set.bind(n) : Pe,
        je = $e({ get: me, set: dt });
      Object.defineProperty(r, ee, {
        enumerable: !0,
        configurable: !0,
        get: () => je.value,
        set: (Oe) => (je.value = Oe),
      });
    }
  if (u) for (const ee in u) to(u[ee], r, n, ee);
  if (l) {
    const ee = j(l) ? l.call(n) : l;
    Reflect.ownKeys(ee).forEach((Q) => {
      on(Q, ee[Q]);
    });
  }
  d && Fr(d, e, "c");
  function se(ee, Q) {
    $(Q) ? Q.forEach((me) => ee(me.bind(n))) : Q && ee(Q.bind(n));
  }
  if (
    (se(Ui, h),
    se(Di, p),
    se(Ki, x),
    se(Vi, P),
    se(ji, H),
    se(Li, O),
    se(Ji, ct),
    se(Qi, pe),
    se(Yi, Fe),
    se(Wi, N),
    se(Gs, Y),
    se(qi, ze),
    $(De))
  )
    if (De.length) {
      const ee = e.exposed || (e.exposed = {});
      De.forEach((Q) => {
        Object.defineProperty(ee, Q, {
          get: () => n[Q],
          set: (me) => (n[Q] = me),
        });
      });
    } else e.exposed || (e.exposed = {});
  de && e.render === Pe && (e.render = de),
    Ne != null && (e.inheritAttrs = Ne),
    we && (e.components = we),
    ut && (e.directives = ut);
}
function el(e, t, n = Pe, r = !1) {
  $(e) && (e = Wn(e));
  for (const s in e) {
    const o = e[s];
    let i;
    ie(o)
      ? "default" in o
        ? (i = Ge(o.from || s, o.default, !0))
        : (i = Ge(o.from || s))
      : (i = Ge(o)),
      ue(i) && r
        ? Object.defineProperty(t, s, {
            enumerable: !0,
            configurable: !0,
            get: () => i.value,
            set: (u) => (i.value = u),
          })
        : (t[s] = i);
  }
}
function Fr(e, t, n) {
  Ae($(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function to(e, t, n, r) {
  const s = r.includes(".") ? Js(n, r) : () => n[r];
  if (le(e)) {
    const o = t[e];
    j(o) && ln(s, o);
  } else if (j(e)) ln(s, e.bind(n));
  else if (ie(e))
    if ($(e)) e.forEach((o) => to(o, t, n, r));
    else {
      const o = j(e.handler) ? e.handler.bind(n) : t[e.handler];
      j(o) && ln(s, o, e);
    }
}
function no(e) {
  const t = e.type,
    { mixins: n, extends: r } = t,
    {
      mixins: s,
      optionsCache: o,
      config: { optionMergeStrategies: i },
    } = e.appContext,
    u = o.get(t);
  let l;
  return (
    u
      ? (l = u)
      : !s.length && !n && !r
      ? (l = t)
      : ((l = {}), s.length && s.forEach((f) => hn(l, f, i, !0)), hn(l, t, i)),
    o.set(t, l),
    l
  );
}
function hn(e, t, n, r = !1) {
  const { mixins: s, extends: o } = t;
  o && hn(e, o, n, !0), s && s.forEach((i) => hn(e, i, n, !0));
  for (const i in t)
    if (!(r && i === "expose")) {
      const u = tl[i] || (n && n[i]);
      e[i] = u ? u(e[i], t[i]) : t[i];
    }
  return e;
}
const tl = {
  data: Nr,
  props: rt,
  emits: rt,
  methods: rt,
  computed: rt,
  beforeCreate: ae,
  created: ae,
  beforeMount: ae,
  mounted: ae,
  beforeUpdate: ae,
  updated: ae,
  beforeDestroy: ae,
  beforeUnmount: ae,
  destroyed: ae,
  unmounted: ae,
  activated: ae,
  deactivated: ae,
  errorCaptured: ae,
  serverPrefetch: ae,
  components: rt,
  directives: rt,
  watch: rl,
  provide: Nr,
  inject: nl,
};
function Nr(e, t) {
  return t
    ? e
      ? function () {
          return fe(
            j(e) ? e.call(this, this) : e,
            j(t) ? t.call(this, this) : t
          );
        }
      : t
    : e;
}
function nl(e, t) {
  return rt(Wn(e), Wn(t));
}
function Wn(e) {
  if ($(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function ae(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function rt(e, t) {
  return e ? fe(fe(Object.create(null), e), t) : t;
}
function rl(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = fe(Object.create(null), e);
  for (const r in t) n[r] = ae(e[r], t[r]);
  return n;
}
function sl(e, t, n, r = !1) {
  const s = {},
    o = {};
  un(o, Rn, 1), (e.propsDefaults = Object.create(null)), ro(e, t, s, o);
  for (const i in e.propsOptions[0]) i in s || (s[i] = void 0);
  n ? (e.props = r ? s : vi(s)) : e.type.props ? (e.props = s) : (e.props = o),
    (e.attrs = o);
}
function ol(e, t, n, r) {
  const {
      props: s,
      attrs: o,
      vnode: { patchFlag: i },
    } = e,
    u = W(s),
    [l] = e.propsOptions;
  let f = !1;
  if ((r || i > 0) && !(i & 16)) {
    if (i & 8) {
      const d = e.vnode.dynamicProps;
      for (let h = 0; h < d.length; h++) {
        let p = d[h];
        if (wn(e.emitsOptions, p)) continue;
        const x = t[p];
        if (l)
          if (U(o, p)) x !== o[p] && ((o[p] = x), (f = !0));
          else {
            const P = wt(p);
            s[P] = qn(l, u, P, x, e, !1);
          }
        else x !== o[p] && ((o[p] = x), (f = !0));
      }
    }
  } else {
    ro(e, t, s, o) && (f = !0);
    let d;
    for (const h in u)
      (!t || (!U(t, h) && ((d = Mt(h)) === h || !U(t, d)))) &&
        (l
          ? n &&
            (n[h] !== void 0 || n[d] !== void 0) &&
            (s[h] = qn(l, u, h, void 0, e, !0))
          : delete s[h]);
    if (o !== u)
      for (const h in o) (!t || (!U(t, h) && !0)) && (delete o[h], (f = !0));
  }
  f && Be(e, "set", "$attrs");
}
function ro(e, t, n, r) {
  const [s, o] = e.propsOptions;
  let i = !1,
    u;
  if (t)
    for (let l in t) {
      if (sn(l)) continue;
      const f = t[l];
      let d;
      s && U(s, (d = wt(l)))
        ? !o || !o.includes(d)
          ? (n[d] = f)
          : ((u || (u = {}))[d] = f)
        : wn(e.emitsOptions, l) ||
          ((!(l in r) || f !== r[l]) && ((r[l] = f), (i = !0)));
    }
  if (o) {
    const l = W(n),
      f = u || ne;
    for (let d = 0; d < o.length; d++) {
      const h = o[d];
      n[h] = qn(s, l, h, f[h], e, !U(f, h));
    }
  }
  return i;
}
function qn(e, t, n, r, s, o) {
  const i = e[n];
  if (i != null) {
    const u = U(i, "default");
    if (u && r === void 0) {
      const l = i.default;
      if (i.type !== Function && j(l)) {
        const { propsDefaults: f } = s;
        n in f ? (r = f[n]) : (Rt(s), (r = f[n] = l.call(null, t)), it());
      } else r = l;
    }
    i[0] &&
      (o && !u ? (r = !1) : i[1] && (r === "" || r === Mt(n)) && (r = !0));
  }
  return r;
}
function so(e, t, n = !1) {
  const r = t.propsCache,
    s = r.get(e);
  if (s) return s;
  const o = e.props,
    i = {},
    u = [];
  let l = !1;
  if (!j(e)) {
    const d = (h) => {
      l = !0;
      const [p, x] = so(h, t, !0);
      fe(i, p), x && u.push(...x);
    };
    !n && t.mixins.length && t.mixins.forEach(d),
      e.extends && d(e.extends),
      e.mixins && e.mixins.forEach(d);
  }
  if (!o && !l) return r.set(e, bt), bt;
  if ($(o))
    for (let d = 0; d < o.length; d++) {
      const h = wt(o[d]);
      jr(h) && (i[h] = ne);
    }
  else if (o)
    for (const d in o) {
      const h = wt(d);
      if (jr(h)) {
        const p = o[d],
          x = (i[h] = $(p) || j(p) ? { type: p } : p);
        if (x) {
          const P = Ur(Boolean, x.type),
            H = Ur(String, x.type);
          (x[0] = P > -1),
            (x[1] = H < 0 || P < H),
            (P > -1 || U(x, "default")) && u.push(h);
        }
      }
    }
  const f = [i, u];
  return r.set(e, f), f;
}
function jr(e) {
  return e[0] !== "$";
}
function Lr(e) {
  const t = e && e.toString().match(/^\s*function (\w+)/);
  return t ? t[1] : e === null ? "null" : "";
}
function Br(e, t) {
  return Lr(e) === Lr(t);
}
function Ur(e, t) {
  return $(t) ? t.findIndex((n) => Br(n, e)) : j(t) && Br(t, e) ? 0 : -1;
}
const oo = (e) => e[0] === "_" || e === "$stable",
  _r = (e) => ($(e) ? e.map(ke) : [ke(e)]),
  il = (e, t, n) => {
    if (t._n) return t;
    const r = oe((...s) => _r(t(...s)), n);
    return (r._c = !1), r;
  },
  io = (e, t, n) => {
    const r = e._ctx;
    for (const s in e) {
      if (oo(s)) continue;
      const o = e[s];
      if (j(o)) t[s] = il(s, o, r);
      else if (o != null) {
        const i = _r(o);
        t[s] = () => i;
      }
    }
  },
  lo = (e, t) => {
    const n = _r(t);
    e.slots.default = () => n;
  },
  ll = (e, t) => {
    if (e.vnode.shapeFlag & 32) {
      const n = t._;
      n ? ((e.slots = W(t)), un(t, "_", n)) : io(t, (e.slots = {}));
    } else (e.slots = {}), t && lo(e, t);
    un(e.slots, Rn, 1);
  },
  cl = (e, t, n) => {
    const { vnode: r, slots: s } = e;
    let o = !0,
      i = ne;
    if (r.shapeFlag & 32) {
      const u = t._;
      u
        ? n && u === 1
          ? (o = !1)
          : (fe(s, t), !n && u === 1 && delete s._)
        : ((o = !t.$stable), io(t, s)),
        (i = t);
    } else t && (lo(e, t), (i = { default: 1 }));
    if (o) for (const u in s) !oo(u) && !(u in i) && delete s[u];
  };
function co() {
  return {
    app: null,
    config: {
      isNativeTag: Fo,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  };
}
let ul = 0;
function al(e, t) {
  return function (r, s = null) {
    j(r) || (r = Object.assign({}, r)), s != null && !ie(s) && (s = null);
    const o = co(),
      i = new Set();
    let u = !1;
    const l = (o.app = {
      _uid: ul++,
      _component: r,
      _props: s,
      _container: null,
      _context: o,
      _instance: null,
      version: Ml,
      get config() {
        return o.config;
      },
      set config(f) {},
      use(f, ...d) {
        return (
          i.has(f) ||
            (f && j(f.install)
              ? (i.add(f), f.install(l, ...d))
              : j(f) && (i.add(f), f(l, ...d))),
          l
        );
      },
      mixin(f) {
        return o.mixins.includes(f) || o.mixins.push(f), l;
      },
      component(f, d) {
        return d ? ((o.components[f] = d), l) : o.components[f];
      },
      directive(f, d) {
        return d ? ((o.directives[f] = d), l) : o.directives[f];
      },
      mount(f, d, h) {
        if (!u) {
          const p = q(r, s);
          return (
            (p.appContext = o),
            d && t ? t(p, f) : e(p, f, h),
            (u = !0),
            (l._container = f),
            (f.__vue_app__ = l),
            yr(p.component) || p.component.proxy
          );
        }
      },
      unmount() {
        u && (e(null, l._container), delete l._container.__vue_app__);
      },
      provide(f, d) {
        return (o.provides[f] = d), l;
      },
    });
    return l;
  };
}
function Yn(e, t, n, r, s = !1) {
  if ($(e)) {
    e.forEach((p, x) => Yn(p, t && ($(t) ? t[x] : t), n, r, s));
    return;
  }
  if (Bt(r) && !s) return;
  const o = r.shapeFlag & 4 ? yr(r.component) || r.component.proxy : r.el,
    i = s ? null : o,
    { i: u, r: l } = e,
    f = t && t.r,
    d = u.refs === ne ? (u.refs = {}) : u.refs,
    h = u.setupState;
  if (
    (f != null &&
      f !== l &&
      (le(f)
        ? ((d[f] = null), U(h, f) && (h[f] = null))
        : ue(f) && (f.value = null)),
    j(l))
  )
    Ze(l, u, 12, [i, d]);
  else {
    const p = le(l),
      x = ue(l);
    if (p || x) {
      const P = () => {
        if (e.f) {
          const H = p ? d[l] : l.value;
          s
            ? $(H) && or(H, o)
            : $(H)
            ? H.includes(o) || H.push(o)
            : p
            ? ((d[l] = [o]), U(h, l) && (h[l] = d[l]))
            : ((l.value = [o]), e.k && (d[e.k] = l.value));
        } else
          p
            ? ((d[l] = i), U(h, l) && (h[l] = i))
            : x && ((l.value = i), e.k && (d[e.k] = i));
      };
      i ? ((P.id = -1), he(P, n)) : P();
    }
  }
}
const he = Fi;
function fl(e) {
  return dl(e);
}
function dl(e, t) {
  const n = Ko();
  n.__VUE__ = !0;
  const {
      insert: r,
      remove: s,
      patchProp: o,
      createElement: i,
      createText: u,
      createComment: l,
      setText: f,
      setElementText: d,
      parentNode: h,
      nextSibling: p,
      setScopeId: x = Pe,
      cloneNode: P,
      insertStaticContent: H,
    } = e,
    O = (
      c,
      a,
      m,
      v = null,
      _ = null,
      w = null,
      R = !1,
      y = null,
      E = !!a.dynamicChildren
    ) => {
      if (c === a) return;
      c && !kt(c, a) && ((v = I(c)), xe(c, _, w, !0), (c = null)),
        a.patchFlag === -2 && ((E = !1), (a.dynamicChildren = null));
      const { type: b, ref: T, shapeFlag: A } = a;
      switch (b) {
        case vr:
          z(c, a, m, v);
          break;
        case Et:
          N(c, a, m, v);
          break;
        case Tn:
          c == null && V(a, m, v, R);
          break;
        case _e:
          ut(c, a, m, v, _, w, R, y, E);
          break;
        default:
          A & 1
            ? pe(c, a, m, v, _, w, R, y, E)
            : A & 6
            ? at(c, a, m, v, _, w, R, y, E)
            : (A & 64 || A & 128) && b.process(c, a, m, v, _, w, R, y, E, te);
      }
      T != null && _ && Yn(T, c && c.ref, w, a || c, !a);
    },
    z = (c, a, m, v) => {
      if (c == null) r((a.el = u(a.children)), m, v);
      else {
        const _ = (a.el = c.el);
        a.children !== c.children && f(_, a.children);
      }
    },
    N = (c, a, m, v) => {
      c == null ? r((a.el = l(a.children || "")), m, v) : (a.el = c.el);
    },
    V = (c, a, m, v) => {
      [c.el, c.anchor] = H(c.children, a, m, v, c.el, c.anchor);
    },
    Y = ({ el: c, anchor: a }, m, v) => {
      let _;
      for (; c && c !== a; ) (_ = p(c)), r(c, m, v), (c = _);
      r(a, m, v);
    },
    de = ({ el: c, anchor: a }) => {
      let m;
      for (; c && c !== a; ) (m = p(c)), s(c), (c = m);
      s(a);
    },
    pe = (c, a, m, v, _, w, R, y, E) => {
      (R = R || a.type === "svg"),
        c == null ? Fe(a, m, v, _, w, R, y, E) : De(c, a, _, w, R, y, E);
    },
    Fe = (c, a, m, v, _, w, R, y) => {
      let E, b;
      const {
        type: T,
        props: A,
        shapeFlag: S,
        transition: k,
        patchFlag: K,
        dirs: X,
      } = c;
      if (c.el && P !== void 0 && K === -1) E = c.el = P(c.el);
      else {
        if (
          ((E = c.el = i(c.type, w, A && A.is, A)),
          S & 8
            ? d(E, c.children)
            : S & 16 &&
              ze(c.children, E, null, v, _, w && T !== "foreignObject", R, y),
          X && tt(c, null, v, "created"),
          A)
        ) {
          for (const re in A)
            re !== "value" &&
              !sn(re) &&
              o(E, re, null, A[re], w, c.children, v, _, C);
          "value" in A && o(E, "value", null, A.value),
            (b = A.onVnodeBeforeMount) && Te(b, v, c);
        }
        ct(E, c, c.scopeId, R, v);
      }
      X && tt(c, null, v, "beforeMount");
      const Z = (!_ || (_ && !_.pendingBranch)) && k && !k.persisted;
      Z && k.beforeEnter(E),
        r(E, a, m),
        ((b = A && A.onVnodeMounted) || Z || X) &&
          he(() => {
            b && Te(b, v, c), Z && k.enter(E), X && tt(c, null, v, "mounted");
          }, _);
    },
    ct = (c, a, m, v, _) => {
      if ((m && x(c, m), v)) for (let w = 0; w < v.length; w++) x(c, v[w]);
      if (_) {
        let w = _.subTree;
        if (a === w) {
          const R = _.vnode;
          ct(c, R, R.scopeId, R.slotScopeIds, _.parent);
        }
      }
    },
    ze = (c, a, m, v, _, w, R, y, E = 0) => {
      for (let b = E; b < c.length; b++) {
        const T = (c[b] = y ? Ye(c[b]) : ke(c[b]));
        O(null, T, a, m, v, _, w, R, y);
      }
    },
    De = (c, a, m, v, _, w, R) => {
      const y = (a.el = c.el);
      let { patchFlag: E, dynamicChildren: b, dirs: T } = a;
      E |= c.patchFlag & 16;
      const A = c.props || ne,
        S = a.props || ne;
      let k;
      m && nt(m, !1),
        (k = S.onVnodeBeforeUpdate) && Te(k, m, a, c),
        T && tt(a, c, m, "beforeUpdate"),
        m && nt(m, !0);
      const K = _ && a.type !== "foreignObject";
      if (
        (b
          ? Ne(c.dynamicChildren, b, y, m, v, K, w)
          : R || me(c, a, y, null, m, v, K, w, !1),
        E > 0)
      ) {
        if (E & 16) we(y, a, A, S, m, v, _);
        else if (
          (E & 2 && A.class !== S.class && o(y, "class", null, S.class, _),
          E & 4 && o(y, "style", A.style, S.style, _),
          E & 8)
        ) {
          const X = a.dynamicProps;
          for (let Z = 0; Z < X.length; Z++) {
            const re = X[Z],
              Ee = A[re],
              ht = S[re];
            (ht !== Ee || re === "value") &&
              o(y, re, Ee, ht, _, c.children, m, v, C);
          }
        }
        E & 1 && c.children !== a.children && d(y, a.children);
      } else !R && b == null && we(y, a, A, S, m, v, _);
      ((k = S.onVnodeUpdated) || T) &&
        he(() => {
          k && Te(k, m, a, c), T && tt(a, c, m, "updated");
        }, v);
    },
    Ne = (c, a, m, v, _, w, R) => {
      for (let y = 0; y < a.length; y++) {
        const E = c[y],
          b = a[y],
          T =
            E.el && (E.type === _e || !kt(E, b) || E.shapeFlag & 70)
              ? h(E.el)
              : m;
        O(E, b, T, null, v, _, w, R, !0);
      }
    },
    we = (c, a, m, v, _, w, R) => {
      if (m !== v) {
        for (const y in v) {
          if (sn(y)) continue;
          const E = v[y],
            b = m[y];
          E !== b && y !== "value" && o(c, y, b, E, R, a.children, _, w, C);
        }
        if (m !== ne)
          for (const y in m)
            !sn(y) && !(y in v) && o(c, y, m[y], null, R, a.children, _, w, C);
        "value" in v && o(c, "value", m.value, v.value);
      }
    },
    ut = (c, a, m, v, _, w, R, y, E) => {
      const b = (a.el = c ? c.el : u("")),
        T = (a.anchor = c ? c.anchor : u(""));
      let { patchFlag: A, dynamicChildren: S, slotScopeIds: k } = a;
      k && (y = y ? y.concat(k) : k),
        c == null
          ? (r(b, m, v), r(T, m, v), ze(a.children, m, T, _, w, R, y, E))
          : A > 0 && A & 64 && S && c.dynamicChildren
          ? (Ne(c.dynamicChildren, S, m, _, w, R, y),
            (a.key != null || (_ && a === _.subTree)) && uo(c, a, !0))
          : me(c, a, m, T, _, w, R, y, E);
    },
    at = (c, a, m, v, _, w, R, y, E) => {
      (a.slotScopeIds = y),
        c == null
          ? a.shapeFlag & 512
            ? _.ctx.activate(a, m, v, R, E)
            : ft(a, m, v, _, w, R, E)
          : se(c, a, E);
    },
    ft = (c, a, m, v, _, w, R) => {
      const y = (c.component = wl(c, v, _));
      if ((Xs(c) && (y.ctx.renderer = te), El(y), y.asyncDep)) {
        if ((_ && _.registerDep(y, ee), !c.el)) {
          const E = (y.subTree = q(Et));
          N(null, E, a, m);
        }
        return;
      }
      ee(y, c, a, m, _, w, R);
    },
    se = (c, a, m) => {
      const v = (a.component = c.component);
      if (ki(c, a, m))
        if (v.asyncDep && !v.asyncResolved) {
          Q(v, a, m);
          return;
        } else (v.next = a), Pi(v.update), v.update();
      else (a.el = c.el), (v.vnode = a);
    },
    ee = (c, a, m, v, _, w, R) => {
      const y = () => {
          if (c.isMounted) {
            let { next: T, bu: A, u: S, parent: k, vnode: K } = c,
              X = T,
              Z;
            nt(c, !1),
              T ? ((T.el = K.el), Q(c, T, R)) : (T = K),
              A && zn(A),
              (Z = T.props && T.props.onVnodeBeforeUpdate) && Te(Z, k, T, K),
              nt(c, !0);
            const re = On(c),
              Ee = c.subTree;
            (c.subTree = re),
              O(Ee, re, h(Ee.el), I(Ee), c, _, w),
              (T.el = re.el),
              X === null && $i(c, re.el),
              S && he(S, _),
              (Z = T.props && T.props.onVnodeUpdated) &&
                he(() => Te(Z, k, T, K), _);
          } else {
            let T;
            const { el: A, props: S } = a,
              { bm: k, m: K, parent: X } = c,
              Z = Bt(a);
            if (
              (nt(c, !1),
              k && zn(k),
              !Z && (T = S && S.onVnodeBeforeMount) && Te(T, X, a),
              nt(c, !0),
              A && F)
            ) {
              const re = () => {
                (c.subTree = On(c)), F(A, c.subTree, c, _, null);
              };
              Z
                ? a.type.__asyncLoader().then(() => !c.isUnmounted && re())
                : re();
            } else {
              const re = (c.subTree = On(c));
              O(null, re, m, v, c, _, w), (a.el = re.el);
            }
            if ((K && he(K, _), !Z && (T = S && S.onVnodeMounted))) {
              const re = a;
              he(() => Te(T, X, re), _);
            }
            (a.shapeFlag & 256 ||
              (X && Bt(X.vnode) && X.vnode.shapeFlag & 256)) &&
              c.a &&
              he(c.a, _),
              (c.isMounted = !0),
              (a = m = v = null);
          }
        },
        E = (c.effect = new ur(y, () => Ds(b), c.scope)),
        b = (c.update = () => E.run());
      (b.id = c.uid), nt(c, !0), b();
    },
    Q = (c, a, m) => {
      a.component = c;
      const v = c.vnode.props;
      (c.vnode = a),
        (c.next = null),
        ol(c, a.props, v, m),
        cl(c, a.children, m),
        zt(),
        xn(void 0, c.update),
        Ot();
    },
    me = (c, a, m, v, _, w, R, y, E = !1) => {
      const b = c && c.children,
        T = c ? c.shapeFlag : 0,
        A = a.children,
        { patchFlag: S, shapeFlag: k } = a;
      if (S > 0) {
        if (S & 128) {
          je(b, A, m, v, _, w, R, y, E);
          return;
        } else if (S & 256) {
          dt(b, A, m, v, _, w, R, y, E);
          return;
        }
      }
      k & 8
        ? (T & 16 && C(b, _, w), A !== b && d(m, A))
        : T & 16
        ? k & 16
          ? je(b, A, m, v, _, w, R, y, E)
          : C(b, _, w, !0)
        : (T & 8 && d(m, ""), k & 16 && ze(A, m, v, _, w, R, y, E));
    },
    dt = (c, a, m, v, _, w, R, y, E) => {
      (c = c || bt), (a = a || bt);
      const b = c.length,
        T = a.length,
        A = Math.min(b, T);
      let S;
      for (S = 0; S < A; S++) {
        const k = (a[S] = E ? Ye(a[S]) : ke(a[S]));
        O(c[S], k, m, null, _, w, R, y, E);
      }
      b > T ? C(c, _, w, !0, !1, A) : ze(a, m, v, _, w, R, y, E, A);
    },
    je = (c, a, m, v, _, w, R, y, E) => {
      let b = 0;
      const T = a.length;
      let A = c.length - 1,
        S = T - 1;
      for (; b <= A && b <= S; ) {
        const k = c[b],
          K = (a[b] = E ? Ye(a[b]) : ke(a[b]));
        if (kt(k, K)) O(k, K, m, null, _, w, R, y, E);
        else break;
        b++;
      }
      for (; b <= A && b <= S; ) {
        const k = c[A],
          K = (a[S] = E ? Ye(a[S]) : ke(a[S]));
        if (kt(k, K)) O(k, K, m, null, _, w, R, y, E);
        else break;
        A--, S--;
      }
      if (b > A) {
        if (b <= S) {
          const k = S + 1,
            K = k < T ? a[k].el : v;
          for (; b <= S; )
            O(null, (a[b] = E ? Ye(a[b]) : ke(a[b])), m, K, _, w, R, y, E), b++;
        }
      } else if (b > S) for (; b <= A; ) xe(c[b], _, w, !0), b++;
      else {
        const k = b,
          K = b,
          X = new Map();
        for (b = K; b <= S; b++) {
          const ge = (a[b] = E ? Ye(a[b]) : ke(a[b]));
          ge.key != null && X.set(ge.key, b);
        }
        let Z,
          re = 0;
        const Ee = S - K + 1;
        let ht = !1,
          Cr = 0;
        const St = new Array(Ee);
        for (b = 0; b < Ee; b++) St[b] = 0;
        for (b = k; b <= A; b++) {
          const ge = c[b];
          if (re >= Ee) {
            xe(ge, _, w, !0);
            continue;
          }
          let Ie;
          if (ge.key != null) Ie = X.get(ge.key);
          else
            for (Z = K; Z <= S; Z++)
              if (St[Z - K] === 0 && kt(ge, a[Z])) {
                Ie = Z;
                break;
              }
          Ie === void 0
            ? xe(ge, _, w, !0)
            : ((St[Ie - K] = b + 1),
              Ie >= Cr ? (Cr = Ie) : (ht = !0),
              O(ge, a[Ie], m, null, _, w, R, y, E),
              re++);
        }
        const Rr = ht ? hl(St) : bt;
        for (Z = Rr.length - 1, b = Ee - 1; b >= 0; b--) {
          const ge = K + b,
            Ie = a[ge],
            Pr = ge + 1 < T ? a[ge + 1].el : v;
          St[b] === 0
            ? O(null, Ie, m, Pr, _, w, R, y, E)
            : ht && (Z < 0 || b !== Rr[Z] ? Oe(Ie, m, Pr, 2) : Z--);
        }
      }
    },
    Oe = (c, a, m, v, _ = null) => {
      const { el: w, type: R, transition: y, children: E, shapeFlag: b } = c;
      if (b & 6) {
        Oe(c.component.subTree, a, m, v);
        return;
      }
      if (b & 128) {
        c.suspense.move(a, m, v);
        return;
      }
      if (b & 64) {
        R.move(c, a, m, te);
        return;
      }
      if (R === _e) {
        r(w, a, m);
        for (let A = 0; A < E.length; A++) Oe(E[A], a, m, v);
        r(c.anchor, a, m);
        return;
      }
      if (R === Tn) {
        Y(c, a, m);
        return;
      }
      if (v !== 2 && b & 1 && y)
        if (v === 0) y.beforeEnter(w), r(w, a, m), he(() => y.enter(w), _);
        else {
          const { leave: A, delayLeave: S, afterLeave: k } = y,
            K = () => r(w, a, m),
            X = () => {
              A(w, () => {
                K(), k && k();
              });
            };
          S ? S(w, K, X) : X();
        }
      else r(w, a, m);
    },
    xe = (c, a, m, v = !1, _ = !1) => {
      const {
        type: w,
        props: R,
        ref: y,
        children: E,
        dynamicChildren: b,
        shapeFlag: T,
        patchFlag: A,
        dirs: S,
      } = c;
      if ((y != null && Yn(y, null, m, c, !0), T & 256)) {
        a.ctx.deactivate(c);
        return;
      }
      const k = T & 1 && S,
        K = !Bt(c);
      let X;
      if ((K && (X = R && R.onVnodeBeforeUnmount) && Te(X, a, c), T & 6))
        M(c.component, m, v);
      else {
        if (T & 128) {
          c.suspense.unmount(m, v);
          return;
        }
        k && tt(c, null, a, "beforeUnmount"),
          T & 64
            ? c.type.remove(c, a, m, _, te, v)
            : b && (w !== _e || (A > 0 && A & 64))
            ? C(b, a, m, !1, !0)
            : ((w === _e && A & 384) || (!_ && T & 16)) && C(E, a, m),
          v && An(c);
      }
      ((K && (X = R && R.onVnodeUnmounted)) || k) &&
        he(() => {
          X && Te(X, a, c), k && tt(c, null, a, "unmounted");
        }, m);
    },
    An = (c) => {
      const { type: a, el: m, anchor: v, transition: _ } = c;
      if (a === _e) {
        g(m, v);
        return;
      }
      if (a === Tn) {
        de(c);
        return;
      }
      const w = () => {
        s(m), _ && !_.persisted && _.afterLeave && _.afterLeave();
      };
      if (c.shapeFlag & 1 && _ && !_.persisted) {
        const { leave: R, delayLeave: y } = _,
          E = () => R(m, w);
        y ? y(c.el, w, E) : E();
      } else w();
    },
    g = (c, a) => {
      let m;
      for (; c !== a; ) (m = p(c)), s(c), (c = m);
      s(a);
    },
    M = (c, a, m) => {
      const { bum: v, scope: _, update: w, subTree: R, um: y } = c;
      v && zn(v),
        _.stop(),
        w && ((w.active = !1), xe(R, c, a, m)),
        y && he(y, a),
        he(() => {
          c.isUnmounted = !0;
        }, a),
        a &&
          a.pendingBranch &&
          !a.isUnmounted &&
          c.asyncDep &&
          !c.asyncResolved &&
          c.suspenseId === a.pendingId &&
          (a.deps--, a.deps === 0 && a.resolve());
    },
    C = (c, a, m, v = !1, _ = !1, w = 0) => {
      for (let R = w; R < c.length; R++) xe(c[R], a, m, v, _);
    },
    I = (c) =>
      c.shapeFlag & 6
        ? I(c.component.subTree)
        : c.shapeFlag & 128
        ? c.suspense.next()
        : p(c.anchor || c.el),
    J = (c, a, m) => {
      c == null
        ? a._vnode && xe(a._vnode, null, null, !0)
        : O(a._vnode || null, c, a, null, null, null, m),
        Ws(),
        (a._vnode = c);
    },
    te = {
      p: O,
      um: xe,
      m: Oe,
      r: An,
      mt: ft,
      mc: ze,
      pc: me,
      pbc: Ne,
      n: I,
      o: e,
    };
  let L, F;
  return t && ([L, F] = t(te)), { render: J, hydrate: L, createApp: al(J, L) };
}
function nt({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function uo(e, t, n = !1) {
  const r = e.children,
    s = t.children;
  if ($(r) && $(s))
    for (let o = 0; o < r.length; o++) {
      const i = r[o];
      let u = s[o];
      u.shapeFlag & 1 &&
        !u.dynamicChildren &&
        ((u.patchFlag <= 0 || u.patchFlag === 32) &&
          ((u = s[o] = Ye(s[o])), (u.el = i.el)),
        n || uo(i, u));
    }
}
function hl(e) {
  const t = e.slice(),
    n = [0];
  let r, s, o, i, u;
  const l = e.length;
  for (r = 0; r < l; r++) {
    const f = e[r];
    if (f !== 0) {
      if (((s = n[n.length - 1]), e[s] < f)) {
        (t[r] = s), n.push(r);
        continue;
      }
      for (o = 0, i = n.length - 1; o < i; )
        (u = (o + i) >> 1), e[n[u]] < f ? (o = u + 1) : (i = u);
      f < e[n[o]] && (o > 0 && (t[r] = n[o - 1]), (n[o] = r));
    }
  }
  for (o = n.length, i = n[o - 1]; o-- > 0; ) (n[o] = i), (i = t[i]);
  return n;
}
const pl = (e) => e.__isTeleport,
  _e = Symbol(void 0),
  vr = Symbol(void 0),
  Et = Symbol(void 0),
  Tn = Symbol(void 0),
  Ut = [];
let Re = null;
function Me(e = !1) {
  Ut.push((Re = e ? null : []));
}
function ml() {
  Ut.pop(), (Re = Ut[Ut.length - 1] || null);
}
let Qt = 1;
function Dr(e) {
  Qt += e;
}
function ao(e) {
  return (
    (e.dynamicChildren = Qt > 0 ? Re || bt : null),
    ml(),
    Qt > 0 && Re && Re.push(e),
    e
  );
}
function He(e, t, n, r, s, o) {
  return ao(B(e, t, n, r, s, o, !0));
}
function gl(e, t, n, r, s) {
  return ao(q(e, t, n, r, s, !0));
}
function pn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function kt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Rn = "__vInternal",
  fo = ({ key: e }) => (e != null ? e : null),
  cn = ({ ref: e, ref_key: t, ref_for: n }) =>
    e != null
      ? le(e) || ue(e) || j(e)
        ? { i: be, r: e, k: t, f: !!n }
        : e
      : null;
function B(
  e,
  t = null,
  n = null,
  r = 0,
  s = null,
  o = e === _e ? 0 : 1,
  i = !1,
  u = !1
) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && fo(t),
    ref: t && cn(t),
    scopeId: En,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: o,
    patchFlag: r,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
  };
  return (
    u
      ? (br(l, n), o & 128 && e.normalize(l))
      : n && (l.shapeFlag |= le(n) ? 8 : 16),
    Qt > 0 &&
      !i &&
      Re &&
      (l.patchFlag > 0 || o & 6) &&
      l.patchFlag !== 32 &&
      Re.push(l),
    l
  );
}
const q = _l;
function _l(e, t = null, n = null, r = 0, s = null, o = !1) {
  if (((!e || e === Xi) && (e = Et), pn(e))) {
    const u = Ct(e, t, !0);
    return (
      n && br(u, n),
      Qt > 0 &&
        !o &&
        Re &&
        (u.shapeFlag & 6 ? (Re[Re.indexOf(e)] = u) : Re.push(u)),
      (u.patchFlag |= -2),
      u
    );
  }
  if ((Al(e) && (e = e.__vccOpts), t)) {
    t = vl(t);
    let { class: u, style: l } = t;
    u && !le(u) && (t.class = rr(u)),
      ie(l) && ($s(l) && !$(l) && (l = fe({}, l)), (t.style = nr(l)));
  }
  const i = le(e) ? 1 : Hi(e) ? 128 : pl(e) ? 64 : ie(e) ? 4 : j(e) ? 2 : 0;
  return B(e, t, n, r, s, i, o, !0);
}
function vl(e) {
  return e ? ($s(e) || Rn in e ? fe({}, e) : e) : null;
}
function Ct(e, t, n = !1) {
  const { props: r, ref: s, patchFlag: o, children: i } = e,
    u = t ? bl(r || {}, t) : r;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: u,
    key: u && fo(u),
    ref:
      t && t.ref ? (n && s ? ($(s) ? s.concat(cn(t)) : [s, cn(t)]) : cn(t)) : s,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: i,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== _e ? (o === -1 ? 16 : o | 16) : o,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Ct(e.ssContent),
    ssFallback: e.ssFallback && Ct(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
  };
}
function D(e = " ", t = 0) {
  return q(vr, null, e, t);
}
function ke(e) {
  return e == null || typeof e == "boolean"
    ? q(Et)
    : $(e)
    ? q(_e, null, e.slice())
    : typeof e == "object"
    ? Ye(e)
    : q(vr, null, String(e));
}
function Ye(e) {
  return e.el === null || e.memo ? e : Ct(e);
}
function br(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null) t = null;
  else if ($(t)) n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), br(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !(Rn in t)
        ? (t._ctx = be)
        : s === 3 &&
          be &&
          (be.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
    }
  else
    j(t)
      ? ((t = { default: t, _ctx: be }), (n = 32))
      : ((t = String(t)), r & 64 ? ((n = 16), (t = [D(t)])) : (n = 8));
  (e.children = t), (e.shapeFlag |= n);
}
function bl(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const s in r)
      if (s === "class")
        t.class !== r.class && (t.class = rr([t.class, r.class]));
      else if (s === "style") t.style = nr([t.style, r.style]);
      else if (gn(s)) {
        const o = t[s],
          i = r[s];
        i &&
          o !== i &&
          !($(o) && o.includes(i)) &&
          (t[s] = o ? [].concat(o, i) : i);
      } else s !== "" && (t[s] = r[s]);
  }
  return t;
}
function Te(e, t, n, r = null) {
  Ae(e, t, 7, [n, r]);
}
const yl = co();
let xl = 0;
function wl(e, t, n) {
  const r = e.type,
    s = (t ? t.appContext : e.appContext) || yl,
    o = {
      uid: xl++,
      vnode: e,
      type: r,
      parent: t,
      appContext: s,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new Es(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(s.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: so(r, s),
      emitsOptions: Ys(r, s),
      emit: null,
      emitted: null,
      propsDefaults: ne,
      inheritAttrs: r.inheritAttrs,
      ctx: ne,
      data: ne,
      props: ne,
      attrs: ne,
      slots: ne,
      refs: ne,
      setupState: ne,
      setupContext: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    };
  return (
    (o.ctx = { _: o }),
    (o.root = t ? t.root : o),
    (o.emit = zi.bind(null, o)),
    e.ce && e.ce(o),
    o
  );
}
let ce = null;
const Rt = (e) => {
    (ce = e), e.scope.on();
  },
  it = () => {
    ce && ce.scope.off(), (ce = null);
  };
function ho(e) {
  return e.vnode.shapeFlag & 4;
}
let Jt = !1;
function El(e, t = !1) {
  Jt = t;
  const { props: n, children: r } = e.vnode,
    s = ho(e);
  sl(e, n, s, t), ll(e, r);
  const o = s ? Cl(e, t) : void 0;
  return (Jt = !1), o;
}
function Cl(e, t) {
  const n = e.type;
  (e.accessCache = Object.create(null)), (e.proxy = pr(new Proxy(e.ctx, Zi)));
  const { setup: r } = n;
  if (r) {
    const s = (e.setupContext = r.length > 1 ? Pl(e) : null);
    Rt(e), zt();
    const o = Ze(r, e, 0, [e.props, s]);
    if ((Ot(), it(), bs(o))) {
      if ((o.then(it, it), t))
        return o
          .then((i) => {
            Kr(e, i, t);
          })
          .catch((i) => {
            yn(i, e, 0);
          });
      e.asyncDep = o;
    } else Kr(e, o, t);
  } else po(e, t);
}
function Kr(e, t, n) {
  j(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : ie(t) && (e.setupState = Ls(t)),
    po(e, n);
}
let Vr;
function po(e, t, n) {
  const r = e.type;
  if (!e.render) {
    if (!t && Vr && !r.render) {
      const s = r.template;
      if (s) {
        const { isCustomElement: o, compilerOptions: i } = e.appContext.config,
          { delimiters: u, compilerOptions: l } = r,
          f = fe(fe({ isCustomElement: o, delimiters: u }, i), l);
        r.render = Vr(s, f);
      }
    }
    e.render = r.render || Pe;
  }
  Rt(e), zt(), Gi(e), Ot(), it();
}
function Rl(e) {
  return new Proxy(e.attrs, {
    get(t, n) {
      return ye(e, "get", "$attrs"), t[n];
    },
  });
}
function Pl(e) {
  const t = (r) => {
    e.exposed = r || {};
  };
  let n;
  return {
    get attrs() {
      return n || (n = Rl(e));
    },
    slots: e.slots,
    emit: e.emit,
    expose: t,
  };
}
function yr(e) {
  if (e.exposed)
    return (
      e.exposeProxy ||
      (e.exposeProxy = new Proxy(Ls(pr(e.exposed)), {
        get(t, n) {
          if (n in t) return t[n];
          if (n in dn) return dn[n](e);
        },
      }))
    );
}
function Al(e) {
  return j(e) && "__vccOpts" in e;
}
const $e = (e, t) => Ei(e, t, Jt);
function mo(e, t, n) {
  const r = arguments.length;
  return r === 2
    ? ie(t) && !$(t)
      ? pn(t)
        ? q(e, null, [t])
        : q(e, t)
      : q(e, null, t)
    : (r > 3
        ? (n = Array.prototype.slice.call(arguments, 2))
        : r === 3 && pn(n) && (n = [n]),
      q(e, t, n));
}
const Ml = "3.2.37",
  zl = "http://www.w3.org/2000/svg",
  st = typeof document != "undefined" ? document : null,
  Wr = st && st.createElement("template"),
  Ol = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, r) => {
      const s = t
        ? st.createElementNS(zl, e)
        : st.createElement(e, n ? { is: n } : void 0);
      return (
        e === "select" &&
          r &&
          r.multiple != null &&
          s.setAttribute("multiple", r.multiple),
        s
      );
    },
    createText: (e) => st.createTextNode(e),
    createComment: (e) => st.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => st.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "");
    },
    cloneNode(e) {
      const t = e.cloneNode(!0);
      return "_value" in e && (t._value = e._value), t;
    },
    insertStaticContent(e, t, n, r, s, o) {
      const i = n ? n.previousSibling : t.lastChild;
      if (s && (s === o || s.nextSibling))
        for (
          ;
          t.insertBefore(s.cloneNode(!0), n),
            !(s === o || !(s = s.nextSibling));

        );
      else {
        Wr.innerHTML = r ? `<svg>${e}</svg>` : e;
        const u = Wr.content;
        if (r) {
          const l = u.firstChild;
          for (; l.firstChild; ) u.appendChild(l.firstChild);
          u.removeChild(l);
        }
        t.insertBefore(u, n);
      }
      return [
        i ? i.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild,
      ];
    },
  };
function Il(e, t, n) {
  const r = e._vtc;
  r && (t = (t ? [t, ...r] : [...r]).join(" ")),
    t == null
      ? e.removeAttribute("class")
      : n
      ? e.setAttribute("class", t)
      : (e.className = t);
}
function Tl(e, t, n) {
  const r = e.style,
    s = le(n);
  if (n && !s) {
    for (const o in n) Qn(r, o, n[o]);
    if (t && !le(t)) for (const o in t) n[o] == null && Qn(r, o, "");
  } else {
    const o = r.display;
    s ? t !== n && (r.cssText = n) : t && e.removeAttribute("style"),
      "_vod" in e && (r.display = o);
  }
}
const qr = /\s*!important$/;
function Qn(e, t, n) {
  if ($(n)) n.forEach((r) => Qn(e, t, r));
  else if ((n == null && (n = ""), t.startsWith("--"))) e.setProperty(t, n);
  else {
    const r = Sl(e, t);
    qr.test(n)
      ? e.setProperty(Mt(r), n.replace(qr, ""), "important")
      : (e[r] = n);
  }
}
const Yr = ["Webkit", "Moz", "ms"],
  Sn = {};
function Sl(e, t) {
  const n = Sn[t];
  if (n) return n;
  let r = wt(t);
  if (r !== "filter" && r in e) return (Sn[t] = r);
  r = ws(r);
  for (let s = 0; s < Yr.length; s++) {
    const o = Yr[s] + r;
    if (o in e) return (Sn[t] = o);
  }
  return t;
}
const Qr = "http://www.w3.org/1999/xlink";
function kl(e, t, n, r, s) {
  if (r && t.startsWith("xlink:"))
    n == null
      ? e.removeAttributeNS(Qr, t.slice(6, t.length))
      : e.setAttributeNS(Qr, t, n);
  else {
    const o = To(t);
    n == null || (o && !gs(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, o ? "" : n);
  }
}
function $l(e, t, n, r, s, o, i) {
  if (t === "innerHTML" || t === "textContent") {
    r && i(r, s, o), (e[t] = n == null ? "" : n);
    return;
  }
  if (t === "value" && e.tagName !== "PROGRESS" && !e.tagName.includes("-")) {
    e._value = n;
    const l = n == null ? "" : n;
    (e.value !== l || e.tagName === "OPTION") && (e.value = l),
      n == null && e.removeAttribute(t);
    return;
  }
  let u = !1;
  if (n === "" || n == null) {
    const l = typeof e[t];
    l === "boolean"
      ? (n = gs(n))
      : n == null && l === "string"
      ? ((n = ""), (u = !0))
      : l === "number" && ((n = 0), (u = !0));
  }
  try {
    e[t] = n;
  } catch {}
  u && e.removeAttribute(t);
}
const [go, Hl] = (() => {
  let e = Date.now,
    t = !1;
  if (typeof window != "undefined") {
    Date.now() > document.createEvent("Event").timeStamp &&
      (e = performance.now.bind(performance));
    const n = navigator.userAgent.match(/firefox\/(\d+)/i);
    t = !!(n && Number(n[1]) <= 53);
  }
  return [e, t];
})();
let Jn = 0;
const Fl = Promise.resolve(),
  Nl = () => {
    Jn = 0;
  },
  jl = () => Jn || (Fl.then(Nl), (Jn = go()));
function Ll(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function Bl(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
function Ul(e, t, n, r, s = null) {
  const o = e._vei || (e._vei = {}),
    i = o[t];
  if (r && i) i.value = r;
  else {
    const [u, l] = Dl(t);
    if (r) {
      const f = (o[t] = Kl(r, s));
      Ll(e, u, f, l);
    } else i && (Bl(e, u, i, l), (o[t] = void 0));
  }
}
const Jr = /(?:Once|Passive|Capture)$/;
function Dl(e) {
  let t;
  if (Jr.test(e)) {
    t = {};
    let n;
    for (; (n = e.match(Jr)); )
      (e = e.slice(0, e.length - n[0].length)), (t[n[0].toLowerCase()] = !0);
  }
  return [Mt(e.slice(2)), t];
}
function Kl(e, t) {
  const n = (r) => {
    const s = r.timeStamp || go();
    (Hl || s >= n.attached - 1) && Ae(Vl(r, n.value), t, 5, [r]);
  };
  return (n.value = e), (n.attached = jl()), n;
}
function Vl(e, t) {
  if ($(t)) {
    const n = e.stopImmediatePropagation;
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0);
      }),
      t.map((r) => (s) => !s._stopped && r && r(s))
    );
  } else return t;
}
const Xr = /^on[a-z]/,
  Wl = (e, t, n, r, s = !1, o, i, u, l) => {
    t === "class"
      ? Il(e, r, s)
      : t === "style"
      ? Tl(e, n, r)
      : gn(t)
      ? sr(t) || Ul(e, t, n, r, i)
      : (
          t[0] === "."
            ? ((t = t.slice(1)), !0)
            : t[0] === "^"
            ? ((t = t.slice(1)), !1)
            : ql(e, t, r, s)
        )
      ? $l(e, t, r, o, i, u, l)
      : (t === "true-value"
          ? (e._trueValue = r)
          : t === "false-value" && (e._falseValue = r),
        kl(e, t, r, s));
  };
function ql(e, t, n, r) {
  return r
    ? !!(
        t === "innerHTML" ||
        t === "textContent" ||
        (t in e && Xr.test(t) && j(n))
      )
    : t === "spellcheck" ||
      t === "draggable" ||
      t === "translate" ||
      t === "form" ||
      (t === "list" && e.tagName === "INPUT") ||
      (t === "type" && e.tagName === "TEXTAREA") ||
      (Xr.test(t) && le(n))
    ? !1
    : t in e;
}
const Yl = fe({ patchProp: Wl }, Ol);
let Zr;
function Ql() {
  return Zr || (Zr = fl(Yl));
}
const Jl = (...e) => {
  const t = Ql().createApp(...e),
    { mount: n } = t;
  return (
    (t.mount = (r) => {
      const s = Xl(r);
      if (!s) return;
      const o = t._component;
      !j(o) && !o.render && !o.template && (o.template = s.innerHTML),
        (s.innerHTML = "");
      const i = n(s, !1, s instanceof SVGElement);
      return (
        s instanceof Element &&
          (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")),
        i
      );
    }),
    t
  );
};
function Xl(e) {
  return le(e) ? document.querySelector(e) : e;
}
var Zl = !1;
/*!
 * pinia v2.0.14
 * (c) 2022 Eduardo San Martin Morote
 * @license MIT
 */ const Gl = Symbol();
var Gr;
(function (e) {
  (e.direct = "direct"),
    (e.patchObject = "patch object"),
    (e.patchFunction = "patch function");
})(Gr || (Gr = {}));
function ec() {
  const e = Vo(!0),
    t = e.run(() => Ns({}));
  let n = [],
    r = [];
  const s = pr({
    install(o) {
      (s._a = o),
        o.provide(Gl, s),
        (o.config.globalProperties.$pinia = s),
        r.forEach((i) => n.push(i)),
        (r = []);
    },
    use(o) {
      return !this._a && !Zl ? r.push(o) : n.push(o), this;
    },
    _p: n,
    _a: null,
    _e: e,
    _s: new Map(),
    state: t,
  });
  return s;
}
var tc = "/assets/logo.da9b9095.svg";
/*!
 * vue-router v4.0.16
 * (c) 2022 Eduardo San Martin Morote
 * @license MIT
 */ const _o =
    typeof Symbol == "function" && typeof Symbol.toStringTag == "symbol",
  Tt = (e) => (_o ? Symbol(e) : "_vr_" + e),
  nc = Tt("rvlm"),
  es = Tt("rvd"),
  xr = Tt("r"),
  vo = Tt("rl"),
  Xn = Tt("rvl"),
  _t = typeof window != "undefined";
function rc(e) {
  return e.__esModule || (_o && e[Symbol.toStringTag] === "Module");
}
const G = Object.assign;
function kn(e, t) {
  const n = {};
  for (const r in t) {
    const s = t[r];
    n[r] = Array.isArray(s) ? s.map(e) : e(s);
  }
  return n;
}
const Dt = () => {},
  sc = /\/$/,
  oc = (e) => e.replace(sc, "");
function $n(e, t, n = "/") {
  let r,
    s = {},
    o = "",
    i = "";
  const u = t.indexOf("?"),
    l = t.indexOf("#", u > -1 ? u : 0);
  return (
    u > -1 &&
      ((r = t.slice(0, u)),
      (o = t.slice(u + 1, l > -1 ? l : t.length)),
      (s = e(o))),
    l > -1 && ((r = r || t.slice(0, l)), (i = t.slice(l, t.length))),
    (r = uc(r != null ? r : t, n)),
    { fullPath: r + (o && "?") + o + i, path: r, query: s, hash: i }
  );
}
function ic(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function ts(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase())
    ? e
    : e.slice(t.length) || "/";
}
function lc(e, t, n) {
  const r = t.matched.length - 1,
    s = n.matched.length - 1;
  return (
    r > -1 &&
    r === s &&
    Pt(t.matched[r], n.matched[s]) &&
    bo(t.params, n.params) &&
    e(t.query) === e(n.query) &&
    t.hash === n.hash
  );
}
function Pt(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function bo(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const n in e) if (!cc(e[n], t[n])) return !1;
  return !0;
}
function cc(e, t) {
  return Array.isArray(e) ? ns(e, t) : Array.isArray(t) ? ns(t, e) : e === t;
}
function ns(e, t) {
  return Array.isArray(t)
    ? e.length === t.length && e.every((n, r) => n === t[r])
    : e.length === 1 && e[0] === t;
}
function uc(e, t) {
  if (e.startsWith("/")) return e;
  if (!e) return t;
  const n = t.split("/"),
    r = e.split("/");
  let s = n.length - 1,
    o,
    i;
  for (o = 0; o < r.length; o++)
    if (((i = r[o]), !(s === 1 || i === ".")))
      if (i === "..") s--;
      else break;
  return (
    n.slice(0, s).join("/") +
    "/" +
    r.slice(o - (o === r.length ? 1 : 0)).join("/")
  );
}
var Xt;
(function (e) {
  (e.pop = "pop"), (e.push = "push");
})(Xt || (Xt = {}));
var Kt;
(function (e) {
  (e.back = "back"), (e.forward = "forward"), (e.unknown = "");
})(Kt || (Kt = {}));
function ac(e) {
  if (!e)
    if (_t) {
      const t = document.querySelector("base");
      (e = (t && t.getAttribute("href")) || "/"),
        (e = e.replace(/^\w+:\/\/[^\/]+/, ""));
    } else e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), oc(e);
}
const fc = /^[^#]+#/;
function dc(e, t) {
  return e.replace(fc, "#") + t;
}
function hc(e, t) {
  const n = document.documentElement.getBoundingClientRect(),
    r = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: r.left - n.left - (t.left || 0),
    top: r.top - n.top - (t.top || 0),
  };
}
const Pn = () => ({ left: window.pageXOffset, top: window.pageYOffset });
function pc(e) {
  let t;
  if ("el" in e) {
    const n = e.el,
      r = typeof n == "string" && n.startsWith("#"),
      s =
        typeof n == "string"
          ? r
            ? document.getElementById(n.slice(1))
            : document.querySelector(n)
          : n;
    if (!s) return;
    t = hc(s, e);
  } else t = e;
  "scrollBehavior" in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
        t.left != null ? t.left : window.pageXOffset,
        t.top != null ? t.top : window.pageYOffset
      );
}
function rs(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const Zn = new Map();
function mc(e, t) {
  Zn.set(e, t);
}
function gc(e) {
  const t = Zn.get(e);
  return Zn.delete(e), t;
}
let _c = () => location.protocol + "//" + location.host;
function yo(e, t) {
  const { pathname: n, search: r, hash: s } = t,
    o = e.indexOf("#");
  if (o > -1) {
    let u = s.includes(e.slice(o)) ? e.slice(o).length : 1,
      l = s.slice(u);
    return l[0] !== "/" && (l = "/" + l), ts(l, "");
  }
  return ts(n, e) + r + s;
}
function vc(e, t, n, r) {
  let s = [],
    o = [],
    i = null;
  const u = ({ state: p }) => {
    const x = yo(e, location),
      P = n.value,
      H = t.value;
    let O = 0;
    if (p) {
      if (((n.value = x), (t.value = p), i && i === P)) {
        i = null;
        return;
      }
      O = H ? p.position - H.position : 0;
    } else r(x);
    s.forEach((z) => {
      z(n.value, P, {
        delta: O,
        type: Xt.pop,
        direction: O ? (O > 0 ? Kt.forward : Kt.back) : Kt.unknown,
      });
    });
  };
  function l() {
    i = n.value;
  }
  function f(p) {
    s.push(p);
    const x = () => {
      const P = s.indexOf(p);
      P > -1 && s.splice(P, 1);
    };
    return o.push(x), x;
  }
  function d() {
    const { history: p } = window;
    !p.state || p.replaceState(G({}, p.state, { scroll: Pn() }), "");
  }
  function h() {
    for (const p of o) p();
    (o = []),
      window.removeEventListener("popstate", u),
      window.removeEventListener("beforeunload", d);
  }
  return (
    window.addEventListener("popstate", u),
    window.addEventListener("beforeunload", d),
    { pauseListeners: l, listen: f, destroy: h }
  );
}
function ss(e, t, n, r = !1, s = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: r,
    position: window.history.length,
    scroll: s ? Pn() : null,
  };
}
function bc(e) {
  const { history: t, location: n } = window,
    r = { value: yo(e, n) },
    s = { value: t.state };
  s.value ||
    o(
      r.value,
      {
        back: null,
        current: r.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null,
      },
      !0
    );
  function o(l, f, d) {
    const h = e.indexOf("#"),
      p =
        h > -1
          ? (n.host && document.querySelector("base") ? e : e.slice(h)) + l
          : _c() + e + l;
    try {
      t[d ? "replaceState" : "pushState"](f, "", p), (s.value = f);
    } catch (x) {
      console.error(x), n[d ? "replace" : "assign"](p);
    }
  }
  function i(l, f) {
    const d = G({}, t.state, ss(s.value.back, l, s.value.forward, !0), f, {
      position: s.value.position,
    });
    o(l, d, !0), (r.value = l);
  }
  function u(l, f) {
    const d = G({}, s.value, t.state, { forward: l, scroll: Pn() });
    o(d.current, d, !0);
    const h = G({}, ss(r.value, l, null), { position: d.position + 1 }, f);
    o(l, h, !1), (r.value = l);
  }
  return { location: r, state: s, push: u, replace: i };
}
function yc(e) {
  e = ac(e);
  const t = bc(e),
    n = vc(e, t.state, t.location, t.replace);
  function r(o, i = !0) {
    i || n.pauseListeners(), history.go(o);
  }
  const s = G(
    { location: "", base: e, go: r, createHref: dc.bind(null, e) },
    t,
    n
  );
  return (
    Object.defineProperty(s, "location", {
      enumerable: !0,
      get: () => t.location.value,
    }),
    Object.defineProperty(s, "state", {
      enumerable: !0,
      get: () => t.state.value,
    }),
    s
  );
}
function xc(e) {
  return typeof e == "string" || (e && typeof e == "object");
}
function xo(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const Ve = {
    path: "/",
    name: void 0,
    params: {},
    query: {},
    hash: "",
    fullPath: "/",
    matched: [],
    meta: {},
    redirectedFrom: void 0,
  },
  wo = Tt("nf");
var os;
(function (e) {
  (e[(e.aborted = 4)] = "aborted"),
    (e[(e.cancelled = 8)] = "cancelled"),
    (e[(e.duplicated = 16)] = "duplicated");
})(os || (os = {}));
function At(e, t) {
  return G(new Error(), { type: e, [wo]: !0 }, t);
}
function We(e, t) {
  return e instanceof Error && wo in e && (t == null || !!(e.type & t));
}
const is = "[^/]+?",
  wc = { sensitive: !1, strict: !1, start: !0, end: !0 },
  Ec = /[.+*?^${}()[\]/\\]/g;
function Cc(e, t) {
  const n = G({}, wc, t),
    r = [];
  let s = n.start ? "^" : "";
  const o = [];
  for (const f of e) {
    const d = f.length ? [] : [90];
    n.strict && !f.length && (s += "/");
    for (let h = 0; h < f.length; h++) {
      const p = f[h];
      let x = 40 + (n.sensitive ? 0.25 : 0);
      if (p.type === 0)
        h || (s += "/"), (s += p.value.replace(Ec, "\\$&")), (x += 40);
      else if (p.type === 1) {
        const { value: P, repeatable: H, optional: O, regexp: z } = p;
        o.push({ name: P, repeatable: H, optional: O });
        const N = z || is;
        if (N !== is) {
          x += 10;
          try {
            new RegExp(`(${N})`);
          } catch (Y) {
            throw new Error(
              `Invalid custom RegExp for param "${P}" (${N}): ` + Y.message
            );
          }
        }
        let V = H ? `((?:${N})(?:/(?:${N}))*)` : `(${N})`;
        h || (V = O && f.length < 2 ? `(?:/${V})` : "/" + V),
          O && (V += "?"),
          (s += V),
          (x += 20),
          O && (x += -8),
          H && (x += -20),
          N === ".*" && (x += -50);
      }
      d.push(x);
    }
    r.push(d);
  }
  if (n.strict && n.end) {
    const f = r.length - 1;
    r[f][r[f].length - 1] += 0.7000000000000001;
  }
  n.strict || (s += "/?"), n.end ? (s += "$") : n.strict && (s += "(?:/|$)");
  const i = new RegExp(s, n.sensitive ? "" : "i");
  function u(f) {
    const d = f.match(i),
      h = {};
    if (!d) return null;
    for (let p = 1; p < d.length; p++) {
      const x = d[p] || "",
        P = o[p - 1];
      h[P.name] = x && P.repeatable ? x.split("/") : x;
    }
    return h;
  }
  function l(f) {
    let d = "",
      h = !1;
    for (const p of e) {
      (!h || !d.endsWith("/")) && (d += "/"), (h = !1);
      for (const x of p)
        if (x.type === 0) d += x.value;
        else if (x.type === 1) {
          const { value: P, repeatable: H, optional: O } = x,
            z = P in f ? f[P] : "";
          if (Array.isArray(z) && !H)
            throw new Error(
              `Provided param "${P}" is an array but it is not repeatable (* or + modifiers)`
            );
          const N = Array.isArray(z) ? z.join("/") : z;
          if (!N)
            if (O)
              p.length < 2 &&
                e.length > 1 &&
                (d.endsWith("/") ? (d = d.slice(0, -1)) : (h = !0));
            else throw new Error(`Missing required param "${P}"`);
          d += N;
        }
    }
    return d;
  }
  return { re: i, score: r, keys: o, parse: u, stringify: l };
}
function Rc(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const r = t[n] - e[n];
    if (r) return r;
    n++;
  }
  return e.length < t.length
    ? e.length === 1 && e[0] === 40 + 40
      ? -1
      : 1
    : e.length > t.length
    ? t.length === 1 && t[0] === 40 + 40
      ? 1
      : -1
    : 0;
}
function Pc(e, t) {
  let n = 0;
  const r = e.score,
    s = t.score;
  for (; n < r.length && n < s.length; ) {
    const o = Rc(r[n], s[n]);
    if (o) return o;
    n++;
  }
  if (Math.abs(s.length - r.length) === 1) {
    if (ls(r)) return 1;
    if (ls(s)) return -1;
  }
  return s.length - r.length;
}
function ls(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const Ac = { type: 0, value: "" },
  Mc = /[a-zA-Z0-9_]/;
function zc(e) {
  if (!e) return [[]];
  if (e === "/") return [[Ac]];
  if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);
  function t(x) {
    throw new Error(`ERR (${n})/"${f}": ${x}`);
  }
  let n = 0,
    r = n;
  const s = [];
  let o;
  function i() {
    o && s.push(o), (o = []);
  }
  let u = 0,
    l,
    f = "",
    d = "";
  function h() {
    !f ||
      (n === 0
        ? o.push({ type: 0, value: f })
        : n === 1 || n === 2 || n === 3
        ? (o.length > 1 &&
            (l === "*" || l === "+") &&
            t(
              `A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`
            ),
          o.push({
            type: 1,
            value: f,
            regexp: d,
            repeatable: l === "*" || l === "+",
            optional: l === "*" || l === "?",
          }))
        : t("Invalid state to consume buffer"),
      (f = ""));
  }
  function p() {
    f += l;
  }
  for (; u < e.length; ) {
    if (((l = e[u++]), l === "\\" && n !== 2)) {
      (r = n), (n = 4);
      continue;
    }
    switch (n) {
      case 0:
        l === "/" ? (f && h(), i()) : l === ":" ? (h(), (n = 1)) : p();
        break;
      case 4:
        p(), (n = r);
        break;
      case 1:
        l === "("
          ? (n = 2)
          : Mc.test(l)
          ? p()
          : (h(), (n = 0), l !== "*" && l !== "?" && l !== "+" && u--);
        break;
      case 2:
        l === ")"
          ? d[d.length - 1] == "\\"
            ? (d = d.slice(0, -1) + l)
            : (n = 3)
          : (d += l);
        break;
      case 3:
        h(), (n = 0), l !== "*" && l !== "?" && l !== "+" && u--, (d = "");
        break;
      default:
        t("Unknown state");
        break;
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${f}"`), h(), i(), s;
}
function Oc(e, t, n) {
  const r = Cc(zc(e.path), n),
    s = G(r, { record: e, parent: t, children: [], alias: [] });
  return t && !s.record.aliasOf == !t.record.aliasOf && t.children.push(s), s;
}
function Ic(e, t) {
  const n = [],
    r = new Map();
  t = us({ strict: !1, end: !0, sensitive: !1 }, t);
  function s(d) {
    return r.get(d);
  }
  function o(d, h, p) {
    const x = !p,
      P = Sc(d);
    P.aliasOf = p && p.record;
    const H = us(t, d),
      O = [P];
    if ("alias" in d) {
      const V = typeof d.alias == "string" ? [d.alias] : d.alias;
      for (const Y of V)
        O.push(
          G({}, P, {
            components: p ? p.record.components : P.components,
            path: Y,
            aliasOf: p ? p.record : P,
          })
        );
    }
    let z, N;
    for (const V of O) {
      const { path: Y } = V;
      if (h && Y[0] !== "/") {
        const de = h.record.path,
          pe = de[de.length - 1] === "/" ? "" : "/";
        V.path = h.record.path + (Y && pe + Y);
      }
      if (
        ((z = Oc(V, h, H)),
        p
          ? p.alias.push(z)
          : ((N = N || z),
            N !== z && N.alias.push(z),
            x && d.name && !cs(z) && i(d.name)),
        "children" in P)
      ) {
        const de = P.children;
        for (let pe = 0; pe < de.length; pe++)
          o(de[pe], z, p && p.children[pe]);
      }
      (p = p || z), l(z);
    }
    return N
      ? () => {
          i(N);
        }
      : Dt;
  }
  function i(d) {
    if (xo(d)) {
      const h = r.get(d);
      h &&
        (r.delete(d),
        n.splice(n.indexOf(h), 1),
        h.children.forEach(i),
        h.alias.forEach(i));
    } else {
      const h = n.indexOf(d);
      h > -1 &&
        (n.splice(h, 1),
        d.record.name && r.delete(d.record.name),
        d.children.forEach(i),
        d.alias.forEach(i));
    }
  }
  function u() {
    return n;
  }
  function l(d) {
    let h = 0;
    for (
      ;
      h < n.length &&
      Pc(d, n[h]) >= 0 &&
      (d.record.path !== n[h].record.path || !Eo(d, n[h]));

    )
      h++;
    n.splice(h, 0, d), d.record.name && !cs(d) && r.set(d.record.name, d);
  }
  function f(d, h) {
    let p,
      x = {},
      P,
      H;
    if ("name" in d && d.name) {
      if (((p = r.get(d.name)), !p)) throw At(1, { location: d });
      (H = p.record.name),
        (x = G(
          Tc(
            h.params,
            p.keys.filter((N) => !N.optional).map((N) => N.name)
          ),
          d.params
        )),
        (P = p.stringify(x));
    } else if ("path" in d)
      (P = d.path),
        (p = n.find((N) => N.re.test(P))),
        p && ((x = p.parse(P)), (H = p.record.name));
    else {
      if (((p = h.name ? r.get(h.name) : n.find((N) => N.re.test(h.path))), !p))
        throw At(1, { location: d, currentLocation: h });
      (H = p.record.name),
        (x = G({}, h.params, d.params)),
        (P = p.stringify(x));
    }
    const O = [];
    let z = p;
    for (; z; ) O.unshift(z.record), (z = z.parent);
    return { name: H, path: P, params: x, matched: O, meta: $c(O) };
  }
  return (
    e.forEach((d) => o(d)),
    {
      addRoute: o,
      resolve: f,
      removeRoute: i,
      getRoutes: u,
      getRecordMatcher: s,
    }
  );
}
function Tc(e, t) {
  const n = {};
  for (const r of t) r in e && (n[r] = e[r]);
  return n;
}
function Sc(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: kc(e),
    children: e.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components:
      "components" in e ? e.components || {} : { default: e.component },
  };
}
function kc(e) {
  const t = {},
    n = e.props || !1;
  if ("component" in e) t.default = n;
  else for (const r in e.components) t[r] = typeof n == "boolean" ? n : n[r];
  return t;
}
function cs(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0;
    e = e.parent;
  }
  return !1;
}
function $c(e) {
  return e.reduce((t, n) => G(t, n.meta), {});
}
function us(e, t) {
  const n = {};
  for (const r in e) n[r] = r in t ? t[r] : e[r];
  return n;
}
function Eo(e, t) {
  return t.children.some((n) => n === e || Eo(e, n));
}
const Co = /#/g,
  Hc = /&/g,
  Fc = /\//g,
  Nc = /=/g,
  jc = /\?/g,
  Ro = /\+/g,
  Lc = /%5B/g,
  Bc = /%5D/g,
  Po = /%5E/g,
  Uc = /%60/g,
  Ao = /%7B/g,
  Dc = /%7C/g,
  Mo = /%7D/g,
  Kc = /%20/g;
function wr(e) {
  return encodeURI("" + e)
    .replace(Dc, "|")
    .replace(Lc, "[")
    .replace(Bc, "]");
}
function Vc(e) {
  return wr(e).replace(Ao, "{").replace(Mo, "}").replace(Po, "^");
}
function Gn(e) {
  return wr(e)
    .replace(Ro, "%2B")
    .replace(Kc, "+")
    .replace(Co, "%23")
    .replace(Hc, "%26")
    .replace(Uc, "`")
    .replace(Ao, "{")
    .replace(Mo, "}")
    .replace(Po, "^");
}
function Wc(e) {
  return Gn(e).replace(Nc, "%3D");
}
function qc(e) {
  return wr(e).replace(Co, "%23").replace(jc, "%3F");
}
function Yc(e) {
  return e == null ? "" : qc(e).replace(Fc, "%2F");
}
function mn(e) {
  try {
    return decodeURIComponent("" + e);
  } catch {}
  return "" + e;
}
function Qc(e) {
  const t = {};
  if (e === "" || e === "?") return t;
  const r = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let s = 0; s < r.length; ++s) {
    const o = r[s].replace(Ro, " "),
      i = o.indexOf("="),
      u = mn(i < 0 ? o : o.slice(0, i)),
      l = i < 0 ? null : mn(o.slice(i + 1));
    if (u in t) {
      let f = t[u];
      Array.isArray(f) || (f = t[u] = [f]), f.push(l);
    } else t[u] = l;
  }
  return t;
}
function as(e) {
  let t = "";
  for (let n in e) {
    const r = e[n];
    if (((n = Wc(n)), r == null)) {
      r !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (Array.isArray(r) ? r.map((o) => o && Gn(o)) : [r && Gn(r)]).forEach(
      (o) => {
        o !== void 0 &&
          ((t += (t.length ? "&" : "") + n), o != null && (t += "=" + o));
      }
    );
  }
  return t;
}
function Jc(e) {
  const t = {};
  for (const n in e) {
    const r = e[n];
    r !== void 0 &&
      (t[n] = Array.isArray(r)
        ? r.map((s) => (s == null ? null : "" + s))
        : r == null
        ? r
        : "" + r);
  }
  return t;
}
function $t() {
  let e = [];
  function t(r) {
    return (
      e.push(r),
      () => {
        const s = e.indexOf(r);
        s > -1 && e.splice(s, 1);
      }
    );
  }
  function n() {
    e = [];
  }
  return { add: t, list: () => e, reset: n };
}
function Qe(e, t, n, r, s) {
  const o = r && (r.enterCallbacks[s] = r.enterCallbacks[s] || []);
  return () =>
    new Promise((i, u) => {
      const l = (h) => {
          h === !1
            ? u(At(4, { from: n, to: t }))
            : h instanceof Error
            ? u(h)
            : xc(h)
            ? u(At(2, { from: t, to: h }))
            : (o &&
                r.enterCallbacks[s] === o &&
                typeof h == "function" &&
                o.push(h),
              i());
        },
        f = e.call(r && r.instances[s], t, n, l);
      let d = Promise.resolve(f);
      e.length < 3 && (d = d.then(l)), d.catch((h) => u(h));
    });
}
function Hn(e, t, n, r) {
  const s = [];
  for (const o of e)
    for (const i in o.components) {
      let u = o.components[i];
      if (!(t !== "beforeRouteEnter" && !o.instances[i]))
        if (Xc(u)) {
          const f = (u.__vccOpts || u)[t];
          f && s.push(Qe(f, n, r, o, i));
        } else {
          let l = u();
          s.push(() =>
            l.then((f) => {
              if (!f)
                return Promise.reject(
                  new Error(`Couldn't resolve component "${i}" at "${o.path}"`)
                );
              const d = rc(f) ? f.default : f;
              o.components[i] = d;
              const p = (d.__vccOpts || d)[t];
              return p && Qe(p, n, r, o, i)();
            })
          );
        }
    }
  return s;
}
function Xc(e) {
  return (
    typeof e == "object" ||
    "displayName" in e ||
    "props" in e ||
    "__vccOpts" in e
  );
}
function fs(e) {
  const t = Ge(xr),
    n = Ge(vo),
    r = $e(() => t.resolve(Xe(e.to))),
    s = $e(() => {
      const { matched: l } = r.value,
        { length: f } = l,
        d = l[f - 1],
        h = n.matched;
      if (!d || !h.length) return -1;
      const p = h.findIndex(Pt.bind(null, d));
      if (p > -1) return p;
      const x = ds(l[f - 2]);
      return f > 1 && ds(d) === x && h[h.length - 1].path !== x
        ? h.findIndex(Pt.bind(null, l[f - 2]))
        : p;
    }),
    o = $e(() => s.value > -1 && eu(n.params, r.value.params)),
    i = $e(
      () =>
        s.value > -1 &&
        s.value === n.matched.length - 1 &&
        bo(n.params, r.value.params)
    );
  function u(l = {}) {
    return Gc(l)
      ? t[Xe(e.replace) ? "replace" : "push"](Xe(e.to)).catch(Dt)
      : Promise.resolve();
  }
  return {
    route: r,
    href: $e(() => r.value.href),
    isActive: o,
    isExactActive: i,
    navigate: u,
  };
}
const Zc = It({
    name: "RouterLink",
    compatConfig: { MODE: 3 },
    props: {
      to: { type: [String, Object], required: !0 },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: { type: String, default: "page" },
    },
    useLink: fs,
    setup(e, { slots: t }) {
      const n = Zt(fs(e)),
        { options: r } = Ge(xr),
        s = $e(() => ({
          [hs(e.activeClass, r.linkActiveClass, "router-link-active")]:
            n.isActive,
          [hs(
            e.exactActiveClass,
            r.linkExactActiveClass,
            "router-link-exact-active"
          )]: n.isExactActive,
        }));
      return () => {
        const o = t.default && t.default(n);
        return e.custom
          ? o
          : mo(
              "a",
              {
                "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: s.value,
              },
              o
            );
      };
    },
  }),
  er = Zc;
function Gc(e) {
  if (
    !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) &&
    !e.defaultPrevented &&
    !(e.button !== void 0 && e.button !== 0)
  ) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t)) return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function eu(e, t) {
  for (const n in t) {
    const r = t[n],
      s = e[n];
    if (typeof r == "string") {
      if (r !== s) return !1;
    } else if (
      !Array.isArray(s) ||
      s.length !== r.length ||
      r.some((o, i) => o !== s[i])
    )
      return !1;
  }
  return !0;
}
function ds(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : "";
}
const hs = (e, t, n) => (e != null ? e : t != null ? t : n),
  tu = It({
    name: "RouterView",
    inheritAttrs: !1,
    props: { name: { type: String, default: "default" }, route: Object },
    compatConfig: { MODE: 3 },
    setup(e, { attrs: t, slots: n }) {
      const r = Ge(Xn),
        s = $e(() => e.route || r.value),
        o = Ge(es, 0),
        i = $e(() => s.value.matched[o]);
      on(es, o + 1), on(nc, i), on(Xn, s);
      const u = Ns();
      return (
        ln(
          () => [u.value, i.value, e.name],
          ([l, f, d], [h, p, x]) => {
            f &&
              ((f.instances[d] = l),
              p &&
                p !== f &&
                l &&
                l === h &&
                (f.leaveGuards.size || (f.leaveGuards = p.leaveGuards),
                f.updateGuards.size || (f.updateGuards = p.updateGuards))),
              l &&
                f &&
                (!p || !Pt(f, p) || !h) &&
                (f.enterCallbacks[d] || []).forEach((P) => P(l));
          },
          { flush: "post" }
        ),
        () => {
          const l = s.value,
            f = i.value,
            d = f && f.components[e.name],
            h = e.name;
          if (!d) return ps(n.default, { Component: d, route: l });
          const p = f.props[e.name],
            x = p
              ? p === !0
                ? l.params
                : typeof p == "function"
                ? p(l)
                : p
              : null,
            H = mo(
              d,
              G({}, x, t, {
                onVnodeUnmounted: (O) => {
                  O.component.isUnmounted && (f.instances[h] = null);
                },
                ref: u,
              })
            );
          return ps(n.default, { Component: H, route: l }) || H;
        }
      );
    },
  });
function ps(e, t) {
  if (!e) return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const zo = tu;
function nu(e) {
  const t = Ic(e.routes, e),
    n = e.parseQuery || Qc,
    r = e.stringifyQuery || as,
    s = e.history,
    o = $t(),
    i = $t(),
    u = $t(),
    l = bi(Ve);
  let f = Ve;
  _t &&
    e.scrollBehavior &&
    "scrollRestoration" in history &&
    (history.scrollRestoration = "manual");
  const d = kn.bind(null, (g) => "" + g),
    h = kn.bind(null, Yc),
    p = kn.bind(null, mn);
  function x(g, M) {
    let C, I;
    return (
      xo(g) ? ((C = t.getRecordMatcher(g)), (I = M)) : (I = g), t.addRoute(I, C)
    );
  }
  function P(g) {
    const M = t.getRecordMatcher(g);
    M && t.removeRoute(M);
  }
  function H() {
    return t.getRoutes().map((g) => g.record);
  }
  function O(g) {
    return !!t.getRecordMatcher(g);
  }
  function z(g, M) {
    if (((M = G({}, M || l.value)), typeof g == "string")) {
      const F = $n(n, g, M.path),
        c = t.resolve({ path: F.path }, M),
        a = s.createHref(F.fullPath);
      return G(F, c, {
        params: p(c.params),
        hash: mn(F.hash),
        redirectedFrom: void 0,
        href: a,
      });
    }
    let C;
    if ("path" in g) C = G({}, g, { path: $n(n, g.path, M.path).path });
    else {
      const F = G({}, g.params);
      for (const c in F) F[c] == null && delete F[c];
      (C = G({}, g, { params: h(g.params) })), (M.params = h(M.params));
    }
    const I = t.resolve(C, M),
      J = g.hash || "";
    I.params = d(p(I.params));
    const te = ic(r, G({}, g, { hash: Vc(J), path: I.path })),
      L = s.createHref(te);
    return G(
      { fullPath: te, hash: J, query: r === as ? Jc(g.query) : g.query || {} },
      I,
      { redirectedFrom: void 0, href: L }
    );
  }
  function N(g) {
    return typeof g == "string" ? $n(n, g, l.value.path) : G({}, g);
  }
  function V(g, M) {
    if (f !== g) return At(8, { from: M, to: g });
  }
  function Y(g) {
    return Fe(g);
  }
  function de(g) {
    return Y(G(N(g), { replace: !0 }));
  }
  function pe(g) {
    const M = g.matched[g.matched.length - 1];
    if (M && M.redirect) {
      const { redirect: C } = M;
      let I = typeof C == "function" ? C(g) : C;
      return (
        typeof I == "string" &&
          ((I = I.includes("?") || I.includes("#") ? (I = N(I)) : { path: I }),
          (I.params = {})),
        G({ query: g.query, hash: g.hash, params: g.params }, I)
      );
    }
  }
  function Fe(g, M) {
    const C = (f = z(g)),
      I = l.value,
      J = g.state,
      te = g.force,
      L = g.replace === !0,
      F = pe(C);
    if (F) return Fe(G(N(F), { state: J, force: te, replace: L }), M || C);
    const c = C;
    c.redirectedFrom = M;
    let a;
    return (
      !te &&
        lc(r, I, C) &&
        ((a = At(16, { to: c, from: I })), dt(I, I, !0, !1)),
      (a ? Promise.resolve(a) : ze(c, I))
        .catch((m) => (We(m) ? (We(m, 2) ? m : me(m)) : ee(m, c, I)))
        .then((m) => {
          if (m) {
            if (We(m, 2))
              return Fe(
                G(N(m.to), { state: J, force: te, replace: L }),
                M || c
              );
          } else m = Ne(c, I, !0, L, J);
          return De(c, I, m), m;
        })
    );
  }
  function ct(g, M) {
    const C = V(g, M);
    return C ? Promise.reject(C) : Promise.resolve();
  }
  function ze(g, M) {
    let C;
    const [I, J, te] = ru(g, M);
    C = Hn(I.reverse(), "beforeRouteLeave", g, M);
    for (const F of I)
      F.leaveGuards.forEach((c) => {
        C.push(Qe(c, g, M));
      });
    const L = ct.bind(null, g, M);
    return (
      C.push(L),
      pt(C)
        .then(() => {
          C = [];
          for (const F of o.list()) C.push(Qe(F, g, M));
          return C.push(L), pt(C);
        })
        .then(() => {
          C = Hn(J, "beforeRouteUpdate", g, M);
          for (const F of J)
            F.updateGuards.forEach((c) => {
              C.push(Qe(c, g, M));
            });
          return C.push(L), pt(C);
        })
        .then(() => {
          C = [];
          for (const F of g.matched)
            if (F.beforeEnter && !M.matched.includes(F))
              if (Array.isArray(F.beforeEnter))
                for (const c of F.beforeEnter) C.push(Qe(c, g, M));
              else C.push(Qe(F.beforeEnter, g, M));
          return C.push(L), pt(C);
        })
        .then(
          () => (
            g.matched.forEach((F) => (F.enterCallbacks = {})),
            (C = Hn(te, "beforeRouteEnter", g, M)),
            C.push(L),
            pt(C)
          )
        )
        .then(() => {
          C = [];
          for (const F of i.list()) C.push(Qe(F, g, M));
          return C.push(L), pt(C);
        })
        .catch((F) => (We(F, 8) ? F : Promise.reject(F)))
    );
  }
  function De(g, M, C) {
    for (const I of u.list()) I(g, M, C);
  }
  function Ne(g, M, C, I, J) {
    const te = V(g, M);
    if (te) return te;
    const L = M === Ve,
      F = _t ? history.state : {};
    C &&
      (I || L
        ? s.replace(g.fullPath, G({ scroll: L && F && F.scroll }, J))
        : s.push(g.fullPath, J)),
      (l.value = g),
      dt(g, M, C, L),
      me();
  }
  let we;
  function ut() {
    we ||
      (we = s.listen((g, M, C) => {
        const I = z(g),
          J = pe(I);
        if (J) {
          Fe(G(J, { replace: !0 }), I).catch(Dt);
          return;
        }
        f = I;
        const te = l.value;
        _t && mc(rs(te.fullPath, C.delta), Pn()),
          ze(I, te)
            .catch((L) =>
              We(L, 12)
                ? L
                : We(L, 2)
                ? (Fe(L.to, I)
                    .then((F) => {
                      We(F, 20) &&
                        !C.delta &&
                        C.type === Xt.pop &&
                        s.go(-1, !1);
                    })
                    .catch(Dt),
                  Promise.reject())
                : (C.delta && s.go(-C.delta, !1), ee(L, I, te))
            )
            .then((L) => {
              (L = L || Ne(I, te, !1)),
                L &&
                  (C.delta
                    ? s.go(-C.delta, !1)
                    : C.type === Xt.pop && We(L, 20) && s.go(-1, !1)),
                De(I, te, L);
            })
            .catch(Dt);
      }));
  }
  let at = $t(),
    ft = $t(),
    se;
  function ee(g, M, C) {
    me(g);
    const I = ft.list();
    return (
      I.length ? I.forEach((J) => J(g, M, C)) : console.error(g),
      Promise.reject(g)
    );
  }
  function Q() {
    return se && l.value !== Ve
      ? Promise.resolve()
      : new Promise((g, M) => {
          at.add([g, M]);
        });
  }
  function me(g) {
    return (
      se ||
        ((se = !g),
        ut(),
        at.list().forEach(([M, C]) => (g ? C(g) : M())),
        at.reset()),
      g
    );
  }
  function dt(g, M, C, I) {
    const { scrollBehavior: J } = e;
    if (!_t || !J) return Promise.resolve();
    const te =
      (!C && gc(rs(g.fullPath, 0))) ||
      ((I || !C) && history.state && history.state.scroll) ||
      null;
    return Us()
      .then(() => J(g, M, te))
      .then((L) => L && pc(L))
      .catch((L) => ee(L, g, M));
  }
  const je = (g) => s.go(g);
  let Oe;
  const xe = new Set();
  return {
    currentRoute: l,
    addRoute: x,
    removeRoute: P,
    hasRoute: O,
    getRoutes: H,
    resolve: z,
    options: e,
    push: Y,
    replace: de,
    go: je,
    back: () => je(-1),
    forward: () => je(1),
    beforeEach: o.add,
    beforeResolve: i.add,
    afterEach: u.add,
    onError: ft.add,
    isReady: Q,
    install(g) {
      const M = this;
      g.component("RouterLink", er),
        g.component("RouterView", zo),
        (g.config.globalProperties.$router = M),
        Object.defineProperty(g.config.globalProperties, "$route", {
          enumerable: !0,
          get: () => Xe(l),
        }),
        _t &&
          !Oe &&
          l.value === Ve &&
          ((Oe = !0), Y(s.location).catch((J) => {}));
      const C = {};
      for (const J in Ve) C[J] = $e(() => l.value[J]);
      g.provide(xr, M), g.provide(vo, Zt(C)), g.provide(Xn, l);
      const I = g.unmount;
      xe.add(g),
        (g.unmount = function () {
          xe.delete(g),
            xe.size < 1 &&
              ((f = Ve),
              we && we(),
              (we = null),
              (l.value = Ve),
              (Oe = !1),
              (se = !1)),
            I();
        });
    },
  };
}
function pt(e) {
  return e.reduce((t, n) => t.then(() => n()), Promise.resolve());
}
function ru(e, t) {
  const n = [],
    r = [],
    s = [],
    o = Math.max(t.matched.length, e.matched.length);
  for (let i = 0; i < o; i++) {
    const u = t.matched[i];
    u && (e.matched.find((f) => Pt(f, u)) ? r.push(u) : n.push(u));
    const l = e.matched[i];
    l && (t.matched.find((f) => Pt(f, l)) || s.push(l));
  }
  return [n, r, s];
}
var lt = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, s] of t) n[r] = s;
  return n;
};
const su = (e) => (Oi("data-v-9e7c8828"), (e = e()), Ii(), e),
  ou = { class: "greetings" },
  iu = { class: "green" },
  lu = su(() =>
    B(
      "h3",
      null,
      [
        D(" You\u2019ve successfully created a project with "),
        B("a", { target: "_blank", href: "https://vitejs.dev/" }, "Vite"),
        D(" + "),
        B("a", { target: "_blank", href: "https://vuejs.org/" }, "Vue 3"),
        D(". What's next? "),
      ],
      -1
    )
  ),
  cu = It({
    __name: "HelloWorld",
    props: { msg: null },
    setup(e) {
      return (t, n) => (Me(), He("div", ou, [B("h1", iu, Ho(e.msg), 1), lu]));
    },
  });
var uu = lt(cu, [["__scopeId", "data-v-9e7c8828"]]);
const au = B(
    "img",
    { alt: "Vue logo", class: "logo", src: tc, width: "125", height: "125" },
    null,
    -1
  ),
  fu = { class: "wrapper" },
  du = D("Home"),
  hu = D("About"),
  pu = It({
    __name: "App",
    setup(e) {
      return (t, n) => (
        Me(),
        He(
          _e,
          null,
          [
            B("header", null, [
              au,
              B("div", fu, [
                q(uu, { msg: "You did it!" }),
                B("nav", null, [
                  q(Xe(er), { to: "/" }, { default: oe(() => [du]), _: 1 }),
                  q(
                    Xe(er),
                    { to: "/about" },
                    { default: oe(() => [hu]), _: 1 }
                  ),
                ]),
              ]),
            ]),
            q(Xe(zo)),
          ],
          64
        )
      );
    },
  }),
  mu = "modulepreload",
  ms = {},
  gu = "/",
  _u = function (t, n) {
    return !n || n.length === 0
      ? t()
      : Promise.all(
          n.map((r) => {
            if (((r = `${gu}${r}`), r in ms)) return;
            ms[r] = !0;
            const s = r.endsWith(".css"),
              o = s ? '[rel="stylesheet"]' : "";
            if (document.querySelector(`link[href="${r}"]${o}`)) return;
            const i = document.createElement("link");
            if (
              ((i.rel = s ? "stylesheet" : mu),
              s || ((i.as = "script"), (i.crossOrigin = "")),
              (i.href = r),
              document.head.appendChild(i),
              s)
            )
              return new Promise((u, l) => {
                i.addEventListener("load", u),
                  i.addEventListener("error", () =>
                    l(new Error(`Unable to preload CSS for ${r}`))
                  );
              });
          })
        ).then(() => t());
  };
const vu = {},
  bu = { class: "item" },
  yu = { class: "details" };
function xu(e, t) {
  return (
    Me(),
    He("div", bu, [
      B("i", null, [In(e.$slots, "icon", {}, void 0, !0)]),
      B("div", yu, [
        B("h3", null, [In(e.$slots, "heading", {}, void 0, !0)]),
        In(e.$slots, "default", {}, void 0, !0),
      ]),
    ])
  );
}
var Ht = lt(vu, [
  ["render", xu],
  ["__scopeId", "data-v-7a6fe88e"],
]);
const wu = {},
  Eu = {
    xmlns: "http://www.w3.org/2000/svg",
    width: "20",
    height: "17",
    fill: "currentColor",
  },
  Cu = B(
    "path",
    {
      d: "M11 2.253a1 1 0 1 0-2 0h2zm-2 13a1 1 0 1 0 2 0H9zm.447-12.167a1 1 0 1 0 1.107-1.666L9.447 3.086zM1 2.253L.447 1.42A1 1 0 0 0 0 2.253h1zm0 13H0a1 1 0 0 0 1.553.833L1 15.253zm8.447.833a1 1 0 1 0 1.107-1.666l-1.107 1.666zm0-14.666a1 1 0 1 0 1.107 1.666L9.447 1.42zM19 2.253h1a1 1 0 0 0-.447-.833L19 2.253zm0 13l-.553.833A1 1 0 0 0 20 15.253h-1zm-9.553-.833a1 1 0 1 0 1.107 1.666L9.447 14.42zM9 2.253v13h2v-13H9zm1.553-.833C9.203.523 7.42 0 5.5 0v2c1.572 0 2.961.431 3.947 1.086l1.107-1.666zM5.5 0C3.58 0 1.797.523.447 1.42l1.107 1.666C2.539 2.431 3.928 2 5.5 2V0zM0 2.253v13h2v-13H0zm1.553 13.833C2.539 15.431 3.928 15 5.5 15v-2c-1.92 0-3.703.523-5.053 1.42l1.107 1.666zM5.5 15c1.572 0 2.961.431 3.947 1.086l1.107-1.666C9.203 13.523 7.42 13 5.5 13v2zm5.053-11.914C11.539 2.431 12.928 2 14.5 2V0c-1.92 0-3.703.523-5.053 1.42l1.107 1.666zM14.5 2c1.573 0 2.961.431 3.947 1.086l1.107-1.666C18.203.523 16.421 0 14.5 0v2zm3.5.253v13h2v-13h-2zm1.553 12.167C18.203 13.523 16.421 13 14.5 13v2c1.573 0 2.961.431 3.947 1.086l1.107-1.666zM14.5 13c-1.92 0-3.703.523-5.053 1.42l1.107 1.666C11.539 15.431 12.928 15 14.5 15v-2z",
    },
    null,
    -1
  ),
  Ru = [Cu];
function Pu(e, t) {
  return Me(), He("svg", Eu, Ru);
}
var Au = lt(wu, [["render", Pu]]);
const Mu = {},
  zu = {
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    "aria-hidden": "true",
    role: "img",
    class: "iconify iconify--mdi",
    width: "24",
    height: "24",
    preserveAspectRatio: "xMidYMid meet",
    viewBox: "0 0 24 24",
  },
  Ou = B(
    "path",
    {
      d: "M20 18v-4h-3v1h-2v-1H9v1H7v-1H4v4h16M6.33 8l-1.74 4H7v-1h2v1h6v-1h2v1h2.41l-1.74-4H6.33M9 5v1h6V5H9m12.84 7.61c.1.22.16.48.16.8V18c0 .53-.21 1-.6 1.41c-.4.4-.85.59-1.4.59H4c-.55 0-1-.19-1.4-.59C2.21 19 2 18.53 2 18v-4.59c0-.32.06-.58.16-.8L4.5 7.22C4.84 6.41 5.45 6 6.33 6H7V5c0-.55.18-1 .57-1.41C7.96 3.2 8.44 3 9 3h6c.56 0 1.04.2 1.43.59c.39.41.57.86.57 1.41v1h.67c.88 0 1.49.41 1.83 1.22l2.34 5.39z",
      fill: "currentColor",
    },
    null,
    -1
  ),
  Iu = [Ou];
function Tu(e, t) {
  return Me(), He("svg", zu, Iu);
}
var Su = lt(Mu, [["render", Tu]]);
const ku = {},
  $u = {
    xmlns: "http://www.w3.org/2000/svg",
    width: "18",
    height: "20",
    fill: "currentColor",
  },
  Hu = B(
    "path",
    {
      d: "M11.447 8.894a1 1 0 1 0-.894-1.789l.894 1.789zm-2.894-.789a1 1 0 1 0 .894 1.789l-.894-1.789zm0 1.789a1 1 0 1 0 .894-1.789l-.894 1.789zM7.447 7.106a1 1 0 1 0-.894 1.789l.894-1.789zM10 9a1 1 0 1 0-2 0h2zm-2 2.5a1 1 0 1 0 2 0H8zm9.447-5.606a1 1 0 1 0-.894-1.789l.894 1.789zm-2.894-.789a1 1 0 1 0 .894 1.789l-.894-1.789zm2 .789a1 1 0 1 0 .894-1.789l-.894 1.789zm-1.106-2.789a1 1 0 1 0-.894 1.789l.894-1.789zM18 5a1 1 0 1 0-2 0h2zm-2 2.5a1 1 0 1 0 2 0h-2zm-5.447-4.606a1 1 0 1 0 .894-1.789l-.894 1.789zM9 1l.447-.894a1 1 0 0 0-.894 0L9 1zm-2.447.106a1 1 0 1 0 .894 1.789l-.894-1.789zm-6 3a1 1 0 1 0 .894 1.789L.553 4.106zm2.894.789a1 1 0 1 0-.894-1.789l.894 1.789zm-2-.789a1 1 0 1 0-.894 1.789l.894-1.789zm1.106 2.789a1 1 0 1 0 .894-1.789l-.894 1.789zM2 5a1 1 0 1 0-2 0h2zM0 7.5a1 1 0 1 0 2 0H0zm8.553 12.394a1 1 0 1 0 .894-1.789l-.894 1.789zm-1.106-2.789a1 1 0 1 0-.894 1.789l.894-1.789zm1.106 1a1 1 0 1 0 .894 1.789l-.894-1.789zm2.894.789a1 1 0 1 0-.894-1.789l.894 1.789zM8 19a1 1 0 1 0 2 0H8zm2-2.5a1 1 0 1 0-2 0h2zm-7.447.394a1 1 0 1 0 .894-1.789l-.894 1.789zM1 15H0a1 1 0 0 0 .553.894L1 15zm1-2.5a1 1 0 1 0-2 0h2zm12.553 2.606a1 1 0 1 0 .894 1.789l-.894-1.789zM17 15l.447.894A1 1 0 0 0 18 15h-1zm1-2.5a1 1 0 1 0-2 0h2zm-7.447-5.394l-2 1 .894 1.789 2-1-.894-1.789zm-1.106 1l-2-1-.894 1.789 2 1 .894-1.789zM8 9v2.5h2V9H8zm8.553-4.894l-2 1 .894 1.789 2-1-.894-1.789zm.894 0l-2-1-.894 1.789 2 1 .894-1.789zM16 5v2.5h2V5h-2zm-4.553-3.894l-2-1-.894 1.789 2 1 .894-1.789zm-2.894-1l-2 1 .894 1.789 2-1L8.553.106zM1.447 5.894l2-1-.894-1.789-2 1 .894 1.789zm-.894 0l2 1 .894-1.789-2-1-.894 1.789zM0 5v2.5h2V5H0zm9.447 13.106l-2-1-.894 1.789 2 1 .894-1.789zm0 1.789l2-1-.894-1.789-2 1 .894 1.789zM10 19v-2.5H8V19h2zm-6.553-3.894l-2-1-.894 1.789 2 1 .894-1.789zM2 15v-2.5H0V15h2zm13.447 1.894l2-1-.894-1.789-2 1 .894 1.789zM18 15v-2.5h-2V15h2z",
    },
    null,
    -1
  ),
  Fu = [Hu];
function Nu(e, t) {
  return Me(), He("svg", $u, Fu);
}
var ju = lt(ku, [["render", Nu]]);
const Lu = {},
  Bu = {
    xmlns: "http://www.w3.org/2000/svg",
    width: "20",
    height: "20",
    fill: "currentColor",
  },
  Uu = B(
    "path",
    {
      d: "M15 4a1 1 0 1 0 0 2V4zm0 11v-1a1 1 0 0 0-1 1h1zm0 4l-.707.707A1 1 0 0 0 16 19h-1zm-4-4l.707-.707A1 1 0 0 0 11 14v1zm-4.707-1.293a1 1 0 0 0-1.414 1.414l1.414-1.414zm-.707.707l-.707-.707.707.707zM9 11v-1a1 1 0 0 0-.707.293L9 11zm-4 0h1a1 1 0 0 0-1-1v1zm0 4H4a1 1 0 0 0 1.707.707L5 15zm10-9h2V4h-2v2zm2 0a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3v2zm1 1v6h2V7h-2zm0 6a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3h-2zm-1 1h-2v2h2v-2zm-3 1v4h2v-4h-2zm1.707 3.293l-4-4-1.414 1.414 4 4 1.414-1.414zM11 14H7v2h4v-2zm-4 0c-.276 0-.525-.111-.707-.293l-1.414 1.414C5.42 15.663 6.172 16 7 16v-2zm-.707 1.121l3.414-3.414-1.414-1.414-3.414 3.414 1.414 1.414zM9 12h4v-2H9v2zm4 0a3 3 0 0 0 3-3h-2a1 1 0 0 1-1 1v2zm3-3V3h-2v6h2zm0-6a3 3 0 0 0-3-3v2a1 1 0 0 1 1 1h2zm-3-3H3v2h10V0zM3 0a3 3 0 0 0-3 3h2a1 1 0 0 1 1-1V0zM0 3v6h2V3H0zm0 6a3 3 0 0 0 3 3v-2a1 1 0 0 1-1-1H0zm3 3h2v-2H3v2zm1-1v4h2v-4H4zm1.707 4.707l.586-.586-1.414-1.414-.586.586 1.414 1.414z",
    },
    null,
    -1
  ),
  Du = [Uu];
function Ku(e, t) {
  return Me(), He("svg", Bu, Du);
}
var Vu = lt(Lu, [["render", Ku]]);
const Wu = {},
  qu = {
    xmlns: "http://www.w3.org/2000/svg",
    width: "20",
    height: "20",
    fill: "currentColor",
  },
  Yu = B(
    "path",
    {
      d: "M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.666.105 5.5 5.5 0 0 0-.114 7.665L10 18.78l8.39-8.4a5.5 5.5 0 0 0-.114-7.665 5.5 5.5 0 0 0-7.666-.105l-.61.61z",
    },
    null,
    -1
  ),
  Qu = [Yu];
function Ju(e, t) {
  return Me(), He("svg", qu, Qu);
}
var Xu = lt(Wu, [["render", Ju]]);
const Zu = D("Documentation"),
  Gu = D(" Vue\u2019s "),
  ea = B(
    "a",
    { target: "_blank", href: "https://vuejs.org/" },
    "official documentation",
    -1
  ),
  ta = D(" provides you with all information you need to get started. "),
  na = D("Tooling"),
  ra = D(" This project is served and bundled with "),
  sa = B(
    "a",
    { href: "https://vitejs.dev/guide/features.html", target: "_blank" },
    "Vite",
    -1
  ),
  oa = D(". The recommended IDE setup is "),
  ia = B(
    "a",
    { href: "https://code.visualstudio.com/", target: "_blank" },
    "VSCode",
    -1
  ),
  la = D(" + "),
  ca = B(
    "a",
    { href: "https://github.com/johnsoncodehk/volar", target: "_blank" },
    "Volar",
    -1
  ),
  ua = D(". If you need to test your components and web pages, check out "),
  aa = B(
    "a",
    { href: "https://www.cypress.io/", target: "_blank" },
    "Cypress",
    -1
  ),
  fa = D(" and "),
  da = B(
    "a",
    { href: "https://on.cypress.io/component", target: "_blank" },
    "Cypress Component Testing",
    -1
  ),
  ha = D(". "),
  pa = B("br", null, null, -1),
  ma = D(" More instructions are available in "),
  ga = B("code", null, "README.md", -1),
  _a = D(". "),
  va = D("Ecosystem"),
  ba = D(" Get official tools and libraries for your project: "),
  ya = B(
    "a",
    { target: "_blank", href: "https://pinia.vuejs.org/" },
    "Pinia",
    -1
  ),
  xa = D(", "),
  wa = B(
    "a",
    { target: "_blank", href: "https://router.vuejs.org/" },
    "Vue Router",
    -1
  ),
  Ea = D(", "),
  Ca = B(
    "a",
    { target: "_blank", href: "https://test-utils.vuejs.org/" },
    "Vue Test Utils",
    -1
  ),
  Ra = D(", and "),
  Pa = B(
    "a",
    { target: "_blank", href: "https://github.com/vuejs/devtools" },
    "Vue Dev Tools",
    -1
  ),
  Aa = D(". If you need more resources, we suggest paying "),
  Ma = B(
    "a",
    { target: "_blank", href: "https://github.com/vuejs/awesome-vue" },
    "Awesome Vue",
    -1
  ),
  za = D(" a visit. "),
  Oa = D("Community"),
  Ia = D(" Got stuck? Ask your question on "),
  Ta = B(
    "a",
    { target: "_blank", href: "https://chat.vuejs.org" },
    "Vue Land",
    -1
  ),
  Sa = D(", our official Discord server, or "),
  ka = B(
    "a",
    {
      target: "_blank",
      href: "https://stackoverflow.com/questions/tagged/vue.js",
    },
    "StackOverflow",
    -1
  ),
  $a = D(". You should also subscribe to "),
  Ha = B(
    "a",
    { target: "_blank", href: "https://news.vuejs.org" },
    "our mailing list",
    -1
  ),
  Fa = D(" and follow the official "),
  Na = B(
    "a",
    { target: "_blank", href: "https://twitter.com/vuejs" },
    "@vuejs",
    -1
  ),
  ja = D(" twitter account for latest news in the Vue world. "),
  La = D("Support Vue"),
  Ba = D(
    " As an independent project, Vue relies on community backing for its sustainability. You can help us by "
  ),
  Ua = B(
    "a",
    { target: "_blank", href: "https://vuejs.org/sponsor/" },
    "becoming a sponsor",
    -1
  ),
  Da = D(". "),
  Ka = It({
    __name: "TheWelcome",
    setup(e) {
      return (t, n) => (
        Me(),
        He(
          _e,
          null,
          [
            q(Ht, null, {
              icon: oe(() => [q(Au)]),
              heading: oe(() => [Zu]),
              default: oe(() => [Gu, ea, ta]),
              _: 1,
            }),
            q(Ht, null, {
              icon: oe(() => [q(Su)]),
              heading: oe(() => [na]),
              default: oe(() => [
                ra,
                sa,
                oa,
                ia,
                la,
                ca,
                ua,
                aa,
                fa,
                da,
                ha,
                pa,
                ma,
                ga,
                _a,
              ]),
              _: 1,
            }),
            q(Ht, null, {
              icon: oe(() => [q(ju)]),
              heading: oe(() => [va]),
              default: oe(() => [ba, ya, xa, wa, Ea, Ca, Ra, Pa, Aa, Ma, za]),
              _: 1,
            }),
            q(Ht, null, {
              icon: oe(() => [q(Vu)]),
              heading: oe(() => [Oa]),
              default: oe(() => [Ia, Ta, Sa, ka, $a, Ha, Fa, Na, ja]),
              _: 1,
            }),
            q(Ht, null, {
              icon: oe(() => [q(Xu)]),
              heading: oe(() => [La]),
              default: oe(() => [Ba, Ua, Da]),
              _: 1,
            }),
          ],
          64
        )
      );
    },
  }),
  Va = It({
    __name: "HomeView",
    setup(e) {
      return (t, n) => (Me(), He("main", null, [q(Ka)]));
    },
  }),
  Wa = nu({
    history: yc("/"),
    routes: [
      { path: "/", name: "home", component: Va },
      {
        path: "/about",
        name: "about",
        component: () =>
          _u(
            () => import("./AboutView.120fcc15.js"),
            ["assets/AboutView.120fcc15.js", "assets/AboutView.ab071ea6.css"]
          ),
      },
    ],
  }),
  Er = Jl(pu);
Er.use(ec());
Er.use(Wa);
Er.mount("#app");
export { lt as _, B as a, He as c, Me as o };
