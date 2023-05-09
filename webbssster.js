!(function (t) {
    function e(r) {
        if (i[r]) return i[r].exports;
        var n = (i[r] = { exports: {}, id: r, loaded: !1 });
        return t[r].call(n.exports, n, n.exports, e), (n.loaded = !0), n.exports;
    }
    var i = {};
    (e.m = t), (e.c = i), (e.p = ""), e(0);
})([
    function (t, e, i) {
        "use strict";
        function r(t) {
            return t && t.__esModule ? t : { default: t };
        }
        i(1), i(2);
        var n = i(3),
            s = r(i(23)),
            a = r(i(21)),
            o = i(62);
        i(63).init({ hacks: o }),
            Modernizr.addTest("inpagevideo", function () {
                return !navigator.userAgent.match(/(iPhone|iPod)/g) || "playsInline" in document.createElement("video");
            }),
            (0, n.controller)(),
            (0, s.default)(),
            (0, a.default)();
    },
    function (t, e) {
        !(function (e, i) {
            var r = (function (t, e, i) {
                "use strict";
                var r, n;
                if (
                    ((function () {
                        var e,
                            i = {
                                lazyClass: "lazyload",
                                loadedClass: "lazyloaded",
                                loadingClass: "lazyloading",
                                preloadClass: "lazypreload",
                                errorClass: "lazyerror",
                                autosizesClass: "lazyautosizes",
                                fastLoadedClass: "ls-is-cached",
                                iframeLoadMode: 0,
                                srcAttr: "data-src",
                                srcsetAttr: "data-srcset",
                                sizesAttr: "data-sizes",
                                minSize: 40,
                                customMedia: {},
                                init: !0,
                                expFactor: 1.5,
                                hFac: 0.8,
                                loadMode: 2,
                                loadHidden: !0,
                                ricTimeout: 0,
                                throttleDelay: 125,
                            };
                        n = t.lazySizesConfig || t.lazysizesConfig || {};
                        for (e in i) e in n || (n[e] = i[e]);
                    })(),
                    !e || !e.getElementsByClassName)
                )
                    return { init: function () {}, cfg: n, noSupport: !0 };
                var s = e.documentElement,
                    a = t.HTMLPictureElement,
                    o = "addEventListener",
                    l = "getAttribute",
                    u = t[o].bind(t),
                    c = t.setTimeout,
                    h = t.requestAnimationFrame || c,
                    d = t.requestIdleCallback,
                    p = /^picture$/i,
                    f = ["load", "error", "lazyincluded", "_lazyloaded"],
                    m = {},
                    g = Array.prototype.forEach,
                    v = function (t, e) {
                        return m[e] || (m[e] = new RegExp("(\\s|^)" + e + "(\\s|$)")), m[e].test(t[l]("class") || "") && m[e];
                    },
                    y = function (t, e) {
                        v(t, e) || t.setAttribute("class", (t[l]("class") || "").trim() + " " + e);
                    },
                    _ = function (t, e) {
                        var i;
                        (i = v(t, e)) && t.setAttribute("class", (t[l]("class") || "").replace(i, " "));
                    },
                    w = function (t, e, i) {
                        var r = i ? o : "removeEventListener";
                        i && w(t, e),
                            f.forEach(function (i) {
                                t[r](i, e);
                            });
                    },
                    T = function (t, i, n, s, a) {
                        var o = e.createEvent("Event");
                        return n || (n = {}), (n.instance = r), o.initEvent(i, !s, !a), (o.detail = n), t.dispatchEvent(o), o;
                    },
                    b = function (e, i) {
                        var r;
                        !a && (r = t.picturefill || n.pf) ? (i && i.src && !e[l]("srcset") && e.setAttribute("srcset", i.src), r({ reevaluate: !0, elements: [e] })) : i && i.src && (e.src = i.src);
                    },
                    x = function (t, e) {
                        return (getComputedStyle(t, null) || {})[e];
                    },
                    S = function (t, e, i) {
                        for (i = i || t.offsetWidth; i < n.minSize && e && !t._lazysizesWidth; ) (i = e.offsetWidth), (e = e.parentNode);
                        return i;
                    },
                    C = (function () {
                        var t,
                            i,
                            r = [],
                            n = [],
                            s = r,
                            a = function () {
                                var e = s;
                                for (s = r.length ? n : r, t = !0, i = !1; e.length; ) e.shift()();
                                t = !1;
                            },
                            o = function (r, n) {
                                t && !n ? r.apply(this, arguments) : (s.push(r), i || ((i = !0), (e.hidden ? c : h)(a)));
                            };
                        return (o._lsFlush = a), o;
                    })(),
                    P = function (t, e) {
                        return e
                            ? function () {
                                  C(t);
                              }
                            : function () {
                                  var e = this,
                                      i = arguments;
                                  C(function () {
                                      t.apply(e, i);
                                  });
                              };
                    },
                    E = function (t) {
                        var e,
                            r,
                            n = function () {
                                (e = null), t();
                            },
                            s = function () {
                                var t = i.now() - r;
                                t < 99 ? c(s, 99 - t) : (d || n)(n);
                            };
                        return function () {
                            (r = i.now()), e || (e = c(s, 99));
                        };
                    },
                    k = (function () {
                        var a,
                            f,
                            m,
                            S,
                            k,
                            M,
                            L,
                            I,
                            O,
                            z,
                            R,
                            D,
                            N = /^img$/i,
                            B = /^iframe$/i,
                            F = "onscroll" in t && !/(gle|ing)bot/.test(navigator.userAgent),
                            H = 0,
                            j = 0,
                            U = -1,
                            X = function (t) {
                                j--, (!t || j < 0 || !t.target) && (j = 0);
                            },
                            q = function (t) {
                                return null == D && (D = "hidden" == x(e.body, "visibility")), D || !("hidden" == x(t.parentNode, "visibility") && "hidden" == x(t, "visibility"));
                            },
                            W = function (t, i) {
                                var r,
                                    n = t,
                                    a = q(t);
                                for (I -= i, R += i, O -= i, z += i; a && (n = n.offsetParent) && n != e.body && n != s; )
                                    (a = (x(n, "opacity") || 1) > 0) && "visible" != x(n, "overflow") && ((r = n.getBoundingClientRect()), (a = z > r.left && O < r.right && R > r.top - 1 && I < r.bottom + 1));
                                return a;
                            },
                            Y = function () {
                                var t,
                                    i,
                                    o,
                                    u,
                                    c,
                                    h,
                                    d,
                                    p,
                                    m,
                                    g,
                                    v,
                                    y,
                                    _ = r.elements;
                                if ((S = n.loadMode) && j < 8 && (t = _.length)) {
                                    for (i = 0, U++; i < t; i++)
                                        if (_[i] && !_[i]._lazyRace)
                                            if (!F || (r.prematureUnveil && r.prematureUnveil(_[i]))) J(_[i]);
                                            else if (
                                                (((p = _[i][l]("data-expand")) && (h = 1 * p)) || (h = H),
                                                g ||
                                                    ((g = !n.expand || n.expand < 1 ? (s.clientHeight > 500 && s.clientWidth > 500 ? 500 : 370) : n.expand),
                                                    (r._defEx = g),
                                                    (v = g * n.expFactor),
                                                    (y = n.hFac),
                                                    (D = null),
                                                    H < v && j < 1 && U > 2 && S > 2 && !e.hidden ? ((H = v), (U = 0)) : (H = S > 1 && U > 1 && j < 6 ? g : 0)),
                                                m !== h && ((M = innerWidth + h * y), (L = innerHeight + h), (d = -1 * h), (m = h)),
                                                (o = _[i].getBoundingClientRect()),
                                                (R = o.bottom) >= d &&
                                                    (I = o.top) <= L &&
                                                    (z = o.right) >= d * y &&
                                                    (O = o.left) <= M &&
                                                    (R || z || O || I) &&
                                                    (n.loadHidden || q(_[i])) &&
                                                    ((f && j < 3 && !p && (S < 3 || U < 4)) || W(_[i], h)))
                                            ) {
                                                if ((J(_[i]), (c = !0), j > 9)) break;
                                            } else !c && f && !u && j < 4 && U < 4 && S > 2 && (a[0] || n.preloadAfterLoad) && (a[0] || (!p && (R || z || O || I || "auto" != _[i][l](n.sizesAttr)))) && (u = a[0] || _[i]);
                                    u && !c && J(u);
                                }
                            },
                            V = (function (t) {
                                var e,
                                    r = 0,
                                    s = n.throttleDelay,
                                    a = n.ricTimeout,
                                    o = function () {
                                        (e = !1), (r = i.now()), t();
                                    },
                                    l =
                                        d && a > 49
                                            ? function () {
                                                  d(o, { timeout: a }), a !== n.ricTimeout && (a = n.ricTimeout);
                                              }
                                            : P(function () {
                                                  c(o);
                                              }, !0);
                                return function (t) {
                                    var n;
                                    (t = !0 === t) && (a = 33), e || ((e = !0), (n = s - (i.now() - r)) < 0 && (n = 0), t || n < 9 ? l() : c(l, n));
                                };
                            })(Y),
                            G = function (t) {
                                var e = t.target;
                                e._lazyCache ? delete e._lazyCache : (X(t), y(e, n.loadedClass), _(e, n.loadingClass), w(e, $), T(e, "lazyloaded"));
                            },
                            Q = P(G),
                            $ = function (t) {
                                Q({ target: t.target });
                            },
                            K = function (t) {
                                var e,
                                    i = t[l](n.srcsetAttr);
                                (e = n.customMedia[t[l]("data-media") || t[l]("media")]) && t.setAttribute("media", e), i && t.setAttribute("srcset", i);
                            },
                            Z = P(function (t, e, i, r, s) {
                                var a, o, u, h, d, f;
                                (d = T(t, "lazybeforeunveil", e)).defaultPrevented ||
                                    (r && (i ? y(t, n.autosizesClass) : t.setAttribute("sizes", r)),
                                    (o = t[l](n.srcsetAttr)),
                                    (a = t[l](n.srcAttr)),
                                    s && ((u = t.parentNode), (h = u && p.test(u.nodeName || ""))),
                                    (f = e.firesLoad || ("src" in t && (o || a || h))),
                                    (d = { target: t }),
                                    y(t, n.loadingClass),
                                    f && (clearTimeout(m), (m = c(X, 2500)), w(t, $, !0)),
                                    h && g.call(u.getElementsByTagName("source"), K),
                                    o
                                        ? t.setAttribute("srcset", o)
                                        : a &&
                                          !h &&
                                          (B.test(t.nodeName)
                                              ? (function (t, e) {
                                                    var i = t.getAttribute("data-load-mode") || n.iframeLoadMode;
                                                    0 == i ? t.contentWindow.location.replace(e) : 1 == i && (t.src = e);
                                                })(t, a)
                                              : (t.src = a)),
                                    s && (o || h) && b(t, { src: a })),
                                    t._lazyRace && delete t._lazyRace,
                                    _(t, n.lazyClass),
                                    C(function () {
                                        var e = t.complete && t.naturalWidth > 1;
                                        (f && !e) ||
                                            (e && y(t, n.fastLoadedClass),
                                            G(d),
                                            (t._lazyCache = !0),
                                            c(function () {
                                                "_lazyCache" in t && delete t._lazyCache;
                                            }, 9)),
                                            "lazy" == t.loading && j--;
                                    }, !0);
                            }),
                            J = function (t) {
                                if (!t._lazyRace) {
                                    var e,
                                        i = N.test(t.nodeName),
                                        r = i && (t[l](n.sizesAttr) || t[l]("sizes")),
                                        s = "auto" == r;
                                    ((!s && f) || !i || (!t[l]("src") && !t.srcset) || t.complete || v(t, n.errorClass) || !v(t, n.lazyClass)) &&
                                        ((e = T(t, "lazyunveilread").detail), s && A.updateElem(t, !0, t.offsetWidth), (t._lazyRace = !0), j++, Z(t, e, s, r, i));
                                }
                            },
                            tt = E(function () {
                                (n.loadMode = 3), V();
                            }),
                            et = function () {
                                3 == n.loadMode && (n.loadMode = 2), tt();
                            },
                            it = function () {
                                f || (i.now() - k < 999 ? c(it, 999) : ((f = !0), (n.loadMode = 3), V(), u("scroll", et, !0)));
                            };
                        return {
                            _: function () {
                                (k = i.now()),
                                    (r.elements = e.getElementsByClassName(n.lazyClass)),
                                    (a = e.getElementsByClassName(n.lazyClass + " " + n.preloadClass)),
                                    u("scroll", V, !0),
                                    u("resize", V, !0),
                                    u("pageshow", function (t) {
                                        if (t.persisted) {
                                            var i = e.querySelectorAll("." + n.loadingClass);
                                            i.length &&
                                                i.forEach &&
                                                h(function () {
                                                    i.forEach(function (t) {
                                                        t.complete && J(t);
                                                    });
                                                });
                                        }
                                    }),
                                    t.MutationObserver ? new MutationObserver(V).observe(s, { childList: !0, subtree: !0, attributes: !0 }) : (s[o]("DOMNodeInserted", V, !0), s[o]("DOMAttrModified", V, !0), setInterval(V, 999)),
                                    u("hashchange", V, !0),
                                    ["focus", "mouseover", "click", "load", "transitionend", "animationend"].forEach(function (t) {
                                        e[o](t, V, !0);
                                    }),
                                    /d$|^c/.test(e.readyState) ? it() : (u("load", it), e[o]("DOMContentLoaded", V), c(it, 2e4)),
                                    r.elements.length ? (Y(), C._lsFlush()) : V();
                            },
                            checkElems: V,
                            unveil: J,
                            _aLSL: et,
                        };
                    })(),
                    A = (function () {
                        var t,
                            i = P(function (t, e, i, r) {
                                var n, s, a;
                                if (((t._lazysizesWidth = r), (r += "px"), t.setAttribute("sizes", r), p.test(e.nodeName || ""))) for (n = e.getElementsByTagName("source"), s = 0, a = n.length; s < a; s++) n[s].setAttribute("sizes", r);
                                i.detail.dataAttr || b(t, i.detail);
                            }),
                            r = function (t, e, r) {
                                var n,
                                    s = t.parentNode;
                                s && ((r = S(t, s, r)), (n = T(t, "lazybeforesizes", { width: r, dataAttr: !!e })).defaultPrevented || ((r = n.detail.width) && r !== t._lazysizesWidth && i(t, s, n, r)));
                            },
                            s = E(function () {
                                var e,
                                    i = t.length;
                                if (i) for (e = 0; e < i; e++) r(t[e]);
                            });
                        return {
                            _: function () {
                                (t = e.getElementsByClassName(n.autosizesClass)), u("resize", s);
                            },
                            checkElems: s,
                            updateElem: r,
                        };
                    })(),
                    M = function () {
                        !M.i && e.getElementsByClassName && ((M.i = !0), A._(), k._());
                    };
                return (
                    c(function () {
                        n.init && M();
                    }),
                    (r = { cfg: n, autoSizer: A, loader: k, init: M, uP: b, aC: y, rC: _, hC: v, fire: T, gW: S, rAF: C })
                );
            })(e, e.document, Date);
            (e.lazySizes = r), "object" == typeof t && t.exports && (t.exports = r);
        })("undefined" != typeof window ? window : {});
    },
    function (t, e, i) {
        var r, n, s;
        !(function (a, o) {
            if (a) {
                (o = o.bind(null, a, a.document)), "object" == typeof t && t.exports ? o(i(1)) : ((n = [i(1)]), void 0 === (s = "function" == typeof (r = o) ? r.apply(e, n) : r) || (t.exports = s));
            }
        })("undefined" != typeof window ? window : 0, function (t, e, i) {
            "use strict";
            if (t.addEventListener) {
                var r = /\s+(\d+)(w|h)\s+(\d+)(w|h)/,
                    n = /parent-fit["']*\s*:\s*["']*(contain|cover|width)/,
                    s = /parent-container["']*\s*:\s*["']*(.+?)(?=(\s|$|,|'|"|;))/,
                    a = /^picture$/i,
                    o = i.cfg,
                    l = {
                        getParent: function (e, i) {
                            var r = e,
                                n = e.parentNode;
                            return (
                                (i && "prev" != i) || !n || !a.test(n.nodeName || "") || (n = n.parentNode),
                                "self" != i && (r = "prev" == i ? e.previousElementSibling : i && (n.closest || t.jQuery) ? (n.closest ? n.closest(i) : jQuery(n).closest(i)[0]) || n : n),
                                r
                            );
                        },
                        getFit: function (t) {
                            var e,
                                i,
                                r = (function (t) {
                                    return getComputedStyle(t, null) || {};
                                })(t),
                                a = r.content || r.fontFamily,
                                o = { fit: t._lazysizesParentFit || t.getAttribute("data-parent-fit") };
                            return (
                                !o.fit && a && (e = a.match(n)) && (o.fit = e[1]),
                                o.fit ? (!(i = t._lazysizesParentContainer || t.getAttribute("data-parent-container")) && a && (e = a.match(s)) && (i = e[1]), (o.parent = l.getParent(t, i))) : (o.fit = r.objectFit),
                                o
                            );
                        },
                        getImageRatio: function (e) {
                            var i,
                                n,
                                s,
                                l,
                                u,
                                c,
                                h,
                                d = e.parentNode,
                                p = d && a.test(d.nodeName || "") ? d.querySelectorAll("source, img") : [e];
                            for (i = 0; i < p.length; i++)
                                if (
                                    ((e = p[i]),
                                    (n = e.getAttribute(o.srcsetAttr) || e.getAttribute("srcset") || e.getAttribute("data-pfsrcset") || e.getAttribute("data-risrcset") || ""),
                                    (s = e._lsMedia || e.getAttribute("media")),
                                    (s = o.customMedia[e.getAttribute("data-media") || s] || s),
                                    n && (!s || ((t.matchMedia && matchMedia(s)) || {}).matches))
                                ) {
                                    (l = parseFloat(e.getAttribute("data-aspectratio"))) ||
                                        ((u = n.match(r)) ? ("w" == u[2] ? ((c = u[1]), (h = u[3])) : ((c = u[3]), (h = u[1]))) : ((c = e.getAttribute("width")), (h = e.getAttribute("height"))), (l = c / h));
                                    break;
                                }
                            return l;
                        },
                        calculateSize: function (t, e) {
                            var i,
                                r,
                                n,
                                s = this.getFit(t),
                                a = s.fit,
                                o = s.parent;
                            return "width" == a || (("contain" == a || "cover" == a) && (r = this.getImageRatio(t)))
                                ? (o ? (e = o.clientWidth) : (o = t), (n = e), "width" == a ? (n = e) : (i = e / o.clientHeight) && (("cover" == a && i < r) || ("contain" == a && i > r)) && (n = e * (r / i)), n)
                                : e;
                        },
                    };
                (i.parentFit = l),
                    e.addEventListener("lazybeforesizes", function (t) {
                        if (!t.defaultPrevented && t.detail.instance == i) {
                            var e = t.target;
                            t.detail.width = l.calculateSize(e, t.detail.width);
                        }
                    });
            }
        });
    },
    function (t, e, i) {
        "use strict";
        function r(t) {
            return t && t.__esModule ? t : { default: t };
        }
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.controller = function () {
                (0, s.default)(), (0, n.init)(), (0, a.initThumbs)(), (0, o.default)(), (0, l.default)(), (0, u.default)(), (0, c.default)(), (0, h.default)(), (0, d.initGalleryNav)();
            }),
            (e.bindWindowListener = function (t, e) {
                t && e && (window.addEventListener(t, e), p.push({ method: t, action: e }));
            }),
            (e.unbindWindowListener = function (t, e) {
                t &&
                    e &&
                    (window.removeEventListener(t, e),
                    p.find(function (i, r) {
                        i.action === e && i.method === t && p.splice(r, 1);
                    }));
            }),
            (e.unbindWindowListeners = function () {
                if (p.length) {
                    for (var t = p.length - 1; t >= 0; t--) window.removeEventListener(p[t].method, p[t].action);
                    p = [];
                }
            });
        var n = i(4),
            s = r(i(12)),
            a = i(56),
            o = r(i(57)),
            l = r(i(58)),
            u = r(i(60)),
            c = r(i(61)),
            h = r(i(51)),
            d = i(54),
            p = [];
    },
    function (t, e, i) {
        "use strict";
        function r(t) {
            return t && t.__esModule ? t : { default: t };
        }
        function n(t) {
            var e = t.parentElement,
                i = getComputedStyle(e),
                r = e.clientHeight - parseFloat(i.paddingTop) - parseFloat(i.paddingBottom),
                n = e.clientWidth - parseFloat(i.paddingLeft) - parseFloat(i.paddingRight),
                s = (t.clientHeight, t.querySelector("iframe")),
                a = s.getAttribute("height"),
                o = s.getAttribute("width"),
                l = o / a,
                u = a / o;
            n * u > r
                ? (t.classList.remove("responsive-width"), (t.style.height = r + "px"), (t.style.width = Math.round(r * l) + "px"), (t.style.paddingBottom = "0px"))
                : (t.classList.add("responsive-width"), (t.style.height = ""), (t.style.width = ""), (t.style.paddingBottom = 100 * u + "%")),
                t.classList.add("is-processed");
        }
        function s() {
            y = window.innerWidth / 2;
            for (var t = m.length - 1; t >= 0; t--) n(m[t]);
        }
        function a() {
            for (var t = document.querySelectorAll(".responsive-img"), e = (document.querySelector(".slideshow__el").clientHeight, t.length - 1); e >= 0; e--) {
                var i = t[e],
                    r = i.clientHeight,
                    n = i.clientWidth,
                    s = i.getAttribute("data-orientation"),
                    a = i.getAttribute("data-ratio");
                "landscape" === s ? (i.style.height = Math.round(n / a) + "px") : (i.style.width = Math.round(r * a) + "px");
            }
            void 0 !== p && p.update(!0);
        }
        function o(t) {
            _ > 1 && (t.clientX < y ? f.setAttribute("data-cursor", "prev") : f.setAttribute("data-cursor", "next"));
        }
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.init = void 0);
        var l = r(i(5)),
            u = i(6),
            c = r(i(7)),
            h = r(i(11)),
            d = i(3),
            p = void 0,
            f = void 0,
            m = [],
            g = [],
            v = null,
            y = window.innerWidth / 2,
            _ = 0,
            w = (0, u.throttle)(function () {
                a(), s();
            }, 100);
        e.init = function () {
            (f = document.querySelector(".slideshow__el")) &&
                ((m = document.querySelectorAll(".embed-holder")),
                a(),
                (function (t) {
                    function e(t) {
                        var e = t.querySelector("iframe");
                        if ((null === v || Modernizr.touchevents || v.pause(), (v = null), e && !Modernizr.touchevents)) {
                            var i = h.default.parse(e.src);
                            i && "vimeo" === i.provider && (v = new c.default(e)).play();
                        }
                    }
                    function i(t) {
                        var e = t.loopedSlides ? 2 * t.loopedSlides : 0;
                        s.innerHTML = t.slides.length > 1 ? t.realIndex + 1 + "/" + (t.slides.length - e) : "";
                    }
                    var r = t.getAttribute("data-type"),
                        n = document.querySelector("[data-slideshow-caption]"),
                        s = document.querySelector("[data-slideshow-counter]"),
                        a = document.querySelectorAll("[data-project]"),
                        o = {
                            loop: (_ = document.querySelectorAll(".swiper-slide").length) > 1,
                            mousewheel: !0,
                            freeMode: !Modernizr.touchevents,
                            centeredSlides: !0,
                            hashnav: !0,
                            replaceState: !0,
                            slidesPerView: "auto",
                            mousewheelControl: !0,
                            mousewheelForceToAxis: !0,
                            mousewheelInvert: !0,
                            keyboardControl: !0,
                            lazyLoading: !1,
                            speed: 450,
                            roundLengths: !0,
                        },
                        u = { effect: "fade", fade: { crossFade: !0 }, loop: _ > 1, hashnav: !0, replaceState: !0, slidesPerView: 1, keyboardControl: !0, lazyLoading: !1, speed: 0, roundLengths: !0 },
                        d = {
                            nextButton: "[data-slideshow-next]",
                            prevButton: "[data-slideshow-prev]",
                            onTap: function (t, e) {
                                e.clientX < y ? t.slidePrev() : t.slideNext();
                            },
                            onProgress: function (t, e) {
                                t.activeIndex && e > 0 ? (n.innerHTML = t.slides[t.activeIndex].querySelector(".caption").innerHTML) : (e <= 0 || -1 == e) && (n.innerHTML = t.slides[0].querySelector(".caption").innerHTML), i(t);
                            },
                            onSlideChangeStart: function (r) {
                                var s = r.slides[r.activeIndex];
                                (n.innerHTML = s.querySelector(".caption").innerHTML), i(r), e(s), t.setAttribute("data-progress", r.progress);
                            },
                            onInit: function (r) {
                                var s = r.slides[r.activeIndex];
                                (n.innerHTML = s.querySelector(".caption").innerHTML || ""), i(r), e(s), t.setAttribute("data-progress", r.progress);
                            },
                            onReachBeginning: function (t) {
                                "scroll" === r && (t.slidePrev(!1, 0), t.slideNext(!1, 0));
                            },
                            onReachEnd: function (t) {
                                "scroll" === r && (t.slideNext(!1, 0), t.slidePrev(!1, 0));
                            },
                        };
                    if ("scroll" === r) {
                        var f = Object.assign({}, o, d);
                        p = new l.default(t, f);
                    } else if ("slideshow" === r) {
                        var m = Object.assign({}, u, d);
                        p = new l.default(t, m);
                    }
                    for (var w = 0; w < a.length; w++) {
                        var T = a[w].getAttribute("data-project");
                        -1 === g.indexOf(T) && g.push(T);
                    }
                })(f),
                f.addEventListener("mousemove", (0, u.throttle)(o, 50)),
                (0, d.bindWindowListener)("resize", w),
                (function () {
                    var t = document.querySelector(".control-bar__title"),
                        e = document.querySelectorAll(".caption"),
                        i = [],
                        r = document.createElement("div");
                    r.className = "control-bar__title-clone";
                    for (var n = e.length - 1; n >= 0; n--) i[n] = e[n].innerHTML;
                    (r.innerHTML = (function (t) {
                        for (var e = 0, i = "", r = 0; r < t.length; r++) t[r].length > e && "string" == typeof t[r] && ((e = t[r].length), (i = t[r]));
                        return i;
                    })(i)),
                        t.appendChild(r),
                        t.classList.add("has-clone");
                })(),
                m && s());
        };
    },
    function (t, e, i) {
        !(function () {
            "use strict";
            var t,
                e = function (r, n) {
                    function s(t) {
                        return Math.floor(t);
                    }
                    function a() {
                        var t = w.params.autoplay,
                            e = w.slides.eq(w.activeIndex);
                        e.attr("data-swiper-autoplay") && (t = e.attr("data-swiper-autoplay") || w.params.autoplay),
                            (w.autoplayTimeoutId = setTimeout(function () {
                                w.params.loop
                                    ? (w.fixLoop(), w._slideNext(), w.emit("onAutoplay", w))
                                    : w.isEnd
                                    ? n.autoplayStopOnLast
                                        ? w.stopAutoplay()
                                        : (w._slideTo(0), w.emit("onAutoplay", w))
                                    : (w._slideNext(), w.emit("onAutoplay", w));
                            }, t));
                    }
                    function o(e, i) {
                        var r = t(e.target);
                        if (!r.is(i))
                            if ("string" == typeof i) r = r.parents(i);
                            else if (i.nodeType) {
                                var n;
                                return (
                                    r.parents().each(function (t, e) {
                                        e === i && (n = i);
                                    }),
                                    n ? i : void 0
                                );
                            }
                        if (0 !== r.length) return r[0];
                    }
                    function l(t, e) {
                        e = e || {};
                        var i = new (window.MutationObserver || window.WebkitMutationObserver)(function (t) {
                            t.forEach(function (t) {
                                w.onResize(!0), w.emit("onObserverUpdate", w, t);
                            });
                        });
                        i.observe(t, { attributes: void 0 === e.attributes || e.attributes, childList: void 0 === e.childList || e.childList, characterData: void 0 === e.characterData || e.characterData }), w.observers.push(i);
                    }
                    function u(t) {
                        t.originalEvent && (t = t.originalEvent);
                        var e = t.keyCode || t.charCode;
                        if (!w.params.allowSwipeToNext && ((w.isHorizontal() && 39 === e) || (!w.isHorizontal() && 40 === e))) return !1;
                        if (!w.params.allowSwipeToPrev && ((w.isHorizontal() && 37 === e) || (!w.isHorizontal() && 38 === e))) return !1;
                        if (
                            !(
                                t.shiftKey ||
                                t.altKey ||
                                t.ctrlKey ||
                                t.metaKey ||
                                (document.activeElement && document.activeElement.nodeName && ("input" === document.activeElement.nodeName.toLowerCase() || "textarea" === document.activeElement.nodeName.toLowerCase()))
                            )
                        ) {
                            if (37 === e || 39 === e || 38 === e || 40 === e) {
                                var i = !1;
                                if (w.container.parents("." + w.params.slideClass).length > 0 && 0 === w.container.parents("." + w.params.slideActiveClass).length) return;
                                var r = { left: window.pageXOffset, top: window.pageYOffset },
                                    n = window.innerWidth,
                                    s = window.innerHeight,
                                    a = w.container.offset();
                                w.rtl && (a.left = a.left - w.container[0].scrollLeft);
                                for (
                                    var o = [
                                            [a.left, a.top],
                                            [a.left + w.width, a.top],
                                            [a.left, a.top + w.height],
                                            [a.left + w.width, a.top + w.height],
                                        ],
                                        l = 0;
                                    l < o.length;
                                    l++
                                ) {
                                    var u = o[l];
                                    u[0] >= r.left && u[0] <= r.left + n && u[1] >= r.top && u[1] <= r.top + s && (i = !0);
                                }
                                if (!i) return;
                            }
                            w.isHorizontal()
                                ? ((37 !== e && 39 !== e) || (t.preventDefault ? t.preventDefault() : (t.returnValue = !1)),
                                  ((39 === e && !w.rtl) || (37 === e && w.rtl)) && w.slideNext(),
                                  ((37 === e && !w.rtl) || (39 === e && w.rtl)) && w.slidePrev())
                                : ((38 !== e && 40 !== e) || (t.preventDefault ? t.preventDefault() : (t.returnValue = !1)), 40 === e && w.slideNext(), 38 === e && w.slidePrev()),
                                w.emit("onKeyPress", w, e);
                        }
                    }
                    function c(t) {
                        t.originalEvent && (t = t.originalEvent);
                        var e = 0,
                            i = w.rtl ? -1 : 1,
                            r = (function (t) {
                                var e = 0,
                                    i = 0,
                                    r = 0,
                                    n = 0;
                                return (
                                    "detail" in t && (i = t.detail),
                                    "wheelDelta" in t && (i = -t.wheelDelta / 120),
                                    "wheelDeltaY" in t && (i = -t.wheelDeltaY / 120),
                                    "wheelDeltaX" in t && (e = -t.wheelDeltaX / 120),
                                    "axis" in t && t.axis === t.HORIZONTAL_AXIS && ((e = i), (i = 0)),
                                    (r = 10 * e),
                                    (n = 10 * i),
                                    "deltaY" in t && (n = t.deltaY),
                                    "deltaX" in t && (r = t.deltaX),
                                    (r || n) && t.deltaMode && (1 === t.deltaMode ? ((r *= 40), (n *= 40)) : ((r *= 800), (n *= 800))),
                                    r && !e && (e = r < 1 ? -1 : 1),
                                    n && !i && (i = n < 1 ? -1 : 1),
                                    { spinX: e, spinY: i, pixelX: r, pixelY: n }
                                );
                            })(t);
                        if (w.params.mousewheelForceToAxis)
                            if (w.isHorizontal()) {
                                if (!(Math.abs(r.pixelX) > Math.abs(r.pixelY))) return;
                                e = r.pixelX * i;
                            } else {
                                if (!(Math.abs(r.pixelY) > Math.abs(r.pixelX))) return;
                                e = r.pixelY;
                            }
                        else e = Math.abs(r.pixelX) > Math.abs(r.pixelY) ? -r.pixelX * i : -r.pixelY;
                        if (0 !== e) {
                            if ((w.params.mousewheelInvert && (e = -e), w.params.freeMode)) {
                                var n = w.getWrapperTranslate() + e * w.params.mousewheelSensitivity,
                                    s = w.isBeginning,
                                    a = w.isEnd;
                                if (
                                    (n >= w.minTranslate() && (n = w.minTranslate()),
                                    n <= w.maxTranslate() && (n = w.maxTranslate()),
                                    w.setWrapperTransition(0),
                                    w.setWrapperTranslate(n),
                                    w.updateProgress(),
                                    w.updateActiveIndex(),
                                    ((!s && w.isBeginning) || (!a && w.isEnd)) && w.updateClasses(),
                                    w.params.freeModeSticky
                                        ? (clearTimeout(w.mousewheel.timeout),
                                          (w.mousewheel.timeout = setTimeout(function () {
                                              w.slideReset();
                                          }, 300)))
                                        : w.params.lazyLoading && w.lazy && w.lazy.load(),
                                    w.emit("onScroll", w, t),
                                    w.params.autoplay && w.params.autoplayDisableOnInteraction && w.stopAutoplay(),
                                    0 === n || n === w.maxTranslate())
                                )
                                    return;
                            } else {
                                if (new window.Date().getTime() - w.mousewheel.lastScrollTime > 60)
                                    if (e < 0)
                                        if ((w.isEnd && !w.params.loop) || w.animating) {
                                            if (w.params.mousewheelReleaseOnEdges) return !0;
                                        } else w.slideNext(), w.emit("onScroll", w, t);
                                    else if ((w.isBeginning && !w.params.loop) || w.animating) {
                                        if (w.params.mousewheelReleaseOnEdges) return !0;
                                    } else w.slidePrev(), w.emit("onScroll", w, t);
                                w.mousewheel.lastScrollTime = new window.Date().getTime();
                            }
                            return t.preventDefault ? t.preventDefault() : (t.returnValue = !1), !1;
                        }
                    }
                    function h(e, i) {
                        e = t(e);
                        var r,
                            n,
                            s,
                            a = w.rtl ? -1 : 1;
                        (r = e.attr("data-swiper-parallax") || "0"),
                            (n = e.attr("data-swiper-parallax-x")),
                            (s = e.attr("data-swiper-parallax-y")),
                            n || s ? ((n = n || "0"), (s = s || "0")) : w.isHorizontal() ? ((n = r), (s = "0")) : ((s = r), (n = "0")),
                            (n = n.indexOf("%") >= 0 ? parseInt(n, 10) * i * a + "%" : n * i * a + "px"),
                            (s = s.indexOf("%") >= 0 ? parseInt(s, 10) * i + "%" : s * i + "px"),
                            e.transform("translate3d(" + n + ", " + s + ",0px)");
                    }
                    function d(t) {
                        return 0 !== t.indexOf("on") && (t = t[0] !== t[0].toUpperCase() ? "on" + t[0].toUpperCase() + t.substring(1) : "on" + t), t;
                    }
                    if (!(this instanceof e)) return new e(r, n);
                    var p = {
                            direction: "horizontal",
                            touchEventsTarget: "container",
                            initialSlide: 0,
                            speed: 300,
                            autoplay: !1,
                            autoplayDisableOnInteraction: !0,
                            autoplayStopOnLast: !1,
                            iOSEdgeSwipeDetection: !1,
                            iOSEdgeSwipeThreshold: 20,
                            freeMode: !1,
                            freeModeMomentum: !0,
                            freeModeMomentumRatio: 1,
                            freeModeMomentumBounce: !0,
                            freeModeMomentumBounceRatio: 1,
                            freeModeMomentumVelocityRatio: 1,
                            freeModeSticky: !1,
                            freeModeMinimumVelocity: 0.02,
                            autoHeight: !1,
                            setWrapperSize: !1,
                            virtualTranslate: !1,
                            effect: "slide",
                            coverflow: { rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: !0 },
                            flip: { slideShadows: !0, limitRotation: !0 },
                            cube: { slideShadows: !0, shadow: !0, shadowOffset: 20, shadowScale: 0.94 },
                            fade: { crossFade: !1 },
                            parallax: !1,
                            zoom: !1,
                            zoomMax: 3,
                            zoomMin: 1,
                            zoomToggle: !0,
                            scrollbar: null,
                            scrollbarHide: !0,
                            scrollbarDraggable: !1,
                            scrollbarSnapOnRelease: !1,
                            keyboardControl: !1,
                            mousewheelControl: !1,
                            mousewheelReleaseOnEdges: !1,
                            mousewheelInvert: !1,
                            mousewheelForceToAxis: !1,
                            mousewheelSensitivity: 1,
                            mousewheelEventsTarged: "container",
                            hashnav: !1,
                            hashnavWatchState: !1,
                            history: !1,
                            replaceState: !1,
                            breakpoints: void 0,
                            spaceBetween: 0,
                            slidesPerView: 1,
                            slidesPerColumn: 1,
                            slidesPerColumnFill: "column",
                            slidesPerGroup: 1,
                            centeredSlides: !1,
                            slidesOffsetBefore: 0,
                            slidesOffsetAfter: 0,
                            roundLengths: !1,
                            touchRatio: 1,
                            touchAngle: 45,
                            simulateTouch: !0,
                            shortSwipes: !0,
                            longSwipes: !0,
                            longSwipesRatio: 0.5,
                            longSwipesMs: 300,
                            followFinger: !0,
                            onlyExternal: !1,
                            threshold: 0,
                            touchMoveStopPropagation: !0,
                            touchReleaseOnEdges: !1,
                            uniqueNavElements: !0,
                            pagination: null,
                            paginationElement: "span",
                            paginationClickable: !1,
                            paginationHide: !1,
                            paginationBulletRender: null,
                            paginationProgressRender: null,
                            paginationFractionRender: null,
                            paginationCustomRender: null,
                            paginationType: "bullets",
                            resistance: !0,
                            resistanceRatio: 0.85,
                            nextButton: null,
                            prevButton: null,
                            watchSlidesProgress: !1,
                            watchSlidesVisibility: !1,
                            grabCursor: !1,
                            preventClicks: !0,
                            preventClicksPropagation: !0,
                            slideToClickedSlide: !1,
                            lazyLoading: !1,
                            lazyLoadingInPrevNext: !1,
                            lazyLoadingInPrevNextAmount: 1,
                            lazyLoadingOnTransitionStart: !1,
                            preloadImages: !0,
                            updateOnImagesReady: !0,
                            loop: !1,
                            loopAdditionalSlides: 0,
                            loopedSlides: null,
                            control: void 0,
                            controlInverse: !1,
                            controlBy: "slide",
                            normalizeSlideIndex: !0,
                            allowSwipeToPrev: !0,
                            allowSwipeToNext: !0,
                            swipeHandler: null,
                            noSwiping: !0,
                            noSwipingClass: "swiper-no-swiping",
                            passiveListeners: !0,
                            containerModifierClass: "swiper-container-",
                            slideClass: "swiper-slide",
                            slideActiveClass: "swiper-slide-active",
                            slideDuplicateActiveClass: "swiper-slide-duplicate-active",
                            slideVisibleClass: "swiper-slide-visible",
                            slideDuplicateClass: "swiper-slide-duplicate",
                            slideNextClass: "swiper-slide-next",
                            slideDuplicateNextClass: "swiper-slide-duplicate-next",
                            slidePrevClass: "swiper-slide-prev",
                            slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
                            wrapperClass: "swiper-wrapper",
                            bulletClass: "swiper-pagination-bullet",
                            bulletActiveClass: "swiper-pagination-bullet-active",
                            buttonDisabledClass: "swiper-button-disabled",
                            paginationCurrentClass: "swiper-pagination-current",
                            paginationTotalClass: "swiper-pagination-total",
                            paginationHiddenClass: "swiper-pagination-hidden",
                            paginationProgressbarClass: "swiper-pagination-progressbar",
                            paginationClickableClass: "swiper-pagination-clickable",
                            paginationModifierClass: "swiper-pagination-",
                            lazyLoadingClass: "swiper-lazy",
                            lazyStatusLoadingClass: "swiper-lazy-loading",
                            lazyStatusLoadedClass: "swiper-lazy-loaded",
                            lazyPreloaderClass: "swiper-lazy-preloader",
                            notificationClass: "swiper-notification",
                            preloaderClass: "preloader",
                            zoomContainerClass: "swiper-zoom-container",
                            observer: !1,
                            observeParents: !1,
                            a11y: !1,
                            prevSlideMessage: "Previous slide",
                            nextSlideMessage: "Next slide",
                            firstSlideMessage: "This is the first slide",
                            lastSlideMessage: "This is the last slide",
                            paginationBulletMessage: "Go to slide {{index}}",
                            runCallbacksOnInit: !0,
                        },
                        f = n && n.virtualTranslate;
                    n = n || {};
                    var m = {};
                    for (var g in n)
                        if ("object" != typeof n[g] || null === n[g] || n[g].nodeType || n[g] === window || n[g] === document || (void 0 !== i && n[g] instanceof i) || ("undefined" != typeof jQuery && n[g] instanceof jQuery)) m[g] = n[g];
                        else {
                            m[g] = {};
                            for (var v in n[g]) m[g][v] = n[g][v];
                        }
                    for (var y in p)
                        if (void 0 === n[y]) n[y] = p[y];
                        else if ("object" == typeof n[y]) for (var _ in p[y]) void 0 === n[y][_] && (n[y][_] = p[y][_]);
                    var w = this;
                    if (
                        ((w.params = n),
                        (w.originalParams = m),
                        (w.classNames = []),
                        void 0 !== t && void 0 !== i && (t = i),
                        (void 0 !== t || (t = void 0 === i ? window.Dom7 || window.Zepto || window.jQuery : i)) &&
                            ((w.$ = t),
                            (w.currentBreakpoint = void 0),
                            (w.getActiveBreakpoint = function () {
                                if (!w.params.breakpoints) return !1;
                                var t,
                                    e = !1,
                                    i = [];
                                for (t in w.params.breakpoints) w.params.breakpoints.hasOwnProperty(t) && i.push(t);
                                i.sort(function (t, e) {
                                    return parseInt(t, 10) > parseInt(e, 10);
                                });
                                for (var r = 0; r < i.length; r++) (t = i[r]) >= window.innerWidth && !e && (e = t);
                                return e || "max";
                            }),
                            (w.setBreakpoint = function () {
                                var t = w.getActiveBreakpoint();
                                if (t && w.currentBreakpoint !== t) {
                                    var e = t in w.params.breakpoints ? w.params.breakpoints[t] : w.originalParams,
                                        i = w.params.loop && e.slidesPerView !== w.params.slidesPerView;
                                    for (var r in e) w.params[r] = e[r];
                                    (w.currentBreakpoint = t), i && w.destroyLoop && w.reLoop(!0);
                                }
                            }),
                            w.params.breakpoints && w.setBreakpoint(),
                            (w.container = t(r)),
                            0 !== w.container.length))
                    ) {
                        if (w.container.length > 1) {
                            var T = [];
                            return (
                                w.container.each(function () {
                                    T.push(new e(this, n));
                                }),
                                T
                            );
                        }
                        (w.container[0].swiper = w),
                            w.container.data("swiper", w),
                            w.classNames.push(w.params.containerModifierClass + w.params.direction),
                            w.params.freeMode && w.classNames.push(w.params.containerModifierClass + "free-mode"),
                            w.support.flexbox || (w.classNames.push(w.params.containerModifierClass + "no-flexbox"), (w.params.slidesPerColumn = 1)),
                            w.params.autoHeight && w.classNames.push(w.params.containerModifierClass + "autoheight"),
                            (w.params.parallax || w.params.watchSlidesVisibility) && (w.params.watchSlidesProgress = !0),
                            w.params.touchReleaseOnEdges && (w.params.resistanceRatio = 0),
                            ["cube", "coverflow", "flip"].indexOf(w.params.effect) >= 0 &&
                                (w.support.transforms3d ? ((w.params.watchSlidesProgress = !0), w.classNames.push(w.params.containerModifierClass + "3d")) : (w.params.effect = "slide")),
                            "slide" !== w.params.effect && w.classNames.push(w.params.containerModifierClass + w.params.effect),
                            "cube" === w.params.effect &&
                                ((w.params.resistanceRatio = 0),
                                (w.params.slidesPerView = 1),
                                (w.params.slidesPerColumn = 1),
                                (w.params.slidesPerGroup = 1),
                                (w.params.centeredSlides = !1),
                                (w.params.spaceBetween = 0),
                                (w.params.virtualTranslate = !0)),
                            ("fade" !== w.params.effect && "flip" !== w.params.effect) ||
                                ((w.params.slidesPerView = 1),
                                (w.params.slidesPerColumn = 1),
                                (w.params.slidesPerGroup = 1),
                                (w.params.watchSlidesProgress = !0),
                                (w.params.spaceBetween = 0),
                                void 0 === f && (w.params.virtualTranslate = !0)),
                            w.params.grabCursor && w.support.touch && (w.params.grabCursor = !1),
                            (w.wrapper = w.container.children("." + w.params.wrapperClass)),
                            w.params.pagination &&
                                ((w.paginationContainer = t(w.params.pagination)),
                                w.params.uniqueNavElements &&
                                    "string" == typeof w.params.pagination &&
                                    w.paginationContainer.length > 1 &&
                                    1 === w.container.find(w.params.pagination).length &&
                                    (w.paginationContainer = w.container.find(w.params.pagination)),
                                "bullets" === w.params.paginationType && w.params.paginationClickable ? w.paginationContainer.addClass(w.params.paginationModifierClass + "clickable") : (w.params.paginationClickable = !1),
                                w.paginationContainer.addClass(w.params.paginationModifierClass + w.params.paginationType)),
                            (w.params.nextButton || w.params.prevButton) &&
                                (w.params.nextButton &&
                                    ((w.nextButton = t(w.params.nextButton)),
                                    w.params.uniqueNavElements &&
                                        "string" == typeof w.params.nextButton &&
                                        w.nextButton.length > 1 &&
                                        1 === w.container.find(w.params.nextButton).length &&
                                        (w.nextButton = w.container.find(w.params.nextButton))),
                                w.params.prevButton &&
                                    ((w.prevButton = t(w.params.prevButton)),
                                    w.params.uniqueNavElements &&
                                        "string" == typeof w.params.prevButton &&
                                        w.prevButton.length > 1 &&
                                        1 === w.container.find(w.params.prevButton).length &&
                                        (w.prevButton = w.container.find(w.params.prevButton)))),
                            (w.isHorizontal = function () {
                                return "horizontal" === w.params.direction;
                            }),
                            (w.rtl = w.isHorizontal() && ("rtl" === w.container[0].dir.toLowerCase() || "rtl" === w.container.css("direction"))),
                            w.rtl && w.classNames.push(w.params.containerModifierClass + "rtl"),
                            w.rtl && (w.wrongRTL = "-webkit-box" === w.wrapper.css("display")),
                            w.params.slidesPerColumn > 1 && w.classNames.push(w.params.containerModifierClass + "multirow"),
                            w.device.android && w.classNames.push(w.params.containerModifierClass + "android"),
                            w.container.addClass(w.classNames.join(" ")),
                            (w.translate = 0),
                            (w.progress = 0),
                            (w.velocity = 0),
                            (w.lockSwipeToNext = function () {
                                (w.params.allowSwipeToNext = !1), !1 === w.params.allowSwipeToPrev && w.params.grabCursor && w.unsetGrabCursor();
                            }),
                            (w.lockSwipeToPrev = function () {
                                (w.params.allowSwipeToPrev = !1), !1 === w.params.allowSwipeToNext && w.params.grabCursor && w.unsetGrabCursor();
                            }),
                            (w.lockSwipes = function () {
                                (w.params.allowSwipeToNext = w.params.allowSwipeToPrev = !1), w.params.grabCursor && w.unsetGrabCursor();
                            }),
                            (w.unlockSwipeToNext = function () {
                                (w.params.allowSwipeToNext = !0), !0 === w.params.allowSwipeToPrev && w.params.grabCursor && w.setGrabCursor();
                            }),
                            (w.unlockSwipeToPrev = function () {
                                (w.params.allowSwipeToPrev = !0), !0 === w.params.allowSwipeToNext && w.params.grabCursor && w.setGrabCursor();
                            }),
                            (w.unlockSwipes = function () {
                                (w.params.allowSwipeToNext = w.params.allowSwipeToPrev = !0), w.params.grabCursor && w.setGrabCursor();
                            }),
                            (w.setGrabCursor = function (t) {
                                (w.container[0].style.cursor = "move"),
                                    (w.container[0].style.cursor = t ? "-webkit-grabbing" : "-webkit-grab"),
                                    (w.container[0].style.cursor = t ? "-moz-grabbin" : "-moz-grab"),
                                    (w.container[0].style.cursor = t ? "grabbing" : "grab");
                            }),
                            (w.unsetGrabCursor = function () {
                                w.container[0].style.cursor = "";
                            }),
                            w.params.grabCursor && w.setGrabCursor(),
                            (w.imagesToLoad = []),
                            (w.imagesLoaded = 0),
                            (w.loadImage = function (t, e, i, r, n, s) {
                                function a() {
                                    s && s();
                                }
                                var o;
                                t.complete && n ? a() : e ? (((o = new window.Image()).onload = a), (o.onerror = a), r && (o.sizes = r), i && (o.srcset = i), e && (o.src = e)) : a();
                            }),
                            (w.preloadImages = function () {
                                function t() {
                                    void 0 !== w && null !== w && w && (void 0 !== w.imagesLoaded && w.imagesLoaded++, w.imagesLoaded === w.imagesToLoad.length && (w.params.updateOnImagesReady && w.update(), w.emit("onImagesReady", w)));
                                }
                                w.imagesToLoad = w.container.find("img");
                                for (var e = 0; e < w.imagesToLoad.length; e++)
                                    w.loadImage(
                                        w.imagesToLoad[e],
                                        w.imagesToLoad[e].currentSrc || w.imagesToLoad[e].getAttribute("src"),
                                        w.imagesToLoad[e].srcset || w.imagesToLoad[e].getAttribute("srcset"),
                                        w.imagesToLoad[e].sizes || w.imagesToLoad[e].getAttribute("sizes"),
                                        !0,
                                        t
                                    );
                            }),
                            (w.autoplayTimeoutId = void 0),
                            (w.autoplaying = !1),
                            (w.autoplayPaused = !1),
                            (w.startAutoplay = function () {
                                return void 0 === w.autoplayTimeoutId && !!w.params.autoplay && !w.autoplaying && ((w.autoplaying = !0), w.emit("onAutoplayStart", w), void a());
                            }),
                            (w.stopAutoplay = function (t) {
                                w.autoplayTimeoutId && (w.autoplayTimeoutId && clearTimeout(w.autoplayTimeoutId), (w.autoplaying = !1), (w.autoplayTimeoutId = void 0), w.emit("onAutoplayStop", w));
                            }),
                            (w.pauseAutoplay = function (t) {
                                w.autoplayPaused ||
                                    (w.autoplayTimeoutId && clearTimeout(w.autoplayTimeoutId),
                                    (w.autoplayPaused = !0),
                                    0 === t
                                        ? ((w.autoplayPaused = !1), a())
                                        : w.wrapper.transitionEnd(function () {
                                              w && ((w.autoplayPaused = !1), w.autoplaying ? a() : w.stopAutoplay());
                                          }));
                            }),
                            (w.minTranslate = function () {
                                return -w.snapGrid[0];
                            }),
                            (w.maxTranslate = function () {
                                return -w.snapGrid[w.snapGrid.length - 1];
                            }),
                            (w.updateAutoHeight = function () {
                                var t,
                                    e = [],
                                    i = 0;
                                if ("auto" !== w.params.slidesPerView && w.params.slidesPerView > 1)
                                    for (t = 0; t < Math.ceil(w.params.slidesPerView); t++) {
                                        var r = w.activeIndex + t;
                                        if (r > w.slides.length) break;
                                        e.push(w.slides.eq(r)[0]);
                                    }
                                else e.push(w.slides.eq(w.activeIndex)[0]);
                                for (t = 0; t < e.length; t++)
                                    if (void 0 !== e[t]) {
                                        var n = e[t].offsetHeight;
                                        i = n > i ? n : i;
                                    }
                                i && w.wrapper.css("height", i + "px");
                            }),
                            (w.updateContainerSize = function () {
                                var t, e;
                                (t = void 0 !== w.params.width ? w.params.width : w.container[0].clientWidth),
                                    (e = void 0 !== w.params.height ? w.params.height : w.container[0].clientHeight),
                                    (0 === t && w.isHorizontal()) ||
                                        (0 === e && !w.isHorizontal()) ||
                                        ((t = t - parseInt(w.container.css("padding-left"), 10) - parseInt(w.container.css("padding-right"), 10)),
                                        (e = e - parseInt(w.container.css("padding-top"), 10) - parseInt(w.container.css("padding-bottom"), 10)),
                                        (w.width = t),
                                        (w.height = e),
                                        (w.size = w.isHorizontal() ? w.width : w.height));
                            }),
                            (w.updateSlidesSize = function () {
                                (w.slides = w.wrapper.children("." + w.params.slideClass)), (w.snapGrid = []), (w.slidesGrid = []), (w.slidesSizesGrid = []);
                                var t,
                                    e = w.params.spaceBetween,
                                    i = -w.params.slidesOffsetBefore,
                                    r = 0,
                                    n = 0;
                                if (void 0 !== w.size) {
                                    "string" == typeof e && e.indexOf("%") >= 0 && (e = (parseFloat(e.replace("%", "")) / 100) * w.size),
                                        (w.virtualSize = -e),
                                        w.rtl ? w.slides.css({ marginLeft: "", marginTop: "" }) : w.slides.css({ marginRight: "", marginBottom: "" });
                                    var a;
                                    w.params.slidesPerColumn > 1 &&
                                        ((a =
                                            Math.floor(w.slides.length / w.params.slidesPerColumn) === w.slides.length / w.params.slidesPerColumn
                                                ? w.slides.length
                                                : Math.ceil(w.slides.length / w.params.slidesPerColumn) * w.params.slidesPerColumn),
                                        "auto" !== w.params.slidesPerView && "row" === w.params.slidesPerColumnFill && (a = Math.max(a, w.params.slidesPerView * w.params.slidesPerColumn)));
                                    var o,
                                        l = w.params.slidesPerColumn,
                                        u = a / l,
                                        c = u - (w.params.slidesPerColumn * u - w.slides.length);
                                    for (t = 0; t < w.slides.length; t++) {
                                        o = 0;
                                        var h = w.slides.eq(t);
                                        if (w.params.slidesPerColumn > 1) {
                                            var d, p, f;
                                            "column" === w.params.slidesPerColumnFill
                                                ? ((f = t - (p = Math.floor(t / l)) * l),
                                                  (p > c || (p === c && f === l - 1)) && ++f >= l && ((f = 0), p++),
                                                  (d = p + (f * a) / l),
                                                  h.css({ "-webkit-box-ordinal-group": d, "-moz-box-ordinal-group": d, "-ms-flex-order": d, "-webkit-order": d, order: d }))
                                                : (p = t - (f = Math.floor(t / u)) * u),
                                                h
                                                    .css("margin-" + (w.isHorizontal() ? "top" : "left"), 0 !== f && w.params.spaceBetween && w.params.spaceBetween + "px")
                                                    .attr("data-swiper-column", p)
                                                    .attr("data-swiper-row", f);
                                        }
                                        "none" !== h.css("display") &&
                                            ("auto" === w.params.slidesPerView
                                                ? ((o = w.isHorizontal() ? h.outerWidth(!0) : h.outerHeight(!0)), w.params.roundLengths && (o = s(o)))
                                                : ((o = (w.size - (w.params.slidesPerView - 1) * e) / w.params.slidesPerView),
                                                  w.params.roundLengths && (o = s(o)),
                                                  w.isHorizontal() ? (w.slides[t].style.width = o + "px") : (w.slides[t].style.height = o + "px")),
                                            (w.slides[t].swiperSlideSize = o),
                                            w.slidesSizesGrid.push(o),
                                            w.params.centeredSlides
                                                ? ((i = i + o / 2 + r / 2 + e),
                                                  0 === r && 0 !== t && (i = i - w.size / 2 - e),
                                                  0 === t && (i = i - w.size / 2 - e),
                                                  Math.abs(i) < 0.001 && (i = 0),
                                                  n % w.params.slidesPerGroup == 0 && w.snapGrid.push(i),
                                                  w.slidesGrid.push(i))
                                                : (n % w.params.slidesPerGroup == 0 && w.snapGrid.push(i), w.slidesGrid.push(i), (i = i + o + e)),
                                            (w.virtualSize += o + e),
                                            (r = o),
                                            n++);
                                    }
                                    w.virtualSize = Math.max(w.virtualSize, w.size) + w.params.slidesOffsetAfter;
                                    var m;
                                    if (
                                        (w.rtl && w.wrongRTL && ("slide" === w.params.effect || "coverflow" === w.params.effect) && w.wrapper.css({ width: w.virtualSize + w.params.spaceBetween + "px" }),
                                        (w.support.flexbox && !w.params.setWrapperSize) ||
                                            (w.isHorizontal() ? w.wrapper.css({ width: w.virtualSize + w.params.spaceBetween + "px" }) : w.wrapper.css({ height: w.virtualSize + w.params.spaceBetween + "px" })),
                                        w.params.slidesPerColumn > 1 &&
                                            ((w.virtualSize = (o + w.params.spaceBetween) * a),
                                            (w.virtualSize = Math.ceil(w.virtualSize / w.params.slidesPerColumn) - w.params.spaceBetween),
                                            w.isHorizontal() ? w.wrapper.css({ width: w.virtualSize + w.params.spaceBetween + "px" }) : w.wrapper.css({ height: w.virtualSize + w.params.spaceBetween + "px" }),
                                            w.params.centeredSlides))
                                    ) {
                                        for (m = [], t = 0; t < w.snapGrid.length; t++) w.snapGrid[t] < w.virtualSize + w.snapGrid[0] && m.push(w.snapGrid[t]);
                                        w.snapGrid = m;
                                    }
                                    if (!w.params.centeredSlides) {
                                        for (m = [], t = 0; t < w.snapGrid.length; t++) w.snapGrid[t] <= w.virtualSize - w.size && m.push(w.snapGrid[t]);
                                        (w.snapGrid = m), Math.floor(w.virtualSize - w.size) - Math.floor(w.snapGrid[w.snapGrid.length - 1]) > 1 && w.snapGrid.push(w.virtualSize - w.size);
                                    }
                                    0 === w.snapGrid.length && (w.snapGrid = [0]),
                                        0 !== w.params.spaceBetween && (w.isHorizontal() ? (w.rtl ? w.slides.css({ marginLeft: e + "px" }) : w.slides.css({ marginRight: e + "px" })) : w.slides.css({ marginBottom: e + "px" })),
                                        w.params.watchSlidesProgress && w.updateSlidesOffset();
                                }
                            }),
                            (w.updateSlidesOffset = function () {
                                for (var t = 0; t < w.slides.length; t++) w.slides[t].swiperSlideOffset = w.isHorizontal() ? w.slides[t].offsetLeft : w.slides[t].offsetTop;
                            }),
                            (w.currentSlidesPerView = function () {
                                var t,
                                    e,
                                    i = 1;
                                if (w.params.centeredSlides) {
                                    var r,
                                        n = w.slides[w.activeIndex].swiperSlideSize;
                                    for (t = w.activeIndex + 1; t < w.slides.length; t++) w.slides[t] && !r && (i++, (n += w.slides[t].swiperSlideSize) > w.size && (r = !0));
                                    for (e = w.activeIndex - 1; e >= 0; e--) w.slides[e] && !r && (i++, (n += w.slides[e].swiperSlideSize) > w.size && (r = !0));
                                } else for (t = w.activeIndex + 1; t < w.slides.length; t++) w.slidesGrid[t] - w.slidesGrid[w.activeIndex] < w.size && i++;
                                return i;
                            }),
                            (w.updateSlidesProgress = function (t) {
                                if ((void 0 === t && (t = w.translate || 0), 0 !== w.slides.length)) {
                                    void 0 === w.slides[0].swiperSlideOffset && w.updateSlidesOffset();
                                    var e = -t;
                                    w.rtl && (e = t), w.slides.removeClass(w.params.slideVisibleClass);
                                    for (var i = 0; i < w.slides.length; i++) {
                                        var r = w.slides[i],
                                            n = (e + (w.params.centeredSlides ? w.minTranslate() : 0) - r.swiperSlideOffset) / (r.swiperSlideSize + w.params.spaceBetween);
                                        if (w.params.watchSlidesVisibility) {
                                            var s = -(e - r.swiperSlideOffset),
                                                a = s + w.slidesSizesGrid[i];
                                            ((s >= 0 && s < w.size) || (a > 0 && a <= w.size) || (s <= 0 && a >= w.size)) && w.slides.eq(i).addClass(w.params.slideVisibleClass);
                                        }
                                        r.progress = w.rtl ? -n : n;
                                    }
                                }
                            }),
                            (w.updateProgress = function (t) {
                                void 0 === t && (t = w.translate || 0);
                                var e = w.maxTranslate() - w.minTranslate(),
                                    i = w.isBeginning,
                                    r = w.isEnd;
                                0 === e ? ((w.progress = 0), (w.isBeginning = w.isEnd = !0)) : ((w.progress = (t - w.minTranslate()) / e), (w.isBeginning = w.progress <= 0), (w.isEnd = w.progress >= 1)),
                                    w.isBeginning && !i && w.emit("onReachBeginning", w),
                                    w.isEnd && !r && w.emit("onReachEnd", w),
                                    w.params.watchSlidesProgress && w.updateSlidesProgress(t),
                                    w.emit("onProgress", w, w.progress);
                            }),
                            (w.updateActiveIndex = function () {
                                var t,
                                    e,
                                    i,
                                    r = w.rtl ? w.translate : -w.translate;
                                for (e = 0; e < w.slidesGrid.length; e++)
                                    void 0 !== w.slidesGrid[e + 1]
                                        ? r >= w.slidesGrid[e] && r < w.slidesGrid[e + 1] - (w.slidesGrid[e + 1] - w.slidesGrid[e]) / 2
                                            ? (t = e)
                                            : r >= w.slidesGrid[e] && r < w.slidesGrid[e + 1] && (t = e + 1)
                                        : r >= w.slidesGrid[e] && (t = e);
                                w.params.normalizeSlideIndex && (t < 0 || void 0 === t) && (t = 0),
                                    (i = Math.floor(t / w.params.slidesPerGroup)) >= w.snapGrid.length && (i = w.snapGrid.length - 1),
                                    t !== w.activeIndex && ((w.snapIndex = i), (w.previousIndex = w.activeIndex), (w.activeIndex = t), w.updateClasses(), w.updateRealIndex());
                            }),
                            (w.updateRealIndex = function () {
                                w.realIndex = parseInt(w.slides.eq(w.activeIndex).attr("data-swiper-slide-index") || w.activeIndex, 10);
                            }),
                            (w.updateClasses = function () {
                                w.slides.removeClass(
                                    w.params.slideActiveClass +
                                        " " +
                                        w.params.slideNextClass +
                                        " " +
                                        w.params.slidePrevClass +
                                        " " +
                                        w.params.slideDuplicateActiveClass +
                                        " " +
                                        w.params.slideDuplicateNextClass +
                                        " " +
                                        w.params.slideDuplicatePrevClass
                                );
                                var e = w.slides.eq(w.activeIndex);
                                e.addClass(w.params.slideActiveClass),
                                    n.loop &&
                                        (e.hasClass(w.params.slideDuplicateClass)
                                            ? w.wrapper.children("." + w.params.slideClass + ":not(." + w.params.slideDuplicateClass + ')[data-swiper-slide-index="' + w.realIndex + '"]').addClass(w.params.slideDuplicateActiveClass)
                                            : w.wrapper.children("." + w.params.slideClass + "." + w.params.slideDuplicateClass + '[data-swiper-slide-index="' + w.realIndex + '"]').addClass(w.params.slideDuplicateActiveClass));
                                var i = e.next("." + w.params.slideClass).addClass(w.params.slideNextClass);
                                w.params.loop && 0 === i.length && (i = w.slides.eq(0)).addClass(w.params.slideNextClass);
                                var r = e.prev("." + w.params.slideClass).addClass(w.params.slidePrevClass);
                                if (
                                    (w.params.loop && 0 === r.length && (r = w.slides.eq(-1)).addClass(w.params.slidePrevClass),
                                    n.loop &&
                                        (i.hasClass(w.params.slideDuplicateClass)
                                            ? w.wrapper
                                                  .children("." + w.params.slideClass + ":not(." + w.params.slideDuplicateClass + ')[data-swiper-slide-index="' + i.attr("data-swiper-slide-index") + '"]')
                                                  .addClass(w.params.slideDuplicateNextClass)
                                            : w.wrapper
                                                  .children("." + w.params.slideClass + "." + w.params.slideDuplicateClass + '[data-swiper-slide-index="' + i.attr("data-swiper-slide-index") + '"]')
                                                  .addClass(w.params.slideDuplicateNextClass),
                                        r.hasClass(w.params.slideDuplicateClass)
                                            ? w.wrapper
                                                  .children("." + w.params.slideClass + ":not(." + w.params.slideDuplicateClass + ')[data-swiper-slide-index="' + r.attr("data-swiper-slide-index") + '"]')
                                                  .addClass(w.params.slideDuplicatePrevClass)
                                            : w.wrapper
                                                  .children("." + w.params.slideClass + "." + w.params.slideDuplicateClass + '[data-swiper-slide-index="' + r.attr("data-swiper-slide-index") + '"]')
                                                  .addClass(w.params.slideDuplicatePrevClass)),
                                    w.paginationContainer && w.paginationContainer.length > 0)
                                ) {
                                    var s,
                                        a = w.params.loop ? Math.ceil((w.slides.length - 2 * w.loopedSlides) / w.params.slidesPerGroup) : w.snapGrid.length;
                                    if (
                                        (w.params.loop
                                            ? ((s = Math.ceil((w.activeIndex - w.loopedSlides) / w.params.slidesPerGroup)) > w.slides.length - 1 - 2 * w.loopedSlides && (s -= w.slides.length - 2 * w.loopedSlides),
                                              s > a - 1 && (s -= a),
                                              s < 0 && "bullets" !== w.params.paginationType && (s = a + s))
                                            : (s = void 0 !== w.snapIndex ? w.snapIndex : w.activeIndex || 0),
                                        "bullets" === w.params.paginationType &&
                                            w.bullets &&
                                            w.bullets.length > 0 &&
                                            (w.bullets.removeClass(w.params.bulletActiveClass),
                                            w.paginationContainer.length > 1
                                                ? w.bullets.each(function () {
                                                      t(this).index() === s && t(this).addClass(w.params.bulletActiveClass);
                                                  })
                                                : w.bullets.eq(s).addClass(w.params.bulletActiveClass)),
                                        "fraction" === w.params.paginationType && (w.paginationContainer.find("." + w.params.paginationCurrentClass).text(s + 1), w.paginationContainer.find("." + w.params.paginationTotalClass).text(a)),
                                        "progress" === w.params.paginationType)
                                    ) {
                                        var o = (s + 1) / a,
                                            l = o,
                                            u = 1;
                                        w.isHorizontal() || ((u = o), (l = 1)),
                                            w.paginationContainer
                                                .find("." + w.params.paginationProgressbarClass)
                                                .transform("translate3d(0,0,0) scaleX(" + l + ") scaleY(" + u + ")")
                                                .transition(w.params.speed);
                                    }
                                    "custom" === w.params.paginationType &&
                                        w.params.paginationCustomRender &&
                                        (w.paginationContainer.html(w.params.paginationCustomRender(w, s + 1, a)), w.emit("onPaginationRendered", w, w.paginationContainer[0]));
                                }
                                w.params.loop ||
                                    (w.params.prevButton &&
                                        w.prevButton &&
                                        w.prevButton.length > 0 &&
                                        (w.isBeginning
                                            ? (w.prevButton.addClass(w.params.buttonDisabledClass), w.params.a11y && w.a11y && w.a11y.disable(w.prevButton))
                                            : (w.prevButton.removeClass(w.params.buttonDisabledClass), w.params.a11y && w.a11y && w.a11y.enable(w.prevButton))),
                                    w.params.nextButton &&
                                        w.nextButton &&
                                        w.nextButton.length > 0 &&
                                        (w.isEnd
                                            ? (w.nextButton.addClass(w.params.buttonDisabledClass), w.params.a11y && w.a11y && w.a11y.disable(w.nextButton))
                                            : (w.nextButton.removeClass(w.params.buttonDisabledClass), w.params.a11y && w.a11y && w.a11y.enable(w.nextButton))));
                            }),
                            (w.updatePagination = function () {
                                if (w.params.pagination && w.paginationContainer && w.paginationContainer.length > 0) {
                                    var t = "";
                                    if ("bullets" === w.params.paginationType) {
                                        for (var e = w.params.loop ? Math.ceil((w.slides.length - 2 * w.loopedSlides) / w.params.slidesPerGroup) : w.snapGrid.length, i = 0; i < e; i++)
                                            w.params.paginationBulletRender
                                                ? (t += w.params.paginationBulletRender(w, i, w.params.bulletClass))
                                                : (t += "<" + w.params.paginationElement + ' class="' + w.params.bulletClass + '"></' + w.params.paginationElement + ">");
                                        w.paginationContainer.html(t), (w.bullets = w.paginationContainer.find("." + w.params.bulletClass)), w.params.paginationClickable && w.params.a11y && w.a11y && w.a11y.initPagination();
                                    }
                                    "fraction" === w.params.paginationType &&
                                        ((t = w.params.paginationFractionRender
                                            ? w.params.paginationFractionRender(w, w.params.paginationCurrentClass, w.params.paginationTotalClass)
                                            : '<span class="' + w.params.paginationCurrentClass + '"></span> / <span class="' + w.params.paginationTotalClass + '"></span>'),
                                        w.paginationContainer.html(t)),
                                        "progress" === w.params.paginationType &&
                                            ((t = w.params.paginationProgressRender ? w.params.paginationProgressRender(w, w.params.paginationProgressbarClass) : '<span class="' + w.params.paginationProgressbarClass + '"></span>'),
                                            w.paginationContainer.html(t)),
                                        "custom" !== w.params.paginationType && w.emit("onPaginationRendered", w, w.paginationContainer[0]);
                                }
                            }),
                            (w.update = function (t) {
                                function e() {
                                    w.rtl, w.translate;
                                    (i = Math.min(Math.max(w.translate, w.maxTranslate()), w.minTranslate())), w.setWrapperTranslate(i), w.updateActiveIndex(), w.updateClasses();
                                }
                                if (w) {
                                    w.updateContainerSize(), w.updateSlidesSize(), w.updateProgress(), w.updatePagination(), w.updateClasses(), w.params.scrollbar && w.scrollbar && w.scrollbar.set();
                                    var i;
                                    if (t) {
                                        w.controller && w.controller.spline && (w.controller.spline = void 0),
                                            w.params.freeMode
                                                ? (e(), w.params.autoHeight && w.updateAutoHeight())
                                                : (("auto" === w.params.slidesPerView || w.params.slidesPerView > 1) && w.isEnd && !w.params.centeredSlides
                                                      ? w.slideTo(w.slides.length - 1, 0, !1, !0)
                                                      : w.slideTo(w.activeIndex, 0, !1, !0)) || e();
                                    } else w.params.autoHeight && w.updateAutoHeight();
                                }
                            }),
                            (w.onResize = function (t) {
                                w.params.onBeforeResize && w.params.onBeforeResize(w), w.params.breakpoints && w.setBreakpoint();
                                var e = w.params.allowSwipeToPrev,
                                    i = w.params.allowSwipeToNext;
                                (w.params.allowSwipeToPrev = w.params.allowSwipeToNext = !0),
                                    w.updateContainerSize(),
                                    w.updateSlidesSize(),
                                    ("auto" === w.params.slidesPerView || w.params.freeMode || t) && w.updatePagination(),
                                    w.params.scrollbar && w.scrollbar && w.scrollbar.set(),
                                    w.controller && w.controller.spline && (w.controller.spline = void 0);
                                var r = !1;
                                if (w.params.freeMode) {
                                    var n = Math.min(Math.max(w.translate, w.maxTranslate()), w.minTranslate());
                                    w.setWrapperTranslate(n), w.updateActiveIndex(), w.updateClasses(), w.params.autoHeight && w.updateAutoHeight();
                                } else
                                    w.updateClasses(),
                                        (r = ("auto" === w.params.slidesPerView || w.params.slidesPerView > 1) && w.isEnd && !w.params.centeredSlides ? w.slideTo(w.slides.length - 1, 0, !1, !0) : w.slideTo(w.activeIndex, 0, !1, !0));
                                w.params.lazyLoading && !r && w.lazy && w.lazy.load(), (w.params.allowSwipeToPrev = e), (w.params.allowSwipeToNext = i), w.params.onAfterResize && w.params.onAfterResize(w);
                            }),
                            (w.touchEventsDesktop = { start: "mousedown", move: "mousemove", end: "mouseup" }),
                            window.navigator.pointerEnabled
                                ? (w.touchEventsDesktop = { start: "pointerdown", move: "pointermove", end: "pointerup" })
                                : window.navigator.msPointerEnabled && (w.touchEventsDesktop = { start: "MSPointerDown", move: "MSPointerMove", end: "MSPointerUp" }),
                            (w.touchEvents = {
                                start: w.support.touch || !w.params.simulateTouch ? "touchstart" : w.touchEventsDesktop.start,
                                move: w.support.touch || !w.params.simulateTouch ? "touchmove" : w.touchEventsDesktop.move,
                                end: w.support.touch || !w.params.simulateTouch ? "touchend" : w.touchEventsDesktop.end,
                            }),
                            (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && ("container" === w.params.touchEventsTarget ? w.container : w.wrapper).addClass("swiper-wp8-" + w.params.direction),
                            (w.initEvents = function (t) {
                                var e = t ? "off" : "on",
                                    i = t ? "removeEventListener" : "addEventListener",
                                    r = "container" === w.params.touchEventsTarget ? w.container[0] : w.wrapper[0],
                                    s = w.support.touch ? r : document,
                                    a = !!w.params.nested;
                                if (w.browser.ie) r[i](w.touchEvents.start, w.onTouchStart, !1), s[i](w.touchEvents.move, w.onTouchMove, a), s[i](w.touchEvents.end, w.onTouchEnd, !1);
                                else {
                                    if (w.support.touch) {
                                        var o = !("touchstart" !== w.touchEvents.start || !w.support.passiveListener || !w.params.passiveListeners) && { passive: !0, capture: !1 };
                                        r[i](w.touchEvents.start, w.onTouchStart, o), r[i](w.touchEvents.move, w.onTouchMove, a), r[i](w.touchEvents.end, w.onTouchEnd, o);
                                    }
                                    ((n.simulateTouch && !w.device.ios && !w.device.android) || (n.simulateTouch && !w.support.touch && w.device.ios)) &&
                                        (r[i]("mousedown", w.onTouchStart, !1), document[i]("mousemove", w.onTouchMove, a), document[i]("mouseup", w.onTouchEnd, !1));
                                }
                                window[i]("resize", w.onResize),
                                    w.params.nextButton && w.nextButton && w.nextButton.length > 0 && (w.nextButton[e]("click", w.onClickNext), w.params.a11y && w.a11y && w.nextButton[e]("keydown", w.a11y.onEnterKey)),
                                    w.params.prevButton && w.prevButton && w.prevButton.length > 0 && (w.prevButton[e]("click", w.onClickPrev), w.params.a11y && w.a11y && w.prevButton[e]("keydown", w.a11y.onEnterKey)),
                                    w.params.pagination &&
                                        w.params.paginationClickable &&
                                        (w.paginationContainer[e]("click", "." + w.params.bulletClass, w.onClickIndex), w.params.a11y && w.a11y && w.paginationContainer[e]("keydown", "." + w.params.bulletClass, w.a11y.onEnterKey)),
                                    (w.params.preventClicks || w.params.preventClicksPropagation) && r[i]("click", w.preventClicks, !0);
                            }),
                            (w.attachEvents = function () {
                                w.initEvents();
                            }),
                            (w.detachEvents = function () {
                                w.initEvents(!0);
                            }),
                            (w.allowClick = !0),
                            (w.preventClicks = function (t) {
                                w.allowClick || (w.params.preventClicks && t.preventDefault(), w.params.preventClicksPropagation && w.animating && (t.stopPropagation(), t.stopImmediatePropagation()));
                            }),
                            (w.onClickNext = function (t) {
                                t.preventDefault(), (w.isEnd && !w.params.loop) || w.slideNext();
                            }),
                            (w.onClickPrev = function (t) {
                                t.preventDefault(), (w.isBeginning && !w.params.loop) || w.slidePrev();
                            }),
                            (w.onClickIndex = function (e) {
                                e.preventDefault();
                                var i = t(this).index() * w.params.slidesPerGroup;
                                w.params.loop && (i += w.loopedSlides), w.slideTo(i);
                            }),
                            (w.updateClickedSlide = function (e) {
                                var i = o(e, "." + w.params.slideClass),
                                    r = !1;
                                if (i) for (var n = 0; n < w.slides.length; n++) w.slides[n] === i && (r = !0);
                                if (!i || !r) return (w.clickedSlide = void 0), void (w.clickedIndex = void 0);
                                if (((w.clickedSlide = i), (w.clickedIndex = t(i).index()), w.params.slideToClickedSlide && void 0 !== w.clickedIndex && w.clickedIndex !== w.activeIndex)) {
                                    var s,
                                        a = w.clickedIndex,
                                        l = "auto" === w.params.slidesPerView ? w.currentSlidesPerView() : w.params.slidesPerView;
                                    if (w.params.loop) {
                                        if (w.animating) return;
                                        (s = parseInt(t(w.clickedSlide).attr("data-swiper-slide-index"), 10)),
                                            w.params.centeredSlides
                                                ? a < w.loopedSlides - l / 2 || a > w.slides.length - w.loopedSlides + l / 2
                                                    ? (w.fixLoop(),
                                                      (a = w.wrapper
                                                          .children("." + w.params.slideClass + '[data-swiper-slide-index="' + s + '"]:not(.' + w.params.slideDuplicateClass + ")")
                                                          .eq(0)
                                                          .index()),
                                                      setTimeout(function () {
                                                          w.slideTo(a);
                                                      }, 0))
                                                    : w.slideTo(a)
                                                : a > w.slides.length - l
                                                ? (w.fixLoop(),
                                                  (a = w.wrapper
                                                      .children("." + w.params.slideClass + '[data-swiper-slide-index="' + s + '"]:not(.' + w.params.slideDuplicateClass + ")")
                                                      .eq(0)
                                                      .index()),
                                                  setTimeout(function () {
                                                      w.slideTo(a);
                                                  }, 0))
                                                : w.slideTo(a);
                                    } else w.slideTo(a);
                                }
                            });
                        var b,
                            x,
                            S,
                            C,
                            P,
                            E,
                            k,
                            A,
                            M,
                            L,
                            I = "input, select, textarea, button, video",
                            O = Date.now(),
                            z = [];
                        (w.animating = !1), (w.touches = { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 });
                        var R, D;
                        (w.onTouchStart = function (e) {
                            if ((e.originalEvent && (e = e.originalEvent), (R = "touchstart" === e.type) || !("which" in e) || 3 !== e.which))
                                if (w.params.noSwiping && o(e, "." + w.params.noSwipingClass)) w.allowClick = !0;
                                else if (!w.params.swipeHandler || o(e, w.params.swipeHandler)) {
                                    var i = (w.touches.currentX = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX),
                                        r = (w.touches.currentY = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY);
                                    if (!(w.device.ios && w.params.iOSEdgeSwipeDetection && i <= w.params.iOSEdgeSwipeThreshold)) {
                                        if (
                                            ((b = !0),
                                            (x = !1),
                                            (S = !0),
                                            (P = void 0),
                                            (D = void 0),
                                            (w.touches.startX = i),
                                            (w.touches.startY = r),
                                            (C = Date.now()),
                                            (w.allowClick = !0),
                                            w.updateContainerSize(),
                                            (w.swipeDirection = void 0),
                                            w.params.threshold > 0 && (A = !1),
                                            "touchstart" !== e.type)
                                        ) {
                                            var n = !0;
                                            t(e.target).is(I) && (n = !1), document.activeElement && t(document.activeElement).is(I) && document.activeElement.blur(), n && e.preventDefault();
                                        }
                                        w.emit("onTouchStart", w, e);
                                    }
                                }
                        }),
                            (w.onTouchMove = function (e) {
                                if ((e.originalEvent && (e = e.originalEvent), !R || "mousemove" !== e.type)) {
                                    if (e.preventedByNestedSwiper)
                                        return (w.touches.startX = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX), void (w.touches.startY = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY);
                                    if (w.params.onlyExternal)
                                        return (
                                            (w.allowClick = !1),
                                            void (
                                                b &&
                                                ((w.touches.startX = w.touches.currentX = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX),
                                                (w.touches.startY = w.touches.currentY = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY),
                                                (C = Date.now()))
                                            )
                                        );
                                    if (R && w.params.touchReleaseOnEdges && !w.params.loop)
                                        if (w.isHorizontal()) {
                                            if ((w.touches.currentX < w.touches.startX && w.translate <= w.maxTranslate()) || (w.touches.currentX > w.touches.startX && w.translate >= w.minTranslate())) return;
                                        } else if ((w.touches.currentY < w.touches.startY && w.translate <= w.maxTranslate()) || (w.touches.currentY > w.touches.startY && w.translate >= w.minTranslate())) return;
                                    if (R && document.activeElement && e.target === document.activeElement && t(e.target).is(I)) return (x = !0), void (w.allowClick = !1);
                                    if ((S && w.emit("onTouchMove", w, e), !(e.targetTouches && e.targetTouches.length > 1))) {
                                        if (((w.touches.currentX = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX), (w.touches.currentY = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY), void 0 === P)) {
                                            var i;
                                            (w.isHorizontal() && w.touches.currentY === w.touches.startY) || (!w.isHorizontal() && w.touches.currentX === w.touches.startX)
                                                ? (P = !1)
                                                : ((i = (180 * Math.atan2(Math.abs(w.touches.currentY - w.touches.startY), Math.abs(w.touches.currentX - w.touches.startX))) / Math.PI),
                                                  (P = w.isHorizontal() ? i > w.params.touchAngle : 90 - i > w.params.touchAngle));
                                        }
                                        if ((P && w.emit("onTouchMoveOpposite", w, e), void 0 === D && ((w.touches.currentX === w.touches.startX && w.touches.currentY === w.touches.startY) || (D = !0)), b))
                                            if (P) b = !1;
                                            else if (D) {
                                                (w.allowClick = !1),
                                                    w.emit("onSliderMove", w, e),
                                                    e.preventDefault(),
                                                    w.params.touchMoveStopPropagation && !w.params.nested && e.stopPropagation(),
                                                    x ||
                                                        (n.loop && w.fixLoop(),
                                                        (k = w.getWrapperTranslate()),
                                                        w.setWrapperTransition(0),
                                                        w.animating && w.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"),
                                                        w.params.autoplay && w.autoplaying && (w.params.autoplayDisableOnInteraction ? w.stopAutoplay() : w.pauseAutoplay()),
                                                        (L = !1),
                                                        !w.params.grabCursor || (!0 !== w.params.allowSwipeToNext && !0 !== w.params.allowSwipeToPrev) || w.setGrabCursor(!0)),
                                                    (x = !0);
                                                var r = (w.touches.diff = w.isHorizontal() ? w.touches.currentX - w.touches.startX : w.touches.currentY - w.touches.startY);
                                                (r *= w.params.touchRatio), w.rtl && (r = -r), (w.swipeDirection = r > 0 ? "prev" : "next"), (E = r + k);
                                                var s = !0;
                                                if (
                                                    (r > 0 && E > w.minTranslate()
                                                        ? ((s = !1), w.params.resistance && (E = w.minTranslate() - 1 + Math.pow(-w.minTranslate() + k + r, w.params.resistanceRatio)))
                                                        : r < 0 && E < w.maxTranslate() && ((s = !1), w.params.resistance && (E = w.maxTranslate() + 1 - Math.pow(w.maxTranslate() - k - r, w.params.resistanceRatio))),
                                                    s && (e.preventedByNestedSwiper = !0),
                                                    !w.params.allowSwipeToNext && "next" === w.swipeDirection && E < k && (E = k),
                                                    !w.params.allowSwipeToPrev && "prev" === w.swipeDirection && E > k && (E = k),
                                                    w.params.threshold > 0)
                                                ) {
                                                    if (!(Math.abs(r) > w.params.threshold || A)) return void (E = k);
                                                    if (!A)
                                                        return (
                                                            (A = !0),
                                                            (w.touches.startX = w.touches.currentX),
                                                            (w.touches.startY = w.touches.currentY),
                                                            (E = k),
                                                            void (w.touches.diff = w.isHorizontal() ? w.touches.currentX - w.touches.startX : w.touches.currentY - w.touches.startY)
                                                        );
                                                }
                                                w.params.followFinger &&
                                                    ((w.params.freeMode || w.params.watchSlidesProgress) && w.updateActiveIndex(),
                                                    w.params.freeMode &&
                                                        (0 === z.length && z.push({ position: w.touches[w.isHorizontal() ? "startX" : "startY"], time: C }),
                                                        z.push({ position: w.touches[w.isHorizontal() ? "currentX" : "currentY"], time: new window.Date().getTime() })),
                                                    w.updateProgress(E),
                                                    w.setWrapperTranslate(E));
                                            }
                                    }
                                }
                            }),
                            (w.onTouchEnd = function (e) {
                                if ((e.originalEvent && (e = e.originalEvent), S && w.emit("onTouchEnd", w, e), (S = !1), b)) {
                                    w.params.grabCursor && x && b && (!0 === w.params.allowSwipeToNext || !0 === w.params.allowSwipeToPrev) && w.setGrabCursor(!1);
                                    var i = Date.now(),
                                        r = i - C;
                                    if (
                                        (w.allowClick &&
                                            (w.updateClickedSlide(e),
                                            w.emit("onTap", w, e),
                                            r < 300 &&
                                                i - O > 300 &&
                                                (M && clearTimeout(M),
                                                (M = setTimeout(function () {
                                                    w &&
                                                        (w.params.paginationHide && w.paginationContainer.length > 0 && !t(e.target).hasClass(w.params.bulletClass) && w.paginationContainer.toggleClass(w.params.paginationHiddenClass),
                                                        w.emit("onClick", w, e));
                                                }, 300))),
                                            r < 300 && i - O < 300 && (M && clearTimeout(M), w.emit("onDoubleTap", w, e))),
                                        (O = Date.now()),
                                        setTimeout(function () {
                                            w && (w.allowClick = !0);
                                        }, 0),
                                        b && x && w.swipeDirection && 0 !== w.touches.diff && E !== k)
                                    ) {
                                        b = x = !1;
                                        var n;
                                        if (((n = w.params.followFinger ? (w.rtl ? w.translate : -w.translate) : -E), w.params.freeMode)) {
                                            if (n < -w.minTranslate()) return void w.slideTo(w.activeIndex);
                                            if (n > -w.maxTranslate()) return void (w.slides.length < w.snapGrid.length ? w.slideTo(w.snapGrid.length - 1) : w.slideTo(w.slides.length - 1));
                                            if (w.params.freeModeMomentum) {
                                                if (z.length > 1) {
                                                    var s = z.pop(),
                                                        a = z.pop(),
                                                        o = s.position - a.position,
                                                        l = s.time - a.time;
                                                    (w.velocity = o / l),
                                                        (w.velocity = w.velocity / 2),
                                                        Math.abs(w.velocity) < w.params.freeModeMinimumVelocity && (w.velocity = 0),
                                                        (l > 150 || new window.Date().getTime() - s.time > 300) && (w.velocity = 0);
                                                } else w.velocity = 0;
                                                (w.velocity = w.velocity * w.params.freeModeMomentumVelocityRatio), (z.length = 0);
                                                var u = 1e3 * w.params.freeModeMomentumRatio,
                                                    c = w.velocity * u,
                                                    h = w.translate + c;
                                                w.rtl && (h = -h);
                                                var d,
                                                    p = !1,
                                                    f = 20 * Math.abs(w.velocity) * w.params.freeModeMomentumBounceRatio;
                                                if (h < w.maxTranslate()) w.params.freeModeMomentumBounce ? (h + w.maxTranslate() < -f && (h = w.maxTranslate() - f), (d = w.maxTranslate()), (p = !0), (L = !0)) : (h = w.maxTranslate());
                                                else if (h > w.minTranslate()) w.params.freeModeMomentumBounce ? (h - w.minTranslate() > f && (h = w.minTranslate() + f), (d = w.minTranslate()), (p = !0), (L = !0)) : (h = w.minTranslate());
                                                else if (w.params.freeModeSticky) {
                                                    var m,
                                                        g = 0;
                                                    for (g = 0; g < w.snapGrid.length; g += 1)
                                                        if (w.snapGrid[g] > -h) {
                                                            m = g;
                                                            break;
                                                        }
                                                    (h = Math.abs(w.snapGrid[m] - h) < Math.abs(w.snapGrid[m - 1] - h) || "next" === w.swipeDirection ? w.snapGrid[m] : w.snapGrid[m - 1]), w.rtl || (h = -h);
                                                }
                                                if (0 !== w.velocity) u = w.rtl ? Math.abs((-h - w.translate) / w.velocity) : Math.abs((h - w.translate) / w.velocity);
                                                else if (w.params.freeModeSticky) return void w.slideReset();
                                                w.params.freeModeMomentumBounce && p
                                                    ? (w.updateProgress(d),
                                                      w.setWrapperTransition(u),
                                                      w.setWrapperTranslate(h),
                                                      w.onTransitionStart(),
                                                      (w.animating = !0),
                                                      w.wrapper.transitionEnd(function () {
                                                          w &&
                                                              L &&
                                                              (w.emit("onMomentumBounce", w),
                                                              w.setWrapperTransition(w.params.speed),
                                                              w.setWrapperTranslate(d),
                                                              w.wrapper.transitionEnd(function () {
                                                                  w && w.onTransitionEnd();
                                                              }));
                                                      }))
                                                    : w.velocity
                                                    ? (w.updateProgress(h),
                                                      w.setWrapperTransition(u),
                                                      w.setWrapperTranslate(h),
                                                      w.onTransitionStart(),
                                                      w.animating ||
                                                          ((w.animating = !0),
                                                          w.wrapper.transitionEnd(function () {
                                                              w && w.onTransitionEnd();
                                                          })))
                                                    : w.updateProgress(h),
                                                    w.updateActiveIndex();
                                            }
                                            (!w.params.freeModeMomentum || r >= w.params.longSwipesMs) && (w.updateProgress(), w.updateActiveIndex());
                                        } else {
                                            var v,
                                                y = 0,
                                                _ = w.slidesSizesGrid[0];
                                            for (v = 0; v < w.slidesGrid.length; v += w.params.slidesPerGroup)
                                                void 0 !== w.slidesGrid[v + w.params.slidesPerGroup]
                                                    ? n >= w.slidesGrid[v] && n < w.slidesGrid[v + w.params.slidesPerGroup] && ((y = v), (_ = w.slidesGrid[v + w.params.slidesPerGroup] - w.slidesGrid[v]))
                                                    : n >= w.slidesGrid[v] && ((y = v), (_ = w.slidesGrid[w.slidesGrid.length - 1] - w.slidesGrid[w.slidesGrid.length - 2]));
                                            var T = (n - w.slidesGrid[y]) / _;
                                            if (r > w.params.longSwipesMs) {
                                                if (!w.params.longSwipes) return void w.slideTo(w.activeIndex);
                                                "next" === w.swipeDirection && (T >= w.params.longSwipesRatio ? w.slideTo(y + w.params.slidesPerGroup) : w.slideTo(y)),
                                                    "prev" === w.swipeDirection && (T > 1 - w.params.longSwipesRatio ? w.slideTo(y + w.params.slidesPerGroup) : w.slideTo(y));
                                            } else {
                                                if (!w.params.shortSwipes) return void w.slideTo(w.activeIndex);
                                                "next" === w.swipeDirection && w.slideTo(y + w.params.slidesPerGroup), "prev" === w.swipeDirection && w.slideTo(y);
                                            }
                                        }
                                    } else b = x = !1;
                                }
                            }),
                            (w._slideTo = function (t, e) {
                                return w.slideTo(t, e, !0, !0);
                            }),
                            (w.slideTo = function (t, e, i, r) {
                                void 0 === i && (i = !0), void 0 === t && (t = 0), t < 0 && (t = 0), (w.snapIndex = Math.floor(t / w.params.slidesPerGroup)), w.snapIndex >= w.snapGrid.length && (w.snapIndex = w.snapGrid.length - 1);
                                var n = -w.snapGrid[w.snapIndex];
                                if ((w.params.autoplay && w.autoplaying && (r || !w.params.autoplayDisableOnInteraction ? w.pauseAutoplay(e) : w.stopAutoplay()), w.updateProgress(n), w.params.normalizeSlideIndex))
                                    for (var s = 0; s < w.slidesGrid.length; s++) -Math.floor(100 * n) >= Math.floor(100 * w.slidesGrid[s]) && (t = s);
                                return (
                                    !(!w.params.allowSwipeToNext && n < w.translate && n < w.minTranslate()) &&
                                    !(!w.params.allowSwipeToPrev && n > w.translate && n > w.maxTranslate() && (w.activeIndex || 0) !== t) &&
                                    (void 0 === e && (e = w.params.speed),
                                    (w.previousIndex = w.activeIndex || 0),
                                    (w.activeIndex = t),
                                    w.updateRealIndex(),
                                    (w.rtl && -n === w.translate) || (!w.rtl && n === w.translate)
                                        ? (w.params.autoHeight && w.updateAutoHeight(), w.updateClasses(), "slide" !== w.params.effect && w.setWrapperTranslate(n), !1)
                                        : (w.updateClasses(),
                                          w.onTransitionStart(i),
                                          0 === e || w.browser.lteIE9
                                              ? (w.setWrapperTranslate(n), w.setWrapperTransition(0), w.onTransitionEnd(i))
                                              : (w.setWrapperTranslate(n),
                                                w.setWrapperTransition(e),
                                                w.animating ||
                                                    ((w.animating = !0),
                                                    w.wrapper.transitionEnd(function () {
                                                        w && w.onTransitionEnd(i);
                                                    }))),
                                          !0))
                                );
                            }),
                            (w.onTransitionStart = function (t) {
                                void 0 === t && (t = !0),
                                    w.params.autoHeight && w.updateAutoHeight(),
                                    w.lazy && w.lazy.onTransitionStart(),
                                    t &&
                                        (w.emit("onTransitionStart", w),
                                        w.activeIndex !== w.previousIndex && (w.emit("onSlideChangeStart", w), w.activeIndex > w.previousIndex ? w.emit("onSlideNextStart", w) : w.emit("onSlidePrevStart", w)));
                            }),
                            (w.onTransitionEnd = function (t) {
                                (w.animating = !1),
                                    w.setWrapperTransition(0),
                                    void 0 === t && (t = !0),
                                    w.lazy && w.lazy.onTransitionEnd(),
                                    t && (w.emit("onTransitionEnd", w), w.activeIndex !== w.previousIndex && (w.emit("onSlideChangeEnd", w), w.activeIndex > w.previousIndex ? w.emit("onSlideNextEnd", w) : w.emit("onSlidePrevEnd", w))),
                                    w.params.history && w.history && w.history.setHistory(w.params.history, w.activeIndex),
                                    w.params.hashnav && w.hashnav && w.hashnav.setHash();
                            }),
                            (w.slideNext = function (t, e, i) {
                                if (w.params.loop) {
                                    if (w.animating) return !1;
                                    w.fixLoop();
                                    w.container[0].clientLeft;
                                    return w.slideTo(w.activeIndex + w.params.slidesPerGroup, e, t, i);
                                }
                                return w.slideTo(w.activeIndex + w.params.slidesPerGroup, e, t, i);
                            }),
                            (w._slideNext = function (t) {
                                return w.slideNext(!0, t, !0);
                            }),
                            (w.slidePrev = function (t, e, i) {
                                if (w.params.loop) {
                                    if (w.animating) return !1;
                                    w.fixLoop();
                                    w.container[0].clientLeft;
                                    return w.slideTo(w.activeIndex - 1, e, t, i);
                                }
                                return w.slideTo(w.activeIndex - 1, e, t, i);
                            }),
                            (w._slidePrev = function (t) {
                                return w.slidePrev(!0, t, !0);
                            }),
                            (w.slideReset = function (t, e, i) {
                                return w.slideTo(w.activeIndex, e, t);
                            }),
                            (w.disableTouchControl = function () {
                                return (w.params.onlyExternal = !0), !0;
                            }),
                            (w.enableTouchControl = function () {
                                return (w.params.onlyExternal = !1), !0;
                            }),
                            (w.setWrapperTransition = function (t, e) {
                                w.wrapper.transition(t),
                                    "slide" !== w.params.effect && w.effects[w.params.effect] && w.effects[w.params.effect].setTransition(t),
                                    w.params.parallax && w.parallax && w.parallax.setTransition(t),
                                    w.params.scrollbar && w.scrollbar && w.scrollbar.setTransition(t),
                                    w.params.control && w.controller && w.controller.setTransition(t, e),
                                    w.emit("onSetTransition", w, t);
                            }),
                            (w.setWrapperTranslate = function (t, e, i) {
                                var r = 0,
                                    n = 0;
                                w.isHorizontal() ? (r = w.rtl ? -t : t) : (n = t),
                                    w.params.roundLengths && ((r = s(r)), (n = s(n))),
                                    w.params.virtualTranslate || (w.support.transforms3d ? w.wrapper.transform("translate3d(" + r + "px, " + n + "px, 0px)") : w.wrapper.transform("translate(" + r + "px, " + n + "px)")),
                                    (w.translate = w.isHorizontal() ? r : n);
                                var a = w.maxTranslate() - w.minTranslate();
                                (0 === a ? 0 : (t - w.minTranslate()) / a) !== w.progress && w.updateProgress(t),
                                    e && w.updateActiveIndex(),
                                    "slide" !== w.params.effect && w.effects[w.params.effect] && w.effects[w.params.effect].setTranslate(w.translate),
                                    w.params.parallax && w.parallax && w.parallax.setTranslate(w.translate),
                                    w.params.scrollbar && w.scrollbar && w.scrollbar.setTranslate(w.translate),
                                    w.params.control && w.controller && w.controller.setTranslate(w.translate, i),
                                    w.emit("onSetTranslate", w, w.translate);
                            }),
                            (w.getTranslate = function (t, e) {
                                var i, r, n, s;
                                return (
                                    void 0 === e && (e = "x"),
                                    w.params.virtualTranslate
                                        ? w.rtl
                                            ? -w.translate
                                            : w.translate
                                        : ((n = window.getComputedStyle(t, null)),
                                          window.WebKitCSSMatrix
                                              ? ((r = n.transform || n.webkitTransform).split(",").length > 6 &&
                                                    (r = r
                                                        .split(", ")
                                                        .map(function (t) {
                                                            return t.replace(",", ".");
                                                        })
                                                        .join(", ")),
                                                (s = new window.WebKitCSSMatrix("none" === r ? "" : r)))
                                              : (i = (s = n.MozTransform || n.OTransform || n.MsTransform || n.msTransform || n.transform || n.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"))
                                                    .toString()
                                                    .split(",")),
                                          "x" === e && (r = window.WebKitCSSMatrix ? s.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])),
                                          "y" === e && (r = window.WebKitCSSMatrix ? s.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])),
                                          w.rtl && r && (r = -r),
                                          r || 0)
                                );
                            }),
                            (w.getWrapperTranslate = function (t) {
                                return void 0 === t && (t = w.isHorizontal() ? "x" : "y"), w.getTranslate(w.wrapper[0], t);
                            }),
                            (w.observers = []),
                            (w.initObservers = function () {
                                if (w.params.observeParents) for (var t = w.container.parents(), e = 0; e < t.length; e++) l(t[e]);
                                l(w.container[0], { childList: !1 }), l(w.wrapper[0], { attributes: !1 });
                            }),
                            (w.disconnectObservers = function () {
                                for (var t = 0; t < w.observers.length; t++) w.observers[t].disconnect();
                                w.observers = [];
                            }),
                            (w.createLoop = function () {
                                w.wrapper.children("." + w.params.slideClass + "." + w.params.slideDuplicateClass).remove();
                                var e = w.wrapper.children("." + w.params.slideClass);
                                "auto" !== w.params.slidesPerView || w.params.loopedSlides || (w.params.loopedSlides = e.length),
                                    (w.loopedSlides = parseInt(w.params.loopedSlides || w.params.slidesPerView, 10)),
                                    (w.loopedSlides = w.loopedSlides + w.params.loopAdditionalSlides),
                                    w.loopedSlides > e.length && (w.loopedSlides = e.length);
                                var i,
                                    r = [],
                                    n = [];
                                for (
                                    e.each(function (i, s) {
                                        var a = t(this);
                                        i < w.loopedSlides && n.push(s), i < e.length && i >= e.length - w.loopedSlides && r.push(s), a.attr("data-swiper-slide-index", i);
                                    }),
                                        i = 0;
                                    i < n.length;
                                    i++
                                )
                                    w.wrapper.append(t(n[i].cloneNode(!0)).addClass(w.params.slideDuplicateClass));
                                for (i = r.length - 1; i >= 0; i--) w.wrapper.prepend(t(r[i].cloneNode(!0)).addClass(w.params.slideDuplicateClass));
                            }),
                            (w.destroyLoop = function () {
                                w.wrapper.children("." + w.params.slideClass + "." + w.params.slideDuplicateClass).remove(), w.slides.removeAttr("data-swiper-slide-index");
                            }),
                            (w.reLoop = function (t) {
                                var e = w.activeIndex - w.loopedSlides;
                                w.destroyLoop(), w.createLoop(), w.updateSlidesSize(), t && w.slideTo(e + w.loopedSlides, 0, !1);
                            }),
                            (w.fixLoop = function () {
                                var t;
                                w.activeIndex < w.loopedSlides
                                    ? ((t = w.slides.length - 3 * w.loopedSlides + w.activeIndex), (t += w.loopedSlides), w.slideTo(t, 0, !1, !0))
                                    : (("auto" === w.params.slidesPerView && w.activeIndex >= 2 * w.loopedSlides) || w.activeIndex > w.slides.length - 2 * w.params.slidesPerView) &&
                                      ((t = -w.slides.length + w.activeIndex + w.loopedSlides), (t += w.loopedSlides), w.slideTo(t, 0, !1, !0));
                            }),
                            (w.appendSlide = function (t) {
                                if ((w.params.loop && w.destroyLoop(), "object" == typeof t && t.length)) for (var e = 0; e < t.length; e++) t[e] && w.wrapper.append(t[e]);
                                else w.wrapper.append(t);
                                w.params.loop && w.createLoop(), (w.params.observer && w.support.observer) || w.update(!0);
                            }),
                            (w.prependSlide = function (t) {
                                w.params.loop && w.destroyLoop();
                                var e = w.activeIndex + 1;
                                if ("object" == typeof t && t.length) {
                                    for (var i = 0; i < t.length; i++) t[i] && w.wrapper.prepend(t[i]);
                                    e = w.activeIndex + t.length;
                                } else w.wrapper.prepend(t);
                                w.params.loop && w.createLoop(), (w.params.observer && w.support.observer) || w.update(!0), w.slideTo(e, 0, !1);
                            }),
                            (w.removeSlide = function (t) {
                                w.params.loop && (w.destroyLoop(), (w.slides = w.wrapper.children("." + w.params.slideClass)));
                                var e,
                                    i = w.activeIndex;
                                if ("object" == typeof t && t.length) {
                                    for (var r = 0; r < t.length; r++) (e = t[r]), w.slides[e] && w.slides.eq(e).remove(), e < i && i--;
                                    i = Math.max(i, 0);
                                } else (e = t), w.slides[e] && w.slides.eq(e).remove(), e < i && i--, (i = Math.max(i, 0));
                                w.params.loop && w.createLoop(), (w.params.observer && w.support.observer) || w.update(!0), w.params.loop ? w.slideTo(i + w.loopedSlides, 0, !1) : w.slideTo(i, 0, !1);
                            }),
                            (w.removeAllSlides = function () {
                                for (var t = [], e = 0; e < w.slides.length; e++) t.push(e);
                                w.removeSlide(t);
                            }),
                            (w.effects = {
                                fade: {
                                    setTranslate: function () {
                                        for (var t = 0; t < w.slides.length; t++) {
                                            var e = w.slides.eq(t),
                                                i = -e[0].swiperSlideOffset;
                                            w.params.virtualTranslate || (i -= w.translate);
                                            var r = 0;
                                            w.isHorizontal() || ((r = i), (i = 0));
                                            var n = w.params.fade.crossFade ? Math.max(1 - Math.abs(e[0].progress), 0) : 1 + Math.min(Math.max(e[0].progress, -1), 0);
                                            e.css({ opacity: n }).transform("translate3d(" + i + "px, " + r + "px, 0px)");
                                        }
                                    },
                                    setTransition: function (t) {
                                        if ((w.slides.transition(t), w.params.virtualTranslate && 0 !== t)) {
                                            var e = !1;
                                            w.slides.transitionEnd(function () {
                                                if (!e && w) {
                                                    (e = !0), (w.animating = !1);
                                                    for (var t = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], i = 0; i < t.length; i++) w.wrapper.trigger(t[i]);
                                                }
                                            });
                                        }
                                    },
                                },
                                flip: {
                                    setTranslate: function () {
                                        for (var e = 0; e < w.slides.length; e++) {
                                            var i = w.slides.eq(e),
                                                r = i[0].progress;
                                            w.params.flip.limitRotation && (r = Math.max(Math.min(i[0].progress, 1), -1));
                                            var n = -180 * r,
                                                s = 0,
                                                a = -i[0].swiperSlideOffset,
                                                o = 0;
                                            if ((w.isHorizontal() ? w.rtl && (n = -n) : ((o = a), (a = 0), (s = -n), (n = 0)), (i[0].style.zIndex = -Math.abs(Math.round(r)) + w.slides.length), w.params.flip.slideShadows)) {
                                                var l = w.isHorizontal() ? i.find(".swiper-slide-shadow-left") : i.find(".swiper-slide-shadow-top"),
                                                    u = w.isHorizontal() ? i.find(".swiper-slide-shadow-right") : i.find(".swiper-slide-shadow-bottom");
                                                0 === l.length && ((l = t('<div class="swiper-slide-shadow-' + (w.isHorizontal() ? "left" : "top") + '"></div>')), i.append(l)),
                                                    0 === u.length && ((u = t('<div class="swiper-slide-shadow-' + (w.isHorizontal() ? "right" : "bottom") + '"></div>')), i.append(u)),
                                                    l.length && (l[0].style.opacity = Math.max(-r, 0)),
                                                    u.length && (u[0].style.opacity = Math.max(r, 0));
                                            }
                                            i.transform("translate3d(" + a + "px, " + o + "px, 0px) rotateX(" + s + "deg) rotateY(" + n + "deg)");
                                        }
                                    },
                                    setTransition: function (e) {
                                        if ((w.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), w.params.virtualTranslate && 0 !== e)) {
                                            var i = !1;
                                            w.slides.eq(w.activeIndex).transitionEnd(function () {
                                                if (!i && w && t(this).hasClass(w.params.slideActiveClass)) {
                                                    (i = !0), (w.animating = !1);
                                                    for (var e = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], r = 0; r < e.length; r++) w.wrapper.trigger(e[r]);
                                                }
                                            });
                                        }
                                    },
                                },
                                cube: {
                                    setTranslate: function () {
                                        var e,
                                            i = 0;
                                        w.params.cube.shadow &&
                                            (w.isHorizontal()
                                                ? (0 === (e = w.wrapper.find(".swiper-cube-shadow")).length && ((e = t('<div class="swiper-cube-shadow"></div>')), w.wrapper.append(e)), e.css({ height: w.width + "px" }))
                                                : 0 === (e = w.container.find(".swiper-cube-shadow")).length && ((e = t('<div class="swiper-cube-shadow"></div>')), w.container.append(e)));
                                        for (var r = 0; r < w.slides.length; r++) {
                                            var n = w.slides.eq(r),
                                                s = 90 * r,
                                                a = Math.floor(s / 360);
                                            w.rtl && ((s = -s), (a = Math.floor(-s / 360)));
                                            var o = Math.max(Math.min(n[0].progress, 1), -1),
                                                l = 0,
                                                u = 0,
                                                c = 0;
                                            r % 4 == 0
                                                ? ((l = 4 * -a * w.size), (c = 0))
                                                : (r - 1) % 4 == 0
                                                ? ((l = 0), (c = 4 * -a * w.size))
                                                : (r - 2) % 4 == 0
                                                ? ((l = w.size + 4 * a * w.size), (c = w.size))
                                                : (r - 3) % 4 == 0 && ((l = -w.size), (c = 3 * w.size + 4 * w.size * a)),
                                                w.rtl && (l = -l),
                                                w.isHorizontal() || ((u = l), (l = 0));
                                            var h = "rotateX(" + (w.isHorizontal() ? 0 : -s) + "deg) rotateY(" + (w.isHorizontal() ? s : 0) + "deg) translate3d(" + l + "px, " + u + "px, " + c + "px)";
                                            if ((o <= 1 && o > -1 && ((i = 90 * r + 90 * o), w.rtl && (i = 90 * -r - 90 * o)), n.transform(h), w.params.cube.slideShadows)) {
                                                var d = w.isHorizontal() ? n.find(".swiper-slide-shadow-left") : n.find(".swiper-slide-shadow-top"),
                                                    p = w.isHorizontal() ? n.find(".swiper-slide-shadow-right") : n.find(".swiper-slide-shadow-bottom");
                                                0 === d.length && ((d = t('<div class="swiper-slide-shadow-' + (w.isHorizontal() ? "left" : "top") + '"></div>')), n.append(d)),
                                                    0 === p.length && ((p = t('<div class="swiper-slide-shadow-' + (w.isHorizontal() ? "right" : "bottom") + '"></div>')), n.append(p)),
                                                    d.length && (d[0].style.opacity = Math.max(-o, 0)),
                                                    p.length && (p[0].style.opacity = Math.max(o, 0));
                                            }
                                        }
                                        if (
                                            (w.wrapper.css({
                                                "-webkit-transform-origin": "50% 50% -" + w.size / 2 + "px",
                                                "-moz-transform-origin": "50% 50% -" + w.size / 2 + "px",
                                                "-ms-transform-origin": "50% 50% -" + w.size / 2 + "px",
                                                "transform-origin": "50% 50% -" + w.size / 2 + "px",
                                            }),
                                            w.params.cube.shadow)
                                        )
                                            if (w.isHorizontal())
                                                e.transform("translate3d(0px, " + (w.width / 2 + w.params.cube.shadowOffset) + "px, " + -w.width / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + w.params.cube.shadowScale + ")");
                                            else {
                                                var f = Math.abs(i) - 90 * Math.floor(Math.abs(i) / 90),
                                                    m = 1.5 - (Math.sin((2 * f * Math.PI) / 360) / 2 + Math.cos((2 * f * Math.PI) / 360) / 2),
                                                    g = w.params.cube.shadowScale,
                                                    v = w.params.cube.shadowScale / m,
                                                    y = w.params.cube.shadowOffset;
                                                e.transform("scale3d(" + g + ", 1, " + v + ") translate3d(0px, " + (w.height / 2 + y) + "px, " + -w.height / 2 / v + "px) rotateX(-90deg)");
                                            }
                                        var _ = w.isSafari || w.isUiWebView ? -w.size / 2 : 0;
                                        w.wrapper.transform("translate3d(0px,0," + _ + "px) rotateX(" + (w.isHorizontal() ? 0 : i) + "deg) rotateY(" + (w.isHorizontal() ? -i : 0) + "deg)");
                                    },
                                    setTransition: function (t) {
                                        w.slides.transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t),
                                            w.params.cube.shadow && !w.isHorizontal() && w.container.find(".swiper-cube-shadow").transition(t);
                                    },
                                },
                                coverflow: {
                                    setTranslate: function () {
                                        for (
                                            var e = w.translate,
                                                i = w.isHorizontal() ? -e + w.width / 2 : -e + w.height / 2,
                                                r = w.isHorizontal() ? w.params.coverflow.rotate : -w.params.coverflow.rotate,
                                                n = w.params.coverflow.depth,
                                                s = 0,
                                                a = w.slides.length;
                                            s < a;
                                            s++
                                        ) {
                                            var o = w.slides.eq(s),
                                                l = w.slidesSizesGrid[s],
                                                u = ((i - o[0].swiperSlideOffset - l / 2) / l) * w.params.coverflow.modifier,
                                                c = w.isHorizontal() ? r * u : 0,
                                                h = w.isHorizontal() ? 0 : r * u,
                                                d = -n * Math.abs(u),
                                                p = w.isHorizontal() ? 0 : w.params.coverflow.stretch * u,
                                                f = w.isHorizontal() ? w.params.coverflow.stretch * u : 0;
                                            Math.abs(f) < 0.001 && (f = 0), Math.abs(p) < 0.001 && (p = 0), Math.abs(d) < 0.001 && (d = 0), Math.abs(c) < 0.001 && (c = 0), Math.abs(h) < 0.001 && (h = 0);
                                            var m = "translate3d(" + f + "px," + p + "px," + d + "px)  rotateX(" + h + "deg) rotateY(" + c + "deg)";
                                            if ((o.transform(m), (o[0].style.zIndex = 1 - Math.abs(Math.round(u))), w.params.coverflow.slideShadows)) {
                                                var g = w.isHorizontal() ? o.find(".swiper-slide-shadow-left") : o.find(".swiper-slide-shadow-top"),
                                                    v = w.isHorizontal() ? o.find(".swiper-slide-shadow-right") : o.find(".swiper-slide-shadow-bottom");
                                                0 === g.length && ((g = t('<div class="swiper-slide-shadow-' + (w.isHorizontal() ? "left" : "top") + '"></div>')), o.append(g)),
                                                    0 === v.length && ((v = t('<div class="swiper-slide-shadow-' + (w.isHorizontal() ? "right" : "bottom") + '"></div>')), o.append(v)),
                                                    g.length && (g[0].style.opacity = u > 0 ? u : 0),
                                                    v.length && (v[0].style.opacity = -u > 0 ? -u : 0);
                                            }
                                        }
                                        if (w.browser.ie) {
                                            w.wrapper[0].style.perspectiveOrigin = i + "px 50%";
                                        }
                                    },
                                    setTransition: function (t) {
                                        w.slides.transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t);
                                    },
                                },
                            }),
                            (w.lazy = {
                                initialImageLoaded: !1,
                                loadImageInSlide: function (e, i) {
                                    if (void 0 !== e && (void 0 === i && (i = !0), 0 !== w.slides.length)) {
                                        var r = w.slides.eq(e),
                                            n = r.find("." + w.params.lazyLoadingClass + ":not(." + w.params.lazyStatusLoadedClass + "):not(." + w.params.lazyStatusLoadingClass + ")");
                                        !r.hasClass(w.params.lazyLoadingClass) || r.hasClass(w.params.lazyStatusLoadedClass) || r.hasClass(w.params.lazyStatusLoadingClass) || (n = n.add(r[0])),
                                            0 !== n.length &&
                                                n.each(function () {
                                                    var e = t(this);
                                                    e.addClass(w.params.lazyStatusLoadingClass);
                                                    var n = e.attr("data-background"),
                                                        s = e.attr("data-src"),
                                                        a = e.attr("data-srcset"),
                                                        o = e.attr("data-sizes");
                                                    w.loadImage(e[0], s || n, a, o, !1, function () {
                                                        if (void 0 !== w && null !== w && w) {
                                                            if (
                                                                (n
                                                                    ? (e.css("background-image", 'url("' + n + '")'), e.removeAttr("data-background"))
                                                                    : (a && (e.attr("srcset", a), e.removeAttr("data-srcset")), o && (e.attr("sizes", o), e.removeAttr("data-sizes")), s && (e.attr("src", s), e.removeAttr("data-src"))),
                                                                e.addClass(w.params.lazyStatusLoadedClass).removeClass(w.params.lazyStatusLoadingClass),
                                                                r.find("." + w.params.lazyPreloaderClass + ", ." + w.params.preloaderClass).remove(),
                                                                w.params.loop && i)
                                                            ) {
                                                                var t = r.attr("data-swiper-slide-index");
                                                                if (r.hasClass(w.params.slideDuplicateClass)) {
                                                                    var l = w.wrapper.children('[data-swiper-slide-index="' + t + '"]:not(.' + w.params.slideDuplicateClass + ")");
                                                                    w.lazy.loadImageInSlide(l.index(), !1);
                                                                } else {
                                                                    var u = w.wrapper.children("." + w.params.slideDuplicateClass + '[data-swiper-slide-index="' + t + '"]');
                                                                    w.lazy.loadImageInSlide(u.index(), !1);
                                                                }
                                                            }
                                                            w.emit("onLazyImageReady", w, r[0], e[0]);
                                                        }
                                                    }),
                                                        w.emit("onLazyImageLoad", w, r[0], e[0]);
                                                });
                                    }
                                },
                                load: function () {
                                    var e,
                                        i = w.params.slidesPerView;
                                    if (("auto" === i && (i = 0), w.lazy.initialImageLoaded || (w.lazy.initialImageLoaded = !0), w.params.watchSlidesVisibility))
                                        w.wrapper.children("." + w.params.slideVisibleClass).each(function () {
                                            w.lazy.loadImageInSlide(t(this).index());
                                        });
                                    else if (i > 1) for (e = w.activeIndex; e < w.activeIndex + i; e++) w.slides[e] && w.lazy.loadImageInSlide(e);
                                    else w.lazy.loadImageInSlide(w.activeIndex);
                                    if (w.params.lazyLoadingInPrevNext)
                                        if (i > 1 || (w.params.lazyLoadingInPrevNextAmount && w.params.lazyLoadingInPrevNextAmount > 1)) {
                                            var r = w.params.lazyLoadingInPrevNextAmount,
                                                n = i,
                                                s = Math.min(w.activeIndex + n + Math.max(r, n), w.slides.length),
                                                a = Math.max(w.activeIndex - Math.max(n, r), 0);
                                            for (e = w.activeIndex + i; e < s; e++) w.slides[e] && w.lazy.loadImageInSlide(e);
                                            for (e = a; e < w.activeIndex; e++) w.slides[e] && w.lazy.loadImageInSlide(e);
                                        } else {
                                            var o = w.wrapper.children("." + w.params.slideNextClass);
                                            o.length > 0 && w.lazy.loadImageInSlide(o.index());
                                            var l = w.wrapper.children("." + w.params.slidePrevClass);
                                            l.length > 0 && w.lazy.loadImageInSlide(l.index());
                                        }
                                },
                                onTransitionStart: function () {
                                    w.params.lazyLoading && (w.params.lazyLoadingOnTransitionStart || (!w.params.lazyLoadingOnTransitionStart && !w.lazy.initialImageLoaded)) && w.lazy.load();
                                },
                                onTransitionEnd: function () {
                                    w.params.lazyLoading && !w.params.lazyLoadingOnTransitionStart && w.lazy.load();
                                },
                            }),
                            (w.scrollbar = {
                                isTouched: !1,
                                setDragPosition: function (t) {
                                    var e = w.scrollbar,
                                        i =
                                            (w.isHorizontal()
                                                ? "touchstart" === t.type || "touchmove" === t.type
                                                    ? t.targetTouches[0].pageX
                                                    : t.pageX || t.clientX
                                                : "touchstart" === t.type || "touchmove" === t.type
                                                ? t.targetTouches[0].pageY
                                                : t.pageY || t.clientY) -
                                            e.track.offset()[w.isHorizontal() ? "left" : "top"] -
                                            e.dragSize / 2,
                                        r = -w.minTranslate() * e.moveDivider,
                                        n = -w.maxTranslate() * e.moveDivider;
                                    i < r ? (i = r) : i > n && (i = n), (i = -i / e.moveDivider), w.updateProgress(i), w.setWrapperTranslate(i, !0);
                                },
                                dragStart: function (t) {
                                    var e = w.scrollbar;
                                    (e.isTouched = !0),
                                        t.preventDefault(),
                                        t.stopPropagation(),
                                        e.setDragPosition(t),
                                        clearTimeout(e.dragTimeout),
                                        e.track.transition(0),
                                        w.params.scrollbarHide && e.track.css("opacity", 1),
                                        w.wrapper.transition(100),
                                        e.drag.transition(100),
                                        w.emit("onScrollbarDragStart", w);
                                },
                                dragMove: function (t) {
                                    var e = w.scrollbar;
                                    e.isTouched && (t.preventDefault ? t.preventDefault() : (t.returnValue = !1), e.setDragPosition(t), w.wrapper.transition(0), e.track.transition(0), e.drag.transition(0), w.emit("onScrollbarDragMove", w));
                                },
                                dragEnd: function (t) {
                                    var e = w.scrollbar;
                                    e.isTouched &&
                                        ((e.isTouched = !1),
                                        w.params.scrollbarHide &&
                                            (clearTimeout(e.dragTimeout),
                                            (e.dragTimeout = setTimeout(function () {
                                                e.track.css("opacity", 0), e.track.transition(400);
                                            }, 1e3))),
                                        w.emit("onScrollbarDragEnd", w),
                                        w.params.scrollbarSnapOnRelease && w.slideReset());
                                },
                                draggableEvents: !1 !== w.params.simulateTouch || w.support.touch ? w.touchEvents : w.touchEventsDesktop,
                                enableDraggable: function () {
                                    var e = w.scrollbar,
                                        i = w.support.touch ? e.track : document;
                                    t(e.track).on(e.draggableEvents.start, e.dragStart), t(i).on(e.draggableEvents.move, e.dragMove), t(i).on(e.draggableEvents.end, e.dragEnd);
                                },
                                disableDraggable: function () {
                                    var e = w.scrollbar,
                                        i = w.support.touch ? e.track : document;
                                    t(e.track).off(e.draggableEvents.start, e.dragStart), t(i).off(e.draggableEvents.move, e.dragMove), t(i).off(e.draggableEvents.end, e.dragEnd);
                                },
                                set: function () {
                                    if (w.params.scrollbar) {
                                        var e = w.scrollbar;
                                        (e.track = t(w.params.scrollbar)),
                                            w.params.uniqueNavElements && "string" == typeof w.params.scrollbar && e.track.length > 1 && 1 === w.container.find(w.params.scrollbar).length && (e.track = w.container.find(w.params.scrollbar)),
                                            (e.drag = e.track.find(".swiper-scrollbar-drag")),
                                            0 === e.drag.length && ((e.drag = t('<div class="swiper-scrollbar-drag"></div>')), e.track.append(e.drag)),
                                            (e.drag[0].style.width = ""),
                                            (e.drag[0].style.height = ""),
                                            (e.trackSize = w.isHorizontal() ? e.track[0].offsetWidth : e.track[0].offsetHeight),
                                            (e.divider = w.size / w.virtualSize),
                                            (e.moveDivider = e.divider * (e.trackSize / w.size)),
                                            (e.dragSize = e.trackSize * e.divider),
                                            w.isHorizontal() ? (e.drag[0].style.width = e.dragSize + "px") : (e.drag[0].style.height = e.dragSize + "px"),
                                            e.divider >= 1 ? (e.track[0].style.display = "none") : (e.track[0].style.display = ""),
                                            w.params.scrollbarHide && (e.track[0].style.opacity = 0);
                                    }
                                },
                                setTranslate: function () {
                                    if (w.params.scrollbar) {
                                        var t,
                                            e = w.scrollbar,
                                            i = (w.translate, e.dragSize);
                                        (t = (e.trackSize - e.dragSize) * w.progress),
                                            w.rtl && w.isHorizontal()
                                                ? (t = -t) > 0
                                                    ? ((i = e.dragSize - t), (t = 0))
                                                    : -t + e.dragSize > e.trackSize && (i = e.trackSize + t)
                                                : t < 0
                                                ? ((i = e.dragSize + t), (t = 0))
                                                : t + e.dragSize > e.trackSize && (i = e.trackSize - t),
                                            w.isHorizontal()
                                                ? (w.support.transforms3d ? e.drag.transform("translate3d(" + t + "px, 0, 0)") : e.drag.transform("translateX(" + t + "px)"), (e.drag[0].style.width = i + "px"))
                                                : (w.support.transforms3d ? e.drag.transform("translate3d(0px, " + t + "px, 0)") : e.drag.transform("translateY(" + t + "px)"), (e.drag[0].style.height = i + "px")),
                                            w.params.scrollbarHide &&
                                                (clearTimeout(e.timeout),
                                                (e.track[0].style.opacity = 1),
                                                (e.timeout = setTimeout(function () {
                                                    (e.track[0].style.opacity = 0), e.track.transition(400);
                                                }, 1e3)));
                                    }
                                },
                                setTransition: function (t) {
                                    w.params.scrollbar && w.scrollbar.drag.transition(t);
                                },
                            }),
                            (w.controller = {
                                LinearSpline: function (t, e) {
                                    var i = (function () {
                                        var t, e, i;
                                        return function (r, n) {
                                            for (e = -1, t = r.length; t - e > 1; ) r[(i = (t + e) >> 1)] <= n ? (e = i) : (t = i);
                                            return t;
                                        };
                                    })();
                                    (this.x = t), (this.y = e), (this.lastIndex = t.length - 1);
                                    var r, n;
                                    this.x.length;
                                    this.interpolate = function (t) {
                                        return t ? ((n = i(this.x, t)), (r = n - 1), ((t - this.x[r]) * (this.y[n] - this.y[r])) / (this.x[n] - this.x[r]) + this.y[r]) : 0;
                                    };
                                },
                                getInterpolateFunction: function (t) {
                                    w.controller.spline || (w.controller.spline = w.params.loop ? new w.controller.LinearSpline(w.slidesGrid, t.slidesGrid) : new w.controller.LinearSpline(w.snapGrid, t.snapGrid));
                                },
                                setTranslate: function (t, i) {
                                    function r(e) {
                                        (t = e.rtl && "horizontal" === e.params.direction ? -w.translate : w.translate),
                                            "slide" === w.params.controlBy && (w.controller.getInterpolateFunction(e), (s = -w.controller.spline.interpolate(-t))),
                                            (s && "container" !== w.params.controlBy) || ((n = (e.maxTranslate() - e.minTranslate()) / (w.maxTranslate() - w.minTranslate())), (s = (t - w.minTranslate()) * n + e.minTranslate())),
                                            w.params.controlInverse && (s = e.maxTranslate() - s),
                                            e.updateProgress(s),
                                            e.setWrapperTranslate(s, !1, w),
                                            e.updateActiveIndex();
                                    }
                                    var n,
                                        s,
                                        a = w.params.control;
                                    if (Array.isArray(a)) for (var o = 0; o < a.length; o++) a[o] !== i && a[o] instanceof e && r(a[o]);
                                    else a instanceof e && i !== a && r(a);
                                },
                                setTransition: function (t, i) {
                                    function r(e) {
                                        e.setWrapperTransition(t, w),
                                            0 !== t &&
                                                (e.onTransitionStart(),
                                                e.wrapper.transitionEnd(function () {
                                                    s && (e.params.loop && "slide" === w.params.controlBy && e.fixLoop(), e.onTransitionEnd());
                                                }));
                                    }
                                    var n,
                                        s = w.params.control;
                                    if (Array.isArray(s)) for (n = 0; n < s.length; n++) s[n] !== i && s[n] instanceof e && r(s[n]);
                                    else s instanceof e && i !== s && r(s);
                                },
                            }),
                            (w.hashnav = {
                                onHashCange: function (t, e) {
                                    var i = document.location.hash.replace("#", "");
                                    i !== w.slides.eq(w.activeIndex).attr("data-hash") && w.slideTo(w.wrapper.children("." + w.params.slideClass + '[data-hash="' + i + '"]').index());
                                },
                                attachEvents: function (e) {
                                    var i = e ? "off" : "on";
                                    t(window)[i]("hashchange", w.hashnav.onHashCange);
                                },
                                setHash: function () {
                                    if (w.hashnav.initialized && w.params.hashnav)
                                        if (w.params.replaceState && window.history && window.history.replaceState) window.history.replaceState(null, null, "#" + w.slides.eq(w.activeIndex).attr("data-hash") || "");
                                        else {
                                            var t = w.slides.eq(w.activeIndex),
                                                e = t.attr("data-hash") || t.attr("data-history");
                                            document.location.hash = e || "";
                                        }
                                },
                                init: function () {
                                    if (w.params.hashnav && !w.params.history) {
                                        w.hashnav.initialized = !0;
                                        var t = document.location.hash.replace("#", "");
                                        if (t)
                                            for (var e = 0, i = w.slides.length; e < i; e++) {
                                                var r = w.slides.eq(e);
                                                if ((r.attr("data-hash") || r.attr("data-history")) === t && !r.hasClass(w.params.slideDuplicateClass)) {
                                                    var n = r.index();
                                                    w.slideTo(n, 0, w.params.runCallbacksOnInit, !0);
                                                }
                                            }
                                        w.params.hashnavWatchState && w.hashnav.attachEvents();
                                    }
                                },
                                destroy: function () {
                                    w.params.hashnavWatchState && w.hashnav.attachEvents(!0);
                                },
                            }),
                            (w.history = {
                                init: function () {
                                    if (w.params.history) {
                                        if (!window.history || !window.history.pushState) return (w.params.history = !1), void (w.params.hashnav = !0);
                                        (w.history.initialized = !0),
                                            (this.paths = this.getPathValues()),
                                            (this.paths.key || this.paths.value) &&
                                                (this.scrollToSlide(0, this.paths.value, w.params.runCallbacksOnInit), w.params.replaceState || window.addEventListener("popstate", this.setHistoryPopState));
                                    }
                                },
                                setHistoryPopState: function () {
                                    (w.history.paths = w.history.getPathValues()), w.history.scrollToSlide(w.params.speed, w.history.paths.value, !1);
                                },
                                getPathValues: function () {
                                    var t = window.location.pathname.slice(1).split("/"),
                                        e = t.length;
                                    return { key: t[e - 2], value: t[e - 1] };
                                },
                                setHistory: function (t, e) {
                                    if (w.history.initialized && w.params.history) {
                                        var i = w.slides.eq(e),
                                            r = this.slugify(i.attr("data-history"));
                                        window.location.pathname.includes(t) || (r = t + "/" + r), w.params.replaceState ? window.history.replaceState(null, null, r) : window.history.pushState(null, null, r);
                                    }
                                },
                                slugify: function (t) {
                                    return t
                                        .toString()
                                        .toLowerCase()
                                        .replace(/\s+/g, "-")
                                        .replace(/[^\w\-]+/g, "")
                                        .replace(/\-\-+/g, "-")
                                        .replace(/^-+/, "")
                                        .replace(/-+$/, "");
                                },
                                scrollToSlide: function (t, e, i) {
                                    if (e)
                                        for (var r = 0, n = w.slides.length; r < n; r++) {
                                            var s = w.slides.eq(r);
                                            if (this.slugify(s.attr("data-history")) === e && !s.hasClass(w.params.slideDuplicateClass)) {
                                                var a = s.index();
                                                w.slideTo(a, t, i);
                                            }
                                        }
                                    else w.slideTo(0, t, i);
                                },
                            }),
                            (w.disableKeyboardControl = function () {
                                (w.params.keyboardControl = !1), t(document).off("keydown", u);
                            }),
                            (w.enableKeyboardControl = function () {
                                (w.params.keyboardControl = !0), t(document).on("keydown", u);
                            }),
                            (w.mousewheel = { event: !1, lastScrollTime: new window.Date().getTime() }),
                            w.params.mousewheelControl &&
                                (w.mousewheel.event =
                                    navigator.userAgent.indexOf("firefox") > -1
                                        ? "DOMMouseScroll"
                                        : (function () {
                                              var t = "onwheel" in document;
                                              if (!t) {
                                                  var e = document.createElement("div");
                                                  e.setAttribute("onwheel", "return;"), (t = "function" == typeof e.onwheel);
                                              }
                                              return (
                                                  !t && document.implementation && document.implementation.hasFeature && !0 !== document.implementation.hasFeature("", "") && (t = document.implementation.hasFeature("Events.wheel", "3.0")), t
                                              );
                                          })()
                                        ? "wheel"
                                        : "mousewheel"),
                            (w.disableMousewheelControl = function () {
                                if (!w.mousewheel.event) return !1;
                                var e = w.container;
                                return "container" !== w.params.mousewheelEventsTarged && (e = t(w.params.mousewheelEventsTarged)), e.off(w.mousewheel.event, c), (w.params.mousewheelControl = !1), !0;
                            }),
                            (w.enableMousewheelControl = function () {
                                if (!w.mousewheel.event) return !1;
                                var e = w.container;
                                return "container" !== w.params.mousewheelEventsTarged && (e = t(w.params.mousewheelEventsTarged)), e.on(w.mousewheel.event, c), (w.params.mousewheelControl = !0), !0;
                            }),
                            (w.parallax = {
                                setTranslate: function () {
                                    w.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function () {
                                        h(this, w.progress);
                                    }),
                                        w.slides.each(function () {
                                            var e = t(this);
                                            e.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function () {
                                                h(this, Math.min(Math.max(e[0].progress, -1), 1));
                                            });
                                        });
                                },
                                setTransition: function (e) {
                                    void 0 === e && (e = w.params.speed),
                                        w.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function () {
                                            var i = t(this),
                                                r = parseInt(i.attr("data-swiper-parallax-duration"), 10) || e;
                                            0 === e && (r = 0), i.transition(r);
                                        });
                                },
                            }),
                            (w.zoom = {
                                scale: 1,
                                currentScale: 1,
                                isScaling: !1,
                                gesture: { slide: void 0, slideWidth: void 0, slideHeight: void 0, image: void 0, imageWrap: void 0, zoomMax: w.params.zoomMax },
                                image: {
                                    isTouched: void 0,
                                    isMoved: void 0,
                                    currentX: void 0,
                                    currentY: void 0,
                                    minX: void 0,
                                    minY: void 0,
                                    maxX: void 0,
                                    maxY: void 0,
                                    width: void 0,
                                    height: void 0,
                                    startX: void 0,
                                    startY: void 0,
                                    touchesStart: {},
                                    touchesCurrent: {},
                                },
                                velocity: { x: void 0, y: void 0, prevPositionX: void 0, prevPositionY: void 0, prevTime: void 0 },
                                getDistanceBetweenTouches: function (t) {
                                    if (t.targetTouches.length < 2) return 1;
                                    var e = t.targetTouches[0].pageX,
                                        i = t.targetTouches[0].pageY,
                                        r = t.targetTouches[1].pageX,
                                        n = t.targetTouches[1].pageY;
                                    return Math.sqrt(Math.pow(r - e, 2) + Math.pow(n - i, 2));
                                },
                                onGestureStart: function (e) {
                                    var i = w.zoom;
                                    if (!w.support.gestures) {
                                        if ("touchstart" !== e.type || ("touchstart" === e.type && e.targetTouches.length < 2)) return;
                                        i.gesture.scaleStart = i.getDistanceBetweenTouches(e);
                                    }
                                    (i.gesture.slide && i.gesture.slide.length) ||
                                    ((i.gesture.slide = t(this)),
                                    0 === i.gesture.slide.length && (i.gesture.slide = w.slides.eq(w.activeIndex)),
                                    (i.gesture.image = i.gesture.slide.find("img, svg, canvas")),
                                    (i.gesture.imageWrap = i.gesture.image.parent("." + w.params.zoomContainerClass)),
                                    (i.gesture.zoomMax = i.gesture.imageWrap.attr("data-swiper-zoom") || w.params.zoomMax),
                                    0 !== i.gesture.imageWrap.length)
                                        ? (i.gesture.image.transition(0), (i.isScaling = !0))
                                        : (i.gesture.image = void 0);
                                },
                                onGestureChange: function (t) {
                                    var e = w.zoom;
                                    if (!w.support.gestures) {
                                        if ("touchmove" !== t.type || ("touchmove" === t.type && t.targetTouches.length < 2)) return;
                                        e.gesture.scaleMove = e.getDistanceBetweenTouches(t);
                                    }
                                    e.gesture.image &&
                                        0 !== e.gesture.image.length &&
                                        (w.support.gestures ? (e.scale = t.scale * e.currentScale) : (e.scale = (e.gesture.scaleMove / e.gesture.scaleStart) * e.currentScale),
                                        e.scale > e.gesture.zoomMax && (e.scale = e.gesture.zoomMax - 1 + Math.pow(e.scale - e.gesture.zoomMax + 1, 0.5)),
                                        e.scale < w.params.zoomMin && (e.scale = w.params.zoomMin + 1 - Math.pow(w.params.zoomMin - e.scale + 1, 0.5)),
                                        e.gesture.image.transform("translate3d(0,0,0) scale(" + e.scale + ")"));
                                },
                                onGestureEnd: function (t) {
                                    var e = w.zoom;
                                    (!w.support.gestures && ("touchend" !== t.type || ("touchend" === t.type && t.changedTouches.length < 2))) ||
                                        (e.gesture.image &&
                                            0 !== e.gesture.image.length &&
                                            ((e.scale = Math.max(Math.min(e.scale, e.gesture.zoomMax), w.params.zoomMin)),
                                            e.gesture.image.transition(w.params.speed).transform("translate3d(0,0,0) scale(" + e.scale + ")"),
                                            (e.currentScale = e.scale),
                                            (e.isScaling = !1),
                                            1 === e.scale && (e.gesture.slide = void 0)));
                                },
                                onTouchStart: function (t, e) {
                                    var i = t.zoom;
                                    i.gesture.image &&
                                        0 !== i.gesture.image.length &&
                                        (i.image.isTouched ||
                                            ("android" === t.device.os && e.preventDefault(),
                                            (i.image.isTouched = !0),
                                            (i.image.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX),
                                            (i.image.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY)));
                                },
                                onTouchMove: function (t) {
                                    var e = w.zoom;
                                    if (e.gesture.image && 0 !== e.gesture.image.length && ((w.allowClick = !1), e.image.isTouched && e.gesture.slide)) {
                                        e.image.isMoved ||
                                            ((e.image.width = e.gesture.image[0].offsetWidth),
                                            (e.image.height = e.gesture.image[0].offsetHeight),
                                            (e.image.startX = w.getTranslate(e.gesture.imageWrap[0], "x") || 0),
                                            (e.image.startY = w.getTranslate(e.gesture.imageWrap[0], "y") || 0),
                                            (e.gesture.slideWidth = e.gesture.slide[0].offsetWidth),
                                            (e.gesture.slideHeight = e.gesture.slide[0].offsetHeight),
                                            e.gesture.imageWrap.transition(0),
                                            w.rtl && (e.image.startX = -e.image.startX),
                                            w.rtl && (e.image.startY = -e.image.startY));
                                        var i = e.image.width * e.scale,
                                            r = e.image.height * e.scale;
                                        if (!(i < e.gesture.slideWidth && r < e.gesture.slideHeight)) {
                                            if (
                                                ((e.image.minX = Math.min(e.gesture.slideWidth / 2 - i / 2, 0)),
                                                (e.image.maxX = -e.image.minX),
                                                (e.image.minY = Math.min(e.gesture.slideHeight / 2 - r / 2, 0)),
                                                (e.image.maxY = -e.image.minY),
                                                (e.image.touchesCurrent.x = "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX),
                                                (e.image.touchesCurrent.y = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY),
                                                !e.image.isMoved && !e.isScaling)
                                            ) {
                                                if (
                                                    (w.isHorizontal() && Math.floor(e.image.minX) === Math.floor(e.image.startX) && e.image.touchesCurrent.x < e.image.touchesStart.x) ||
                                                    (Math.floor(e.image.maxX) === Math.floor(e.image.startX) && e.image.touchesCurrent.x > e.image.touchesStart.x)
                                                )
                                                    return void (e.image.isTouched = !1);
                                                if (
                                                    (!w.isHorizontal() && Math.floor(e.image.minY) === Math.floor(e.image.startY) && e.image.touchesCurrent.y < e.image.touchesStart.y) ||
                                                    (Math.floor(e.image.maxY) === Math.floor(e.image.startY) && e.image.touchesCurrent.y > e.image.touchesStart.y)
                                                )
                                                    return void (e.image.isTouched = !1);
                                            }
                                            t.preventDefault(),
                                                t.stopPropagation(),
                                                (e.image.isMoved = !0),
                                                (e.image.currentX = e.image.touchesCurrent.x - e.image.touchesStart.x + e.image.startX),
                                                (e.image.currentY = e.image.touchesCurrent.y - e.image.touchesStart.y + e.image.startY),
                                                e.image.currentX < e.image.minX && (e.image.currentX = e.image.minX + 1 - Math.pow(e.image.minX - e.image.currentX + 1, 0.8)),
                                                e.image.currentX > e.image.maxX && (e.image.currentX = e.image.maxX - 1 + Math.pow(e.image.currentX - e.image.maxX + 1, 0.8)),
                                                e.image.currentY < e.image.minY && (e.image.currentY = e.image.minY + 1 - Math.pow(e.image.minY - e.image.currentY + 1, 0.8)),
                                                e.image.currentY > e.image.maxY && (e.image.currentY = e.image.maxY - 1 + Math.pow(e.image.currentY - e.image.maxY + 1, 0.8)),
                                                e.velocity.prevPositionX || (e.velocity.prevPositionX = e.image.touchesCurrent.x),
                                                e.velocity.prevPositionY || (e.velocity.prevPositionY = e.image.touchesCurrent.y),
                                                e.velocity.prevTime || (e.velocity.prevTime = Date.now()),
                                                (e.velocity.x = (e.image.touchesCurrent.x - e.velocity.prevPositionX) / (Date.now() - e.velocity.prevTime) / 2),
                                                (e.velocity.y = (e.image.touchesCurrent.y - e.velocity.prevPositionY) / (Date.now() - e.velocity.prevTime) / 2),
                                                Math.abs(e.image.touchesCurrent.x - e.velocity.prevPositionX) < 2 && (e.velocity.x = 0),
                                                Math.abs(e.image.touchesCurrent.y - e.velocity.prevPositionY) < 2 && (e.velocity.y = 0),
                                                (e.velocity.prevPositionX = e.image.touchesCurrent.x),
                                                (e.velocity.prevPositionY = e.image.touchesCurrent.y),
                                                (e.velocity.prevTime = Date.now()),
                                                e.gesture.imageWrap.transform("translate3d(" + e.image.currentX + "px, " + e.image.currentY + "px,0)");
                                        }
                                    }
                                },
                                onTouchEnd: function (t, e) {
                                    var i = t.zoom;
                                    if (i.gesture.image && 0 !== i.gesture.image.length) {
                                        if (!i.image.isTouched || !i.image.isMoved) return (i.image.isTouched = !1), void (i.image.isMoved = !1);
                                        (i.image.isTouched = !1), (i.image.isMoved = !1);
                                        var r = 300,
                                            n = 300,
                                            s = i.velocity.x * r,
                                            a = i.image.currentX + s,
                                            o = i.velocity.y * n,
                                            l = i.image.currentY + o;
                                        0 !== i.velocity.x && (r = Math.abs((a - i.image.currentX) / i.velocity.x)), 0 !== i.velocity.y && (n = Math.abs((l - i.image.currentY) / i.velocity.y));
                                        var u = Math.max(r, n);
                                        (i.image.currentX = a), (i.image.currentY = l);
                                        var c = i.image.width * i.scale,
                                            h = i.image.height * i.scale;
                                        (i.image.minX = Math.min(i.gesture.slideWidth / 2 - c / 2, 0)),
                                            (i.image.maxX = -i.image.minX),
                                            (i.image.minY = Math.min(i.gesture.slideHeight / 2 - h / 2, 0)),
                                            (i.image.maxY = -i.image.minY),
                                            (i.image.currentX = Math.max(Math.min(i.image.currentX, i.image.maxX), i.image.minX)),
                                            (i.image.currentY = Math.max(Math.min(i.image.currentY, i.image.maxY), i.image.minY)),
                                            i.gesture.imageWrap.transition(u).transform("translate3d(" + i.image.currentX + "px, " + i.image.currentY + "px,0)");
                                    }
                                },
                                onTransitionEnd: function (t) {
                                    var e = t.zoom;
                                    e.gesture.slide &&
                                        t.previousIndex !== t.activeIndex &&
                                        (e.gesture.image.transform("translate3d(0,0,0) scale(1)"),
                                        e.gesture.imageWrap.transform("translate3d(0,0,0)"),
                                        (e.gesture.slide = e.gesture.image = e.gesture.imageWrap = void 0),
                                        (e.scale = e.currentScale = 1));
                                },
                                toggleZoom: function (e, i) {
                                    var r = e.zoom;
                                    if (
                                        (r.gesture.slide ||
                                            ((r.gesture.slide = e.clickedSlide ? t(e.clickedSlide) : e.slides.eq(e.activeIndex)),
                                            (r.gesture.image = r.gesture.slide.find("img, svg, canvas")),
                                            (r.gesture.imageWrap = r.gesture.image.parent("." + e.params.zoomContainerClass))),
                                        r.gesture.image && 0 !== r.gesture.image.length)
                                    ) {
                                        var n, s, a, o, l, u, c, h, d, p, f, m, g, v, y, _;
                                        void 0 === r.image.touchesStart.x && i
                                            ? ((n = "touchend" === i.type ? i.changedTouches[0].pageX : i.pageX), (s = "touchend" === i.type ? i.changedTouches[0].pageY : i.pageY))
                                            : ((n = r.image.touchesStart.x), (s = r.image.touchesStart.y)),
                                            r.scale && 1 !== r.scale
                                                ? ((r.scale = r.currentScale = 1),
                                                  r.gesture.imageWrap.transition(300).transform("translate3d(0,0,0)"),
                                                  r.gesture.image.transition(300).transform("translate3d(0,0,0) scale(1)"),
                                                  (r.gesture.slide = void 0))
                                                : ((r.scale = r.currentScale = r.gesture.imageWrap.attr("data-swiper-zoom") || e.params.zoomMax),
                                                  i
                                                      ? ((y = r.gesture.slide[0].offsetWidth),
                                                        (_ = r.gesture.slide[0].offsetHeight),
                                                        (a = r.gesture.slide.offset().left + y / 2 - n),
                                                        (o = r.gesture.slide.offset().top + _ / 2 - s),
                                                        (c = r.gesture.image[0].offsetWidth),
                                                        (h = r.gesture.image[0].offsetHeight),
                                                        (d = c * r.scale),
                                                        (p = h * r.scale),
                                                        (g = -(f = Math.min(y / 2 - d / 2, 0))),
                                                        (v = -(m = Math.min(_ / 2 - p / 2, 0))),
                                                        (l = a * r.scale),
                                                        (u = o * r.scale),
                                                        l < f && (l = f),
                                                        l > g && (l = g),
                                                        u < m && (u = m),
                                                        u > v && (u = v))
                                                      : ((l = 0), (u = 0)),
                                                  r.gesture.imageWrap.transition(300).transform("translate3d(" + l + "px, " + u + "px,0)"),
                                                  r.gesture.image.transition(300).transform("translate3d(0,0,0) scale(" + r.scale + ")"));
                                    }
                                },
                                attachEvents: function (e) {
                                    var i = e ? "off" : "on";
                                    if (w.params.zoom) {
                                        w.slides;
                                        var r = !("touchstart" !== w.touchEvents.start || !w.support.passiveListener || !w.params.passiveListeners) && { passive: !0, capture: !1 };
                                        w.support.gestures
                                            ? (w.slides[i]("gesturestart", w.zoom.onGestureStart, r), w.slides[i]("gesturechange", w.zoom.onGestureChange, r), w.slides[i]("gestureend", w.zoom.onGestureEnd, r))
                                            : "touchstart" === w.touchEvents.start &&
                                              (w.slides[i](w.touchEvents.start, w.zoom.onGestureStart, r), w.slides[i](w.touchEvents.move, w.zoom.onGestureChange, r), w.slides[i](w.touchEvents.end, w.zoom.onGestureEnd, r)),
                                            w[i]("touchStart", w.zoom.onTouchStart),
                                            w.slides.each(function (e, r) {
                                                t(r).find("." + w.params.zoomContainerClass).length > 0 && t(r)[i](w.touchEvents.move, w.zoom.onTouchMove);
                                            }),
                                            w[i]("touchEnd", w.zoom.onTouchEnd),
                                            w[i]("transitionEnd", w.zoom.onTransitionEnd),
                                            w.params.zoomToggle && w.on("doubleTap", w.zoom.toggleZoom);
                                    }
                                },
                                init: function () {
                                    w.zoom.attachEvents();
                                },
                                destroy: function () {
                                    w.zoom.attachEvents(!0);
                                },
                            }),
                            (w._plugins = []);
                        for (var N in w.plugins) {
                            var B = w.plugins[N](w, w.params[N]);
                            B && w._plugins.push(B);
                        }
                        return (
                            (w.callPlugins = function (t) {
                                for (var e = 0; e < w._plugins.length; e++) t in w._plugins[e] && w._plugins[e][t](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                            }),
                            (w.emitterEventListeners = {}),
                            (w.emit = function (t) {
                                w.params[t] && w.params[t](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                                var e;
                                if (w.emitterEventListeners[t]) for (e = 0; e < w.emitterEventListeners[t].length; e++) w.emitterEventListeners[t][e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                                w.callPlugins && w.callPlugins(t, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                            }),
                            (w.on = function (t, e) {
                                return (t = d(t)), w.emitterEventListeners[t] || (w.emitterEventListeners[t] = []), w.emitterEventListeners[t].push(e), w;
                            }),
                            (w.off = function (t, e) {
                                var i;
                                if (((t = d(t)), void 0 === e)) return (w.emitterEventListeners[t] = []), w;
                                if (w.emitterEventListeners[t] && 0 !== w.emitterEventListeners[t].length) {
                                    for (i = 0; i < w.emitterEventListeners[t].length; i++) w.emitterEventListeners[t][i] === e && w.emitterEventListeners[t].splice(i, 1);
                                    return w;
                                }
                            }),
                            (w.once = function (t, e) {
                                t = d(t);
                                var i = function () {
                                    e(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]), w.off(t, i);
                                };
                                return w.on(t, i), w;
                            }),
                            (w.a11y = {
                                makeFocusable: function (t) {
                                    return t.attr("tabIndex", "0"), t;
                                },
                                addRole: function (t, e) {
                                    return t.attr("role", e), t;
                                },
                                addLabel: function (t, e) {
                                    return t.attr("aria-label", e), t;
                                },
                                disable: function (t) {
                                    return t.attr("aria-disabled", !0), t;
                                },
                                enable: function (t) {
                                    return t.attr("aria-disabled", !1), t;
                                },
                                onEnterKey: function (e) {
                                    13 === e.keyCode &&
                                        (t(e.target).is(w.params.nextButton)
                                            ? (w.onClickNext(e), w.isEnd ? w.a11y.notify(w.params.lastSlideMessage) : w.a11y.notify(w.params.nextSlideMessage))
                                            : t(e.target).is(w.params.prevButton) && (w.onClickPrev(e), w.isBeginning ? w.a11y.notify(w.params.firstSlideMessage) : w.a11y.notify(w.params.prevSlideMessage)),
                                        t(e.target).is("." + w.params.bulletClass) && t(e.target)[0].click());
                                },
                                liveRegion: t('<span class="' + w.params.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>'),
                                notify: function (t) {
                                    var e = w.a11y.liveRegion;
                                    0 !== e.length && (e.html(""), e.html(t));
                                },
                                init: function () {
                                    w.params.nextButton && w.nextButton && w.nextButton.length > 0 && (w.a11y.makeFocusable(w.nextButton), w.a11y.addRole(w.nextButton, "button"), w.a11y.addLabel(w.nextButton, w.params.nextSlideMessage)),
                                        w.params.prevButton &&
                                            w.prevButton &&
                                            w.prevButton.length > 0 &&
                                            (w.a11y.makeFocusable(w.prevButton), w.a11y.addRole(w.prevButton, "button"), w.a11y.addLabel(w.prevButton, w.params.prevSlideMessage)),
                                        t(w.container).append(w.a11y.liveRegion);
                                },
                                initPagination: function () {
                                    w.params.pagination &&
                                        w.params.paginationClickable &&
                                        w.bullets &&
                                        w.bullets.length &&
                                        w.bullets.each(function () {
                                            var e = t(this);
                                            w.a11y.makeFocusable(e), w.a11y.addRole(e, "button"), w.a11y.addLabel(e, w.params.paginationBulletMessage.replace(/{{index}}/, e.index() + 1));
                                        });
                                },
                                destroy: function () {
                                    w.a11y.liveRegion && w.a11y.liveRegion.length > 0 && w.a11y.liveRegion.remove();
                                },
                            }),
                            (w.init = function () {
                                w.params.loop && w.createLoop(),
                                    w.updateContainerSize(),
                                    w.updateSlidesSize(),
                                    w.updatePagination(),
                                    w.params.scrollbar && w.scrollbar && (w.scrollbar.set(), w.params.scrollbarDraggable && w.scrollbar.enableDraggable()),
                                    "slide" !== w.params.effect && w.effects[w.params.effect] && (w.params.loop || w.updateProgress(), w.effects[w.params.effect].setTranslate()),
                                    w.params.loop
                                        ? w.slideTo(w.params.initialSlide + w.loopedSlides, 0, w.params.runCallbacksOnInit)
                                        : (w.slideTo(w.params.initialSlide, 0, w.params.runCallbacksOnInit),
                                          0 === w.params.initialSlide && (w.parallax && w.params.parallax && w.parallax.setTranslate(), w.lazy && w.params.lazyLoading && (w.lazy.load(), (w.lazy.initialImageLoaded = !0)))),
                                    w.attachEvents(),
                                    w.params.observer && w.support.observer && w.initObservers(),
                                    w.params.preloadImages && !w.params.lazyLoading && w.preloadImages(),
                                    w.params.zoom && w.zoom && w.zoom.init(),
                                    w.params.autoplay && w.startAutoplay(),
                                    w.params.keyboardControl && w.enableKeyboardControl && w.enableKeyboardControl(),
                                    w.params.mousewheelControl && w.enableMousewheelControl && w.enableMousewheelControl(),
                                    w.params.hashnavReplaceState && (w.params.replaceState = w.params.hashnavReplaceState),
                                    w.params.history && w.history && w.history.init(),
                                    w.params.hashnav && w.hashnav && w.hashnav.init(),
                                    w.params.a11y && w.a11y && w.a11y.init(),
                                    w.emit("onInit", w);
                            }),
                            (w.cleanupStyles = function () {
                                w.container.removeClass(w.classNames.join(" ")).removeAttr("style"),
                                    w.wrapper.removeAttr("style"),
                                    w.slides &&
                                        w.slides.length &&
                                        w.slides
                                            .removeClass([w.params.slideVisibleClass, w.params.slideActiveClass, w.params.slideNextClass, w.params.slidePrevClass].join(" "))
                                            .removeAttr("style")
                                            .removeAttr("data-swiper-column")
                                            .removeAttr("data-swiper-row"),
                                    w.paginationContainer && w.paginationContainer.length && w.paginationContainer.removeClass(w.params.paginationHiddenClass),
                                    w.bullets && w.bullets.length && w.bullets.removeClass(w.params.bulletActiveClass),
                                    w.params.prevButton && t(w.params.prevButton).removeClass(w.params.buttonDisabledClass),
                                    w.params.nextButton && t(w.params.nextButton).removeClass(w.params.buttonDisabledClass),
                                    w.params.scrollbar &&
                                        w.scrollbar &&
                                        (w.scrollbar.track && w.scrollbar.track.length && w.scrollbar.track.removeAttr("style"), w.scrollbar.drag && w.scrollbar.drag.length && w.scrollbar.drag.removeAttr("style"));
                            }),
                            (w.destroy = function (t, e) {
                                w.detachEvents(),
                                    w.stopAutoplay(),
                                    w.params.scrollbar && w.scrollbar && w.params.scrollbarDraggable && w.scrollbar.disableDraggable(),
                                    w.params.loop && w.destroyLoop(),
                                    e && w.cleanupStyles(),
                                    w.disconnectObservers(),
                                    w.params.zoom && w.zoom && w.zoom.destroy(),
                                    w.params.keyboardControl && w.disableKeyboardControl && w.disableKeyboardControl(),
                                    w.params.mousewheelControl && w.disableMousewheelControl && w.disableMousewheelControl(),
                                    w.params.a11y && w.a11y && w.a11y.destroy(),
                                    w.params.history && !w.params.replaceState && window.removeEventListener("popstate", w.history.setHistoryPopState),
                                    w.params.hashnav && w.hashnav && w.hashnav.destroy(),
                                    w.emit("onDestroy"),
                                    !1 !== t && (w = null);
                            }),
                            w.init(),
                            w
                        );
                    }
                };
            e.prototype = {
                isSafari: (function () {
                    var t = window.navigator.userAgent.toLowerCase();
                    return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0;
                })(),
                isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent),
                isArray: function (t) {
                    return "[object Array]" === Object.prototype.toString.apply(t);
                },
                browser: {
                    ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
                    ieTouch: (window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 1) || (window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 1),
                    lteIE9: (function () {
                        var t = document.createElement("div");
                        return (t.innerHTML = "\x3c!--[if lte IE 9]><i></i><![endif]--\x3e"), 1 === t.getElementsByTagName("i").length;
                    })(),
                },
                device: (function () {
                    var t = window.navigator.userAgent,
                        e = t.match(/(Android);?[\s\/]+([\d.]+)?/),
                        i = t.match(/(iPad).*OS\s([\d_]+)/),
                        r = t.match(/(iPod)(.*OS\s([\d_]+))?/),
                        n = !i && t.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
                    return { ios: i || n || r, android: e };
                })(),
                support: {
                    touch: (window.Modernizr && !0 === Modernizr.touch) || !!("ontouchstart" in window || (window.DocumentTouch && document instanceof DocumentTouch)),
                    transforms3d:
                        (window.Modernizr && !0 === Modernizr.csstransforms3d) ||
                        (function () {
                            var t = document.createElement("div").style;
                            return "webkitPerspective" in t || "MozPerspective" in t || "OPerspective" in t || "MsPerspective" in t || "perspective" in t;
                        })(),
                    flexbox: (function () {
                        for (
                            var t = document.createElement("div").style,
                                e = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "),
                                i = 0;
                            i < e.length;
                            i++
                        )
                            if (e[i] in t) return !0;
                    })(),
                    observer: "MutationObserver" in window || "WebkitMutationObserver" in window,
                    passiveListener: (function () {
                        var t = !1;
                        try {
                            var e = Object.defineProperty({}, "passive", {
                                get: function () {
                                    t = !0;
                                },
                            });
                            window.addEventListener("testPassiveListener", null, e);
                        } catch (t) {}
                        return t;
                    })(),
                    gestures: "ongesturestart" in window,
                },
                plugins: {},
            };
            for (
                var i = (function () {
                        var t = function (t) {
                                var e = 0;
                                for (e = 0; e < t.length; e++) this[e] = t[e];
                                return (this.length = t.length), this;
                            },
                            e = function (e, i) {
                                var r = [],
                                    n = 0;
                                if (e && !i && e instanceof t) return e;
                                if (e)
                                    if ("string" == typeof e) {
                                        var s,
                                            a,
                                            o = e.trim();
                                        if (o.indexOf("<") >= 0 && o.indexOf(">") >= 0) {
                                            var l = "div";
                                            for (
                                                0 === o.indexOf("<li") && (l = "ul"),
                                                    0 === o.indexOf("<tr") && (l = "tbody"),
                                                    (0 !== o.indexOf("<td") && 0 !== o.indexOf("<th")) || (l = "tr"),
                                                    0 === o.indexOf("<tbody") && (l = "table"),
                                                    0 === o.indexOf("<option") && (l = "select"),
                                                    (a = document.createElement(l)).innerHTML = e,
                                                    n = 0;
                                                n < a.childNodes.length;
                                                n++
                                            )
                                                r.push(a.childNodes[n]);
                                        } else for (s = i || "#" !== e[0] || e.match(/[ .<>:~]/) ? (i || document).querySelectorAll(e) : [document.getElementById(e.split("#")[1])], n = 0; n < s.length; n++) s[n] && r.push(s[n]);
                                    } else if (e.nodeType || e === window || e === document) r.push(e);
                                    else if (e.length > 0 && e[0].nodeType) for (n = 0; n < e.length; n++) r.push(e[n]);
                                return new t(r);
                            };
                        return (
                            (t.prototype = {
                                addClass: function (t) {
                                    if (void 0 === t) return this;
                                    for (var e = t.split(" "), i = 0; i < e.length; i++) for (var r = 0; r < this.length; r++) this[r].classList.add(e[i]);
                                    return this;
                                },
                                removeClass: function (t) {
                                    for (var e = t.split(" "), i = 0; i < e.length; i++) for (var r = 0; r < this.length; r++) this[r].classList.remove(e[i]);
                                    return this;
                                },
                                hasClass: function (t) {
                                    return !!this[0] && this[0].classList.contains(t);
                                },
                                toggleClass: function (t) {
                                    for (var e = t.split(" "), i = 0; i < e.length; i++) for (var r = 0; r < this.length; r++) this[r].classList.toggle(e[i]);
                                    return this;
                                },
                                attr: function (t, e) {
                                    if (1 === arguments.length && "string" == typeof t) return this[0] ? this[0].getAttribute(t) : void 0;
                                    for (var i = 0; i < this.length; i++)
                                        if (2 === arguments.length) this[i].setAttribute(t, e);
                                        else for (var r in t) (this[i][r] = t[r]), this[i].setAttribute(r, t[r]);
                                    return this;
                                },
                                removeAttr: function (t) {
                                    for (var e = 0; e < this.length; e++) this[e].removeAttribute(t);
                                    return this;
                                },
                                data: function (t, e) {
                                    if (void 0 !== e) {
                                        for (var i = 0; i < this.length; i++) {
                                            var r = this[i];
                                            r.dom7ElementDataStorage || (r.dom7ElementDataStorage = {}), (r.dom7ElementDataStorage[t] = e);
                                        }
                                        return this;
                                    }
                                    if (this[0]) {
                                        var n = this[0].getAttribute("data-" + t);
                                        return n || (this[0].dom7ElementDataStorage && (t in this[0].dom7ElementDataStorage) ? this[0].dom7ElementDataStorage[t] : void 0);
                                    }
                                },
                                transform: function (t) {
                                    for (var e = 0; e < this.length; e++) {
                                        var i = this[e].style;
                                        i.webkitTransform = i.MsTransform = i.msTransform = i.MozTransform = i.OTransform = i.transform = t;
                                    }
                                    return this;
                                },
                                transition: function (t) {
                                    "string" != typeof t && (t += "ms");
                                    for (var e = 0; e < this.length; e++) {
                                        var i = this[e].style;
                                        i.webkitTransitionDuration = i.MsTransitionDuration = i.msTransitionDuration = i.MozTransitionDuration = i.OTransitionDuration = i.transitionDuration = t;
                                    }
                                    return this;
                                },
                                on: function (t, i, r, n) {
                                    function s(t) {
                                        var n = t.target;
                                        if (e(n).is(i)) r.call(n, t);
                                        else for (var s = e(n).parents(), a = 0; a < s.length; a++) e(s[a]).is(i) && r.call(s[a], t);
                                    }
                                    var a,
                                        o,
                                        l = t.split(" ");
                                    for (a = 0; a < this.length; a++)
                                        if ("function" == typeof i || !1 === i) for ("function" == typeof i && ((r = arguments[1]), (n = arguments[2] || !1)), o = 0; o < l.length; o++) this[a].addEventListener(l[o], r, n);
                                        else
                                            for (o = 0; o < l.length; o++)
                                                this[a].dom7LiveListeners || (this[a].dom7LiveListeners = []), this[a].dom7LiveListeners.push({ listener: r, liveListener: s }), this[a].addEventListener(l[o], s, n);
                                    return this;
                                },
                                off: function (t, e, i, r) {
                                    for (var n = t.split(" "), s = 0; s < n.length; s++)
                                        for (var a = 0; a < this.length; a++)
                                            if ("function" == typeof e || !1 === e) "function" == typeof e && ((i = arguments[1]), (r = arguments[2] || !1)), this[a].removeEventListener(n[s], i, r);
                                            else if (this[a].dom7LiveListeners)
                                                for (var o = 0; o < this[a].dom7LiveListeners.length; o++) this[a].dom7LiveListeners[o].listener === i && this[a].removeEventListener(n[s], this[a].dom7LiveListeners[o].liveListener, r);
                                    return this;
                                },
                                once: function (t, e, i, r) {
                                    function n(a) {
                                        i(a), s.off(t, e, n, r);
                                    }
                                    var s = this;
                                    "function" == typeof e && ((e = !1), (i = arguments[1]), (r = arguments[2])), s.on(t, e, n, r);
                                },
                                trigger: function (t, e) {
                                    for (var i = 0; i < this.length; i++) {
                                        var r;
                                        try {
                                            r = new window.CustomEvent(t, { detail: e, bubbles: !0, cancelable: !0 });
                                        } catch (i) {
                                            (r = document.createEvent("Event")).initEvent(t, !0, !0), (r.detail = e);
                                        }
                                        this[i].dispatchEvent(r);
                                    }
                                    return this;
                                },
                                transitionEnd: function (t) {
                                    function e(s) {
                                        if (s.target === this) for (t.call(this, s), i = 0; i < r.length; i++) n.off(r[i], e);
                                    }
                                    var i,
                                        r = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"],
                                        n = this;
                                    if (t) for (i = 0; i < r.length; i++) n.on(r[i], e);
                                    return this;
                                },
                                width: function () {
                                    return this[0] === window ? window.innerWidth : this.length > 0 ? parseFloat(this.css("width")) : null;
                                },
                                outerWidth: function (t) {
                                    return this.length > 0 ? (t ? this[0].offsetWidth + parseFloat(this.css("margin-right")) + parseFloat(this.css("margin-left")) : this[0].offsetWidth) : null;
                                },
                                height: function () {
                                    return this[0] === window ? window.innerHeight : this.length > 0 ? parseFloat(this.css("height")) : null;
                                },
                                outerHeight: function (t) {
                                    return this.length > 0 ? (t ? this[0].offsetHeight + parseFloat(this.css("margin-top")) + parseFloat(this.css("margin-bottom")) : this[0].offsetHeight) : null;
                                },
                                offset: function () {
                                    if (this.length > 0) {
                                        var t = this[0],
                                            e = t.getBoundingClientRect(),
                                            i = document.body,
                                            r = t.clientTop || i.clientTop || 0,
                                            n = t.clientLeft || i.clientLeft || 0,
                                            s = window.pageYOffset || t.scrollTop,
                                            a = window.pageXOffset || t.scrollLeft;
                                        return { top: e.top + s - r, left: e.left + a - n };
                                    }
                                    return null;
                                },
                                css: function (t, e) {
                                    var i;
                                    if (1 === arguments.length) {
                                        if ("string" != typeof t) {
                                            for (i = 0; i < this.length; i++) for (var r in t) this[i].style[r] = t[r];
                                            return this;
                                        }
                                        if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(t);
                                    }
                                    if (2 === arguments.length && "string" == typeof t) {
                                        for (i = 0; i < this.length; i++) this[i].style[t] = e;
                                        return this;
                                    }
                                    return this;
                                },
                                each: function (t) {
                                    for (var e = 0; e < this.length; e++) t.call(this[e], e, this[e]);
                                    return this;
                                },
                                html: function (t) {
                                    if (void 0 === t) return this[0] ? this[0].innerHTML : void 0;
                                    for (var e = 0; e < this.length; e++) this[e].innerHTML = t;
                                    return this;
                                },
                                text: function (t) {
                                    if (void 0 === t) return this[0] ? this[0].textContent.trim() : null;
                                    for (var e = 0; e < this.length; e++) this[e].textContent = t;
                                    return this;
                                },
                                is: function (i) {
                                    if (!this[0]) return !1;
                                    var r, n;
                                    if ("string" == typeof i) {
                                        var s = this[0];
                                        if (s === document) return i === document;
                                        if (s === window) return i === window;
                                        if (s.matches) return s.matches(i);
                                        if (s.webkitMatchesSelector) return s.webkitMatchesSelector(i);
                                        if (s.mozMatchesSelector) return s.mozMatchesSelector(i);
                                        if (s.msMatchesSelector) return s.msMatchesSelector(i);
                                        for (r = e(i), n = 0; n < r.length; n++) if (r[n] === this[0]) return !0;
                                        return !1;
                                    }
                                    if (i === document) return this[0] === document;
                                    if (i === window) return this[0] === window;
                                    if (i.nodeType || i instanceof t) {
                                        for (r = i.nodeType ? [i] : i, n = 0; n < r.length; n++) if (r[n] === this[0]) return !0;
                                        return !1;
                                    }
                                    return !1;
                                },
                                index: function () {
                                    if (this[0]) {
                                        for (var t = this[0], e = 0; null !== (t = t.previousSibling); ) 1 === t.nodeType && e++;
                                        return e;
                                    }
                                },
                                eq: function (e) {
                                    if (void 0 === e) return this;
                                    var i,
                                        r = this.length;
                                    return e > r - 1 ? new t([]) : e < 0 ? ((i = r + e), new t(i < 0 ? [] : [this[i]])) : new t([this[e]]);
                                },
                                append: function (e) {
                                    var i, r;
                                    for (i = 0; i < this.length; i++)
                                        if ("string" == typeof e) {
                                            var n = document.createElement("div");
                                            for (n.innerHTML = e; n.firstChild; ) this[i].appendChild(n.firstChild);
                                        } else if (e instanceof t) for (r = 0; r < e.length; r++) this[i].appendChild(e[r]);
                                        else this[i].appendChild(e);
                                    return this;
                                },
                                prepend: function (e) {
                                    var i, r;
                                    for (i = 0; i < this.length; i++)
                                        if ("string" == typeof e) {
                                            var n = document.createElement("div");
                                            for (n.innerHTML = e, r = n.childNodes.length - 1; r >= 0; r--) this[i].insertBefore(n.childNodes[r], this[i].childNodes[0]);
                                        } else if (e instanceof t) for (r = 0; r < e.length; r++) this[i].insertBefore(e[r], this[i].childNodes[0]);
                                        else this[i].insertBefore(e, this[i].childNodes[0]);
                                    return this;
                                },
                                insertBefore: function (t) {
                                    for (var i = e(t), r = 0; r < this.length; r++)
                                        if (1 === i.length) i[0].parentNode.insertBefore(this[r], i[0]);
                                        else if (i.length > 1) for (var n = 0; n < i.length; n++) i[n].parentNode.insertBefore(this[r].cloneNode(!0), i[n]);
                                },
                                insertAfter: function (t) {
                                    for (var i = e(t), r = 0; r < this.length; r++)
                                        if (1 === i.length) i[0].parentNode.insertBefore(this[r], i[0].nextSibling);
                                        else if (i.length > 1) for (var n = 0; n < i.length; n++) i[n].parentNode.insertBefore(this[r].cloneNode(!0), i[n].nextSibling);
                                },
                                next: function (i) {
                                    return this.length > 0
                                        ? i
                                            ? this[0].nextElementSibling && e(this[0].nextElementSibling).is(i)
                                                ? new t([this[0].nextElementSibling])
                                                : new t([])
                                            : this[0].nextElementSibling
                                            ? new t([this[0].nextElementSibling])
                                            : new t([])
                                        : new t([]);
                                },
                                nextAll: function (i) {
                                    var r = [],
                                        n = this[0];
                                    if (!n) return new t([]);
                                    for (; n.nextElementSibling; ) {
                                        var s = n.nextElementSibling;
                                        i ? e(s).is(i) && r.push(s) : r.push(s), (n = s);
                                    }
                                    return new t(r);
                                },
                                prev: function (i) {
                                    return this.length > 0
                                        ? i
                                            ? this[0].previousElementSibling && e(this[0].previousElementSibling).is(i)
                                                ? new t([this[0].previousElementSibling])
                                                : new t([])
                                            : this[0].previousElementSibling
                                            ? new t([this[0].previousElementSibling])
                                            : new t([])
                                        : new t([]);
                                },
                                prevAll: function (i) {
                                    var r = [],
                                        n = this[0];
                                    if (!n) return new t([]);
                                    for (; n.previousElementSibling; ) {
                                        var s = n.previousElementSibling;
                                        i ? e(s).is(i) && r.push(s) : r.push(s), (n = s);
                                    }
                                    return new t(r);
                                },
                                parent: function (t) {
                                    for (var i = [], r = 0; r < this.length; r++) t ? e(this[r].parentNode).is(t) && i.push(this[r].parentNode) : i.push(this[r].parentNode);
                                    return e(e.unique(i));
                                },
                                parents: function (t) {
                                    for (var i = [], r = 0; r < this.length; r++) for (var n = this[r].parentNode; n; ) t ? e(n).is(t) && i.push(n) : i.push(n), (n = n.parentNode);
                                    return e(e.unique(i));
                                },
                                find: function (e) {
                                    for (var i = [], r = 0; r < this.length; r++) for (var n = this[r].querySelectorAll(e), s = 0; s < n.length; s++) i.push(n[s]);
                                    return new t(i);
                                },
                                children: function (i) {
                                    for (var r = [], n = 0; n < this.length; n++) for (var s = this[n].childNodes, a = 0; a < s.length; a++) i ? 1 === s[a].nodeType && e(s[a]).is(i) && r.push(s[a]) : 1 === s[a].nodeType && r.push(s[a]);
                                    return new t(e.unique(r));
                                },
                                remove: function () {
                                    for (var t = 0; t < this.length; t++) this[t].parentNode && this[t].parentNode.removeChild(this[t]);
                                    return this;
                                },
                                add: function () {
                                    var t, i;
                                    for (t = 0; t < arguments.length; t++) {
                                        var r = e(arguments[t]);
                                        for (i = 0; i < r.length; i++) (this[this.length] = r[i]), this.length++;
                                    }
                                    return this;
                                },
                            }),
                            (e.fn = t.prototype),
                            (e.unique = function (t) {
                                for (var e = [], i = 0; i < t.length; i++) -1 === e.indexOf(t[i]) && e.push(t[i]);
                                return e;
                            }),
                            e
                        );
                    })(),
                    r = ["jQuery", "Zepto", "Dom7"],
                    n = 0;
                n < r.length;
                n++
            )
                window[r[n]] &&
                    (function (t) {
                        t.fn.swiper = function (i) {
                            var r;
                            return (
                                t(this).each(function () {
                                    var t = new e(this, i);
                                    r || (r = t);
                                }),
                                r
                            );
                        };
                    })(window[r[n]]);
            var s;
            (s = void 0 === i ? window.Dom7 || window.Zepto || window.jQuery : i) &&
                ("transitionEnd" in s.fn ||
                    (s.fn.transitionEnd = function (t) {
                        function e(s) {
                            if (s.target === this) for (t.call(this, s), i = 0; i < r.length; i++) n.off(r[i], e);
                        }
                        var i,
                            r = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"],
                            n = this;
                        if (t) for (i = 0; i < r.length; i++) n.on(r[i], e);
                        return this;
                    }),
                "transform" in s.fn ||
                    (s.fn.transform = function (t) {
                        for (var e = 0; e < this.length; e++) {
                            var i = this[e].style;
                            i.webkitTransform = i.MsTransform = i.msTransform = i.MozTransform = i.OTransform = i.transform = t;
                        }
                        return this;
                    }),
                "transition" in s.fn ||
                    (s.fn.transition = function (t) {
                        "string" != typeof t && (t += "ms");
                        for (var e = 0; e < this.length; e++) {
                            var i = this[e].style;
                            i.webkitTransitionDuration = i.MsTransitionDuration = i.msTransitionDuration = i.MozTransitionDuration = i.OTransitionDuration = i.transitionDuration = t;
                        }
                        return this;
                    }),
                "outerWidth" in s.fn ||
                    (s.fn.outerWidth = function (t) {
                        return this.length > 0 ? (t ? this[0].offsetWidth + parseFloat(this.css("margin-right")) + parseFloat(this.css("margin-left")) : this[0].offsetWidth) : null;
                    })),
                (window.Swiper = e);
        })(),
            (t.exports = window.Swiper);
    },
    function (t, e, i) {
        var r;
        (function () {
            var i = this,
                n = i._,
                s = Array.prototype,
                a = Object.prototype,
                o = Function.prototype,
                l = s.push,
                u = s.slice,
                c = s.concat,
                h = a.toString,
                d = a.hasOwnProperty,
                p = Array.isArray,
                f = Object.keys,
                m = o.bind,
                g = function (t) {
                    return t instanceof g ? t : this instanceof g ? void (this._wrapped = t) : new g(t);
                };
            void 0 !== t && t.exports && (e = t.exports = g), (e._ = g), (g.VERSION = "1.7.0");
            var v = function (t, e, i) {
                if (void 0 === e) return t;
                switch (null == i ? 3 : i) {
                    case 1:
                        return function (i) {
                            return t.call(e, i);
                        };
                    case 2:
                        return function (i, r) {
                            return t.call(e, i, r);
                        };
                    case 3:
                        return function (i, r, n) {
                            return t.call(e, i, r, n);
                        };
                    case 4:
                        return function (i, r, n, s) {
                            return t.call(e, i, r, n, s);
                        };
                }
                return function () {
                    return t.apply(e, arguments);
                };
            };
            (g.iteratee = function (t, e, i) {
                return null == t ? g.identity : g.isFunction(t) ? v(t, e, i) : g.isObject(t) ? g.matches(t) : g.property(t);
            }),
                (g.each = g.forEach = function (t, e, i) {
                    if (null == t) return t;
                    e = v(e, i);
                    var r,
                        n = t.length;
                    if (n === +n) for (r = 0; r < n; r++) e(t[r], r, t);
                    else {
                        var s = g.keys(t);
                        for (r = 0, n = s.length; r < n; r++) e(t[s[r]], s[r], t);
                    }
                    return t;
                }),
                (g.map = g.collect = function (t, e, i) {
                    if (null == t) return [];
                    e = g.iteratee(e, i);
                    for (var r, n = t.length !== +t.length && g.keys(t), s = (n || t).length, a = Array(s), o = 0; o < s; o++) (r = n ? n[o] : o), (a[o] = e(t[r], r, t));
                    return a;
                });
            var y = "Reduce of empty array with no initial value";
            (g.reduce = g.foldl = g.inject = function (t, e, i, r) {
                null == t && (t = []), (e = v(e, r, 4));
                var n,
                    s = t.length !== +t.length && g.keys(t),
                    a = (s || t).length,
                    o = 0;
                if (arguments.length < 3) {
                    if (!a) throw new TypeError(y);
                    i = t[s ? s[o++] : o++];
                }
                for (; o < a; o++) i = e(i, t[(n = s ? s[o] : o)], n, t);
                return i;
            }),
                (g.reduceRight = g.foldr = function (t, e, i, r) {
                    null == t && (t = []), (e = v(e, r, 4));
                    var n,
                        s = t.length !== +t.length && g.keys(t),
                        a = (s || t).length;
                    if (arguments.length < 3) {
                        if (!a) throw new TypeError(y);
                        i = t[s ? s[--a] : --a];
                    }
                    for (; a--; ) i = e(i, t[(n = s ? s[a] : a)], n, t);
                    return i;
                }),
                (g.find = g.detect = function (t, e, i) {
                    var r;
                    return (
                        (e = g.iteratee(e, i)),
                        g.some(t, function (t, i, n) {
                            if (e(t, i, n)) return (r = t), !0;
                        }),
                        r
                    );
                }),
                (g.filter = g.select = function (t, e, i) {
                    var r = [];
                    return null == t
                        ? r
                        : ((e = g.iteratee(e, i)),
                          g.each(t, function (t, i, n) {
                              e(t, i, n) && r.push(t);
                          }),
                          r);
                }),
                (g.reject = function (t, e, i) {
                    return g.filter(t, g.negate(g.iteratee(e)), i);
                }),
                (g.every = g.all = function (t, e, i) {
                    if (null == t) return !0;
                    e = g.iteratee(e, i);
                    var r,
                        n,
                        s = t.length !== +t.length && g.keys(t),
                        a = (s || t).length;
                    for (r = 0; r < a; r++) if (((n = s ? s[r] : r), !e(t[n], n, t))) return !1;
                    return !0;
                }),
                (g.some = g.any = function (t, e, i) {
                    if (null == t) return !1;
                    e = g.iteratee(e, i);
                    var r,
                        n,
                        s = t.length !== +t.length && g.keys(t),
                        a = (s || t).length;
                    for (r = 0; r < a; r++) if (((n = s ? s[r] : r), e(t[n], n, t))) return !0;
                    return !1;
                }),
                (g.contains = g.include = function (t, e) {
                    return null != t && (t.length !== +t.length && (t = g.values(t)), g.indexOf(t, e) >= 0);
                }),
                (g.invoke = function (t, e) {
                    var i = u.call(arguments, 2),
                        r = g.isFunction(e);
                    return g.map(t, function (t) {
                        return (r ? e : t[e]).apply(t, i);
                    });
                }),
                (g.pluck = function (t, e) {
                    return g.map(t, g.property(e));
                }),
                (g.where = function (t, e) {
                    return g.filter(t, g.matches(e));
                }),
                (g.findWhere = function (t, e) {
                    return g.find(t, g.matches(e));
                }),
                (g.max = function (t, e, i) {
                    var r,
                        n,
                        s = -1 / 0,
                        a = -1 / 0;
                    if (null == e && null != t) for (var o = 0, l = (t = t.length === +t.length ? t : g.values(t)).length; o < l; o++) (r = t[o]) > s && (s = r);
                    else
                        (e = g.iteratee(e, i)),
                            g.each(t, function (t, i, r) {
                                ((n = e(t, i, r)) > a || (n === -1 / 0 && s === -1 / 0)) && ((s = t), (a = n));
                            });
                    return s;
                }),
                (g.min = function (t, e, i) {
                    var r,
                        n,
                        s = 1 / 0,
                        a = 1 / 0;
                    if (null == e && null != t) for (var o = 0, l = (t = t.length === +t.length ? t : g.values(t)).length; o < l; o++) (r = t[o]) < s && (s = r);
                    else
                        (e = g.iteratee(e, i)),
                            g.each(t, function (t, i, r) {
                                ((n = e(t, i, r)) < a || (n === 1 / 0 && s === 1 / 0)) && ((s = t), (a = n));
                            });
                    return s;
                }),
                (g.shuffle = function (t) {
                    for (var e, i = t && t.length === +t.length ? t : g.values(t), r = i.length, n = Array(r), s = 0; s < r; s++) (e = g.random(0, s)) !== s && (n[s] = n[e]), (n[e] = i[s]);
                    return n;
                }),
                (g.sample = function (t, e, i) {
                    return null == e || i ? (t.length !== +t.length && (t = g.values(t)), t[g.random(t.length - 1)]) : g.shuffle(t).slice(0, Math.max(0, e));
                }),
                (g.sortBy = function (t, e, i) {
                    return (
                        (e = g.iteratee(e, i)),
                        g.pluck(
                            g
                                .map(t, function (t, i, r) {
                                    return { value: t, index: i, criteria: e(t, i, r) };
                                })
                                .sort(function (t, e) {
                                    var i = t.criteria,
                                        r = e.criteria;
                                    if (i !== r) {
                                        if (i > r || void 0 === i) return 1;
                                        if (i < r || void 0 === r) return -1;
                                    }
                                    return t.index - e.index;
                                }),
                            "value"
                        )
                    );
                });
            var _ = function (t) {
                return function (e, i, r) {
                    var n = {};
                    return (
                        (i = g.iteratee(i, r)),
                        g.each(e, function (r, s) {
                            var a = i(r, s, e);
                            t(n, r, a);
                        }),
                        n
                    );
                };
            };
            (g.groupBy = _(function (t, e, i) {
                g.has(t, i) ? t[i].push(e) : (t[i] = [e]);
            })),
                (g.indexBy = _(function (t, e, i) {
                    t[i] = e;
                })),
                (g.countBy = _(function (t, e, i) {
                    g.has(t, i) ? t[i]++ : (t[i] = 1);
                })),
                (g.sortedIndex = function (t, e, i, r) {
                    for (var n = (i = g.iteratee(i, r, 1))(e), s = 0, a = t.length; s < a; ) {
                        var o = (s + a) >>> 1;
                        i(t[o]) < n ? (s = o + 1) : (a = o);
                    }
                    return s;
                }),
                (g.toArray = function (t) {
                    return t ? (g.isArray(t) ? u.call(t) : t.length === +t.length ? g.map(t, g.identity) : g.values(t)) : [];
                }),
                (g.size = function (t) {
                    return null == t ? 0 : t.length === +t.length ? t.length : g.keys(t).length;
                }),
                (g.partition = function (t, e, i) {
                    e = g.iteratee(e, i);
                    var r = [],
                        n = [];
                    return (
                        g.each(t, function (t, i, s) {
                            (e(t, i, s) ? r : n).push(t);
                        }),
                        [r, n]
                    );
                }),
                (g.first = g.head = g.take = function (t, e, i) {
                    if (null != t) return null == e || i ? t[0] : e < 0 ? [] : u.call(t, 0, e);
                }),
                (g.initial = function (t, e, i) {
                    return u.call(t, 0, Math.max(0, t.length - (null == e || i ? 1 : e)));
                }),
                (g.last = function (t, e, i) {
                    if (null != t) return null == e || i ? t[t.length - 1] : u.call(t, Math.max(t.length - e, 0));
                }),
                (g.rest = g.tail = g.drop = function (t, e, i) {
                    return u.call(t, null == e || i ? 1 : e);
                }),
                (g.compact = function (t) {
                    return g.filter(t, g.identity);
                });
            var w = function (t, e, i, r) {
                if (e && g.every(t, g.isArray)) return c.apply(r, t);
                for (var n = 0, s = t.length; n < s; n++) {
                    var a = t[n];
                    g.isArray(a) || g.isArguments(a) ? (e ? l.apply(r, a) : w(a, e, i, r)) : i || r.push(a);
                }
                return r;
            };
            (g.flatten = function (t, e) {
                return w(t, e, !1, []);
            }),
                (g.without = function (t) {
                    return g.difference(t, u.call(arguments, 1));
                }),
                (g.uniq = g.unique = function (t, e, i, r) {
                    if (null == t) return [];
                    g.isBoolean(e) || ((r = i), (i = e), (e = !1)), null != i && (i = g.iteratee(i, r));
                    for (var n = [], s = [], a = 0, o = t.length; a < o; a++) {
                        var l = t[a];
                        if (e) (a && s === l) || n.push(l), (s = l);
                        else if (i) {
                            var u = i(l, a, t);
                            g.indexOf(s, u) < 0 && (s.push(u), n.push(l));
                        } else g.indexOf(n, l) < 0 && n.push(l);
                    }
                    return n;
                }),
                (g.union = function () {
                    return g.uniq(w(arguments, !0, !0, []));
                }),
                (g.intersection = function (t) {
                    if (null == t) return [];
                    for (var e = [], i = arguments.length, r = 0, n = t.length; r < n; r++) {
                        var s = t[r];
                        if (!g.contains(e, s)) {
                            for (var a = 1; a < i && g.contains(arguments[a], s); a++);
                            a === i && e.push(s);
                        }
                    }
                    return e;
                }),
                (g.difference = function (t) {
                    var e = w(u.call(arguments, 1), !0, !0, []);
                    return g.filter(t, function (t) {
                        return !g.contains(e, t);
                    });
                }),
                (g.zip = function (t) {
                    if (null == t) return [];
                    for (var e = g.max(arguments, "length").length, i = Array(e), r = 0; r < e; r++) i[r] = g.pluck(arguments, r);
                    return i;
                }),
                (g.object = function (t, e) {
                    if (null == t) return {};
                    for (var i = {}, r = 0, n = t.length; r < n; r++) e ? (i[t[r]] = e[r]) : (i[t[r][0]] = t[r][1]);
                    return i;
                }),
                (g.indexOf = function (t, e, i) {
                    if (null == t) return -1;
                    var r = 0,
                        n = t.length;
                    if (i) {
                        if ("number" != typeof i) return (r = g.sortedIndex(t, e)), t[r] === e ? r : -1;
                        r = i < 0 ? Math.max(0, n + i) : i;
                    }
                    for (; r < n; r++) if (t[r] === e) return r;
                    return -1;
                }),
                (g.lastIndexOf = function (t, e, i) {
                    if (null == t) return -1;
                    var r = t.length;
                    for ("number" == typeof i && (r = i < 0 ? r + i + 1 : Math.min(r, i + 1)); --r >= 0; ) if (t[r] === e) return r;
                    return -1;
                }),
                (g.range = function (t, e, i) {
                    arguments.length <= 1 && ((e = t || 0), (t = 0)), (i = i || 1);
                    for (var r = Math.max(Math.ceil((e - t) / i), 0), n = Array(r), s = 0; s < r; s++, t += i) n[s] = t;
                    return n;
                });
            var T = function () {};
            (g.bind = function (t, e) {
                var i, r;
                if (m && t.bind === m) return m.apply(t, u.call(arguments, 1));
                if (!g.isFunction(t)) throw new TypeError("Bind must be called on a function");
                return (
                    (i = u.call(arguments, 2)),
                    (r = function () {
                        if (!(this instanceof r)) return t.apply(e, i.concat(u.call(arguments)));
                        T.prototype = t.prototype;
                        var n = new T();
                        T.prototype = null;
                        var s = t.apply(n, i.concat(u.call(arguments)));
                        return g.isObject(s) ? s : n;
                    })
                );
            }),
                (g.partial = function (t) {
                    var e = u.call(arguments, 1);
                    return function () {
                        for (var i = 0, r = e.slice(), n = 0, s = r.length; n < s; n++) r[n] === g && (r[n] = arguments[i++]);
                        for (; i < arguments.length; ) r.push(arguments[i++]);
                        return t.apply(this, r);
                    };
                }),
                (g.bindAll = function (t) {
                    var e,
                        i,
                        r = arguments.length;
                    if (r <= 1) throw new Error("bindAll must be passed function names");
                    for (e = 1; e < r; e++) t[(i = arguments[e])] = g.bind(t[i], t);
                    return t;
                }),
                (g.memoize = function (t, e) {
                    var i = function (r) {
                        var n = i.cache,
                            s = e ? e.apply(this, arguments) : r;
                        return g.has(n, s) || (n[s] = t.apply(this, arguments)), n[s];
                    };
                    return (i.cache = {}), i;
                }),
                (g.delay = function (t, e) {
                    var i = u.call(arguments, 2);
                    return setTimeout(function () {
                        return t.apply(null, i);
                    }, e);
                }),
                (g.defer = function (t) {
                    return g.delay.apply(g, [t, 1].concat(u.call(arguments, 1)));
                }),
                (g.throttle = function (t, e, i) {
                    var r,
                        n,
                        s,
                        a = null,
                        o = 0;
                    i || (i = {});
                    var l = function () {
                        (o = !1 === i.leading ? 0 : g.now()), (a = null), (s = t.apply(r, n)), a || (r = n = null);
                    };
                    return function () {
                        var u = g.now();
                        o || !1 !== i.leading || (o = u);
                        var c = e - (u - o);
                        return (r = this), (n = arguments), c <= 0 || c > e ? (clearTimeout(a), (a = null), (o = u), (s = t.apply(r, n)), a || (r = n = null)) : a || !1 === i.trailing || (a = setTimeout(l, c)), s;
                    };
                }),
                (g.debounce = function (t, e, i) {
                    var r,
                        n,
                        s,
                        a,
                        o,
                        l = function () {
                            var u = g.now() - a;
                            u < e && u > 0 ? (r = setTimeout(l, e - u)) : ((r = null), i || ((o = t.apply(s, n)), r || (s = n = null)));
                        };
                    return function () {
                        (s = this), (n = arguments), (a = g.now());
                        var u = i && !r;
                        return r || (r = setTimeout(l, e)), u && ((o = t.apply(s, n)), (s = n = null)), o;
                    };
                }),
                (g.wrap = function (t, e) {
                    return g.partial(e, t);
                }),
                (g.negate = function (t) {
                    return function () {
                        return !t.apply(this, arguments);
                    };
                }),
                (g.compose = function () {
                    var t = arguments,
                        e = t.length - 1;
                    return function () {
                        for (var i = e, r = t[e].apply(this, arguments); i--; ) r = t[i].call(this, r);
                        return r;
                    };
                }),
                (g.after = function (t, e) {
                    return function () {
                        if (--t < 1) return e.apply(this, arguments);
                    };
                }),
                (g.before = function (t, e) {
                    var i;
                    return function () {
                        return --t > 0 ? (i = e.apply(this, arguments)) : (e = null), i;
                    };
                }),
                (g.once = g.partial(g.before, 2)),
                (g.keys = function (t) {
                    if (!g.isObject(t)) return [];
                    if (f) return f(t);
                    var e = [];
                    for (var i in t) g.has(t, i) && e.push(i);
                    return e;
                }),
                (g.values = function (t) {
                    for (var e = g.keys(t), i = e.length, r = Array(i), n = 0; n < i; n++) r[n] = t[e[n]];
                    return r;
                }),
                (g.pairs = function (t) {
                    for (var e = g.keys(t), i = e.length, r = Array(i), n = 0; n < i; n++) r[n] = [e[n], t[e[n]]];
                    return r;
                }),
                (g.invert = function (t) {
                    for (var e = {}, i = g.keys(t), r = 0, n = i.length; r < n; r++) e[t[i[r]]] = i[r];
                    return e;
                }),
                (g.functions = g.methods = function (t) {
                    var e = [];
                    for (var i in t) g.isFunction(t[i]) && e.push(i);
                    return e.sort();
                }),
                (g.extend = function (t) {
                    if (!g.isObject(t)) return t;
                    for (var e, i, r = 1, n = arguments.length; r < n; r++) {
                        e = arguments[r];
                        for (i in e) d.call(e, i) && (t[i] = e[i]);
                    }
                    return t;
                }),
                (g.pick = function (t, e, i) {
                    var r,
                        n = {};
                    if (null == t) return n;
                    if (g.isFunction(e)) {
                        e = v(e, i);
                        for (r in t) {
                            var s = t[r];
                            e(s, r, t) && (n[r] = s);
                        }
                    } else {
                        var a = c.apply([], u.call(arguments, 1));
                        t = new Object(t);
                        for (var o = 0, l = a.length; o < l; o++) (r = a[o]) in t && (n[r] = t[r]);
                    }
                    return n;
                }),
                (g.omit = function (t, e, i) {
                    if (g.isFunction(e)) e = g.negate(e);
                    else {
                        var r = g.map(c.apply([], u.call(arguments, 1)), String);
                        e = function (t, e) {
                            return !g.contains(r, e);
                        };
                    }
                    return g.pick(t, e, i);
                }),
                (g.defaults = function (t) {
                    if (!g.isObject(t)) return t;
                    for (var e = 1, i = arguments.length; e < i; e++) {
                        var r = arguments[e];
                        for (var n in r) void 0 === t[n] && (t[n] = r[n]);
                    }
                    return t;
                }),
                (g.clone = function (t) {
                    return g.isObject(t) ? (g.isArray(t) ? t.slice() : g.extend({}, t)) : t;
                }),
                (g.tap = function (t, e) {
                    return e(t), t;
                });
            var b = function (t, e, i, r) {
                if (t === e) return 0 !== t || 1 / t == 1 / e;
                if (null == t || null == e) return t === e;
                t instanceof g && (t = t._wrapped), e instanceof g && (e = e._wrapped);
                var n = h.call(t);
                if (n !== h.call(e)) return !1;
                switch (n) {
                    case "[object RegExp]":
                    case "[object String]":
                        return "" + t == "" + e;
                    case "[object Number]":
                        return +t != +t ? +e != +e : 0 == +t ? 1 / +t == 1 / e : +t == +e;
                    case "[object Date]":
                    case "[object Boolean]":
                        return +t == +e;
                }
                if ("object" != typeof t || "object" != typeof e) return !1;
                for (var s = i.length; s--; ) if (i[s] === t) return r[s] === e;
                var a = t.constructor,
                    o = e.constructor;
                if (a !== o && "constructor" in t && "constructor" in e && !(g.isFunction(a) && a instanceof a && g.isFunction(o) && o instanceof o)) return !1;
                i.push(t), r.push(e);
                var l, u;
                if ("[object Array]" === n) {
                    if (((l = t.length), (u = l === e.length))) for (; l-- && (u = b(t[l], e[l], i, r)); );
                } else {
                    var c,
                        d = g.keys(t);
                    if (((l = d.length), (u = g.keys(e).length === l))) for (; l-- && ((c = d[l]), (u = g.has(e, c) && b(t[c], e[c], i, r))); );
                }
                return i.pop(), r.pop(), u;
            };
            (g.isEqual = function (t, e) {
                return b(t, e, [], []);
            }),
                (g.isEmpty = function (t) {
                    if (null == t) return !0;
                    if (g.isArray(t) || g.isString(t) || g.isArguments(t)) return 0 === t.length;
                    for (var e in t) if (g.has(t, e)) return !1;
                    return !0;
                }),
                (g.isElement = function (t) {
                    return !(!t || 1 !== t.nodeType);
                }),
                (g.isArray =
                    p ||
                    function (t) {
                        return "[object Array]" === h.call(t);
                    }),
                (g.isObject = function (t) {
                    var e = typeof t;
                    return "function" === e || ("object" === e && !!t);
                }),
                g.each(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function (t) {
                    g["is" + t] = function (e) {
                        return h.call(e) === "[object " + t + "]";
                    };
                }),
                g.isArguments(arguments) ||
                    (g.isArguments = function (t) {
                        return g.has(t, "callee");
                    }),
                (g.isFunction = function (t) {
                    return "function" == typeof t || !1;
                }),
                (g.isFinite = function (t) {
                    return isFinite(t) && !isNaN(parseFloat(t));
                }),
                (g.isNaN = function (t) {
                    return g.isNumber(t) && t !== +t;
                }),
                (g.isBoolean = function (t) {
                    return !0 === t || !1 === t || "[object Boolean]" === h.call(t);
                }),
                (g.isNull = function (t) {
                    return null === t;
                }),
                (g.isUndefined = function (t) {
                    return void 0 === t;
                }),
                (g.has = function (t, e) {
                    return null != t && d.call(t, e);
                }),
                (g.noConflict = function () {
                    return (i._ = n), this;
                }),
                (g.identity = function (t) {
                    return t;
                }),
                (g.constant = function (t) {
                    return function () {
                        return t;
                    };
                }),
                (g.noop = function () {}),
                (g.property = function (t) {
                    return function (e) {
                        return e[t];
                    };
                }),
                (g.matches = function (t) {
                    var e = g.pairs(t),
                        i = e.length;
                    return function (t) {
                        if (null == t) return !i;
                        t = new Object(t);
                        for (var r = 0; r < i; r++) {
                            var n = e[r],
                                s = n[0];
                            if (n[1] !== t[s] || !(s in t)) return !1;
                        }
                        return !0;
                    };
                }),
                (g.times = function (t, e, i) {
                    var r = Array(Math.max(0, t));
                    e = v(e, i, 1);
                    for (var n = 0; n < t; n++) r[n] = e(n);
                    return r;
                }),
                (g.random = function (t, e) {
                    return null == e && ((e = t), (t = 0)), t + Math.floor(Math.random() * (e - t + 1));
                }),
                (g.now =
                    Date.now ||
                    function () {
                        return new Date().getTime();
                    });
            var x = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;" },
                S = g.invert(x),
                C = function (t) {
                    var e = function (e) {
                            return t[e];
                        },
                        i = "(?:" + g.keys(t).join("|") + ")",
                        r = RegExp(i),
                        n = RegExp(i, "g");
                    return function (t) {
                        return (t = null == t ? "" : "" + t), r.test(t) ? t.replace(n, e) : t;
                    };
                };
            (g.escape = C(x)),
                (g.unescape = C(S)),
                (g.result = function (t, e) {
                    if (null != t) {
                        var i = t[e];
                        return g.isFunction(i) ? t[e]() : i;
                    }
                });
            var P = 0;
            (g.uniqueId = function (t) {
                var e = ++P + "";
                return t ? t + e : e;
            }),
                (g.templateSettings = { evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g });
            var E = /(.)^/,
                k = { "'": "'", "\\": "\\", "\r": "r", "\n": "n", "\u2028": "u2028", "\u2029": "u2029" },
                A = /\\|'|\r|\n|\u2028|\u2029/g,
                M = function (t) {
                    return "\\" + k[t];
                };
            (g.template = function (t, e, i) {
                !e && i && (e = i), (e = g.defaults({}, e, g.templateSettings));
                var r = RegExp([(e.escape || E).source, (e.interpolate || E).source, (e.evaluate || E).source].join("|") + "|$", "g"),
                    n = 0,
                    s = "__p+='";
                t.replace(r, function (e, i, r, a, o) {
                    return (
                        (s += t.slice(n, o).replace(A, M)), (n = o + e.length), i ? (s += "'+\n((__t=(" + i + "))==null?'':_.escape(__t))+\n'") : r ? (s += "'+\n((__t=(" + r + "))==null?'':__t)+\n'") : a && (s += "';\n" + a + "\n__p+='"), e
                    );
                }),
                    (s += "';\n"),
                    e.variable || (s = "with(obj||{}){\n" + s + "}\n"),
                    (s = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + s + "return __p;\n");
                try {
                    var a = new Function(e.variable || "obj", "_", s);
                } catch (t) {
                    throw ((t.source = s), t);
                }
                var o = function (t) {
                        return a.call(this, t, g);
                    },
                    l = e.variable || "obj";
                return (o.source = "function(" + l + "){\n" + s + "}"), o;
            }),
                (g.chain = function (t) {
                    var e = g(t);
                    return (e._chain = !0), e;
                });
            var L = function (t) {
                return this._chain ? g(t).chain() : t;
            };
            (g.mixin = function (t) {
                g.each(g.functions(t), function (e) {
                    var i = (g[e] = t[e]);
                    g.prototype[e] = function () {
                        var t = [this._wrapped];
                        return l.apply(t, arguments), L.call(this, i.apply(g, t));
                    };
                });
            }),
                g.mixin(g),
                g.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (t) {
                    var e = s[t];
                    g.prototype[t] = function () {
                        var i = this._wrapped;
                        return e.apply(i, arguments), ("shift" !== t && "splice" !== t) || 0 !== i.length || delete i[0], L.call(this, i);
                    };
                }),
                g.each(["concat", "join", "slice"], function (t) {
                    var e = s[t];
                    g.prototype[t] = function () {
                        return L.call(this, e.apply(this._wrapped, arguments));
                    };
                }),
                (g.prototype.value = function () {
                    return this._wrapped;
                }),
                void 0 ===
                    (r = function () {
                        return g;
                    }.apply(e, [])) || (t.exports = r);
        }.call(this));
    },
    function (t, e, i) {
        (function (e, i) {
            !(function (e, i) {
                t.exports = i();
            })(0, function () {
                "use strict";
                function t(t, e) {
                    return (e = { exports: {} }), t(e, e.exports), e.exports;
                }
                function r(t, e, i) {
                    var r = _.get(t.element) || {};
                    e in r || (r[e] = []), r[e].push(i), _.set(t.element, r);
                }
                function n(t, e) {
                    return (_.get(t.element) || {})[e] || [];
                }
                function s(t, e, i) {
                    var r = _.get(t.element) || {};
                    if (!r[e]) return !0;
                    if (!i) return (r[e] = []), _.set(t.element, r), !0;
                    var n = r[e].indexOf(i);
                    return -1 !== n && r[e].splice(n, 1), _.set(t.element, r), r[e] && 0 === r[e].length;
                }
                function a(t, e) {
                    return 0 === t.indexOf(e.toLowerCase()) ? t : "" + e.toLowerCase() + t.substr(0, 1).toUpperCase() + t.substr(1);
                }
                function o(t) {
                    return /^(https?:)?\/\/((player|www).)?vimeo.com(?=$|\/)/.test(t);
                }
                function l() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        e = t.id,
                        i = t.url,
                        r = e || i;
                    if (!r) throw new Error("An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.");
                    if (
                        (function (t) {
                            return !isNaN(parseFloat(t)) && isFinite(t) && Math.floor(t) == t;
                        })(r)
                    )
                        return "https://vimeo.com/" + r;
                    if (o(r)) return r.replace("http:", "https:");
                    if (e) throw new TypeError("“" + e + "” is not a valid video id.");
                    throw new TypeError("“" + r + "” is not a vimeo.com url.");
                }
                function u(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return w.reduce(function (e, i) {
                        var r = t.getAttribute("data-vimeo-" + i);
                        return (r || "" === r) && (e[i] = "" === r ? 1 : r), e;
                    }, e);
                }
                function c(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return new Promise(function (i, r) {
                        if (!o(t)) throw new TypeError("“" + t + "” is not a vimeo.com url.");
                        var n = "https://vimeo.com/api/oembed.json?url=" + encodeURIComponent(t);
                        for (var s in e) e.hasOwnProperty(s) && (n += "&" + s + "=" + encodeURIComponent(e[s]));
                        var a = "XDomainRequest" in window ? new XDomainRequest() : new XMLHttpRequest();
                        a.open("GET", n, !0),
                            (a.onload = function () {
                                if (404 !== a.status)
                                    if (403 !== a.status)
                                        try {
                                            var e = JSON.parse(a.responseText);
                                            i(e);
                                        } catch (t) {
                                            r(t);
                                        }
                                    else r(new Error("“" + t + "” is not embeddable."));
                                else r(new Error("“" + t + "” was not found."));
                            }),
                            (a.onerror = function () {
                                var t = a.status ? " (" + a.status + ")" : "";
                                r(new Error("There was an error fetching the embed code from Vimeo" + t + "."));
                            }),
                            a.send();
                    });
                }
                function h(t, e) {
                    var i = t.html;
                    if (!e) throw new TypeError("An element must be provided");
                    if (null !== e.getAttribute("data-vimeo-initialized")) return e.querySelector("iframe");
                    var r = document.createElement("div");
                    return (r.innerHTML = i), e.appendChild(r.firstChild), e.setAttribute("data-vimeo-initialized", "true"), e.querySelector("iframe");
                }
                function d(t) {
                    return "string" == typeof t && (t = JSON.parse(t)), t;
                }
                function p(t, e, i) {
                    if (t.element.contentWindow && t.element.contentWindow.postMessage) {
                        var r = { method: e };
                        void 0 !== i && (r.value = i);
                        var n = parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/, "$1"));
                        n >= 8 && n < 10 && (r = JSON.stringify(r)), t.element.contentWindow.postMessage(r, t.origin);
                    }
                }
                function f(t, e) {
                    var i = [],
                        r = void 0;
                    if ((e = d(e)).event) {
                        if ("error" === e.event) {
                            n(t, e.data.method).forEach(function (i) {
                                var r = new Error(e.data.message);
                                (r.name = e.data.name), i.reject(r), s(t, e.data.method, i);
                            });
                        }
                        (i = n(t, "event:" + e.event)), (r = e.data);
                    } else if (e.method) {
                        var a = (function (t, e) {
                            var i = n(t, e);
                            if (i.length < 1) return !1;
                            var r = i.shift();
                            return s(t, e, r), r;
                        })(t, e.method);
                        a && (i.push(a), (r = e.value));
                    }
                    i.forEach(function (e) {
                        try {
                            if ("function" == typeof e) return void e.call(t, r);
                            e.resolve(r);
                        } catch (t) {}
                    });
                }
                var m = void 0 !== Array.prototype.indexOf,
                    g = void 0 !== window.postMessage;
                if (!m || !g) throw new Error("Sorry, the Vimeo Player API is not available in this browser.");
                var v = "undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : {},
                    y =
                        (t(function (t, e) {
                            !(function (t) {
                                function e(t, e) {
                                    function i(t) {
                                        if (!this || this.constructor !== i) return new i(t);
                                        (this._keys = []),
                                            (this._values = []),
                                            (this._itp = []),
                                            (this.objectOnly = e),
                                            t &&
                                                function (t) {
                                                    this.add
                                                        ? t.forEach(this.add, this)
                                                        : t.forEach(function (t) {
                                                              this.set(t[0], t[1]);
                                                          }, this);
                                                }.call(this, t);
                                    }
                                    return e || y(t, "size", { get: m }), (t.constructor = i), (i.prototype = t), i;
                                }
                                function i(t) {
                                    return (
                                        this.has(t) &&
                                            (this._keys.splice(v, 1),
                                            this._values.splice(v, 1),
                                            this._itp.forEach(function (t) {
                                                v < t[0] && t[0]--;
                                            })),
                                        -1 < v
                                    );
                                }
                                function r(t) {
                                    return this.has(t) ? this._values[v] : void 0;
                                }
                                function n(t, e) {
                                    if (this.objectOnly && e !== Object(e)) throw new TypeError("Invalid value used as weak collection key");
                                    if (e != e || 0 === e) for (v = t.length; v-- && !_(t[v], e); );
                                    else v = t.indexOf(e);
                                    return -1 < v;
                                }
                                function s(t) {
                                    return n.call(this, this._values, t);
                                }
                                function a(t) {
                                    return n.call(this, this._keys, t);
                                }
                                function o(t, e) {
                                    return this.has(t) ? (this._values[v] = e) : (this._values[this._keys.push(t) - 1] = e), this;
                                }
                                function l(t) {
                                    return this.has(t) || this._values.push(t), this;
                                }
                                function u() {
                                    (this._keys || 0).length = this._values.length = 0;
                                }
                                function c() {
                                    return f(this._itp, this._keys);
                                }
                                function h() {
                                    return f(this._itp, this._values);
                                }
                                function d() {
                                    return f(this._itp, this._keys, this._values);
                                }
                                function p() {
                                    return f(this._itp, this._values, this._values);
                                }
                                function f(t, e, i) {
                                    var r = [0],
                                        n = !1;
                                    return (
                                        t.push(r),
                                        {
                                            next: function () {
                                                var s,
                                                    a = r[0];
                                                return !n && a < e.length ? ((s = i ? [e[a], i[a]] : e[a]), r[0]++) : ((n = !0), t.splice(t.indexOf(r), 1)), { done: n, value: s };
                                            },
                                        }
                                    );
                                }
                                function m() {
                                    return this._values.length;
                                }
                                function g(t, e) {
                                    for (var i = this.entries(); ; ) {
                                        var r = i.next();
                                        if (r.done) break;
                                        t.call(e, r.value[1], r.value[0], this);
                                    }
                                }
                                var v,
                                    y = Object.defineProperty,
                                    _ = function (t, e) {
                                        return t === e || (t != t && e != e);
                                    };
                                "undefined" == typeof WeakMap && (t.WeakMap = e({ delete: i, clear: u, get: r, has: a, set: o }, !0)),
                                    ("undefined" != typeof Map && "function" == typeof new Map().values && new Map().values().next) || (t.Map = e({ delete: i, has: a, get: r, set: o, keys: c, values: h, entries: d, forEach: g, clear: u })),
                                    ("undefined" != typeof Set && "function" == typeof new Set().values && new Set().values().next) || (t.Set = e({ has: s, add: l, delete: i, clear: u, keys: h, values: h, entries: p, forEach: g })),
                                    "undefined" == typeof WeakSet && (t.WeakSet = e({ delete: i, add: l, clear: u, has: s }, !0));
                            })(void 0 !== v ? v : window);
                        }),
                        t(function (t) {
                            var e =
                                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                                    ? function (t) {
                                          return typeof t;
                                      }
                                    : function (t) {
                                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                                      };
                            !(function (e, i, r) {
                                (i[e] = i[e] || r()), t.exports && (t.exports = i[e]);
                            })("Promise", v, function () {
                                function t(t, e) {
                                    d.add(t, e), h || (h = f(d.drain));
                                }
                                function r(t) {
                                    var i,
                                        r = void 0 === t ? "undefined" : e(t);
                                    return null == t || ("object" != r && "function" != r) || (i = t.then), "function" == typeof i && i;
                                }
                                function n() {
                                    for (var t = 0; t < this.chain.length; t++)
                                        !(function (t, e, i) {
                                            var n, s;
                                            try {
                                                !1 === e
                                                    ? i.reject(t.msg)
                                                    : (n = !0 === e ? t.msg : e.call(void 0, t.msg)) === i.promise
                                                    ? i.reject(TypeError("Promise-chain cycle"))
                                                    : (s = r(n))
                                                    ? s.call(n, i.resolve, i.reject)
                                                    : i.resolve(n);
                                            } catch (t) {
                                                i.reject(t);
                                            }
                                        })(this, 1 === this.state ? this.chain[t].success : this.chain[t].failure, this.chain[t]);
                                    this.chain.length = 0;
                                }
                                function s(e) {
                                    var i,
                                        o = this;
                                    if (!o.triggered) {
                                        (o.triggered = !0), o.def && (o = o.def);
                                        try {
                                            (i = r(e))
                                                ? t(function () {
                                                      var t = new l(o);
                                                      try {
                                                          i.call(
                                                              e,
                                                              function () {
                                                                  s.apply(t, arguments);
                                                              },
                                                              function () {
                                                                  a.apply(t, arguments);
                                                              }
                                                          );
                                                      } catch (e) {
                                                          a.call(t, e);
                                                      }
                                                  })
                                                : ((o.msg = e), (o.state = 1), o.chain.length > 0 && t(n, o));
                                        } catch (t) {
                                            a.call(new l(o), t);
                                        }
                                    }
                                }
                                function a(e) {
                                    var i = this;
                                    i.triggered || ((i.triggered = !0), i.def && (i = i.def), (i.msg = e), (i.state = 2), i.chain.length > 0 && t(n, i));
                                }
                                function o(t, e, i, r) {
                                    for (var n = 0; n < e.length; n++)
                                        !(function (n) {
                                            t.resolve(e[n]).then(function (t) {
                                                i(n, t);
                                            }, r);
                                        })(n);
                                }
                                function l(t) {
                                    (this.def = t), (this.triggered = !1);
                                }
                                function u(e) {
                                    if ("function" != typeof e) throw TypeError("Not a function");
                                    if (0 !== this.__NPO__) throw TypeError("Not a promise");
                                    this.__NPO__ = 1;
                                    var i = new (function (t) {
                                        (this.promise = t), (this.state = 0), (this.triggered = !1), (this.chain = []), (this.msg = void 0);
                                    })(this);
                                    (this.then = function (e, r) {
                                        var s = { success: "function" != typeof e || e, failure: "function" == typeof r && r };
                                        return (
                                            (s.promise = new this.constructor(function (t, e) {
                                                if ("function" != typeof t || "function" != typeof e) throw TypeError("Not a function");
                                                (s.resolve = t), (s.reject = e);
                                            })),
                                            i.chain.push(s),
                                            0 !== i.state && t(n, i),
                                            s.promise
                                        );
                                    }),
                                        (this.catch = function (t) {
                                            return this.then(void 0, t);
                                        });
                                    try {
                                        e.call(
                                            void 0,
                                            function (t) {
                                                s.call(i, t);
                                            },
                                            function (t) {
                                                a.call(i, t);
                                            }
                                        );
                                    } catch (t) {
                                        a.call(i, t);
                                    }
                                }
                                var c,
                                    h,
                                    d,
                                    p = Object.prototype.toString,
                                    f =
                                        void 0 !== i
                                            ? function (t) {
                                                  return i(t);
                                              }
                                            : setTimeout;
                                try {
                                    Object.defineProperty({}, "x", {}),
                                        (c = function (t, e, i, r) {
                                            return Object.defineProperty(t, e, { value: i, writable: !0, configurable: !1 !== r });
                                        });
                                } catch (t) {
                                    c = function (t, e, i) {
                                        return (t[e] = i), t;
                                    };
                                }
                                d = (function () {
                                    var t, e, i;
                                    return {
                                        add: function (r, n) {
                                            (i = new (function (t, e) {
                                                (this.fn = t), (this.self = e), (this.next = void 0);
                                            })(r, n)),
                                                e ? (e.next = i) : (t = i),
                                                (e = i),
                                                (i = void 0);
                                        },
                                        drain: function () {
                                            var i = t;
                                            for (t = e = h = void 0; i; ) i.fn.call(i.self), (i = i.next);
                                        },
                                    };
                                })();
                                var m = c({}, "constructor", u, !1);
                                return (
                                    (u.prototype = m),
                                    c(m, "__NPO__", 0, !1),
                                    c(u, "resolve", function (t) {
                                        return t && "object" == (void 0 === t ? "undefined" : e(t)) && 1 === t.__NPO__
                                            ? t
                                            : new this(function (e, i) {
                                                  if ("function" != typeof e || "function" != typeof i) throw TypeError("Not a function");
                                                  e(t);
                                              });
                                    }),
                                    c(u, "reject", function (t) {
                                        return new this(function (e, i) {
                                            if ("function" != typeof e || "function" != typeof i) throw TypeError("Not a function");
                                            i(t);
                                        });
                                    }),
                                    c(u, "all", function (t) {
                                        var e = this;
                                        return "[object Array]" != p.call(t)
                                            ? e.reject(TypeError("Not an array"))
                                            : 0 === t.length
                                            ? e.resolve([])
                                            : new e(function (i, r) {
                                                  if ("function" != typeof i || "function" != typeof r) throw TypeError("Not a function");
                                                  var n = t.length,
                                                      s = Array(n),
                                                      a = 0;
                                                  o(
                                                      e,
                                                      t,
                                                      function (t, e) {
                                                          (s[t] = e), ++a === n && i(s);
                                                      },
                                                      r
                                                  );
                                              });
                                    }),
                                    c(u, "race", function (t) {
                                        var e = this;
                                        return "[object Array]" != p.call(t)
                                            ? e.reject(TypeError("Not an array"))
                                            : new e(function (i, r) {
                                                  if ("function" != typeof i || "function" != typeof r) throw TypeError("Not a function");
                                                  o(
                                                      e,
                                                      t,
                                                      function (t, e) {
                                                          i(e);
                                                      },
                                                      r
                                                  );
                                              });
                                    }),
                                    u
                                );
                            });
                        })),
                    _ = new WeakMap(),
                    w = ["id", "url", "width", "maxwidth", "height", "maxheight", "portrait", "title", "byline", "color", "autoplay", "autopause", "loop", "responsive"],
                    T = (function () {
                        function t(t, e) {
                            for (var i = 0; i < e.length; i++) {
                                var r = e[i];
                                (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
                            }
                        }
                        return function (e, i, r) {
                            return i && t(e.prototype, i), r && t(e, r), e;
                        };
                    })(),
                    b = new WeakMap(),
                    x = new WeakMap(),
                    S = (function () {
                        function t(e) {
                            var i = this,
                                r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            if (
                                ((function (t, e) {
                                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                                })(this, t),
                                window.jQuery && e instanceof jQuery && (e.length > 1 && window.console && console.warn && console.warn("A jQuery object with multiple elements was passed, using the first element."), (e = e[0])),
                                "string" == typeof e && (e = document.getElementById(e)),
                                !(function (t) {
                                    return t instanceof window.HTMLElement;
                                })(e))
                            )
                                throw new TypeError("You must pass either a valid element or a valid id.");
                            if ("IFRAME" !== e.nodeName) {
                                var n = e.querySelector("iframe");
                                n && (e = n);
                            }
                            if ("IFRAME" === e.nodeName && !o(e.getAttribute("src") || "")) throw new Error("The player element passed isn’t a Vimeo embed.");
                            if (b.has(e)) return b.get(e);
                            (this.element = e), (this.origin = "*");
                            var s = new y(function (t, n) {
                                var s = function (e) {
                                    if (o(e.origin) && i.element.contentWindow === e.source) {
                                        "*" === i.origin && (i.origin = e.origin);
                                        var r = d(e.data),
                                            n = "event" in r && "ready" === r.event,
                                            s = "method" in r && "ping" === r.method;
                                        if (n || s) return i.element.setAttribute("data-ready", "true"), void t();
                                        f(i, r);
                                    }
                                };
                                if ((window.addEventListener ? window.addEventListener("message", s, !1) : window.attachEvent && window.attachEvent("onmessage", s), "IFRAME" !== i.element.nodeName)) {
                                    var a = u(e, r);
                                    c(l(a), a)
                                        .then(function (t) {
                                            var r = h(t, e);
                                            return (
                                                (i.element = r),
                                                (function (t, e) {
                                                    var i = _.get(t);
                                                    _.set(e, i), _.delete(t);
                                                })(e, r),
                                                b.set(i.element, i),
                                                t
                                            );
                                        })
                                        .catch(function (t) {
                                            return n(t);
                                        });
                                }
                            });
                            return x.set(this, s), b.set(this.element, this), "IFRAME" === this.element.nodeName && p(this, "ping"), this;
                        }
                        return (
                            T(t, [
                                {
                                    key: "callMethod",
                                    value: function (t) {
                                        var e = this,
                                            i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                        return new y(function (n, s) {
                                            return e.ready().then(function () {
                                                r(e, t, { resolve: n, reject: s }), p(e, t, i);
                                            });
                                        });
                                    },
                                },
                                {
                                    key: "get",
                                    value: function (t) {
                                        var e = this;
                                        return new y(function (i, n) {
                                            return (
                                                (t = a(t, "get")),
                                                e.ready().then(function () {
                                                    r(e, t, { resolve: i, reject: n }), p(e, t);
                                                })
                                            );
                                        });
                                    },
                                },
                                {
                                    key: "set",
                                    value: function (t, e) {
                                        var i = this;
                                        return y.resolve(e).then(function (e) {
                                            if (((t = a(t, "set")), void 0 === e || null === e)) throw new TypeError("There must be a value to set.");
                                            return i.ready().then(function () {
                                                return new y(function (n, s) {
                                                    r(i, t, { resolve: n, reject: s }), p(i, t, e);
                                                });
                                            });
                                        });
                                    },
                                },
                                {
                                    key: "on",
                                    value: function (t, e) {
                                        if (!t) throw new TypeError("You must pass an event name.");
                                        if (!e) throw new TypeError("You must pass a callback function.");
                                        if ("function" != typeof e) throw new TypeError("The callback must be a function.");
                                        0 === n(this, "event:" + t).length && this.callMethod("addEventListener", t).catch(function () {}), r(this, "event:" + t, e);
                                    },
                                },
                                {
                                    key: "off",
                                    value: function (t, e) {
                                        if (!t) throw new TypeError("You must pass an event name.");
                                        if (e && "function" != typeof e) throw new TypeError("The callback must be a function.");
                                        s(this, "event:" + t, e) && this.callMethod("removeEventListener", t).catch(function (t) {});
                                    },
                                },
                                {
                                    key: "loadVideo",
                                    value: function (t) {
                                        return this.callMethod("loadVideo", t);
                                    },
                                },
                                {
                                    key: "ready",
                                    value: function () {
                                        var t = x.get(this);
                                        return y.resolve(t);
                                    },
                                },
                                {
                                    key: "addCuePoint",
                                    value: function (t) {
                                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                        return this.callMethod("addCuePoint", { time: t, data: e });
                                    },
                                },
                                {
                                    key: "removeCuePoint",
                                    value: function (t) {
                                        return this.callMethod("removeCuePoint", t);
                                    },
                                },
                                {
                                    key: "enableTextTrack",
                                    value: function (t, e) {
                                        if (!t) throw new TypeError("You must pass a language.");
                                        return this.callMethod("enableTextTrack", { language: t, kind: e });
                                    },
                                },
                                {
                                    key: "disableTextTrack",
                                    value: function () {
                                        return this.callMethod("disableTextTrack");
                                    },
                                },
                                {
                                    key: "pause",
                                    value: function () {
                                        return this.callMethod("pause");
                                    },
                                },
                                {
                                    key: "play",
                                    value: function () {
                                        return this.callMethod("play");
                                    },
                                },
                                {
                                    key: "unload",
                                    value: function () {
                                        return this.callMethod("unload");
                                    },
                                },
                                {
                                    key: "getAutopause",
                                    value: function () {
                                        return this.get("autopause");
                                    },
                                },
                                {
                                    key: "setAutopause",
                                    value: function (t) {
                                        return this.set("autopause", t);
                                    },
                                },
                                {
                                    key: "getColor",
                                    value: function () {
                                        return this.get("color");
                                    },
                                },
                                {
                                    key: "setColor",
                                    value: function (t) {
                                        return this.set("color", t);
                                    },
                                },
                                {
                                    key: "getCuePoints",
                                    value: function () {
                                        return this.get("cuePoints");
                                    },
                                },
                                {
                                    key: "getCurrentTime",
                                    value: function () {
                                        return this.get("currentTime");
                                    },
                                },
                                {
                                    key: "setCurrentTime",
                                    value: function (t) {
                                        return this.set("currentTime", t);
                                    },
                                },
                                {
                                    key: "getDuration",
                                    value: function () {
                                        return this.get("duration");
                                    },
                                },
                                {
                                    key: "getEnded",
                                    value: function () {
                                        return this.get("ended");
                                    },
                                },
                                {
                                    key: "getLoop",
                                    value: function () {
                                        return this.get("loop");
                                    },
                                },
                                {
                                    key: "setLoop",
                                    value: function (t) {
                                        return this.set("loop", t);
                                    },
                                },
                                {
                                    key: "getPaused",
                                    value: function () {
                                        return this.get("paused");
                                    },
                                },
                                {
                                    key: "getTextTracks",
                                    value: function () {
                                        return this.get("textTracks");
                                    },
                                },
                                {
                                    key: "getVideoEmbedCode",
                                    value: function () {
                                        return this.get("videoEmbedCode");
                                    },
                                },
                                {
                                    key: "getVideoId",
                                    value: function () {
                                        return this.get("videoId");
                                    },
                                },
                                {
                                    key: "getVideoTitle",
                                    value: function () {
                                        return this.get("videoTitle");
                                    },
                                },
                                {
                                    key: "getVideoWidth",
                                    value: function () {
                                        return this.get("videoWidth");
                                    },
                                },
                                {
                                    key: "getVideoHeight",
                                    value: function () {
                                        return this.get("videoHeight");
                                    },
                                },
                                {
                                    key: "getVideoUrl",
                                    value: function () {
                                        return this.get("videoUrl");
                                    },
                                },
                                {
                                    key: "getVolume",
                                    value: function () {
                                        return this.get("volume");
                                    },
                                },
                                {
                                    key: "setVolume",
                                    value: function (t) {
                                        return this.set("volume", t);
                                    },
                                },
                            ]),
                            t
                        );
                    })();
                return (
                    (function () {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document,
                            e = function (t) {
                                "console" in window && console.error && console.error("There was an error creating an embed: " + t);
                            };
                        [].slice.call(t.querySelectorAll("[data-vimeo-id], [data-vimeo-url]")).forEach(function (t) {
                            try {
                                if (null !== t.getAttribute("data-vimeo-defer")) return;
                                var i = u(t);
                                c(l(i), i)
                                    .then(function (e) {
                                        return h(e, t);
                                    })
                                    .catch(e);
                            } catch (t) {
                                e(t);
                            }
                        });
                    })(),
                    (function () {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document,
                            e = function (e) {
                                if (o(e.origin) && e.data && "spacechange" === e.data.event)
                                    for (var i = t.querySelectorAll("iframe"), r = 0; r < i.length; r++)
                                        if (i[r].contentWindow === e.source) {
                                            var n = i[r].parentElement;
                                            n && -1 !== n.className.indexOf("vimeo-space") && (n.style.paddingBottom = e.data.data[0].bottom + "px");
                                            break;
                                        }
                            };
                        window.addEventListener ? window.addEventListener("message", e, !1) : window.attachEvent && window.attachEvent("onmessage", e);
                    })(),
                    S
                );
            });
        }.call(
            e,
            (function () {
                return this;
            })(),
            i(8).setImmediate
        ));
    },
    function (t, e, i) {
        function r(t, e) {
            (this._id = t), (this._clearFn = e);
        }
        var n = Function.prototype.apply;
        (e.setTimeout = function () {
            return new r(n.call(setTimeout, window, arguments), clearTimeout);
        }),
            (e.setInterval = function () {
                return new r(n.call(setInterval, window, arguments), clearInterval);
            }),
            (e.clearTimeout = e.clearInterval = function (t) {
                t && t.close();
            }),
            (r.prototype.unref = r.prototype.ref = function () {}),
            (r.prototype.close = function () {
                this._clearFn.call(window, this._id);
            }),
            (e.enroll = function (t, e) {
                clearTimeout(t._idleTimeoutId), (t._idleTimeout = e);
            }),
            (e.unenroll = function (t) {
                clearTimeout(t._idleTimeoutId), (t._idleTimeout = -1);
            }),
            (e._unrefActive = e.active = function (t) {
                clearTimeout(t._idleTimeoutId);
                var e = t._idleTimeout;
                e >= 0 &&
                    (t._idleTimeoutId = setTimeout(function () {
                        t._onTimeout && t._onTimeout();
                    }, e));
            }),
            i(9),
            (e.setImmediate = setImmediate),
            (e.clearImmediate = clearImmediate);
    },
    function (t, e, i) {
        (function (t, e) {
            !(function (t, i) {
                "use strict";
                function r(t) {
                    delete o[t];
                }
                function n(t) {
                    if (l) setTimeout(n, 0, t);
                    else {
                        var e = o[t];
                        if (e) {
                            l = !0;
                            try {
                                !(function (t) {
                                    var e = t.callback,
                                        r = t.args;
                                    switch (r.length) {
                                        case 0:
                                            e();
                                            break;
                                        case 1:
                                            e(r[0]);
                                            break;
                                        case 2:
                                            e(r[0], r[1]);
                                            break;
                                        case 3:
                                            e(r[0], r[1], r[2]);
                                            break;
                                        default:
                                            e.apply(i, r);
                                    }
                                })(e);
                            } finally {
                                r(t), (l = !1);
                            }
                        }
                    }
                }
                if (!t.setImmediate) {
                    var s,
                        a = 1,
                        o = {},
                        l = !1,
                        u = t.document,
                        c = Object.getPrototypeOf && Object.getPrototypeOf(t);
                    (c = c && c.setTimeout ? c : t),
                        "[object process]" === {}.toString.call(t.process)
                            ? (s = function (t) {
                                  e.nextTick(function () {
                                      n(t);
                                  });
                              })
                            : (function () {
                                  if (t.postMessage && !t.importScripts) {
                                      var e = !0,
                                          i = t.onmessage;
                                      return (
                                          (t.onmessage = function () {
                                              e = !1;
                                          }),
                                          t.postMessage("", "*"),
                                          (t.onmessage = i),
                                          e
                                      );
                                  }
                              })()
                            ? (function () {
                                  var e = "setImmediate$" + Math.random() + "$",
                                      i = function (i) {
                                          i.source === t && "string" == typeof i.data && 0 === i.data.indexOf(e) && n(+i.data.slice(e.length));
                                      };
                                  t.addEventListener ? t.addEventListener("message", i, !1) : t.attachEvent("onmessage", i),
                                      (s = function (i) {
                                          t.postMessage(e + i, "*");
                                      });
                              })()
                            : t.MessageChannel
                            ? (function () {
                                  var t = new MessageChannel();
                                  (t.port1.onmessage = function (t) {
                                      n(t.data);
                                  }),
                                      (s = function (e) {
                                          t.port2.postMessage(e);
                                      });
                              })()
                            : u && "onreadystatechange" in u.createElement("script")
                            ? (function () {
                                  var t = u.documentElement;
                                  s = function (e) {
                                      var i = u.createElement("script");
                                      (i.onreadystatechange = function () {
                                          n(e), (i.onreadystatechange = null), t.removeChild(i), (i = null);
                                      }),
                                          t.appendChild(i);
                                  };
                              })()
                            : (s = function (t) {
                                  setTimeout(n, 0, t);
                              }),
                        (c.setImmediate = function (t) {
                            "function" != typeof t && (t = new Function("" + t));
                            for (var e = new Array(arguments.length - 1), i = 0; i < e.length; i++) e[i] = arguments[i + 1];
                            var r = { callback: t, args: e };
                            return (o[a] = r), s(a), a++;
                        }),
                        (c.clearImmediate = r);
                }
            })("undefined" == typeof self ? (void 0 === t ? this : t) : self);
        }.call(
            e,
            (function () {
                return this;
            })(),
            i(10)
        ));
    },
    function (t, e) {
        function i() {
            throw new Error("setTimeout has not been defined");
        }
        function r() {
            throw new Error("clearTimeout has not been defined");
        }
        function n(t) {
            if (u === setTimeout) return setTimeout(t, 0);
            if ((u === i || !u) && setTimeout) return (u = setTimeout), setTimeout(t, 0);
            try {
                return u(t, 0);
            } catch (e) {
                try {
                    return u.call(null, t, 0);
                } catch (e) {
                    return u.call(this, t, 0);
                }
            }
        }
        function s() {
            f && d && ((f = !1), d.length ? (p = d.concat(p)) : (m = -1), p.length && a());
        }
        function a() {
            if (!f) {
                var t = n(s);
                f = !0;
                for (var e = p.length; e; ) {
                    for (d = p, p = []; ++m < e; ) d && d[m].run();
                    (m = -1), (e = p.length);
                }
                (d = null),
                    (f = !1),
                    (function (t) {
                        if (c === clearTimeout) return clearTimeout(t);
                        if ((c === r || !c) && clearTimeout) return (c = clearTimeout), clearTimeout(t);
                        try {
                            c(t);
                        } catch (e) {
                            try {
                                return c.call(null, t);
                            } catch (e) {
                                return c.call(this, t);
                            }
                        }
                    })(t);
            }
        }
        function o(t, e) {
            (this.fun = t), (this.array = e);
        }
        function l() {}
        var u,
            c,
            h = (t.exports = {});
        !(function () {
            try {
                u = "function" == typeof setTimeout ? setTimeout : i;
            } catch (t) {
                u = i;
            }
            try {
                c = "function" == typeof clearTimeout ? clearTimeout : r;
            } catch (t) {
                c = r;
            }
        })();
        var d,
            p = [],
            f = !1,
            m = -1;
        (h.nextTick = function (t) {
            var e = new Array(arguments.length - 1);
            if (arguments.length > 1) for (var i = 1; i < arguments.length; i++) e[i - 1] = arguments[i];
            p.push(new o(t, e)), 1 !== p.length || f || n(a);
        }),
            (o.prototype.run = function () {
                this.fun.apply(null, this.array);
            }),
            (h.title = "browser"),
            (h.browser = !0),
            (h.env = {}),
            (h.argv = []),
            (h.version = ""),
            (h.versions = {}),
            (h.on = l),
            (h.addListener = l),
            (h.once = l),
            (h.off = l),
            (h.removeListener = l),
            (h.removeAllListeners = l),
            (h.emit = l),
            (h.prependListener = l),
            (h.prependOnceListener = l),
            (h.listeners = function (t) {
                return [];
            }),
            (h.binding = function (t) {
                throw new Error("process.binding is not supported");
            }),
            (h.cwd = function () {
                return "/";
            }),
            (h.chdir = function (t) {
                throw new Error("process.chdir is not supported");
            }),
            (h.umask = function () {
                return 0;
            });
    },
    function (t, e, i) {
        !(function (e, i) {
            t.exports = i();
        })(0, function () {
            "use strict";
            function t(e) {
                "@babel/helpers - typeof";
                return (t =
                    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                        ? function (t) {
                              return typeof t;
                          }
                        : function (t) {
                              return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                          })(e);
            }
            function e() {
                for (var t = 0, e = ["parseProvider", "parse", "bind", "create"]; t < e.length; t++) {
                    var i = e[t];
                    this[i] = this[i].bind(this);
                }
                this.plugins = {};
            }
            function i() {
                (this.provider = "allocine"), (this.alternatives = []), (this.defaultFormat = "embed"), (this.formats = { embed: this.createEmbedUrl }), (this.mediaTypes = { VIDEO: "video" });
            }
            function r() {
                (this.provider = "canalplus"), (this.defaultFormat = "embed"), (this.formats = { embed: this.createEmbedUrl }), (this.mediaTypes = { VIDEO: "video" });
            }
            function n() {
                (this.provider = "coub"), (this.defaultFormat = "long"), (this.formats = { long: this.createLongUrl, embed: this.createEmbedUrl }), (this.mediaTypes = { VIDEO: "video" });
            }
            function s() {
                (this.provider = "dailymotion"),
                    (this.alternatives = ["dai"]),
                    (this.defaultFormat = "long"),
                    (this.formats = { short: this.createShortUrl, long: this.createLongUrl, embed: this.createEmbedUrl, image: this.createImageUrl }),
                    (this.mediaTypes = { VIDEO: "video" });
            }
            function a() {
                (this.provider = "loom"), (this.defaultFormat = "long"), (this.formats = { long: this.createLongUrl, embed: this.createEmbedUrl }), (this.mediaTypes = { VIDEO: "video" });
            }
            function o() {
                (this.provider = "twitch"), (this.defaultFormat = "long"), (this.formats = { long: this.createLongUrl, embed: this.createEmbedUrl }), (this.mediaTypes = { VIDEO: "video", STREAM: "stream", CLIP: "clip" });
            }
            function l() {
                (this.provider = "vimeo"), (this.alternatives = ["vimeopro"]), (this.defaultFormat = "long"), (this.formats = { long: this.createLongUrl, embed: this.createEmbedUrl }), (this.mediaTypes = { VIDEO: "video" });
            }
            function u() {
                (this.provider = "wistia"),
                    (this.alternatives = []),
                    (this.defaultFormat = "long"),
                    (this.formats = { long: this.createLongUrl, embed: this.createEmbedUrl, embedjsonp: this.createEmbedJsonpUrl }),
                    (this.mediaTypes = { VIDEO: "video", EMBEDVIDEO: "embedvideo" });
            }
            function c() {
                (this.provider = "youku"),
                    (this.defaultFormat = "long"),
                    (this.formats = { embed: this.createEmbedUrl, long: this.createLongUrl, flash: this.createFlashUrl, static: this.createStaticUrl }),
                    (this.mediaTypes = { VIDEO: "video" });
            }
            function h() {
                (this.provider = "youtube"),
                    (this.alternatives = ["youtu", "ytimg"]),
                    (this.defaultFormat = "long"),
                    (this.formats = { short: this.createShortUrl, long: this.createLongUrl, embed: this.createEmbedUrl, shortImage: this.createShortImageUrl, longImage: this.createLongImageUrl }),
                    (this.imageQualities = { 0: "0", 1: "1", 2: "2", 3: "3", DEFAULT: "default", HQDEFAULT: "hqdefault", SDDEFAULT: "sddefault", MQDEFAULT: "mqdefault", MAXRESDEFAULT: "maxresdefault" }),
                    (this.defaultImageQuality = this.imageQualities.HQDEFAULT),
                    (this.mediaTypes = { VIDEO: "video", PLAYLIST: "playlist", SHARE: "share", CHANNEL: "channel" });
            }
            function d() {
                (this.provider = "soundcloud"),
                    (this.defaultFormat = "long"),
                    (this.formats = { long: this.createLongUrl, embed: this.createEmbedUrl }),
                    (this.mediaTypes = { TRACK: "track", PLAYLIST: "playlist", APITRACK: "apitrack", APIPLAYLIST: "apiplaylist" });
            }
            function p() {
                (this.provider = "teachertube"),
                    (this.alternatives = []),
                    (this.defaultFormat = "long"),
                    (this.formats = { long: this.createLongUrl, embed: this.createEmbedUrl }),
                    (this.mediaTypes = { VIDEO: "video", AUDIO: "audio", DOCUMENT: "document", CHANNEL: "channel", COLLECTION: "collection", GROUP: "group" });
            }
            function f() {
                (this.provider = "tiktok"), (this.defaultFormat = "long"), (this.formats = { long: this.createLongUrl }), (this.mediaTypes = { VIDEO: "video" });
            }
            function m() {
                (this.provider = "ted"), (this.formats = { long: this.createLongUrl, embed: this.createEmbedUrl }), (this.mediaTypes = { VIDEO: "video", PLAYLIST: "playlist" });
            }
            function g() {
                (this.provider = "facebook"), (this.alternatives = []), (this.defaultFormat = "long"), (this.formats = { long: this.createLongUrl, watch: this.createWatchUrl }), (this.mediaTypes = { VIDEO: "video" });
            }
            var v = function (e, i) {
                    if ("object" !== t(e)) return "";
                    var r = "",
                        n = 0,
                        s = Object.keys(e);
                    if (0 === s.length) return "";
                    for (s.sort(), i || ((r += "?" + s[0] + "=" + e[s[0]]), (n += 1)); n < s.length; n += 1) r += "&" + s[n] + "=" + e[s[n]];
                    return r;
                },
                y = function (t) {
                    return void 0 === t
                        ? 0
                        : t.match(/^(\d+[smhdw]?)+$/)
                        ? (function (t) {
                              var e,
                                  i = 0,
                                  r = { s: 1, m: 60, h: 3600, d: 86400, w: 604800 };
                              e = (t = t.replace(/([smhdw])/g, " $1 ").trim()).split(" ");
                              for (var n = 0; n < e.length; n += 2) i += parseInt(e[n], 10) * r[e[n + 1] || "s"];
                              return i;
                          })(t)
                        : t.match(/^(\d+:?)+$/)
                        ? (function (t) {
                              for (var e = 0, i = [1, 60, 3600, 86400, 604800], r = t.split(":"), n = 0; n < r.length; n++) e += parseInt(r[n], 10) * i[r.length - n - 1];
                              return e;
                          })(t)
                        : 0;
                },
                _ = function (t) {
                    if ("string" != typeof t) return {};
                    var e,
                        i = {},
                        r = (t = t.split("+").join(" ")).match(/(?:[?](?:[^=]+)=(?:[^&#]*)(?:[&](?:[^=]+)=(?:[^&#]*))*(?:[#].*)?)|(?:[#].*)/);
                    if (null === r) return {};
                    e = r[0].substr(1).split(/[&#=]/);
                    for (var n = 0; n < e.length; n += 2) i[decodeURIComponent(e[n])] = decodeURIComponent(e[n + 1] || "");
                    return i;
                },
                w = e;
            (e.prototype.parseProvider = function (t) {
                var e = t.match(/(?:(?:https?:)?\/\/)?(?:[^.]+\.)?(\w+)\./i);
                return e ? e[1] : void 0;
            }),
                (e.prototype.parse = function (t) {
                    if (void 0 !== t) {
                        var e,
                            i = this.parseProvider(t),
                            r = this.plugins[i];
                        if (i && r && r.parse)
                            return (
                                (e = r.parse.call(r, t, _(t))) &&
                                    ((e = (function (t) {
                                        return t.params && 0 === Object.keys(t.params).length && delete t.params, t;
                                    })(e)).provider = r.provider),
                                e
                            );
                    }
                }),
                (e.prototype.bind = function (t) {
                    if (((this.plugins[t.provider] = t), t.alternatives)) for (var e = 0; e < t.alternatives.length; e += 1) this.plugins[t.alternatives[e]] = t;
                }),
                (e.prototype.create = function (e) {
                    if ("object" === t(e) && "object" === t(e.videoInfo)) {
                        var i = e.videoInfo,
                            r = e.params,
                            n = this.plugins[i.provider];
                        return (r = "internal" === r ? i.params : r || {}), n && ((e.format = e.format || n.defaultFormat), n.formats.hasOwnProperty(e.format)) ? n.formats[e.format].apply(n, [i, Object.assign({}, r)]) : void 0;
                    }
                });
            var T = new w();
            (i.prototype.parseUrl = function (t) {
                var e = t.match(/(?:\/video\/player_gen_cmedia=)([A-Za-z0-9]+)/i);
                return e ? e[1] : void 0;
            }),
                (i.prototype.parse = function (t) {
                    var e = { mediaType: this.mediaTypes.VIDEO, id: this.parseUrl(t) };
                    return e.id ? e : void 0;
                }),
                (i.prototype.createEmbedUrl = function (t) {
                    if (t.id && t.mediaType === this.mediaTypes.VIDEO) return "https://player.allocine.fr/" + t.id + ".html";
                }),
                T.bind(new i());
            var b = v;
            (r.prototype.parseParameters = function (t) {
                return delete t.vid, t;
            }),
                (r.prototype.parse = function (t, e) {
                    var i = { mediaType: this.mediaTypes.VIDEO, id: e.vid };
                    if (((i.params = this.parseParameters(e)), i.id)) return i;
                }),
                (r.prototype.createEmbedUrl = function (t, e) {
                    if (t.id && t.mediaType === this.mediaTypes.VIDEO) {
                        var i = "http://player.canalplus.fr/embed/";
                        return (e.vid = t.id), (i += b(e));
                    }
                }),
                T.bind(new r());
            var x = v;
            (n.prototype.parseUrl = function (t) {
                var e = t.match(/(?:embed|view)\/([a-zA-Z\d]+)/i);
                return e ? e[1] : void 0;
            }),
                (n.prototype.parse = function (t, e) {
                    var i = { mediaType: this.mediaTypes.VIDEO, params: e, id: this.parseUrl(t) };
                    if (i.id) return i;
                }),
                (n.prototype.createUrl = function (t, e, i) {
                    if (e.id && e.mediaType === this.mediaTypes.VIDEO) {
                        var r = t + e.id;
                        return (r += x(i));
                    }
                }),
                (n.prototype.createLongUrl = function (t, e) {
                    return this.createUrl("https://coub.com/view/", t, e);
                }),
                (n.prototype.createEmbedUrl = function (t, e) {
                    return this.createUrl("//coub.com/embed/", t, e);
                }),
                T.bind(new n());
            var S = v,
                C = y;
            (s.prototype.parseParameters = function (t) {
                return this.parseTime(t);
            }),
                (s.prototype.parseTime = function (t) {
                    return t.start && (t.start = C(t.start)), t;
                }),
                (s.prototype.parseUrl = function (t) {
                    var e = t.match(/(?:\/video|ly)\/([A-Za-z0-9]+)/i);
                    return e ? e[1] : void 0;
                }),
                (s.prototype.parse = function (t, e) {
                    var i = { mediaType: this.mediaTypes.VIDEO, params: this.parseParameters(e), id: this.parseUrl(t) };
                    return i.id ? i : void 0;
                }),
                (s.prototype.createUrl = function (t, e, i) {
                    if (e.id && e.mediaType === this.mediaTypes.VIDEO) return t + e.id + S(i);
                }),
                (s.prototype.createShortUrl = function (t, e) {
                    return this.createUrl("https://dai.ly/", t, e);
                }),
                (s.prototype.createLongUrl = function (t, e) {
                    return this.createUrl("https://dailymotion.com/video/", t, e);
                }),
                (s.prototype.createEmbedUrl = function (t, e) {
                    return this.createUrl("https://www.dailymotion.com/embed/video/", t, e);
                }),
                (s.prototype.createImageUrl = function (t, e) {
                    return delete e.start, this.createUrl("https://www.dailymotion.com/thumbnail/video/", t, e);
                }),
                T.bind(new s());
            var P = v;
            (a.prototype.parseUrl = function (t) {
                var e = t.match(/(?:share|embed)\/([a-zA-Z\d]+)/i);
                return e ? e[1] : void 0;
            }),
                (a.prototype.parse = function (t, e) {
                    var i = { mediaType: this.mediaTypes.VIDEO, params: e, id: this.parseUrl(t) };
                    return i.id ? i : void 0;
                }),
                (a.prototype.createUrl = function (t, e, i) {
                    if (e.id && e.mediaType === this.mediaTypes.VIDEO) {
                        var r = t + e.id;
                        return (r += P(i));
                    }
                }),
                (a.prototype.createLongUrl = function (t, e) {
                    return this.createUrl("https://loom.com/share/", t, e);
                }),
                (a.prototype.createEmbedUrl = function (t, e) {
                    return this.createUrl("//loom.com/embed/", t, e);
                }),
                T.bind(new a());
            var E = v,
                k = y;
            (o.prototype.seperateId = function (t) {
                return { pre: t[0], id: t.substr(1) };
            }),
                (o.prototype.parseChannel = function (t, e) {
                    var i = e.channel || e.utm_content || t.channel;
                    return delete e.utm_content, delete e.channel, i;
                }),
                (o.prototype.parseUrl = function (t, e, i) {
                    var r;
                    return (
                        (r = t.match(/(clips\.)?twitch\.tv\/(?:(?:videos\/(\d+))|(\w+(?:-[\w\d-]+)?)(?:\/clip\/(\w+))?)/i)) && r[2]
                            ? (e.id = "v" + r[2])
                            : i.video
                            ? ((e.id = i.video), delete i.video)
                            : i.clip
                            ? ((e.id = i.clip), (e.isClip = !0), delete i.clip)
                            : r && r[1] && r[3]
                            ? ((e.id = r[3]), (e.isClip = !0))
                            : r && r[3] && r[4]
                            ? ((e.channel = r[3]), (e.id = r[4]), (e.isClip = !0))
                            : r && r[3] && (e.channel = r[3]),
                        e
                    );
                }),
                (o.prototype.parseMediaType = function (t) {
                    var e;
                    return t.id ? (t.isClip ? ((e = this.mediaTypes.CLIP), delete t.isClip) : (e = this.mediaTypes.VIDEO)) : t.channel && (e = this.mediaTypes.STREAM), e;
                }),
                (o.prototype.parseParameters = function (t) {
                    return t.t && ((t.start = k(t.t)), delete t.t), t;
                }),
                (o.prototype.parse = function (t, e) {
                    var i = {};
                    return (i = this.parseUrl(t, i, e)), (i.channel = this.parseChannel(i, e)), (i.mediaType = this.parseMediaType(i)), (i.params = this.parseParameters(e)), i.channel || i.id ? i : void 0;
                }),
                (o.prototype.createLongUrl = function (t, e) {
                    var i = "";
                    if (t.mediaType === this.mediaTypes.STREAM && t.channel) i = "https://twitch.tv/" + t.channel;
                    else if (t.mediaType === this.mediaTypes.VIDEO && t.id) {
                        (i = "https://twitch.tv/videos/" + this.seperateId(t.id).id), e.start && ((e.t = e.start + "s"), delete e.start);
                    } else {
                        if (t.mediaType !== this.mediaTypes.CLIP || !t.id) return;
                        i = t.channel ? "https://www.twitch.tv/" + t.channel + "/clip/" + t.id : "https://clips.twitch.tv/" + t.id;
                    }
                    return (i += E(e));
                }),
                (o.prototype.createEmbedUrl = function (t, e) {
                    var i = "https://player.twitch.tv/";
                    if (t.mediaType === this.mediaTypes.STREAM && t.channel) e.channel = t.channel;
                    else if (t.mediaType === this.mediaTypes.VIDEO && t.id) (e.video = t.id), e.start && ((e.t = e.start + "s"), delete e.start);
                    else {
                        if (t.mediaType !== this.mediaTypes.CLIP || !t.id) return;
                        (i = "https://clips.twitch.tv/embed"), (e.clip = t.id);
                    }
                    return (i += E(e));
                }),
                T.bind(new o());
            var A = v,
                M = y;
            (l.prototype.parseUrl = function (t) {
                var e = t.match(/(?:\/showcase\/\d+)?(?:\/(?:channels\/[\w]+|(?:(?:album\/\d+|groups\/[\w]+)\/)?videos?))?\/(\d+)/i);
                return e ? e[1] : void 0;
            }),
                (l.prototype.parseHash = function (t) {
                    var e = t.match(/\/\d+\/(\w+)$/i);
                    return e ? e[1] : void 0;
                }),
                (l.prototype.parseParameters = function (t) {
                    return t.t && ((t.start = M(t.t)), delete t.t), t.h && ((t.hash = t.h), delete t.h), t;
                }),
                (l.prototype.parse = function (t, e) {
                    var i = { mediaType: this.mediaTypes.VIDEO, params: this.parseParameters(e), id: this.parseUrl(t) },
                        r = this.parseHash(t, e);
                    return r && (i.params.hash = r), i.id ? i : void 0;
                }),
                (l.prototype.createUrl = function (t, e, i, r) {
                    if (e.id && e.mediaType === this.mediaTypes.VIDEO) {
                        var n = t + e.id,
                            s = i.start;
                        return delete i.start, i.hash && ("embed" === r ? (i.h = i.hash) : "long" === r && (n += "/" + i.hash), delete i.hash), (n += A(i)), s && (n += "#t=" + s), n;
                    }
                }),
                (l.prototype.createLongUrl = function (t, e) {
                    return this.createUrl("https://vimeo.com/", t, e, "long");
                }),
                (l.prototype.createEmbedUrl = function (t, e) {
                    return this.createUrl("//player.vimeo.com/video/", t, e, "embed");
                }),
                T.bind(new l());
            var L = v,
                I = y;
            (u.prototype.parseUrl = function (t) {
                var e = t.match(/(?:(?:medias|iframe)\/|wvideo=)([\w-]+)/);
                return e ? e[1] : void 0;
            }),
                (u.prototype.parseChannel = function (t) {
                    var e = t.match(/(?:(?:https?:)?\/\/)?([^.]*)\.wistia\./),
                        i = e ? e[1] : void 0;
                    if ("fast" !== i && "content" !== i) return i;
                }),
                (u.prototype.parseParameters = function (t, e) {
                    return t.wtime && ((t.start = I(t.wtime)), delete t.wtime), t.wvideo === e.id && delete t.wvideo, t;
                }),
                (u.prototype.parseMediaType = function (t) {
                    return t.id && t.channel ? this.mediaTypes.VIDEO : t.id ? (delete t.channel, this.mediaTypes.EMBEDVIDEO) : void 0;
                }),
                (u.prototype.parse = function (t, e) {
                    var i = { id: this.parseUrl(t), channel: this.parseChannel(t) };
                    if (((i.params = this.parseParameters(e, i)), (i.mediaType = this.parseMediaType(i)), i.id)) return i;
                }),
                (u.prototype.createUrl = function (t, e, i) {
                    return e.start && ((e.wtime = e.start), delete e.start), (i += L(e));
                }),
                (u.prototype.createLongUrl = function (t, e) {
                    if (t.id && t.mediaType === this.mediaTypes.VIDEO) {
                        var i = "https://" + t.channel + ".wistia.com/medias/" + t.id;
                        return this.createUrl(t, e, i);
                    }
                }),
                (u.prototype.createEmbedUrl = function (t, e) {
                    if (t.id && (t.mediaType === this.mediaTypes.VIDEO || t.mediaType === this.mediaTypes.EMBEDVIDEO)) {
                        var i = "https://fast.wistia.com/embed/iframe/" + t.id;
                        return this.createUrl(t, e, i);
                    }
                }),
                (u.prototype.createEmbedJsonpUrl = function (t) {
                    if (t.id && (t.mediaType === this.mediaTypes.VIDEO || t.mediaType === this.mediaTypes.EMBEDVIDEO)) return "https://fast.wistia.com/embed/medias/" + t.id + ".jsonp";
                }),
                T.bind(new u());
            var O = v;
            (c.prototype.parseUrl = function (t) {
                var e = t.match(/(?:(?:embed|sid)\/|v_show\/id_|VideoIDS=)([a-zA-Z0-9]+)/);
                return e ? e[1] : void 0;
            }),
                (c.prototype.parseParameters = function (t) {
                    return t.VideoIDS && delete t.VideoIDS, t;
                }),
                (c.prototype.parse = function (t, e) {
                    var i = { mediaType: this.mediaTypes.VIDEO, id: this.parseUrl(t), params: this.parseParameters(e) };
                    if (i.id) return i;
                }),
                (c.prototype.createUrl = function (t, e, i) {
                    if (e.id && e.mediaType === this.mediaTypes.VIDEO) {
                        var r = t + e.id;
                        return (r += O(i));
                    }
                }),
                (c.prototype.createEmbedUrl = function (t, e) {
                    return this.createUrl("http://player.youku.com/embed/", t, e);
                }),
                (c.prototype.createLongUrl = function (t, e) {
                    return this.createUrl("http://v.youku.com/v_show/id_", t, e);
                }),
                (c.prototype.createStaticUrl = function (t, e) {
                    return this.createUrl("http://static.youku.com/v1.0.0638/v/swf/loader.swf?VideoIDS=", t, e);
                }),
                (c.prototype.createFlashUrl = function (t, e) {
                    if (t.id && t.mediaType === this.mediaTypes.VIDEO) {
                        var i = "http://player.youku.com/player.php/sid/" + t.id + "/v.swf";
                        return (i += O(e));
                    }
                }),
                T.bind(new c());
            var z = v,
                R = y;
            (h.prototype.parseVideoUrl = function (t) {
                var e = t.match(/(?:(?:v|vi|be|videos|embed)\/(?!videoseries)|(?:v|ci)=)([\w-]{11})/i);
                return e ? e[1] : void 0;
            }),
                (h.prototype.parseChannelUrl = function (t) {
                    var e = t.match(/\/channel\/([\w-]+)/);
                    return e ? { id: e[1], mediaType: this.mediaTypes.CHANNEL } : (e = t.match(/\/(?:c|user)\/([\w-]+)/)) ? { name: e[1], mediaType: this.mediaTypes.CHANNEL } : void 0;
                }),
                (h.prototype.parseParameters = function (t, e) {
                    return (t.start || t.t) && ((t.start = R(t.start || t.t)), delete t.t), t.v === e.id && delete t.v, t.list === e.id && delete t.list, t;
                }),
                (h.prototype.parseMediaType = function (t) {
                    if ((t.params.list && ((t.list = t.params.list), delete t.params.list), t.id && !t.params.ci)) t.mediaType = this.mediaTypes.VIDEO;
                    else if (t.list) delete t.id, (t.mediaType = this.mediaTypes.PLAYLIST);
                    else {
                        if (!t.params.ci) return;
                        delete t.params.ci, (t.mediaType = this.mediaTypes.SHARE);
                    }
                    return t;
                }),
                (h.prototype.parse = function (t, e) {
                    var i = this.parseChannelUrl(t);
                    if (i) return i;
                    var r = { params: e, id: this.parseVideoUrl(t) };
                    return (r.params = this.parseParameters(e, r)), (r = this.parseMediaType(r));
                }),
                (h.prototype.createShortUrl = function (t, e) {
                    if (t.id && t.mediaType === this.mediaTypes.VIDEO) {
                        var i = "https://youtu.be/" + t.id;
                        return e.start && (i += "#t=" + e.start), i;
                    }
                }),
                (h.prototype.createLongUrl = function (t, e) {
                    var i = "",
                        r = e.start;
                    if ((delete e.start, t.mediaType === this.mediaTypes.CHANNEL))
                        if (t.id) i += "https://www.youtube.com/channel/" + t.id;
                        else {
                            if (!t.name) return;
                            i += "https://www.youtube.com/c/" + t.name;
                        }
                    else if (t.mediaType === this.mediaTypes.PLAYLIST && t.list) (e.feature = "share"), (i += "https://www.youtube.com/playlist");
                    else if (t.mediaType === this.mediaTypes.VIDEO && t.id) (e.v = t.id), (i += "https://www.youtube.com/watch");
                    else {
                        if (t.mediaType !== this.mediaTypes.SHARE || !t.id) return;
                        (e.ci = t.id), (i += "https://www.youtube.com/shared");
                    }
                    return t.list && (e.list = t.list), (i += z(e)), t.mediaType !== this.mediaTypes.PLAYLIST && r && (i += "#t=" + r), i;
                }),
                (h.prototype.createEmbedUrl = function (t, e) {
                    var i = "https://www.youtube.com/embed";
                    if (t.mediaType === this.mediaTypes.PLAYLIST && t.list) e.listType = "playlist";
                    else {
                        if (t.mediaType !== this.mediaTypes.VIDEO || !t.id) return;
                        (i += "/" + t.id), "1" === e.loop && (e.playlist = t.id);
                    }
                    return t.list && (e.list = t.list), (i += z(e));
                }),
                (h.prototype.createImageUrl = function (t, e, i) {
                    if (e.id && e.mediaType === this.mediaTypes.VIDEO) {
                        return t + e.id + "/" + (i.imageQuality || this.defaultImageQuality) + ".jpg";
                    }
                }),
                (h.prototype.createShortImageUrl = function (t, e) {
                    return this.createImageUrl("https://i.ytimg.com/vi/", t, e);
                }),
                (h.prototype.createLongImageUrl = function (t, e) {
                    return this.createImageUrl("https://img.youtube.com/vi/", t, e);
                }),
                T.bind(new h());
            var D = v,
                N = y;
            (d.prototype.parseUrl = function (t, e) {
                var i = t.match(/(?:m\.)?soundcloud\.com\/(?:([\w-]+)\/(sets\/)?)([\w-]+)/i);
                return i ? ((e.channel = i[1]), "playlists" === i[1] || i[2] ? (e.list = i[3]) : (e.id = i[3]), e) : e;
            }),
                (d.prototype.parseParameters = function (t) {
                    return t.t && ((t.start = N(t.t)), delete t.t), t;
                }),
                (d.prototype.parseMediaType = function (t) {
                    return (
                        t.id && ("tracks" === t.channel ? (delete t.channel, delete t.params.url, (t.mediaType = this.mediaTypes.APITRACK)) : (t.mediaType = this.mediaTypes.TRACK)),
                        t.list && ("playlists" === t.channel ? (delete t.channel, delete t.params.url, (t.mediaType = this.mediaTypes.APIPLAYLIST)) : (t.mediaType = this.mediaTypes.PLAYLIST)),
                        t
                    );
                }),
                (d.prototype.parse = function (t, e) {
                    var i = {};
                    if (((i = this.parseUrl(t, i)), (i.params = this.parseParameters(e)), (i = this.parseMediaType(i)).id || i.list)) return i;
                }),
                (d.prototype.createLongUrl = function (t, e) {
                    var i = "",
                        r = e.start;
                    if ((delete e.start, t.mediaType === this.mediaTypes.TRACK && t.id && t.channel)) i = "https://soundcloud.com/" + t.channel + "/" + t.id;
                    else if (t.mediaType === this.mediaTypes.PLAYLIST && t.list && t.channel) i = "https://soundcloud.com/" + t.channel + "/sets/" + t.list;
                    else if (t.mediaType === this.mediaTypes.APITRACK && t.id) i = "https://api.soundcloud.com/tracks/" + t.id;
                    else {
                        if (t.mediaType !== this.mediaTypes.APIPLAYLIST || !t.list) return;
                        i = "https://api.soundcloud.com/playlists/" + t.list;
                    }
                    return (i += D(e)), r && (i += "#t=" + r), i;
                }),
                (d.prototype.createEmbedUrl = function (t, e) {
                    var i = "https://w.soundcloud.com/player/";
                    if ((delete e.start, t.mediaType === this.mediaTypes.APITRACK && t.id)) e.url = "https%3A//api.soundcloud.com/tracks/" + t.id;
                    else {
                        if (t.mediaType !== this.mediaTypes.APIPLAYLIST || !t.list) return;
                        e.url = "https%3A//api.soundcloud.com/playlists/" + t.list;
                    }
                    return (i += D(e));
                }),
                T.bind(new d());
            var B = v;
            (p.prototype.parse = function (t, e) {
                var i = {};
                (i.list = this.parsePlaylist(e)), (i.params = e);
                var r = t.match(/\/(audio|video|document|user\/channel|collection|group)\/(?:[\w-]+-)?(\w+)/);
                if (r) return (i.mediaType = this.parseMediaType(r[1])), (i.id = r[2]), i;
            }),
                (p.prototype.parsePlaylist = function (t) {
                    if (t["playlist-id"]) {
                        var e = t["playlist-id"];
                        return delete t["playlist-id"], e;
                    }
                }),
                (p.prototype.parseMediaType = function (t) {
                    switch (t) {
                        case "audio":
                            return this.mediaTypes.AUDIO;
                        case "video":
                            return this.mediaTypes.VIDEO;
                        case "document":
                            return this.mediaTypes.DOCUMENT;
                        case "user/channel":
                            return this.mediaTypes.CHANNEL;
                        case "collection":
                            return this.mediaTypes.COLLECTION;
                        case "group":
                            return this.mediaTypes.GROUP;
                    }
                }),
                (p.prototype.createLongUrl = function (t, e) {
                    if (t.id) {
                        var i = "https://www.teachertube.com/";
                        return t.list && (e["playlist-id"] = t.list), t.mediaType === this.mediaTypes.CHANNEL ? (i += "user/channel/") : (i += t.mediaType + "/"), (i += t.id), (i += B(e));
                    }
                }),
                (p.prototype.createEmbedUrl = function (t, e) {
                    if (t.id) {
                        var i = "https://www.teachertube.com/embed/";
                        if (t.mediaType === this.mediaTypes.VIDEO || t.mediaType === this.mediaTypes.AUDIO) return (i += t.mediaType + "/" + t.id), (i += B(e));
                    }
                }),
                T.bind(new p());
            var F = v;
            (f.prototype.parse = function (t, e) {
                var i = { params: e, mediaType: this.mediaTypes.VIDEO },
                    r = t.match(/@([^/]+)\/video\/(\d{19})/);
                if (r) return (i.channel = r[1]), (i.id = r[2]), i;
            }),
                (f.prototype.createLongUrl = function (t, e) {
                    var i = "";
                    if (t.mediaType === this.mediaTypes.VIDEO && t.id && t.channel) return (i += "https://www.tiktok.com/@".concat(t.channel, "/video/").concat(t.id)), (i += F(e));
                }),
                T.bind(new f());
            var H = v;
            (m.prototype.parseUrl = function (t, e) {
                var i = t.match(/\/(talks|playlists\/(\d+))\/([\w-]+)/i),
                    r = i ? i[1] : void 0;
                return r ? ((e.channel = r.split("/")[0]), (e.id = i[3]), "playlists" === e.channel && (e.list = i[2]), e) : e;
            }),
                (m.prototype.parseMediaType = function (t) {
                    return t.id && "playlists" === t.channel && (delete t.channel, (t.mediaType = this.mediaTypes.PLAYLIST)), t.id && "talks" === t.channel && (delete t.channel, (t.mediaType = this.mediaTypes.VIDEO)), t;
                }),
                (m.prototype.parse = function (t, e) {
                    var i = { params: e };
                    if (((i = this.parseUrl(t, i)), (i = this.parseMediaType(i)).id)) return i;
                }),
                (m.prototype.createLongUrl = function (t, e) {
                    var i = "";
                    if (t.mediaType === this.mediaTypes.VIDEO && t.id) i += "https://ted.com/talks/" + t.id;
                    else {
                        if (t.mediaType !== this.mediaTypes.PLAYLIST || !t.id) return;
                        i += "https://ted.com/playlists/" + t.list + "/" + t.id;
                    }
                    return (i += H(e));
                }),
                (m.prototype.createEmbedUrl = function (t, e) {
                    var i = "https://embed.ted.com/";
                    if (t.mediaType === this.mediaTypes.PLAYLIST && t.id) i += "playlists/" + t.list + "/" + t.id;
                    else {
                        if (t.mediaType !== this.mediaTypes.VIDEO || !t.id) return;
                        i += "talks/" + t.id;
                    }
                    return (i += H(e));
                }),
                T.bind(new m());
            var j = v;
            (g.prototype.parse = function (t, e) {
                var i = { params: e, mediaType: this.mediaTypes.VIDEO },
                    r = t.match(/(?:\/(\d+))?\/videos(?:\/.*?)?\/(\d+)/i);
                if ((r && (r[1] && (i.pageId = r[1]), (i.id = r[2])), e.v && !i.id && ((i.id = e.v), delete e.v, (i.params = e)), i.id)) return i;
            }),
                (g.prototype.createWatchUrl = function (t, e) {
                    var i = "https://facebook.com/watch/";
                    if (t.mediaType === this.mediaTypes.VIDEO && t.id) return (e = { v: t.id }), (i += j(e));
                }),
                (g.prototype.createLongUrl = function (t, e) {
                    var i = "https://facebook.com/";
                    if (t.pageId && ((i += t.pageId), t.mediaType === this.mediaTypes.VIDEO && t.id)) return (i += "/videos/" + t.id), (i += j(e));
                }),
                T.bind(new g());
            return T;
        });
    },
    function (t, e, i) {
        "use strict";
        function r(t) {
            return t && t.__esModule ? t : { default: t };
        }
        function n(t) {
            if (w && !0 !== T && !1 !== t[0].isIntersecting) {
                T = !0;
                !(function (t) {
                    var e = new XMLHttpRequest();
                    v.classList.add("is-lazyloading"),
                        loader.classList.add("is-loading"),
                        e.open("GET", t),
                        (e.responseType = "document"),
                        (e.onload = function () {
                            200 === e.status &&
                                (function (t) {
                                    for (var e = t.querySelector(".paginate-next"), i = (document.createElement("div"), t.querySelectorAll(".grid__item")), r = [], n = [], o = [], l = [], u = 0; u < i.length; u++) {
                                        var h = document.createElement("div");
                                        (h.className = i[u].className), (h.innerHTML = i[u].innerHTML), v.appendChild(h), l.push(h);
                                        var d = h.querySelector(".grid__caption, .chip-item__caption"),
                                            p = h.querySelector("video"),
                                            g = h.querySelector("a");
                                        d && o.push(d), p && n.push(p), g && r.push(g);
                                    }
                                    v.classList.remove("is-lazyloading"), loader.classList.remove("is-loading"), e && w ? w.setAttribute("href", e.getAttribute("href")) : w && (w.remove(), (w = null));
                                    (T = !1), void 0 !== i && (b.appended(l), c(l));
                                    s(o), a(n), (0, f.bindHistoryLinks)(r), (0, m.default)(t);
                                    for (var y = n.length - 1; y >= 0; y--)
                                        n[y].addEventListener("loadedmetadata", function () {
                                            b.layout();
                                        });
                                })(this.responseXML);
                        }),
                        e.send();
                })(w.getAttribute("href"));
            }
        }
        function s(t) {
            for (var e = t.length - 1; e >= 0; e--) y.observe(t[e]);
        }
        function a(t) {
            if ("undefined" != typeof videos && Modernizr.inpagevideo) for (var e = t.length - 1; e >= 0; e--) _.observe(t[e]);
        }
        function o(t, e) {
            t.forEach(function (t) {
                t.isIntersecting ? t.target.classList.add("is-in-view") : t.target.classList.remove("is-in-view");
            });
        }
        function l(t, e) {
            t.forEach(function (t) {
                t.isIntersecting
                    ? t.target.play().catch(function (t) {
                          console.log(t);
                      })
                    : t.target.pause().catch(function (t) {
                          console.log(t);
                      });
            });
        }
        function u(t, e) {
            t.addEventListener("mouseover", function () {
                t.classList.add("is-highlighted"), e.classList.add("is-filtered"), (x = t);
            }),
                t.addEventListener("mouseout", function () {
                    t.classList.remove("is-highlighted"), e.classList.remove("is-filtered"), (x = null);
                });
        }
        function c(t) {
            for (var e = t.length - 1; e >= 0; e--) {
                var i = t[e].firstElementChild;
                i && u(i, g);
            }
        }
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.default = function () {
                if (
                    ((g = document.querySelector(".grid")),
                    (v = document.querySelector(".lazyload-page")),
                    (w = document.querySelector(".paginate-next")),
                    (y = new IntersectionObserver(o, { threshold: [0, 1] })),
                    (_ = new IntersectionObserver(l, { threshold: [0, 0.5, 1] })),
                    g)
                ) {
                    v && w && new IntersectionObserver(n, { threshold: [1] }).observe(w);
                    var t = g.querySelectorAll("video"),
                        e = document.querySelectorAll(".grid__caption, .chip-item__caption"),
                        i = document.querySelectorAll(".grid__item");
                    s(e), a(t), c(i), (0, p.bindWindowListener)("scroll", S), (b = new h.default(g, { columnWidth: ".grid__sizer", itemSelector: ".grid__item", transitionDuration: 250, hiddenStyle: { opacity: 0 } }));
                    for (var r = t.length - 1; r >= 0; r--)
                        t[r].addEventListener("loadedmetadata", function () {
                            b.layout();
                        });
                }
            });
        var h = r(i(13)),
            d = (r(i(20)), i(6)),
            p = i(3),
            f = i(21);
        i(55);
        var m = r(i(51)),
            g = void 0,
            v = void 0,
            y = void 0,
            _ = void 0,
            w = void 0,
            T = void 0,
            b = void 0,
            x = void 0,
            S = (0, d.throttle)(function () {
                x && (x.classList.remove("is-highlighted"), g.classList.remove("is-filtered"));
            }, 100);
    },
    function (t, e, i) {
        var r, n, s;
        !(function (a, o) {
            (n = [i(14), i(16)]), void 0 === (s = "function" == typeof (r = o) ? r.apply(e, n) : r) || (t.exports = s);
        })(window, function (t, e) {
            "use strict";
            var i = t.create("masonry");
            i.compatOptions.fitWidth = "isFitWidth";
            var r = i.prototype;
            return (
                (r._resetLayout = function () {
                    this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), (this.colYs = []);
                    for (var t = 0; t < this.cols; t++) this.colYs.push(0);
                    (this.maxY = 0), (this.horizontalColIndex = 0);
                }),
                (r.measureColumns = function () {
                    if ((this.getContainerWidth(), !this.columnWidth)) {
                        var t = this.items[0],
                            i = t && t.element;
                        this.columnWidth = (i && e(i).outerWidth) || this.containerWidth;
                    }
                    var r = (this.columnWidth += this.gutter),
                        n = this.containerWidth + this.gutter,
                        s = n / r,
                        a = r - (n % r),
                        o = a && a < 1 ? "round" : "floor";
                    (s = Math[o](s)), (this.cols = Math.max(s, 1));
                }),
                (r.getContainerWidth = function () {
                    var t = this._getOption("fitWidth") ? this.element.parentNode : this.element,
                        i = e(t);
                    this.containerWidth = i && i.innerWidth;
                }),
                (r._getItemLayoutPosition = function (t) {
                    t.getSize();
                    var e = t.size.outerWidth % this.columnWidth,
                        i = e && e < 1 ? "round" : "ceil",
                        r = Math[i](t.size.outerWidth / this.columnWidth);
                    r = Math.min(r, this.cols);
                    for (var n = this[this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition"](r, t), s = { x: this.columnWidth * n.col, y: n.y }, a = n.y + t.size.outerHeight, o = r + n.col, l = n.col; l < o; l++)
                        this.colYs[l] = a;
                    return s;
                }),
                (r._getTopColPosition = function (t) {
                    var e = this._getTopColGroup(t),
                        i = Math.min.apply(Math, e);
                    return { col: e.indexOf(i), y: i };
                }),
                (r._getTopColGroup = function (t) {
                    if (t < 2) return this.colYs;
                    for (var e = [], i = this.cols + 1 - t, r = 0; r < i; r++) e[r] = this._getColGroupY(r, t);
                    return e;
                }),
                (r._getColGroupY = function (t, e) {
                    if (e < 2) return this.colYs[t];
                    var i = this.colYs.slice(t, t + e);
                    return Math.max.apply(Math, i);
                }),
                (r._getHorizontalColPosition = function (t, e) {
                    var i = this.horizontalColIndex % this.cols;
                    i = t > 1 && i + t > this.cols ? 0 : i;
                    var r = e.size.outerWidth && e.size.outerHeight;
                    return (this.horizontalColIndex = r ? i + t : this.horizontalColIndex), { col: i, y: this._getColGroupY(i, t) };
                }),
                (r._manageStamp = function (t) {
                    var i = e(t),
                        r = this._getElementOffset(t),
                        n = this._getOption("originLeft") ? r.left : r.right,
                        s = n + i.outerWidth,
                        a = Math.floor(n / this.columnWidth);
                    a = Math.max(0, a);
                    var o = Math.floor(s / this.columnWidth);
                    (o -= s % this.columnWidth ? 0 : 1), (o = Math.min(this.cols - 1, o));
                    for (var l = (this._getOption("originTop") ? r.top : r.bottom) + i.outerHeight, u = a; u <= o; u++) this.colYs[u] = Math.max(l, this.colYs[u]);
                }),
                (r._getContainerSize = function () {
                    this.maxY = Math.max.apply(Math, this.colYs);
                    var t = { height: this.maxY };
                    return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t;
                }),
                (r._getContainerFitWidth = function () {
                    for (var t = 0, e = this.cols; --e && 0 === this.colYs[e]; ) t++;
                    return (this.cols - t) * this.columnWidth - this.gutter;
                }),
                (r.needsResizeLayout = function () {
                    var t = this.containerWidth;
                    return this.getContainerWidth(), t != this.containerWidth;
                }),
                i
            );
        });
    },
    function (t, e, i) {
        var r, n;
        !(function (s, a) {
            "use strict";
            (r = [i(15), i(16), i(17), i(19)]),
                void 0 ===
                    (n = function (t, e, i, r) {
                        return a(s, t, e, i, r);
                    }.apply(e, r)) || (t.exports = n);
        })(window, function (t, e, i, r, n) {
            "use strict";
            function s(t, e) {
                var i = r.getQueryElement(t);
                if (i) {
                    (this.element = i), l && (this.$element = l(this.element)), (this.options = r.extend({}, this.constructor.defaults)), this.option(e);
                    var n = ++c;
                    (this.element.outlayerGUID = n), (h[n] = this), this._create();
                    this._getOption("initLayout") && this.layout();
                } else o && o.error("Bad element for " + this.constructor.namespace + ": " + (i || t));
            }
            function a(t) {
                function e() {
                    t.apply(this, arguments);
                }
                return (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), e;
            }
            var o = t.console,
                l = t.jQuery,
                u = function () {},
                c = 0,
                h = {};
            (s.namespace = "outlayer"),
                (s.Item = n),
                (s.defaults = {
                    containerStyle: { position: "relative" },
                    initLayout: !0,
                    originLeft: !0,
                    originTop: !0,
                    resize: !0,
                    resizeContainer: !0,
                    transitionDuration: "0.4s",
                    hiddenStyle: { opacity: 0, transform: "scale(0.001)" },
                    visibleStyle: { opacity: 1, transform: "scale(1)" },
                });
            var d = s.prototype;
            r.extend(d, e.prototype),
                (d.option = function (t) {
                    r.extend(this.options, t);
                }),
                (d._getOption = function (t) {
                    var e = this.constructor.compatOptions[t];
                    return e && void 0 !== this.options[e] ? this.options[e] : this.options[t];
                }),
                (s.compatOptions = {
                    initLayout: "isInitLayout",
                    horizontal: "isHorizontal",
                    layoutInstant: "isLayoutInstant",
                    originLeft: "isOriginLeft",
                    originTop: "isOriginTop",
                    resize: "isResizeBound",
                    resizeContainer: "isResizingContainer",
                }),
                (d._create = function () {
                    this.reloadItems(), (this.stamps = []), this.stamp(this.options.stamp), r.extend(this.element.style, this.options.containerStyle);
                    this._getOption("resize") && this.bindResize();
                }),
                (d.reloadItems = function () {
                    this.items = this._itemize(this.element.children);
                }),
                (d._itemize = function (t) {
                    for (var e = this._filterFindItemElements(t), i = this.constructor.Item, r = [], n = 0; n < e.length; n++) {
                        var s = new i(e[n], this);
                        r.push(s);
                    }
                    return r;
                }),
                (d._filterFindItemElements = function (t) {
                    return r.filterFindElements(t, this.options.itemSelector);
                }),
                (d.getItemElements = function () {
                    return this.items.map(function (t) {
                        return t.element;
                    });
                }),
                (d.layout = function () {
                    this._resetLayout(), this._manageStamps();
                    var t = this._getOption("layoutInstant"),
                        e = void 0 !== t ? t : !this._isLayoutInited;
                    this.layoutItems(this.items, e), (this._isLayoutInited = !0);
                }),
                (d._init = d.layout),
                (d._resetLayout = function () {
                    this.getSize();
                }),
                (d.getSize = function () {
                    this.size = i(this.element);
                }),
                (d._getMeasurement = function (t, e) {
                    var r,
                        n = this.options[t];
                    n ? ("string" == typeof n ? (r = this.element.querySelector(n)) : n instanceof HTMLElement && (r = n), (this[t] = r ? i(r)[e] : n)) : (this[t] = 0);
                }),
                (d.layoutItems = function (t, e) {
                    (t = this._getItemsForLayout(t)), this._layoutItems(t, e), this._postLayout();
                }),
                (d._getItemsForLayout = function (t) {
                    return t.filter(function (t) {
                        return !t.isIgnored;
                    });
                }),
                (d._layoutItems = function (t, e) {
                    if ((this._emitCompleteOnItems("layout", t), t && t.length)) {
                        var i = [];
                        t.forEach(function (t) {
                            var r = this._getItemLayoutPosition(t);
                            (r.item = t), (r.isInstant = e || t.isLayoutInstant), i.push(r);
                        }, this),
                            this._processLayoutQueue(i);
                    }
                }),
                (d._getItemLayoutPosition = function () {
                    return { x: 0, y: 0 };
                }),
                (d._processLayoutQueue = function (t) {
                    this.updateStagger(),
                        t.forEach(function (t, e) {
                            this._positionItem(t.item, t.x, t.y, t.isInstant, e);
                        }, this);
                }),
                (d.updateStagger = function () {
                    var t = this.options.stagger;
                    if (null !== t && void 0 !== t)
                        return (
                            (this.stagger = (function (t) {
                                if ("number" == typeof t) return t;
                                var e = t.match(/(^\d*\.?\d*)(\w*)/),
                                    i = e && e[1],
                                    r = e && e[2];
                                return i.length ? (i = parseFloat(i)) * (p[r] || 1) : 0;
                            })(t)),
                            this.stagger
                        );
                    this.stagger = 0;
                }),
                (d._positionItem = function (t, e, i, r, n) {
                    r ? t.goTo(e, i) : (t.stagger(n * this.stagger), t.moveTo(e, i));
                }),
                (d._postLayout = function () {
                    this.resizeContainer();
                }),
                (d.resizeContainer = function () {
                    if (this._getOption("resizeContainer")) {
                        var t = this._getContainerSize();
                        t && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1));
                    }
                }),
                (d._getContainerSize = u),
                (d._setContainerMeasure = function (t, e) {
                    if (void 0 !== t) {
                        var i = this.size;
                        i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth),
                            (t = Math.max(t, 0)),
                            (this.element.style[e ? "width" : "height"] = t + "px");
                    }
                }),
                (d._emitCompleteOnItems = function (t, e) {
                    function i() {
                        n.dispatchEvent(t + "Complete", null, [e]);
                    }
                    function r() {
                        ++a == s && i();
                    }
                    var n = this,
                        s = e.length;
                    if (e && s) {
                        var a = 0;
                        e.forEach(function (e) {
                            e.once(t, r);
                        });
                    } else i();
                }),
                (d.dispatchEvent = function (t, e, i) {
                    var r = e ? [e].concat(i) : i;
                    if ((this.emitEvent(t, r), l))
                        if (((this.$element = this.$element || l(this.element)), e)) {
                            var n = l.Event(e);
                            (n.type = t), this.$element.trigger(n, i);
                        } else this.$element.trigger(t, i);
                }),
                (d.ignore = function (t) {
                    var e = this.getItem(t);
                    e && (e.isIgnored = !0);
                }),
                (d.unignore = function (t) {
                    var e = this.getItem(t);
                    e && delete e.isIgnored;
                }),
                (d.stamp = function (t) {
                    (t = this._find(t)) && ((this.stamps = this.stamps.concat(t)), t.forEach(this.ignore, this));
                }),
                (d.unstamp = function (t) {
                    (t = this._find(t)) &&
                        t.forEach(function (t) {
                            r.removeFrom(this.stamps, t), this.unignore(t);
                        }, this);
                }),
                (d._find = function (t) {
                    if (t) return "string" == typeof t && (t = this.element.querySelectorAll(t)), (t = r.makeArray(t));
                }),
                (d._manageStamps = function () {
                    this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this));
                }),
                (d._getBoundingRect = function () {
                    var t = this.element.getBoundingClientRect(),
                        e = this.size;
                    this._boundingRect = {
                        left: t.left + e.paddingLeft + e.borderLeftWidth,
                        top: t.top + e.paddingTop + e.borderTopWidth,
                        right: t.right - (e.paddingRight + e.borderRightWidth),
                        bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth),
                    };
                }),
                (d._manageStamp = u),
                (d._getElementOffset = function (t) {
                    var e = t.getBoundingClientRect(),
                        r = this._boundingRect,
                        n = i(t);
                    return { left: e.left - r.left - n.marginLeft, top: e.top - r.top - n.marginTop, right: r.right - e.right - n.marginRight, bottom: r.bottom - e.bottom - n.marginBottom };
                }),
                (d.handleEvent = r.handleEvent),
                (d.bindResize = function () {
                    t.addEventListener("resize", this), (this.isResizeBound = !0);
                }),
                (d.unbindResize = function () {
                    t.removeEventListener("resize", this), (this.isResizeBound = !1);
                }),
                (d.onresize = function () {
                    this.resize();
                }),
                r.debounceMethod(s, "onresize", 100),
                (d.resize = function () {
                    this.isResizeBound && this.needsResizeLayout() && this.layout();
                }),
                (d.needsResizeLayout = function () {
                    var t = i(this.element);
                    return this.size && t && t.innerWidth !== this.size.innerWidth;
                }),
                (d.addItems = function (t) {
                    var e = this._itemize(t);
                    return e.length && (this.items = this.items.concat(e)), e;
                }),
                (d.appended = function (t) {
                    var e = this.addItems(t);
                    e.length && (this.layoutItems(e, !0), this.reveal(e));
                }),
                (d.prepended = function (t) {
                    var e = this._itemize(t);
                    if (e.length) {
                        var i = this.items.slice(0);
                        (this.items = e.concat(i)), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i);
                    }
                }),
                (d.reveal = function (t) {
                    if ((this._emitCompleteOnItems("reveal", t), t && t.length)) {
                        var e = this.updateStagger();
                        t.forEach(function (t, i) {
                            t.stagger(i * e), t.reveal();
                        });
                    }
                }),
                (d.hide = function (t) {
                    if ((this._emitCompleteOnItems("hide", t), t && t.length)) {
                        var e = this.updateStagger();
                        t.forEach(function (t, i) {
                            t.stagger(i * e), t.hide();
                        });
                    }
                }),
                (d.revealItemElements = function (t) {
                    var e = this.getItems(t);
                    this.reveal(e);
                }),
                (d.hideItemElements = function (t) {
                    var e = this.getItems(t);
                    this.hide(e);
                }),
                (d.getItem = function (t) {
                    for (var e = 0; e < this.items.length; e++) {
                        var i = this.items[e];
                        if (i.element == t) return i;
                    }
                }),
                (d.getItems = function (t) {
                    var e = [];
                    return (
                        (t = r.makeArray(t)).forEach(function (t) {
                            var i = this.getItem(t);
                            i && e.push(i);
                        }, this),
                        e
                    );
                }),
                (d.remove = function (t) {
                    var e = this.getItems(t);
                    this._emitCompleteOnItems("remove", e),
                        e &&
                            e.length &&
                            e.forEach(function (t) {
                                t.remove(), r.removeFrom(this.items, t);
                            }, this);
                }),
                (d.destroy = function () {
                    var t = this.element.style;
                    (t.height = ""),
                        (t.position = ""),
                        (t.width = ""),
                        this.items.forEach(function (t) {
                            t.destroy();
                        }),
                        this.unbindResize();
                    var e = this.element.outlayerGUID;
                    delete h[e], delete this.element.outlayerGUID, l && l.removeData(this.element, this.constructor.namespace);
                }),
                (s.data = function (t) {
                    var e = (t = r.getQueryElement(t)) && t.outlayerGUID;
                    return e && h[e];
                }),
                (s.create = function (t, e) {
                    var i = a(s);
                    return (
                        (i.defaults = r.extend({}, s.defaults)),
                        r.extend(i.defaults, e),
                        (i.compatOptions = r.extend({}, s.compatOptions)),
                        (i.namespace = t),
                        (i.data = s.data),
                        (i.Item = a(n)),
                        r.htmlInit(i, t),
                        l && l.bridget && l.bridget(t, i),
                        i
                    );
                });
            var p = { ms: 1, s: 1e3 };
            return (s.Item = n), s;
        });
    },
    function (t, e, i) {
        var r, n;
        !(function (s, a) {
            void 0 === (n = "function" == typeof (r = a) ? r.call(e, i, e, t) : r) || (t.exports = n);
        })("undefined" != typeof window && window, function () {
            "use strict";
            function t() {}
            var e = t.prototype;
            return (
                (e.on = function (t, e) {
                    if (t && e) {
                        var i = (this._events = this._events || {}),
                            r = (i[t] = i[t] || []);
                        return -1 == r.indexOf(e) && r.push(e), this;
                    }
                }),
                (e.once = function (t, e) {
                    if (t && e) {
                        this.on(t, e);
                        var i = (this._onceEvents = this._onceEvents || {});
                        return ((i[t] = i[t] || {})[e] = !0), this;
                    }
                }),
                (e.off = function (t, e) {
                    var i = this._events && this._events[t];
                    if (i && i.length) {
                        var r = i.indexOf(e);
                        return -1 != r && i.splice(r, 1), this;
                    }
                }),
                (e.emitEvent = function (t, e) {
                    var i = this._events && this._events[t];
                    if (i && i.length) {
                        (i = i.slice(0)), (e = e || []);
                        for (var r = this._onceEvents && this._onceEvents[t], n = 0; n < i.length; n++) {
                            var s = i[n];
                            r && r[s] && (this.off(t, s), delete r[s]), s.apply(this, e);
                        }
                        return this;
                    }
                }),
                (e.allOff = function () {
                    delete this._events, delete this._onceEvents;
                }),
                t
            );
        });
    },
    function (t, e, i) {
        var r;
        !(function (n, s) {
            "use strict";
            void 0 ===
                (r = function () {
                    return s();
                }.call(e, i, e, t)) || (t.exports = r);
        })(window, function () {
            "use strict";
            function t(t) {
                var e = parseFloat(t);
                return -1 == t.indexOf("%") && !isNaN(e) && e;
            }
            function e(t) {
                var e = getComputedStyle(t);
                return e || n("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), e;
            }
            function i(n) {
                if (
                    ((function () {
                        if (!o) {
                            o = !0;
                            var n = document.createElement("div");
                            (n.style.width = "200px"), (n.style.padding = "1px 2px 3px 4px"), (n.style.borderStyle = "solid"), (n.style.borderWidth = "1px 2px 3px 4px"), (n.style.boxSizing = "border-box");
                            var s = document.body || document.documentElement;
                            s.appendChild(n);
                            var a = e(n);
                            (i.isBoxSizeOuter = r = 200 == t(a.width)), s.removeChild(n);
                        }
                    })(),
                    "string" == typeof n && (n = document.querySelector(n)),
                    n && "object" == typeof n && n.nodeType)
                ) {
                    var l = e(n);
                    if ("none" == l.display)
                        return (function () {
                            for (var t = { width: 0, height: 0, innerWidth: 0, innerHeight: 0, outerWidth: 0, outerHeight: 0 }, e = 0; e < a; e++) t[s[e]] = 0;
                            return t;
                        })();
                    var u = {};
                    (u.width = n.offsetWidth), (u.height = n.offsetHeight);
                    for (var c = (u.isBorderBox = "border-box" == l.boxSizing), h = 0; h < a; h++) {
                        var d = s[h],
                            p = l[d],
                            f = parseFloat(p);
                        u[d] = isNaN(f) ? 0 : f;
                    }
                    var m = u.paddingLeft + u.paddingRight,
                        g = u.paddingTop + u.paddingBottom,
                        v = u.marginLeft + u.marginRight,
                        y = u.marginTop + u.marginBottom,
                        _ = u.borderLeftWidth + u.borderRightWidth,
                        w = u.borderTopWidth + u.borderBottomWidth,
                        T = c && r,
                        b = t(l.width);
                    !1 !== b && (u.width = b + (T ? 0 : m + _));
                    var x = t(l.height);
                    return !1 !== x && (u.height = x + (T ? 0 : g + w)), (u.innerWidth = u.width - (m + _)), (u.innerHeight = u.height - (g + w)), (u.outerWidth = u.width + v), (u.outerHeight = u.height + y), u;
                }
            }
            var r,
                n =
                    "undefined" == typeof console
                        ? function () {}
                        : function (t) {
                              console.error(t);
                          },
                s = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
                a = s.length,
                o = !1;
            return i;
        });
    },
    function (t, e, i) {
        var r, n;
        !(function (s, a) {
            (r = [i(18)]),
                void 0 ===
                    (n = function (t) {
                        return a(s, t);
                    }.apply(e, r)) || (t.exports = n);
        })(window, function (t, e) {
            "use strict";
            var i = {};
            (i.extend = function (t, e) {
                for (var i in e) t[i] = e[i];
                return t;
            }),
                (i.modulo = function (t, e) {
                    return ((t % e) + e) % e;
                }),
                (i.makeArray = function (t) {
                    var e = [];
                    if (Array.isArray(t)) e = t;
                    else if (t && "object" == typeof t && "number" == typeof t.length) for (var i = 0; i < t.length; i++) e.push(t[i]);
                    else e.push(t);
                    return e;
                }),
                (i.removeFrom = function (t, e) {
                    var i = t.indexOf(e);
                    -1 != i && t.splice(i, 1);
                }),
                (i.getParent = function (t, i) {
                    for (; t.parentNode && t != document.body; ) if (((t = t.parentNode), e(t, i))) return t;
                }),
                (i.getQueryElement = function (t) {
                    return "string" == typeof t ? document.querySelector(t) : t;
                }),
                (i.handleEvent = function (t) {
                    var e = "on" + t.type;
                    this[e] && this[e](t);
                }),
                (i.filterFindElements = function (t, r) {
                    var n = [];
                    return (
                        (t = i.makeArray(t)).forEach(function (t) {
                            if (t instanceof HTMLElement)
                                if (r) {
                                    e(t, r) && n.push(t);
                                    for (var i = t.querySelectorAll(r), s = 0; s < i.length; s++) n.push(i[s]);
                                } else n.push(t);
                        }),
                        n
                    );
                }),
                (i.debounceMethod = function (t, e, i) {
                    var r = t.prototype[e],
                        n = e + "Timeout";
                    t.prototype[e] = function () {
                        var t = this[n];
                        t && clearTimeout(t);
                        var e = arguments,
                            s = this;
                        this[n] = setTimeout(function () {
                            r.apply(s, e), delete s[n];
                        }, i || 100);
                    };
                }),
                (i.docReady = function (t) {
                    var e = document.readyState;
                    "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t);
                }),
                (i.toDashed = function (t) {
                    return t
                        .replace(/(.)([A-Z])/g, function (t, e, i) {
                            return e + "-" + i;
                        })
                        .toLowerCase();
                });
            var r = t.console;
            return (
                (i.htmlInit = function (e, n) {
                    i.docReady(function () {
                        var s = i.toDashed(n),
                            a = "data-" + s,
                            o = document.querySelectorAll("[" + a + "]"),
                            l = document.querySelectorAll(".js-" + s),
                            u = i.makeArray(o).concat(i.makeArray(l)),
                            c = a + "-options",
                            h = t.jQuery;
                        u.forEach(function (t) {
                            var i,
                                s = t.getAttribute(a) || t.getAttribute(c);
                            try {
                                i = s && JSON.parse(s);
                            } catch (e) {
                                return void (r && r.error("Error parsing " + a + " on " + t.className + ": " + e));
                            }
                            var o = new e(t, i);
                            h && h.data(t, n, o);
                        });
                    });
                }),
                i
            );
        });
    },
    function (t, e, i) {
        var r, n;
        !(function (s, a) {
            "use strict";
            void 0 === (n = "function" == typeof (r = a) ? r.call(e, i, e, t) : r) || (t.exports = n);
        })(window, function () {
            "use strict";
            var t = (function () {
                var t = window.Element.prototype;
                if (t.matches) return "matches";
                if (t.matchesSelector) return "matchesSelector";
                for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
                    var r = e[i] + "MatchesSelector";
                    if (t[r]) return r;
                }
            })();
            return function (e, i) {
                return e[t](i);
            };
        });
    },
    function (t, e, i) {
        var r, n, s;
        !(function (a, o) {
            (n = [i(15), i(16)]), void 0 === (s = "function" == typeof (r = o) ? r.apply(e, n) : r) || (t.exports = s);
        })(window, function (t, e) {
            "use strict";
            function i(t, e) {
                t && ((this.element = t), (this.layout = e), (this.position = { x: 0, y: 0 }), this._create());
            }
            var r = document.documentElement.style,
                n = "string" == typeof r.transition ? "transition" : "WebkitTransition",
                s = "string" == typeof r.transform ? "transform" : "WebkitTransform",
                a = { WebkitTransition: "webkitTransitionEnd", transition: "transitionend" }[n],
                o = { transform: s, transition: n, transitionDuration: n + "Duration", transitionProperty: n + "Property", transitionDelay: n + "Delay" },
                l = (i.prototype = Object.create(t.prototype));
            (l.constructor = i),
                (l._create = function () {
                    (this._transn = { ingProperties: {}, clean: {}, onEnd: {} }), this.css({ position: "absolute" });
                }),
                (l.handleEvent = function (t) {
                    var e = "on" + t.type;
                    this[e] && this[e](t);
                }),
                (l.getSize = function () {
                    this.size = e(this.element);
                }),
                (l.css = function (t) {
                    var e = this.element.style;
                    for (var i in t) {
                        e[o[i] || i] = t[i];
                    }
                }),
                (l.getPosition = function () {
                    var t = getComputedStyle(this.element),
                        e = this.layout._getOption("originLeft"),
                        i = this.layout._getOption("originTop"),
                        r = t[e ? "left" : "right"],
                        n = t[i ? "top" : "bottom"],
                        s = parseFloat(r),
                        a = parseFloat(n),
                        o = this.layout.size;
                    -1 != r.indexOf("%") && (s = (s / 100) * o.width),
                        -1 != n.indexOf("%") && (a = (a / 100) * o.height),
                        (s = isNaN(s) ? 0 : s),
                        (a = isNaN(a) ? 0 : a),
                        (s -= e ? o.paddingLeft : o.paddingRight),
                        (a -= i ? o.paddingTop : o.paddingBottom),
                        (this.position.x = s),
                        (this.position.y = a);
                }),
                (l.layoutPosition = function () {
                    var t = this.layout.size,
                        e = {},
                        i = this.layout._getOption("originLeft"),
                        r = this.layout._getOption("originTop"),
                        n = i ? "paddingLeft" : "paddingRight",
                        s = i ? "left" : "right",
                        a = i ? "right" : "left",
                        o = this.position.x + t[n];
                    (e[s] = this.getXValue(o)), (e[a] = "");
                    var l = r ? "paddingTop" : "paddingBottom",
                        u = r ? "top" : "bottom",
                        c = r ? "bottom" : "top",
                        h = this.position.y + t[l];
                    (e[u] = this.getYValue(h)), (e[c] = ""), this.css(e), this.emitEvent("layout", [this]);
                }),
                (l.getXValue = function (t) {
                    var e = this.layout._getOption("horizontal");
                    return this.layout.options.percentPosition && !e ? (t / this.layout.size.width) * 100 + "%" : t + "px";
                }),
                (l.getYValue = function (t) {
                    var e = this.layout._getOption("horizontal");
                    return this.layout.options.percentPosition && e ? (t / this.layout.size.height) * 100 + "%" : t + "px";
                }),
                (l._transitionTo = function (t, e) {
                    this.getPosition();
                    var i = this.position.x,
                        r = this.position.y,
                        n = t == this.position.x && e == this.position.y;
                    if ((this.setPosition(t, e), !n || this.isTransitioning)) {
                        var s = t - i,
                            a = e - r,
                            o = {};
                        (o.transform = this.getTranslate(s, a)), this.transition({ to: o, onTransitionEnd: { transform: this.layoutPosition }, isCleaning: !0 });
                    } else this.layoutPosition();
                }),
                (l.getTranslate = function (t, e) {
                    var i = this.layout._getOption("originLeft"),
                        r = this.layout._getOption("originTop");
                    return (t = i ? t : -t), (e = r ? e : -e), "translate3d(" + t + "px, " + e + "px, 0)";
                }),
                (l.goTo = function (t, e) {
                    this.setPosition(t, e), this.layoutPosition();
                }),
                (l.moveTo = l._transitionTo),
                (l.setPosition = function (t, e) {
                    (this.position.x = parseFloat(t)), (this.position.y = parseFloat(e));
                }),
                (l._nonTransition = function (t) {
                    this.css(t.to), t.isCleaning && this._removeStyles(t.to);
                    for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this);
                }),
                (l.transition = function (t) {
                    if (parseFloat(this.layout.options.transitionDuration)) {
                        var e = this._transn;
                        for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
                        for (i in t.to) (e.ingProperties[i] = !0), t.isCleaning && (e.clean[i] = !0);
                        if (t.from) {
                            this.css(t.from);
                            this.element.offsetHeight;
                            null;
                        }
                        this.enableTransition(t.to), this.css(t.to), (this.isTransitioning = !0);
                    } else this._nonTransition(t);
                });
            var u =
                "opacity," +
                (function (t) {
                    return t.replace(/([A-Z])/g, function (t) {
                        return "-" + t.toLowerCase();
                    });
                })(s);
            (l.enableTransition = function () {
                if (!this.isTransitioning) {
                    var t = this.layout.options.transitionDuration;
                    (t = "number" == typeof t ? t + "ms" : t), this.css({ transitionProperty: u, transitionDuration: t, transitionDelay: this.staggerDelay || 0 }), this.element.addEventListener(a, this, !1);
                }
            }),
                (l.onwebkitTransitionEnd = function (t) {
                    this.ontransitionend(t);
                }),
                (l.onotransitionend = function (t) {
                    this.ontransitionend(t);
                });
            var c = { "-webkit-transform": "transform" };
            (l.ontransitionend = function (t) {
                if (t.target === this.element) {
                    var e = this._transn,
                        i = c[t.propertyName] || t.propertyName;
                    if (
                        (delete e.ingProperties[i],
                        (function (t) {
                            for (var e in t) return !1;
                            return !0;
                        })(e.ingProperties) && this.disableTransition(),
                        i in e.clean && ((this.element.style[t.propertyName] = ""), delete e.clean[i]),
                        i in e.onEnd)
                    ) {
                        e.onEnd[i].call(this), delete e.onEnd[i];
                    }
                    this.emitEvent("transitionEnd", [this]);
                }
            }),
                (l.disableTransition = function () {
                    this.removeTransitionStyles(), this.element.removeEventListener(a, this, !1), (this.isTransitioning = !1);
                }),
                (l._removeStyles = function (t) {
                    var e = {};
                    for (var i in t) e[i] = "";
                    this.css(e);
                });
            var h = { transitionProperty: "", transitionDuration: "", transitionDelay: "" };
            return (
                (l.removeTransitionStyles = function () {
                    this.css(h);
                }),
                (l.stagger = function (t) {
                    (t = isNaN(t) ? 0 : t), (this.staggerDelay = t + "ms");
                }),
                (l.removeElem = function () {
                    this.element.parentNode.removeChild(this.element), this.css({ display: "" }), this.emitEvent("remove", [this]);
                }),
                (l.remove = function () {
                    n && parseFloat(this.layout.options.transitionDuration)
                        ? (this.once("transitionEnd", function () {
                              this.removeElem();
                          }),
                          this.hide())
                        : this.removeElem();
                }),
                (l.reveal = function () {
                    delete this.isHidden, this.css({ display: "" });
                    var t = this.layout.options,
                        e = {};
                    (e[this.getHideRevealTransitionEndProperty("visibleStyle")] = this.onRevealTransitionEnd), this.transition({ from: t.hiddenStyle, to: t.visibleStyle, isCleaning: !0, onTransitionEnd: e });
                }),
                (l.onRevealTransitionEnd = function () {
                    this.isHidden || this.emitEvent("reveal");
                }),
                (l.getHideRevealTransitionEndProperty = function (t) {
                    var e = this.layout.options[t];
                    if (e.opacity) return "opacity";
                    for (var i in e) return i;
                }),
                (l.hide = function () {
                    (this.isHidden = !0), this.css({ display: "" });
                    var t = this.layout.options,
                        e = {};
                    (e[this.getHideRevealTransitionEndProperty("hiddenStyle")] = this.onHideTransitionEnd), this.transition({ from: t.visibleStyle, to: t.hiddenStyle, isCleaning: !0, onTransitionEnd: e });
                }),
                (l.onHideTransitionEnd = function () {
                    this.isHidden && (this.css({ display: "none" }), this.emitEvent("hide"));
                }),
                (l.destroy = function () {
                    this.css({ position: "", left: "", right: "", top: "", bottom: "", transition: "", transform: "" });
                }),
                i
            );
        });
    },
    function (t, e, i) {
        var r, n;
        !(function (s, a) {
            "use strict";
            (r = [i(15)]),
                void 0 ===
                    (n = function (t) {
                        return a(s, t);
                    }.apply(e, r)) || (t.exports = n);
        })("undefined" != typeof window ? window : this, function (t, e) {
            "use strict";
            function i(t, e) {
                for (var i in e) t[i] = e[i];
                return t;
            }
            function r(t, e, n) {
                if (!(this instanceof r)) return new r(t, e, n);
                "string" == typeof t && (t = document.querySelectorAll(t)),
                    (this.elements = (function (t) {
                        var e = [];
                        if (Array.isArray(t)) e = t;
                        else if ("number" == typeof t.length) for (var i = 0; i < t.length; i++) e.push(t[i]);
                        else e.push(t);
                        return e;
                    })(t)),
                    (this.options = i({}, this.options)),
                    "function" == typeof e ? (n = e) : i(this.options, e),
                    n && this.on("always", n),
                    this.getImages(),
                    a && (this.jqDeferred = new a.Deferred()),
                    setTimeout(
                        function () {
                            this.check();
                        }.bind(this)
                    );
            }
            function n(t) {
                this.img = t;
            }
            function s(t, e) {
                (this.url = t), (this.element = e), (this.img = new Image());
            }
            var a = t.jQuery,
                o = t.console;
            ((r.prototype = Object.create(e.prototype)).options = {}),
                (r.prototype.getImages = function () {
                    (this.images = []), this.elements.forEach(this.addElementImages, this);
                }),
                (r.prototype.addElementImages = function (t) {
                    "IMG" == t.nodeName && this.addImage(t), !0 === this.options.background && this.addElementBackgroundImages(t);
                    var e = t.nodeType;
                    if (e && l[e]) {
                        for (var i = t.querySelectorAll("img"), r = 0; r < i.length; r++) {
                            var n = i[r];
                            this.addImage(n);
                        }
                        if ("string" == typeof this.options.background) {
                            var s = t.querySelectorAll(this.options.background);
                            for (r = 0; r < s.length; r++) {
                                var a = s[r];
                                this.addElementBackgroundImages(a);
                            }
                        }
                    }
                });
            var l = { 1: !0, 9: !0, 11: !0 };
            return (
                (r.prototype.addElementBackgroundImages = function (t) {
                    var e = getComputedStyle(t);
                    if (e)
                        for (var i = /url\((['"])?(.*?)\1\)/gi, r = i.exec(e.backgroundImage); null !== r; ) {
                            var n = r && r[2];
                            n && this.addBackground(n, t), (r = i.exec(e.backgroundImage));
                        }
                }),
                (r.prototype.addImage = function (t) {
                    var e = new n(t);
                    this.images.push(e);
                }),
                (r.prototype.addBackground = function (t, e) {
                    var i = new s(t, e);
                    this.images.push(i);
                }),
                (r.prototype.check = function () {
                    function t(t, i, r) {
                        setTimeout(function () {
                            e.progress(t, i, r);
                        });
                    }
                    var e = this;
                    (this.progressedCount = 0),
                        (this.hasAnyBroken = !1),
                        this.images.length
                            ? this.images.forEach(function (e) {
                                  e.once("progress", t), e.check();
                              })
                            : this.complete();
                }),
                (r.prototype.progress = function (t, e, i) {
                    this.progressedCount++,
                        (this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded),
                        this.emitEvent("progress", [this, t, e]),
                        this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t),
                        this.progressedCount == this.images.length && this.complete(),
                        this.options.debug && o && o.log("progress: " + i, t, e);
                }),
                (r.prototype.complete = function () {
                    var t = this.hasAnyBroken ? "fail" : "done";
                    if (((this.isComplete = !0), this.emitEvent(t, [this]), this.emitEvent("always", [this]), this.jqDeferred)) {
                        var e = this.hasAnyBroken ? "reject" : "resolve";
                        this.jqDeferred[e](this);
                    }
                }),
                (n.prototype = Object.create(e.prototype)),
                (n.prototype.check = function () {
                    this.getIsImageComplete()
                        ? this.confirm(0 !== this.img.naturalWidth, "naturalWidth")
                        : ((this.proxyImage = new Image()),
                          this.proxyImage.addEventListener("load", this),
                          this.proxyImage.addEventListener("error", this),
                          this.img.addEventListener("load", this),
                          this.img.addEventListener("error", this),
                          (this.proxyImage.src = this.img.src));
                }),
                (n.prototype.getIsImageComplete = function () {
                    return this.img.complete && void 0 !== this.img.naturalWidth;
                }),
                (n.prototype.confirm = function (t, e) {
                    (this.isLoaded = t), this.emitEvent("progress", [this, this.img, e]);
                }),
                (n.prototype.handleEvent = function (t) {
                    var e = "on" + t.type;
                    this[e] && this[e](t);
                }),
                (n.prototype.onload = function () {
                    this.confirm(!0, "onload"), this.unbindEvents();
                }),
                (n.prototype.onerror = function () {
                    this.confirm(!1, "onerror"), this.unbindEvents();
                }),
                (n.prototype.unbindEvents = function () {
                    this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
                }),
                (s.prototype = Object.create(n.prototype)),
                (s.prototype.check = function () {
                    this.img.addEventListener("load", this), this.img.addEventListener("error", this), (this.img.src = this.url);
                    this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents());
                }),
                (s.prototype.unbindEvents = function () {
                    this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
                }),
                (s.prototype.confirm = function (t, e) {
                    (this.isLoaded = t), this.emitEvent("progress", [this, this.element, e]);
                }),
                (r.makeJQueryPlugin = function (e) {
                    (e = e || t.jQuery) &&
                        ((a = e).fn.imagesLoaded = function (t, e) {
                            return new r(this, t, e).jqDeferred.promise(a(this));
                        });
                }),
                r.makeJQueryPlugin(),
                r
            );
        });
    },
    function (t, e, i) {
        "use strict";
        function r(t) {
            var e = t.target;
            if (!0 !== c.isLoading) {
                "a" !== e.tagName.toLowerCase() && (e = e.closest("a"));
                var i = e.getAttribute("href");
                if (!g(i)) {
                    if ((t.preventDefault(), i === window.location.pathname)) return l.hubActive && (0, l.toggleHub)(), void (u.galleryNavActive && (0, u.toggleGalleryNav)());
                    if (Modernizr.history) {
                        var r = { prevUrl: window.location.pathname };
                        t.preventDefault(), history.pushState(r, null, i), n(i, r);
                    }
                }
            }
        }
        function n(t, e) {
            var i = new XMLHttpRequest();
            e = e || history.state || {};
            i.open("GET", t),
                (i.responseType = "document"),
                p.classList.add("is-loading"),
                (c.isLoading = !0),
                (0, o.unbindWindowListeners)(),
                l.hubActive && f.setAttribute("style", ""),
                (i.onload = function () {
                    if (200 === i.status) {
                        var r = function (t) {
                                var e = t || h.innerHTML,
                                    i = h.getAttribute("class") || "",
                                    r = n.querySelector("title").innerText;
                                (document.title = r), (d.innerHTML = e), d.setAttribute("class", i);
                                var l = document.querySelector("[data-news-close]");
                                l && null !== c.closeUrl && l.setAttribute("href", c.closeUrl),
                                    a.default.fromTo(d, 0.5, { opacity: 0 }, { opacity: 1, delay: 0.35, ease: Linear.easeNone }),
                                    window.scrollTo(0, 0),
                                    p.classList.remove("is-loading"),
                                    (c.isLoading = !1),
                                    (0, o.controller)();
                                s(d.querySelectorAll("a:not(.prevent-history)"));
                            },
                            n = this.responseXML,
                            h = n.querySelector("main"),
                            m = n.querySelector("body"),
                            g = m.getAttribute("class") || "",
                            v = m.getAttribute("style") || "",
                            y = m.getAttribute("data-news-viewer") || null;
                        !(function (t) {
                            (t = t || location.pathname), window.ga && ga.loaded && ga("send", "pageview", location.pathname);
                        })(t),
                            f.setAttribute("class", g),
                            f.setAttribute("style", v),
                            y && !f.getAttribute("data-news-viewer") ? (c.closeUrl = e.prevUrl) : y || (c.closeUrl = null),
                            y ? f.setAttribute("data-news-viewer", !0) : f.removeAttribute("data-news-viewer"),
                            l.hubActive ? (0, l.toggleHub)(r) : a.default.to(d, 0.5, { opacity: 0, ease: Linear.easeNone, onComplete: r }),
                            u.galleryNavActive && (0, u.toggleGalleryNav)();
                    } else location = t;
                }),
                i.send();
        }
        function s(t) {
            if (void 0 !== t.length) for (var e = 0; e < t.length; e++) t[e].addEventListener("click", r, !1);
            else t.addEventListener("click", r, !1);
        }
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.directAjaxRequest = function (t) {
                !0 !== c.isLoading && (Modernizr.history ? (event && event.preventDefault(), history.pushState({}, null, t), n(t)) : (location = t));
            }),
            (e.bindHistoryLinks = s),
            (e.default = function () {
                var t = void 0;
                s(h),
                    (window.onload = function () {
                        (t = !0),
                            setTimeout(function () {
                                t = !1;
                            }, 0);
                    }),
                    (window.onpopstate = function (e) {
                        t ? (t = !1) : n(document.location.pathname);
                    });
            });
        var a = (function (t) {
                return t && t.__esModule ? t : { default: t };
            })(i(22)),
            o = i(3),
            l = i(23),
            u = i(54),
            c = { isLoading: !1, closeUrl: null },
            h = document.querySelectorAll("a:not(.prevent-history), .site-header a"),
            d = document.querySelector("main"),
            p = document.querySelector("#loader"),
            f = document.body,
            m =
                (document.documentElement,
                function (t) {
                    return (
                        0 === t.indexOf("//") && (t = location.protocol + t),
                        t
                            .toLowerCase()
                            .replace(/([a-z])?:\/\//, "$1")
                            .split("/")[0]
                    );
                }),
            g = function (t) {
                return (t.indexOf(":") > -1 || t.indexOf("//") > -1) && m(location.href) !== m(t);
            };
    },
    function (t, e, i) {
        var r;
        (function (i) {
            var n = void 0 !== t && t.exports && void 0 !== i ? i : this || window;
            (n._gsQueue || (n._gsQueue = [])).push(function () {
                "use strict";
                n._gsDefine(
                    "TweenMax",
                    ["core.Animation", "core.SimpleTimeline", "TweenLite"],
                    function (t, e, i) {
                        var r = function (t) {
                                var e,
                                    i = [],
                                    r = t.length;
                                for (e = 0; e !== r; i.push(t[e++]));
                                return i;
                            },
                            n = function (t, e, i) {
                                var r,
                                    n,
                                    s = t.cycle;
                                for (r in s) (n = s[r]), (t[r] = "function" == typeof n ? n(i, e[i]) : n[i % n.length]);
                                delete t.cycle;
                            },
                            s = function (t, e, r) {
                                i.call(this, t, e, r),
                                    (this._cycle = 0),
                                    (this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase),
                                    (this._repeat = this.vars.repeat || 0),
                                    (this._repeatDelay = this.vars.repeatDelay || 0),
                                    (this._dirty = !0),
                                    (this.render = s.prototype.render);
                            },
                            a = i._internals,
                            o = a.isSelector,
                            l = a.isArray,
                            u = (s.prototype = i.to({}, 0.1, {})),
                            c = [];
                        (s.version = "1.20.2"),
                            (u.constructor = s),
                            (u.kill()._gc = !1),
                            (s.killTweensOf = s.killDelayedCallsTo = i.killTweensOf),
                            (s.getTweensOf = i.getTweensOf),
                            (s.lagSmoothing = i.lagSmoothing),
                            (s.ticker = i.ticker),
                            (s.render = i.render),
                            (u.invalidate = function () {
                                return (
                                    (this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase),
                                    (this._repeat = this.vars.repeat || 0),
                                    (this._repeatDelay = this.vars.repeatDelay || 0),
                                    (this._yoyoEase = null),
                                    this._uncache(!0),
                                    i.prototype.invalidate.call(this)
                                );
                            }),
                            (u.updateTo = function (t, e) {
                                var r,
                                    n = this.ratio,
                                    s = this.vars.immediateRender || t.immediateRender;
                                e && this._startTime < this._timeline._time && ((this._startTime = this._timeline._time), this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
                                for (r in t) this.vars[r] = t[r];
                                if (this._initted || s)
                                    if (e) (this._initted = !1), s && this.render(0, !0, !0);
                                    else if ((this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this), this._time / this._duration > 0.998)) {
                                        var a = this._totalTime;
                                        this.render(0, !0, !1), (this._initted = !1), this.render(a, !0, !1);
                                    } else if (((this._initted = !1), this._init(), this._time > 0 || s)) for (var o, l = 1 / (1 - n), u = this._firstPT; u; ) (o = u.s + u.c), (u.c *= l), (u.s = o - u.c), (u = u._next);
                                return this;
                            }),
                            (u.render = function (t, e, r) {
                                this._initted || (0 === this._duration && this.vars.repeat && this.invalidate());
                                var n,
                                    s,
                                    o,
                                    l,
                                    u,
                                    c,
                                    h,
                                    d,
                                    p,
                                    f = this._dirty ? this.totalDuration() : this._totalDuration,
                                    m = this._time,
                                    g = this._totalTime,
                                    v = this._cycle,
                                    y = this._duration,
                                    _ = this._rawPrevTime;
                                if (
                                    (t >= f - 1e-7 && t >= 0
                                        ? ((this._totalTime = f),
                                          (this._cycle = this._repeat),
                                          this._yoyo && 0 != (1 & this._cycle)
                                              ? ((this._time = 0), (this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0))
                                              : ((this._time = y), (this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1)),
                                          this._reversed || ((n = !0), (s = "onComplete"), (r = r || this._timeline.autoRemoveChildren)),
                                          0 === y &&
                                              (this._initted || !this.vars.lazy || r) &&
                                              (this._startTime === this._timeline._duration && (t = 0),
                                              (_ < 0 || (t <= 0 && t >= -1e-7) || (1e-10 === _ && "isPause" !== this.data)) && _ !== t && ((r = !0), _ > 1e-10 && (s = "onReverseComplete")),
                                              (this._rawPrevTime = d = !e || t || _ === t ? t : 1e-10)))
                                        : t < 1e-7
                                        ? ((this._totalTime = this._time = this._cycle = 0),
                                          (this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0),
                                          (0 !== g || (0 === y && _ > 0)) && ((s = "onReverseComplete"), (n = this._reversed)),
                                          t < 0 && ((this._active = !1), 0 === y && (this._initted || !this.vars.lazy || r) && (_ >= 0 && (r = !0), (this._rawPrevTime = d = !e || t || _ === t ? t : 1e-10))),
                                          this._initted || (r = !0))
                                        : ((this._totalTime = this._time = t),
                                          0 !== this._repeat &&
                                              ((l = y + this._repeatDelay),
                                              (this._cycle = (this._totalTime / l) >> 0),
                                              0 !== this._cycle && this._cycle === this._totalTime / l && g <= t && this._cycle--,
                                              (this._time = this._totalTime - this._cycle * l),
                                              this._yoyo &&
                                                  0 != (1 & this._cycle) &&
                                                  ((this._time = y - this._time),
                                                  (p = this._yoyoEase || this.vars.yoyoEase) &&
                                                      (this._yoyoEase ||
                                                          (!0 !== p || this._initted
                                                              ? (this._yoyoEase = p = !0 === p ? this._ease : p instanceof Ease ? p : Ease.map[p])
                                                              : ((p = this.vars.ease),
                                                                (this._yoyoEase = p = p ? (p instanceof Ease ? p : "function" == typeof p ? new Ease(p, this.vars.easeParams) : Ease.map[p] || i.defaultEase) : i.defaultEase))),
                                                      (this.ratio = p ? 1 - p.getRatio((y - this._time) / y) : 0))),
                                              this._time > y ? (this._time = y) : this._time < 0 && (this._time = 0)),
                                          this._easeType && !p
                                              ? ((u = this._time / y),
                                                (c = this._easeType),
                                                (h = this._easePower),
                                                (1 === c || (3 === c && u >= 0.5)) && (u = 1 - u),
                                                3 === c && (u *= 2),
                                                1 === h ? (u *= u) : 2 === h ? (u *= u * u) : 3 === h ? (u *= u * u * u) : 4 === h && (u *= u * u * u * u),
                                                1 === c ? (this.ratio = 1 - u) : 2 === c ? (this.ratio = u) : this._time / y < 0.5 ? (this.ratio = u / 2) : (this.ratio = 1 - u / 2))
                                              : p || (this.ratio = this._ease.getRatio(this._time / y))),
                                    m !== this._time || r || v !== this._cycle)
                                ) {
                                    if (!this._initted) {
                                        if ((this._init(), !this._initted || this._gc)) return;
                                        if (!r && this._firstPT && ((!1 !== this.vars.lazy && this._duration) || (this.vars.lazy && !this._duration)))
                                            return (this._time = m), (this._totalTime = g), (this._rawPrevTime = _), (this._cycle = v), a.lazyTweens.push(this), void (this._lazy = [t, e]);
                                        !this._time || n || p ? n && this._ease._calcEnd && !p && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1)) : (this.ratio = this._ease.getRatio(this._time / y));
                                    }
                                    for (
                                        !1 !== this._lazy && (this._lazy = !1),
                                            this._active || (!this._paused && this._time !== m && t >= 0 && (this._active = !0)),
                                            0 === g &&
                                                (2 === this._initted && t > 0 && this._init(),
                                                this._startAt && (t >= 0 ? this._startAt.render(t, e, r) : s || (s = "_dummyGS")),
                                                this.vars.onStart && ((0 === this._totalTime && 0 !== y) || e || this._callback("onStart"))),
                                            o = this._firstPT;
                                        o;

                                    )
                                        o.f ? o.t[o.p](o.c * this.ratio + o.s) : (o.t[o.p] = o.c * this.ratio + o.s), (o = o._next);
                                    this._onUpdate && (t < 0 && this._startAt && this._startTime && this._startAt.render(t, e, r), e || ((this._totalTime !== g || s) && this._callback("onUpdate"))),
                                        this._cycle !== v && (e || this._gc || (this.vars.onRepeat && this._callback("onRepeat"))),
                                        s &&
                                            ((this._gc && !r) ||
                                                (t < 0 && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, e, r),
                                                n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), (this._active = !1)),
                                                !e && this.vars[s] && this._callback(s),
                                                0 === y && 1e-10 === this._rawPrevTime && 1e-10 !== d && (this._rawPrevTime = 0)));
                                } else g !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate"));
                            }),
                            (s.to = function (t, e, i) {
                                return new s(t, e, i);
                            }),
                            (s.from = function (t, e, i) {
                                return (i.runBackwards = !0), (i.immediateRender = 0 != i.immediateRender), new s(t, e, i);
                            }),
                            (s.fromTo = function (t, e, i, r) {
                                return (r.startAt = i), (r.immediateRender = 0 != r.immediateRender && 0 != i.immediateRender), new s(t, e, r);
                            }),
                            (s.staggerTo = s.allTo = function (t, e, a, u, h, d, p) {
                                u = u || 0;
                                var f,
                                    m,
                                    g,
                                    v,
                                    y = 0,
                                    _ = [],
                                    w = function () {
                                        a.onComplete && a.onComplete.apply(a.onCompleteScope || this, arguments), h.apply(p || a.callbackScope || this, d || c);
                                    },
                                    T = a.cycle,
                                    b = a.startAt && a.startAt.cycle;
                                for (l(t) || ("string" == typeof t && (t = i.selector(t) || t), o(t) && (t = r(t))), t = t || [], u < 0 && ((t = r(t)).reverse(), (u *= -1)), f = t.length - 1, g = 0; g <= f; g++) {
                                    m = {};
                                    for (v in a) m[v] = a[v];
                                    if ((T && (n(m, t, g), null != m.duration && ((e = m.duration), delete m.duration)), b)) {
                                        b = m.startAt = {};
                                        for (v in a.startAt) b[v] = a.startAt[v];
                                        n(m.startAt, t, g);
                                    }
                                    (m.delay = y + (m.delay || 0)), g === f && h && (m.onComplete = w), (_[g] = new s(t[g], e, m)), (y += u);
                                }
                                return _;
                            }),
                            (s.staggerFrom = s.allFrom = function (t, e, i, r, n, a, o) {
                                return (i.runBackwards = !0), (i.immediateRender = 0 != i.immediateRender), s.staggerTo(t, e, i, r, n, a, o);
                            }),
                            (s.staggerFromTo = s.allFromTo = function (t, e, i, r, n, a, o, l) {
                                return (r.startAt = i), (r.immediateRender = 0 != r.immediateRender && 0 != i.immediateRender), s.staggerTo(t, e, r, n, a, o, l);
                            }),
                            (s.delayedCall = function (t, e, i, r, n) {
                                return new s(e, 0, { delay: t, onComplete: e, onCompleteParams: i, callbackScope: r, onReverseComplete: e, onReverseCompleteParams: i, immediateRender: !1, useFrames: n, overwrite: 0 });
                            }),
                            (s.set = function (t, e) {
                                return new s(t, 0, e);
                            }),
                            (s.isTweening = function (t) {
                                return i.getTweensOf(t, !0).length > 0;
                            });
                        var h = function (t, e) {
                                for (var r = [], n = 0, s = t._first; s; ) s instanceof i ? (r[n++] = s) : (e && (r[n++] = s), (n = (r = r.concat(h(s, e))).length)), (s = s._next);
                                return r;
                            },
                            d = (s.getAllTweens = function (e) {
                                return h(t._rootTimeline, e).concat(h(t._rootFramesTimeline, e));
                            });
                        (s.killAll = function (t, i, r, n) {
                            null == i && (i = !0), null == r && (r = !0);
                            var s,
                                a,
                                o,
                                l = d(0 != n),
                                u = l.length,
                                c = i && r && n;
                            for (o = 0; o < u; o++) (a = l[o]), (c || a instanceof e || ((s = a.target === a.vars.onComplete) && r) || (i && !s)) && (t ? a.totalTime(a._reversed ? 0 : a.totalDuration()) : a._enabled(!1, !1));
                        }),
                            (s.killChildTweensOf = function (t, e) {
                                if (null != t) {
                                    var n,
                                        u,
                                        c,
                                        h,
                                        d,
                                        p = a.tweenLookup;
                                    if (("string" == typeof t && (t = i.selector(t) || t), o(t) && (t = r(t)), l(t))) for (h = t.length; --h > -1; ) s.killChildTweensOf(t[h], e);
                                    else {
                                        n = [];
                                        for (c in p) for (u = p[c].target.parentNode; u; ) u === t && (n = n.concat(p[c].tweens)), (u = u.parentNode);
                                        for (d = n.length, h = 0; h < d; h++) e && n[h].totalTime(n[h].totalDuration()), n[h]._enabled(!1, !1);
                                    }
                                }
                            });
                        var p = function (t, i, r, n) {
                            (i = !1 !== i), (r = !1 !== r);
                            for (var s, a, o = d((n = !1 !== n)), l = i && r && n, u = o.length; --u > -1; ) (a = o[u]), (l || a instanceof e || ((s = a.target === a.vars.onComplete) && r) || (i && !s)) && a.paused(t);
                        };
                        return (
                            (s.pauseAll = function (t, e, i) {
                                p(!0, t, e, i);
                            }),
                            (s.resumeAll = function (t, e, i) {
                                p(!1, t, e, i);
                            }),
                            (s.globalTimeScale = function (e) {
                                var r = t._rootTimeline,
                                    n = i.ticker.time;
                                return arguments.length
                                    ? ((e = e || 1e-10),
                                      (r._startTime = n - ((n - r._startTime) * r._timeScale) / e),
                                      (r = t._rootFramesTimeline),
                                      (n = i.ticker.frame),
                                      (r._startTime = n - ((n - r._startTime) * r._timeScale) / e),
                                      (r._timeScale = t._rootTimeline._timeScale = e),
                                      e)
                                    : r._timeScale;
                            }),
                            (u.progress = function (t, e) {
                                return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration();
                            }),
                            (u.totalProgress = function (t, e) {
                                return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration();
                            }),
                            (u.time = function (t, e) {
                                return arguments.length
                                    ? (this._dirty && this.totalDuration(),
                                      t > this._duration && (t = this._duration),
                                      this._yoyo && 0 != (1 & this._cycle) ? (t = this._duration - t + this._cycle * (this._duration + this._repeatDelay)) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)),
                                      this.totalTime(t, e))
                                    : this._time;
                            }),
                            (u.duration = function (e) {
                                return arguments.length ? t.prototype.duration.call(this, e) : this._duration;
                            }),
                            (u.totalDuration = function (t) {
                                return arguments.length
                                    ? -1 === this._repeat
                                        ? this
                                        : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1))
                                    : (this._dirty && ((this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), (this._dirty = !1)), this._totalDuration);
                            }),
                            (u.repeat = function (t) {
                                return arguments.length ? ((this._repeat = t), this._uncache(!0)) : this._repeat;
                            }),
                            (u.repeatDelay = function (t) {
                                return arguments.length ? ((this._repeatDelay = t), this._uncache(!0)) : this._repeatDelay;
                            }),
                            (u.yoyo = function (t) {
                                return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
                            }),
                            s
                        );
                    },
                    !0
                ),
                    n._gsDefine(
                        "TimelineLite",
                        ["core.Animation", "core.SimpleTimeline", "TweenLite"],
                        function (t, e, i) {
                            var r = function (t) {
                                    e.call(this, t),
                                        (this._labels = {}),
                                        (this.autoRemoveChildren = !0 === this.vars.autoRemoveChildren),
                                        (this.smoothChildTiming = !0 === this.vars.smoothChildTiming),
                                        (this._sortChildren = !0),
                                        (this._onUpdate = this.vars.onUpdate);
                                    var i,
                                        r,
                                        n = this.vars;
                                    for (r in n) (i = n[r]), l(i) && -1 !== i.join("").indexOf("{self}") && (n[r] = this._swapSelfInParams(i));
                                    l(n.tweens) && this.add(n.tweens, 0, n.align, n.stagger);
                                },
                                s = i._internals,
                                a = (r._internals = {}),
                                o = s.isSelector,
                                l = s.isArray,
                                u = s.lazyTweens,
                                c = s.lazyRender,
                                h = n._gsDefine.globals,
                                d = function (t) {
                                    var e,
                                        i = {};
                                    for (e in t) i[e] = t[e];
                                    return i;
                                },
                                p = function (t, e, i) {
                                    var r,
                                        n,
                                        s = t.cycle;
                                    for (r in s) (n = s[r]), (t[r] = "function" == typeof n ? n(i, e[i]) : n[i % n.length]);
                                    delete t.cycle;
                                },
                                f = (a.pauseCallback = function () {}),
                                m = function (t) {
                                    var e,
                                        i = [],
                                        r = t.length;
                                    for (e = 0; e !== r; i.push(t[e++]));
                                    return i;
                                },
                                g = (r.prototype = new e());
                            return (
                                (r.version = "1.20.2"),
                                (g.constructor = r),
                                (g.kill()._gc = g._forcingPlayhead = g._hasPause = !1),
                                (g.to = function (t, e, r, n) {
                                    var s = (r.repeat && h.TweenMax) || i;
                                    return e ? this.add(new s(t, e, r), n) : this.set(t, r, n);
                                }),
                                (g.from = function (t, e, r, n) {
                                    return this.add(((r.repeat && h.TweenMax) || i).from(t, e, r), n);
                                }),
                                (g.fromTo = function (t, e, r, n, s) {
                                    var a = (n.repeat && h.TweenMax) || i;
                                    return e ? this.add(a.fromTo(t, e, r, n), s) : this.set(t, n, s);
                                }),
                                (g.staggerTo = function (t, e, n, s, a, l, u, c) {
                                    var h,
                                        f,
                                        g = new r({ onComplete: l, onCompleteParams: u, callbackScope: c, smoothChildTiming: this.smoothChildTiming }),
                                        v = n.cycle;
                                    for ("string" == typeof t && (t = i.selector(t) || t), o((t = t || [])) && (t = m(t)), (s = s || 0) < 0 && ((t = m(t)).reverse(), (s *= -1)), f = 0; f < t.length; f++)
                                        (h = d(n)).startAt && ((h.startAt = d(h.startAt)), h.startAt.cycle && p(h.startAt, t, f)), v && (p(h, t, f), null != h.duration && ((e = h.duration), delete h.duration)), g.to(t[f], e, h, f * s);
                                    return this.add(g, a);
                                }),
                                (g.staggerFrom = function (t, e, i, r, n, s, a, o) {
                                    return (i.immediateRender = 0 != i.immediateRender), (i.runBackwards = !0), this.staggerTo(t, e, i, r, n, s, a, o);
                                }),
                                (g.staggerFromTo = function (t, e, i, r, n, s, a, o, l) {
                                    return (r.startAt = i), (r.immediateRender = 0 != r.immediateRender && 0 != i.immediateRender), this.staggerTo(t, e, r, n, s, a, o, l);
                                }),
                                (g.call = function (t, e, r, n) {
                                    return this.add(i.delayedCall(0, t, e, r), n);
                                }),
                                (g.set = function (t, e, r) {
                                    return (r = this._parseTimeOrLabel(r, 0, !0)), null == e.immediateRender && (e.immediateRender = r === this._time && !this._paused), this.add(new i(t, 0, e), r);
                                }),
                                (r.exportRoot = function (t, e) {
                                    null == (t = t || {}).smoothChildTiming && (t.smoothChildTiming = !0);
                                    var n,
                                        s,
                                        a = new r(t),
                                        o = a._timeline;
                                    for (null == e && (e = !0), o._remove(a, !0), a._startTime = 0, a._rawPrevTime = a._time = a._totalTime = o._time, n = o._first; n; )
                                        (s = n._next), (e && n instanceof i && n.target === n.vars.onComplete) || a.add(n, n._startTime - n._delay), (n = s);
                                    return o.add(a, 0), a;
                                }),
                                (g.add = function (n, s, a, o) {
                                    var u, c, h, d, p, f;
                                    if (("number" != typeof s && (s = this._parseTimeOrLabel(s, 0, !0, n)), !(n instanceof t))) {
                                        if (n instanceof Array || (n && n.push && l(n))) {
                                            for (a = a || "normal", o = o || 0, u = s, c = n.length, h = 0; h < c; h++)
                                                l((d = n[h])) && (d = new r({ tweens: d })),
                                                    this.add(d, u),
                                                    "string" != typeof d && "function" != typeof d && ("sequence" === a ? (u = d._startTime + d.totalDuration() / d._timeScale) : "start" === a && (d._startTime -= d.delay())),
                                                    (u += o);
                                            return this._uncache(!0);
                                        }
                                        if ("string" == typeof n) return this.addLabel(n, s);
                                        if ("function" != typeof n) throw "Cannot add " + n + " into the timeline; it is not a tween, timeline, function, or string.";
                                        n = i.delayedCall(0, n);
                                    }
                                    if (
                                        (e.prototype.add.call(this, n, s),
                                        n._time && n.render((this.rawTime() - n._startTime) * n._timeScale, !1, !1),
                                        (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                                    )
                                        for (f = (p = this).rawTime() > n._startTime; p._timeline; ) f && p._timeline.smoothChildTiming ? p.totalTime(p._totalTime, !0) : p._gc && p._enabled(!0, !1), (p = p._timeline);
                                    return this;
                                }),
                                (g.remove = function (e) {
                                    if (e instanceof t) {
                                        this._remove(e, !1);
                                        var i = (e._timeline = e.vars.useFrames ? t._rootFramesTimeline : t._rootTimeline);
                                        return (e._startTime = (e._paused ? e._pauseTime : i._time) - (e._reversed ? e.totalDuration() - e._totalTime : e._totalTime) / e._timeScale), this;
                                    }
                                    if (e instanceof Array || (e && e.push && l(e))) {
                                        for (var r = e.length; --r > -1; ) this.remove(e[r]);
                                        return this;
                                    }
                                    return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e);
                                }),
                                (g._remove = function (t, i) {
                                    e.prototype._remove.call(this, t, i);
                                    return (
                                        this._last ? this._time > this.duration() && ((this._time = this._duration), (this._totalTime = this._totalDuration)) : (this._time = this._totalTime = this._duration = this._totalDuration = 0), this
                                    );
                                }),
                                (g.append = function (t, e) {
                                    return this.add(t, this._parseTimeOrLabel(null, e, !0, t));
                                }),
                                (g.insert = g.insertMultiple = function (t, e, i, r) {
                                    return this.add(t, e || 0, i, r);
                                }),
                                (g.appendMultiple = function (t, e, i, r) {
                                    return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, r);
                                }),
                                (g.addLabel = function (t, e) {
                                    return (this._labels[t] = this._parseTimeOrLabel(e)), this;
                                }),
                                (g.addPause = function (t, e, r, n) {
                                    var s = i.delayedCall(0, f, r, n || this);
                                    return (s.vars.onComplete = s.vars.onReverseComplete = e), (s.data = "isPause"), (this._hasPause = !0), this.add(s, t);
                                }),
                                (g.removeLabel = function (t) {
                                    return delete this._labels[t], this;
                                }),
                                (g.getLabelTime = function (t) {
                                    return null != this._labels[t] ? this._labels[t] : -1;
                                }),
                                (g._parseTimeOrLabel = function (e, i, r, n) {
                                    var s, a;
                                    if (n instanceof t && n.timeline === this) this.remove(n);
                                    else if (n && (n instanceof Array || (n.push && l(n)))) for (a = n.length; --a > -1; ) n[a] instanceof t && n[a].timeline === this && this.remove(n[a]);
                                    if (((s = this.duration() > 99999999999 ? this.recent().endTime(!1) : this._duration), "string" == typeof i))
                                        return this._parseTimeOrLabel(i, r && "number" == typeof e && null == this._labels[i] ? e - s : 0, r);
                                    if (((i = i || 0), "string" != typeof e || (!isNaN(e) && null == this._labels[e]))) null == e && (e = s);
                                    else {
                                        if (-1 === (a = e.indexOf("="))) return null == this._labels[e] ? (r ? (this._labels[e] = s + i) : i) : this._labels[e] + i;
                                        (i = parseInt(e.charAt(a - 1) + "1", 10) * Number(e.substr(a + 1))), (e = a > 1 ? this._parseTimeOrLabel(e.substr(0, a - 1), 0, r) : s);
                                    }
                                    return Number(e) + i;
                                }),
                                (g.seek = function (t, e) {
                                    return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), !1 !== e);
                                }),
                                (g.stop = function () {
                                    return this.paused(!0);
                                }),
                                (g.gotoAndPlay = function (t, e) {
                                    return this.play(t, e);
                                }),
                                (g.gotoAndStop = function (t, e) {
                                    return this.pause(t, e);
                                }),
                                (g.render = function (t, e, i) {
                                    this._gc && this._enabled(!0, !1);
                                    var r,
                                        n,
                                        s,
                                        a,
                                        o,
                                        l,
                                        h,
                                        d = this._dirty ? this.totalDuration() : this._totalDuration,
                                        p = this._time,
                                        f = this._startTime,
                                        m = this._timeScale,
                                        g = this._paused;
                                    if (t >= d - 1e-7 && t >= 0)
                                        (this._totalTime = this._time = d),
                                            this._reversed ||
                                                this._hasPausedChild() ||
                                                ((n = !0),
                                                (a = "onComplete"),
                                                (o = !!this._timeline.autoRemoveChildren),
                                                0 === this._duration &&
                                                    ((t <= 0 && t >= -1e-7) || this._rawPrevTime < 0 || 1e-10 === this._rawPrevTime) &&
                                                    this._rawPrevTime !== t &&
                                                    this._first &&
                                                    ((o = !0), this._rawPrevTime > 1e-10 && (a = "onReverseComplete"))),
                                            (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : 1e-10),
                                            (t = d + 1e-4);
                                    else if (t < 1e-7)
                                        if (
                                            ((this._totalTime = this._time = 0),
                                            (0 !== p || (0 === this._duration && 1e-10 !== this._rawPrevTime && (this._rawPrevTime > 0 || (t < 0 && this._rawPrevTime >= 0)))) && ((a = "onReverseComplete"), (n = this._reversed)),
                                            t < 0)
                                        )
                                            (this._active = !1), this._timeline.autoRemoveChildren && this._reversed ? ((o = n = !0), (a = "onReverseComplete")) : this._rawPrevTime >= 0 && this._first && (o = !0), (this._rawPrevTime = t);
                                        else {
                                            if (((this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : 1e-10), 0 === t && n)) for (r = this._first; r && 0 === r._startTime; ) r._duration || (n = !1), (r = r._next);
                                            (t = 0), this._initted || (o = !0);
                                        }
                                    else {
                                        if (this._hasPause && !this._forcingPlayhead && !e) {
                                            if (t >= p) for (r = this._first; r && r._startTime <= t && !l; ) r._duration || "isPause" !== r.data || r.ratio || (0 === r._startTime && 0 === this._rawPrevTime) || (l = r), (r = r._next);
                                            else for (r = this._last; r && r._startTime >= t && !l; ) r._duration || ("isPause" === r.data && r._rawPrevTime > 0 && (l = r)), (r = r._prev);
                                            l && ((this._time = t = l._startTime), (this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay)));
                                        }
                                        this._totalTime = this._time = this._rawPrevTime = t;
                                    }
                                    if ((this._time !== p && this._first) || i || o || l) {
                                        if (
                                            (this._initted || (this._initted = !0),
                                            this._active || (!this._paused && this._time !== p && t > 0 && (this._active = !0)),
                                            0 === p && this.vars.onStart && ((0 === this._time && this._duration) || e || this._callback("onStart")),
                                            (h = this._time) >= p)
                                        )
                                            for (r = this._first; r && ((s = r._next), h === this._time && (!this._paused || g)); )
                                                (r._active || (r._startTime <= h && !r._paused && !r._gc)) &&
                                                    (l === r && this.pause(),
                                                    r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)),
                                                    (r = s);
                                        else
                                            for (r = this._last; r && ((s = r._prev), h === this._time && (!this._paused || g)); ) {
                                                if (r._active || (r._startTime <= p && !r._paused && !r._gc)) {
                                                    if (l === r) {
                                                        for (l = r._prev; l && l.endTime() > this._time; )
                                                            l.render(l._reversed ? l.totalDuration() - (t - l._startTime) * l._timeScale : (t - l._startTime) * l._timeScale, e, i), (l = l._prev);
                                                        (l = null), this.pause();
                                                    }
                                                    r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i);
                                                }
                                                r = s;
                                            }
                                        this._onUpdate && (e || (u.length && c(), this._callback("onUpdate"))),
                                            a &&
                                                (this._gc ||
                                                    (f !== this._startTime && m === this._timeScale) ||
                                                    ((0 === this._time || d >= this.totalDuration()) &&
                                                        (n && (u.length && c(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), (this._active = !1)), !e && this.vars[a] && this._callback(a))));
                                    }
                                }),
                                (g._hasPausedChild = function () {
                                    for (var t = this._first; t; ) {
                                        if (t._paused || (t instanceof r && t._hasPausedChild())) return !0;
                                        t = t._next;
                                    }
                                    return !1;
                                }),
                                (g.getChildren = function (t, e, r, n) {
                                    n = n || -9999999999;
                                    for (var s = [], a = this._first, o = 0; a; )
                                        a._startTime < n || (a instanceof i ? !1 !== e && (s[o++] = a) : (!1 !== r && (s[o++] = a), !1 !== t && (o = (s = s.concat(a.getChildren(!0, e, r))).length))), (a = a._next);
                                    return s;
                                }),
                                (g.getTweensOf = function (t, e) {
                                    var r,
                                        n,
                                        s = this._gc,
                                        a = [],
                                        o = 0;
                                    for (s && this._enabled(!0, !0), n = (r = i.getTweensOf(t)).length; --n > -1; ) (r[n].timeline === this || (e && this._contains(r[n]))) && (a[o++] = r[n]);
                                    return s && this._enabled(!1, !0), a;
                                }),
                                (g.recent = function () {
                                    return this._recent;
                                }),
                                (g._contains = function (t) {
                                    for (var e = t.timeline; e; ) {
                                        if (e === this) return !0;
                                        e = e.timeline;
                                    }
                                    return !1;
                                }),
                                (g.shiftChildren = function (t, e, i) {
                                    i = i || 0;
                                    for (var r, n = this._first, s = this._labels; n; ) n._startTime >= i && (n._startTime += t), (n = n._next);
                                    if (e) for (r in s) s[r] >= i && (s[r] += t);
                                    return this._uncache(!0);
                                }),
                                (g._kill = function (t, e) {
                                    if (!t && !e) return this._enabled(!1, !1);
                                    for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), r = i.length, n = !1; --r > -1; ) i[r]._kill(t, e) && (n = !0);
                                    return n;
                                }),
                                (g.clear = function (t) {
                                    var e = this.getChildren(!1, !0, !0),
                                        i = e.length;
                                    for (this._time = this._totalTime = 0; --i > -1; ) e[i]._enabled(!1, !1);
                                    return !1 !== t && (this._labels = {}), this._uncache(!0);
                                }),
                                (g.invalidate = function () {
                                    for (var e = this._first; e; ) e.invalidate(), (e = e._next);
                                    return t.prototype.invalidate.call(this);
                                }),
                                (g._enabled = function (t, i) {
                                    if (t === this._gc) for (var r = this._first; r; ) r._enabled(t, !0), (r = r._next);
                                    return e.prototype._enabled.call(this, t, i);
                                }),
                                (g.totalTime = function (e, i, r) {
                                    this._forcingPlayhead = !0;
                                    var n = t.prototype.totalTime.apply(this, arguments);
                                    return (this._forcingPlayhead = !1), n;
                                }),
                                (g.duration = function (t) {
                                    return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration);
                                }),
                                (g.totalDuration = function (t) {
                                    if (!arguments.length) {
                                        if (this._dirty) {
                                            for (var e, i, r = 0, n = this._last, s = 999999999999; n; )
                                                (e = n._prev),
                                                    n._dirty && n.totalDuration(),
                                                    n._startTime > s && this._sortChildren && !n._paused ? this.add(n, n._startTime - n._delay) : (s = n._startTime),
                                                    n._startTime < 0 &&
                                                        !n._paused &&
                                                        ((r -= n._startTime), this._timeline.smoothChildTiming && (this._startTime += n._startTime / this._timeScale), this.shiftChildren(-n._startTime, !1, -9999999999), (s = 0)),
                                                    (i = n._startTime + n._totalDuration / n._timeScale) > r && (r = i),
                                                    (n = e);
                                            (this._duration = this._totalDuration = r), (this._dirty = !1);
                                        }
                                        return this._totalDuration;
                                    }
                                    return t && this.totalDuration() ? this.timeScale(this._totalDuration / t) : this;
                                }),
                                (g.paused = function (e) {
                                    if (!e) for (var i = this._first, r = this._time; i; ) i._startTime === r && "isPause" === i.data && (i._rawPrevTime = 0), (i = i._next);
                                    return t.prototype.paused.apply(this, arguments);
                                }),
                                (g.usesFrames = function () {
                                    for (var e = this._timeline; e._timeline; ) e = e._timeline;
                                    return e === t._rootFramesTimeline;
                                }),
                                (g.rawTime = function (t) {
                                    return t && (this._paused || (this._repeat && this.time() > 0 && this.totalProgress() < 1))
                                        ? this._totalTime % (this._duration + this._repeatDelay)
                                        : this._paused
                                        ? this._totalTime
                                        : (this._timeline.rawTime(t) - this._startTime) * this._timeScale;
                                }),
                                r
                            );
                        },
                        !0
                    ),
                    n._gsDefine(
                        "TimelineMax",
                        ["TimelineLite", "TweenLite", "easing.Ease"],
                        function (t, e, i) {
                            var r = function (e) {
                                    t.call(this, e), (this._repeat = this.vars.repeat || 0), (this._repeatDelay = this.vars.repeatDelay || 0), (this._cycle = 0), (this._yoyo = !0 === this.vars.yoyo), (this._dirty = !0);
                                },
                                s = e._internals,
                                a = s.lazyTweens,
                                o = s.lazyRender,
                                l = n._gsDefine.globals,
                                u = new i(null, null, 1, 0),
                                c = (r.prototype = new t());
                            return (
                                (c.constructor = r),
                                (c.kill()._gc = !1),
                                (r.version = "1.20.2"),
                                (c.invalidate = function () {
                                    return (this._yoyo = !0 === this.vars.yoyo), (this._repeat = this.vars.repeat || 0), (this._repeatDelay = this.vars.repeatDelay || 0), this._uncache(!0), t.prototype.invalidate.call(this);
                                }),
                                (c.addCallback = function (t, i, r, n) {
                                    return this.add(e.delayedCall(0, t, r, n), i);
                                }),
                                (c.removeCallback = function (t, e) {
                                    if (t)
                                        if (null == e) this._kill(null, t);
                                        else for (var i = this.getTweensOf(t, !1), r = i.length, n = this._parseTimeOrLabel(e); --r > -1; ) i[r]._startTime === n && i[r]._enabled(!1, !1);
                                    return this;
                                }),
                                (c.removePause = function (e) {
                                    return this.removeCallback(t._internals.pauseCallback, e);
                                }),
                                (c.tweenTo = function (t, i) {
                                    i = i || {};
                                    var r,
                                        n,
                                        s,
                                        a = { ease: u, useFrames: this.usesFrames(), immediateRender: !1 },
                                        o = (i.repeat && l.TweenMax) || e;
                                    for (n in i) a[n] = i[n];
                                    return (
                                        (a.time = this._parseTimeOrLabel(t)),
                                        (r = Math.abs(Number(a.time) - this._time) / this._timeScale || 0.001),
                                        (s = new o(this, r, a)),
                                        (a.onStart = function () {
                                            s.target.paused(!0),
                                                s.vars.time !== s.target.time() && r === s.duration() && s.duration(Math.abs(s.vars.time - s.target.time()) / s.target._timeScale),
                                                i.onStart && i.onStart.apply(i.onStartScope || i.callbackScope || s, i.onStartParams || []);
                                        }),
                                        s
                                    );
                                }),
                                (c.tweenFromTo = function (t, e, i) {
                                    (i = i || {}), (t = this._parseTimeOrLabel(t)), (i.startAt = { onComplete: this.seek, onCompleteParams: [t], callbackScope: this }), (i.immediateRender = !1 !== i.immediateRender);
                                    var r = this.tweenTo(e, i);
                                    return r.duration(Math.abs(r.vars.time - t) / this._timeScale || 0.001);
                                }),
                                (c.render = function (t, e, i) {
                                    this._gc && this._enabled(!0, !1);
                                    var r,
                                        n,
                                        s,
                                        l,
                                        u,
                                        c,
                                        h,
                                        d,
                                        p = this._dirty ? this.totalDuration() : this._totalDuration,
                                        f = this._duration,
                                        m = this._time,
                                        g = this._totalTime,
                                        v = this._startTime,
                                        y = this._timeScale,
                                        _ = this._rawPrevTime,
                                        w = this._paused,
                                        T = this._cycle;
                                    if (t >= p - 1e-7 && t >= 0)
                                        this._locked || ((this._totalTime = p), (this._cycle = this._repeat)),
                                            this._reversed ||
                                                this._hasPausedChild() ||
                                                ((n = !0),
                                                (l = "onComplete"),
                                                (u = !!this._timeline.autoRemoveChildren),
                                                0 === this._duration && ((t <= 0 && t >= -1e-7) || _ < 0 || 1e-10 === _) && _ !== t && this._first && ((u = !0), _ > 1e-10 && (l = "onReverseComplete"))),
                                            (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : 1e-10),
                                            this._yoyo && 0 != (1 & this._cycle) ? (this._time = t = 0) : ((this._time = f), (t = f + 1e-4));
                                    else if (t < 1e-7)
                                        if (
                                            (this._locked || (this._totalTime = this._cycle = 0),
                                            (this._time = 0),
                                            (0 !== m || (0 === f && 1e-10 !== _ && (_ > 0 || (t < 0 && _ >= 0)) && !this._locked)) && ((l = "onReverseComplete"), (n = this._reversed)),
                                            t < 0)
                                        )
                                            (this._active = !1), this._timeline.autoRemoveChildren && this._reversed ? ((u = n = !0), (l = "onReverseComplete")) : _ >= 0 && this._first && (u = !0), (this._rawPrevTime = t);
                                        else {
                                            if (((this._rawPrevTime = f || !e || t || this._rawPrevTime === t ? t : 1e-10), 0 === t && n)) for (r = this._first; r && 0 === r._startTime; ) r._duration || (n = !1), (r = r._next);
                                            (t = 0), this._initted || (u = !0);
                                        }
                                    else if (
                                        (0 === f && _ < 0 && (u = !0),
                                        (this._time = this._rawPrevTime = t),
                                        this._locked ||
                                            ((this._totalTime = t),
                                            0 !== this._repeat &&
                                                ((c = f + this._repeatDelay),
                                                (this._cycle = (this._totalTime / c) >> 0),
                                                0 !== this._cycle && this._cycle === this._totalTime / c && g <= t && this._cycle--,
                                                (this._time = this._totalTime - this._cycle * c),
                                                this._yoyo && 0 != (1 & this._cycle) && (this._time = f - this._time),
                                                this._time > f ? ((this._time = f), (t = f + 1e-4)) : this._time < 0 ? (this._time = t = 0) : (t = this._time))),
                                        this._hasPause && !this._forcingPlayhead && !e)
                                    ) {
                                        if ((t = this._time) >= m || (this._repeat && T !== this._cycle))
                                            for (r = this._first; r && r._startTime <= t && !h; ) r._duration || "isPause" !== r.data || r.ratio || (0 === r._startTime && 0 === this._rawPrevTime) || (h = r), (r = r._next);
                                        else for (r = this._last; r && r._startTime >= t && !h; ) r._duration || ("isPause" === r.data && r._rawPrevTime > 0 && (h = r)), (r = r._prev);
                                        h && h._startTime < f && ((this._time = t = h._startTime), (this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay)));
                                    }
                                    if (this._cycle !== T && !this._locked) {
                                        var b = this._yoyo && 0 != (1 & T),
                                            x = b === (this._yoyo && 0 != (1 & this._cycle)),
                                            S = this._totalTime,
                                            C = this._cycle,
                                            P = this._rawPrevTime,
                                            E = this._time;
                                        if (
                                            ((this._totalTime = T * f),
                                            this._cycle < T ? (b = !b) : (this._totalTime += f),
                                            (this._time = m),
                                            (this._rawPrevTime = 0 === f ? _ - 1e-4 : _),
                                            (this._cycle = T),
                                            (this._locked = !0),
                                            (m = b ? 0 : f),
                                            this.render(m, e, 0 === f),
                                            e || this._gc || (this.vars.onRepeat && ((this._cycle = C), (this._locked = !1), this._callback("onRepeat"))),
                                            m !== this._time)
                                        )
                                            return;
                                        if ((x && ((this._cycle = T), (this._locked = !0), (m = b ? f + 1e-4 : -1e-4), this.render(m, !0, !1)), (this._locked = !1), this._paused && !w)) return;
                                        (this._time = E), (this._totalTime = S), (this._cycle = C), (this._rawPrevTime = P);
                                    }
                                    if ((this._time !== m && this._first) || i || u || h) {
                                        if (
                                            (this._initted || (this._initted = !0),
                                            this._active || (!this._paused && this._totalTime !== g && t > 0 && (this._active = !0)),
                                            0 === g && this.vars.onStart && ((0 === this._totalTime && this._totalDuration) || e || this._callback("onStart")),
                                            (d = this._time) >= m)
                                        )
                                            for (r = this._first; r && ((s = r._next), d === this._time && (!this._paused || w)); )
                                                (r._active || (r._startTime <= this._time && !r._paused && !r._gc)) &&
                                                    (h === r && this.pause(),
                                                    r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)),
                                                    (r = s);
                                        else
                                            for (r = this._last; r && ((s = r._prev), d === this._time && (!this._paused || w)); ) {
                                                if (r._active || (r._startTime <= m && !r._paused && !r._gc)) {
                                                    if (h === r) {
                                                        for (h = r._prev; h && h.endTime() > this._time; )
                                                            h.render(h._reversed ? h.totalDuration() - (t - h._startTime) * h._timeScale : (t - h._startTime) * h._timeScale, e, i), (h = h._prev);
                                                        (h = null), this.pause();
                                                    }
                                                    r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i);
                                                }
                                                r = s;
                                            }
                                        this._onUpdate && (e || (a.length && o(), this._callback("onUpdate"))),
                                            l &&
                                                (this._locked ||
                                                    this._gc ||
                                                    (v !== this._startTime && y === this._timeScale) ||
                                                    ((0 === this._time || p >= this.totalDuration()) &&
                                                        (n && (a.length && o(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), (this._active = !1)), !e && this.vars[l] && this._callback(l))));
                                    } else g !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate"));
                                }),
                                (c.getActive = function (t, e, i) {
                                    null == t && (t = !0), null == e && (e = !0), null == i && (i = !1);
                                    var r,
                                        n,
                                        s = [],
                                        a = this.getChildren(t, e, i),
                                        o = 0,
                                        l = a.length;
                                    for (r = 0; r < l; r++) (n = a[r]).isActive() && (s[o++] = n);
                                    return s;
                                }),
                                (c.getLabelAfter = function (t) {
                                    t || (0 !== t && (t = this._time));
                                    var e,
                                        i = this.getLabelsArray(),
                                        r = i.length;
                                    for (e = 0; e < r; e++) if (i[e].time > t) return i[e].name;
                                    return null;
                                }),
                                (c.getLabelBefore = function (t) {
                                    null == t && (t = this._time);
                                    for (var e = this.getLabelsArray(), i = e.length; --i > -1; ) if (e[i].time < t) return e[i].name;
                                    return null;
                                }),
                                (c.getLabelsArray = function () {
                                    var t,
                                        e = [],
                                        i = 0;
                                    for (t in this._labels) e[i++] = { time: this._labels[t], name: t };
                                    return (
                                        e.sort(function (t, e) {
                                            return t.time - e.time;
                                        }),
                                        e
                                    );
                                }),
                                (c.invalidate = function () {
                                    return (this._locked = !1), t.prototype.invalidate.call(this);
                                }),
                                (c.progress = function (t, e) {
                                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration() || 0;
                                }),
                                (c.totalProgress = function (t, e) {
                                    return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration() || 0;
                                }),
                                (c.totalDuration = function (e) {
                                    return arguments.length
                                        ? -1 !== this._repeat && e
                                            ? this.timeScale(this.totalDuration() / e)
                                            : this
                                        : (this._dirty && (t.prototype.totalDuration.call(this), (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat)),
                                          this._totalDuration);
                                }),
                                (c.time = function (t, e) {
                                    return arguments.length
                                        ? (this._dirty && this.totalDuration(),
                                          t > this._duration && (t = this._duration),
                                          this._yoyo && 0 != (1 & this._cycle)
                                              ? (t = this._duration - t + this._cycle * (this._duration + this._repeatDelay))
                                              : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)),
                                          this.totalTime(t, e))
                                        : this._time;
                                }),
                                (c.repeat = function (t) {
                                    return arguments.length ? ((this._repeat = t), this._uncache(!0)) : this._repeat;
                                }),
                                (c.repeatDelay = function (t) {
                                    return arguments.length ? ((this._repeatDelay = t), this._uncache(!0)) : this._repeatDelay;
                                }),
                                (c.yoyo = function (t) {
                                    return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
                                }),
                                (c.currentLabel = function (t) {
                                    return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8);
                                }),
                                r
                            );
                        },
                        !0
                    ),
                    (function () {
                        var t = 180 / Math.PI,
                            e = [],
                            i = [],
                            r = [],
                            s = {},
                            a = n._gsDefine.globals,
                            o = function (t, e, i, r) {
                                i === r && (i = r - (r - e) / 1e6), t === e && (e = t + (i - t) / 1e6), (this.a = t), (this.b = e), (this.c = i), (this.d = r), (this.da = r - t), (this.ca = i - t), (this.ba = e - t);
                            },
                            l = function (t, e, i, r) {
                                var n = { a: t },
                                    s = {},
                                    a = {},
                                    o = { c: r },
                                    l = (t + e) / 2,
                                    u = (e + i) / 2,
                                    c = (i + r) / 2,
                                    h = (l + u) / 2,
                                    d = (u + c) / 2,
                                    p = (d - h) / 8;
                                return (n.b = l + (t - l) / 4), (s.b = h + p), (n.c = s.a = (n.b + s.b) / 2), (s.c = a.a = (h + d) / 2), (a.b = d - p), (o.b = c + (r - c) / 4), (a.c = o.a = (a.b + o.b) / 2), [n, s, a, o];
                            },
                            u = function (t, n, s, a, o) {
                                var u,
                                    c,
                                    h,
                                    d,
                                    p,
                                    f,
                                    m,
                                    g,
                                    v,
                                    y,
                                    _,
                                    w,
                                    T,
                                    b = t.length - 1,
                                    x = 0,
                                    S = t[0].a;
                                for (u = 0; u < b; u++)
                                    (c = (p = t[x]).a),
                                        (h = p.d),
                                        (d = t[x + 1].d),
                                        o
                                            ? ((_ = e[u]),
                                              (T = (((w = i[u]) + _) * n * 0.25) / (a ? 0.5 : r[u] || 0.5)),
                                              (g = h - ((f = h - (h - c) * (a ? 0.5 * n : 0 !== _ ? T / _ : 0)) + ((((m = h + (d - h) * (a ? 0.5 * n : 0 !== w ? T / w : 0)) - f) * ((3 * _) / (_ + w) + 0.5)) / 4 || 0))))
                                            : (g = h - ((f = h - (h - c) * n * 0.5) + (m = h + (d - h) * n * 0.5)) / 2),
                                        (f += g),
                                        (m += g),
                                        (p.c = v = f),
                                        (p.b = 0 !== u ? S : (S = p.a + 0.6 * (p.c - p.a))),
                                        (p.da = h - c),
                                        (p.ca = v - c),
                                        (p.ba = S - c),
                                        s ? ((y = l(c, S, v, h)), t.splice(x, 1, y[0], y[1], y[2], y[3]), (x += 4)) : x++,
                                        (S = m);
                                ((p = t[x]).b = S), (p.c = S + 0.4 * (p.d - S)), (p.da = p.d - p.a), (p.ca = p.c - p.a), (p.ba = S - p.a), s && ((y = l(p.a, S, p.c, p.d)), t.splice(x, 1, y[0], y[1], y[2], y[3]));
                            },
                            c = function (t, r, n, s) {
                                var a,
                                    l,
                                    u,
                                    c,
                                    h,
                                    d,
                                    p = [];
                                if (s) for (l = (t = [s].concat(t)).length; --l > -1; ) "string" == typeof (d = t[l][r]) && "=" === d.charAt(1) && (t[l][r] = s[r] + Number(d.charAt(0) + d.substr(2)));
                                if ((a = t.length - 2) < 0) return (p[0] = new o(t[0][r], 0, 0, t[0][r])), p;
                                for (l = 0; l < a; l++) (u = t[l][r]), (c = t[l + 1][r]), (p[l] = new o(u, 0, 0, c)), n && ((h = t[l + 2][r]), (e[l] = (e[l] || 0) + (c - u) * (c - u)), (i[l] = (i[l] || 0) + (h - c) * (h - c)));
                                return (p[l] = new o(t[l][r], 0, 0, t[l + 1][r])), p;
                            },
                            h = function (t, n, a, o, l, h) {
                                var d,
                                    p,
                                    f,
                                    m,
                                    g,
                                    v,
                                    y,
                                    _,
                                    w = {},
                                    T = [],
                                    b = h || t[0];
                                (l =
                                    "string" == typeof l
                                        ? "," + l + ","
                                        : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,"),
                                    null == n && (n = 1);
                                for (p in t[0]) T.push(p);
                                if (t.length > 1) {
                                    for (_ = t[t.length - 1], y = !0, d = T.length; --d > -1; )
                                        if (((p = T[d]), Math.abs(b[p] - _[p]) > 0.05)) {
                                            y = !1;
                                            break;
                                        }
                                    y && ((t = t.concat()), h && t.unshift(h), t.push(t[1]), (h = t[t.length - 3]));
                                }
                                for (e.length = i.length = r.length = 0, d = T.length; --d > -1; ) (p = T[d]), (s[p] = -1 !== l.indexOf("," + p + ",")), (w[p] = c(t, p, s[p], h));
                                for (d = e.length; --d > -1; ) (e[d] = Math.sqrt(e[d])), (i[d] = Math.sqrt(i[d]));
                                if (!o) {
                                    for (d = T.length; --d > -1; ) if (s[p]) for (v = (f = w[T[d]]).length - 1, m = 0; m < v; m++) (g = f[m + 1].da / i[m] + f[m].da / e[m] || 0), (r[m] = (r[m] || 0) + g * g);
                                    for (d = r.length; --d > -1; ) r[d] = Math.sqrt(r[d]);
                                }
                                for (d = T.length, m = a ? 4 : 1; --d > -1; ) (f = w[(p = T[d])]), u(f, n, a, o, s[p]), y && (f.splice(0, m), f.splice(f.length - m, m));
                                return w;
                            },
                            d = function (t, e, i) {
                                for (var r, n, s, a, o, l, u, c, h, d, p, f = 1 / i, m = t.length; --m > -1; )
                                    for (s = (d = t[m]).a, a = d.d - s, o = d.c - s, l = d.b - s, r = n = 0, c = 1; c <= i; c++)
                                        (r = n - (n = ((u = f * c) * u * a + 3 * (h = 1 - u) * (u * o + h * l)) * u)), (e[(p = m * i + c - 1)] = (e[p] || 0) + r * r);
                            },
                            p = n._gsDefine.plugin({
                                propName: "bezier",
                                priority: -1,
                                version: "1.3.8",
                                API: 2,
                                global: !0,
                                init: function (t, e, i) {
                                    (this._target = t), e instanceof Array && (e = { values: e }), (this._func = {}), (this._mod = {}), (this._props = []), (this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10));
                                    var r,
                                        n,
                                        s,
                                        a,
                                        l,
                                        u = e.values || [],
                                        c = {},
                                        p = u[0],
                                        f = e.autoRotate || i.vars.orientToBezier;
                                    this._autoRotate = f ? (f instanceof Array ? f : [["x", "y", "rotation", !0 === f ? 0 : Number(f) || 0]]) : null;
                                    for (r in p) this._props.push(r);
                                    for (s = this._props.length; --s > -1; )
                                        (r = this._props[s]),
                                            this._overwriteProps.push(r),
                                            (n = this._func[r] = "function" == typeof t[r]),
                                            (c[r] = n ? t[r.indexOf("set") || "function" != typeof t["get" + r.substr(3)] ? r : "get" + r.substr(3)]() : parseFloat(t[r])),
                                            l || (c[r] !== u[0][r] && (l = c));
                                    if (
                                        ((this._beziers =
                                            "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type
                                                ? h(u, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, l)
                                                : (function (t, e, i) {
                                                      var r,
                                                          n,
                                                          s,
                                                          a,
                                                          l,
                                                          u,
                                                          c,
                                                          h,
                                                          d,
                                                          p,
                                                          f,
                                                          m = {},
                                                          g = "cubic" === (e = e || "soft") ? 3 : 2,
                                                          v = "soft" === e,
                                                          y = [];
                                                      if ((v && i && (t = [i].concat(t)), null == t || t.length < g + 1)) throw "invalid Bezier data";
                                                      for (d in t[0]) y.push(d);
                                                      for (u = y.length; --u > -1; ) {
                                                          for (m[(d = y[u])] = l = [], p = 0, h = t.length, c = 0; c < h; c++)
                                                              (r = null == i ? t[c][d] : "string" == typeof (f = t[c][d]) && "=" === f.charAt(1) ? i[d] + Number(f.charAt(0) + f.substr(2)) : Number(f)),
                                                                  v && c > 1 && c < h - 1 && (l[p++] = (r + l[p - 2]) / 2),
                                                                  (l[p++] = r);
                                                          for (h = p - g + 1, p = 0, c = 0; c < h; c += g)
                                                              (r = l[c]), (n = l[c + 1]), (s = l[c + 2]), (a = 2 === g ? 0 : l[c + 3]), (l[p++] = f = 3 === g ? new o(r, n, s, a) : new o(r, (2 * n + r) / 3, (2 * n + s) / 3, s));
                                                          l.length = p;
                                                      }
                                                      return m;
                                                  })(u, e.type, c)),
                                        (this._segCount = this._beziers[r].length),
                                        this._timeRes)
                                    ) {
                                        var m = (function (t, e) {
                                            var i,
                                                r,
                                                n,
                                                s,
                                                a = [],
                                                o = [],
                                                l = 0,
                                                u = 0,
                                                c = (e = e >> 0 || 6) - 1,
                                                h = [],
                                                p = [];
                                            for (i in t) d(t[i], a, e);
                                            for (n = a.length, r = 0; r < n; r++) (l += Math.sqrt(a[r])), (p[(s = r % e)] = l), s === c && ((u += l), (h[(s = (r / e) >> 0)] = p), (o[s] = u), (l = 0), (p = []));
                                            return { length: u, lengths: o, segments: h };
                                        })(this._beziers, this._timeRes);
                                        (this._length = m.length),
                                            (this._lengths = m.lengths),
                                            (this._segments = m.segments),
                                            (this._l1 = this._li = this._s1 = this._si = 0),
                                            (this._l2 = this._lengths[0]),
                                            (this._curSeg = this._segments[0]),
                                            (this._s2 = this._curSeg[0]),
                                            (this._prec = 1 / this._curSeg.length);
                                    }
                                    if ((f = this._autoRotate))
                                        for (this._initialRotations = [], f[0] instanceof Array || (this._autoRotate = f = [f]), s = f.length; --s > -1; ) {
                                            for (a = 0; a < 3; a++) (r = f[s][a]), (this._func[r] = "function" == typeof t[r] && t[r.indexOf("set") || "function" != typeof t["get" + r.substr(3)] ? r : "get" + r.substr(3)]);
                                            (r = f[s][2]), (this._initialRotations[s] = (this._func[r] ? this._func[r].call(this._target) : this._target[r]) || 0), this._overwriteProps.push(r);
                                        }
                                    return (this._startRatio = i.vars.runBackwards ? 1 : 0), !0;
                                },
                                set: function (e) {
                                    var i,
                                        r,
                                        n,
                                        s,
                                        a,
                                        o,
                                        l,
                                        u,
                                        c,
                                        h,
                                        d = this._segCount,
                                        p = this._func,
                                        f = this._target,
                                        m = e !== this._startRatio;
                                    if (this._timeRes) {
                                        if (((c = this._lengths), (h = this._curSeg), (e *= this._length), (n = this._li), e > this._l2 && n < d - 1)) {
                                            for (u = d - 1; n < u && (this._l2 = c[++n]) <= e; );
                                            (this._l1 = c[n - 1]), (this._li = n), (this._curSeg = h = this._segments[n]), (this._s2 = h[(this._s1 = this._si = 0)]);
                                        } else if (e < this._l1 && n > 0) {
                                            for (; n > 0 && (this._l1 = c[--n]) >= e; );
                                            0 === n && e < this._l1 ? (this._l1 = 0) : n++,
                                                (this._l2 = c[n]),
                                                (this._li = n),
                                                (this._curSeg = h = this._segments[n]),
                                                (this._s1 = h[(this._si = h.length - 1) - 1] || 0),
                                                (this._s2 = h[this._si]);
                                        }
                                        if (((i = n), (e -= this._l1), (n = this._si), e > this._s2 && n < h.length - 1)) {
                                            for (u = h.length - 1; n < u && (this._s2 = h[++n]) <= e; );
                                            (this._s1 = h[n - 1]), (this._si = n);
                                        } else if (e < this._s1 && n > 0) {
                                            for (; n > 0 && (this._s1 = h[--n]) >= e; );
                                            0 === n && e < this._s1 ? (this._s1 = 0) : n++, (this._s2 = h[n]), (this._si = n);
                                        }
                                        o = (n + (e - this._s1) / (this._s2 - this._s1)) * this._prec || 0;
                                    } else o = (e - (i = e < 0 ? 0 : e >= 1 ? d - 1 : (d * e) >> 0) * (1 / d)) * d;
                                    for (r = 1 - o, n = this._props.length; --n > -1; )
                                        (s = this._props[n]), (l = (o * o * (a = this._beziers[s][i]).da + 3 * r * (o * a.ca + r * a.ba)) * o + a.a), this._mod[s] && (l = this._mod[s](l, f)), p[s] ? f[s](l) : (f[s] = l);
                                    if (this._autoRotate) {
                                        var g,
                                            v,
                                            y,
                                            _,
                                            w,
                                            T,
                                            b,
                                            x = this._autoRotate;
                                        for (n = x.length; --n > -1; )
                                            (s = x[n][2]),
                                                (T = x[n][3] || 0),
                                                (b = !0 === x[n][4] ? 1 : t),
                                                (a = this._beziers[x[n][0]]),
                                                (g = this._beziers[x[n][1]]),
                                                a &&
                                                    g &&
                                                    ((a = a[i]),
                                                    (g = g[i]),
                                                    (v = a.a + (a.b - a.a) * o),
                                                    (v += ((_ = a.b + (a.c - a.b) * o) - v) * o),
                                                    (_ += (a.c + (a.d - a.c) * o - _) * o),
                                                    (y = g.a + (g.b - g.a) * o),
                                                    (y += ((w = g.b + (g.c - g.b) * o) - y) * o),
                                                    (w += (g.c + (g.d - g.c) * o - w) * o),
                                                    (l = m ? Math.atan2(w - y, _ - v) * b + T : this._initialRotations[n]),
                                                    this._mod[s] && (l = this._mod[s](l, f)),
                                                    p[s] ? f[s](l) : (f[s] = l));
                                    }
                                },
                            }),
                            f = p.prototype;
                        (p.bezierThrough = h),
                            (p.cubicToQuadratic = l),
                            (p._autoCSS = !0),
                            (p.quadraticToCubic = function (t, e, i) {
                                return new o(t, (2 * e + t) / 3, (2 * e + i) / 3, i);
                            }),
                            (p._cssRegister = function () {
                                var t = a.CSSPlugin;
                                if (t) {
                                    var e = t._internals,
                                        i = e._parseToProxy,
                                        r = e._setPluginRatio,
                                        n = e.CSSPropTween;
                                    e._registerComplexSpecialProp("bezier", {
                                        parser: function (t, e, s, a, o, l) {
                                            e instanceof Array && (e = { values: e }), (l = new p());
                                            var u,
                                                c,
                                                h,
                                                d = e.values,
                                                f = d.length - 1,
                                                m = [],
                                                g = {};
                                            if (f < 0) return o;
                                            for (u = 0; u <= f; u++) (h = i(t, d[u], a, o, l, f !== u)), (m[u] = h.end);
                                            for (c in e) g[c] = e[c];
                                            return (
                                                (g.values = m),
                                                (o = new n(t, "bezier", 0, 0, h.pt, 2)),
                                                (o.data = h),
                                                (o.plugin = l),
                                                (o.setRatio = r),
                                                0 === g.autoRotate && (g.autoRotate = !0),
                                                !g.autoRotate ||
                                                    g.autoRotate instanceof Array ||
                                                    ((u = !0 === g.autoRotate ? 0 : Number(g.autoRotate)), (g.autoRotate = null != h.end.left ? [["left", "top", "rotation", u, !1]] : null != h.end.x && [["x", "y", "rotation", u, !1]])),
                                                g.autoRotate && (a._transform || a._enableTransforms(!1), (h.autoRotate = a._target._gsTransform), (h.proxy.rotation = h.autoRotate.rotation || 0), a._overwriteProps.push("rotation")),
                                                l._onInitTween(h.proxy, g, a._tween),
                                                o
                                            );
                                        },
                                    });
                                }
                            }),
                            (f._mod = function (t) {
                                for (var e, i = this._overwriteProps, r = i.length; --r > -1; ) (e = t[i[r]]) && "function" == typeof e && (this._mod[i[r]] = e);
                            }),
                            (f._kill = function (t) {
                                var e,
                                    i,
                                    r = this._props;
                                for (e in this._beziers) if (e in t) for (delete this._beziers[e], delete this._func[e], i = r.length; --i > -1; ) r[i] === e && r.splice(i, 1);
                                if ((r = this._autoRotate)) for (i = r.length; --i > -1; ) t[r[i][2]] && r.splice(i, 1);
                                return this._super._kill.call(this, t);
                            });
                    })(),
                    n._gsDefine(
                        "plugins.CSSPlugin",
                        ["plugins.TweenPlugin", "TweenLite"],
                        function (t, e) {
                            var i,
                                r,
                                s,
                                a,
                                o = function () {
                                    t.call(this, "css"), (this._overwriteProps.length = 0), (this.setRatio = o.prototype.setRatio);
                                },
                                l = n._gsDefine.globals,
                                u = {},
                                c = (o.prototype = new t("css"));
                            (c.constructor = o),
                                (o.version = "1.20.0"),
                                (o.API = 2),
                                (o.defaultTransformPerspective = 0),
                                (o.defaultSkewType = "compensated"),
                                (o.defaultSmoothOrigin = !0),
                                (c = "px"),
                                (o.suffixMap = { top: c, right: c, bottom: c, left: c, width: c, height: c, fontSize: c, padding: c, margin: c, perspective: c, lineHeight: "" });
                            var h,
                                d,
                                p,
                                f,
                                m,
                                g,
                                v,
                                y,
                                _ = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
                                w = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                                T = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                                b = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                                x = /(?:\d|\-|\+|=|#|\.)*/g,
                                S = /opacity *= *([^)]*)/i,
                                C = /opacity:([^;]*)/i,
                                P = /alpha\(opacity *=.+?\)/i,
                                E = /^(rgb|hsl)/,
                                k = /([A-Z])/g,
                                A = /-([a-z])/gi,
                                M = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                                L = function (t, e) {
                                    return e.toUpperCase();
                                },
                                I = /(?:Left|Right|Width)/i,
                                O = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                                z = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                                R = /,(?=[^\)]*(?:\(|$))/gi,
                                D = /[\s,\(]/i,
                                N = Math.PI / 180,
                                B = 180 / Math.PI,
                                F = {},
                                H = { style: {} },
                                j = n.document || {
                                    createElement: function () {
                                        return H;
                                    },
                                },
                                U = function (t, e) {
                                    return j.createElementNS ? j.createElementNS(e || "http://www.w3.org/1999/xhtml", t) : j.createElement(t);
                                },
                                X = U("div"),
                                q = U("img"),
                                W = (o._internals = { _specialProps: u }),
                                Y = (n.navigator || {}).userAgent || "",
                                V = (function () {
                                    var t = Y.indexOf("Android"),
                                        e = U("a");
                                    return (
                                        (p = -1 !== Y.indexOf("Safari") && -1 === Y.indexOf("Chrome") && (-1 === t || parseFloat(Y.substr(t + 8, 2)) > 3)),
                                        (m = p && parseFloat(Y.substr(Y.indexOf("Version/") + 8, 2)) < 6),
                                        (f = -1 !== Y.indexOf("Firefox")),
                                        (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(Y) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(Y)) && (g = parseFloat(RegExp.$1)),
                                        !!e && ((e.style.cssText = "top:1px;opacity:.55;"), /^0.55/.test(e.style.opacity))
                                    );
                                })(),
                                G = function (t) {
                                    return S.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1;
                                },
                                Q = function (t) {
                                    n.console && console.log(t);
                                },
                                $ = "",
                                K = "",
                                Z = function (t, e) {
                                    var i,
                                        r,
                                        n = (e = e || X).style;
                                    if (void 0 !== n[t]) return t;
                                    for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], r = 5; --r > -1 && void 0 === n[i[r] + t]; );
                                    return r >= 0 ? ((K = 3 === r ? "ms" : i[r]), ($ = "-" + K.toLowerCase() + "-"), K + t) : null;
                                },
                                J = j.defaultView ? j.defaultView.getComputedStyle : function () {},
                                tt = (o.getStyle = function (t, e, i, r, n) {
                                    var s;
                                    return V || "opacity" !== e
                                        ? (!r && t.style[e] ? (s = t.style[e]) : (i = i || J(t)) ? (s = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(k, "-$1").toLowerCase())) : t.currentStyle && (s = t.currentStyle[e]),
                                          null == n || (s && "none" !== s && "auto" !== s && "auto auto" !== s) ? s : n)
                                        : G(t);
                                }),
                                et = (W.convertToPixels = function (t, i, r, n, s) {
                                    if ("px" === n || (!n && "lineHeight" !== i)) return r;
                                    if ("auto" === n || !r) return 0;
                                    var a,
                                        l,
                                        u,
                                        c = I.test(i),
                                        h = t,
                                        d = X.style,
                                        p = r < 0,
                                        f = 1 === r;
                                    if ((p && (r = -r), f && (r *= 100), "lineHeight" !== i || n))
                                        if ("%" === n && -1 !== i.indexOf("border")) a = (r / 100) * (c ? t.clientWidth : t.clientHeight);
                                        else {
                                            if (((d.cssText = "border:0 solid red;position:" + tt(t, "position") + ";line-height:0;"), "%" !== n && h.appendChild && "v" !== n.charAt(0) && "rem" !== n))
                                                d[c ? "borderLeftWidth" : "borderTopWidth"] = r + n;
                                            else {
                                                if (((h = t.parentNode || j.body), -1 !== tt(h, "display").indexOf("flex") && (d.position = "absolute"), (l = h._gsCache), (u = e.ticker.frame), l && c && l.time === u))
                                                    return (l.width * r) / 100;
                                                d[c ? "width" : "height"] = r + n;
                                            }
                                            h.appendChild(X),
                                                (a = parseFloat(X[c ? "offsetWidth" : "offsetHeight"])),
                                                h.removeChild(X),
                                                c && "%" === n && !1 !== o.cacheWidths && (((l = h._gsCache = h._gsCache || {}).time = u), (l.width = (a / r) * 100)),
                                                0 !== a || s || (a = et(t, i, r, n, !0));
                                        }
                                    else (l = J(t).lineHeight), (t.style.lineHeight = r), (a = parseFloat(J(t).lineHeight)), (t.style.lineHeight = l);
                                    return f && (a /= 100), p ? -a : a;
                                }),
                                it = (W.calculateOffset = function (t, e, i) {
                                    if ("absolute" !== tt(t, "position", i)) return 0;
                                    var r = "left" === e ? "Left" : "Top",
                                        n = tt(t, "margin" + r, i);
                                    return t["offset" + r] - (et(t, e, parseFloat(n), n.replace(x, "")) || 0);
                                }),
                                rt = function (t, e) {
                                    var i,
                                        r,
                                        n,
                                        s = {};
                                    if ((e = e || J(t, null)))
                                        if ((i = e.length)) for (; --i > -1; ) (-1 !== (n = e[i]).indexOf("-transform") && Mt !== n) || (s[n.replace(A, L)] = e.getPropertyValue(n));
                                        else for (i in e) (-1 !== i.indexOf("Transform") && At !== i) || (s[i] = e[i]);
                                    else if ((e = t.currentStyle || t.style)) for (i in e) "string" == typeof i && void 0 === s[i] && (s[i.replace(A, L)] = e[i]);
                                    return (
                                        V || (s.opacity = G(t)),
                                        (r = Xt(t, e, !1)),
                                        (s.rotation = r.rotation),
                                        (s.skewX = r.skewX),
                                        (s.scaleX = r.scaleX),
                                        (s.scaleY = r.scaleY),
                                        (s.x = r.x),
                                        (s.y = r.y),
                                        It && ((s.z = r.z), (s.rotationX = r.rotationX), (s.rotationY = r.rotationY), (s.scaleZ = r.scaleZ)),
                                        s.filters && delete s.filters,
                                        s
                                    );
                                },
                                nt = function (t, e, i, r, n) {
                                    var s,
                                        a,
                                        o,
                                        l = {},
                                        u = t.style;
                                    for (a in i)
                                        "cssText" !== a &&
                                            "length" !== a &&
                                            isNaN(a) &&
                                            (e[a] !== (s = i[a]) || (n && n[a])) &&
                                            -1 === a.indexOf("Origin") &&
                                            (("number" != typeof s && "string" != typeof s) ||
                                                ((l[a] = "auto" !== s || ("left" !== a && "top" !== a) ? (("" !== s && "auto" !== s && "none" !== s) || "string" != typeof e[a] || "" === e[a].replace(b, "") ? s : 0) : it(t, a)),
                                                void 0 !== u[a] && (o = new _t(u, a, u[a], o))));
                                    if (r) for (a in r) "className" !== a && (l[a] = r[a]);
                                    return { difs: l, firstMPT: o };
                                },
                                st = { width: ["Left", "Right"], height: ["Top", "Bottom"] },
                                at = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                                ot = function (t, e, i) {
                                    if ("svg" === (t.nodeName + "").toLowerCase()) return (i || J(t))[e] || 0;
                                    if (t.getCTM && Ht(t)) return t.getBBox()[e] || 0;
                                    var r = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
                                        n = st[e],
                                        s = n.length;
                                    for (i = i || J(t, null); --s > -1; ) (r -= parseFloat(tt(t, "padding" + n[s], i, !0)) || 0), (r -= parseFloat(tt(t, "border" + n[s] + "Width", i, !0)) || 0);
                                    return r;
                                },
                                lt = function (t, e) {
                                    if ("contain" === t || "auto" === t || "auto auto" === t) return t + " ";
                                    (null != t && "" !== t) || (t = "0 0");
                                    var i,
                                        r = t.split(" "),
                                        n = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : r[0],
                                        s = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : r[1];
                                    if (r.length > 3 && !e) {
                                        for (r = t.split(", ").join(",").split(","), t = [], i = 0; i < r.length; i++) t.push(lt(r[i]));
                                        return t.join(",");
                                    }
                                    return (
                                        null == s ? (s = "center" === n ? "50%" : "0") : "center" === s && (s = "50%"),
                                        ("center" === n || (isNaN(parseFloat(n)) && -1 === (n + "").indexOf("="))) && (n = "50%"),
                                        (t = n + " " + s + (r.length > 2 ? " " + r[2] : "")),
                                        e &&
                                            ((e.oxp = -1 !== n.indexOf("%")),
                                            (e.oyp = -1 !== s.indexOf("%")),
                                            (e.oxr = "=" === n.charAt(1)),
                                            (e.oyr = "=" === s.charAt(1)),
                                            (e.ox = parseFloat(n.replace(b, ""))),
                                            (e.oy = parseFloat(s.replace(b, ""))),
                                            (e.v = t)),
                                        e || t
                                    );
                                },
                                ut = function (t, e) {
                                    return "function" == typeof t && (t = t(y, v)), "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e) || 0;
                                },
                                ct = function (t, e) {
                                    return "function" == typeof t && (t = t(y, v)), null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t) || 0;
                                },
                                ht = function (t, e, i, r) {
                                    var n, s, a, o, l;
                                    return (
                                        "function" == typeof t && (t = t(y, v)),
                                        null == t
                                            ? (o = e)
                                            : "number" == typeof t
                                            ? (o = t)
                                            : ((n = 360),
                                              (s = t.split("_")),
                                              (a = ((l = "=" === t.charAt(1)) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(s[0].substr(2)) : parseFloat(s[0])) * (-1 === t.indexOf("rad") ? 1 : B) - (l ? 0 : e)),
                                              s.length &&
                                                  (r && (r[i] = e + a),
                                                  -1 !== t.indexOf("short") && (a %= n) !== a % (n / 2) && (a = a < 0 ? a + n : a - n),
                                                  -1 !== t.indexOf("_cw") && a < 0 ? (a = ((a + 9999999999 * n) % n) - ((a / n) | 0) * n) : -1 !== t.indexOf("ccw") && a > 0 && (a = ((a - 9999999999 * n) % n) - ((a / n) | 0) * n)),
                                              (o = e + a)),
                                        o < 1e-6 && o > -1e-6 && (o = 0),
                                        o
                                    );
                                },
                                dt = {
                                    aqua: [0, 255, 255],
                                    lime: [0, 255, 0],
                                    silver: [192, 192, 192],
                                    black: [0, 0, 0],
                                    maroon: [128, 0, 0],
                                    teal: [0, 128, 128],
                                    blue: [0, 0, 255],
                                    navy: [0, 0, 128],
                                    white: [255, 255, 255],
                                    fuchsia: [255, 0, 255],
                                    olive: [128, 128, 0],
                                    yellow: [255, 255, 0],
                                    orange: [255, 165, 0],
                                    gray: [128, 128, 128],
                                    purple: [128, 0, 128],
                                    green: [0, 128, 0],
                                    red: [255, 0, 0],
                                    pink: [255, 192, 203],
                                    cyan: [0, 255, 255],
                                    transparent: [255, 255, 255, 0],
                                },
                                pt = function (t, e, i) {
                                    return (255 * (6 * (t = t < 0 ? t + 1 : t > 1 ? t - 1 : t) < 1 ? e + (i - e) * t * 6 : t < 0.5 ? i : 3 * t < 2 ? e + (i - e) * (2 / 3 - t) * 6 : e) + 0.5) | 0;
                                },
                                ft = (o.parseColor = function (t, e) {
                                    var i, r, n, s, a, o, l, u, c, h, d;
                                    if (t)
                                        if ("number" == typeof t) i = [t >> 16, (t >> 8) & 255, 255 & t];
                                        else {
                                            if (("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), dt[t])) i = dt[t];
                                            else if ("#" === t.charAt(0))
                                                4 === t.length && (t = "#" + (r = t.charAt(1)) + r + (n = t.charAt(2)) + n + (s = t.charAt(3)) + s), (i = [(t = parseInt(t.substr(1), 16)) >> 16, (t >> 8) & 255, 255 & t]);
                                            else if ("hsl" === t.substr(0, 3))
                                                if (((i = d = t.match(_)), e)) {
                                                    if (-1 !== t.indexOf("=")) return t.match(w);
                                                } else
                                                    (a = (Number(i[0]) % 360) / 360),
                                                        (o = Number(i[1]) / 100),
                                                        (r = 2 * (l = Number(i[2]) / 100) - (n = l <= 0.5 ? l * (o + 1) : l + o - l * o)),
                                                        i.length > 3 && (i[3] = Number(t[3])),
                                                        (i[0] = pt(a + 1 / 3, r, n)),
                                                        (i[1] = pt(a, r, n)),
                                                        (i[2] = pt(a - 1 / 3, r, n));
                                            else i = t.match(_) || dt.transparent;
                                            (i[0] = Number(i[0])), (i[1] = Number(i[1])), (i[2] = Number(i[2])), i.length > 3 && (i[3] = Number(i[3]));
                                        }
                                    else i = dt.black;
                                    return (
                                        e &&
                                            !d &&
                                            ((r = i[0] / 255),
                                            (n = i[1] / 255),
                                            (s = i[2] / 255),
                                            (l = ((u = Math.max(r, n, s)) + (c = Math.min(r, n, s))) / 2),
                                            u === c ? (a = o = 0) : ((h = u - c), (o = l > 0.5 ? h / (2 - u - c) : h / (u + c)), (a = u === r ? (n - s) / h + (n < s ? 6 : 0) : u === n ? (s - r) / h + 2 : (r - n) / h + 4), (a *= 60)),
                                            (i[0] = (a + 0.5) | 0),
                                            (i[1] = (100 * o + 0.5) | 0),
                                            (i[2] = (100 * l + 0.5) | 0)),
                                        i
                                    );
                                }),
                                mt = function (t, e) {
                                    var i,
                                        r,
                                        n,
                                        s = t.match(gt) || [],
                                        a = 0,
                                        o = "";
                                    if (!s.length) return t;
                                    for (i = 0; i < s.length; i++)
                                        (r = s[i]),
                                            (a += (n = t.substr(a, t.indexOf(r, a) - a)).length + r.length),
                                            3 === (r = ft(r, e)).length && r.push(1),
                                            (o += n + (e ? "hsla(" + r[0] + "," + r[1] + "%," + r[2] + "%," + r[3] : "rgba(" + r.join(",")) + ")");
                                    return o + t.substr(a);
                                },
                                gt = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
                            for (c in dt) gt += "|" + c + "\\b";
                            (gt = new RegExp(gt + ")", "gi")),
                                (o.colorStringFilter = function (t) {
                                    var e,
                                        i = t[0] + " " + t[1];
                                    gt.test(i) && ((e = -1 !== i.indexOf("hsl(") || -1 !== i.indexOf("hsla(")), (t[0] = mt(t[0], e)), (t[1] = mt(t[1], e))), (gt.lastIndex = 0);
                                }),
                                e.defaultStringFilter || (e.defaultStringFilter = o.colorStringFilter);
                            var vt = function (t, e, i, r) {
                                    if (null == t)
                                        return function (t) {
                                            return t;
                                        };
                                    var n,
                                        s = e ? (t.match(gt) || [""])[0] : "",
                                        a = t.split(s).join("").match(T) || [],
                                        o = t.substr(0, t.indexOf(a[0])),
                                        l = ")" === t.charAt(t.length - 1) ? ")" : "",
                                        u = -1 !== t.indexOf(" ") ? " " : ",",
                                        c = a.length,
                                        h = c > 0 ? a[0].replace(_, "") : "";
                                    return c
                                        ? (n = e
                                              ? function (t) {
                                                    var e, d, p, f;
                                                    if ("number" == typeof t) t += h;
                                                    else if (r && R.test(t)) {
                                                        for (f = t.replace(R, "|").split("|"), p = 0; p < f.length; p++) f[p] = n(f[p]);
                                                        return f.join(",");
                                                    }
                                                    if (((e = (t.match(gt) || [s])[0]), (d = t.split(e).join("").match(T) || []), (p = d.length), c > p--)) for (; ++p < c; ) d[p] = i ? d[((p - 1) / 2) | 0] : a[p];
                                                    return o + d.join(u) + u + e + l + (-1 !== t.indexOf("inset") ? " inset" : "");
                                                }
                                              : function (t) {
                                                    var e, s, d;
                                                    if ("number" == typeof t) t += h;
                                                    else if (r && R.test(t)) {
                                                        for (s = t.replace(R, "|").split("|"), d = 0; d < s.length; d++) s[d] = n(s[d]);
                                                        return s.join(",");
                                                    }
                                                    if (((e = t.match(T) || []), (d = e.length), c > d--)) for (; ++d < c; ) e[d] = i ? e[((d - 1) / 2) | 0] : a[d];
                                                    return o + e.join(u) + l;
                                                })
                                        : function (t) {
                                              return t;
                                          };
                                },
                                yt = function (t) {
                                    return (
                                        (t = t.split(",")),
                                        function (e, i, r, n, s, a, o) {
                                            var l,
                                                u = (i + "").split(" ");
                                            for (o = {}, l = 0; l < 4; l++) o[t[l]] = u[l] = u[l] || u[((l - 1) / 2) >> 0];
                                            return n.parse(e, o, s, a);
                                        }
                                    );
                                },
                                _t =
                                    ((W._setPluginRatio = function (t) {
                                        this.plugin.setRatio(t);
                                        for (var e, i, r, n, s, a = this.data, o = a.proxy, l = a.firstMPT; l; ) (e = o[l.v]), l.r ? (e = Math.round(e)) : e < 1e-6 && e > -1e-6 && (e = 0), (l.t[l.p] = e), (l = l._next);
                                        if ((a.autoRotate && (a.autoRotate.rotation = a.mod ? a.mod(o.rotation, this.t) : o.rotation), 1 === t || 0 === t))
                                            for (l = a.firstMPT, s = 1 === t ? "e" : "b"; l; ) {
                                                if ((i = l.t).type) {
                                                    if (1 === i.type) {
                                                        for (n = i.xs0 + i.s + i.xs1, r = 1; r < i.l; r++) n += i["xn" + r] + i["xs" + (r + 1)];
                                                        i[s] = n;
                                                    }
                                                } else i[s] = i.s + i.xs0;
                                                l = l._next;
                                            }
                                    }),
                                    function (t, e, i, r, n) {
                                        (this.t = t), (this.p = e), (this.v = i), (this.r = n), r && ((r._prev = this), (this._next = r));
                                    }),
                                wt =
                                    ((W._parseToProxy = function (t, e, i, r, n, s) {
                                        var a,
                                            o,
                                            l,
                                            u,
                                            c,
                                            h = r,
                                            d = {},
                                            p = {},
                                            f = i._transform,
                                            m = F;
                                        for (i._transform = null, F = e, r = c = i.parse(t, e, r, n), F = m, s && ((i._transform = f), h && ((h._prev = null), h._prev && (h._prev._next = null))); r && r !== h; ) {
                                            if (r.type <= 1 && ((o = r.p), (p[o] = r.s + r.c), (d[o] = r.s), s || ((u = new _t(r, "s", o, u, r.r)), (r.c = 0)), 1 === r.type))
                                                for (a = r.l; --a > 0; ) (l = "xn" + a), (p[(o = r.p + "_" + l)] = r.data[l]), (d[o] = r[l]), s || (u = new _t(r, l, o, u, r.rxp[l]));
                                            r = r._next;
                                        }
                                        return { proxy: d, end: p, firstMPT: u, pt: c };
                                    }),
                                    (W.CSSPropTween = function (t, e, r, n, s, o, l, u, c, h, d) {
                                        (this.t = t),
                                            (this.p = e),
                                            (this.s = r),
                                            (this.c = n),
                                            (this.n = l || e),
                                            t instanceof wt || a.push(this.n),
                                            (this.r = u),
                                            (this.type = o || 0),
                                            c && ((this.pr = c), (i = !0)),
                                            (this.b = void 0 === h ? r : h),
                                            (this.e = void 0 === d ? r + n : d),
                                            s && ((this._next = s), (s._prev = this));
                                    })),
                                Tt = function (t, e, i, r, n, s) {
                                    var a = new wt(t, e, i, r - i, n, -1, s);
                                    return (a.b = i), (a.e = a.xs0 = r), a;
                                },
                                bt = (o.parseComplex = function (t, e, i, r, n, s, a, l, u, c) {
                                    (i = i || s || ""),
                                        "function" == typeof r && (r = r(y, v)),
                                        (a = new wt(t, e, 0, 0, a, c ? 2 : 1, null, !1, l, i, r)),
                                        (r += ""),
                                        n && gt.test(r + i) && ((r = [i, r]), o.colorStringFilter(r), (i = r[0]), (r = r[1]));
                                    var d,
                                        p,
                                        f,
                                        m,
                                        g,
                                        T,
                                        b,
                                        x,
                                        S,
                                        C,
                                        P,
                                        E,
                                        k,
                                        A = i.split(", ").join(",").split(" "),
                                        M = r.split(", ").join(",").split(" "),
                                        L = A.length,
                                        I = !1 !== h;
                                    for (
                                        (-1 === r.indexOf(",") && -1 === i.indexOf(",")) || ((A = A.join(" ").replace(R, ", ").split(" ")), (M = M.join(" ").replace(R, ", ").split(" ")), (L = A.length)),
                                            L !== M.length && (L = (A = (s || "").split(" ")).length),
                                            a.plugin = u,
                                            a.setRatio = c,
                                            gt.lastIndex = 0,
                                            d = 0;
                                        d < L;
                                        d++
                                    )
                                        if (((m = A[d]), (g = M[d]), (x = parseFloat(m)) || 0 === x)) a.appendXtra("", x, ut(g, x), g.replace(w, ""), I && -1 !== g.indexOf("px"), !0);
                                        else if (n && gt.test(m))
                                            (E = ")" + ((E = g.indexOf(")") + 1) ? g.substr(E) : "")),
                                                (k = -1 !== g.indexOf("hsl") && V),
                                                (C = g),
                                                (m = ft(m, k)),
                                                (g = ft(g, k)),
                                                (S = m.length + g.length > 6) && !V && 0 === g[3]
                                                    ? ((a["xs" + a.l] += a.l ? " transparent" : "transparent"), (a.e = a.e.split(M[d]).join("transparent")))
                                                    : (V || (S = !1),
                                                      k
                                                          ? a
                                                                .appendXtra(C.substr(0, C.indexOf("hsl")) + (S ? "hsla(" : "hsl("), m[0], ut(g[0], m[0]), ",", !1, !0)
                                                                .appendXtra("", m[1], ut(g[1], m[1]), "%,", !1)
                                                                .appendXtra("", m[2], ut(g[2], m[2]), S ? "%," : "%" + E, !1)
                                                          : a
                                                                .appendXtra(C.substr(0, C.indexOf("rgb")) + (S ? "rgba(" : "rgb("), m[0], g[0] - m[0], ",", !0, !0)
                                                                .appendXtra("", m[1], g[1] - m[1], ",", !0)
                                                                .appendXtra("", m[2], g[2] - m[2], S ? "," : E, !0),
                                                      S && ((m = m.length < 4 ? 1 : m[3]), a.appendXtra("", m, (g.length < 4 ? 1 : g[3]) - m, E, !1))),
                                                (gt.lastIndex = 0);
                                        else if ((T = m.match(_))) {
                                            if (!(b = g.match(w)) || b.length !== T.length) return a;
                                            for (f = 0, p = 0; p < T.length; p++)
                                                (P = T[p]), (C = m.indexOf(P, f)), a.appendXtra(m.substr(f, C - f), Number(P), ut(b[p], P), "", I && "px" === m.substr(C + P.length, 2), 0 === p), (f = C + P.length);
                                            a["xs" + a.l] += m.substr(f);
                                        } else a["xs" + a.l] += a.l || a["xs" + a.l] ? " " + g : g;
                                    if (-1 !== r.indexOf("=") && a.data) {
                                        for (E = a.xs0 + a.data.s, d = 1; d < a.l; d++) E += a["xs" + d] + a.data["xn" + d];
                                        a.e = E + a["xs" + d];
                                    }
                                    return a.l || ((a.type = -1), (a.xs0 = a.e)), a.xfirst || a;
                                }),
                                xt = 9;
                            for ((c = wt.prototype).l = c.pr = 0; --xt > 0; ) (c["xn" + xt] = 0), (c["xs" + xt] = "");
                            (c.xs0 = ""),
                                (c._next = c._prev = c.xfirst = c.data = c.plugin = c.setRatio = c.rxp = null),
                                (c.appendXtra = function (t, e, i, r, n, s) {
                                    var a = this.l;
                                    return (
                                        (this["xs" + a] += s && (a || this["xs" + a]) ? " " + t : t || ""),
                                        i || 0 === a || this.plugin
                                            ? (this.l++,
                                              (this.type = this.setRatio ? 2 : 1),
                                              (this["xs" + this.l] = r || ""),
                                              a > 0
                                                  ? ((this.data["xn" + a] = e + i),
                                                    (this.rxp["xn" + a] = n),
                                                    (this["xn" + a] = e),
                                                    this.plugin || ((this.xfirst = new wt(this, "xn" + a, e, i, this.xfirst || this, 0, this.n, n, this.pr)), (this.xfirst.xs0 = 0)),
                                                    this)
                                                  : ((this.data = { s: e + i }), (this.rxp = {}), (this.s = e), (this.c = i), (this.r = n), this))
                                            : ((this["xs" + a] += e + (r || "")), this)
                                    );
                                });
                            var St = function (t, e) {
                                    (e = e || {}),
                                        (this.p = e.prefix ? Z(t) || t : t),
                                        (u[t] = u[this.p] = this),
                                        (this.format = e.formatter || vt(e.defaultValue, e.color, e.collapsible, e.multi)),
                                        e.parser && (this.parse = e.parser),
                                        (this.clrs = e.color),
                                        (this.multi = e.multi),
                                        (this.keyword = e.keyword),
                                        (this.dflt = e.defaultValue),
                                        (this.pr = e.priority || 0);
                                },
                                Ct = (W._registerComplexSpecialProp = function (t, e, i) {
                                    "object" != typeof e && (e = { parser: i });
                                    var r,
                                        n = t.split(","),
                                        s = e.defaultValue;
                                    for (i = i || [s], r = 0; r < n.length; r++) (e.prefix = 0 === r && e.prefix), (e.defaultValue = i[r] || s), new St(n[r], e);
                                }),
                                Pt = (W._registerPluginProp = function (t) {
                                    if (!u[t]) {
                                        var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                                        Ct(t, {
                                            parser: function (t, i, r, n, s, a, o) {
                                                var c = l.com.greensock.plugins[e];
                                                return c ? (c._cssRegister(), u[r].parse(t, i, r, n, s, a, o)) : (Q("Error: " + e + " js file not loaded."), s);
                                            },
                                        });
                                    }
                                });
                            ((c = St.prototype).parseComplex = function (t, e, i, r, n, s) {
                                var a,
                                    o,
                                    l,
                                    u,
                                    c,
                                    h,
                                    d = this.keyword;
                                if ((this.multi && (R.test(i) || R.test(e) ? ((o = e.replace(R, "|").split("|")), (l = i.replace(R, "|").split("|"))) : d && ((o = [e]), (l = [i]))), l)) {
                                    for (u = l.length > o.length ? l.length : o.length, a = 0; a < u; a++)
                                        (e = o[a] = o[a] || this.dflt), (i = l[a] = l[a] || this.dflt), d && (c = e.indexOf(d)) !== (h = i.indexOf(d)) && (-1 === h ? (o[a] = o[a].split(d).join("")) : -1 === c && (o[a] += " " + d));
                                    (e = o.join(", ")), (i = l.join(", "));
                                }
                                return bt(t, this.p, e, i, this.clrs, this.dflt, r, this.pr, n, s);
                            }),
                                (c.parse = function (t, e, i, r, n, a, o) {
                                    return this.parseComplex(t.style, this.format(tt(t, this.p, s, !1, this.dflt)), this.format(e), n, a);
                                }),
                                (o.registerSpecialProp = function (t, e, i) {
                                    Ct(t, {
                                        parser: function (t, r, n, s, a, o, l) {
                                            var u = new wt(t, n, 0, 0, a, 2, n, !1, i);
                                            return (u.plugin = o), (u.setRatio = e(t, r, s._tween, n)), u;
                                        },
                                        priority: i,
                                    });
                                }),
                                (o.useSVGTransformAttr = !0);
                            var Et,
                                kt = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                                At = Z("transform"),
                                Mt = $ + "transform",
                                Lt = Z("transformOrigin"),
                                It = null !== Z("perspective"),
                                Ot = (W.Transform = function () {
                                    (this.perspective = parseFloat(o.defaultTransformPerspective) || 0), (this.force3D = !(!1 === o.defaultForce3D || !It) && (o.defaultForce3D || "auto"));
                                }),
                                zt = n.SVGElement,
                                Rt = function (t, e, i) {
                                    var r,
                                        n = j.createElementNS("http://www.w3.org/2000/svg", t),
                                        s = /([a-z])([A-Z])/g;
                                    for (r in i) n.setAttributeNS(null, r.replace(s, "$1-$2").toLowerCase(), i[r]);
                                    return e.appendChild(n), n;
                                },
                                Dt = j.documentElement || {},
                                Nt = (function () {
                                    var t,
                                        e,
                                        i,
                                        r = g || (/Android/i.test(Y) && !n.chrome);
                                    return (
                                        j.createElementNS &&
                                            !r &&
                                            ((t = Rt("svg", Dt)),
                                            (i = (e = Rt("rect", t, { width: 100, height: 50, x: 100 })).getBoundingClientRect().width),
                                            (e.style[Lt] = "50% 50%"),
                                            (e.style[At] = "scaleX(0.5)"),
                                            (r = i === e.getBoundingClientRect().width && !(f && It)),
                                            Dt.removeChild(t)),
                                        r
                                    );
                                })(),
                                Bt = function (t, e, i, r, n, s) {
                                    var a,
                                        l,
                                        u,
                                        c,
                                        h,
                                        d,
                                        p,
                                        f,
                                        m,
                                        g,
                                        v,
                                        y,
                                        _,
                                        w,
                                        T = t._gsTransform,
                                        b = Ut(t, !0);
                                    T && ((_ = T.xOrigin), (w = T.yOrigin)),
                                        (!r || (a = r.split(" ")).length < 2) &&
                                            (0 === (p = t.getBBox()).x &&
                                                0 === p.y &&
                                                p.width + p.height === 0 &&
                                                (p = {
                                                    x: parseFloat(t.hasAttribute("x") ? t.getAttribute("x") : t.hasAttribute("cx") ? t.getAttribute("cx") : 0) || 0,
                                                    y: parseFloat(t.hasAttribute("y") ? t.getAttribute("y") : t.hasAttribute("cy") ? t.getAttribute("cy") : 0) || 0,
                                                    width: 0,
                                                    height: 0,
                                                }),
                                            (a = [
                                                (-1 !== (e = lt(e).split(" "))[0].indexOf("%") ? (parseFloat(e[0]) / 100) * p.width : parseFloat(e[0])) + p.x,
                                                (-1 !== e[1].indexOf("%") ? (parseFloat(e[1]) / 100) * p.height : parseFloat(e[1])) + p.y,
                                            ])),
                                        (i.xOrigin = c = parseFloat(a[0])),
                                        (i.yOrigin = h = parseFloat(a[1])),
                                        r &&
                                            b !== jt &&
                                            ((d = b[0]),
                                            (p = b[1]),
                                            (f = b[2]),
                                            (m = b[3]),
                                            (g = b[4]),
                                            (v = b[5]),
                                            (y = d * m - p * f) && ((l = c * (m / y) + h * (-f / y) + (f * v - m * g) / y), (u = c * (-p / y) + h * (d / y) - (d * v - p * g) / y), (c = i.xOrigin = a[0] = l), (h = i.yOrigin = a[1] = u))),
                                        T &&
                                            (s && ((i.xOffset = T.xOffset), (i.yOffset = T.yOffset), (T = i)),
                                            n || (!1 !== n && !1 !== o.defaultSmoothOrigin) ? ((l = c - _), (u = h - w), (T.xOffset += l * b[0] + u * b[2] - l), (T.yOffset += l * b[1] + u * b[3] - u)) : (T.xOffset = T.yOffset = 0)),
                                        s || t.setAttribute("data-svg-origin", a.join(" "));
                                },
                                Ft = function (t) {
                                    var e,
                                        i = U("svg", this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                                        r = this.parentNode,
                                        n = this.nextSibling,
                                        s = this.style.cssText;
                                    if ((Dt.appendChild(i), i.appendChild(this), (this.style.display = "block"), t))
                                        try {
                                            (e = this.getBBox()), (this._originalGetBBox = this.getBBox), (this.getBBox = Ft);
                                        } catch (t) {}
                                    else this._originalGetBBox && (e = this._originalGetBBox());
                                    return n ? r.insertBefore(this, n) : r.appendChild(this), Dt.removeChild(i), (this.style.cssText = s), e;
                                },
                                Ht = function (t) {
                                    return !(
                                        !(
                                            zt &&
                                            t.getCTM &&
                                            (function (t) {
                                                try {
                                                    return t.getBBox();
                                                } catch (e) {
                                                    return Ft.call(t, !0);
                                                }
                                            })(t)
                                        ) ||
                                        (t.parentNode && !t.ownerSVGElement)
                                    );
                                },
                                jt = [1, 0, 0, 1, 0, 0],
                                Ut = function (t, e) {
                                    var i,
                                        r,
                                        n,
                                        s,
                                        a,
                                        o,
                                        l = t._gsTransform || new Ot(),
                                        u = t.style;
                                    if (
                                        (At
                                            ? (r = tt(t, Mt, null, !0))
                                            : t.currentStyle &&
                                              (r = (r = t.currentStyle.filter.match(O)) && 4 === r.length ? [r[0].substr(4), Number(r[2].substr(4)), Number(r[1].substr(4)), r[3].substr(4), l.x || 0, l.y || 0].join(",") : ""),
                                        (i = !r || "none" === r || "matrix(1, 0, 0, 1, 0, 0)" === r),
                                        !At ||
                                            (!(o = "none" === J(t).display) && t.parentNode) ||
                                            (o && ((s = u.display), (u.display = "block")),
                                            t.parentNode || ((a = 1), Dt.appendChild(t)),
                                            (i = !(r = tt(t, Mt, null, !0)) || "none" === r || "matrix(1, 0, 0, 1, 0, 0)" === r),
                                            s ? (u.display = s) : o && Vt(u, "display"),
                                            a && Dt.removeChild(t)),
                                        (l.svg || (t.getCTM && Ht(t))) &&
                                            (i && -1 !== (u[At] + "").indexOf("matrix") && ((r = u[At]), (i = 0)),
                                            (n = t.getAttribute("transform")),
                                            i && n && (-1 !== n.indexOf("matrix") ? ((r = n), (i = 0)) : -1 !== n.indexOf("translate") && ((r = "matrix(1,0,0,1," + n.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")"), (i = 0)))),
                                        i)
                                    )
                                        return jt;
                                    for (n = (r || "").match(_) || [], xt = n.length; --xt > -1; ) (s = Number(n[xt])), (n[xt] = (a = s - (s |= 0)) ? ((1e5 * a + (a < 0 ? -0.5 : 0.5)) | 0) / 1e5 + s : s);
                                    return e && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n;
                                },
                                Xt = (W.getTransform = function (t, i, r, n) {
                                    if (t._gsTransform && r && !n) return t._gsTransform;
                                    var s,
                                        a,
                                        l,
                                        u,
                                        c,
                                        h,
                                        d = r ? t._gsTransform || new Ot() : new Ot(),
                                        p = d.scaleX < 0,
                                        f = It ? parseFloat(tt(t, Lt, i, !1, "0 0 0").split(" ")[2]) || d.zOrigin || 0 : 0,
                                        m = parseFloat(o.defaultTransformPerspective) || 0;
                                    if (((d.svg = !(!t.getCTM || !Ht(t))), d.svg && (Bt(t, tt(t, Lt, i, !1, "50% 50%") + "", d, t.getAttribute("data-svg-origin")), (Et = o.useSVGTransformAttr || Nt)), (s = Ut(t)) !== jt)) {
                                        if (16 === s.length) {
                                            var g,
                                                v,
                                                y,
                                                _,
                                                w,
                                                T = s[0],
                                                b = s[1],
                                                x = s[2],
                                                S = s[3],
                                                C = s[4],
                                                P = s[5],
                                                E = s[6],
                                                k = s[7],
                                                A = s[8],
                                                M = s[9],
                                                L = s[10],
                                                I = s[12],
                                                O = s[13],
                                                z = s[14],
                                                R = s[11],
                                                D = Math.atan2(E, L);
                                            d.zOrigin && ((I = A * (z = -d.zOrigin) - s[12]), (O = M * z - s[13]), (z = L * z + d.zOrigin - s[14])),
                                                (d.rotationX = D * B),
                                                D &&
                                                    ((g = C * (_ = Math.cos(-D)) + A * (w = Math.sin(-D))),
                                                    (v = P * _ + M * w),
                                                    (y = E * _ + L * w),
                                                    (A = C * -w + A * _),
                                                    (M = P * -w + M * _),
                                                    (L = E * -w + L * _),
                                                    (R = k * -w + R * _),
                                                    (C = g),
                                                    (P = v),
                                                    (E = y)),
                                                (D = Math.atan2(-x, L)),
                                                (d.rotationY = D * B),
                                                D && ((v = b * (_ = Math.cos(-D)) - M * (w = Math.sin(-D))), (y = x * _ - L * w), (M = b * w + M * _), (L = x * w + L * _), (R = S * w + R * _), (T = g = T * _ - A * w), (b = v), (x = y)),
                                                (D = Math.atan2(b, T)),
                                                (d.rotation = D * B),
                                                D && ((g = T * (_ = Math.cos(D)) + b * (w = Math.sin(D))), (v = C * _ + P * w), (y = A * _ + M * w), (b = b * _ - T * w), (P = P * _ - C * w), (M = M * _ - A * w), (T = g), (C = v), (A = y)),
                                                d.rotationX && Math.abs(d.rotationX) + Math.abs(d.rotation) > 359.9 && ((d.rotationX = d.rotation = 0), (d.rotationY = 180 - d.rotationY)),
                                                (D = Math.atan2(C, P)),
                                                (d.scaleX = ((1e5 * Math.sqrt(T * T + b * b + x * x) + 0.5) | 0) / 1e5),
                                                (d.scaleY = ((1e5 * Math.sqrt(P * P + E * E) + 0.5) | 0) / 1e5),
                                                (d.scaleZ = ((1e5 * Math.sqrt(A * A + M * M + L * L) + 0.5) | 0) / 1e5),
                                                (T /= d.scaleX),
                                                (C /= d.scaleY),
                                                (b /= d.scaleX),
                                                (P /= d.scaleY),
                                                Math.abs(D) > 2e-5 ? ((d.skewX = D * B), (C = 0), "simple" !== d.skewType && (d.scaleY *= 1 / Math.cos(D))) : (d.skewX = 0),
                                                (d.perspective = R ? 1 / (R < 0 ? -R : R) : 0),
                                                (d.x = I),
                                                (d.y = O),
                                                (d.z = z),
                                                d.svg && ((d.x -= d.xOrigin - (d.xOrigin * T - d.yOrigin * C)), (d.y -= d.yOrigin - (d.yOrigin * b - d.xOrigin * P)));
                                        } else if (!It || n || !s.length || d.x !== s[4] || d.y !== s[5] || (!d.rotationX && !d.rotationY)) {
                                            var N = s.length >= 6,
                                                F = N ? s[0] : 1,
                                                H = s[1] || 0,
                                                j = s[2] || 0,
                                                U = N ? s[3] : 1;
                                            (d.x = s[4] || 0),
                                                (d.y = s[5] || 0),
                                                (l = Math.sqrt(F * F + H * H)),
                                                (u = Math.sqrt(U * U + j * j)),
                                                (c = F || H ? Math.atan2(H, F) * B : d.rotation || 0),
                                                (h = j || U ? Math.atan2(j, U) * B + c : d.skewX || 0),
                                                (d.scaleX = l),
                                                (d.scaleY = u),
                                                (d.rotation = c),
                                                (d.skewX = h),
                                                It && ((d.rotationX = d.rotationY = d.z = 0), (d.perspective = m), (d.scaleZ = 1)),
                                                d.svg && ((d.x -= d.xOrigin - (d.xOrigin * F + d.yOrigin * j)), (d.y -= d.yOrigin - (d.xOrigin * H + d.yOrigin * U)));
                                        }
                                        Math.abs(d.skewX) > 90 &&
                                            Math.abs(d.skewX) < 270 &&
                                            (p ? ((d.scaleX *= -1), (d.skewX += d.rotation <= 0 ? 180 : -180), (d.rotation += d.rotation <= 0 ? 180 : -180)) : ((d.scaleY *= -1), (d.skewX += d.skewX <= 0 ? 180 : -180))),
                                            (d.zOrigin = f);
                                        for (a in d) d[a] < 2e-5 && d[a] > -2e-5 && (d[a] = 0);
                                    }
                                    return (
                                        r &&
                                            ((t._gsTransform = d),
                                            d.svg &&
                                                (Et && t.style[At]
                                                    ? e.delayedCall(0.001, function () {
                                                          Vt(t.style, At);
                                                      })
                                                    : !Et &&
                                                      t.getAttribute("transform") &&
                                                      e.delayedCall(0.001, function () {
                                                          t.removeAttribute("transform");
                                                      }))),
                                        d
                                    );
                                }),
                                qt = function (t) {
                                    var e,
                                        i,
                                        r = this.data,
                                        n = -r.rotation * N,
                                        s = n + r.skewX * N,
                                        a = ((Math.cos(n) * r.scaleX * 1e5) | 0) / 1e5,
                                        o = ((Math.sin(n) * r.scaleX * 1e5) | 0) / 1e5,
                                        l = ((Math.sin(s) * -r.scaleY * 1e5) | 0) / 1e5,
                                        u = ((Math.cos(s) * r.scaleY * 1e5) | 0) / 1e5,
                                        c = this.t.style,
                                        h = this.t.currentStyle;
                                    if (h) {
                                        (i = o), (o = -l), (l = -i), (e = h.filter), (c.filter = "");
                                        var d,
                                            p,
                                            f = this.t.offsetWidth,
                                            m = this.t.offsetHeight,
                                            v = "absolute" !== h.position,
                                            y = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + o + ", M21=" + l + ", M22=" + u,
                                            _ = r.x + (f * r.xPercent) / 100,
                                            w = r.y + (m * r.yPercent) / 100;
                                        if (
                                            (null != r.ox && ((_ += (d = (r.oxp ? f * r.ox * 0.01 : r.ox) - f / 2) - (d * a + (p = (r.oyp ? m * r.oy * 0.01 : r.oy) - m / 2) * o)), (w += p - (d * l + p * u))),
                                            (y += v ? ", Dx=" + ((d = f / 2) - (d * a + (p = m / 2) * o) + _) + ", Dy=" + (p - (d * l + p * u) + w) + ")" : ", sizingMethod='auto expand')"),
                                            -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? (c.filter = e.replace(z, y)) : (c.filter = y + " " + e),
                                            (0 !== t && 1 !== t) ||
                                                (1 === a &&
                                                    0 === o &&
                                                    0 === l &&
                                                    1 === u &&
                                                    ((v && -1 === y.indexOf("Dx=0, Dy=0")) || (S.test(e) && 100 !== parseFloat(RegExp.$1)) || (-1 === e.indexOf(e.indexOf("Alpha")) && c.removeAttribute("filter")))),
                                            !v)
                                        ) {
                                            var T,
                                                b,
                                                C,
                                                P = g < 8 ? 1 : -1;
                                            for (
                                                d = r.ieOffsetX || 0,
                                                    p = r.ieOffsetY || 0,
                                                    r.ieOffsetX = Math.round((f - ((a < 0 ? -a : a) * f + (o < 0 ? -o : o) * m)) / 2 + _),
                                                    r.ieOffsetY = Math.round((m - ((u < 0 ? -u : u) * m + (l < 0 ? -l : l) * f)) / 2 + w),
                                                    xt = 0;
                                                xt < 4;
                                                xt++
                                            )
                                                (C =
                                                    (i = -1 !== (T = h[(b = at[xt])]).indexOf("px") ? parseFloat(T) : et(this.t, b, parseFloat(T), T.replace(x, "")) || 0) !== r[b]
                                                        ? xt < 2
                                                            ? -r.ieOffsetX
                                                            : -r.ieOffsetY
                                                        : xt < 2
                                                        ? d - r.ieOffsetX
                                                        : p - r.ieOffsetY),
                                                    (c[b] = (r[b] = Math.round(i - C * (0 === xt || 2 === xt ? 1 : P))) + "px");
                                        }
                                    }
                                },
                                Wt = (W.set3DTransformRatio = W.setTransformRatio = function (t) {
                                    var e,
                                        i,
                                        r,
                                        n,
                                        s,
                                        a,
                                        o,
                                        l,
                                        u,
                                        c,
                                        h,
                                        d,
                                        p,
                                        m,
                                        g,
                                        v,
                                        y,
                                        _,
                                        w,
                                        T,
                                        b,
                                        x = this.data,
                                        S = this.t.style,
                                        C = x.rotation,
                                        P = x.rotationX,
                                        E = x.rotationY,
                                        k = x.scaleX,
                                        A = x.scaleY,
                                        M = x.scaleZ,
                                        L = x.x,
                                        I = x.y,
                                        O = x.z,
                                        z = x.svg,
                                        R = x.perspective,
                                        D = x.force3D,
                                        B = x.skewY,
                                        F = x.skewX;
                                    if (
                                        (B && ((F += B), (C += B)),
                                        !((((1 !== t && 0 !== t) || "auto" !== D || (this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime)) && D) || O || R || E || P || 1 !== M) || (Et && z) || !It)
                                    )
                                        C || F || z
                                            ? ((C *= N),
                                              (T = F * N),
                                              (b = 1e5),
                                              (i = Math.cos(C) * k),
                                              (s = Math.sin(C) * k),
                                              (r = Math.sin(C - T) * -A),
                                              (a = Math.cos(C - T) * A),
                                              T && "simple" === x.skewType && ((e = Math.tan(T - B * N)), (r *= e = Math.sqrt(1 + e * e)), (a *= e), B && ((e = Math.tan(B * N)), (i *= e = Math.sqrt(1 + e * e)), (s *= e))),
                                              z &&
                                                  ((L += x.xOrigin - (x.xOrigin * i + x.yOrigin * r) + x.xOffset),
                                                  (I += x.yOrigin - (x.xOrigin * s + x.yOrigin * a) + x.yOffset),
                                                  Et && (x.xPercent || x.yPercent) && ((g = this.t.getBBox()), (L += 0.01 * x.xPercent * g.width), (I += 0.01 * x.yPercent * g.height)),
                                                  L < (g = 1e-6) && L > -g && (L = 0),
                                                  I < g && I > -g && (I = 0)),
                                              (w = ((i * b) | 0) / b + "," + ((s * b) | 0) / b + "," + ((r * b) | 0) / b + "," + ((a * b) | 0) / b + "," + L + "," + I + ")"),
                                              z && Et ? this.t.setAttribute("transform", "matrix(" + w) : (S[At] = (x.xPercent || x.yPercent ? "translate(" + x.xPercent + "%," + x.yPercent + "%) matrix(" : "matrix(") + w))
                                            : (S[At] = (x.xPercent || x.yPercent ? "translate(" + x.xPercent + "%," + x.yPercent + "%) matrix(" : "matrix(") + k + ",0,0," + A + "," + L + "," + I + ")");
                                    else {
                                        if ((f && (k < (g = 1e-4) && k > -g && (k = M = 2e-5), A < g && A > -g && (A = M = 2e-5), !R || x.z || x.rotationX || x.rotationY || (R = 0)), C || F))
                                            (C *= N),
                                                (v = i = Math.cos(C)),
                                                (y = s = Math.sin(C)),
                                                F &&
                                                    ((C -= F * N),
                                                    (v = Math.cos(C)),
                                                    (y = Math.sin(C)),
                                                    "simple" === x.skewType && ((e = Math.tan((F - B) * N)), (v *= e = Math.sqrt(1 + e * e)), (y *= e), x.skewY && ((e = Math.tan(B * N)), (i *= e = Math.sqrt(1 + e * e)), (s *= e)))),
                                                (r = -y),
                                                (a = v);
                                        else {
                                            if (!(E || P || 1 !== M || R || z))
                                                return void (S[At] =
                                                    (x.xPercent || x.yPercent ? "translate(" + x.xPercent + "%," + x.yPercent + "%) translate3d(" : "translate3d(") +
                                                    L +
                                                    "px," +
                                                    I +
                                                    "px," +
                                                    O +
                                                    "px)" +
                                                    (1 !== k || 1 !== A ? " scale(" + k + "," + A + ")" : ""));
                                            (i = a = 1), (r = s = 0);
                                        }
                                        (c = 1),
                                            (n = o = l = u = h = d = 0),
                                            (p = R ? -1 / R : 0),
                                            (m = x.zOrigin),
                                            (g = 1e-6),
                                            ",",
                                            "0",
                                            (C = E * N) && ((v = Math.cos(C)), (l = -(y = Math.sin(C))), (h = p * -y), (n = i * y), (o = s * y), (c = v), (p *= v), (i *= v), (s *= v)),
                                            (C = P * N) &&
                                                ((e = r * (v = Math.cos(C)) + n * (y = Math.sin(C))), (_ = a * v + o * y), (u = c * y), (d = p * y), (n = r * -y + n * v), (o = a * -y + o * v), (c *= v), (p *= v), (r = e), (a = _)),
                                            1 !== M && ((n *= M), (o *= M), (c *= M), (p *= M)),
                                            1 !== A && ((r *= A), (a *= A), (u *= A), (d *= A)),
                                            1 !== k && ((i *= k), (s *= k), (l *= k), (h *= k)),
                                            (m || z) &&
                                                (m && ((L += n * -m), (I += o * -m), (O += c * -m + m)),
                                                z && ((L += x.xOrigin - (x.xOrigin * i + x.yOrigin * r) + x.xOffset), (I += x.yOrigin - (x.xOrigin * s + x.yOrigin * a) + x.yOffset)),
                                                L < g && L > -g && (L = "0"),
                                                I < g && I > -g && (I = "0"),
                                                O < g && O > -g && (O = 0)),
                                            (w = x.xPercent || x.yPercent ? "translate(" + x.xPercent + "%," + x.yPercent + "%) matrix3d(" : "matrix3d("),
                                            (w += (i < g && i > -g ? "0" : i) + "," + (s < g && s > -g ? "0" : s) + "," + (l < g && l > -g ? "0" : l)),
                                            (w += "," + (h < g && h > -g ? "0" : h) + "," + (r < g && r > -g ? "0" : r) + "," + (a < g && a > -g ? "0" : a)),
                                            P || E || 1 !== M
                                                ? ((w += "," + (u < g && u > -g ? "0" : u) + "," + (d < g && d > -g ? "0" : d) + "," + (n < g && n > -g ? "0" : n)),
                                                  (w += "," + (o < g && o > -g ? "0" : o) + "," + (c < g && c > -g ? "0" : c) + "," + (p < g && p > -g ? "0" : p) + ","))
                                                : (w += ",0,0,0,0,1,0,"),
                                            (w += L + "," + I + "," + O + "," + (R ? 1 + -O / R : 1) + ")"),
                                            (S[At] = w);
                                    }
                                });
                            ((c = Ot.prototype).x = c.y = c.z = c.skewX = c.skewY = c.rotation = c.rotationX = c.rotationY = c.zOrigin = c.xPercent = c.yPercent = c.xOffset = c.yOffset = 0),
                                (c.scaleX = c.scaleY = c.scaleZ = 1),
                                Ct(
                                    "transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin",
                                    {
                                        parser: function (t, e, i, r, n, a, l) {
                                            if (r._lastParsedTransform === l) return n;
                                            r._lastParsedTransform = l;
                                            var u,
                                                c = l.scale && "function" == typeof l.scale ? l.scale : 0;
                                            "function" == typeof l[i] && ((u = l[i]), (l[i] = e)), c && (l.scale = c(y, t));
                                            var h,
                                                d,
                                                p,
                                                f,
                                                m,
                                                g,
                                                _,
                                                w,
                                                T,
                                                b = t._gsTransform,
                                                x = t.style,
                                                S = kt.length,
                                                C = l,
                                                P = {},
                                                E = "transformOrigin",
                                                k = Xt(t, s, !0, C.parseTransform),
                                                A = C.transform && ("function" == typeof C.transform ? C.transform(y, v) : C.transform);
                                            if (((k.skewType = C.skewType || k.skewType || o.defaultSkewType), (r._transform = k), A && "string" == typeof A && At))
                                                ((d = X.style)[At] = A),
                                                    (d.display = "block"),
                                                    (d.position = "absolute"),
                                                    j.body.appendChild(X),
                                                    (h = Xt(X, null, !1)),
                                                    "simple" === k.skewType && (h.scaleY *= Math.cos(h.skewX * N)),
                                                    k.svg &&
                                                        ((g = k.xOrigin),
                                                        (_ = k.yOrigin),
                                                        (h.x -= k.xOffset),
                                                        (h.y -= k.yOffset),
                                                        (C.transformOrigin || C.svgOrigin) &&
                                                            ((A = {}), Bt(t, lt(C.transformOrigin), A, C.svgOrigin, C.smoothOrigin, !0), (g = A.xOrigin), (_ = A.yOrigin), (h.x -= A.xOffset - k.xOffset), (h.y -= A.yOffset - k.yOffset)),
                                                        (g || _) && ((w = Ut(X, !0)), (h.x -= g - (g * w[0] + _ * w[2])), (h.y -= _ - (g * w[1] + _ * w[3])))),
                                                    j.body.removeChild(X),
                                                    h.perspective || (h.perspective = k.perspective),
                                                    null != C.xPercent && (h.xPercent = ct(C.xPercent, k.xPercent)),
                                                    null != C.yPercent && (h.yPercent = ct(C.yPercent, k.yPercent));
                                            else if ("object" == typeof C) {
                                                if (
                                                    ((h = {
                                                        scaleX: ct(null != C.scaleX ? C.scaleX : C.scale, k.scaleX),
                                                        scaleY: ct(null != C.scaleY ? C.scaleY : C.scale, k.scaleY),
                                                        scaleZ: ct(C.scaleZ, k.scaleZ),
                                                        x: ct(C.x, k.x),
                                                        y: ct(C.y, k.y),
                                                        z: ct(C.z, k.z),
                                                        xPercent: ct(C.xPercent, k.xPercent),
                                                        yPercent: ct(C.yPercent, k.yPercent),
                                                        perspective: ct(C.transformPerspective, k.perspective),
                                                    }),
                                                    null != (m = C.directionalRotation))
                                                )
                                                    if ("object" == typeof m) for (d in m) C[d] = m[d];
                                                    else C.rotation = m;
                                                "string" == typeof C.x && -1 !== C.x.indexOf("%") && ((h.x = 0), (h.xPercent = ct(C.x, k.xPercent))),
                                                    "string" == typeof C.y && -1 !== C.y.indexOf("%") && ((h.y = 0), (h.yPercent = ct(C.y, k.yPercent))),
                                                    (h.rotation = ht("rotation" in C ? C.rotation : "shortRotation" in C ? C.shortRotation + "_short" : "rotationZ" in C ? C.rotationZ : k.rotation, k.rotation, "rotation", P)),
                                                    It &&
                                                        ((h.rotationX = ht("rotationX" in C ? C.rotationX : "shortRotationX" in C ? C.shortRotationX + "_short" : k.rotationX || 0, k.rotationX, "rotationX", P)),
                                                        (h.rotationY = ht("rotationY" in C ? C.rotationY : "shortRotationY" in C ? C.shortRotationY + "_short" : k.rotationY || 0, k.rotationY, "rotationY", P))),
                                                    (h.skewX = ht(C.skewX, k.skewX)),
                                                    (h.skewY = ht(C.skewY, k.skewY));
                                            }
                                            for (
                                                It && null != C.force3D && ((k.force3D = C.force3D), (f = !0)),
                                                    (p = k.force3D || k.z || k.rotationX || k.rotationY || h.z || h.rotationX || h.rotationY || h.perspective) || null == C.scale || (h.scaleZ = 1);
                                                --S > -1;

                                            )
                                                ((A = h[(T = kt[S])] - k[T]) > 1e-6 || A < -1e-6 || null != C[T] || null != F[T]) &&
                                                    ((f = !0), (n = new wt(k, T, k[T], A, n)), T in P && (n.e = P[T]), (n.xs0 = 0), (n.plugin = a), r._overwriteProps.push(n.n));
                                            return (
                                                (A = C.transformOrigin),
                                                k.svg &&
                                                    (A || C.svgOrigin) &&
                                                    ((g = k.xOffset),
                                                    (_ = k.yOffset),
                                                    Bt(t, lt(A), h, C.svgOrigin, C.smoothOrigin),
                                                    (n = Tt(k, "xOrigin", (b ? k : h).xOrigin, h.xOrigin, n, E)),
                                                    (n = Tt(k, "yOrigin", (b ? k : h).yOrigin, h.yOrigin, n, E)),
                                                    (g === k.xOffset && _ === k.yOffset) || ((n = Tt(k, "xOffset", b ? g : k.xOffset, k.xOffset, n, E)), (n = Tt(k, "yOffset", b ? _ : k.yOffset, k.yOffset, n, E))),
                                                    (A = "0px 0px")),
                                                (A || (It && p && k.zOrigin)) &&
                                                    (At
                                                        ? ((f = !0),
                                                          (T = Lt),
                                                          (A = (A || tt(t, T, s, !1, "50% 50%")) + ""),
                                                          ((n = new wt(x, T, 0, 0, n, -1, E)).b = x[T]),
                                                          (n.plugin = a),
                                                          It
                                                              ? ((d = k.zOrigin),
                                                                (A = A.split(" ")),
                                                                (k.zOrigin = (A.length > 2 && (0 === d || "0px" !== A[2]) ? parseFloat(A[2]) : d) || 0),
                                                                (n.xs0 = n.e = A[0] + " " + (A[1] || "50%") + " 0px"),
                                                                ((n = new wt(k, "zOrigin", 0, 0, n, -1, n.n)).b = d),
                                                                (n.xs0 = n.e = k.zOrigin))
                                                              : (n.xs0 = n.e = A))
                                                        : lt(A + "", k)),
                                                f && (r._transformType = (k.svg && Et) || (!p && 3 !== this._transformType) ? 2 : 3),
                                                u && (l[i] = u),
                                                c && (l.scale = c),
                                                n
                                            );
                                        },
                                        prefix: !0,
                                    }
                                ),
                                Ct("boxShadow", { defaultValue: "0px 0px 0px 0px #999", prefix: !0, color: !0, multi: !0, keyword: "inset" }),
                                Ct("borderRadius", {
                                    defaultValue: "0px",
                                    parser: function (t, e, i, n, a, o) {
                                        e = this.format(e);
                                        var l,
                                            u,
                                            c,
                                            h,
                                            d,
                                            p,
                                            f,
                                            m,
                                            g,
                                            v,
                                            y,
                                            _,
                                            w,
                                            T,
                                            b,
                                            x,
                                            S = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                                            C = t.style;
                                        for (g = parseFloat(t.offsetWidth), v = parseFloat(t.offsetHeight), l = e.split(" "), u = 0; u < S.length; u++)
                                            this.p.indexOf("border") && (S[u] = Z(S[u])),
                                                -1 !== (d = h = tt(t, S[u], s, !1, "0px")).indexOf(" ") && ((d = (h = d.split(" "))[0]), (h = h[1])),
                                                (p = c = l[u]),
                                                (f = parseFloat(d)),
                                                (_ = d.substr((f + "").length)),
                                                (w = "=" === p.charAt(1))
                                                    ? ((m = parseInt(p.charAt(0) + "1", 10)), (p = p.substr(2)), (m *= parseFloat(p)), (y = p.substr((m + "").length - (m < 0 ? 1 : 0)) || ""))
                                                    : ((m = parseFloat(p)), (y = p.substr((m + "").length))),
                                                "" === y && (y = r[i] || _),
                                                y !== _ &&
                                                    ((T = et(t, "borderLeft", f, _)),
                                                    (b = et(t, "borderTop", f, _)),
                                                    "%" === y
                                                        ? ((d = (T / g) * 100 + "%"), (h = (b / v) * 100 + "%"))
                                                        : "em" === y
                                                        ? ((d = T / (x = et(t, "borderLeft", 1, "em")) + "em"), (h = b / x + "em"))
                                                        : ((d = T + "px"), (h = b + "px")),
                                                    w && ((p = parseFloat(d) + m + y), (c = parseFloat(h) + m + y))),
                                                (a = bt(C, S[u], d + " " + h, p + " " + c, !1, "0px", a));
                                        return a;
                                    },
                                    prefix: !0,
                                    formatter: vt("0px 0px 0px 0px", !1, !0),
                                }),
                                Ct("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
                                    defaultValue: "0px",
                                    parser: function (t, e, i, r, n, a) {
                                        return bt(t.style, i, this.format(tt(t, i, s, !1, "0px 0px")), this.format(e), !1, "0px", n);
                                    },
                                    prefix: !0,
                                    formatter: vt("0px 0px", !1, !0),
                                }),
                                Ct("backgroundPosition", {
                                    defaultValue: "0 0",
                                    parser: function (t, e, i, r, n, a) {
                                        var o,
                                            l,
                                            u,
                                            c,
                                            h,
                                            d,
                                            p = "background-position",
                                            f = s || J(t, null),
                                            m = this.format(
                                                (f ? (g ? f.getPropertyValue(p + "-x") + " " + f.getPropertyValue(p + "-y") : f.getPropertyValue(p)) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"
                                            ),
                                            v = this.format(e);
                                        if ((-1 !== m.indexOf("%")) != (-1 !== v.indexOf("%")) && v.split(",").length < 2 && (d = tt(t, "backgroundImage").replace(M, "")) && "none" !== d) {
                                            for (o = m.split(" "), l = v.split(" "), q.setAttribute("src", d), u = 2; --u > -1; )
                                                (c = -1 !== (m = o[u]).indexOf("%")) !== (-1 !== l[u].indexOf("%")) &&
                                                    ((h = 0 === u ? t.offsetWidth - q.width : t.offsetHeight - q.height), (o[u] = c ? (parseFloat(m) / 100) * h + "px" : (parseFloat(m) / h) * 100 + "%"));
                                            m = o.join(" ");
                                        }
                                        return this.parseComplex(t.style, m, v, n, a);
                                    },
                                    formatter: lt,
                                }),
                                Ct("backgroundSize", {
                                    defaultValue: "0 0",
                                    formatter: function (t) {
                                        return (t += ""), lt(-1 === t.indexOf(" ") ? t + " " + t : t);
                                    },
                                }),
                                Ct("perspective", { defaultValue: "0px", prefix: !0 }),
                                Ct("perspectiveOrigin", { defaultValue: "50% 50%", prefix: !0 }),
                                Ct("transformStyle", { prefix: !0 }),
                                Ct("backfaceVisibility", { prefix: !0 }),
                                Ct("userSelect", { prefix: !0 }),
                                Ct("margin", { parser: yt("marginTop,marginRight,marginBottom,marginLeft") }),
                                Ct("padding", { parser: yt("paddingTop,paddingRight,paddingBottom,paddingLeft") }),
                                Ct("clip", {
                                    defaultValue: "rect(0px,0px,0px,0px)",
                                    parser: function (t, e, i, r, n, a) {
                                        var o, l, u;
                                        return (
                                            g < 9
                                                ? ((l = t.currentStyle), (u = g < 8 ? " " : ","), (o = "rect(" + l.clipTop + u + l.clipRight + u + l.clipBottom + u + l.clipLeft + ")"), (e = this.format(e).split(",").join(u)))
                                                : ((o = this.format(tt(t, this.p, s, !1, this.dflt))), (e = this.format(e))),
                                            this.parseComplex(t.style, o, e, n, a)
                                        );
                                    },
                                }),
                                Ct("textShadow", { defaultValue: "0px 0px 0px #999", color: !0, multi: !0 }),
                                Ct("autoRound,strictUnits", {
                                    parser: function (t, e, i, r, n) {
                                        return n;
                                    },
                                }),
                                Ct("border", {
                                    defaultValue: "0px solid #000",
                                    parser: function (t, e, i, r, n, a) {
                                        var o = tt(t, "borderTopWidth", s, !1, "0px"),
                                            l = this.format(e).split(" "),
                                            u = l[0].replace(x, "");
                                        return (
                                            "px" !== u && (o = parseFloat(o) / et(t, "borderTopWidth", 1, u) + u),
                                            this.parseComplex(t.style, this.format(o + " " + tt(t, "borderTopStyle", s, !1, "solid") + " " + tt(t, "borderTopColor", s, !1, "#000")), l.join(" "), n, a)
                                        );
                                    },
                                    color: !0,
                                    formatter: function (t) {
                                        var e = t.split(" ");
                                        return e[0] + " " + (e[1] || "solid") + " " + (t.match(gt) || ["#000"])[0];
                                    },
                                }),
                                Ct("borderWidth", { parser: yt("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth") }),
                                Ct("float,cssFloat,styleFloat", {
                                    parser: function (t, e, i, r, n, s) {
                                        var a = t.style,
                                            o = "cssFloat" in a ? "cssFloat" : "styleFloat";
                                        return new wt(a, o, 0, 0, n, -1, i, !1, 0, a[o], e);
                                    },
                                });
                            var Yt = function (t) {
                                var e,
                                    i = this.t,
                                    r = i.filter || tt(this.data, "filter") || "",
                                    n = (this.s + this.c * t) | 0;
                                100 === n &&
                                    (-1 === r.indexOf("atrix(") && -1 === r.indexOf("radient(") && -1 === r.indexOf("oader(") ? (i.removeAttribute("filter"), (e = !tt(this.data, "filter"))) : ((i.filter = r.replace(P, "")), (e = !0))),
                                    e ||
                                        (this.xn1 && (i.filter = r = r || "alpha(opacity=" + n + ")"),
                                        -1 === r.indexOf("pacity") ? (0 === n && this.xn1) || (i.filter = r + " alpha(opacity=" + n + ")") : (i.filter = r.replace(S, "opacity=" + n)));
                            };
                            Ct("opacity,alpha,autoAlpha", {
                                defaultValue: "1",
                                parser: function (t, e, i, r, n, a) {
                                    var o = parseFloat(tt(t, "opacity", s, !1, "1")),
                                        l = t.style,
                                        u = "autoAlpha" === i;
                                    return (
                                        "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + o),
                                        u && 1 === o && "hidden" === tt(t, "visibility", s) && 0 !== e && (o = 0),
                                        V
                                            ? (n = new wt(l, "opacity", o, e - o, n))
                                            : (((n = new wt(l, "opacity", 100 * o, 100 * (e - o), n)).xn1 = u ? 1 : 0),
                                              (l.zoom = 1),
                                              (n.type = 2),
                                              (n.b = "alpha(opacity=" + n.s + ")"),
                                              (n.e = "alpha(opacity=" + (n.s + n.c) + ")"),
                                              (n.data = t),
                                              (n.plugin = a),
                                              (n.setRatio = Yt)),
                                        u &&
                                            (((n = new wt(l, "visibility", 0, 0, n, -1, null, !1, 0, 0 !== o ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit")).xs0 = "inherit"), r._overwriteProps.push(n.n), r._overwriteProps.push(i)),
                                        n
                                    );
                                },
                            });
                            var Vt = function (t, e) {
                                    e && (t.removeProperty ? (("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6)) || (e = "-" + e), t.removeProperty(e.replace(k, "-$1").toLowerCase())) : t.removeAttribute(e));
                                },
                                Gt = function (t) {
                                    if (((this.t._gsClassPT = this), 1 === t || 0 === t)) {
                                        this.t.setAttribute("class", 0 === t ? this.b : this.e);
                                        for (var e = this.data, i = this.t.style; e; ) e.v ? (i[e.p] = e.v) : Vt(i, e.p), (e = e._next);
                                        1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null);
                                    } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e);
                                };
                            Ct("className", {
                                parser: function (t, e, r, n, a, o, l) {
                                    var u,
                                        c,
                                        h,
                                        d,
                                        p,
                                        f = t.getAttribute("class") || "",
                                        m = t.style.cssText;
                                    if (((a = n._classNamePT = new wt(t, r, 0, 0, a, 2)), (a.setRatio = Gt), (a.pr = -11), (i = !0), (a.b = f), (c = rt(t, s)), (h = t._gsClassPT))) {
                                        for (d = {}, p = h.data; p; ) (d[p.p] = 1), (p = p._next);
                                        h.setRatio(1);
                                    }
                                    return (
                                        (t._gsClassPT = a),
                                        (a.e = "=" !== e.charAt(1) ? e : f.replace(new RegExp("(?:\\s|^)" + e.substr(2) + "(?![\\w-])"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : "")),
                                        t.setAttribute("class", a.e),
                                        (u = nt(t, c, rt(t), l, d)),
                                        t.setAttribute("class", f),
                                        (a.data = u.firstMPT),
                                        (t.style.cssText = m),
                                        (a = a.xfirst = n.parse(t, u.difs, a, o))
                                    );
                                },
                            });
                            var Qt = function (t) {
                                if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                                    var e,
                                        i,
                                        r,
                                        n,
                                        s,
                                        a = this.t.style,
                                        o = u.transform.parse;
                                    if ("all" === this.e) (a.cssText = ""), (n = !0);
                                    else for (r = (e = this.e.split(" ").join("").split(",")).length; --r > -1; ) (i = e[r]), u[i] && (u[i].parse === o ? (n = !0) : (i = "transformOrigin" === i ? Lt : u[i].p)), Vt(a, i);
                                    n && (Vt(a, At), (s = this.t._gsTransform) && (s.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform));
                                }
                            };
                            for (
                                Ct("clearProps", {
                                    parser: function (t, e, r, n, s) {
                                        return (s = new wt(t, r, 0, 0, s, 2)), (s.setRatio = Qt), (s.e = e), (s.pr = -10), (s.data = n._tween), (i = !0), s;
                                    },
                                }),
                                    c = "bezier,throwProps,physicsProps,physics2D".split(","),
                                    xt = c.length;
                                xt--;

                            )
                                Pt(c[xt]);
                            ((c = o.prototype)._firstPT = c._lastParsedTransform = c._transform = null),
                                (c._onInitTween = function (t, e, n, l) {
                                    if (!t.nodeType) return !1;
                                    (this._target = v = t), (this._tween = n), (this._vars = e), (y = l), (h = e.autoRound), (i = !1), (r = e.suffixMap || o.suffixMap), (s = J(t, "")), (a = this._overwriteProps);
                                    var c,
                                        f,
                                        g,
                                        _,
                                        w,
                                        T,
                                        b,
                                        x,
                                        S,
                                        P = t.style;
                                    if (
                                        (d && "" === P.zIndex && (("auto" !== (c = tt(t, "zIndex", s)) && "" !== c) || this._addLazySet(P, "zIndex", 0)),
                                        "string" == typeof e && ((_ = P.cssText), (c = rt(t, s)), (P.cssText = _ + ";" + e), (c = nt(t, c, rt(t)).difs), !V && C.test(e) && (c.opacity = parseFloat(RegExp.$1)), (e = c), (P.cssText = _)),
                                        e.className ? (this._firstPT = f = u.className.parse(t, e.className, "className", this, null, null, e)) : (this._firstPT = f = this.parse(t, e, null)),
                                        this._transformType)
                                    ) {
                                        for (
                                            S = 3 === this._transformType,
                                                At
                                                    ? p &&
                                                      ((d = !0),
                                                      "" === P.zIndex && (("auto" !== (b = tt(t, "zIndex", s)) && "" !== b) || this._addLazySet(P, "zIndex", 0)),
                                                      m && this._addLazySet(P, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (S ? "visible" : "hidden")))
                                                    : (P.zoom = 1),
                                                g = f;
                                            g && g._next;

                                        )
                                            g = g._next;
                                        (x = new wt(t, "transform", 0, 0, null, 2)), this._linkCSSP(x, null, g), (x.setRatio = At ? Wt : qt), (x.data = this._transform || Xt(t, s, !0)), (x.tween = n), (x.pr = -1), a.pop();
                                    }
                                    if (i) {
                                        for (; f; ) {
                                            for (T = f._next, g = _; g && g.pr > f.pr; ) g = g._next;
                                            (f._prev = g ? g._prev : w) ? (f._prev._next = f) : (_ = f), (f._next = g) ? (g._prev = f) : (w = f), (f = T);
                                        }
                                        this._firstPT = _;
                                    }
                                    return !0;
                                }),
                                (c.parse = function (t, e, i, n) {
                                    var a,
                                        o,
                                        l,
                                        c,
                                        d,
                                        p,
                                        f,
                                        m,
                                        g,
                                        _,
                                        w = t.style;
                                    for (a in e) {
                                        if (("function" == typeof (p = e[a]) && (p = p(y, v)), (o = u[a]))) i = o.parse(t, p, a, this, i, n, e);
                                        else {
                                            if ("--" === a.substr(0, 2)) {
                                                this._tween._propLookup[a] = this._addTween.call(this._tween, t.style, "setProperty", J(t).getPropertyValue(a) + "", p + "", a, !1, a);
                                                continue;
                                            }
                                            (d = tt(t, a, s) + ""),
                                                (g = "string" == typeof p),
                                                "color" === a || "fill" === a || "stroke" === a || -1 !== a.indexOf("Color") || (g && E.test(p))
                                                    ? (g || (p = ((p = ft(p)).length > 3 ? "rgba(" : "rgb(") + p.join(",") + ")"), (i = bt(w, a, d, p, !0, "transparent", i, 0, n)))
                                                    : g && D.test(p)
                                                    ? (i = bt(w, a, d, p, !0, null, i, 0, n))
                                                    : ((f = (l = parseFloat(d)) || 0 === l ? d.substr((l + "").length) : ""),
                                                      ("" !== d && "auto" !== d) ||
                                                          ("width" === a || "height" === a ? ((l = ot(t, a, s)), (f = "px")) : "left" === a || "top" === a ? ((l = it(t, a, s)), (f = "px")) : ((l = "opacity" !== a ? 0 : 1), (f = ""))),
                                                      (_ = g && "=" === p.charAt(1))
                                                          ? ((c = parseInt(p.charAt(0) + "1", 10)), (p = p.substr(2)), (c *= parseFloat(p)), (m = p.replace(x, "")))
                                                          : ((c = parseFloat(p)), (m = g ? p.replace(x, "") : "")),
                                                      "" === m && (m = a in r ? r[a] : f),
                                                      (p = c || 0 === c ? (_ ? c + l : c) + m : e[a]),
                                                      f !== m &&
                                                          (("" === m && "lineHeight" !== a) ||
                                                              ((c || 0 === c) &&
                                                                  l &&
                                                                  ((l = et(t, a, l, f)),
                                                                  "%" === m
                                                                      ? ((l /= et(t, a, 100, "%") / 100), !0 !== e.strictUnits && (d = l + "%"))
                                                                      : "em" === m || "rem" === m || "vw" === m || "vh" === m
                                                                      ? (l /= et(t, a, 1, m))
                                                                      : "px" !== m && ((c = et(t, a, c, m)), (m = "px")),
                                                                  _ && (c || 0 === c) && (p = c + l + m)))),
                                                      _ && (c += l),
                                                      (!l && 0 !== l) || (!c && 0 !== c)
                                                          ? void 0 !== w[a] && (p || (p + "" != "NaN" && null != p))
                                                              ? ((i = new wt(w, a, c || l || 0, 0, i, -1, a, !1, 0, d, p)).xs0 = "none" !== p || ("display" !== a && -1 === a.indexOf("Style")) ? p : d)
                                                              : Q("invalid " + a + " tween value: " + e[a])
                                                          : ((i = new wt(w, a, l, c - l, i, 0, a, !1 !== h && ("px" === m || "zIndex" === a), 0, d, p)).xs0 = m));
                                        }
                                        n && i && !i.plugin && (i.plugin = n);
                                    }
                                    return i;
                                }),
                                (c.setRatio = function (t) {
                                    var e,
                                        i,
                                        r,
                                        n = this._firstPT;
                                    if (1 !== t || (this._tween._time !== this._tween._duration && 0 !== this._tween._time))
                                        if (t || (this._tween._time !== this._tween._duration && 0 !== this._tween._time) || -1e-6 === this._tween._rawPrevTime)
                                            for (; n; ) {
                                                if (((e = n.c * t + n.s), n.r ? (e = Math.round(e)) : e < 1e-6 && e > -1e-6 && (e = 0), n.type))
                                                    if (1 === n.type)
                                                        if (2 === (r = n.l)) n.t[n.p] = n.xs0 + e + n.xs1 + n.xn1 + n.xs2;
                                                        else if (3 === r) n.t[n.p] = n.xs0 + e + n.xs1 + n.xn1 + n.xs2 + n.xn2 + n.xs3;
                                                        else if (4 === r) n.t[n.p] = n.xs0 + e + n.xs1 + n.xn1 + n.xs2 + n.xn2 + n.xs3 + n.xn3 + n.xs4;
                                                        else if (5 === r) n.t[n.p] = n.xs0 + e + n.xs1 + n.xn1 + n.xs2 + n.xn2 + n.xs3 + n.xn3 + n.xs4 + n.xn4 + n.xs5;
                                                        else {
                                                            for (i = n.xs0 + e + n.xs1, r = 1; r < n.l; r++) i += n["xn" + r] + n["xs" + (r + 1)];
                                                            n.t[n.p] = i;
                                                        }
                                                    else -1 === n.type ? (n.t[n.p] = n.xs0) : n.setRatio && n.setRatio(t);
                                                else n.t[n.p] = e + n.xs0;
                                                n = n._next;
                                            }
                                        else for (; n; ) 2 !== n.type ? (n.t[n.p] = n.b) : n.setRatio(t), (n = n._next);
                                    else
                                        for (; n; ) {
                                            if (2 !== n.type)
                                                if (n.r && -1 !== n.type)
                                                    if (((e = Math.round(n.s + n.c)), n.type)) {
                                                        if (1 === n.type) {
                                                            for (r = n.l, i = n.xs0 + e + n.xs1, r = 1; r < n.l; r++) i += n["xn" + r] + n["xs" + (r + 1)];
                                                            n.t[n.p] = i;
                                                        }
                                                    } else n.t[n.p] = e + n.xs0;
                                                else n.t[n.p] = n.e;
                                            else n.setRatio(t);
                                            n = n._next;
                                        }
                                }),
                                (c._enableTransforms = function (t) {
                                    (this._transform = this._transform || Xt(this._target, s, !0)), (this._transformType = (this._transform.svg && Et) || (!t && 3 !== this._transformType) ? 2 : 3);
                                });
                            var $t = function (t) {
                                (this.t[this.p] = this.e), this.data._linkCSSP(this, this._next, null, !0);
                            };
                            (c._addLazySet = function (t, e, i) {
                                var r = (this._firstPT = new wt(t, e, 0, 0, this._firstPT, 2));
                                (r.e = i), (r.setRatio = $t), (r.data = this);
                            }),
                                (c._linkCSSP = function (t, e, i, r) {
                                    return (
                                        t &&
                                            (e && (e._prev = t),
                                            t._next && (t._next._prev = t._prev),
                                            t._prev ? (t._prev._next = t._next) : this._firstPT === t && ((this._firstPT = t._next), (r = !0)),
                                            i ? (i._next = t) : r || null !== this._firstPT || (this._firstPT = t),
                                            (t._next = e),
                                            (t._prev = i)),
                                        t
                                    );
                                }),
                                (c._mod = function (t) {
                                    for (var e = this._firstPT; e; ) "function" == typeof t[e.p] && t[e.p] === Math.round && (e.r = 1), (e = e._next);
                                }),
                                (c._kill = function (e) {
                                    var i,
                                        r,
                                        n,
                                        s = e;
                                    if (e.autoAlpha || e.alpha) {
                                        s = {};
                                        for (r in e) s[r] = e[r];
                                        (s.opacity = 1), s.autoAlpha && (s.visibility = 1);
                                    }
                                    for (
                                        e.className &&
                                            (i = this._classNamePT) &&
                                            ((n = i.xfirst) && n._prev ? this._linkCSSP(n._prev, i._next, n._prev._prev) : n === this._firstPT && (this._firstPT = i._next),
                                            i._next && this._linkCSSP(i._next, i._next._next, n._prev),
                                            (this._classNamePT = null)),
                                            i = this._firstPT;
                                        i;

                                    )
                                        i.plugin && i.plugin !== r && i.plugin._kill && (i.plugin._kill(e), (r = i.plugin)), (i = i._next);
                                    return t.prototype._kill.call(this, s);
                                });
                            var Kt = function (t, e, i) {
                                var r, n, s, a;
                                if (t.slice) for (n = t.length; --n > -1; ) Kt(t[n], e, i);
                                else for (n = (r = t.childNodes).length; --n > -1; ) (a = (s = r[n]).type), s.style && (e.push(rt(s)), i && i.push(s)), (1 !== a && 9 !== a && 11 !== a) || !s.childNodes.length || Kt(s, e, i);
                            };
                            return (
                                (o.cascadeTo = function (t, i, r) {
                                    var n,
                                        s,
                                        a,
                                        o,
                                        l = e.to(t, i, r),
                                        u = [l],
                                        c = [],
                                        h = [],
                                        d = [],
                                        p = e._internals.reservedProps;
                                    for (t = l._targets || l.target, Kt(t, c, d), l.render(i, !0, !0), Kt(t, h), l.render(0, !0, !0), l._enabled(!0), n = d.length; --n > -1; )
                                        if ((s = nt(d[n], c[n], h[n])).firstMPT) {
                                            s = s.difs;
                                            for (a in r) p[a] && (s[a] = r[a]);
                                            o = {};
                                            for (a in s) o[a] = c[n][a];
                                            u.push(e.fromTo(d[n], i, o, s));
                                        }
                                    return u;
                                }),
                                t.activate([o]),
                                o
                            );
                        },
                        !0
                    ),
                    (function () {
                        var t = function (t) {
                                for (; t; ) t.f || t.blob || (t.m = Math.round), (t = t._next);
                            },
                            e = n._gsDefine.plugin({
                                propName: "roundProps",
                                version: "1.6.0",
                                priority: -1,
                                API: 2,
                                init: function (t, e, i) {
                                    return (this._tween = i), !0;
                                },
                            }).prototype;
                        (e._onInitAllProps = function () {
                            for (var e, i, r, n = this._tween, s = n.vars.roundProps.join ? n.vars.roundProps : n.vars.roundProps.split(","), a = s.length, o = {}, l = n._propLookup.roundProps; --a > -1; ) o[s[a]] = Math.round;
                            for (a = s.length; --a > -1; )
                                for (e = s[a], i = n._firstPT; i; )
                                    (r = i._next),
                                        i.pg
                                            ? i.t._mod(o)
                                            : i.n === e &&
                                              (2 === i.f && i.t
                                                  ? t(i.t._firstPT)
                                                  : (this._add(i.t, e, i.s, i.c), r && (r._prev = i._prev), i._prev ? (i._prev._next = r) : n._firstPT === i && (n._firstPT = r), (i._next = i._prev = null), (n._propLookup[e] = l))),
                                        (i = r);
                            return !1;
                        }),
                            (e._add = function (t, e, i, r) {
                                this._addTween(t, e, i, i + r, e, Math.round), this._overwriteProps.push(e);
                            });
                    })(),
                    n._gsDefine.plugin({
                        propName: "attr",
                        API: 2,
                        version: "0.6.1",
                        init: function (t, e, i, r) {
                            var n, s;
                            if ("function" != typeof t.setAttribute) return !1;
                            for (n in e) "function" == typeof (s = e[n]) && (s = s(r, t)), this._addTween(t, "setAttribute", t.getAttribute(n) + "", s + "", n, !1, n), this._overwriteProps.push(n);
                            return !0;
                        },
                    }),
                    (n._gsDefine.plugin({
                        propName: "directionalRotation",
                        version: "0.3.1",
                        API: 2,
                        init: function (t, e, i, r) {
                            "object" != typeof e && (e = { rotation: e }), (this.finals = {});
                            var n,
                                s,
                                a,
                                o,
                                l,
                                u,
                                c = !0 === e.useRadians ? 2 * Math.PI : 360;
                            for (n in e)
                                "useRadians" !== n &&
                                    ("function" == typeof (o = e[n]) && (o = o(r, t)),
                                    (s = (u = (o + "").split("_"))[0]),
                                    (a = parseFloat("function" != typeof t[n] ? t[n] : t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)]())),
                                    (l = (o = this.finals[n] = "string" == typeof s && "=" === s.charAt(1) ? a + parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2)) : Number(s) || 0) - a),
                                    u.length &&
                                        (-1 !== (s = u.join("_")).indexOf("short") && (l %= c) !== l % (c / 2) && (l = l < 0 ? l + c : l - c),
                                        -1 !== s.indexOf("_cw") && l < 0 ? (l = ((l + 9999999999 * c) % c) - ((l / c) | 0) * c) : -1 !== s.indexOf("ccw") && l > 0 && (l = ((l - 9999999999 * c) % c) - ((l / c) | 0) * c)),
                                    (l > 1e-6 || l < -1e-6) && (this._addTween(t, n, a, a + l, n), this._overwriteProps.push(n)));
                            return !0;
                        },
                        set: function (t) {
                            var e;
                            if (1 !== t) this._super.setRatio.call(this, t);
                            else for (e = this._firstPT; e; ) e.f ? e.t[e.p](this.finals[e.p]) : (e.t[e.p] = this.finals[e.p]), (e = e._next);
                        },
                    })._autoCSS = !0),
                    n._gsDefine(
                        "easing.Back",
                        ["easing.Ease"],
                        function (t) {
                            var e,
                                i,
                                r,
                                s = n.GreenSockGlobals || n,
                                a = s.com.greensock,
                                o = 2 * Math.PI,
                                l = Math.PI / 2,
                                u = a._class,
                                c = function (e, i) {
                                    var r = u("easing." + e, function () {}, !0),
                                        n = (r.prototype = new t());
                                    return (n.constructor = r), (n.getRatio = i), r;
                                },
                                h = t.register || function () {},
                                d = function (t, e, i, r, n) {
                                    var s = u("easing." + t, { easeOut: new e(), easeIn: new i(), easeInOut: new r() }, !0);
                                    return h(s, t), s;
                                },
                                p = function (t, e, i) {
                                    (this.t = t), (this.v = e), i && ((this.next = i), (i.prev = this), (this.c = i.v - e), (this.gap = i.t - t));
                                },
                                f = function (e, i) {
                                    var r = u(
                                            "easing." + e,
                                            function (t) {
                                                (this._p1 = t || 0 === t ? t : 1.70158), (this._p2 = 1.525 * this._p1);
                                            },
                                            !0
                                        ),
                                        n = (r.prototype = new t());
                                    return (
                                        (n.constructor = r),
                                        (n.getRatio = i),
                                        (n.config = function (t) {
                                            return new r(t);
                                        }),
                                        r
                                    );
                                },
                                m = d(
                                    "Back",
                                    f("BackOut", function (t) {
                                        return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1;
                                    }),
                                    f("BackIn", function (t) {
                                        return t * t * ((this._p1 + 1) * t - this._p1);
                                    }),
                                    f("BackInOut", function (t) {
                                        return (t *= 2) < 1 ? 0.5 * t * t * ((this._p2 + 1) * t - this._p2) : 0.5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2);
                                    })
                                ),
                                g = u(
                                    "easing.SlowMo",
                                    function (t, e, i) {
                                        (e = e || 0 === e ? e : 0.7),
                                            null == t ? (t = 0.7) : t > 1 && (t = 1),
                                            (this._p = 1 !== t ? e : 0),
                                            (this._p1 = (1 - t) / 2),
                                            (this._p2 = t),
                                            (this._p3 = this._p1 + this._p2),
                                            (this._calcEnd = !0 === i);
                                    },
                                    !0
                                ),
                                v = (g.prototype = new t());
                            return (
                                (v.constructor = g),
                                (v.getRatio = function (t) {
                                    var e = t + (0.5 - t) * this._p;
                                    return t < this._p1
                                        ? this._calcEnd
                                            ? 1 - (t = 1 - t / this._p1) * t
                                            : e - (t = 1 - t / this._p1) * t * t * t * e
                                        : t > this._p3
                                        ? this._calcEnd
                                            ? 1 - (t = (t - this._p3) / this._p1) * t
                                            : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t
                                        : this._calcEnd
                                        ? 1
                                        : e;
                                }),
                                (g.ease = new g(0.7, 0.7)),
                                (v.config = g.config = function (t, e, i) {
                                    return new g(t, e, i);
                                }),
                                (e = u(
                                    "easing.SteppedEase",
                                    function (t, e) {
                                        (t = t || 1), (this._p1 = 1 / t), (this._p2 = t + (e ? 0 : 1)), (this._p3 = e ? 1 : 0);
                                    },
                                    !0
                                )),
                                (v = e.prototype = new t()),
                                (v.constructor = e),
                                (v.getRatio = function (t) {
                                    return t < 0 ? (t = 0) : t >= 1 && (t = 0.999999999), (((this._p2 * t) | 0) + this._p3) * this._p1;
                                }),
                                (v.config = e.config = function (t, i) {
                                    return new e(t, i);
                                }),
                                (i = u(
                                    "easing.RoughEase",
                                    function (e) {
                                        for (
                                            var i,
                                                r,
                                                n,
                                                s,
                                                a,
                                                o,
                                                l = (e = e || {}).taper || "none",
                                                u = [],
                                                c = 0,
                                                h = 0 | (e.points || 20),
                                                d = h,
                                                f = !1 !== e.randomize,
                                                m = !0 === e.clamp,
                                                g = e.template instanceof t ? e.template : null,
                                                v = "number" == typeof e.strength ? 0.4 * e.strength : 0.4;
                                            --d > -1;

                                        )
                                            (i = f ? Math.random() : (1 / h) * d),
                                                (r = g ? g.getRatio(i) : i),
                                                (n = "none" === l ? v : "out" === l ? (s = 1 - i) * s * v : "in" === l ? i * i * v : i < 0.5 ? (s = 2 * i) * s * 0.5 * v : (s = 2 * (1 - i)) * s * 0.5 * v),
                                                f ? (r += Math.random() * n - 0.5 * n) : d % 2 ? (r += 0.5 * n) : (r -= 0.5 * n),
                                                m && (r > 1 ? (r = 1) : r < 0 && (r = 0)),
                                                (u[c++] = { x: i, y: r });
                                        for (
                                            u.sort(function (t, e) {
                                                return t.x - e.x;
                                            }),
                                                o = new p(1, 1, null),
                                                d = h;
                                            --d > -1;

                                        )
                                            (a = u[d]), (o = new p(a.x, a.y, o));
                                        this._prev = new p(0, 0, 0 !== o.t ? o : o.next);
                                    },
                                    !0
                                )),
                                (v = i.prototype = new t()),
                                (v.constructor = i),
                                (v.getRatio = function (t) {
                                    var e = this._prev;
                                    if (t > e.t) {
                                        for (; e.next && t >= e.t; ) e = e.next;
                                        e = e.prev;
                                    } else for (; e.prev && t <= e.t; ) e = e.prev;
                                    return (this._prev = e), e.v + ((t - e.t) / e.gap) * e.c;
                                }),
                                (v.config = function (t) {
                                    return new i(t);
                                }),
                                (i.ease = new i()),
                                d(
                                    "Bounce",
                                    c("BounceOut", function (t) {
                                        return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375 : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
                                    }),
                                    c("BounceIn", function (t) {
                                        return (t = 1 - t) < 1 / 2.75
                                            ? 1 - 7.5625 * t * t
                                            : t < 2 / 2.75
                                            ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + 0.75)
                                            : t < 2.5 / 2.75
                                            ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375)
                                            : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375);
                                    }),
                                    c("BounceInOut", function (t) {
                                        var e = t < 0.5;
                                        return (
                                            (t = e ? 1 - 2 * t : 2 * t - 1) < 1 / 2.75
                                                ? (t *= 7.5625 * t)
                                                : (t = t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375 : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375),
                                            e ? 0.5 * (1 - t) : 0.5 * t + 0.5
                                        );
                                    })
                                ),
                                d(
                                    "Circ",
                                    c("CircOut", function (t) {
                                        return Math.sqrt(1 - (t -= 1) * t);
                                    }),
                                    c("CircIn", function (t) {
                                        return -(Math.sqrt(1 - t * t) - 1);
                                    }),
                                    c("CircInOut", function (t) {
                                        return (t *= 2) < 1 ? -0.5 * (Math.sqrt(1 - t * t) - 1) : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
                                    })
                                ),
                                (r = function (e, i, r) {
                                    var n = u(
                                            "easing." + e,
                                            function (t, e) {
                                                (this._p1 = t >= 1 ? t : 1), (this._p2 = (e || r) / (t < 1 ? t : 1)), (this._p3 = (this._p2 / o) * (Math.asin(1 / this._p1) || 0)), (this._p2 = o / this._p2);
                                            },
                                            !0
                                        ),
                                        s = (n.prototype = new t());
                                    return (
                                        (s.constructor = n),
                                        (s.getRatio = i),
                                        (s.config = function (t, e) {
                                            return new n(t, e);
                                        }),
                                        n
                                    );
                                }),
                                d(
                                    "Elastic",
                                    r(
                                        "ElasticOut",
                                        function (t) {
                                            return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1;
                                        },
                                        0.3
                                    ),
                                    r(
                                        "ElasticIn",
                                        function (t) {
                                            return -this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2);
                                        },
                                        0.3
                                    ),
                                    r(
                                        "ElasticInOut",
                                        function (t) {
                                            return (t *= 2) < 1 ? this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * -0.5 : this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * 0.5 + 1;
                                        },
                                        0.45
                                    )
                                ),
                                d(
                                    "Expo",
                                    c("ExpoOut", function (t) {
                                        return 1 - Math.pow(2, -10 * t);
                                    }),
                                    c("ExpoIn", function (t) {
                                        return Math.pow(2, 10 * (t - 1)) - 0.001;
                                    }),
                                    c("ExpoInOut", function (t) {
                                        return (t *= 2) < 1 ? 0.5 * Math.pow(2, 10 * (t - 1)) : 0.5 * (2 - Math.pow(2, -10 * (t - 1)));
                                    })
                                ),
                                d(
                                    "Sine",
                                    c("SineOut", function (t) {
                                        return Math.sin(t * l);
                                    }),
                                    c("SineIn", function (t) {
                                        return 1 - Math.cos(t * l);
                                    }),
                                    c("SineInOut", function (t) {
                                        return -0.5 * (Math.cos(Math.PI * t) - 1);
                                    })
                                ),
                                u(
                                    "easing.EaseLookup",
                                    {
                                        find: function (e) {
                                            return t.map[e];
                                        },
                                    },
                                    !0
                                ),
                                h(s.SlowMo, "SlowMo", "ease,"),
                                h(i, "RoughEase", "ease,"),
                                h(e, "SteppedEase", "ease,"),
                                m
                            );
                        },
                        !0
                    );
            }),
                n._gsDefine && n._gsQueue.pop()(),
                (function (i, n) {
                    "use strict";
                    var s = {},
                        a = i.document,
                        o = (i.GreenSockGlobals = i.GreenSockGlobals || i);
                    if (!o.TweenLite) {
                        var l,
                            u,
                            c,
                            h,
                            d,
                            p = function (t) {
                                var e,
                                    i = t.split("."),
                                    r = o;
                                for (e = 0; e < i.length; e++) r[i[e]] = r = r[i[e]] || {};
                                return r;
                            },
                            f = p("com.greensock"),
                            m = function (t) {
                                var e,
                                    i = [],
                                    r = t.length;
                                for (e = 0; e !== r; i.push(t[e++]));
                                return i;
                            },
                            g = function () {},
                            v = (function () {
                                var t = Object.prototype.toString,
                                    e = t.call([]);
                                return function (i) {
                                    return null != i && (i instanceof Array || ("object" == typeof i && !!i.push && t.call(i) === e));
                                };
                            })(),
                            y = {},
                            _ = function (i, n, a, l) {
                                (this.sc = y[i] ? y[i].sc : []), (y[i] = this), (this.gsClass = null), (this.func = a);
                                var u = [];
                                (this.check = function (c) {
                                    for (var h, d, f, m, g = n.length, v = g; --g > -1; ) (h = y[n[g]] || new _(n[g], [])).gsClass ? ((u[g] = h.gsClass), v--) : c && h.sc.push(this);
                                    if (0 === v && a) {
                                        if (((d = ("com.greensock." + i).split(".")), (f = d.pop()), (m = p(d.join("."))[f] = this.gsClass = a.apply(a, u)), l))
                                            if (((o[f] = s[f] = m), void 0 !== t && t.exports))
                                                if ("TweenMax" === i) {
                                                    t.exports = s.TweenMax = m;
                                                    for (g in s) m[g] = s[g];
                                                } else s.TweenMax && (s.TweenMax[f] = m);
                                            else
                                                void 0 ===
                                                    (r = function () {
                                                        return m;
                                                    }.apply(e, [])) || (t.exports = r);
                                        for (g = 0; g < this.sc.length; g++) this.sc[g].check();
                                    }
                                }),
                                    this.check(!0);
                            },
                            w = (i._gsDefine = function (t, e, i, r) {
                                return new _(t, e, i, r);
                            }),
                            T = (f._class = function (t, e, i) {
                                return (
                                    (e = e || function () {}),
                                    w(
                                        t,
                                        [],
                                        function () {
                                            return e;
                                        },
                                        i
                                    ),
                                    e
                                );
                            });
                        w.globals = o;
                        var b = [0, 0, 1, 1],
                            x = T(
                                "easing.Ease",
                                function (t, e, i, r) {
                                    (this._func = t), (this._type = i || 0), (this._power = r || 0), (this._params = e ? b.concat(e) : b);
                                },
                                !0
                            ),
                            S = (x.map = {}),
                            C = (x.register = function (t, e, i, r) {
                                for (var n, s, a, o, l = e.split(","), u = l.length, c = (i || "easeIn,easeOut,easeInOut").split(","); --u > -1; )
                                    for (s = l[u], n = r ? T("easing." + s, null, !0) : f.easing[s] || {}, a = c.length; --a > -1; ) (o = c[a]), (S[s + "." + o] = S[o + s] = n[o] = t.getRatio ? t : t[o] || new t());
                            });
                        for (
                            (c = x.prototype)._calcEnd = !1,
                                c.getRatio = function (t) {
                                    if (this._func) return (this._params[0] = t), this._func.apply(null, this._params);
                                    var e = this._type,
                                        i = this._power,
                                        r = 1 === e ? 1 - t : 2 === e ? t : t < 0.5 ? 2 * t : 2 * (1 - t);
                                    return 1 === i ? (r *= r) : 2 === i ? (r *= r * r) : 3 === i ? (r *= r * r * r) : 4 === i && (r *= r * r * r * r), 1 === e ? 1 - r : 2 === e ? r : t < 0.5 ? r / 2 : 1 - r / 2;
                                },
                                u = (l = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"]).length;
                            --u > -1;

                        )
                            (c = l[u] + ",Power" + u), C(new x(null, null, 1, u), c, "easeOut", !0), C(new x(null, null, 2, u), c, "easeIn" + (0 === u ? ",easeNone" : "")), C(new x(null, null, 3, u), c, "easeInOut");
                        (S.linear = f.easing.Linear.easeIn), (S.swing = f.easing.Quad.easeInOut);
                        var P = T("events.EventDispatcher", function (t) {
                            (this._listeners = {}), (this._eventTarget = t || this);
                        });
                        ((c = P.prototype).addEventListener = function (t, e, i, r, n) {
                            n = n || 0;
                            var s,
                                a,
                                o = this._listeners[t],
                                l = 0;
                            for (this !== h || d || h.wake(), null == o && (this._listeners[t] = o = []), a = o.length; --a > -1; ) (s = o[a]).c === e && s.s === i ? o.splice(a, 1) : 0 === l && s.pr < n && (l = a + 1);
                            o.splice(l, 0, { c: e, s: i, up: r, pr: n });
                        }),
                            (c.removeEventListener = function (t, e) {
                                var i,
                                    r = this._listeners[t];
                                if (r) for (i = r.length; --i > -1; ) if (r[i].c === e) return void r.splice(i, 1);
                            }),
                            (c.dispatchEvent = function (t) {
                                var e,
                                    i,
                                    r,
                                    n = this._listeners[t];
                                if (n) for ((e = n.length) > 1 && (n = n.slice(0)), i = this._eventTarget; --e > -1; ) (r = n[e]) && (r.up ? r.c.call(r.s || i, { type: t, target: i }) : r.c.call(r.s || i));
                            });
                        var E = i.requestAnimationFrame,
                            k = i.cancelAnimationFrame,
                            A =
                                Date.now ||
                                function () {
                                    return new Date().getTime();
                                },
                            M = A();
                        for (u = (l = ["ms", "moz", "webkit", "o"]).length; --u > -1 && !E; ) (E = i[l[u] + "RequestAnimationFrame"]), (k = i[l[u] + "CancelAnimationFrame"] || i[l[u] + "CancelRequestAnimationFrame"]);
                        T("Ticker", function (t, e) {
                            var i,
                                r,
                                n,
                                s,
                                o,
                                l = this,
                                u = A(),
                                c = !(!1 === e || !E) && "auto",
                                p = 500,
                                f = 33,
                                m = function (t) {
                                    var e,
                                        a,
                                        c = A() - M;
                                    c > p && (u += c - f),
                                        (M += c),
                                        (l.time = (M - u) / 1e3),
                                        (e = l.time - o),
                                        (!i || e > 0 || !0 === t) && (l.frame++, (o += e + (e >= s ? 0.004 : s - e)), (a = !0)),
                                        !0 !== t && (n = r(m)),
                                        a && l.dispatchEvent("tick");
                                };
                            P.call(l),
                                (l.time = l.frame = 0),
                                (l.tick = function () {
                                    m(!0);
                                }),
                                (l.lagSmoothing = function (t, e) {
                                    (p = t || 1e10), (f = Math.min(e, p, 0));
                                }),
                                (l.sleep = function () {
                                    null != n && (c && k ? k(n) : clearTimeout(n), (r = g), (n = null), l === h && (d = !1));
                                }),
                                (l.wake = function (t) {
                                    null !== n ? l.sleep() : t ? (u += -M + (M = A())) : l.frame > 10 && (M = A() - p + 5),
                                        (r =
                                            0 === i
                                                ? g
                                                : c && E
                                                ? E
                                                : function (t) {
                                                      return setTimeout(t, (1e3 * (o - l.time) + 1) | 0);
                                                  }),
                                        l === h && (d = !0),
                                        m(2);
                                }),
                                (l.fps = function (t) {
                                    if (!arguments.length) return i;
                                    (s = 1 / ((i = t) || 60)), (o = this.time + s), l.wake();
                                }),
                                (l.useRAF = function (t) {
                                    if (!arguments.length) return c;
                                    l.sleep(), (c = t), l.fps(i);
                                }),
                                l.fps(t),
                                setTimeout(function () {
                                    "auto" === c && l.frame < 5 && "hidden" !== a.visibilityState && l.useRAF(!1);
                                }, 1500);
                        }),
                            ((c = f.Ticker.prototype = new f.events.EventDispatcher()).constructor = f.Ticker);
                        var L = T("core.Animation", function (t, e) {
                            if (
                                ((this.vars = e = e || {}),
                                (this._duration = this._totalDuration = t || 0),
                                (this._delay = Number(e.delay) || 0),
                                (this._timeScale = 1),
                                (this._active = !0 === e.immediateRender),
                                (this.data = e.data),
                                (this._reversed = !0 === e.reversed),
                                $)
                            ) {
                                d || h.wake();
                                var i = this.vars.useFrames ? Q : $;
                                i.add(this, i._time), this.vars.paused && this.paused(!0);
                            }
                        });
                        (h = L.ticker = new f.Ticker()),
                            ((c = L.prototype)._dirty = c._gc = c._initted = c._paused = !1),
                            (c._totalTime = c._time = 0),
                            (c._rawPrevTime = -1),
                            (c._next = c._last = c._onUpdate = c._timeline = c.timeline = null),
                            (c._paused = !1);
                        var I = function () {
                            d && A() - M > 2e3 && "hidden" !== a.visibilityState && h.wake();
                            var t = setTimeout(I, 2e3);
                            t.unref && t.unref();
                        };
                        I(),
                            (c.play = function (t, e) {
                                return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
                            }),
                            (c.pause = function (t, e) {
                                return null != t && this.seek(t, e), this.paused(!0);
                            }),
                            (c.resume = function (t, e) {
                                return null != t && this.seek(t, e), this.paused(!1);
                            }),
                            (c.seek = function (t, e) {
                                return this.totalTime(Number(t), !1 !== e);
                            }),
                            (c.restart = function (t, e) {
                                return this.reversed(!1)
                                    .paused(!1)
                                    .totalTime(t ? -this._delay : 0, !1 !== e, !0);
                            }),
                            (c.reverse = function (t, e) {
                                return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1);
                            }),
                            (c.render = function (t, e, i) {}),
                            (c.invalidate = function () {
                                return (this._time = this._totalTime = 0), (this._initted = this._gc = !1), (this._rawPrevTime = -1), (!this._gc && this.timeline) || this._enabled(!0), this;
                            }),
                            (c.isActive = function () {
                                var t,
                                    e = this._timeline,
                                    i = this._startTime;
                                return !e || (!this._gc && !this._paused && e.isActive() && (t = e.rawTime(!0)) >= i && t < i + this.totalDuration() / this._timeScale - 1e-7);
                            }),
                            (c._enabled = function (t, e) {
                                return (
                                    d || h.wake(),
                                    (this._gc = !t),
                                    (this._active = this.isActive()),
                                    !0 !== e && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)),
                                    !1
                                );
                            }),
                            (c._kill = function (t, e) {
                                return this._enabled(!1, !1);
                            }),
                            (c.kill = function (t, e) {
                                return this._kill(t, e), this;
                            }),
                            (c._uncache = function (t) {
                                for (var e = t ? this : this.timeline; e; ) (e._dirty = !0), (e = e.timeline);
                                return this;
                            }),
                            (c._swapSelfInParams = function (t) {
                                for (var e = t.length, i = t.concat(); --e > -1; ) "{self}" === t[e] && (i[e] = this);
                                return i;
                            }),
                            (c._callback = function (t) {
                                var e = this.vars,
                                    i = e[t],
                                    r = e[t + "Params"],
                                    n = e[t + "Scope"] || e.callbackScope || this;
                                switch (r ? r.length : 0) {
                                    case 0:
                                        i.call(n);
                                        break;
                                    case 1:
                                        i.call(n, r[0]);
                                        break;
                                    case 2:
                                        i.call(n, r[0], r[1]);
                                        break;
                                    default:
                                        i.apply(n, r);
                                }
                            }),
                            (c.eventCallback = function (t, e, i, r) {
                                if ("on" === (t || "").substr(0, 2)) {
                                    var n = this.vars;
                                    if (1 === arguments.length) return n[t];
                                    null == e ? delete n[t] : ((n[t] = e), (n[t + "Params"] = v(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i), (n[t + "Scope"] = r)), "onUpdate" === t && (this._onUpdate = e);
                                }
                                return this;
                            }),
                            (c.delay = function (t) {
                                return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), (this._delay = t), this) : this._delay;
                            }),
                            (c.duration = function (t) {
                                return arguments.length
                                    ? ((this._duration = this._totalDuration = t),
                                      this._uncache(!0),
                                      this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0),
                                      this)
                                    : ((this._dirty = !1), this._duration);
                            }),
                            (c.totalDuration = function (t) {
                                return (this._dirty = !1), arguments.length ? this.duration(t) : this._totalDuration;
                            }),
                            (c.time = function (t, e) {
                                return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time;
                            }),
                            (c.totalTime = function (t, e, i) {
                                if ((d || h.wake(), !arguments.length)) return this._totalTime;
                                if (this._timeline) {
                                    if ((t < 0 && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming)) {
                                        this._dirty && this.totalDuration();
                                        var r = this._totalDuration,
                                            n = this._timeline;
                                        if ((t > r && !i && (t = r), (this._startTime = (this._paused ? this._pauseTime : n._time) - (this._reversed ? r - t : t) / this._timeScale), n._dirty || this._uncache(!1), n._timeline))
                                            for (; n._timeline; ) n._timeline._time !== (n._startTime + n._totalTime) / n._timeScale && n.totalTime(n._totalTime, !0), (n = n._timeline);
                                    }
                                    this._gc && this._enabled(!0, !1), (this._totalTime === t && 0 !== this._duration) || (D.length && Z(), this.render(t, e, !1), D.length && Z());
                                }
                                return this;
                            }),
                            (c.progress = c.totalProgress = function (t, e) {
                                var i = this.duration();
                                return arguments.length ? this.totalTime(i * t, e) : i ? this._time / i : this.ratio;
                            }),
                            (c.startTime = function (t) {
                                return arguments.length ? (t !== this._startTime && ((this._startTime = t), this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime;
                            }),
                            (c.endTime = function (t) {
                                return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale;
                            }),
                            (c.timeScale = function (t) {
                                if (!arguments.length) return this._timeScale;
                                if (((t = t || 1e-10), this._timeline && this._timeline.smoothChildTiming)) {
                                    var e = this._pauseTime,
                                        i = e || 0 === e ? e : this._timeline.totalTime();
                                    this._startTime = i - ((i - this._startTime) * this._timeScale) / t;
                                }
                                return (this._timeScale = t), this._uncache(!1);
                            }),
                            (c.reversed = function (t) {
                                return arguments.length
                                    ? (t != this._reversed && ((this._reversed = t), this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this)
                                    : this._reversed;
                            }),
                            (c.paused = function (t) {
                                if (!arguments.length) return this._paused;
                                var e,
                                    i,
                                    r = this._timeline;
                                return (
                                    t != this._paused &&
                                        r &&
                                        (d || t || h.wake(),
                                        (i = (e = r.rawTime()) - this._pauseTime),
                                        !t && r.smoothChildTiming && ((this._startTime += i), this._uncache(!1)),
                                        (this._pauseTime = t ? e : null),
                                        (this._paused = t),
                                        (this._active = this.isActive()),
                                        !t && 0 !== i && this._initted && this.duration() && ((e = r.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale), this.render(e, e === this._totalTime, !0))),
                                    this._gc && !t && this._enabled(!0, !1),
                                    this
                                );
                            });
                        var O = T("core.SimpleTimeline", function (t) {
                            L.call(this, 0, t), (this.autoRemoveChildren = this.smoothChildTiming = !0);
                        });
                        ((c = O.prototype = new L()).constructor = O),
                            (c.kill()._gc = !1),
                            (c._first = c._last = c._recent = null),
                            (c._sortChildren = !1),
                            (c.add = c.insert = function (t, e, i, r) {
                                var n, s;
                                if (
                                    ((t._startTime = Number(e || 0) + t._delay),
                                    t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale),
                                    t.timeline && t.timeline._remove(t, !0),
                                    (t.timeline = t._timeline = this),
                                    t._gc && t._enabled(!0, !0),
                                    (n = this._last),
                                    this._sortChildren)
                                )
                                    for (s = t._startTime; n && n._startTime > s; ) n = n._prev;
                                return (
                                    n ? ((t._next = n._next), (n._next = t)) : ((t._next = this._first), (this._first = t)),
                                    t._next ? (t._next._prev = t) : (this._last = t),
                                    (t._prev = n),
                                    (this._recent = t),
                                    this._timeline && this._uncache(!0),
                                    this
                                );
                            }),
                            (c._remove = function (t, e) {
                                return (
                                    t.timeline === this &&
                                        (e || t._enabled(!1, !0),
                                        t._prev ? (t._prev._next = t._next) : this._first === t && (this._first = t._next),
                                        t._next ? (t._next._prev = t._prev) : this._last === t && (this._last = t._prev),
                                        (t._next = t._prev = t.timeline = null),
                                        t === this._recent && (this._recent = this._last),
                                        this._timeline && this._uncache(!0)),
                                    this
                                );
                            }),
                            (c.render = function (t, e, i) {
                                var r,
                                    n = this._first;
                                for (this._totalTime = this._time = this._rawPrevTime = t; n; )
                                    (r = n._next),
                                        (n._active || (t >= n._startTime && !n._paused && !n._gc)) &&
                                            (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)),
                                        (n = r);
                            }),
                            (c.rawTime = function () {
                                return d || h.wake(), this._totalTime;
                            });
                        var z = T(
                                "TweenLite",
                                function (t, e, r) {
                                    if ((L.call(this, e, r), (this.render = z.prototype.render), null == t)) throw "Cannot tween a null target.";
                                    this.target = t = "string" != typeof t ? t : z.selector(t) || t;
                                    var n,
                                        s,
                                        a,
                                        o = t.jquery || (t.length && t !== i && t[0] && (t[0] === i || (t[0].nodeType && t[0].style && !t.nodeType))),
                                        l = this.vars.overwrite;
                                    if (((this._overwrite = l = null == l ? G[z.defaultOverwrite] : "number" == typeof l ? l >> 0 : G[l]), (o || t instanceof Array || (t.push && v(t))) && "number" != typeof t[0]))
                                        for (this._targets = a = m(t), this._propLookup = [], this._siblings = [], n = 0; n < a.length; n++)
                                            (s = a[n])
                                                ? "string" != typeof s
                                                    ? s.length && s !== i && s[0] && (s[0] === i || (s[0].nodeType && s[0].style && !s.nodeType))
                                                        ? (a.splice(n--, 1), (this._targets = a = a.concat(m(s))))
                                                        : ((this._siblings[n] = J(s, this, !1)), 1 === l && this._siblings[n].length > 1 && et(s, this, null, 1, this._siblings[n]))
                                                    : "string" == typeof (s = a[n--] = z.selector(s)) && a.splice(n + 1, 1)
                                                : a.splice(n--, 1);
                                    else (this._propLookup = {}), (this._siblings = J(t, this, !1)), 1 === l && this._siblings.length > 1 && et(t, this, null, 1, this._siblings);
                                    (this.vars.immediateRender || (0 === e && 0 === this._delay && !1 !== this.vars.immediateRender)) && ((this._time = -1e-10), this.render(Math.min(0, -this._delay)));
                                },
                                !0
                            ),
                            R = function (t) {
                                return t && t.length && t !== i && t[0] && (t[0] === i || (t[0].nodeType && t[0].style && !t.nodeType));
                            };
                        ((c = z.prototype = new L()).constructor = z),
                            (c.kill()._gc = !1),
                            (c.ratio = 0),
                            (c._firstPT = c._targets = c._overwrittenProps = c._startAt = null),
                            (c._notifyPluginsOfEnabled = c._lazy = !1),
                            (z.version = "1.20.2"),
                            (z.defaultEase = c._ease = new x(null, null, 1, 1)),
                            (z.defaultOverwrite = "auto"),
                            (z.ticker = h),
                            (z.autoSleep = 120),
                            (z.lagSmoothing = function (t, e) {
                                h.lagSmoothing(t, e);
                            }),
                            (z.selector =
                                i.$ ||
                                i.jQuery ||
                                function (t) {
                                    var e = i.$ || i.jQuery;
                                    return e ? ((z.selector = e), e(t)) : void 0 === a ? t : a.querySelectorAll ? a.querySelectorAll(t) : a.getElementById("#" === t.charAt(0) ? t.substr(1) : t);
                                });
                        var D = [],
                            N = {},
                            B = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
                            F = /[\+-]=-?[\.\d]/,
                            H = function (t) {
                                for (var e, i = this._firstPT; i; )
                                    (e = i.blob ? (1 === t && this.end ? this.end : t ? this.join("") : this.start) : i.c * t + i.s),
                                        i.m ? (e = i.m(e, this._target || i.t)) : e < 1e-6 && e > -1e-6 && !i.blob && (e = 0),
                                        i.f ? (i.fp ? i.t[i.p](i.fp, e) : i.t[i.p](e)) : (i.t[i.p] = e),
                                        (i = i._next);
                            },
                            j = function (t, e, i, r) {
                                var n,
                                    s,
                                    a,
                                    o,
                                    l,
                                    u,
                                    c,
                                    h = [],
                                    d = 0,
                                    p = "",
                                    f = 0;
                                for (
                                    h.start = t,
                                        h.end = e,
                                        t = h[0] = t + "",
                                        e = h[1] = e + "",
                                        i && (i(h), (t = h[0]), (e = h[1])),
                                        h.length = 0,
                                        n = t.match(B) || [],
                                        s = e.match(B) || [],
                                        r && ((r._next = null), (r.blob = 1), (h._firstPT = h._applyPT = r)),
                                        l = s.length,
                                        o = 0;
                                    o < l;
                                    o++
                                )
                                    (c = s[o]),
                                        (p += (u = e.substr(d, e.indexOf(c, d) - d)) || !o ? u : ","),
                                        (d += u.length),
                                        f ? (f = (f + 1) % 5) : "rgba(" === u.substr(-5) && (f = 1),
                                        c === n[o] || n.length <= o
                                            ? (p += c)
                                            : (p && (h.push(p), (p = "")),
                                              (a = parseFloat(n[o])),
                                              h.push(a),
                                              (h._firstPT = {
                                                  _next: h._firstPT,
                                                  t: h,
                                                  p: h.length - 1,
                                                  s: a,
                                                  c: ("=" === c.charAt(1) ? parseInt(c.charAt(0) + "1", 10) * parseFloat(c.substr(2)) : parseFloat(c) - a) || 0,
                                                  f: 0,
                                                  m: f && f < 4 ? Math.round : 0,
                                              })),
                                        (d += c.length);
                                return (p += e.substr(d)) && h.push(p), (h.setRatio = H), F.test(e) && (h.end = 0), h;
                            },
                            U = function (t, e, i, r, n, s, a, o, l) {
                                "function" == typeof r && (r = r(l || 0, t));
                                var u = typeof t[e],
                                    c = "function" !== u ? "" : e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ? e : "get" + e.substr(3),
                                    h = "get" !== i ? i : c ? (a ? t[c](a) : t[c]()) : t[e],
                                    d = "string" == typeof r && "=" === r.charAt(1),
                                    p = {
                                        t: t,
                                        p: e,
                                        s: h,
                                        f: "function" === u,
                                        pg: 0,
                                        n: n || e,
                                        m: s ? ("function" == typeof s ? s : Math.round) : 0,
                                        pr: 0,
                                        c: d ? parseInt(r.charAt(0) + "1", 10) * parseFloat(r.substr(2)) : parseFloat(r) - h || 0,
                                    };
                                if (
                                    (("number" != typeof h || ("number" != typeof r && !d)) &&
                                        (a || isNaN(h) || (!d && isNaN(r)) || "boolean" == typeof h || "boolean" == typeof r
                                            ? ((p.fp = a), (p = { t: j(h, d ? parseFloat(p.s) + p.c : r, o || z.defaultStringFilter, p), p: "setRatio", s: 0, c: 1, f: 2, pg: 0, n: n || e, pr: 0, m: 0 }))
                                            : ((p.s = parseFloat(h)), d || (p.c = parseFloat(r) - p.s || 0))),
                                    p.c)
                                )
                                    return (p._next = this._firstPT) && (p._next._prev = p), (this._firstPT = p), p;
                            },
                            X = (z._internals = { isArray: v, isSelector: R, lazyTweens: D, blobDif: j }),
                            q = (z._plugins = {}),
                            W = (X.tweenLookup = {}),
                            Y = 0,
                            V = (X.reservedProps = {
                                ease: 1,
                                delay: 1,
                                overwrite: 1,
                                onComplete: 1,
                                onCompleteParams: 1,
                                onCompleteScope: 1,
                                useFrames: 1,
                                runBackwards: 1,
                                startAt: 1,
                                onUpdate: 1,
                                onUpdateParams: 1,
                                onUpdateScope: 1,
                                onStart: 1,
                                onStartParams: 1,
                                onStartScope: 1,
                                onReverseComplete: 1,
                                onReverseCompleteParams: 1,
                                onReverseCompleteScope: 1,
                                onRepeat: 1,
                                onRepeatParams: 1,
                                onRepeatScope: 1,
                                easeParams: 1,
                                yoyo: 1,
                                immediateRender: 1,
                                repeat: 1,
                                repeatDelay: 1,
                                data: 1,
                                paused: 1,
                                reversed: 1,
                                autoCSS: 1,
                                lazy: 1,
                                onOverwrite: 1,
                                callbackScope: 1,
                                stringFilter: 1,
                                id: 1,
                                yoyoEase: 1,
                            }),
                            G = { none: 0, all: 1, auto: 2, concurrent: 3, allOnStart: 4, preexisting: 5, true: 1, false: 0 },
                            Q = (L._rootFramesTimeline = new O()),
                            $ = (L._rootTimeline = new O()),
                            K = 30,
                            Z = (X.lazyRender = function () {
                                var t,
                                    e = D.length;
                                for (N = {}; --e > -1; ) (t = D[e]) && !1 !== t._lazy && (t.render(t._lazy[0], t._lazy[1], !0), (t._lazy = !1));
                                D.length = 0;
                            });
                        ($._startTime = h.time),
                            (Q._startTime = h.frame),
                            ($._active = Q._active = !0),
                            setTimeout(Z, 1),
                            (L._updateRoot = z.render = function () {
                                var t, e, i;
                                if ((D.length && Z(), $.render((h.time - $._startTime) * $._timeScale, !1, !1), Q.render((h.frame - Q._startTime) * Q._timeScale, !1, !1), D.length && Z(), h.frame >= K)) {
                                    K = h.frame + (parseInt(z.autoSleep, 10) || 120);
                                    for (i in W) {
                                        for (t = (e = W[i].tweens).length; --t > -1; ) e[t]._gc && e.splice(t, 1);
                                        0 === e.length && delete W[i];
                                    }
                                    if ((!(i = $._first) || i._paused) && z.autoSleep && !Q._first && 1 === h._listeners.tick.length) {
                                        for (; i && i._paused; ) i = i._next;
                                        i || h.sleep();
                                    }
                                }
                            }),
                            h.addEventListener("tick", L._updateRoot);
                        var J = function (t, e, i) {
                                var r,
                                    n,
                                    s = t._gsTweenID;
                                if ((W[s || (t._gsTweenID = s = "t" + Y++)] || (W[s] = { target: t, tweens: [] }), e && ((r = W[s].tweens), (r[(n = r.length)] = e), i))) for (; --n > -1; ) r[n] === e && r.splice(n, 1);
                                return W[s].tweens;
                            },
                            tt = function (t, e, i, r) {
                                var n,
                                    s,
                                    a = t.vars.onOverwrite;
                                return a && (n = a(t, e, i, r)), (a = z.onOverwrite) && (s = a(t, e, i, r)), !1 !== n && !1 !== s;
                            },
                            et = function (t, e, i, r, n) {
                                var s, a, o, l;
                                if (1 === r || r >= 4) {
                                    for (l = n.length, s = 0; s < l; s++)
                                        if ((o = n[s]) !== e) o._gc || (o._kill(null, t, e) && (a = !0));
                                        else if (5 === r) break;
                                    return a;
                                }
                                var u,
                                    c = e._startTime + 1e-10,
                                    h = [],
                                    d = 0,
                                    p = 0 === e._duration;
                                for (s = n.length; --s > -1; )
                                    (o = n[s]) === e ||
                                        o._gc ||
                                        o._paused ||
                                        (o._timeline !== e._timeline
                                            ? ((u = u || it(e, 0, p)), 0 === it(o, u, p) && (h[d++] = o))
                                            : o._startTime <= c && o._startTime + o.totalDuration() / o._timeScale > c && (((p || !o._initted) && c - o._startTime <= 2e-10) || (h[d++] = o)));
                                for (s = d; --s > -1; )
                                    if (((o = h[s]), 2 === r && o._kill(i, t, e) && (a = !0), 2 !== r || (!o._firstPT && o._initted))) {
                                        if (2 !== r && !tt(o, e)) continue;
                                        o._enabled(!1, !1) && (a = !0);
                                    }
                                return a;
                            },
                            it = function (t, e, i) {
                                for (var r = t._timeline, n = r._timeScale, s = t._startTime; r._timeline; ) {
                                    if (((s += r._startTime), (n *= r._timeScale), r._paused)) return -100;
                                    r = r._timeline;
                                }
                                return (s /= n) > e ? s - e : (i && s === e) || (!t._initted && s - e < 2e-10) ? 1e-10 : (s += t.totalDuration() / t._timeScale / n) > e + 1e-10 ? 0 : s - e - 1e-10;
                            };
                        (c._init = function () {
                            var t,
                                e,
                                i,
                                r,
                                n,
                                s,
                                a = this.vars,
                                o = this._overwrittenProps,
                                l = this._duration,
                                u = !!a.immediateRender,
                                c = a.ease;
                            if (a.startAt) {
                                this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), (n = {});
                                for (r in a.startAt) n[r] = a.startAt[r];
                                if (
                                    ((n.overwrite = !1),
                                    (n.immediateRender = !0),
                                    (n.lazy = u && !1 !== a.lazy),
                                    (n.startAt = n.delay = null),
                                    (n.onUpdate = a.onUpdate),
                                    (n.onUpdateScope = a.onUpdateScope || a.callbackScope || this),
                                    (this._startAt = z.to(this.target, 0, n)),
                                    u)
                                )
                                    if (this._time > 0) this._startAt = null;
                                    else if (0 !== l) return;
                            } else if (a.runBackwards && 0 !== l)
                                if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), (this._startAt = null);
                                else {
                                    0 !== this._time && (u = !1), (i = {});
                                    for (r in a) (V[r] && "autoCSS" !== r) || (i[r] = a[r]);
                                    if (((i.overwrite = 0), (i.data = "isFromStart"), (i.lazy = u && !1 !== a.lazy), (i.immediateRender = u), (this._startAt = z.to(this.target, 0, i)), u)) {
                                        if (0 === this._time) return;
                                    } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null);
                                }
                            if (
                                ((this._ease = c = c ? (c instanceof x ? c : "function" == typeof c ? new x(c, a.easeParams) : S[c] || z.defaultEase) : z.defaultEase),
                                a.easeParams instanceof Array && c.config && (this._ease = c.config.apply(c, a.easeParams)),
                                (this._easeType = this._ease._type),
                                (this._easePower = this._ease._power),
                                (this._firstPT = null),
                                this._targets)
                            )
                                for (s = this._targets.length, t = 0; t < s; t++) this._initProps(this._targets[t], (this._propLookup[t] = {}), this._siblings[t], o ? o[t] : null, t) && (e = !0);
                            else e = this._initProps(this.target, this._propLookup, this._siblings, o, 0);
                            if ((e && z._onPluginEvent("_onInitAllProps", this), o && (this._firstPT || ("function" != typeof this.target && this._enabled(!1, !1))), a.runBackwards))
                                for (i = this._firstPT; i; ) (i.s += i.c), (i.c = -i.c), (i = i._next);
                            (this._onUpdate = a.onUpdate), (this._initted = !0);
                        }),
                            (c._initProps = function (t, e, r, n, s) {
                                var a, o, l, u, c, h;
                                if (null == t) return !1;
                                N[t._gsTweenID] && Z(),
                                    this.vars.css ||
                                        (t.style &&
                                            t !== i &&
                                            t.nodeType &&
                                            q.css &&
                                            !1 !== this.vars.autoCSS &&
                                            (function (t, e) {
                                                var i,
                                                    r = {};
                                                for (i in t)
                                                    V[i] ||
                                                        (i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i) ||
                                                        !(!q[i] || (q[i] && q[i]._autoCSS)) ||
                                                        ((r[i] = t[i]), delete t[i]);
                                                t.css = r;
                                            })(this.vars, t));
                                for (a in this.vars)
                                    if (((h = this.vars[a]), V[a])) h && (h instanceof Array || (h.push && v(h))) && -1 !== h.join("").indexOf("{self}") && (this.vars[a] = h = this._swapSelfInParams(h, this));
                                    else if (q[a] && (u = new q[a]())._onInitTween(t, this.vars[a], this, s)) {
                                        for (this._firstPT = c = { _next: this._firstPT, t: u, p: "setRatio", s: 0, c: 1, f: 1, n: a, pg: 1, pr: u._priority, m: 0 }, o = u._overwriteProps.length; --o > -1; )
                                            e[u._overwriteProps[o]] = this._firstPT;
                                        (u._priority || u._onInitAllProps) && (l = !0), (u._onDisable || u._onEnable) && (this._notifyPluginsOfEnabled = !0), c._next && (c._next._prev = c);
                                    } else e[a] = U.call(this, t, a, "get", h, a, 0, null, this.vars.stringFilter, s);
                                return n && this._kill(n, t)
                                    ? this._initProps(t, e, r, n, s)
                                    : this._overwrite > 1 && this._firstPT && r.length > 1 && et(t, this, e, this._overwrite, r)
                                    ? (this._kill(e, t), this._initProps(t, e, r, n, s))
                                    : (this._firstPT && ((!1 !== this.vars.lazy && this._duration) || (this.vars.lazy && !this._duration)) && (N[t._gsTweenID] = !0), l);
                            }),
                            (c.render = function (t, e, i) {
                                var r,
                                    n,
                                    s,
                                    a,
                                    o = this._time,
                                    l = this._duration,
                                    u = this._rawPrevTime;
                                if (t >= l - 1e-7 && t >= 0)
                                    (this._totalTime = this._time = l),
                                        (this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1),
                                        this._reversed || ((r = !0), (n = "onComplete"), (i = i || this._timeline.autoRemoveChildren)),
                                        0 === l &&
                                            (this._initted || !this.vars.lazy || i) &&
                                            (this._startTime === this._timeline._duration && (t = 0),
                                            (u < 0 || (t <= 0 && t >= -1e-7) || (1e-10 === u && "isPause" !== this.data)) && u !== t && ((i = !0), u > 1e-10 && (n = "onReverseComplete")),
                                            (this._rawPrevTime = a = !e || t || u === t ? t : 1e-10));
                                else if (t < 1e-7)
                                    (this._totalTime = this._time = 0),
                                        (this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0),
                                        (0 !== o || (0 === l && u > 0)) && ((n = "onReverseComplete"), (r = this._reversed)),
                                        t < 0 &&
                                            ((this._active = !1),
                                            0 === l && (this._initted || !this.vars.lazy || i) && (u >= 0 && (1e-10 !== u || "isPause" !== this.data) && (i = !0), (this._rawPrevTime = a = !e || t || u === t ? t : 1e-10))),
                                        (!this._initted || (this._startAt && this._startAt.progress())) && (i = !0);
                                else if (((this._totalTime = this._time = t), this._easeType)) {
                                    var c = t / l,
                                        h = this._easeType,
                                        d = this._easePower;
                                    (1 === h || (3 === h && c >= 0.5)) && (c = 1 - c),
                                        3 === h && (c *= 2),
                                        1 === d ? (c *= c) : 2 === d ? (c *= c * c) : 3 === d ? (c *= c * c * c) : 4 === d && (c *= c * c * c * c),
                                        (this.ratio = 1 === h ? 1 - c : 2 === h ? c : t / l < 0.5 ? c / 2 : 1 - c / 2);
                                } else this.ratio = this._ease.getRatio(t / l);
                                if (this._time !== o || i) {
                                    if (!this._initted) {
                                        if ((this._init(), !this._initted || this._gc)) return;
                                        if (!i && this._firstPT && ((!1 !== this.vars.lazy && this._duration) || (this.vars.lazy && !this._duration)))
                                            return (this._time = this._totalTime = o), (this._rawPrevTime = u), D.push(this), void (this._lazy = [t, e]);
                                        this._time && !r ? (this.ratio = this._ease.getRatio(this._time / l)) : r && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1));
                                    }
                                    for (
                                        !1 !== this._lazy && (this._lazy = !1),
                                            this._active || (!this._paused && this._time !== o && t >= 0 && (this._active = !0)),
                                            0 === o && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : n || (n = "_dummyGS")), this.vars.onStart && ((0 === this._time && 0 !== l) || e || this._callback("onStart"))),
                                            s = this._firstPT;
                                        s;

                                    )
                                        s.f ? s.t[s.p](s.c * this.ratio + s.s) : (s.t[s.p] = s.c * this.ratio + s.s), (s = s._next);
                                    this._onUpdate && (t < 0 && this._startAt && -1e-4 !== t && this._startAt.render(t, e, i), e || ((this._time !== o || r || i) && this._callback("onUpdate"))),
                                        n &&
                                            ((this._gc && !i) ||
                                                (t < 0 && this._startAt && !this._onUpdate && -1e-4 !== t && this._startAt.render(t, e, i),
                                                r && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), (this._active = !1)),
                                                !e && this.vars[n] && this._callback(n),
                                                0 === l && 1e-10 === this._rawPrevTime && 1e-10 !== a && (this._rawPrevTime = 0)));
                                }
                            }),
                            (c._kill = function (t, e, i) {
                                if (("all" === t && (t = null), null == t && (null == e || e === this.target))) return (this._lazy = !1), this._enabled(!1, !1);
                                e = "string" != typeof e ? e || this._targets || this.target : z.selector(e) || e;
                                var r,
                                    n,
                                    s,
                                    a,
                                    o,
                                    l,
                                    u,
                                    c,
                                    h,
                                    d = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline;
                                if ((v(e) || R(e)) && "number" != typeof e[0]) for (r = e.length; --r > -1; ) this._kill(t, e[r], i) && (l = !0);
                                else {
                                    if (this._targets) {
                                        for (r = this._targets.length; --r > -1; )
                                            if (e === this._targets[r]) {
                                                (o = this._propLookup[r] || {}), (this._overwrittenProps = this._overwrittenProps || []), (n = this._overwrittenProps[r] = t ? this._overwrittenProps[r] || {} : "all");
                                                break;
                                            }
                                    } else {
                                        if (e !== this.target) return !1;
                                        (o = this._propLookup), (n = this._overwrittenProps = t ? this._overwrittenProps || {} : "all");
                                    }
                                    if (o) {
                                        if (((u = t || o), (c = t !== n && "all" !== n && t !== o && ("object" != typeof t || !t._tempKill)), i && (z.onOverwrite || this.vars.onOverwrite))) {
                                            for (s in u) o[s] && (h || (h = []), h.push(s));
                                            if ((h || !t) && !tt(this, i, e, h)) return !1;
                                        }
                                        for (s in u)
                                            (a = o[s]) &&
                                                (d && (a.f ? a.t[a.p](a.s) : (a.t[a.p] = a.s), (l = !0)),
                                                a.pg && a.t._kill(u) && (l = !0),
                                                (a.pg && 0 !== a.t._overwriteProps.length) ||
                                                    (a._prev ? (a._prev._next = a._next) : a === this._firstPT && (this._firstPT = a._next), a._next && (a._next._prev = a._prev), (a._next = a._prev = null)),
                                                delete o[s]),
                                                c && (n[s] = 1);
                                        !this._firstPT && this._initted && this._enabled(!1, !1);
                                    }
                                }
                                return l;
                            }),
                            (c.invalidate = function () {
                                return (
                                    this._notifyPluginsOfEnabled && z._onPluginEvent("_onDisable", this),
                                    (this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null),
                                    (this._notifyPluginsOfEnabled = this._active = this._lazy = !1),
                                    (this._propLookup = this._targets ? {} : []),
                                    L.prototype.invalidate.call(this),
                                    this.vars.immediateRender && ((this._time = -1e-10), this.render(Math.min(0, -this._delay))),
                                    this
                                );
                            }),
                            (c._enabled = function (t, e) {
                                if ((d || h.wake(), t && this._gc)) {
                                    var i,
                                        r = this._targets;
                                    if (r) for (i = r.length; --i > -1; ) this._siblings[i] = J(r[i], this, !0);
                                    else this._siblings = J(this.target, this, !0);
                                }
                                return L.prototype._enabled.call(this, t, e), !(!this._notifyPluginsOfEnabled || !this._firstPT) && z._onPluginEvent(t ? "_onEnable" : "_onDisable", this);
                            }),
                            (z.to = function (t, e, i) {
                                return new z(t, e, i);
                            }),
                            (z.from = function (t, e, i) {
                                return (i.runBackwards = !0), (i.immediateRender = 0 != i.immediateRender), new z(t, e, i);
                            }),
                            (z.fromTo = function (t, e, i, r) {
                                return (r.startAt = i), (r.immediateRender = 0 != r.immediateRender && 0 != i.immediateRender), new z(t, e, r);
                            }),
                            (z.delayedCall = function (t, e, i, r, n) {
                                return new z(e, 0, { delay: t, onComplete: e, onCompleteParams: i, callbackScope: r, onReverseComplete: e, onReverseCompleteParams: i, immediateRender: !1, lazy: !1, useFrames: n, overwrite: 0 });
                            }),
                            (z.set = function (t, e) {
                                return new z(t, 0, e);
                            }),
                            (z.getTweensOf = function (t, e) {
                                if (null == t) return [];
                                t = "string" != typeof t ? t : z.selector(t) || t;
                                var i, r, n, s;
                                if ((v(t) || R(t)) && "number" != typeof t[0]) {
                                    for (i = t.length, r = []; --i > -1; ) r = r.concat(z.getTweensOf(t[i], e));
                                    for (i = r.length; --i > -1; ) for (s = r[i], n = i; --n > -1; ) s === r[n] && r.splice(i, 1);
                                } else if (t._gsTweenID) for (i = (r = J(t).concat()).length; --i > -1; ) (r[i]._gc || (e && !r[i].isActive())) && r.splice(i, 1);
                                return r || [];
                            }),
                            (z.killTweensOf = z.killDelayedCallsTo = function (t, e, i) {
                                "object" == typeof e && ((i = e), (e = !1));
                                for (var r = z.getTweensOf(t, e), n = r.length; --n > -1; ) r[n]._kill(i, t);
                            });
                        var rt = T(
                            "plugins.TweenPlugin",
                            function (t, e) {
                                (this._overwriteProps = (t || "").split(",")), (this._propName = this._overwriteProps[0]), (this._priority = e || 0), (this._super = rt.prototype);
                            },
                            !0
                        );
                        if (
                            ((c = rt.prototype),
                            (rt.version = "1.19.0"),
                            (rt.API = 2),
                            (c._firstPT = null),
                            (c._addTween = U),
                            (c.setRatio = H),
                            (c._kill = function (t) {
                                var e,
                                    i = this._overwriteProps,
                                    r = this._firstPT;
                                if (null != t[this._propName]) this._overwriteProps = [];
                                else for (e = i.length; --e > -1; ) null != t[i[e]] && i.splice(e, 1);
                                for (; r; ) null != t[r.n] && (r._next && (r._next._prev = r._prev), r._prev ? ((r._prev._next = r._next), (r._prev = null)) : this._firstPT === r && (this._firstPT = r._next)), (r = r._next);
                                return !1;
                            }),
                            (c._mod = c._roundProps = function (t) {
                                for (var e, i = this._firstPT; i; )
                                    (e = t[this._propName] || (null != i.n && t[i.n.split(this._propName + "_").join("")])) && "function" == typeof e && (2 === i.f ? (i.t._applyPT.m = e) : (i.m = e)), (i = i._next);
                            }),
                            (z._onPluginEvent = function (t, e) {
                                var i,
                                    r,
                                    n,
                                    s,
                                    a,
                                    o = e._firstPT;
                                if ("_onInitAllProps" === t) {
                                    for (; o; ) {
                                        for (a = o._next, r = n; r && r.pr > o.pr; ) r = r._next;
                                        (o._prev = r ? r._prev : s) ? (o._prev._next = o) : (n = o), (o._next = r) ? (r._prev = o) : (s = o), (o = a);
                                    }
                                    o = e._firstPT = n;
                                }
                                for (; o; ) o.pg && "function" == typeof o.t[t] && o.t[t]() && (i = !0), (o = o._next);
                                return i;
                            }),
                            (rt.activate = function (t) {
                                for (var e = t.length; --e > -1; ) t[e].API === rt.API && (q[new t[e]()._propName] = t[e]);
                                return !0;
                            }),
                            (w.plugin = function (t) {
                                if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
                                var e,
                                    i = t.propName,
                                    r = t.priority || 0,
                                    n = t.overwriteProps,
                                    s = { init: "_onInitTween", set: "setRatio", kill: "_kill", round: "_mod", mod: "_mod", initAll: "_onInitAllProps" },
                                    a = T(
                                        "plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin",
                                        function () {
                                            rt.call(this, i, r), (this._overwriteProps = n || []);
                                        },
                                        !0 === t.global
                                    ),
                                    o = (a.prototype = new rt(i));
                                (o.constructor = a), (a.API = t.API);
                                for (e in s) "function" == typeof t[e] && (o[s[e]] = t[e]);
                                return (a.version = t.version), rt.activate([a]), a;
                            }),
                            (l = i._gsQueue))
                        ) {
                            for (u = 0; u < l.length; u++) l[u]();
                            for (c in y) y[c].func || i.console.log("GSAP encountered missing dependency: " + c);
                        }
                        d = !1;
                    }
                })(void 0 !== t && t.exports && void 0 !== i ? i : this || window);
        }.call(
            e,
            (function () {
                return this;
            })()
        ));
    },
    function (t, e, i) {
        "use strict";
        function r(t) {
            !0 === y
                ? (u.classList.remove("is-hub-active"),
                  l.TweenMax.set(c, { css: { display: "block" } }),
                  l.TweenMax.fromTo(
                      c,
                      0.35,
                      { opacity: 1 },
                      {
                          opacity: 0,
                          clearProps: "all",
                          ease: Linear.easeNone,
                          onComplete: function () {
                              "function" == typeof t ? t() : l.TweenMax.to(h, 0.35, { opacity: 1, ease: Linear.easeNone }), (0, o.cancelSearch)();
                          },
                      }
                  ))
                : (m &&
                      l.TweenMax.to(m, 0.5, {
                          opacity: 0,
                          ease: Linear.easeNone,
                          onComplete: function () {
                              m.remove();
                          },
                      }),
                  l.TweenMax.to(h, 0.35, {
                      opacity: 0,
                      ease: Linear.easeNone,
                      onComplete: function () {
                          l.TweenMax.set(c, { css: { display: "block" } }),
                              (c.scrollTop = 0),
                              l.TweenMax.fromTo(
                                  c,
                                  0.35,
                                  { opacity: 0 },
                                  {
                                      opacity: 1,
                                      clearProps: "all",
                                      ease: Linear.easeNone,
                                      onComplete: function () {
                                          u.classList.add("is-hub-active"),
                                              (function () {
                                                  if (v.length > 0)
                                                      for (var t = v.length - 1; t >= 0; t--) {
                                                          var e = v[t].getCenter();
                                                          google.maps.event.trigger(v[t], "resize"), v[t].setCenter(e);
                                                      }
                                              })();
                                      },
                                  }
                              );
                      },
                  })),
                (e.hubActive = y = !y);
        }
        function n() {
            for (var t = document.querySelectorAll("[data-map]"), e = t.length - 1; e >= 0; e--) {
                var i = { lat: Number(t[e].getAttribute("data-lat")), lng: Number(t[e].getAttribute("data-lng")) },
                    r = new google.maps.Map(t[e], {
                        center: i,
                        zoom: 12,
                        disableDefaultUI: !0,
                        gestureHandling: "cooperative",
                        styles: [
                            { elementType: "geometry", stylers: [{ color: "#f5f5f5" }] },
                            { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
                            { elementType: "labels.text.fill", stylers: [{ color: "#616161" }] },
                            { elementType: "labels.text.stroke", stylers: [{ color: "#f5f5f5" }] },
                            { featureType: "administrative.land_parcel", elementType: "labels.text.fill", stylers: [{ color: "#bdbdbd" }] },
                            { featureType: "poi", elementType: "geometry", stylers: [{ color: "#eeeeee" }] },
                            { featureType: "poi", elementType: "labels.text.fill", stylers: [{ color: "#757575" }] },
                            { featureType: "poi.park", elementType: "geometry", stylers: [{ color: "#e5e5e5" }] },
                            { featureType: "poi.park", elementType: "labels.text.fill", stylers: [{ color: "#9e9e9e" }] },
                            { featureType: "road", elementType: "geometry", stylers: [{ color: "#ffffff" }] },
                            { featureType: "road.arterial", elementType: "labels.text.fill", stylers: [{ color: "#757575" }] },
                            { featureType: "road.highway", elementType: "geometry", stylers: [{ color: "#dadada" }] },
                            { featureType: "road.highway", elementType: "labels.text.fill", stylers: [{ color: "#616161" }] },
                            { featureType: "road.local", elementType: "labels.text.fill", stylers: [{ color: "#9e9e9e" }] },
                            { featureType: "transit.line", elementType: "geometry", stylers: [{ color: "#e5e5e5" }] },
                            { featureType: "transit.station", elementType: "geometry", stylers: [{ color: "#eeeeee" }] },
                            { featureType: "water", elementType: "geometry", stylers: [{ color: "#c9c9c9" }] },
                            { featureType: "water", elementType: "labels.text.fill", stylers: [{ color: "#9e9e9e" }] },
                        ],
                    });
                new google.maps.Marker({ position: i, map: r });
                v.push(r);
            }
        }
        function s(t, e) {
            t.addEventListener("mouseover", function () {
                t.classList.add("is-highlighted"), e.classList.add("is-filtered"), g && clearTimeout(g);
            }),
                t.addEventListener("mouseout", function () {
                    t.classList.remove("is-highlighted"),
                        (g = setTimeout(function () {
                            e.classList.remove("is-filtered");
                        }, 250));
                }),
                e.addEventListener("mouseout", function () {
                    e.classList.remove("is-filtered");
                });
        }
        function a(t) {
            for (var e = t.length - 1; e >= 0; e--) {
                var i = t[e].closest(".hub__grid");
                i.classList.contains("hub__grid--single") || s(t[e], i);
            }
        }
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.hubActive = e.toggleHub = void 0),
            (e.bindThumbListeners = a),
            (e.default = function () {
                !(function () {
                    for (
                        var t = function (t) {
                                d[t].addEventListener("click", function (e) {
                                    var i = d[t].getAttribute("href");
                                    l.TweenMax.to(c, 1, { scrollTo: i, ease: Power2.easeInOut }), e.preventDefault();
                                });
                            },
                            e = d.length - 1;
                        e >= 0;
                        e--
                    )
                        t(e);
                })(),
                    a(f),
                    (function () {
                        var t = document.querySelector("[data-see-clients]"),
                            e = document.querySelector("[data-client-list]");
                        t &&
                            e &&
                            t.addEventListener("click", function (t) {
                                e.classList.add("is-revealed");
                            });
                        for (var i = p.length - 1; i >= 0; i--) p[i].addEventListener("click", r);
                        document.addEventListener("keyup", function (t) {
                            27 === t.keyCode && y && r();
                        });
                    })(),
                    (0, o.initSearch)(),
                    !0 === window.mapisInit ? n() : (window.initMap = n);
            });
        var o = i(24),
            l = i(22);
        i(52);
        var u = document.body,
            c = document.querySelector("[data-hub]"),
            h = document.querySelector("main"),
            d = document.querySelectorAll("[data-scroll]"),
            p = document.querySelectorAll("[data-nav-button]"),
            f = document.querySelectorAll(".hub__grid a"),
            m = document.querySelector("[data-intro-wrap]"),
            g = void 0,
            v = [],
            y = !1;
        (e.toggleHub = r), (e.hubActive = y);
    },
    function (t, e, i) {
        "use strict";
        function r(t) {
            return t && t.__esModule ? t : { default: t };
        }
        function n(t, e) {
            (c = !0),
                e && (d.value = e),
                g.classList.add("is-search-performed"),
                g.classList.add("is-loading"),
                h.classList.add("is-search-active"),
                a.default
                    .get(t)
                    .then(function (t) {
                        g.classList.remove("is-loading"),
                            (function (t) {
                                var e = document.createElement("div");
                                (e.innerHTML = t.data), (p.innerHTML = e.querySelector(".hub__results").innerHTML);
                                var i = p.querySelectorAll(".hub__grid a");
                                (0, o.bindThumbListeners)(i), (0, l.bindHistoryLinks)(i), (0, u.default)(p);
                            })(t);
                    })
                    .catch(function (t) {
                        console.log(t);
                    });
        }
        function s() {
            (c = !1), g.classList.remove("is-search-performed"), g.classList.remove("is-loading"), h.classList.remove("is-search-active"), (d.value = ""), (p.innerHTML = "");
        }
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.cancelSearch = s),
            (e.initSearch = function () {
                !(function () {
                    h &&
                        h.addEventListener("submit", function (t) {
                            t.preventDefault(), n(h.getAttribute("action") + "?s=" + d.value);
                        });
                    for (var t = 0; t < m.length; t++)
                        m[t].addEventListener("click", function (t) {
                            t.preventDefault(), s();
                        });
                    d &&
                        d.addEventListener("keyup", function (t) {
                            "" === d.value && !0 === c && s();
                        });
                    for (
                        var e = function (t) {
                                f[t].addEventListener("click", function (e) {
                                    e.preventDefault(), n(f[t].getAttribute("href"), f[t].innerText);
                                });
                            },
                            i = f.length - 1;
                        i >= 0;
                        i--
                    )
                        e(i);
                })();
            });
        var a = r(i(25)),
            o = i(23),
            l = i(21),
            u = r(i(51)),
            c = !1,
            h = document.querySelector(".search-form"),
            d = document.querySelector(".search-form__input"),
            p = document.querySelector("[data-hub-container]"),
            f = document.querySelectorAll("[data-perform-search]"),
            m = document.querySelectorAll("[data-search-cancel]"),
            g = document.querySelector("[data-hub]");
        document.body;
    },
    function (t, e, i) {
        t.exports = i(26);
    },
    function (t, e, i) {
        "use strict";
        function r(t) {
            var e = new a(t),
                i = s(a.prototype.request, e);
            return n.extend(i, a.prototype, e), n.extend(i, e), i;
        }
        var n = i(27),
            s = i(28),
            a = i(30),
            o = i(31),
            l = r(o);
        (l.Axios = a),
            (l.create = function (t) {
                return r(n.merge(o, t));
            }),
            (l.Cancel = i(48)),
            (l.CancelToken = i(49)),
            (l.isCancel = i(45)),
            (l.all = function (t) {
                return Promise.all(t);
            }),
            (l.spread = i(50)),
            (t.exports = l),
            (t.exports.default = l);
    },
    function (t, e, i) {
        "use strict";
        function r(t) {
            return "[object Array]" === c.call(t);
        }
        function n(t) {
            return null !== t && "object" == typeof t;
        }
        function s(t) {
            return "[object Function]" === c.call(t);
        }
        function a(t, e) {
            if (null !== t && void 0 !== t)
                if (("object" == typeof t || r(t) || (t = [t]), r(t))) for (var i = 0, n = t.length; i < n; i++) e.call(null, t[i], i, t);
                else for (var s in t) Object.prototype.hasOwnProperty.call(t, s) && e.call(null, t[s], s, t);
        }
        function o() {
            function t(t, i) {
                "object" == typeof e[i] && "object" == typeof t ? (e[i] = o(e[i], t)) : (e[i] = t);
            }
            for (var e = {}, i = 0, r = arguments.length; i < r; i++) a(arguments[i], t);
            return e;
        }
        var l = i(28),
            u = i(29),
            c = Object.prototype.toString;
        t.exports = {
            isArray: r,
            isArrayBuffer: function (t) {
                return "[object ArrayBuffer]" === c.call(t);
            },
            isBuffer: u,
            isFormData: function (t) {
                return "undefined" != typeof FormData && t instanceof FormData;
            },
            isArrayBufferView: function (t) {
                return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(t) : t && t.buffer && t.buffer instanceof ArrayBuffer;
            },
            isString: function (t) {
                return "string" == typeof t;
            },
            isNumber: function (t) {
                return "number" == typeof t;
            },
            isObject: n,
            isUndefined: function (t) {
                return void 0 === t;
            },
            isDate: function (t) {
                return "[object Date]" === c.call(t);
            },
            isFile: function (t) {
                return "[object File]" === c.call(t);
            },
            isBlob: function (t) {
                return "[object Blob]" === c.call(t);
            },
            isFunction: s,
            isStream: function (t) {
                return n(t) && s(t.pipe);
            },
            isURLSearchParams: function (t) {
                return "undefined" != typeof URLSearchParams && t instanceof URLSearchParams;
            },
            isStandardBrowserEnv: function () {
                return ("undefined" == typeof navigator || "ReactNative" !== navigator.product) && "undefined" != typeof window && "undefined" != typeof document;
            },
            forEach: a,
            merge: o,
            extend: function (t, e, i) {
                return (
                    a(e, function (e, r) {
                        t[r] = i && "function" == typeof e ? l(e, i) : e;
                    }),
                    t
                );
            },
            trim: function (t) {
                return t.replace(/^\s*/, "").replace(/\s*$/, "");
            },
        };
    },
    function (t, e) {
        "use strict";
        t.exports = function (t, e) {
            return function () {
                for (var i = new Array(arguments.length), r = 0; r < i.length; r++) i[r] = arguments[r];
                return t.apply(e, i);
            };
        };
    },
    function (t, e) {
        function i(t) {
            return !!t.constructor && "function" == typeof t.constructor.isBuffer && t.constructor.isBuffer(t);
        }
        t.exports = function (t) {
            return (
                null != t &&
                (i(t) ||
                    (function (t) {
                        return "function" == typeof t.readFloatLE && "function" == typeof t.slice && i(t.slice(0, 0));
                    })(t) ||
                    !!t._isBuffer)
            );
        };
    },
    function (t, e, i) {
        "use strict";
        function r(t) {
            (this.defaults = t), (this.interceptors = { request: new a(), response: new a() });
        }
        var n = i(31),
            s = i(27),
            a = i(42),
            o = i(43),
            l = i(46),
            u = i(47);
        (r.prototype.request = function (t) {
            "string" == typeof t && (t = s.merge({ url: arguments[0] }, arguments[1])), ((t = s.merge(n, this.defaults, { method: "get" }, t)).method = t.method.toLowerCase()), t.baseURL && !l(t.url) && (t.url = u(t.baseURL, t.url));
            var e = [o, void 0],
                i = Promise.resolve(t);
            for (
                this.interceptors.request.forEach(function (t) {
                    e.unshift(t.fulfilled, t.rejected);
                }),
                    this.interceptors.response.forEach(function (t) {
                        e.push(t.fulfilled, t.rejected);
                    });
                e.length;

            )
                i = i.then(e.shift(), e.shift());
            return i;
        }),
            s.forEach(["delete", "get", "head", "options"], function (t) {
                r.prototype[t] = function (e, i) {
                    return this.request(s.merge(i || {}, { method: t, url: e }));
                };
            }),
            s.forEach(["post", "put", "patch"], function (t) {
                r.prototype[t] = function (e, i, r) {
                    return this.request(s.merge(r || {}, { method: t, url: e, data: i }));
                };
            }),
            (t.exports = r);
    },
    function (t, e, i) {
        (function (e) {
            "use strict";
            function r(t, e) {
                !n.isUndefined(t) && n.isUndefined(t["Content-Type"]) && (t["Content-Type"] = e);
            }
            var n = i(27),
                s = i(32),
                a = { "Content-Type": "application/x-www-form-urlencoded" },
                o = {
                    adapter: (function () {
                        var t;
                        return "undefined" != typeof XMLHttpRequest ? (t = i(33)) : void 0 !== e && (t = i(33)), t;
                    })(),
                    transformRequest: [
                        function (t, e) {
                            return (
                                s(e, "Content-Type"),
                                n.isFormData(t) || n.isArrayBuffer(t) || n.isBuffer(t) || n.isStream(t) || n.isFile(t) || n.isBlob(t)
                                    ? t
                                    : n.isArrayBufferView(t)
                                    ? t.buffer
                                    : n.isURLSearchParams(t)
                                    ? (r(e, "application/x-www-form-urlencoded;charset=utf-8"), t.toString())
                                    : n.isObject(t)
                                    ? (r(e, "application/json;charset=utf-8"), JSON.stringify(t))
                                    : t
                            );
                        },
                    ],
                    transformResponse: [
                        function (t) {
                            if ("string" == typeof t)
                                try {
                                    t = JSON.parse(t);
                                } catch (t) {}
                            return t;
                        },
                    ],
                    timeout: 0,
                    xsrfCookieName: "XSRF-TOKEN",
                    xsrfHeaderName: "X-XSRF-TOKEN",
                    maxContentLength: -1,
                    validateStatus: function (t) {
                        return t >= 200 && t < 300;
                    },
                };
            (o.headers = { common: { Accept: "application/json, text/plain, */*" } }),
                n.forEach(["delete", "get", "head"], function (t) {
                    o.headers[t] = {};
                }),
                n.forEach(["post", "put", "patch"], function (t) {
                    o.headers[t] = n.merge(a);
                }),
                (t.exports = o);
        }.call(e, i(10)));
    },
    function (t, e, i) {
        "use strict";
        var r = i(27);
        t.exports = function (t, e) {
            r.forEach(t, function (i, r) {
                r !== e && r.toUpperCase() === e.toUpperCase() && ((t[e] = i), delete t[r]);
            });
        };
    },
    function (t, e, i) {
        (function (e) {
            "use strict";
            var r = i(27),
                n = i(34),
                s = i(37),
                a = i(38),
                o = i(39),
                l = i(35),
                u = ("undefined" != typeof window && window.btoa && window.btoa.bind(window)) || i(40);
            t.exports = function (t) {
                return new Promise(function (c, h) {
                    var d = t.data,
                        p = t.headers;
                    r.isFormData(d) && delete p["Content-Type"];
                    var f = new XMLHttpRequest(),
                        m = "onreadystatechange",
                        g = !1;
                    if (
                        ("test" === e.env.NODE_ENV ||
                            "undefined" == typeof window ||
                            !window.XDomainRequest ||
                            "withCredentials" in f ||
                            o(t.url) ||
                            ((f = new window.XDomainRequest()), (m = "onload"), (g = !0), (f.onprogress = function () {}), (f.ontimeout = function () {})),
                        t.auth)
                    ) {
                        var v = t.auth.username || "",
                            y = t.auth.password || "";
                        p.Authorization = "Basic " + u(v + ":" + y);
                    }
                    if (
                        (f.open(t.method.toUpperCase(), s(t.url, t.params, t.paramsSerializer), !0),
                        (f.timeout = t.timeout),
                        (f[m] = function () {
                            if (f && (4 === f.readyState || g) && (0 !== f.status || (f.responseURL && 0 === f.responseURL.indexOf("file:")))) {
                                var e = "getAllResponseHeaders" in f ? a(f.getAllResponseHeaders()) : null,
                                    i = {
                                        data: t.responseType && "text" !== t.responseType ? f.response : f.responseText,
                                        status: 1223 === f.status ? 204 : f.status,
                                        statusText: 1223 === f.status ? "No Content" : f.statusText,
                                        headers: e,
                                        config: t,
                                        request: f,
                                    };
                                n(c, h, i), (f = null);
                            }
                        }),
                        (f.onerror = function () {
                            h(l("Network Error", t, null, f)), (f = null);
                        }),
                        (f.ontimeout = function () {
                            h(l("timeout of " + t.timeout + "ms exceeded", t, "ECONNABORTED", f)), (f = null);
                        }),
                        r.isStandardBrowserEnv())
                    ) {
                        var _ = i(41),
                            w = (t.withCredentials || o(t.url)) && t.xsrfCookieName ? _.read(t.xsrfCookieName) : void 0;
                        w && (p[t.xsrfHeaderName] = w);
                    }
                    if (
                        ("setRequestHeader" in f &&
                            r.forEach(p, function (t, e) {
                                void 0 === d && "content-type" === e.toLowerCase() ? delete p[e] : f.setRequestHeader(e, t);
                            }),
                        t.withCredentials && (f.withCredentials = !0),
                        t.responseType)
                    )
                        try {
                            f.responseType = t.responseType;
                        } catch (e) {
                            if ("json" !== t.responseType) throw e;
                        }
                    "function" == typeof t.onDownloadProgress && f.addEventListener("progress", t.onDownloadProgress),
                        "function" == typeof t.onUploadProgress && f.upload && f.upload.addEventListener("progress", t.onUploadProgress),
                        t.cancelToken &&
                            t.cancelToken.promise.then(function (t) {
                                f && (f.abort(), h(t), (f = null));
                            }),
                        void 0 === d && (d = null),
                        f.send(d);
                });
            };
        }.call(e, i(10)));
    },
    function (t, e, i) {
        "use strict";
        var r = i(35);
        t.exports = function (t, e, i) {
            var n = i.config.validateStatus;
            i.status && n && !n(i.status) ? e(r("Request failed with status code " + i.status, i.config, null, i.request, i)) : t(i);
        };
    },
    function (t, e, i) {
        "use strict";
        var r = i(36);
        t.exports = function (t, e, i, n, s) {
            var a = new Error(t);
            return r(a, e, i, n, s);
        };
    },
    function (t, e) {
        "use strict";
        t.exports = function (t, e, i, r, n) {
            return (t.config = e), i && (t.code = i), (t.request = r), (t.response = n), t;
        };
    },
    function (t, e, i) {
        "use strict";
        function r(t) {
            return encodeURIComponent(t).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
        }
        var n = i(27);
        t.exports = function (t, e, i) {
            if (!e) return t;
            var s;
            if (i) s = i(e);
            else if (n.isURLSearchParams(e)) s = e.toString();
            else {
                var a = [];
                n.forEach(e, function (t, e) {
                    null !== t &&
                        void 0 !== t &&
                        (n.isArray(t) && (e += "[]"),
                        n.isArray(t) || (t = [t]),
                        n.forEach(t, function (t) {
                            n.isDate(t) ? (t = t.toISOString()) : n.isObject(t) && (t = JSON.stringify(t)), a.push(r(e) + "=" + r(t));
                        }));
                }),
                    (s = a.join("&"));
            }
            return s && (t += (-1 === t.indexOf("?") ? "?" : "&") + s), t;
        };
    },
    function (t, e, i) {
        "use strict";
        var r = i(27);
        t.exports = function (t) {
            var e,
                i,
                n,
                s = {};
            return t
                ? (r.forEach(t.split("\n"), function (t) {
                      (n = t.indexOf(":")), (e = r.trim(t.substr(0, n)).toLowerCase()), (i = r.trim(t.substr(n + 1))), e && (s[e] = s[e] ? s[e] + ", " + i : i);
                  }),
                  s)
                : s;
        };
    },
    function (t, e, i) {
        "use strict";
        var r = i(27);
        t.exports = r.isStandardBrowserEnv()
            ? (function () {
                  function t(t) {
                      var e = t;
                      return (
                          i && (n.setAttribute("href", e), (e = n.href)),
                          n.setAttribute("href", e),
                          {
                              href: n.href,
                              protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                              host: n.host,
                              search: n.search ? n.search.replace(/^\?/, "") : "",
                              hash: n.hash ? n.hash.replace(/^#/, "") : "",
                              hostname: n.hostname,
                              port: n.port,
                              pathname: "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname,
                          }
                      );
                  }
                  var e,
                      i = /(msie|trident)/i.test(navigator.userAgent),
                      n = document.createElement("a");
                  return (
                      (e = t(window.location.href)),
                      function (i) {
                          var n = r.isString(i) ? t(i) : i;
                          return n.protocol === e.protocol && n.host === e.host;
                      }
                  );
              })()
            : function () {
                  return !0;
              };
    },
    function (t, e) {
        "use strict";
        function i() {
            this.message = "String contains an invalid character";
        }
        var r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        ((i.prototype = new Error()).code = 5),
            (i.prototype.name = "InvalidCharacterError"),
            (t.exports = function (t) {
                for (var e, n, s = String(t), a = "", o = 0, l = r; s.charAt(0 | o) || ((l = "="), o % 1); a += l.charAt(63 & (e >> (8 - (o % 1) * 8)))) {
                    if ((n = s.charCodeAt((o += 0.75))) > 255) throw new i();
                    e = (e << 8) | n;
                }
                return a;
            });
    },
    function (t, e, i) {
        "use strict";
        var r = i(27);
        t.exports = r.isStandardBrowserEnv()
            ? {
                  write: function (t, e, i, n, s, a) {
                      var o = [];
                      o.push(t + "=" + encodeURIComponent(e)),
                          r.isNumber(i) && o.push("expires=" + new Date(i).toGMTString()),
                          r.isString(n) && o.push("path=" + n),
                          r.isString(s) && o.push("domain=" + s),
                          !0 === a && o.push("secure"),
                          (document.cookie = o.join("; "));
                  },
                  read: function (t) {
                      var e = document.cookie.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)"));
                      return e ? decodeURIComponent(e[3]) : null;
                  },
                  remove: function (t) {
                      this.write(t, "", Date.now() - 864e5);
                  },
              }
            : {
                  write: function () {},
                  read: function () {
                      return null;
                  },
                  remove: function () {},
              };
    },
    function (t, e, i) {
        "use strict";
        function r() {
            this.handlers = [];
        }
        var n = i(27);
        (r.prototype.use = function (t, e) {
            return this.handlers.push({ fulfilled: t, rejected: e }), this.handlers.length - 1;
        }),
            (r.prototype.eject = function (t) {
                this.handlers[t] && (this.handlers[t] = null);
            }),
            (r.prototype.forEach = function (t) {
                n.forEach(this.handlers, function (e) {
                    null !== e && t(e);
                });
            }),
            (t.exports = r);
    },
    function (t, e, i) {
        "use strict";
        function r(t) {
            t.cancelToken && t.cancelToken.throwIfRequested();
        }
        var n = i(27),
            s = i(44),
            a = i(45),
            o = i(31);
        t.exports = function (t) {
            r(t),
                (t.headers = t.headers || {}),
                (t.data = s(t.data, t.headers, t.transformRequest)),
                (t.headers = n.merge(t.headers.common || {}, t.headers[t.method] || {}, t.headers || {})),
                n.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function (e) {
                    delete t.headers[e];
                });
            return (t.adapter || o.adapter)(t).then(
                function (e) {
                    return r(t), (e.data = s(e.data, e.headers, t.transformResponse)), e;
                },
                function (e) {
                    return a(e) || (r(t), e && e.response && (e.response.data = s(e.response.data, e.response.headers, t.transformResponse))), Promise.reject(e);
                }
            );
        };
    },
    function (t, e, i) {
        "use strict";
        var r = i(27);
        t.exports = function (t, e, i) {
            return (
                r.forEach(i, function (i) {
                    t = i(t, e);
                }),
                t
            );
        };
    },
    function (t, e) {
        "use strict";
        t.exports = function (t) {
            return !(!t || !t.__CANCEL__);
        };
    },
    function (t, e) {
        "use strict";
        t.exports = function (t) {
            return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t);
        };
    },
    function (t, e) {
        "use strict";
        t.exports = function (t, e) {
            return e ? t.replace(/\/+$/, "") + "/" + e.replace(/^\/+/, "") : t;
        };
    },
    function (t, e) {
        "use strict";
        function i(t) {
            this.message = t;
        }
        (i.prototype.toString = function () {
            return "Cancel" + (this.message ? ": " + this.message : "");
        }),
            (i.prototype.__CANCEL__ = !0),
            (t.exports = i);
    },
    function (t, e, i) {
        "use strict";
        function r(t) {
            if ("function" != typeof t) throw new TypeError("executor must be a function.");
            var e;
            this.promise = new Promise(function (t) {
                e = t;
            });
            var i = this;
            t(function (t) {
                i.reason || ((i.reason = new n(t)), e(i.reason));
            });
        }
        var n = i(48);
        (r.prototype.throwIfRequested = function () {
            if (this.reason) throw this.reason;
        }),
            (r.source = function () {
                var t;
                return {
                    token: new r(function (e) {
                        t = e;
                    }),
                    cancel: t,
                };
            }),
            (t.exports = r);
    },
    function (t, e) {
        "use strict";
        t.exports = function (t) {
            return function (e) {
                return t.apply(null, e);
            };
        };
    },
    function (t, e, i) {
        "use strict";
        function r(t) {
            var e = t.querySelectorAll(".exhibition-chip__image-single");
            if (1 !== e.length) {
                a = new s.TimelineMax({ repeat: -1 });
                for (var i = 0; i < e.length; i++) a.fromTo(e[i], 0.25, { opacity: 0 }, { opacity: 1 }), a.to(e[i], 0.25, { opacity: 0 }, "+=0.6");
                a.to(e[0], 0.25, { opacity: 1 });
            }
        }
        function n(t) {
            var e = t.querySelectorAll(".exhibition-chip__image-single");
            if (1 !== e.length) {
                e[0];
                a && (a.stop(), a.clear(), (a = null), s.TweenLite.to(e, 0.25, { opacity: 0 }));
            }
        }
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.default = function () {
                for (
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document,
                        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        i = null !== e ? e : t.querySelectorAll(".chip-item"),
                        s = function (t) {
                            i[t].addEventListener("touchstart", function () {
                                i[t].classList.add("is-hover");
                            }),
                                i[t].addEventListener("touchend", function () {
                                    i[t].classList.remove("is-hover");
                                });
                        },
                        a = i.length - 1;
                    a >= 0;
                    a--
                )
                    s(a);
                var o = function (t) {
                    var e = i[t].querySelector(".exhibition-chip__slideshow");
                    if (!e) return "continue";
                    e.addEventListener("mouseenter", function () {
                        r(e);
                    }),
                        e.addEventListener("mouseleave", function () {
                            n(e);
                        }),
                        e.addEventListener("touchstart", function () {
                            r(e);
                        }),
                        e.addEventListener("touchend", function () {
                            n(e);
                        });
                };
                for (a = i.length - 1; a >= 0; a--) {
                    o(a);
                }
            });
        var s = i(22),
            a = void 0;
    },
    function (t, e, i) {
        var r, n, s;
        (function (a) {
            var o = void 0 !== t && t.exports && void 0 !== a ? a : this || window;
            (o._gsQueue || (o._gsQueue = [])).push(function () {
                "use strict";
                var t = (o.document || {}).documentElement,
                    e = o,
                    i = function (i, r) {
                        var n = "x" === r ? "Width" : "Height",
                            s = "scroll" + n,
                            a = "client" + n,
                            o = document.body;
                        return i === e || i === t || i === o ? Math.max(t[s], o[s]) - (e["inner" + n] || t[a] || o[a]) : i[s] - i["offset" + n];
                    },
                    r = function (i, r) {
                        var n = "scroll" + ("x" === r ? "Left" : "Top");
                        return (
                            i === e && (null != i.pageXOffset ? (n = "page" + r.toUpperCase() + "Offset") : (i = null != t[n] ? t : document.body)),
                            function () {
                                return i[n];
                            }
                        );
                    },
                    n = function (i, n) {
                        var s = (function (t) {
                                return "string" == typeof t && (t = TweenLite.selector(t)), t.length && t !== e && t[0] && t[0].style && !t.nodeType && (t = t[0]), t === e || (t.nodeType && t.style) ? t : null;
                            })(i).getBoundingClientRect(),
                            a = !n || n === e || n === document.body,
                            o = (a ? t : n).getBoundingClientRect(),
                            l = { x: s.left - o.left, y: s.top - o.top };
                        return !a && n && ((l.x += r(n, "x")()), (l.y += r(n, "y")())), l;
                    },
                    s = function (t, e, r) {
                        var s = typeof t;
                        return isNaN(t) ? ("number" === s || ("string" === s && "=" === t.charAt(1)) ? t : "max" === t ? i(e, r) : Math.min(i(e, r), n(t, e)[r])) : parseFloat(t);
                    },
                    a = o._gsDefine.plugin({
                        propName: "scrollTo",
                        API: 2,
                        global: !0,
                        version: "1.9.0",
                        init: function (t, i, n) {
                            return (
                                (this._wdw = t === e),
                                (this._target = t),
                                (this._tween = n),
                                "object" != typeof i ? "string" == typeof (i = { y: i }).y && "max" !== i.y && "=" !== i.y.charAt(1) && (i.x = i.y) : i.nodeType && (i = { y: i, x: i }),
                                (this.vars = i),
                                (this._autoKill = !1 !== i.autoKill),
                                (this.getX = r(t, "x")),
                                (this.getY = r(t, "y")),
                                (this.x = this.xPrev = this.getX()),
                                (this.y = this.yPrev = this.getY()),
                                null != i.x ? (this._addTween(this, "x", this.x, s(i.x, t, "x") - (i.offsetX || 0), "scrollTo_x", !0), this._overwriteProps.push("scrollTo_x")) : (this.skipX = !0),
                                null != i.y ? (this._addTween(this, "y", this.y, s(i.y, t, "y") - (i.offsetY || 0), "scrollTo_y", !0), this._overwriteProps.push("scrollTo_y")) : (this.skipY = !0),
                                !0
                            );
                        },
                        set: function (t) {
                            this._super.setRatio.call(this, t);
                            var r = this._wdw || !this.skipX ? this.getX() : this.xPrev,
                                n = this._wdw || !this.skipY ? this.getY() : this.yPrev,
                                s = n - this.yPrev,
                                o = r - this.xPrev,
                                l = a.autoKillThreshold;
                            this.x < 0 && (this.x = 0),
                                this.y < 0 && (this.y = 0),
                                this._autoKill &&
                                    (!this.skipX && (o > l || o < -l) && r < i(this._target, "x") && (this.skipX = !0),
                                    !this.skipY && (s > l || s < -l) && n < i(this._target, "y") && (this.skipY = !0),
                                    this.skipX && this.skipY && (this._tween.kill(), this.vars.onAutoKill && this.vars.onAutoKill.apply(this.vars.onAutoKillScope || this._tween, this.vars.onAutoKillParams || []))),
                                this._wdw ? e.scrollTo(this.skipX ? r : this.x, this.skipY ? n : this.y) : (this.skipY || (this._target.scrollTop = this.y), this.skipX || (this._target.scrollLeft = this.x)),
                                (this.xPrev = this.x),
                                (this.yPrev = this.y);
                        },
                    }),
                    l = a.prototype;
                (a.max = i),
                    (a.getOffset = n),
                    (a.buildGetter = r),
                    (a.autoKillThreshold = 7),
                    (l._kill = function (t) {
                        return t.scrollTo_x && (this.skipX = !0), t.scrollTo_y && (this.skipY = !0), this._super._kill.call(this, t);
                    });
            }),
                o._gsDefine && o._gsQueue.pop()(),
                (function (a) {
                    "use strict";
                    var l = function () {
                        return (o.GreenSockGlobals || o).ScrollToPlugin;
                    };
                    void 0 !== t && t.exports ? (i(53), (t.exports = l())) : ((n = [i(53)]), void 0 === (s = "function" == typeof (r = l) ? r.apply(e, n) : r) || (t.exports = s));
                })();
        }.call(
            e,
            (function () {
                return this;
            })()
        ));
    },
    function (t, e, i) {
        var r;
        (function (i) {
            !(function (i, n) {
                "use strict";
                var s = {},
                    a = i.document,
                    o = (i.GreenSockGlobals = i.GreenSockGlobals || i);
                if (!o.TweenLite) {
                    var l,
                        u,
                        c,
                        h,
                        d,
                        p = function (t) {
                            var e,
                                i = t.split("."),
                                r = o;
                            for (e = 0; e < i.length; e++) r[i[e]] = r = r[i[e]] || {};
                            return r;
                        },
                        f = p("com.greensock"),
                        m = function (t) {
                            var e,
                                i = [],
                                r = t.length;
                            for (e = 0; e !== r; i.push(t[e++]));
                            return i;
                        },
                        g = function () {},
                        v = (function () {
                            var t = Object.prototype.toString,
                                e = t.call([]);
                            return function (i) {
                                return null != i && (i instanceof Array || ("object" == typeof i && !!i.push && t.call(i) === e));
                            };
                        })(),
                        y = {},
                        _ = function (i, n, a, l) {
                            (this.sc = y[i] ? y[i].sc : []), (y[i] = this), (this.gsClass = null), (this.func = a);
                            var u = [];
                            (this.check = function (c) {
                                for (var h, d, f, m, g = n.length, v = g; --g > -1; ) (h = y[n[g]] || new _(n[g], [])).gsClass ? ((u[g] = h.gsClass), v--) : c && h.sc.push(this);
                                if (0 === v && a) {
                                    if (((d = ("com.greensock." + i).split(".")), (f = d.pop()), (m = p(d.join("."))[f] = this.gsClass = a.apply(a, u)), l))
                                        if (((o[f] = s[f] = m), void 0 !== t && t.exports))
                                            if ("TweenLite" === i) {
                                                t.exports = s.TweenLite = m;
                                                for (g in s) m[g] = s[g];
                                            } else s.TweenLite && (s.TweenLite[f] = m);
                                        else
                                            void 0 ===
                                                (r = function () {
                                                    return m;
                                                }.apply(e, [])) || (t.exports = r);
                                    for (g = 0; g < this.sc.length; g++) this.sc[g].check();
                                }
                            }),
                                this.check(!0);
                        },
                        w = (i._gsDefine = function (t, e, i, r) {
                            return new _(t, e, i, r);
                        }),
                        T = (f._class = function (t, e, i) {
                            return (
                                (e = e || function () {}),
                                w(
                                    t,
                                    [],
                                    function () {
                                        return e;
                                    },
                                    i
                                ),
                                e
                            );
                        });
                    w.globals = o;
                    var b = [0, 0, 1, 1],
                        x = T(
                            "easing.Ease",
                            function (t, e, i, r) {
                                (this._func = t), (this._type = i || 0), (this._power = r || 0), (this._params = e ? b.concat(e) : b);
                            },
                            !0
                        ),
                        S = (x.map = {}),
                        C = (x.register = function (t, e, i, r) {
                            for (var n, s, a, o, l = e.split(","), u = l.length, c = (i || "easeIn,easeOut,easeInOut").split(","); --u > -1; )
                                for (s = l[u], n = r ? T("easing." + s, null, !0) : f.easing[s] || {}, a = c.length; --a > -1; ) (o = c[a]), (S[s + "." + o] = S[o + s] = n[o] = t.getRatio ? t : t[o] || new t());
                        });
                    for (
                        (c = x.prototype)._calcEnd = !1,
                            c.getRatio = function (t) {
                                if (this._func) return (this._params[0] = t), this._func.apply(null, this._params);
                                var e = this._type,
                                    i = this._power,
                                    r = 1 === e ? 1 - t : 2 === e ? t : t < 0.5 ? 2 * t : 2 * (1 - t);
                                return 1 === i ? (r *= r) : 2 === i ? (r *= r * r) : 3 === i ? (r *= r * r * r) : 4 === i && (r *= r * r * r * r), 1 === e ? 1 - r : 2 === e ? r : t < 0.5 ? r / 2 : 1 - r / 2;
                            },
                            u = (l = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"]).length;
                        --u > -1;

                    )
                        (c = l[u] + ",Power" + u), C(new x(null, null, 1, u), c, "easeOut", !0), C(new x(null, null, 2, u), c, "easeIn" + (0 === u ? ",easeNone" : "")), C(new x(null, null, 3, u), c, "easeInOut");
                    (S.linear = f.easing.Linear.easeIn), (S.swing = f.easing.Quad.easeInOut);
                    var P = T("events.EventDispatcher", function (t) {
                        (this._listeners = {}), (this._eventTarget = t || this);
                    });
                    ((c = P.prototype).addEventListener = function (t, e, i, r, n) {
                        n = n || 0;
                        var s,
                            a,
                            o = this._listeners[t],
                            l = 0;
                        for (this !== h || d || h.wake(), null == o && (this._listeners[t] = o = []), a = o.length; --a > -1; ) (s = o[a]).c === e && s.s === i ? o.splice(a, 1) : 0 === l && s.pr < n && (l = a + 1);
                        o.splice(l, 0, { c: e, s: i, up: r, pr: n });
                    }),
                        (c.removeEventListener = function (t, e) {
                            var i,
                                r = this._listeners[t];
                            if (r) for (i = r.length; --i > -1; ) if (r[i].c === e) return void r.splice(i, 1);
                        }),
                        (c.dispatchEvent = function (t) {
                            var e,
                                i,
                                r,
                                n = this._listeners[t];
                            if (n) for ((e = n.length) > 1 && (n = n.slice(0)), i = this._eventTarget; --e > -1; ) (r = n[e]) && (r.up ? r.c.call(r.s || i, { type: t, target: i }) : r.c.call(r.s || i));
                        });
                    var E = i.requestAnimationFrame,
                        k = i.cancelAnimationFrame,
                        A =
                            Date.now ||
                            function () {
                                return new Date().getTime();
                            },
                        M = A();
                    for (u = (l = ["ms", "moz", "webkit", "o"]).length; --u > -1 && !E; ) (E = i[l[u] + "RequestAnimationFrame"]), (k = i[l[u] + "CancelAnimationFrame"] || i[l[u] + "CancelRequestAnimationFrame"]);
                    T("Ticker", function (t, e) {
                        var i,
                            r,
                            n,
                            s,
                            o,
                            l = this,
                            u = A(),
                            c = !(!1 === e || !E) && "auto",
                            p = 500,
                            f = 33,
                            m = function (t) {
                                var e,
                                    a,
                                    c = A() - M;
                                c > p && (u += c - f),
                                    (M += c),
                                    (l.time = (M - u) / 1e3),
                                    (e = l.time - o),
                                    (!i || e > 0 || !0 === t) && (l.frame++, (o += e + (e >= s ? 0.004 : s - e)), (a = !0)),
                                    !0 !== t && (n = r(m)),
                                    a && l.dispatchEvent("tick");
                            };
                        P.call(l),
                            (l.time = l.frame = 0),
                            (l.tick = function () {
                                m(!0);
                            }),
                            (l.lagSmoothing = function (t, e) {
                                (p = t || 1e10), (f = Math.min(e, p, 0));
                            }),
                            (l.sleep = function () {
                                null != n && (c && k ? k(n) : clearTimeout(n), (r = g), (n = null), l === h && (d = !1));
                            }),
                            (l.wake = function (t) {
                                null !== n ? l.sleep() : t ? (u += -M + (M = A())) : l.frame > 10 && (M = A() - p + 5),
                                    (r =
                                        0 === i
                                            ? g
                                            : c && E
                                            ? E
                                            : function (t) {
                                                  return setTimeout(t, (1e3 * (o - l.time) + 1) | 0);
                                              }),
                                    l === h && (d = !0),
                                    m(2);
                            }),
                            (l.fps = function (t) {
                                if (!arguments.length) return i;
                                (s = 1 / ((i = t) || 60)), (o = this.time + s), l.wake();
                            }),
                            (l.useRAF = function (t) {
                                if (!arguments.length) return c;
                                l.sleep(), (c = t), l.fps(i);
                            }),
                            l.fps(t),
                            setTimeout(function () {
                                "auto" === c && l.frame < 5 && "hidden" !== a.visibilityState && l.useRAF(!1);
                            }, 1500);
                    }),
                        ((c = f.Ticker.prototype = new f.events.EventDispatcher()).constructor = f.Ticker);
                    var L = T("core.Animation", function (t, e) {
                        if (
                            ((this.vars = e = e || {}),
                            (this._duration = this._totalDuration = t || 0),
                            (this._delay = Number(e.delay) || 0),
                            (this._timeScale = 1),
                            (this._active = !0 === e.immediateRender),
                            (this.data = e.data),
                            (this._reversed = !0 === e.reversed),
                            $)
                        ) {
                            d || h.wake();
                            var i = this.vars.useFrames ? Q : $;
                            i.add(this, i._time), this.vars.paused && this.paused(!0);
                        }
                    });
                    (h = L.ticker = new f.Ticker()),
                        ((c = L.prototype)._dirty = c._gc = c._initted = c._paused = !1),
                        (c._totalTime = c._time = 0),
                        (c._rawPrevTime = -1),
                        (c._next = c._last = c._onUpdate = c._timeline = c.timeline = null),
                        (c._paused = !1);
                    var I = function () {
                        d && A() - M > 2e3 && "hidden" !== a.visibilityState && h.wake();
                        var t = setTimeout(I, 2e3);
                        t.unref && t.unref();
                    };
                    I(),
                        (c.play = function (t, e) {
                            return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
                        }),
                        (c.pause = function (t, e) {
                            return null != t && this.seek(t, e), this.paused(!0);
                        }),
                        (c.resume = function (t, e) {
                            return null != t && this.seek(t, e), this.paused(!1);
                        }),
                        (c.seek = function (t, e) {
                            return this.totalTime(Number(t), !1 !== e);
                        }),
                        (c.restart = function (t, e) {
                            return this.reversed(!1)
                                .paused(!1)
                                .totalTime(t ? -this._delay : 0, !1 !== e, !0);
                        }),
                        (c.reverse = function (t, e) {
                            return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1);
                        }),
                        (c.render = function (t, e, i) {}),
                        (c.invalidate = function () {
                            return (this._time = this._totalTime = 0), (this._initted = this._gc = !1), (this._rawPrevTime = -1), (!this._gc && this.timeline) || this._enabled(!0), this;
                        }),
                        (c.isActive = function () {
                            var t,
                                e = this._timeline,
                                i = this._startTime;
                            return !e || (!this._gc && !this._paused && e.isActive() && (t = e.rawTime(!0)) >= i && t < i + this.totalDuration() / this._timeScale - 1e-7);
                        }),
                        (c._enabled = function (t, e) {
                            return (
                                d || h.wake(),
                                (this._gc = !t),
                                (this._active = this.isActive()),
                                !0 !== e && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)),
                                !1
                            );
                        }),
                        (c._kill = function (t, e) {
                            return this._enabled(!1, !1);
                        }),
                        (c.kill = function (t, e) {
                            return this._kill(t, e), this;
                        }),
                        (c._uncache = function (t) {
                            for (var e = t ? this : this.timeline; e; ) (e._dirty = !0), (e = e.timeline);
                            return this;
                        }),
                        (c._swapSelfInParams = function (t) {
                            for (var e = t.length, i = t.concat(); --e > -1; ) "{self}" === t[e] && (i[e] = this);
                            return i;
                        }),
                        (c._callback = function (t) {
                            var e = this.vars,
                                i = e[t],
                                r = e[t + "Params"],
                                n = e[t + "Scope"] || e.callbackScope || this;
                            switch (r ? r.length : 0) {
                                case 0:
                                    i.call(n);
                                    break;
                                case 1:
                                    i.call(n, r[0]);
                                    break;
                                case 2:
                                    i.call(n, r[0], r[1]);
                                    break;
                                default:
                                    i.apply(n, r);
                            }
                        }),
                        (c.eventCallback = function (t, e, i, r) {
                            if ("on" === (t || "").substr(0, 2)) {
                                var n = this.vars;
                                if (1 === arguments.length) return n[t];
                                null == e ? delete n[t] : ((n[t] = e), (n[t + "Params"] = v(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i), (n[t + "Scope"] = r)), "onUpdate" === t && (this._onUpdate = e);
                            }
                            return this;
                        }),
                        (c.delay = function (t) {
                            return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), (this._delay = t), this) : this._delay;
                        }),
                        (c.duration = function (t) {
                            return arguments.length
                                ? ((this._duration = this._totalDuration = t),
                                  this._uncache(!0),
                                  this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0),
                                  this)
                                : ((this._dirty = !1), this._duration);
                        }),
                        (c.totalDuration = function (t) {
                            return (this._dirty = !1), arguments.length ? this.duration(t) : this._totalDuration;
                        }),
                        (c.time = function (t, e) {
                            return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time;
                        }),
                        (c.totalTime = function (t, e, i) {
                            if ((d || h.wake(), !arguments.length)) return this._totalTime;
                            if (this._timeline) {
                                if ((t < 0 && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming)) {
                                    this._dirty && this.totalDuration();
                                    var r = this._totalDuration,
                                        n = this._timeline;
                                    if ((t > r && !i && (t = r), (this._startTime = (this._paused ? this._pauseTime : n._time) - (this._reversed ? r - t : t) / this._timeScale), n._dirty || this._uncache(!1), n._timeline))
                                        for (; n._timeline; ) n._timeline._time !== (n._startTime + n._totalTime) / n._timeScale && n.totalTime(n._totalTime, !0), (n = n._timeline);
                                }
                                this._gc && this._enabled(!0, !1), (this._totalTime === t && 0 !== this._duration) || (D.length && Z(), this.render(t, e, !1), D.length && Z());
                            }
                            return this;
                        }),
                        (c.progress = c.totalProgress = function (t, e) {
                            var i = this.duration();
                            return arguments.length ? this.totalTime(i * t, e) : i ? this._time / i : this.ratio;
                        }),
                        (c.startTime = function (t) {
                            return arguments.length ? (t !== this._startTime && ((this._startTime = t), this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime;
                        }),
                        (c.endTime = function (t) {
                            return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale;
                        }),
                        (c.timeScale = function (t) {
                            if (!arguments.length) return this._timeScale;
                            if (((t = t || 1e-10), this._timeline && this._timeline.smoothChildTiming)) {
                                var e = this._pauseTime,
                                    i = e || 0 === e ? e : this._timeline.totalTime();
                                this._startTime = i - ((i - this._startTime) * this._timeScale) / t;
                            }
                            return (this._timeScale = t), this._uncache(!1);
                        }),
                        (c.reversed = function (t) {
                            return arguments.length
                                ? (t != this._reversed && ((this._reversed = t), this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this)
                                : this._reversed;
                        }),
                        (c.paused = function (t) {
                            if (!arguments.length) return this._paused;
                            var e,
                                i,
                                r = this._timeline;
                            return (
                                t != this._paused &&
                                    r &&
                                    (d || t || h.wake(),
                                    (i = (e = r.rawTime()) - this._pauseTime),
                                    !t && r.smoothChildTiming && ((this._startTime += i), this._uncache(!1)),
                                    (this._pauseTime = t ? e : null),
                                    (this._paused = t),
                                    (this._active = this.isActive()),
                                    !t && 0 !== i && this._initted && this.duration() && ((e = r.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale), this.render(e, e === this._totalTime, !0))),
                                this._gc && !t && this._enabled(!0, !1),
                                this
                            );
                        });
                    var O = T("core.SimpleTimeline", function (t) {
                        L.call(this, 0, t), (this.autoRemoveChildren = this.smoothChildTiming = !0);
                    });
                    ((c = O.prototype = new L()).constructor = O),
                        (c.kill()._gc = !1),
                        (c._first = c._last = c._recent = null),
                        (c._sortChildren = !1),
                        (c.add = c.insert = function (t, e, i, r) {
                            var n, s;
                            if (
                                ((t._startTime = Number(e || 0) + t._delay),
                                t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale),
                                t.timeline && t.timeline._remove(t, !0),
                                (t.timeline = t._timeline = this),
                                t._gc && t._enabled(!0, !0),
                                (n = this._last),
                                this._sortChildren)
                            )
                                for (s = t._startTime; n && n._startTime > s; ) n = n._prev;
                            return (
                                n ? ((t._next = n._next), (n._next = t)) : ((t._next = this._first), (this._first = t)),
                                t._next ? (t._next._prev = t) : (this._last = t),
                                (t._prev = n),
                                (this._recent = t),
                                this._timeline && this._uncache(!0),
                                this
                            );
                        }),
                        (c._remove = function (t, e) {
                            return (
                                t.timeline === this &&
                                    (e || t._enabled(!1, !0),
                                    t._prev ? (t._prev._next = t._next) : this._first === t && (this._first = t._next),
                                    t._next ? (t._next._prev = t._prev) : this._last === t && (this._last = t._prev),
                                    (t._next = t._prev = t.timeline = null),
                                    t === this._recent && (this._recent = this._last),
                                    this._timeline && this._uncache(!0)),
                                this
                            );
                        }),
                        (c.render = function (t, e, i) {
                            var r,
                                n = this._first;
                            for (this._totalTime = this._time = this._rawPrevTime = t; n; )
                                (r = n._next),
                                    (n._active || (t >= n._startTime && !n._paused && !n._gc)) &&
                                        (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)),
                                    (n = r);
                        }),
                        (c.rawTime = function () {
                            return d || h.wake(), this._totalTime;
                        });
                    var z = T(
                            "TweenLite",
                            function (t, e, r) {
                                if ((L.call(this, e, r), (this.render = z.prototype.render), null == t)) throw "Cannot tween a null target.";
                                this.target = t = "string" != typeof t ? t : z.selector(t) || t;
                                var n,
                                    s,
                                    a,
                                    o = t.jquery || (t.length && t !== i && t[0] && (t[0] === i || (t[0].nodeType && t[0].style && !t.nodeType))),
                                    l = this.vars.overwrite;
                                if (((this._overwrite = l = null == l ? G[z.defaultOverwrite] : "number" == typeof l ? l >> 0 : G[l]), (o || t instanceof Array || (t.push && v(t))) && "number" != typeof t[0]))
                                    for (this._targets = a = m(t), this._propLookup = [], this._siblings = [], n = 0; n < a.length; n++)
                                        (s = a[n])
                                            ? "string" != typeof s
                                                ? s.length && s !== i && s[0] && (s[0] === i || (s[0].nodeType && s[0].style && !s.nodeType))
                                                    ? (a.splice(n--, 1), (this._targets = a = a.concat(m(s))))
                                                    : ((this._siblings[n] = J(s, this, !1)), 1 === l && this._siblings[n].length > 1 && et(s, this, null, 1, this._siblings[n]))
                                                : "string" == typeof (s = a[n--] = z.selector(s)) && a.splice(n + 1, 1)
                                            : a.splice(n--, 1);
                                else (this._propLookup = {}), (this._siblings = J(t, this, !1)), 1 === l && this._siblings.length > 1 && et(t, this, null, 1, this._siblings);
                                (this.vars.immediateRender || (0 === e && 0 === this._delay && !1 !== this.vars.immediateRender)) && ((this._time = -1e-10), this.render(Math.min(0, -this._delay)));
                            },
                            !0
                        ),
                        R = function (t) {
                            return t && t.length && t !== i && t[0] && (t[0] === i || (t[0].nodeType && t[0].style && !t.nodeType));
                        };
                    ((c = z.prototype = new L()).constructor = z),
                        (c.kill()._gc = !1),
                        (c.ratio = 0),
                        (c._firstPT = c._targets = c._overwrittenProps = c._startAt = null),
                        (c._notifyPluginsOfEnabled = c._lazy = !1),
                        (z.version = "1.20.2"),
                        (z.defaultEase = c._ease = new x(null, null, 1, 1)),
                        (z.defaultOverwrite = "auto"),
                        (z.ticker = h),
                        (z.autoSleep = 120),
                        (z.lagSmoothing = function (t, e) {
                            h.lagSmoothing(t, e);
                        }),
                        (z.selector =
                            i.$ ||
                            i.jQuery ||
                            function (t) {
                                var e = i.$ || i.jQuery;
                                return e ? ((z.selector = e), e(t)) : void 0 === a ? t : a.querySelectorAll ? a.querySelectorAll(t) : a.getElementById("#" === t.charAt(0) ? t.substr(1) : t);
                            });
                    var D = [],
                        N = {},
                        B = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
                        F = /[\+-]=-?[\.\d]/,
                        H = function (t) {
                            for (var e, i = this._firstPT; i; )
                                (e = i.blob ? (1 === t && this.end ? this.end : t ? this.join("") : this.start) : i.c * t + i.s),
                                    i.m ? (e = i.m(e, this._target || i.t)) : e < 1e-6 && e > -1e-6 && !i.blob && (e = 0),
                                    i.f ? (i.fp ? i.t[i.p](i.fp, e) : i.t[i.p](e)) : (i.t[i.p] = e),
                                    (i = i._next);
                        },
                        j = function (t, e, i, r) {
                            var n,
                                s,
                                a,
                                o,
                                l,
                                u,
                                c,
                                h = [],
                                d = 0,
                                p = "",
                                f = 0;
                            for (
                                h.start = t,
                                    h.end = e,
                                    t = h[0] = t + "",
                                    e = h[1] = e + "",
                                    i && (i(h), (t = h[0]), (e = h[1])),
                                    h.length = 0,
                                    n = t.match(B) || [],
                                    s = e.match(B) || [],
                                    r && ((r._next = null), (r.blob = 1), (h._firstPT = h._applyPT = r)),
                                    l = s.length,
                                    o = 0;
                                o < l;
                                o++
                            )
                                (c = s[o]),
                                    (p += (u = e.substr(d, e.indexOf(c, d) - d)) || !o ? u : ","),
                                    (d += u.length),
                                    f ? (f = (f + 1) % 5) : "rgba(" === u.substr(-5) && (f = 1),
                                    c === n[o] || n.length <= o
                                        ? (p += c)
                                        : (p && (h.push(p), (p = "")),
                                          (a = parseFloat(n[o])),
                                          h.push(a),
                                          (h._firstPT = {
                                              _next: h._firstPT,
                                              t: h,
                                              p: h.length - 1,
                                              s: a,
                                              c: ("=" === c.charAt(1) ? parseInt(c.charAt(0) + "1", 10) * parseFloat(c.substr(2)) : parseFloat(c) - a) || 0,
                                              f: 0,
                                              m: f && f < 4 ? Math.round : 0,
                                          })),
                                    (d += c.length);
                            return (p += e.substr(d)) && h.push(p), (h.setRatio = H), F.test(e) && (h.end = 0), h;
                        },
                        U = function (t, e, i, r, n, s, a, o, l) {
                            "function" == typeof r && (r = r(l || 0, t));
                            var u = typeof t[e],
                                c = "function" !== u ? "" : e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ? e : "get" + e.substr(3),
                                h = "get" !== i ? i : c ? (a ? t[c](a) : t[c]()) : t[e],
                                d = "string" == typeof r && "=" === r.charAt(1),
                                p = {
                                    t: t,
                                    p: e,
                                    s: h,
                                    f: "function" === u,
                                    pg: 0,
                                    n: n || e,
                                    m: s ? ("function" == typeof s ? s : Math.round) : 0,
                                    pr: 0,
                                    c: d ? parseInt(r.charAt(0) + "1", 10) * parseFloat(r.substr(2)) : parseFloat(r) - h || 0,
                                };
                            if (
                                (("number" != typeof h || ("number" != typeof r && !d)) &&
                                    (a || isNaN(h) || (!d && isNaN(r)) || "boolean" == typeof h || "boolean" == typeof r
                                        ? ((p.fp = a), (p = { t: j(h, d ? parseFloat(p.s) + p.c : r, o || z.defaultStringFilter, p), p: "setRatio", s: 0, c: 1, f: 2, pg: 0, n: n || e, pr: 0, m: 0 }))
                                        : ((p.s = parseFloat(h)), d || (p.c = parseFloat(r) - p.s || 0))),
                                p.c)
                            )
                                return (p._next = this._firstPT) && (p._next._prev = p), (this._firstPT = p), p;
                        },
                        X = (z._internals = { isArray: v, isSelector: R, lazyTweens: D, blobDif: j }),
                        q = (z._plugins = {}),
                        W = (X.tweenLookup = {}),
                        Y = 0,
                        V = (X.reservedProps = {
                            ease: 1,
                            delay: 1,
                            overwrite: 1,
                            onComplete: 1,
                            onCompleteParams: 1,
                            onCompleteScope: 1,
                            useFrames: 1,
                            runBackwards: 1,
                            startAt: 1,
                            onUpdate: 1,
                            onUpdateParams: 1,
                            onUpdateScope: 1,
                            onStart: 1,
                            onStartParams: 1,
                            onStartScope: 1,
                            onReverseComplete: 1,
                            onReverseCompleteParams: 1,
                            onReverseCompleteScope: 1,
                            onRepeat: 1,
                            onRepeatParams: 1,
                            onRepeatScope: 1,
                            easeParams: 1,
                            yoyo: 1,
                            immediateRender: 1,
                            repeat: 1,
                            repeatDelay: 1,
                            data: 1,
                            paused: 1,
                            reversed: 1,
                            autoCSS: 1,
                            lazy: 1,
                            onOverwrite: 1,
                            callbackScope: 1,
                            stringFilter: 1,
                            id: 1,
                            yoyoEase: 1,
                        }),
                        G = { none: 0, all: 1, auto: 2, concurrent: 3, allOnStart: 4, preexisting: 5, true: 1, false: 0 },
                        Q = (L._rootFramesTimeline = new O()),
                        $ = (L._rootTimeline = new O()),
                        K = 30,
                        Z = (X.lazyRender = function () {
                            var t,
                                e = D.length;
                            for (N = {}; --e > -1; ) (t = D[e]) && !1 !== t._lazy && (t.render(t._lazy[0], t._lazy[1], !0), (t._lazy = !1));
                            D.length = 0;
                        });
                    ($._startTime = h.time),
                        (Q._startTime = h.frame),
                        ($._active = Q._active = !0),
                        setTimeout(Z, 1),
                        (L._updateRoot = z.render = function () {
                            var t, e, i;
                            if ((D.length && Z(), $.render((h.time - $._startTime) * $._timeScale, !1, !1), Q.render((h.frame - Q._startTime) * Q._timeScale, !1, !1), D.length && Z(), h.frame >= K)) {
                                K = h.frame + (parseInt(z.autoSleep, 10) || 120);
                                for (i in W) {
                                    for (t = (e = W[i].tweens).length; --t > -1; ) e[t]._gc && e.splice(t, 1);
                                    0 === e.length && delete W[i];
                                }
                                if ((!(i = $._first) || i._paused) && z.autoSleep && !Q._first && 1 === h._listeners.tick.length) {
                                    for (; i && i._paused; ) i = i._next;
                                    i || h.sleep();
                                }
                            }
                        }),
                        h.addEventListener("tick", L._updateRoot);
                    var J = function (t, e, i) {
                            var r,
                                n,
                                s = t._gsTweenID;
                            if ((W[s || (t._gsTweenID = s = "t" + Y++)] || (W[s] = { target: t, tweens: [] }), e && ((r = W[s].tweens), (r[(n = r.length)] = e), i))) for (; --n > -1; ) r[n] === e && r.splice(n, 1);
                            return W[s].tweens;
                        },
                        tt = function (t, e, i, r) {
                            var n,
                                s,
                                a = t.vars.onOverwrite;
                            return a && (n = a(t, e, i, r)), (a = z.onOverwrite) && (s = a(t, e, i, r)), !1 !== n && !1 !== s;
                        },
                        et = function (t, e, i, r, n) {
                            var s, a, o, l;
                            if (1 === r || r >= 4) {
                                for (l = n.length, s = 0; s < l; s++)
                                    if ((o = n[s]) !== e) o._gc || (o._kill(null, t, e) && (a = !0));
                                    else if (5 === r) break;
                                return a;
                            }
                            var u,
                                c = e._startTime + 1e-10,
                                h = [],
                                d = 0,
                                p = 0 === e._duration;
                            for (s = n.length; --s > -1; )
                                (o = n[s]) === e ||
                                    o._gc ||
                                    o._paused ||
                                    (o._timeline !== e._timeline
                                        ? ((u = u || it(e, 0, p)), 0 === it(o, u, p) && (h[d++] = o))
                                        : o._startTime <= c && o._startTime + o.totalDuration() / o._timeScale > c && (((p || !o._initted) && c - o._startTime <= 2e-10) || (h[d++] = o)));
                            for (s = d; --s > -1; )
                                if (((o = h[s]), 2 === r && o._kill(i, t, e) && (a = !0), 2 !== r || (!o._firstPT && o._initted))) {
                                    if (2 !== r && !tt(o, e)) continue;
                                    o._enabled(!1, !1) && (a = !0);
                                }
                            return a;
                        },
                        it = function (t, e, i) {
                            for (var r = t._timeline, n = r._timeScale, s = t._startTime; r._timeline; ) {
                                if (((s += r._startTime), (n *= r._timeScale), r._paused)) return -100;
                                r = r._timeline;
                            }
                            return (s /= n) > e ? s - e : (i && s === e) || (!t._initted && s - e < 2e-10) ? 1e-10 : (s += t.totalDuration() / t._timeScale / n) > e + 1e-10 ? 0 : s - e - 1e-10;
                        };
                    (c._init = function () {
                        var t,
                            e,
                            i,
                            r,
                            n,
                            s,
                            a = this.vars,
                            o = this._overwrittenProps,
                            l = this._duration,
                            u = !!a.immediateRender,
                            c = a.ease;
                        if (a.startAt) {
                            this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), (n = {});
                            for (r in a.startAt) n[r] = a.startAt[r];
                            if (
                                ((n.overwrite = !1),
                                (n.immediateRender = !0),
                                (n.lazy = u && !1 !== a.lazy),
                                (n.startAt = n.delay = null),
                                (n.onUpdate = a.onUpdate),
                                (n.onUpdateScope = a.onUpdateScope || a.callbackScope || this),
                                (this._startAt = z.to(this.target, 0, n)),
                                u)
                            )
                                if (this._time > 0) this._startAt = null;
                                else if (0 !== l) return;
                        } else if (a.runBackwards && 0 !== l)
                            if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), (this._startAt = null);
                            else {
                                0 !== this._time && (u = !1), (i = {});
                                for (r in a) (V[r] && "autoCSS" !== r) || (i[r] = a[r]);
                                if (((i.overwrite = 0), (i.data = "isFromStart"), (i.lazy = u && !1 !== a.lazy), (i.immediateRender = u), (this._startAt = z.to(this.target, 0, i)), u)) {
                                    if (0 === this._time) return;
                                } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null);
                            }
                        if (
                            ((this._ease = c = c ? (c instanceof x ? c : "function" == typeof c ? new x(c, a.easeParams) : S[c] || z.defaultEase) : z.defaultEase),
                            a.easeParams instanceof Array && c.config && (this._ease = c.config.apply(c, a.easeParams)),
                            (this._easeType = this._ease._type),
                            (this._easePower = this._ease._power),
                            (this._firstPT = null),
                            this._targets)
                        )
                            for (s = this._targets.length, t = 0; t < s; t++) this._initProps(this._targets[t], (this._propLookup[t] = {}), this._siblings[t], o ? o[t] : null, t) && (e = !0);
                        else e = this._initProps(this.target, this._propLookup, this._siblings, o, 0);
                        if ((e && z._onPluginEvent("_onInitAllProps", this), o && (this._firstPT || ("function" != typeof this.target && this._enabled(!1, !1))), a.runBackwards))
                            for (i = this._firstPT; i; ) (i.s += i.c), (i.c = -i.c), (i = i._next);
                        (this._onUpdate = a.onUpdate), (this._initted = !0);
                    }),
                        (c._initProps = function (t, e, r, n, s) {
                            var a, o, l, u, c, h;
                            if (null == t) return !1;
                            N[t._gsTweenID] && Z(),
                                this.vars.css ||
                                    (t.style &&
                                        t !== i &&
                                        t.nodeType &&
                                        q.css &&
                                        !1 !== this.vars.autoCSS &&
                                        (function (t, e) {
                                            var i,
                                                r = {};
                                            for (i in t)
                                                V[i] ||
                                                    (i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i) ||
                                                    !(!q[i] || (q[i] && q[i]._autoCSS)) ||
                                                    ((r[i] = t[i]), delete t[i]);
                                            t.css = r;
                                        })(this.vars, t));
                            for (a in this.vars)
                                if (((h = this.vars[a]), V[a])) h && (h instanceof Array || (h.push && v(h))) && -1 !== h.join("").indexOf("{self}") && (this.vars[a] = h = this._swapSelfInParams(h, this));
                                else if (q[a] && (u = new q[a]())._onInitTween(t, this.vars[a], this, s)) {
                                    for (this._firstPT = c = { _next: this._firstPT, t: u, p: "setRatio", s: 0, c: 1, f: 1, n: a, pg: 1, pr: u._priority, m: 0 }, o = u._overwriteProps.length; --o > -1; )
                                        e[u._overwriteProps[o]] = this._firstPT;
                                    (u._priority || u._onInitAllProps) && (l = !0), (u._onDisable || u._onEnable) && (this._notifyPluginsOfEnabled = !0), c._next && (c._next._prev = c);
                                } else e[a] = U.call(this, t, a, "get", h, a, 0, null, this.vars.stringFilter, s);
                            return n && this._kill(n, t)
                                ? this._initProps(t, e, r, n, s)
                                : this._overwrite > 1 && this._firstPT && r.length > 1 && et(t, this, e, this._overwrite, r)
                                ? (this._kill(e, t), this._initProps(t, e, r, n, s))
                                : (this._firstPT && ((!1 !== this.vars.lazy && this._duration) || (this.vars.lazy && !this._duration)) && (N[t._gsTweenID] = !0), l);
                        }),
                        (c.render = function (t, e, i) {
                            var r,
                                n,
                                s,
                                a,
                                o = this._time,
                                l = this._duration,
                                u = this._rawPrevTime;
                            if (t >= l - 1e-7 && t >= 0)
                                (this._totalTime = this._time = l),
                                    (this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1),
                                    this._reversed || ((r = !0), (n = "onComplete"), (i = i || this._timeline.autoRemoveChildren)),
                                    0 === l &&
                                        (this._initted || !this.vars.lazy || i) &&
                                        (this._startTime === this._timeline._duration && (t = 0),
                                        (u < 0 || (t <= 0 && t >= -1e-7) || (1e-10 === u && "isPause" !== this.data)) && u !== t && ((i = !0), u > 1e-10 && (n = "onReverseComplete")),
                                        (this._rawPrevTime = a = !e || t || u === t ? t : 1e-10));
                            else if (t < 1e-7)
                                (this._totalTime = this._time = 0),
                                    (this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0),
                                    (0 !== o || (0 === l && u > 0)) && ((n = "onReverseComplete"), (r = this._reversed)),
                                    t < 0 &&
                                        ((this._active = !1), 0 === l && (this._initted || !this.vars.lazy || i) && (u >= 0 && (1e-10 !== u || "isPause" !== this.data) && (i = !0), (this._rawPrevTime = a = !e || t || u === t ? t : 1e-10))),
                                    (!this._initted || (this._startAt && this._startAt.progress())) && (i = !0);
                            else if (((this._totalTime = this._time = t), this._easeType)) {
                                var c = t / l,
                                    h = this._easeType,
                                    d = this._easePower;
                                (1 === h || (3 === h && c >= 0.5)) && (c = 1 - c),
                                    3 === h && (c *= 2),
                                    1 === d ? (c *= c) : 2 === d ? (c *= c * c) : 3 === d ? (c *= c * c * c) : 4 === d && (c *= c * c * c * c),
                                    (this.ratio = 1 === h ? 1 - c : 2 === h ? c : t / l < 0.5 ? c / 2 : 1 - c / 2);
                            } else this.ratio = this._ease.getRatio(t / l);
                            if (this._time !== o || i) {
                                if (!this._initted) {
                                    if ((this._init(), !this._initted || this._gc)) return;
                                    if (!i && this._firstPT && ((!1 !== this.vars.lazy && this._duration) || (this.vars.lazy && !this._duration)))
                                        return (this._time = this._totalTime = o), (this._rawPrevTime = u), D.push(this), void (this._lazy = [t, e]);
                                    this._time && !r ? (this.ratio = this._ease.getRatio(this._time / l)) : r && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1));
                                }
                                for (
                                    !1 !== this._lazy && (this._lazy = !1),
                                        this._active || (!this._paused && this._time !== o && t >= 0 && (this._active = !0)),
                                        0 === o && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : n || (n = "_dummyGS")), this.vars.onStart && ((0 === this._time && 0 !== l) || e || this._callback("onStart"))),
                                        s = this._firstPT;
                                    s;

                                )
                                    s.f ? s.t[s.p](s.c * this.ratio + s.s) : (s.t[s.p] = s.c * this.ratio + s.s), (s = s._next);
                                this._onUpdate && (t < 0 && this._startAt && -1e-4 !== t && this._startAt.render(t, e, i), e || ((this._time !== o || r || i) && this._callback("onUpdate"))),
                                    n &&
                                        ((this._gc && !i) ||
                                            (t < 0 && this._startAt && !this._onUpdate && -1e-4 !== t && this._startAt.render(t, e, i),
                                            r && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), (this._active = !1)),
                                            !e && this.vars[n] && this._callback(n),
                                            0 === l && 1e-10 === this._rawPrevTime && 1e-10 !== a && (this._rawPrevTime = 0)));
                            }
                        }),
                        (c._kill = function (t, e, i) {
                            if (("all" === t && (t = null), null == t && (null == e || e === this.target))) return (this._lazy = !1), this._enabled(!1, !1);
                            e = "string" != typeof e ? e || this._targets || this.target : z.selector(e) || e;
                            var r,
                                n,
                                s,
                                a,
                                o,
                                l,
                                u,
                                c,
                                h,
                                d = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline;
                            if ((v(e) || R(e)) && "number" != typeof e[0]) for (r = e.length; --r > -1; ) this._kill(t, e[r], i) && (l = !0);
                            else {
                                if (this._targets) {
                                    for (r = this._targets.length; --r > -1; )
                                        if (e === this._targets[r]) {
                                            (o = this._propLookup[r] || {}), (this._overwrittenProps = this._overwrittenProps || []), (n = this._overwrittenProps[r] = t ? this._overwrittenProps[r] || {} : "all");
                                            break;
                                        }
                                } else {
                                    if (e !== this.target) return !1;
                                    (o = this._propLookup), (n = this._overwrittenProps = t ? this._overwrittenProps || {} : "all");
                                }
                                if (o) {
                                    if (((u = t || o), (c = t !== n && "all" !== n && t !== o && ("object" != typeof t || !t._tempKill)), i && (z.onOverwrite || this.vars.onOverwrite))) {
                                        for (s in u) o[s] && (h || (h = []), h.push(s));
                                        if ((h || !t) && !tt(this, i, e, h)) return !1;
                                    }
                                    for (s in u)
                                        (a = o[s]) &&
                                            (d && (a.f ? a.t[a.p](a.s) : (a.t[a.p] = a.s), (l = !0)),
                                            a.pg && a.t._kill(u) && (l = !0),
                                            (a.pg && 0 !== a.t._overwriteProps.length) ||
                                                (a._prev ? (a._prev._next = a._next) : a === this._firstPT && (this._firstPT = a._next), a._next && (a._next._prev = a._prev), (a._next = a._prev = null)),
                                            delete o[s]),
                                            c && (n[s] = 1);
                                    !this._firstPT && this._initted && this._enabled(!1, !1);
                                }
                            }
                            return l;
                        }),
                        (c.invalidate = function () {
                            return (
                                this._notifyPluginsOfEnabled && z._onPluginEvent("_onDisable", this),
                                (this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null),
                                (this._notifyPluginsOfEnabled = this._active = this._lazy = !1),
                                (this._propLookup = this._targets ? {} : []),
                                L.prototype.invalidate.call(this),
                                this.vars.immediateRender && ((this._time = -1e-10), this.render(Math.min(0, -this._delay))),
                                this
                            );
                        }),
                        (c._enabled = function (t, e) {
                            if ((d || h.wake(), t && this._gc)) {
                                var i,
                                    r = this._targets;
                                if (r) for (i = r.length; --i > -1; ) this._siblings[i] = J(r[i], this, !0);
                                else this._siblings = J(this.target, this, !0);
                            }
                            return L.prototype._enabled.call(this, t, e), !(!this._notifyPluginsOfEnabled || !this._firstPT) && z._onPluginEvent(t ? "_onEnable" : "_onDisable", this);
                        }),
                        (z.to = function (t, e, i) {
                            return new z(t, e, i);
                        }),
                        (z.from = function (t, e, i) {
                            return (i.runBackwards = !0), (i.immediateRender = 0 != i.immediateRender), new z(t, e, i);
                        }),
                        (z.fromTo = function (t, e, i, r) {
                            return (r.startAt = i), (r.immediateRender = 0 != r.immediateRender && 0 != i.immediateRender), new z(t, e, r);
                        }),
                        (z.delayedCall = function (t, e, i, r, n) {
                            return new z(e, 0, { delay: t, onComplete: e, onCompleteParams: i, callbackScope: r, onReverseComplete: e, onReverseCompleteParams: i, immediateRender: !1, lazy: !1, useFrames: n, overwrite: 0 });
                        }),
                        (z.set = function (t, e) {
                            return new z(t, 0, e);
                        }),
                        (z.getTweensOf = function (t, e) {
                            if (null == t) return [];
                            t = "string" != typeof t ? t : z.selector(t) || t;
                            var i, r, n, s;
                            if ((v(t) || R(t)) && "number" != typeof t[0]) {
                                for (i = t.length, r = []; --i > -1; ) r = r.concat(z.getTweensOf(t[i], e));
                                for (i = r.length; --i > -1; ) for (s = r[i], n = i; --n > -1; ) s === r[n] && r.splice(i, 1);
                            } else if (t._gsTweenID) for (i = (r = J(t).concat()).length; --i > -1; ) (r[i]._gc || (e && !r[i].isActive())) && r.splice(i, 1);
                            return r || [];
                        }),
                        (z.killTweensOf = z.killDelayedCallsTo = function (t, e, i) {
                            "object" == typeof e && ((i = e), (e = !1));
                            for (var r = z.getTweensOf(t, e), n = r.length; --n > -1; ) r[n]._kill(i, t);
                        });
                    var rt = T(
                        "plugins.TweenPlugin",
                        function (t, e) {
                            (this._overwriteProps = (t || "").split(",")), (this._propName = this._overwriteProps[0]), (this._priority = e || 0), (this._super = rt.prototype);
                        },
                        !0
                    );
                    if (
                        ((c = rt.prototype),
                        (rt.version = "1.19.0"),
                        (rt.API = 2),
                        (c._firstPT = null),
                        (c._addTween = U),
                        (c.setRatio = H),
                        (c._kill = function (t) {
                            var e,
                                i = this._overwriteProps,
                                r = this._firstPT;
                            if (null != t[this._propName]) this._overwriteProps = [];
                            else for (e = i.length; --e > -1; ) null != t[i[e]] && i.splice(e, 1);
                            for (; r; ) null != t[r.n] && (r._next && (r._next._prev = r._prev), r._prev ? ((r._prev._next = r._next), (r._prev = null)) : this._firstPT === r && (this._firstPT = r._next)), (r = r._next);
                            return !1;
                        }),
                        (c._mod = c._roundProps = function (t) {
                            for (var e, i = this._firstPT; i; )
                                (e = t[this._propName] || (null != i.n && t[i.n.split(this._propName + "_").join("")])) && "function" == typeof e && (2 === i.f ? (i.t._applyPT.m = e) : (i.m = e)), (i = i._next);
                        }),
                        (z._onPluginEvent = function (t, e) {
                            var i,
                                r,
                                n,
                                s,
                                a,
                                o = e._firstPT;
                            if ("_onInitAllProps" === t) {
                                for (; o; ) {
                                    for (a = o._next, r = n; r && r.pr > o.pr; ) r = r._next;
                                    (o._prev = r ? r._prev : s) ? (o._prev._next = o) : (n = o), (o._next = r) ? (r._prev = o) : (s = o), (o = a);
                                }
                                o = e._firstPT = n;
                            }
                            for (; o; ) o.pg && "function" == typeof o.t[t] && o.t[t]() && (i = !0), (o = o._next);
                            return i;
                        }),
                        (rt.activate = function (t) {
                            for (var e = t.length; --e > -1; ) t[e].API === rt.API && (q[new t[e]()._propName] = t[e]);
                            return !0;
                        }),
                        (w.plugin = function (t) {
                            if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
                            var e,
                                i = t.propName,
                                r = t.priority || 0,
                                n = t.overwriteProps,
                                s = { init: "_onInitTween", set: "setRatio", kill: "_kill", round: "_mod", mod: "_mod", initAll: "_onInitAllProps" },
                                a = T(
                                    "plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin",
                                    function () {
                                        rt.call(this, i, r), (this._overwriteProps = n || []);
                                    },
                                    !0 === t.global
                                ),
                                o = (a.prototype = new rt(i));
                            (o.constructor = a), (a.API = t.API);
                            for (e in s) "function" == typeof t[e] && (o[s[e]] = t[e]);
                            return (a.version = t.version), rt.activate([a]), a;
                        }),
                        (l = i._gsQueue))
                    ) {
                        for (u = 0; u < l.length; u++) l[u]();
                        for (c in y) y[c].func || i.console.log("GSAP encountered missing dependency: " + c);
                    }
                    d = !1;
                }
            })(void 0 !== t && t.exports && void 0 !== i ? i : this || window);
        }.call(
            e,
            (function () {
                return this;
            })()
        ));
    },
    function (t, e, i) {
        "use strict";
        function r() {
            !n.TweenMax.isTweening(a) &&
                a &&
                (!0 === s
                    ? n.TweenMax.fromTo(
                          a,
                          0.35,
                          { opacity: 1 },
                          {
                              opacity: 0,
                              clearProps: "all",
                              ease: Linear.easeNone,
                              onComplete: function () {
                                  a.classList.remove("is-active");
                              },
                          }
                      )
                    : (a.classList.add("is-active"), n.TweenMax.fromTo(a, 0.35, { opacity: 0 }, { opacity: 1, clearProps: "all", ease: Linear.easeNone })),
                (e.galleryNavActive = s = !s));
        }
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.galleryNavActive = void 0),
            (e.toggleGalleryNav = r),
            (e.initGalleryNav = function () {
                a = document.querySelector("[data-gallery-nav]");
                for (var t = (o = document.querySelectorAll("[data-gallery-nav-button]")).length - 1; t >= 0; t--) o[t].addEventListener("click", r);
            });
        var n = i(22),
            s = (e.galleryNavActive = !1),
            a = void 0,
            o = void 0;
    },
    function (t, e) {
        "use strict";
        !(function (t, e) {
            function i(t) {
                (this.time = t.time),
                    (this.target = t.target),
                    (this.rootBounds = t.rootBounds),
                    (this.boundingClientRect = t.boundingClientRect),
                    (this.intersectionRect = t.intersectionRect || { top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0 }),
                    (this.isIntersecting = !!t.intersectionRect);
                var e = this.boundingClientRect,
                    i = e.width * e.height,
                    r = this.intersectionRect,
                    n = r.width * r.height;
                this.intersectionRatio = i ? n / i : this.isIntersecting ? 1 : 0;
            }
            function r(t, e) {
                var i = e || {};
                if ("function" != typeof t) throw new Error("callback must be a function");
                if (i.root && 1 != i.root.nodeType) throw new Error("root must be an Element");
                (this._checkForIntersections = (function (t, e) {
                    var i = null;
                    return function () {
                        i ||
                            (i = setTimeout(function () {
                                t(), (i = null);
                            }, e));
                    };
                })(this._checkForIntersections.bind(this), this.THROTTLE_TIMEOUT)),
                    (this._callback = t),
                    (this._observationTargets = []),
                    (this._queuedEntries = []),
                    (this._rootMarginValues = this._parseRootMargin(i.rootMargin)),
                    (this.thresholds = this._initThresholds(i.threshold)),
                    (this.root = i.root || null),
                    (this.rootMargin = this._rootMarginValues
                        .map(function (t) {
                            return t.value + t.unit;
                        })
                        .join(" "));
            }
            function n(t, e, i, r) {
                "function" == typeof t.addEventListener ? t.addEventListener(e, i, r || !1) : "function" == typeof t.attachEvent && t.attachEvent("on" + e, i);
            }
            function s(t, e, i, r) {
                "function" == typeof t.removeEventListener ? t.removeEventListener(e, i, r || !1) : "function" == typeof t.detatchEvent && t.detatchEvent("on" + e, i);
            }
            function a(t) {
                var e;
                try {
                    e = t.getBoundingClientRect();
                } catch (t) {}
                return e
                    ? ((e.width && e.height) || (e = { top: e.top, right: e.right, bottom: e.bottom, left: e.left, width: e.right - e.left, height: e.bottom - e.top }), e)
                    : { top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0 };
            }
            function o(t, e) {
                for (var i = e; i; ) {
                    if (i == t) return !0;
                    i = l(i);
                }
                return !1;
            }
            function l(t) {
                var e = t.parentNode;
                return e && 11 == e.nodeType && e.host ? e.host : e;
            }
            if ("IntersectionObserver" in t && "IntersectionObserverEntry" in t && "intersectionRatio" in t.IntersectionObserverEntry.prototype)
                "isIntersecting" in t.IntersectionObserverEntry.prototype ||
                    Object.defineProperty(t.IntersectionObserverEntry.prototype, "isIntersecting", {
                        get: function () {
                            return this.intersectionRatio > 0;
                        },
                    });
            else {
                var u = [];
                (r.prototype.THROTTLE_TIMEOUT = 100),
                    (r.prototype.POLL_INTERVAL = null),
                    (r.prototype.observe = function (t) {
                        if (
                            !this._observationTargets.some(function (e) {
                                return e.element == t;
                            })
                        ) {
                            if (!t || 1 != t.nodeType) throw new Error("target must be an Element");
                            this._registerInstance(), this._observationTargets.push({ element: t, entry: null }), this._monitorIntersections(), this._checkForIntersections();
                        }
                    }),
                    (r.prototype.unobserve = function (t) {
                        (this._observationTargets = this._observationTargets.filter(function (e) {
                            return e.element != t;
                        })),
                            this._observationTargets.length || (this._unmonitorIntersections(), this._unregisterInstance());
                    }),
                    (r.prototype.disconnect = function () {
                        (this._observationTargets = []), this._unmonitorIntersections(), this._unregisterInstance();
                    }),
                    (r.prototype.takeRecords = function () {
                        var t = this._queuedEntries.slice();
                        return (this._queuedEntries = []), t;
                    }),
                    (r.prototype._initThresholds = function (t) {
                        var e = t || [0];
                        return (
                            Array.isArray(e) || (e = [e]),
                            e.sort().filter(function (t, e, i) {
                                if ("number" != typeof t || isNaN(t) || t < 0 || t > 1) throw new Error("threshold must be a number between 0 and 1 inclusively");
                                return t !== i[e - 1];
                            })
                        );
                    }),
                    (r.prototype._parseRootMargin = function (t) {
                        var e = (t || "0px").split(/\s+/).map(function (t) {
                            var e = /^(-?\d*\.?\d+)(px|%)$/.exec(t);
                            if (!e) throw new Error("rootMargin must be specified in pixels or percent");
                            return { value: parseFloat(e[1]), unit: e[2] };
                        });
                        return (e[1] = e[1] || e[0]), (e[2] = e[2] || e[0]), (e[3] = e[3] || e[1]), e;
                    }),
                    (r.prototype._monitorIntersections = function () {
                        this._monitoringIntersections ||
                            ((this._monitoringIntersections = !0),
                            this.POLL_INTERVAL
                                ? (this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL))
                                : (n(t, "resize", this._checkForIntersections, !0),
                                  n(e, "scroll", this._checkForIntersections, !0),
                                  "MutationObserver" in t && ((this._domObserver = new MutationObserver(this._checkForIntersections)), this._domObserver.observe(e, { attributes: !0, childList: !0, characterData: !0, subtree: !0 }))));
                    }),
                    (r.prototype._unmonitorIntersections = function () {
                        this._monitoringIntersections &&
                            ((this._monitoringIntersections = !1),
                            clearInterval(this._monitoringInterval),
                            (this._monitoringInterval = null),
                            s(t, "resize", this._checkForIntersections, !0),
                            s(e, "scroll", this._checkForIntersections, !0),
                            this._domObserver && (this._domObserver.disconnect(), (this._domObserver = null)));
                    }),
                    (r.prototype._checkForIntersections = function () {
                        var e = this._rootIsInDom(),
                            r = e ? this._getRootRect() : { top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0 };
                        this._observationTargets.forEach(function (n) {
                            var s = n.element,
                                o = a(s),
                                l = this._rootContainsTarget(s),
                                u = n.entry,
                                c = e && l && this._computeTargetAndRootIntersection(s, r),
                                h = (n.entry = new i({ time: t.performance && performance.now && performance.now(), target: s, boundingClientRect: o, rootBounds: r, intersectionRect: c }));
                            u ? (e && l ? this._hasCrossedThreshold(u, h) && this._queuedEntries.push(h) : u && u.isIntersecting && this._queuedEntries.push(h)) : this._queuedEntries.push(h);
                        }, this),
                            this._queuedEntries.length && this._callback(this.takeRecords(), this);
                    }),
                    (r.prototype._computeTargetAndRootIntersection = function (i, r) {
                        if ("none" != t.getComputedStyle(i).display) {
                            for (var n = a(i), s = l(i), o = !1; !o; ) {
                                var u = null,
                                    c = 1 == s.nodeType ? t.getComputedStyle(s) : {};
                                if ("none" == c.display) return;
                                if (
                                    (s == this.root || s == e ? ((o = !0), (u = r)) : s != e.body && s != e.documentElement && "visible" != c.overflow && (u = a(s)),
                                    u &&
                                        !(n = (function (t, e) {
                                            var i = Math.max(t.top, e.top),
                                                r = Math.min(t.bottom, e.bottom),
                                                n = Math.max(t.left, e.left),
                                                s = Math.min(t.right, e.right),
                                                a = s - n,
                                                o = r - i;
                                            return a >= 0 && o >= 0 && { top: i, bottom: r, left: n, right: s, width: a, height: o };
                                        })(u, n)))
                                )
                                    break;
                                s = l(s);
                            }
                            return n;
                        }
                    }),
                    (r.prototype._getRootRect = function () {
                        var t;
                        if (this.root) t = a(this.root);
                        else {
                            var i = e.documentElement,
                                r = e.body;
                            t = { top: 0, left: 0, right: i.clientWidth || r.clientWidth, width: i.clientWidth || r.clientWidth, bottom: i.clientHeight || r.clientHeight, height: i.clientHeight || r.clientHeight };
                        }
                        return this._expandRectByRootMargin(t);
                    }),
                    (r.prototype._expandRectByRootMargin = function (t) {
                        var e = this._rootMarginValues.map(function (e, i) {
                                return "px" == e.unit ? e.value : (e.value * (i % 2 ? t.width : t.height)) / 100;
                            }),
                            i = { top: t.top - e[0], right: t.right + e[1], bottom: t.bottom + e[2], left: t.left - e[3] };
                        return (i.width = i.right - i.left), (i.height = i.bottom - i.top), i;
                    }),
                    (r.prototype._hasCrossedThreshold = function (t, e) {
                        var i = t && t.isIntersecting ? t.intersectionRatio || 0 : -1,
                            r = e.isIntersecting ? e.intersectionRatio || 0 : -1;
                        if (i !== r)
                            for (var n = 0; n < this.thresholds.length; n++) {
                                var s = this.thresholds[n];
                                if (s == i || s == r || s < i != s < r) return !0;
                            }
                    }),
                    (r.prototype._rootIsInDom = function () {
                        return !this.root || o(e, this.root);
                    }),
                    (r.prototype._rootContainsTarget = function (t) {
                        return o(this.root || e, t);
                    }),
                    (r.prototype._registerInstance = function () {
                        u.indexOf(this) < 0 && u.push(this);
                    }),
                    (r.prototype._unregisterInstance = function () {
                        var t = u.indexOf(this);
                        -1 != t && u.splice(t, 1);
                    }),
                    (t.IntersectionObserver = r),
                    (t.IntersectionObserverEntry = i);
            }
        })(window, document);
    },
    function (t, e) {
        "use strict";
        function i(t, e) {
            t.addEventListener("mouseover", function () {
                t.classList.add("is-highlighted"), e.classList.add("is-filtered"), s && clearTimeout(s);
            }),
                t.addEventListener("mouseout", function () {
                    t.classList.remove("is-highlighted"),
                        (s = setTimeout(function () {
                            e.classList.remove("is-filtered");
                        }, 250));
                });
        }
        function r(t, e) {
            var i = t.getAttribute("data-thumb-title"),
                r = e.querySelectorAll('[data-thumb-title="' + i + '"]');
            t.addEventListener("mouseover", function () {
                for (var t = r.length - 1; t >= 0; t--) 0 === t && r[t].classList.add("is-highlighted-first"), r[t].classList.add("is-highlighted");
                e.classList.add("is-filtered");
            }),
                t.addEventListener("mouseout", function () {
                    for (var t = r.length - 1; t >= 0; t--) 0 === t && r[t].classList.remove("is-highlighted-first"), r[t].classList.remove("is-highlighted");
                    e.classList.remove("is-filtered");
                });
        }
        function n(t, e) {
            for (var r = t.length - 1; r >= 0; r--) i(t[r], e);
        }
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.bindThumbListeners = n),
            (e.initThumbs = function () {
                n(document.querySelectorAll("[data-thumb-single]"), document.querySelector("[data-thumb-parent]"));
                for (var t = document.querySelectorAll(".thumbs__list"), e = 0; e < t.length; e++) for (var i = t[e].querySelectorAll("[data-thumb-title]"), s = i.length - 1; s >= 0; s--) r(i[s], t[e]);
            });
        var s = void 0;
    },
    function (t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.default = function () {
                var t = document.querySelector("[data-nav]"),
                    e = document.querySelector("[data-nav-prompt]");
                t &&
                    e &&
                    e.addEventListener("click", function (e) {
                        t.classList.toggle("is-nav-active");
                    });
            });
    },
    function (t, e, i) {
        "use strict";
        function r() {
            function t() {
                c && clearTimeout(c),
                    e &&
                        ((0, o.unbindWindowListener)("scroll", t),
                        s.TweenMax.to(e, 0.5, {
                            opacity: 0,
                            ease: Linear.easeNone,
                            onComplete: function () {
                                e.remove(),
                                    r
                                        ? ((0, a.default)(".title-marker").on("enter", function (t) {
                                              !(function (t) {
                                                  var e = t.querySelector(".title-marker__slide");
                                                  if (e === l[l.length - 1]) return;
                                                  u && clearTimeout(u);
                                                  for (var i = l.length - 1; i >= 0; i--) n(i);
                                                  e.classList.add("is-active"),
                                                      l.push(e),
                                                      s.TweenMax.fromTo(
                                                          e,
                                                          0.5,
                                                          { opacity: 0 },
                                                          {
                                                              opacity: 1,
                                                              onComplete: function () {
                                                                  u = setTimeout(function () {
                                                                      n(l.length - 1), (u = null);
                                                                  }, 3e3);
                                                              },
                                                          }
                                                      );
                                              })(t);
                                          }),
                                          (0, a.default)(".title-marker").check())
                                        : i &&
                                          (i.classList.add("is-active"),
                                          s.TweenMax.fromTo(
                                              i,
                                              0.5,
                                              { opacity: 0 },
                                              {
                                                  opacity: 1,
                                                  delay: 0.25,
                                                  ease: Linear.easeNone,
                                                  onComplete: function () {
                                                      s.TweenMax.fromTo(
                                                          i,
                                                          0.5,
                                                          { opacity: 1 },
                                                          {
                                                              opacity: 0,
                                                              delay: 3,
                                                              ease: Linear.easeNone,
                                                              onComplete: function () {
                                                                  i.remove();
                                                              },
                                                          }
                                                      );
                                                  },
                                              }
                                          ));
                            },
                        }));
            }
            document.body;
            var e = document.querySelector("[data-intro-wrap]"),
                i = (document.querySelector("[data-intro-text]"), document.querySelector("[data-intro-after]")),
                r = document.querySelector(".title-marker"),
                c = void 0;
            e && (e.addEventListener("click", t), (0, o.bindWindowListener)("scroll", t));
        }
        function n(t) {
            var e = l[t];
            s.TweenMax.to(e, 0.5, {
                opacity: 0,
                clearProps: "all",
                onComplete: function () {
                    e.classList.remove("is-active"), l.splice(t, 1);
                },
            });
        }
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.default = function () {
                !(function () {
                    var t = document.querySelector("[data-intro-text]"),
                        e = document.querySelector("[data-jumbo-text]"),
                        i = document.querySelector("[data-jumbo-after]");
                    e &&
                        !t &&
                        (e.classList.add("is-active"),
                        s.TweenMax.fromTo(e, 0.5, { opacity: 0 }, { opacity: 1, delay: 0.5, ease: Linear.easeNone }),
                        setTimeout(function () {
                            s.TweenMax.to(e, 0.5, {
                                opacity: 0,
                                ease: Linear.easeNone,
                                onComplete: function () {
                                    e.classList.remove("is-active"), e.classList.add("is-hidden"), i && s.TweenMax.to(i, 0.5, { opacity: 1, delay: 0.25, ease: Linear.easeNone });
                                },
                            });
                        }, 3e3));
                })(),
                    r();
            });
        var s = i(22),
            a = (function (t) {
                return t && t.__esModule ? t : { default: t };
            })(i(59)),
            o = i(3),
            l = [],
            u = void 0;
    },
    function (t, e, i) {
        !(function (e, i) {
            t.exports = i();
        })(0, function () {
            return (function (t) {
                function e(r) {
                    if (i[r]) return i[r].exports;
                    var n = (i[r] = { exports: {}, id: r, loaded: !1 });
                    return t[r].call(n.exports, n, n.exports, e), (n.loaded = !0), n.exports;
                }
                var i = {};
                return (e.m = t), (e.c = i), (e.p = ""), e(0);
            })([
                function (t, e, i) {
                    "use strict";
                    var r = (function (t) {
                        return t && t.__esModule ? t : { default: t };
                    })(i(2));
                    t.exports = r.default;
                },
                function (t, e) {
                    t.exports = function (t) {
                        var e = typeof t;
                        return null != t && ("object" == e || "function" == e);
                    };
                },
                function (t, e, i) {
                    "use strict";
                    function r(t) {
                        return t && t.__esModule ? t : { default: t };
                    }
                    Object.defineProperty(e, "__esModule", { value: !0 });
                    var n = r(i(9)),
                        s = r(i(3)),
                        a = i(4);
                    e.default = (function () {
                        if ("undefined" != typeof window) {
                            var t = ["scroll", "resize", "load"],
                                e = { history: [] },
                                i = { offset: {}, threshold: 0, test: a.inViewport },
                                r = (0, n.default)(function () {
                                    e.history.forEach(function (t) {
                                        e[t].check();
                                    });
                                }, 100);
                            t.forEach(function (t) {
                                return addEventListener(t, r);
                            }),
                                window.MutationObserver &&
                                    addEventListener("DOMContentLoaded", function () {
                                        new MutationObserver(r).observe(document.body, { attributes: !0, childList: !0, subtree: !0 });
                                    });
                            var o = function (t) {
                                if ("string" == typeof t) {
                                    var r = [].slice.call(document.querySelectorAll(t));
                                    return e.history.indexOf(t) > -1 ? (e[t].elements = r) : ((e[t] = (0, s.default)(r, i)), e.history.push(t)), e[t];
                                }
                            };
                            return (
                                (o.offset = function (t) {
                                    if (void 0 === t) return i.offset;
                                    var e = function (t) {
                                        return "number" == typeof t;
                                    };
                                    return (
                                        ["top", "right", "bottom", "left"].forEach(
                                            e(t)
                                                ? function (e) {
                                                      return (i.offset[e] = t);
                                                  }
                                                : function (r) {
                                                      return e(t[r]) ? (i.offset[r] = t[r]) : null;
                                                  }
                                        ),
                                        i.offset
                                    );
                                }),
                                (o.threshold = function (t) {
                                    return "number" == typeof t && t >= 0 && t <= 1 ? (i.threshold = t) : i.threshold;
                                }),
                                (o.test = function (t) {
                                    return "function" == typeof t ? (i.test = t) : i.test;
                                }),
                                (o.is = function (t) {
                                    return i.test(t, i);
                                }),
                                o.offset(0),
                                o
                            );
                        }
                    })();
                },
                function (t, e) {
                    "use strict";
                    Object.defineProperty(e, "__esModule", { value: !0 });
                    var i = (function () {
                            function t(t, e) {
                                for (var i = 0; i < e.length; i++) {
                                    var r = e[i];
                                    (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
                                }
                            }
                            return function (e, i, r) {
                                return i && t(e.prototype, i), r && t(e, r), e;
                            };
                        })(),
                        r = (function () {
                            function t(e, i) {
                                (function (t, e) {
                                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                                })(this, t),
                                    (this.options = i),
                                    (this.elements = e),
                                    (this.current = []),
                                    (this.handlers = { enter: [], exit: [] }),
                                    (this.singles = { enter: [], exit: [] });
                            }
                            return (
                                i(t, [
                                    {
                                        key: "check",
                                        value: function () {
                                            var t = this;
                                            return (
                                                this.elements.forEach(function (e) {
                                                    var i = t.options.test(e, t.options),
                                                        r = t.current.indexOf(e),
                                                        n = r > -1,
                                                        s = !i && n;
                                                    i && !n && (t.current.push(e), t.emit("enter", e)), s && (t.current.splice(r, 1), t.emit("exit", e));
                                                }),
                                                this
                                            );
                                        },
                                    },
                                    {
                                        key: "on",
                                        value: function (t, e) {
                                            return this.handlers[t].push(e), this;
                                        },
                                    },
                                    {
                                        key: "once",
                                        value: function (t, e) {
                                            return this.singles[t].unshift(e), this;
                                        },
                                    },
                                    {
                                        key: "emit",
                                        value: function (t, e) {
                                            for (; this.singles[t].length; ) this.singles[t].pop()(e);
                                            for (var i = this.handlers[t].length; --i > -1; ) this.handlers[t][i](e);
                                            return this;
                                        },
                                    },
                                ]),
                                t
                            );
                        })();
                    e.default = function (t, e) {
                        return new r(t, e);
                    };
                },
                function (t, e) {
                    "use strict";
                    Object.defineProperty(e, "__esModule", { value: !0 }),
                        (e.inViewport = function (t, e) {
                            var i = t.getBoundingClientRect(),
                                r = i.top,
                                n = i.right,
                                s = i.bottom,
                                a = i.left,
                                o = i.width,
                                l = i.height,
                                u = s,
                                c = window.innerWidth - a,
                                h = window.innerHeight - r,
                                d = n,
                                p = e.threshold * o,
                                f = e.threshold * l;
                            return u > e.offset.top + f && c > e.offset.right + p && h > e.offset.bottom + f && d > e.offset.left + p;
                        });
                },
                function (t, e) {
                    (function (e) {
                        var i = "object" == typeof e && e && e.Object === Object && e;
                        t.exports = i;
                    }.call(
                        e,
                        (function () {
                            return this;
                        })()
                    ));
                },
                function (t, e, i) {
                    var r = i(5),
                        n = "object" == typeof self && self && self.Object === Object && self,
                        s = r || n || Function("return this")();
                    t.exports = s;
                },
                function (t, e, i) {
                    var r = i(1),
                        n = i(8),
                        s = i(10),
                        a = "Expected a function",
                        o = Math.max,
                        l = Math.min;
                    t.exports = function (t, e, i) {
                        function u(e) {
                            var i = f,
                                r = m;
                            return (f = m = void 0), (w = e), (v = t.apply(r, i));
                        }
                        function c(t) {
                            var i = t - _;
                            return void 0 === _ || i >= e || i < 0 || (b && t - w >= g);
                        }
                        function h() {
                            var t = n();
                            return c(t)
                                ? d(t)
                                : void (y = setTimeout(
                                      h,
                                      (function (t) {
                                          var i = e - (t - _);
                                          return b ? l(i, g - (t - w)) : i;
                                      })(t)
                                  ));
                        }
                        function d(t) {
                            return (y = void 0), x && f ? u(t) : ((f = m = void 0), v);
                        }
                        function p() {
                            var t = n(),
                                i = c(t);
                            if (((f = arguments), (m = this), (_ = t), i)) {
                                if (void 0 === y)
                                    return (function (t) {
                                        return (w = t), (y = setTimeout(h, e)), T ? u(t) : v;
                                    })(_);
                                if (b) return (y = setTimeout(h, e)), u(_);
                            }
                            return void 0 === y && (y = setTimeout(h, e)), v;
                        }
                        var f,
                            m,
                            g,
                            v,
                            y,
                            _,
                            w = 0,
                            T = !1,
                            b = !1,
                            x = !0;
                        if ("function" != typeof t) throw new TypeError(a);
                        return (
                            (e = s(e) || 0),
                            r(i) && ((T = !!i.leading), (b = "maxWait" in i), (g = b ? o(s(i.maxWait) || 0, e) : g), (x = "trailing" in i ? !!i.trailing : x)),
                            (p.cancel = function () {
                                void 0 !== y && clearTimeout(y), (w = 0), (f = _ = m = y = void 0);
                            }),
                            (p.flush = function () {
                                return void 0 === y ? v : d(n());
                            }),
                            p
                        );
                    };
                },
                function (t, e, i) {
                    var r = i(6);
                    t.exports = function () {
                        return r.Date.now();
                    };
                },
                function (t, e, i) {
                    var r = i(7),
                        n = i(1),
                        s = "Expected a function";
                    t.exports = function (t, e, i) {
                        var a = !0,
                            o = !0;
                        if ("function" != typeof t) throw new TypeError(s);
                        return n(i) && ((a = "leading" in i ? !!i.leading : a), (o = "trailing" in i ? !!i.trailing : o)), r(t, e, { leading: a, maxWait: e, trailing: o });
                    };
                },
                function (t, e) {
                    t.exports = function (t) {
                        return t;
                    };
                },
            ]);
        });
    },
    function (t, e, i) {
        "use strict";
        function r() {
            var t = window.scrollY,
                e = void 0;
            (e = t > l ? 0 : 1 - t / l), (o.style.opacity = e);
        }
        function n() {
            l = o.clientHeight + (o.offsetTop - window.scrollY);
        }
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.default = function () {
                (o = document.querySelector("[data-news-title]")) && (n(), r(), (0, a.bindWindowListener)("resize", u), (0, a.bindWindowListener)("scroll", c));
            });
        var s = i(6),
            a = i(3),
            o = void 0,
            l = void 0,
            u = (0, s.debounce)(function () {
                n();
            }, 10),
            c = (0, s.throttle)(r, 10);
    },
    function (t, e, i) {
        "use strict";
        function r() {
            if (l && !0 !== u) {
                u = !0;
                !(function (t) {
                    var e = new XMLHttpRequest();
                    o.classList.add("is-lazyloading"),
                        c.classList.add("is-loading"),
                        e.open("GET", t),
                        (e.responseType = "document"),
                        (e.onload = function () {
                            200 === e.status &&
                                (function (t) {
                                    for (var e = t.querySelector("[data-lazyload]"), i = e.children, r = [], h = t.querySelector(".paginate-next"), d = 0; d < i.length; d++) {
                                        var p = i[d].cloneNode(!0),
                                            f = null;
                                        o.appendChild(p), (f = "grid" === e.getAttribute("data-lazyload") ? p.querySelector("a") : p.querySelector("a.chip-item, div.chip-item a")), r.push(f);
                                    }
                                    o.classList.remove("is-lazyloading"),
                                        c.classList.remove("is-loading"),
                                        (0, n.bindHistoryLinks)(r),
                                        "chips" === e.getAttribute("data-lazyload") ? (0, s.default)(null, r) : "grid" === e.getAttribute("data-lazyload") && (console.log(r, e), (0, a.bindThumbListeners)(r, o));
                                    h && l ? l.setAttribute("href", h.getAttribute("href")) : l && (l.remove(), (l = null));
                                    u = !1;
                                })(this.responseXML);
                        }),
                        e.send();
                })(l.getAttribute("href"));
            }
        }
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.default = function () {
                (l = document.querySelector(".paginate-next")), (o = document.querySelector("[data-lazyload]")) && l && new IntersectionObserver(r, { threshold: [1] }).observe(l);
            });
        var n = i(21);
        i(55);
        var s = (function (t) {
                return t && t.__esModule ? t : { default: t };
            })(i(51)),
            a = i(56),
            o = void 0,
            l = void 0,
            u = !1,
            c = document.querySelector("#loader");
    },
    function (t, e, i) {
        var r, n, s;
        !(function (i, a) {
            "use strict";
            (n = []), void 0 === (s = "function" == typeof (r = a) ? r.apply(e, n) : r) || (t.exports = s);
        })(0, function () {
            "use strict";
            var t = /calc\(/g,
                e = /["']/g,
                i = window.navigator.userAgent,
                r = /MSIE [0-9]\./i.test(i);
            return (
                r || (r = !!navigator.userAgent.match(/MSIE 10\.|Trident.*rv[ :]*1[01]\.| Edge\/1\d\./)),
                {
                    required: function (t) {
                        return t.isMobileSafari || r;
                    },
                    initialize: function () {},
                    initializeEvents: function (t, e, i) {
                        t.force || (r && !t._listeningToResize && (window.addEventListener("resize", i, !0), (t._listeningToResize = !0)));
                    },
                    findDeclarations: function (i, r, n, s) {
                        null !== n &&
                            (function (i, r, n, s) {
                                "content" === n &&
                                    s.indexOf("viewport-units-buggyfill") > -1 &&
                                    s
                                        .replace(e, "")
                                        .split(";")
                                        .forEach(function (e) {
                                            var n = e.split(":");
                                            if (2 === n.length) {
                                                var s = n[0].trim();
                                                if ("viewport-units-buggyfill" !== s) {
                                                    var a = n[1].trim();
                                                    if ((i.push([r, s, a]), t.test(a))) {
                                                        var o = a.replace(t, "-webkit-calc(");
                                                        i.push([r, s, o]);
                                                    }
                                                }
                                            }
                                        });
                            })(i, r, n, s);
                    },
                    overwriteDeclaration: function (t, e, i) {
                        return r && "filter" === e && (i = i.replace(/px/g, "")), i;
                    },
                }
            );
        });
    },
    function (t, e, i) {
        var r, n, s;
        !(function (i, a) {
            "use strict";
            (n = []), void 0 === (s = "function" == typeof (r = a) ? r.apply(e, n) : r) || (t.exports = s);
        })(0, function () {
            "use strict";
            function t() {
                c &&
                    (e(),
                    setTimeout(function () {
                        (u.textContent = r()), u.parentNode.appendChild(u), window.dispatchEvent(new w("viewport-units-buggyfill-style"));
                    }, 1));
            }
            function e() {
                return (
                    (l = []),
                    f.call(document.styleSheets, function (t) {
                        var e = (function (t) {
                            try {
                                if (!t.cssRules) return;
                            } catch (t) {
                                if ("SecurityError" !== t.name) throw t;
                                return;
                            }
                            for (var e = [], i = 0; i < t.cssRules.length; i++) {
                                var r = t.cssRules[i];
                                e.push(r);
                            }
                            return e;
                        })(t);
                        e &&
                            "patched-viewport" !== t.ownerNode.id &&
                            "ignore" !== t.ownerNode.getAttribute("data-viewport-units-buggyfill") &&
                            ((t.media && t.media.mediaText && window.matchMedia && !window.matchMedia(t.media.mediaText).matches) || f.call(e, i));
                    }),
                    l
                );
            }
            function i(t) {
                if (7 === t.type) {
                    var e;
                    try {
                        e = t.cssText;
                    } catch (t) {
                        return;
                    }
                    return (d.lastIndex = 0), void (d.test(e) && !p.test(e) && (l.push([t, null, e]), a.hacks && a.hacks.findDeclarations(l, t, null, e)));
                }
                if (t.style)
                    f.call(t.style, function (e) {
                        var i = t.style.getPropertyValue(e);
                        t.style.getPropertyPriority(e) && (i += " !important"), (d.lastIndex = 0), d.test(i) && (l.push([t, e, i]), a.hacks && a.hacks.findDeclarations(l, t, e, i));
                    });
                else {
                    if (!t.cssRules) return;
                    f.call(t.cssRules, function (t) {
                        i(t);
                    });
                }
            }
            function r() {
                o = (function () {
                    var t = window.innerHeight,
                        e = window.innerWidth;
                    return { vh: t, vw: e, vmax: Math.max(e, t), vmin: Math.min(e, t) };
                })();
                var t,
                    e,
                    i = [],
                    r = [];
                return (
                    l.forEach(function (s) {
                        var o = function (t, e, i) {
                                var r,
                                    s = [];
                                (r = i.replace(d, n)), a.hacks && (r = a.hacks.overwriteDeclaration(t, e, r));
                                e && (s.push(t.selectorText), (r = e + ": " + r + ";"));
                                var o = t.parentRule;
                                for (; o; ) o.media ? s.unshift("@media " + o.media.mediaText) : o.conditionText && s.unshift("@supports " + o.conditionText), (o = o.parentRule);
                                return { selector: s, content: r };
                            }.apply(null, s),
                            l = o.selector.length ? o.selector.join(" {\n") + " {\n" : "",
                            u = new Array(o.selector.length + 1).join("\n}");
                        if (!l || l !== t) return r.length && (i.push(t + r.join("\n") + e), (r.length = 0)), void (l ? ((t = l), (e = u), r.push(o.content)) : (i.push(o.content), (t = null), (e = null)));
                        l && !t && ((t = l), (e = u)), r.push(o.content);
                    }),
                    r.length && i.push(t + r.join("\n") + e),
                    v && i.push("* { content: normal !important; }"),
                    i.join("\n\n")
                );
            }
            function n(t, e, i) {
                var r = o[i];
                return (parseFloat(e) / 100) * r + "px";
            }
            function s(t) {
                return t.slice(0, t.indexOf("/", t.indexOf("://") + 3));
            }
            var a,
                o,
                l,
                u,
                c = !1,
                h = window.navigator.userAgent,
                d = /([+-]?[0-9.]+)(vh|vw|vmin|vmax)/g,
                p = /(https?:)?\/\//,
                f = [].forEach,
                m = /MSIE [0-9]\./i.test(h),
                g = /MSIE [0-8]\./i.test(h),
                v = h.indexOf("Opera Mini") > -1,
                y =
                    /(iPhone|iPod|iPad).+AppleWebKit/i.test(h) &&
                    (function () {
                        var t = h.match(/OS (\d)/);
                        return t && t.length > 1 && parseInt(t[1]) < 10;
                    })(),
                _ = (function () {
                    if (!(h.indexOf(" Android ") > -1)) return !1;
                    if (!(h.indexOf("Version/") > -1)) return !1;
                    return parseFloat((h.match("Android ([0-9.]+)") || [])[1]) <= 4.4;
                })();
            m || (m = !!navigator.userAgent.match(/MSIE 10\.|Trident.*rv[ :]*1[01]\.| Edge\/1\d\./));
            try {
                new w("test");
            } catch (t) {
                var w = function (t, e) {
                    var i;
                    return (e = e || { bubbles: !1, cancelable: !1, detail: void 0 }), (i = document.createEvent("CustomEvent")).initCustomEvent(t, e.bubbles, e.cancelable, e.detail), i;
                };
                (w.prototype = window.Event.prototype), (window.CustomEvent = w);
            }
            return {
                version: "0.6.1",
                findProperties: e,
                getCss: r,
                init: function (e) {
                    if (!c) {
                        if (
                            (!0 === e && (e = { force: !0 }),
                            (a = e || {}),
                            (a.isMobileSafari = y),
                            (a.isBadStockAndroid = _),
                            !a.ignoreVmax || a.force || g || (m = !1),
                            g || (!a.force && !y && !m && !_ && !v && (!a.hacks || !a.hacks.required(a))))
                        )
                            return window.console && g && console.info("viewport-units-buggyfill requires a proper CSSOM and basic viewport unit support, which are not available in IE8 and below"), { init: function () {} };
                        window.dispatchEvent(new w("viewport-units-buggyfill-init")),
                            a.hacks && a.hacks.initialize(a),
                            (c = !0),
                            ((u = document.createElement("style")).id = "patched-viewport"),
                            document[a.appendToBody ? "body" : "head"].appendChild(u),
                            (function (t) {
                                var e = 0,
                                    i = function () {
                                        --e || t();
                                    };
                                f.call(document.styleSheets, function (t) {
                                    t.href &&
                                        s(t.href) !== s(location.href) &&
                                        "ignore" !== t.ownerNode.getAttribute("data-viewport-units-buggyfill") &&
                                        (e++,
                                        (function (t, e) {
                                            !(function (t, e, i) {
                                                var r = new XMLHttpRequest();
                                                if ("withCredentials" in r) r.open("GET", t, !0);
                                                else {
                                                    if ("undefined" == typeof XDomainRequest) throw new Error("cross-domain XHR not supported");
                                                    (r = new XDomainRequest()).open("GET", t);
                                                }
                                                (r.onload = e), (r.onerror = i), r.send();
                                            })(
                                                t.href,
                                                function () {
                                                    var i = document.createElement("style");
                                                    (i.media = t.media), i.setAttribute("data-href", t.href), (i.textContent = this.responseText), t.parentNode.replaceChild(i, t), e();
                                                },
                                                e
                                            );
                                        })(t.ownerNode, i));
                                }),
                                    e || t();
                            })(function () {
                                var e = (function (t, e) {
                                    var i;
                                    return function () {
                                        var r = this,
                                            n = arguments;
                                        clearTimeout(i),
                                            (i = setTimeout(function () {
                                                t.apply(r, n);
                                            }, e));
                                    };
                                })(t, a.refreshDebounceWait || 100);
                                window.addEventListener("orientationchange", e, !0),
                                    window.addEventListener("pageshow", e, !0),
                                    (a.force ||
                                        m ||
                                        (function () {
                                            try {
                                                return window.self !== window.top;
                                            } catch (t) {
                                                return !0;
                                            }
                                        })()) &&
                                        (window.addEventListener("resize", e, !0), (a._listeningToResize = !0)),
                                    a.hacks && a.hacks.initializeEvents(a, t, e),
                                    t();
                            });
                    }
                },
                refresh: t,
            };
        });
    },
]);
