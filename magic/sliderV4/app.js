!function(t) {
    function e(r) {
        if (i[r])
            return i[r].exports;
        var n = i[r] = {
            exports: {},
            id: r,
            loaded: !1
        };
        return t[r].call(n.exports, n, n.exports, e),
        n.loaded = !0,
        n.exports
    }
    var i = {};
    e.m = t,
    e.c = i,
    e.p = "",
    e(0)
}([function(t, e, i) {
    "use strict";
    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    i(1),
    i(2);
    var n = i(3)
      , s = r(i(23))
      , a = r(i(21))
      , o = i(62);
    i(63).init({
        hacks: o
    }),
    (0,
    n.controller)()
}
, function(t, e) {
    !function(e, i) {
        var r = function(t, e, i) {
            "use strict";
            var r, n;
            if (function() {
                var e, i = {
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
                    hFac: .8,
                    loadMode: 2,
                    loadHidden: !0,
                    ricTimeout: 0,
                    throttleDelay: 125
                };
                n = t.lazySizesConfig || t.lazysizesConfig || {};
                for (e in i)
                    e in n || (n[e] = i[e])
            }(),
            !e || !e.getElementsByClassName)
                return {
                    init: function() {},
                    cfg: n,
                    noSupport: !0
                };
            var s = e.documentElement
              , a = t.HTMLPictureElement
              , o = "addEventListener"
              , l = "getAttribute"
              , u = t[o].bind(t)
              , c = t.setTimeout
              , h = t.requestAnimationFrame || c
              , d = t.requestIdleCallback
              , p = /^picture$/i
              , f = ["load", "error", "lazyincluded", "_lazyloaded"]
              , m = {}
              , g = Array.prototype.forEach
              , v = function(t, e) {
                return m[e] || (m[e] = new RegExp("(\\s|^)" + e + "(\\s|$)")),
                m[e].test(t[l]("class") || "") && m[e]
            }
              , y = function(t, e) {
                v(t, e) || t.setAttribute("class", (t[l]("class") || "").trim() + " " + e)
            }
              , _ = function(t, e) {
                var i;
                (i = v(t, e)) && t.setAttribute("class", (t[l]("class") || "").replace(i, " "))
            }
              , w = function(t, e, i) {
                var r = i ? o : "removeEventListener";
                i && w(t, e),
                f.forEach(function(i) {
                    t[r](i, e)
                })
            }
              , T = function(t, i, n, s, a) {
                var o = e.createEvent("Event");
                return n || (n = {}),
                n.instance = r,
                o.initEvent(i, !s, !a),
                o.detail = n,
                t.dispatchEvent(o),
                o
            }
              , b = function(e, i) {
                var r;
                !a && (r = t.picturefill || n.pf) ? (i && i.src && !e[l]("srcset") && e.setAttribute("srcset", i.src),
                r({
                    reevaluate: !0,
                    elements: [e]
                })) : i && i.src && (e.src = i.src)
            }
              , x = function(t, e) {
                return (getComputedStyle(t, null) || {})[e]
            }
              , S = function(t, e, i) {
                for (i = i || t.offsetWidth; i < n.minSize && e && !t._lazysizesWidth; )
                    i = e.offsetWidth,
                    e = e.parentNode;
                return i
            }
              , C = function() {
                var t, i, r = [], n = [], s = r, a = function() {
                    var e = s;
                    for (s = r.length ? n : r,
                    t = !0,
                    i = !1; e.length; )
                        e.shift()();
                    t = !1
                }, o = function(r, n) {
                    t && !n ? r.apply(this, arguments) : (s.push(r),
                    i || (i = !0,
                    (e.hidden ? c : h)(a)))
                };
                return o._lsFlush = a,
                o
            }()
              , P = function(t, e) {
                return e ? function() {
                    C(t)
                }
                : function() {
                    var e = this
                      , i = arguments;
                    C(function() {
                        t.apply(e, i)
                    })
                }
            }
              , E = function(t) {
                var e, r, n = function() {
                    e = null,
                    t()
                }, s = function() {
                    var t = i.now() - r;
                    t < 99 ? c(s, 99 - t) : (d || n)(n)
                };
                return function() {
                    r = i.now(),
                    e || (e = c(s, 99))
                }
            }
              , k = function() {
                var a, f, m, S, k, M, L, I, O, z, R, D, N = /^img$/i, B = /^iframe$/i, F = "onscroll"in t && !/(gle|ing)bot/.test(navigator.userAgent), H = 0, j = 0, U = -1, X = function(t) {
                    j--,
                    (!t || j < 0 || !t.target) && (j = 0)
                }, q = function(t) {
                    return null == D && (D = "hidden" == x(e.body, "visibility")),
                    D || !("hidden" == x(t.parentNode, "visibility") && "hidden" == x(t, "visibility"))
                }, W = function(t, i) {
                    var r, n = t, a = q(t);
                    for (I -= i,
                    R += i,
                    O -= i,
                    z += i; a && (n = n.offsetParent) && n != e.body && n != s; )
                        (a = (x(n, "opacity") || 1) > 0) && "visible" != x(n, "overflow") && (r = n.getBoundingClientRect(),
                        a = z > r.left && O < r.right && R > r.top - 1 && I < r.bottom + 1);
                    return a
                }, Y = function() {
                    var t, i, o, u, c, h, d, p, m, g, v, y, _ = r.elements;
                    if ((S = n.loadMode) && j < 8 && (t = _.length)) {
                        for (i = 0,
                        U++; i < t; i++)
                            if (_[i] && !_[i]._lazyRace)
                                if (!F || r.prematureUnveil && r.prematureUnveil(_[i]))
                                    J(_[i]);
                                else if ((p = _[i][l]("data-expand")) && (h = 1 * p) || (h = H),
                                g || (g = !n.expand || n.expand < 1 ? s.clientHeight > 500 && s.clientWidth > 500 ? 500 : 370 : n.expand,
                                r._defEx = g,
                                v = g * n.expFactor,
                                y = n.hFac,
                                D = null,
                                H < v && j < 1 && U > 2 && S > 2 && !e.hidden ? (H = v,
                                U = 0) : H = S > 1 && U > 1 && j < 6 ? g : 0),
                                m !== h && (M = innerWidth + h * y,
                                L = innerHeight + h,
                                d = -1 * h,
                                m = h),
                                o = _[i].getBoundingClientRect(),
                                (R = o.bottom) >= d && (I = o.top) <= L && (z = o.right) >= d * y && (O = o.left) <= M && (R || z || O || I) && (n.loadHidden || q(_[i])) && (f && j < 3 && !p && (S < 3 || U < 4) || W(_[i], h))) {
                                    if (J(_[i]),
                                    c = !0,
                                    j > 9)
                                        break
                                } else
                                    !c && f && !u && j < 4 && U < 4 && S > 2 && (a[0] || n.preloadAfterLoad) && (a[0] || !p && (R || z || O || I || "auto" != _[i][l](n.sizesAttr))) && (u = a[0] || _[i]);
                        u && !c && J(u)
                    }
                }, V = function(t) {
                    var e, r = 0, s = n.throttleDelay, a = n.ricTimeout, o = function() {
                        e = !1,
                        r = i.now(),
                        t()
                    }, l = d && a > 49 ? function() {
                        d(o, {
                            timeout: a
                        }),
                        a !== n.ricTimeout && (a = n.ricTimeout)
                    }
                    : P(function() {
                        c(o)
                    }, !0);
                    return function(t) {
                        var n;
                        (t = !0 === t) && (a = 33),
                        e || (e = !0,
                        (n = s - (i.now() - r)) < 0 && (n = 0),
                        t || n < 9 ? l() : c(l, n))
                    }
                }(Y), G = function(t) {
                    var e = t.target;
                    e._lazyCache ? delete e._lazyCache : (X(t),
                    y(e, n.loadedClass),
                    _(e, n.loadingClass),
                    w(e, $),
                    T(e, "lazyloaded"))
                }, Q = P(G), $ = function(t) {
                    Q({
                        target: t.target
                    })
                }, K = function(t) {
                    var e, i = t[l](n.srcsetAttr);
                    (e = n.customMedia[t[l]("data-media") || t[l]("media")]) && t.setAttribute("media", e),
                    i && t.setAttribute("srcset", i)
                }, Z = P(function(t, e, i, r, s) {
                    var a, o, u, h, d, f;
                    (d = T(t, "lazybeforeunveil", e)).defaultPrevented || (r && (i ? y(t, n.autosizesClass) : t.setAttribute("sizes", r)),
                    o = t[l](n.srcsetAttr),
                    a = t[l](n.srcAttr),
                    s && (u = t.parentNode,
                    h = u && p.test(u.nodeName || "")),
                    f = e.firesLoad || "src"in t && (o || a || h),
                    d = {
                        target: t
                    },
                    y(t, n.loadingClass),
                    f && (clearTimeout(m),
                    m = c(X, 2500),
                    w(t, $, !0)),
                    h && g.call(u.getElementsByTagName("source"), K),
                    o ? t.setAttribute("srcset", o) : a && !h && (B.test(t.nodeName) ? function(t, e) {
                        var i = t.getAttribute("data-load-mode") || n.iframeLoadMode;
                        0 == i ? t.contentWindow.location.replace(e) : 1 == i && (t.src = e)
                    }(t, a) : t.src = a),
                    s && (o || h) && b(t, {
                        src: a
                    })),
                    t._lazyRace && delete t._lazyRace,
                    _(t, n.lazyClass),
                    C(function() {
                        var e = t.complete && t.naturalWidth > 1;
                        f && !e || (e && y(t, n.fastLoadedClass),
                        G(d),
                        t._lazyCache = !0,
                        c(function() {
                            "_lazyCache"in t && delete t._lazyCache
                        }, 9)),
                        "lazy" == t.loading && j--
                    }, !0)
                }), J = function(t) {
                    if (!t._lazyRace) {
                        var e, i = N.test(t.nodeName), r = i && (t[l](n.sizesAttr) || t[l]("sizes")), s = "auto" == r;
                        (!s && f || !i || !t[l]("src") && !t.srcset || t.complete || v(t, n.errorClass) || !v(t, n.lazyClass)) && (e = T(t, "lazyunveilread").detail,
                        s && A.updateElem(t, !0, t.offsetWidth),
                        t._lazyRace = !0,
                        j++,
                        Z(t, e, s, r, i))
                    }
                }, tt = E(function() {
                    n.loadMode = 3,
                    V()
                }), et = function() {
                    3 == n.loadMode && (n.loadMode = 2),
                    tt()
                }, it = function() {
                    f || (i.now() - k < 999 ? c(it, 999) : (f = !0,
                    n.loadMode = 3,
                    V(),
                    u("scroll", et, !0)))
                };
                return {
                    _: function() {
                        k = i.now(),
                        r.elements = e.getElementsByClassName(n.lazyClass),
                        a = e.getElementsByClassName(n.lazyClass + " " + n.preloadClass),
                        u("scroll", V, !0),
                        u("resize", V, !0),
                        u("pageshow", function(t) {
                            if (t.persisted) {
                                var i = e.querySelectorAll("." + n.loadingClass);
                                i.length && i.forEach && h(function() {
                                    i.forEach(function(t) {
                                        t.complete && J(t)
                                    })
                                })
                            }
                        }),
                        t.MutationObserver ? new MutationObserver(V).observe(s, {
                            childList: !0,
                            subtree: !0,
                            attributes: !0
                        }) : (s[o]("DOMNodeInserted", V, !0),
                        s[o]("DOMAttrModified", V, !0),
                        setInterval(V, 999)),
                        u("hashchange", V, !0),
                        ["focus", "mouseover", "click", "load", "transitionend", "animationend"].forEach(function(t) {
                            e[o](t, V, !0)
                        }),
                        /d$|^c/.test(e.readyState) ? it() : (u("load", it),
                        e[o]("DOMContentLoaded", V),
                        c(it, 2e4)),
                        r.elements.length ? (Y(),
                        C._lsFlush()) : V()
                    },
                    checkElems: V,
                    unveil: J,
                    _aLSL: et
                }
            }()
              , A = function() {
                var t, i = P(function(t, e, i, r) {
                    var n, s, a;
                    if (t._lazysizesWidth = r,
                    r += "px",
                    t.setAttribute("sizes", r),
                    p.test(e.nodeName || ""))
                        for (n = e.getElementsByTagName("source"),
                        s = 0,
                        a = n.length; s < a; s++)
                            n[s].setAttribute("sizes", r);
                    i.detail.dataAttr || b(t, i.detail)
                }), r = function(t, e, r) {
                    var n, s = t.parentNode;
                    s && (r = S(t, s, r),
                    (n = T(t, "lazybeforesizes", {
                        width: r,
                        dataAttr: !!e
                    })).defaultPrevented || (r = n.detail.width) && r !== t._lazysizesWidth && i(t, s, n, r))
                }, s = E(function() {
                    var e, i = t.length;
                    if (i)
                        for (e = 0; e < i; e++)
                            r(t[e])
                });
                return {
                    _: function() {
                        t = e.getElementsByClassName(n.autosizesClass),
                        u("resize", s)
                    },
                    checkElems: s,
                    updateElem: r
                }
            }()
              , M = function() {
                !M.i && e.getElementsByClassName && (M.i = !0,
                A._(),
                k._())
            };
            return c(function() {
                n.init && M()
            }),
            r = {
                cfg: n,
                autoSizer: A,
                loader: k,
                init: M,
                uP: b,
                aC: y,
                rC: _,
                hC: v,
                fire: T,
                gW: S,
                rAF: C
            }
        }(e, e.document, Date);
        e.lazySizes = r,
        "object" == typeof t && t.exports && (t.exports = r)
    }("undefined" != typeof window ? window : {})
}
, function(t, e, i) {
    var r, n, s;
    !function(a, o) {
        if (a) {
            o = o.bind(null, a, a.document),
            "object" == typeof t && t.exports ? o(i(1)) : (n = [i(1)],
            void 0 === (s = "function" == typeof (r = o) ? r.apply(e, n) : r) || (t.exports = s))
        }
    }("undefined" != typeof window ? window : 0, function(t, e, i) {
        "use strict";
        if (t.addEventListener) {
            var r = /\s+(\d+)(w|h)\s+(\d+)(w|h)/
              , n = /parent-fit["']*\s*:\s*["']*(contain|cover|width)/
              , s = /parent-container["']*\s*:\s*["']*(.+?)(?=(\s|$|,|'|"|;))/
              , a = /^picture$/i
              , o = i.cfg
              , l = {
                getParent: function(e, i) {
                    var r = e
                      , n = e.parentNode;
                    return i && "prev" != i || !n || !a.test(n.nodeName || "") || (n = n.parentNode),
                    "self" != i && (r = "prev" == i ? e.previousElementSibling : i && (n.closest || t.jQuery) ? (n.closest ? n.closest(i) : jQuery(n).closest(i)[0]) || n : n),
                    r
                },
                getFit: function(t) {
                    var e, i, r = function(t) {
                        return getComputedStyle(t, null) || {}
                    }(t), a = r.content || r.fontFamily, o = {
                        fit: t._lazysizesParentFit || t.getAttribute("data-parent-fit")
                    };
                    return !o.fit && a && (e = a.match(n)) && (o.fit = e[1]),
                    o.fit ? (!(i = t._lazysizesParentContainer || t.getAttribute("data-parent-container")) && a && (e = a.match(s)) && (i = e[1]),
                    o.parent = l.getParent(t, i)) : o.fit = r.objectFit,
                    o
                },
                getImageRatio: function(e) {
                    var i, n, s, l, u, c, h, d = e.parentNode, p = d && a.test(d.nodeName || "") ? d.querySelectorAll("source, img") : [e];
                    for (i = 0; i < p.length; i++)
                        if (e = p[i],
                        n = e.getAttribute(o.srcsetAttr) || e.getAttribute("srcset") || e.getAttribute("data-pfsrcset") || e.getAttribute("data-risrcset") || "",
                        s = e._lsMedia || e.getAttribute("media"),
                        s = o.customMedia[e.getAttribute("data-media") || s] || s,
                        n && (!s || (t.matchMedia && matchMedia(s) || {}).matches)) {
                            (l = parseFloat(e.getAttribute("data-aspectratio"))) || ((u = n.match(r)) ? "w" == u[2] ? (c = u[1],
                            h = u[3]) : (c = u[3],
                            h = u[1]) : (c = e.getAttribute("width"),
                            h = e.getAttribute("height")),
                            l = c / h);
                            break
                        }
                    return l
                },
                calculateSize: function(t, e) {
                    var i, r, n, s = this.getFit(t), a = s.fit, o = s.parent;
                    return "width" == a || ("contain" == a || "cover" == a) && (r = this.getImageRatio(t)) ? (o ? e = o.clientWidth : o = t,
                    n = e,
                    "width" == a ? n = e : (i = e / o.clientHeight) && ("cover" == a && i < r || "contain" == a && i > r) && (n = e * (r / i)),
                    n) : e
                }
            };
            i.parentFit = l,
            e.addEventListener("lazybeforesizes", function(t) {
                if (!t.defaultPrevented && t.detail.instance == i) {
                    var e = t.target;
                    t.detail.width = l.calculateSize(e, t.detail.width)
                }
            })
        }
    })
}
, function(t, e, i) {
    "use strict";
    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.controller = function() {
        (0,
        s.default)(),
        (0,
        n.init)()
        
    }
    ,
    e.bindWindowListener = function(t, e) {
        t && e && (window.addEventListener(t, e),
        p.push({
            method: t,
            action: e
        }))
    }
    ,
    e.unbindWindowListener = function(t, e) {
        t && e && (window.removeEventListener(t, e),
        p.find(function(i, r) {
            i.action === e && i.method === t && p.splice(r, 1)
        }))
    }
    ,
    e.unbindWindowListeners = function() {
        if (p.length) {
            for (var t = p.length - 1; t >= 0; t--)
                window.removeEventListener(p[t].method, p[t].action);
            p = []
        }
    }
    ;
    var n = i(4)
      , s = r(i(12))
      , a = i(56)
      , o = r(i(57))
      , l = r(i(58))
      , u = r(i(60))
      , c = r(i(61))
      , h = r(i(51))
      , d = i(54)
      , p = []
}
, function(t, e, i) {
    "use strict";
    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    function n(t) {
        var e = t.parentElement
          , i = getComputedStyle(e)
          , r = e.clientHeight - parseFloat(i.paddingTop) - parseFloat(i.paddingBottom)
          , n = e.clientWidth - parseFloat(i.paddingLeft) - parseFloat(i.paddingRight)
          , s = (t.clientHeight,
        t.querySelector("iframe"))
          , a = s.getAttribute("height")
          , o = s.getAttribute("width")
          , l = o / a
          , u = a / o;
        n * u > r ? (t.classList.remove("responsive-width"),
        t.style.height = r + "px",
        t.style.width = Math.round(r * l) + "px",
        t.style.paddingBottom = "0px") : (t.classList.add("responsive-width"),
        t.style.height = "height",
        t.style.width = "width",
        t.style.paddingBottom = 100 * u + "%"),
        t.classList.add("is-processed")
    }
    function s() {
        y = window.innerWidth / 2;
        for (var t = m.length - 1; t >= 0; t--)
            n(m[t])
    }
    function a() {
        for (var t = document.querySelectorAll(".responsive-img"), e = (document.querySelector(".slideshow__el").clientHeight,
        t.length - 1); e >= 0; e--) {
            var i = t[e]
              , r = i.clientHeight
              , n = i.clientWidth
              , s = i.getAttribute("data-orientation")
              , a = i.getAttribute("data-ratio");
            "landscape" === s ? i.style.height = Math.round(n / a) + "px" : i.style.width = Math.round(r * a) + "px"
        }
        void 0 !== p && p.update(!0)
    }
    function o(t) {
        _ > 1 && (t.clientX < y ? f.setAttribute("data-cursor", "prev") : f.setAttribute("data-cursor", "next"))
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.init = void 0;
    var l = r(i(5))
      , u = i(6)
      , c = r(i(7))
      , h = r(i(11))
      , d = i(3)
      , p = void 0
      , f = void 0
      , m = []
      , g = []
      , v = null
      , y = window.innerWidth / 2
      , _ = 0
      , w = (0,
    u.throttle)(function() {
        a(),
        s()
    }, 100);
    e.init = function() {
        (f = document.querySelector(".slideshow__el")) && (m = document.querySelectorAll(".embed-holder"),
        a(),
        function(t) {
            function e(t) {
                var e = t.querySelector("iframe");
                if (null === v || Modernizr.touchevents || v.pause(),
                v = null,
                e && !Modernizr.touchevents) {
                    var i = h.default.parse(e.src);
                    i && "vimeo" === i.provider && (v = new c.default(e)).play()
                }
            }
            function i(t) {
                var e = t.loopedSlides ? 2 * t.loopedSlides : 0;
                s.innerHTML = t.slides.length > 1 ? t.realIndex + 1 + "/" + (t.slides.length - e) : ""
                s2.innerHTML = t.slides.length > 1 ? t.realIndex + 1 + "/" + (t.slides.length - e) : ""
            }
            var r = t.getAttribute("data-type")
              , n = document.querySelector("#img-caption")
              , n2 = document.querySelector("#img-caption-mobile")
              , s = document.querySelector("#slidecounter")
              , s2 = document.querySelector("#slidecounter2")
              , a = document.querySelectorAll("[data-project]")
              , o = {
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
                roundLengths: !0
            }
              , u = {
                effect: "fade",
                fade: {
                    crossFade: !0
                },
                loop: _ > 1,
                hashnav: !0,
                replaceState: !0,
                slidesPerView: 1,
                keyboardControl: !0,
                lazyLoading: !1,
                speed: 0,
                roundLengths: !0
            }
              , d = {
                nextButton: "[data-slideshow-next]",
                prevButton: "[data-slideshow-prev]",
                onTap: function(t, e) {
                    e.clientX < y ? t.slidePrev() : t.slideNext()
                },
                onProgress: function(t, e) {
                    
                    t.activeIndex && e > 0 ? n.innerHTML = t.slides[t.activeIndex].querySelector(".caption").innerHTML : (e <= 0 || -1 == e) && (n.innerHTML = t.slides[0].querySelector(".caption").innerHTML),
                    i(t)
                },
                onSlideChangeStart: function(r) {
                    var s = r.slides[r.activeIndex];
                    n.innerHTML = s.querySelector(".caption").innerHTML,
                    n2.innerHTML = s.querySelector(".caption2").innerHTML,
                    i(r),
                    e(s),
                    t.setAttribute("data-progress", r.progress)
                },
                onInit: function(r) {
                    var s = r.slides[r.activeIndex];
                    n.innerHTML = s.querySelector(".caption").innerHTML || "",
                    i(r),
                    e(s),
                    t.setAttribute("data-progress", r.progress)
                },
                onReachBeginning: function(t) {
                    "scroll" === r && (t.slidePrev(!1, 0),
                    t.slideNext(!1, 0))
                },
                onReachEnd: function(t) {
                    "scroll" === r && (t.slideNext(!1, 0),
                    t.slidePrev(!1, 0))
                }
            };
            if ("scroll" === r) {
                var f = Object.assign({}, o, d);
                p = new l.default(t,f)
            } else if ("slideshow" === r) {
                var m = Object.assign({}, u, d);
                p = new l.default(t,m)
            }
            for (var w = 0; w < a.length; w++) {
                var T = a[w].getAttribute("data-project");
                -1 === g.indexOf(T) && g.push(T)
            }
        }(f),
        f.addEventListener("mousemove", (0,
        u.throttle)(o, 50)),
        (0,
        d.bindWindowListener)("resize", w),
        function() {
            var t = document.querySelector(".control-bar__title")
              , e = document.querySelectorAll(".caption")
              , i = []
              , r = document.createElement("div");
            r.className = "control-bar__title-clone";
            for (var n = e.length - 1; n >= 0; n--)
                i[n] = e[n].innerHTML;
            r.innerHTML = function(t) {
                for (var e = 0, i = "", r = 0; r < t.length; r++)
                    t[r].length > e && "string" == typeof t[r] && (e = t[r].length,
                    i = t[r]);
                return i
            }(i)
          //  t.appendChild(r),
          //  t.classList.add("has-clone")
        }(),
        m && s())
    }
}
, function(t, e, i) {
    !function() {
        "use strict";
        var t, e = function(r, n) {
            function s(t) {
                return Math.floor(t)
            }
            function a() {
                var t = w.params.autoplay
                  , e = w.slides.eq(w.activeIndex);
                e.attr("data-swiper-autoplay") && (t = e.attr("data-swiper-autoplay") || w.params.autoplay),
                w.autoplayTimeoutId = setTimeout(function() {
                    w.params.loop ? (w.fixLoop(),
                    w._slideNext(),
                    w.emit("onAutoplay", w)) : w.isEnd ? n.autoplayStopOnLast ? w.stopAutoplay() : (w._slideTo(0),
                    w.emit("onAutoplay", w)) : (w._slideNext(),
                    w.emit("onAutoplay", w))
                }, t)
            }
            function o(e, i) {
                var r = t(e.target);
                if (!r.is(i))
                    if ("string" == typeof i)
                        r = r.parents(i);
                    else if (i.nodeType) {
                        var n;
                        return r.parents().each(function(t, e) {
                            e === i && (n = i)
                        }),
                        n ? i : void 0
                    }
                if (0 !== r.length)
                    return r[0]
            }
            function l(t, e) {
                e = e || {};
                var i = new (window.MutationObserver || window.WebkitMutationObserver)(function(t) {
                    t.forEach(function(t) {
                        w.onResize(!0),
                        w.emit("onObserverUpdate", w, t)
                    })
                }
                );
                i.observe(t, {
                    attributes: void 0 === e.attributes || e.attributes,
                    childList: void 0 === e.childList || e.childList,
                    characterData: void 0 === e.characterData || e.characterData
                }),
                w.observers.push(i)
            }
            function u(t) {
                t.originalEvent && (t = t.originalEvent);
                var e = t.keyCode || t.charCode;
                if (!w.params.allowSwipeToNext && (w.isHorizontal() && 39 === e || !w.isHorizontal() && 40 === e))
                    return !1;
                if (!w.params.allowSwipeToPrev && (w.isHorizontal() && 37 === e || !w.isHorizontal() && 38 === e))
                    return !1;
                if (!(t.shiftKey || t.altKey || t.ctrlKey || t.metaKey || document.activeElement && document.activeElement.nodeName && ("input" === document.activeElement.nodeName.toLowerCase() || "textarea" === document.activeElement.nodeName.toLowerCase()))) {
                    if (37 === e || 39 === e || 38 === e || 40 === e) {
                        var i = !1;
                        if (w.container.parents("." + w.params.slideClass).length > 0 && 0 === w.container.parents("." + w.params.slideActiveClass).length)
                            return;
                        var r = {
                            left: window.pageXOffset,
                            top: window.pageYOffset
                        }
                          , n = window.innerWidth
                          , s = window.innerHeight
                          , a = w.container.offset();
                        w.rtl && (a.left = a.left - w.container[0].scrollLeft);
                        for (var o = [[a.left, a.top], [a.left + w.width, a.top], [a.left, a.top + w.height], [a.left + w.width, a.top + w.height]], l = 0; l < o.length; l++) {
                            var u = o[l];
                            u[0] >= r.left && u[0] <= r.left + n && u[1] >= r.top && u[1] <= r.top + s && (i = !0)
                        }
                        if (!i)
                            return
                    }
                    w.isHorizontal() ? (37 !== e && 39 !== e || (t.preventDefault ? t.preventDefault() : t.returnValue = !1),
                    (39 === e && !w.rtl || 37 === e && w.rtl) && w.slideNext(),
                    (37 === e && !w.rtl || 39 === e && w.rtl) && w.slidePrev()) : (38 !== e && 40 !== e || (t.preventDefault ? t.preventDefault() : t.returnValue = !1),
                    40 === e && w.slideNext(),
                    38 === e && w.slidePrev()),
                    w.emit("onKeyPress", w, e)
                }
            }
            function c(t) {
                t.originalEvent && (t = t.originalEvent);
                var e = 0
                  , i = w.rtl ? -1 : 1
                  , r = function(t) {
                    var e = 0
                      , i = 0
                      , r = 0
                      , n = 0;
                    return "detail"in t && (i = t.detail),
                    "wheelDelta"in t && (i = -t.wheelDelta / 120),
                    "wheelDeltaY"in t && (i = -t.wheelDeltaY / 120),
                    "wheelDeltaX"in t && (e = -t.wheelDeltaX / 120),
                    "axis"in t && t.axis === t.HORIZONTAL_AXIS && (e = i,
                    i = 0),
                    r = 10 * e,
                    n = 10 * i,
                    "deltaY"in t && (n = t.deltaY),
                    "deltaX"in t && (r = t.deltaX),
                    (r || n) && t.deltaMode && (1 === t.deltaMode ? (r *= 40,
                    n *= 40) : (r *= 800,
                    n *= 800)),
                    r && !e && (e = r < 1 ? -1 : 1),
                    n && !i && (i = n < 1 ? -1 : 1),
                    {
                        spinX: e,
                        spinY: i,
                        pixelX: r,
                        pixelY: n
                    }
                }(t);
                if (w.params.mousewheelForceToAxis)
                    if (w.isHorizontal()) {
                        if (!(Math.abs(r.pixelX) > Math.abs(r.pixelY)))
                            return;
                        e = r.pixelX * i
                    } else {
                        if (!(Math.abs(r.pixelY) > Math.abs(r.pixelX)))
                            return;
                        e = r.pixelY
                    }
                else
                    e = Math.abs(r.pixelX) > Math.abs(r.pixelY) ? -r.pixelX * i : -r.pixelY;
                if (0 !== e) {
                    if (w.params.mousewheelInvert && (e = -e),
                    w.params.freeMode) {
                        var n = w.getWrapperTranslate() + e * w.params.mousewheelSensitivity
                          , s = w.isBeginning
                          , a = w.isEnd;
                        if (n >= w.minTranslate() && (n = w.minTranslate()),
                        n <= w.maxTranslate() && (n = w.maxTranslate()),
                        w.setWrapperTransition(0),
                        w.setWrapperTranslate(n),
                        w.updateProgress(),
                        w.updateActiveIndex(),
                        (!s && w.isBeginning || !a && w.isEnd) && w.updateClasses(),
                        w.params.freeModeSticky ? (clearTimeout(w.mousewheel.timeout),
                        w.mousewheel.timeout = setTimeout(function() {
                            w.slideReset()
                        }, 300)) : w.params.lazyLoading && w.lazy && w.lazy.load(),
                        w.emit("onScroll", w, t),
                        w.params.autoplay && w.params.autoplayDisableOnInteraction && w.stopAutoplay(),
                        0 === n || n === w.maxTranslate())
                            return
                    } else {
                        if ((new window.Date).getTime() - w.mousewheel.lastScrollTime > 60)
                            if (e < 0)
                                if (w.isEnd && !w.params.loop || w.animating) {
                                    if (w.params.mousewheelReleaseOnEdges)
                                        return !0
                                } else
                                    w.slideNext(),
                                    w.emit("onScroll", w, t);
                            else if (w.isBeginning && !w.params.loop || w.animating) {
                                if (w.params.mousewheelReleaseOnEdges)
                                    return !0
                            } else
                                w.slidePrev(),
                                w.emit("onScroll", w, t);
                        w.mousewheel.lastScrollTime = (new window.Date).getTime()
                    }
                    return t.preventDefault ? t.preventDefault() : t.returnValue = !1,
                    !1
                }
            }
            function h(e, i) {
                e = t(e);
                var r, n, s, a = w.rtl ? -1 : 1;
                r = e.attr("data-swiper-parallax") || "0",
                n = e.attr("data-swiper-parallax-x"),
                s = e.attr("data-swiper-parallax-y"),
                n || s ? (n = n || "0",
                s = s || "0") : w.isHorizontal() ? (n = r,
                s = "0") : (s = r,
                n = "0"),
                n = n.indexOf("%") >= 0 ? parseInt(n, 10) * i * a + "%" : n * i * a + "px",
                s = s.indexOf("%") >= 0 ? parseInt(s, 10) * i + "%" : s * i + "px",
                e.transform("translate3d(" + n + ", " + s + ",0px)")
            }
            function d(t) {
                return 0 !== t.indexOf("on") && (t = t[0] !== t[0].toUpperCase() ? "on" + t[0].toUpperCase() + t.substring(1) : "on" + t),
                t
            }
            if (!(this instanceof e))
                return new e(r,n);
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
                freeModeMinimumVelocity: .02,
                autoHeight: !1,
                setWrapperSize: !1,
                virtualTranslate: !1,
                effect: "slide",
                coverflow: {
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: !0
                },
                flip: {
                    slideShadows: !0,
                    limitRotation: !0
                },
                cube: {
                    slideShadows: !0,
                    shadow: !0,
                    shadowOffset: 20,
                    shadowScale: .94
                },
                fade: {
                    crossFade: !1
                },
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
                longSwipesRatio: .5,
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
                resistanceRatio: .85,
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
                runCallbacksOnInit: !0
            }
              , f = n && n.virtualTranslate;
            n = n || {};
            var m = {};
            for (var g in n)
                if ("object" != typeof n[g] || null === n[g] || (n[g].nodeType || n[g] === window || n[g] === document || void 0 !== i && n[g]instanceof i || "undefined" != typeof jQuery && n[g]instanceof jQuery))
                    m[g] = n[g];
                else {
                    m[g] = {};
                    for (var v in n[g])
                        m[g][v] = n[g][v]
                }
            for (var y in p)
                if (void 0 === n[y])
                    n[y] = p[y];
                else if ("object" == typeof n[y])
                    for (var _ in p[y])
                        void 0 === n[y][_] && (n[y][_] = p[y][_]);
            var w = this;
            if (w.params = n,
            w.originalParams = m,
            w.classNames = [],
            void 0 !== t && void 0 !== i && (t = i),
            (void 0 !== t || (t = void 0 === i ? window.Dom7 || window.Zepto || window.jQuery : i)) && (w.$ = t,
            w.currentBreakpoint = void 0,
            w.getActiveBreakpoint = function() {
                if (!w.params.breakpoints)
                    return !1;
                var t, e = !1, i = [];
                for (t in w.params.breakpoints)
                    w.params.breakpoints.hasOwnProperty(t) && i.push(t);
                i.sort(function(t, e) {
                    return parseInt(t, 10) > parseInt(e, 10)
                });
                for (var r = 0; r < i.length; r++)
                    (t = i[r]) >= window.innerWidth && !e && (e = t);
                return e || "max"
            }
            ,
            w.setBreakpoint = function() {
                var t = w.getActiveBreakpoint();
                if (t && w.currentBreakpoint !== t) {
                    var e = t in w.params.breakpoints ? w.params.breakpoints[t] : w.originalParams
                      , i = w.params.loop && e.slidesPerView !== w.params.slidesPerView;
                    for (var r in e)
                        w.params[r] = e[r];
                    w.currentBreakpoint = t,
                    i && w.destroyLoop && w.reLoop(!0)
                }
            }
            ,
            w.params.breakpoints && w.setBreakpoint(),
            w.container = t(r),
            0 !== w.container.length)) {
                if (w.container.length > 1) {
                    var T = [];
                    return w.container.each(function() {
                        T.push(new e(this,n))
                    }),
                    T
                }
                w.container[0].swiper = w,
                w.container.data("swiper", w),
                w.classNames.push(w.params.containerModifierClass + w.params.direction),
                w.params.freeMode && w.classNames.push(w.params.containerModifierClass + "free-mode"),
                w.support.flexbox || (w.classNames.push(w.params.containerModifierClass + "no-flexbox"),
                w.params.slidesPerColumn = 1),
                w.params.autoHeight && w.classNames.push(w.params.containerModifierClass + "autoheight"),
                (w.params.parallax || w.params.watchSlidesVisibility) && (w.params.watchSlidesProgress = !0),
                w.params.touchReleaseOnEdges && (w.params.resistanceRatio = 0),
                ["cube", "coverflow", "flip"].indexOf(w.params.effect) >= 0 && (w.support.transforms3d ? (w.params.watchSlidesProgress = !0,
                w.classNames.push(w.params.containerModifierClass + "3d")) : w.params.effect = "slide"),
                "slide" !== w.params.effect && w.classNames.push(w.params.containerModifierClass + w.params.effect),
                "cube" === w.params.effect && (w.params.resistanceRatio = 0,
                w.params.slidesPerView = 1,
                w.params.slidesPerColumn = 1,
                w.params.slidesPerGroup = 1,
                w.params.centeredSlides = !1,
                w.params.spaceBetween = 0,
                w.params.virtualTranslate = !0),
                "fade" !== w.params.effect && "flip" !== w.params.effect || (w.params.slidesPerView = 1,
                w.params.slidesPerColumn = 1,
                w.params.slidesPerGroup = 1,
                w.params.watchSlidesProgress = !0,
                w.params.spaceBetween = 0,
                void 0 === f && (w.params.virtualTranslate = !0)),
                w.params.grabCursor && w.support.touch && (w.params.grabCursor = !1),
                w.wrapper = w.container.children("." + w.params.wrapperClass),
                w.params.pagination && (w.paginationContainer = t(w.params.pagination),
                w.params.uniqueNavElements && "string" == typeof w.params.pagination && w.paginationContainer.length > 1 && 1 === w.container.find(w.params.pagination).length && (w.paginationContainer = w.container.find(w.params.pagination)),
                "bullets" === w.params.paginationType && w.params.paginationClickable ? w.paginationContainer.addClass(w.params.paginationModifierClass + "clickable") : w.params.paginationClickable = !1,
                w.paginationContainer.addClass(w.params.paginationModifierClass + w.params.paginationType)),
                (w.params.nextButton || w.params.prevButton) && (w.params.nextButton && (w.nextButton = t(w.params.nextButton),
                w.params.uniqueNavElements && "string" == typeof w.params.nextButton && w.nextButton.length > 1 && 1 === w.container.find(w.params.nextButton).length && (w.nextButton = w.container.find(w.params.nextButton))),
                w.params.prevButton && (w.prevButton = t(w.params.prevButton),
                w.params.uniqueNavElements && "string" == typeof w.params.prevButton && w.prevButton.length > 1 && 1 === w.container.find(w.params.prevButton).length && (w.prevButton = w.container.find(w.params.prevButton)))),
                w.isHorizontal = function() {
                    return "horizontal" === w.params.direction
                }
                ,
                w.rtl = w.isHorizontal() && ("rtl" === w.container[0].dir.toLowerCase() || "rtl" === w.container.css("direction")),
                w.rtl && w.classNames.push(w.params.containerModifierClass + "rtl"),
                w.rtl && (w.wrongRTL = "-webkit-box" === w.wrapper.css("display")),
                w.params.slidesPerColumn > 1 && w.classNames.push(w.params.containerModifierClass + "multirow"),
                w.device.android && w.classNames.push(w.params.containerModifierClass + "android"),
                w.container.addClass(w.classNames.join(" ")),
                w.translate = 0,
                w.progress = 0,
                w.velocity = 0,
                w.lockSwipeToNext = function() {
                    w.params.allowSwipeToNext = !1,
                    !1 === w.params.allowSwipeToPrev && w.params.grabCursor && w.unsetGrabCursor()
                }
                ,
                w.lockSwipeToPrev = function() {
                    w.params.allowSwipeToPrev = !1,
                    !1 === w.params.allowSwipeToNext && w.params.grabCursor && w.unsetGrabCursor()
                }
                ,
                w.lockSwipes = function() {
                    w.params.allowSwipeToNext = w.params.allowSwipeToPrev = !1,
                    w.params.grabCursor && w.unsetGrabCursor()
                }
                ,
                w.unlockSwipeToNext = function() {
                    w.params.allowSwipeToNext = !0,
                    !0 === w.params.allowSwipeToPrev && w.params.grabCursor && w.setGrabCursor()
                }
                ,
                w.unlockSwipeToPrev = function() {
                    w.params.allowSwipeToPrev = !0,
                    !0 === w.params.allowSwipeToNext && w.params.grabCursor && w.setGrabCursor()
                }
                ,
                w.unlockSwipes = function() {
                    w.params.allowSwipeToNext = w.params.allowSwipeToPrev = !0,
                    w.params.grabCursor && w.setGrabCursor()
                }
                ,
                w.setGrabCursor = function(t) {
                    w.container[0].style.cursor = "move",
                    w.container[0].style.cursor = t ? "-webkit-grabbing" : "-webkit-grab",
                    w.container[0].style.cursor = t ? "-moz-grabbin" : "-moz-grab",
                    w.container[0].style.cursor = t ? "grabbing" : "grab"
                }
                ,
                w.unsetGrabCursor = function() {
                    w.container[0].style.cursor = ""
                }
                ,
                w.params.grabCursor && w.setGrabCursor(),
                w.imagesToLoad = [],
                w.imagesLoaded = 0,
                w.loadImage = function(t, e, i, r, n, s) {
                    function a() {
                        s && s()
                    }
                    var o;
                    t.complete && n ? a() : e ? ((o = new window.Image).onload = a,
                    o.onerror = a,
                    r && (o.sizes = r),
                    i && (o.srcset = i),
                    e && (o.src = e)) : a()
                }
                ,
                w.preloadImages = function() {
                    function t() {
                        void 0 !== w && null !== w && w && (void 0 !== w.imagesLoaded && w.imagesLoaded++,
                        w.imagesLoaded === w.imagesToLoad.length && (w.params.updateOnImagesReady && w.update(),
                        w.emit("onImagesReady", w)))
                    }
                    w.imagesToLoad = w.container.find("img");
                    for (var e = 0; e < w.imagesToLoad.length; e++)
                        w.loadImage(w.imagesToLoad[e], w.imagesToLoad[e].currentSrc || w.imagesToLoad[e].getAttribute("src"), w.imagesToLoad[e].srcset || w.imagesToLoad[e].getAttribute("srcset"), w.imagesToLoad[e].sizes || w.imagesToLoad[e].getAttribute("sizes"), !0, t)
                }
                ,
                w.autoplayTimeoutId = void 0,
                w.autoplaying = !1,
                w.autoplayPaused = !1,
                w.startAutoplay = function() {
                    return void 0 === w.autoplayTimeoutId && (!!w.params.autoplay && (!w.autoplaying && (w.autoplaying = !0,
                    w.emit("onAutoplayStart", w),
                    void a())))
                }
                ,
                w.stopAutoplay = function(t) {
                    w.autoplayTimeoutId && (w.autoplayTimeoutId && clearTimeout(w.autoplayTimeoutId),
                    w.autoplaying = !1,
                    w.autoplayTimeoutId = void 0,
                    w.emit("onAutoplayStop", w))
                }
                ,
                w.pauseAutoplay = function(t) {
                    w.autoplayPaused || (w.autoplayTimeoutId && clearTimeout(w.autoplayTimeoutId),
                    w.autoplayPaused = !0,
                    0 === t ? (w.autoplayPaused = !1,
                    a()) : w.wrapper.transitionEnd(function() {
                        w && (w.autoplayPaused = !1,
                        w.autoplaying ? a() : w.stopAutoplay())
                    }))
                }
                ,
                w.minTranslate = function() {
                    return -w.snapGrid[0]
                }
                ,
                w.maxTranslate = function() {
                    return -w.snapGrid[w.snapGrid.length - 1]
                }
                ,
                w.updateAutoHeight = function() {
                    var t, e = [], i = 0;
                    if ("auto" !== w.params.slidesPerView && w.params.slidesPerView > 1)
                        for (t = 0; t < Math.ceil(w.params.slidesPerView); t++) {
                            var r = w.activeIndex + t;
                            if (r > w.slides.length)
                                break;
                            e.push(w.slides.eq(r)[0])
                        }
                    else
                        e.push(w.slides.eq(w.activeIndex)[0]);
                    for (t = 0; t < e.length; t++)
                        if (void 0 !== e[t]) {
                            var n = e[t].offsetHeight;
                            i = n > i ? n : i
                        }
                    i && w.wrapper.css("height", i + "px")
                }
                ,
                w.updateContainerSize = function() {
                    var t, e;
                    t = void 0 !== w.params.width ? w.params.width : w.container[0].clientWidth,
                    e = void 0 !== w.params.height ? w.params.height : w.container[0].clientHeight,
                    0 === t && w.isHorizontal() || 0 === e && !w.isHorizontal() || (t = t - parseInt(w.container.css("padding-left"), 10) - parseInt(w.container.css("padding-right"), 10),
                    e = e - parseInt(w.container.css("padding-top"), 10) - parseInt(w.container.css("padding-bottom"), 10),
                    w.width = t,
                    w.height = e,
                    w.size = w.isHorizontal() ? w.width : w.height)
                }
                ,
                w.updateSlidesSize = function() {
                    w.slides = w.wrapper.children("." + w.params.slideClass),
                    w.snapGrid = [],
                    w.slidesGrid = [],
                    w.slidesSizesGrid = [];
                    var t, e = w.params.spaceBetween, i = -w.params.slidesOffsetBefore, r = 0, n = 0;
                    if (void 0 !== w.size) {
                        "string" == typeof e && e.indexOf("%") >= 0 && (e = parseFloat(e.replace("%", "")) / 100 * w.size),
                        w.virtualSize = -e,
                        w.rtl ? w.slides.css({
                            marginLeft: "",
                            marginTop: ""
                        }) : w.slides.css({
                            marginRight: "",
                            marginBottom: ""
                        });
                        var a;
                        w.params.slidesPerColumn > 1 && (a = Math.floor(w.slides.length / w.params.slidesPerColumn) === w.slides.length / w.params.slidesPerColumn ? w.slides.length : Math.ceil(w.slides.length / w.params.slidesPerColumn) * w.params.slidesPerColumn,
                        "auto" !== w.params.slidesPerView && "row" === w.params.slidesPerColumnFill && (a = Math.max(a, w.params.slidesPerView * w.params.slidesPerColumn)));
                        var o, l = w.params.slidesPerColumn, u = a / l, c = u - (w.params.slidesPerColumn * u - w.slides.length);
                        for (t = 0; t < w.slides.length; t++) {
                            o = 0;
                            var h = w.slides.eq(t);
                            if (w.params.slidesPerColumn > 1) {
                                var d, p, f;
                                "column" === w.params.slidesPerColumnFill ? (f = t - (p = Math.floor(t / l)) * l,
                                (p > c || p === c && f === l - 1) && ++f >= l && (f = 0,
                                p++),
                                d = p + f * a / l,
                                h.css({
                                    "-webkit-box-ordinal-group": d,
                                    "-moz-box-ordinal-group": d,
                                    "-ms-flex-order": d,
                                    "-webkit-order": d,
                                    order: d
                                })) : p = t - (f = Math.floor(t / u)) * u,
                                h.css("margin-" + (w.isHorizontal() ? "top" : "left"), 0 !== f && w.params.spaceBetween && w.params.spaceBetween + "px").attr("data-swiper-column", p).attr("data-swiper-row", f)
                            }
                            "none" !== h.css("display") && ("auto" === w.params.slidesPerView ? (o = w.isHorizontal() ? h.outerWidth(!0) : h.outerHeight(!0),
                            w.params.roundLengths && (o = s(o))) : (o = (w.size - (w.params.slidesPerView - 1) * e) / w.params.slidesPerView,
                            w.params.roundLengths && (o = s(o)),
                            w.isHorizontal() ? w.slides[t].style.width = o + "px" : w.slides[t].style.height = o + "px"),
                            w.slides[t].swiperSlideSize = o,
                            w.slidesSizesGrid.push(o),
                            w.params.centeredSlides ? (i = i + o / 2 + r / 2 + e,
                            0 === r && 0 !== t && (i = i - w.size / 2 - e),
                            0 === t && (i = i - w.size / 2 - e),
                            Math.abs(i) < .001 && (i = 0),
                            n % w.params.slidesPerGroup == 0 && w.snapGrid.push(i),
                            w.slidesGrid.push(i)) : (n % w.params.slidesPerGroup == 0 && w.snapGrid.push(i),
                            w.slidesGrid.push(i),
                            i = i + o + e),
                            w.virtualSize += o + e,
                            r = o,
                            n++)
                        }
                        w.virtualSize = Math.max(w.virtualSize, w.size) + w.params.slidesOffsetAfter;
                        var m;
                        if (w.rtl && w.wrongRTL && ("slide" === w.params.effect || "coverflow" === w.params.effect) && w.wrapper.css({
                            width: w.virtualSize + w.params.spaceBetween + "px"
                        }),
                        w.support.flexbox && !w.params.setWrapperSize || (w.isHorizontal() ? w.wrapper.css({
                            width: w.virtualSize + w.params.spaceBetween + "px"
                        }) : w.wrapper.css({
                            height: w.virtualSize + w.params.spaceBetween + "px"
                        })),
                        w.params.slidesPerColumn > 1 && (w.virtualSize = (o + w.params.spaceBetween) * a,
                        w.virtualSize = Math.ceil(w.virtualSize / w.params.slidesPerColumn) - w.params.spaceBetween,
                        w.isHorizontal() ? w.wrapper.css({
                            width: w.virtualSize + w.params.spaceBetween + "px"
                        }) : w.wrapper.css({
                            height: w.virtualSize + w.params.spaceBetween + "px"
                        }),
                        w.params.centeredSlides)) {
                            for (m = [],
                            t = 0; t < w.snapGrid.length; t++)
                                w.snapGrid[t] < w.virtualSize + w.snapGrid[0] && m.push(w.snapGrid[t]);
                            w.snapGrid = m
                        }
                        if (!w.params.centeredSlides) {
                            for (m = [],
                            t = 0; t < w.snapGrid.length; t++)
                                w.snapGrid[t] <= w.virtualSize - w.size && m.push(w.snapGrid[t]);
                            w.snapGrid = m,
                            Math.floor(w.virtualSize - w.size) - Math.floor(w.snapGrid[w.snapGrid.length - 1]) > 1 && w.snapGrid.push(w.virtualSize - w.size)
                        }
                        0 === w.snapGrid.length && (w.snapGrid = [0]),
                        0 !== w.params.spaceBetween && (w.isHorizontal() ? w.rtl ? w.slides.css({
                            marginLeft: e + "px"
                        }) : w.slides.css({
                            marginRight: e + "px"
                        }) : w.slides.css({
                            marginBottom: e + "px"
                        })),
                        w.params.watchSlidesProgress && w.updateSlidesOffset()
                    }
                }
                ,
                w.updateSlidesOffset = function() {
                    for (var t = 0; t < w.slides.length; t++)
                        w.slides[t].swiperSlideOffset = w.isHorizontal() ? w.slides[t].offsetLeft : w.slides[t].offsetTop
                }
                ,
                w.currentSlidesPerView = function() {
                    var t, e, i = 1;
                    if (w.params.centeredSlides) {
                        var r, n = w.slides[w.activeIndex].swiperSlideSize;
                        for (t = w.activeIndex + 1; t < w.slides.length; t++)
                            w.slides[t] && !r && (i++,
                            (n += w.slides[t].swiperSlideSize) > w.size && (r = !0));
                        for (e = w.activeIndex - 1; e >= 0; e--)
                            w.slides[e] && !r && (i++,
                            (n += w.slides[e].swiperSlideSize) > w.size && (r = !0))
                    } else
                        for (t = w.activeIndex + 1; t < w.slides.length; t++)
                            w.slidesGrid[t] - w.slidesGrid[w.activeIndex] < w.size && i++;
                    return i
                }
                ,
                w.updateSlidesProgress = function(t) {
                    if (void 0 === t && (t = w.translate || 0),
                    0 !== w.slides.length) {
                        void 0 === w.slides[0].swiperSlideOffset && w.updateSlidesOffset();
                        var e = -t;
                        w.rtl && (e = t),
                        w.slides.removeClass(w.params.slideVisibleClass);
                        for (var i = 0; i < w.slides.length; i++) {
                            var r = w.slides[i]
                              , n = (e + (w.params.centeredSlides ? w.minTranslate() : 0) - r.swiperSlideOffset) / (r.swiperSlideSize + w.params.spaceBetween);
                            if (w.params.watchSlidesVisibility) {
                                var s = -(e - r.swiperSlideOffset)
                                  , a = s + w.slidesSizesGrid[i];
                                (s >= 0 && s < w.size || a > 0 && a <= w.size || s <= 0 && a >= w.size) && w.slides.eq(i).addClass(w.params.slideVisibleClass)
                            }
                            r.progress = w.rtl ? -n : n
                        }
                    }
                }
                ,
                w.updateProgress = function(t) {
                    void 0 === t && (t = w.translate || 0);
                    var e = w.maxTranslate() - w.minTranslate()
                      , i = w.isBeginning
                      , r = w.isEnd;
                    0 === e ? (w.progress = 0,
                    w.isBeginning = w.isEnd = !0) : (w.progress = (t - w.minTranslate()) / e,
                    w.isBeginning = w.progress <= 0,
                    w.isEnd = w.progress >= 1),
                    w.isBeginning && !i && w.emit("onReachBeginning", w),
                    w.isEnd && !r && w.emit("onReachEnd", w),
                    w.params.watchSlidesProgress && w.updateSlidesProgress(t),
                    w.emit("onProgress", w, w.progress)
                }
                ,
                w.updateActiveIndex = function() {
                    var t, e, i, r = w.rtl ? w.translate : -w.translate;
                    for (e = 0; e < w.slidesGrid.length; e++)
                        void 0 !== w.slidesGrid[e + 1] ? r >= w.slidesGrid[e] && r < w.slidesGrid[e + 1] - (w.slidesGrid[e + 1] - w.slidesGrid[e]) / 2 ? t = e : r >= w.slidesGrid[e] && r < w.slidesGrid[e + 1] && (t = e + 1) : r >= w.slidesGrid[e] && (t = e);
                    w.params.normalizeSlideIndex && (t < 0 || void 0 === t) && (t = 0),
                    (i = Math.floor(t / w.params.slidesPerGroup)) >= w.snapGrid.length && (i = w.snapGrid.length - 1),
                    t !== w.activeIndex && (w.snapIndex = i,
                    w.previousIndex = w.activeIndex,
                    w.activeIndex = t,
                    w.updateClasses(),
                    w.updateRealIndex())
                }
                ,
                w.updateRealIndex = function() {
                    w.realIndex = parseInt(w.slides.eq(w.activeIndex).attr("data-swiper-slide-index") || w.activeIndex, 10)
                }
                ,
                w.updateClasses = function() {
                    w.slides.removeClass(w.params.slideActiveClass + " " + w.params.slideNextClass + " " + w.params.slidePrevClass + " " + w.params.slideDuplicateActiveClass + " " + w.params.slideDuplicateNextClass + " " + w.params.slideDuplicatePrevClass);
                    var e = w.slides.eq(w.activeIndex);
                    e.addClass(w.params.slideActiveClass),
                    n.loop && (e.hasClass(w.params.slideDuplicateClass) ? w.wrapper.children("." + w.params.slideClass + ":not(." + w.params.slideDuplicateClass + ')[data-swiper-slide-index="' + w.realIndex + '"]').addClass(w.params.slideDuplicateActiveClass) : w.wrapper.children("." + w.params.slideClass + "." + w.params.slideDuplicateClass + '[data-swiper-slide-index="' + w.realIndex + '"]').addClass(w.params.slideDuplicateActiveClass));
                    var i = e.next("." + w.params.slideClass).addClass(w.params.slideNextClass);
                    w.params.loop && 0 === i.length && (i = w.slides.eq(0)).addClass(w.params.slideNextClass);
                    var r = e.prev("." + w.params.slideClass).addClass(w.params.slidePrevClass);
                    if (w.params.loop && 0 === r.length && (r = w.slides.eq(-1)).addClass(w.params.slidePrevClass),
                    n.loop && (i.hasClass(w.params.slideDuplicateClass) ? w.wrapper.children("." + w.params.slideClass + ":not(." + w.params.slideDuplicateClass + ')[data-swiper-slide-index="' + i.attr("data-swiper-slide-index") + '"]').addClass(w.params.slideDuplicateNextClass) : w.wrapper.children("." + w.params.slideClass + "." + w.params.slideDuplicateClass + '[data-swiper-slide-index="' + i.attr("data-swiper-slide-index") + '"]').addClass(w.params.slideDuplicateNextClass),
                    r.hasClass(w.params.slideDuplicateClass) ? w.wrapper.children("." + w.params.slideClass + ":not(." + w.params.slideDuplicateClass + ')[data-swiper-slide-index="' + r.attr("data-swiper-slide-index") + '"]').addClass(w.params.slideDuplicatePrevClass) : w.wrapper.children("." + w.params.slideClass + "." + w.params.slideDuplicateClass + '[data-swiper-slide-index="' + r.attr("data-swiper-slide-index") + '"]').addClass(w.params.slideDuplicatePrevClass)),
                    w.paginationContainer && w.paginationContainer.length > 0) {
                        var s, a = w.params.loop ? Math.ceil((w.slides.length - 2 * w.loopedSlides) / w.params.slidesPerGroup) : w.snapGrid.length;
                        if (w.params.loop ? ((s = Math.ceil((w.activeIndex - w.loopedSlides) / w.params.slidesPerGroup)) > w.slides.length - 1 - 2 * w.loopedSlides && (s -= w.slides.length - 2 * w.loopedSlides),
                        s > a - 1 && (s -= a),
                        s < 0 && "bullets" !== w.params.paginationType && (s = a + s)) : s = void 0 !== w.snapIndex ? w.snapIndex : w.activeIndex || 0,
                        "bullets" === w.params.paginationType && w.bullets && w.bullets.length > 0 && (w.bullets.removeClass(w.params.bulletActiveClass),
                        w.paginationContainer.length > 1 ? w.bullets.each(function() {
                            t(this).index() === s && t(this).addClass(w.params.bulletActiveClass)
                        }) : w.bullets.eq(s).addClass(w.params.bulletActiveClass)),
                        "fraction" === w.params.paginationType && (w.paginationContainer.find("." + w.params.paginationCurrentClass).text(s + 1),
                        w.paginationContainer.find("." + w.params.paginationTotalClass).text(a)),
                        "progress" === w.params.paginationType) {
                            var o = (s + 1) / a
                              , l = o
                              , u = 1;
                            w.isHorizontal() || (u = o,
                            l = 1),
                            w.paginationContainer.find("." + w.params.paginationProgressbarClass).transform("translate3d(0,0,0) scaleX(" + l + ") scaleY(" + u + ")").transition(w.params.speed)
                        }
                        "custom" === w.params.paginationType && w.params.paginationCustomRender && (w.paginationContainer.html(w.params.paginationCustomRender(w, s + 1, a)),
                        w.emit("onPaginationRendered", w, w.paginationContainer[0]))
                    }
                    w.params.loop || (w.params.prevButton && w.prevButton && w.prevButton.length > 0 && (w.isBeginning ? (w.prevButton.addClass(w.params.buttonDisabledClass),
                    w.params.a11y && w.a11y && w.a11y.disable(w.prevButton)) : (w.prevButton.removeClass(w.params.buttonDisabledClass),
                    w.params.a11y && w.a11y && w.a11y.enable(w.prevButton))),
                    w.params.nextButton && w.nextButton && w.nextButton.length > 0 && (w.isEnd ? (w.nextButton.addClass(w.params.buttonDisabledClass),
                    w.params.a11y && w.a11y && w.a11y.disable(w.nextButton)) : (w.nextButton.removeClass(w.params.buttonDisabledClass),
                    w.params.a11y && w.a11y && w.a11y.enable(w.nextButton))))
                }
                ,
                w.updatePagination = function() {
                    if (w.params.pagination && w.paginationContainer && w.paginationContainer.length > 0) {
                        var t = "";
                        if ("bullets" === w.params.paginationType) {
                            for (var e = w.params.loop ? Math.ceil((w.slides.length - 2 * w.loopedSlides) / w.params.slidesPerGroup) : w.snapGrid.length, i = 0; i < e; i++)
                                w.params.paginationBulletRender ? t += w.params.paginationBulletRender(w, i, w.params.bulletClass) : t += "<" + w.params.paginationElement + ' class="' + w.params.bulletClass + '"></' + w.params.paginationElement + ">";
                            w.paginationContainer.html(t),
                            w.bullets = w.paginationContainer.find("." + w.params.bulletClass),
                            w.params.paginationClickable && w.params.a11y && w.a11y && w.a11y.initPagination()
                        }
                        "fraction" === w.params.paginationType && (t = w.params.paginationFractionRender ? w.params.paginationFractionRender(w, w.params.paginationCurrentClass, w.params.paginationTotalClass) : '<span class="' + w.params.paginationCurrentClass + '"></span> / <span class="' + w.params.paginationTotalClass + '"></span>',
                        w.paginationContainer.html(t)),
                        "progress" === w.params.paginationType && (t = w.params.paginationProgressRender ? w.params.paginationProgressRender(w, w.params.paginationProgressbarClass) : '<span class="' + w.params.paginationProgressbarClass + '"></span>',
                        w.paginationContainer.html(t)),
                        "custom" !== w.params.paginationType && w.emit("onPaginationRendered", w, w.paginationContainer[0])
                    }
                }
                ,
                w.update = function(t) {
                    function e() {
                        w.rtl,
                        w.translate;
                        i = Math.min(Math.max(w.translate, w.maxTranslate()), w.minTranslate()),
                        w.setWrapperTranslate(i),
                        w.updateActiveIndex(),
                        w.updateClasses()
                    }
                    if (w) {
                        w.updateContainerSize(),
                        w.updateSlidesSize(),
                        w.updateProgress(),
                        w.updatePagination(),
                        w.updateClasses(),
                        w.params.scrollbar && w.scrollbar && w.scrollbar.set();
                        var i;
                        if (t) {
                            w.controller && w.controller.spline && (w.controller.spline = void 0),
                            w.params.freeMode ? (e(),
                            w.params.autoHeight && w.updateAutoHeight()) : (("auto" === w.params.slidesPerView || w.params.slidesPerView > 1) && w.isEnd && !w.params.centeredSlides ? w.slideTo(w.slides.length - 1, 0, !1, !0) : w.slideTo(w.activeIndex, 0, !1, !0)) || e()
                        } else
                            w.params.autoHeight && w.updateAutoHeight()
                    }
                }
                ,
                w.onResize = function(t) {
                    w.params.onBeforeResize && w.params.onBeforeResize(w),
                    w.params.breakpoints && w.setBreakpoint();
                    var e = w.params.allowSwipeToPrev
                      , i = w.params.allowSwipeToNext;
                    w.params.allowSwipeToPrev = w.params.allowSwipeToNext = !0,
                    w.updateContainerSize(),
                    w.updateSlidesSize(),
                    ("auto" === w.params.slidesPerView || w.params.freeMode || t) && w.updatePagination(),
                    w.params.scrollbar && w.scrollbar && w.scrollbar.set(),
                    w.controller && w.controller.spline && (w.controller.spline = void 0);
                    var r = !1;
                    if (w.params.freeMode) {
                        var n = Math.min(Math.max(w.translate, w.maxTranslate()), w.minTranslate());
                        w.setWrapperTranslate(n),
                        w.updateActiveIndex(),
                        w.updateClasses(),
                        w.params.autoHeight && w.updateAutoHeight()
                    } else
                        w.updateClasses(),
                        r = ("auto" === w.params.slidesPerView || w.params.slidesPerView > 1) && w.isEnd && !w.params.centeredSlides ? w.slideTo(w.slides.length - 1, 0, !1, !0) : w.slideTo(w.activeIndex, 0, !1, !0);
                    w.params.lazyLoading && !r && w.lazy && w.lazy.load(),
                    w.params.allowSwipeToPrev = e,
                    w.params.allowSwipeToNext = i,
                    w.params.onAfterResize && w.params.onAfterResize(w)
                }
                ,
                w.touchEventsDesktop = {
                    start: "mousedown",
                    move: "mousemove",
                    end: "mouseup"
                },
                window.navigator.pointerEnabled ? w.touchEventsDesktop = {
                    start: "pointerdown",
                    move: "pointermove",
                    end: "pointerup"
                } : window.navigator.msPointerEnabled && (w.touchEventsDesktop = {
                    start: "MSPointerDown",
                    move: "MSPointerMove",
                    end: "MSPointerUp"
                }),
                w.touchEvents = {
                    start: w.support.touch || !w.params.simulateTouch ? "touchstart" : w.touchEventsDesktop.start,
                    move: w.support.touch || !w.params.simulateTouch ? "touchmove" : w.touchEventsDesktop.move,
                    end: w.support.touch || !w.params.simulateTouch ? "touchend" : w.touchEventsDesktop.end
                },
                (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && ("container" === w.params.touchEventsTarget ? w.container : w.wrapper).addClass("swiper-wp8-" + w.params.direction),
                w.initEvents = function(t) {
                    var e = t ? "off" : "on"
                      , i = t ? "removeEventListener" : "addEventListener"
                      , r = "container" === w.params.touchEventsTarget ? w.container[0] : w.wrapper[0]
                      , s = w.support.touch ? r : document
                      , a = !!w.params.nested;
                    if (w.browser.ie)
                        r[i](w.touchEvents.start, w.onTouchStart, !1),
                        s[i](w.touchEvents.move, w.onTouchMove, a),
                        s[i](w.touchEvents.end, w.onTouchEnd, !1);
                    else {
                        if (w.support.touch) {
                            var o = !("touchstart" !== w.touchEvents.start || !w.support.passiveListener || !w.params.passiveListeners) && {
                                passive: !0,
                                capture: !1
                            };
                            r[i](w.touchEvents.start, w.onTouchStart, o),
                            r[i](w.touchEvents.move, w.onTouchMove, a),
                            r[i](w.touchEvents.end, w.onTouchEnd, o)
                        }
                        (n.simulateTouch && !w.device.ios && !w.device.android || n.simulateTouch && !w.support.touch && w.device.ios) && (r[i]("mousedown", w.onTouchStart, !1),
                        document[i]("mousemove", w.onTouchMove, a),
                        document[i]("mouseup", w.onTouchEnd, !1))
                    }
                    window[i]("resize", w.onResize),
                    w.params.nextButton && w.nextButton && w.nextButton.length > 0 && (w.nextButton[e]("click", w.onClickNext),
                    w.params.a11y && w.a11y && w.nextButton[e]("keydown", w.a11y.onEnterKey)),
                    w.params.prevButton && w.prevButton && w.prevButton.length > 0 && (w.prevButton[e]("click", w.onClickPrev),
                    w.params.a11y && w.a11y && w.prevButton[e]("keydown", w.a11y.onEnterKey)),
                    w.params.pagination && w.params.paginationClickable && (w.paginationContainer[e]("click", "." + w.params.bulletClass, w.onClickIndex),
                    w.params.a11y && w.a11y && w.paginationContainer[e]("keydown", "." + w.params.bulletClass, w.a11y.onEnterKey)),
                    (w.params.preventClicks || w.params.preventClicksPropagation) && r[i]("click", w.preventClicks, !0)
                }
                ,
                w.attachEvents = function() {
                    w.initEvents()
                }
                ,
                w.detachEvents = function() {
                    w.initEvents(!0)
                }
                ,
                w.allowClick = !0,
                w.preventClicks = function(t) {
                    w.allowClick || (w.params.preventClicks && t.preventDefault(),
                    w.params.preventClicksPropagation && w.animating && (t.stopPropagation(),
                    t.stopImmediatePropagation()))
                }
                ,
                w.onClickNext = function(t) {
                    t.preventDefault(),
                    w.isEnd && !w.params.loop || w.slideNext()
                }
                ,
                w.onClickPrev = function(t) {
                    t.preventDefault(),
                    w.isBeginning && !w.params.loop || w.slidePrev()
                }
                ,
                w.onClickIndex = function(e) {
                    e.preventDefault();
                    var i = t(this).index() * w.params.slidesPerGroup;
                    w.params.loop && (i += w.loopedSlides),
                    w.slideTo(i)
                }
                ,
                w.updateClickedSlide = function(e) {
                    var i = o(e, "." + w.params.slideClass)
                      , r = !1;
                    if (i)
                        for (var n = 0; n < w.slides.length; n++)
                            w.slides[n] === i && (r = !0);
                    if (!i || !r)
                        return w.clickedSlide = void 0,
                        void (w.clickedIndex = void 0);
                    if (w.clickedSlide = i,
                    w.clickedIndex = t(i).index(),
                    w.params.slideToClickedSlide && void 0 !== w.clickedIndex && w.clickedIndex !== w.activeIndex) {
                        var s, a = w.clickedIndex, l = "auto" === w.params.slidesPerView ? w.currentSlidesPerView() : w.params.slidesPerView;
                        if (w.params.loop) {
                            if (w.animating)
                                return;
                            s = parseInt(t(w.clickedSlide).attr("data-swiper-slide-index"), 10),
                            w.params.centeredSlides ? a < w.loopedSlides - l / 2 || a > w.slides.length - w.loopedSlides + l / 2 ? (w.fixLoop(),
                            a = w.wrapper.children("." + w.params.slideClass + '[data-swiper-slide-index="' + s + '"]:not(.' + w.params.slideDuplicateClass + ")").eq(0).index(),
                            setTimeout(function() {
                                w.slideTo(a)
                            }, 0)) : w.slideTo(a) : a > w.slides.length - l ? (w.fixLoop(),
                            a = w.wrapper.children("." + w.params.slideClass + '[data-swiper-slide-index="' + s + '"]:not(.' + w.params.slideDuplicateClass + ")").eq(0).index(),
                            setTimeout(function() {
                                w.slideTo(a)
                            }, 0)) : w.slideTo(a)
                        } else
                            w.slideTo(a)
                    }
                }
                ;
                var b, x, S, C, P, E, k, A, M, L, I = "input, select, textarea, button, video", O = Date.now(), z = [];
                w.animating = !1,
                w.touches = {
                    startX: 0,
                    startY: 0,
                    currentX: 0,
                    currentY: 0,
                    diff: 0
                };
                var R, D;
                w.onTouchStart = function(e) {
                    if (e.originalEvent && (e = e.originalEvent),
                    (R = "touchstart" === e.type) || !("which"in e) || 3 !== e.which)
                        if (w.params.noSwiping && o(e, "." + w.params.noSwipingClass))
                            w.allowClick = !0;
                        else if (!w.params.swipeHandler || o(e, w.params.swipeHandler)) {
                            var i = w.touches.currentX = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX
                              , r = w.touches.currentY = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY;
                            if (!(w.device.ios && w.params.iOSEdgeSwipeDetection && i <= w.params.iOSEdgeSwipeThreshold)) {
                                if (b = !0,
                                x = !1,
                                S = !0,
                                P = void 0,
                                D = void 0,
                                w.touches.startX = i,
                                w.touches.startY = r,
                                C = Date.now(),
                                w.allowClick = !0,
                                w.updateContainerSize(),
                                w.swipeDirection = void 0,
                                w.params.threshold > 0 && (A = !1),
                                "touchstart" !== e.type) {
                                    var n = !0;
                                    t(e.target).is(I) && (n = !1),
                                    document.activeElement && t(document.activeElement).is(I) && document.activeElement.blur(),
                                    n && e.preventDefault()
                                }
                                w.emit("onTouchStart", w, e)
                            }
                        }
                }
                ,
                w.onTouchMove = function(e) {
                    if (e.originalEvent && (e = e.originalEvent),
                    !R || "mousemove" !== e.type) {
                        if (e.preventedByNestedSwiper)
                            return w.touches.startX = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX,
                            void (w.touches.startY = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY);
                        if (w.params.onlyExternal)
                            return w.allowClick = !1,
                            void (b && (w.touches.startX = w.touches.currentX = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX,
                            w.touches.startY = w.touches.currentY = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY,
                            C = Date.now()));
                        if (R && w.params.touchReleaseOnEdges && !w.params.loop)
                            if (w.isHorizontal()) {
                                if (w.touches.currentX < w.touches.startX && w.translate <= w.maxTranslate() || w.touches.currentX > w.touches.startX && w.translate >= w.minTranslate())
                                    return
                            } else if (w.touches.currentY < w.touches.startY && w.translate <= w.maxTranslate() || w.touches.currentY > w.touches.startY && w.translate >= w.minTranslate())
                                return;
                        if (R && document.activeElement && e.target === document.activeElement && t(e.target).is(I))
                            return x = !0,
                            void (w.allowClick = !1);
                        if (S && w.emit("onTouchMove", w, e),
                        !(e.targetTouches && e.targetTouches.length > 1)) {
                            if (w.touches.currentX = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX,
                            w.touches.currentY = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY,
                            void 0 === P) {
                                var i;
                                w.isHorizontal() && w.touches.currentY === w.touches.startY || !w.isHorizontal() && w.touches.currentX === w.touches.startX ? P = !1 : (i = 180 * Math.atan2(Math.abs(w.touches.currentY - w.touches.startY), Math.abs(w.touches.currentX - w.touches.startX)) / Math.PI,
                                P = w.isHorizontal() ? i > w.params.touchAngle : 90 - i > w.params.touchAngle)
                            }
                            if (P && w.emit("onTouchMoveOpposite", w, e),
                            void 0 === D && (w.touches.currentX === w.touches.startX && w.touches.currentY === w.touches.startY || (D = !0)),
                            b)
                                if (P)
                                    b = !1;
                                else if (D) {
                                    w.allowClick = !1,
                                    w.emit("onSliderMove", w, e),
                                    e.preventDefault(),
                                    w.params.touchMoveStopPropagation && !w.params.nested && e.stopPropagation(),
                                    x || (n.loop && w.fixLoop(),
                                    k = w.getWrapperTranslate(),
                                    w.setWrapperTransition(0),
                                    w.animating && w.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"),
                                    w.params.autoplay && w.autoplaying && (w.params.autoplayDisableOnInteraction ? w.stopAutoplay() : w.pauseAutoplay()),
                                    L = !1,
                                    !w.params.grabCursor || !0 !== w.params.allowSwipeToNext && !0 !== w.params.allowSwipeToPrev || w.setGrabCursor(!0)),
                                    x = !0;
                                    var r = w.touches.diff = w.isHorizontal() ? w.touches.currentX - w.touches.startX : w.touches.currentY - w.touches.startY;
                                    r *= w.params.touchRatio,
                                    w.rtl && (r = -r),
                                    w.swipeDirection = r > 0 ? "prev" : "next",
                                    E = r + k;
                                    var s = !0;
                                    if (r > 0 && E > w.minTranslate() ? (s = !1,
                                    w.params.resistance && (E = w.minTranslate() - 1 + Math.pow(-w.minTranslate() + k + r, w.params.resistanceRatio))) : r < 0 && E < w.maxTranslate() && (s = !1,
                                    w.params.resistance && (E = w.maxTranslate() + 1 - Math.pow(w.maxTranslate() - k - r, w.params.resistanceRatio))),
                                    s && (e.preventedByNestedSwiper = !0),
                                    !w.params.allowSwipeToNext && "next" === w.swipeDirection && E < k && (E = k),
                                    !w.params.allowSwipeToPrev && "prev" === w.swipeDirection && E > k && (E = k),
                                    w.params.threshold > 0) {
                                        if (!(Math.abs(r) > w.params.threshold || A))
                                            return void (E = k);
                                        if (!A)
                                            return A = !0,
                                            w.touches.startX = w.touches.currentX,
                                            w.touches.startY = w.touches.currentY,
                                            E = k,
                                            void (w.touches.diff = w.isHorizontal() ? w.touches.currentX - w.touches.startX : w.touches.currentY - w.touches.startY)
                                    }
                                    w.params.followFinger && ((w.params.freeMode || w.params.watchSlidesProgress) && w.updateActiveIndex(),
                                    w.params.freeMode && (0 === z.length && z.push({
                                        position: w.touches[w.isHorizontal() ? "startX" : "startY"],
                                        time: C
                                    }),
                                    z.push({
                                        position: w.touches[w.isHorizontal() ? "currentX" : "currentY"],
                                        time: (new window.Date).getTime()
                                    })),
                                    w.updateProgress(E),
                                    w.setWrapperTranslate(E))
                                }
                        }
                    }
                }
                ,
                w.onTouchEnd = function(e) {
                    if (e.originalEvent && (e = e.originalEvent),
                    S && w.emit("onTouchEnd", w, e),
                    S = !1,
                    b) {
                        w.params.grabCursor && x && b && (!0 === w.params.allowSwipeToNext || !0 === w.params.allowSwipeToPrev) && w.setGrabCursor(!1);
                        var i = Date.now()
                          , r = i - C;
                        if (w.allowClick && (w.updateClickedSlide(e),
                        w.emit("onTap", w, e),
                        r < 300 && i - O > 300 && (M && clearTimeout(M),
                        M = setTimeout(function() {
                            w && (w.params.paginationHide && w.paginationContainer.length > 0 && !t(e.target).hasClass(w.params.bulletClass) && w.paginationContainer.toggleClass(w.params.paginationHiddenClass),
                            w.emit("onClick", w, e))
                        }, 300)),
                        r < 300 && i - O < 300 && (M && clearTimeout(M),
                        w.emit("onDoubleTap", w, e))),
                        O = Date.now(),
                        setTimeout(function() {
                            w && (w.allowClick = !0)
                        }, 0),
                        b && x && w.swipeDirection && 0 !== w.touches.diff && E !== k) {
                            b = x = !1;
                            var n;
                            if (n = w.params.followFinger ? w.rtl ? w.translate : -w.translate : -E,
                            w.params.freeMode) {
                                if (n < -w.minTranslate())
                                    return void w.slideTo(w.activeIndex);
                                if (n > -w.maxTranslate())
                                    return void (w.slides.length < w.snapGrid.length ? w.slideTo(w.snapGrid.length - 1) : w.slideTo(w.slides.length - 1));
                                if (w.params.freeModeMomentum) {
                                    if (z.length > 1) {
                                        var s = z.pop()
                                          , a = z.pop()
                                          , o = s.position - a.position
                                          , l = s.time - a.time;
                                        w.velocity = o / l,
                                        w.velocity = w.velocity / 2,
                                        Math.abs(w.velocity) < w.params.freeModeMinimumVelocity && (w.velocity = 0),
                                        (l > 150 || (new window.Date).getTime() - s.time > 300) && (w.velocity = 0)
                                    } else
                                        w.velocity = 0;
                                    w.velocity = w.velocity * w.params.freeModeMomentumVelocityRatio,
                                    z.length = 0;
                                    var u = 1e3 * w.params.freeModeMomentumRatio
                                      , c = w.velocity * u
                                      , h = w.translate + c;
                                    w.rtl && (h = -h);
                                    var d, p = !1, f = 20 * Math.abs(w.velocity) * w.params.freeModeMomentumBounceRatio;
                                    if (h < w.maxTranslate())
                                        w.params.freeModeMomentumBounce ? (h + w.maxTranslate() < -f && (h = w.maxTranslate() - f),
                                        d = w.maxTranslate(),
                                        p = !0,
                                        L = !0) : h = w.maxTranslate();
                                    else if (h > w.minTranslate())
                                        w.params.freeModeMomentumBounce ? (h - w.minTranslate() > f && (h = w.minTranslate() + f),
                                        d = w.minTranslate(),
                                        p = !0,
                                        L = !0) : h = w.minTranslate();
                                    else if (w.params.freeModeSticky) {
                                        var m, g = 0;
                                        for (g = 0; g < w.snapGrid.length; g += 1)
                                            if (w.snapGrid[g] > -h) {
                                                m = g;
                                                break
                                            }
                                        h = Math.abs(w.snapGrid[m] - h) < Math.abs(w.snapGrid[m - 1] - h) || "next" === w.swipeDirection ? w.snapGrid[m] : w.snapGrid[m - 1],
                                        w.rtl || (h = -h)
                                    }
                                    if (0 !== w.velocity)
                                        u = w.rtl ? Math.abs((-h - w.translate) / w.velocity) : Math.abs((h - w.translate) / w.velocity);
                                    else if (w.params.freeModeSticky)
                                        return void w.slideReset();
                                    w.params.freeModeMomentumBounce && p ? (w.updateProgress(d),
                                    w.setWrapperTransition(u),
                                    w.setWrapperTranslate(h),
                                    w.onTransitionStart(),
                                    w.animating = !0,
                                    w.wrapper.transitionEnd(function() {
                                        w && L && (w.emit("onMomentumBounce", w),
                                        w.setWrapperTransition(w.params.speed),
                                        w.setWrapperTranslate(d),
                                        w.wrapper.transitionEnd(function() {
                                            w && w.onTransitionEnd()
                                        }))
                                    })) : w.velocity ? (w.updateProgress(h),
                                    w.setWrapperTransition(u),
                                    w.setWrapperTranslate(h),
                                    w.onTransitionStart(),
                                    w.animating || (w.animating = !0,
                                    w.wrapper.transitionEnd(function() {
                                        w && w.onTransitionEnd()
                                    }))) : w.updateProgress(h),
                                    w.updateActiveIndex()
                                }
                                (!w.params.freeModeMomentum || r >= w.params.longSwipesMs) && (w.updateProgress(),
                                w.updateActiveIndex())
                            } else {
                                var v, y = 0, _ = w.slidesSizesGrid[0];
                                for (v = 0; v < w.slidesGrid.length; v += w.params.slidesPerGroup)
                                    void 0 !== w.slidesGrid[v + w.params.slidesPerGroup] ? n >= w.slidesGrid[v] && n < w.slidesGrid[v + w.params.slidesPerGroup] && (y = v,
                                    _ = w.slidesGrid[v + w.params.slidesPerGroup] - w.slidesGrid[v]) : n >= w.slidesGrid[v] && (y = v,
                                    _ = w.slidesGrid[w.slidesGrid.length - 1] - w.slidesGrid[w.slidesGrid.length - 2]);
                                var T = (n - w.slidesGrid[y]) / _;
                                if (r > w.params.longSwipesMs) {
                                    if (!w.params.longSwipes)
                                        return void w.slideTo(w.activeIndex);
                                    "next" === w.swipeDirection && (T >= w.params.longSwipesRatio ? w.slideTo(y + w.params.slidesPerGroup) : w.slideTo(y)),
                                    "prev" === w.swipeDirection && (T > 1 - w.params.longSwipesRatio ? w.slideTo(y + w.params.slidesPerGroup) : w.slideTo(y))
                                } else {
                                    if (!w.params.shortSwipes)
                                        return void w.slideTo(w.activeIndex);
                                    "next" === w.swipeDirection && w.slideTo(y + w.params.slidesPerGroup),
                                    "prev" === w.swipeDirection && w.slideTo(y)
                                }
                            }
                        } else
                            b = x = !1
                    }
                }
                ,
                w._slideTo = function(t, e) {
                    return w.slideTo(t, e, !0, !0)
                }
                ,
                w.slideTo = function(t, e, i, r) {
                    void 0 === i && (i = !0),
                    void 0 === t && (t = 0),
                    t < 0 && (t = 0),
                    w.snapIndex = Math.floor(t / w.params.slidesPerGroup),
                    w.snapIndex >= w.snapGrid.length && (w.snapIndex = w.snapGrid.length - 1);
                    var n = -w.snapGrid[w.snapIndex];
                    if (w.params.autoplay && w.autoplaying && (r || !w.params.autoplayDisableOnInteraction ? w.pauseAutoplay(e) : w.stopAutoplay()),
                    w.updateProgress(n),
                    w.params.normalizeSlideIndex)
                        for (var s = 0; s < w.slidesGrid.length; s++)
                            -Math.floor(100 * n) >= Math.floor(100 * w.slidesGrid[s]) && (t = s);
                    return !(!w.params.allowSwipeToNext && n < w.translate && n < w.minTranslate()) && (!(!w.params.allowSwipeToPrev && n > w.translate && n > w.maxTranslate() && (w.activeIndex || 0) !== t) && (void 0 === e && (e = w.params.speed),
                    w.previousIndex = w.activeIndex || 0,
                    w.activeIndex = t,
                    w.updateRealIndex(),
                    w.rtl && -n === w.translate || !w.rtl && n === w.translate ? (w.params.autoHeight && w.updateAutoHeight(),
                    w.updateClasses(),
                    "slide" !== w.params.effect && w.setWrapperTranslate(n),
                    !1) : (w.updateClasses(),
                    w.onTransitionStart(i),
                    0 === e || w.browser.lteIE9 ? (w.setWrapperTranslate(n),
                    w.setWrapperTransition(0),
                    w.onTransitionEnd(i)) : (w.setWrapperTranslate(n),
                    w.setWrapperTransition(e),
                    w.animating || (w.animating = !0,
                    w.wrapper.transitionEnd(function() {
                        w && w.onTransitionEnd(i)
                    }))),
                    !0)))
                }
                ,
                w.onTransitionStart = function(t) {
                    void 0 === t && (t = !0),
                    w.params.autoHeight && w.updateAutoHeight(),
                    w.lazy && w.lazy.onTransitionStart(),
                    t && (w.emit("onTransitionStart", w),
                    w.activeIndex !== w.previousIndex && (w.emit("onSlideChangeStart", w),
                    w.activeIndex > w.previousIndex ? w.emit("onSlideNextStart", w) : w.emit("onSlidePrevStart", w)))
                }
                ,
                w.onTransitionEnd = function(t) {
                    w.animating = !1,
                    w.setWrapperTransition(0),
                    void 0 === t && (t = !0),
                    w.lazy && w.lazy.onTransitionEnd(),
                    t && (w.emit("onTransitionEnd", w),
                    w.activeIndex !== w.previousIndex && (w.emit("onSlideChangeEnd", w),
                    w.activeIndex > w.previousIndex ? w.emit("onSlideNextEnd", w) : w.emit("onSlidePrevEnd", w))),
                    w.params.history && w.history && w.history.setHistory(w.params.history, w.activeIndex),
                    w.params.hashnav && w.hashnav && w.hashnav.setHash()
                }
                ,
                w.slideNext = function(t, e, i) {
                    if (w.params.loop) {
                        if (w.animating)
                            return !1;
                        w.fixLoop();
                        w.container[0].clientLeft;
                        return w.slideTo(w.activeIndex + w.params.slidesPerGroup, e, t, i)
                    }
                    return w.slideTo(w.activeIndex + w.params.slidesPerGroup, e, t, i)
                }
                ,
                w._slideNext = function(t) {
                    return w.slideNext(!0, t, !0)
                }
                ,
                w.slidePrev = function(t, e, i) {
                    if (w.params.loop) {
                        if (w.animating)
                            return !1;
                        w.fixLoop();
                        w.container[0].clientLeft;
                        return w.slideTo(w.activeIndex - 1, e, t, i)
                    }
                    return w.slideTo(w.activeIndex - 1, e, t, i)
                }
                ,
                w._slidePrev = function(t) {
                    return w.slidePrev(!0, t, !0)
                }
                ,
                w.slideReset = function(t, e, i) {
                    return w.slideTo(w.activeIndex, e, t)
                }
                ,
                w.disableTouchControl = function() {
                    return w.params.onlyExternal = !0,
                    !0
                }
                ,
                w.enableTouchControl = function() {
                    return w.params.onlyExternal = !1,
                    !0
                }
                ,
                w.setWrapperTransition = function(t, e) {
                    w.wrapper.transition(t),
                    "slide" !== w.params.effect && w.effects[w.params.effect] && w.effects[w.params.effect].setTransition(t),
                    w.params.parallax && w.parallax && w.parallax.setTransition(t),
                    w.params.scrollbar && w.scrollbar && w.scrollbar.setTransition(t),
                    w.params.control && w.controller && w.controller.setTransition(t, e),
                    w.emit("onSetTransition", w, t)
                }
                ,
                w.setWrapperTranslate = function(t, e, i) {
                    var r = 0
                      , n = 0;
                    w.isHorizontal() ? r = w.rtl ? -t : t : n = t,
                    w.params.roundLengths && (r = s(r),
                    n = s(n)),
                    w.params.virtualTranslate || (w.support.transforms3d ? w.wrapper.transform("translate3d(" + r + "px, " + n + "px, 0px)") : w.wrapper.transform("translate(" + r + "px, " + n + "px)")),
                    w.translate = w.isHorizontal() ? r : n;
                    var a = w.maxTranslate() - w.minTranslate();
                    (0 === a ? 0 : (t - w.minTranslate()) / a) !== w.progress && w.updateProgress(t),
                    e && w.updateActiveIndex(),
                    "slide" !== w.params.effect && w.effects[w.params.effect] && w.effects[w.params.effect].setTranslate(w.translate),
                    w.params.parallax && w.parallax && w.parallax.setTranslate(w.translate),
                    w.params.scrollbar && w.scrollbar && w.scrollbar.setTranslate(w.translate),
                    w.params.control && w.controller && w.controller.setTranslate(w.translate, i),
                    w.emit("onSetTranslate", w, w.translate)
                }
                ,
                w.getTranslate = function(t, e) {
                    var i, r, n, s;
                    return void 0 === e && (e = "x"),
                    w.params.virtualTranslate ? w.rtl ? -w.translate : w.translate : (n = window.getComputedStyle(t, null),
                    window.WebKitCSSMatrix ? ((r = n.transform || n.webkitTransform).split(",").length > 6 && (r = r.split(", ").map(function(t) {
                        return t.replace(",", ".")
                    }).join(", ")),
                    s = new window.WebKitCSSMatrix("none" === r ? "" : r)) : i = (s = n.MozTransform || n.OTransform || n.MsTransform || n.msTransform || n.transform || n.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","),
                    "x" === e && (r = window.WebKitCSSMatrix ? s.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])),
                    "y" === e && (r = window.WebKitCSSMatrix ? s.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])),
                    w.rtl && r && (r = -r),
                    r || 0)
                }
                ,
                w.getWrapperTranslate = function(t) {
                    return void 0 === t && (t = w.isHorizontal() ? "x" : "y"),
                    w.getTranslate(w.wrapper[0], t)
                }
                ,
                w.observers = [],
                w.initObservers = function() {
                    if (w.params.observeParents)
                        for (var t = w.container.parents(), e = 0; e < t.length; e++)
                            l(t[e]);
                    l(w.container[0], {
                        childList: !1
                    }),
                    l(w.wrapper[0], {
                        attributes: !1
                    })
                }
                ,
                w.disconnectObservers = function() {
                    for (var t = 0; t < w.observers.length; t++)
                        w.observers[t].disconnect();
                    w.observers = []
                }
                ,
                w.createLoop = function() {
                    w.wrapper.children("." + w.params.slideClass + "." + w.params.slideDuplicateClass).remove();
                    var e = w.wrapper.children("." + w.params.slideClass);
                    "auto" !== w.params.slidesPerView || w.params.loopedSlides || (w.params.loopedSlides = e.length),
                    w.loopedSlides = parseInt(w.params.loopedSlides || w.params.slidesPerView, 10),
                    w.loopedSlides = w.loopedSlides + w.params.loopAdditionalSlides,
                    w.loopedSlides > e.length && (w.loopedSlides = e.length);
                    var i, r = [], n = [];
                    for (e.each(function(i, s) {
                        var a = t(this);
                        i < w.loopedSlides && n.push(s),
                        i < e.length && i >= e.length - w.loopedSlides && r.push(s),
                        a.attr("data-swiper-slide-index", i)
                    }),
                    i = 0; i < n.length; i++)
                        w.wrapper.append(t(n[i].cloneNode(!0)).addClass(w.params.slideDuplicateClass));
                    for (i = r.length - 1; i >= 0; i--)
                        w.wrapper.prepend(t(r[i].cloneNode(!0)).addClass(w.params.slideDuplicateClass))
                }
                ,
                w.destroyLoop = function() {
                    w.wrapper.children("." + w.params.slideClass + "." + w.params.slideDuplicateClass).remove(),
                    w.slides.removeAttr("data-swiper-slide-index")
                }
                ,
                w.reLoop = function(t) {
                    var e = w.activeIndex - w.loopedSlides;
                    w.destroyLoop(),
                    w.createLoop(),
                    w.updateSlidesSize(),
                    t && w.slideTo(e + w.loopedSlides, 0, !1)
                }
                ,
                w.fixLoop = function() {
                    var t;
                    w.activeIndex < w.loopedSlides ? (t = w.slides.length - 3 * w.loopedSlides + w.activeIndex,
                    t += w.loopedSlides,
                    w.slideTo(t, 0, !1, !0)) : ("auto" === w.params.slidesPerView && w.activeIndex >= 2 * w.loopedSlides || w.activeIndex > w.slides.length - 2 * w.params.slidesPerView) && (t = -w.slides.length + w.activeIndex + w.loopedSlides,
                    t += w.loopedSlides,
                    w.slideTo(t, 0, !1, !0))
                }
                ,
                w.appendSlide = function(t) {
                    if (w.params.loop && w.destroyLoop(),
                    "object" == typeof t && t.length)
                        for (var e = 0; e < t.length; e++)
                            t[e] && w.wrapper.append(t[e]);
                    else
                        w.wrapper.append(t);
                    w.params.loop && w.createLoop(),
                    w.params.observer && w.support.observer || w.update(!0)
                }
                ,
                w.prependSlide = function(t) {
                    w.params.loop && w.destroyLoop();
                    var e = w.activeIndex + 1;
                    if ("object" == typeof t && t.length) {
                        for (var i = 0; i < t.length; i++)
                            t[i] && w.wrapper.prepend(t[i]);
                        e = w.activeIndex + t.length
                    } else
                        w.wrapper.prepend(t);
                    w.params.loop && w.createLoop(),
                    w.params.observer && w.support.observer || w.update(!0),
                    w.slideTo(e, 0, !1)
                }
                ,
                w.removeSlide = function(t) {
                    w.params.loop && (w.destroyLoop(),
                    w.slides = w.wrapper.children("." + w.params.slideClass));
                    var e, i = w.activeIndex;
                    if ("object" == typeof t && t.length) {
                        for (var r = 0; r < t.length; r++)
                            e = t[r],
                            w.slides[e] && w.slides.eq(e).remove(),
                            e < i && i--;
                        i = Math.max(i, 0)
                    } else
                        e = t,
                        w.slides[e] && w.slides.eq(e).remove(),
                        e < i && i--,
                        i = Math.max(i, 0);
                    w.params.loop && w.createLoop(),
                    w.params.observer && w.support.observer || w.update(!0),
                    w.params.loop ? w.slideTo(i + w.loopedSlides, 0, !1) : w.slideTo(i, 0, !1)
                }
                ,
                w.removeAllSlides = function() {
                    for (var t = [], e = 0; e < w.slides.length; e++)
                        t.push(e);
                    w.removeSlide(t)
                }
                ,
                w.effects = {
                    fade: {
                        setTranslate: function() {
                            for (var t = 0; t < w.slides.length; t++) {
                                var e = w.slides.eq(t)
                                  , i = -e[0].swiperSlideOffset;
                                w.params.virtualTranslate || (i -= w.translate);
                                var r = 0;
                                w.isHorizontal() || (r = i,
                                i = 0);
                                var n = w.params.fade.crossFade ? Math.max(1 - Math.abs(e[0].progress), 0) : 1 + Math.min(Math.max(e[0].progress, -1), 0);
                                e.css({
                                    opacity: n
                                }).transform("translate3d(" + i + "px, " + r + "px, 0px)")
                            }
                        },
                        setTransition: function(t) {
                            if (w.slides.transition(t),
                            w.params.virtualTranslate && 0 !== t) {
                                var e = !1;
                                w.slides.transitionEnd(function() {
                                    if (!e && w) {
                                        e = !0,
                                        w.animating = !1;
                                        for (var t = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], i = 0; i < t.length; i++)
                                            w.wrapper.trigger(t[i])
                                    }
                                })
                            }
                        }
                    },
                    flip: {
                        setTranslate: function() {
                            for (var e = 0; e < w.slides.length; e++) {
                                var i = w.slides.eq(e)
                                  , r = i[0].progress;
                                w.params.flip.limitRotation && (r = Math.max(Math.min(i[0].progress, 1), -1));
                                var n = -180 * r
                                  , s = 0
                                  , a = -i[0].swiperSlideOffset
                                  , o = 0;
                                if (w.isHorizontal() ? w.rtl && (n = -n) : (o = a,
                                a = 0,
                                s = -n,
                                n = 0),
                                i[0].style.zIndex = -Math.abs(Math.round(r)) + w.slides.length,
                                w.params.flip.slideShadows) {
                                    var l = w.isHorizontal() ? i.find(".swiper-slide-shadow-left") : i.find(".swiper-slide-shadow-top")
                                      , u = w.isHorizontal() ? i.find(".swiper-slide-shadow-right") : i.find(".swiper-slide-shadow-bottom");
                                    0 === l.length && (l = t('<div class="swiper-slide-shadow-' + (w.isHorizontal() ? "left" : "top") + '"></div>'),
                                    i.append(l)),
                                    0 === u.length && (u = t('<div class="swiper-slide-shadow-' + (w.isHorizontal() ? "right" : "bottom") + '"></div>'),
                                    i.append(u)),
                                    l.length && (l[0].style.opacity = Math.max(-r, 0)),
                                    u.length && (u[0].style.opacity = Math.max(r, 0))
                                }
                                i.transform("translate3d(" + a + "px, " + o + "px, 0px) rotateX(" + s + "deg) rotateY(" + n + "deg)")
                            }
                        },
                        setTransition: function(e) {
                            if (w.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),
                            w.params.virtualTranslate && 0 !== e) {
                                var i = !1;
                                w.slides.eq(w.activeIndex).transitionEnd(function() {
                                    if (!i && w && t(this).hasClass(w.params.slideActiveClass)) {
                                        i = !0,
                                        w.animating = !1;
                                        for (var e = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], r = 0; r < e.length; r++)
                                            w.wrapper.trigger(e[r])
                                    }
                                })
                            }
                        }
                    },
                    cube: {
                        setTranslate: function() {
                            var e, i = 0;
                            w.params.cube.shadow && (w.isHorizontal() ? (0 === (e = w.wrapper.find(".swiper-cube-shadow")).length && (e = t('<div class="swiper-cube-shadow"></div>'),
                            w.wrapper.append(e)),
                            e.css({
                                height: w.width + "px"
                            })) : 0 === (e = w.container.find(".swiper-cube-shadow")).length && (e = t('<div class="swiper-cube-shadow"></div>'),
                            w.container.append(e)));
                            for (var r = 0; r < w.slides.length; r++) {
                                var n = w.slides.eq(r)
                                  , s = 90 * r
                                  , a = Math.floor(s / 360);
                                w.rtl && (s = -s,
                                a = Math.floor(-s / 360));
                                var o = Math.max(Math.min(n[0].progress, 1), -1)
                                  , l = 0
                                  , u = 0
                                  , c = 0;
                                r % 4 == 0 ? (l = 4 * -a * w.size,
                                c = 0) : (r - 1) % 4 == 0 ? (l = 0,
                                c = 4 * -a * w.size) : (r - 2) % 4 == 0 ? (l = w.size + 4 * a * w.size,
                                c = w.size) : (r - 3) % 4 == 0 && (l = -w.size,
                                c = 3 * w.size + 4 * w.size * a),
                                w.rtl && (l = -l),
                                w.isHorizontal() || (u = l,
                                l = 0);
                                var h = "rotateX(" + (w.isHorizontal() ? 0 : -s) + "deg) rotateY(" + (w.isHorizontal() ? s : 0) + "deg) translate3d(" + l + "px, " + u + "px, " + c + "px)";
                                if (o <= 1 && o > -1 && (i = 90 * r + 90 * o,
                                w.rtl && (i = 90 * -r - 90 * o)),
                                n.transform(h),
                                w.params.cube.slideShadows) {
                                    var d = w.isHorizontal() ? n.find(".swiper-slide-shadow-left") : n.find(".swiper-slide-shadow-top")
                                      , p = w.isHorizontal() ? n.find(".swiper-slide-shadow-right") : n.find(".swiper-slide-shadow-bottom");
                                    0 === d.length && (d = t('<div class="swiper-slide-shadow-' + (w.isHorizontal() ? "left" : "top") + '"></div>'),
                                    n.append(d)),
                                    0 === p.length && (p = t('<div class="swiper-slide-shadow-' + (w.isHorizontal() ? "right" : "bottom") + '"></div>'),
                                    n.append(p)),
                                    d.length && (d[0].style.opacity = Math.max(-o, 0)),
                                    p.length && (p[0].style.opacity = Math.max(o, 0))
                                }
                            }
                            if (w.wrapper.css({
                                "-webkit-transform-origin": "50% 50% -" + w.size / 2 + "px",
                                "-moz-transform-origin": "50% 50% -" + w.size / 2 + "px",
                                "-ms-transform-origin": "50% 50% -" + w.size / 2 + "px",
                                "transform-origin": "50% 50% -" + w.size / 2 + "px"
                            }),
                            w.params.cube.shadow)
                                if (w.isHorizontal())
                                    e.transform("translate3d(0px, " + (w.width / 2 + w.params.cube.shadowOffset) + "px, " + -w.width / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + w.params.cube.shadowScale + ")");
                                else {
                                    var f = Math.abs(i) - 90 * Math.floor(Math.abs(i) / 90)
                                      , m = 1.5 - (Math.sin(2 * f * Math.PI / 360) / 2 + Math.cos(2 * f * Math.PI / 360) / 2)
                                      , g = w.params.cube.shadowScale
                                      , v = w.params.cube.shadowScale / m
                                      , y = w.params.cube.shadowOffset;
                                    e.transform("scale3d(" + g + ", 1, " + v + ") translate3d(0px, " + (w.height / 2 + y) + "px, " + -w.height / 2 / v + "px) rotateX(-90deg)")
                                }
                            var _ = w.isSafari || w.isUiWebView ? -w.size / 2 : 0;
                            w.wrapper.transform("translate3d(0px,0," + _ + "px) rotateX(" + (w.isHorizontal() ? 0 : i) + "deg) rotateY(" + (w.isHorizontal() ? -i : 0) + "deg)")
                        },
                        setTransition: function(t) {
                            w.slides.transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t),
                            w.params.cube.shadow && !w.isHorizontal() && w.container.find(".swiper-cube-shadow").transition(t)
                        }
                    },
                    coverflow: {
                        setTranslate: function() {
                            for (var e = w.translate, i = w.isHorizontal() ? -e + w.width / 2 : -e + w.height / 2, r = w.isHorizontal() ? w.params.coverflow.rotate : -w.params.coverflow.rotate, n = w.params.coverflow.depth, s = 0, a = w.slides.length; s < a; s++) {
                                var o = w.slides.eq(s)
                                  , l = w.slidesSizesGrid[s]
                                  , u = (i - o[0].swiperSlideOffset - l / 2) / l * w.params.coverflow.modifier
                                  , c = w.isHorizontal() ? r * u : 0
                                  , h = w.isHorizontal() ? 0 : r * u
                                  , d = -n * Math.abs(u)
                                  , p = w.isHorizontal() ? 0 : w.params.coverflow.stretch * u
                                  , f = w.isHorizontal() ? w.params.coverflow.stretch * u : 0;
                                Math.abs(f) < .001 && (f = 0),
                                Math.abs(p) < .001 && (p = 0),
                                Math.abs(d) < .001 && (d = 0),
                                Math.abs(c) < .001 && (c = 0),
                                Math.abs(h) < .001 && (h = 0);
                                var m = "translate3d(" + f + "px," + p + "px," + d + "px)  rotateX(" + h + "deg) rotateY(" + c + "deg)";
                                if (o.transform(m),
                                o[0].style.zIndex = 1 - Math.abs(Math.round(u)),
                                w.params.coverflow.slideShadows) {
                                    var g = w.isHorizontal() ? o.find(".swiper-slide-shadow-left") : o.find(".swiper-slide-shadow-top")
                                      , v = w.isHorizontal() ? o.find(".swiper-slide-shadow-right") : o.find(".swiper-slide-shadow-bottom");
                                    0 === g.length && (g = t('<div class="swiper-slide-shadow-' + (w.isHorizontal() ? "left" : "top") + '"></div>'),
                                    o.append(g)),
                                    0 === v.length && (v = t('<div class="swiper-slide-shadow-' + (w.isHorizontal() ? "right" : "bottom") + '"></div>'),
                                    o.append(v)),
                                    g.length && (g[0].style.opacity = u > 0 ? u : 0),
                                    v.length && (v[0].style.opacity = -u > 0 ? -u : 0)
                                }
                            }
                            if (w.browser.ie) {
                                w.wrapper[0].style.perspectiveOrigin = i + "px 50%"
                            }
                        },
                        setTransition: function(t) {
                            w.slides.transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t)
                        }
                    }
                },
                w.lazy = {
                    initialImageLoaded: !1,
                    loadImageInSlide: function(e, i) {
                        if (void 0 !== e && (void 0 === i && (i = !0),
                        0 !== w.slides.length)) {
                            var r = w.slides.eq(e)
                              , n = r.find("." + w.params.lazyLoadingClass + ":not(." + w.params.lazyStatusLoadedClass + "):not(." + w.params.lazyStatusLoadingClass + ")");
                            !r.hasClass(w.params.lazyLoadingClass) || r.hasClass(w.params.lazyStatusLoadedClass) || r.hasClass(w.params.lazyStatusLoadingClass) || (n = n.add(r[0])),
                            0 !== n.length && n.each(function() {
                                var e = t(this);
                                e.addClass(w.params.lazyStatusLoadingClass);
                                var n = e.attr("data-background")
                                  , s = e.attr("data-src")
                                  , a = e.attr("data-srcset")
                                  , o = e.attr("data-sizes");
                                w.loadImage(e[0], s || n, a, o, !1, function() {
                                    if (void 0 !== w && null !== w && w) {
                                        if (n ? (e.css("background-image", 'url("' + n + '")'),
                                        e.removeAttr("data-background")) : (a && (e.attr("srcset", a),
                                        e.removeAttr("data-srcset")),
                                        o && (e.attr("sizes", o),
                                        e.removeAttr("data-sizes")),
                                        s && (e.attr("src", s),
                                        e.removeAttr("data-src"))),
                                        e.addClass(w.params.lazyStatusLoadedClass).removeClass(w.params.lazyStatusLoadingClass),
                                        r.find("." + w.params.lazyPreloaderClass + ", ." + w.params.preloaderClass).remove(),
                                        w.params.loop && i) {
                                            var t = r.attr("data-swiper-slide-index");
                                            if (r.hasClass(w.params.slideDuplicateClass)) {
                                                var l = w.wrapper.children('[data-swiper-slide-index="' + t + '"]:not(.' + w.params.slideDuplicateClass + ")");
                                                w.lazy.loadImageInSlide(l.index(), !1)
                                            } else {
                                                var u = w.wrapper.children("." + w.params.slideDuplicateClass + '[data-swiper-slide-index="' + t + '"]');
                                                w.lazy.loadImageInSlide(u.index(), !1)
                                            }
                                        }
                                        w.emit("onLazyImageReady", w, r[0], e[0])
                                    }
                                }),
                                w.emit("onLazyImageLoad", w, r[0], e[0])
                            })
                        }
                    },
                    load: function() {
                        var e, i = w.params.slidesPerView;
                        if ("auto" === i && (i = 0),
                        w.lazy.initialImageLoaded || (w.lazy.initialImageLoaded = !0),
                        w.params.watchSlidesVisibility)
                            w.wrapper.children("." + w.params.slideVisibleClass).each(function() {
                                w.lazy.loadImageInSlide(t(this).index())
                            });
                        else if (i > 1)
                            for (e = w.activeIndex; e < w.activeIndex + i; e++)
                                w.slides[e] && w.lazy.loadImageInSlide(e);
                        else
                            w.lazy.loadImageInSlide(w.activeIndex);
                        if (w.params.lazyLoadingInPrevNext)
                            if (i > 1 || w.params.lazyLoadingInPrevNextAmount && w.params.lazyLoadingInPrevNextAmount > 1) {
                                var r = w.params.lazyLoadingInPrevNextAmount
                                  , n = i
                                  , s = Math.min(w.activeIndex + n + Math.max(r, n), w.slides.length)
                                  , a = Math.max(w.activeIndex - Math.max(n, r), 0);
                                for (e = w.activeIndex + i; e < s; e++)
                                    w.slides[e] && w.lazy.loadImageInSlide(e);
                                for (e = a; e < w.activeIndex; e++)
                                    w.slides[e] && w.lazy.loadImageInSlide(e)
                            } else {
                                var o = w.wrapper.children("." + w.params.slideNextClass);
                                o.length > 0 && w.lazy.loadImageInSlide(o.index());
                                var l = w.wrapper.children("." + w.params.slidePrevClass);
                                l.length > 0 && w.lazy.loadImageInSlide(l.index())
                            }
                    },
                    onTransitionStart: function() {
                        w.params.lazyLoading && (w.params.lazyLoadingOnTransitionStart || !w.params.lazyLoadingOnTransitionStart && !w.lazy.initialImageLoaded) && w.lazy.load()
                    },
                    onTransitionEnd: function() {
                        w.params.lazyLoading && !w.params.lazyLoadingOnTransitionStart && w.lazy.load()
                    }
                },
                w.scrollbar = {
                    isTouched: !1,
                    setDragPosition: function(t) {
                        var e = w.scrollbar
                          , i = (w.isHorizontal() ? "touchstart" === t.type || "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX || t.clientX : "touchstart" === t.type || "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY || t.clientY) - e.track.offset()[w.isHorizontal() ? "left" : "top"] - e.dragSize / 2
                          , r = -w.minTranslate() * e.moveDivider
                          , n = -w.maxTranslate() * e.moveDivider;
                        i < r ? i = r : i > n && (i = n),
                        i = -i / e.moveDivider,
                        w.updateProgress(i),
                        w.setWrapperTranslate(i, !0)
                    },
                    dragStart: function(t) {
                        var e = w.scrollbar;
                        e.isTouched = !0,
                        t.preventDefault(),
                        t.stopPropagation(),
                        e.setDragPosition(t),
                        clearTimeout(e.dragTimeout),
                        e.track.transition(0),
                        w.params.scrollbarHide && e.track.css("opacity", 1),
                        w.wrapper.transition(100),
                        e.drag.transition(100),
                        w.emit("onScrollbarDragStart", w)
                    },
                    dragMove: function(t) {
                        var e = w.scrollbar;
                        e.isTouched && (t.preventDefault ? t.preventDefault() : t.returnValue = !1,
                        e.setDragPosition(t),
                        w.wrapper.transition(0),
                        e.track.transition(0),
                        e.drag.transition(0),
                        w.emit("onScrollbarDragMove", w))
                    },
                    dragEnd: function(t) {
                        var e = w.scrollbar;
                        e.isTouched && (e.isTouched = !1,
                        w.params.scrollbarHide && (clearTimeout(e.dragTimeout),
                        e.dragTimeout = setTimeout(function() {
                            e.track.css("opacity", 0),
                            e.track.transition(400)
                        }, 1e3)),
                        w.emit("onScrollbarDragEnd", w),
                        w.params.scrollbarSnapOnRelease && w.slideReset())
                    },
                    draggableEvents: !1 !== w.params.simulateTouch || w.support.touch ? w.touchEvents : w.touchEventsDesktop,
                    enableDraggable: function() {
                        var e = w.scrollbar
                          , i = w.support.touch ? e.track : document;
                        t(e.track).on(e.draggableEvents.start, e.dragStart),
                        t(i).on(e.draggableEvents.move, e.dragMove),
                        t(i).on(e.draggableEvents.end, e.dragEnd)
                    },
                    disableDraggable: function() {
                        var e = w.scrollbar
                          , i = w.support.touch ? e.track : document;
                        t(e.track).off(e.draggableEvents.start, e.dragStart),
                        t(i).off(e.draggableEvents.move, e.dragMove),
                        t(i).off(e.draggableEvents.end, e.dragEnd)
                    },
                    set: function() {
                        if (w.params.scrollbar) {
                            var e = w.scrollbar;
                            e.track = t(w.params.scrollbar),
                            w.params.uniqueNavElements && "string" == typeof w.params.scrollbar && e.track.length > 1 && 1 === w.container.find(w.params.scrollbar).length && (e.track = w.container.find(w.params.scrollbar)),
                            e.drag = e.track.find(".swiper-scrollbar-drag"),
                            0 === e.drag.length && (e.drag = t('<div class="swiper-scrollbar-drag"></div>'),
                            e.track.append(e.drag)),
                            e.drag[0].style.width = "",
                            e.drag[0].style.height = "",
                            e.trackSize = w.isHorizontal() ? e.track[0].offsetWidth : e.track[0].offsetHeight,
                            e.divider = w.size / w.virtualSize,
                            e.moveDivider = e.divider * (e.trackSize / w.size),
                            e.dragSize = e.trackSize * e.divider,
                            w.isHorizontal() ? e.drag[0].style.width = e.dragSize + "px" : e.drag[0].style.height = e.dragSize + "px",
                            e.divider >= 1 ? e.track[0].style.display = "none" : e.track[0].style.display = "",
                            w.params.scrollbarHide && (e.track[0].style.opacity = 0)
                        }
                    },
                    setTranslate: function() {
                        if (w.params.scrollbar) {
                            var t, e = w.scrollbar, i = (w.translate,
                            e.dragSize);
                            t = (e.trackSize - e.dragSize) * w.progress,
                            w.rtl && w.isHorizontal() ? (t = -t) > 0 ? (i = e.dragSize - t,
                            t = 0) : -t + e.dragSize > e.trackSize && (i = e.trackSize + t) : t < 0 ? (i = e.dragSize + t,
                            t = 0) : t + e.dragSize > e.trackSize && (i = e.trackSize - t),
                            w.isHorizontal() ? (w.support.transforms3d ? e.drag.transform("translate3d(" + t + "px, 0, 0)") : e.drag.transform("translateX(" + t + "px)"),
                            e.drag[0].style.width = i + "px") : (w.support.transforms3d ? e.drag.transform("translate3d(0px, " + t + "px, 0)") : e.drag.transform("translateY(" + t + "px)"),
                            e.drag[0].style.height = i + "px"),
                            w.params.scrollbarHide && (clearTimeout(e.timeout),
                            e.track[0].style.opacity = 1,
                            e.timeout = setTimeout(function() {
                                e.track[0].style.opacity = 0,
                                e.track.transition(400)
                            }, 1e3))
                        }
                    },
                    setTransition: function(t) {
                        w.params.scrollbar && w.scrollbar.drag.transition(t)
                    }
                },
                w.controller = {
                    LinearSpline: function(t, e) {
                        var i = function() {
                            var t, e, i;
                            return function(r, n) {
                                for (e = -1,
                                t = r.length; t - e > 1; )
                                    r[i = t + e >> 1] <= n ? e = i : t = i;
                                return t
                            }
                        }();
                        this.x = t,
                        this.y = e,
                        this.lastIndex = t.length - 1;
                        var r, n;
                        this.x.length;
                        this.interpolate = function(t) {
                            return t ? (n = i(this.x, t),
                            r = n - 1,
                            (t - this.x[r]) * (this.y[n] - this.y[r]) / (this.x[n] - this.x[r]) + this.y[r]) : 0
                        }
                    },
                    getInterpolateFunction: function(t) {
                        w.controller.spline || (w.controller.spline = w.params.loop ? new w.controller.LinearSpline(w.slidesGrid,t.slidesGrid) : new w.controller.LinearSpline(w.snapGrid,t.snapGrid))
                    },
                    setTranslate: function(t, i) {
                        function r(e) {
                            t = e.rtl && "horizontal" === e.params.direction ? -w.translate : w.translate,
                            "slide" === w.params.controlBy && (w.controller.getInterpolateFunction(e),
                            s = -w.controller.spline.interpolate(-t)),
                            s && "container" !== w.params.controlBy || (n = (e.maxTranslate() - e.minTranslate()) / (w.maxTranslate() - w.minTranslate()),
                            s = (t - w.minTranslate()) * n + e.minTranslate()),
                            w.params.controlInverse && (s = e.maxTranslate() - s),
                            e.updateProgress(s),
                            e.setWrapperTranslate(s, !1, w),
                            e.updateActiveIndex()
                        }
                        var n, s, a = w.params.control;
                        if (Array.isArray(a))
                            for (var o = 0; o < a.length; o++)
                                a[o] !== i && a[o]instanceof e && r(a[o]);
                        else
                            a instanceof e && i !== a && r(a)
                    },
                    setTransition: function(t, i) {
                        function r(e) {
                            e.setWrapperTransition(t, w),
                            0 !== t && (e.onTransitionStart(),
                            e.wrapper.transitionEnd(function() {
                                s && (e.params.loop && "slide" === w.params.controlBy && e.fixLoop(),
                                e.onTransitionEnd())
                            }))
                        }
                        var n, s = w.params.control;
                        if (Array.isArray(s))
                            for (n = 0; n < s.length; n++)
                                s[n] !== i && s[n]instanceof e && r(s[n]);
                        else
                            s instanceof e && i !== s && r(s)
                    }
                },
                w.hashnav = {
                    onHashCange: function(t, e) {
                        var i = document.location.hash.replace("#", "");
                        i !== w.slides.eq(w.activeIndex).attr("data-hash") && w.slideTo(w.wrapper.children("." + w.params.slideClass + '[data-hash="' + i + '"]').index())
                    },
                    attachEvents: function(e) {
                        var i = e ? "off" : "on";
                        t(window)[i]("hashchange", w.hashnav.onHashCange)
                    },
                    setHash: function() {
                        if (w.hashnav.initialized && w.params.hashnav)
                            if (w.params.replaceState && window.history && window.history.replaceState)
                                window.history.replaceState(null, null, "" + "" || "");
                            else {
                                var t = w.slides.eq(w.activeIndex)
                                  , e = t.attr("data-hash") || t.attr("data-history");
                                document.location.hash = e || ""
                            }
                    },
                    init: function() {
                        if (w.params.hashnav && !w.params.history) {
                            w.hashnav.initialized = !0;
                            var t = document.location.hash.replace("#", "");
                            if (t)
                                for (var e = 0, i = w.slides.length; e < i; e++) {
                                    var r = w.slides.eq(e);
                                    if ((r.attr("data-hash") || r.attr("data-history")) === t && !r.hasClass(w.params.slideDuplicateClass)) {
                                        var n = r.index();
                                        w.slideTo(n, 0, w.params.runCallbacksOnInit, !0)
                                    }
                                }
                            w.params.hashnavWatchState && w.hashnav.attachEvents()
                        }
                    },
                    destroy: function() {
                        w.params.hashnavWatchState && w.hashnav.attachEvents(!0)
                    }
                },
                w.history = {
                    init: function() {
                        if (w.params.history) {
                            if (!window.history || !window.history.pushState)
                                return w.params.history = !1,
                                void (w.params.hashnav = !0);
                            w.history.initialized = !0,
                            this.paths = this.getPathValues(),
                            (this.paths.key || this.paths.value) && (this.scrollToSlide(0, this.paths.value, w.params.runCallbacksOnInit),
                            w.params.replaceState || window.addEventListener("popstate", this.setHistoryPopState))
                        }
                    },
                    setHistoryPopState: function() {
                        w.history.paths = w.history.getPathValues(),
                        w.history.scrollToSlide(w.params.speed, w.history.paths.value, !1)
                    },
                    getPathValues: function() {
                        var t = window.location.pathname.slice(1).split("/")
                          , e = t.length;
                        return {
                            key: t[e - 2],
                            value: t[e - 1]
                        }
                    },
                    setHistory: function(t, e) {
                        if (w.history.initialized && w.params.history) {
                            var i = w.slides.eq(e)
                              , r = this.slugify(i.attr("data-history"));
                            window.location.pathname.includes(t) || (r = t + "/" + r),
                            w.params.replaceState ? window.history.replaceState(null, null, r) : window.history.pushState(null, null, r)
                        }
                    },
                    slugify: function(t) {
                        return t.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
                    },
                    scrollToSlide: function(t, e, i) {
                        if (e)
                            for (var r = 0, n = w.slides.length; r < n; r++) {
                                var s = w.slides.eq(r);
                                if (this.slugify(s.attr("data-history")) === e && !s.hasClass(w.params.slideDuplicateClass)) {
                                    var a = s.index();
                                    w.slideTo(a, t, i)
                                }
                            }
                        else
                            w.slideTo(0, t, i)
                    }
                },
                w.disableKeyboardControl = function() {
                    w.params.keyboardControl = !1,
                    t(document).off("keydown", u)
                }
                ,
                w.enableKeyboardControl = function() {
                    w.params.keyboardControl = !0,
                    t(document).on("keydown", u)
                }
                ,
                w.mousewheel = {
                    event: !1,
                    lastScrollTime: (new window.Date).getTime()
                },
                w.params.mousewheelControl && (w.mousewheel.event = navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function() {
                    var t = "onwheel"in document;
                    if (!t) {
                        var e = document.createElement("div");
                        e.setAttribute("onwheel", "return;"),
                        t = "function" == typeof e.onwheel
                    }
                    return !t && document.implementation && document.implementation.hasFeature && !0 !== document.implementation.hasFeature("", "") && (t = document.implementation.hasFeature("Events.wheel", "3.0")),
                    t
                }() ? "wheel" : "mousewheel"),
                w.disableMousewheelControl = function() {
                    if (!w.mousewheel.event)
                        return !1;
                    var e = w.container;
                    return "container" !== w.params.mousewheelEventsTarged && (e = t(w.params.mousewheelEventsTarged)),
                    e.off(w.mousewheel.event, c),
                    w.params.mousewheelControl = !1,
                    !0
                }
                ,
                w.enableMousewheelControl = function() {
                    if (!w.mousewheel.event)
                        return !1;
                    var e = w.container;
                    return "container" !== w.params.mousewheelEventsTarged && (e = t(w.params.mousewheelEventsTarged)),
                    e.on(w.mousewheel.event, c),
                    w.params.mousewheelControl = !0,
                    !0
                }
                ,
                w.parallax = {
                    setTranslate: function() {
                        w.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                            h(this, w.progress)
                        }),
                        w.slides.each(function() {
                            var e = t(this);
                            e.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                                h(this, Math.min(Math.max(e[0].progress, -1), 1))
                            })
                        })
                    },
                    setTransition: function(e) {
                        void 0 === e && (e = w.params.speed),
                        w.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                            var i = t(this)
                              , r = parseInt(i.attr("data-swiper-parallax-duration"), 10) || e;
                            0 === e && (r = 0),
                            i.transition(r)
                        })
                    }
                },
                w.zoom = {
                    scale: 1,
                    currentScale: 1,
                    isScaling: !1,
                    gesture: {
                        slide: void 0,
                        slideWidth: void 0,
                        slideHeight: void 0,
                        image: void 0,
                        imageWrap: void 0,
                        zoomMax: w.params.zoomMax
                    },
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
                        touchesCurrent: {}
                    },
                    velocity: {
                        x: void 0,
                        y: void 0,
                        prevPositionX: void 0,
                        prevPositionY: void 0,
                        prevTime: void 0
                    },
                    getDistanceBetweenTouches: function(t) {
                        if (t.targetTouches.length < 2)
                            return 1;
                        var e = t.targetTouches[0].pageX
                          , i = t.targetTouches[0].pageY
                          , r = t.targetTouches[1].pageX
                          , n = t.targetTouches[1].pageY;
                        return Math.sqrt(Math.pow(r - e, 2) + Math.pow(n - i, 2))
                    },
                    onGestureStart: function(e) {
                        var i = w.zoom;
                        if (!w.support.gestures) {
                            if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2)
                                return;
                            i.gesture.scaleStart = i.getDistanceBetweenTouches(e)
                        }
                        i.gesture.slide && i.gesture.slide.length || (i.gesture.slide = t(this),
                        0 === i.gesture.slide.length && (i.gesture.slide = w.slides.eq(w.activeIndex)),
                        i.gesture.image = i.gesture.slide.find("img, svg, canvas"),
                        i.gesture.imageWrap = i.gesture.image.parent("." + w.params.zoomContainerClass),
                        i.gesture.zoomMax = i.gesture.imageWrap.attr("data-swiper-zoom") || w.params.zoomMax,
                        0 !== i.gesture.imageWrap.length) ? (i.gesture.image.transition(0),
                        i.isScaling = !0) : i.gesture.image = void 0
                    },
                    onGestureChange: function(t) {
                        var e = w.zoom;
                        if (!w.support.gestures) {
                            if ("touchmove" !== t.type || "touchmove" === t.type && t.targetTouches.length < 2)
                                return;
                            e.gesture.scaleMove = e.getDistanceBetweenTouches(t)
                        }
                        e.gesture.image && 0 !== e.gesture.image.length && (w.support.gestures ? e.scale = t.scale * e.currentScale : e.scale = e.gesture.scaleMove / e.gesture.scaleStart * e.currentScale,
                        e.scale > e.gesture.zoomMax && (e.scale = e.gesture.zoomMax - 1 + Math.pow(e.scale - e.gesture.zoomMax + 1, .5)),
                        e.scale < w.params.zoomMin && (e.scale = w.params.zoomMin + 1 - Math.pow(w.params.zoomMin - e.scale + 1, .5)),
                        e.gesture.image.transform("translate3d(0,0,0) scale(" + e.scale + ")"))
                    },
                    onGestureEnd: function(t) {
                        var e = w.zoom;
                        !w.support.gestures && ("touchend" !== t.type || "touchend" === t.type && t.changedTouches.length < 2) || e.gesture.image && 0 !== e.gesture.image.length && (e.scale = Math.max(Math.min(e.scale, e.gesture.zoomMax), w.params.zoomMin),
                        e.gesture.image.transition(w.params.speed).transform("translate3d(0,0,0) scale(" + e.scale + ")"),
                        e.currentScale = e.scale,
                        e.isScaling = !1,
                        1 === e.scale && (e.gesture.slide = void 0))
                    },
                    onTouchStart: function(t, e) {
                        var i = t.zoom;
                        i.gesture.image && 0 !== i.gesture.image.length && (i.image.isTouched || ("android" === t.device.os && e.preventDefault(),
                        i.image.isTouched = !0,
                        i.image.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX,
                        i.image.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
                    },
                    onTouchMove: function(t) {
                        var e = w.zoom;
                        if (e.gesture.image && 0 !== e.gesture.image.length && (w.allowClick = !1,
                        e.image.isTouched && e.gesture.slide)) {
                            e.image.isMoved || (e.image.width = e.gesture.image[0].offsetWidth,
                            e.image.height = e.gesture.image[0].offsetHeight,
                            e.image.startX = w.getTranslate(e.gesture.imageWrap[0], "x") || 0,
                            e.image.startY = w.getTranslate(e.gesture.imageWrap[0], "y") || 0,
                            e.gesture.slideWidth = e.gesture.slide[0].offsetWidth,
                            e.gesture.slideHeight = e.gesture.slide[0].offsetHeight,
                            e.gesture.imageWrap.transition(0),
                            w.rtl && (e.image.startX = -e.image.startX),
                            w.rtl && (e.image.startY = -e.image.startY));
                            var i = e.image.width * e.scale
                              , r = e.image.height * e.scale;
                            if (!(i < e.gesture.slideWidth && r < e.gesture.slideHeight)) {
                                if (e.image.minX = Math.min(e.gesture.slideWidth / 2 - i / 2, 0),
                                e.image.maxX = -e.image.minX,
                                e.image.minY = Math.min(e.gesture.slideHeight / 2 - r / 2, 0),
                                e.image.maxY = -e.image.minY,
                                e.image.touchesCurrent.x = "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX,
                                e.image.touchesCurrent.y = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY,
                                !e.image.isMoved && !e.isScaling) {
                                    if (w.isHorizontal() && Math.floor(e.image.minX) === Math.floor(e.image.startX) && e.image.touchesCurrent.x < e.image.touchesStart.x || Math.floor(e.image.maxX) === Math.floor(e.image.startX) && e.image.touchesCurrent.x > e.image.touchesStart.x)
                                        return void (e.image.isTouched = !1);
                                    if (!w.isHorizontal() && Math.floor(e.image.minY) === Math.floor(e.image.startY) && e.image.touchesCurrent.y < e.image.touchesStart.y || Math.floor(e.image.maxY) === Math.floor(e.image.startY) && e.image.touchesCurrent.y > e.image.touchesStart.y)
                                        return void (e.image.isTouched = !1)
                                }
                                t.preventDefault(),
                                t.stopPropagation(),
                                e.image.isMoved = !0,
                                e.image.currentX = e.image.touchesCurrent.x - e.image.touchesStart.x + e.image.startX,
                                e.image.currentY = e.image.touchesCurrent.y - e.image.touchesStart.y + e.image.startY,
                                e.image.currentX < e.image.minX && (e.image.currentX = e.image.minX + 1 - Math.pow(e.image.minX - e.image.currentX + 1, .8)),
                                e.image.currentX > e.image.maxX && (e.image.currentX = e.image.maxX - 1 + Math.pow(e.image.currentX - e.image.maxX + 1, .8)),
                                e.image.currentY < e.image.minY && (e.image.currentY = e.image.minY + 1 - Math.pow(e.image.minY - e.image.currentY + 1, .8)),
                                e.image.currentY > e.image.maxY && (e.image.currentY = e.image.maxY - 1 + Math.pow(e.image.currentY - e.image.maxY + 1, .8)),
                                e.velocity.prevPositionX || (e.velocity.prevPositionX = e.image.touchesCurrent.x),
                                e.velocity.prevPositionY || (e.velocity.prevPositionY = e.image.touchesCurrent.y),
                                e.velocity.prevTime || (e.velocity.prevTime = Date.now()),
                                e.velocity.x = (e.image.touchesCurrent.x - e.velocity.prevPositionX) / (Date.now() - e.velocity.prevTime) / 2,
                                e.velocity.y = (e.image.touchesCurrent.y - e.velocity.prevPositionY) / (Date.now() - e.velocity.prevTime) / 2,
                                Math.abs(e.image.touchesCurrent.x - e.velocity.prevPositionX) < 2 && (e.velocity.x = 0),
                                Math.abs(e.image.touchesCurrent.y - e.velocity.prevPositionY) < 2 && (e.velocity.y = 0),
                                e.velocity.prevPositionX = e.image.touchesCurrent.x,
                                e.velocity.prevPositionY = e.image.touchesCurrent.y,
                                e.velocity.prevTime = Date.now(),
                                e.gesture.imageWrap.transform("translate3d(" + e.image.currentX + "px, " + e.image.currentY + "px,0)")
                            }
                        }
                    },
                    onTouchEnd: function(t, e) {
                        var i = t.zoom;
                        if (i.gesture.image && 0 !== i.gesture.image.length) {
                            if (!i.image.isTouched || !i.image.isMoved)
                                return i.image.isTouched = !1,
                                void (i.image.isMoved = !1);
                            i.image.isTouched = !1,
                            i.image.isMoved = !1;
                            var r = 300
                              , n = 300
                              , s = i.velocity.x * r
                              , a = i.image.currentX + s
                              , o = i.velocity.y * n
                              , l = i.image.currentY + o;
                            0 !== i.velocity.x && (r = Math.abs((a - i.image.currentX) / i.velocity.x)),
                            0 !== i.velocity.y && (n = Math.abs((l - i.image.currentY) / i.velocity.y));
                            var u = Math.max(r, n);
                            i.image.currentX = a,
                            i.image.currentY = l;
                            var c = i.image.width * i.scale
                              , h = i.image.height * i.scale;
                            i.image.minX = Math.min(i.gesture.slideWidth / 2 - c / 2, 0),
                            i.image.maxX = -i.image.minX,
                            i.image.minY = Math.min(i.gesture.slideHeight / 2 - h / 2, 0),
                            i.image.maxY = -i.image.minY,
                            i.image.currentX = Math.max(Math.min(i.image.currentX, i.image.maxX), i.image.minX),
                            i.image.currentY = Math.max(Math.min(i.image.currentY, i.image.maxY), i.image.minY),
                            i.gesture.imageWrap.transition(u).transform("translate3d(" + i.image.currentX + "px, " + i.image.currentY + "px,0)")
                        }
                    },
                    onTransitionEnd: function(t) {
                        var e = t.zoom;
                        e.gesture.slide && t.previousIndex !== t.activeIndex && (e.gesture.image.transform("translate3d(0,0,0) scale(1)"),
                        e.gesture.imageWrap.transform("translate3d(0,0,0)"),
                        e.gesture.slide = e.gesture.image = e.gesture.imageWrap = void 0,
                        e.scale = e.currentScale = 1)
                    },
                    toggleZoom: function(e, i) {
                        var r = e.zoom;
                        if (r.gesture.slide || (r.gesture.slide = e.clickedSlide ? t(e.clickedSlide) : e.slides.eq(e.activeIndex),
                        r.gesture.image = r.gesture.slide.find("img, svg, canvas"),
                        r.gesture.imageWrap = r.gesture.image.parent("." + e.params.zoomContainerClass)),
                        r.gesture.image && 0 !== r.gesture.image.length) {
                            var n, s, a, o, l, u, c, h, d, p, f, m, g, v, y, _;
                            void 0 === r.image.touchesStart.x && i ? (n = "touchend" === i.type ? i.changedTouches[0].pageX : i.pageX,
                            s = "touchend" === i.type ? i.changedTouches[0].pageY : i.pageY) : (n = r.image.touchesStart.x,
                            s = r.image.touchesStart.y),
                            r.scale && 1 !== r.scale ? (r.scale = r.currentScale = 1,
                            r.gesture.imageWrap.transition(300).transform("translate3d(0,0,0)"),
                            r.gesture.image.transition(300).transform("translate3d(0,0,0) scale(1)"),
                            r.gesture.slide = void 0) : (r.scale = r.currentScale = r.gesture.imageWrap.attr("data-swiper-zoom") || e.params.zoomMax,
                            i ? (y = r.gesture.slide[0].offsetWidth,
                            _ = r.gesture.slide[0].offsetHeight,
                            a = r.gesture.slide.offset().left + y / 2 - n,
                            o = r.gesture.slide.offset().top + _ / 2 - s,
                            c = r.gesture.image[0].offsetWidth,
                            h = r.gesture.image[0].offsetHeight,
                            d = c * r.scale,
                            p = h * r.scale,
                            g = -(f = Math.min(y / 2 - d / 2, 0)),
                            v = -(m = Math.min(_ / 2 - p / 2, 0)),
                            l = a * r.scale,
                            u = o * r.scale,
                            l < f && (l = f),
                            l > g && (l = g),
                            u < m && (u = m),
                            u > v && (u = v)) : (l = 0,
                            u = 0),
                            r.gesture.imageWrap.transition(300).transform("translate3d(" + l + "px, " + u + "px,0)"),
                            r.gesture.image.transition(300).transform("translate3d(0,0,0) scale(" + r.scale + ")"))
                        }
                    },
                    attachEvents: function(e) {
                        var i = e ? "off" : "on";
                        if (w.params.zoom) {
                            w.slides;
                            var r = !("touchstart" !== w.touchEvents.start || !w.support.passiveListener || !w.params.passiveListeners) && {
                                passive: !0,
                                capture: !1
                            };
                            w.support.gestures ? (w.slides[i]("gesturestart", w.zoom.onGestureStart, r),
                            w.slides[i]("gesturechange", w.zoom.onGestureChange, r),
                            w.slides[i]("gestureend", w.zoom.onGestureEnd, r)) : "touchstart" === w.touchEvents.start && (w.slides[i](w.touchEvents.start, w.zoom.onGestureStart, r),
                            w.slides[i](w.touchEvents.move, w.zoom.onGestureChange, r),
                            w.slides[i](w.touchEvents.end, w.zoom.onGestureEnd, r)),
                            w[i]("touchStart", w.zoom.onTouchStart),
                            w.slides.each(function(e, r) {
                                t(r).find("." + w.params.zoomContainerClass).length > 0 && t(r)[i](w.touchEvents.move, w.zoom.onTouchMove)
                            }),
                            w[i]("touchEnd", w.zoom.onTouchEnd),
                            w[i]("transitionEnd", w.zoom.onTransitionEnd),
                            w.params.zoomToggle && w.on("doubleTap", w.zoom.toggleZoom)
                        }
                    },
                    init: function() {
                        w.zoom.attachEvents()
                    },
                    destroy: function() {
                        w.zoom.attachEvents(!0)
                    }
                },
                w._plugins = [];
                for (var N in w.plugins) {
                    var B = w.plugins[N](w, w.params[N]);
                    B && w._plugins.push(B)
                }
                return w.callPlugins = function(t) {
                    for (var e = 0; e < w._plugins.length; e++)
                        t in w._plugins[e] && w._plugins[e][t](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
                }
                ,
                w.emitterEventListeners = {},
                w.emit = function(t) {
                    w.params[t] && w.params[t](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                    var e;
                    if (w.emitterEventListeners[t])
                        for (e = 0; e < w.emitterEventListeners[t].length; e++)
                            w.emitterEventListeners[t][e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                    w.callPlugins && w.callPlugins(t, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
                }
                ,
                w.on = function(t, e) {
                    return t = d(t),
                    w.emitterEventListeners[t] || (w.emitterEventListeners[t] = []),
                    w.emitterEventListeners[t].push(e),
                    w
                }
                ,
                w.off = function(t, e) {
                    var i;
                    if (t = d(t),
                    void 0 === e)
                        return w.emitterEventListeners[t] = [],
                        w;
                    if (w.emitterEventListeners[t] && 0 !== w.emitterEventListeners[t].length) {
                        for (i = 0; i < w.emitterEventListeners[t].length; i++)
                            w.emitterEventListeners[t][i] === e && w.emitterEventListeners[t].splice(i, 1);
                        return w
                    }
                }
                ,
                w.once = function(t, e) {
                    t = d(t);
                    var i = function() {
                        e(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]),
                        w.off(t, i)
                    };
                    return w.on(t, i),
                    w
                }
                ,
                w.a11y = {
                    makeFocusable: function(t) {
                        return t.attr("tabIndex", "0"),
                        t
                    },
                    addRole: function(t, e) {
                        return t.attr("role", e),
                        t
                    },
                    addLabel: function(t, e) {
                        return t.attr("aria-label", e),
                        t
                    },
                    disable: function(t) {
                        return t.attr("aria-disabled", !0),
                        t
                    },
                    enable: function(t) {
                        return t.attr("aria-disabled", !1),
                        t
                    },
                    onEnterKey: function(e) {
                        13 === e.keyCode && (t(e.target).is(w.params.nextButton) ? (w.onClickNext(e),
                        w.isEnd ? w.a11y.notify(w.params.lastSlideMessage) : w.a11y.notify(w.params.nextSlideMessage)) : t(e.target).is(w.params.prevButton) && (w.onClickPrev(e),
                        w.isBeginning ? w.a11y.notify(w.params.firstSlideMessage) : w.a11y.notify(w.params.prevSlideMessage)),
                        t(e.target).is("." + w.params.bulletClass) && t(e.target)[0].click())
                    },
                    liveRegion: t('<span class="' + w.params.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>'),
                    notify: function(t) {
                        var e = w.a11y.liveRegion;
                        0 !== e.length && (e.html(""),
                        e.html(t))
                    },
                    init: function() {
                        w.params.nextButton && w.nextButton && w.nextButton.length > 0 && (w.a11y.makeFocusable(w.nextButton),
                        w.a11y.addRole(w.nextButton, "button"),
                        w.a11y.addLabel(w.nextButton, w.params.nextSlideMessage)),
                        w.params.prevButton && w.prevButton && w.prevButton.length > 0 && (w.a11y.makeFocusable(w.prevButton),
                        w.a11y.addRole(w.prevButton, "button"),
                        w.a11y.addLabel(w.prevButton, w.params.prevSlideMessage)),
                        t(w.container).append(w.a11y.liveRegion)
                    },
                    initPagination: function() {
                        w.params.pagination && w.params.paginationClickable && w.bullets && w.bullets.length && w.bullets.each(function() {
                            var e = t(this);
                            w.a11y.makeFocusable(e),
                            w.a11y.addRole(e, "button"),
                            w.a11y.addLabel(e, w.params.paginationBulletMessage.replace(/{{index}}/, e.index() + 1))
                        })
                    },
                    destroy: function() {
                        w.a11y.liveRegion && w.a11y.liveRegion.length > 0 && w.a11y.liveRegion.remove()
                    }
                },
                w.init = function() {
                    w.params.loop && w.createLoop(),
                    w.updateContainerSize(),
                    w.updateSlidesSize(),
                    w.updatePagination(),
                    w.params.scrollbar && w.scrollbar && (w.scrollbar.set(),
                    w.params.scrollbarDraggable && w.scrollbar.enableDraggable()),
                    "slide" !== w.params.effect && w.effects[w.params.effect] && (w.params.loop || w.updateProgress(),
                    w.effects[w.params.effect].setTranslate()),
                    w.params.loop ? w.slideTo(w.params.initialSlide + w.loopedSlides, 0, w.params.runCallbacksOnInit) : (w.slideTo(w.params.initialSlide, 0, w.params.runCallbacksOnInit),
                    0 === w.params.initialSlide && (w.parallax && w.params.parallax && w.parallax.setTranslate(),
                    w.lazy && w.params.lazyLoading && (w.lazy.load(),
                    w.lazy.initialImageLoaded = !0))),
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
                    w.emit("onInit", w)
                }
                ,
                w.cleanupStyles = function() {
                    w.container.removeClass(w.classNames.join(" ")).removeAttr("style"),
                    w.wrapper.removeAttr("style"),
                    w.slides && w.slides.length && w.slides.removeClass([w.params.slideVisibleClass, w.params.slideActiveClass, w.params.slideNextClass, w.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"),
                    w.paginationContainer && w.paginationContainer.length && w.paginationContainer.removeClass(w.params.paginationHiddenClass),
                    w.bullets && w.bullets.length && w.bullets.removeClass(w.params.bulletActiveClass),
                    w.params.prevButton && t(w.params.prevButton).removeClass(w.params.buttonDisabledClass),
                    w.params.nextButton && t(w.params.nextButton).removeClass(w.params.buttonDisabledClass),
                    w.params.scrollbar && w.scrollbar && (w.scrollbar.track && w.scrollbar.track.length && w.scrollbar.track.removeAttr("style"),
                    w.scrollbar.drag && w.scrollbar.drag.length && w.scrollbar.drag.removeAttr("style"))
                }
                ,
                w.destroy = function(t, e) {
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
                    !1 !== t && (w = null)
                }
                ,
                w.init(),
                w
            }
        };
        e.prototype = {
            isSafari: function() {
                var t = window.navigator.userAgent.toLowerCase();
                return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0
            }(),
            isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent),
            isArray: function(t) {
                return "[object Array]" === Object.prototype.toString.apply(t)
            },
            browser: {
                ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
                ieTouch: window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 1 || window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 1,
                lteIE9: function() {
                    var t = document.createElement("div");
                    return t.innerHTML = "\x3c!--[if lte IE 9]><i></i><![endif]--\x3e",
                    1 === t.getElementsByTagName("i").length
                }()
            },
            device: function() {
                var t = window.navigator.userAgent
                  , e = t.match(/(Android);?[\s\/]+([\d.]+)?/)
                  , i = t.match(/(iPad).*OS\s([\d_]+)/)
                  , r = t.match(/(iPod)(.*OS\s([\d_]+))?/)
                  , n = !i && t.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
                return {
                    ios: i || n || r,
                    android: e
                }
            }(),
            support: {
                touch: window.Modernizr && !0 === Modernizr.touch || !!("ontouchstart"in window || window.DocumentTouch && document instanceof DocumentTouch),
                transforms3d: window.Modernizr && !0 === Modernizr.csstransforms3d || function() {
                    var t = document.createElement("div").style;
                    return "webkitPerspective"in t || "MozPerspective"in t || "OPerspective"in t || "MsPerspective"in t || "perspective"in t
                }(),
                flexbox: function() {
                    for (var t = document.createElement("div").style, e = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), i = 0; i < e.length; i++)
                        if (e[i]in t)
                            return !0
                }(),
                observer: "MutationObserver"in window || "WebkitMutationObserver"in window,
                passiveListener: function() {
                    var t = !1;
                    try {
                        var e = Object.defineProperty({}, "passive", {
                            get: function() {
                                t = !0
                            }
                        });
                        window.addEventListener("testPassiveListener", null, e)
                    } catch (t) {}
                    return t
                }(),
                gestures: "ongesturestart"in window
            },
            plugins: {}
        };
        for (var i = function() {
            var t = function(t) {
                var e = 0;
                for (e = 0; e < t.length; e++)
                    this[e] = t[e];
                return this.length = t.length,
                this
            }
              , e = function(e, i) {
                var r = []
                  , n = 0;
                if (e && !i && e instanceof t)
                    return e;
                if (e)
                    if ("string" == typeof e) {
                        var s, a, o = e.trim();
                        if (o.indexOf("<") >= 0 && o.indexOf(">") >= 0) {
                            var l = "div";
                            for (0 === o.indexOf("<li") && (l = "ul"),
                            0 === o.indexOf("<tr") && (l = "tbody"),
                            0 !== o.indexOf("<td") && 0 !== o.indexOf("<th") || (l = "tr"),
                            0 === o.indexOf("<tbody") && (l = "table"),
                            0 === o.indexOf("<option") && (l = "select"),
                            (a = document.createElement(l)).innerHTML = e,
                            n = 0; n < a.childNodes.length; n++)
                                r.push(a.childNodes[n])
                        } else
                            for (s = i || "#" !== e[0] || e.match(/[ .<>:~]/) ? (i || document).querySelectorAll(e) : [document.getElementById(e.split("#")[1])],
                            n = 0; n < s.length; n++)
                                s[n] && r.push(s[n])
                    } else if (e.nodeType || e === window || e === document)
                        r.push(e);
                    else if (e.length > 0 && e[0].nodeType)
                        for (n = 0; n < e.length; n++)
                            r.push(e[n]);
                return new t(r)
            };
            return t.prototype = {
                addClass: function(t) {
                    if (void 0 === t)
                        return this;
                    for (var e = t.split(" "), i = 0; i < e.length; i++)
                        for (var r = 0; r < this.length; r++)
                            this[r].classList.add(e[i]);
                    return this
                },
                removeClass: function(t) {
                    for (var e = t.split(" "), i = 0; i < e.length; i++)
                        for (var r = 0; r < this.length; r++)
                            this[r].classList.remove(e[i]);
                    return this
                },
                hasClass: function(t) {
                    return !!this[0] && this[0].classList.contains(t)
                },
                toggleClass: function(t) {
                    for (var e = t.split(" "), i = 0; i < e.length; i++)
                        for (var r = 0; r < this.length; r++)
                            this[r].classList.toggle(e[i]);
                    return this
                },
                attr: function(t, e) {
                    if (1 === arguments.length && "string" == typeof t)
                        return this[0] ? this[0].getAttribute(t) : void 0;
                    for (var i = 0; i < this.length; i++)
                        if (2 === arguments.length)
                            this[i].setAttribute(t, e);
                        else
                            for (var r in t)
                                this[i][r] = t[r],
                                this[i].setAttribute(r, t[r]);
                    return this
                },
                removeAttr: function(t) {
                    for (var e = 0; e < this.length; e++)
                        this[e].removeAttribute(t);
                    return this
                },
                data: function(t, e) {
                    if (void 0 !== e) {
                        for (var i = 0; i < this.length; i++) {
                            var r = this[i];
                            r.dom7ElementDataStorage || (r.dom7ElementDataStorage = {}),
                            r.dom7ElementDataStorage[t] = e
                        }
                        return this
                    }
                    if (this[0]) {
                        var n = this[0].getAttribute("data-" + t);
                        return n || (this[0].dom7ElementDataStorage && t in this[0].dom7ElementDataStorage ? this[0].dom7ElementDataStorage[t] : void 0)
                    }
                },
                transform: function(t) {
                    for (var e = 0; e < this.length; e++) {
                        var i = this[e].style;
                        i.webkitTransform = i.MsTransform = i.msTransform = i.MozTransform = i.OTransform = i.transform = t
                    }
                    return this
                },
                transition: function(t) {
                    "string" != typeof t && (t += "ms");
                    for (var e = 0; e < this.length; e++) {
                        var i = this[e].style;
                        i.webkitTransitionDuration = i.MsTransitionDuration = i.msTransitionDuration = i.MozTransitionDuration = i.OTransitionDuration = i.transitionDuration = t
                    }
                    return this
                },
                on: function(t, i, r, n) {
                    function s(t) {
                        var n = t.target;
                        if (e(n).is(i))
                            r.call(n, t);
                        else
                            for (var s = e(n).parents(), a = 0; a < s.length; a++)
                                e(s[a]).is(i) && r.call(s[a], t)
                    }
                    var a, o, l = t.split(" ");
                    for (a = 0; a < this.length; a++)
                        if ("function" == typeof i || !1 === i)
                            for ("function" == typeof i && (r = arguments[1],
                            n = arguments[2] || !1),
                            o = 0; o < l.length; o++)
                                this[a].addEventListener(l[o], r, n);
                        else
                            for (o = 0; o < l.length; o++)
                                this[a].dom7LiveListeners || (this[a].dom7LiveListeners = []),
                                this[a].dom7LiveListeners.push({
                                    listener: r,
                                    liveListener: s
                                }),
                                this[a].addEventListener(l[o], s, n);
                    return this
                },
                off: function(t, e, i, r) {
                    for (var n = t.split(" "), s = 0; s < n.length; s++)
                        for (var a = 0; a < this.length; a++)
                            if ("function" == typeof e || !1 === e)
                                "function" == typeof e && (i = arguments[1],
                                r = arguments[2] || !1),
                                this[a].removeEventListener(n[s], i, r);
                            else if (this[a].dom7LiveListeners)
                                for (var o = 0; o < this[a].dom7LiveListeners.length; o++)
                                    this[a].dom7LiveListeners[o].listener === i && this[a].removeEventListener(n[s], this[a].dom7LiveListeners[o].liveListener, r);
                    return this
                },
                once: function(t, e, i, r) {
                    function n(a) {
                        i(a),
                        s.off(t, e, n, r)
                    }
                    var s = this;
                    "function" == typeof e && (e = !1,
                    i = arguments[1],
                    r = arguments[2]),
                    s.on(t, e, n, r)
                },
                trigger: function(t, e) {
                    for (var i = 0; i < this.length; i++) {
                        var r;
                        try {
                            r = new window.CustomEvent(t,{
                                detail: e,
                                bubbles: !0,
                                cancelable: !0
                            })
                        } catch (i) {
                            (r = document.createEvent("Event")).initEvent(t, !0, !0),
                            r.detail = e
                        }
                        this[i].dispatchEvent(r)
                    }
                    return this
                },
                transitionEnd: function(t) {
                    function e(s) {
                        if (s.target === this)
                            for (t.call(this, s),
                            i = 0; i < r.length; i++)
                                n.off(r[i], e)
                    }
                    var i, r = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], n = this;
                    if (t)
                        for (i = 0; i < r.length; i++)
                            n.on(r[i], e);
                    return this
                },
                width: function() {
                    return this[0] === window ? window.innerWidth : this.length > 0 ? parseFloat(this.css("width")) : null
                },
                outerWidth: function(t) {
                    return this.length > 0 ? t ? this[0].offsetWidth + parseFloat(this.css("margin-right")) + parseFloat(this.css("margin-left")) : this[0].offsetWidth : null
                },
                height: function() {
                    return this[0] === window ? window.innerHeight : this.length > 0 ? parseFloat(this.css("height")) : null
                },
                outerHeight: function(t) {
                    return this.length > 0 ? t ? this[0].offsetHeight + parseFloat(this.css("margin-top")) + parseFloat(this.css("margin-bottom")) : this[0].offsetHeight : null
                },
                offset: function() {
                    if (this.length > 0) {
                        var t = this[0]
                          , e = t.getBoundingClientRect()
                          , i = document.body
                          , r = t.clientTop || i.clientTop || 0
                          , n = t.clientLeft || i.clientLeft || 0
                          , s = window.pageYOffset || t.scrollTop
                          , a = window.pageXOffset || t.scrollLeft;
                        return {
                            top: e.top + s - r,
                            left: e.left + a - n
                        }
                    }
                    return null
                },
                css: function(t, e) {
                    var i;
                    if (1 === arguments.length) {
                        if ("string" != typeof t) {
                            for (i = 0; i < this.length; i++)
                                for (var r in t)
                                    this[i].style[r] = t[r];
                            return this
                        }
                        if (this[0])
                            return window.getComputedStyle(this[0], null).getPropertyValue(t)
                    }
                    if (2 === arguments.length && "string" == typeof t) {
                        for (i = 0; i < this.length; i++)
                            this[i].style[t] = e;
                        return this
                    }
                    return this
                },
                each: function(t) {
                    for (var e = 0; e < this.length; e++)
                        t.call(this[e], e, this[e]);
                    return this
                },
                html: function(t) {
                    if (void 0 === t)
                        return this[0] ? this[0].innerHTML : void 0;
                    for (var e = 0; e < this.length; e++)
                        this[e].innerHTML = t;
                    return this
                },
                text: function(t) {
                    if (void 0 === t)
                        return this[0] ? this[0].textContent.trim() : null;
                    for (var e = 0; e < this.length; e++)
                        this[e].textContent = t;
                    return this
                },
                is: function(i) {
                    if (!this[0])
                        return !1;
                    var r, n;
                    if ("string" == typeof i) {
                        var s = this[0];
                        if (s === document)
                            return i === document;
                        if (s === window)
                            return i === window;
                        if (s.matches)
                            return s.matches(i);
                        if (s.webkitMatchesSelector)
                            return s.webkitMatchesSelector(i);
                        if (s.mozMatchesSelector)
                            return s.mozMatchesSelector(i);
                        if (s.msMatchesSelector)
                            return s.msMatchesSelector(i);
                        for (r = e(i),
                        n = 0; n < r.length; n++)
                            if (r[n] === this[0])
                                return !0;
                        return !1
                    }
                    if (i === document)
                        return this[0] === document;
                    if (i === window)
                        return this[0] === window;
                    if (i.nodeType || i instanceof t) {
                        for (r = i.nodeType ? [i] : i,
                        n = 0; n < r.length; n++)
                            if (r[n] === this[0])
                                return !0;
                        return !1
                    }
                    return !1
                },
                index: function() {
                    if (this[0]) {
                        for (var t = this[0], e = 0; null !== (t = t.previousSibling); )
                            1 === t.nodeType && e++;
                        return e
                    }
                },
                eq: function(e) {
                    if (void 0 === e)
                        return this;
                    var i, r = this.length;
                    return e > r - 1 ? new t([]) : e < 0 ? (i = r + e,
                    new t(i < 0 ? [] : [this[i]])) : new t([this[e]])
                },
                append: function(e) {
                    var i, r;
                    for (i = 0; i < this.length; i++)
                        if ("string" == typeof e) {
                            var n = document.createElement("div");
                            for (n.innerHTML = e; n.firstChild; )
                                this[i].appendChild(n.firstChild)
                        } else if (e instanceof t)
                            for (r = 0; r < e.length; r++)
                                this[i].appendChild(e[r]);
                        else
                            this[i].appendChild(e);
                    return this
                },
                prepend: function(e) {
                    var i, r;
                    for (i = 0; i < this.length; i++)
                        if ("string" == typeof e) {
                            var n = document.createElement("div");
                            for (n.innerHTML = e,
                            r = n.childNodes.length - 1; r >= 0; r--)
                                this[i].insertBefore(n.childNodes[r], this[i].childNodes[0])
                        } else if (e instanceof t)
                            for (r = 0; r < e.length; r++)
                                this[i].insertBefore(e[r], this[i].childNodes[0]);
                        else
                            this[i].insertBefore(e, this[i].childNodes[0]);
                    return this
                },
                insertBefore: function(t) {
                    for (var i = e(t), r = 0; r < this.length; r++)
                        if (1 === i.length)
                            i[0].parentNode.insertBefore(this[r], i[0]);
                        else if (i.length > 1)
                            for (var n = 0; n < i.length; n++)
                                i[n].parentNode.insertBefore(this[r].cloneNode(!0), i[n])
                },
                insertAfter: function(t) {
                    for (var i = e(t), r = 0; r < this.length; r++)
                        if (1 === i.length)
                            i[0].parentNode.insertBefore(this[r], i[0].nextSibling);
                        else if (i.length > 1)
                            for (var n = 0; n < i.length; n++)
                                i[n].parentNode.insertBefore(this[r].cloneNode(!0), i[n].nextSibling)
                },
                next: function(i) {
                    return this.length > 0 ? i ? this[0].nextElementSibling && e(this[0].nextElementSibling).is(i) ? new t([this[0].nextElementSibling]) : new t([]) : this[0].nextElementSibling ? new t([this[0].nextElementSibling]) : new t([]) : new t([])
                },
                nextAll: function(i) {
                    var r = []
                      , n = this[0];
                    if (!n)
                        return new t([]);
                    for (; n.nextElementSibling; ) {
                        var s = n.nextElementSibling;
                        i ? e(s).is(i) && r.push(s) : r.push(s),
                        n = s
                    }
                    return new t(r)
                },
                prev: function(i) {
                    return this.length > 0 ? i ? this[0].previousElementSibling && e(this[0].previousElementSibling).is(i) ? new t([this[0].previousElementSibling]) : new t([]) : this[0].previousElementSibling ? new t([this[0].previousElementSibling]) : new t([]) : new t([])
                },
                prevAll: function(i) {
                    var r = []
                      , n = this[0];
                    if (!n)
                        return new t([]);
                    for (; n.previousElementSibling; ) {
                        var s = n.previousElementSibling;
                        i ? e(s).is(i) && r.push(s) : r.push(s),
                        n = s
                    }
                    return new t(r)
                },
                parent: function(t) {
                    for (var i = [], r = 0; r < this.length; r++)
                        t ? e(this[r].parentNode).is(t) && i.push(this[r].parentNode) : i.push(this[r].parentNode);
                    return e(e.unique(i))
                },
                parents: function(t) {
                    for (var i = [], r = 0; r < this.length; r++)
                        for (var n = this[r].parentNode; n; )
                            t ? e(n).is(t) && i.push(n) : i.push(n),
                            n = n.parentNode;
                    return e(e.unique(i))
                },
                find: function(e) {
                    for (var i = [], r = 0; r < this.length; r++)
                        for (var n = this[r].querySelectorAll(e), s = 0; s < n.length; s++)
                            i.push(n[s]);
                    return new t(i)
                },
                children: function(i) {
                    for (var r = [], n = 0; n < this.length; n++)
                        for (var s = this[n].childNodes, a = 0; a < s.length; a++)
                            i ? 1 === s[a].nodeType && e(s[a]).is(i) && r.push(s[a]) : 1 === s[a].nodeType && r.push(s[a]);
                    return new t(e.unique(r))
                },
                remove: function() {
                    for (var t = 0; t < this.length; t++)
                        this[t].parentNode && this[t].parentNode.removeChild(this[t]);
                    return this
                },
                add: function() {
                    var t, i;
                    for (t = 0; t < arguments.length; t++) {
                        var r = e(arguments[t]);
                        for (i = 0; i < r.length; i++)
                            this[this.length] = r[i],
                            this.length++
                    }
                    return this
                }
            },
            e.fn = t.prototype,
            e.unique = function(t) {
                for (var e = [], i = 0; i < t.length; i++)
                    -1 === e.indexOf(t[i]) && e.push(t[i]);
                return e
            }
            ,
            e
        }(), r = ["jQuery", "Zepto", "Dom7"], n = 0; n < r.length; n++)
            window[r[n]] && function(t) {
                t.fn.swiper = function(i) {
                    var r;
                    return t(this).each(function() {
                        var t = new e(this,i);
                        r || (r = t)
                    }),
                    r
                }
            }(window[r[n]]);
        var s;
        (s = void 0 === i ? window.Dom7 || window.Zepto || window.jQuery : i) && ("transitionEnd"in s.fn || (s.fn.transitionEnd = function(t) {
            function e(s) {
                if (s.target === this)
                    for (t.call(this, s),
                    i = 0; i < r.length; i++)
                        n.off(r[i], e)
            }
            var i, r = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], n = this;
            if (t)
                for (i = 0; i < r.length; i++)
                    n.on(r[i], e);
            return this
        }
        ),
        "transform"in s.fn || (s.fn.transform = function(t) {
            for (var e = 0; e < this.length; e++) {
                var i = this[e].style;
                i.webkitTransform = i.MsTransform = i.msTransform = i.MozTransform = i.OTransform = i.transform = t
            }
            return this
        }
        ),
        "transition"in s.fn || (s.fn.transition = function(t) {
            "string" != typeof t && (t += "ms");
            for (var e = 0; e < this.length; e++) {
                var i = this[e].style;
                i.webkitTransitionDuration = i.MsTransitionDuration = i.msTransitionDuration = i.MozTransitionDuration = i.OTransitionDuration = i.transitionDuration = t
            }
            return this
        }
        ),
        "outerWidth"in s.fn || (s.fn.outerWidth = function(t) {
            return this.length > 0 ? t ? this[0].offsetWidth + parseFloat(this.css("margin-right")) + parseFloat(this.css("margin-left")) : this[0].offsetWidth : null
        }
        )),
        window.Swiper = e
    }(),
    t.exports = window.Swiper
}
, function(t, e, i) {
    var r;
    (function() {
        var i = this
          , n = i._
          , s = Array.prototype
          , a = Object.prototype
          , o = Function.prototype
          , l = s.push
          , u = s.slice
          , c = s.concat
          , h = a.toString
          , d = a.hasOwnProperty
          , p = Array.isArray
          , f = Object.keys
          , m = o.bind
          , g = function(t) {
            return t instanceof g ? t : this instanceof g ? void (this._wrapped = t) : new g(t)
        };
        void 0 !== t && t.exports && (e = t.exports = g),
        e._ = g,
        g.VERSION = "1.7.0";
        var v = function(t, e, i) {
            if (void 0 === e)
                return t;
            switch (null == i ? 3 : i) {
            case 1:
                return function(i) {
                    return t.call(e, i)
                }
                ;
            case 2:
                return function(i, r) {
                    return t.call(e, i, r)
                }
                ;
            case 3:
                return function(i, r, n) {
                    return t.call(e, i, r, n)
                }
                ;
            case 4:
                return function(i, r, n, s) {
                    return t.call(e, i, r, n, s)
                }
            }
            return function() {
                return t.apply(e, arguments)
            }
        };
        g.iteratee = function(t, e, i) {
            return null == t ? g.identity : g.isFunction(t) ? v(t, e, i) : g.isObject(t) ? g.matches(t) : g.property(t)
        }
        ,
        g.each = g.forEach = function(t, e, i) {
            if (null == t)
                return t;
            e = v(e, i);
            var r, n = t.length;
            if (n === +n)
                for (r = 0; r < n; r++)
                    e(t[r], r, t);
            else {
                var s = g.keys(t);
                for (r = 0,
                n = s.length; r < n; r++)
                    e(t[s[r]], s[r], t)
            }
            return t
        }
        ,
        g.map = g.collect = function(t, e, i) {
            if (null == t)
                return [];
            e = g.iteratee(e, i);
            for (var r, n = t.length !== +t.length && g.keys(t), s = (n || t).length, a = Array(s), o = 0; o < s; o++)
                r = n ? n[o] : o,
                a[o] = e(t[r], r, t);
            return a
        }
        ;
        var y = "Reduce of empty array with no initial value";
        g.reduce = g.foldl = g.inject = function(t, e, i, r) {
            null == t && (t = []),
            e = v(e, r, 4);
            var n, s = t.length !== +t.length && g.keys(t), a = (s || t).length, o = 0;
            if (arguments.length < 3) {
                if (!a)
                    throw new TypeError(y);
                i = t[s ? s[o++] : o++]
            }
            for (; o < a; o++)
                i = e(i, t[n = s ? s[o] : o], n, t);
            return i
        }
        ,
        g.reduceRight = g.foldr = function(t, e, i, r) {
            null == t && (t = []),
            e = v(e, r, 4);
            var n, s = t.length !== +t.length && g.keys(t), a = (s || t).length;
            if (arguments.length < 3) {
                if (!a)
                    throw new TypeError(y);
                i = t[s ? s[--a] : --a]
            }
            for (; a--; )
                i = e(i, t[n = s ? s[a] : a], n, t);
            return i
        }
        ,
        g.find = g.detect = function(t, e, i) {
            var r;
            return e = g.iteratee(e, i),
            g.some(t, function(t, i, n) {
                if (e(t, i, n))
                    return r = t,
                    !0
            }),
            r
        }
        ,
        g.filter = g.select = function(t, e, i) {
            var r = [];
            return null == t ? r : (e = g.iteratee(e, i),
            g.each(t, function(t, i, n) {
                e(t, i, n) && r.push(t)
            }),
            r)
        }
        ,
        g.reject = function(t, e, i) {
            return g.filter(t, g.negate(g.iteratee(e)), i)
        }
        ,
        g.every = g.all = function(t, e, i) {
            if (null == t)
                return !0;
            e = g.iteratee(e, i);
            var r, n, s = t.length !== +t.length && g.keys(t), a = (s || t).length;
            for (r = 0; r < a; r++)
                if (n = s ? s[r] : r,
                !e(t[n], n, t))
                    return !1;
            return !0
        }
        ,
        g.some = g.any = function(t, e, i) {
            if (null == t)
                return !1;
            e = g.iteratee(e, i);
            var r, n, s = t.length !== +t.length && g.keys(t), a = (s || t).length;
            for (r = 0; r < a; r++)
                if (n = s ? s[r] : r,
                e(t[n], n, t))
                    return !0;
            return !1
        }
        ,
        g.contains = g.include = function(t, e) {
            return null != t && (t.length !== +t.length && (t = g.values(t)),
            g.indexOf(t, e) >= 0)
        }
        ,
        g.invoke = function(t, e) {
            var i = u.call(arguments, 2)
              , r = g.isFunction(e);
            return g.map(t, function(t) {
                return (r ? e : t[e]).apply(t, i)
            })
        }
        ,
        g.pluck = function(t, e) {
            return g.map(t, g.property(e))
        }
        ,
        g.where = function(t, e) {
            return g.filter(t, g.matches(e))
        }
        ,
        g.findWhere = function(t, e) {
            return g.find(t, g.matches(e))
        }
        ,
        g.max = function(t, e, i) {
            var r, n, s = -1 / 0, a = -1 / 0;
            if (null == e && null != t)
                for (var o = 0, l = (t = t.length === +t.length ? t : g.values(t)).length; o < l; o++)
                    (r = t[o]) > s && (s = r);
            else
                e = g.iteratee(e, i),
                g.each(t, function(t, i, r) {
                    ((n = e(t, i, r)) > a || n === -1 / 0 && s === -1 / 0) && (s = t,
                    a = n)
                });
            return s
        }
        ,
        g.min = function(t, e, i) {
            var r, n, s = 1 / 0, a = 1 / 0;
            if (null == e && null != t)
                for (var o = 0, l = (t = t.length === +t.length ? t : g.values(t)).length; o < l; o++)
                    (r = t[o]) < s && (s = r);
            else
                e = g.iteratee(e, i),
                g.each(t, function(t, i, r) {
                    ((n = e(t, i, r)) < a || n === 1 / 0 && s === 1 / 0) && (s = t,
                    a = n)
                });
            return s
        }
        ,
        g.shuffle = function(t) {
            for (var e, i = t && t.length === +t.length ? t : g.values(t), r = i.length, n = Array(r), s = 0; s < r; s++)
                (e = g.random(0, s)) !== s && (n[s] = n[e]),
                n[e] = i[s];
            return n
        }
        ,
        g.sample = function(t, e, i) {
            return null == e || i ? (t.length !== +t.length && (t = g.values(t)),
            t[g.random(t.length - 1)]) : g.shuffle(t).slice(0, Math.max(0, e))
        }
        ,
        g.sortBy = function(t, e, i) {
            return e = g.iteratee(e, i),
            g.pluck(g.map(t, function(t, i, r) {
                return {
                    value: t,
                    index: i,
                    criteria: e(t, i, r)
                }
            }).sort(function(t, e) {
                var i = t.criteria
                  , r = e.criteria;
                if (i !== r) {
                    if (i > r || void 0 === i)
                        return 1;
                    if (i < r || void 0 === r)
                        return -1
                }
                return t.index - e.index
            }), "value")
        }
        ;
        var _ = function(t) {
            return function(e, i, r) {
                var n = {};
                return i = g.iteratee(i, r),
                g.each(e, function(r, s) {
                    var a = i(r, s, e);
                    t(n, r, a)
                }),
                n
            }
        };
        g.groupBy = _(function(t, e, i) {
            g.has(t, i) ? t[i].push(e) : t[i] = [e]
        }),
        g.indexBy = _(function(t, e, i) {
            t[i] = e
        }),
        g.countBy = _(function(t, e, i) {
            g.has(t, i) ? t[i]++ : t[i] = 1
        }),
        g.sortedIndex = function(t, e, i, r) {
            for (var n = (i = g.iteratee(i, r, 1))(e), s = 0, a = t.length; s < a; ) {
                var o = s + a >>> 1;
                i(t[o]) < n ? s = o + 1 : a = o
            }
            return s
        }
        ,
        g.toArray = function(t) {
            return t ? g.isArray(t) ? u.call(t) : t.length === +t.length ? g.map(t, g.identity) : g.values(t) : []
        }
        ,
        g.size = function(t) {
            return null == t ? 0 : t.length === +t.length ? t.length : g.keys(t).length
        }
        ,
        g.partition = function(t, e, i) {
            e = g.iteratee(e, i);
            var r = []
              , n = [];
            return g.each(t, function(t, i, s) {
                (e(t, i, s) ? r : n).push(t)
            }),
            [r, n]
        }
        ,
        g.first = g.head = g.take = function(t, e, i) {
            if (null != t)
                return null == e || i ? t[0] : e < 0 ? [] : u.call(t, 0, e)
        }
        ,
        g.initial = function(t, e, i) {
            return u.call(t, 0, Math.max(0, t.length - (null == e || i ? 1 : e)))
        }
        ,
        g.last = function(t, e, i) {
            if (null != t)
                return null == e || i ? t[t.length - 1] : u.call(t, Math.max(t.length - e, 0))
        }
        ,
        g.rest = g.tail = g.drop = function(t, e, i) {
            return u.call(t, null == e || i ? 1 : e)
        }
        ,
        g.compact = function(t) {
            return g.filter(t, g.identity)
        }
        ;
        var w = function(t, e, i, r) {
            if (e && g.every(t, g.isArray))
                return c.apply(r, t);
            for (var n = 0, s = t.length; n < s; n++) {
                var a = t[n];
                g.isArray(a) || g.isArguments(a) ? e ? l.apply(r, a) : w(a, e, i, r) : i || r.push(a)
            }
            return r
        };
        g.flatten = function(t, e) {
            return w(t, e, !1, [])
        }
        ,
        g.without = function(t) {
            return g.difference(t, u.call(arguments, 1))
        }
        ,
        g.uniq = g.unique = function(t, e, i, r) {
            if (null == t)
                return [];
            g.isBoolean(e) || (r = i,
            i = e,
            e = !1),
            null != i && (i = g.iteratee(i, r));
            for (var n = [], s = [], a = 0, o = t.length; a < o; a++) {
                var l = t[a];
                if (e)
                    a && s === l || n.push(l),
                    s = l;
                else if (i) {
                    var u = i(l, a, t);
                    g.indexOf(s, u) < 0 && (s.push(u),
                    n.push(l))
                } else
                    g.indexOf(n, l) < 0 && n.push(l)
            }
            return n
        }
        ,
        g.union = function() {
            return g.uniq(w(arguments, !0, !0, []))
        }
        ,
        g.intersection = function(t) {
            if (null == t)
                return [];
            for (var e = [], i = arguments.length, r = 0, n = t.length; r < n; r++) {
                var s = t[r];
                if (!g.contains(e, s)) {
                    for (var a = 1; a < i && g.contains(arguments[a], s); a++)
                        ;
                    a === i && e.push(s)
                }
            }
            return e
        }
        ,
        g.difference = function(t) {
            var e = w(u.call(arguments, 1), !0, !0, []);
            return g.filter(t, function(t) {
                return !g.contains(e, t)
            })
        }
        ,
        g.zip = function(t) {
            if (null == t)
                return [];
            for (var e = g.max(arguments, "length").length, i = Array(e), r = 0; r < e; r++)
                i[r] = g.pluck(arguments, r);
            return i
        }
        ,
        g.object = function(t, e) {
            if (null == t)
                return {};
            for (var i = {}, r = 0, n = t.length; r < n; r++)
                e ? i[t[r]] = e[r] : i[t[r][0]] = t[r][1];
            return i
        }
        ,
        g.indexOf = function(t, e, i) {
            if (null == t)
                return -1;
            var r = 0
              , n = t.length;
            if (i) {
                if ("number" != typeof i)
                    return r = g.sortedIndex(t, e),
                    t[r] === e ? r : -1;
                r = i < 0 ? Math.max(0, n + i) : i
            }
            for (; r < n; r++)
                if (t[r] === e)
                    return r;
            return -1
        }
        ,
        g.lastIndexOf = function(t, e, i) {
            if (null == t)
                return -1;
            var r = t.length;
            for ("number" == typeof i && (r = i < 0 ? r + i + 1 : Math.min(r, i + 1)); --r >= 0; )
                if (t[r] === e)
                    return r;
            return -1
        }
        ,
        g.range = function(t, e, i) {
            arguments.length <= 1 && (e = t || 0,
            t = 0),
            i = i || 1;
            for (var r = Math.max(Math.ceil((e - t) / i), 0), n = Array(r), s = 0; s < r; s++,
            t += i)
                n[s] = t;
            return n
        }
        ;
        var T = function() {};
        g.bind = function(t, e) {
            var i, r;
            if (m && t.bind === m)
                return m.apply(t, u.call(arguments, 1));
            if (!g.isFunction(t))
                throw new TypeError("Bind must be called on a function");
            return i = u.call(arguments, 2),
            r = function() {
                if (!(this instanceof r))
                    return t.apply(e, i.concat(u.call(arguments)));
                T.prototype = t.prototype;
                var n = new T;
                T.prototype = null;
                var s = t.apply(n, i.concat(u.call(arguments)));
                return g.isObject(s) ? s : n
            }
        }
        ,
        g.partial = function(t) {
            var e = u.call(arguments, 1);
            return function() {
                for (var i = 0, r = e.slice(), n = 0, s = r.length; n < s; n++)
                    r[n] === g && (r[n] = arguments[i++]);
                for (; i < arguments.length; )
                    r.push(arguments[i++]);
                return t.apply(this, r)
            }
        }
        ,
        g.bindAll = function(t) {
            var e, i, r = arguments.length;
            if (r <= 1)
                throw new Error("bindAll must be passed function names");
            for (e = 1; e < r; e++)
                t[i = arguments[e]] = g.bind(t[i], t);
            return t
        }
        ,
        g.memoize = function(t, e) {
            var i = function(r) {
                var n = i.cache
                  , s = e ? e.apply(this, arguments) : r;
                return g.has(n, s) || (n[s] = t.apply(this, arguments)),
                n[s]
            };
            return i.cache = {},
            i
        }
        ,
        g.delay = function(t, e) {
            var i = u.call(arguments, 2);
            return setTimeout(function() {
                return t.apply(null, i)
            }, e)
        }
        ,
        g.defer = function(t) {
            return g.delay.apply(g, [t, 1].concat(u.call(arguments, 1)))
        }
        ,
        g.throttle = function(t, e, i) {
            var r, n, s, a = null, o = 0;
            i || (i = {});
            var l = function() {
                o = !1 === i.leading ? 0 : g.now(),
                a = null,
                s = t.apply(r, n),
                a || (r = n = null)
            };
            return function() {
                var u = g.now();
                o || !1 !== i.leading || (o = u);
                var c = e - (u - o);
                return r = this,
                n = arguments,
                c <= 0 || c > e ? (clearTimeout(a),
                a = null,
                o = u,
                s = t.apply(r, n),
                a || (r = n = null)) : a || !1 === i.trailing || (a = setTimeout(l, c)),
                s
            }
        }
        ,
        g.debounce = function(t, e, i) {
            var r, n, s, a, o, l = function() {
                var u = g.now() - a;
                u < e && u > 0 ? r = setTimeout(l, e - u) : (r = null,
                i || (o = t.apply(s, n),
                r || (s = n = null)))
            };
            return function() {
                s = this,
                n = arguments,
                a = g.now();
                var u = i && !r;
                return r || (r = setTimeout(l, e)),
                u && (o = t.apply(s, n),
                s = n = null),
                o
            }
        }
        ,
        g.wrap = function(t, e) {
            return g.partial(e, t)
        }
        ,
        g.negate = function(t) {
            return function() {
                return !t.apply(this, arguments)
            }
        }
        ,
        g.compose = function() {
            var t = arguments
              , e = t.length - 1;
            return function() {
                for (var i = e, r = t[e].apply(this, arguments); i--; )
                    r = t[i].call(this, r);
                return r
            }
        }
        ,
        g.after = function(t, e) {
            return function() {
                if (--t < 1)
                    return e.apply(this, arguments)
            }
        }
        ,
        g.before = function(t, e) {
            var i;
            return function() {
                return --t > 0 ? i = e.apply(this, arguments) : e = null,
                i
            }
        }
        ,
        g.once = g.partial(g.before, 2),
        g.keys = function(t) {
            if (!g.isObject(t))
                return [];
            if (f)
                return f(t);
            var e = [];
            for (var i in t)
                g.has(t, i) && e.push(i);
            return e
        }
        ,
        g.values = function(t) {
            for (var e = g.keys(t), i = e.length, r = Array(i), n = 0; n < i; n++)
                r[n] = t[e[n]];
            return r
        }
        ,
        g.pairs = function(t) {
            for (var e = g.keys(t), i = e.length, r = Array(i), n = 0; n < i; n++)
                r[n] = [e[n], t[e[n]]];
            return r
        }
        ,
        g.invert = function(t) {
            for (var e = {}, i = g.keys(t), r = 0, n = i.length; r < n; r++)
                e[t[i[r]]] = i[r];
            return e
        }
        ,
        g.functions = g.methods = function(t) {
            var e = [];
            for (var i in t)
                g.isFunction(t[i]) && e.push(i);
            return e.sort()
        }
        ,
        g.extend = function(t) {
            if (!g.isObject(t))
                return t;
            for (var e, i, r = 1, n = arguments.length; r < n; r++) {
                e = arguments[r];
                for (i in e)
                    d.call(e, i) && (t[i] = e[i])
            }
            return t
        }
        ,
        g.pick = function(t, e, i) {
            var r, n = {};
            if (null == t)
                return n;
            if (g.isFunction(e)) {
                e = v(e, i);
                for (r in t) {
                    var s = t[r];
                    e(s, r, t) && (n[r] = s)
                }
            } else {
                var a = c.apply([], u.call(arguments, 1));
                t = new Object(t);
                for (var o = 0, l = a.length; o < l; o++)
                    (r = a[o])in t && (n[r] = t[r])
            }
            return n
        }
        ,
        g.omit = function(t, e, i) {
            if (g.isFunction(e))
                e = g.negate(e);
            else {
                var r = g.map(c.apply([], u.call(arguments, 1)), String);
                e = function(t, e) {
                    return !g.contains(r, e)
                }
            }
            return g.pick(t, e, i)
        }
        ,
        g.defaults = function(t) {
            if (!g.isObject(t))
                return t;
            for (var e = 1, i = arguments.length; e < i; e++) {
                var r = arguments[e];
                for (var n in r)
                    void 0 === t[n] && (t[n] = r[n])
            }
            return t
        }
        ,
        g.clone = function(t) {
            return g.isObject(t) ? g.isArray(t) ? t.slice() : g.extend({}, t) : t
        }
        ,
        g.tap = function(t, e) {
            return e(t),
            t
        }
        ;
       
        g.isEqual = function(t, e) {
            return b(t, e, [], [])
        }
        ,
        g.isEmpty = function(t) {
            if (null == t)
                return !0;
            if (g.isArray(t) || g.isString(t) || g.isArguments(t))
                return 0 === t.length;
            for (var e in t)
                if (g.has(t, e))
                    return !1;
            return !0
        }
        ,
        g.isElement = function(t) {
            return !(!t || 1 !== t.nodeType)
        }
        ,
        g.isArray = p || function(t) {
            return "[object Array]" === h.call(t)
        }
        ,
        g.isObject = function(t) {
            var e = typeof t;
            return "function" === e || "object" === e && !!t
        }
        ,
        g.each(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function(t) {
            g["is" + t] = function(e) {
                return h.call(e) === "[object " + t + "]"
            }
        }),
        g.isArguments(arguments) || (g.isArguments = function(t) {
            return g.has(t, "callee")
        }
        ),
        g.isFunction = function(t) {
            return "function" == typeof t || !1
        }
        ,
        g.isFinite = function(t) {
            return isFinite(t) && !isNaN(parseFloat(t))
        }
        ,
        g.isNaN = function(t) {
            return g.isNumber(t) && t !== +t
        }
        ,
        g.isBoolean = function(t) {
            return !0 === t || !1 === t || "[object Boolean]" === h.call(t)
        }
        ,
        g.isNull = function(t) {
            return null === t
        }
        ,
        g.isUndefined = function(t) {
            return void 0 === t
        }
        ,
        g.has = function(t, e) {
            return null != t && d.call(t, e)
        }
        ,
        g.noConflict = function() {
            return i._ = n,
            this
        }
        ,
        g.identity = function(t) {
            return t
        }
        ,
        g.constant = function(t) {
            return function() {
                return t
            }
        }
        ,
        g.noop = function() {}
        ,
        g.property = function(t) {
            return function(e) {
                return e[t]
            }
        }
        ,
        g.matches = function(t) {
            var e = g.pairs(t)
              , i = e.length;
            return function(t) {
                if (null == t)
                    return !i;
                t = new Object(t);
                for (var r = 0; r < i; r++) {
                    var n = e[r]
                      , s = n[0];
                    if (n[1] !== t[s] || !(s in t))
                        return !1
                }
                return !0
            }
        }
        ,
        g.times = function(t, e, i) {
            var r = Array(Math.max(0, t));
            e = v(e, i, 1);
            for (var n = 0; n < t; n++)
                r[n] = e(n);
            return r
        }
        ,
        g.random = function(t, e) {
            return null == e && (e = t,
            t = 0),
            t + Math.floor(Math.random() * (e - t + 1))
        }
        ,
        g.now = Date.now || function() {
            return (new Date).getTime()
        }
        ;
        var x = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "`": "&#x60;"
        }
          , S = g.invert(x)
          , C = function(t) {
            var e = function(e) {
                return t[e]
            }
              , i = "(?:" + g.keys(t).join("|") + ")"
              , r = RegExp(i)
              , n = RegExp(i, "g");
            return function(t) {
                return t = null == t ? "" : "" + t,
                r.test(t) ? t.replace(n, e) : t
            }
        };
        g.escape = C(x),
        g.unescape = C(S),
        g.result = function(t, e) {
            if (null != t) {
                var i = t[e];
                return g.isFunction(i) ? t[e]() : i
            }
        }
        ;
        var P = 0;
        g.uniqueId = function(t) {
            var e = ++P + "";
            return t ? t + e : e
        }
        ,
        g.templateSettings = {
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: /<%=([\s\S]+?)%>/g,
            escape: /<%-([\s\S]+?)%>/g
        };
        var E = /(.)^/
          , k = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            "\u2028": "u2028",
            "\u2029": "u2029"
        }
          , A = /\\|'|\r|\n|\u2028|\u2029/g
          , M = function(t) {
            return "\\" + k[t]
        };
        g.template = function(t, e, i) {
            !e && i && (e = i),
            e = g.defaults({}, e, g.templateSettings);
            var r = RegExp([(e.escape || E).source, (e.interpolate || E).source, (e.evaluate || E).source].join("|") + "|$", "g")
              , n = 0
              , s = "__p+='";
            t.replace(r, function(e, i, r, a, o) {
                return s += t.slice(n, o).replace(A, M),
                n = o + e.length,
                i ? s += "'+\n((__t=(" + i + "))==null?'':_.escape(__t))+\n'" : r ? s += "'+\n((__t=(" + r + "))==null?'':__t)+\n'" : a && (s += "';\n" + a + "\n__p+='"),
                e
            }),
            s += "';\n",
            e.variable || (s = "with(obj||{}){\n" + s + "}\n"),
            s = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + s + "return __p;\n";
            try {
                var a = new Function(e.variable || "obj","_",s)
            } catch (t) {
                throw t.source = s,
                t
            }
            var o = function(t) {
                return a.call(this, t, g)
            }
              , l = e.variable || "obj";
            return o.source = "function(" + l + "){\n" + s + "}",
            o
        }
        ,
        g.chain = function(t) {
            var e = g(t);
            return e._chain = !0,
            e
        }
        ;
        var L = function(t) {
            return this._chain ? g(t).chain() : t
        };
        g.mixin = function(t) {
            g.each(g.functions(t), function(e) {
                var i = g[e] = t[e];
                g.prototype[e] = function() {
                    var t = [this._wrapped];
                    return l.apply(t, arguments),
                    L.call(this, i.apply(g, t))
                }
            })
        }
        ,
        g.mixin(g),
        g.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(t) {
            var e = s[t];
            g.prototype[t] = function() {
                var i = this._wrapped;
                return e.apply(i, arguments),
                "shift" !== t && "splice" !== t || 0 !== i.length || delete i[0],
                L.call(this, i)
            }
        }),
        g.each(["concat", "join", "slice"], function(t) {
            var e = s[t];
            g.prototype[t] = function() {
                return L.call(this, e.apply(this._wrapped, arguments))
            }
        }),
        g.prototype.value = function() {
            return this._wrapped
        }
        ,
        void 0 === (r = function() {
            return g
        }
        .apply(e, [])) || (t.exports = r)
    }
    ).call(this)
}
, function(t, e, i) {}
, function(t, e, i) {
    function r(t, e) {
        this._id = t,
        this._clearFn = e
    }
    var n = Function.prototype.apply;
    e.setTimeout = function() {
        return new r(n.call(setTimeout, window, arguments),clearTimeout)
    }
    ,
    e.setInterval = function() {
        return new r(n.call(setInterval, window, arguments),clearInterval)
    }
    ,
    e.clearTimeout = e.clearInterval = function(t) {
        t && t.close()
    }
    ,
    r.prototype.unref = r.prototype.ref = function() {}
    ,
    r.prototype.close = function() {
        this._clearFn.call(window, this._id)
    }
    ,
    e.enroll = function(t, e) {
        clearTimeout(t._idleTimeoutId),
        t._idleTimeout = e
    }
    ,
    e.unenroll = function(t) {
        clearTimeout(t._idleTimeoutId),
        t._idleTimeout = -1
    }
    ,
    e._unrefActive = e.active = function(t) {
        clearTimeout(t._idleTimeoutId);
        var e = t._idleTimeout;
        e >= 0 && (t._idleTimeoutId = setTimeout(function() {
            t._onTimeout && t._onTimeout()
        }, e))
    }
    ,
    i(9),
    e.setImmediate = setImmediate,
    e.clearImmediate = clearImmediate
}
, function(t, e, ) {}
, function(t, e) {}
, function(t, e, i) {}
, function(t, e, i) {
    "use strict";
    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    
    function s(t) {
        for (var e = t.length - 1; e >= 0; e--)
            y.observe(t[e])
    }
    function a(t) {
        if ("undefined" != typeof videos && Modernizr.inpagevideo)
            for (var e = t.length - 1; e >= 0; e--)
                _.observe(t[e])
    }
    function o(t, e) {
        t.forEach(function(t) {
            t.isIntersecting ? t.target.classList.add("is-in-view") : t.target.classList.remove("is-in-view")
        })
    }
    function l(t, e) {
        t.forEach(function(t) {
            t.isIntersecting ? t.target.play().catch(function(t) {
                console.log(t)
            }) : t.target.pause().catch(function(t) {
                console.log(t)
            })
        })
    }
    function u(t, e) {
        t.addEventListener("mouseover", function() {
            t.classList.add("is-highlighted"),
            e.classList.add("is-filtered"),
            x = t
        }),
        t.addEventListener("mouseout", function() {
            t.classList.remove("is-highlighted"),
            e.classList.remove("is-filtered"),
            x = null
        })
    }
    function c(t) {
        for (var e = t.length - 1; e >= 0; e--) {
            var i = t[e].firstElementChild;
            i && u(i, g)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.default = function() {
        if (g = document.querySelector(".grid"),
        v = document.querySelector(".lazyload-page"),
        w = document.querySelector(".paginate-next"),
        y = new IntersectionObserver(o,{
            threshold: [0, 1]
        }),
        _ = new IntersectionObserver(l,{
            threshold: [0, .5, 1]
        }),
        g) {
            v && w && new IntersectionObserver(n,{
                threshold: [1]
            }).observe(w);
          
            for (var r = t.length - 1; r >= 0; r--)
                t[r].addEventListener("loadedmetadata", function() {
                    b.layout()
                })
        }
    }
    ;
    var h = r(i(13))
      , d = (r(i(20)),
    i(6))
      , p = i(3)
      , f = i(21);
    i(55);
    var m = r(i(51))
      , g = void 0
      , v = void 0
      , y = void 0
      , _ = void 0
      , w = void 0
      , T = void 0
      , b = void 0
      , x = void 0
      , S = (0,
    d.throttle)(function() {
        x && (x.classList.remove("is-highlighted"),
        g.classList.remove("is-filtered"))
    }, 100)
}
, function(t, e, i) {}
, function(t, e, i) {}
, function(t, e, i) {}
, function(t, e, i) {}
, function(t, e, i) {}
, function(t, e, i) {}
, function(t, e, i) {}
, function(t, e, i) {}
, function(t, e, i) {}
, function(t, e, i) {}
, function(t, e, i) {}
, function(t, e, i) {}
, function(t, e, i) {}
, function(t, e, i) {}
, function(t, e, i) {}
, function(t, e) {}
, function(t, e) {}
, function(t, e, i) {}
, function(t, e, i) {}
, function(t, e, i) {}
, function(t, e, i) {}
, function(t, e, i) {}
, function(t, e, i) {}
, function(t, e) {}
, function(t, e, i) {}
, function(t, e, i) {}
, function(t, e, i) {}
, function(t, e) {}
, function(t, e, i) {}
, function(t, e, i) {}
, function(t, e, i) {}
, function(t, e, i) {}
, function(t, e) {}
, function(t, e) {}
, function(t, e) {}
, function(t, e) {}
, function(t, e, i) {}
, function(t, e) {}
, function(t, e, i) {}
, function(t, e, i) {}
, function(t, e, i) {}
, function(t, e, i) {}
, function(t, e) {}
, function(t, e) {}
, function(t, e) {}
, function(t, e, i) {}
, function(t, e, i) {}
, function(t, e, i) {}
, function(t, e, i) {}
, function(t, e, i) {
    var r, n, s;
    !function(i, a) {
        "use strict";
        n = [],
        void 0 === (s = "function" == typeof (r = a) ? r.apply(e, n) : r) || (t.exports = s)
    }(0, function() {
        "use strict";
        var t = /calc\(/g
          , e = /["']/g
          , i = window.navigator.userAgent
          , r = /MSIE [0-9]\./i.test(i);
        return r || (r = !!navigator.userAgent.match(/MSIE 10\.|Trident.*rv[ :]*1[01]\.| Edge\/1\d\./)),
        {
            required: function(t) {
                return t.isMobileSafari || r
            },
            initialize: function() {},
            initializeEvents: function(t, e, i) {
                t.force || r && !t._listeningToResize && (window.addEventListener("resize", i, !0),
                t._listeningToResize = !0)
            },
            findDeclarations: function(i, r, n, s) {
                null !== n && function(i, r, n, s) {
                    "content" === n && s.indexOf("viewport-units-buggyfill") > -1 && s.replace(e, "").split(";").forEach(function(e) {
                        var n = e.split(":");
                        if (2 === n.length) {
                            var s = n[0].trim();
                            if ("viewport-units-buggyfill" !== s) {
                                var a = n[1].trim();
                                if (i.push([r, s, a]),
                                t.test(a)) {
                                    var o = a.replace(t, "-webkit-calc(");
                                    i.push([r, s, o])
                                }
                            }
                        }
                    })
                }(i, r, n, s)
            },
            overwriteDeclaration: function(t, e, i) {
                return r && "filter" === e && (i = i.replace(/px/g, "")),
                i
            }
        }
    })
}
, function(t, e, i) {
    var r, n, s;
    !function(i, a) {
        "use strict";
        n = [],
        void 0 === (s = "function" == typeof (r = a) ? r.apply(e, n) : r) || (t.exports = s)
    }(0, function() {
        "use strict";
        function t() {
            c && (e(),
            setTimeout(function() {
                u.textContent = r(),
                u.parentNode.appendChild(u),
                window.dispatchEvent(new w("viewport-units-buggyfill-style"))
            }, 1))
        }
        function e() {
            return l = [],
            f.call(document.styleSheets, function(t) {
                var e = function(t) {
                    try {
                        if (!t.cssRules)
                            return
                    } catch (t) {
                        if ("SecurityError" !== t.name)
                            throw t;
                        return
                    }
                    for (var e = [], i = 0; i < t.cssRules.length; i++) {
                        var r = t.cssRules[i];
                        e.push(r)
                    }
                    return e
                }(t);
                e && "patched-viewport" !== t.ownerNode.id && "ignore" !== t.ownerNode.getAttribute("data-viewport-units-buggyfill") && (t.media && t.media.mediaText && window.matchMedia && !window.matchMedia(t.media.mediaText).matches || f.call(e, i))
            }),
            l
        }
        
        function i(t) {
            if (7 === t.type) {
                var e;
                try {
                    e = t.cssText
                } catch (t) {
                    return
                }
                return d.lastIndex = 0,
                void (d.test(e) && !p.test(e) && (l.push([t, null, e]),
                a.hacks && a.hacks.findDeclarations(l, t, null, e)))
            }
            if (t.style)
                f.call(t.style, function(e) {
                    var i = t.style.getPropertyValue(e);
                    t.style.getPropertyPriority(e) && (i += " !important"),
                    d.lastIndex = 0,
                    d.test(i) && (l.push([t, e, i]),
                    a.hacks && a.hacks.findDeclarations(l, t, e, i))
                });
            else {
                if (!t.cssRules)
                    return;
                f.call(t.cssRules, function(t) {
                    i(t)
                })
            }
        }
        
        function r() {
            o = function() {
                var t = window.innerHeight
                  , e = window.innerWidth;
                return {
                    vh: t,
                    vw: e,
                    vmax: Math.max(e, t),
                    vmin: Math.min(e, t)
                }
            }();
            var t, e, i = [], r = [];
            return l.forEach(function(s) {
                var o = function(t, e, i) {
                    var r, s = [];
                    r = i.replace(d, n),
                    a.hacks && (r = a.hacks.overwriteDeclaration(t, e, r));
                    e && (s.push(t.selectorText),
                    r = e + ": " + r + ";");
                    var o = t.parentRule;
                    for (; o; )
                        o.media ? s.unshift("@media " + o.media.mediaText) : o.conditionText && s.unshift("@supports " + o.conditionText),
                        o = o.parentRule;
                    return {
                        selector: s,
                        content: r
                    }
                }
                .apply(null, s)
                  , l = o.selector.length ? o.selector.join(" {\n") + " {\n" : ""
                  , u = new Array(o.selector.length + 1).join("\n}");
                if (!l || l !== t)
                    return r.length && (i.push(t + r.join("\n") + e),
                    r.length = 0),
                    void (l ? (t = l,
                    e = u,
                    r.push(o.content)) : (i.push(o.content),
                    t = null,
                    e = null));
                l && !t && (t = l,
                e = u),
                r.push(o.content)
            }),
            r.length && i.push(t + r.join("\n") + e),
            v && i.push("* { content: normal !important; }"),
            i.join("\n\n")
        }
        function n(t, e, i) {
            var r = o[i];
            return parseFloat(e) / 100 * r + "px"
        }
        function s(t) {
            return t.slice(0, t.indexOf("/", t.indexOf("://") + 3))
        }
        var a, o, l, u, c = !1, h = window.navigator.userAgent, d = /([+-]?[0-9.]+)(vh|vw|vmin|vmax)/g, p = /(https?:)?\/\//, f = [].forEach, m = /MSIE [0-9]\./i.test(h), g = /MSIE [0-8]\./i.test(h), v = h.indexOf("Opera Mini") > -1, y = /(iPhone|iPod|iPad).+AppleWebKit/i.test(h) && function() {
            var t = h.match(/OS (\d)/);
            return t && t.length > 1 && parseInt(t[1]) < 10
        }(), _ = function() {
            if (!(h.indexOf(" Android ") > -1))
                return !1;
            if (!(h.indexOf("Version/") > -1))
                return !1;
            return parseFloat((h.match("Android ([0-9.]+)") || [])[1]) <= 4.4
        }();
        m || (m = !!navigator.userAgent.match(/MSIE 10\.|Trident.*rv[ :]*1[01]\.| Edge\/1\d\./));
        try {
            new w("test")
        } catch (t) {
            var w = function(t, e) {
                var i;
                return e = e || {
                    bubbles: !1,
                    cancelable: !1,
                    detail: void 0
                },
                (i = document.createEvent("CustomEvent")).initCustomEvent(t, e.bubbles, e.cancelable, e.detail),
                i
            };
            w.prototype = window.Event.prototype,
            window.CustomEvent = w
        }
        return {
            version: "0.6.1",
            findProperties: e,
            getCss: r,
            init: function(e) {
                if (!c) {
                    if (!0 === e && (e = {
                        force: !0
                    }),
                    a = e || {},
                    a.isMobileSafari = y,
                    a.isBadStockAndroid = _,
                    !a.ignoreVmax || a.force || g || (m = !1),
                    g || !a.force && !y && !m && !_ && !v && (!a.hacks || !a.hacks.required(a)))
                        return window.console && g && console.info("viewport-units-buggyfill requires a proper CSSOM and basic viewport unit support, which are not available in IE8 and below"),
                        {
                            init: function() {}
                        };
                    window.dispatchEvent(new w("viewport-units-buggyfill-init")),
                    a.hacks && a.hacks.initialize(a),
                    c = !0,
                    (u = document.createElement("style")).id = "patched-viewport",
                    document[a.appendToBody ? "body" : "head"].appendChild(u),
                    function(t) {
                        var e = 0
                          , i = function() {
                            --e || t()
                        };
                        f.call(document.styleSheets, function(t) {
                            t.href && s(t.href) !== s(location.href) && "ignore" !== t.ownerNode.getAttribute("data-viewport-units-buggyfill") && (e++,
                            function(t, e) {
                                !function(t, e, i) {
                                    var r = new XMLHttpRequest;
                                    if ("withCredentials"in r)
                                        r.open("GET", t, !0);
                                    else {
                                        if ("undefined" == typeof XDomainRequest)
                                            throw new Error("cross-domain XHR not supported");
                                        (r = new XDomainRequest).open("GET", t)
                                    }
                                    r.onload = e,
                                    r.onerror = i,
                                    r.send()
                                }(t.href, function() {
                                    var i = document.createElement("style");
                                    i.media = t.media,
                                    i.setAttribute("data-href", t.href),
                                    i.textContent = this.responseText,
                                    t.parentNode.replaceChild(i, t),
                                    e()
                                }, e)
                            }(t.ownerNode, i))
                        }),
                        e || t()
                    }(function() {
                        var e = function(t, e) {
                            var i;
                            return function() {
                                var r = this
                                  , n = arguments;
                                clearTimeout(i),
                                i = setTimeout(function() {
                                    t.apply(r, n)
                                }, e)
                            }
                        }(t, a.refreshDebounceWait || 100);
                        window.addEventListener("orientationchange", e, !0),
                        window.addEventListener("pageshow", e, !0),
                        (a.force || m || function() {
                            try {
                                return window.self !== window.top
                            } catch (t) {
                                return !0
                            }
                        }()) && (window.addEventListener("resize", e, !0),
                        a._listeningToResize = !0),
                        a.hacks && a.hacks.initializeEvents(a, t, e),
                        t()
                    })
                }
            },
            refresh: t
        }
    })
}
]);
