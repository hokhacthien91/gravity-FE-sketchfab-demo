(this["webpackJsonphonda-mc-spa"] = this["webpackJsonphonda-mc-spa"] || []).push([[0], {
  10: function(e, t, n) {
      "use strict";
      n.d(t, "f", (function() {
          return s
      }
      )),
      n.d(t, "g", (function() {
          return d
      }
      )),
      n.d(t, "d", (function() {
          return u
      }
      )),
      n.d(t, "c", (function() {
          return b
      }
      )),
      n.d(t, "b", (function() {
          return f
      }
      )),
      n.d(t, "e", (function() {
          return m
      }
      )),
      n.d(t, "n", (function() {
          return p
      }
      )),
      n.d(t, "j", (function() {
          return j
      }
      )),
      n.d(t, "o", (function() {
          return h
      }
      )),
      n.d(t, "k", (function() {
          return O
      }
      )),
      n.d(t, "a", (function() {
          return v
      }
      )),
      n.d(t, "q", (function() {
          return C
      }
      )),
      n.d(t, "r", (function() {
          return g
      }
      )),
      n.d(t, "t", (function() {
          return x
      }
      )),
      n.d(t, "l", (function() {
          return y
      }
      )),
      n.d(t, "i", (function() {
          return w
      }
      )),
      n.d(t, "h", (function() {
          return L
      }
      )),
      n.d(t, "p", (function() {
          return _
      }
      )),
      n.d(t, "m", (function() {
          return S
      }
      )),
      n.d(t, "s", (function() {
          return E
      }
      ));
      var r = n(321)
        , i = n(3)
        , a = n(5)
        , c = n(322)
        , o = n.n(c)
        , l = function(e, t) {
          var n = e;
          for (var r in t)
              n = n.replace(new RegExp(r,"g"), t[r]);
          return n
      }
        , s = function(e, t, n) {
          var r;
          if (null !== n && void 0 !== n && n.hideIfZero && !e)
              return null !== (r = n.zeroValueLabel) && void 0 !== r ? r : "";
          var i = a.c.getState().financeSettings
            , c = i && i.priceDecimals ? i.priceDecimals : 0
            , l = t || "en-GB"
            , s = Number.isInteger(e) && null !== n && void 0 !== n && n.trimIntegers && 0 === c ? 0 : 0 === c ? 2 : c;
          return o.a.format(e || 0, {
              locale: l,
              precision: s
          })
      }
        , d = function() {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
          var r = t[0]
            , i = t[1]
            , a = t[2]
            , c = s(r, i, a);
          return i && i.endsWith("-DE") ? "".concat(c, "*") : c
      }
        , u = function(e, t) {
          if (void 0 === e)
              return "-";
          var n = a.c.getState().financeSettings
            , r = n && n.interestRateDecimals ? n.interestRateDecimals : 2
            , i = new Intl.NumberFormat(t,{
              minimumFractionDigits: r,
              maximumFractionDigits: r
          });
          return "".concat(i.format(e), "%")
      }
        , b = function(e, t) {
          if (void 0 === e)
              return "-";
          var n = a.c.getState().financeSettings
            , r = n && n.aprDecimals ? n.aprDecimals : 2
            , i = new Intl.NumberFormat(t,{
              minimumFractionDigits: r,
              maximumFractionDigits: r
          });
          return "".concat(i.format(e), "%")
      }
        , f = function(e, t, n) {
          return !e || e <= 0 ? null : s(e, t, n)
      }
        , m = function(e, t) {
          return new Intl.NumberFormat(t).format(e)
      }
        , p = function(e, t, n, r) {
          return l(e, {
              "{COST}": s(n, t),
              "{APR}": "".concat(null === r || void 0 === r ? void 0 : r.toFixed(1), "%")
          })
      }
        , j = function(e, t, n) {
          return "".concat(e, " ").concat(s(n, t))
      }
        , h = function(e, t, n) {
          return l(e, {
              "{PRICE}": s(n, t)
          })
      }
        , O = function(e, t, n) {
          return l(e, {
              "{DEPOSIT}": s(n, t)
          })
      }
        , v = function(e) {
          return a.c.getState().financeSettings.enableFinance && !e.disableFinance && (e.financeCode.length > 0 || a.c.getState().useAlternateData)
      }
        , C = function(e, t) {
          var n;
          if (!(null === t || void 0 === t ? void 0 : t.priceTbc))
              return null === (n = e.colours.find((function(e) {
                  return e.id === (null === t || void 0 === t ? void 0 : t.id)
              }
              ))) || void 0 === n ? void 0 : n.price
      }
        , g = function(e, t, n, r) {
          var i, a, c, o = e.finance;
          return !(null === o || void 0 === o || !o.enableFinance) && ((null === t || void 0 === t || !t.disableFinance) && (!!r || (!(null === (i = e.finance) || void 0 === i || null === (a = i.externalFinanceCalculator) || void 0 === a || !a.enabled) || !(null === t || void 0 === t || null === (c = t.financeCode) || void 0 === c || !c.length) && !(null === n || void 0 === n || !n.financeType))))
      }
        , x = function(e) {
          return e.map((function(e) {
              return (null === e || void 0 === e ? void 0 : e.price) || 0
          }
          )).reduce((function(e, t) {
              return e + t
          }
          ), 0)
      }
        , y = function(e, t) {
          return t.financeType.includes("KML") ? e.finance_form_finance_details_leasing && "".concat(e.finance_form_finance_details_leasing, "**") : e.finance_form_finance_details && "".concat(e.finance_form_finance_details, "**")
      }
        , w = function(e, t) {
          return t > 0 ? t / 100 * e : 0
      }
        , L = function(e, t, n, r, c, o, l, s) {
          var d, u, b, f, m = null === o || void 0 === o ? void 0 : o.financeCode, p = null === o || void 0 === o ? void 0 : o.financeType, j = null === o || void 0 === o ? void 0 : o.financeTerm, h = m, O = null !== (d = null === n || void 0 === n ? void 0 : n.price) && void 0 !== d ? d : 0, v = a.c.getState();
          null !== (u = v.financeSettings) && void 0 !== u && u.enableFinance && null !== n && void 0 !== n && n.financeCode && (h = n.financeCode,
          O = 0);
          var C = a.a.getState().getTotalAccessoryCost()
            , g = a.a.getState().getTotalAccessoryInstallCost();
          void 0 === l && (l = v.getSelectedMileage()),
          void 0 === s && (s = v.selectedRepaymentTime() || j);
          var x = v.isServicingIncluded ? v.servicingCost : 0
            , y = {
              regionCode: r,
              financeCode: h,
              financeType: p,
              annualMileage: l,
              depositAmount: c,
              financeTerm: s,
              basePrice: e,
              colourCost: O,
              accessoriesCost: C + g,
              servicingCost: x,
              useAlternateFinance: v.useAlternateData
          };
          if (null !== (b = window) && void 0 !== b && null !== (f = b.initialState) && void 0 !== f && f.locale.includes("DE") || null !== r && void 0 !== r && r.includes("DE")) {
              var w = e - t;
              return Object(i.a)(Object(i.a)({}, y), {}, {
                  basePrice: t,
                  colourCost: O,
                  accessoriesCost: C + w + g,
                  servicingCost: x,
                  useAlternateFinance: v.useAlternateData
              })
          }
          return y
      }
        , _ = function(e, t, n) {
          return l(e, {
              "{PAYMENTS}": n,
              "{DURATION}": t
          })
      }
        , S = function e(t) {
          if (t.length) {
              var n = Object(r.a)(t)
                , i = n[0]
                , a = n.slice(1);
              return i && i.length > 0 ? i : e(a)
          }
      }
        , E = function(e) {
          var t, n, r, i = a.a.getState().selectedAccessories, c = a.d.getState(), o = c.getSelectedColour, l = c.getSelectedVariant, s = c.model, d = o(), u = l(), b = e.finance.externalFinanceCalculator.externalUrlTemplate.replace("{productId}", null !== (t = null === s || void 0 === s ? void 0 : s.id) && void 0 !== t ? t : "").replace("{variantId}", null !== (n = null === u || void 0 === u ? void 0 : u.id) && void 0 !== n ? n : "").replace("{colorId}", null !== (r = null === d || void 0 === d ? void 0 : d.id) && void 0 !== r ? r : "").replace("{addedAccessoryIds}", i.map((function(e) {
              return e.id
          }
          )).join(","));
          window.location.href = b
      }
  },
  112: function(e, t, n) {
      "use strict";
      n.d(t, "a", (function() {
          return a
      }
      )),
      n.d(t, "b", (function() {
          return c
      }
      ));
      var r = n(16)
        , i = n(0);
      function a(e) {
          var t, n = Object(i.useState)(!1), a = Object(r.a)(n, 2), c = a[0], o = a[1], l = new IntersectionObserver((function(e) {
              var t = Object(r.a)(e, 1)[0];
              return o(t.isIntersecting)
          }
          ));
          return Object(i.useEffect)((function() {
              if (e && e.current)
                  return l.observe(e.current),
                  function() {
                      l.disconnect()
                  }
          }
          ), [null === (t = window) || void 0 === t ? void 0 : t.scrollY]),
          c
      }
      function c(e) {
          var t, n = Object(i.useState)(0), a = Object(r.a)(n, 2), c = a[0], o = a[1], l = new IntersectionObserver((function(e) {
              var t = Object(r.a)(e, 1)[0];
              return o(t.intersectionRatio)
          }
          ));
          return Object(i.useEffect)((function() {
              if (e && e.current)
                  return l.observe(e.current),
                  function() {
                      l.disconnect()
                  }
          }
          ), [null === (t = window) || void 0 === t ? void 0 : t.scrollY]),
          c
      }
  },
  113: function(e, t, n) {
      "use strict";
      n.d(t, "b", (function() {
          return d
      }
      )),
      n.d(t, "c", (function() {
          return u
      }
      ));
      var r = n(20)
        , i = n(26)
        , a = n(341)
        , c = n(49)
        , o = n(46)
        , l = n(139)
        , s = Object.freeze({
          SAVE_CONFIG: "SAVE_CONFIG"
      })
        , d = function() {
          var e = Object(i.a)(Object(r.a)().mark((function e(t) {
              var n, i, a, s;
              return Object(r.a)().wrap((function(e) {
                  for (; ; )
                      switch (e.prev = e.next) {
                      case 0:
                          return i = "".concat(o.a.SAVE_CONFIG),
                          null !== (n = window.api) && void 0 !== n && n.share && (i = window.api.share),
                          e.next = 4,
                          c.a.post(i, t);
                      case 4:
                          return a = e.sent,
                          s = a.data || {
                              data: l
                          },
                          e.abrupt("return", s);
                      case 7:
                      case "end":
                          return e.stop()
                      }
              }
              ), e)
          }
          )));
          return function(t) {
              return e.apply(this, arguments)
          }
      }()
        , u = function() {
          return new URLSearchParams(document.location.search).get("id")
      };
      t.a = function(e) {
          return Object(a.a)(s.SAVE_CONFIG, (function() {
              return d(e)
          }
          ), {
              enabled: !!e
          })
      }
  },
  12: function(e, t, n) {
      "use strict";
      n.d(t, "a", (function() {
          return u
      }
      )),
      n.d(t, "b", (function() {
          return v
      }
      )),
      n.d(t, "e", (function() {
          return w
      }
      )),
      n.d(t, "d", (function() {
          return L.a
      }
      )),
      n.d(t, "c", (function() {
          return _.a
      }
      )),
      n.d(t, "l", (function() {
          return S.a
      }
      )),
      n.d(t, "h", (function() {
          return I
      }
      )),
      n.d(t, "i", (function() {
          return T
      }
      )),
      n.d(t, "g", (function() {
          return M
      }
      )),
      n.d(t, "f", (function() {
          return k.a
      }
      )),
      n.d(t, "j", (function() {
          return R.a
      }
      )),
      n.d(t, "k", (function() {
          return D
      }
      )),
      n.d(t, "m", (function() {
          return B
      }
      ));
      var r = n(20)
        , i = n(26)
        , a = n(341)
        , c = n(49)
        , o = n(46)
        , l = n(5)
        , s = Object.freeze({
          ACCESSORIES_DATA: "ACCESSORIES_DATA"
      })
        , d = function() {
          var e = Object(i.a)(Object(r.a)().mark((function e(t, n) {
              var i, a, l, s, d, u, b;
              return Object(r.a)().wrap((function(e) {
                  for (; ; )
                      switch (e.prev = e.next) {
                      case 0:
                          return a = "".concat(o.a.ACCESSORIES_DATA, "/").concat(t, "/").concat(n, "/accessories"),
                          null !== (i = window.api) && void 0 !== i && i.accessories && (l = window.api.accessories,
                          s = l.indexOf("accessories?"),
                          d = [l.slice(0, s), "".concat(n, "/"), l.slice(s)].join(""),
                          a = d),
                          e.next = 4,
                          c.a.get(a);
                      case 4:
                          return u = e.sent,
                          b = u.data,
                          e.abrupt("return", b);
                      case 7:
                      case "end":
                          return e.stop()
                      }
              }
              ), e)
          }
          )));
          return function(t, n) {
              return e.apply(this, arguments)
          }
      }()
        , u = function(e, t) {
          var n = Object(l.a)((function(e) {
              return e.setCategories
          }
          ))
            , r = function() {
              console.error("failed to fetch accessories")
          };
          return Object(a.a)([s.ACCESSORIES_DATA, t], (function() {
              return d(e, t)
          }
          ), {
              enabled: !(!e || !t),
              onError: function() {
                  return r
              },
              onSuccess: function(e) {
                  return t = e.categories,
                  void n(t);
                  var t
              }
          })
      }
        , b = n(16)
        , f = n(0)
        , m = n.n(f)
        , p = n(13)
        , j = {
          mobile: [600, 280],
          tablet: [1e3, 500],
          desktop: [1600, 1300]
      }
        , h = {
          mobile: .6,
          tablet: .7,
          desktop: .5
      }
        , O = "mobile"
        , v = function() {
          var e = Object(f.useState)(1)
            , t = Object(b.a)(e, 2)
            , n = t[0]
            , r = t[1]
            , i = function() {
              var e = window.innerWidth
                , t = window.innerHeight;
              O = "mobile",
              e > parseInt(null === p.a || void 0 === p.a ? void 0 : p.a.breakpoints.sm) && e < parseInt(null === p.a || void 0 === p.a ? void 0 : p.a.breakpoints.md) && (O = "tablet"),
              e > parseInt(null === p.a || void 0 === p.a ? void 0 : p.a.breakpoints.md) && (O = "desktop");
              var n = j[O]
                , i = e / n[0]
                , a = t / n[1]
                , c = i;
              "desktop" === O && (c = t < n[1] ? a : i);
              var o = Math.min(Math.max(c, h[O]), 1);
              r(o)
          };
          return Object(f.useEffect)((function() {
              return window.addEventListener("resize", i),
              i(),
              function() {
                  return window.removeEventListener("resize", i)
              }
          }
          ), []),
          n
      }
        , C = n(139)
        , g = n(27)
        , x = Object.freeze({
          MODEL_DATA: "MODEL_DATA"
      })
        , y = function() {
          var e = Object(i.a)(Object(r.a)().mark((function e(t) {
              var n, i, a, l;
              return Object(r.a)().wrap((function(e) {
                  for (; ; )
                      switch (e.prev = e.next) {
                      case 0:
                          return i = "".concat(o.a.MODEL_DATA, "/").concat(t),
                          null !== (n = window.api) && void 0 !== n && n.model && (i = window.api.model),
                          e.next = 4,
                          c.a.get(i);
                      case 4:
                          return a = e.sent,
                          l = a.data || {
                              data: C
                          },
                          e.abrupt("return", l);
                      case 7:
                      case "end":
                          return e.stop()
                      }
              }
              ), e)
          }
          )));
          return function(t) {
              return e.apply(this, arguments)
          }
      }()
        , w = function(e) {
          var t = Object(l.d)((function(e) {
              return e.setModel
          }
          ))
            , n = Object(l.d)((function(e) {
              return e.setSelectedVariantIndex
          }
          ))
            , r = Object(l.d)((function(e) {
              return e.setSelectedColourIndex
          }
          ))
            , i = Object(l.a)((function(e) {
              return e.setSelectedAccessories
          }
          ))
            , c = function() {
              return console.warn("fetching model failed, falling back to mockdata"),
              {
                  data: C
              }
          };
          return Object(a.a)(x.MODEL_DATA, (function() {
              return y(e)
          }
          ), {
              enabled: !!e,
              onError: function() {
                  return c
              },
              onSuccess: function(e) {
                  return function(e) {
                      t(e);
                      var a = l.d.getState()
                        , c = a.selectedVariantIndex
                        , o = a.selectedColourIndex
                        , s = Object(g.a)(c, 0, e.variants.length - 1);
                      n(s),
                      r(Object(g.a)(o, 0, e.variants[s].colours.length - 1));
                      var d = l.a.getState().selectedAccessories || e.variants[0].appDefaultParts || [];
                      i(d)
                  }(e)
              }
          })
      }
        , L = n(91)
        , _ = n(54)
        , S = n(68)
        , E = n(43)
        , I = function() {
          return new URLSearchParams(Object(E.h)().search)
      };
      var T = function(e, t, n) {
          var r = Object(f.useState)(!1)
            , i = Object(b.a)(r, 2)
            , a = i[0]
            , c = i[1]
            , o = Object(f.useState)()
            , l = Object(b.a)(o, 2)
            , s = l[0]
            , d = l[1]
            , u = null === t || void 0 === t ? void 0 : t.locale
            , m = null === t || void 0 === t ? void 0 : t.finance
            , p = "honda-mc-location-".concat(n, "-").concat(u);
          return Object(f.useEffect)((function() {
              var t;
              if (n && u && m) {
                  if (a)
                      d(void 0);
                  else {
                      c(!0);
                      var r = window.localStorage.getItem(p);
                      r && d(JSON.parse(r))
                  }
                  null !== (t = m.externalFinanceCalculator) && void 0 !== t && t.enabled && "/finance" === e.pathname || function(e, t) {
                      try {
                          window.localStorage.setItem(e, t)
                      } catch (n) {
                          !function(e) {
                              if (e)
                                  if (e.code)
                                      switch (e.code) {
                                      case 22:
                                          !0;
                                          break;
                                      case 1014:
                                          "NS_ERROR_DOM_QUOTA_REACHED" === e.name && !0
                                      }
                                  else
                                      -2147024882 === e.number && !0
                          }(n)
                      }
                  }(p, JSON.stringify(e))
              }
          }
          ), [e, n, u, !!m]),
          s
      }
        , A = !1;
      function M(e, t, n) {
          Object(f.useEffect)((function() {
              if (n && t && t.length > 0) {
                  var r = document.createElement("script")
                    , i = "https://cdn.cookielaw.org/consent/".concat(t, "/OtAutoBlock.js");
                  r.src = i,
                  r.async = !0,
                  r.type = "text/javascript",
                  document.body.appendChild(r)
              }
              var a;
              return e && e.length > 0 && !A && ((a = document.createElement("script")).src = e,
              a.async = !0,
              a.type = "text/javascript",
              t && t.length > 0 && (a.dataset.domainScript = t),
              A = !0,
              document.body.appendChild(a),
              function(e) {
                  var t = function() {};
                  e && (t = function() {
                      window.dataLayer = window.dataLayer || []
                  }
                  ),
                  t()
              }(void 0 !== t && t.length > 0)),
              function() {}
          }
          ), [e])
      }
      var k = n(112)
        , R = n(113)
        , P = "undefined" !== typeof window;
      function F() {
          return P ? {
              x: window.scrollX,
              y: window.scrollY
          } : {
              x: 0,
              y: 0
          }
      }
      var D = function(e, t) {
          var n = F()
            , r = function() {
              var t = F();
              e && e(n, t),
              n = t
          };
          Object(f.useEffect)((function() {
              var e = function() {
                  window.requestAnimationFrame(r)
              };
              return window.addEventListener("scroll", e, {
                  passive: !0
              }),
              function() {
                  return window.removeEventListener("scroll", e)
              }
          }
          ), t)
      }
        , N = n(159)
        , B = function() {
          return m.a.useContext(N.a)
      }
  },
  13: function(e, t, n) {
      "use strict";
      var r = n(3)
        , i = n(14)
        , a = n(35)
        , c = n(5)
        , o = {
          styles: {
              global: {
                  "*": {
                      userSelect: "none",
                      outline: c.b.getState().tabbing ? "auto" : "none",
                      WebkitTapHighlightColor: "transparent",
                      WebkitOverflowScrolling: "touch",
                      WebkitBackfaceVisibility: "hiiden"
                  },
                  "html, body": Object(r.a)(Object(r.a)({
                      marginTop: 0,
                      fontSize: "10px",
                      color: "brand.slate",
                      overflowX: "hidden"
                  }, c.b.getState().isAEMIframe ? {
                      height: "800px"
                  } : {
                      minHeight: "100vh"
                  }), {}, {
                      scrollBehavior: "smooth"
                  }),
                  body: {
                      background: "brand.bikeBackground",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: a.isMobile ? "center -50vw" : "center center",
                      backgroundSize: a.isMobile ? "600vw 400vw" : "cover",
                      backgroundAttachment: a.isMobile ? "scroll" : "fixed",
                      transition: "0.3s background-position"
                  },
                  ".styled-innerhtml ul": {
                      paddingLeft: "2rem"
                  },
                  "#root": {
                      minHeight: "100vh",
                      background: "brand.bikeBackground"
                  },
                  "#configurator": {
                      background: "brand.bikeBackground"
                  },
                  " .chakra-portal": {
                      position: "absolute !important",
                      top: "0px !important",
                      bottom: "0px !important",
                      left: "0px !important",
                      right: "0px !important",
                      height: "100% !important"
                  },
                  ".chakra-modal__content-container": {
                      height: "initial"
                  },
                  " #root .chakra-modal__content-container": {
                      position: "absolute !important",
                      top: "0px !important",
                      bottom: "0px !important",
                      left: "0px !important",
                      right: "0px !important",
                      height: "100% !important"
                  },
                  ".ScrollbarsCustom": {
                      height: "initial !important"
                  },
                  ".hide-scrollbars .ScrollbarsCustom-Track": {
                      display: "none"
                  },
                  p: {
                      whiteSpace: "normal"
                  },
                  "p a": {
                      color: "brand.red",
                      _hover: {
                          textDecoration: "underline"
                      }
                  },
                  "tr:nth-of-type(odd) td": {
                      background: "rgba(0,0,0,0.03) !important"
                  }
              }
          },
          breakpoints: {
              base: "0px",
              sm: "768px",
              md: "1200px",
              lg: "1600px",
              xl: "1920px",
              "2xl": "2000px"
          },
          colors: {
              brand: {
                  bg: "#d4d4d4",
                  blue: "#2B62B3",
                  blueGray: "#2E3440",
                  darkBlue: "#003871",
                  bikeBackground: "#E1E1E1",
                  red: "#DC182D",
                  slate: "#1F1F1F",
                  green: "00803E"
              },
              gray: {
                  50: "#F9F9F9",
                  100: "#F7F7F7",
                  200: "#F3F3F3",
                  300: "#EEEEEE",
                  400: "#DDDDDD",
                  500: "#c1c1c1",
                  600: "#a2a2a2",
                  700: "#959595",
                  800: "#848484",
                  900: "#727272",
                  1e3: "#393e49"
              }
          },
          spacing: {
              xs: "1rem",
              sm: "2rem"
          },
          fontSizes: {
              xs: "1rem",
              sm: "1.2rem",
              md: "1.4rem",
              lg: "1.5rem",
              xl: "1.6rem",
              "2xl": "1.8rem",
              "3xl": "3.6rem",
              "4xl": "4.8rem"
          },
          lineHeights: {
              xs: "1rem",
              sm: "1.2rem",
              md: "1.4rem",
              lg: "1.5rem",
              xl: "1.6rem",
              "2xl": "1.8rem",
              "3xl": "3.6rem",
              "4xl": "4rem"
          },
          textStyles: {
              h1: {
                  textTransform: "uppercase",
                  fontWeight: "light",
                  fontSize: "4xl",
                  lineHeight: "4xl",
                  color: "brand.slate",
                  fontFamily: "proxima-nova-extra-condensed, local-proxima-nova-extra-condensed, sans-serif",
                  letterSpacing: 4
              },
              h1Bold: {
                  textTransform: "uppercase",
                  fontSize: "4xl",
                  color: "brand.slate",
                  fontFamily: "proxima-nova-extra-condensed, local-proxima-nova-extra-condensed, sans-serif",
                  letterSpacing: 4
              },
              h2: {
                  textTransform: "uppercase",
                  fontSize: "3xl",
                  lineHeight: "3xl",
                  color: "brand.slate",
                  fontFamily: "proxima-nova-extra-condensed, local-proxima-nova-extra-condensed, sans-serif",
                  letterSpacing: 3
              },
              h3: {
                  textTransform: "uppercase",
                  fontSize: "2xl",
                  lineHeight: "2xl",
                  color: "brand.slate",
                  letterSpacing: 2,
                  fontFamily: "proxima-nova-extra-condensed, local-proxima-nova-extra-condensed, sans-serif"
              },
              "h3-caps": {
                  fontSize: "2xl",
                  lineHeight: "2xl",
                  color: "brand.slate",
                  letterSpacing: 2,
                  fontFamily: "proxima-nova-extra-condensed, local-proxima-nova-extra-condensed, sans-serif"
              },
              "h3-numbers": {
                  fontWeight: "semibold",
                  fontSize: "xl",
                  color: "brand.slate",
                  fontFamily: "proxima-nova-extra-condensed, local-proxima-nova-extra-condensed, sans-serif",
                  letterSpacing: 2
              },
              h4: {
                  fontWeight: "light",
                  fontSize: "lg",
                  color: "brand.slate",
                  fontFamily: "proxima-nova-extra-condensed, local-proxima-nova-extra-condensed, sans-serif",
                  letterSpacing: 2
              },
              "h4-caps": {
                  textTransform: "uppercase",
                  fontWeight: "light",
                  fontSize: "lg",
                  color: "brand.slate",
                  letterSpacing: 2,
                  fontFamily: "proxima-nova-extra-condensed, local-proxima-nova-extra-condensed, sans-serif",
                  lineHeight: 1.2
              },
              cta: {
                  textTransform: "uppercase",
                  fontSize: "lg",
                  color: "black",
                  fontFamily: "proxima-nova-extra-condensed, local-proxima-nova-extra-condensed, sans-serif",
                  letterSpacing: 1
              },
              h5: {
                  fontSize: "md",
                  color: "brand.slate",
                  fontFamily: "proxima-nova-extra-condensed, local-proxima-nova-extra-condensed, sans-serif",
                  letterSpacing: 1
              },
              "h5-caps": {
                  textTransform: "uppercase",
                  fontSize: "md",
                  color: "brand.slate",
                  letterSpacing: 1,
                  fontFamily: "proxima-nova-extra-condensed, local-proxima-nova-extra-condensed, sans-serif"
              },
              h6: {
                  fontSize: "sm",
                  color: "brand.slate",
                  fontFamily: "proxima-nova-extra-condensed, local-proxima-nova-extra-condensed, sans-serif",
                  letterSpacing: 1,
                  lineHeight: 1.2
              },
              "h6-caps": {
                  textTransform: "uppercase",
                  fontSize: "sm",
                  color: "brand.slate",
                  letterSpacing: 1,
                  fontFamily: "proxima-nova-extra-condensed, local-proxima-nova-extra-condensed, sans-serif",
                  lineHeight: 1.2
              },
              "h6-light": {
                  textTransform: "uppercase",
                  fontWeight: "light",
                  fontSize: "sm",
                  color: "brand.slate",
                  letterSpacing: 1,
                  fontFamily: "proxima-nova-extra-condensed, local-proxima-nova-extra-condensed, sans-serif"
              },
              h7: {
                  fontSize: "xs",
                  color: "brand.slate",
                  letterSpacing: 1,
                  fontFamily: "proxima-nova-extra-condensed, local-proxima-nova-extra-condensed, sans-serif"
              },
              "h7-caps": {
                  textTransform: "uppercase",
                  fontSize: "xs",
                  color: "brand.slate",
                  letterSpacing: 1,
                  fontFamily: "proxima-nova-extra-condensed, local-proxima-nova-extra-condensed, sans-serif"
              },
              copy: {
                  fontSize: "lg",
                  color: "gray.1000"
              },
              link: {
                  fontSize: "lg",
                  textDecoration: "underline",
                  cursor: "pointer",
                  _hover: {
                      color: "brand.green"
                  }
              },
              spec: {
                  fontWeight: "light",
                  fontSize: "lg",
                  color: "gray.900",
                  fontFamily: "proxima-nova-extra-condensed, local-proxima-nova-extra-condensed, sans-serif",
                  letterSpacing: 0,
                  lineHeight: 1.2
              },
              disclaimer: {
                  fontWeight: "light",
                  fontSize: "1.1rem",
                  color: "gray.1000",
                  letterSpacing: 1,
                  lineHeight: 1.3
              },
              "icon-link": {
                  fontSize: "md",
                  textTransform: "uppercase",
                  letterSpacing: 1.5,
                  opacity: .7,
                  _hover: {
                      opacity: 1
                  }
              },
              label: {
                  fontWeight: "300",
                  fontSize: "md",
                  letterSpacing: 1
              }
          },
          components: {
              Checkbox: {
                  sizes: {
                      xl: {
                          control: {
                              w: 6,
                              h: 6,
                              border: "solid 1px",
                              borderColor: "gray.600",
                              _focus: {
                                  boxShadow: "none"
                              }
                          },
                          label: {
                              fontSize: "1.4rem",
                              paddingLeft: "0.5rem",
                              color: "gray.900"
                          }
                      }
                  }
              }
          },
          fonts: {
              heading: "proxima-nova-extra-condensed, local-proxima-nova-extra-condensed, sans-serif",
              body: "proxima-nova-extra-condensed, local-proxima-nova-extra-condensed, sans-serif"
          }
      }
        , l = Object(i.b)(o);
      t.a = l
  },
  138: function(e, t, n) {
      "use strict";
      n.d(t, "a", (function() {
          return s
      }
      )),
      n.d(t, "b", (function() {
          return d
      }
      ));
      var r = n(20)
        , i = n(26)
        , a = n(319)
        , c = n(320)
        , o = 7006607394
        , l = {
          type: "M",
          isNew: !0,
          oldness: 0,
          isPro: !1
      }
        , s = window.BNPPPF
        , d = Object(a.a)((function e() {
          Object(c.a)(this, e)
      }
      ));
      d.calculate = function() {
          var e = Object(i.a)(Object(r.a)().mark((function e(t) {
              return Object(r.a)().wrap((function(e) {
                  for (; ; )
                      switch (e.prev = e.next) {
                      case 0:
                          return e.abrupt("return", new Promise((function(e, n) {
                              try {
                                  s.calculateCLASSIQUE({
                                      credit: t,
                                      partner: o,
                                      vehicle: l
                                  }, e)
                              } catch (r) {
                                  n(r)
                              }
                          }
                          )));
                      case 1:
                      case "end":
                          return e.stop()
                      }
              }
              ), e)
          }
          )));
          return function(t) {
              return e.apply(this, arguments)
          }
      }(),
      d.initialize = function(e) {
          return new Promise((function(t, n) {
              try {
                  s.initSimulCLASSIQUE({
                      credit: e,
                      partner: o,
                      vehicle: l
                  }, t)
              } catch (r) {
                  n(r)
              }
          }
          ))
      }
  },
  139: function(e) {
      e.exports = JSON.parse('{"id":"crf1100l_atas","name":"CRF1100L Africa Twin - Adventure Sports 2020","logo":"https://hondaconfigacc-static.azureedge.net/media/1011/africatwinlogo.png","background":"https://hondaconfigacc-static.azureedge.net/assets/crf1100l_atas/6/base_images/crf1100l_atas__background.png","configuratorBackground":"https://hondaconfigacc-static.azureedge.net/media/112547/adventurebg.png","category":null,"variants":[{"id":"crf1100l_atas_stnd_2020","year":"","appDefaultParts":[],"appDefaultAccessories":[""],"financeCode":"17616","price":14649,"price2":0,"price3":0,"priceLabel":"RRP","price2Label":"Offer 1","price3Label":"Offer 2","variantPrice1":14649,"variantPrice2":0,"variantPrice3":0,"name":"CRF1100L Africa Twin - Adventure Sports 2020","description":"The Africa Twin is designed to push limits. Sharp and agile handling in the dirt \u2013 whether storming a high-speed gravel trail or trickling up a rocky climb \u2013 is thanks to a lightweight main frame and CRF450R-style aluminium swingarm matched to long-travel Showa 45mm inverted front fork and remote reservoir rear shock.","copy":"","handlingCost":null,"colours":[{"id":"nhb53hb_pearlglarewhite_tricolour","name":"Pearl Glare White Tricolour","swatch":"https://hondaconfigacc-static.azureedge.net/assets/crf1100l_atas/colour_swatches/nhb53hb_pearlglarewhite_tricolour.png","bikeThumb":"https://hondaconfigacc-static.azureedge.net/assets/crf1100l_atas/6/content/crf1100l_atas__crf1100l_atas_stnd_2020__nhb53hb_pearlglarewhite_tricolour__bikethumb.png","simpleImage":"https://hondaconfigacc-static.azureedge.net/media/112005/c4.png","price":0,"financeCode":"","appColourCode":null,"hexColours":["#FFFFFF","#0E6FDA","#DD2734","#FFFFFF"]},{"id":"nh463m_darkness_black_metallic","name":"Darkness Black Metallic","swatch":"https://hondaconfigacc-static.azureedge.net/assets/crf1100l_atas/colour_swatches/nh463m_darkness_black_metallic.png","bikeThumb":"https://hondaconfigacc-static.azureedge.net/assets/crf1100l_atas/6/content/crf1100l_atas__crf1100l_atas_stnd_2020__nh463m_darkness_black_metallic__bikethumb.png","simpleImage":"https://hondaconfigacc-static.azureedge.net/media/111997/c4.png","price":0,"financeCode":"","appColourCode":null,"hexColours":["#302D2E","#8C6823","#302D2E","#302D2E"]}],"spec":[{"grouptitle":"Engine","groupid":"ENGINE","table":[{"id":"BORESTROKE","label":"Bore \xd7 Stroke (mm)","value":"92.0mm x 81.5mm"},{"id":"CARBURATION","label":"Carburation","value":"PGM-FI"},{"id":"COMPRESSIONRATIO","label":"Compression Ratio","value":"10.1:1"},{"id":"ENGINEDISPLACEMENT","label":"Engine Displacement (cc)","value":"1084cm3"},{"id":"ENGINETYPE","label":"Engine Type (cm\xb3)","value":"Liquid-cooled 4-stroke 8-valve Parallel Twin with 270\xb0 crank and uni-cam"},{"id":"MAXPOWEROUTPUT","label":"Max. Power Output","value":"75.0kW/7500min-1"},{"id":"MAXTORQUE","label":"Max. Torque","value":"105Nm/6250min-1"},{"id":"STARTER","label":"Starter","value":"Electric"},{"id":"THROTTLEBORE","label":"Throttle Bore","value":"46mm"},{"id":"CO2EMISSIONS","label":"C02 Emissions (g/km)","value":"112g/km"},{"id":"OILCAPACITY","label":"Oil Capacity (Litres)","value":"4.9"}]},{"grouptitle":"Wheels","groupid":"WHEELS","table":[{"id":"ABSSSYSTEMTYPE","label":"ABS System","value":"2 channel with IMU\\nSelectable ABS MODE with ON road and OFF road"},{"id":"BRAKESFRONT","label":"Brakes Front","value":"310mm dual wave floating hydraulic disc with aluminium hub and radial fit 4-piston calipers and sintered metal pads"},{"id":"BRAKESREAR","label":"Brakes Rear","value":"256mm wave hydraulic disc with 2-piston caliper and sintered metal pads. 2-Channel with rear ABS off mode."},{"id":"SUSPENSIONFRONT","label":"Suspension Front","value":"Showa 45mm cartridge-type inverted telescopic fork with dial-style preload adjuster and DF adjustments, 230mm stroke."},{"id":"SUSPENSIONREAR","label":"Suspension Rear","value":"Monoblock aluminium swing arm with Pro-Link with SHOWA gas-charged damper, hydraulic dial-style preload adjuster and rebound damping adjustments, 220 mm rear wheel travel."},{"id":"TYRESFRONT","label":"Tyres Front","value":"Bridgestone BATTLAX ADVENTURECROSS TOURER AX41T\\nMetzeler KAROO STREET"},{"id":"TYRESIZEFRONT","label":"Tyre Size Front","value":"90/90-21M/C tubeless type"},{"id":"TYRESIZEREAR","label":"Tyre Size Rear","value":"150/70-R18M/C tubeless type"},{"id":"TYRESREAR","label":"Tyres Rear","value":"Bridgestone BATTLAX ADVENTURECROSS TOURER AX41T\\nMetzeler KAROO STREET"},{"id":"WHEELSFRONT","label":"Wheels Front","value":"21M/C x MT2.15 Wire spoke with aluminium rim"},{"id":"WHEELSREAR","label":"Wheels Rear","value":"18M/C x MT4.00 Wire spoke with aluminium rim"}]},{"grouptitle":"Dimensions and Weights","groupid":"DIMWIT","table":[{"id":"BATTERYCAPACITY","label":"Battery Capacity (VAh)","value":"12V-6Ah Li-ion BATTERY"},{"id":"CASTERANGLE","label":"Caster Angle","value":"27.5\xb0"},{"id":"DIMENSIONS","label":"Dimensions (L\xd7W\xd7H) (mm)","value":"2332mm X 960mm X 1558mm"},{"id":"FRAMETYPE","label":"Frame type","value":"SemiDouble Cradle"},{"id":"FUELCAPACITY","label":"Fuel Tank Capacity (Litres)","value":"24.8L"},{"id":"FUELCONSUMPTION","label":"Fuel Consumption","value":"20.4km/l"},{"id":"GROUNDCLEARANCE","label":"Ground Clearance (mm)","value":"250mm"},{"id":"HEADLIGHTS","label":"Headlights","value":"LED"},{"id":"KERBWEIGHT","label":"Kerb Weight (kg)","value":"238kg"},{"id":"SEATHEIGHT","label":"Seat Height (mm)","value":"850/870mm (Low Seat option 825, High Seat option 895)"},{"id":"TRAIL","label":"Trail (mm)","value":"113 mm"},{"id":"WHEELBASE","label":"Wheelbase (mm)","value":"1575mm"}]},{"grouptitle":"Transmission","groupid":"TRANSMIT","table":[{"id":"CLUTCH","label":"Clutch","value":"Wet,Multiplate with coil springs,Aluminium Cam Assist and Slipper clutch"},{"id":"CLUTCHOPERATION","label":"Clutch Operation","value":"Cable"},{"id":"FINALDRIVE","label":"Final Drive","value":"O-ring sealed chain"},{"id":"GEARBOX","label":"Gearbox","value":"6-speed"},{"id":"TRANSMISSIONTYPE","label":"Transmission Type","value":"Manual Clutch Transmission"},{"id":"QUICKSHIFTER","label":"Quick Shifter","value":"Optional Accessory"}]},{"grouptitle":"Instruments and Electrics","groupid":"INSELE","table":[{"id":"12VSOCKET","label":"12v Socket","value":"Yes"},{"id":"HEADLIGHTS","label":"Headlights","value":"LED"},{"id":"IGNITIONSYSTEM","label":"Ignition System","value":"Electronic, digital transistor"},{"id":"INSTRUMENTS","label":"Instruments","value":"LCD METER \\n6.5inch TFT Touch Panel Multi informaiton display"},{"id":"TAILLIGHT","label":"Tail Light","value":"LED"},{"id":"DRL","label":"Daytime Running Lights","value":"Yes"},{"id":"CORNERINGLIGHTS","label":"Cornering Lights","value":"Yes"},{"id":"CONNECTIVITY","label":"Connectivity","value":"Bluetooth Audio and Apple CarPlay"},{"id":"USB","label":"USB Socket","value":"Yes(USB Type A, 1.5A)"},{"id":"AUTOWINKERCANCEL","label":"Self Cancelling Indicators","value":"Yes"},{"id":"CRUISECONTROL","label":"Cruise Control","value":"Yes"},{"id":"ESS","label":"Emergency Stop Signal","value":"Yes"},{"id":"SECURITY","label":"Security","value":"Immobiliser + Optional Alarm"}]}],"emissions":{"image":null,"content":"","link":""},"termsAndConditionsTitle":"","termsAndConditionsBody":"","useImportedImages":false,"featuredSpecs":["CARBURATION","FINALDRIVE","CLUTCH"],"engineSize":null,"licenseType":null,"transmission":"","disableFinance":false,"accessoryConfigurations":[{"displayName":"Desert Configuration","description":"Lorem ipsum dolor sit amet consectetur adipiscing elit.","strapline":"The experts choice","accessoryPartNumbers":["08DEM-MKS-L2PL","08DEM-MKS-L2PLA","08DEM-MKS-L4ALU","08R79-MKS-E00","08U70-MKK-D01","08U70-MKS-E50"]},{"displayName":"Jungle Configuration","description":"Lorem ipsum dolor sit amet consectetur adipiscing elit.","strapline":"Honda recommends","accessoryPartNumbers":["08L76-MKS-E00","08L75-MKS-E00","08DEM-MKS-L2PL","08DEM-MKS-L2PLA","08DEM-MKS-L4ALU"]},{"displayName":"Off-road Configuration","description":"Lorem ipsum dolor sit amet consectetur adipiscing elit.","strapline":"Max performance","accessoryPartNumbers":["08DEM-MKS-L2PL","08DEM-MKS-L2PLA"]}]},{"id":"crf1100l_atas_dct_2020","year":"","appDefaultParts":[],"appDefaultAccessories":[""],"financeCode":"17616","price":15849,"price2":0,"price3":0,"priceLabel":"RRP","price2Label":"Offer 1","price3Label":"Offer 2","variantPrice1":15849,"variantPrice2":0,"variantPrice3":0,"name":"CRF1100L Africa Twin - Adventure Sports DCT 2020     ","description":"The Africa Twin is designed to push limits. Sharp and agile handling in the dirt \u2013 whether storming a high-speed gravel trail or trickling up a rocky climb \u2013 is thanks to a lightweight main frame and CRF450R-style aluminium swingarm matched to long-travel Showa 45mm inverted front fork and remote reservoir rear shock.","copy":"","handlingCost":null,"colours":[{"id":"nhb53hb_pearlglarewhite_tricolour","name":"Pearl Glare White Tricolour","swatch":"https://hondaconfigacc-static.azureedge.net/assets/crf1100l_atas/colour_swatches/nhb53hb_pearlglarewhite_tricolour.png","bikeThumb":"https://hondaconfigacc-static.azureedge.net/assets/crf1100l_atas/6/content/crf1100l_atas__crf1100l_atas_dct_2020__nhb53hb_pearlglarewhite_tricolour__bikethumb.png","simpleImage":"","price":0,"financeCode":"","appColourCode":null,"hexColours":["#FFFFFF","#0E6FDA","#DD2734","#FFFFFF"]},{"id":"nh463m_darkness_black_metallic","name":"Darkness Black Metallic","swatch":"https://hondaconfigacc-static.azureedge.net/assets/crf1100l_atas/colour_swatches/nh463m_darkness_black_metallic.png","bikeThumb":"https://hondaconfigacc-static.azureedge.net/assets/crf1100l_atas/6/content/crf1100l_atas__crf1100l_atas_dct_2020__nh463m_darkness_black_metallic__bikethumb.png","simpleImage":"","price":0,"financeCode":"","appColourCode":null,"hexColours":["#302D2E","#8C6823","#302D2E","#302D2E"]}],"spec":[{"grouptitle":"Engine","groupid":"ENGINE","table":[{"id":"BORESTROKE","label":"Bore \xd7 Stroke (mm)","value":"92.0mm x 81.5mm"},{"id":"CARBURATION","label":"Carburation","value":"PGM-FI"},{"id":"COMPRESSIONRATIO","label":"Compression Ratio","value":"10.1:1"},{"id":"ENGINEDISPLACEMENT","label":"Engine Displacement (cc)","value":"1084cm3"},{"id":"ENGINETYPE","label":"Engine Type (cm\xb3)","value":"Liquid-cooled 4-stroke 8-valve Parallel Twin with 270\xb0 crank and uni-cam"},{"id":"MAXPOWEROUTPUT","label":"Max. Power Output","value":"75.0kW/7500min-1"},{"id":"MAXTORQUE","label":"Max. Torque","value":"105Nm/6250min-1"},{"id":"STARTER","label":"Starter","value":"Electric"},{"id":"THROTTLEBORE","label":"Throttle Bore","value":"46mm"},{"id":"CO2EMISSIONS","label":"C02 Emissions (g/km)","value":"110g/km"},{"id":"OILCAPACITY","label":"Oil Capacity (Litres)","value":"5.2"}]},{"grouptitle":"Wheels","groupid":"WHEELS","table":[{"id":"ABSSSYSTEMTYPE","label":"ABS System","value":"2 channel with IMU\\nSelectable ABS MODE with ON road and OFF road"},{"id":"BRAKESFRONT","label":"Brakes Front","value":"310mm dual wave floating hydraulic disc with aluminium hub and radial fit 4-piston calipers and sintered metal pads"},{"id":"BRAKESREAR","label":"Brakes Rear","value":"256mm wave hydraulic disc with 2-piston caliper and sintered metal pads. 2-Channel with rear ABS off mode."},{"id":"SUSPENSIONFRONT","label":"Suspension Front","value":"Showa 45mm cartridge-type inverted telescopic fork with dial-style preload adjuster and DF adjustments, 230mm stroke."},{"id":"SUSPENSIONREAR","label":"Suspension Rear","value":"Monoblock aluminium swing arm with Pro-Link with SHOWA gas-charged damper, hydraulic dial-style preload adjuster and rebound damping adjustments, 220 mm rear wheel travel."},{"id":"TYRESFRONT","label":"Tyres Front","value":"Bridgestone BATTLAX ADVENTURECROSS TOURER AX41T\\nMetzeler KAROO STREET"},{"id":"TYRESIZEFRONT","label":"Tyre Size Front","value":"90/90-21M/C tubeless type"},{"id":"TYRESIZEREAR","label":"Tyre Size Rear","value":"150/70-R18M/C tubeless type"},{"id":"TYRESREAR","label":"Tyres Rear","value":"Bridgestone BATTLAX ADVENTURECROSS TOURER AX41T\\nMetzeler KAROO STREET"},{"id":"WHEELSFRONT","label":"Wheels Front","value":"21M/C x MT2.15 Wire spoke with aluminium rim"},{"id":"WHEELSREAR","label":"Wheels Rear","value":"18M/C x MT4.00 Wire spoke with aluminium rim"}]},{"grouptitle":"Dimensions and Weights","groupid":"DIMWIT","table":[{"id":"BATTERYCAPACITY","label":"Battery Capacity (VAh)","value":"12V-6Ah Li-ion BATTERY"},{"id":"CASTERANGLE","label":"Caster Angle","value":"27.5\xb0"},{"id":"DIMENSIONS","label":"Dimensions (L\xd7W\xd7H) (mm)","value":"2332mm X 960mm X 1558mm"},{"id":"FRAMETYPE","label":"Frame type","value":"SemiDouble Cradle"},{"id":"FUELCAPACITY","label":"Fuel Tank Capacity (Litres)","value":"24.8L"},{"id":"FUELCONSUMPTION","label":"Fuel Consumption","value":"20.8km/l"},{"id":"GROUNDCLEARANCE","label":"Ground Clearance (mm)","value":"250mm"},{"id":"HEADLIGHTS","label":"Headlights","value":"LED"},{"id":"KERBWEIGHT","label":"Kerb Weight (kg)","value":"248kg"},{"id":"SEATHEIGHT","label":"Seat Height (mm)","value":"850/870mm (Low Seat option 825, High Seat option 895)"},{"id":"TRAIL","label":"Trail (mm)","value":"113 mm"},{"id":"WHEELBASE","label":"Wheelbase (mm)","value":"1575mm"}]},{"grouptitle":"Transmission","groupid":"TRANSMIT","table":[{"id":"CLUTCH","label":"Clutch","value":"2 Wet multiplate clutches with coil springs"},{"id":"FINALDRIVE","label":"Final Drive","value":"O-ring sealed chain"},{"id":"GEARBOX","label":"Gearbox","value":"6-speed"},{"id":"TRANSMISSIONTYPE","label":"Transmission Type","value":"Dual Clutch Transmission"},{"id":"QUICKSHIFTER","label":"Quick Shifter","value":"No"}]},{"grouptitle":"Instruments and Electrics","groupid":"INSELE","table":[{"id":"12VSOCKET","label":"12v Socket","value":"Yes"},{"id":"HEADLIGHTS","label":"Headlights","value":"LED"},{"id":"IGNITIONSYSTEM","label":"Ignition System","value":"Electronic, digital transistor"},{"id":"INSTRUMENTS","label":"Instruments","value":"LCD METER \\n6.5inch TFT Touch Panel Multi informaiton display"},{"id":"TAILLIGHT","label":"Tail Light","value":"LED"},{"id":"DRL","label":"Daytime Running Lights","value":"Yes"},{"id":"CORNERINGLIGHTS","label":"Cornering Lights","value":"Yes"},{"id":"CONNECTIVITY","label":"Connectivity","value":"Bluetooth Audio and Apple CarPlay"},{"id":"USB","label":"USB Socket","value":"Yes(USB Type A, 1.5A)"},{"id":"AUTOWINKERCANCEL","label":"Self Cancelling Indicators","value":"Yes"},{"id":"CRUISECONTROL","label":"Cruise Control","value":"Yes"},{"id":"ESS","label":"Emergency Stop Signal","value":"Yes"},{"id":"SECURITY","label":"Security","value":"Immobiliser + Optional Alarm"}]}],"emissions":{"image":null,"content":"","link":""},"termsAndConditionsTitle":"","termsAndConditionsBody":"","useImportedImages":false,"featuredSpecs":["BORESTROKE","CARBURATION"],"engineSize":null,"licenseType":null,"transmission":"","disableFinance":false,"accessoryConfigurations":[{"displayName":"Top Configuration","description":"Lorem ipsum dolor sit amet consectetur adipiscing elit.","price":4500,"strapline":"The Best of the Best","accessoryPartNumbers":["08DEM-MKS-L2PL","08DEM-MKS-L2PLA","08DEM-MKS-L4ALU"]}]},{"id":"crf1100l_atas_stnd_es_2020","year":"","appDefaultParts":[],"appDefaultAccessories":[""],"financeCode":"","price":null,"price2":null,"price3":null,"priceLabel":"RRP","price2Label":"Offer 1","price3Label":"Offer 2","variantPrice1":0,"variantPrice2":0,"variantPrice3":0,"name":"CRF1100L Africa Twin - Adventure Sports ES 2020       ","description":"The Africa Twin is designed to push limits. Sharp and agile handling in the dirt \u2013 whether storming a high-speed gravel trail or trickling up a rocky climb \u2013 is thanks to a lightweight main frame and CRF450R-style aluminium swingarm matched to long-travel Showa 45mm inverted front fork and remote reservoir rear shock.","copy":"","handlingCost":null,"colours":[{"id":"nhb53hb_pearlglarewhite_tricolour","name":"Pearl Glare White Tricolour","swatch":"https://hondaconfigacc-static.azureedge.net/assets/crf1100l_atas/colour_swatches/nhb53hb_pearlglarewhite_tricolour.png","bikeThumb":"https://hondaconfigacc-static.azureedge.net/assets/crf1100l_atas/6/content/crf1100l_atas__crf1100l_atas_stnd_es_2020__nhb53hb_pearlglarewhite_tricolour__bikethumb.png","simpleImage":"","price":null,"financeCode":"","appColourCode":null,"hexColours":["#FFFFFF","#0E6FDA","#DD2734","#FFFFFF"]},{"id":"nh463m_darkness_black_metallic","name":"Darkness Black Metallic","swatch":"https://hondaconfigacc-static.azureedge.net/assets/crf1100l_atas/colour_swatches/nh463m_darkness_black_metallic.png","bikeThumb":"https://hondaconfigacc-static.azureedge.net/assets/crf1100l_atas/6/content/crf1100l_atas__crf1100l_atas_stnd_es_2020__nh463m_darkness_black_metallic__bikethumb.png","simpleImage":"","price":null,"financeCode":"","appColourCode":null,"hexColours":["#302D2E","#8C6823","#302D2E","#302D2E"]}],"spec":[{"grouptitle":"Engine","groupid":"ENGINE","table":[{"id":"BORESTROKE","label":"Bore \xd7 Stroke (mm)","value":"92.0mm x 81.5mm"},{"id":"CARBURATION","label":"Carburation","value":"PGM-FI"},{"id":"COMPRESSIONRATIO","label":"Compression Ratio","value":"10.1:1"},{"id":"ENGINEDISPLACEMENT","label":"Engine Displacement (cc)","value":"1084cm3"},{"id":"ENGINETYPE","label":"Engine Type (cm\xb3)","value":"Liquid-cooled 4-stroke 8-valve Parallel Twin with 270\xb0 crank and uni-cam"},{"id":"MAXPOWEROUTPUT","label":"Max. Power Output","value":"75.0kW/7500min-1"},{"id":"MAXTORQUE","label":"Max. Torque","value":"105Nm/6250min-1"},{"id":"STARTER","label":"Starter","value":"Electric"},{"id":"THROTTLEBORE","label":"Throttle Bore","value":"46mm"},{"id":"CO2EMISSIONS","label":"C02 Emissions (g/km)","value":"112g/km"},{"id":"OILCAPACITY","label":"Oil Capacity (Litres)","value":"4.9"}]},{"grouptitle":"Wheels","groupid":"WHEELS","table":[{"id":"ABSSSYSTEMTYPE","label":"ABS System","value":"2 channel with IMU\\nSelectable ABS MODE with ON road and OFF road"},{"id":"BRAKESFRONT","label":"Brakes Front","value":"310mm dual wave floating hydraulic disc with aluminium hub and radial fit 4-piston calipers and sintered metal pads"},{"id":"BRAKESREAR","label":"Brakes Rear","value":"256mm wave hydraulic disc with 2-piston caliper and sintered metal pads. 2-Channel with rear ABS off mode."},{"id":"SUSPENSIONFRONT","label":"Suspension Front","value":"SHOWA Telescopic inverted fork with an inner tube diameter of 45mm,and an Electric controled unit(SHOWA EERA) with compression and rebound dumping adjustments,230mm stroke"},{"id":"SUSPENSIONREAR","label":"Suspension Rear","value":"Monoblock aluminium swing arm with Pro-Link with SHOWA gas-charged damper, hydraulic remote control preload adjuster and electric control unit(SHOWA EERA) with compression and rebound damping adjustments,220 mm rear wheel travel."},{"id":"TYRESFRONT","label":"Tyres Front","value":"Bridgestone BATTLAX ADVENTURECROSS TOURER AX41T\\nMetzeler KAROO STREET"},{"id":"TYRESIZEFRONT","label":"Tyre Size Front","value":"90/90-21M/C tubeless type"},{"id":"TYRESIZEREAR","label":"Tyre Size Rear","value":"150/70-R18M/C tubeless type"},{"id":"TYRESREAR","label":"Tyres Rear","value":"Bridgestone BATTLAX ADVENTURECROSS TOURER AX41T\\nMetzeler KAROO STREET"},{"id":"WHEELSFRONT","label":"Wheels Front","value":"21M/C x MT2.15 Wire spoke with aluminium rim"},{"id":"WHEELSREAR","label":"Wheels Rear","value":"18M/C x MT4.00 Wire spoke with aluminium rim"}]},{"grouptitle":"Dimensions and Weights","groupid":"DIMWIT","table":[{"id":"BATTERYCAPACITY","label":"Battery Capacity (VAh)","value":"12V-6Ah Li-ion BATTERY"},{"id":"CASTERANGLE","label":"Caster Angle","value":"27.5\xb0"},{"id":"DIMENSIONS","label":"Dimensions (L\x97W\xc3\x97H) (mm)","value":"2332mm X 960mm X 1558mm"},{"id":"FRAMETYPE","label":"Frame type","value":"SemiDouble Cradle"},{"id":"FUELCAPACITY","label":"Fuel Tank Capacity (Litres)","value":"24.8L"},{"id":"FUELCONSUMPTION","label":"Fuel Consumption","value":"20.4km/l"},{"id":"GROUNDCLEARANCE","label":"Ground Clearance (mm)","value":"250mm"},{"id":"HEADLIGHTS","label":"Headlights","value":"LED"},{"id":"KERBWEIGHT","label":"Kerb Weight (kg)","value":"240kg"},{"id":"SEATHEIGHT","label":"Seat Height (mm)","value":"850/870mm (Low Seat option 825, High Seat option 895)"},{"id":"TRAIL","label":"Trail (mm)","value":"113 mm"},{"id":"WHEELBASE","label":"Wheelbase (mm)","value":"1575mm"}]},{"grouptitle":"Transmission","groupid":"TRANSMIT","table":[{"id":"CLUTCH","label":"Clutch","value":"Wet,Multiplate with coil springs,Aluminium Cam Assist and Slipper clutch"},{"id":"CLUTCHOPERATION","label":"Clutch Operation","value":"Cable"},{"id":"FINALDRIVE","label":"Final Drive","value":"O-ring sealed chain"},{"id":"GEARBOX","label":"Gearbox","value":"6-speed"},{"id":"TRANSMISSIONTYPE","label":"Transmission Type","value":"Manual Clutch Transmission"},{"id":"QUICKSHIFTER","label":"Quick Shifter","value":"Optional Accessory"}]},{"grouptitle":"Instruments and Electrics","groupid":"INSELE","table":[{"id":"12VSOCKET","label":"12v Socket","value":"Yes"},{"id":"HEADLIGHTS","label":"Headlights","value":"LED"},{"id":"IGNITIONSYSTEM","label":"Ignition System","value":"Electronic, digital transistor"},{"id":"INSTRUMENTS","label":"Instruments","value":"LCD METER \\n6.5inch TFT Touch Panel Multi informaiton display"},{"id":"TAILLIGHT","label":"Tail Light","value":"LED"},{"id":"DRL","label":"Daytime Running Lights","value":"Yes"},{"id":"CORNERINGLIGHTS","label":"Cornering Lights","value":"Yes"},{"id":"CONNECTIVITY","label":"Connectivity","value":"Bluetooth Audio and Apple CarPlay"},{"id":"USB","label":"USB Socket","value":"Yes(USB Type A, 1.5A)"},{"id":"AUTOWINKERCANCEL","label":"Self Cancelling Indicators","value":"Yes"},{"id":"CRUISECONTROL","label":"Cruise Control","value":"Yes"},{"id":"ESS","label":"Emergency Stop Signal","value":"Yes"},{"id":"SECURITY","label":"Security","value":"Immobiliser + Optional Alarm"}]}],"emissions":{"image":null,"content":"","link":""},"termsAndConditionsTitle":"","termsAndConditionsBody":"","useImportedImages":false,"featuredSpecs":["12VSOCKET"],"engineSize":null,"licenseType":null,"transmission":"","disableFinance":false,"accessoryConfigurations":[{"displayName":"Top Configuration","description":"Lorem ipsum dolor sit amet consectetur adipiscing elit.","price":4500,"strapline":"The Best of the Best","accessoryPartNumbers":["08DEM-MKS-L2PL","08DEM-MKS-L2PLA","08DEM-MKS-L4ALU"]}]},{"id":"crf1100l_atas_dct_es_2020","year":"","appDefaultParts":[],"appDefaultAccessories":[""],"financeCode":"","price":17349,"price2":0,"price3":0,"priceLabel":"RRP","price2Label":"Offer 1","price3Label":"Offer 2","variantPrice1":17349,"variantPrice2":0,"variantPrice3":0,"name":"CRF1100L Africa Twin - Adventure Sports ES DCT 2020","description":"The Africa Twin is designed to push limits. Sharp and agile handling in the dirt \xe2\x80\x93 whether storming a high-speed gravel trail or trickling up a rocky climb \xe2\x80\x93 is thanks to a lightweight main frame and CRF450R-style aluminium swingarm matched to long-travel Showa 45mm inverted front fork and remote reservoir rear shock.","copy":"","handlingCost":null,"colours":[{"id":"nhb53hb_pearlglarewhite_tricolour","name":"Pearl Glare White Tricolour","swatch":"https://hondaconfigacc-static.azureedge.net/assets/crf1100l_atas/colour_swatches/nhb53hb_pearlglarewhite_tricolour.png","bikeThumb":"https://hondaconfigacc-static.azureedge.net/assets/crf1100l_atas/6/content/crf1100l_atas__crf1100l_atas_dct_es_2020__nhb53hb_pearlglarewhite_tricolour__bikethumb.png","simpleImage":"","price":0,"financeCode":"","appColourCode":null,"hexColours":["#FFFFFF","#0E6FDA","#DD2734","#FFFFFF"]},{"id":"nh463m_darkness_black_metallic","name":"Darkness Black Metallic","swatch":"https://hondaconfigacc-static.azureedge.net/assets/crf1100l_atas/colour_swatches/nh463m_darkness_black_metallic.png","bikeThumb":"https://hondaconfigacc-static.azureedge.net/assets/crf1100l_atas/6/content/crf1100l_atas__crf1100l_atas_dct_es_2020__nh463m_darkness_black_metallic__bikethumb.png","simpleImage":"","price":0,"financeCode":"","appColourCode":null,"hexColours":["#302D2E","#8C6823","#302D2E","#302D2E"]}],"spec":[{"grouptitle":"Engine","groupid":"ENGINE","table":[{"id":"BORESTROKE","label":"Bore \xc3\x97 Stroke (mm)","value":"92.0mm x 81.5mm"},{"id":"CARBURATION","label":"Carburation","value":"PGM-FI"},{"id":"COMPRESSIONRATIO","label":"Compression Ratio","value":"10.1:1"},{"id":"ENGINEDISPLACEMENT","label":"Engine Displacement (cc)","value":"1084cm3"},{"id":"ENGINETYPE","label":"Engine Type (cm\xc2\xb3)","value":"Liquid-cooled 4-stroke 8-valve Parallel Twin with 270\xc2\xb0 crank and uni-cam"},{"id":"MAXPOWEROUTPUT","label":"Max. Power Output","value":"75.0kW/7500min-1"},{"id":"MAXTORQUE","label":"Max. Torque","value":"105Nm/6250min-1"},{"id":"STARTER","label":"Starter","value":"Electric"},{"id":"THROTTLEBORE","label":"Throttle Bore","value":"46mm"},{"id":"CO2EMISSIONS","label":"C02 Emissions (g/km)","value":"110g/km"},{"id":"OILCAPACITY","label":"Oil Capacity (Litres)","value":"5.2"}]},{"grouptitle":"Wheels","groupid":"WHEELS","table":[{"id":"ABSSSYSTEMTYPE","label":"ABS System","value":"2 channel with IMU\\nSelectable ABS MODE with ON road and OFF road"},{"id":"BRAKESFRONT","label":"Brakes Front","value":"310mm dual wave floating hydraulic disc with aluminium hub and radial fit 4-piston calipers and sintered metal pads"},{"id":"BRAKESREAR","label":"Brakes Rear","value":"256mm wave hydraulic disc with 2-piston caliper and sintered metal pads. 2-Channel with rear ABS off mode."},{"id":"SUSPENSIONFRONT","label":"Suspension Front","value":"SHOWA Telescopic inverted fork with an inner tube diameter of 45mm,and an Electric controled unit(SHOWA EERA) with compression and rebound dumping adjustments,230mm stroke"},{"id":"SUSPENSIONREAR","label":"Suspension Rear","value":"Monoblock aluminium swing arm with Pro-Link with SHOWA gas-charged damper, hydraulic remote control preload adjuster and electric control unit(SHOWA EERA) with compression and rebound damping adjustments,220 mm rear wheel travel."},{"id":"TYRESFRONT","label":"Tyres Front","value":"Bridgestone BATTLAX ADVENTURECROSS TOURER AX41T\\nMetzeler KAROO STREET"},{"id":"TYRESIZEFRONT","label":"Tyre Size Front","value":"90/90-21M/C tubeless type"},{"id":"TYRESIZEREAR","label":"Tyre Size Rear","value":"150/70-R18M/C tubeless type"},{"id":"TYRESREAR","label":"Tyres Rear","value":"Bridgestone BATTLAX ADVENTURECROSS TOURER AX41T\\nMetzeler KAROO STREET"},{"id":"WHEELSFRONT","label":"Wheels Front","value":"21M/C x MT2.15 Wire spoke with aluminium rim"},{"id":"WHEELSREAR","label":"Wheels Rear","value":"18M/C x MT4.00 Wire spoke with aluminium rim"}]},{"grouptitle":"Dimensions and Weights","groupid":"DIMWIT","table":[{"id":"BATTERYCAPACITY","label":"Battery Capacity (VAh)","value":"12V-6Ah Li-ion BATTERY"},{"id":"CASTERANGLE","label":"Caster Angle","value":"27.5\xc2\xb0"},{"id":"DIMENSIONS","label":"Dimensions (L\xc3\x97W\xc3\x97H) (mm)","value":"2332mm X 960mm X 1558mm"},{"id":"FRAMETYPE","label":"Frame type","value":"SemiDouble Cradle"},{"id":"FUELCAPACITY","label":"Fuel Tank Capacity (Litres)","value":"24.8L"},{"id":"FUELCONSUMPTION","label":"Fuel Consumption","value":"20.8km/l"},{"id":"GROUNDCLEARANCE","label":"Ground Clearance (mm)","value":"250mm"},{"id":"HEADLIGHTS","label":"Headlights","value":"LED"},{"id":"KERBWEIGHT","label":"Kerb Weight (kg)","value":"250kg"},{"id":"SEATHEIGHT","label":"Seat Height (mm)","value":"850/870mm (Low Seat option 825, High Seat option 895)"},{"id":"TRAIL","label":"Trail (mm)","value":"113 mm"},{"id":"WHEELBASE","label":"Wheelbase (mm)","value":"1575mm"}]},{"grouptitle":"Transmission","groupid":"TRANSMIT","table":[{"id":"CLUTCH","label":"Clutch","value":"2 Wet multiplate clutches with coil springs"},{"id":"FINALDRIVE","label":"Final Drive","value":"O-ring sealed chain"},{"id":"GEARBOX","label":"Gearbox","value":"6-speed"},{"id":"TRANSMISSIONTYPE","label":"Transmission Type","value":"Dual Clutch Transmission"},{"id":"QUICKSHIFTER","label":"Quick Shifter","value":"No"}]},{"grouptitle":"Instruments and Electrics","groupid":"INSELE","table":[{"id":"12VSOCKET","label":"12v Socket","value":"Yes"},{"id":"HEADLIGHTS","label":"Headlights","value":"LED"},{"id":"IGNITIONSYSTEM","label":"Ignition System","value":"Electronic, digital transistor"},{"id":"INSTRUMENTS","label":"Instruments","value":"LCD METER \\n6.5inch TFT Touch Panel Multi informaiton display"},{"id":"TAILLIGHT","label":"Tail Light","value":"LED"},{"id":"DRL","label":"Daytime Running Lights","value":"Yes"},{"id":"CORNERINGLIGHTS","label":"Cornering Lights","value":"Yes"},{"id":"CONNECTIVITY","label":"Connectivity","value":"Bluetooth Audio and Apple CarPlay"},{"id":"USB","label":"USB Socket","value":"Yes(USB Type A, 1.5A)"},{"id":"AUTOWINKERCANCEL","label":"Self Cancelling Indicators","value":"Yes"},{"id":"CRUISECONTROL","label":"Cruise Control","value":"Yes"},{"id":"ESS","label":"Emergency Stop Signal","value":"Yes"},{"id":"SECURITY","label":"Security","value":"Immobiliser + Optional Alarm"}]}],"emissions":{"image":null,"content":"","link":""},"termsAndConditionsTitle":"","termsAndConditionsBody":"","useImportedImages":false,"featuredSpecs":[],"engineSize":null,"licenseType":null,"transmission":"","disableFinance":false,"accessoryConfigurations":[{"displayName":"Top Configuration","description":"Lorem ipsum dolor sit amet consectetur adipiscing elit.","price":4500,"strapline":"The Best of the Best","accessoryPartNumbers":["08DEM-MKS-L2PL","08DEM-MKS-L2PLA","08DEM-MKS-L4ALU"]}]}],"appUsps":[{"id":"e35a8580-cc3d-42f3-9e61-081a462e0d0b","title":"ADVENTURE SPORTS DESIGN","description":"The perfect package for the long haul, with 24L fuel tank, large skid-plate plate plus premium aluminium panels and rear carrier","textPosition":"MiddleCenterMedium-LeftAligned","camera":"Colour1","variants":["crf1100l_atas_stnd_2020","crf1100l_atas_dct_2020","crf1100l_atas_stnd_es_2020","crf1100l_atas_dct_es_2020"],"index":0},{"id":"4fcc80cf-648e-4246-81f0-3180e8025926","title":"MORE POWERFUL 1100CC ENGINE","description":"Power and torque up, intake-exhaust efficiency optimised with enhanced throttle feel","textPosition":"MiddleCenterMedium-CenterAligned","camera":"Engine2","variants":["crf1100l_atas_stnd_2020","crf1100l_atas_dct_2020","crf1100l_atas_stnd_es_2020","crf1100l_atas_dct_es_2020"],"index":1},{"id":"d1642267-048a-4855-8ff2-9a8c94b10605","title":"SHOWA ELECTRONICALLY EQUIPPED RIDE ADJUSTMENT","description":"Optional SHOWA EERA\xe2\x84\xa2 manages damping force relative to mode selection; rear spring preload can also be electronically adjusted","textPosition":"TopRightMedium-RightAligned","camera":"Suspension4","variants":["crf1100l_atas_dct_2020","crf1100l_atas_stnd_2020","crf1100l_atas_stnd_es_2020","crf1100l_atas_dct_es_2020"],"index":2},{"id":"ca2742e3-eae3-4461-920f-8f056cf6bb9d","title":"ADVANCED TECHNOLOGY","description":"Four default riding modes & two user options to refine engine output, HSTC, Wheelie Control, Cornering ABS, SHOWA EERA\xe2\x84\xa2 and DCT","textPosition":"MiddleRightMedium-RightAligned","camera":"HSTC1","variants":["crf1100l_atas_stnd_2020","crf1100l_atas_dct_2020","crf1100l_atas_stnd_es_2020","crf1100l_atas_dct_es_2020"],"index":3},{"id":"f100d8f7-7aa6-451e-a7a3-0d65a27b9378","title":"TFT TOUCH SCREEN DISPLAY","description":"Apple CarPlay\xc2\xae, Bluetooth connectivity, six riding modes and three SHOWA EERA\xe2\x84\xa2 modes controlled via 6.5-inch touch-screen","textPosition":"TopCenterBig-RightAligned","camera":"Dashboard2","variants":["crf1100l_atas_stnd_2020","crf1100l_atas_dct_2020","crf1100l_atas_stnd_es_2020","crf1100l_atas_dct_es_2020"],"index":4},{"id":"a490a1d0-b165-4374-b123-10016819e0fe","title":"DUAL LED HEADLIGHTS WITH DRL AND CORNERING LIGHTS","description":"DRL ensures consistent visibility while Cornering Lights use speed and lean angle to illuminate blind spots when cornering","textPosition":"MiddleRightMedium-RightAligned","camera":"Lights3","variants":["crf1100l_atas_stnd_2020","crf1100l_atas_dct_2020","crf1100l_atas_stnd_es_2020","crf1100l_atas_dct_es_2020"],"index":5},{"id":"67e19187-78fd-4af7-bdf5-b45d294afbcb","title":"LONG HAUL COMFORT","description":"Fully equipped with 5-stage height adjustable screen, heated grips, cruise control, ACC charger and tubeless tyres","textPosition":"MiddleCenterMedium-LeftAligned","camera":"HandGuards1","variants":["crf1100l_atas_stnd_2020","crf1100l_atas_dct_2020","crf1100l_atas_stnd_es_2020","crf1100l_atas_dct_es_2020"],"index":6},{"id":"2553143c-28a3-4ad8-85fe-1f8a4ccc7b81","title":"COMPLETE RANGE OF ACCESSORIES","description":"Optional parts include 825-845mm or 875-895mm low and high seats, aluminium luggage, engine/radiator guards and LED fog lights","textPosition":"TopCenterMedium-LeftAligned","camera":"WindShield1","variants":["crf1100l_atas_stnd_2020","crf1100l_atas_dct_2020","crf1100l_atas_stnd_es_2020","crf1100l_atas_dct_es_2020"],"index":7}]}')
  },
  155: function(e, t, n) {
      "use strict";
      t.a = function() {
          !function() {
              var e = window.initialState.contentSquareId;
              if (e && 0 !== e.length)
                  if (window._uxa = window._uxa || [],
                  "undefined" === typeof CS_CONF) {
                      window._uxa.push(["setPath", window.location.pathname + window.location.hash.replace("#", "?__")]);
                      var t = document.createElement("script");
                      t.type = "text/javascript",
                      t.async = !0,
                      t.src = "//t.contentsquare.net/uxa/".concat(e, ".js"),
                      document.getElementsByTagName("head")[0].appendChild(t)
                  } else
                      window._uxa.push(["trackPageview", window.location.pathname + window.location.hash.replace("#", "?__")])
          }()
      }
  },
  156: function(e, t, n) {
      "use strict";
      n.d(t, "a", (function() {
          return i
      }
      )),
      n.d(t, "b", (function() {
          return a
      }
      ));
      var r = n(27)
        , i = function(e) {
          var t = e.creditOffer;
          if (!t)
              return {
                  financingOptions: []
              };
          var n = t.amount
            , i = t.creditCost
            , a = t.deposit
            , c = t.dossierFees
            , o = t.duration
            , l = t.minMax
            , s = t.monthlyPayment
            , d = t.TAEA
            , u = t.TAEG
            , b = t.totalAmount
            , f = Object(r.b)(n)
            , m = (f - l.minAmount) / f * 100;
          return {
              financingOptions: [{
                  otrPrice: f,
                  minDepositPercent: Math.max((f - l.maxAmount) / f * 100, 0),
                  maxDepositPercent: m,
                  defaultDepositPercent: 100 * Object(r.b)(a) / Object(r.b)(n),
                  defaultTerm: o,
                  minTerm: l.minDuration,
                  maxTerm: l.maxDuration,
                  termOptions: "12,24,36,48,60,72",
                  alternateFinanceData: t,
                  financeType: "VPL",
                  financeMonthlyPrice: Object(r.b)(s),
                  financeInterestRate: Object(r.b)(d),
                  financeInterestRateRepresentative: Object(r.b)(u),
                  financeTerm: o,
                  financeDepositAmount: Object(r.b)(a),
                  financeDepositHondaContributionAmount: 0,
                  financeDepositTestDriveIncentiveAmount: 0,
                  financeDepositTotalAmount: Object(r.b)(a),
                  financeTotalCreditPrice: Object(r.b)(i),
                  financeTotalPayablePrice: b,
                  dossierFees: Object(r.b)(c)
              }]
          }
      }
        , a = function(e, t) {
          var n, i, a, c = e.creditOffer;
          return {
              alternateFinanceData: c,
              financeType: "VPL",
              basePrice: Object(r.b)(c.amount),
              otrPrice: Object(r.b)(c.amount),
              financeTotalPayablePrice: Object(r.b)(c.totalAmount),
              colourCost: null !== (n = t.colourCost) && void 0 !== n ? n : 0,
              equipmentCost: null !== (i = t.equipmentCost) && void 0 !== i ? i : 0,
              accessoriesCost: null !== (a = t.accessoriesCost) && void 0 !== a ? a : 0,
              financeInterestRate: Object(r.b)(c.TAEA),
              financeInterestRateRepresentative: Object(r.b)(c.TAEG),
              financeAnnualInterestRate: Object(r.b)(c.TNC),
              financeInterestCost: Object(r.b)(c.interest),
              financeTotalCostInsurance: Object(r.b)(c.totalCostInsurance),
              financeMonthlyPrice: Object(r.b)(c.monthlyPayment),
              financeTerm: c.numberOfTerms,
              financeTotalCreditPrice: Object(r.b)(c.creditCost),
              financeRegularPayments: c.numberOfTerms,
              financeDepositAmount: Object(r.b)(c.deposit),
              financeDossierFee: Object(r.b)(c.dossierFees)
          }
      }
  },
  159: function(e, t, n) {
      "use strict";
      n.d(t, "a", (function() {
          return o
      }
      ));
      var r = n(16)
        , i = n(0)
        , a = n.n(i)
        , c = n(2)
        , o = a.a.createContext({
          height: window.innerHeight,
          width: window.innerWidth
      });
      t.b = function(e) {
          var t = e.children
            , n = Object(i.useState)(window.innerWidth)
            , l = Object(r.a)(n, 2)
            , s = l[0]
            , d = l[1]
            , u = Object(i.useState)(window.innerHeight)
            , b = Object(r.a)(u, 2)
            , f = b[0]
            , m = b[1]
            , p = function() {
              d(window.innerWidth),
              m(window.innerHeight)
          };
          return a.a.useEffect((function() {
              return window.addEventListener("resize", p),
              function() {
                  return window.removeEventListener("resize", p)
              }
          }
          ), []),
          Object(c.jsx)(o.Provider, {
              value: {
                  width: s,
                  height: f
              },
              children: t
          })
      }
  },
  161: function(e, t, n) {
      "use strict";
      n.d(t, "a", (function() {
          return r
      }
      ));
      var r = {
          mobile: "600x377",
          tablet: "900x505",
          desktop: "1280x720",
          low: "1280x720",
          high: "2560x1440"
      }
  },
  162: function(e, t, n) {
      "use strict";
      n.d(t, "a", (function() {
          return r
      }
      )),
      n.d(t, "b", (function() {
          return i
      }
      ));
      var r = function() {
          return !!document.getElementById("singleConfigurator") || !!new URLSearchParams(window.location.search).get("mockEmbeddedEnvironment")
      }
        , i = function() {
          return !!new URLSearchParams(window.location.search).get("forceRtcFailover")
      }
  },
  18: function(e, t, n) {
      "use strict";
      n.d(t, "a", (function() {
          return a
      }
      )),
      n.d(t, "b", (function() {
          return c
      }
      )),
      n.d(t, "d", (function() {
          return o
      }
      )),
      n.d(t, "c", (function() {
          return l
      }
      )),
      n.d(t, "n", (function() {
          return s
      }
      )),
      n.d(t, "m", (function() {
          return d
      }
      )),
      n.d(t, "l", (function() {
          return u
      }
      )),
      n.d(t, "e", (function() {
          return b
      }
      )),
      n.d(t, "j", (function() {
          return f
      }
      )),
      n.d(t, "i", (function() {
          return m
      }
      )),
      n.d(t, "h", (function() {
          return p
      }
      )),
      n.d(t, "g", (function() {
          return j
      }
      )),
      n.d(t, "k", (function() {
          return h
      }
      )),
      n.d(t, "f", (function() {
          return L
      }
      ));
      var r = n(39)
        , i = n(5)
        , a = function(e) {
          return e[e.Added = 0] = "Added",
          e[e.IncompatibleAccessoryPresent = 1] = "IncompatibleAccessoryPresent",
          e[e.MissingPrerequisites = 2] = "MissingPrerequisites",
          e[e.NoAccessoryArgument = 3] = "NoAccessoryArgument",
          e
      }({})
        , c = function(e) {
          return e[e.Removed = 0] = "Removed",
          e[e.IsPartOfPack = 1] = "IsPartOfPack",
          e[e.HasDependencies = 2] = "HasDependencies",
          e[e.IsDependencyOfOther = 3] = "IsDependencyOfOther",
          e
      }({})
        , o = function(e, t) {
          var n = i.a.getState()
            , c = n.selectedAccessories
            , o = n.customPartsDisclaimerWasDisplayedToUser
            , l = n.sketchfabViewerAccessoryList
            , s = n.setCurrentPartNumber
            , d = n.setSelectedAccessories
            , u = n.setSketchfabViewerAccessoryList;
          if (!e)
              return a.NoAccessoryArgument;
          var b = e.partNumber
            , f = e.bundledAccessories
            , m = e.requiredAccessories
            , p = e.incompatibleAccessories;
          if (s(b),
          c && c.findIndex((function(e) {
              return e.id === b
          }
          )) < 0) {
              var h = p.filter((function(e) {
                  return c.find((function(t) {
                      return t.id === e
                  }
                  ))
              }
              ));
              if (h.length > 0 && !t)
                  return O(h),
                  a.IncompatibleAccessoryPresent;
              var C = m.filter((function(e) {
                  return !c.find((function(t) {
                      return t.id === e
                  }
                  ))
              }
              ));
              if (C.length > 0 && !t)
                  return v(C),
                  a.MissingPrerequisites;
              d([].concat(Object(r.a)(c), [{
                  id: b,
                  bundled: f,
                  required: m
              }]));
              var g = [].concat(Object(r.a)(l), Object(r.a)(f), Object(r.a)(m), [b]);
              u(Array.from(new Set(g)));
              var x = e.isCustomisedPart
                , y = j(f).find((function(e) {
                  return null === e || void 0 === e ? void 0 : e.isCustomisedPart
              }
              ));
              if ((x || y) && !1 === o)
                  (0,
                  i.e.getState().setIsModalVisible)(!0, "customized_part"),
                  i.a.setState({
                      customPartsDisclaimerWasDisplayedToUser: !0
                  })
          }
          return a.Added
      }
        , l = function(e, t) {
          e && e.forEach((function(e) {
              o(e, t)
          }
          ))
      }
        , s = function(e, t, n) {
          var r = i.a.getState().selectedAccessories.map((function(e) {
              return p(e.id)
          }
          )).filter((function(e) {
              return null !== e
          }
          ))
            , a = _(r, t)
            , c = r.filter((function(e) {
              return !a.includes(e)
          }
          )).map((function(e) {
              return e.partNumber
          }
          ));
          0 !== c.length ? "ColourChange" === e ? y(c, n) : w(c, n) : n(!0)
      }
        , d = function(e, t) {
          var n = i.a.getState()
            , a = n.selectedAccessories
            , o = n.sketchfabViewerAccessoryList
            , l = n.setSelectedAccessories
            , s = n.setSketchfabViewerAccessoryList
            , d = e.bundledAccessories
            , u = e.partNumber
            , b = e.requiredAccessories;
          i.a.setState((function(e) {
              return (0,
              e.setCurrentPartNumber)(u)
          }
          ));
          var f = a.filter((function(e) {
              return e.bundled.includes(u)
          }
          ));
          if (f.length > 0) {
              var m = f[0].id;
              return C(m),
              c.IsPartOfPack
          }
          var p = a.filter((function(e) {
              return e.required.includes(u)
          }
          ));
          if (p.length > 0 && !t) {
              var j = p.map((function(e) {
                  return e.id
              }
              ));
              return x(j),
              c.IsDependencyOfOther
          }
          if (b.length > 0 && !t) {
              var h = a.filter((function(e) {
                  return b.includes(e.id)
              }
              )).map((function(e) {
                  return e.id
              }
              ));
              return g(h),
              c.HasDependencies
          }
          l(a.filter((function(t) {
              return t.id !== e.partNumber
          }
          )));
          var O = [].concat(Object(r.a)(d), [b, u]);
          return s(o.filter((function(e) {
              return !O.includes(e)
          }
          ))),
          c.Removed
      }
        , u = function(e, t) {
          e.forEach((function(e) {
              d(e, t)
          }
          ))
      }
        , b = function() {
          i.a.setState((function(e) {
              return (0,
              e.setSelectedAccessories)([])
          }
          )),
          i.a.setState((function(e) {
              return (0,
              e.setSketchfabViewerAccessoryList)([])
          }
          ))
      }
        , f = function(e) {
          var t = [];
          return e.forEach((function(e) {
              e.bundled && e.bundled.length > 0 ? t.push.apply(t, Object(r.a)(null === e || void 0 === e ? void 0 : e.bundled)) : t.push(e.id)
          }
          )),
          t
      }
        , m = function(e) {
          var t = [];
          return e.forEach((function(e) {
              e.bundled.length > 0 && t.push.apply(t, Object(r.a)(null === e || void 0 === e ? void 0 : e.bundled)),
              t.push(e.id)
          }
          )),
          t
      }
        , p = function(e) {
          var t = i.a.getState().categories.find((function(t) {
              return t.accessories.some((function(t) {
                  return t.partNumber === e
              }
              ))
          }
          ), !0);
          if (!t)
              return null;
          var n = t.accessories.find((function(t) {
              return t.partNumber === e
          }
          ));
          return n || null
      }
        , j = function(e) {
          return e.map((function(e) {
              return p(e)
          }
          ))
      }
        , h = function(e) {
          return !!e.bundledAccessories.length
      }
        , O = function(e) {
          var t = j(e);
          i.a.setState((function(e) {
              return (0,
              e.setCurrentIncompatible)(t)
          }
          )),
          i.e.setState((function(e) {
              return (0,
              e.setIsModalVisible)(!0, "addAccIncompatible")
          }
          ))
      }
        , v = function(e) {
          var t = j(e);
          i.a.setState((function(e) {
              return (0,
              e.setCurrentRequired)(t)
          }
          )),
          i.e.setState((function(e) {
              return (0,
              e.setIsModalVisible)(!0, "addAccDependencies")
          }
          ))
      }
        , C = function(e) {
          var t = p(e);
          i.a.setState((function(e) {
              return (0,
              e.setCurrentPack)(t)
          }
          )),
          i.e.setState((function(e) {
              return (0,
              e.setIsModalVisible)(!0, "removeAccPack")
          }
          ))
      }
        , g = function(e) {
          var t = j(e);
          i.a.setState((function(e) {
              return (0,
              e.setCurrentRequired)(t)
          }
          )),
          i.e.setState((function(e) {
              return (0,
              e.setIsModalVisible)(!0, "removeAccHasDependencies")
          }
          ))
      }
        , x = function(e) {
          var t = j(e);
          i.a.setState((function(e) {
              return (0,
              e.setCurrentRequired)(t)
          }
          )),
          i.e.setState((function(e) {
              return (0,
              e.setIsModalVisible)(!0, "removeAccIsDependency")
          }
          ))
      }
        , y = function(e, t) {
          var n = j(e);
          i.a.setState((function(e) {
              return (0,
              e.setCurrentIncompatible)(n)
          }
          )),
          i.e.setState((function(e) {
              return (0,
              e.setIsModalVisible)(!0, "removeAccColourNoLongerCompatible", t)
          }
          ))
      }
        , w = function(e, t) {
          var n = j(e);
          i.a.setState((function(e) {
              return (0,
              e.setCurrentIncompatible)(n)
          }
          )),
          i.e.setState((function(e) {
              return (0,
              e.setIsModalVisible)(!0, "removeAccVariantNoLongerCompatible", t)
          }
          ))
      }
        , L = function(e) {
          var t = e.filter((function(e) {
              return !e.hideFromAccessoryList
          }
          ))
            , n = i.d.getState()
            , r = n.getSelectedColour
            , a = n.getSelectedVariant
            , c = r()
            , o = a();
          return c && o && (t = _(t, {
              colourId: c.id,
              variantId: o.id
          })),
          t
      }
        , _ = function(e, t) {
          var n = e.filter((function(e) {
              return !e.hideFromAccessoryList
          }
          ))
            , r = t.colourId
            , i = t.variantId;
          return r && (n = n.filter((function(e) {
              return 0 === e.compatibleColours.length || -1 !== e.compatibleColours.indexOf(r)
          }
          ))),
          i && (n = n.filter((function(e) {
              return -1 === e.incompatibleVariants.indexOf(i)
          }
          ))),
          n
      }
  },
  22: function(e, t, n) {
      "use strict";
      n.d(t, "a", (function() {
          return m
      }
      )),
      n.d(t, "c", (function() {
          return j
      }
      )),
      n.d(t, "b", (function() {
          return h
      }
      )),
      n.d(t, "r", (function() {
          return O
      }
      )),
      n.d(t, "s", (function() {
          return v
      }
      )),
      n.d(t, "q", (function() {
          return C
      }
      )),
      n.d(t, "x", (function() {
          return g
      }
      )),
      n.d(t, "y", (function() {
          return x
      }
      )),
      n.d(t, "B", (function() {
          return y
      }
      )),
      n.d(t, "k", (function() {
          return w
      }
      )),
      n.d(t, "C", (function() {
          return L
      }
      )),
      n.d(t, "l", (function() {
          return _
      }
      )),
      n.d(t, "D", (function() {
          return S
      }
      )),
      n.d(t, "u", (function() {
          return E
      }
      )),
      n.d(t, "v", (function() {
          return I
      }
      )),
      n.d(t, "w", (function() {
          return T
      }
      )),
      n.d(t, "t", (function() {
          return A
      }
      )),
      n.d(t, "p", (function() {
          return M
      }
      )),
      n.d(t, "g", (function() {
          return k
      }
      )),
      n.d(t, "d", (function() {
          return R
      }
      )),
      n.d(t, "f", (function() {
          return P
      }
      )),
      n.d(t, "h", (function() {
          return F
      }
      )),
      n.d(t, "e", (function() {
          return D
      }
      )),
      n.d(t, "i", (function() {
          return N
      }
      )),
      n.d(t, "j", (function() {
          return B
      }
      )),
      n.d(t, "H", (function() {
          return H
      }
      )),
      n.d(t, "G", (function() {
          return z
      }
      )),
      n.d(t, "F", (function() {
          return V
      }
      )),
      n.d(t, "n", (function() {
          return U
      }
      )),
      n.d(t, "z", (function() {
          return W
      }
      )),
      n.d(t, "A", (function() {
          return Y
      }
      )),
      n.d(t, "m", (function() {
          return G
      }
      )),
      n.d(t, "o", (function() {
          return Z
      }
      )),
      n.d(t, "E", (function() {
          return K
      }
      )),
      n.d(t, "K", (function() {
          return X
      }
      )),
      n.d(t, "I", (function() {
          return q
      }
      )),
      n.d(t, "J", (function() {
          return Q
      }
      ));
      var r, i, a, c, o, l = n(3), s = n(25), d = n(10), u = n(33), b = n(28), f = Object(b.b)(r || (r = Object(s.a)(["\n    button {\n        display: flex;\n        margin: initial;\n        padding: 0.5rem 1rem 0.5rem 1rem;\n        border: unset;\n        border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n        border-radius: unset;\n        background: unset;\n    }\n"]))), m = u.a.div(i || (i = Object(s.a)(["\n    ", "\n"])), (function(e) {
          return e.isAEM && f
      }
      )), p = Object(b.b)(a || (a = Object(s.a)(["\n    button {\n        display: flex;\n        margin: unset;\n        padding: unset;\n        border-radius: 9999px;\n        border-color: transparent;\n        width: 14px;\n        background: #dc182d;\n        font-family: inherit;\n    }\n"]))), j = u.a.div(c || (c = Object(s.a)(["\n    ", "\n"])), (function(e) {
          return e.isAEM && p
      }
      )), h = u.a.div(o || (o = Object(s.a)(["\n    button {\n        display: flex;\n        margin: unset;\n        padding: 0 2rem;\n        width: 10rem;\n        border: unset;\n        border-radius: unset;\n        background: #dc182d;\n    }\n"]))), O = function(e, t) {
          return {
              ref: e,
              position: "relative",
              flexDir: "column",
              zIndex: 10,
              bg: "gray.100",
              alignItems: "center",
              flex: 1,
              overflow: "hidden",
              padding: ["4rem 2rem ".concat(t ? "4rem" : "30rem"), "4rem 0 15rem"]
          }
      }, v = {
          width: ["100%", "60%", "60rem"],
          padding: ["2rem 1rem", "2rem 0"],
          spacing: 5
      }, C = {
          type: "h4-caps",
          color: "brand.red",
          padding: "3rem 0",
          fontWeight: 500,
          letterSpacing: 1.2
      }, g = {
          type: "h3",
          color: "brand.red"
      }, x = {
          type: ["h2", "h1"],
          color: "brand.blueGray",
          mb: "-0.3rem"
      }, y = {
          type: "h6",
          color: "brand.red",
          transform: "translateY(1px)"
      }, w = function(e, t, n, r, i, a) {
          return {
              position: "relative",
              defaultValue: i,
              value: i,
              focusThumbOnChange: !1,
              min: e,
              max: t,
              mb: "4rem",
              opacity: a ? .3 : 1,
              transition: "0.2s opacity",
              onChange: n,
              onChangeEnd: r
          }
      }, L = function(e, t, n, r, i, a, c) {
          var o = w(e, t, r, i, a, c);
          return Object(l.a)(Object(l.a)({}, o), {}, {
              step: 50,
              _before: {
                  content: '"'.concat(Object(d.f)(e, n, {
                      trimIntegers: !0
                  }), '"'),
                  position: "absolute",
                  fontSize: "1.5rem",
                  top: "1.5rem",
                  color: "gray.800"
              },
              _after: {
                  content: '"'.concat(Object(d.f)(t, n, {
                      trimIntegers: !0
                  }), '"'),
                  position: "absolute",
                  fontSize: "1.5rem",
                  top: "1.5rem",
                  right: 0,
                  color: "gray.800"
              }
          })
      }, _ = function() {
          return {
              position: "relative",
              bg: "brand.red",
              _focus: {
                  boxShadow: "none"
              }
          }
      }, S = function(e, t) {
          var n = _();
          return Object(l.a)(Object(l.a)({}, n), {}, {
              _after: {
                  content: '"'.concat(Object(d.f)(e, t, {
                      trimIntegers: !0
                  }), '"'),
                  position: "absolute",
                  top: "-2.25rem",
                  fontSize: "1.5rem",
                  color: "gray.800"
              }
          })
      }, E = function(e) {
          return {
              pointerEvents: e ? "auto" : "none",
              spacing: 1,
              padding: ["5rem 0 0", "4rem 0 0"],
              width: "100%",
              alignItems: "flex-start"
          }
      }, I = {
          flex: 1,
          width: "100%",
          justifyContent: "space-between",
          paddingTop: "1.5rem",
          borderBottom: "solid 1px",
          borderColor: "rgba(0,0,0,0.1)"
      }, T = {
          flex: 1,
          width: "100%",
          padding: ["4rem 0 1.5rem", "2rem 0"],
          alignItems: "flex-end",
          justifyContent: "space-between",
          borderBottom: "solid 3px",
          borderColor: "brand.red",
          m: ["1rem 0 1rem", "2rem 0 1rem"]
      }, A = function(e) {
          return {
              className: "copy",
              type: "copy",
              dangerouslySetInnerHTML: {
                  __html: e
              }
          }
      }, M = {
          height: "1px",
          bg: "rgba(0,0,0,0.2)",
          mb: "2rem"
      }, k = {
          allowToggle: !0,
          width: "100%",
          mb: "3rem"
      }, R = {
          width: "100%",
          borderBottom: "1px solid rgba(0,0,0,0.1)",
          paddingX: "1rem",
          _active: {
              outline: "none"
          },
          _focus: {
              outline: "none"
          },
          height: "4rem",
          color: "brand.red",
          _hover: {
              bg: "transparent"
          }
      }, P = {
          textOverflow: "ellipsis",
          flex: .8,
          textAlign: "left",
          overflow: "hidden",
          type: "h4",
          fontWeight: "400",
          letterSpacing: 1,
          whiteSpace: "nowrap",
          paddingLeft: "1rem"
      }, F = function(e, t) {
          return {
              type: t.includes("de") ? "h5" : "copy",
              dangerouslySetInnerHTML: {
                  __html: e
              }
          }
      }, D = function(e) {
          return {
              type: "chevronDouble",
              style: {
                  transform: e ? "rotate(270deg) translate(2px,0)" : "rotate(180deg) translate(0,2px)",
                  transition: "0.3s transform"
              },
              width: "1rem",
              fill: "currentColor"
          }
      }, N = {
          padding: 0,
          border: 0
      }, B = {
          p: ["1rem", "1rem 0 2rem"]
      }, H = function(e) {
          return {
              opacity: e ? .2 : 1,
              border: 0,
              mb: "3rem",
              transition: "0.5s opacity"
          }
      }, z = {
          type: ["h6", "h5"]
      }, V = function(e) {
          return {
              textAlign: e ? "right" : "left",
              border: "none",
              color: "brand.blueGray",
              padding: ["1rem 0.8rem", "1rem 1.5rem"]
          }
      }, U = {
          m: "4rem 0 3rem !important",
          bg: "white",
          width: "100%",
          spacing: 10,
          padding: ["1.5rem", "1.5rem 4rem"],
          boxShadow: "0 0 20px rgba(0,0,0,0.1)",
          justifyContent: "space-between"
      }, W = function(e) {
          return {
              type: e ? "HondaFinancialServices" : "Honda",
              width: "100%",
              containerConfig: {
                  fill: "brand.red",
                  height: "2rem",
                  width: "10rem"
              }
          }
      }, Y = function(e) {
          return {
              type: "info",
              height: "1rem",
              containerConfig: {
                  d: "flex",
                  alignSelf: "center",
                  width: "2.2rem",
                  height: "2.2rem",
                  bg: "white",
                  fill: "brand.blue",
                  border: "solid 1px",
                  borderColor: "gray.400",
                  transform: "translateY(-4px)",
                  cursor: "pointer",
                  onClick: e
              }
          }
      }, G = {
          type: "disclaimer",
          textAlign: "left",
          whiteSpace: "nowrap"
      }, Z = {
          type: "h2",
          color: "brand.blueGray",
          textAlign: "left",
          transform: "translateY(-7px)",
          letterSpacing: 1,
          mb: "-10px"
      }, K = function(e) {
          return {
              alignItems: "flex-start",
              flex: e.includes("de") ? "0.6" : "0.3"
          }
      }, X = {
          orientation: "vertical",
          height: "100%",
          borderColor: "gray.500"
      }, q = function(e, t, n, r, i, a) {
          return {
              position: "relative",
              mt: "2rem !important",
              defaultValue: r,
              value: r,
              focusThumbOnChange: !1,
              opacity: a ? .3 : 1,
              min: 0,
              max: e.length - 1,
              mb: "4rem",
              step: i,
              onChange: t,
              onChangeEnd: n,
              _before: {
                  content: '"'.concat(e[0], '"'),
                  position: "absolute",
                  fontSize: "1.5rem",
                  top: "1.5rem",
                  color: "gray.800"
              },
              _after: {
                  content: '"'.concat(e[e.length - 1], '"'),
                  position: "absolute",
                  fontSize: "1.5rem",
                  top: "1.5rem",
                  right: 0,
                  color: "gray.800"
              }
          }
      }, Q = function(e, t) {
          return {
              position: "relative",
              bg: "brand.red",
              _after: {
                  content: '"'.concat(e[t], '"'),
                  position: "absolute",
                  top: "-2.25rem",
                  fontSize: "1.5rem",
                  color: "gray.800"
              },
              _focus: {
                  boxShadow: "none"
              }
          }
      }
  },
  27: function(e, t, n) {
      "use strict";
      n.d(t, "c", (function() {
          return i
      }
      )),
      n.d(t, "b", (function() {
          return a
      }
      )),
      n.d(t, "a", (function() {
          return c
      }
      ));
      var r = n(16)
        , i = function(e) {
          return e.toFixed(0)
      }
        , a = function(e) {
          var t = e.replace(" ", "").split(",")
            , n = Object(r.a)(t, 2)
            , i = n[0]
            , a = n[1];
          return parseInt(i, 10) + parseInt(a, 10) / 100
      }
        , c = function(e, t, n) {
          return Math.min(Math.max(e, t), n)
      }
  },
  315: function(e, t, n) {
      "use strict";
      n.r(t);
      var r, i, a = n(3), c = n(20), o = n(26), l = n(16), s = n(0), d = n(35), u = n(224), b = n(222), f = n(223), m = n(676), p = n(36), j = n(5), h = n(12), O = n(70), v = 0, C = [], g = function(e) {
          v = 0;
          var t = [];
          if (C = [],
          j.e.setState((function(e) {
              return (0,
              e.setCarouselLoadedPct)(0)
          }
          )),
          j.d.setState((function(e) {
              return (0,
              e.setCarouselImages)([])
          }
          )),
          e && e.length > 0) {
              var n = (null === e || void 0 === e ? void 0 : e.length) - 1;
              e.forEach((function(e, n) {
                  t.push({
                      id: n,
                      image: void 0
                  })
              }
              )),
              e.forEach((function(e, r) {
                  var i = new Image;
                  i.onload = function(e) {
                      return function(e, t, n, r) {
                          if (e && e.target) {
                              var i = e.target;
                              v++,
                              j.e.setState((function(e) {
                                  return (0,
                                  e.setCarouselLoadedPct)(v / n * 100)
                              }
                              )),
                              r[t].image = i,
                              v >= n && j.d.setState((function(e) {
                                  return (0,
                                  e.setCarouselImages)(r)
                              }
                              ))
                          }
                      }(e, r, n, t)
                  }
                  ,
                  i.src = e,
                  C.push(i)
              }
              ))
          }
      }, x = function() {
          var e = Object(o.a)(Object(c.a)().mark((function e(t) {
              return Object(c.a)().wrap((function(e) {
                  for (; ; )
                      switch (e.prev = e.next) {
                      case 0:
                          return e.abrupt("return", new Promise((function(e) {
                              var n = new Image;
                              n.onload = function() {
                                  return e(n)
                              }
                              ,
                              n.onerror = function() {
                                  C.forEach((function(e) {
                                      e.removeAttribute("src")
                                  }
                                  )),
                                  j.d.setState((function(e) {
                                      return (0,
                                      e.setUseRenderServer)(!1)
                                  }
                                  ))
                              }
                              ,
                              n.src = t
                          }
                          )));
                      case 1:
                      case "end":
                          return e.stop()
                      }
              }
              ), e)
          }
          )));
          return function(t) {
              return e.apply(this, arguments)
          }
      }(), y = n(13), w = n(18), L = n(25), _ = n(38), S = n(28), E = {
          width: ["100vw", "100%"],
          height: "100%",
          maxWidth: ["100vw", "95vw", "75vw"],
          position: "relative",
          left: 0,
          justifyContent: "center",
          paddingBottom: ["2rem", 0]
      }, I = {
          width: "100%",
          height: "100%",
          alignItems: ["flex-end", "center"],
          justifyContent: "center",
          display: "flex",
          touchaction: "pan-x"
      }, T = function(e, t) {
          return {
              position: "relative",
              width: e,
              height: t,
              style: {
                  scale: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1
              }
          }
      }, A = function(e, t) {
          return {
              width: e,
              height: t,
              style: {
                  pointerEvents: "none",
                  background: "unset"
              }
          }
      }, M = Object(S.c)(r || (r = Object(L.a)(["\n    0% { opacity: 0 }\n\t100% { opacity: 1 }\n"]))), k = {
          position: "absolute",
          zIndex: 20,
          bottom: ["9.5rem", "20%", "18rem"],
          isIndeterminate: !0,
          colorScheme: "red",
          size: "brand.sm",
          height: ["2px", "2px"],
          width: ["30%", "15%"],
          opacity: 0,
          animation: "".concat(M, " 0.5s forwards")
      }, R = function(e) {
          return {
              active: {
                  opacity: 1,
                  scale: 1,
                  transition: {
                      delay: e ? 1 : 0
                  }
              },
              inactive: {
                  opacity: 0,
                  scale: 0
              },
              fadeOut: {
                  opacity: 0
              }
          }
      }, P = Object(S.c)(i || (i = Object(L.a)(["\n    0% { margin: 0 0.2rem }\n    50% { margin: 0 0.4rem }\n\t100% { margin: 0 0.2rem }\n"]))), F = {
          alignItems: "center",
          justifyContent: ["center", "space-between"],
          spacing: ["0.5rem", 0],
          color: "white"
      }, D = function(e) {
          var t = Object(_.a)(e);
          return {
              type: "h3",
              align: "center",
              color: "white",
              width: "100%",
              animation: "".concat(P, " 0.5s infinite"),
              dangerouslySetInnerHTML: {
                  __html: t
              },
              transform: ["translate(4px,1px)", "translate(3px)"]
          }
      }, N = function(e) {
          return {
              type: "chevronDouble",
              fill: "white",
              width: "0.9rem",
              style: {
                  transform: e ? "rotate(180deg) translateY(1px) translateX(-1px)" : "unset"
              }
          }
      }, B = {
          37: 1,
          38: 1,
          39: 1,
          40: 1
      }, H = function(e) {
          e.cancelable && e.preventDefault()
      }, z = function(e) {
          if (B[e.keyCode])
              return H(e),
              !1
      }, V = !1;
      try {
          window.addEventListener("test", null, Object.defineProperty({}, "passive", {
              get: function() {
                  V = !0
              }
          }))
      } catch (Re) {}
      var U = !!V && {
          passive: !1
      }
        , W = "onwheel"in document.createElement("div") ? "wheel" : "mousewheel"
        , Y = n(51)
        , G = n(161)
        , Z = function(e) {
          var t = G.a[e].split("x");
          return {
              bikeWidth: parseInt(t[0], 10),
              bikeHeight: parseInt(t[1], 10)
          }
      }
        , K = n(2)
        , X = 0
        , q = 0
        , Q = function() {
          var e = Object(h.m)().width
            , t = Object(j.d)((function(e) {
              return (0,
              e.getSelectedVariant)()
          }
          ))
            , n = Object(j.d)((function(e) {
              return (0,
              e.getSelectedColour)()
          }
          ))
            , r = Object(j.d)()
            , i = r.carouselImages
            , l = r.currentAngle
            , u = r.setCurrentAngle
            , b = r.setCurrentPlaceholder
            , f = r.totalFrames
            , v = Object(j.a)().selectedAccessories
            , C = Object(j.e)()
            , L = C.cursorMode
            , _ = C.isCarouselLoaded
            , S = C.isFirstLoad
            , E = C.sliderAngle
            , M = C.setCursorMode
            , k = C.setCarouselLoadedPct
            , R = C.setIsMobileZoomed
            , P = C.setIsZoomEnabled
            , F = (C.setSliderAngle,
          C.setZoomedImage)
            , D = Object(s.useRef)(null)
            , N = Object(m.a)(0)
            , B = {
              variant: null === t || void 0 === t ? void 0 : t.id,
              colour: null === n || void 0 === n ? void 0 : n.id,
              parts: Object(w.j)(v)
          }
            , V = e < parseInt(null === y.a || void 0 === y.a ? void 0 : y.a.breakpoints.sm)
            , G = e < parseInt(null === y.a || void 0 === y.a ? void 0 : y.a.breakpoints.sm) || d.isMobile
            , Q = "desktop";
          V && (Q = "mobile"),
          d.isTablet && (Q = "tablet");
          var J = Z(Q)
            , $ = J.bikeWidth
            , ee = J.bikeHeight
            , te = Object(h.b)()
            , ne = function() {
              var e = Object(o.a)(Object(c.a)().mark((function e() {
                  var t, n;
                  return Object(c.a)().wrap((function(e) {
                      for (; ; )
                          switch (e.prev = e.next) {
                          case 0:
                              return t = Object(O.a)(B, l, Q, f)[0],
                              e.next = 3,
                              x(t);
                          case 3:
                              n = e.sent,
                              b(n),
                              re(n),
                              S || g(Object(O.a)(B, "360", Q, f));
                          case 7:
                          case "end":
                              return e.stop()
                          }
                  }
                  ), e)
              }
              )));
              return function() {
                  return e.apply(this, arguments)
              }
          }();
          Object(s.useEffect)((function() {
              ne(),
              k(0),
              R(!1)
          }
          ), [null === n || void 0 === n ? void 0 : n.id, v, null === t || void 0 === t ? void 0 : t.id, Q, S]);
          var re = function(e) {
              var t = D.current;
              if (e && e.src && t) {
                  var n = t.getContext("2d");
                  n.clearRect(0, 0, $, ee),
                  n.drawImage(e, 0, 0, $, ee)
              }
          }
            , ie = function(e) {
              var t, n = Math.floor(e), r = ((q = X) + n) % f;
              ((q = Number.isInteger(r) ? r : q) < 0 && (q = f + q),
              q !== X) && re(null === (t = i[q]) || void 0 === t ? void 0 : t.image)
          };
          Object(s.useEffect)((function() {
              N.onChange(ie)
          }
          ));
          return Object(s.useEffect)((function() {
              var e;
              E !== X && re(null === (e = i[E]) || void 0 === e ? void 0 : e.image)
          }
          ), [E]),
          Object(K.jsx)(p.p, Object(a.a)(Object(a.a)({
              value: l,
              onPan: function(e, t) {
                  if (!Y.a.shouldUseSliderInsteadOfCursorDragForBikeSpin() && (e.preventDefault(),
                  ("dragging" === L || G) && _)) {
                      var n = t.offset.x
                        , r = d.isMobile ? .3 : .08
                        , i = Math.floor(n * r);
                      N.set(i)
                  }
              },
              onPanStart: function(e, t) {
                  if (!Y.a.shouldUseSliderInsteadOfCursorDragForBikeSpin() && ("drag" === L || G) && _) {
                      M("dragging"),
                      N.set(0);
                      t.offset.x;
                      window.addEventListener("DOMMouseScroll", H, !1),
                      window.addEventListener(W, H, U),
                      window.addEventListener("touchmove", H, U),
                      window.addEventListener("keydown", z, !1),
                      P(!1)
                  }
              },
              onPanEnd: function() {
                  Y.a.shouldUseSliderInsteadOfCursorDragForBikeSpin() || (("dragging" === L || G) && _ && ("dragging" === L && M("drag"),
                  window.removeEventListener("DOMMouseScroll", H, !1),
                  window.removeEventListener(W, H, U),
                  window.removeEventListener("touchmove", H, U),
                  window.removeEventListener("keydown", z, !1),
                  P(!0)),
                  X !== q && (u(X = q),
                  F(null)))
              }
          }, I), {}, {
              children: Object(K.jsx)(p.p, Object(a.a)(Object(a.a)({}, T($, ee, te)), {}, {
                  children: Object(K.jsx)("canvas", Object(a.a)({
                      ref: D
                  }, A($, ee)))
              }))
          }))
      }
        , J = n(68)
        , $ = function() {
          var e = Object(J.b)().data;
          if (!e)
              return null;
          var t = null === e || void 0 === e ? void 0 : e.short_drag_to_spin_label;
          return Object(K.jsx)(p.p, Object(a.a)(Object(a.a)({}, {
              animate: !0 ? "active" : "fadeOut",
              initial: "inactive",
              variants: R(!1),
              position: "absolute",
              bottom: ["9rem", "45%"],
              right: ["50%", "15%"],
              zIndex: 1,
              bg: "gray.1000",
              borderRadius: ["2rem", "5rem"],
              width: ["10rem", "8rem"],
              mr: ["-5rem", 0],
              height: ["4rem", "8rem"],
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              flexDir: "column",
              lineHeight: 1,
              opacity: 0,
              pointerEvents: "none"
          }), {}, {
              children: Object(K.jsxs)(b.h, Object(a.a)(Object(a.a)({}, F), {}, {
                  children: [Object(K.jsx)(p.m, Object(a.a)({}, N(!1))), Object(K.jsx)(p.z, Object(a.a)({}, D(t))), Object(K.jsx)(p.m, Object(a.a)({}, N(!0)))]
              }))
          }))
      }
        , ee = function() {
          var e = Object(h.m)()
            , t = e.width
            , n = e.height
            , r = Object(s.useRef)()
            , i = Object(j.d)().currentPlaceholder
            , c = Object(j.e)()
            , o = c.isCarouselLoaded
            , l = c.cursorMode
            , u = c.isMobileZoomed
            , m = c.setViewerDimensions
            , p = t < parseInt(null === y.a || void 0 === y.a ? void 0 : y.a.breakpoints.sm) || d.isMobile;
          Object(s.useEffect)((function() {
              var e = r.current;
              if (e) {
                  var t = e.getBoundingClientRect();
                  m(t)
              }
          }
          ), [t, n]);
          var O = p ? !o : !i
            , v = !p && "hide" !== l;
          return Object(K.jsxs)(b.e, Object(a.a)(Object(a.a)({
              ref: r
          }, function(e, t) {
              return Object(a.a)(Object(a.a)({}, E), {}, {
                  cursor: e ? "none" : "auto",
                  overflow: t ? "hidden" : "visible",
                  opacity: t ? 0 : 1,
                  pointerEvents: t ? "none" : "auto"
              })
          }(v, u)), {}, {
              children: [Object(K.jsx)(Q, {}), O && Object(K.jsx)(f.b, Object(a.a)({}, k)), o && !Y.a.shouldUseSliderInsteadOfCursorDragForBikeSpin() && Object(K.jsx)($, {})]
          }))
      }
        , te = n(225)
        , ne = {
          37: 1,
          38: 1,
          39: 1,
          40: 1
      }
        , re = function(e) {
          e.cancelable && e.preventDefault()
      }
        , ie = function(e) {
          if (ne[e.keyCode])
              return re(e),
              !1
      }
        , ae = !1;
      try {
          window.addEventListener("test", null, Object.defineProperty({}, "passive", {
              get: function() {
                  ae = !0
              }
          }))
      } catch (Re) {}
      var ce = !!ae && {
          passive: !1
      }
        , oe = "onwheel"in document.createElement("div") ? "wheel" : "mousewheel"
        , le = {
          width: ["100vw", "100%"],
          height: "100%",
          maxWidth: ["100vw", "75vw"],
          position: "relative",
          justifyContent: "center"
      }
        , se = {
          height: ["auto", "auto", "100%"],
          width: ["100%", "100%", "auto"]
      }
        , de = {
          pt: ["12rem", 0],
          alignItems: "center",
          justifyContent: "center"
      }
        , ue = {
          zoomOut: {
              scale: 1,
              opacity: 1,
              x: 0,
              y: 10,
              transition: {
                  duration: .2
              }
          },
          zoomIn: {
              scale: 3,
              opacity: 1
          }
      }
        , be = function(e, t, n, r) {
          var i = "zoomIn" === e;
          return Object(a.a)(Object(a.a)({}, le), {}, {
              d: "flex",
              animate: e,
              variants: ue,
              alignItems: "center",
              _hover: {
                  cursor: "hide"
              },
              overflow: "hidden",
              opacity: 0,
              drag: i,
              height: "100%",
              dragConstraints: {
                  left: -640 / 3,
                  right: 640 / 3,
                  top: -216,
                  bottom: 192
              },
              onMouseEnter: t,
              onMouseLeave: n,
              onClick: r
          })
      }
        , fe = function(e) {
          e && (window.addEventListener("DOMMouseScroll", re, !1),
          window.addEventListener(oe, re, ce),
          window.addEventListener("touchmove", re, ce),
          window.addEventListener("keydown", ie, !1),
          document.documentElement.style.overflow = "hidden")
      }
        , me = function() {
          window.removeEventListener("DOMMouseScroll", re, !1),
          window.removeEventListener(oe, re, ce),
          window.removeEventListener("touchmove", re, ce),
          window.removeEventListener("keydown", ie, !1),
          document.documentElement.style.overflow = "unset"
      }
        , pe = {
          active: {
              opacity: 1,
              transition: {
                  duration: 1
              }
          },
          inactive: {
              opacity: 0,
              transition: {
                  duration: 1
              }
          }
      }
        , je = {
          _after: {
              content: '""',
              width: 0,
              borderTop: "0.6rem solid transparent",
              borderBottom: "0.6rem solid transparent",
              borderLeft: "0.8rem solid #393e49",
              position: "absolute",
              right: "0.6rem"
          },
          _before: {
              content: '""',
              width: 0,
              borderTop: "0.6rem solid transparent",
              borderBottom: "0.6rem solid transparent",
              borderRight: "0.8rem solid #393e49",
              position: "absolute",
              left: "0.6rem"
          },
          height: "1.2rem",
          width: "1.2rem",
          borderRadius: "50%",
          bgColor: "#393e49"
      }
        , he = {
          width: "5rem",
          height: "5rem",
          fontSize: "1.5rem",
          whiteSpace: "nowrap",
          bg: "gray.200",
          color: "gray.1200"
      }
        , Oe = n(22)
        , ve = function() {
          var e = Object(j.b)().isAEM
            , t = Object(j.e)()
            , n = t.isCarouselLoaded
            , r = t.isMobileZoomed
            , i = t.setSliderAngle
            , c = t.sliderAngle
            , o = Object(j.d)()
            , l = o.setCurrentAngle
            , s = o.totalFrames
            , d = function(e) {
              i(e)
          };
          return Object(K.jsxs)(te.a, Object(a.a)(Object(a.a)(Object(a.a)({}, Object(Oe.k)(0, s, d, d, c, !n)), function(e) {
              return {
                  width: "50%",
                  maxWidth: ["initial", "30rem", "50rem"],
                  position: "absolute",
                  bottom: ["10rem", "12%", "10%"],
                  left: ["initial", "42%", "initial"],
                  transform: ["initial", "translateX(-50%)", "initial"],
                  marginBottom: 0,
                  marginTop: 0,
                  opacity: e ? 0 : 1,
                  pointerEvents: e ? "none" : "auto",
                  transition: "opacity 0.2s"
              }
          }(r)), {}, {
              onChangeEnd: function() {
                  l(c)
              },
              children: [Object(K.jsx)(te.c, {
                  bg: "gray.500"
              }), Object(K.jsx)(Oe.c, {
                  isAEM: e,
                  children: Object(K.jsx)(te.b, Object(a.a)(Object(a.a)(Object(a.a)({}, Object(Oe.l)()), he), {}, {
                      children: Object(K.jsx)(b.a, Object(a.a)({}, je))
                  }))
              })]
          }))
      }
        , Ce = function(e) {
          var t = e.bikeProps
            , n = (e.changeLoadState,
          Object(j.e)())
            , r = n.isMobileZoomed
            , i = n.setIsZoomEnabled
            , c = n.zoomedImage
            , o = Object(s.useRef)(null);
          Object(s.useEffect)((function() {
              var e = o.current;
              e && e.addEventListener("onloadstart", (function() {
                  i(!1)
              }
              ))
          }
          ), [t]);
          var l;
          return Object(K.jsx)(b.a, Object(a.a)(Object(a.a)({}, (l = r,
          Object(a.a)(Object(a.a)({}, se), {}, {
              opacity: l ? 1 : 0,
              position: "absolute",
              transition: l ? "" : "0.1s opacity",
              transform: ["scale(0.8)", "scale(1.2)"],
              justifySelf: "center"
          }))), {}, {
              children: Object(K.jsx)(u.a, {
                  src: c
              })
          }))
      }
        , ge = function(e) {
          var t = 50
            , n = .6;
          return "dragging" === e ? t = 40 : "zoom" === e ? t = 60 : e.startsWith("zoomed") && (t = 125),
          "zoomedx2" === e && (n = .75),
          "zoomedx3" === e && (n = 1),
          {
              radius: t,
              backgroundWidth: 1920 * n,
              backgroundHeight: 1080 * n
          }
      }
        , xe = function(e) {
          var t = ge(e).radius;
          return {
              marginLeft: -t,
              marginTop: -t,
              height: 2 * t,
              width: 2 * t
          }
      }
        , ye = {
          hide: Object(a.a)(Object(a.a)({
              scale: 0,
              opacity: 0
          }, xe("hide")), {}, {
              transition: {
                  duration: .05,
                  transitionEnd: {
                      display: "none"
                  }
              }
          }),
          drag: Object(a.a)(Object(a.a)({
              display: "flex",
              scale: 1,
              opacity: 1
          }, xe("drag")), {}, {
              transition: {
                  delayChildren: .1
              }
          }),
          dragging: {
              display: "flex",
              width: 80,
              height: 80,
              marginLeft: -40,
              marginTop: -40,
              opacity: 1,
              scale: 1
          },
          zoom: Object(a.a)({
              display: "flex",
              scale: 1,
              opacity: 1
          }, xe("zoom")),
          zoomed: Object(a.a)({
              display: "flex",
              scale: 1,
              opacity: 1
          }, xe("zoomed"))
      }
        , we = function(e) {
          return {
              type: e.indexOf("chevron") > -1 ? "chevronDouble" : e,
              width: e.indexOf("chevron") > -1 ? "1.2rem" : "5rem",
              fill: "white",
              style: {
                  transform: "chevronRight" === e ? "rotate(180deg) translateY(1px)" : ""
              }
          }
      }
        , Le = {
          variants: {
              hide: {
                  opacity: 0,
                  width: "70%"
              },
              drag: {
                  opacity: 1,
                  width: "80%",
                  transition: {
                      width: {
                          repeat: 100,
                          repeatType: "reverse"
                      }
                  }
              },
              dragging: {
                  opacity: 1,
                  width: "70%"
              }
          },
          d: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          opacity: 0
      }
        , _e = {
          variants: {
              hide: {
                  opacity: 0,
                  width: 5,
                  height: 5
              },
              drag: {
                  opacity: 1,
                  width: 10,
                  height: 10
              },
              dragging: {
                  opacity: 1,
                  width: 15,
                  height: 15
              }
          },
          bg: "white",
          borderRadius: "50%"
      }
        , Se = {
          variants: {
              hide: {
                  opacity: 0,
                  width: "10%"
              },
              drag: {
                  opacity: 0,
                  width: "10%"
              },
              dragging: {
                  opacity: 0,
                  width: "10%"
              },
              zoom: {
                  opacity: 1,
                  width: "30%"
              },
              zoomed: {
                  opacity: .8,
                  width: "15%"
              },
              reset: {
                  opacity: 0,
                  width: "15%"
              }
          },
          d: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "0.5rem"
      }
        , Ee = function(e) {
          var t = e.isCarousel
            , n = e.loResImage
            , r = Object(j.e)()
            , i = r.carouselLoadedPct
            , c = r.cursorMode
            , o = r.setCursorMode
            , d = r.zoomedImage
            , u = r.viewerDimensions
            , b = Object(s.useState)({
              x: -1e3,
              y: -1e3
          })
            , m = Object(l.a)(b, 2)
            , h = m[0]
            , O = m[1]
            , v = Object(s.useState)(!1)
            , C = Object(l.a)(v, 2)
            , g = C[0]
            , x = C[1]
            , y = Object(s.useRef)(null);
          Object(s.useEffect)((function() {
              (g && ("drag" === c || "hide" === c) || !t || i < 99) && (c.includes("zoomed") || o("zoom"));
              var e = Y.a.shouldUseSliderInsteadOfCursorDragForBikeSpin();
              g || "zoom" !== c || o(t && i > 99 ? e ? "zoom" : "drag" : "hide")
          }
          ), [g]),
          Object(s.useEffect)((function() {
              if ("reset" === c) {
                  if (L(h.x))
                      return void o("zoom");
                  if (t)
                      if (i > 99) {
                          if (Y.a.shouldUseSliderInsteadOfCursorDragForBikeSpin())
                              return void o("zoom");
                          o("drag")
                      } else
                          o("zoom");
                  else
                      o("hide")
              }
          }
          ), [c]),
          Object(s.useEffect)((function() {
              var e = ge(c)
                , t = e.radius
                , n = e.backgroundHeight
                , r = e.backgroundWidth;
              _(h, t, n, r);
              var i = function(e) {
                  return _(e, t, n, r)
              };
              return window.addEventListener("mousemove", i),
              function() {
                  window.removeEventListener("mousemove", i)
              }
          }
          ), [c]);
          var w, L = function(e) {
              if (u) {
                  var t = e - u.left;
                  return t > u.width / 2.25 && t < u.width / 1.75
              }
              return !1
          }, _ = function(e, t, n, r) {
              var i = {
                  x: e.x,
                  y: e.y
              };
              if (x(L(e.x)),
              O(i),
              y.current && u) {
                  var a = y.current;
                  a.style.left = i.x + "px",
                  a.style.top = i.y + "px";
                  var c = t - (i.x - u.left) / u.width * r
                    , o = t - (i.y - u.top) / u.height * n
                    , l = "left ".concat(c, "px top ").concat(o, "px");
                  a.style.backgroundPosition = l
              }
          }, S = "drag" === c || "dragging" === c, E = c.indexOf("zoom") > -1, I = "zoomedx3" === c ? "minify" : "magnify";
          return Object(K.jsxs)(p.p, Object(a.a)(Object(a.a)({}, function(e, t, n) {
              var r = ge(e)
                , i = r.backgroundHeight
                , a = r.backgroundWidth
                , c = "".concat(a, "px ").concat(i, "px");
              return {
                  animate: e.includes("zoomed") ? "zoomed" : e,
                  initial: "hide",
                  variants: ye,
                  position: "fixed",
                  zIndex: 1,
                  border: "solid 3px white",
                  borderRadius: "50%",
                  bg: (n || t) && e.includes("zoom") ? "white" : "rgba(0,0,0,0.2)",
                  backgroundImage: e.includes("zoom") ? null === t ? "url(".concat(n, ")") : "url(".concat(t, "), url(").concat(n, ")") : "",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: c,
                  pointerEvents: "none",
                  transformOrigin: "50% 50%",
                  boxShadow: null === t ? "none" : "0 2px 20px rgba(0,0,0,0.4)",
                  justifyContent: "center",
                  alignContent: "center"
              }
          }(c, d, n)), {}, {
              ref: y,
              children: [i < 99 && Object(K.jsx)(f.a, Object(a.a)({}, (w = i,
              {
                  position: "absolute",
                  value: w,
                  color: "brand.red",
                  size: "121%",
                  thickness: "3px",
                  trackColor: "transparent",
                  transform: "translate(-10.5%,-8.5%)"
              }))), S && Object(K.jsxs)(p.p, Object(a.a)(Object(a.a)({}, Le), {}, {
                  children: [Object(K.jsx)(p.m, Object(a.a)({}, we("chevronLeft"))), Object(K.jsx)(p.p, Object(a.a)({}, _e)), Object(K.jsx)(p.m, Object(a.a)({}, we("chevronRight")))]
              })), E && Object(K.jsx)(p.p, Object(a.a)(Object(a.a)({}, Se), {}, {
                  children: Object(K.jsx)(p.m, Object(a.a)({}, we(I)))
              }))]
          }))
      }
        , Ie = n(325)
        , Te = (n(402),
      n(46))
        , Ae = n(162)
        , Me = n(34)
        , ke = function(e) {
          var t = e.colour
            , n = e.modelId
            , r = e.loadState
            , i = e.setLoadState
            , a = e.variant
            , c = Object(j.e)()
            , o = c.sketchfabCameraView
            , l = c.sketchfabUpdateCount
            , d = c.sketchfabIsLoading
            , u = c.setSketchfabIsLoading
            , b = c.setSketchfabIsReady
            , f = Object(j.a)().sketchfabViewerAccessoryList
            , m = Object(j.b)()
            , p = m.currentStep
            , O = (m.isAEM,
          Object(s.useRef)(null))
            , v = O.current
            , C = a.substring(a.length - 4)
            , g = "".concat(n).concat(C)
            , x = Object(h.l)().data;
          Object(s.useEffect)((function() {
              b(!1),
              u(!0)
          }
          ), [g]),
          Object(s.useEffect)((function() {
              v && v.setCamera && !d && v.setCamera(o)
          }
          ), [l, d]),
          Object(s.useEffect)((function() {
              (v && v.setCamera && 0 === f.length && 1 === p || v && v.setCamera && p) && !d && v.setCamera("default")
          }
          ), [p, f]);
          var y = function() {
              i && i("MAIN"),
              Object(Me.a)({
                  event: "rtc_fail"
              })
          };
          if (Object(s.useEffect)((function() {
              Object(Ae.b)() && "SKETCHFAB" === r && d && y()
          }
          )),
          !x)
              return null;
          var w = x.realTimeConfiguratorSlowLoadingThreshold;
          return Object(K.jsx)(Ie.a, {
              ref: O,
              modelId: g,
              variantId: a,
              colorId: t,
              partIds: f,
              onError: function(e) {
                  return i && i("MAIN"),
                  u(!1),
                  void b(!1)
              },
              configPath: "".concat(Te.a.MODEL_DATA_BASE_PATH),
              onReady: function() {
                  u(!1),
                  b(!0)
              },
              slowLoadThreshold: null !== w && void 0 !== w ? w : 0,
              onSlowLoad: y
          })
      };
      t.default = function(e) {
          var t = e.modelId
            , n = e.variant
            , r = e.colour
            , i = Object(h.m)().width
            , b = Object(j.b)().i18n
            , f = Object(j.a)((function(e) {
              return e.selectedAccessories
          }
          ))
            , m = Object(j.e)()
            , v = m.isCarouselLoaded
            , C = m.isMobileZoomed
            , g = m.isSketchfab
            , L = m.setIsMobileZoomed
            , _ = m.cursorMode
            , S = m.setCursorMode
            , E = m.setIsSketchfab
            , I = (m.setSketchfabIsLoading,
          m.setZoomedImage)
            , T = m.zoomedImage
            , A = Object(j.d)()
            , M = A.currentAngle
            , k = A.currentPlaceholder
            , R = A.totalFrames
            , P = A.useRenderServer
            , F = A.setUseRenderServer
            , D = Object(s.useState)(!1)
            , N = Object(l.a)(D, 2)
            , B = N[0]
            , H = N[1]
            , z = Object(s.useState)(!1)
            , V = Object(l.a)(z, 2)
            , U = V[0]
            , W = V[1]
            , G = Object(s.useRef)(null)
            , Z = Object(h.l)().data
            , X = Z.enableSketchfabViewer
            , q = Z.useRenderServer
            , Q = b.image_unavailable
            , J = Object(s.useState)(X ? "SKETCHFAB" : "MAIN")
            , $ = Object(l.a)(J, 2)
            , te = $[0]
            , ne = $[1]
            , re = {
              variant: null === n || void 0 === n ? void 0 : n.id,
              colour: null === r || void 0 === r ? void 0 : r.id,
              parts: Object(w.j)(f),
              modelId: t
          };
          Object(s.useEffect)((function() {
              E(X),
              F(q),
              X && ne("SKETCHFAB")
          }
          ), [n.id]),
          Object(s.useEffect)((function() {
              var e = i < parseInt(null === y.a || void 0 === y.a ? void 0 : y.a.breakpoints.sm) || d.isMobile;
              !e && C && L(!1),
              W(e)
          }
          ), [i]);
          var ie = function() {
              var e = Object(o.a)(Object(c.a)().mark((function e() {
                  var t, n;
                  return Object(c.a)().wrap((function(e) {
                      for (; ; )
                          switch (e.prev = e.next) {
                          case 0:
                              if (!(t = Object(O.a)(re, M, "high", R)[0]) || t === T) {
                                  e.next = 6;
                                  break
                              }
                              return e.next = 4,
                              x(t);
                          case 4:
                              n = e.sent,
                              I(n.src);
                          case 6:
                          case "end":
                              return e.stop()
                          }
                  }
                  ), e)
              }
              )));
              return function() {
                  return e.apply(this, arguments)
              }
          }();
          Object(s.useEffect)((function() {
              g && X ? ne("SKETCHFAB") : (console.log("Effect updating load state based on render server", P),
              ne(P ? "MAIN" : "FALLBACK"),
              ie())
          }
          ), [r.id, f, P, g]),
          Object(s.useEffect)((function() {
              "FALLBACK" === te && (r.simpleImage && 0 !== r.simpleImage.length || oe("ERROR"))
          }
          ), [te]),
          Object(s.useEffect)((function() {
              ie()
          }
          ), [M]);
          var ae, ce, oe = function(e) {
              console.log("Setting load state to", e),
              ne(e),
              E("SKETCHFAB" === e)
          }, le = C && U ? "zoomIn" : "zoomOut", se = Object(s.useMemo)((function() {
              return Object(K.jsx)(ee, {})
          }
          ), []), ue = Object(s.useMemo)((function() {
              if (k && B && !U)
                  return Object(K.jsx)(Ee, {
                      loResImage: k.src,
                      isCarousel: v,
                      carousel: G
                  }, "cursor")
          }
          ), [k, B, U, v, G]), je = function(e, t) {
              return {
                  flexBasis: "100%",
                  flexShrink: 0,
                  position: "absolute",
                  height: "100%",
                  width: ["100vw", "90%", "70%"],
                  variants: pe,
                  animate: e === t ? "active" : "inactive",
                  pointerEvents: e === t ? "all" : "none",
                  initial: e === t ? "active" : "inactive"
              }
          };
          switch (te) {
          case "MAIN":
          case "SKETCHFAB":
          case "FALLBACK":
          case "ERROR":
              return Object(K.jsxs)(p.p, {
                  justifyContent: "center",
                  width: "100%",
                  children: [Object(K.jsxs)(p.p, Object(a.a)(Object(a.a)(Object(a.a)({}, je(te, "MAIN")), (ce = C,
                  {
                      d: "flex",
                      flexDirection: "column",
                      flexShrink: 0,
                      flexBasis: "100%",
                      width: ["100vw", "90%", "70%"],
                      height: "100%",
                      overflow: ce ? "hidden" : "visible",
                      justifyContent: "center",
                      alignItems: ["center", "flex-start", "center"],
                      bg: ce ? "gray.200" : "transparent",
                      transition: "1s background",
                      onTouchStart: function() {
                          return fe(ce)
                      },
                      onTouchMove: function() {
                          return fe(ce)
                      },
                      onTouchEnd: me,
                      m: [0, ce ? 0 : "0 0 0 -12%", 0]
                  })), {}, {
                      children: [Object(K.jsxs)(p.p, Object(a.a)(Object(a.a)({
                          ref: G
                      }, be(le, (function() {
                          U || (H(!0),
                          S("reset"))
                      }
                      ), (function() {
                          H(!1),
                          S("hide")
                      }
                      ), (function() {
                          switch (_) {
                          case "zoom":
                              S("zoomed");
                              break;
                          case "zoomed":
                              S("zoomedx2");
                              break;
                          case "zoomedx2":
                              S("zoomedx3");
                              break;
                          default:
                              S("reset")
                          }
                      }
                      ))), {}, {
                          children: [Object(K.jsx)(Ce, {
                              bikeProps: re,
                              changeLoadState: oe
                          }), se]
                      })), ue, Y.a.shouldUseSliderInsteadOfCursorDragForBikeSpin() && Object(K.jsx)(ve, {})]
                  })), Object(K.jsx)(p.p, Object(a.a)(Object(a.a)({}, je(te, "SKETCHFAB")), {}, {
                      children: Object(K.jsx)(ke, Object(a.a)(Object(a.a)({}, re), {}, {
                          setLoadState: oe,
                          loadState: te
                      }))
                  })), Object(K.jsx)(p.p, Object(a.a)(Object(a.a)(Object(a.a)({}, je(te, "FALLBACK")), de), {}, {
                      children: Object(K.jsx)(u.a, Object(a.a)(Object(a.a)({}, (ae = r.simpleImage,
                      {
                          src: ae,
                          height: ["auto", "auto", "65%"],
                          width: ["75%", "75%", "auto"],
                          m: "-2rem 0 4rem"
                      })), {}, {
                          onError: function() {
                              return oe("ERROR")
                          }
                      }))
                  })), Object(K.jsx)(p.p, Object(a.a)(Object(a.a)({}, je(te, "ERROR")), {}, {
                      children: Object(K.jsx)(p.h, {
                          text: Q || "ERROR LOADING IMAGE"
                      })
                  }))]
              });
          default:
              return null
          }
      }
  },
  34: function(e, t, n) {
      "use strict";
      var r = n(16)
        , i = n(3)
        , a = function(e) {
          return e[e.your_bike = 0] = "your_bike",
          e[e.packs_and_accessories = 1] = "packs_and_accessories",
          e[e.summary = 2] = "summary",
          e[e.finance_calculator = 3] = "finance_calculator",
          e[e.terms = 4] = "terms",
          e
      }({})
        , c = function(e) {
          return e[e.supersport = 0] = "supersport",
          e[e.touring = 1] = "touring",
          e[e.adventure = 2] = "adventure",
          e[e.street = 3] = "street",
          e[e.custom = 4] = "custom",
          e[e["125cc"] = 5] = "125cc",
          e[e.scooter = 6] = "scooter",
          e[e.off_road = 7] = "off_road",
          e[e.montesa = 8] = "montesa",
          e
      }({})
        , o = n(5)
        , l = function() {
          for (var e = window.initialState.pageLink, t = Object.keys(c).filter((function(e) {
              return isNaN(Number(e))
          }
          )), n = void 0, r = 0; r < t.length; r++)
              if (e.includes(t[r])) {
                  n = r;
                  break
              }
          return "number" === typeof n ? t[n] : void 0
      }
        , s = function(e) {
          "undefined" === typeof window.dataLayer && (window.dataLayer = []),
          window.dataLayer.push(e)
      }
        , d = function(e) {
          var t = e.event
            , n = e.journey_step
            , r = e.bike_name
            , i = e.bike_category;
          s({
              event: t,
              journey_step: n,
              bike_name: r,
              bike_category: i
          })
      }
        , u = function(e) {
          var t, n = o.c.getState().calculated, r = o.d.getState().getSelectedColour, a = o.a.getState(), c = (a.getTotalAccessoryCost,
          a.selectedAccessories,
          n.otrPrice), l = n.basePrice, d = {
              bike_price: c || l,
              color: null === (t = r()) || void 0 === t ? void 0 : t.id
          }, u = Object(i.a)(Object(i.a)({}, e), d);
          s(u)
      }
        , b = function(e) {
          var t = o.d.getState()
            , n = t.selectedVariant
            , r = t.previousVariant
            , a = {
              event: "bike_configurator",
              change_from: null === r || void 0 === r ? void 0 : r.id,
              change_to: null === n || void 0 === n ? void 0 : n.id
          }
            , c = Object(i.a)(Object(i.a)({}, e), a);
          (null === r || void 0 === r ? void 0 : r.id) !== (null === n || void 0 === n ? void 0 : n.id) && s(c)
      }
        , f = function(e) {
          var t = ["event", "journey_step", "config_interaction", "finance_calculator_interaction", "finance_calculator_value", "bike_category", "bike_name"]
            , n = Object.fromEntries(Object.entries(e).filter((function(e) {
              var n = Object(r.a)(e, 1)[0];
              return t.includes(n)
          }
          )));
          s(n)
      };
      t.a = function(e) {
          var t = o.b.getState().currentStep
            , n = void 0 === t ? 0 : t
            , r = o.d.getState().model
            , c = {
              event: "bike_configurator",
              journey_step: a[n],
              bike_name: null === r || void 0 === r ? void 0 : r.id,
              bike_category: l(),
              config_interaction: "hvb"
          }
            , m = Object(i.a)(Object(i.a)({}, c), e);
          if ("bc_pageview" === m.event)
              d(m);
          else
              switch (m.config_interaction) {
              case "hvb":
                  u(m);
                  break;
              case "change_model":
                  b(m);
                  break;
              case "finance_calculator":
                  f(m);
                  break;
              default:
                  s(m)
              }
      }
  },
  36: function(e, t, n) {
      "use strict";
      n.d(t, "a", (function() {
          return V
      }
      )),
      n.d(t, "b", (function() {
          return X
      }
      )),
      n.d(t, "c", (function() {
          return se
      }
      )),
      n.d(t, "e", (function() {
          return Et
      }
      )),
      n.d(t, "g", (function() {
          return kt
      }
      )),
      n.d(t, "f", (function() {
          return Dt
      }
      )),
      n.d(t, "d", (function() {
          return Qt
      }
      )),
      n.d(t, "h", (function() {
          return en
      }
      )),
      n.d(t, "j", (function() {
          return tn
      }
      )),
      n.d(t, "i", (function() {
          return xn
      }
      )),
      n.d(t, "k", (function() {
          return Zn
      }
      )),
      n.d(t, "l", (function() {
          return Xn
      }
      )),
      n.d(t, "m", (function() {
          return wo
      }
      )),
      n.d(t, "n", (function() {
          return So
      }
      )),
      n.d(t, "o", (function() {
          return Yl
      }
      )),
      n.d(t, "p", (function() {
          return Kl
      }
      )),
      n.d(t, "q", (function() {
          return Xl
      }
      )),
      n.d(t, "r", (function() {
          return Zo
      }
      )),
      n.d(t, "s", (function() {
          return es
      }
      )),
      n.d(t, "t", (function() {
          return Ru
      }
      )),
      n.d(t, "u", (function() {
          return Vu
      }
      )),
      n.d(t, "v", (function() {
          return Yu
      }
      )),
      n.d(t, "w", (function() {
          return eb
      }
      )),
      n.d(t, "x", (function() {
          return ab
      }
      )),
      n.d(t, "y", (function() {
          return fb
      }
      )),
      n.d(t, "z", (function() {
          return he
      }
      )),
      n.d(t, "A", (function() {
          return vb
      }
      ));
      var r = {};
      n.r(r),
      n.d(r, "_3D", (function() {
          return tr
      }
      )),
      n.d(r, "Add", (function() {
          return or
      }
      )),
      n.d(r, "Brochure", (function() {
          return fr
      }
      )),
      n.d(r, "Calculator", (function() {
          return vr
      }
      )),
      n.d(r, "ChevronDouble", (function() {
          return Lr
      }
      )),
      n.d(r, "ChevronLeft", (function() {
          return Ar
      }
      )),
      n.d(r, "ChevronRight", (function() {
          return Ar
      }
      )),
      n.d(r, "Close", (function() {
          return Dr
      }
      )),
      n.d(r, "Comfort", (function() {
          return Ur
      }
      )),
      n.d(r, "Configure", (function() {
          return Xr
      }
      )),
      n.d(r, "Delete", (function() {
          return ti
      }
      )),
      n.d(r, "Design", (function() {
          return oi
      }
      )),
      n.d(r, "Facebook", (function() {
          return fi
      }
      )),
      n.d(r, "Helmet", (function() {
          return vi
      }
      )),
      n.d(r, "HelmetFront", (function() {
          return Li
      }
      )),
      n.d(r, "Honda", (function() {
          return Mi
      }
      )),
      n.d(r, "HondaLandscape", (function() {
          return Bi
      }
      )),
      n.d(r, "HondaPortrait", (function() {
          return Zi
      }
      )),
      n.d(r, "HondaFinancialServices", (function() {
          return $i
      }
      )),
      n.d(r, "Info", (function() {
          return aa
      }
      )),
      n.d(r, "InfoCircle", (function() {
          return ua
      }
      )),
      n.d(r, "Luggage", (function() {
          return ha
      }
      )),
      n.d(r, "Magnify", (function() {
          return ya
      }
      )),
      n.d(r, "Minify", (function() {
          return Ia
      }
      )),
      n.d(r, "Offer", (function() {
          return Pa
      }
      )),
      n.d(r, "Pdf", (function() {
          return za
      }
      )),
      n.d(r, "Pointer", (function() {
          return Za
      }
      )),
      n.d(r, "RadioOff", (function() {
          return $a
      }
      )),
      n.d(r, "RadioOn", (function() {
          return ac
      }
      )),
      n.d(r, "Reserve", (function() {
          return bc
      }
      )),
      n.d(r, "Reset", (function() {
          return kc
      }
      )),
      n.d(r, "Save", (function() {
          return Bc
      }
      )),
      n.d(r, "Share", (function() {
          return Yc
      }
      )),
      n.d(r, "Tick", (function() {
          return Qc
      }
      )),
      n.d(r, "Twitter", (function() {
          return ro
      }
      )),
      n.d(r, "Mail", (function() {
          return so
      }
      )),
      n.d(r, "BackToMyAccount", (function() {
          return Co
      }
      ));
      var i, a, c, o, l, s = n(3), d = n(16), u = n(0), b = n.n(u), f = n(222), m = n(13), p = function(e) {
          var t = e.split(" ")
            , n = "";
          return t.length > 3 ? t.forEach((function(e, r) {
              var i = " ";
              r === t.length / 2 - 1 && (i = "<br />"),
              n += "".concat(e).concat(i)
          }
          )) : n = e,
          n
      }, j = n(5), h = n(316), O = n(25), v = n(33), C = n(28), g = Object(C.b)(i || (i = Object(O.a)(["\n    button {\n        display: flex;\n        margin: initial;\n        padding: 0.5rem 1rem 0.5rem 1rem;\n        border: initial;\n        border-radius: unset;\n        background: unset;\n    }\n"]))), x = v.a.div(a || (a = Object(O.a)(["\n    ", "\n"])), (function(e) {
          return e.isAEM && g
      }
      )), y = {
          direction: ["column", "row"],
          mt: ["1rem", "2.5rem"],
          height: "100%",
          justifyContent: "flex-start"
      }, w = function(e) {
          return {
              flex: ["none", e ? "1.5" : "2"],
              flexDir: ["column-reverse", "column"],
              alignItems: "flex-start"
          }
      }, L = {
          flexDir: "column",
          flex: [.9, 0],
          display: ["flex", "block"],
          paddingRight: [0, "2rem"]
      }, _ = {
          type: ["h2", "h1"]
      }, S = {
          marginY: "2rem",
          type: "h4",
          width: ["90%", "80%"],
          letterSpacing: 1
      }, E = {
          width: ["100vw", "80%"],
          m: "2rem 0 3rem",
          position: "relative",
          left: ["-4rem", 0],
          right: ["-3rem", "3rem"],
          alignItems: "center",
          minHeight: "20rem"
      }, I = {
          angle: 32,
          size: "800x450",
          style: {
              display: "flex",
              alignItems: "center",
              maxWidth: ["60rem", "initial"],
              position: ["relative", "absolute"],
              left: [0, "-15%"],
              right: [0, "-10%"],
              top: [0, "-2rem"]
          }
      }, T = {
          flex: [1, "3"],
          position: "relative",
          height: ["80%", "calc(100vh - 350px)"],
          mr: [0, "-3rem", "-4rem"],
          width: ["calc(100vw - 6rem)", "initial"]
      }, A = function(e, t) {
          return {
              type: "chevronDouble",
              width: "1rem",
              fill: "rgba(0,0,0,0.5)",
              style: {
                  display: t ? "none" : "block",
                  position: "absolute",
                  bottom: "-3rem",
                  left: "50%",
                  transform: "rotate(270deg)",
                  opacity: e ? 0 : 1,
                  transition: "0.3s"
              }
          }
      }, M = {
          width: "100%",
          padding: ["0 0 4rem", " 0 2rem 0 0", "0 4rem 0 0"]
      }, k = {
          borderBottom: "1px solid rgba(0,0,0,0.05)",
          height: "4rem",
          _active: {
              outline: "none"
          },
          _focus: {
              outline: "none"
          }
      }, R = {
          alignItems: "center",
          color: "brand.red"
      }, P = function(e) {
          return {
              type: "chevronDouble",
              style: {
                  transform: e ? "rotate(270deg)" : "rotate(180deg)",
                  transition: "0.3s transform"
              },
              width: "1rem",
              fill: "currentColor"
          }
      }, F = {
          marginLeft: "1.4rem",
          type: "h4",
          fontWeight: "400",
          letterSpacing: 1,
          whiteSpace: "nowrap"
      }, D = {
          p: "1rem 0 8rem"
      }, N = {
          size: "sm",
          fields: [{
              dataKey: "label",
              columnProps: {
                  letterSpacing: 0
              },
              rowDataProps: {
                  minWidth: "12rem",
                  height: "4rem",
                  border: "none",
                  lineHeight: 1.1
              }
          }, {
              dataKey: "value",
              columnProps: {
                  textAlign: "right"
              },
              rowDataProps: {
                  textAlign: "right",
                  lineHeight: 1.1
              }
          }]
      }, B = n(2), H = function(e) {
          var t = e.specs
            , n = e.onUpdate
            , r = t.map((function(e, t) {
              return t
          }
          ))
            , i = Object(j.b)().isAEM;
          return Object(B.jsx)(Vu, {
              noScrollX: !0,
              disableForMobile: !0,
              onUpdate: n,
              children: Object(B.jsx)(h.a, Object(s.a)(Object(s.a)({}, M), {}, {
                  allowToggle: !0,
                  allowMultiple: !0,
                  defaultIndex: r,
                  children: t.map((function(e) {
                      return Object(B.jsx)(h.c, {
                          children: function(t) {
                              var n = t.isExpanded;
                              return Object(B.jsxs)(u.Fragment, {
                                  children: [Object(B.jsx)(x, {
                                      isAEM: i,
                                      children: Object(B.jsx)(h.b, Object(s.a)(Object(s.a)({}, k), {}, {
                                          children: Object(B.jsxs)(f.e, Object(s.a)(Object(s.a)({}, R), {}, {
                                              children: [Object(B.jsx)(wo, Object(s.a)({}, P(n))), Object(B.jsx)(he, Object(s.a)(Object(s.a)({}, F), {}, {
                                                  children: e.grouptitle
                                              }))]
                                          }))
                                      }))
                                  }), Object(B.jsx)(h.d, Object(s.a)(Object(s.a)({}, D), {}, {
                                      children: Object(B.jsx)(ab, Object(s.a)(Object(s.a)({}, N), {}, {
                                          data: e.table
                                      }))
                                  }))]
                              })
                          }
                      }, e.groupid)
                  }
                  ))
              }))
          })
      }, z = n(12), V = function() {
          var e = Object(j.d)((function(e) {
              return (0,
              e.getSelectedVariant)()
          }
          ))
            , t = Object(j.d)((function(e) {
              return (0,
              e.getSelectedColour)()
          }
          ))
            , n = Object(u.useState)(!1)
            , r = Object(d.a)(n, 2)
            , i = r[0]
            , a = r[1]
            , c = Object(j.b)().isAEM
            , o = Object(z.m)().width < parseInt(null === m.a || void 0 === m.a ? void 0 : m.a.breakpoints.sm);
          if (!e)
              return null;
          var l = e.name
            , b = e.description
            , h = e.spec
            , O = e.appDefaultParts
            , v = {
              variant: null === e || void 0 === e ? void 0 : e.id,
              colour: t.id,
              parts: O
          };
          return Object(B.jsxs)(f.l, Object(s.a)(Object(s.a)({}, y), {}, {
              children: [Object(B.jsxs)(f.e, Object(s.a)(Object(s.a)({}, w(c)), {}, {
                  children: [Object(B.jsxs)(f.e, Object(s.a)(Object(s.a)({}, L), {}, {
                      children: [Object(B.jsx)(he, Object(s.a)(Object(s.a)({}, _), {}, {
                          dangerouslySetInnerHTML: {
                              __html: p(l)
                          }
                      })), Object(B.jsx)(he, Object(s.a)(Object(s.a)({}, S), {}, {
                          dangerouslySetInnerHTML: {
                              __html: b
                          }
                      }))]
                  })), Object(B.jsx)(f.b, Object(s.a)(Object(s.a)({}, E), {}, {
                      children: Object(B.jsx)(X, Object(s.a)(Object(s.a)({}, I), {}, {
                          showProgress: !0,
                          bikeConfig: v,
                          fallbackUrl: null === t || void 0 === t ? void 0 : t.simpleImage
                      }))
                  }))]
              })), Object(B.jsxs)(f.e, Object(s.a)(Object(s.a)({}, T), {}, {
                  children: [Object(B.jsx)(H, {
                      specs: h,
                      onUpdate: function(e) {
                          if (e) {
                              var t = e.clientHeight
                                , n = e.contentScrollHeight
                                , r = e.scrollTop;
                              a(t + r >= n)
                          }
                      }
                  }), Object(B.jsx)(wo, Object(s.a)({}, A(i, o)))]
              }))]
          }))
      }, U = n(223), W = n(224), Y = n(70), G = {
          isIndeterminate: !0,
          colorScheme: "red",
          size: "sm",
          height: "0.2rem",
          width: "50%",
          alignSelf: "center",
          justifySelf: "center"
      }, Z = {
          type: "hondaPortrait",
          width: "60%",
          style: {
              maxWidth: "15rem"
          },
          fill: "#999999"
      }, K = {
          initial: "inactive",
          animate: "active",
          variants: {
              active: {
                  opacity: 1,
                  scale: 1,
                  transition: {
                      type: "spring",
                      damping: 20
                  }
              },
              inactive: {
                  opacity: 0,
                  scale: .9
              }
          },
          pointerEvents: "none",
          justifyContent: "center"
      }, X = function(e) {
          var t = e.angle
            , n = e.bikeConfig
            , r = e.size
            , i = e.fallbackUrl
            , a = e.marginOffset
            , c = e.style
            , o = e.showProgress
            , l = e.fallback1Size
            , b = e.fallback2Size
            , f = Object(u.useState)("")
            , m = Object(d.a)(f, 2)
            , p = m[0]
            , h = m[1]
            , O = Object(u.useState)("")
            , v = Object(d.a)(O, 2)
            , C = v[0]
            , g = v[1]
            , x = Object(u.useState)("100%")
            , y = Object(d.a)(x, 2)
            , w = y[0]
            , L = y[1]
            , _ = Object(u.useState)((null === a || void 0 === a ? void 0 : a.carousel) || 0)
            , S = Object(d.a)(_, 2)
            , E = S[0]
            , I = S[1]
            , T = Object(u.useState)("cover")
            , A = Object(d.a)(T, 2)
            , M = A[0]
            , k = A[1]
            , R = Object(j.d)((function(e) {
              return (0,
              e.getSelectedColour)()
          }
          ));
          Object(u.useEffect)((function() {
              return g("INIT"),
              function() {
                  return g("")
              }
          }
          ), [null === R || void 0 === R ? void 0 : R.id]);
          var P = function() {
              if (i) {
                  var e = new Image;
                  e.onload = function() {
                      h(e.src),
                      k("contain"),
                      L(l || "70%"),
                      g("LOADED"),
                      (null === a || void 0 === a ? void 0 : a.fallback) && I(null === a || void 0 === a ? void 0 : a.fallback)
                  }
                  ,
                  e.onerror = F,
                  e.src = i
              } else
                  F()
          }
            , F = function() {
              if (R) {
                  var e = new Image;
                  e.onload = function() {
                      h(e.src),
                      L(b || "70%"),
                      k("contain"),
                      g("LOADED"),
                      (null === a || void 0 === a ? void 0 : a.fallback2) && I(null === a || void 0 === a ? void 0 : a.fallback2)
                  }
                  ,
                  e.onerror = function() {
                      return g("ERROR")
                  }
                  ,
                  e.src = R.simpleImage
              } else
                  g("ERROR")
          };
          switch (C) {
          case "INIT":
              return function(e) {
                  g("LOADING");
                  var t = new Image;
                  t.onload = function() {
                      h(t.src),
                      L("100%"),
                      g("LOADED")
                  }
                  ,
                  t.onerror = P,
                  t.src = e[0]
              }(Object(Y.a)(n, t, r, 1, "default")),
              null;
          case "LOADING":
              return o ? Object(B.jsx)(U.b, Object(s.a)({}, G)) : null;
          case "LOADED":
              return Object(B.jsx)(Kl, Object(s.a)(Object(s.a)(Object(s.a)({}, K), c), {}, {
                  children: Object(B.jsx)(W.a, {
                      src: p,
                      height: "auto",
                      objectFit: M,
                      width: w,
                      m: E,
                      alignSelf: "center"
                  })
              }));
          default:
              return Object(B.jsx)(wo, Object(s.a)({}, Z))
          }
      }, q = n(10), Q = {
          bg: "white",
          border: "solid 1px",
          direction: ["column", "row"],
          borderColor: "brand.red",
          height: ["initial", "18rem"],
          overflow: "hidden",
          boxShadow: "0 0 20px rgba(0,0,0,0.1)",
          mb: "2rem",
          padding: ["3rem", "1rem"]
      }, J = {
          spacing: 5,
          alignItems: "flex-start",
          justifyContent: "center"
      }, $ = {
          type: "h3",
          color: "brand.red"
      }, ee = {
          height: "100%",
          width: ["100vw", "30rem"],
          padding: "2rem",
          m: ["-1rem -5rem 1rem", "0 0 0 -1rem"],
          justifyContent: "center"
      }, te = {
          width: "3rem",
          borderBottom: "solid 1px rgba(0,0,0,0.2)"
      }, ne = {
          type: "h6-caps",
          opacity: "0.7",
          mb: "-0.8rem"
      }, re = {
          type: "h1"
      }, ie = function(e) {
          return {
              angle: 32,
              size: "400x225",
              showProgress: !0,
              marginOffset: {
                  carousel: e ? "-1rem 0 -3rem -4rem" : "-1rem 0 -3rem -2rem",
                  fallback: "0 0 0 -2rem",
                  fallback2: "0 0 0 -2rem"
              },
              fallback1Size: e ? "70%" : "100%",
              fallback2Size: e ? "80%" : "100%"
          }
      }, ae = {
          type: "h1",
          padding: "1rem 0 2rem"
      }, ce = n(18), oe = function(e) {
          var t = e.i18n
            , n = e.variant
            , r = e.colour
            , i = e.accessories
            , a = e.price
            , c = Object(z.m)().width
            , o = t.summary_table_total
            , l = n.name
            , d = Object(ce.j)(i)
            , u = {
              variant: null === n || void 0 === n ? void 0 : n.id,
              colour: r.id,
              parts: d
          }
            , b = c < parseInt(null === m.a || void 0 === m.a ? void 0 : m.a.breakpoints.sm);
          return Object(B.jsxs)(f.l, Object(s.a)(Object(s.a)({}, Q), {}, {
              children: [Object(B.jsx)(f.e, Object(s.a)(Object(s.a)({}, ee), {}, {
                  children: Object(B.jsx)(X, Object(s.a)(Object(s.a)({}, ie(b)), {}, {
                      bikeConfig: u,
                      fallbackUrl: null === r || void 0 === r ? void 0 : r.simpleImage
                  }))
              })), Object(B.jsxs)(f.n, Object(s.a)(Object(s.a)({}, J), {}, {
                  children: [Object(B.jsx)(he, Object(s.a)(Object(s.a)({}, $), {}, {
                      children: l
                  })), Object(B.jsx)(f.d, Object(s.a)({}, te)), Object(B.jsx)(he, Object(s.a)(Object(s.a)({}, ne), {}, {
                      children: o
                  })), Object(B.jsx)(he, Object(s.a)(Object(s.a)({}, re), {}, {
                      children: a
                  }))]
              }))]
          }))
      }, le = n(54), se = function(e) {
          var t = e.croTestTwo
            , n = Object(z.l)().data
            , r = Object(j.b)().isFinanceAvailable
            , i = Object(j.e)().setIsFloatingCTAVisible
            , a = Object(j.d)((function(e) {
              return (0,
              e.getSelectedVariant)()
          }
          ))
            , c = Object(j.d)((function(e) {
              return (0,
              e.getSelectedColour)()
          }
          ))
            , o = Object(j.a)((function(e) {
              return e.selectedAccessories
          }
          ))
            , l = Object(u.useRef)(null)
            , d = Object(z.f)(l);
          Object(u.useEffect)((function() {
              i(!d)
          }
          ), [d]);
          var b = Object(j.c)()
            , m = b.useAlternateData
            , p = b.calculateQueryParams
            , h = Object(le.a)(p, m).data;
          if (!n || !a || !c)
              return null;
          var O = n.i18n
            , v = n.finance
            , C = n.locale
            , g = O.next_step_footlink
            , x = v.showNextStepsBanner
            , y = null === h || void 0 === h ? void 0 : h.otrPrice
            , w = Object(q.g)(y, C, {
              trimIntegers: !0
          });
          return Object(B.jsxs)(f.a, {
              ref: l,
              paddingTop: r ? 0 : "2rem",
              children: [Object(B.jsx)(he, Object(s.a)(Object(s.a)({}, ae), {}, {
                  children: g
              })), x && Object(B.jsx)(oe, {
                  i18n: O,
                  variant: a,
                  colour: c,
                  accessories: o,
                  price: w
              }), Object(B.jsx)(Et, {
                  columns: ["repeat(1, 1fr)", "repeat(3, 1fr)"],
                  buttonType: "outline",
                  hvbPosition: "next_step",
                  croTestTwo: t
              })]
          })
      }, de = (n(315),
      n(43)), ue = Object(C.b)(c || (c = Object(O.a)(["\n    button {\n        display: flex;\n        margin: initial;\n        padding: 1.5rem;\n        border: 1px solid #dc182d;\n        border-radius: unset;\n        background: #ffff;\n        &:hover {\n            background: #dc182d;\n        }\n    }\n"]))), be = (v.a.div(o || (o = Object(O.a)(["\n    ", "\n"])), (function(e) {
          return e.isAEM && ue
      }
      )),
      n(20)), fe = n(26), me = n(17), pe = n(56), je = ["type"], he = function(e) {
          var t = e.type
            , n = Object(pe.a)(e, je);
          if (!1 === Array.isArray(t))
              return Object(B.jsx)(f.m, Object(s.a)({
                  textStyle: t
              }, n));
          var r = parseInt(null === m.a || void 0 === m.a ? void 0 : m.a.breakpoints.sm)
            , i = parseInt(null === m.a || void 0 === m.a ? void 0 : m.a.breakpoints.md);
          return window.innerWidth < r || t.length < 2 ? Object(B.jsx)(f.m, Object(s.a)({
              textStyle: t[0]
          }, n)) : window.innerWidth > r && (window.innerWidth < i || t.length < 3) ? Object(B.jsx)(f.m, Object(s.a)({
              textStyle: t[1]
          }, n)) : Object(B.jsx)(f.m, Object(s.a)({
              textStyle: t[2]
          }, n))
      }, Oe = n(68), ve = {
          alignItems: "center",
          padding: "0.25rem 0.5rem",
          background: "brand.blue",
          color: "white"
      }, Ce = {
          background: "brand.darkBlue",
          color: "white",
          size: "2rem",
          marginLeft: "0.5rem",
          cursor: "pointer",
          alignSelf: "center",
          display: "inline-flex"
      }, ge = {
          accessory_selector_button: {
              position: "absolute",
              top: 0,
              left: 0
          },
          summary_table: {
              display: "inline-block"
          },
          accessory_modal: {
              alignSelf: "center"
          },
          packs_modal: {
              alignSelf: "flex-end"
          }
      }, xe = function(e) {
          var t, n = e.accessory, r = e.context, i = e.handleInfoClick, a = e.flexWrapperProps, c = e.i18n;
          if (!c || !n)
              return null;
          var o = c.customized_part_label
            , l = c.customized_pack_label
            , d = o
            , u = !1;
          null !== (t = n.bundledAccessories) && void 0 !== t && t.length && (d = l,
          Object(ce.g)(n.bundledAccessories).find((function(e) {
              return null === e || void 0 === e ? void 0 : e.isCustomisedPart
          }
          )) && (u = !0));
          if (n.isCustomisedPart && (u = !0),
          !u)
              return null;
          var b = "accessory_selector_button" !== r;
          return Object(B.jsxs)(f.e, Object(s.a)(Object(s.a)({}, a), {}, {
              children: [Object(B.jsx)(f.e, Object(s.a)(Object(s.a)(Object(s.a)({}, ve), ge[r]), {}, {
                  children: Object(B.jsx)(he, {
                      type: "label",
                      children: d
                  })
              })), b && Object(B.jsx)(we, {
                  handleInfoClick: i,
                  accessory: n
              })]
          }))
      }, ye = function(e) {
          var t = e.context
            , n = e.accessories
            , r = Object(Oe.b)().data
            , i = Object(j.e)().setIsModalVisible;
          if (!r || !n)
              return null;
          var a = n.find((function(e) {
              return !!e && (!!e.isCustomisedPart || !!Object(ce.g)(e.bundledAccessories).find((function(e) {
                  return null === e || void 0 === e ? void 0 : e.isCustomisedPart
              }
              )))
          }
          ));
          if (!a)
              return null;
          var c = r.customized_pack_label
            , o = r.configuration_contains_custom_part_message
            , l = r.pack_contains_custom_part_message
            , s = function() {
              i(!0, "customized_part")
          }
            , d = ("pack" === t ? l : o).split("{LABEL}");
          return Object(B.jsxs)(f.e, {
              children: [d.map((function(e, t) {
                  return Object(B.jsxs)(u.Fragment, {
                      children: [Object(B.jsxs)(he, {
                          type: "copy",
                          children: [e, "\xa0"]
                      }), t < d.length - 1 && Object(B.jsx)(he, {
                          type: "link",
                          onClick: s,
                          children: c
                      })]
                  }, t)
              }
              )), Object(B.jsx)(we, {
                  accessory: a
              })]
          })
      }, we = function(e) {
          var t = e.handleInfoClick
            , n = e.accessory
            , r = Object(j.e)().setIsModalVisible;
          if (!n)
              return null;
          if (!n.isCustomisedPart && !Object(ce.g)(n.bundledAccessories).find((function(e) {
              return null === e || void 0 === e ? void 0 : e.isCustomisedPart
          }
          )))
              return null;
          return Object(B.jsx)(f.c, Object(s.a)(Object(s.a)({}, Ce), {}, {
              onClick: function() {
                  r(!0, "customized_part"),
                  t && t()
              },
              children: Object(B.jsx)(wo, {
                  type: "info",
                  fill: "white",
                  height: "1.2rem"
              })
          }))
      }, Le = function(e) {
          var t = e.accessory
            , n = e.context
            , r = e.handleInfoClick
            , i = e.flexWrapperProps
            , a = Object(Oe.b)().data;
          return a && t ? xe({
              accessory: t,
              context: n,
              handleInfoClick: r,
              flexWrapperProps: i,
              i18n: a
          }) : null
      }, _e = function(e, t, n, r, i, a) {
          var c = r.rrp
            , o = r.summary_table_variant
            , l = r.summary_table_colour
            , s = r.summary_table_added
            , d = r.summary_table_costofInstallation
            , u = r.short_price_unavailable
            , b = j.a.getState().getTotalAccessoryInstallCost
            , f = e.name
            , m = e.priceLabel
            , p = e.price2
            , h = e.price2Label
            , O = t.name
            , v = t.price
            , C = t.priceTbc
            , g = t.priceTbcText
            , x = Object(q.t)(n)
            , y = v;
          C && (y = 0);
          var w = Math.max(a.otrPrice - y - x - b(), 0)
            , L = 0 === w ? 0 : w + y
            , _ = n.map((function(e) {
              var t;
              if (!e)
                  return null;
              var n = e.name
                , a = e.partNumber
                , c = e.price;
              return {
                  columns: [{
                      value: n,
                      partNumber: a
                  }, {
                      value: a,
                      type: "delete"
                  }, {
                      value: xe({
                          accessory: e,
                          context: "summary_table",
                          i18n: r
                      })
                  }, {
                      value: null !== (t = Object(q.b)(c, i)) && void 0 !== t ? t : r.price_unavailable
                  }]
              }
          }
          ))
            , S = [{
              name: "".concat(o, " & ").concat(l),
              price: Object(q.f)(L, i, {
                  hideIfZero: !0,
                  zeroValueLabel: u
              }),
              prefix: c,
              rows: [{
                  columns: [{
                      value: f
                  }, {
                      priceLabel: i.includes("de") ? m : "",
                      value: Object(q.f)(w, i, {
                          hideIfZero: !0,
                          zeroValueLabel: u
                      })
                  }]
              }, i.includes("de") && {
                  columns: [{
                      value: ""
                  }, {
                      priceLabel: "".concat(h),
                      value: Object(q.f)(p, i, {
                          hideIfZero: !0
                      })
                  }]
              }, {
                  columns: [{
                      value: O
                  }, {
                      value: C ? g : Object(q.f)(y, i, {
                          hideIfZero: !0
                      })
                  }]
              }]
          }];
          if (n.length > 0) {
              var E = {
                  name: "".concat(s, " (").concat(n.length, ")"),
                  price: Object(q.f)(x, i),
                  rows: _
              };
              S.push(E)
          }
          if (b() > 0) {
              var I = {
                  name: d,
                  price: Object(q.f)(b(), i),
                  rows: []
              };
              S.push(I)
          }
          return 0 === n.length && S.splice(1, 1),
          S
      }, Se = n.p + "static/media/ProximaNovaExCn-RegWeb.e438e365.woff";
      window.api && window.api.baseUrl && (l = window.api.baseUrl),
      me.Font.register({
          family: "Proxima",
          src: Se || "".concat(l, "Assets/mc-spa/fonts//ProximaNovaExCn-RegWeb.woff")
      });
      var Ee, Ie, Te, Ae, Me, ke, Re, Pe, Fe, De, Ne, Be, He, ze, Ve, Ue, We = m.a.colors, Ye = We.brand, Ge = We.gray, Ze = {
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          paddingTop: 10,
          paddingBottom: 5,
          paddingHorizontal: 10,
          color: Ge[900],
          fontSize: 12
      }, Ke = Object(s.a)(Object(s.a)({}, Ze), {}, {
          backgroundColor: Ge[200]
      }), Xe = me.StyleSheet.create({
          image: {
              width: 500,
              height: 312,
              marginBottom: 20
          },
          logos: {
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 40,
              width: "100%",
              paddingHorizontal: 30
          },
          hondaLogo: {
              width: 166,
              height: 25,
              marginRight: "auto"
          },
          bikeLogo: {
              width: "auto",
              height: 30
          },
          redHead: {
              color: Ye.red,
              fontSize: 15,
              fontWeight: "bold",
              marginTop: 20,
              textTransform: "uppercase"
          },
          head: {
              color: Ge[1e3],
              textAlign: "left",
              fontSize: 20,
              textTransform: "uppercase",
              marginTop: 20
          },
          summaryHead: {
              color: Ye.blueGray,
              fontSize: 40,
              textTransform: "uppercase",
              marginBottom: 40
          },
          page: {
              flexDirection: "column",
              paddingTop: 30,
              alignItems: "center",
              fontFamily: "Proxima",
              fontWeight: "thin"
          },
          pageFinance: {
              flexDirection: "column",
              width: "100%",
              alignItems: "center",
              fontFamily: "Proxima",
              fontWeight: "thin",
              backgroundColor: Ge[100],
              paddingVertical: 30
          },
          section: {
              margin: 10,
              padding: 10,
              flexGrow: 1
          },
          tableRow: Ze,
          tableRowAlternate: Ke,
          summaryVariantRow: Object(s.a)(Object(s.a)({}, Ze), {}, {
              textTransform: "uppercase"
          }),
          summaryVariantRowAlternate: Object(s.a)(Object(s.a)({}, Ze), {}, {
              backgroundColor: Ge[200],
              textTransform: "uppercase"
          }),
          summaryAccessoryRow: Ze,
          summaryAccessoryRowAlternate: Ke,
          rowTitle: Object(s.a)(Object(s.a)({}, Ze), {}, {
              fontSize: 15,
              color: Ye.blueGray,
              borderBottom: 1,
              marginTop: 20,
              borderBottomColor: Ge[300]
          }),
          totalRow: Object(s.a)(Object(s.a)({}, Ze), {}, {
              marginTop: 15,
              marginBottom: 20,
              fontSize: 30,
              color: Ye.blueGray,
              paddingTop: 15,
              paddingBottom: 2,
              borderBottom: 3,
              borderBottomColor: Ye.red
          }),
          content: {
              flexDirection: "column",
              width: "70%",
              justifyContent: "flex-start"
          },
          financeContent: {
              flexDirection: "column",
              width: "70%",
              justifyContent: "flex-start"
          },
          copy: {
              color: Ge[800],
              fontSize: 13,
              paddingBottom: 10
          },
          disclaimer: {
              color: Ge[700],
              fontSize: 10
          },
          bottomDivider: {
              width: "100%",
              paddingBottom: 20,
              borderBottom: 3,
              borderBottomColor: Ye.red
          }
      }), qe = function() {
          var e = Object(fe.a)(Object(be.a)().mark((function e(t, n) {
              return Object(be.a)().wrap((function(e) {
                  for (; ; )
                      switch (e.prev = e.next) {
                      case 0:
                          return e.abrupt("return", new Promise((function(e, r) {
                              var i = function() {
                                  var t = new Image;
                                  t.onload = function() {
                                      return e(n)
                                  }
                                  ,
                                  t.onerror = function() {
                                      return r(null)
                                  }
                                  ,
                                  t.src = n
                              }
                                , a = new Image;
                              a.onload = function(t) {
                                  t && t.currentTarget ? e(t.currentTarget.src || t.path[0].src) : i()
                              }
                              ,
                              a.onerror = i,
                              a.src = t
                          }
                          )));
                      case 1:
                      case "end":
                          return e.stop()
                      }
              }
              ), e)
          }
          )));
          return function(t, n) {
              return e.apply(this, arguments)
          }
      }(), Qe = n.p + "static/media/hondaLogoLandscape.d1894a6b.png", Je = function(e, t) {
          var n = 0;
          return e.map((function(e) {
              return n++,
              "Variant" === t ? $e(n, e) : et(n, e)
          }
          )).filter((function(e) {
              return e
          }
          ))
      }, $e = function(e, t) {
          return t ? Object(B.jsxs)(me.View, {
              style: e % 2 === 1 ? Xe.summaryVariantRow : Xe.summaryVariantRowAlternate,
              children: [Object(B.jsx)(me.Text, {
                  children: t.columns[0].value
              }), Object(B.jsx)(me.Text, {
                  children: t.columns[1].value
              })]
          }, "row".concat(e)) : null
      }, et = function(e, t) {
          return t ? Object(B.jsxs)(me.View, {
              style: e % 2 === 1 ? Xe.summaryAccessoryRow : Xe.summaryAccessoryRowAlternate,
              children: [Object(B.jsxs)(me.View, {
                  children: [Object(B.jsx)(me.Text, {
                      children: t.columns[0].value
                  }), Object(B.jsx)("br", {}), Object(B.jsx)(me.Text, {
                      children: t.columns[0].partNumber
                  })]
              }), Object(B.jsx)(me.Text, {
                  children: t.columns[2].value
              })]
          }, "row".concat(e)) : null
      }, tt = function(e) {
          return e.map((function(e, t) {
              return Object(B.jsxs)(me.View, {
                  style: t % 2 !== 1 ? Xe.tableRow : Xe.tableRowAlternate,
                  children: [Object(B.jsx)(me.Text, {
                      children: e.label
                  }), Object(B.jsx)(me.Text, {
                      style: {
                          textAlign: "right",
                          fontSize: 10,
                          width: "60%"
                      },
                      children: e.value
                  })]
              }, "specRow_".concat(e.id))
          }
          ))
      }, nt = n(37), rt = function(e, t, n, r, i, a) {
          var c, o = j.c.getState().selectedAverageMileages, l = t.otrPrice, s = null, d = r.includes("de") && "KML" === (null === t || void 0 === t ? void 0 : t.financeType) ? "finance_rex_customer_deposit_leasing" : "finance_rex_customer_deposit", u = r.includes("de") && "KML" === (null === t || void 0 === t ? void 0 : t.financeType) ? "finance_rex_total_lease_amount" : "finance_rex_total_amount_of_credit", b = (c = {
              finance_rex_annual_contracted_mileage: o() || 0
          },
          Object(nt.a)(c, d, null === t || void 0 === t ? void 0 : t.financeDepositAmount),
          Object(nt.a)(c, "finance_rex_dossier_fees", null === t || void 0 === t ? void 0 : t.financeDossierFee),
          Object(nt.a)(c, "finance_rex_excess_mileage_charge", null === t || void 0 === t ? void 0 : t.excessMileageAmount),
          Object(nt.a)(c, "finance_rex_guaranteed_minimum_future_value", null === t || void 0 === t ? void 0 : t.financeFinalPayment),
          Object(nt.a)(c, "finance_rex_guaranteed_minimum_future_value_option_fee", null === t || void 0 === t ? void 0 : t.financeOptionToPurchaseIncFee),
          Object(nt.a)(c, "finance_rex_honda_deposit_contribution", null === a || void 0 === a ? void 0 : a.financeDepositHondaContributionAmount),
          Object(nt.a)(c, "finance_rex_interest_rate_per_annum", null === t || void 0 === t ? void 0 : t.financeAnnualInterestRate),
          Object(nt.a)(c, "finance_rex_monthly_payments", null === t || void 0 === t ? void 0 : t.financeMonthlyPrice),
          Object(nt.a)(c, "finance_rex_on_the_road_price", l),
          Object(nt.a)(c, "finance_rex_opening_fee", null === t || void 0 === t ? void 0 : t.financeCreditOpeningFeeCalculated),
          Object(nt.a)(c, "finance_rex_option_to_purchase_fee", null === t || void 0 === t ? void 0 : t.financeOptionToPurchaseFee),
          Object(nt.a)(c, "finance_rex_pvpr_final", null === t || void 0 === t ? void 0 : t.financeTotalRetailPrice),
          Object(nt.a)(c, "finance_rex_representative_apr", null === t || void 0 === t ? void 0 : t.financeInterestRateRepresentative),
          Object(nt.a)(c, u, null === t || void 0 === t ? void 0 : t.financeTotalCreditPrice),
          Object(nt.a)(c, "finance_rex_total_amount_owed", null === t || void 0 === t ? void 0 : t.financeTotalOwed),
          Object(nt.a)(c, "finance_rex_total_amount_payable", null === t || void 0 === t ? void 0 : t.financeTotalPayablePrice),
          Object(nt.a)(c, "finance_rex_total_deposit", null === t || void 0 === t ? void 0 : t.financeDepositTotalAmount),
          Object(nt.a)(c, "finance_rex_total_without_insurance", l),
          Object(nt.a)(c, "finance_breakdown_acceptance_fee", null === t || void 0 === t ? void 0 : t.financeCreditAcceptanceFee),
          Object(nt.a)(c, "finance_form_repayment_time", null === t || void 0 === t ? void 0 : t.financeTerm),
          c), f = function() {
              return "VPL" !== (null === t || void 0 === t ? void 0 : t.financeType.toUpperCase())
          }, m = t.financeTerm || 0, p = t.financeRegularPayments || 0, h = b[n];
          switch (n) {
          case "finance_rex_annual_contracted_mileage":
              var O = h && h > 0 ? Object(q.e)(h, r) : null;
              O !== s && (s = O);
              break;
          case "finance_rex_interest_rate_per_annum":
              var v = Object(q.d)(h, r);
              v !== s && (s = v);
              break;
          case "finance_rex_representative_apr":
              var C = Object(q.c)(h, r);
              C !== s && (s = C);
              break;
          case "finance_rex_guaranteed_minimum_future_value":
          case "finance_rex_guaranteed_minimum_future_value_option_fee":
              var g = h && h > 0 && function() {
                  var e = (null === t || void 0 === t ? void 0 : t.financeType.toUpperCase()) || "";
                  return ["PCP", "PCP_PLUS"].includes(e)
              }() ? Object(q.f)(h, r) : null;
              g !== s && (s = g);
              break;
          case "finance_rex_option_to_purchase_fee":
              var x = h && h > 0 && f() ? Object(q.f)(h, r) : null;
              x !== s && (s = x);
              break;
          case "finance_rex_excess_mileage_charge":
              var y = h && h > 0 ? "".concat(Object(q.f)(h, r), " ").concat((null === e || void 0 === e ? void 0 : e.finance_form_per_mile) || "") : null;
              y !== s && (s = y);
              break;
          case "finance_form_repayment_time":
              var w = h && h > 0 ? h : null;
              w !== s && (s = w);
              break;
          case "finance_rex_dossier_fees":
              var L = f() ? null : Object(q.f)(h, r, {
                  trimIntegers: !0
              });
              L !== s && (s = L);
              break;
          default:
              var _ = h && h > 0 ? Object(q.f)(h, r) : null;
              _ !== s && (s = _)
          }
          var S = e[n];
          return "finance_rex_monthly_payments" === n && (S = r.includes("de") ? "".concat(e.finance_rex_monthly_payments.replace("{MONTHLY_TERM}", "".concat(null === t || void 0 === t ? void 0 : t.financeTerm)), " ").concat(Object(q.p)(e.finance_rex_monthly_payments_subtext, m, p)) : "".concat(e.finance_rex_monthly_payments, " ").concat(Object(q.p)(e.finance_rex_monthly_payments_subtext, m, p))),
          [S, s]
      }, it = function(e, t) {
          var n = ct(t)
            , r = e && e.dateTo ? new Date(e.dateTo).toLocaleDateString("de-DE") : "DD.MM.YYYY";
          return "**".concat(n.replace("{EXPIRY_DATE}", r))
      }, at = function(e, t) {
          var n = t.summary_conditions
            , r = e && e.dateTo ? new Date(e.dateTo).toLocaleDateString("de-DE") : "DD.MM.YYYY";
          return "".concat(null === n || void 0 === n ? void 0 : n.replace("{EXPIRY_DATE}", r))
      }, ct = function(e) {
          var t = e.legal_footnote
            , n = e.legal_footnote_randomly_selected;
          return n && 0 !== n.length ? n[Math.floor(Math.random() * n.length)] : t
      }, ot = n(27), lt = function(e, t, n, r) {
          for (var i = e, a = t.alternateFinanceData, c = [[/{overdraft}/g, function() {
              var e;
              return Object(q.f)(Object(ot.b)(null !== (e = null === a || void 0 === a ? void 0 : a.overdraft) && void 0 !== e ? e : ""), r)
          }
          ], [/{depositAmount}/g, function() {
              return Object(q.f)(t.financeDepositAmount, r)
          }
          ], [/{duration}/g, function() {
              var e;
              return Object(ot.c)(null !== (e = null === a || void 0 === a ? void 0 : a.duration) && void 0 !== e ? e : 0)
          }
          ], [/{TAEG}/g, function() {
              return "".concat(null === a || void 0 === a ? void 0 : a.TAEG, "%")
          }
          ], [/{TNC}/g, function() {
              return "".concat(null === a || void 0 === a ? void 0 : a.TNC, "%")
          }
          ], [/{dossierFees}/g, function() {
              var e;
              return Object(q.f)(Object(ot.b)(null !== (e = null === a || void 0 === a ? void 0 : a.dossierFees) && void 0 !== e ? e : ""), r)
          }
          ], [/{amount}/g, function() {
              return Object(q.f)(t.otrPrice, r)
          }
          ], [/{monthlyCostInsurance}/g, function() {
              var e;
              return Object(q.f)(Object(ot.b)(null !== (e = null === a || void 0 === a ? void 0 : a.monthlyCostInsurance) && void 0 !== e ? e : ""), r)
          }
          ], [/{totalCostInsurance}/g, function() {
              var e;
              return Object(q.f)(Object(ot.b)(null !== (e = null === a || void 0 === a ? void 0 : a.totalCostInsurance) && void 0 !== e ? e : ""), r)
          }
          ], [/{TAEA}/g, function() {
              return "".concat(null === a || void 0 === a ? void 0 : a.TAEA, "%")
          }
          ], [/{offerEndDate}/g, function() {
              return null === a || void 0 === a ? void 0 : a.offerEndDate
          }
          ], [/{numberOfTerms}/g, function() {
              var e;
              return Object(ot.c)(null !== (e = null === a || void 0 === a ? void 0 : a.numberOfTerms) && void 0 !== e ? e : 0)
          }
          ], [/{monthlyPayment}/g, function() {
              return Object(q.f)(t.financeMonthlyPrice, r)
          }
          ], [/{totalAmount}/g, function() {
              return Object(q.f)(t.financeTotalPayablePrice, r)
          }
          ], [/{interest}/g, function() {
              return Object(q.f)(t.financeInterestCost, r)
          }
          ], [/{creditCost}/g, function() {
              return Object(q.f)(t.financeTotalCreditPrice, r)
          }
          ], [/{todaysDate}/g, function() {
              return (new Date).toLocaleDateString()
          }
          ], [/{minAmount}/g, function() {
              return Object(q.f)(null === a || void 0 === a ? void 0 : a.minMax.minAmount)
          }
          ], [/{maxAmount}/g, function() {
              return Object(q.f)(null === a || void 0 === a ? void 0 : a.minMax.maxAmount)
          }
          ], [/{minDuration}/g, function() {
              var e;
              return Object(ot.c)(null !== (e = null === a || void 0 === a ? void 0 : a.minMax.minDuration) && void 0 !== e ? e : 0)
          }
          ], [/{maxDuration}/g, function() {
              var e;
              return Object(ot.c)(null !== (e = null === a || void 0 === a ? void 0 : a.minMax.maxDuration) && void 0 !== e ? e : 0)
          }
          ], [/{minTaeg}/g, function() {
              return "".concat(null === a || void 0 === a ? void 0 : a.minMax.minTaeg, "%")
          }
          ], [/{maxTaeg}/g, function() {
              return "".concat(null === a || void 0 === a ? void 0 : a.minMax.maxTaeg, "%")
          }
          ]], o = 0; o < c.length; o++) {
              var l, s = c[o];
              i = i.replace(s[0], null !== (l = s[1]()) && void 0 !== l ? l : "")
          }
          return i
      }, st = function(e, t, n, r, i, a) {
          var c = j.c.getState()
            , o = c.calculated
            , l = c.calculateQueryParams
            , d = c.depositAmount
            , u = c.selectedOffer
            , b = j.a.getState().getTotalAccessoryInstallCost()
            , f = l.servicingCost
            , m = u.termsAndConditions
            , p = null === l || void 0 === l ? void 0 : l.financeType.toLowerCase()
            , h = e["finance_copy_".concat(p)] ? bt(e["finance_copy_".concat(p)], !0) : null
            , O = t.includes("fr")
            , v = o.otrPrice
            , C = Object(q.f)(v, t, {
              trimIntegers: !0
          });
          return Object(B.jsxs)(me.View, {
              style: Xe.financeContent,
              children: [Object(B.jsx)(me.Text, {
                  style: Xe.summaryHead,
                  children: e.page_title_financecalculator
              }), Object(B.jsx)(me.Text, {
                  style: Object(s.a)(Object(s.a)({}, Xe.head), {}, {
                      marginTop: 0
                  }),
                  children: e["finance_offertype_".concat(p)]
              }), h && Object(B.jsx)(me.Text, {
                  style: Xe.copy,
                  children: h
              }), Object(B.jsx)(me.Text, {
                  style: Xe.redHead,
                  children: e.price_breakdown
              }), Object(B.jsxs)(me.View, {
                  style: Xe.rowTitle,
                  children: [Object(B.jsx)(me.Text, {
                      children: e.summary_variant
                  }), Object(B.jsxs)(me.Text, {
                      children: [Object(B.jsx)(me.Text, {
                          style: Object(s.a)(Object(s.a)({}, Xe.redHead), {}, {
                              fontSize: 10
                          }),
                          children: n[0].prefix
                      }), Object(q.f)(r.price, t)]
                  })]
              }), Object(B.jsxs)(me.View, {
                  style: Object(s.a)(Object(s.a)({}, Xe.rowTitle), {}, {
                      marginTop: 0
                  }),
                  children: [Object(B.jsx)(me.Text, {
                      children: e.summary_colour
                  }), Object(B.jsx)(me.Text, {
                      children: Object(q.f)(i.price, t)
                  })]
              }), n[1] && Object(B.jsxs)(me.View, {
                  style: Object(s.a)(Object(s.a)({}, Xe.rowTitle), {}, {
                      marginTop: 0
                  }),
                  children: [Object(B.jsx)(me.Text, {
                      children: n[1].name
                  }), Object(B.jsx)(me.Text, {
                      children: n[1].price
                  })]
              }), b > 0 && Object(B.jsxs)(me.View, {
                  style: Object(s.a)(Object(s.a)({}, Xe.rowTitle), {}, {
                      marginTop: 0
                  }),
                  children: [Object(B.jsx)(me.Text, {
                      children: e.summary_table_costofInstallation
                  }), Object(B.jsx)(me.Text, {
                      children: Object(q.f)(b, t)
                  })]
              }), f > 0 && Object(B.jsxs)(me.View, {
                  style: Object(s.a)(Object(s.a)({}, Xe.rowTitle), {}, {
                      marginTop: 0
                  }),
                  children: [Object(B.jsx)(me.Text, {
                      children: e.summary_table_servicing_fee
                  }), Object(B.jsx)(me.Text, {
                      children: Object(q.f)(f, t)
                  })]
              }), Object(B.jsxs)(me.View, {
                  style: Xe.totalRow,
                  children: [Object(B.jsx)(me.Text, {
                      style: Object(s.a)(Object(s.a)({}, Xe.redHead), {}, {
                          marginBottom: 8,
                          alignSelf: "flex-end"
                      }),
                      children: e.summary_table_total
                  }), Object(B.jsxs)(me.View, {
                      children: [Object(B.jsxs)(me.Text, {
                          style: {
                              alignSelf: "flex-end",
                              marginBottom: -10,
                              paddingBottom: 0
                          },
                          children: [C, "*"]
                      }), Object(B.jsx)(me.Text, {
                          style: Xe.copy,
                          children: e.summary_table_from_monthly && "".concat(Object(q.o)(e.summary_table_from_monthly, t, o.financeMonthlyPrice), "**")
                      })]
                  })]
              }), O && Object(B.jsx)(me.Text, {
                  style: Xe.copy,
                  children: e.summary_conditions
              }), Object(B.jsx)(me.Text, {
                  style: Xe.copy,
                  children: e.finance_monthly_payment_disclaimer && "**".concat(Object(q.k)(e.finance_monthly_payment_disclaimer, t, d || 0))
              }), Object(B.jsxs)(me.View, {
                  style: Xe.rowTitle,
                  children: [Object(B.jsx)(me.Text, {
                      children: e.finance_form_repayment_time
                  }), Object(B.jsx)(me.Text, {
                      style: Object(s.a)(Object(s.a)({}, Xe.copy), {}, {
                          paddingBottom: 0
                      }),
                      children: null === l || void 0 === l ? void 0 : l.financeTerm
                  })]
              }), t.includes("de") ? Object(B.jsx)(me.Text, {
                  style: Object(s.a)(Object(s.a)({}, Xe.head), {}, {
                      marginBottom: 10,
                      marginTop: 30
                  }),
                  children: Object(q.l)(e, o)
              }) : Object(B.jsx)(me.Text, {
                  style: Object(s.a)(Object(s.a)({}, Xe.head), {}, {
                      marginBottom: 10,
                      marginTop: 30
                  }),
                  children: e.finance_form_finance_details
              }), dt(e, t, a, o, u), Object(B.jsx)(me.View, {
                  style: Object(s.a)(Object(s.a)({}, Xe.rowTitle), {}, {
                      marginTop: 30,
                      marginBottom: 10
                  }),
                  children: Object(B.jsx)(me.Text, {
                      children: e.finance_form_tsandcs
                  })
              }), ut(e, t, o, m, a), Object(B.jsx)(me.View, {
                  style: Xe.bottomDivider
              })]
          })
      }, dt = function(e, t, n, r, i) {
          var a = e.finance_rex_order.split("|");
          if (t.includes("de")) {
              var c = "finance_rex_order_".concat(null === r || void 0 === r ? void 0 : r.financeType.toLowerCase());
              a = e[c] ? e[c].split("|") : e.finance_rex_order.split("|")
          }
          var o = -1;
          return a.map((function(n, a) {
              var c = rt(e, r, n, t, 0, i);
              return c[1] ? (o++,
              Object(B.jsxs)(me.View, {
                  style: o % 2 !== 1 ? Xe.tableRow : Xe.tableRowAlternate,
                  children: [Object(B.jsx)(me.Text, {
                      children: c[0]
                  }), Object(B.jsx)(me.Text, {
                      children: c[1]
                  })]
              }, "financeRow_".concat(a))) : null
          }
          ))
      }, ut = function(e, t, n, r, i) {
          var a = null !== r && void 0 !== r ? r : e.finance_form_tsandcs_content
            , c = lt(a, n, 0, t)
            , o = Object(B.jsx)(me.Text, {
              style: Xe.copy,
              children: bt(c)
          });
          if (t.includes("de")) {
              var l = it(n, e);
              o = Object(B.jsxs)(u.Fragment, {
                  children: [Object(B.jsx)(me.Text, {
                      style: Xe.copy,
                      children: e.summary_conditions
                  }), Object(B.jsx)(me.Text, {
                      style: Xe.copy,
                      children: bt(l)
                  })]
              })
          }
          return o
      }, bt = function(e, t) {
          var n = t ? e.replace(/<\/?a[^<]*<\/a>/g, "") : e
            , r = document.createElement("DIV");
          return r.innerHTML = n,
          r.textContent || r.innerText || ""
      }, ft = n(337), mt = j.b.getState().setIsPDFLoading, pt = function(e) {
          var t = e.accessoryRows
            , n = e.image
            , r = e.bikeName
            , i = e.i18n
            , a = e.locale
            , c = e.summaryTables
            , o = e.financeContent
            , l = e.variantRows
            , d = e.bikeLogo
            , b = e.specTable
            , f = e.calculated;
          mt(!1);
          var m = f.otrPrice
            , p = Object(q.g)(m, a, {
              trimIntegers: !0,
              hideIfZero: !0
          });
          return Object(B.jsxs)(me.Document, {
              children: [Object(B.jsxs)(me.Page, {
                  size: "A4",
                  style: Xe.page,
                  children: [Object(B.jsxs)(me.View, {
                      style: Xe.logos,
                      children: [Object(B.jsx)(me.Image, {
                          src: Qe,
                          style: Xe.hondaLogo
                      }), d && d.length > 0 && Object(B.jsx)(me.Image, {
                          src: d,
                          style: Xe.bikeLogo
                      })]
                  }), Object(B.jsx)(me.Text, {
                      style: Xe.summaryHead,
                      children: i.summary_your_bike
                  }), n && Object(B.jsx)(me.Image, {
                      src: n,
                      style: Xe.image
                  }), Object(B.jsxs)(me.View, {
                      style: Xe.content,
                      children: [Object(B.jsx)(me.Text, {
                          style: Xe.head,
                          children: r
                      }), Object(B.jsx)(me.Text, {
                          style: Xe.redHead,
                          children: i.price_breakdown
                      }), Object(B.jsxs)(me.View, {
                          style: Xe.rowTitle,
                          children: [Object(B.jsx)(me.Text, {
                              children: c[0].name
                          }), Object(B.jsxs)(me.Text, {
                              children: [Object(B.jsx)(me.Text, {
                                  style: Object(s.a)(Object(s.a)({}, Xe.redHead), {}, {
                                      fontSize: 10
                                  }),
                                  children: c[0].prefix
                              }), "  ", c[0].price]
                          })]
                      }), l]
                  })]
              }), Object(B.jsx)(me.Page, {
                  size: "A4",
                  style: Object(s.a)(Object(s.a)({}, Xe.page), {}, {
                      paddingBottom: 30
                  }),
                  children: Object(B.jsxs)(me.View, {
                      style: Xe.content,
                      children: [c[1] && Object(B.jsxs)(u.Fragment, {
                          children: [Object(B.jsxs)(me.View, {
                              style: Xe.rowTitle,
                              children: [Object(B.jsx)(me.Text, {
                                  children: c[1].name
                              }), Object(B.jsx)(me.Text, {
                                  children: c[1].price
                              })]
                          }), t]
                      }), Object(B.jsxs)(me.View, {
                          style: Xe.totalRow,
                          children: [Object(B.jsx)(me.Text, {
                              style: Object(s.a)(Object(s.a)({}, Xe.redHead), {}, {
                                  marginBottom: 8,
                                  alignSelf: "flex-end"
                              }),
                              children: i.summary_table_total
                          }), Object(B.jsxs)(me.Text, {
                              style: {
                                  alignSelf: "flex-end"
                              },
                              children: [p, "*"]
                          })]
                      }), Object(B.jsx)(me.Text, {
                          style: Xe.disclaimer,
                          children: a.includes("de") ? "*".concat(i.legal_footnote) : i.summary_conditions
                      }), b]
                  })
              }), o && Object(B.jsx)(me.Page, {
                  size: "A4",
                  style: Object(s.a)(Object(s.a)({}, Xe.pageFinance), {}, {
                      paddingBottom: 30
                  }),
                  children: o
              })]
          })
      }, jt = function() {
          var e = Object(fe.a)(Object(be.a)().mark((function e(t, n, r, i) {
              return Object(be.a)().wrap((function(e) {
                  for (; ; )
                      switch (e.prev = e.next) {
                      case 0:
                          if (i) {
                              e.next = 2;
                              break
                          }
                          return e.abrupt("return");
                      case 2:
                          return e.prev = 2,
                          e.next = 5,
                          ht(t, n, r, i);
                      case 5:
                          e.next = 10;
                          break;
                      case 7:
                          e.prev = 7,
                          e.t0 = e.catch(2),
                          console.error("Error during PDF render", e.t0);
                      case 10:
                      case "end":
                          return e.stop()
                      }
              }
              ), e, null, [[2, 7]])
          }
          )));
          return function(t, n, r, i) {
              return e.apply(this, arguments)
          }
      }(), ht = function() {
          var e = Object(fe.a)(Object(be.a)().mark((function e(t, n, r, i) {
              var a, c, o, l, s, d, b, f, m, p, h, O, v, C, g;
              return Object(be.a)().wrap((function(e) {
                  for (; ; )
                      switch (e.prev = e.next) {
                      case 0:
                          return mt(!0),
                          a = j.d.getState().model,
                          c = j.d.getState().getSelectedVariant(),
                          o = j.d.getState().getSelectedColour(),
                          l = j.b.getState().isFinanceAvailable,
                          s = j.a.getState().selectedAccessories,
                          d = Object(ce.j)(s),
                          b = Object(ce.g)(s.map((function(e) {
                              return e.id
                          }
                          ))),
                          f = {
                              variant: null === c || void 0 === c ? void 0 : c.id,
                              colour: null === o || void 0 === o ? void 0 : o.id,
                              parts: d
                          },
                          m = Object(q.g)(null === c || void 0 === c ? void 0 : c.price, n),
                          e.next = 12,
                          qe(Object(Y.a)(f, 32, "low")[0], null === o || void 0 === o ? void 0 : o.simpleImage);
                      case 12:
                          return p = e.sent,
                          h = _e(c, o, b, t, n, i),
                          O = Je(h[0].rows, "Variant"),
                          v = h[1] ? Je(h[1].rows, "Accessory") : null,
                          x = c.spec,
                          C = x.map((function(e) {
                              return Object(B.jsxs)(u.Fragment, {
                                  children: [Object(B.jsx)(me.View, {
                                      style: Xe.rowTitle,
                                      children: Object(B.jsx)(me.Text, {
                                          children: e.grouptitle
                                      })
                                  }), tt(e.table)]
                              }, "specTable_".concat(e.groupid))
                          }
                          )),
                          g = l ? st(t, n, h, c, o, r) : null,
                          e.next = 20,
                          vt(Object(B.jsx)(pt, {
                              image: p,
                              i18n: t,
                              bikeName: c.name,
                              bikeLogo: null === a || void 0 === a ? void 0 : a.logo,
                              price: m,
                              locale: n,
                              specTable: C,
                              accessoryRows: v,
                              variantRows: O,
                              summaryTables: h,
                              financeContent: g,
                              calculated: i
                          }), "Honda_".concat(c.name, "_").concat(t.route_3, ".pdf"));
                      case 20:
                      case "end":
                          return e.stop()
                      }
                  var x
              }
              ), e)
          }
          )));
          return function(t, n, r, i) {
              return e.apply(this, arguments)
          }
      }(), Ot = function(e, t) {
          Object(ft.saveAs)(e, t)
      }, vt = function() {
          var e = Object(fe.a)(Object(be.a)().mark((function e(t, n) {
              var r;
              return Object(be.a)().wrap((function(e) {
                  for (; ; )
                      switch (e.prev = e.next) {
                      case 0:
                          return e.next = 2,
                          Object(me.pdf)(t).toBlob();
                      case 2:
                          r = e.sent,
                          Ot(r, n);
                      case 4:
                      case "end":
                          return e.stop()
                      }
              }
              ), e)
          }
          )));
          return function(t, n) {
              return e.apply(this, arguments)
          }
      }(), Ct = n(113), gt = n(38), xt = function() {
          var e = Object(fe.a)(Object(be.a)().mark((function e(t, n, r) {
              var i, a, c, o, l, s, d, u, b, f, m, p, h, O, v, C, g, x, y, w, L, _, S, E, I, T, A, M, k, R, P, F, D, N;
              return Object(be.a)().wrap((function(e) {
                  for (; ; )
                      switch (e.prev = e.next) {
                      case 0:
                          if (v = t.i18n.onwardlinks.find((function(e) {
                              return "share" === e.type
                          }
                          )),
                          !Object(gt.e)(n) && n && null !== v && void 0 !== v && v.url) {
                              e.next = 3;
                              break
                          }
                          return e.abrupt("return");
                      case 3:
                          return C = yt(t),
                          e.next = 6,
                          Object(Ct.b)(C);
                      case 6:
                          g = e.sent,
                          x = g.id,
                          y = g.locale,
                          w = g.productId,
                          L = g.variant,
                          _ = g.colour,
                          S = g.financeType,
                          E = g.financeTerm,
                          I = g.financeDepositAmount,
                          T = g.annualMileage,
                          A = v.url.replace("{ID}", x),
                          M = j.b.getState(),
                          M.isAEM && (k = document.location,
                          R = k.origin,
                          P = k.pathname,
                          A = "".concat(R).concat(P, "?load=").concat(x)),
                          F = j.a.getState(),
                          D = F.selectedAccessories,
                          N = n.replaceAll("{locale}", y).replaceAll("{productId}", null !== w && void 0 !== w ? w : "").replaceAll("{variantId}", null !== L && void 0 !== L ? L : "").replaceAll("{colorId}", null !== _ && void 0 !== _ ? _ : "").replaceAll("{shareUrl}", encodeURIComponent(A)).replaceAll("{addedAccessoryIds}", D.map((function(e) {
                              return e.id
                          }
                          )).join(",")).replaceAll("{financeType}", null !== S && void 0 !== S ? S : "").replaceAll("{financeTerm}", null !== (i = null === E || void 0 === E ? void 0 : E.toString()) && void 0 !== i ? i : "").replaceAll("{financeDeposit}", null !== (a = null === I || void 0 === I ? void 0 : I.toFixed(2)) && void 0 !== a ? a : "").replaceAll("{financeMileage}", null !== (c = null === T || void 0 === T ? void 0 : T.toString()) && void 0 !== c ? c : "").replaceAll("{basePrice}", null !== (o = null === r || void 0 === r || null === (l = r.otrPrice) || void 0 === l ? void 0 : l.toFixed(2)) && void 0 !== o ? o : "").replaceAll("{totalPrice}", null !== (s = null === r || void 0 === r || null === (d = r.financeTotalPayablePrice) || void 0 === d ? void 0 : d.toFixed(2)) && void 0 !== s ? s : "").replaceAll("{financeCode}", null !== (u = null === r || void 0 === r ? void 0 : r.financeCode) && void 0 !== u ? u : "").replaceAll("{financeMonthlyPayment}", null !== (b = null === r || void 0 === r || null === (f = r.financeMonthlyPrice) || void 0 === f ? void 0 : f.toFixed(2)) && void 0 !== b ? b : "").replaceAll("{financeInterestRate}", null !== (m = null === r || void 0 === r || null === (p = r.financeAnnualInterestRate) || void 0 === p ? void 0 : p.toFixed(2)) && void 0 !== m ? m : "").replaceAll("{financeInterestRateRepresentative}", null !== (h = null === r || void 0 === r || null === (O = r.financeInterestRateRepresentative) || void 0 === O ? void 0 : O.toFixed(2)) && void 0 !== h ? h : ""),
                          window.location.href = N;
                      case 14:
                      case "end":
                          return e.stop()
                      }
              }
              ), e)
          }
          )));
          return function(t, n, r) {
              return e.apply(this, arguments)
          }
      }(), yt = function(e) {
          var t, n = j.a.getState().getFullAccessories().map((function(e) {
              var t;
              return null !== (t = null === e || void 0 === e ? void 0 : e.partNumber) && void 0 !== t ? t : ""
          }
          )), r = j.c.getState(), i = r.calculateQueryParams, a = r.isServicingIncluded, c = j.d.getState(), o = c.getSelectedColour, l = c.getSelectedVariant, s = o(), d = l();
          return {
              locale: null !== (t = null === e || void 0 === e ? void 0 : e.locale) && void 0 !== t ? t : "en-GB",
              productType: null === e || void 0 === e ? void 0 : e.productType,
              productId: null === e || void 0 === e ? void 0 : e.productId,
              accessories: n,
              colour: null === s || void 0 === s ? void 0 : s.id,
              variant: null === d || void 0 === d ? void 0 : d.id,
              financeTerm: null === i || void 0 === i ? void 0 : i.financeTerm,
              annualMileage: null === i || void 0 === i ? void 0 : i.annualMileage,
              financeDepositAmount: null === i || void 0 === i ? void 0 : i.depositAmount,
              financeType: null === i || void 0 === i ? void 0 : i.financeType,
              appliedServicing: a
          }
      }, wt = xt, Lt = n(34), _t = n(338), St = n.n(_t), Et = function(e) {
          var t, n = e.buttonType, r = e.columns, i = e.overrideCTAs, a = e.hvbPosition, c = void 0 === a ? "atf" : a, o = e.croTestTwo, l = void 0 !== o && o, d = Object(j.e)((function(e) {
              return function(t) {
                  return e.setIsModalVisible(!0, t)
              }
          }
          )), u = Object(j.c)(), b = u.calculateQueryParams, m = u.useAlternateData, p = Object(z.c)(b, m).data, h = Object(j.b)(), O = h.isAEM, v = h.isPDFLoading, C = Object(j.d)((function(e) {
              return e.getSelectedVariant()
          }
          )), g = Object(j.d)((function(e) {
              return (0,
              e.getSelectedColour)()
          }
          )), x = Object(de.g)(), y = "#ffff", w = null === g || void 0 === g || null === (t = g.hexColours) || void 0 === t ? void 0 : t.length;
          if (1 === w)
              y = "".concat(null === g || void 0 === g ? void 0 : g.hexColours[0]);
          else if (w > 1) {
              var L;
              y = "linear-gradient(".concat(null === g || void 0 === g || null === (L = g.hexColours) || void 0 === L ? void 0 : L.join(","), ")")
          }
          var _ = St()(y)
            , S = Object(z.l)().data;
          if (!S)
              return null;
          var E = S.i18n
            , I = S.locale
            , T = S.finance
            , A = (null !== i && void 0 !== i ? i : E.onwardlinks).filter((function(e) {
              return !Object(gt.e)(e.label)
          }
          )).filter((function(e) {
              return "reserve" !== e.type || O
          }
          )).map((function(e) {
              if (null !== C && void 0 !== C && C.enableReservationCallToAction) {
                  var t = E.onwardlinks.find((function(e) {
                      return "reserve" === e.type
                  }
                  ));
                  if ("testride" === e.type && t)
                      return t
              }
              return e
          }
          ))
            , M = {
              pdf: v ? "loading" : "pdf",
              save: "save",
              reserve: "reserve",
              dealer_share: "share",
              share: "share",
              testride: "helmet",
              dealer: "pointer",
              bike_brochure: "brochure",
              accessory_brochure: "brochure",
              finance_options: "calculator",
              finance_offer_cta: "calculator",
              view_offers: "offer",
              back_to_my_account: "BackToMyAccount"
          };
          return Object(B.jsx)(f.f, Object(s.a)(Object(s.a)({}, {
              templateColumns: r,
              gap: ["1.5rem", "1.7rem"],
              width: "100%",
              paddingY: ["1.5rem", 0],
              mb: ["initial", "2rem !important"]
          }), {}, {
              children: A.map((function(e, t) {
                  var r = n || "outline";
                  "reserve" === e.type && (r = "red");
                  var i = Object(B.jsx)(Qt, Object(s.a)(Object(s.a)({
                      as: "div",
                      textType: "h5"
                  }, function(e, t, n, r, i, a) {
                      var c = n[t]
                        , o = i.isLight()
                        , l = {};
                      return r && (l.background = i._originalInput,
                      l.color = o ? "brand.slate" : "white"),
                      Object(s.a)({
                          type: e,
                          startIcon: "chevronRight",
                          endIcon: c,
                          endIconColor: "reserve" === t || !o && r ? "white" : "brand.slate",
                          onClick: a,
                          height: "initial",
                          minHeight: "4rem",
                          paddingY: "1rem",
                          width: "100%",
                          shuntStart: !0,
                          textAlign: "left"
                      }, l)
                  }(r, e.type, M, l, _, (function() {
                      return function(e) {
                          switch (Object(Lt.a)({
                              hvb_type: e.type,
                              hvb_position: c
                          }),
                          e.type) {
                          case "reserve":
                          case "save":
                          case "dealer_share":
                          case "back_to_my_account":
                              return wt(S, e.url, p);
                          case "share":
                              d("share");
                              break;
                          case "finance_offer_cta":
                              x.push("/finance");
                              break;
                          case "pdf":
                              return jt(E, I, T, p);
                          default:
                              window.open("".concat(e.url), "_blank")
                          }
                      }(e)
                  }
                  ))), {}, {
                      children: e.label
                  }), "cta".concat(t));
                  return i
              }
              ))
          }))
      }, It = {
          as: "button",
          flexDir: "row",
          height: ["2rem", "1rem"],
          cursor: "pointer",
          color: "brand.slate",
          alignItems: "center",
          opacity: .7,
          _hover: {
              opacity: 1
          },
          border: "unset"
      }, Tt = {
          type: "icon-link",
          p: ["0 0.8rem", "0.3rem 0.8rem 0"],
          letterSpacing: 2
      }, At = {
          type: "close",
          width: "1.1rem",
          height: "1.3rem",
          fill: "currentColor"
      }, Mt = ["i18n", "onClick"], kt = function(e) {
          var t, n = e.i18n, r = e.onClick, i = Object(pe.a)(e, Mt);
          n && (t = n.modal_close);
          return Object(B.jsxs)(f.e, Object(s.a)(Object(s.a)(Object(s.a)({}, i), {}, {
              onClick: r
          }, It), {}, {
              children: [t && Object(B.jsx)(he, Object(s.a)(Object(s.a)({}, Tt), {}, {
                  children: t
              })), Object(B.jsx)(wo, Object(s.a)({}, At))]
          }))
      }, Rt = {
          justifyContent: ["flex-end", "flex-start"],
          alignSelf: "flex-end",
          position: ["relative", "absolute"],
          left: 0,
          top: "50%",
          right: 0
      }, Pt = function(e, t, n) {
          return {
              as: "button",
              d: t ? "flex" : "none",
              id: e,
              position: ["relative", "absolute"],
              top: "50%",
              left: ["initial", "back" === e ? "4rem" : "initial"],
              right: ["initial", "next" === e ? "4rem" : "initial"],
              width: "5rem",
              height: "5rem",
              background: "white",
              borderRadius: "2.5rem",
              border: "1px solid",
              borderColor: "gray.400",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              justifyContent: "center",
              alignItems: "center",
              color: "gray.800",
              cursor: "pointer",
              m: ["0 0 0 2rem", "-2.5rem 0 0"],
              pointerEvents: "auto",
              transition: "0.3s",
              _hover: {
                  borderColor: "gray.700",
                  color: "gray.1000"
              },
              onClick: function(e) {
                  return n(e)
              }
          }
      }, Ft = function(e) {
          return {
              type: e,
              width: "0.8rem",
              fill: "currentColor"
          }
      }, Dt = function(e) {
          var t = e.isBackActive
            , n = e.isNextActive
            , r = e.onClick;
          return Object(B.jsxs)(f.e, Object(s.a)(Object(s.a)({}, Rt), {}, {
              children: [Object(B.jsx)(f.e, Object(s.a)(Object(s.a)({}, Pt("back", t, r)), {}, {
                  children: Object(B.jsx)(wo, Object(s.a)({}, Ft("chevronLeft")))
              })), Object(B.jsx)(f.e, Object(s.a)(Object(s.a)({}, Pt("next", n, r)), {}, {
                  children: Object(B.jsx)(wo, Object(s.a)({}, Ft("chevronRight")))
              }))]
          }))
      }, Nt = n(150), Bt = function(e) {
          return {
              fill: "currentColor",
              type: e,
              height: "1rem"
          }
      }, Ht = function(e) {
          return {
              fill: "currentColor",
              type: e,
              width: "1.3rem",
              height: "2rem"
          }
      }, zt = function(e) {
          return {
              type: e || "cta",
              color: "white",
              mb: ["-0.2rem"]
          }
      }, Vt = function(e, t) {
          return {
              transition: "0.2s transform ease-out",
              _groupHover: {
                  transform: "translateX(".concat(e, ")")
              },
              color: t || "initial"
          }
      }, Ut = function(e) {
          return {
              fill: "white",
              type: e,
              height: "1rem"
          }
      }, Wt = function(e) {
          return {
              type: e || "cta",
              color: "white",
              mb: ["-0.2rem"]
          }
      }, Yt = function(e) {
          return {
              fill: "white",
              type: e,
              height: "1rem"
          }
      }, Gt = function(e) {
          return {
              type: e || "h5-caps"
          }
      }, Zt = {
          width: "100%",
          borderBottom: "1px solid",
          borderBottomColor: "brand.red",
          transition: "width 0.5s ease",
          _groupHover: {
              width: 0
          }
      }, Kt = function(e) {
          return {
              type: e || ["h5-caps", "cta"],
              color: "inherit",
              mb: ["-0.2rem"],
              lineHeight: 1
          }
      }, Xt = {
          size: "md",
          mb: "-0.4rem",
          color: "brand.red",
          _groupHover: {
              color: "white"
          }
      }, qt = ["children", "endIconColor", "noWrap", "type", "shuntEnd", "shuntStart", "startIcon", "endIcon", "disabled", "textType"], Qt = function(e) {
          var t = e.children
            , n = e.endIconColor
            , r = e.noWrap
            , i = e.type
            , a = e.shuntEnd
            , c = e.shuntStart
            , o = e.startIcon
            , l = e.endIcon
            , d = e.disabled
            , u = e.textType
            , b = Object(pe.a)(e, qt)
            , m = c ? "boolean" === typeof c ? "0.3rem" : c : 0
            , p = a ? "0.3rem" : 0
            , j = b.textAlign
            , h = {
              whiteSpace: r ? "nowrap" : "initial"
          }
            , O = function(e, t) {
              return Object(B.jsx)(f.a, Object(s.a)(Object(s.a)({}, function(e, t, n) {
                  return {
                      transition: "0.2s transform ease-out",
                      marginRight: "1.2rem",
                      color: e,
                      _groupHover: {
                          color: t || e,
                          transform: "translateX(".concat(n, ")")
                      },
                      _groupActive: {
                          color: t || e
                      }
                  }
              }(e, t, m)), {}, {
                  children: Object(B.jsx)(wo, Object(s.a)({}, Bt(o)))
              }))
          }
            , v = function() {
              return Object(B.jsx)(f.a, Object(s.a)(Object(s.a)({}, function(e, t) {
                  return {
                      transition: "0.2s transform ease-out",
                      _groupHover: {
                          transform: "translateX(".concat(t, ")"),
                          color: "white"
                      },
                      color: e || "initial"
                  }
              }(n, p)), {}, {
                  children: "loading" === l ? Object(B.jsx)(Nt.a, Object(s.a)({}, Xt)) : Object(B.jsx)(wo, Object(s.a)({}, Ht(l)))
              }))
          };
          switch (i) {
          case "dark":
              return Object(B.jsxs)(f.e, Object(s.a)(Object(s.a)(Object(s.a)({}, function(e, t) {
                  return {
                      as: "button",
                      justifyContent: "center" === e ? e : "space-between",
                      alignItems: "center",
                      padding: "0 2rem",
                      height: "5rem",
                      background: "brand.blueGray",
                      cursor: "pointer",
                      role: "group",
                      disabled: t,
                      _hover: {
                          background: "brand.slate"
                      }
                  }
              }(j, d)), b), {}, {
                  children: [o && O("white"), Object(B.jsx)(he, Object(s.a)(Object(s.a)(Object(s.a)({}, zt(u)), h), {}, {
                      children: t
                  })), Object(B.jsx)(f.a, Object(s.a)(Object(s.a)({}, Vt(p, n)), {}, {
                      children: "loading" === l ? Object(B.jsx)(Nt.a, Object(s.a)({}, Xt)) : Object(B.jsx)(wo, Object(s.a)({}, Ut(l)))
                  }))]
              }));
          case "large":
              return Object(B.jsxs)(f.e, Object(s.a)(Object(s.a)(Object(s.a)({}, function(e) {
                  return {
                      as: "button",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "0 2rem",
                      height: "5rem",
                      background: "brand.red",
                      cursor: "pointer",
                      role: "group",
                      disabled: e
                  }
              }(d)), b), {}, {
                  children: [o && O("white"), Object(B.jsx)(he, Object(s.a)(Object(s.a)(Object(s.a)({}, Wt(u)), h), {}, {
                      children: t
                  })), Object(B.jsx)(f.a, Object(s.a)(Object(s.a)({}, Vt(p, n)), {}, {
                      children: "loading" === l ? Object(B.jsx)(Nt.a, Object(s.a)({}, Xt)) : Object(B.jsx)(wo, Object(s.a)({}, Yt(l)))
                  }))]
              }));
          case "link":
              return Object(B.jsxs)(f.e, Object(s.a)(Object(s.a)(Object(s.a)({}, function(e) {
                  return {
                      as: "button",
                      alignSelf: "baseline",
                      display: "inline-block",
                      paddingBottom: "0.4rem",
                      cursor: "pointer",
                      role: "group",
                      disabled: e
                  }
              }(d)), b), {}, {
                  children: [o && O("brand.red"), Object(B.jsx)(he, Object(s.a)(Object(s.a)(Object(s.a)({}, Gt(u)), h), {}, {
                      children: t
                  })), Object(B.jsx)(f.a, Object(s.a)({}, Zt))]
              }));
          case "outline":
              return Object(B.jsxs)(f.e, Object(s.a)(Object(s.a)(Object(s.a)({}, function(e, t) {
                  return {
                      as: "button",
                      alignItems: "center",
                      padding: "0 1.5rem",
                      height: "4rem",
                      justifyContent: "center" === e ? e : "space-between",
                      border: "1px solid",
                      borderColor: "brand.red",
                      boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                      background: t ? "transparent" : "white",
                      width: ["100%", "100%", "17.5rem"],
                      color: "brand.slate",
                      cursor: "pointer",
                      _hover: {
                          bg: "brand.red",
                          color: "white"
                      },
                      _active: {
                          bg: "brand.red",
                          color: "white"
                      },
                      role: "group"
                  }
              }(j, d)), b), {}, {
                  children: [Object(B.jsxs)(f.e, {
                      alignItems: "center",
                      children: [o && O("brand.red", "white"), Object(B.jsx)(he, Object(s.a)(Object(s.a)(Object(s.a)({}, Kt(u)), h), {}, {
                          children: t
                      }))]
                  }), l && v()]
              }));
          case "red":
              return Object(B.jsxs)(f.e, Object(s.a)(Object(s.a)(Object(s.a)({}, function(e) {
                  return {
                      as: "button",
                      alignItems: "center",
                      padding: "0 1.5rem",
                      height: "4rem",
                      justifyContent: "center" === e ? e : "space-between",
                      border: "1px solid",
                      borderColor: "brand.red",
                      boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                      background: "brand.red",
                      width: ["100%", "100%", "17.5rem"],
                      color: "white",
                      cursor: "pointer",
                      role: "group"
                  }
              }(j)), b), {}, {
                  children: [Object(B.jsxs)(f.e, {
                      alignItems: "center",
                      children: [o && O("white", "white"), Object(B.jsx)(he, Object(s.a)(Object(s.a)(Object(s.a)({}, Kt(u)), h), {}, {
                          children: t
                      }))]
                  }), l && v()]
              }));
          case "shadow":
              return Object(B.jsxs)(f.e, Object(s.a)(Object(s.a)(Object(s.a)({}, function(e) {
                  return {
                      as: "button",
                      alignItems: "center",
                      padding: "0 2rem",
                      height: "5rem",
                      justifyContent: "space-between",
                      background: "white",
                      width: "17.5rem",
                      pointerEvents: e ? "none" : "auto",
                      color: e ? "gray.600" : "brand.slate",
                      boxShadow: "0 0 10px rgba(0,0,0,0.2)",
                      cursor: "pointer",
                      _hover: {
                          bg: "brand.red",
                          color: "white",
                          boxShadow: "inset 0 0 0 2px ".concat(e ? "gray.600" : "brand.red")
                      },
                      _active: {
                          bg: "brand.red",
                          color: "white"
                      },
                      role: "group",
                      disabled: e
                  }
              }(d)), b), {}, {
                  children: [Object(B.jsxs)(f.e, {
                      alignItems: "center",
                      children: [o && O("brand.red", "white"), Object(B.jsx)(he, Object(s.a)(Object(s.a)(Object(s.a)({}, Kt(u)), h), {}, {
                          children: t
                      }))]
                  }), l && v()]
              }));
          default:
              return null
          }
      }, Jt = {
          animate: "active",
          initial: "inactive",
          variants: {
              active: {
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  transition: {
                      delay: 1
                  }
              },
              inactive: {
                  opacity: 0,
                  scale: .9,
                  y: 10
              }
          },
          opacity: 0,
          padding: ["2rem 5rem", "4rem 6rem", "8rem 10rem"],
          bg: "white",
          borderBottom: "solid 2px",
          borderColor: "brand.slate",
          boxShadow: "0 0 20px rgba(0,0,0,0.1)"
      }, $t = {
          type: ["h4-caps", "h2"],
          fontWeight: 800,
          color: "brand.red",
          margin: "auto"
      }, en = function(e) {
          var t = e.isOverlay
            , n = e.text;
          return t ? Object(B.jsx)(Kl, Object(s.a)(Object(s.a)({}, Jt), {}, {
              children: Object(B.jsx)(he, Object(s.a)(Object(s.a)({}, $t), {}, {
                  children: n
              }))
          })) : Object(B.jsx)(he, Object(s.a)(Object(s.a)({}, $t), {}, {
              children: n
          }))
      }, tn = function(e) {
          var t, n = e.croTestTwo, r = Object(u.useRef)(null), i = Object(z.m)().width, a = Object(u.useState)(0), c = Object(d.a)(a, 2), o = c[0], l = c[1], b = Object(j.e)().isFloatingCTAVisible;
          return Object(z.k)((function() {
              var e = null === r || void 0 === r ? void 0 : r.current
                , t = (null === e || void 0 === e ? void 0 : e.getBoundingClientRect().top) || 0;
              l(t < 0 ? Math.abs(t) : 0)
          }
          )),
          i < 1200 ? null : Object(B.jsx)(Kl, Object(s.a)(Object(s.a)({
              ref: r
          }, (t = b,
          {
              d: ["none", "none", "block"],
              position: "absolute",
              top: 0,
              right: "4rem",
              zIndex: 20,
              opacity: 1,
              width: "18rem",
              animate: {
                  paddingTop: "".concat(70 + o, "px"),
                  opacity: t ? 1 : 0,
                  transition: {
                      duration: .2
                  }
              }
          })), {}, {
              children: Object(B.jsx)(Et, {
                  hvbPosition: "btf",
                  croTestTwo: n
              })
          }))
      }, nn = n(31), rn = Object(C.b)(Ee || (Ee = Object(O.a)(["\n    button {\n        display: inline-block;\n        margin: unset;\n        margin-left: 0.7rem;\n        padding: unset;\n        padding-bottom: 0;\n        border: unset;\n        border-radius: unset;\n        background-color: unset;\n    }\n"]))), an = v.a.div(Ie || (Ie = Object(O.a)(["\n    ", "\n"])), (function(e) {
          return e.isAEM && rn
      }
      )), cn = Object(C.b)(Te || (Te = Object(O.a)(["\n    button {\n        display: flex;\n        margin: unset;\n        width: 1.5rem;\n        height: 1.5rem;\n        background: #ffff;\n        border: solid 1px #c1c1c1;\n        border-radius: 50%;\n    }\n"]))), on = v.a.div(Ae || (Ae = Object(O.a)(["\n    ", "\n"])), (function(e) {
          return e.isAEM && cn
      }
      )), ln = {
          flexDirection: "column",
          position: "relative",
          zIndex: 1,
          padding: ["2rem 3rem 4rem", 0],
          minWidth: ["initial", "45.3rem"],
          mr: "1.6rem"
      }, sn = {
          display: ["block", "none"],
          borderColor: "rgba(0,0,0,0.15)",
          width: "100%",
          m: ["0 0 4rem", 0]
      }, dn = {
          direction: ["column", "row"],
          alignItems: ["flex-start", "center"],
          spacing: 3,
          position: "relative"
      }, un = {
          type: "calculator",
          fill: "brand.slate",
          width: "1.5rem",
          height: "1.8rem"
      }, bn = {
          type: "h3",
          display: "flex",
          alignItems: "center",
          paddingTop: "0.35rem",
          width: ["70%", "initial"]
      }, fn = {
          containerConfig: {
              backgroundColor: "brand.red",
              height: "1.8rem",
              width: "1.8rem",
              position: "relative",
              as: "span"
          },
          type: "chevronRight",
          fill: "white",
          height: "0.7rem"
      }, mn = {
          color: ["gray.900", "brand.red"],
          type: ["h6-caps", "h7-caps"],
          lineHeight: 1.2,
          letterSpacing: .5,
          mt: "0.7rem"
      }, pn = {
          m: ["1rem 0", "0.2rem 0 -0.7rem"],
          alignItems: ["flex-start", "center"],
          direction: ["column", "row"],
          spacing: [1, 5]
      }, jn = {
          m: ["1rem 0", "0.2rem 0 -0.7rem"],
          alignItems: "center",
          justifyContent: "flex-start",
          direction: "row",
          spacing: [1, 5]
      }, hn = {
          marginX: "0.5rem",
          mb: ["1.6rem", "0.2rem"]
      }, On = function(e) {
          var t = e.config
            , n = e.calculated
            , r = t.i18n
            , i = t.locale
            , a = Object(j.b)().isAEM
            , c = Object(de.g)();
          if (!n)
              return null;
          var o, l = n.financeMonthlyPrice, d = n.financeDepositAmount, u = n.financeInterestRateRepresentative, b = n.financeDepositHondaContributionAmount;
          return Object(B.jsxs)(f.l, Object(s.a)(Object(s.a)({}, pn), {}, {
              opacity: n ? 1 : .3,
              children: [Object(B.jsx)(he, {
                  type: "h6",
                  children: Object(q.n)(r.finance_offer_copy_month, i, l, u)
              }), b > 0 && Object(B.jsx)(f.h, {
                  children: Object(B.jsx)(he, {
                      type: "h6",
                      children: Object(q.j)(r.finance_offer_copy_deposit, i, b)
                  })
              }), Object(B.jsx)(on, {
                  isAEM: a,
                  children: Object(B.jsx)(f.a, Object(s.a)(Object(s.a)({}, hn), {}, {
                      onClick: function() {
                          c.push("/terms")
                      },
                      children: Object(B.jsx)(wo, Object(s.a)({}, {
                          containerConfig: {
                              as: "button",
                              backgroundColor: "white",
                              border: "solid 1px",
                              borderColor: "gray.500",
                              height: "1.5rem",
                              width: "1.5rem",
                              position: ["absolute", "relative"],
                              paddingLeft: "0.1rem",
                              cursor: "pointer"
                          },
                          type: "info",
                          fill: "brand.bluegray",
                          height: "0.8rem",
                          onClick: o
                      }))
                  }))
              }), d > 0 && Object(B.jsx)(he, {
                  type: "h6",
                  children: "**".concat(Object(q.k)(r.finance_monthly_payment_disclaimer, i, d))
              })]
          }))
      }, vn = function(e) {
          var t = e.config
            , n = e.calculated
            , r = Object(j.b)().isAEM
            , i = t.i18n
            , a = t.locale
            , c = null === n || void 0 === n ? void 0 : n.otrPrice
            , o = null === n || void 0 === n ? void 0 : n.financeMonthlyPrice;
          if (!n || !o)
              return null;
          var l = Object(q.g)(c, a, {
              trimIntegers: !0
          });
          return Object(B.jsxs)(f.e, Object(s.a)(Object(s.a)({}, jn), {}, {
              opacity: n ? 1 : .3,
              children: [Object(B.jsx)(he, {
                  type: "h6",
                  pr: "0.7rem",
                  borderRight: "1px solid rgba(0,0,0,0.1)",
                  children: l
              }), Object(B.jsx)(nn.b, {
                  to: "/finance",
                  children: Object(B.jsx)(an, {
                      isAEM: r,
                      children: Object(B.jsx)(Qt, {
                          type: "link",
                          ml: "0.7rem",
                          pb: "0",
                          children: Object(B.jsx)(he, {
                              type: "h6",
                              children: "".concat(Object(q.n)(i.finance_offer_copy_month, a, o, null), "**")
                          })
                      })
                  })
              })]
          }))
      }, Cn = function(e, t) {
          return !!e.includes("fr") || !!t
      }, gn = function(e) {
          var t = e.i18n
            , n = e.locale
            , r = e.showMonthlyPrice
            , i = e.calculated
            , a = Object(j.b)().isFinanceAvailable
            , c = Object(u.useState)("")
            , o = Object(d.a)(c, 2)
            , l = o[0]
            , b = o[1];
          return Object(u.useEffect)((function() {
              var e = ct(t);
              b(e)
          }
          ), []),
          r && n.includes("de") ? Object(B.jsx)(he, Object(s.a)(Object(s.a)({}, mn), {}, {
              children: it(i, t)
          })) : !1 === Cn(n, a) ? null : !1 === Object(gt.e)(l) ? Object(B.jsx)(he, Object(s.a)(Object(s.a)({}, mn), {}, {
              children: l
          })) : r ? Object(B.jsx)(he, Object(s.a)(Object(s.a)({}, mn), {}, {
              children: t.financial_services
          })) : null
      }, xn = function(e) {
          var t = e.isSmall
            , n = e.calculated
            , r = Object(z.l)().data
            , i = Object(j.b)((function(e) {
              return e.isFinanceAvailable
          }
          ));
          if (!r)
              return null;
          var a = r.i18n
            , c = r.finance
            , o = r.locale
            , l = c.showMonthlyPrice
            , d = function() {
              var e;
              null !== (e = c.externalFinanceCalculator) && void 0 !== e && e.enabled && Object(q.s)(r)
          }
            , u = i
            , b = c.showMonthlyPrice && !c.hidePromoFinancialInfo && i;
          return Object(B.jsxs)(f.e, Object(s.a)(Object(s.a)({}, ln), {}, {
              children: [Object(B.jsx)(f.d, Object(s.a)({}, sn)), u && Object(B.jsxs)(f.l, Object(s.a)(Object(s.a)({}, dn), {}, {
                  children: [Object(B.jsx)(wo, Object(s.a)({}, un)), Object(B.jsxs)(he, Object(s.a)(Object(s.a)({}, bn), {}, {
                      children: [a.finance_offer_title, Object(B.jsx)(nn.b, {
                          to: "/finance",
                          style: {
                              padding: "0.1rem 0.5rem",
                              display: "inline-flex"
                          },
                          onClick: d,
                          children: Object(B.jsx)(wo, Object(s.a)(Object(s.a)({}, fn), {}, {
                              onClick: d
                          }))
                      })]
                  }))]
              })), t && u && Object(B.jsx)(he, Object(s.a)(Object(s.a)({}, mn), {}, {
                  children: at(n, a)
              })), b && o.includes("de") ? Object(B.jsx)(vn, {
                  config: r,
                  calculated: n
              }) : b && Object(B.jsx)(On, {
                  config: r,
                  calculated: n
              }), Object(B.jsx)(gn, {
                  i18n: a,
                  locale: o,
                  showMonthlyPrice: l,
                  calculated: n
              })]
          }))
      }, yn = Object(C.b)(Me || (Me = Object(O.a)(["\n    button {\n        display: flex;\n        margin: initial;\n        padding: 2rem;\n        border: unset;\n        border-radius: unset;\n        width: 22rem;\n        background: #dc182d;\n    }\n"]))), wn = Object(C.b)(ke || (ke = Object(O.a)(["\n    button {\n        display: flex;\n        height: 100%;\n        margin: initial;\n        border: unset;\n        border-radius: unset;\n        padding: 0 1rem;\n        background: #dc182d;\n    }\n"]))), Ln = v.a.div(Re || (Re = Object(O.a)(["\n    ", "\n"])), (function(e) {
          return e.isAEM && yn
      }
      )), _n = v.a.div(Pe || (Pe = Object(O.a)(["\n    height: 100%;\n    ", "\n"])), (function(e) {
          return e.isAEM && wn
      }
      )), Sn = Object(C.b)(Fe || (Fe = Object(O.a)(["\n    button {\n        display: inline-block;\n        margin: unset;\n        padding-bottom: 0.4rem;\n        border: unset;\n        background: unset;\n        font-family: inherit;\n        border-radius: unset;\n    }\n"]))), En = v.a.div(De || (De = Object(O.a)(["\n    ", "\n"])), (function(e) {
          return e.isAEM && Sn
      }
      )), In = {
          borderLeft: "1px solid rgba(0,0,0,0.1)",
          height: "100%",
          padding: "0 1.6rem",
          alignItems: "center",
          width: "33.3%"
      }, Tn = {
          type: "h6",
          whiteSpace: "break-spaces"
      }, An = function(e, t, n) {
          return {
              as: "footer",
              position: t && n ? "absolute" : "fixed",
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: t ? 99 : 100,
              width: "100%",
              boxShadow: e ? "0 0 40px rgba(0,0,0,0.2)" : "0 0 0px rgba(0,0,0,0.2)",
              spacing: 0,
              borderTop: "1px solid",
              borderColor: "gray.400",
              transition: "0.3s box-shadow"
          }
      }, Mn = function(e, t, n) {
          return {
              ref: e,
              width: "100%",
              height: [t ? "6rem" : 0, t ? "8.2rem" : 0],
              bg: n.includes("fr-FR") ? "gray.400" : "gray.200",
              justify: ["stretch", "space-between"],
              alignItems: "center",
              paddingX: [0, "2rem", "4rem"],
              overflow: "hidden"
          }
      }, kn = function(e, t, n) {
          return {
              active: {
                  height: e ? 280 : t.includes("de") && n ? 152 : 90,
                  transition: {
                      duration: .2,
                      delayChildren: 2.4
                  }
              },
              inactive: {
                  height: 0,
                  transition: {
                      type: "tween",
                      duration: .05
                  }
              }
          }
      }, Rn = {
          active: {
              opacity: 1,
              transition: {
                  delay: .2
              }
          },
          inactive: {
              opacity: 0
          }
      }, Pn = function(e) {
          return {
              initial: "inactive",
              animate: e ? "active" : "inactive",
              direction: ["column-reverse", "row"],
              justifyContent: ["center", "flex-start"],
              alignItems: ["flex-start", "center"],
              padding: ["2rem 3rem", "0rem 4rem"],
              variants: Rn,
              opacity: 0,
              width: "100%"
          }
      }, Fn = {
          alignItems: "flex-start",
          justifyContent: "center"
      }, Dn = {
          type: "h6",
          mr: ["1rem", "3rem"]
      }, Nn = {
          m: ["2.05rem 0 2.45rem", 0],
          borderColor: "gray.400",
          width: "100%"
      }, Bn = {
          type: "h6",
          mr: "1rem",
          textTransform: "uppercase"
      }, Hn = {
          width: "5.1rem",
          height: "5.1rem",
          bg: "white",
          borderRadius: "2.55rem",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          cursor: "pointer",
          transition: "0.2s padding",
          _groupHover: {
              paddingBottom: "0.5rem"
          }
      }, zn = {
          type: "chevronLeft",
          style: {
              transform: "rotate(90deg)"
          },
          width: "7.76rem",
          height: "1.1rem"
      }, Vn = function(e) {
          var t = e.calculated
            , n = e.isMobile
            , r = e.isActive
            , i = Object(j.b)().isFinanceAvailable
            , a = Object(z.l)().data;
          Object(de.g)();
          if (!a)
              return null;
          var c, o = a.locale, l = null === a || void 0 === a ? void 0 : a.i18n, d = l.footer, u = l.back_to_top, b = l.summary_conditions;
          return Object(B.jsx)(Kl, Object(s.a)(Object(s.a)({}, function(e, t, n, r) {
              return {
                  initial: "inactive",
                  animate: t ? "active" : "inactive",
                  variants: kn(e, n, r),
                  position: "relative",
                  overflow: "hidden",
                  height: 0,
                  backgroundColor: "white",
                  justify: e ? "center" : "space-between",
                  align: "center",
                  width: "100%",
                  zIndex: 101
              }
          }(n, r, o, i)), {}, {
              children: Object(B.jsxs)(Kl, Object(s.a)(Object(s.a)({}, Pn(r)), {}, {
                  children: [o.includes("de") && Object(B.jsxs)(f.n, Object(s.a)(Object(s.a)({}, Fn), {}, {
                      children: [Object(B.jsx)(he, Object(s.a)(Object(s.a)({}, Dn), {}, {
                          children: b
                      })), i && Object(B.jsx)(he, Object(s.a)(Object(s.a)({}, Dn), {}, {
                          children: "".concat(it(t, null === a || void 0 === a ? void 0 : a.i18n))
                      }))]
                  })), !o.includes("de") && Object(B.jsx)(he, Object(s.a)(Object(s.a)({}, Dn), {}, {
                      children: d
                  })), n && Object(B.jsx)(f.d, Object(s.a)({}, Nn)), Object(B.jsxs)(f.e, Object(s.a)(Object(s.a)({}, (c = function() {
                      window.scrollTo({
                          top: 0,
                          behavior: "smooth"
                      })
                  }
                  ,
                  {
                      as: "button",
                      minWidth: ["unset", "13.1rem"],
                      width: ["100%", "13.1rem"],
                      justify: ["flex-end"],
                      alignItems: "center",
                      role: "group",
                      ml: "auto",
                      onClick: c
                  })), {}, {
                      children: [Object(B.jsx)(he, Object(s.a)(Object(s.a)({}, Bn), {}, {
                          children: u
                      })), Object(B.jsx)(f.b, Object(s.a)(Object(s.a)({}, Hn), {}, {
                          children: Object(B.jsx)(wo, Object(s.a)({}, zn))
                      }))]
                  }))]
              }))
          }))
      }, Un = function(e, t, n) {
          var r, i;
          return void 0 !== e && e < 2 || (!!(t && null !== (r = t.finance) && void 0 !== r && null !== (i = r.externalFinanceCalculator) && void 0 !== i && i.enabled && n) || !!(n && void 0 !== e && e < 3))
      }, Wn = function(e) {
          var t, n = e.nextStep, r = e.scrollY, i = e.calculated, a = Object(z.l)().data, c = Object(j.b)().isFinanceAvailable, o = Object(u.useRef)(null), l = Object(j.e)((function(e) {
              return e.setFooterHeight
          }
          )), d = Object(j.b)(), b = d.currentStep, m = d.isAEM, p = d.isAEMFooterBottom, h = Object(z.m)();
          if (Object(u.useEffect)((function() {
              if (o && o.current) {
                  var e = o.current.getBoundingClientRect().height;
                  l(e)
              } else
                  l(0)
          }
          ), [null === o || void 0 === o ? void 0 : o.current, a, h, b]),
          !a)
              return null;
          var O = a.locale
            , v = a.finance
            , C = a.i18n
            , g = C.page_title_financecalculator
            , x = C.route_4
            , y = Un(b, a, c)
            , w = null === n || void 0 === n ? void 0 : n.text;
          return "/terms" === (null === n || void 0 === n ? void 0 : n.to) && null !== (t = a.finance.externalFinanceCalculator) && void 0 !== t && t.enabled && (w = x),
          Object(B.jsxs)(f.n, Object(s.a)(Object(s.a)({}, An(r < document.body.scrollHeight - window.innerHeight - 1, m, p)), {}, {
              children: [y && Object(B.jsxs)(f.e, Object(s.a)(Object(s.a)({}, Mn(o, y, O)), {}, {
                  children: [Object(B.jsx)(xn, {
                      calculated: i
                  }), O.includes("de") && v.enableFinance && Object(B.jsx)(f.e, Object(s.a)(Object(s.a)({}, In), {}, {
                      children: Object(B.jsx)(he, Object(s.a)(Object(s.a)({
                          isTruncated: !0,
                          noOfLines: 4
                      }, Tn), {}, {
                          children: at(i, a.i18n)
                      }))
                  })), n && Object(B.jsx)(f.e, {
                      borderLeft: "1px solid rgba(0,0,0,0.1)",
                      paddingLeft: [0, "2rem", "4rem"],
                      height: "100%",
                      alignItems: "center",
                      children: Object(B.jsx)(nn.b, {
                          to: m ? "/finance" : n.to,
                          onClick: function() {
                              var e;
                              "/finance" === n.to && null !== (e = a.finance.externalFinanceCalculator) && void 0 !== e && e.enabled && Object(q.s)(a)
                          },
                          children: Object(B.jsx)(Ln, {
                              isAEM: m,
                              children: Object(B.jsx)(Qt, {
                                  type: "large",
                                  width: ["22rem", "20rem", "22rem"],
                                  endIcon: "chevronRight",
                                  shuntEnd: !0,
                                  "data-cy": "bottom-bar--next-step",
                                  children: m ? g : w
                              })
                          })
                      })
                  })]
              })), b >= 2 && !m && Object(B.jsx)(Vn, {
                  calculated: i,
                  isMobile: !1,
                  isActive: r > document.body.scrollHeight - window.innerHeight - 300
              })]
          }))
      }, Yn = n(6), Gn = function(e) {
          var t, n = e.nextStep, r = e.scrollY, i = e.calculated, a = Object(z.l)().data, c = Object(u.useRef)(null), o = Object(j.e)((function(e) {
              return e.setFooterHeight
          }
          )), l = Object(j.b)(), d = l.isAEM, b = l.isAEMFooterBottom, m = l.currentStep, p = l.isFinanceAvailable, h = Object(z.m)();
          if (Object(u.useEffect)((function() {
              if (c && c.current) {
                  var e = c.current.getBoundingClientRect().height;
                  o(e)
              } else
                  o(0)
          }
          ), [null === c || void 0 === c ? void 0 : c.current, a, p, h]),
          !a || !i)
              return null;
          var O = i.financeMonthlyPrice
            , v = i.otrPrice
            , C = a.i18n
            , g = a.locale
            , x = a.finance
            , y = v > 0 ? Object(q.f)(v, g) : null
            , w = Object(Yn.d)(nn.b)
            , L = x.showMonthlyPrice && !x.hidePromoFinancialInfo && p
            , _ = function(e) {
              return g.includes("de") && "finanzierungsrechner" === e.toLowerCase() ? "Finanzierungs\xadrechner" : e
          }
            , S = Un(m, a, p)
            , E = null === n || void 0 === n ? void 0 : n.text;
          return "/terms" === (null === n || void 0 === n ? void 0 : n.to) && null !== (t = a.finance.externalFinanceCalculator) && void 0 !== t && t.enabled && (E = C.route_4),
          Object(B.jsxs)(f.n, Object(s.a)(Object(s.a)({}, An(r < document.body.scrollHeight - window.innerHeight - 1, d, b)), {}, {
              children: [Object(B.jsxs)(f.e, Object(s.a)(Object(s.a)({}, Mn(c, S, g)), {}, {
                  children: [Object(B.jsx)(f.e, {
                      width: "33.3%",
                      borderRight: "1px solid",
                      borderRightColor: "gray.500",
                      padding: "0 1rem",
                      children: g.includes("de") ? Object(B.jsxs)(f.n, {
                          spacing: -1,
                          alignItems: "flex-start",
                          children: [Object(B.jsx)(he, {
                              type: "h7-caps",
                              color: "gray.1000",
                              children: C.summary_table_total
                          }), Object(B.jsx)(he, {
                              type: "h3",
                              color: "brand.red",
                              letterSpacing: 1,
                              children: y
                          }), Object(B.jsx)(nn.b, {
                              to: "/finance",
                              children: Object(B.jsx)(En, {
                                  isAEM: d,
                                  children: Object(B.jsx)(Qt, {
                                      type: "link",
                                      children: L && Object(B.jsx)(he, {
                                          type: "h7-caps",
                                          color: "gray.1000",
                                          children: Object(q.n)(C.finance_offer_copy_month, g, O, null)
                                      })
                                  })
                              })
                          })]
                      }) : Object(B.jsxs)(f.n, {
                          spacing: -1,
                          alignItems: "flex-start",
                          children: [Object(B.jsx)(he, {
                              type: "h7-caps",
                              color: "gray.1000",
                              children: C.summary_table_total
                          }), Object(B.jsx)(he, {
                              type: "h3",
                              color: "brand.red",
                              letterSpacing: 1,
                              children: Object(q.f)(v, g)
                          }), L && Object(B.jsxs)(he, {
                              type: "h7-caps",
                              color: "gray.1000",
                              children: [Object(q.n)(C.finance_header_monthly_cost, g, O, null), "**"]
                          })]
                      })
                  }), Object(B.jsx)(f.h, {
                      width: "33.3%",
                      alignItems: "center",
                      justifyContent: "center",
                      spacing: 3,
                      padding: "0 1rem",
                      children: p && Object(B.jsxs)(u.Fragment, {
                          children: [Object(B.jsx)(f.a, {
                              children: Object(B.jsx)(wo, {
                                  type: "calculator",
                                  fill: "brand.slate",
                                  width: "1.5rem"
                              })
                          }), Object(B.jsx)(he, {
                              lineHeight: "sm",
                              type: "h7-caps",
                              children: _(C.page_title_financecalculator)
                          }), Object(B.jsx)(f.a, {
                              paddingTop: "0.8rem",
                              children: Object(B.jsx)(nn.b, {
                                  to: "/finance",
                                  children: Object(B.jsx)(wo, {
                                      containerConfig: {
                                          backgroundColor: "brand.red",
                                          height: "1.4rem",
                                          width: "1.4rem",
                                          marginLeft: "-0.4rem"
                                      },
                                      type: "chevronRight",
                                      fill: "white",
                                      height: "0.6rem",
                                      stroke: "white",
                                      strokeWidth: 1
                                  })
                              })
                          })]
                      })
                  }), n && Object(B.jsx)(f.e, {
                      width: "33.3%",
                      height: "100%",
                      children: Object(B.jsx)(w, {
                          width: "100%",
                          height: "100%",
                          to: d ? "/finance" : n.to,
                          onClick: function() {
                              "/finance" === n.to && a.finance.externalFinanceCalculator.enabled && Object(q.s)(a)
                          },
                          children: Object(B.jsx)(_n, {
                              isAEM: d,
                              children: Object(B.jsx)(Qt, {
                                  height: "100%",
                                  width: "100%",
                                  textAlign: "left",
                                  lineHeight: "lg",
                                  type: "large",
                                  endIcon: "chevronRight",
                                  shuntEnd: !0,
                                  "data-cy": "bottom-bar--next-step",
                                  padding: "0 1rem",
                                  children: _(d ? C.page_title_financecalculator : E)
                              })
                          })
                      })
                  })]
              })), m >= 2 && !d && Object(B.jsx)(Vn, {
                  calculated: i,
                  isMobile: !0,
                  isActive: r > document.body.scrollHeight - window.innerHeight - 400
              })]
          }))
      }, Zn = function() {
          var e = Object(j.b)((function(e) {
              return {
                  nextStep: e.getNextStep(),
                  currentStep: e.currentStep,
                  isAEM: e.isAEM,
                  isFinanceEnabled: e.isFinanceAvailable,
                  scrollY: e.scrollY
              }
          }
          ))
            , t = e.nextStep
            , n = e.isAEM
            , r = e.isFinanceEnabled
            , i = e.scrollY
            , a = Object(z.m)()
            , c = Object(j.c)()
            , o = c.calculateQueryParams
            , l = c.useAlternateData
            , s = Object(le.a)(o, l).data
            , d = a.width < parseInt(null === m.a || void 0 === m.a ? void 0 : m.a.breakpoints.sm);
          return n && !r ? null : d ? Object(B.jsx)(Gn, {
              nextStep: t,
              scrollY: i,
              calculated: s
          }) : Object(B.jsx)(Wn, {
              nextStep: t,
              scrollY: i,
              calculated: s
          })
      }, Kn = n(164), Xn = function(e) {
          Object(Kn.a)(e);
          var t = Object(z.l)().data;
          if (!t)
              return null;
          var n = t.i18n
            , r = t.backlink
            , i = t.primaryLogoLight
            , a = t.financialServicesLogoLight;
          return Object(B.jsxs)(f.e, {
              position: "relative",
              justifyContent: "space-between",
              alignItems: "center",
              as: "header",
              height: ["4rem", "58px"],
              bg: "black",
              paddingX: ["1rem", "4rem"],
              zIndex: 10,
              children: [Object(B.jsx)(f.i, {
                  color: "white",
                  href: r,
                  _hover: {
                      textDecoration: "underline"
                  },
                  "data-cy": "header--back-link",
                  children: Object(B.jsxs)(f.e, {
                      alignItems: "center",
                      children: [Object(B.jsx)(wo, {
                          type: "chevronLeft",
                          fill: "white",
                          height: "0.8rem"
                      }), Object(B.jsx)(wo, {
                          type: "chevronLeft",
                          fill: "white",
                          height: "0.8rem"
                      }), Object(B.jsx)(he, {
                          m: "1px 0 0 5px",
                          lineHeight: "1.2rem",
                          color: "white",
                          type: "h5-caps",
                          whiteSpace: "nowrap",
                          children: n.back_to_main_site
                      })]
                  })
              }), Object(B.jsxs)(f.e, {
                  children: [Object(B.jsx)(W.a, {
                      height: ["1.5rem", "2rem"],
                      src: i.url
                  }), Object(B.jsx)(W.a, {
                      height: ["2rem", "2.8rem"],
                      marginLeft: ["1.5rem", "2.5rem"],
                      src: a.url
                  })]
              })]
          })
      }, qn = ["title", "titleId"];
      function Qn() {
          return Qn = Object.assign ? Object.assign.bind() : function(e) {
              for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                      Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
              }
              return e
          }
          ,
          Qn.apply(this, arguments)
      }
      function Jn(e, t) {
          if (null == e)
              return {};
          var n, r, i = function(e, t) {
              if (null == e)
                  return {};
              var n, r, i = {}, a = Object.keys(e);
              for (r = 0; r < a.length; r++)
                  n = a[r],
                  t.indexOf(n) >= 0 || (i[n] = e[n]);
              return i
          }(e, t);
          if (Object.getOwnPropertySymbols) {
              var a = Object.getOwnPropertySymbols(e);
              for (r = 0; r < a.length; r++)
                  n = a[r],
                  t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
          }
          return i
      }
      function $n(e, t) {
          var n = e.title
            , r = e.titleId
            , i = Jn(e, qn);
          return u.createElement("svg", Qn({
              viewBox: "0 0 26 23",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": r
          }, i), n ? u.createElement("title", {
              id: r
          }, n) : null, Ne || (Ne = u.createElement("path", {
              d: "M4.35974 9.99738C4.26031 10.0379 4.16227 10.079 4.06566 10.1209C2.90244 10.6252 1.90832 11.2472 1.19314 11.9803C0.474216 12.7172 0 13.609 0 14.6159C0 15.6228 0.474216 16.5146 1.19314 17.2515C1.90832 17.9846 2.90244 18.6066 4.06566 19.1109C5.30005 19.6461 6.76766 20.0672 8.38751 20.3449V18.6503C6.99935 18.3939 5.75953 18.0268 4.7293 17.5802C3.69094 17.13 2.90343 16.6154 2.38736 16.0864C1.87504 15.5613 1.6684 15.0655 1.6684 14.6159C1.6684 14.1663 1.87504 13.6705 2.38736 13.1454C2.84033 12.6811 3.50244 12.2279 4.35974 11.8196V9.99738Z"
          })), Be || (Be = u.createElement("path", {
              d: "M21.6159 11.808C22.485 12.2193 23.1554 12.6767 23.6126 13.1454C24.125 13.6705 24.3316 14.1663 24.3316 14.6159C24.3316 15.0655 24.125 15.5613 23.6126 16.0864C23.0966 16.6154 22.3091 17.13 21.2707 17.5802C19.4826 18.3554 17.0631 18.891 14.3325 19.024C13.9142 19.0443 13.8665 19.2284 13.8665 19.5258V20.3564C13.8665 20.6187 14.0688 20.6942 14.3325 20.6942C17.2559 20.5601 19.909 19.989 21.9343 19.1109C23.0976 18.6066 24.0917 17.9846 24.8069 17.2515C25.5258 16.5146 26 15.6228 26 14.6159C26 13.609 25.5258 12.7172 24.8069 11.9803C24.0917 11.2472 23.0976 10.6252 21.9343 10.1209C21.8298 10.0756 21.7237 10.0311 21.6159 9.98748V11.808Z"
          })), He || (He = u.createElement("path", {
              d: "M7.83861 17.0781C7.89834 16.745 8.3089 16.6179 8.54633 16.859L11.2492 19.6033C11.446 19.8032 11.3935 20.1364 11.1447 20.266L7.62044 22.1015C7.31318 22.2615 6.95606 21.9989 7.01722 21.6579L7.83861 17.0781Z"
          })), ze || (ze = u.createElement("path", {
              d: "M13.4031 0.111761C13.145 -0.0372545 12.827 -0.0372541 12.5689 0.111761L6.37739 3.68643L12.986 7.50192L19.5946 3.68643L13.4031 0.111761Z"
          })), Ve || (Ve = u.createElement("path", {
              d: "M20.3124 5.064L13.762 8.84591V16.3426L19.8953 12.8015C20.1534 12.6525 20.3124 12.3771 20.3124 12.0791V5.064Z"
          })), Ue || (Ue = u.createElement("path", {
              d: "M12.2101 16.3426V8.84591L5.65959 5.064V12.0791C5.65959 12.3771 5.81858 12.6525 6.07669 12.8015L12.2101 16.3426Z"
          })))
      }
      var er, tr = u.forwardRef($n), nr = (n.p,
      ["title", "titleId"]);
      function rr() {
          return rr = Object.assign ? Object.assign.bind() : function(e) {
              for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                      Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
              }
              return e
          }
          ,
          rr.apply(this, arguments)
      }
      function ir(e, t) {
          if (null == e)
              return {};
          var n, r, i = function(e, t) {
              if (null == e)
                  return {};
              var n, r, i = {}, a = Object.keys(e);
              for (r = 0; r < a.length; r++)
                  n = a[r],
                  t.indexOf(n) >= 0 || (i[n] = e[n]);
              return i
          }(e, t);
          if (Object.getOwnPropertySymbols) {
              var a = Object.getOwnPropertySymbols(e);
              for (r = 0; r < a.length; r++)
                  n = a[r],
                  t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
          }
          return i
      }
      function ar(e, t) {
          var n = e.title
            , r = e.titleId
            , i = ir(e, nr);
          return u.createElement("svg", rr({
              viewBox: "0 0 14 14",
              xmlns: "http://www.w3.org/2000/svg",
              xmlnsXlink: "http://www.w3.org/1999/xlink",
              ref: t,
              "aria-labelledby": r
          }, i), n ? u.createElement("title", {
              id: r
          }, n) : null, er || (er = u.createElement("path", {
              d: "M8,6 L14,6 L14,8 L8,8 L8,14 L6,14 L6,8 L0,8 L0,6 L6,6 L6,0 L8,0 L8,6 Z",
              id: "add"
          })))
      }
      var cr, or = u.forwardRef(ar), lr = (n.p,
      ["title", "titleId"]);
      function sr() {
          return sr = Object.assign ? Object.assign.bind() : function(e) {
              for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                      Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
              }
              return e
          }
          ,
          sr.apply(this, arguments)
      }
      function dr(e, t) {
          if (null == e)
              return {};
          var n, r, i = function(e, t) {
              if (null == e)
                  return {};
              var n, r, i = {}, a = Object.keys(e);
              for (r = 0; r < a.length; r++)
                  n = a[r],
                  t.indexOf(n) >= 0 || (i[n] = e[n]);
              return i
          }(e, t);
          if (Object.getOwnPropertySymbols) {
              var a = Object.getOwnPropertySymbols(e);
              for (r = 0; r < a.length; r++)
                  n = a[r],
                  t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
          }
          return i
      }
      function ur(e, t) {
          var n = e.title
            , r = e.titleId
            , i = dr(e, lr);
          return u.createElement("svg", sr({
              viewBox: "0 0 15 18",
              xmlns: "http://www.w3.org/2000/svg",
              xmlnsXlink: "http://www.w3.org/1999/xlink",
              ref: t,
              "aria-labelledby": r
          }, i), n ? u.createElement("title", {
              id: r
          }, n) : null, cr || (cr = u.createElement("g", {
              transform: "translate(-13.000000, -11.000000)"
          }, u.createElement("path", {
              d: "M13.7500656,28.2492617 L27.2499344,28.2492617 L27.2499344,11.750082 L13.7500656,11.750082 L13.7500656,28.2492617 Z M13.7500656,29 L13,29 L13,11.750082 L13,11 L27.9993438,11 L28,29 L27.2499344,29 L13.7500656,28.9993438 Z M21.2500656,14.7504101 L25.7498031,14.7504101 L25.7498031,16.2505742 L21.2500656,16.2505742 L21.2500656,14.7504101 Z M21.2500656,17.7494258 L25.7498031,17.7494258 L25.7498031,19.2495899 L21.2500656,19.2495899 L21.2500656,17.7494258 Z M15.2501969,20.7497539 L25.7498031,20.7497539 L25.7498031,22.249918 L15.2501969,22.249918 L15.2501969,20.7497539 Z M15.2501969,23.7494258 L25.7498031,23.7494258 L25.7498031,25.2495899 L15.2501969,25.2495899 L15.2501969,23.7494258 Z M15.2501969,14.7497539 L19.7499344,14.7497539 L19.7499344,19.2495899 L15.2501969,19.2495899 L15.2501969,14.7497539 Z",
              id: "brochure"
          }))))
      }
      var br, fr = u.forwardRef(ur), mr = (n.p,
      ["title", "titleId"]);
      function pr() {
          return pr = Object.assign ? Object.assign.bind() : function(e) {
              for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                      Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
              }
              return e
          }
          ,
          pr.apply(this, arguments)
      }
      function jr(e, t) {
          if (null == e)
              return {};
          var n, r, i = function(e, t) {
              if (null == e)
                  return {};
              var n, r, i = {}, a = Object.keys(e);
              for (r = 0; r < a.length; r++)
                  n = a[r],
                  t.indexOf(n) >= 0 || (i[n] = e[n]);
              return i
          }(e, t);
          if (Object.getOwnPropertySymbols) {
              var a = Object.getOwnPropertySymbols(e);
              for (r = 0; r < a.length; r++)
                  n = a[r],
                  t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
          }
          return i
      }
      function hr(e, t) {
          var n = e.title
            , r = e.titleId
            , i = jr(e, mr);
          return u.createElement("svg", pr({
              viewBox: " 0 0 16 19",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": r
          }, i), n ? u.createElement("title", {
              id: r
          }, n) : null, br || (br = u.createElement("path", {
              d: "M15.059.941v16.941H.94V.942H15.06zM16 0H0v18.824h16V0zM2.824 14.118h2.823v.94H2.824v-.94zm3.764 0h2.824v.94H6.588v-.94zm3.765-1.883h2.823v2.824h-2.823v-2.824zm-7.53-.94h2.824v.94H2.824v-.94zm3.765 0h2.824v.94H6.588v-.94zm3.765 0h2.823v.94h-2.823v-.94zM2.823 8.47h2.824v.94H2.824v-.94zm3.765 0h2.824v.94H6.588v-.94zm3.765 0h2.823v.94h-2.823v-.94zm-7.53-4.706h10.353v2.823H2.824V3.765z",
              fillRule: "evenodd"
          })))
      }
      var Or, vr = u.forwardRef(hr), Cr = (n.p,
      ["title", "titleId"]);
      function gr() {
          return gr = Object.assign ? Object.assign.bind() : function(e) {
              for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                      Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
              }
              return e
          }
          ,
          gr.apply(this, arguments)
      }
      function xr(e, t) {
          if (null == e)
              return {};
          var n, r, i = function(e, t) {
              if (null == e)
                  return {};
              var n, r, i = {}, a = Object.keys(e);
              for (r = 0; r < a.length; r++)
                  n = a[r],
                  t.indexOf(n) >= 0 || (i[n] = e[n]);
              return i
          }(e, t);
          if (Object.getOwnPropertySymbols) {
              var a = Object.getOwnPropertySymbols(e);
              for (r = 0; r < a.length; r++)
                  n = a[r],
                  t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
          }
          return i
      }
      function yr(e, t) {
          var n = e.title
            , r = e.titleId
            , i = xr(e, Cr);
          return u.createElement("svg", gr({
              viewBox: "0 0 11 14",
              xmlns: "http://www.w3.org/2000/svg",
              xmlnsXlink: "http://www.w3.org/1999/xlink",
              ref: t,
              "aria-labelledby": r
          }, i), n ? u.createElement("title", {
              id: r
          }, n) : null, Or || (Or = u.createElement("g", {
              id: "chevronDouble"
          }, u.createElement("polygon", {
              id: "Path",
              transform: "translate(3.128137, 6.576975) rotate(90.000000) translate(-3.128137, -6.576975) ",
              points: "8.73916149 3.44883851 9.70511214 4.72435383 3.12813682 9.70511214 -3.44883851 4.72435383 -2.48288786 3.44883851 3.12813682 7.6980802"
          }), u.createElement("polygon", {
              id: "Path",
              transform: "translate(7.128137, 6.576975) rotate(90.000000) translate(-7.128137, -6.576975) ",
              points: "12.7391615 3.44883851 13.7051121 4.72435383 7.12813682 9.70511214 0.551161494 4.72435383 1.51711214 3.44883851 7.12813682 7.6980802"
          }))))
      }
      var wr, Lr = u.forwardRef(yr), _r = (n.p,
      ["title", "titleId"]);
      function Sr() {
          return Sr = Object.assign ? Object.assign.bind() : function(e) {
              for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                      Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
              }
              return e
          }
          ,
          Sr.apply(this, arguments)
      }
      function Er(e, t) {
          if (null == e)
              return {};
          var n, r, i = function(e, t) {
              if (null == e)
                  return {};
              var n, r, i = {}, a = Object.keys(e);
              for (r = 0; r < a.length; r++)
                  n = a[r],
                  t.indexOf(n) >= 0 || (i[n] = e[n]);
              return i
          }(e, t);
          if (Object.getOwnPropertySymbols) {
              var a = Object.getOwnPropertySymbols(e);
              for (r = 0; r < a.length; r++)
                  n = a[r],
                  t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
          }
          return i
      }
      function Ir(e, t) {
          var n = e.title
            , r = e.titleId
            , i = Er(e, _r);
          return u.createElement("svg", Sr({
              viewBox: "0 0 8 12",
              xmlns: "http://www.w3.org/2000/svg",
              xmlnsXlink: "http://www.w3.org/1999/xlink",
              ref: t,
              "aria-labelledby": r
          }, i), n ? u.createElement("title", {
              id: r
          }, n) : null, wr || (wr = u.createElement("polygon", {
              id: "Path",
              transform: "translate(3.560669, 5.707108) rotate(90.000000) translate(-3.560669, -5.707108) ",
              points: "7.85355924 2.14644076 9.26777678 3.56065035 3.56068246 9.26777678 -2.14643897 3.56065214 -0.732225013 2.14643897 3.56066027 6.43855329"
          })))
      }
      var Tr, Ar = u.forwardRef(Ir), Mr = (n.p,
      ["title", "titleId"]);
      function kr() {
          return kr = Object.assign ? Object.assign.bind() : function(e) {
              for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                      Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
              }
              return e
          }
          ,
          kr.apply(this, arguments)
      }
      function Rr(e, t) {
          if (null == e)
              return {};
          var n, r, i = function(e, t) {
              if (null == e)
                  return {};
              var n, r, i = {}, a = Object.keys(e);
              for (r = 0; r < a.length; r++)
                  n = a[r],
                  t.indexOf(n) >= 0 || (i[n] = e[n]);
              return i
          }(e, t);
          if (Object.getOwnPropertySymbols) {
              var a = Object.getOwnPropertySymbols(e);
              for (r = 0; r < a.length; r++)
                  n = a[r],
                  t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
          }
          return i
      }
      function Pr(e, t) {
          var n = e.title
            , r = e.titleId
            , i = Rr(e, Mr);
          return u.createElement("svg", kr({
              viewBox: "0 0 12 12",
              xmlns: "http://www.w3.org/2000/svg",
              xmlnsXlink: "http://www.w3.org/1999/xlink",
              ref: t,
              "aria-labelledby": r
          }, i), n ? u.createElement("title", {
              id: r
          }, n) : null, Tr || (Tr = u.createElement("path", {
              d: "M6,5.29289322 L10.5833333,0.709559885 L11.2904401,1.41666667 L6.70710678,6 L11.2904401,10.5833333 L10.5833333,11.2904401 L6,6.70710678 L1.41666667,11.2904401 L0.709559885,10.5833333 L5.29289322,6 L0.709559885,1.41666667 L1.41666667,0.709559885 L6,5.29289322 Z",
              id: "close",
              fillRule: "nonzero"
          })))
      }
      var Fr, Dr = u.forwardRef(Pr), Nr = (n.p,
      ["title", "titleId"]);
      function Br() {
          return Br = Object.assign ? Object.assign.bind() : function(e) {
              for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                      Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
              }
              return e
          }
          ,
          Br.apply(this, arguments)
      }
      function Hr(e, t) {
          if (null == e)
              return {};
          var n, r, i = function(e, t) {
              if (null == e)
                  return {};
              var n, r, i = {}, a = Object.keys(e);
              for (r = 0; r < a.length; r++)
                  n = a[r],
                  t.indexOf(n) >= 0 || (i[n] = e[n]);
              return i
          }(e, t);
          if (Object.getOwnPropertySymbols) {
              var a = Object.getOwnPropertySymbols(e);
              for (r = 0; r < a.length; r++)
                  n = a[r],
                  t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
          }
          return i
      }
      function zr(e, t) {
          var n = e.title
            , r = e.titleId
            , i = Hr(e, Nr);
          return u.createElement("svg", Br({
              xmlns: "http://www.w3.org/2000/svg",
              xmlnsXlink: "http://www.w3.org/1999/xlink",
              viewBox: "0 0 400 400",
              ref: t,
              "aria-labelledby": r
          }, i), n ? u.createElement("title", {
              id: r
          }, n) : null, Fr || (Fr = u.createElement("path", {
              d: "M339.99,71.085c-98.736-21.658-172.76-10.192-220.015,34.079c-29.426,27.57-48.012,68.397-53.748,118.068 c-3.227,27.947-1.597,51.169-0.524,61.41c-12.162,29.561-16.199,50.098-16.425,51.277l19.643,3.762 c0.071-0.371,7.388-37.591,32.546-83.576c14.79-27.034,32.715-51.602,53.279-73.021c25.663-26.732,55.55-48.623,88.832-65.066 l-8.858-17.931c-35.366,17.472-67.127,40.736-94.401,69.146c-21.487,22.382-40.234,47.986-55.747,76.106 c0.255-6.371,0.745-13.217,1.588-20.371c3.668-31.163,14.898-74.725,47.565-105.28c37.974-35.519,96.86-46.982,175.296-34.188 c-9.671,8.086-19.681,20.398-25.614,38.865L221.469,152.5c-3.88,1.762-6.217,5.79-5.821,10.033c0.396,4.243,3.437,7.77,7.576,8.784 l31.538,7.733c-4.966,7.024-12.317,16.677-21.814,27.15l-61.849,5.971l1.922,19.907l37.241-3.595 c-24.748,21.517-57.481,41.328-96.368,44.934l1.847,19.915c41.894-3.885,83.541-25.161,120.439-61.529 c27.56-27.165,42.746-52.962,43.379-54.047c1.59-2.725,1.801-6.04,0.569-8.944c-1.232-2.904-3.761-5.057-6.825-5.808l-17.275-4.236 l39.812-18.085c2.719-1.235,4.744-3.621,5.521-6.505c9.591-35.625,37.737-43.319,38.863-43.612c4.52-1.105,7.68-5.181,7.625-9.833 C347.791,76.081,344.534,72.082,339.99,71.085z"
          })))
      }
      var Vr, Ur = u.forwardRef(zr), Wr = (n.p,
      ["title", "titleId"]);
      function Yr() {
          return Yr = Object.assign ? Object.assign.bind() : function(e) {
              for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                      Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
              }
              return e
          }
          ,
          Yr.apply(this, arguments)
      }
      function Gr(e, t) {
          if (null == e)
              return {};
          var n, r, i = function(e, t) {
              if (null == e)
                  return {};
              var n, r, i = {}, a = Object.keys(e);
              for (r = 0; r < a.length; r++)
                  n = a[r],
                  t.indexOf(n) >= 0 || (i[n] = e[n]);
              return i
          }(e, t);
          if (Object.getOwnPropertySymbols) {
              var a = Object.getOwnPropertySymbols(e);
              for (r = 0; r < a.length; r++)
                  n = a[r],
                  t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
          }
          return i
      }
      function Zr(e, t) {
          var n = e.title
            , r = e.titleId
            , i = Gr(e, Wr);
          return u.createElement("svg", Yr({
              viewBox: "0 0 15 16",
              xmlns: "http://www.w3.org/2000/svg",
              xmlnsXlink: "http://www.w3.org/1999/xlink",
              ref: t,
              "aria-labelledby": r
          }, i), n ? u.createElement("title", {
              id: r
          }, n) : null, Vr || (Vr = u.createElement("path", {
              d: "M8.25,8.75 L0,8.75 L0,7.25 L8.25,7.25 L8.25,6 L9.75,6 L9.75,10 L8.25,10 L8.25,8.75 Z M3.25,14.75 L0,14.75 L0,13.25 L3.25,13.25 L3.25,12 L4.75,12 L4.75,16 L3.25,16 L3.25,14.75 Z M3.25,2.75 L0,2.75 L0,1.25 L3.25,1.25 L3.25,0 L4.75,0 L4.75,4 L3.25,4 L3.25,2.75 Z M15,1.25 L15,2.75 L6,2.75 L6,1.25 L15,1.25 Z M15,7.25 L15,8.75 L11,8.75 L11,7.25 L15,7.25 Z M15,13.25 L15,14.75 L6,14.75 L6,13.25 L15,13.25 Z",
              id: "configure"
          })))
      }
      var Kr, Xr = u.forwardRef(Zr), qr = (n.p,
      ["title", "titleId"]);
      function Qr() {
          return Qr = Object.assign ? Object.assign.bind() : function(e) {
              for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                      Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
              }
              return e
          }
          ,
          Qr.apply(this, arguments)
      }
      function Jr(e, t) {
          if (null == e)
              return {};
          var n, r, i = function(e, t) {
              if (null == e)
                  return {};
              var n, r, i = {}, a = Object.keys(e);
              for (r = 0; r < a.length; r++)
                  n = a[r],
                  t.indexOf(n) >= 0 || (i[n] = e[n]);
              return i
          }(e, t);
          if (Object.getOwnPropertySymbols) {
              var a = Object.getOwnPropertySymbols(e);
              for (r = 0; r < a.length; r++)
                  n = a[r],
                  t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
          }
          return i
      }
      function $r(e, t) {
          var n = e.title
            , r = e.titleId
            , i = Jr(e, qr);
          return u.createElement("svg", Qr({
              viewBox: "0 0 12 14",
              xmlns: "http://www.w3.org/2000/svg",
              xmlnsXlink: "http://www.w3.org/1999/xlink",
              ref: t,
              "aria-labelledby": r
          }, i), n ? u.createElement("title", {
              id: r
          }, n) : null, Kr || (Kr = u.createElement("path", {
              d: "M10.2,14 L1.8,14 C1.1376,14 0.6,13.4773333 0.6,12.8333333 L0.6,2.74369798 L0,2.74369798 L0,1.75 L3.6,1.75 L3.6,0.875 C3.6,0.392583333 4.0038,0 4.5,0 L7.5,0 C7.995,0 8.4,0.391416667 8.4,0.875 L8.4,1.75 L12,1.75 L12,2.74369798 L11.4,2.74369798 L11.4,12.8333333 C11.4,13.4773333 10.8624,14 10.2,14 Z M10.3811971,2.74456046 L1.5501515,2.74456046 L1.5501515,12.6854761 C1.5501515,12.8517606 1.69144823,12.986716 1.86554599,12.986716 L10.0658026,12.986716 C10.2399003,12.986716 10.3811971,12.8517606 10.3811971,12.6854761 L10.3811971,2.74456046 Z M7.39481847,0.740521599 L7.39481847,1.75 L4.59047564,1.75 L4.59047564,0.740521599 L7.39481847,0.740521599 Z M4.09695542,4.66666667 L5.08399586,4.66666667 L5.08399586,11.0833333 L4.09695542,11.0833333 L4.09695542,4.66666667 Z M6.90129825,4.66666667 L7.88833869,4.66666667 L7.88833869,11.0833333 L6.90129825,11.0833333 L6.90129825,4.66666667 Z",
              id: "delete"
          })))
      }
      var ei, ti = u.forwardRef($r), ni = (n.p,
      ["title", "titleId"]);
      function ri() {
          return ri = Object.assign ? Object.assign.bind() : function(e) {
              for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                      Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
              }
              return e
          }
          ,
          ri.apply(this, arguments)
      }
      function ii(e, t) {
          if (null == e)
              return {};
          var n, r, i = function(e, t) {
              if (null == e)
                  return {};
              var n, r, i = {}, a = Object.keys(e);
              for (r = 0; r < a.length; r++)
                  n = a[r],
                  t.indexOf(n) >= 0 || (i[n] = e[n]);
              return i
          }(e, t);
          if (Object.getOwnPropertySymbols) {
              var a = Object.getOwnPropertySymbols(e);
              for (r = 0; r < a.length; r++)
                  n = a[r],
                  t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
          }
          return i
      }
      function ai(e, t) {
          var n = e.title
            , r = e.titleId
            , i = ii(e, ni);
          return u.createElement("svg", ri({
              xmlns: "http://www.w3.org/2000/svg",
              xmlnsXlink: "http://www.w3.org/1999/xlink",
              viewBox: "0 0 400 400",
              ref: t,
              "aria-labelledby": r
          }, i), n ? u.createElement("title", {
              id: r
          }, n) : null, ei || (ei = u.createElement("path", {
              d: "M353.996,58.705c-0.062-3.479-1.928-6.676-4.927-8.44s-6.7-1.843-9.771-0.208c-1.98,1.055-199.087,105.972-286.098,149.406 c-2.441,1.218-4.278,3.381-5.086,5.987s-0.516,5.429,0.809,7.814l73.096,131.667c1.764,3.176,5.11,5.146,8.743,5.146h137.362 c3.57,0,6.869-1.903,8.657-4.994c1.787-3.09,1.791-6.899,0.01-9.994l-30.043-52.203l13.617-5.551c0.049-0.02,0.097-0.04,0.145-0.06 c18.533-7.895,30.205-24.473,33.752-47.943c1.982-13.122,0.842-24.86,0.222-29.515c13.104-8.993,21.465-23.575,24.37-42.791 c1.489-9.856,1.216-18.936,0.725-24.817C354.423,107.37,354.034,60.815,353.996,58.705z M274.413,226.814 c-2.557,16.188-9.848,26.965-21.674,32.031l-51.558,21.017l7.549,18.521l19.327-7.878l22.773,39.572H136.647L71.471,212.673 c74.922-37.743,212.573-110.631,260.367-136.003c-3.146,13.993-10.858,32.83-29.749,42.896L115.149,214.23l9.035,17.843 l175.804-89.025c-0.195,14.332-3.888,35.496-22.725,43.52c-0.193,0.082-0.383,0.17-0.57,0.265l-122.532,61.565l8.979,17.871 l112.15-56.349C275.487,214.529,275.407,220.523,274.413,226.814z"
          })))
      }
      var ci, oi = u.forwardRef(ai), li = (n.p,
      ["title", "titleId"]);
      function si() {
          return si = Object.assign ? Object.assign.bind() : function(e) {
              for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                      Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
              }
              return e
          }
          ,
          si.apply(this, arguments)
      }
      function di(e, t) {
          if (null == e)
              return {};
          var n, r, i = function(e, t) {
              if (null == e)
                  return {};
              var n, r, i = {}, a = Object.keys(e);
              for (r = 0; r < a.length; r++)
                  n = a[r],
                  t.indexOf(n) >= 0 || (i[n] = e[n]);
              return i
          }(e, t);
          if (Object.getOwnPropertySymbols) {
              var a = Object.getOwnPropertySymbols(e);
              for (r = 0; r < a.length; r++)
                  n = a[r],
                  t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
          }
          return i
      }
      function ui(e, t) {
          var n = e.title
            , r = e.titleId
            , i = di(e, li);
          return u.createElement("svg", si({
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24",
              ref: t,
              "aria-labelledby": r
          }, i), n ? u.createElement("title", {
              id: r
          }, n) : null, ci || (ci = u.createElement("path", {
              d: "M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"
          })))
      }
      var bi, fi = u.forwardRef(ui), mi = (n.p,
      ["title", "titleId"]);
      function pi() {
          return pi = Object.assign ? Object.assign.bind() : function(e) {
              for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                      Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
              }
              return e
          }
          ,
          pi.apply(this, arguments)
      }
      function ji(e, t) {
          if (null == e)
              return {};
          var n, r, i = function(e, t) {
              if (null == e)
                  return {};
              var n, r, i = {}, a = Object.keys(e);
              for (r = 0; r < a.length; r++)
                  n = a[r],
                  t.indexOf(n) >= 0 || (i[n] = e[n]);
              return i
          }(e, t);
          if (Object.getOwnPropertySymbols) {
              var a = Object.getOwnPropertySymbols(e);
              for (r = 0; r < a.length; r++)
                  n = a[r],
                  t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
          }
          return i
      }
      function hi(e, t) {
          var n = e.title
            , r = e.titleId
            , i = ji(e, mi);
          return u.createElement("svg", pi({
              viewBox: "0 0 16 16",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": r
          }, i), n ? u.createElement("title", {
              id: r
          }, n) : null, bi || (bi = u.createElement("path", {
              d: "M0 8v3.403l8.006 4.575h.15c.314 0 1.385-.136 1.737-.221A7.956 7.956 0 0016 8c0-4.41-3.588-8-7.998-8C3.589-.001.001 3.588.001 7.999L0 8zm8.471-1.171h6.275c.067.381.109.772.109 1.171 0 .78-.133 1.53-.374 2.234h-2.6L8.47 6.829zM1.144 8A6.863 6.863 0 018 1.144c2.966 0 5.49 1.898 6.444 4.541H5.707l5.719 5.718 2.533.002a6.858 6.858 0 01-4.338 3.24c-.242.059-.985.155-1.33.183l-7.149-4.093V8h.002zm3.429-2.306a1.136 1.136 0 010 2.269c-.627 0-1.135-.51-1.135-1.135s.51-1.134 1.135-1.134z",
              fillRule: "evenodd"
          })))
      }
      var Oi, vi = u.forwardRef(hi), Ci = (n.p,
      ["title", "titleId"]);
      function gi() {
          return gi = Object.assign ? Object.assign.bind() : function(e) {
              for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                      Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
              }
              return e
          }
          ,
          gi.apply(this, arguments)
      }
      function xi(e, t) {
          if (null == e)
              return {};
          var n, r, i = function(e, t) {
              if (null == e)
                  return {};
              var n, r, i = {}, a = Object.keys(e);
              for (r = 0; r < a.length; r++)
                  n = a[r],
                  t.indexOf(n) >= 0 || (i[n] = e[n]);
              return i
          }(e, t);
          if (Object.getOwnPropertySymbols) {
              var a = Object.getOwnPropertySymbols(e);
              for (r = 0; r < a.length; r++)
                  n = a[r],
                  t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
          }
          return i
      }
      function yi(e, t) {
          var n = e.title
            , r = e.titleId
            , i = xi(e, Ci);
          return u.createElement("svg", gi({
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 27 31",
              ref: t,
              "aria-labelledby": r
          }, i), n ? u.createElement("title", {
              id: r
          }, n) : null, Oi || (Oi = u.createElement("path", {
              d: "M13.18.91c.826 0 1.623.143 2.326.409.141.038.277.087.407.144l.117.055.178.096.219.043c3.206.66 5.577 2.331 7.21 4.694a12.873 12.873 0 0 1 1.668 3.416l.07.229c.157.52.251.946.298 1.243l.01.061.091.338.098.396c.509 2.193.584 4.5.41 6.597l-.015.174-.03.298-.038.31c-.036.182-.075.374-.119.576l-.141.637-.163.696-.284 1.154-.395 1.534c-.158.602-.321 1.21-.484 1.808l-.423 1.527-2.564 1.112-.478.242A20.843 20.843 0 0 1 16 30.463c-1.143.226-2.04.298-2.626.287h.056l-.118.001c-.618-.005-1.497-.082-2.576-.287-1.72-.325-3.51-.9-5.27-1.765l-.48-.242-2.564-1.112-.34-1.221L2 25.818c-.163-.598-.326-1.206-.484-1.808L1.2 22.79l-.274-1.099-.174-.725L.6 20.3l-.13-.607c-.02-.096-.04-.19-.057-.28l-.038-.31-.045-.472c-.174-2.097-.099-4.404.41-6.597l.098-.396.091-.335.033-.199.064-.315.042-.179.105-.397.134-.446c.37-1.164.915-2.327 1.668-3.416 1.617-2.34 3.958-4 7.117-4.675l-.068.04c.87-.52 1.983-.805 3.155-.805zM2.39 21.359l.185.752.16.63c.15.587.309 1.188.47 1.788l.469 1.725 1.957.85a19.616 19.616 0 0 0 4.948 1.8l.436.087c.787.15 1.447.224 1.951.25l.348.011h.226l.324-.01.38-.03a14.9 14.9 0 0 0 1.466-.22l.418-.087c1.542-.344 3.176-.927 4.853-1.8l1.958-.851.144-.526.324-1.199c.161-.6.32-1.201.47-1.789l.295-1.177c-7.575.89-14.24.796-19.763.094l-.77-.104a48.829 48.829 0 0 1-.365-.053l-.684-.107a39.472 39.472 0 0 1-.2-.034zm5.27 1.408l.44.1.15.036c.437.11.874.233 1.286.371.997.333 1.682.672 2.04 1.142l.023.034.009.008c.08.088.165.203.247.347l.082.153c.346.701.437 1.615.163 2.732l-.07.26-1.441-.414c.254-.883.207-1.5.003-1.914l-.05-.093-.031-.049-.129-.156c-.027-.044-.12-.111-.267-.19l-.2-.102a6.192 6.192 0 0 0-.247-.108l-.286-.114-.32-.113a15.947 15.947 0 0 0-1.175-.338l-.46-.108-.07-.016.304-1.468zm11.296 0l.305 1.468-.072.016-.459.108c-.402.1-.803.214-1.174.338l-.321.113-.286.114a6.192 6.192 0 0 0-.246.108l-.2.101c-.147.08-.241.147-.268.19l-.129.157-.03.049-.051.093c-.204.413-.251 1.03.003 1.914l-1.442.415-.07-.261c-.273-1.117-.182-2.031.164-2.732l.082-.153c.082-.144.167-.259.247-.347l.009-.008.023-.034c.358-.47 1.043-.81 2.04-1.142a17.406 17.406 0 0 1 1.437-.407l.438-.1zm-6.071-11.53c-4.604 0-8.742.733-10.827 1.83-.338 1.814-.377 3.708-.233 5.44l.053.548.013.106.111.537.015.069.218.041.603.105.66.104.72.102.38.05c5.5.7 12.178.782 19.788-.142l.156-.02.003-.014.124-.572.052-.26.006-.044.06-.61c.126-1.519.112-3.163-.12-4.767l.036.04c-.596-.677-2.025-1.287-3.972-1.74l-.57-.125c-.194-.04-.393-.08-.597-.116l-.621-.107a31.677 31.677 0 0 0-.645-.097l-.666-.086a35.715 35.715 0 0 0-.341-.039l-.696-.07-.713-.057-.73-.046c-.368-.02-.742-.035-1.12-.045l-.762-.014a42.74 42.74 0 0 0-.385-.002zm4.006-7.926l-.146 1.536-.019.11a.75.75 0 0 1-.404.496l-.227.105-.496.217-.4.163c-.181.071-.357.137-.527.196-.542.188-.992.301-1.357.318l.074-.006v.006l-.036-.003-.038.003v-.006l-.092-.008c-.347-.039-.775-.15-1.288-.32-.159-.054-.324-.112-.493-.174l-.427-.162-.532-.215-.244-.103a.75.75 0 0 1-.429-.517l-.016-.1-.145-1.516c-2.386.677-4.165 2.028-5.44 3.874a11.388 11.388 0 0 0-1.685 3.778l-.06.267c2.486-.948 6.28-1.514 10.421-1.514 1.518 0 2.984.075 4.355.217l.738.084c2.568.318 4.753.877 6.247 1.614l-.021-.095-.044-.248-.072-.325a11.388 11.388 0 0 0-1.685-3.778c-1.288-1.865-3.09-3.224-5.512-3.894zm-1.852-.56h-3.465l-.061.013c-.072.018-.141.043-.207.072l-.062.029-.082.045-.042.03.125 1.318.315.127.399.151c.155.057.305.11.45.158l.335.105.292.08c.124.03.23.052.317.064.19-.027.48-.106.827-.226.15-.052.307-.11.47-.175l.368-.15.275-.12.128-1.35a3.802 3.802 0 0 0-.361-.167l-.021-.004z"
          })))
      }
      var wi, Li = u.forwardRef(yi), _i = (n.p,
      ["title", "titleId"]);
      function Si() {
          return Si = Object.assign ? Object.assign.bind() : function(e) {
              for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                      Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
              }
              return e
          }
          ,
          Si.apply(this, arguments)
      }
      function Ei(e, t) {
          if (null == e)
              return {};
          var n, r, i = function(e, t) {
              if (null == e)
                  return {};
              var n, r, i = {}, a = Object.keys(e);
              for (r = 0; r < a.length; r++)
                  n = a[r],
                  t.indexOf(n) >= 0 || (i[n] = e[n]);
              return i
          }(e, t);
          if (Object.getOwnPropertySymbols) {
              var a = Object.getOwnPropertySymbols(e);
              for (r = 0; r < a.length; r++)
                  n = a[r],
                  t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
          }
          return i
      }
      function Ii(e, t) {
          var n = e.title
            , r = e.titleId
            , i = Ei(e, _i);
          return u.createElement("svg", Si({
              viewBox: "0 0 136 17",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": r
          }, i), n ? u.createElement("title", {
              id: r
          }, n) : null, wi || (wi = u.createElement("path", {
              d: "M40.984855,0 C49.641656,0 53.5002302,3.3794531 53.5002302,8.2029455 C53.5002302,13.0264379 49.5816782,16.4760873 40.984855,16.4760873 C32.3880318,16.4760873 28.409502,13.0866061 28.409502,8.2029455 C28.409502,3.3794531 32.3280539,0 40.984855,0 Z M97.493973,0.5314867 L97.453988,0.5415147 C104.451402,0.5415147 107.450294,3.9811361 107.450294,7.9923564 C107.450294,12.4623144 104.559462,15.7916008 97.831705,15.9111881 L97.453988,15.9145164 L82.329577,15.9145164 L82.329577,13.9089063 L84.328838,13.638149 C84.90434,13.5729666 85.186786,13.0927458 85.2242,12.5266762 L85.228506,12.3946707 L85.228506,4.1215288 C85.305887,3.5251601 84.922293,2.9745181 84.353495,2.8320121 L84.228875,2.8078542 L82.369562,2.6674614 L82.369562,0.5314867 L97.493973,0.5314867 Z M123.204473,0.5314867 C123.785407,0.5674551 124.305089,0.9061304 124.573967,1.4239833 L131.451425,11.9835206 C132.001222,12.8058208 132.451056,13.4977562 133.100816,13.5679526 L135.300003,13.7685136 L135.300003,15.9044884 L122.034905,15.9044884 L122.034905,13.83871 L123.684295,13.638149 C124.503992,13.5679526 125.193737,13.1467745 124.503992,12.1840816 L123.894218,11.1812765 L114.467701,11.1812765 L113.717978,12.3545584 C113.298134,13.046494 113.717978,13.5278404 114.407723,13.5980367 L116.117092,13.7985977 L116.117092,15.8643762 L106.290723,15.9044884 L106.290723,13.83871 L108.419936,13.638149 C108.890587,13.4942083 109.285688,13.1699178 109.51953,12.7356244 L114.677624,4.2518935 C114.856348,4.019764 114.896442,3.7090051 114.78252,3.4388775 C114.668597,3.1687499 114.418354,2.9812163 114.127826,2.9482469 L111.448817,2.6674614 L111.448817,0.5314867 L123.204473,0.5314867 Z M12.2154861,0.5114306 L12.2154861,2.6474054 L10.156247,2.8579944 C9.6151136,2.9235111 9.2133065,3.2860362 9.1621372,4.0597144 L9.1566163,4.2318374 L9.1566163,6.6485976 L18.683096,6.6485976 L18.683096,4.3020338 C18.683096,3.6000702 18.4741066,3.0116687 17.8285615,2.8792628 L17.6834655,2.8579944 L15.5542522,2.5772091 L15.5542522,0.5114306 L27.889694,0.5114306 L27.889694,2.6474054 L25.7604808,2.8579944 C25.088729,2.9235111 24.8001246,3.4083339 24.7646295,4.1412462 L24.7608502,4.3020338 L24.7608502,12.3244743 C24.6969817,12.8689036 25.0299526,13.3743135 25.5398168,13.5367051 L25.6605177,13.5679526 L27.8597051,13.7685136 L27.8597051,15.9044884 L15.4842782,15.9044884 L15.4842782,13.7685136 L17.6134913,13.5679526 C18.4288151,13.5021436 18.5939883,12.889884 18.6114502,12.2434714 L18.613122,12.1138852 L18.613122,9.7673214 L9.1266275,9.7673214 L9.1266275,12.254278 C9.1266275,13.2226117 9.5834898,13.5299165 10.0359594,13.6223871 L10.1262581,13.638149 L12.2554713,13.83871 L12.2554713,15.9044884 L0,15.9044884 L0,13.8186538 L2.0592391,13.6180929 C2.808962,13.5522838 3.031536,13.0634163 3.0564292,12.2589076 L3.0588696,12.0938292 L3.0588696,4.3020338 C3.0588696,3.6000702 2.8498802,3.0116687 2.204335,2.8792628 L2.0592391,2.8579944 L0,2.6474054 L0,0.5114306 L12.2154861,0.5114306 Z M65.005978,0.5314867 C65.526121,0.5448059 66.010331,0.8006577 66.315495,1.2234222 L74.312539,11.9133242 L74.312539,4.3220898 C74.312539,3.6301544 74.182587,2.9482469 73.422868,2.8780505 L71.293655,2.5972652 L71.293655,0.5314867 L81.05005,0.5314867 L81.05005,2.6674614 L78.920837,2.8780505 C78.171114,2.9482469 78.031165,3.7003507 78.031165,4.2518935 L78.031165,15.9044884 L70.33401,15.9044884 C69.82535,15.9212039 69.339123,15.6940739 69.024494,15.2927773 L60.917489,4.5326789 L60.917489,12.3244743 C60.917489,13.0866061 61.297349,13.5679526 61.91712,13.638149 L63.976359,13.83871 L63.976359,15.9044884 L54.1899754,15.9044884 L54.1899754,13.83871 L56.1892365,13.638149 C56.9189669,13.4977562 57.188867,13.1166904 57.188867,12.1138852 L57.188867,4.3220898 C57.188867,3.359397 56.9489558,3.0184433 56.1892365,2.8780505 L54.1899754,2.6674614 L54.1899754,0.5314867 L65.005978,0.5314867 Z M40.984855,2.8780505 C37.4861479,2.8780505 35.4868866,4.1816972 35.4868866,8.1828894 C35.4868866,12.1840816 37.4861479,13.5679526 40.984855,13.5679526 C44.4835621,13.5679526 46.4228455,12.254278 46.4228455,8.1828894 C46.4228455,4.1115008 44.4235842,2.8780505 40.984855,2.8780505 Z M95.154838,3.4997897 L91.236286,3.4997897 L91.236286,12.9462135 L95.154838,12.9462135 C98.933441,12.9462135 100.45288,12.1840816 100.45288,8.2530857 C100.45288,4.3220898 98.933441,3.4997897 95.154838,3.4997897 Z M119.115983,3.7705471 L116.117092,8.4636747 L122.114876,8.4636747 L119.115983,3.7705471 Z",
              id: "honda"
          })))
      }
      var Ti, Ai, Mi = u.forwardRef(Ii), ki = (n.p,
      ["title", "titleId"]);
      function Ri() {
          return Ri = Object.assign ? Object.assign.bind() : function(e) {
              for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                      Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
              }
              return e
          }
          ,
          Ri.apply(this, arguments)
      }
      function Pi(e, t) {
          if (null == e)
              return {};
          var n, r, i = function(e, t) {
              if (null == e)
                  return {};
              var n, r, i = {}, a = Object.keys(e);
              for (r = 0; r < a.length; r++)
                  n = a[r],
                  t.indexOf(n) >= 0 || (i[n] = e[n]);
              return i
          }(e, t);
          if (Object.getOwnPropertySymbols) {
              var a = Object.getOwnPropertySymbols(e);
              for (r = 0; r < a.length; r++)
                  n = a[r],
                  t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
          }
          return i
      }
      function Fi(e, t) {
          var n = e.title
            , r = e.titleId
            , i = Pi(e, ki);
          return u.createElement("svg", Ri({
              viewBox: "0 0 179 27",
              xmlns: "http://www.w3.org/2000/svg",
              xmlnsXlink: "http://www.w3.org/1999/xlink",
              ref: t,
              "aria-labelledby": r
          }, i), n ? u.createElement("title", {
              id: r
          }, n) : null, Ti || (Ti = u.createElement("path", {
              d: "M83.984855,10 C92.641656,10 96.5002302,13.3794531 96.5002302,18.2029455 C96.5002302,23.0264379 92.5816782,26.4760873 83.984855,26.4760873 C75.3880318,26.4760873 71.409502,23.0866061 71.409502,18.2029455 C71.409502,13.3794531 75.3280539,10 83.984855,10 Z M140.493973,10.5314867 L140.453988,10.5415147 C147.451402,10.5415147 150.450294,13.9811361 150.450294,17.9923564 C150.450294,22.4623144 147.559462,25.7916008 140.831705,25.9111881 L140.453988,25.9145164 L125.329577,25.9145164 L125.329577,23.9089063 L127.328838,23.638149 C127.90434,23.5729666 128.186786,23.0927458 128.2242,22.5266762 L128.228506,22.3946707 L128.228506,14.1215288 C128.305887,13.5251601 127.922293,12.9745181 127.353495,12.8320121 L127.228875,12.8078542 L125.369562,12.6674614 L125.369562,10.5314867 L140.493973,10.5314867 Z M166.204473,10.5314867 C166.785407,10.5674551 167.305089,10.9061304 167.573967,11.4239833 L174.451425,21.9835206 C175.001222,22.8058208 175.451056,23.4977562 176.100816,23.5679526 L178.300003,23.7685136 L178.300003,25.9044884 L165.034905,25.9044884 L165.034905,23.83871 L166.684295,23.638149 C167.503992,23.5679526 168.193737,23.1467745 167.503992,22.1840816 L166.894218,21.1812765 L157.467701,21.1812765 L156.717978,22.3545584 C156.298134,23.046494 156.717978,23.5278404 157.407723,23.5980367 L159.117092,23.7985977 L159.117092,25.8643762 L149.290723,25.9044884 L149.290723,23.83871 L151.419936,23.638149 C151.890587,23.4942083 152.285688,23.1699178 152.51953,22.7356244 L157.677624,14.2518935 C157.856348,14.019764 157.896442,13.7090051 157.78252,13.4388775 C157.668597,13.1687499 157.418354,12.9812163 157.127826,12.9482469 L154.448817,12.6674614 L154.448817,10.5314867 L166.204473,10.5314867 Z M55.2154861,10.5114306 L55.2154861,12.6474054 L53.156247,12.8579944 C52.6151136,12.9235111 52.2133065,13.2860362 52.1621372,14.0597144 L52.1566163,14.2318374 L52.1566163,16.6485976 L61.683096,16.6485976 L61.683096,14.3020338 C61.683096,13.6000702 61.4741066,13.0116687 60.8285615,12.8792628 L60.6834655,12.8579944 L58.5542522,12.5772091 L58.5542522,10.5114306 L70.889694,10.5114306 L70.889694,12.6474054 L68.7604808,12.8579944 C68.088729,12.9235111 67.8001246,13.4083339 67.7646295,14.1412462 L67.7608502,14.3020338 L67.7608502,22.3244743 C67.6969817,22.8689036 68.0299526,23.3743135 68.5398168,23.5367051 L68.6605177,23.5679526 L70.8597051,23.7685136 L70.8597051,25.9044884 L58.4842782,25.9044884 L58.4842782,23.7685136 L60.6134913,23.5679526 C61.4288151,23.5021436 61.5939883,22.889884 61.6114502,22.2434714 L61.613122,22.1138852 L61.613122,19.7673214 L52.1266275,19.7673214 L52.1266275,22.254278 C52.1266275,23.2226117 52.5834898,23.5299165 53.0359594,23.6223871 L53.1262581,23.638149 L55.2554713,23.83871 L55.2554713,25.9044884 L43,25.9044884 L43,23.8186538 L45.0592391,23.6180929 C45.808962,23.5522838 46.031536,23.0634163 46.0564292,22.2589076 L46.0588696,22.0938292 L46.0588696,14.3020338 C46.0588696,13.6000702 45.8498802,13.0116687 45.204335,12.8792628 L45.0592391,12.8579944 L43,12.6474054 L43,10.5114306 L55.2154861,10.5114306 Z M108.005978,10.5314867 C108.526121,10.5448059 109.010331,10.8006577 109.315495,11.2234222 L117.312539,21.9133242 L117.312539,14.3220898 C117.312539,13.6301544 117.182587,12.9482469 116.422868,12.8780505 L114.293655,12.5972652 L114.293655,10.5314867 L124.05005,10.5314867 L124.05005,12.6674614 L121.920837,12.8780505 C121.171114,12.9482469 121.031165,13.7003507 121.031165,14.2518935 L121.031165,25.9044884 L113.33401,25.9044884 C112.82535,25.9212039 112.339123,25.6940739 112.024494,25.2927773 L103.917489,14.5326789 L103.917489,22.3244743 C103.917489,23.0866061 104.297349,23.5679526 104.91712,23.638149 L106.976359,23.83871 L106.976359,25.9044884 L97.1899754,25.9044884 L97.1899754,23.83871 L99.1892365,23.638149 C99.9189669,23.4977562 100.188867,23.1166904 100.188867,22.1138852 L100.188867,14.3220898 C100.188867,13.359397 99.9489558,13.0184433 99.1892365,12.8780505 L97.1899754,12.6674614 L97.1899754,10.5314867 L108.005978,10.5314867 Z M83.984855,12.8780505 C80.4861479,12.8780505 78.4868866,14.1816972 78.4868866,18.1828894 C78.4868866,22.1840816 80.4861479,23.5679526 83.984855,23.5679526 C87.4835621,23.5679526 89.4228455,22.254278 89.4228455,18.1828894 C89.4228455,14.1115008 87.4235842,12.8780505 83.984855,12.8780505 Z M138.154838,13.4997897 L134.236286,13.4997897 L134.236286,22.9462135 L138.154838,22.9462135 C141.933441,22.9462135 143.45288,22.1840816 143.45288,18.2530857 C143.45288,14.3220898 141.933441,13.4997897 138.154838,13.4997897 Z M162.115983,13.7705471 L159.117092,18.4636747 L165.114876,18.4636747 L162.115983,13.7705471 Z",
              id: "Honda"
          })), Ai || (Ai = u.createElement("path", {
              d: "M9.18476973,24.016039 L20.2710675,22.6051401 L25.5211675,25.9558912 L11.2803542,25.9558912 L9.18476973,24.016039 Z M8.59892219,23.5089719 L6.68359127,21.789434 L30.4334446,17.3364993 C29.8025571,18.4607831 28.7435479,19.4307474 28.7435479,19.4307474 C27.2790072,20.7533218 25.4311346,20.8195461 25.4311346,20.8195461 C25.4311346,20.8195461 20.9020488,21.4146472 20.1133417,21.5249956 C19.3247128,21.6352675 19.4823761,22.186321 19.4823761,22.186321 L8.59892219,23.5089719 Z M6.16538962,21.2824892 L4.45282442,19.8276191 L34.5119434,12.1451405 L33.5655731,13.611099 C33.5655731,13.611099 32.5515881,15.7493947 28.9462823,16.4767915 C25.3410547,17.2043412 16.1474975,18.8575783 16.1474975,18.8575783 C16.1474975,18.8575783 15.1786151,18.8575783 15.1110004,19.6292521 L6.16538962,21.2824892 Z M11.6409161,17.446817 L3.97967054,19.4749174 L3.19096348,18.8136684 C3.19096348,18.8136684 2.22208102,17.8656514 4.13733378,17.24845 L37.3512028,6.7553383 C37.3512028,6.7553383 37.0807443,7.64814292 36.5399836,8.54094754 C35.9991447,9.43367569 35.2555401,10.8555865 31.9093586,11.715279 L12.5421839,16.6752962 C12.5421839,16.6752962 11.5508674,16.741444 11.6409161,17.446817 Z M40,0 C39.0323682,4.6526018 35.4245611,5.49883528 35.4245611,5.49883528 L3.55149406,16.6752962 C0.712383155,17.898687 2.46997267,19.1221544 2.46997267,19.1221544 L10.5480057,26 L7.47228269,25.9669643 L1.45590957,20.5108766 C-2.43103266,16.8075154 2.69525054,14.8798986 2.69525054,14.8798986 L40,0 Z",
              id: "Combined-Shape"
          })))
      }
      var Di, Ni, Bi = u.forwardRef(Fi), Hi = (n.p,
      ["title", "titleId"]);
      function zi() {
          return zi = Object.assign ? Object.assign.bind() : function(e) {
              for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                      Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
              }
              return e
          }
          ,
          zi.apply(this, arguments)
      }
      function Vi(e, t) {
          if (null == e)
              return {};
          var n, r, i = function(e, t) {
              if (null == e)
                  return {};
              var n, r, i = {}, a = Object.keys(e);
              for (r = 0; r < a.length; r++)
                  n = a[r],
                  t.indexOf(n) >= 0 || (i[n] = e[n]);
              return i
          }(e, t);
          if (Object.getOwnPropertySymbols) {
              var a = Object.getOwnPropertySymbols(e);
              for (r = 0; r < a.length; r++)
                  n = a[r],
                  t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
          }
          return i
      }
      function Ui(e, t) {
          var n = e.title
            , r = e.titleId
            , i = Vi(e, Hi);
          return u.createElement("svg", zi({
              viewBox: "0 0 108 85",
              xmlns: "http://www.w3.org/2000/svg",
              xmlnsXlink: "http://www.w3.org/1999/xlink",
              ref: t,
              "aria-labelledby": r
          }, i), n ? u.createElement("title", {
              id: r
          }, n) : null, Di || (Di = u.createElement("path", {
              d: "M34.0239044,73 C40.9243027,73 44,75.4613512 44,78.974437 C44,82.4875228 40.8764939,85 34.0239044,85 C27.1713147,85 24,82.531345 24,78.974437 C24,75.4613512 27.123506,73 34.0239044,73 Z M78.0732196,73 L78.0413853,73.0078227 C83.6124156,73.0078227 86,75.6910039 86,78.8200782 C86,82.3070049 83.6984479,84.9041159 78.3421068,84.9974036 L78.0413853,85 L66,85 L66,83.4354628 L67.5917231,83.2242504 C68.049912,83.1734029 68.2747835,82.798792 68.3045702,82.3572122 L68.3079985,82.2542373 L68.3079985,75.8005215 C68.3696064,75.3353059 68.0642054,74.9057609 67.6113535,74.7945948 L67.512137,74.7757497 L66.0318345,74.666232 L66.0318345,73 L78.0732196,73 Z M98.4100623,73 C98.8706558,73.0280766 99.2826854,73.2924429 99.4958648,73.6966732 L104.948656,81.9393347 C105.384562,82.5812133 105.741213,83.1213307 106.256375,83.1761253 L108,83.332681 L108,85 L97.4827703,85 L97.4827703,83.3874756 L98.7904892,83.2309198 C99.4403857,83.1761253 99.9872499,82.8473581 99.4403857,82.0958904 L98.9569265,81.3131115 L91.4831147,81.3131115 L90.8886973,82.2289628 C90.5558236,82.7690802 90.8886973,83.1448141 91.4355616,83.1996086 L92.7908337,83.3561644 L92.7908337,84.9686889 L85,85 L85,83.3874756 L86.6881459,83.2309198 C87.0613018,83.1185612 87.3745569,82.8654236 87.5599588,82.5264188 L91.649552,75.9041096 C91.7912539,75.7229118 91.8230423,75.4803367 91.7327188,75.269478 C91.6423953,75.0586194 91.4439899,74.9122326 91.2136451,74.8864971 L89.0895933,74.667319 L89.0895933,73 L98.4100623,73 Z M11.6358423,73 L11.6358423,74.6651466 L10.0114695,74.8293159 C9.58461172,74.8803909 9.26765748,75.1630054 9.22729406,75.7661434 L9.22293905,75.9003257 L9.22293905,77.7843648 L16.7376344,77.7843648 L16.7376344,75.9550489 C16.7376344,75.4078176 16.5727789,74.9491161 16.0635588,74.8458962 L15.949104,74.8293159 L14.269534,74.6104235 L14.269534,73 L24,73 L24,74.6651466 L22.3204301,74.8293159 C21.7905377,74.8803909 21.5628801,75.2583453 21.5348809,75.8297034 L21.5318996,75.9550489 L21.5318996,82.2091205 C21.4815188,82.6335425 21.7441735,83.027546 22.1463656,83.154142 L22.2415771,83.1785016 L23.9763441,83.3348534 L23.9763441,85 L14.2143369,85 L14.2143369,83.3348534 L15.8939068,83.1785016 C16.537052,83.1271987 16.6673443,82.6498982 16.6811186,82.1459729 L16.6824373,82.0449511 L16.6824373,80.2156352 L9.19928318,80.2156352 L9.19928318,82.1543974 C9.19928318,82.9092834 9.55966618,83.1488497 9.9165841,83.2209373 L9.98781366,83.2332248 L11.6673835,83.3895766 L11.6673835,85 L2,85 L2,83.3739413 L3.62437279,83.2175896 C4.21577063,83.1662867 4.39134187,82.7851791 4.4109781,82.1580065 L4.41290319,82.029316 L4.41290319,75.9550489 C4.41290319,75.4078176 4.24804775,74.9491161 3.73882764,74.8458962 L3.62437279,74.8293159 L2,74.6651466 L2,73 L11.6358423,73 Z M52.4562709,73 C52.8629339,73.0103963 53.2415035,73.2101002 53.4800893,73.5400872 L59.7324153,81.8840418 L59.7324153,75.9587382 C59.7324153,75.4186511 59.630815,74.8863913 59.0368441,74.8315998 L57.3721623,74.6124341 L57.3721623,73 L65,73 L65,74.6672255 L63.3353182,74.8315998 C62.7491627,74.8863913 62.639747,75.4734425 62.639747,75.9039467 L62.639747,84.999327 L56.6218832,84.999327 C56.2241978,85.0123742 55.8440513,84.8350889 55.5980647,84.5218587 L49.2597692,76.1231125 L49.2597692,82.2049632 C49.2597692,82.7998417 49.5567548,83.1755546 50.04131,83.230346 L51.651284,83.386893 L51.651284,84.999327 L44,84.999327 L44,83.386893 L45.5630815,83.230346 C46.1336062,83.1207631 46.3446222,82.8233238 46.3446222,82.0405888 L46.3446222,75.9587382 C46.3446222,75.2073126 46.1570525,74.9411827 45.5630815,74.8315998 L44,74.6672255 L44,73 L52.4562709,73 Z M33.5246801,75 C30.6453382,75 29,75.9756098 29,78.9699813 C29,81.9643527 30.6453382,83 33.5246801,83 C36.4040219,83 38,82.0168856 38,78.9699813 C38,75.9230769 36.3546618,75 33.5246801,75 Z M75.9761388,76 L73,76 L73,83 L75.9761388,83 C78.8459868,83 80,82.4352442 80,79.522293 C80,76.6093418 78.8459868,76 75.9761388,76 Z M94.4999995,76 L92,80 L97,80 L94.4999995,76 Z",
              id: "Honda"
          })), Ni || (Ni = u.createElement("path", {
              d: "M24,65.789625 L52.5022752,62 L66,71 L29.387635,71 L24,65.789625 Z M22.0806987,64 L17,59.2641112 L80,47 C78.3264776,50.0964617 75.5172989,52.7679023 75.5172989,52.7679023 C71.6323881,56.4104886 66.7306325,56.5928812 66.7306325,56.5928812 C66.7306325,56.5928812 54.7165623,58.2318871 52.6244002,58.5358045 C50.5324453,58.8395114 50.9506704,60.357203 50.9506704,60.357203 L22.0806987,64 Z M16.5008855,58 L12,54.0194414 L91,33 L88.5127929,37.0108966 C88.5127929,37.0108966 85.8478841,42.8613238 76.3725845,44.8514985 C66.8974903,46.8420916 42.7354043,51.365387 42.7354043,51.365387 C42.7354043,51.365387 40.1890318,51.365387 40.0113302,53.4767046 L16.5008855,58 Z M30.7450743,47.5787977 L10.7042049,53 L8.64104489,51.2324522 C8.64104489,51.2324522 6.10656839,48.6983605 11.1166324,47.0485538 L98,19 C98,19 97.292514,21.3865064 95.877951,23.7730128 C94.4631835,26.1593149 92.518006,29.9601457 83.7648096,32.2581419 L33.1026793,45.5164882 C33.1026793,45.5164882 30.5095183,45.6933043 30.7450743,47.5787977 Z M105,0 C102.459967,12.7051818 92.9894728,15.0160502 92.9894728,15.0160502 L9.32267191,45.5363857 C1.87000578,48.8771838 6.48367825,52.2181908 6.48367825,52.2181908 L27.688515,71 L19.6147421,70.9097872 L3.82176262,56.0104707 C-6.38146074,45.8974459 7.07503267,40.6335692 7.07503267,40.6335692 L105,0 Z",
              id: "Combined-Shape"
          })))
      }
      var Wi, Yi, Gi, Zi = u.forwardRef(Ui), Ki = (n.p,
      ["title", "titleId"]);
      function Xi() {
          return Xi = Object.assign ? Object.assign.bind() : function(e) {
              for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                      Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
              }
              return e
          }
          ,
          Xi.apply(this, arguments)
      }
      function qi(e, t) {
          if (null == e)
              return {};
          var n, r, i = function(e, t) {
              if (null == e)
                  return {};
              var n, r, i = {}, a = Object.keys(e);
              for (r = 0; r < a.length; r++)
                  n = a[r],
                  t.indexOf(n) >= 0 || (i[n] = e[n]);
              return i
          }(e, t);
          if (Object.getOwnPropertySymbols) {
              var a = Object.getOwnPropertySymbols(e);
              for (r = 0; r < a.length; r++)
                  n = a[r],
                  t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
          }
          return i
      }
      function Qi(e, t) {
          var n = e.title
            , r = e.titleId
            , i = qi(e, Ki);
          return u.createElement("svg", Xi({
              viewBox: "0,0,400,127.91878172588832",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": r
          }, i), n ? u.createElement("title", {
              id: r
          }, n) : null, Wi || (Wi = u.createElement("path", {
              d: "M117.083 12.855 C 114.563 13.122,111.416 13.524,110.667 13.675 C 108.741 14.063,107.360 14.365,106.750 14.532 C 105.465 14.883,103.414 15.535,103.127 15.684 C 102.968 15.766,102.764 15.833,102.673 15.833 C 102.583 15.833,102.076 16.029,101.546 16.268 C 95.657 18.928,91.995 22.119,89.707 26.583 C 88.844 28.268,88.567 29.054,88.159 30.969 C 88.075 31.365,87.973 31.742,87.932 31.808 C 87.473 32.552,87.535 39.051,88.020 40.917 C 88.115 41.283,88.270 41.883,88.364 42.250 C 88.590 43.126,89.080 44.431,89.648 45.667 C 90.928 48.449,96.154 54.000,97.494 54.000 C 97.589 54.000,97.667 54.056,97.668 54.125 C 97.669 54.194,97.837 54.334,98.043 54.436 C 98.249 54.538,98.942 54.886,99.583 55.209 C 100.788 55.815,101.379 56.078,102.667 56.581 C 103.079 56.742,103.567 56.932,103.750 57.003 C 103.933 57.075,104.533 57.259,105.083 57.413 C 105.633 57.567,106.271 57.756,106.500 57.833 C 106.729 57.909,107.142 58.014,107.417 58.066 C 107.692 58.118,108.442 58.278,109.083 58.423 C 114.007 59.532,125.550 60.099,130.750 59.488 C 131.575 59.391,132.813 59.245,133.500 59.165 C 135.174 58.969,136.510 58.741,137.917 58.413 C 138.558 58.263,139.421 58.076,139.833 57.997 C 141.300 57.717,144.179 56.707,146.300 55.728 C 146.970 55.419,147.555 55.167,147.600 55.167 C 147.646 55.167,148.093 54.904,148.595 54.583 C 149.096 54.262,149.547 54.000,149.595 54.000 C 149.894 54.000,152.479 51.886,153.724 50.625 C 161.478 42.763,161.302 29.008,153.350 21.352 C 152.369 20.407,149.986 18.565,149.417 18.312 C 149.234 18.230,148.783 17.975,148.417 17.745 C 148.050 17.516,147.600 17.263,147.417 17.183 C 147.233 17.104,146.497 16.768,145.779 16.436 C 145.062 16.105,144.405 15.833,144.319 15.833 C 144.233 15.833,144.032 15.766,143.873 15.684 C 143.417 15.447,140.906 14.667,140.603 14.667 C 140.452 14.667,140.199 14.598,140.039 14.515 C 139.880 14.431,139.112 14.238,138.333 14.085 C 137.554 13.931,136.617 13.743,136.250 13.666 C 135.372 13.482,132.050 13.061,129.742 12.842 C 127.607 12.639,119.040 12.648,117.083 12.855 M5.833 17.247 C 5.833 20.134,5.837 20.161,6.208 20.237 C 6.597 20.316,7.202 20.390,9.750 20.666 C 10.575 20.755,11.588 20.901,12.000 20.990 C 12.412 21.079,12.799 21.155,12.858 21.159 C 13.263 21.187,14.159 22.428,14.322 23.186 C 14.541 24.210,14.572 48.210,14.355 49.287 C 14.012 50.991,12.433 51.975,10.009 51.994 C 9.332 51.999,6.959 52.264,6.038 52.437 C 5.659 52.508,5.659 52.512,5.704 55.296 L 5.750 58.083 23.250 58.083 L 40.750 58.083 40.796 55.296 C 40.841 52.514,40.841 52.508,40.462 52.431 C 40.036 52.345,38.799 52.207,36.583 52.000 C 32.408 51.610,32.107 51.152,32.031 45.071 C 31.989 41.616,32.021 40.857,32.216 40.695 C 32.395 40.546,35.754 40.509,45.852 40.541 L 59.250 40.583 59.294 44.771 C 59.365 51.389,59.311 51.453,53.238 51.989 C 52.223 52.079,51.190 52.229,50.942 52.324 L 50.492 52.495 50.538 55.289 L 50.583 58.083 68.083 58.083 L 85.583 58.083 85.629 55.289 L 85.675 52.495 85.234 52.327 C 84.992 52.235,83.959 52.086,82.939 51.996 C 76.348 51.414,76.803 52.618,76.868 35.917 C 76.931 19.698,76.301 21.283,83.000 20.499 C 83.871 20.397,84.827 20.272,85.125 20.221 L 85.667 20.130 85.667 17.231 L 85.667 14.333 68.083 14.333 L 50.500 14.333 50.500 17.231 L 50.500 20.128 51.458 20.238 C 59.496 21.154,59.250 20.924,59.250 27.500 L 59.250 31.750 45.667 31.750 L 32.083 31.750 32.083 27.583 C 32.083 21.441,32.283 21.150,36.833 20.670 C 39.313 20.408,40.055 20.320,40.458 20.237 C 40.830 20.161,40.833 20.134,40.833 17.247 L 40.833 14.333 23.333 14.333 L 5.833 14.333 5.833 17.247 M161.434 14.597 C 161.379 14.742,161.333 16.056,161.333 17.518 L 161.333 20.175 161.788 20.348 C 162.038 20.443,162.957 20.590,163.830 20.675 C 168.418 21.122,169.287 21.450,169.930 22.979 C 170.311 23.884,170.279 49.127,169.897 49.883 C 169.132 51.392,168.510 51.622,164.167 51.995 C 163.204 52.078,162.173 52.232,161.875 52.339 L 161.333 52.533 161.333 55.163 C 161.333 57.176,161.386 57.837,161.560 57.981 C 161.725 58.118,165.533 58.157,175.602 58.126 L 189.417 58.083 189.462 55.289 L 189.508 52.495 189.065 52.327 C 188.822 52.234,187.826 52.087,186.853 52.000 C 182.549 51.617,181.784 51.343,181.083 49.936 L 180.667 49.101 180.667 37.560 C 180.667 31.213,180.730 25.981,180.806 25.933 C 180.883 25.886,181.165 26.149,181.431 26.518 C 181.698 26.887,181.996 27.278,182.093 27.386 C 182.307 27.625,185.091 31.277,186.250 32.837 C 186.708 33.454,187.271 34.205,187.500 34.505 C 190.016 37.801,192.209 40.681,193.583 42.498 C 194.500 43.710,195.920 45.575,196.740 46.642 C 197.559 47.710,199.249 49.933,200.495 51.583 C 202.524 54.272,203.623 55.705,204.470 56.768 C 204.624 56.961,205.088 57.336,205.500 57.601 L 206.250 58.083 218.000 58.083 L 229.750 58.083 229.833 40.833 C 229.921 22.649,229.894 23.252,230.675 22.155 C 231.321 21.248,231.875 21.099,236.185 20.675 C 237.066 20.589,237.985 20.468,238.227 20.408 L 238.667 20.297 238.667 17.314 L 238.667 14.331 224.708 14.374 L 210.750 14.417 210.709 17.250 C 210.659 20.668,210.585 20.522,212.444 20.687 C 219.996 21.356,219.401 20.172,219.468 34.658 C 219.531 48.075,219.628 47.351,218.054 45.208 C 217.532 44.498,217.062 43.879,217.010 43.833 C 216.957 43.788,216.130 42.700,215.171 41.417 C 214.212 40.133,213.386 39.046,213.336 39.000 C 213.285 38.954,212.008 37.275,210.497 35.267 C 208.986 33.260,207.000 30.633,206.083 29.428 C 204.482 27.323,203.052 25.434,202.794 25.083 C 202.727 24.992,202.495 24.692,202.279 24.417 C 201.895 23.927,197.602 18.262,196.320 16.552 C 195.529 15.498,194.822 14.942,193.833 14.599 C 192.684 14.200,161.588 14.198,161.434 14.597 M242.282 14.441 C 242.218 14.504,242.167 15.820,242.167 17.365 L 242.167 20.175 242.605 20.342 C 242.846 20.433,243.840 20.583,244.814 20.674 C 249.071 21.074,249.588 21.213,250.397 22.174 C 251.087 22.994,251.083 22.918,251.083 36.583 L 251.083 49.583 250.718 50.266 C 250.110 51.403,249.336 51.763,247.000 51.997 C 244.213 52.276,242.581 52.538,242.459 52.726 C 242.390 52.831,242.352 54.079,242.375 55.500 L 242.417 58.083 266.000 58.103 C 288.780 58.121,291.563 58.080,294.083 57.683 C 296.568 57.292,299.948 56.402,301.500 55.730 C 301.821 55.591,302.271 55.397,302.500 55.299 C 302.913 55.121,304.094 54.531,304.855 54.122 C 306.957 52.991,309.382 50.874,310.875 48.867 C 311.264 48.344,311.619 47.879,311.666 47.833 C 311.972 47.531,313.500 44.432,313.500 44.113 C 313.500 43.996,313.563 43.829,313.641 43.742 C 313.937 43.407,314.520 41.022,314.828 38.885 C 316.227 29.155,310.892 20.202,301.750 16.938 C 301.292 16.775,300.767 16.577,300.583 16.499 C 300.229 16.348,299.017 15.986,297.917 15.702 C 295.958 15.197,294.322 14.906,291.917 14.634 C 290.213 14.441,242.467 14.255,242.282 14.441 M326.538 17.290 L 326.583 20.246 327.417 20.376 C 327.875 20.447,329.000 20.578,329.917 20.667 C 334.744 21.137,335.184 21.246,335.795 22.122 C 336.538 23.189,336.364 23.983,334.858 26.385 C 334.295 27.284,333.833 28.091,333.833 28.177 C 333.833 28.263,333.758 28.333,333.667 28.333 C 333.575 28.333,333.500 28.410,333.500 28.503 C 333.500 28.597,332.862 29.689,332.083 30.931 C 331.304 32.173,330.667 33.216,330.667 33.249 C 330.667 33.283,330.367 33.761,330.000 34.313 C 329.633 34.865,329.333 35.360,329.333 35.412 C 329.333 35.560,328.432 36.910,328.292 36.972 C 328.223 37.003,328.167 37.098,328.167 37.184 C 328.167 37.270,327.529 38.356,326.750 39.598 C 325.971 40.839,325.333 41.879,325.333 41.908 C 325.333 42.065,320.437 49.800,320.094 50.184 C 319.122 51.275,318.388 51.503,314.250 51.998 C 313.608 52.075,312.971 52.176,312.833 52.222 C 312.696 52.268,312.375 52.351,312.121 52.407 L 311.659 52.508 311.704 55.296 L 311.750 58.083 325.750 58.083 L 339.750 58.083 339.796 55.296 C 339.841 52.514,339.841 52.508,339.462 52.429 C 337.921 52.104,337.215 51.999,336.533 51.994 C 333.230 51.969,331.709 50.398,332.908 48.250 C 333.511 47.170,334.688 45.292,334.971 44.958 C 335.203 44.685,336.064 44.667,348.661 44.667 L 362.103 44.667 362.802 45.679 C 363.186 46.236,363.500 46.761,363.500 46.846 C 363.500 46.930,363.559 47.000,363.631 47.000 C 363.929 47.000,364.750 48.904,364.750 49.592 C 364.750 50.993,362.848 51.963,360.000 52.013 C 359.587 52.020,358.725 52.118,358.083 52.231 L 356.917 52.435 356.869 54.926 C 356.843 56.296,356.863 57.586,356.914 57.792 L 357.007 58.168 375.878 58.126 L 394.750 58.083 394.796 55.300 C 394.850 52.016,394.991 52.231,392.620 51.998 C 388.158 51.561,387.580 51.400,386.350 50.249 C 385.541 49.493,385.237 49.075,383.132 45.833 C 382.447 44.779,381.219 42.904,380.402 41.667 C 379.585 40.429,378.887 39.342,378.850 39.250 C 378.813 39.158,378.735 39.046,378.677 39.000 C 378.618 38.954,378.165 38.279,377.670 37.500 C 376.420 35.534,371.781 28.454,370.987 27.300 C 370.628 26.777,370.333 26.277,370.333 26.189 C 370.333 26.100,370.275 26.003,370.205 25.972 C 370.097 25.926,366.466 20.488,365.911 19.543 C 364.705 17.490,363.381 15.781,362.500 15.144 C 361.364 14.323,361.616 14.333,343.518 14.333 L 326.492 14.333 326.538 17.290 M128.333 21.320 C 128.746 21.425,129.458 21.587,129.917 21.682 C 133.468 22.414,136.620 24.975,137.900 28.167 C 138.066 28.579,138.268 29.047,138.350 29.206 C 138.433 29.365,138.500 29.651,138.500 29.842 C 138.500 30.033,138.571 30.321,138.657 30.482 C 139.691 32.414,139.437 39.635,138.197 43.583 C 137.199 46.758,134.811 49.070,131.056 50.495 C 127.475 51.855,119.455 51.820,115.667 50.430 C 110.244 48.439,107.667 43.887,107.667 36.300 C 107.667 33.135,108.397 28.881,109.052 28.225 C 109.115 28.163,109.167 28.008,109.167 27.881 C 109.167 27.522,110.267 25.890,111.133 24.964 C 112.902 23.072,115.273 21.921,118.583 21.347 C 119.133 21.251,119.733 21.139,119.917 21.097 C 120.571 20.948,127.598 21.134,128.333 21.320 M285.012 22.924 C 290.943 23.802,293.621 26.262,294.586 31.720 C 294.876 33.361,294.920 39.214,294.652 40.529 C 293.562 45.880,291.707 47.964,286.882 49.259 C 285.193 49.712,282.281 49.849,275.333 49.799 L 268.417 49.750 268.374 36.417 C 268.350 29.083,268.366 22.990,268.410 22.875 C 268.538 22.541,282.705 22.582,285.012 22.924 M349.857 25.595 C 350.531 26.655,351.383 28.001,351.750 28.587 C 352.117 29.172,353.440 31.249,354.691 33.201 C 355.942 35.153,356.931 36.806,356.890 36.875 C 356.800 37.022,340.269 37.047,340.123 36.901 C 339.925 36.703,348.098 23.667,348.420 23.667 C 348.535 23.667,349.182 24.534,349.857 25.595 ",
              stroke: "none",
              fill: "#ec1e2f",
              fillRule: "evenodd"
          })), Yi || (Yi = u.createElement("path", {
              id: "path1",
              d: "M121.125 12.625 C 122.431 12.653,124.569 12.653,125.875 12.625 C 127.181 12.596,126.112 12.573,123.500 12.573 C 120.888 12.573,119.819 12.596,121.125 12.625 M116.167 12.833 L 115.417 12.950 116.083 12.960 C 116.450 12.966,117.125 12.912,117.583 12.841 L 118.417 12.711 117.667 12.714 C 117.254 12.715,116.579 12.769,116.167 12.833 M129.417 12.832 C 130.285 12.977,131.773 13.046,131.653 12.937 C 131.615 12.902,130.908 12.833,130.083 12.783 C 128.978 12.717,128.803 12.729,129.417 12.832 M113.083 13.175 C 112.755 13.264,112.926 13.279,113.583 13.218 C 114.133 13.167,114.615 13.097,114.653 13.062 C 114.777 12.951,113.597 13.036,113.083 13.175 M133.083 13.176 C 133.928 13.351,134.610 13.343,133.917 13.167 C 133.642 13.097,133.192 13.039,132.917 13.039 C 132.496 13.038,132.523 13.060,133.083 13.176 M111.458 13.451 C 111.665 13.491,112.002 13.491,112.208 13.451 C 112.415 13.411,112.246 13.379,111.833 13.379 C 111.421 13.379,111.252 13.411,111.458 13.451 M134.794 13.451 C 135.001 13.491,135.301 13.490,135.460 13.448 C 135.620 13.406,135.450 13.374,135.083 13.375 C 134.717 13.377,134.586 13.411,134.794 13.451 M110.000 13.667 C 109.430 13.787,109.428 13.790,109.917 13.800 C 110.192 13.805,110.567 13.745,110.750 13.667 C 111.151 13.494,110.818 13.494,110.000 13.667 M136.250 13.662 C 136.568 13.803,137.631 13.899,137.486 13.773 C 137.448 13.740,137.079 13.668,136.667 13.614 C 136.166 13.548,136.027 13.564,136.250 13.662 M108.417 14.000 C 107.992 14.183,108.430 14.183,109.000 14.000 C 109.335 13.893,109.351 13.866,109.083 13.862 C 108.900 13.859,108.600 13.921,108.417 14.000 M138.000 14.000 C 138.570 14.183,139.008 14.183,138.583 14.000 C 138.400 13.921,138.100 13.859,137.917 13.862 C 137.649 13.866,137.665 13.893,138.000 14.000 M5.741 14.381 C 5.548 14.884,5.749 20.222,5.962 20.265 C 6.079 20.289,6.098 20.270,6.004 20.224 C 5.897 20.171,5.833 19.053,5.833 17.237 L 5.833 14.335 23.292 14.292 L 40.750 14.248 23.286 14.208 C 9.174 14.175,5.807 14.208,5.741 14.381 M50.408 14.380 C 50.362 14.499,50.346 15.868,50.371 17.423 L 50.417 20.250 50.917 20.266 C 51.388 20.280,51.391 20.277,50.958 20.213 L 50.500 20.146 50.500 17.239 L 50.500 14.333 68.083 14.333 L 85.667 14.333 85.667 17.238 C 85.667 20.116,85.663 20.144,85.292 20.224 C 84.961 20.295,84.966 20.301,85.333 20.277 L 85.750 20.250 85.750 17.250 L 85.750 14.250 68.120 14.208 C 53.839 14.173,50.474 14.206,50.408 14.380 M161.339 14.489 C 161.241 14.673,161.167 15.956,161.167 17.469 C 161.167 20.425,161.180 20.462,162.277 20.592 C 162.905 20.667,162.903 20.665,162.167 20.459 L 161.417 20.250 161.369 17.667 C 161.343 16.246,161.363 14.915,161.414 14.709 L 161.506 14.335 177.378 14.292 L 193.250 14.248 177.381 14.207 C 161.840 14.168,161.508 14.173,161.339 14.489 M210.708 14.277 C 210.380 14.410,210.413 20.221,210.744 20.495 C 210.879 20.607,211.085 20.660,211.203 20.612 C 211.338 20.558,211.311 20.522,211.128 20.513 C 210.706 20.494,210.650 20.039,210.702 17.083 L 210.750 14.417 224.708 14.374 L 238.667 14.331 238.667 17.325 L 238.667 20.318 238.042 20.423 C 237.163 20.570,237.012 20.638,237.531 20.654 C 237.777 20.661,238.172 20.593,238.410 20.503 L 238.841 20.339 238.795 17.294 L 238.750 14.250 224.833 14.221 C 217.179 14.205,210.823 14.230,210.708 14.277 M242.200 14.367 C 242.060 14.506,242.000 15.407,242.000 17.346 C 242.000 20.474,242.005 20.487,243.202 20.594 L 243.917 20.657 243.179 20.499 C 242.133 20.274,242.154 20.344,242.204 17.238 L 242.250 14.417 265.667 14.332 L 289.083 14.248 265.742 14.207 C 247.764 14.176,242.354 14.213,242.200 14.367 M326.444 14.278 C 326.226 14.496,326.318 20.113,326.543 20.300 C 326.659 20.396,327.240 20.513,327.835 20.561 L 328.917 20.648 327.750 20.447 L 326.583 20.247 326.538 17.291 L 326.492 14.335 343.621 14.292 L 360.750 14.248 343.653 14.208 C 334.249 14.185,326.506 14.217,326.444 14.278 M40.871 17.194 C 40.843 19.365,40.779 20.161,40.625 20.223 C 40.462 20.289,40.463 20.310,40.630 20.320 C 40.980 20.342,41.011 20.035,40.958 17.077 L 40.908 14.250 40.871 17.194 M140.083 14.500 C 140.140 14.592,140.351 14.661,140.552 14.655 C 140.904 14.644,140.905 14.638,140.583 14.500 C 140.125 14.303,139.961 14.303,140.083 14.500 M290.167 14.509 C 290.579 14.582,291.254 14.637,291.667 14.631 L 292.417 14.620 291.500 14.493 C 290.183 14.311,289.125 14.323,290.167 14.509 M361.083 14.500 C 361.267 14.579,361.529 14.643,361.667 14.643 C 361.824 14.643,361.793 14.590,361.583 14.500 C 361.400 14.421,361.137 14.357,361.000 14.357 C 360.842 14.357,360.873 14.410,361.083 14.500 M105.167 14.833 C 104.944 14.977,104.944 14.995,105.167 14.995 C 105.304 14.995,105.529 14.922,105.667 14.833 C 105.889 14.690,105.889 14.672,105.667 14.672 C 105.529 14.672,105.304 14.744,105.167 14.833 M141.333 14.833 C 141.471 14.922,141.696 14.995,141.833 14.995 C 142.056 14.995,142.056 14.977,141.833 14.833 C 141.696 14.744,141.471 14.672,141.333 14.672 C 141.111 14.672,141.111 14.690,141.333 14.833 M194.671 14.942 C 194.898 15.093,195.313 15.412,195.593 15.650 C 195.873 15.888,195.772 15.765,195.369 15.375 C 194.965 14.985,194.550 14.667,194.447 14.667 C 194.344 14.667,194.445 14.791,194.671 14.942 M293.500 14.833 C 293.729 14.907,294.104 14.967,294.333 14.967 L 294.750 14.967 294.333 14.833 C 294.104 14.760,293.729 14.700,293.500 14.700 L 293.083 14.700 293.500 14.833 M362.250 14.911 C 362.433 15.059,362.759 15.333,362.974 15.519 C 363.189 15.705,363.400 15.823,363.443 15.779 C 363.486 15.736,363.273 15.516,362.969 15.291 C 362.324 14.814,361.761 14.516,362.250 14.911 M103.917 15.256 C 103.244 15.564,103.646 15.565,104.356 15.257 C 104.664 15.123,104.804 15.016,104.667 15.020 C 104.529 15.024,104.192 15.130,103.917 15.256 M142.644 15.257 C 142.953 15.390,143.290 15.497,143.394 15.493 C 143.498 15.490,143.331 15.377,143.023 15.243 C 142.714 15.110,142.377 15.003,142.273 15.007 C 142.168 15.010,142.336 15.123,142.644 15.257 M295.917 15.254 C 296.375 15.381,296.900 15.484,297.083 15.481 C 297.267 15.479,297.042 15.373,296.583 15.246 C 296.125 15.119,295.600 15.016,295.417 15.019 C 295.233 15.021,295.458 15.127,295.917 15.254 M363.712 16.292 C 363.856 16.452,364.354 17.165,364.817 17.875 C 365.281 18.585,365.703 19.167,365.755 19.167 C 365.807 19.167,365.638 18.848,365.379 18.458 C 365.120 18.069,364.648 17.356,364.329 16.875 C 364.011 16.394,363.682 16.000,363.599 16.000 C 363.516 16.000,363.567 16.131,363.712 16.292 M100.907 16.411 C 100.486 16.730,100.668 16.733,101.273 16.418 C 101.535 16.281,101.633 16.168,101.490 16.168 C 101.347 16.167,101.085 16.277,100.907 16.411 M196.481 16.806 C 196.666 17.067,196.950 17.385,197.111 17.515 C 197.272 17.644,197.150 17.431,196.840 17.042 C 196.205 16.242,195.969 16.087,196.481 16.806 M98.792 17.429 C 98.169 17.767,98.207 17.907,98.833 17.583 C 99.108 17.441,99.333 17.289,99.333 17.246 C 99.333 17.138,99.315 17.145,98.792 17.429 M197.667 18.333 C 197.862 18.608,198.060 18.833,198.106 18.833 C 198.152 18.833,198.029 18.608,197.833 18.333 C 197.638 18.058,197.440 17.833,197.394 17.833 C 197.348 17.833,197.471 18.058,197.667 18.333 M96.139 19.087 C 95.802 19.307,95.472 19.577,95.405 19.686 C 95.337 19.795,95.631 19.645,96.058 19.351 C 96.484 19.057,96.833 18.783,96.833 18.742 C 96.833 18.635,96.815 18.644,96.139 19.087 M305.514 18.723 C 305.872 19.014,307.167 19.831,307.167 19.766 C 307.167 19.657,305.726 18.667,305.567 18.667 C 305.500 18.667,305.476 18.692,305.514 18.723 M198.667 19.667 C 198.957 20.033,199.232 20.333,199.278 20.333 C 199.324 20.333,199.124 20.033,198.833 19.667 C 198.543 19.300,198.268 19.000,198.222 19.000 C 198.176 19.000,198.376 19.300,198.667 19.667 M151.994 20.107 C 152.403 20.461,152.934 20.938,153.174 21.167 C 153.415 21.396,153.793 21.724,154.014 21.897 C 154.236 22.069,153.929 21.742,153.333 21.170 C 152.737 20.599,152.025 19.981,151.750 19.798 C 151.475 19.615,151.585 19.754,151.994 20.107 M93.351 21.458 C 92.463 22.352,91.562 23.346,91.350 23.667 C 91.066 24.097,91.129 24.053,91.590 23.500 C 91.934 23.087,92.889 22.094,93.712 21.292 C 94.536 20.490,95.155 19.833,95.088 19.833 C 95.022 19.833,94.240 20.565,93.351 21.458 M308.536 20.972 C 309.244 21.639,310.212 22.612,310.687 23.134 C 311.163 23.656,311.395 23.858,311.204 23.583 C 310.847 23.068,308.407 20.653,307.667 20.081 C 307.438 19.904,307.829 20.305,308.536 20.972 M367.291 21.645 C 368.284 23.176,368.940 24.102,368.725 23.667 C 368.474 23.159,366.502 20.167,366.419 20.167 C 366.372 20.167,366.764 20.832,367.291 21.645 M7.250 20.510 C 7.617 20.585,8.104 20.643,8.333 20.637 C 8.995 20.621,7.902 20.373,7.167 20.372 L 6.583 20.372 7.250 20.510 M38.417 20.500 C 37.681 20.687,38.519 20.695,39.417 20.510 L 40.083 20.372 39.500 20.372 C 39.179 20.373,38.692 20.430,38.417 20.500 M52.583 20.510 C 53.428 20.684,54.110 20.676,53.417 20.500 C 53.142 20.430,52.692 20.373,52.417 20.372 C 51.996 20.372,52.023 20.394,52.583 20.510 M83.167 20.500 C 82.724 20.593,82.684 20.626,83.000 20.635 C 83.229 20.642,83.717 20.585,84.083 20.510 C 84.639 20.395,84.667 20.372,84.250 20.374 C 83.975 20.376,83.487 20.432,83.167 20.500 M199.593 20.825 C 200.088 21.549,201.723 23.667,201.787 23.667 C 201.856 23.667,200.920 22.338,200.334 21.603 C 199.938 21.107,199.398 20.540,199.593 20.825 M9.514 20.729 C 9.552 20.763,10.033 20.835,10.583 20.888 C 11.231 20.950,11.437 20.934,11.167 20.842 C 10.756 20.702,9.379 20.608,9.514 20.729 M35.417 20.840 C 35.102 20.924,35.317 20.939,36.000 20.881 C 36.596 20.831,37.115 20.762,37.153 20.728 C 37.279 20.616,35.926 20.704,35.417 20.840 M54.667 20.756 C 54.804 20.784,55.493 20.897,56.197 21.008 C 58.874 21.430,59.167 22.089,59.167 27.696 L 59.167 31.667 45.670 31.667 L 32.173 31.667 32.123 27.792 L 32.074 23.917 32.079 27.833 L 32.083 31.750 45.667 31.750 L 59.250 31.750 59.250 27.500 C 59.250 21.637,58.560 20.549,54.931 20.686 C 54.648 20.697,54.529 20.728,54.667 20.756 M80.000 20.842 C 79.624 20.927,79.832 20.941,80.583 20.883 C 81.225 20.833,81.781 20.764,81.819 20.729 C 81.938 20.622,80.613 20.704,80.000 20.842 M163.681 20.728 C 163.719 20.762,164.237 20.831,164.833 20.881 C 165.516 20.939,165.732 20.924,165.417 20.840 C 164.907 20.704,163.554 20.616,163.681 20.728 M212.181 20.728 C 212.219 20.762,212.737 20.832,213.333 20.884 C 214.013 20.944,214.261 20.928,214.000 20.840 C 213.592 20.703,212.044 20.607,212.181 20.728 M234.583 20.842 C 234.268 20.928,234.514 20.944,235.250 20.885 C 235.892 20.834,236.448 20.764,236.486 20.729 C 236.614 20.614,235.090 20.704,234.583 20.842 M244.681 20.728 C 244.719 20.762,245.237 20.832,245.833 20.884 C 246.513 20.944,246.761 20.928,246.500 20.840 C 246.092 20.703,244.544 20.607,244.681 20.728 M329.681 20.729 C 329.719 20.764,330.275 20.834,330.917 20.885 C 331.653 20.944,331.899 20.928,331.583 20.842 C 331.077 20.704,329.553 20.614,329.681 20.729 M78.173 21.437 C 77.664 21.865,77.071 22.794,77.215 22.937 C 77.256 22.978,77.385 22.779,77.502 22.495 C 77.728 21.949,78.526 21.255,79.083 21.120 C 79.394 21.044,79.392 21.037,79.054 21.019 C 78.855 21.009,78.459 21.196,78.173 21.437 M121.801 21.124 C 122.745 21.154,124.245 21.154,125.134 21.124 C 126.023 21.094,125.250 21.070,123.417 21.070 C 121.583 21.070,120.856 21.095,121.801 21.124 M166.377 21.120 C 166.631 21.158,167.006 21.157,167.211 21.117 C 167.416 21.078,167.208 21.046,166.750 21.048 C 166.292 21.049,166.124 21.081,166.377 21.120 M214.875 21.119 C 215.127 21.158,215.540 21.158,215.792 21.119 C 216.044 21.081,215.838 21.050,215.333 21.050 C 214.829 21.050,214.623 21.081,214.875 21.119 M232.042 21.172 C 231.835 21.255,231.667 21.371,231.667 21.429 C 231.667 21.488,231.798 21.478,231.958 21.407 C 232.119 21.336,232.662 21.226,233.167 21.163 L 234.083 21.049 233.250 21.035 C 232.792 21.027,232.248 21.089,232.042 21.172 M247.377 21.120 C 247.631 21.158,248.006 21.157,248.211 21.117 C 248.416 21.078,248.208 21.046,247.750 21.048 C 247.292 21.049,247.124 21.081,247.377 21.120 M332.542 21.119 C 332.794 21.158,333.206 21.158,333.458 21.119 C 333.710 21.081,333.504 21.050,333.000 21.050 C 332.496 21.050,332.290 21.081,332.542 21.119 M13.052 21.543 C 13.309 21.749,13.664 22.105,13.840 22.334 C 14.015 22.563,14.161 22.664,14.163 22.558 C 14.168 22.311,13.026 21.166,12.775 21.167 C 12.670 21.168,12.794 21.337,13.052 21.543 M33.321 21.542 C 33.085 21.748,32.823 22.033,32.738 22.175 C 32.652 22.318,32.710 22.295,32.867 22.125 C 33.023 21.955,33.323 21.673,33.533 21.497 C 33.744 21.322,33.879 21.176,33.833 21.173 C 33.787 21.170,33.557 21.337,33.321 21.542 M118.667 21.333 L 118.250 21.467 118.667 21.464 C 118.896 21.462,119.308 21.403,119.583 21.333 L 120.083 21.206 119.583 21.203 C 119.308 21.201,118.896 21.260,118.667 21.333 M127.417 21.333 C 128.122 21.513,128.727 21.513,128.167 21.333 C 127.938 21.260,127.563 21.201,127.333 21.203 C 126.959 21.206,126.968 21.219,127.417 21.333 M216.514 21.227 C 216.552 21.259,216.808 21.337,217.083 21.398 C 217.448 21.480,217.516 21.464,217.333 21.341 C 217.108 21.189,216.347 21.082,216.514 21.227 M249.167 21.446 C 249.972 21.793,250.329 22.139,250.687 22.917 C 250.855 23.283,250.994 23.463,250.996 23.316 C 251.006 22.639,249.506 21.147,248.850 21.180 C 248.703 21.188,248.846 21.307,249.167 21.446 M334.572 21.430 C 334.933 21.562,335.382 21.801,335.569 21.960 C 335.896 22.238,335.901 22.237,335.676 21.947 C 335.382 21.568,334.612 21.163,334.217 21.178 C 334.052 21.185,334.212 21.298,334.572 21.430 M117.000 21.669 C 116.824 21.784,116.923 21.801,117.333 21.726 C 118.052 21.594,118.188 21.499,117.653 21.503 C 117.431 21.504,117.138 21.579,117.000 21.669 M169.051 21.994 C 169.384 22.287,169.723 22.815,169.880 23.286 C 170.026 23.725,170.151 23.956,170.156 23.800 C 170.179 23.171,169.069 21.500,168.628 21.500 C 168.551 21.500,168.742 21.722,169.051 21.994 M217.681 21.542 C 217.720 21.565,218.014 21.808,218.334 22.083 L 218.917 22.583 218.427 22.042 C 218.158 21.744,217.864 21.500,217.774 21.500 C 217.685 21.500,217.643 21.519,217.681 21.542 M115.583 22.089 C 114.922 22.392,115.242 22.391,116.083 22.088 C 116.450 21.956,116.600 21.851,116.417 21.854 C 116.233 21.858,115.858 21.963,115.583 22.089 M131.101 22.152 C 132.883 22.794,135.384 24.337,135.615 24.938 C 135.657 25.050,135.818 25.189,135.971 25.247 C 136.504 25.451,135.077 24.138,134.000 23.433 C 132.849 22.680,130.998 21.829,130.531 21.839 C 130.376 21.843,130.633 21.983,131.101 22.152 M114.126 22.710 C 113.783 22.901,113.530 23.086,113.565 23.120 C 113.619 23.175,114.797 22.577,114.986 22.399 C 115.173 22.223,114.682 22.401,114.126 22.710 M154.920 23.042 C 155.278 23.477,155.597 23.833,155.630 23.833 C 155.749 23.833,155.025 22.907,154.653 22.583 C 154.442 22.400,154.562 22.606,154.920 23.042 M32.262 23.095 C 32.201 23.339,32.183 23.571,32.222 23.611 C 32.261 23.650,32.343 23.482,32.405 23.238 C 32.466 22.994,32.484 22.762,32.445 22.723 C 32.406 22.683,32.323 22.851,32.262 23.095 M218.839 22.689 C 218.836 22.747,218.943 23.047,219.077 23.356 C 219.211 23.664,219.321 23.804,219.321 23.667 C 219.321 23.426,218.851 22.472,218.839 22.689 M268.444 22.778 C 268.290 22.932,268.304 49.629,268.458 49.724 C 268.527 49.767,268.564 43.734,268.540 36.319 L 268.496 22.837 276.206 22.792 L 283.917 22.747 276.236 22.707 C 272.012 22.685,268.506 22.717,268.444 22.778 M230.067 23.202 C 229.989 23.412,229.886 31.346,229.838 40.833 L 229.750 58.083 218.031 58.083 C 211.586 58.083,206.486 58.132,206.698 58.192 C 207.654 58.460,229.794 58.344,229.899 58.070 C 229.954 57.925,230.000 50.256,230.001 41.028 C 230.002 29.651,230.059 24.044,230.180 23.609 C 230.376 22.903,230.292 22.597,230.067 23.202 M284.500 22.997 C 284.912 23.132,286.287 23.223,286.153 23.106 C 286.115 23.073,285.633 23.004,285.083 22.953 C 284.462 22.896,284.241 22.912,284.500 22.997 M76.940 23.792 C 76.803 24.622,76.836 48.641,76.975 49.135 C 77.035 49.346,77.083 43.590,77.083 36.343 C 77.083 29.096,77.074 23.167,77.063 23.167 C 77.053 23.167,76.997 23.448,76.940 23.792 M112.500 23.734 C 112.087 24.042,111.450 24.620,111.083 25.018 C 110.522 25.627,110.576 25.597,111.421 24.829 C 111.974 24.327,112.649 23.752,112.921 23.551 C 113.194 23.350,113.379 23.183,113.333 23.180 C 113.287 23.177,112.912 23.427,112.500 23.734 M286.347 23.227 C 286.385 23.259,286.642 23.337,286.917 23.398 C 287.282 23.480,287.349 23.464,287.167 23.341 C 286.942 23.189,286.180 23.082,286.347 23.227 M288.083 23.755 C 288.947 24.066,289.247 24.058,288.523 23.743 C 288.214 23.610,287.839 23.503,287.689 23.507 C 287.539 23.511,287.717 23.623,288.083 23.755 M14.333 36.250 C 14.333 43.201,14.376 48.847,14.427 48.795 C 14.544 48.678,14.535 23.813,14.418 23.696 C 14.372 23.649,14.333 29.299,14.333 36.250 M347.926 24.125 L 347.647 24.583 347.975 24.208 C 348.193 23.959,348.403 23.870,348.596 23.945 C 348.795 24.021,348.850 23.995,348.768 23.862 C 348.565 23.534,348.220 23.643,347.926 24.125 M202.237 24.333 C 202.476 24.654,202.728 24.992,202.797 25.083 C 202.865 25.175,203.208 25.644,203.558 26.125 C 203.909 26.606,204.229 27.000,204.270 27.000 C 204.395 27.000,202.953 25.006,202.359 24.358 L 201.802 23.750 202.237 24.333 M335.859 24.332 C 335.760 24.616,335.526 25.063,335.339 25.325 C 335.153 25.587,335.000 25.864,335.000 25.939 C 335.000 26.151,335.814 24.905,336.006 24.400 C 336.100 24.155,336.145 23.923,336.107 23.885 C 336.069 23.847,335.958 24.048,335.859 24.332 M155.833 24.034 C 155.833 24.191,157.024 26.167,157.119 26.167 C 157.162 26.167,156.992 25.810,156.740 25.375 C 156.170 24.390,155.833 23.893,155.833 24.034 M251.079 36.417 C 251.079 43.200,251.100 45.951,251.125 42.529 C 251.150 39.108,251.150 33.558,251.125 30.196 C 251.100 26.834,251.079 29.633,251.079 36.417 M312.013 24.970 C 312.308 25.445,312.581 25.833,312.619 25.833 C 312.739 25.833,311.939 24.490,311.702 24.293 C 311.578 24.190,311.718 24.495,312.013 24.970 M90.516 24.927 C 90.324 25.253,90.242 25.473,90.334 25.416 C 90.515 25.304,91.056 24.333,90.937 24.333 C 90.898 24.333,90.709 24.600,90.516 24.927 M289.847 24.387 C 289.885 24.417,290.179 24.611,290.500 24.818 L 291.083 25.194 290.583 24.765 C 290.308 24.528,290.015 24.335,289.931 24.334 C 289.847 24.334,289.809 24.358,289.847 24.387 M369.631 25.245 C 369.880 25.654,370.143 25.992,370.216 25.995 C 370.289 25.998,370.117 25.662,369.833 25.250 C 369.169 24.285,369.047 24.282,369.631 25.245 M344.938 28.883 C 343.489 31.193,342.416 32.971,342.554 32.833 C 342.867 32.520,347.696 24.807,347.624 24.735 C 347.595 24.707,346.386 26.573,344.938 28.883 M219.333 35.490 C 219.333 45.488,219.269 47.061,218.898 46.094 C 218.843 45.951,218.714 45.833,218.612 45.833 C 218.510 45.833,218.595 46.002,218.802 46.208 C 219.123 46.529,219.201 46.547,219.336 46.333 C 219.498 46.079,219.577 24.833,219.417 24.833 C 219.371 24.833,219.333 29.629,219.333 35.490 M291.602 25.656 C 291.796 25.891,292.112 26.271,292.304 26.500 C 292.496 26.729,292.773 27.067,292.919 27.250 C 293.180 27.578,293.182 27.577,293.010 27.221 C 292.914 27.022,292.478 26.492,292.043 26.044 C 291.607 25.595,291.409 25.421,291.602 25.656 M349.911 25.989 C 350.050 26.259,350.240 26.526,350.332 26.583 C 350.425 26.640,350.343 26.420,350.150 26.093 C 349.728 25.378,349.556 25.303,349.911 25.989 M89.676 26.271 C 89.480 26.603,89.355 26.911,89.398 26.954 C 89.441 26.997,89.634 26.725,89.825 26.349 C 90.256 25.504,90.159 25.453,89.676 26.271 M109.748 26.742 C 109.428 27.242,109.167 27.747,109.167 27.865 C 109.167 27.982,109.326 27.780,109.521 27.414 C 109.715 27.049,110.020 26.544,110.199 26.292 C 110.377 26.040,110.479 25.833,110.426 25.833 C 110.373 25.833,110.068 26.242,109.748 26.742 M180.756 26.007 C 180.705 26.141,180.684 31.425,180.708 37.750 L 180.752 49.250 180.793 37.592 L 180.833 25.934 181.348 26.634 C 181.868 27.341,182.155 27.578,181.841 27.042 C 181.407 26.297,180.849 25.765,180.756 26.007 M370.334 26.264 C 370.335 26.348,370.528 26.642,370.765 26.917 L 371.194 27.417 370.818 26.833 C 370.335 26.085,370.333 26.083,370.334 26.264 M136.833 26.407 C 136.833 26.571,137.546 27.676,137.611 27.611 C 137.649 27.573,137.520 27.270,137.324 26.938 C 137.000 26.389,136.833 26.209,136.833 26.407 M157.167 26.366 C 157.167 26.419,157.279 26.677,157.416 26.939 C 157.553 27.202,157.663 27.304,157.660 27.167 C 157.658 27.029,157.546 26.771,157.411 26.593 C 157.277 26.415,157.167 26.313,157.167 26.366 M204.500 27.235 C 204.500 27.387,205.987 29.333,206.103 29.333 C 206.167 29.333,205.433 28.313,204.554 27.181 C 204.524 27.142,204.500 27.167,204.500 27.235 M351.331 28.125 C 351.623 28.606,351.899 29.000,351.945 29.000 C 352.057 29.000,351.341 27.811,351.041 27.500 C 350.908 27.363,351.039 27.644,351.331 28.125 M182.792 28.542 C 183.227 29.115,183.621 29.621,183.667 29.667 C 183.713 29.712,184.529 30.781,185.482 32.042 C 186.434 33.302,187.245 34.333,187.285 34.333 C 187.362 34.333,187.089 33.944,185.971 32.460 C 185.574 31.934,184.575 30.606,183.750 29.507 C 182.925 28.409,182.194 27.508,182.125 27.505 C 182.057 27.502,182.357 27.969,182.792 28.542 M293.167 27.719 C 293.167 27.847,293.983 29.403,293.991 29.290 C 294.002 29.128,293.318 27.667,293.232 27.667 C 293.196 27.667,293.167 27.690,293.167 27.719 M313.586 27.917 C 313.647 28.100,313.815 28.607,313.958 29.044 C 314.101 29.480,314.250 29.806,314.288 29.768 C 314.374 29.682,313.881 28.206,313.646 27.846 C 313.507 27.632,313.496 27.645,313.586 27.917 M332.252 30.382 C 330.694 32.909,330.578 33.109,330.783 32.917 C 331.049 32.668,333.532 28.643,333.463 28.574 C 333.430 28.541,332.885 29.355,332.252 30.382 M372.768 30.029 C 373.196 30.700,373.655 31.363,373.789 31.500 C 373.923 31.637,373.642 31.131,373.165 30.374 C 372.689 29.618,372.229 28.955,372.144 28.903 C 372.060 28.850,372.340 29.357,372.768 30.029 M88.250 29.833 C 88.187 30.030,88.174 30.229,88.220 30.275 C 88.265 30.321,88.354 30.197,88.417 30.000 C 88.479 29.803,88.493 29.604,88.447 29.558 C 88.401 29.512,88.313 29.636,88.250 29.833 M206.994 30.643 C 207.452 31.272,207.949 31.889,208.100 32.014 C 208.251 32.139,207.909 31.625,207.341 30.871 C 206.773 30.117,206.276 29.500,206.236 29.500 C 206.196 29.500,206.537 30.014,206.994 30.643 M294.003 29.764 C 294.004 29.940,294.081 30.196,294.174 30.333 C 294.298 30.516,294.313 30.448,294.232 30.083 C 294.095 29.471,293.999 29.337,294.003 29.764 M353.301 31.278 C 353.931 32.271,354.979 33.922,355.630 34.948 C 356.281 35.973,356.741 36.849,356.653 36.894 C 356.564 36.938,356.574 36.960,356.675 36.942 C 356.776 36.923,356.871 36.858,356.887 36.797 C 356.924 36.658,352.510 29.693,352.305 29.566 C 352.223 29.515,352.671 30.286,353.301 31.278 M108.208 30.691 C 107.922 31.930,107.966 32.292,108.266 31.173 C 108.401 30.673,108.490 30.157,108.464 30.027 C 108.438 29.896,108.323 30.195,108.208 30.691 M138.505 30.500 C 138.505 30.637,138.578 30.863,138.667 31.000 C 138.810 31.222,138.828 31.222,138.828 31.000 C 138.828 30.863,138.756 30.637,138.667 30.500 C 138.523 30.278,138.505 30.278,138.505 30.500 M87.858 31.448 C 87.735 32.004,87.670 32.599,87.714 32.771 C 87.764 32.965,87.802 32.888,87.814 32.567 C 87.825 32.282,87.914 31.817,88.014 31.532 C 88.113 31.248,88.169 30.885,88.138 30.726 C 88.108 30.567,87.982 30.892,87.858 31.448 M294.372 31.167 C 294.372 31.488,294.406 31.619,294.448 31.458 C 294.490 31.298,294.490 31.035,294.448 30.875 C 294.406 30.715,294.372 30.846,294.372 31.167 M158.838 31.167 C 158.838 31.304,158.911 31.529,159.000 31.667 C 159.144 31.889,159.162 31.889,159.162 31.667 C 159.162 31.529,159.089 31.304,159.000 31.167 C 158.856 30.944,158.838 30.944,158.838 31.167 M314.792 32.250 C 314.949 33.540,314.952 37.935,314.797 39.333 L 314.676 40.417 314.909 39.167 C 315.209 37.554,315.207 33.914,314.906 32.417 C 314.671 31.251,314.671 31.251,314.792 32.250 M138.875 32.083 C 138.877 32.450,138.911 32.580,138.951 32.373 C 138.991 32.166,138.990 31.866,138.948 31.706 C 138.906 31.547,138.874 31.717,138.875 32.083 M294.621 32.917 C 294.671 33.558,294.739 34.115,294.773 34.153 C 294.884 34.280,294.796 32.757,294.662 32.250 C 294.582 31.947,294.566 32.209,294.621 32.917 M208.828 33.042 C 209.412 33.845,210.481 35.096,210.140 34.578 C 209.738 33.967,208.462 32.333,208.386 32.333 C 208.346 32.333,208.544 32.652,208.828 33.042 M107.784 33.232 C 107.719 33.680,107.676 34.355,107.688 34.732 C 107.703 35.208,107.755 35.035,107.857 34.167 C 108.023 32.751,107.963 31.983,107.784 33.232 M159.212 33.167 C 159.212 33.579,159.245 33.748,159.284 33.542 C 159.324 33.335,159.324 32.998,159.284 32.792 C 159.245 32.585,159.212 32.754,159.212 33.167 M139.042 33.417 C 139.044 33.783,139.078 33.914,139.118 33.706 C 139.158 33.499,139.156 33.199,139.115 33.040 C 139.073 32.880,139.040 33.050,139.042 33.417 M341.272 34.689 C 340.750 35.526,340.350 36.239,340.384 36.272 C 340.417 36.306,340.872 35.648,341.394 34.811 C 341.917 33.974,342.317 33.261,342.283 33.228 C 342.249 33.194,341.795 33.852,341.272 34.689 M375.432 34.042 C 375.770 34.569,376.078 35.000,376.116 35.000 C 376.228 35.000,375.625 34.034,375.204 33.539 C 374.991 33.288,375.094 33.515,375.432 34.042 M87.439 34.607 C 87.306 35.580,87.322 36.863,87.480 37.833 C 87.560 38.322,87.599 37.755,87.593 36.208 C 87.582 33.531,87.584 33.550,87.439 34.607 M159.369 35.767 C 159.349 36.785,159.299 38.098,159.256 38.684 L 159.179 39.750 159.342 38.750 C 159.431 38.200,159.482 36.887,159.455 35.833 L 159.405 33.917 159.369 35.767 M139.121 36.667 C 139.050 38.087,138.959 39.625,138.920 40.083 C 138.881 40.542,138.959 40.204,139.093 39.333 C 139.228 38.456,139.317 36.932,139.293 35.917 L 139.250 34.083 139.121 36.667 M210.904 35.792 C 211.236 36.227,211.899 37.123,212.379 37.783 C 212.858 38.443,213.310 38.987,213.384 38.992 C 213.457 38.996,212.832 38.100,211.993 37.000 C 211.155 35.900,210.431 35.000,210.385 35.000 C 210.339 35.000,210.573 35.356,210.904 35.792 M328.700 36.165 C 328.414 36.624,328.234 36.998,328.299 36.995 C 328.445 36.988,329.371 35.482,329.283 35.394 C 329.248 35.359,328.985 35.706,328.700 36.165 M377.424 37.083 C 377.772 37.633,378.175 38.289,378.320 38.541 C 378.465 38.792,378.638 38.998,378.705 38.999 C 378.844 39.000,377.414 36.711,377.039 36.333 C 376.903 36.196,377.076 36.533,377.424 37.083 M189.345 37.110 C 190.005 38.104,192.600 41.482,192.710 41.490 C 192.842 41.500,189.815 37.440,189.363 37.000 C 189.132 36.775,189.130 36.786,189.345 37.110 M107.686 38.097 C 107.697 38.548,107.767 39.142,107.840 39.417 C 107.922 39.722,107.939 39.429,107.882 38.667 C 107.776 37.231,107.657 36.885,107.686 38.097 M326.952 38.943 C 326.696 39.364,326.515 39.738,326.551 39.773 C 326.586 39.808,326.848 39.461,327.134 39.002 C 327.419 38.542,327.600 38.169,327.535 38.172 C 327.470 38.175,327.207 38.522,326.952 38.943 M294.694 38.833 C 294.677 39.154,294.627 39.717,294.582 40.083 L 294.501 40.750 294.676 40.193 C 294.772 39.886,294.823 39.324,294.788 38.943 C 294.728 38.288,294.723 38.282,294.694 38.833 M87.669 39.764 C 87.671 40.123,87.738 40.521,87.818 40.647 C 87.907 40.789,87.930 40.562,87.877 40.064 C 87.767 39.049,87.666 38.902,87.669 39.764 M213.887 39.667 C 214.775 40.947,217.000 43.829,217.000 43.699 C 217.000 43.565,214.763 40.586,213.908 39.583 L 213.482 39.083 213.887 39.667 M108.022 40.667 C 108.013 40.896,108.118 41.421,108.256 41.833 C 108.461 42.447,108.488 42.477,108.402 42.000 C 108.156 40.645,108.039 40.233,108.022 40.667 M158.929 40.762 C 158.867 41.006,158.849 41.238,158.889 41.277 C 158.928 41.317,159.010 41.149,159.071 40.905 C 159.133 40.661,159.151 40.429,159.111 40.389 C 159.072 40.350,158.990 40.518,158.929 40.762 M45.716 40.624 L 59.182 40.669 59.133 45.073 C 59.106 47.495,59.141 49.374,59.211 49.248 C 59.282 49.122,59.319 47.121,59.295 44.801 L 59.250 40.583 45.750 40.582 L 32.250 40.580 45.716 40.624 M380.248 41.437 C 380.589 41.976,380.978 42.529,381.115 42.667 C 381.251 42.804,381.046 42.409,380.661 41.789 C 380.275 41.169,379.885 40.615,379.794 40.559 C 379.703 40.503,379.908 40.898,380.248 41.437 M314.429 41.095 C 314.367 41.339,314.349 41.571,314.389 41.611 C 314.428 41.650,314.510 41.482,314.571 41.238 C 314.633 40.994,314.651 40.762,314.611 40.723 C 314.572 40.683,314.490 40.851,314.429 41.095 M32.072 44.833 C 32.072 47.079,32.096 47.998,32.125 46.875 C 32.153 45.752,32.153 43.915,32.125 42.792 C 32.096 41.669,32.072 42.587,32.072 44.833 M294.372 41.333 C 294.372 41.654,294.406 41.785,294.448 41.625 C 294.490 41.465,294.490 41.202,294.448 41.042 C 294.406 40.881,294.372 41.012,294.372 41.333 M138.595 41.595 C 138.534 41.839,138.516 42.071,138.555 42.111 C 138.594 42.150,138.677 41.982,138.738 41.738 C 138.799 41.494,138.817 41.262,138.778 41.223 C 138.739 41.183,138.657 41.351,138.595 41.595 M158.686 41.861 C 158.675 42.014,158.624 42.277,158.571 42.445 C 158.480 42.734,158.485 42.735,158.665 42.453 C 158.770 42.290,158.822 42.027,158.781 41.870 C 158.713 41.612,158.703 41.611,158.686 41.861 M192.952 41.875 C 193.040 41.990,193.578 42.702,194.147 43.458 C 194.716 44.215,195.225 44.833,195.278 44.833 C 195.331 44.833,195.302 44.740,195.214 44.625 C 195.126 44.510,194.579 43.798,194.000 43.042 C 193.420 42.285,192.912 41.667,192.869 41.667 C 192.827 41.667,192.865 41.760,192.952 41.875 M323.611 44.444 C 322.716 45.872,322.008 47.064,322.038 47.094 C 322.068 47.124,322.824 45.980,323.719 44.552 C 324.613 43.125,325.321 41.932,325.292 41.903 C 325.263 41.874,324.506 43.017,323.611 44.444 M88.172 42.167 C 88.172 42.304,88.244 42.529,88.333 42.667 C 88.477 42.889,88.495 42.889,88.495 42.667 C 88.495 42.529,88.422 42.304,88.333 42.167 C 88.190 41.944,88.172 41.944,88.172 42.167 M294.104 42.256 C 294.047 42.405,294.006 42.652,294.014 42.805 C 294.022 42.958,294.095 42.862,294.175 42.592 C 294.333 42.066,294.277 41.805,294.104 42.256 M314.130 42.333 C 314.073 42.563,313.979 42.938,313.921 43.167 C 313.855 43.426,313.915 43.366,314.080 43.009 C 314.226 42.693,314.320 42.318,314.289 42.175 C 314.254 42.013,314.195 42.072,314.130 42.333 M88.506 43.273 C 88.503 43.377,88.612 43.677,88.749 43.939 C 88.886 44.202,88.996 44.304,88.993 44.167 C 88.987 43.868,88.514 43.000,88.506 43.273 M137.852 44.019 C 137.730 44.294,137.666 44.555,137.709 44.598 C 137.753 44.642,137.884 44.448,138.000 44.167 C 138.276 43.501,138.141 43.366,137.852 44.019 M293.125 44.847 C 292.497 45.971,292.551 46.128,293.189 45.033 C 293.473 44.547,293.677 44.121,293.643 44.088 C 293.610 44.054,293.376 44.396,293.125 44.847 M157.536 45.119 C 157.338 45.548,157.202 45.925,157.234 45.956 C 157.265 45.987,157.454 45.664,157.655 45.238 C 157.855 44.812,157.991 44.435,157.957 44.401 C 157.923 44.367,157.733 44.690,157.536 45.119 M383.001 45.626 C 383.478 46.382,383.937 47.045,384.022 47.097 C 384.214 47.215,382.712 44.844,382.378 44.500 C 382.244 44.362,382.525 44.869,383.001 45.626 M313.036 45.286 C 312.571 46.297,312.665 46.391,313.167 45.417 C 313.379 45.003,313.518 44.629,313.474 44.585 C 313.430 44.541,313.233 44.857,313.036 45.286 M218.000 45.167 C 218.196 45.442,218.394 45.667,218.439 45.667 C 218.485 45.667,218.362 45.442,218.167 45.167 C 217.971 44.892,217.773 44.667,217.727 44.667 C 217.681 44.667,217.804 44.892,218.000 45.167 M334.901 45.042 C 334.584 45.416,334.584 45.416,334.930 45.125 C 335.253 44.853,336.156 44.833,348.653 44.833 L 362.030 44.833 362.358 45.208 L 362.686 45.583 362.407 45.125 L 362.128 44.667 348.673 44.667 L 335.218 44.667 334.901 45.042 M136.942 45.814 C 136.607 46.357,136.334 46.864,136.335 46.942 C 136.336 47.020,136.639 46.606,137.010 46.022 C 137.380 45.438,137.653 44.931,137.617 44.895 C 137.580 44.858,137.277 45.272,136.942 45.814 M89.333 45.411 C 89.333 45.711,91.558 49.167,91.751 49.167 C 91.789 49.167,91.404 48.548,90.896 47.792 C 90.389 47.035,89.871 46.173,89.745 45.875 C 89.548 45.407,89.333 45.165,89.333 45.411 M109.667 45.603 C 109.667 46.573,114.885 50.837,115.420 50.303 C 115.453 50.269,114.890 49.955,114.167 49.604 C 112.672 48.879,111.101 47.543,110.312 46.326 C 109.796 45.529,109.667 45.384,109.667 45.603 M333.826 46.705 C 332.792 48.365,332.799 48.519,333.837 46.946 C 334.310 46.229,334.668 45.613,334.633 45.577 C 334.598 45.542,334.234 46.049,333.826 46.705 M291.417 46.909 C 290.867 47.455,290.642 47.742,290.917 47.548 C 291.490 47.144,292.596 46.027,292.489 45.961 C 292.449 45.937,291.967 46.363,291.417 46.909 M156.772 46.708 L 156.472 47.250 156.816 46.833 C 157.120 46.464,157.256 46.167,157.119 46.167 C 157.093 46.167,156.937 46.410,156.772 46.708 M196.930 47.085 C 198.594 49.370,200.825 52.197,200.486 51.591 C 200.316 51.288,196.962 46.928,196.697 46.667 C 196.558 46.529,196.663 46.717,196.930 47.085 M135.702 47.514 C 135.493 47.772,134.743 48.370,134.036 48.842 C 132.623 49.785,132.368 49.988,133.000 49.667 C 134.124 49.097,136.355 47.285,136.153 47.106 C 136.115 47.072,135.912 47.255,135.702 47.514 M363.872 47.571 C 364.078 47.886,364.268 48.121,364.295 48.094 C 364.378 48.011,363.758 47.002,363.623 47.001 C 363.554 47.000,363.665 47.257,363.872 47.571 M155.791 48.221 C 155.176 49.148,152.957 51.492,151.667 52.580 C 150.972 53.165,150.966 53.177,151.583 52.738 C 152.989 51.739,155.493 49.098,156.218 47.852 C 156.699 47.023,156.434 47.253,155.791 48.221 M384.411 47.823 C 384.550 48.092,384.740 48.359,384.832 48.416 C 384.925 48.473,384.843 48.253,384.650 47.927 C 384.228 47.211,384.056 47.137,384.411 47.823 M311.041 48.629 C 310.743 49.062,310.237 49.706,309.916 50.060 C 309.596 50.414,309.335 50.751,309.337 50.810 C 309.341 50.955,310.696 49.418,311.336 48.542 C 311.621 48.152,311.793 47.835,311.719 47.838 C 311.644 47.840,311.339 48.196,311.041 48.629 M332.673 48.656 C 332.187 49.563,332.593 50.861,333.507 51.326 C 333.772 51.461,333.695 51.347,333.292 51.005 C 332.625 50.441,332.429 49.422,332.839 48.656 C 332.934 48.478,332.974 48.333,332.928 48.333 C 332.883 48.333,332.767 48.478,332.673 48.656 M169.976 49.083 C 169.923 49.358,169.828 49.733,169.763 49.917 C 169.698 50.100,169.767 50.039,169.916 49.782 C 170.065 49.525,170.161 49.150,170.129 48.949 C 170.081 48.645,170.055 48.667,169.976 49.083 M385.314 49.110 C 385.728 49.726,387.290 51.167,387.543 51.167 C 387.639 51.167,387.420 50.952,387.057 50.689 C 386.694 50.426,386.073 49.844,385.678 49.397 C 385.282 48.949,385.119 48.821,385.314 49.110 M14.189 49.342 C 14.177 49.575,14.078 49.855,13.969 49.964 C 13.861 50.072,13.817 50.206,13.873 50.261 C 14.041 50.430,14.359 49.673,14.283 49.283 C 14.220 48.956,14.210 48.962,14.189 49.342 M32.180 49.156 C 32.154 49.627,32.872 50.838,33.389 51.195 C 33.899 51.548,33.896 51.539,33.308 50.955 C 32.974 50.622,32.586 50.027,32.446 49.633 C 32.307 49.239,32.187 49.024,32.180 49.156 M285.833 49.333 L 285.417 49.467 285.833 49.472 C 286.063 49.474,286.400 49.412,286.583 49.333 L 286.917 49.190 286.583 49.195 C 286.400 49.198,286.063 49.260,285.833 49.333 M320.001 50.049 C 319.590 50.526,319.401 50.804,319.583 50.667 C 319.985 50.362,320.447 49.850,320.675 49.458 C 320.944 48.997,320.803 49.120,320.001 50.049 M92.417 49.980 C 93.737 51.422,95.453 52.915,96.708 53.716 C 97.593 54.279,97.155 53.855,96.042 53.068 C 95.423 52.631,94.204 51.594,93.333 50.763 C 92.462 49.932,92.050 49.580,92.417 49.980 M250.465 50.295 C 250.217 50.781,250.087 51.133,250.176 51.077 C 250.386 50.948,251.035 49.677,250.968 49.527 C 250.940 49.464,250.714 49.810,250.465 50.295 M283.875 49.619 C 284.127 49.658,284.540 49.658,284.792 49.619 C 285.044 49.581,284.837 49.550,284.333 49.550 C 283.829 49.550,283.623 49.581,283.875 49.619 M77.167 49.737 C 77.167 50.032,78.029 51.006,78.509 51.254 C 78.779 51.394,79.000 51.471,79.000 51.425 C 79.000 51.379,78.777 51.227,78.505 51.086 C 78.232 50.945,77.820 50.551,77.588 50.210 C 77.356 49.868,77.167 49.656,77.167 49.737 M281.792 49.787 C 282.090 49.824,282.577 49.824,282.875 49.787 C 283.173 49.750,282.929 49.720,282.333 49.720 C 281.737 49.720,281.494 49.750,281.792 49.787 M181.357 50.475 C 181.463 50.645,181.707 50.879,181.900 50.996 C 182.145 51.145,182.103 51.052,181.760 50.688 C 181.203 50.095,181.078 50.029,181.357 50.475 M364.370 50.503 C 364.260 50.679,363.888 50.973,363.543 51.155 C 363.199 51.336,362.977 51.489,363.050 51.493 C 363.469 51.516,364.842 50.453,364.645 50.257 C 364.604 50.215,364.481 50.326,364.370 50.503 M116.144 50.590 C 116.453 50.724,116.828 50.830,116.977 50.826 C 117.127 50.822,116.950 50.711,116.583 50.579 C 115.720 50.267,115.419 50.275,116.144 50.590 M13.167 51.025 C 12.846 51.306,12.734 51.460,12.919 51.367 C 13.223 51.213,13.978 50.491,13.817 50.507 C 13.780 50.510,13.487 50.744,13.167 51.025 M117.750 50.992 C 118.070 51.137,118.963 51.232,118.819 51.105 C 118.781 51.072,118.450 50.999,118.083 50.943 C 117.619 50.872,117.518 50.887,117.750 50.992 M128.500 51.000 C 127.930 51.120,127.928 51.123,128.417 51.133 C 128.692 51.139,129.067 51.079,129.250 51.000 C 129.651 50.828,129.318 50.828,128.500 51.000 M318.333 51.175 C 317.921 51.344,317.718 51.486,317.883 51.491 C 318.187 51.500,319.167 51.058,319.167 50.912 C 319.167 50.869,319.148 50.841,319.125 50.851 C 319.102 50.860,318.746 51.006,318.333 51.175 M57.500 51.250 C 57.271 51.381,57.158 51.488,57.250 51.488 C 57.342 51.488,57.604 51.381,57.833 51.250 C 58.063 51.119,58.175 51.012,58.083 51.012 C 57.992 51.012,57.729 51.119,57.500 51.250 M308.803 51.208 C 308.682 51.323,308.299 51.660,307.952 51.958 C 307.606 52.256,307.381 52.497,307.453 52.494 C 307.619 52.485,309.289 51.008,309.137 51.003 C 309.075 51.002,308.925 51.094,308.803 51.208 M119.934 51.365 C 120.764 51.513,126.013 51.511,127.000 51.363 C 127.412 51.301,125.845 51.250,123.517 51.250 C 121.189 51.250,119.577 51.302,119.934 51.365 M249.250 51.423 C 248.975 51.549,248.867 51.655,249.010 51.659 C 249.153 51.663,249.415 51.557,249.593 51.422 C 249.988 51.123,249.904 51.123,249.250 51.423 M55.958 51.618 C 56.165 51.657,56.502 51.657,56.708 51.618 C 56.915 51.578,56.746 51.545,56.333 51.545 C 55.921 51.545,55.752 51.578,55.958 51.618 M79.458 51.618 C 79.665 51.657,80.002 51.657,80.208 51.618 C 80.415 51.578,80.246 51.545,79.833 51.545 C 79.421 51.545,79.252 51.578,79.458 51.618 M166.792 51.618 C 166.998 51.657,167.335 51.657,167.542 51.618 C 167.748 51.578,167.579 51.545,167.167 51.545 C 166.754 51.545,166.585 51.578,166.792 51.618 M183.458 51.618 C 183.665 51.657,184.002 51.657,184.208 51.618 C 184.415 51.578,184.246 51.545,183.833 51.545 C 183.421 51.545,183.252 51.578,183.458 51.618 M316.460 51.618 C 316.668 51.658,316.968 51.656,317.127 51.615 C 317.286 51.573,317.117 51.540,316.750 51.542 C 316.383 51.544,316.253 51.578,316.460 51.618 M389.377 51.620 C 389.631 51.658,390.006 51.657,390.211 51.617 C 390.416 51.578,390.208 51.546,389.750 51.548 C 389.292 51.549,389.124 51.581,389.377 51.620 M10.250 51.833 L 9.417 51.948 10.167 51.957 C 10.579 51.962,11.104 51.907,11.333 51.833 C 11.852 51.667,11.461 51.667,10.250 51.833 M35.083 51.830 C 35.399 51.969,36.967 52.068,36.819 51.940 C 36.781 51.907,36.300 51.836,35.750 51.782 C 35.115 51.719,34.872 51.737,35.083 51.830 M53.833 51.833 L 53.083 51.950 53.833 51.958 C 54.246 51.963,54.771 51.907,55.000 51.833 L 55.417 51.700 55.000 51.708 C 54.771 51.713,54.246 51.769,53.833 51.833 M81.250 51.836 C 81.917 51.981,83.284 52.055,83.153 51.938 C 83.115 51.904,82.521 51.835,81.833 51.784 C 80.907 51.715,80.756 51.728,81.250 51.836 M164.667 51.833 L 163.917 51.950 164.667 51.955 C 165.079 51.958,165.642 51.903,165.917 51.833 L 166.417 51.706 165.917 51.711 C 165.642 51.714,165.079 51.769,164.667 51.833 M185.083 51.825 C 185.590 51.962,187.114 52.053,186.986 51.937 C 186.948 51.903,186.392 51.833,185.750 51.781 C 185.014 51.723,184.768 51.739,185.083 51.825 M247.333 51.833 L 246.750 51.956 247.333 51.961 C 247.654 51.964,248.104 51.907,248.333 51.833 L 248.750 51.700 248.333 51.705 C 248.104 51.708,247.654 51.766,247.333 51.833 M314.750 51.833 L 314.083 51.953 314.667 51.965 C 314.987 51.971,315.400 51.912,315.583 51.833 C 315.976 51.665,315.693 51.665,314.750 51.833 M335.167 51.830 C 335.578 51.965,336.954 52.056,336.819 51.940 C 336.781 51.907,336.300 51.838,335.750 51.787 C 335.129 51.729,334.908 51.745,335.167 51.830 M360.500 51.833 L 359.750 51.950 360.417 51.958 C 360.783 51.963,361.271 51.907,361.500 51.833 C 362.026 51.665,361.584 51.665,360.500 51.833 M391.000 51.825 C 391.411 51.965,392.788 52.059,392.653 51.938 C 392.615 51.903,392.133 51.832,391.583 51.779 C 390.936 51.717,390.730 51.733,391.000 51.825 M7.167 52.167 C 6.724 52.260,6.684 52.292,7.000 52.302 C 7.229 52.309,7.717 52.252,8.083 52.176 C 8.639 52.061,8.667 52.039,8.250 52.041 C 7.975 52.043,7.487 52.099,7.167 52.167 M38.250 52.167 C 38.525 52.237,39.050 52.293,39.417 52.293 L 40.083 52.292 39.333 52.158 C 38.315 51.977,37.529 51.983,38.250 52.167 M50.917 52.122 C 50.733 52.168,50.528 52.290,50.461 52.394 C 50.314 52.621,50.290 57.694,50.434 58.070 C 50.589 58.474,85.577 58.474,85.732 58.070 C 85.889 57.662,85.847 52.612,85.685 52.357 C 85.606 52.232,85.176 52.103,84.729 52.070 L 83.917 52.010 84.655 52.168 C 85.699 52.392,85.680 52.328,85.629 55.346 L 85.583 58.083 68.083 58.083 L 50.583 58.083 50.537 55.346 C 50.487 52.326,50.468 52.386,51.512 52.181 C 52.059 52.074,52.120 52.037,51.750 52.038 C 51.475 52.038,51.100 52.076,50.917 52.122 M161.667 52.216 C 161.200 52.451,160.926 57.239,161.335 58.004 C 161.510 58.331,161.690 58.335,175.548 58.293 L 189.583 58.250 189.629 55.289 L 189.674 52.328 189.243 52.164 C 189.006 52.074,188.573 52.008,188.281 52.018 C 187.815 52.034,187.840 52.054,188.488 52.181 C 189.532 52.386,189.513 52.326,189.463 55.346 L 189.417 58.083 175.602 58.126 C 165.533 58.157,161.725 58.118,161.560 57.981 C 161.386 57.837,161.333 57.176,161.333 55.159 L 161.333 52.526 161.875 52.357 C 162.173 52.264,162.567 52.155,162.750 52.114 C 162.972 52.064,162.917 52.033,162.583 52.022 C 162.308 52.013,161.896 52.100,161.667 52.216 M200.981 52.473 C 201.166 52.733,201.450 53.052,201.611 53.181 C 201.772 53.311,201.650 53.098,201.340 52.708 C 200.705 51.908,200.469 51.754,200.981 52.473 M244.500 52.167 C 243.938 52.285,243.935 52.290,244.417 52.292 C 244.692 52.293,245.142 52.237,245.417 52.167 C 246.108 51.991,245.336 51.991,244.500 52.167 M312.167 52.218 L 311.583 52.417 311.536 55.000 C 311.509 56.421,311.530 57.752,311.580 57.958 L 311.673 58.333 325.753 58.333 C 333.497 58.333,339.833 58.277,339.833 58.208 C 339.833 58.140,333.515 58.083,325.792 58.083 L 311.750 58.083 311.704 55.296 L 311.659 52.508 312.121 52.404 C 313.348 52.125,313.610 52.030,313.167 52.024 C 312.938 52.021,312.487 52.108,312.167 52.218 M338.333 52.176 C 338.746 52.269,339.250 52.380,339.454 52.424 C 339.817 52.502,339.826 52.567,339.875 55.210 L 339.926 57.917 339.963 55.214 C 340.005 52.125,340.065 52.252,338.487 52.097 L 337.583 52.009 338.333 52.176 M357.583 52.167 L 357.083 52.294 357.583 52.294 C 357.858 52.294,358.308 52.237,358.583 52.167 L 359.083 52.039 358.583 52.039 C 358.308 52.039,357.858 52.097,357.583 52.167 M393.974 52.166 C 394.832 52.369,394.845 52.419,394.796 55.346 L 394.750 58.083 375.878 58.126 L 357.007 58.168 356.911 57.788 C 356.859 57.579,356.839 56.273,356.866 54.886 C 356.894 53.499,356.860 52.399,356.792 52.442 C 356.624 52.546,356.636 57.860,356.804 58.126 C 356.910 58.292,360.845 58.326,375.927 58.292 L 394.917 58.250 394.962 55.289 L 395.008 52.328 394.576 52.164 C 394.339 52.074,393.981 52.008,393.781 52.017 C 393.536 52.029,393.599 52.077,393.974 52.166 M40.629 52.458 C 40.790 52.572,40.831 53.273,40.796 55.346 L 40.750 58.083 23.208 58.083 C 13.560 58.083,5.667 58.140,5.667 58.209 C 5.667 58.278,13.598 58.316,23.292 58.292 L 40.917 58.250 40.917 55.347 C 40.917 52.908,40.877 52.434,40.667 52.376 C 40.477 52.324,40.468 52.344,40.629 52.458 M242.350 52.564 C 242.218 52.722,242.173 53.652,242.204 55.522 L 242.250 58.250 265.614 58.292 C 278.464 58.315,289.601 58.278,290.364 58.209 C 291.126 58.140,280.650 58.083,267.083 58.083 L 242.417 58.083 242.369 55.667 C 242.310 52.688,242.341 52.541,243.042 52.454 L 243.583 52.387 243.062 52.360 C 242.775 52.345,242.455 52.437,242.350 52.564 M306.740 52.911 C 306.562 53.046,306.492 53.156,306.583 53.156 C 306.675 53.156,306.896 53.046,307.074 52.911 C 307.251 52.777,307.322 52.667,307.230 52.667 C 307.139 52.667,306.918 52.777,306.740 52.911 M150.250 53.598 L 149.750 54.028 150.292 53.669 C 150.590 53.472,150.833 53.278,150.833 53.239 C 150.833 53.114,150.763 53.157,150.250 53.598 M305.750 53.598 L 305.250 54.028 305.792 53.669 C 306.090 53.472,306.333 53.278,306.333 53.239 C 306.333 53.114,306.263 53.157,305.750 53.598 M202.167 54.000 C 202.362 54.275,202.560 54.500,202.606 54.500 C 202.652 54.500,202.529 54.275,202.333 54.000 C 202.138 53.725,201.940 53.500,201.894 53.500 C 201.848 53.500,201.971 53.725,202.167 54.000 M148.838 54.425 C 148.520 54.650,148.309 54.833,148.370 54.833 C 148.516 54.833,149.667 54.153,149.667 54.067 C 149.667 53.917,149.386 54.038,148.838 54.425 M304.593 54.255 C 304.415 54.390,304.345 54.500,304.436 54.500 C 304.528 54.500,304.749 54.390,304.926 54.255 C 305.104 54.121,305.175 54.011,305.083 54.011 C 304.992 54.011,304.771 54.121,304.593 54.255 M98.000 54.509 C 98.434 54.804,99.167 55.178,99.167 55.104 C 99.167 55.012,98.016 54.333,97.865 54.336 C 97.802 54.337,97.862 54.415,98.000 54.509 M203.427 55.682 C 203.879 56.287,204.278 56.759,204.312 56.732 C 204.398 56.663,203.233 55.094,202.887 54.814 C 202.731 54.687,202.974 55.078,203.427 55.682 M147.000 55.417 C 146.771 55.548,146.658 55.655,146.750 55.655 C 146.842 55.655,147.104 55.548,147.333 55.417 C 147.563 55.286,147.675 55.178,147.583 55.178 C 147.492 55.178,147.229 55.286,147.000 55.417 M302.167 55.431 C 301.603 55.743,302.004 55.731,302.606 55.418 C 302.869 55.281,302.971 55.176,302.833 55.184 C 302.696 55.192,302.396 55.303,302.167 55.431 M100.333 55.750 C 100.563 55.881,100.825 55.988,100.917 55.988 C 101.008 55.988,100.896 55.881,100.667 55.750 C 100.438 55.619,100.175 55.512,100.083 55.512 C 99.992 55.512,100.104 55.619,100.333 55.750 M300.000 56.260 C 299.629 56.401,299.538 56.482,299.750 56.485 C 299.933 56.487,300.271 56.381,300.500 56.250 C 301.009 55.959,300.784 55.964,300.000 56.260 M102.311 56.590 C 102.619 56.724,102.919 56.831,102.977 56.827 C 103.194 56.815,102.240 56.345,102.000 56.346 C 101.862 56.346,102.002 56.456,102.311 56.590 M144.333 56.583 C 143.789 56.894,143.979 56.898,144.689 56.590 C 144.998 56.456,145.137 56.346,145.000 56.346 C 144.862 56.345,144.563 56.452,144.333 56.583 M297.500 57.000 C 297.278 57.144,297.278 57.162,297.500 57.162 C 297.637 57.162,297.862 57.089,298.000 57.000 C 298.222 56.856,298.222 56.838,298.000 56.838 C 297.862 56.838,297.637 56.911,297.500 57.000 M104.644 57.423 C 104.953 57.557,105.328 57.663,105.477 57.659 C 105.627 57.655,105.450 57.544,105.083 57.412 C 104.220 57.101,103.919 57.108,104.644 57.423 M204.833 57.342 C 205.268 57.638,206.000 58.011,206.000 57.937 C 206.000 57.845,204.850 57.166,204.699 57.169 C 204.635 57.171,204.696 57.248,204.833 57.342 M296.134 57.255 C 296.086 57.303,295.717 57.414,295.315 57.500 C 294.584 57.657,294.583 57.657,295.250 57.580 C 296.484 57.436,297.343 57.208,296.736 57.186 C 296.453 57.175,296.183 57.206,296.134 57.255 M106.000 57.833 C 106.138 57.922,106.362 57.995,106.500 57.995 C 106.722 57.995,106.722 57.977,106.500 57.833 C 106.362 57.744,106.138 57.672,106.000 57.672 C 105.778 57.672,105.778 57.690,106.000 57.833 M293.000 57.833 L 292.583 57.967 293.000 57.964 C 293.229 57.962,293.642 57.903,293.917 57.833 L 294.417 57.706 293.917 57.703 C 293.642 57.701,293.229 57.760,293.000 57.833 M107.333 58.167 C 107.903 58.349,108.341 58.349,107.917 58.167 C 107.733 58.088,107.433 58.026,107.250 58.028 C 106.982 58.032,106.998 58.059,107.333 58.167 M138.917 58.164 C 138.733 58.242,138.113 58.398,137.538 58.510 C 136.962 58.622,136.523 58.745,136.562 58.784 C 136.637 58.859,138.761 58.437,139.583 58.183 C 140.047 58.040,140.053 58.028,139.667 58.026 C 139.438 58.024,139.100 58.086,138.917 58.164 M109.583 58.667 C 109.767 58.745,110.067 58.808,110.250 58.805 C 110.518 58.801,110.502 58.774,110.167 58.667 C 109.597 58.484,109.159 58.484,109.583 58.667 M111.417 59.010 C 112.261 59.184,112.943 59.176,112.250 59.000 C 111.975 58.930,111.525 58.873,111.250 58.872 C 110.830 58.872,110.856 58.894,111.417 59.010 M134.833 59.008 C 134.552 59.104,134.688 59.118,135.250 59.054 C 135.708 59.001,136.115 58.929,136.153 58.895 C 136.284 58.778,135.250 58.867,134.833 59.008 M113.211 59.286 C 113.464 59.325,113.839 59.324,114.044 59.284 C 114.249 59.244,114.042 59.213,113.583 59.214 C 113.125 59.216,112.957 59.248,113.211 59.286 M133.044 59.286 C 133.297 59.325,133.672 59.324,133.877 59.284 C 134.082 59.244,133.875 59.213,133.417 59.214 C 132.958 59.216,132.791 59.248,133.044 59.286 M115.250 59.504 C 115.913 59.647,117.452 59.722,117.319 59.606 C 117.281 59.572,116.650 59.504,115.917 59.453 C 114.959 59.387,114.771 59.401,115.250 59.504 M130.667 59.500 L 129.750 59.612 130.500 59.630 C 130.912 59.640,131.550 59.585,131.917 59.510 C 132.758 59.335,132.053 59.330,130.667 59.500 M121.125 59.791 C 122.523 59.819,124.810 59.819,126.208 59.791 C 127.606 59.763,126.462 59.741,123.667 59.741 C 120.871 59.741,119.727 59.763,121.125 59.791 M34.324 79.991 C 32.138 80.654,31.417 83.370,32.979 85.057 C 34.697 86.913,37.908 85.987,38.245 83.537 C 38.575 81.137,36.558 79.313,34.324 79.991 M152.012 79.947 C 149.999 80.364,148.978 83.181,150.263 84.770 C 152.177 87.134,155.872 85.965,155.872 82.996 C 155.872 80.948,154.066 79.521,152.012 79.947 M317.092 79.955 C 315.383 80.389,314.367 82.517,315.070 84.188 C 315.924 86.219,318.851 86.683,320.292 85.017 C 322.288 82.709,320.069 79.197,317.092 79.955 M192.908 80.147 C 192.821 80.229,192.000 80.686,191.083 81.164 C 190.167 81.641,189.323 82.110,189.207 82.204 C 189.042 82.340,189.007 85.673,189.041 98.229 L 189.083 114.083 191.417 114.083 L 193.750 114.083 193.792 97.042 L 193.835 80.000 193.451 80.000 C 193.240 80.000,192.995 80.066,192.908 80.147 M222.750 80.758 C 221.127 81.058,220.544 81.227,219.583 81.671 C 218.039 82.386,215.987 84.088,215.743 84.856 C 215.689 85.027,215.586 85.167,215.514 85.167 C 215.443 85.167,215.252 85.485,215.092 85.875 C 214.931 86.265,214.735 86.709,214.656 86.863 C 214.076 87.993,214.169 91.625,214.821 93.343 C 215.707 95.672,218.363 97.611,222.333 98.825 C 224.995 99.638,228.136 100.721,228.802 101.055 C 230.420 101.867,230.672 102.037,231.232 102.691 C 233.135 104.914,231.937 108.373,228.917 109.374 C 225.275 110.581,221.099 109.720,217.845 107.092 L 216.567 106.061 214.867 107.659 C 212.892 109.515,212.938 109.378,213.958 110.349 C 218.317 114.497,224.573 115.857,230.500 113.945 C 238.686 111.303,239.651 100.270,232.000 96.797 C 229.772 95.786,228.629 95.358,226.083 94.584 C 224.487 94.099,223.432 93.727,222.961 93.483 C 222.801 93.401,222.593 93.333,222.498 93.333 C 221.167 93.333,219.333 91.130,219.333 89.529 C 219.333 84.786,227.347 83.819,231.949 88.006 L 232.536 88.541 234.185 86.899 C 236.068 85.022,236.039 85.096,235.208 84.309 C 232.124 81.389,227.092 79.954,222.750 80.758 M5.727 81.250 C 5.693 81.342,5.683 88.767,5.707 97.750 L 5.750 114.083 8.070 114.130 C 9.815 114.165,10.425 114.124,10.526 113.963 C 10.601 113.846,10.663 110.544,10.664 106.625 L 10.667 99.500 15.153 99.500 C 20.754 99.500,20.167 99.793,20.167 97.002 C 20.167 94.214,20.763 94.505,15.042 94.502 L 10.667 94.500 10.667 90.250 L 10.667 86.000 11.125 85.995 C 11.377 85.992,14.949 85.994,19.062 85.999 C 24.448 86.005,26.604 85.954,26.770 85.817 C 27.084 85.556,27.104 81.417,26.792 81.224 C 26.470 81.025,5.803 81.051,5.727 81.250 M54.167 89.084 C 52.948 89.418,51.684 90.060,50.865 90.761 C 50.008 91.495,50.025 91.502,49.967 90.375 L 49.917 89.417 47.542 89.370 L 45.167 89.324 45.167 101.750 L 45.167 114.176 47.542 114.130 L 49.917 114.083 50.011 106.000 C 50.119 96.671,50.181 96.261,51.732 94.587 C 53.557 92.618,57.815 93.025,59.224 95.305 C 60.191 96.870,60.212 97.070,60.318 105.917 L 60.417 114.083 62.750 114.083 L 65.083 114.083 65.078 105.583 C 65.072 95.430,64.983 94.809,63.145 92.083 C 61.423 89.529,57.422 88.192,54.167 89.084 M78.333 89.157 C 76.106 89.649,73.743 90.608,73.556 91.096 C 73.433 91.414,75.070 94.407,75.402 94.472 C 75.558 94.503,76.000 94.381,76.384 94.202 C 78.541 93.197,82.654 92.888,84.188 93.616 C 85.736 94.351,86.500 95.764,86.500 97.891 C 86.500 99.135,86.468 99.184,85.779 98.979 C 79.901 97.232,73.722 98.870,71.864 102.667 C 67.733 111.107,77.709 118.472,85.403 112.662 C 86.515 111.823,86.475 111.810,86.534 113.042 L 86.583 114.083 88.833 114.083 L 91.083 114.083 91.126 105.004 C 91.179 93.884,91.124 93.501,89.149 91.413 C 87.070 89.216,82.440 88.250,78.333 89.157 M107.917 88.901 C 107.825 88.936,107.320 89.091,106.795 89.246 C 105.839 89.529,104.118 90.531,103.688 91.055 C 103.292 91.537,103.167 91.364,103.167 90.333 L 103.167 89.333 100.750 89.333 L 98.333 89.333 98.333 101.755 L 98.333 114.176 100.708 114.130 L 103.083 114.083 103.175 105.917 C 103.269 97.559,103.292 97.272,103.991 95.800 C 105.466 92.691,110.686 92.448,112.421 95.408 C 113.238 96.803,113.238 96.805,113.330 105.667 L 113.417 114.083 115.792 114.130 L 118.167 114.176 118.161 105.546 C 118.156 98.922,118.103 96.704,117.932 96.000 C 116.771 91.233,114.262 89.030,109.833 88.893 C 108.871 88.863,108.008 88.867,107.917 88.901 M133.082 88.991 C 127.397 90.219,124.246 94.832,124.252 101.917 C 124.255 104.519,124.325 105.033,124.944 107.000 C 127.426 114.881,136.593 117.386,142.292 111.739 C 143.953 110.092,143.945 110.247,142.458 108.720 C 140.734 106.949,140.847 106.972,139.571 108.141 C 136.191 111.238,131.769 110.563,130.047 106.688 C 128.517 103.245,128.940 97.701,130.910 95.370 C 133.212 92.645,136.957 92.856,140.401 95.905 C 141.052 96.481,140.986 96.514,142.277 94.965 C 144.024 92.869,143.936 93.114,143.222 92.324 C 141.999 90.971,140.228 89.901,138.000 89.169 C 137.249 88.923,133.951 88.804,133.082 88.991 M170.083 88.929 C 169.900 88.972,169.300 89.089,168.750 89.190 C 167.073 89.498,164.369 90.538,164.095 90.981 C 163.970 91.184,165.350 94.168,165.706 94.463 C 165.860 94.591,166.155 94.531,166.778 94.245 C 169.034 93.208,173.335 92.876,174.774 93.628 C 176.276 94.412,177.000 95.814,177.000 97.937 L 177.000 99.035 176.375 98.945 C 176.031 98.895,175.375 98.770,174.917 98.666 C 168.281 97.158,162.380 99.944,161.647 104.929 C 160.437 113.151,169.477 117.935,176.054 112.552 C 176.804 111.938,176.977 112.039,177.033 113.125 L 177.083 114.083 179.083 114.132 C 180.183 114.158,181.235 114.142,181.419 114.097 C 181.775 114.008,181.924 98.016,181.593 95.417 C 181.217 92.461,179.066 90.154,175.833 89.240 C 174.944 88.988,170.795 88.764,170.083 88.929 M250.915 89.003 C 247.900 89.602,245.299 91.516,243.937 94.136 C 243.302 95.358,243.179 95.682,242.746 97.276 C 242.142 99.498,242.091 104.213,242.654 105.833 C 242.734 106.063,242.932 106.700,243.094 107.250 C 245.216 114.449,254.232 117.147,260.443 112.441 C 261.633 111.540,261.634 111.548,260.110 109.940 C 258.545 108.288,258.697 108.348,257.750 109.000 C 257.350 109.275,256.973 109.500,256.912 109.500 C 256.851 109.500,256.564 109.603,256.275 109.729 C 252.514 111.370,248.661 109.689,247.537 105.917 C 247.139 104.581,246.987 103.822,247.086 103.663 C 247.149 103.560,250.213 103.500,255.343 103.500 L 263.500 103.500 263.500 101.086 C 263.500 98.578,263.400 97.904,262.723 95.870 C 261.800 93.098,258.816 89.667,257.327 89.667 C 257.184 89.667,256.995 89.600,256.908 89.518 C 256.352 88.995,252.583 88.671,250.915 89.003 M279.083 88.910 C 278.992 88.937,278.579 89.058,278.167 89.179 C 277.308 89.429,275.928 90.254,275.275 90.906 C 274.687 91.495,274.500 91.335,274.500 90.240 L 274.500 89.333 272.082 89.333 L 269.665 89.333 269.707 101.708 L 269.750 114.083 272.125 114.130 L 274.500 114.176 274.500 106.769 C 274.500 98.860,274.591 97.699,275.338 96.111 C 276.370 93.916,279.094 93.069,282.040 94.027 C 283.386 94.466,283.242 94.587,283.776 92.566 C 284.555 89.614,284.540 89.568,282.656 89.103 C 281.713 88.871,279.596 88.756,279.083 88.910 M334.961 89.145 C 330.017 90.527,327.078 94.671,326.731 100.750 C 326.470 105.319,328.023 109.947,330.533 112.076 C 334.948 115.823,340.744 115.689,344.792 111.747 C 346.468 110.114,346.468 110.269,344.795 108.564 C 343.162 106.900,343.396 106.934,342.031 108.165 C 338.207 111.616,333.269 110.218,332.029 105.333 C 329.683 96.087,335.775 90.293,342.383 95.486 C 343.651 96.483,343.486 96.544,345.227 94.430 L 346.315 93.109 345.985 92.646 C 343.957 89.797,338.654 88.113,334.961 89.145 M359.917 88.900 C 359.825 88.934,359.300 89.058,358.750 89.175 C 348.715 91.304,347.564 109.439,357.182 113.881 C 360.781 115.543,366.382 114.738,369.178 112.156 L 369.869 111.518 369.530 111.051 C 369.344 110.794,368.705 110.105,368.111 109.520 L 367.030 108.456 366.557 108.784 C 362.505 111.590,357.429 110.396,356.032 106.308 C 355.601 105.049,355.328 103.772,355.460 103.640 C 355.535 103.565,359.269 103.484,363.757 103.460 L 371.917 103.417 371.965 101.500 C 372.115 95.492,369.485 90.968,364.917 89.374 C 363.842 88.999,360.497 88.682,359.917 88.900 M383.583 88.941 C 379.023 89.891,377.257 91.767,377.252 95.667 C 377.248 99.584,378.944 101.393,384.583 103.486 C 389.423 105.282,391.004 106.875,389.841 108.783 C 388.477 111.020,382.444 110.758,378.974 108.312 C 378.369 107.885,378.290 107.909,377.914 108.625 C 377.733 108.969,377.297 109.715,376.946 110.284 C 376.259 111.394,376.244 111.786,376.875 112.108 C 377.081 112.213,377.745 112.561,378.350 112.882 C 383.797 115.765,390.801 115.249,393.625 111.755 C 394.015 111.274,394.333 110.761,394.333 110.616 C 394.333 110.471,394.398 110.313,394.476 110.265 C 395.429 109.676,394.998 104.869,393.856 103.340 C 393.247 102.523,390.869 100.667,390.434 100.667 C 390.384 100.667,389.909 100.471,389.380 100.233 C 387.992 99.608,387.887 99.563,386.417 98.991 C 382.718 97.549,381.475 96.239,382.253 94.601 C 383.180 92.647,388.183 92.793,391.193 94.863 C 391.703 95.213,392.043 95.138,392.305 94.616 C 392.662 93.903,393.531 92.414,393.681 92.258 C 393.955 91.973,393.841 91.418,393.458 91.177 C 390.642 89.400,386.205 88.396,383.583 88.941 M32.944 89.444 C 32.792 89.597,32.808 113.869,32.961 114.108 C 33.059 114.262,36.485 114.317,37.542 114.183 C 37.610 114.174,37.667 108.579,37.667 101.750 L 37.667 89.333 35.361 89.333 C 34.093 89.333,33.006 89.383,32.944 89.444 M150.333 101.750 C 150.333 111.560,150.377 114.172,150.542 114.190 C 151.620 114.309,154.939 114.239,155.039 114.094 C 155.106 113.997,155.163 108.385,155.164 101.625 L 155.167 89.333 152.750 89.333 L 150.333 89.333 150.333 101.750 M287.667 89.577 C 287.667 89.711,287.823 90.255,288.014 90.785 C 288.415 91.897,288.981 93.478,289.597 95.208 C 289.833 95.873,290.088 96.567,290.162 96.750 C 290.237 96.933,290.424 97.458,290.579 97.917 C 290.733 98.375,290.923 98.900,291.000 99.083 C 291.077 99.267,291.267 99.792,291.421 100.250 C 291.576 100.708,291.765 101.233,291.843 101.417 C 291.920 101.600,292.097 102.087,292.235 102.500 C 292.374 102.912,292.797 104.112,293.174 105.167 C 293.552 106.221,293.923 107.271,293.998 107.500 C 294.074 107.729,294.448 108.779,294.829 109.833 C 295.210 110.888,295.677 112.200,295.866 112.750 C 296.376 114.230,296.244 114.167,298.833 114.167 C 301.520 114.167,301.294 114.313,302.073 112.065 C 302.387 111.159,302.959 109.554,303.344 108.500 C 303.729 107.446,304.080 106.376,304.124 106.123 C 304.169 105.870,304.271 105.622,304.353 105.571 C 304.434 105.521,304.500 105.354,304.501 105.198 C 304.502 105.043,304.614 104.702,304.751 104.439 C 304.888 104.177,305.000 103.857,305.000 103.729 C 305.000 103.600,305.073 103.365,305.162 103.206 C 305.306 102.948,305.940 101.162,306.832 98.500 C 307.001 97.996,307.450 96.721,307.831 95.667 C 309.936 89.833,310.038 89.504,309.775 89.403 C 309.661 89.359,308.521 89.344,307.242 89.370 L 304.917 89.417 304.521 90.667 C 304.304 91.354,304.069 92.067,304.000 92.250 C 303.931 92.433,303.669 93.258,303.418 94.083 C 303.167 94.908,302.790 96.108,302.581 96.750 C 302.371 97.392,301.888 98.929,301.506 100.167 C 301.125 101.404,300.748 102.604,300.670 102.833 C 300.591 103.063,300.326 103.925,300.081 104.750 C 299.836 105.575,299.573 106.438,299.497 106.667 C 299.421 106.896,299.313 107.361,299.256 107.701 C 299.138 108.420,298.725 108.414,298.568 107.690 C 298.516 107.448,298.412 107.063,298.337 106.833 C 298.262 106.604,297.885 105.404,297.500 104.167 C 297.116 102.929,296.743 101.767,296.673 101.583 C 296.603 101.400,296.416 100.837,296.259 100.333 C 296.101 99.829,295.910 99.267,295.834 99.083 C 295.758 98.900,295.004 96.631,294.157 94.042 L 292.617 89.333 290.142 89.333 C 288.081 89.333,287.667 89.374,287.667 89.577 M315.611 89.444 C 315.459 89.597,315.475 113.874,315.628 114.087 C 315.733 114.233,317.669 114.281,319.792 114.190 L 320.333 114.167 320.333 101.750 L 320.333 89.333 318.028 89.333 C 316.760 89.333,315.672 89.383,315.611 89.444 M255.231 93.659 C 256.852 94.353,257.995 95.884,258.493 98.028 C 258.864 99.619,259.290 99.511,252.879 99.461 L 247.250 99.417 247.299 98.667 C 247.563 94.661,251.609 92.106,255.231 93.659 M363.742 93.754 C 365.546 94.607,366.996 96.923,366.999 98.958 L 367.000 99.500 361.514 99.500 C 354.728 99.500,355.269 99.711,355.961 97.333 C 356.949 93.943,360.596 92.265,363.742 93.754 M84.576 102.939 C 85.122 103.079,85.778 103.302,86.034 103.434 L 86.500 103.675 86.500 105.454 L 86.500 107.234 85.542 108.164 C 82.320 111.290,76.975 111.025,75.856 107.683 C 75.055 105.291,76.658 102.951,79.333 102.607 C 80.364 102.475,83.552 102.677,84.576 102.939 M174.833 102.864 C 175.154 102.959,175.754 103.162,176.167 103.315 L 176.917 103.594 176.964 105.408 L 177.012 107.222 176.048 108.156 C 173.721 110.409,170.454 110.995,167.884 109.619 C 167.282 109.297,166.500 108.355,166.500 107.952 C 166.500 107.806,166.425 107.640,166.333 107.583 C 165.743 107.218,166.270 104.781,167.127 103.913 C 168.367 102.658,172.309 102.122,174.833 102.864 ",
              stroke: "none",
              fill: "#948c8c",
              fillRule: "evenodd"
          })), Gi || (Gi = u.createElement("path", {
              id: "hondaFinancialServices",
              d: "M0.000 63.917 L 0.000 127.833 200.000 127.833 L 400.000 127.833 400.000 63.917 L 400.000 0.000 200.000 0.000 L 0.000 0.000 0.000 63.917 M130.095 12.749 C 133.484 13.067,136.996 13.585,138.750 14.025 C 141.545 14.726,141.632 14.751,143.500 15.419 C 146.051 16.331,148.247 17.413,150.206 18.724 C 152.741 20.420,153.464 21.090,155.744 23.853 C 156.208 24.414,157.667 26.973,157.667 27.224 C 157.667 27.339,157.732 27.505,157.811 27.592 C 157.891 27.679,158.086 28.125,158.246 28.583 C 158.405 29.042,158.597 29.567,158.673 29.750 C 159.027 30.608,159.477 34.067,159.489 36.030 C 159.552 46.202,153.724 53.616,142.833 57.216 C 139.180 58.424,137.700 58.740,132.000 59.531 C 129.806 59.835,117.586 59.834,115.167 59.530 C 112.813 59.234,110.414 58.864,109.500 58.657 C 106.008 57.865,105.236 57.652,103.317 56.955 C 97.882 54.979,93.784 52.092,91.123 48.362 C 90.182 47.045,89.333 45.607,89.333 45.332 C 89.333 45.246,89.155 44.780,88.938 44.296 C 86.934 39.838,86.936 32.547,88.942 28.037 C 89.157 27.553,89.333 27.083,89.333 26.993 C 89.333 26.605,91.572 23.317,92.599 22.195 C 94.573 20.040,96.754 18.479,100.000 16.899 C 101.812 16.016,101.823 16.012,103.500 15.416 C 105.377 14.749,105.604 14.683,108.250 14.026 C 110.029 13.585,113.264 13.099,116.250 12.825 C 117.350 12.724,118.400 12.620,118.583 12.593 C 119.755 12.425,127.804 12.534,130.095 12.749 M40.796 14.307 C 40.957 14.409,40.997 15.132,40.962 17.339 L 40.917 20.237 40.333 20.361 C 40.012 20.430,39.000 20.564,38.083 20.660 C 32.239 21.270,32.167 21.358,32.167 27.836 L 32.167 31.667 45.667 31.667 L 59.167 31.667 59.167 27.696 C 59.167 21.056,59.428 21.300,51.333 20.357 L 50.417 20.250 50.417 17.250 L 50.417 14.250 68.083 14.250 L 85.750 14.250 85.750 17.249 L 85.750 20.248 84.333 20.449 C 83.554 20.560,81.995 20.763,80.870 20.901 C 78.548 21.185,78.061 21.421,77.455 22.556 L 77.083 23.250 77.083 36.333 L 77.083 49.417 77.479 50.052 C 78.179 51.180,78.756 51.406,81.750 51.728 C 85.586 52.141,85.543 52.135,85.692 52.369 C 85.849 52.616,85.884 57.673,85.732 58.070 C 85.577 58.474,50.589 58.474,50.434 58.070 C 50.281 57.669,50.319 52.615,50.477 52.365 C 50.564 52.228,51.236 52.086,52.266 51.988 C 59.260 51.320,59.060 51.523,59.133 45.042 L 59.182 40.667 45.674 40.667 L 32.167 40.667 32.167 44.720 C 32.167 51.262,32.342 51.487,37.833 52.004 C 38.887 52.103,40.012 52.240,40.333 52.307 L 40.917 52.430 40.917 55.340 L 40.917 58.250 23.292 58.292 L 5.667 58.335 5.667 55.361 L 5.667 52.387 7.042 52.199 C 7.798 52.095,8.904 51.966,9.500 51.911 C 12.318 51.653,13.313 51.254,13.945 50.126 C 14.232 49.616,14.253 48.823,14.301 37.000 C 14.361 22.385,14.389 22.880,13.436 21.927 L 12.734 21.225 10.575 20.938 C 9.388 20.781,7.817 20.561,7.083 20.451 L 5.750 20.250 5.704 17.423 C 5.679 15.868,5.695 14.499,5.741 14.381 C 5.835 14.134,40.408 14.061,40.796 14.307 M193.775 14.447 C 194.982 14.827,195.553 15.340,197.212 17.537 C 197.993 18.571,198.958 19.837,199.358 20.352 C 200.789 22.196,201.876 23.638,203.363 25.667 C 203.934 26.446,204.446 27.121,204.502 27.167 C 204.557 27.212,205.682 28.675,207.000 30.417 C 208.319 32.158,210.110 34.521,210.980 35.667 C 211.850 36.813,213.386 38.837,214.394 40.167 C 215.402 41.496,216.402 42.808,216.616 43.083 C 217.121 43.732,217.139 43.756,217.919 44.833 C 218.851 46.121,219.040 46.328,219.196 46.232 C 219.492 46.049,219.360 24.075,219.058 23.295 C 218.498 21.848,217.732 21.378,215.588 21.166 C 212.863 20.896,210.911 20.612,210.708 20.454 C 210.272 20.115,210.426 14.358,210.875 14.249 C 211.081 14.199,217.438 14.179,225.000 14.204 L 238.750 14.250 238.750 17.319 L 238.750 20.389 238.333 20.508 C 238.104 20.574,236.717 20.758,235.250 20.917 C 232.190 21.248,231.299 21.510,230.761 22.236 C 230.007 23.252,230.000 23.422,229.997 41.115 C 229.996 50.356,229.934 58.012,229.860 58.129 C 229.590 58.555,206.766 58.336,205.833 57.898 C 204.685 57.359,204.761 57.447,200.583 51.911 C 198.016 48.509,196.378 46.370,196.127 46.094 C 195.965 45.916,195.833 45.721,195.833 45.661 C 195.833 45.600,195.674 45.371,195.478 45.151 C 195.283 44.930,194.590 44.038,193.938 43.167 C 193.285 42.296,192.709 41.546,192.656 41.500 C 192.603 41.454,192.232 40.967,191.831 40.417 C 191.429 39.867,190.685 38.881,190.176 38.225 C 189.666 37.570,189.100 36.825,188.917 36.571 C 188.733 36.316,187.571 34.784,186.333 33.165 C 185.096 31.547,183.896 29.974,183.667 29.669 C 183.438 29.365,182.706 28.406,182.042 27.538 L 180.833 25.960 180.833 37.543 C 180.833 52.282,180.443 51.175,185.833 51.747 C 187.254 51.898,188.679 52.073,189.000 52.136 L 189.583 52.250 189.583 55.250 L 189.583 58.250 175.583 58.293 C 162.569 58.333,161.569 58.316,161.375 58.053 C 161.229 57.855,161.167 56.985,161.167 55.155 C 161.167 52.240,161.187 52.183,162.285 52.073 C 168.613 51.440,169.114 51.290,169.806 49.833 C 170.226 48.949,170.320 24.691,169.908 23.417 C 169.436 21.955,168.481 21.308,166.500 21.104 C 163.589 20.804,161.623 20.504,161.410 20.327 C 161.114 20.082,161.053 15.024,161.339 14.489 C 161.590 14.021,192.298 13.981,193.775 14.447 M290.796 14.411 C 295.452 14.875,299.556 15.790,302.167 16.946 C 307.504 19.308,310.890 22.309,313.073 26.610 C 313.849 28.138,313.971 28.457,314.437 30.167 C 316.385 37.319,314.439 45.568,309.639 50.508 C 308.346 51.839,306.843 53.167,306.629 53.167 C 306.558 53.167,306.144 53.418,305.709 53.724 C 305.024 54.206,302.595 55.448,301.583 55.833 C 300.207 56.357,299.838 56.486,299.250 56.647 C 298.883 56.747,298.208 56.935,297.750 57.065 C 293.395 58.299,291.777 58.361,265.333 58.302 L 242.250 58.250 242.250 55.435 C 242.250 52.151,242.058 52.440,244.417 52.175 C 249.482 51.605,249.905 51.466,250.558 50.154 L 251.000 49.268 250.996 36.426 C 250.992 20.173,251.445 21.557,245.917 20.920 C 244.633 20.772,243.333 20.621,243.027 20.584 C 242.018 20.461,242.000 20.404,242.000 17.346 C 242.000 15.407,242.060 14.506,242.200 14.367 C 242.525 14.042,287.507 14.083,290.796 14.411 M361.893 14.624 C 362.878 15.078,363.771 15.972,364.727 17.462 C 366.296 19.908,368.822 23.760,368.965 23.924 C 369.048 24.020,369.146 24.170,369.183 24.258 C 369.265 24.451,369.713 25.137,376.416 35.333 C 379.004 39.270,380.009 40.805,382.419 44.500 C 383.227 45.737,384.288 47.362,384.778 48.110 C 386.225 50.321,387.834 51.500,389.402 51.500 C 389.939 51.500,393.341 51.938,394.333 52.134 L 394.917 52.250 394.917 55.250 L 394.917 58.250 375.927 58.292 C 360.845 58.326,356.910 58.292,356.804 58.126 C 356.731 58.011,356.671 56.701,356.669 55.214 C 356.666 52.024,356.508 52.247,358.948 52.002 C 363.449 51.550,364.667 51.016,364.667 49.495 C 364.667 48.887,364.316 48.210,362.831 45.951 L 362.096 44.833 348.686 44.833 C 334.522 44.833,334.667 44.826,334.667 45.538 C 334.667 45.623,334.333 46.208,333.925 46.839 C 331.509 50.573,332.147 51.443,337.719 52.002 C 340.148 52.246,340.000 52.049,339.998 55.048 C 339.996 56.442,339.950 57.752,339.895 57.958 L 339.794 58.333 325.748 58.333 C 313.094 58.333,311.692 58.307,311.601 58.070 C 311.546 57.925,311.500 56.615,311.500 55.159 C 311.500 52.023,311.296 52.285,314.029 51.908 C 315.067 51.765,316.367 51.586,316.917 51.509 C 318.804 51.247,320.205 50.295,320.997 48.736 C 321.132 48.469,321.413 48.018,321.622 47.734 C 321.830 47.451,322.000 47.174,322.000 47.120 C 322.000 47.065,323.012 45.400,324.250 43.420 C 325.487 41.439,326.500 39.783,326.500 39.739 C 326.500 39.602,327.410 38.253,327.542 38.194 C 327.610 38.164,327.667 38.070,327.667 37.987 C 327.667 37.903,328.360 36.713,329.208 35.343 C 335.925 24.487,336.167 24.070,336.167 23.345 C 336.167 21.596,335.493 21.374,327.750 20.572 C 327.200 20.515,326.656 20.391,326.542 20.297 C 326.316 20.112,326.228 14.494,326.447 14.275 C 326.510 14.212,334.329 14.181,343.822 14.205 L 361.083 14.250 361.893 14.624 M118.500 21.505 C 112.495 22.639,109.483 25.486,108.278 31.167 C 107.492 34.872,107.679 40.389,108.676 42.917 C 108.748 43.100,108.940 43.625,109.102 44.083 C 110.842 48.996,115.369 51.250,123.500 51.250 C 129.215 51.250,131.462 50.703,134.412 48.591 C 135.706 47.665,137.667 45.218,137.667 44.530 C 137.667 44.450,137.775 44.167,137.907 43.901 C 139.145 41.412,139.544 34.392,138.645 30.917 C 138.242 29.361,137.898 28.371,137.515 27.667 C 137.290 27.254,137.019 26.749,136.911 26.543 C 134.715 22.340,126.290 20.035,118.500 21.505 M268.541 36.286 L 268.583 49.750 274.083 49.804 C 281.335 49.875,286.639 49.498,287.873 48.825 C 288.032 48.738,288.264 48.667,288.388 48.667 C 289.627 48.667,292.435 46.281,293.318 44.478 C 294.931 41.185,295.258 34.531,294.037 29.833 C 293.492 27.737,291.597 25.313,289.833 24.458 C 287.008 23.087,285.969 22.965,276.541 22.887 L 268.498 22.821 268.541 36.286 M348.003 24.208 C 347.869 24.415,347.676 24.733,347.575 24.917 C 347.436 25.167,344.200 30.318,342.497 33.000 C 340.773 35.715,340.205 36.754,340.383 36.867 C 340.640 37.031,356.357 37.036,356.596 36.872 C 356.709 36.795,355.557 34.841,353.479 31.583 C 350.336 26.656,349.623 25.515,349.252 24.812 C 349.162 24.640,349.030 24.500,348.960 24.500 C 348.891 24.500,348.833 24.396,348.833 24.268 C 348.833 24.088,348.507 23.833,348.276 23.833 C 348.260 23.833,348.137 24.002,348.003 24.208 M36.196 80.005 C 38.715 80.705,39.018 84.534,36.650 85.759 C 36.054 86.067,34.452 86.070,33.867 85.765 C 30.475 83.993,32.502 78.979,36.196 80.005 M154.667 80.478 C 157.025 82.339,155.774 86.023,152.795 85.988 C 149.601 85.951,148.485 82.026,151.179 80.305 C 152.139 79.691,153.773 79.772,154.667 80.478 M318.917 80.019 C 321.471 80.725,321.779 84.491,319.383 85.725 C 318.768 86.042,317.159 86.093,316.614 85.813 C 313.153 84.035,315.162 78.982,318.917 80.019 M193.792 97.042 L 193.750 114.083 191.417 114.083 L 189.083 114.083 189.041 98.229 C 189.007 85.673,189.042 82.340,189.207 82.204 C 189.323 82.110,190.167 81.641,191.083 81.164 C 192.000 80.686,192.821 80.229,192.908 80.147 C 192.995 80.066,193.240 80.000,193.451 80.000 L 193.835 80.000 193.792 97.042 M227.667 80.738 C 230.585 81.218,233.302 82.504,235.208 84.309 C 236.039 85.096,236.068 85.022,234.185 86.899 L 232.536 88.541 231.949 88.006 C 227.347 83.819,219.333 84.786,219.333 89.529 C 219.333 91.130,221.167 93.333,222.498 93.333 C 222.593 93.333,222.801 93.401,222.961 93.483 C 223.432 93.727,224.487 94.099,226.083 94.584 C 228.629 95.358,229.772 95.786,232.000 96.797 C 239.651 100.270,238.686 111.303,230.500 113.945 C 224.573 115.857,218.317 114.497,213.958 110.349 C 212.938 109.378,212.892 109.515,214.867 107.659 L 216.567 106.061 217.845 107.092 C 221.099 109.720,225.275 110.581,228.917 109.374 C 231.937 108.373,233.135 104.914,231.232 102.691 C 230.672 102.037,230.420 101.867,228.802 101.055 C 228.136 100.721,224.995 99.638,222.333 98.825 C 218.363 97.611,215.707 95.672,214.821 93.343 C 214.169 91.625,214.076 87.993,214.656 86.863 C 214.735 86.709,214.931 86.265,215.092 85.875 C 215.252 85.485,215.443 85.167,215.514 85.167 C 215.586 85.167,215.689 85.027,215.743 84.856 C 216.614 82.112,222.871 79.951,227.667 80.738 M26.792 81.224 C 27.104 81.417,27.084 85.556,26.770 85.817 C 26.604 85.954,24.448 86.005,19.062 85.999 C 14.949 85.994,11.377 85.992,11.125 85.995 L 10.667 86.000 10.667 90.250 L 10.667 94.500 15.042 94.502 C 20.763 94.505,20.167 94.214,20.167 97.002 C 20.167 99.793,20.754 99.500,15.153 99.500 L 10.667 99.500 10.664 106.625 C 10.663 110.544,10.601 113.846,10.526 113.963 C 10.425 114.124,9.815 114.165,8.070 114.130 L 5.750 114.083 5.707 97.750 C 5.683 88.767,5.693 81.342,5.727 81.250 C 5.803 81.051,26.470 81.025,26.792 81.224 M59.583 89.345 C 62.220 90.313,63.897 92.416,64.758 95.833 C 65.046 96.976,65.073 97.811,65.078 105.583 L 65.083 114.083 62.750 114.083 L 60.417 114.083 60.318 105.917 C 60.212 97.070,60.191 96.870,59.224 95.305 C 57.815 93.025,53.557 92.618,51.732 94.587 C 50.181 96.261,50.119 96.671,50.011 106.000 L 49.917 114.083 47.542 114.130 L 45.167 114.176 45.167 101.750 L 45.167 89.324 47.542 89.370 L 49.917 89.417 49.967 90.375 C 50.025 91.502,50.008 91.495,50.865 90.761 C 53.004 88.931,56.784 88.317,59.583 89.345 M85.333 89.239 C 88.438 90.120,90.482 92.204,91.003 95.021 C 91.105 95.573,91.153 99.457,91.126 105.004 L 91.083 114.083 88.833 114.083 L 86.583 114.083 86.534 113.042 C 86.475 111.810,86.515 111.823,85.403 112.662 C 77.709 118.472,67.733 111.107,71.864 102.667 C 73.722 98.870,79.901 97.232,85.779 98.979 C 86.468 99.184,86.500 99.135,86.500 97.891 C 86.500 95.764,85.736 94.351,84.188 93.616 C 82.654 92.888,78.541 93.197,76.384 94.202 C 75.359 94.680,75.205 94.581,74.296 92.863 C 73.323 91.024,73.321 91.035,74.769 90.337 C 77.725 88.911,82.447 88.420,85.333 89.239 M112.719 89.342 C 114.784 90.061,116.698 92.035,117.410 94.182 C 118.143 96.395,118.155 96.566,118.161 105.546 L 118.167 114.176 115.792 114.130 L 113.417 114.083 113.330 105.667 C 113.238 96.805,113.238 96.803,112.421 95.408 C 110.686 92.448,105.466 92.691,103.991 95.800 C 103.292 97.272,103.269 97.559,103.175 105.917 L 103.083 114.083 100.708 114.130 L 98.333 114.176 98.333 101.755 L 98.333 89.333 100.750 89.333 L 103.167 89.333 103.167 90.333 C 103.167 91.364,103.292 91.537,103.688 91.055 C 104.118 90.531,105.839 89.529,106.795 89.246 C 107.320 89.091,107.825 88.936,107.917 88.901 C 108.489 88.687,111.675 88.979,112.719 89.342 M138.000 89.169 C 140.228 89.901,141.999 90.971,143.222 92.324 C 143.936 93.114,144.024 92.869,142.277 94.965 C 140.986 96.514,141.052 96.481,140.401 95.905 C 136.957 92.856,133.212 92.645,130.910 95.370 C 128.940 97.701,128.517 103.245,130.047 106.688 C 131.769 110.563,136.191 111.238,139.571 108.141 C 140.847 106.972,140.734 106.949,142.458 108.720 C 143.945 110.247,143.953 110.092,142.292 111.739 C 136.593 117.386,127.426 114.881,124.944 107.000 C 124.325 105.033,124.255 104.519,124.252 101.917 C 124.246 94.832,127.397 90.219,133.082 88.991 C 133.951 88.804,137.249 88.923,138.000 89.169 M175.833 89.240 C 179.066 90.154,181.217 92.461,181.593 95.417 C 181.924 98.016,181.775 114.008,181.419 114.097 C 181.235 114.142,180.183 114.158,179.083 114.132 L 177.083 114.083 177.033 113.125 C 176.977 112.039,176.804 111.938,176.054 112.552 C 169.477 117.935,160.437 113.151,161.647 104.929 C 162.380 99.944,168.281 97.158,174.917 98.666 C 175.375 98.770,176.031 98.895,176.375 98.945 L 177.000 99.035 177.000 97.937 C 177.000 95.814,176.276 94.412,174.774 93.628 C 173.335 92.876,169.034 93.208,166.778 94.245 C 166.155 94.531,165.860 94.591,165.706 94.463 C 165.350 94.168,163.970 91.184,164.095 90.981 C 164.369 90.538,167.073 89.498,168.750 89.190 C 169.300 89.089,169.900 88.972,170.083 88.929 C 170.795 88.764,174.944 88.988,175.833 89.240 M255.550 89.101 C 256.210 89.248,256.821 89.436,256.908 89.518 C 256.995 89.600,257.184 89.667,257.327 89.667 C 258.816 89.667,261.800 93.098,262.723 95.870 C 263.400 97.904,263.500 98.578,263.500 101.086 L 263.500 103.500 255.343 103.500 C 250.213 103.500,247.149 103.560,247.086 103.663 C 246.987 103.822,247.139 104.581,247.537 105.917 C 248.661 109.689,252.514 111.370,256.275 109.729 C 256.564 109.603,256.851 109.500,256.912 109.500 C 256.973 109.500,257.350 109.275,257.750 109.000 C 258.697 108.348,258.545 108.288,260.110 109.940 C 261.634 111.548,261.633 111.540,260.443 112.441 C 254.232 117.147,245.216 114.449,243.094 107.250 C 242.932 106.700,242.734 106.063,242.654 105.833 C 242.091 104.213,242.142 99.498,242.746 97.276 C 243.179 95.682,243.302 95.358,243.937 94.136 C 246.034 90.101,250.792 88.039,255.550 89.101 M282.656 89.103 C 284.540 89.568,284.555 89.614,283.776 92.566 C 283.242 94.587,283.386 94.466,282.040 94.027 C 279.094 93.069,276.370 93.916,275.338 96.111 C 274.591 97.699,274.500 98.860,274.500 106.769 L 274.500 114.176 272.125 114.130 L 269.750 114.083 269.707 101.708 L 269.665 89.333 272.082 89.333 L 274.500 89.333 274.500 90.240 C 274.500 91.335,274.687 91.495,275.275 90.906 C 275.928 90.254,277.308 89.429,278.167 89.179 C 278.579 89.058,278.992 88.937,279.083 88.910 C 279.596 88.756,281.713 88.871,282.656 89.103 M341.139 89.387 C 343.037 90.043,345.138 91.456,345.985 92.646 L 346.315 93.109 345.227 94.430 C 343.486 96.544,343.651 96.483,342.383 95.486 C 335.775 90.293,329.683 96.087,332.029 105.333 C 333.269 110.218,338.207 111.616,342.031 108.165 C 343.396 106.934,343.162 106.900,344.795 108.564 C 346.468 110.269,346.468 110.114,344.792 111.747 C 340.744 115.689,334.948 115.823,330.533 112.076 C 326.857 108.956,325.550 100.907,327.842 95.500 C 330.101 90.170,335.810 87.546,341.139 89.387 M364.917 89.374 C 369.485 90.968,372.115 95.492,371.965 101.500 L 371.917 103.417 363.757 103.460 C 359.269 103.484,355.535 103.565,355.460 103.640 C 355.328 103.772,355.601 105.049,356.032 106.308 C 357.429 110.396,362.505 111.590,366.557 108.784 L 367.030 108.456 368.111 109.520 C 368.705 110.105,369.344 110.794,369.530 111.051 L 369.869 111.518 369.178 112.156 C 366.780 114.370,362.285 115.330,358.696 114.396 C 347.830 111.565,347.873 91.483,358.750 89.175 C 359.300 89.058,359.825 88.934,359.917 88.900 C 360.497 88.682,363.842 88.999,364.917 89.374 M388.217 89.099 C 390.192 89.536,391.983 90.246,393.458 91.177 C 393.841 91.418,393.955 91.973,393.681 92.258 C 393.531 92.414,392.662 93.903,392.305 94.616 C 392.043 95.138,391.703 95.213,391.193 94.863 C 388.183 92.793,383.180 92.647,382.253 94.601 C 381.475 96.239,382.718 97.549,386.417 98.991 C 387.887 99.563,387.992 99.608,389.380 100.233 C 389.909 100.471,390.384 100.667,390.434 100.667 C 390.869 100.667,393.247 102.523,393.856 103.340 C 394.998 104.869,395.429 109.676,394.476 110.265 C 394.398 110.313,394.333 110.471,394.333 110.616 C 394.333 110.761,394.015 111.274,393.625 111.755 C 390.801 115.249,383.797 115.765,378.350 112.882 C 377.745 112.561,377.081 112.213,376.875 112.108 C 376.244 111.786,376.259 111.394,376.946 110.284 C 377.297 109.715,377.733 108.969,377.914 108.625 C 378.290 107.909,378.369 107.885,378.974 108.312 C 381.271 109.931,385.583 110.785,387.907 110.080 C 391.030 109.133,390.931 106.381,387.719 104.848 C 386.079 104.065,385.698 103.899,384.583 103.486 C 378.944 101.393,377.248 99.584,377.252 95.667 C 377.257 91.767,379.023 89.891,383.583 88.941 C 384.428 88.765,387.124 88.857,388.217 89.099 M37.667 101.750 C 37.667 108.579,37.610 114.174,37.542 114.183 C 36.485 114.317,33.059 114.262,32.961 114.108 C 32.808 113.869,32.792 89.597,32.944 89.444 C 33.006 89.383,34.093 89.333,35.361 89.333 L 37.667 89.333 37.667 101.750 M155.164 101.625 C 155.163 108.385,155.106 113.997,155.039 114.094 C 154.939 114.239,151.620 114.309,150.542 114.190 C 150.377 114.172,150.333 111.560,150.333 101.750 L 150.333 89.333 152.750 89.333 L 155.167 89.333 155.164 101.625 M294.157 94.042 C 295.004 96.631,295.758 98.900,295.834 99.083 C 295.910 99.267,296.101 99.829,296.259 100.333 C 296.416 100.837,296.603 101.400,296.673 101.583 C 296.743 101.767,297.116 102.929,297.500 104.167 C 297.885 105.404,298.262 106.604,298.337 106.833 C 298.412 107.063,298.516 107.448,298.568 107.690 C 298.725 108.414,299.138 108.420,299.256 107.701 C 299.313 107.361,299.421 106.896,299.497 106.667 C 299.573 106.438,299.836 105.575,300.081 104.750 C 300.326 103.925,300.591 103.063,300.670 102.833 C 300.748 102.604,301.125 101.404,301.506 100.167 C 301.888 98.929,302.371 97.392,302.581 96.750 C 302.790 96.108,303.167 94.908,303.418 94.083 C 303.669 93.258,303.931 92.433,304.000 92.250 C 304.069 92.067,304.304 91.354,304.521 90.667 L 304.917 89.417 307.242 89.370 C 308.521 89.344,309.661 89.359,309.775 89.403 C 310.038 89.504,309.936 89.833,307.831 95.667 C 307.450 96.721,307.001 97.996,306.832 98.500 C 305.940 101.162,305.306 102.948,305.162 103.206 C 305.073 103.365,305.000 103.600,305.000 103.729 C 305.000 103.857,304.888 104.177,304.751 104.439 C 304.614 104.702,304.502 105.043,304.501 105.198 C 304.500 105.354,304.434 105.521,304.353 105.571 C 304.271 105.622,304.169 105.870,304.124 106.123 C 304.080 106.376,303.729 107.446,303.344 108.500 C 302.959 109.554,302.387 111.159,302.073 112.065 C 301.294 114.313,301.520 114.167,298.833 114.167 C 296.244 114.167,296.376 114.230,295.866 112.750 C 295.677 112.200,295.210 110.888,294.829 109.833 C 294.448 108.779,294.074 107.729,293.998 107.500 C 293.923 107.271,293.552 106.221,293.174 105.167 C 292.797 104.112,292.374 102.912,292.235 102.500 C 292.097 102.087,291.920 101.600,291.843 101.417 C 291.765 101.233,291.576 100.708,291.421 100.250 C 291.267 99.792,291.077 99.267,291.000 99.083 C 290.923 98.900,290.733 98.375,290.579 97.917 C 290.424 97.458,290.237 96.933,290.162 96.750 C 290.088 96.567,289.833 95.873,289.597 95.208 C 288.981 93.478,288.415 91.897,288.014 90.785 C 287.459 89.245,287.329 89.333,290.142 89.333 L 292.617 89.333 294.157 94.042 M320.333 101.750 L 320.333 114.167 319.792 114.190 C 317.669 114.281,315.733 114.233,315.628 114.087 C 315.475 113.874,315.459 89.597,315.611 89.444 C 315.672 89.383,316.760 89.333,318.028 89.333 L 320.333 89.333 320.333 101.750 M250.442 93.740 C 248.671 94.607,247.439 96.538,247.299 98.667 L 247.250 99.417 252.879 99.461 C 259.290 99.511,258.864 99.619,258.493 98.028 C 257.995 95.884,256.852 94.353,255.231 93.659 C 254.071 93.161,251.535 93.204,250.442 93.740 M358.833 93.743 C 357.042 94.684,356.035 96.253,355.604 98.777 C 355.478 99.515,355.354 99.500,361.514 99.500 L 367.000 99.500 366.999 98.958 C 366.992 94.908,362.309 91.917,358.833 93.743 M79.333 102.607 C 76.658 102.951,75.055 105.291,75.856 107.683 C 76.975 111.025,82.320 111.290,85.542 108.164 L 86.500 107.234 86.500 105.454 L 86.500 103.675 86.034 103.434 C 84.859 102.827,81.170 102.371,79.333 102.607 M169.833 102.648 C 168.295 102.893,166.982 103.751,166.418 104.880 C 166.135 105.448,166.073 107.422,166.333 107.583 C 166.425 107.640,166.500 107.806,166.500 107.952 C 166.500 108.355,167.282 109.297,167.884 109.619 C 170.454 110.995,173.721 110.409,176.048 108.156 L 177.012 107.222 176.964 105.408 L 176.917 103.594 176.167 103.315 C 175.754 103.162,175.154 102.959,174.833 102.864 C 174.066 102.639,170.786 102.497,169.833 102.648 ",
              stroke: "none",
              fill: "#fbfbfb",
              fillRule: "evenodd"
          })))
      }
      var Ji, $i = u.forwardRef(Qi), ea = (n.p,
      ["title", "titleId"]);
      function ta() {
          return ta = Object.assign ? Object.assign.bind() : function(e) {
              for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                      Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
              }
              return e
          }
          ,
          ta.apply(this, arguments)
      }
      function na(e, t) {
          if (null == e)
              return {};
          var n, r, i = function(e, t) {
              if (null == e)
                  return {};
              var n, r, i = {}, a = Object.keys(e);
              for (r = 0; r < a.length; r++)
                  n = a[r],
                  t.indexOf(n) >= 0 || (i[n] = e[n]);
              return i
          }(e, t);
          if (Object.getOwnPropertySymbols) {
              var a = Object.getOwnPropertySymbols(e);
              for (r = 0; r < a.length; r++)
                  n = a[r],
                  t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
          }
          return i
      }
      function ra(e, t) {
          var n = e.title
            , r = e.titleId
            , i = na(e, ea);
          return u.createElement("svg", ta({
              viewBox: "0 0 5 10",
              xmlns: "http://www.w3.org/2000/svg",
              xmlnsXlink: "http://www.w3.org/1999/xlink",
              ref: t,
              "aria-labelledby": r
          }, i), n ? u.createElement("title", {
              id: r
          }, n) : null, Ji || (Ji = u.createElement("path", {
              d: "M3.36575,4.7885 C2.7935,6.16475 2.384,7.094 2.15,7.811 C1.80875,8.85575 2.6705,8.432 3.51425,7.65275 C3.629,7.84025 3.6665,7.901 3.78125,8.117 C1.90775,9.9005 -0.172,10.058 0.47525,8.0075 C0.89825,6.66575 1.69925,5.0585 1.841,4.652 C2.04575,4.06175 1.68275,3.8 0.536,4.80875 L0.281,4.32875 C1.589,2.906 4.28225,2.58425 3.36575,4.7885 Z M4.15475,0.635 C4.484,0.9845 4.43,1.54175 4.03175,1.88075 C3.63275,2.2205 3.04175,2.213 2.711,1.86425 C2.38025,1.5155 2.43575,0.95825 2.834,0.6185 C3.233,0.27875 3.824,0.287 4.15475,0.635 Z",
              id: "i"
          })))
      }
      var ia, aa = u.forwardRef(ra), ca = (n.p,
      ["title", "titleId"]);
      function oa() {
          return oa = Object.assign ? Object.assign.bind() : function(e) {
              for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                      Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
              }
              return e
          }
          ,
          oa.apply(this, arguments)
      }
      function la(e, t) {
          if (null == e)
              return {};
          var n, r, i = function(e, t) {
              if (null == e)
                  return {};
              var n, r, i = {}, a = Object.keys(e);
              for (r = 0; r < a.length; r++)
                  n = a[r],
                  t.indexOf(n) >= 0 || (i[n] = e[n]);
              return i
          }(e, t);
          if (Object.getOwnPropertySymbols) {
              var a = Object.getOwnPropertySymbols(e);
              for (r = 0; r < a.length; r++)
                  n = a[r],
                  t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
          }
          return i
      }
      function sa(e, t) {
          var n = e.title
            , r = e.titleId
            , i = la(e, ca);
          return u.createElement("svg", oa({
              width: "18px",
              height: "18px",
              viewBox: "0 0 18 18",
              xmlns: "http://www.w3.org/2000/svg",
              xmlnsXlink: "http://www.w3.org/1999/xlink",
              ref: t,
              "aria-labelledby": r
          }, i), void 0 === n ? u.createElement("title", {
              id: r
          }, "Icon / Information") : n ? u.createElement("title", {
              id: r
          }, n) : null, ia || (ia = u.createElement("g", {
              id: "Designs",
              stroke: "none",
              strokeWidth: 1,
              fill: "none",
              fillRule: "evenodd"
          }, u.createElement("g", {
              id: "HondaConfigurator-Step03-BikeSummary-DesktopHD",
              transform: "translate(-336.000000, -697.000000)"
          }, u.createElement("g", {
              id: "Botttom-Row",
              transform: "translate(-2410.000000, 661.000000)"
          }, u.createElement("g", {
              id: "Finance-Offer",
              transform: "translate(2438.000000, 5.000000)"
          }, u.createElement("g", {
              id: "Icon-/-Information",
              transform: "translate(302.000000, 25.000000)"
          }, u.createElement("path", {
              d: "M15,6.5 C17.3470625,6.5 19.4720577,7.45147693 21.0102904,8.98970964 C22.5485231,10.5279423 23.5,12.6529375 23.5,15 C23.5,17.3470625 22.5485231,19.4720577 21.0102904,21.0102904 C19.4720577,22.5485231 17.3470625,23.5 15,23.5 C12.6529375,23.5 10.5279423,22.5485231 8.98970964,21.0102904 C7.45147693,19.4720577 6.5,17.3470625 6.5,15 C6.5,12.6529375 7.45147693,10.5279423 8.98970964,8.98970964 C10.5279423,7.45147693 12.6529375,6.5 15,6.5 Z",
              id: "Shape",
              stroke: "#DDDDDD",
              fill: "#FFFFFF"
          }), u.createElement("path", {
              d: "M16.36575,14.7885 C15.7935,16.16475 15.384,17.094 15.15,17.811 C14.80875,18.85575 15.6705,18.432 16.51425,17.65275 C16.629,17.84025 16.6665,17.901 16.78125,18.117 C14.90775,19.9005 12.828,20.058 13.47525,18.0075 C13.89825,16.66575 14.69925,15.0585 14.841,14.652 C15.04575,14.06175 14.68275,13.8 13.536,14.80875 L13.281,14.32875 C14.589,12.906 17.28225,12.58425 16.36575,14.7885 Z M17.15475,10.635 C17.484,10.9845 17.43,11.54175 17.03175,11.88075 C16.63275,12.2205 16.04175,12.213 15.711,11.86425 C15.38025,11.5155 15.43575,10.95825 15.834,10.6185 C16.233,10.27875 16.824,10.287 17.15475,10.635 Z",
              id: "Combined-Shape",
              fill: "#2E3440"
          }))))))))
      }
      var da, ua = u.forwardRef(sa), ba = (n.p,
      ["title", "titleId"]);
      function fa() {
          return fa = Object.assign ? Object.assign.bind() : function(e) {
              for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                      Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
              }
              return e
          }
          ,
          fa.apply(this, arguments)
      }
      function ma(e, t) {
          if (null == e)
              return {};
          var n, r, i = function(e, t) {
              if (null == e)
                  return {};
              var n, r, i = {}, a = Object.keys(e);
              for (r = 0; r < a.length; r++)
                  n = a[r],
                  t.indexOf(n) >= 0 || (i[n] = e[n]);
              return i
          }(e, t);
          if (Object.getOwnPropertySymbols) {
              var a = Object.getOwnPropertySymbols(e);
              for (r = 0; r < a.length; r++)
                  n = a[r],
                  t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
          }
          return i
      }
      function pa(e, t) {
          var n = e.title
            , r = e.titleId
            , i = ma(e, ba);
          return u.createElement("svg", fa({
              xmlns: "http://www.w3.org/2000/svg",
              xmlnsXlink: "http://www.w3.org/1999/xlink",
              viewBox: "0 0 400 400",
              ref: t,
              "aria-labelledby": r
          }, i), n ? u.createElement("title", {
              id: r
          }, n) : null, da || (da = u.createElement("path", {
              d: "M326,71H73c-5.522,0-10,4.477-10,10v240c0,5.523,4.478,10,10,10h253c5.522,0,10-4.477,10-10V81 C336,75.477,331.522,71,326,71z M83,311V91h233v100h-60.267v-26.732c0-5.523-4.478-10-10-10h-93.465c-5.522,0-10,4.477-10,10 v26.731h-58.38v20h58.38v26.733c0,5.523,4.478,10,10,10h93.465c5.522,0,10-4.477,10-10V211H316v100H83z M235.733,174.268v53.465 h-73.465v-53.465H235.733z"
          })))
      }
      var ja, ha = u.forwardRef(pa), Oa = (n.p,
      ["title", "titleId"]);
      function va() {
          return va = Object.assign ? Object.assign.bind() : function(e) {
              for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                      Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
              }
              return e
          }
          ,
          va.apply(this, arguments)
      }
      function Ca(e, t) {
          if (null == e)
              return {};
          var n, r, i = function(e, t) {
              if (null == e)
                  return {};
              var n, r, i = {}, a = Object.keys(e);
              for (r = 0; r < a.length; r++)
                  n = a[r],
                  t.indexOf(n) >= 0 || (i[n] = e[n]);
              return i
          }(e, t);
          if (Object.getOwnPropertySymbols) {
              var a = Object.getOwnPropertySymbols(e);
              for (r = 0; r < a.length; r++)
                  n = a[r],
                  t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
          }
          return i
      }
      function ga(e, t) {
          var n = e.title
            , r = e.titleId
            , i = Ca(e, Oa);
          return u.createElement("svg", va({
              viewBox: "0 0 24 24",
              xmlns: "http://www.w3.org/2000/svg",
              fillRule: "evenodd",
              clipRule: "evenodd",
              ref: t,
              "aria-labelledby": r
          }, i), n ? u.createElement("title", {
              id: r
          }, n) : null, ja || (ja = u.createElement("path", {
              d: "M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5zm-4.5 8h4v-4h1v4h4v1h-4v4h-1v-4h-4v-1z"
          })))
      }
      var xa, ya = u.forwardRef(ga), wa = (n.p,
      ["title", "titleId"]);
      function La() {
          return La = Object.assign ? Object.assign.bind() : function(e) {
              for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                      Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
              }
              return e
          }
          ,
          La.apply(this, arguments)
      }
      function _a(e, t) {
          if (null == e)
              return {};
          var n, r, i = function(e, t) {
              if (null == e)
                  return {};
              var n, r, i = {}, a = Object.keys(e);
              for (r = 0; r < a.length; r++)
                  n = a[r],
                  t.indexOf(n) >= 0 || (i[n] = e[n]);
              return i
          }(e, t);
          if (Object.getOwnPropertySymbols) {
              var a = Object.getOwnPropertySymbols(e);
              for (r = 0; r < a.length; r++)
                  n = a[r],
                  t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
          }
          return i
      }
      function Sa(e, t) {
          var n = e.title
            , r = e.titleId
            , i = _a(e, wa);
          return u.createElement("svg", La({
              viewBox: "0 0 24 24",
              xmlns: "http://www.w3.org/2000/svg",
              xmlnsXlink: "http://www.w3.org/1999/xlink",
              ref: t,
              "aria-labelledby": r
          }, i), n ? u.createElement("title", {
              id: r
          }, n) : null, xa || (xa = u.createElement("path", {
              d: "M15.853,16.56 C14.17,18.077 11.942,19 9.5,19 C4.257,19 0,14.743 0,9.5 C0,4.257 4.257,0 9.5,0 C14.743,0 19,4.257 19,9.5 C19,11.942 18.077,14.17 16.56,15.853 L24,23.293 L23.293,24 L15.853,16.56 Z M9.5,1 C4.809,1 1,4.809 1,9.5 C1,14.191 4.809,18 9.5,18 C14.191,18 18,14.191 18,9.5 C18,4.809 14.191,1 9.5,1 Z M5,9 L14,9 L14,10 L5,10 L5,9 Z",
              id: "Shape"
          })))
      }
      var Ea, Ia = u.forwardRef(Sa), Ta = (n.p,
      ["title", "titleId"]);
      function Aa() {
          return Aa = Object.assign ? Object.assign.bind() : function(e) {
              for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                      Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
              }
              return e
          }
          ,
          Aa.apply(this, arguments)
      }
      function Ma(e, t) {
          if (null == e)
              return {};
          var n, r, i = function(e, t) {
              if (null == e)
                  return {};
              var n, r, i = {}, a = Object.keys(e);
              for (r = 0; r < a.length; r++)
                  n = a[r],
                  t.indexOf(n) >= 0 || (i[n] = e[n]);
              return i
          }(e, t);
          if (Object.getOwnPropertySymbols) {
              var a = Object.getOwnPropertySymbols(e);
              for (r = 0; r < a.length; r++)
                  n = a[r],
                  t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
          }
          return i
      }
      function ka(e, t) {
          var n = e.title
            , r = e.titleId
            , i = Ma(e, Ta);
          return u.createElement("svg", Aa({
              viewBox: "0 0 15 21",
              xmlns: "http://www.w3.org/2000/svg",
              xmlnsXlink: "http://www.w3.org/1999/xlink",
              ref: t,
              "aria-labelledby": r
          }, i), n ? u.createElement("title", {
              id: r
          }, n) : null, Ea || (Ea = u.createElement("g", {
              id: "Icon-/-Offer",
              transform: "translate(-13.000000, -10.000000)"
          }, u.createElement("path", {
              d: "M20.4980699,18.7532539 C18.7895414,18.7532539 17.4006382,17.3751504 17.4006382,15.6816143 C17.4006382,13.9880783 18.7903134,12.6099748 20.4980699,12.6099748 C22.2058263,12.6099748 23.5955016,13.9880783 23.5955016,15.6816143 C23.5955016,17.3751504 22.2065984,18.7532539 20.4980699,18.7532539 Z M20.4980699,13.4843049 C19.2766998,13.4843049 18.283082,14.4696489 18.283082,15.6808487 C18.283082,16.8920486 19.2766998,17.8773925 20.4980699,17.8773925 C21.71944,17.8773925 22.7130578,16.8920486 22.7130578,15.6808487 C22.7130578,14.4696489 21.71944,13.4843049 20.4980699,13.4843049 Z M27.9884194,15.2498086 L23.5877812,10 L17.4114468,10 L13.0115806,15.2498086 L13,15.2498086 L13,29.2498086 L14.7648875,31 L26.2351125,31 L28,29.2498086 L28,15.2498086 L27.9891914,15.2498086 L27.9884194,15.2498086 Z M13.8824438,28.7812534 L13.8824438,15.6333807 L17.8708117,10.8750957 L23.1284163,10.8750957 L27.1167842,15.6333807 L27.1167842,28.7812534 L25.7626229,30.1241387 L15.235833,30.1241387 L13.8816717,28.7804878 L13.8824438,28.7812534 Z M17.4114468,23.1249043 L23.5877812,23.1249043 L23.5877812,24 L17.4114468,24 L17.4114468,23.1249043 Z M17.4114468,25.7501914 L23.5877812,25.7501914 L23.5877812,26.6252871 L17.4114468,26.6252871 L17.4114468,25.7501914 Z",
              id: "offer"
          }))))
      }
      var Ra, Pa = u.forwardRef(ka), Fa = (n.p,
      ["title", "titleId"]);
      function Da() {
          return Da = Object.assign ? Object.assign.bind() : function(e) {
              for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                      Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
              }
              return e
          }
          ,
          Da.apply(this, arguments)
      }
      function Na(e, t) {
          if (null == e)
              return {};
          var n, r, i = function(e, t) {
              if (null == e)
                  return {};
              var n, r, i = {}, a = Object.keys(e);
              for (r = 0; r < a.length; r++)
                  n = a[r],
                  t.indexOf(n) >= 0 || (i[n] = e[n]);
              return i
          }(e, t);
          if (Object.getOwnPropertySymbols) {
              var a = Object.getOwnPropertySymbols(e);
              for (r = 0; r < a.length; r++)
                  n = a[r],
                  t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
          }
          return i
      }
      function Ba(e, t) {
          var n = e.title
            , r = e.titleId
            , i = Na(e, Fa);
          return u.createElement("svg", Da({
              viewBox: "0 0 16 19",
              xmlns: "http://www.w3.org/2000/svg",
              xmlnsXlink: "http://www.w3.org/1999/xlink",
              ref: t,
              "aria-labelledby": r
          }, i), n ? u.createElement("title", {
              id: r
          }, n) : null, Ra || (Ra = u.createElement("g", {
              id: "Icon-/-PDF",
              transform: "translate(-12.000000, -10.000000)"
          }, u.createElement("path", {
              d: "M19.4904,11 C22.8144,11 21.6,15.3333333 21.6,15.3333333 C21.6,15.3333333 27,14.0270833 27,17.2784583 L27,28 L13,28 L13,11 L19.4904,11 Z M20.1512,10 L12,10 L12,29 L28,29 L28,17.6110833 C28,15.7182083 22.6816,10 20.1512,10 Z M24,20.2916667 L21.8976,20.2916667 L21.8976,23.20975 L22.6232,23.20975 L22.6232,22.0444167 L23.8152,22.0444167 L23.8152,21.4649167 L22.6232,21.4649167 L22.6232,20.9123333 L24,20.9123333 L24,20.2916667 Z M20.08,20.2916667 L18.8008,20.2916667 L18.8008,23.20975 L20.08,23.20975 C20.5096,23.20975 20.8488,23.0664583 21.0896,22.7862083 C21.5336,22.2652917 21.5592,21.1759583 21.04,20.6550417 C20.8016,20.4175417 20.4704,20.2916667 20.08,20.2916667 Z M19.5264,20.9115417 L19.9232,20.9115417 C20.3016,20.9115417 20.5648,21.0485 20.6552,21.421375 C20.7064,21.63275 20.7168,21.9589167 20.6384,22.171875 C20.536,22.44975 20.3336,22.589875 20.0352,22.589875 L19.5256,22.589875 L19.5256,20.9115417 L19.5264,20.9115417 Z M17.3344,20.2916667 L16,20.2916667 L16,23.20975 L16.7256,23.20975 L16.7256,22.1987917 L17.3344,22.1987917 C17.8296,22.1987917 18.1856,21.9795 18.3136,21.59475 C18.3896,21.364375 18.3896,21.122125 18.3136,20.894125 C18.1856,20.5109583 17.8288,20.2916667 17.3344,20.2916667 Z M16.7256,20.8711667 L17.1624,20.8711667 C17.3504,20.8711667 17.536,20.8933333 17.6232,21.0516667 C17.6768,21.1490417 17.6768,21.3414167 17.6232,21.4387917 C17.536,21.5963333 17.3504,21.6185 17.1624,21.6185 L16.7256,21.6185 L16.7256,20.8711667 Z",
              id: "pdf"
          }))))
      }
      var Ha, za = u.forwardRef(Ba), Va = (n.p,
      ["title", "titleId"]);
      function Ua() {
          return Ua = Object.assign ? Object.assign.bind() : function(e) {
              for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                      Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
              }
              return e
          }
          ,
          Ua.apply(this, arguments)
      }
      function Wa(e, t) {
          if (null == e)
              return {};
          var n, r, i = function(e, t) {
              if (null == e)
                  return {};
              var n, r, i = {}, a = Object.keys(e);
              for (r = 0; r < a.length; r++)
                  n = a[r],
                  t.indexOf(n) >= 0 || (i[n] = e[n]);
              return i
          }(e, t);
          if (Object.getOwnPropertySymbols) {
              var a = Object.getOwnPropertySymbols(e);
              for (r = 0; r < a.length; r++)
                  n = a[r],
                  t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
          }
          return i
      }
      function Ya(e, t) {
          var n = e.title
            , r = e.titleId
            , i = Wa(e, Va);
          return u.createElement("svg", Ua({
              viewBox: "0 0 15 19",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": r
          }, i), n ? u.createElement("title", {
              id: r
          }, n) : null, Ha || (Ha = u.createElement("path", {
              d: "M7.433 18.321l-4.859-5.619C1.427 11.249 0 9.444 0 7.417 0 3.327 3.345 0 7.453 0c4.082 0 7.408 3.327 7.413 7.417 0 2.029-1.429 3.837-2.576 5.289l-4.856 5.615h-.001zm.024-17.179c-3.481 0-6.311 2.815-6.311 6.274 0 1.629 1.237 3.197 2.327 4.578l3.96 4.47 3.961-4.467c1.094-1.382 2.333-2.95 2.333-4.581-.005-3.458-2.821-6.274-6.27-6.274zM7.466 11.4a3.988 3.988 0 01-3.979-3.99 3.983 3.983 0 013.979-3.979 3.983 3.983 0 013.981 3.979 3.988 3.988 0 01-3.981 3.99zm0-6.829a2.84 2.84 0 00-2.837 2.837 2.844 2.844 0 002.837 2.845 2.84 2.84 0 000-5.682z",
              fillRule: "evenodd"
          })))
      }
      var Ga, Za = u.forwardRef(Ya), Ka = (n.p,
      ["title", "titleId"]);
      function Xa() {
          return Xa = Object.assign ? Object.assign.bind() : function(e) {
              for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                      Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
              }
              return e
          }
          ,
          Xa.apply(this, arguments)
      }
      function qa(e, t) {
          if (null == e)
              return {};
          var n, r, i = function(e, t) {
              if (null == e)
                  return {};
              var n, r, i = {}, a = Object.keys(e);
              for (r = 0; r < a.length; r++)
                  n = a[r],
                  t.indexOf(n) >= 0 || (i[n] = e[n]);
              return i
          }(e, t);
          if (Object.getOwnPropertySymbols) {
              var a = Object.getOwnPropertySymbols(e);
              for (r = 0; r < a.length; r++)
                  n = a[r],
                  t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
          }
          return i
      }
      function Qa(e, t) {
          var n = e.title
            , r = e.titleId
            , i = qa(e, Ka);
          return u.createElement("svg", Xa({
              width: "15px",
              height: "15px",
              viewBox: "0 0 15 15",
              xmlns: "http://www.w3.org/2000/svg",
              xmlnsXlink: "http://www.w3.org/1999/xlink",
              ref: t,
              "aria-labelledby": r
          }, i), n ? u.createElement("title", {
              id: r
          }, n) : null, Ga || (Ga = u.createElement("path", {
              d: "M7.5,0 C3.35786438,0 0,3.35786438 0,7.5 C0,11.6421356 3.35786438,15 7.5,15 C11.6421356,15 15,11.6421356 15,7.5 C15,3.35786438 11.6421356,0 7.5,0 Z M7.5,1 C11.0898509,1 14,3.91014913 14,7.5 C14,11.0898509 11.0898509,14 7.5,14 C3.91014913,14 1,11.0898509 1,7.5 C1,3.91014913 3.91014913,1 7.5,1 Z",
              id: "radioOff"
          })))
      }
      var Ja, $a = u.forwardRef(Qa), ec = (n.p,
      ["title", "titleId"]);
      function tc() {
          return tc = Object.assign ? Object.assign.bind() : function(e) {
              for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                      Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
              }
              return e
          }
          ,
          tc.apply(this, arguments)
      }
      function nc(e, t) {
          if (null == e)
              return {};
          var n, r, i = function(e, t) {
              if (null == e)
                  return {};
              var n, r, i = {}, a = Object.keys(e);
              for (r = 0; r < a.length; r++)
                  n = a[r],
                  t.indexOf(n) >= 0 || (i[n] = e[n]);
              return i
          }(e, t);
          if (Object.getOwnPropertySymbols) {
              var a = Object.getOwnPropertySymbols(e);
              for (r = 0; r < a.length; r++)
                  n = a[r],
                  t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
          }
          return i
      }
      function rc(e, t) {
          var n = e.title
            , r = e.titleId
            , i = nc(e, ec);
          return u.createElement("svg", tc({
              width: "15px",
              height: "15px",
              viewBox: "0 0 15 15",
              xmlns: "http://www.w3.org/2000/svg",
              xmlnsXlink: "http://www.w3.org/1999/xlink",
              ref: t,
              "aria-labelledby": r
          }, i), n ? u.createElement("title", {
              id: r
          }, n) : null, Ja || (Ja = u.createElement("g", {
              id: "radioOn"
          }, u.createElement("path", {
              d: "M7.5,0 C3.35786438,0 0,3.35786438 0,7.5 C0,11.6421356 3.35786438,15 7.5,15 C11.6421356,15 15,11.6421356 15,7.5 C15,3.35786438 11.6421356,0 7.5,0 Z M7.5,1 C11.0898509,1 14,3.91014913 14,7.5 C14,11.0898509 11.0898509,14 7.5,14 C3.91014913,14 1,11.0898509 1,7.5 C1,3.91014913 3.91014913,1 7.5,1 Z"
          }), u.createElement("rect", {
              x: 3.5,
              y: 3.5,
              width: 8,
              height: 8,
              rx: 4
          }))))
      }
      var ic, ac = u.forwardRef(rc), cc = (n.p,
      ["title", "titleId"]);
      function oc() {
          return oc = Object.assign ? Object.assign.bind() : function(e) {
              for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                      Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
              }
              return e
          }
          ,
          oc.apply(this, arguments)
      }
      function lc(e, t) {
          if (null == e)
              return {};
          var n, r, i = function(e, t) {
              if (null == e)
                  return {};
              var n, r, i = {}, a = Object.keys(e);
              for (r = 0; r < a.length; r++)
                  n = a[r],
                  t.indexOf(n) >= 0 || (i[n] = e[n]);
              return i
          }(e, t);
          if (Object.getOwnPropertySymbols) {
              var a = Object.getOwnPropertySymbols(e);
              for (r = 0; r < a.length; r++)
                  n = a[r],
                  t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
          }
          return i
      }
      function sc(e, t) {
          var n = e.title
            , r = e.titleId
            , i = lc(e, cc);
          return u.createElement("svg", oc({
              width: 16,
              height: 16,
              viewBox: "0 0 16 16",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": r
          }, i), n ? u.createElement("title", {
              id: r
          }, n) : null, ic || (ic = u.createElement("path", {
              d: "M1 12C1.00017 12.1326 1.05291 12.2596 1.14664 12.3534C1.24037 12.4471 1.36744 12.4998 1.5 12.5H15C15.1326 12.5 15.2598 12.5527 15.3536 12.6464C15.4473 12.7402 15.5 12.8674 15.5 13C15.5 13.1326 15.4473 13.2598 15.3536 13.3536C15.2598 13.4473 15.1326 13.5 15 13.5H12.8244C12.9386 13.7336 12.9986 13.99 13 14.25C13 14.7141 12.8156 15.1592 12.4874 15.4874C12.1592 15.8156 11.7141 16 11.25 16C10.7859 16 10.3408 15.8156 10.0126 15.4874C9.68437 15.1592 9.5 14.7141 9.5 14.25C9.50141 13.99 9.56141 13.7336 9.67555 13.5H5.82445C5.93859 13.7336 5.99859 13.99 6 14.25C6 14.7141 5.81563 15.1592 5.48744 15.4874C5.15925 15.8156 4.71413 16 4.25 16C3.78587 16 3.34075 15.8156 3.01256 15.4874C2.68437 15.1592 2.5 14.7141 2.5 14.25C2.50141 13.99 2.56141 13.7336 2.67555 13.5H1.5C1.10218 13.5 0.720644 13.342 0.43934 13.0607C0.158035 12.7794 0 12.3978 0 12C0 11.6022 0.158035 11.2206 0.43934 10.9393C0.720644 10.658 1.10218 10.5 1.5 10.5H3.4236C3.28615 9.538 2.1967 1.91245 2.0664 1H0.5C0.367392 1 0.240215 0.947322 0.146447 0.853553C0.0526784 0.759785 0 0.632608 0 0.5C0 0.367392 0.0526784 0.240215 0.146447 0.146447C0.240215 0.0526784 0.367392 1.44707e-09 0.5 1.44707e-09H2.5C2.62035 -9.15021e-06 2.73666 0.0433901 2.82759 0.122231C2.91852 0.201072 2.97796 0.310064 2.995 0.4292L3.4336 3.5H15.5C15.5774 3.50001 15.6537 3.51798 15.723 3.5525C15.7923 3.58703 15.8526 3.63716 15.8992 3.69895C15.9458 3.76075 15.9774 3.83252 15.9915 3.90861C16.0057 3.9847 16.002 4.06304 15.9807 4.13745L13.9807 11.1375C13.9508 11.2419 13.8878 11.3338 13.801 11.3992C13.7143 11.4646 13.6086 11.5 13.5 11.5H1.5C1.36744 11.5002 1.24037 11.5529 1.14664 11.6466C1.05291 11.7404 1.00017 11.8674 1 12Z"
          })))
      }
      var dc, uc, bc = u.forwardRef(sc), fc = (n.p,
      ["title", "titleId"]);
      function mc() {
          return mc = Object.assign ? Object.assign.bind() : function(e) {
              for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                      Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
              }
              return e
          }
          ,
          mc.apply(this, arguments)
      }
      function pc(e, t) {
          if (null == e)
              return {};
          var n, r, i = function(e, t) {
              if (null == e)
                  return {};
              var n, r, i = {}, a = Object.keys(e);
              for (r = 0; r < a.length; r++)
                  n = a[r],
                  t.indexOf(n) >= 0 || (i[n] = e[n]);
              return i
          }(e, t);
          if (Object.getOwnPropertySymbols) {
              var a = Object.getOwnPropertySymbols(e);
              for (r = 0; r < a.length; r++)
                  n = a[r],
                  t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
          }
          return i
      }
      function jc(e, t) {
          var n = e.title
            , r = e.titleId
            , i = pc(e, fc);
          return u.createElement("svg", mc({
              width: 26,
              height: 24,
              viewBox: "0 0 26 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": r
          }, i), n ? u.createElement("title", {
              id: r
          }, n) : null, dc || (dc = u.createElement("g", {
              clipPath: "url(#clip0_328_16856)"
          }, u.createElement("path", {
              d: "M4.58227 14.6239C6.85626 14.6239 8.6997 12.7389 8.6997 10.4135C8.6997 8.08819 6.85626 6.20312 4.58227 6.20312C2.30828 6.20312 0.464844 8.08819 0.464844 10.4135C0.464844 12.7389 2.30828 14.6239 4.58227 14.6239Z",
              fill: "white"
          }), u.createElement("path", {
              d: "M4.5823 15.0991C2.05561 15.0991 0 12.9971 0 10.4133C0 7.82957 2.05561 5.72754 4.5823 5.72754C7.10898 5.72754 9.16459 7.82957 9.16459 10.4133C9.16459 12.9971 7.10898 15.0991 4.5823 15.0991ZM4.5823 6.67828C2.5683 6.67828 0.929741 8.35384 0.929741 10.4133C0.929741 12.4728 2.5683 14.1484 4.5823 14.1484C6.59629 14.1484 8.23485 12.4728 8.23485 10.4133C8.23485 8.35384 6.59629 6.67828 4.5823 6.67828Z",
              fill: "black"
          }), u.createElement("path", {
              d: "M25.9998 11.7076V11.0286C25.9467 10.1865 25.8139 9.34439 25.5748 8.55663C24.9107 6.19337 23.5293 4.02026 21.4839 2.41759C19.4918 0.869245 17.1542 0.0814918 14.8166 0H13.9665C13.7274 0 13.5149 0.0271639 13.2758 0.0543278H13.1962C13.143 0.0543278 13.0633 0.0814918 13.0102 0.0814918C12.9571 0.0814918 12.9305 0.0814918 12.8774 0.108656C12.8243 0.13582 12.7711 0.13582 12.718 0.13582C12.6383 0.13582 12.5852 0.162984 12.5055 0.162984C12.4789 0.162984 12.4524 0.162983 12.4258 0.190147C9.92878 0.651934 7.59114 1.92864 5.83792 3.9931C5.81135 4.02026 5.78479 4.04742 5.78479 4.07459C5.73166 4.12892 5.7051 4.18324 5.65197 4.21041C5.59884 4.26474 5.57228 4.31906 5.51915 4.37339C5.51915 4.40055 5.49258 4.40055 5.49258 4.42772C5.38633 4.56354 5.28007 4.69936 5.17382 4.83518C4.91127 5.20144 4.66998 5.61139 4.43091 6.00639H5.86979C6.00151 5.79882 6.13654 5.57947 6.28951 5.37846C6.39576 5.24264 6.50202 5.10682 6.60827 4.971L6.6614 4.91667C6.76766 4.80801 6.84735 4.69936 6.95361 4.5907C7.00673 4.53637 7.05986 4.48205 7.08643 4.42772C7.13955 4.37339 7.16612 4.34623 7.21925 4.2919C8.49432 2.98803 10.0882 2.06446 11.7883 1.57551C11.8414 1.54834 11.8945 1.54834 11.9476 1.52118C12.0539 1.49402 12.1602 1.46685 12.2664 1.43969C12.3461 1.41252 12.4524 1.41252 12.5321 1.38536C12.5586 1.38536 12.6117 1.3582 12.6383 1.3582C12.7711 1.33103 12.904 1.30387 13.0633 1.30387H13.143C13.3024 1.2767 13.4352 1.2767 13.5946 1.24954H13.6212C13.754 1.24954 13.9134 1.22238 14.0462 1.22238H15.0291C19.1996 1.49402 22.7592 4.2919 24.1405 8.14918C24.1405 8.16728 24.1494 8.18539 24.1671 8.2035C24.2202 8.33932 24.2468 8.47514 24.2999 8.5838C24.3265 8.63813 24.3265 8.69245 24.3531 8.74678C24.3796 8.85544 24.4062 8.93693 24.4327 9.04558C24.4593 9.12708 24.4593 9.20857 24.4859 9.2629C24.5124 9.34439 24.5124 9.42588 24.539 9.50737C24.5656 9.58886 24.5656 9.69752 24.5921 9.77901C24.6187 9.8605 24.6187 9.91483 24.6187 9.99632C24.6453 10.105 24.6453 10.1865 24.6718 10.2951C24.6718 10.3766 24.6984 10.4581 24.6984 10.5124C24.6984 10.5939 24.725 10.7026 24.725 10.7841C24.725 10.8656 24.7515 10.9742 24.7515 11.0557C24.7515 11.1372 24.7515 11.2187 24.7781 11.3002V12.3324C24.5921 16.1082 22.467 19.3679 19.3856 21.052C19.359 21.052 19.3325 21.0792 19.3325 21.0792C19.2262 21.1335 19.0934 21.1879 18.9871 21.2693C18.934 21.2965 18.8543 21.3237 18.8012 21.378C18.7215 21.4052 18.6683 21.4323 18.5887 21.4867C18.4824 21.541 18.3761 21.5682 18.2965 21.6225C18.2699 21.6496 18.2168 21.6496 18.1902 21.6768C18.0574 21.7311 17.9246 21.7855 17.7917 21.8126H17.7652C17.3136 21.9756 16.862 22.0843 16.4104 22.1658C15.7994 22.2744 15.1619 22.3559 14.4978 22.3559C12.2664 22.3559 10.1413 21.6225 8.3615 20.2914L9.53032 18.6616L5.97074 19.2049L6.50202 22.8449L7.64427 21.2693C9.61001 22.7634 12.0273 23.5783 14.4978 23.5783C16.1448 23.5783 17.712 23.2251 19.1465 22.5732H19.1731C19.3059 22.5189 19.4387 22.4374 19.5715 22.3831C19.6247 22.3559 19.6512 22.3287 19.7043 22.3287C19.8106 22.2744 19.9169 22.2201 19.9966 22.1658C20.0762 22.1114 20.1559 22.0843 20.2091 22.0299C20.2091 22.0299 20.2356 22.0299 20.2356 22.0028C21.5638 21.2422 22.7061 20.1828 23.6624 18.9333C25.0703 17.0589 25.8141 14.8858 25.9735 12.7127V12.6855C25.9735 12.6041 25.9735 12.4954 26 12.4139V11.7891C26.0002 11.7617 26.0002 11.7346 26.0002 11.7074L25.9998 11.7076Z",
              fill: "black"
          }), u.createElement("path", {
              d: "M4.57974 12.1602C5.52259 12.1602 6.28692 11.378 6.28692 10.4131C6.28692 9.44822 5.52259 8.66602 4.57974 8.66602C3.63689 8.66602 2.87256 9.44822 2.87256 10.4131C2.87256 11.378 3.63689 12.1602 4.57974 12.1602Z",
              fill: "black"
          }), u.createElement("path", {
              d: "M4.52881 18.0893L7.49358 17.9333L10.4586 17.7773L8.17273 20.8887L5.88712 23.9999L5.20796 21.0445L4.52881 18.0893Z",
              fill: "black"
          }))), uc || (uc = u.createElement("defs", null, u.createElement("clipPath", {
              id: "clip0_328_16856"
          }, u.createElement("rect", {
              width: 26,
              height: 24,
              fill: "white"
          })))))
      }
      var hc, Oc, vc, Cc, gc, xc, yc, wc, Lc, _c, Sc, Ec, Ic, Tc, Ac, Mc, kc = u.forwardRef(jc), Rc = (n.p,
      ["title", "titleId"]);
      function Pc() {
          return Pc = Object.assign ? Object.assign.bind() : function(e) {
              for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                      Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
              }
              return e
          }
          ,
          Pc.apply(this, arguments)
      }
      function Fc(e, t) {
          if (null == e)
              return {};
          var n, r, i = function(e, t) {
              if (null == e)
                  return {};
              var n, r, i = {}, a = Object.keys(e);
              for (r = 0; r < a.length; r++)
                  n = a[r],
                  t.indexOf(n) >= 0 || (i[n] = e[n]);
              return i
          }(e, t);
          if (Object.getOwnPropertySymbols) {
              var a = Object.getOwnPropertySymbols(e);
              for (r = 0; r < a.length; r++)
                  n = a[r],
                  t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
          }
          return i
      }
      function Dc(e, t) {
          var n = e.title
            , r = e.titleId
            , i = Fc(e, Rc);
          return u.createElement("svg", Pc({
              id: "Capa_1",
              xmlns: "http://www.w3.org/2000/svg",
              xmlnsXlink: "http://www.w3.org/1999/xlink",
              x: "0px",
              y: "0px",
              viewBox: "0 0 199.492 199.492",
              style: {
                  enableBackground: "new 0 0 199.492 199.492"
              },
              xmlSpace: "preserve",
              ref: t,
              "aria-labelledby": r
          }, i), n ? u.createElement("title", {
              id: r
          }, n) : null, hc || (hc = u.createElement("g", null, u.createElement("g", null, u.createElement("path", {
              d: "M168.036,0H0.002v199.492h199.489V34.142L168.036,0z M158.706,194.346H40.79v-88.015h117.912 v88.015H158.706z M195.103,195.101h-32.002v-93.158H36.399v93.157H4.397V4.391h161.714l28.992,31.465 C195.103,35.857,195.103,195.101,195.103,195.101z"
          }), u.createElement("rect", {
              x: 56.78,
              y: 127.064,
              width: 85.628,
              height: 4.381
          }), u.createElement("rect", {
              x: 56.78,
              y: 157.949,
              width: 85.628,
              height: 4.395
          }), u.createElement("path", {
              d: "M36.399,82.936h126.698V20.36H36.399V82.936z M40.79,24.751h117.912v53.794H40.79V24.751z"
          })))), Oc || (Oc = u.createElement("g", null)), vc || (vc = u.createElement("g", null)), Cc || (Cc = u.createElement("g", null)), gc || (gc = u.createElement("g", null)), xc || (xc = u.createElement("g", null)), yc || (yc = u.createElement("g", null)), wc || (wc = u.createElement("g", null)), Lc || (Lc = u.createElement("g", null)), _c || (_c = u.createElement("g", null)), Sc || (Sc = u.createElement("g", null)), Ec || (Ec = u.createElement("g", null)), Ic || (Ic = u.createElement("g", null)), Tc || (Tc = u.createElement("g", null)), Ac || (Ac = u.createElement("g", null)), Mc || (Mc = u.createElement("g", null)))
      }
      var Nc, Bc = u.forwardRef(Dc), Hc = (n.p,
      ["title", "titleId"]);
      function zc() {
          return zc = Object.assign ? Object.assign.bind() : function(e) {
              for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                      Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
              }
              return e
          }
          ,
          zc.apply(this, arguments)
      }
      function Vc(e, t) {
          if (null == e)
              return {};
          var n, r, i = function(e, t) {
              if (null == e)
                  return {};
              var n, r, i = {}, a = Object.keys(e);
              for (r = 0; r < a.length; r++)
                  n = a[r],
                  t.indexOf(n) >= 0 || (i[n] = e[n]);
              return i
          }(e, t);
          if (Object.getOwnPropertySymbols) {
              var a = Object.getOwnPropertySymbols(e);
              for (r = 0; r < a.length; r++)
                  n = a[r],
                  t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
          }
          return i
      }
      function Uc(e, t) {
          var n = e.title
            , r = e.titleId
            , i = Vc(e, Hc);
          return u.createElement("svg", zc({
              viewBox: "0 0 14 18",
              xmlns: "http://www.w3.org/2000/svg",
              xmlnsXlink: "http://www.w3.org/1999/xlink",
              ref: t,
              "aria-labelledby": r
          }, i), n ? u.createElement("title", {
              id: r
          }, n) : null, Nc || (Nc = u.createElement("g", {
              id: "Icon-/-Share",
              transform: "translate(-13.000000, -11.000000)"
          }, u.createElement("path", {
              d: "M19,21.6888275 L19,23.0213899 L13,23.0213899 L13,17.0213899 L19,17.0213899 L19,18.3142831 L21,16.3142831 L21,11.0213899 L27,11.0213899 L27,17.0213899 L21.7071068,17.0213899 L19,19.7284967 L19,20.2746139 L21.7071068,22.9817207 L27,22.9817207 L27,28.9817207 L21,28.9817207 L21,23.6888275 L19,21.6888275 Z M14,18.0213899 L14,22.0213899 L18,22.0213899 L18,18.0213899 L14,18.0213899 Z M22,12.0213899 L22,16.0213899 L26,16.0213899 L26,12.0213899 L22,12.0213899 Z M22,27.9817207 L26,27.9817207 L26,23.9817207 L22,23.9817207 L22,27.9817207 Z",
              id: "share"
          }))))
      }
      var Wc, Yc = u.forwardRef(Uc), Gc = (n.p,
      ["title", "titleId"]);
      function Zc() {
          return Zc = Object.assign ? Object.assign.bind() : function(e) {
              for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                      Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
              }
              return e
          }
          ,
          Zc.apply(this, arguments)
      }
      function Kc(e, t) {
          if (null == e)
              return {};
          var n, r, i = function(e, t) {
              if (null == e)
                  return {};
              var n, r, i = {}, a = Object.keys(e);
              for (r = 0; r < a.length; r++)
                  n = a[r],
                  t.indexOf(n) >= 0 || (i[n] = e[n]);
              return i
          }(e, t);
          if (Object.getOwnPropertySymbols) {
              var a = Object.getOwnPropertySymbols(e);
              for (r = 0; r < a.length; r++)
                  n = a[r],
                  t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
          }
          return i
      }
      function Xc(e, t) {
          var n = e.title
            , r = e.titleId
            , i = Kc(e, Gc);
          return u.createElement("svg", Zc({
              viewBox: "0 0 13 10",
              xmlns: "http://www.w3.org/2000/svg",
              xmlnsXlink: "http://www.w3.org/1999/xlink",
              ref: t,
              "aria-labelledby": r
          }, i), n ? u.createElement("title", {
              id: r
          }, n) : null, Wc || (Wc = u.createElement("polygon", {
              id: "tick",
              fillRule: "nonzero",
              points: "4.5 10 0 5.681 1.395 4.246 4.475 7.183 11.496 0 12.918 1.409"
          })))
      }
      var qc, Qc = u.forwardRef(Xc), Jc = (n.p,
      ["title", "titleId"]);
      function $c() {
          return $c = Object.assign ? Object.assign.bind() : function(e) {
              for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                      Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
              }
              return e
          }
          ,
          $c.apply(this, arguments)
      }
      function eo(e, t) {
          if (null == e)
              return {};
          var n, r, i = function(e, t) {
              if (null == e)
                  return {};
              var n, r, i = {}, a = Object.keys(e);
              for (r = 0; r < a.length; r++)
                  n = a[r],
                  t.indexOf(n) >= 0 || (i[n] = e[n]);
              return i
          }(e, t);
          if (Object.getOwnPropertySymbols) {
              var a = Object.getOwnPropertySymbols(e);
              for (r = 0; r < a.length; r++)
                  n = a[r],
                  t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
          }
          return i
      }
      function to(e, t) {
          var n = e.title
            , r = e.titleId
            , i = eo(e, Jc);
          return u.createElement("svg", $c({
              id: "twitter",
              xmlns: "http://www.w3.org/2000/svg",
              width: 24.956,
              height: 20.555,
              viewBox: "0 0 24.956 20.555",
              ref: t,
              "aria-labelledby": r
          }, i), n ? u.createElement("title", {
              id: r
          }, n) : null, qc || (qc = u.createElement("path", {
              d: "M897.42,559.6a10.258,10.258,0,0,1-2.521.719c.406-.068,1-.8,1.244-1.1a4.64,4.64,0,0,0,.839-1.529c.022-.043.038-.1-.005-.131a.142.142,0,0,0-.133.011,12.863,12.863,0,0,1-2.994,1.146.2.2,0,0,1-.206-.055,2.433,2.433,0,0,0-.262-.267,5.3,5.3,0,0,0-1.451-.889,5.052,5.052,0,0,0-2.225-.359,5.331,5.331,0,0,0-2.11.6,5.436,5.436,0,0,0-1.7,1.391,5.24,5.24,0,0,0-1.018,2.036,5.511,5.511,0,0,0-.053,2.15c.016.12.005.137-.1.12a15.991,15.991,0,0,1-10.289-5.237c-.12-.136-.185-.136-.284.011a5.219,5.219,0,0,0,.89,6.164c.2.191.409.382.632.556a5.226,5.226,0,0,1-1.985-.556c-.12-.076-.181-.032-.191.1a3.109,3.109,0,0,0,.032.59,5.277,5.277,0,0,0,3.252,4.206,3.059,3.059,0,0,0,.66.2,5.878,5.878,0,0,1-1.947.06c-.142-.027-.2.044-.142.18a5.477,5.477,0,0,0,4.092,3.426c.185.032.371.032.557.076-.012.016-.023.016-.033.033-.46.7-2.053,1.221-2.794,1.481a10.011,10.011,0,0,1-4.244.543c-.228-.034-.276-.031-.338,0s-.008.093.066.152c.29.191.584.361.883.524a14.041,14.041,0,0,0,2.837,1.135,15.111,15.111,0,0,0,14.669-3.43c3.005-2.987,4.059-7.106,4.059-11.229,0-.162.191-.251.3-.336a9.888,9.888,0,0,0,1.987-2.076.605.605,0,0,0,.123-.4V559.6C897.514,559.536,897.522,559.557,897.42,559.6Z",
              transform: "translate(-872.559 -557.139)"
          })))
      }
      var no, ro = u.forwardRef(to), io = (n.p,
      ["title", "titleId"]);
      function ao() {
          return ao = Object.assign ? Object.assign.bind() : function(e) {
              for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                      Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
              }
              return e
          }
          ,
          ao.apply(this, arguments)
      }
      function co(e, t) {
          if (null == e)
              return {};
          var n, r, i = function(e, t) {
              if (null == e)
                  return {};
              var n, r, i = {}, a = Object.keys(e);
              for (r = 0; r < a.length; r++)
                  n = a[r],
                  t.indexOf(n) >= 0 || (i[n] = e[n]);
              return i
          }(e, t);
          if (Object.getOwnPropertySymbols) {
              var a = Object.getOwnPropertySymbols(e);
              for (r = 0; r < a.length; r++)
                  n = a[r],
                  t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
          }
          return i
      }
      function oo(e, t) {
          var n = e.title
            , r = e.titleId
            , i = co(e, io);
          return u.createElement("svg", ao({
              xmlns: "http://www.w3.org/2000/svg",
              width: 24,
              height: 24,
              viewBox: "0 0 24 24",
              ref: t,
              "aria-labelledby": r
          }, i), n ? u.createElement("title", {
              id: r
          }, n) : null, no || (no = u.createElement("path", {
              d: "M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"
          })))
      }
      var lo, so = u.forwardRef(oo), uo = (n.p,
      ["title", "titleId"]);
      function bo() {
          return bo = Object.assign ? Object.assign.bind() : function(e) {
              for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                      Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
              }
              return e
          }
          ,
          bo.apply(this, arguments)
      }
      function fo(e, t) {
          if (null == e)
              return {};
          var n, r, i = function(e, t) {
              if (null == e)
                  return {};
              var n, r, i = {}, a = Object.keys(e);
              for (r = 0; r < a.length; r++)
                  n = a[r],
                  t.indexOf(n) >= 0 || (i[n] = e[n]);
              return i
          }(e, t);
          if (Object.getOwnPropertySymbols) {
              var a = Object.getOwnPropertySymbols(e);
              for (r = 0; r < a.length; r++)
                  n = a[r],
                  t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
          }
          return i
      }
      function mo(e, t) {
          var n = e.title
            , r = e.titleId
            , i = fo(e, uo);
          return u.createElement("svg", bo({
              xmlns: "http://www.w3.org/2000/svg",
              width: 131,
              height: 131,
              viewBox: "0 0 80 87",
              preserveAspectRatio: "xMidYMid meet",
              ref: t,
              "aria-labelledby": r
          }, i), n ? u.createElement("title", {
              id: r
          }, n) : null, lo || (lo = u.createElement("g", {
              transform: "translate(0.000000,87.000000) scale(0.100000,-0.100000)",
              stroke: "none"
          }, u.createElement("path", {
              d: "M433 739 c-80 -40 -111 -131 -71 -208 27 -52 60 -79 109 -90 74 -16 139 17 177 90 40 77 9 169 -72 208 -54 26 -90 26 -143 0z m148 -68 c43 -43 41 -101 -5 -147 -47 -47 -95 -47 -142 0 -71 71 -29 176 71 176 38 0 52 -5 76 -29z"
          }), u.createElement("path", {
              d: "M312 389 c-55 -27 -99 -81 -117 -143 -20 -66 -19 -92 5 -116 19 -19 33 -20 305 -20 277 0 286 1 306 21 18 18 21 29 16 71 -11 86 -73 168 -151 198 -23 8 -39 7 -83 -10 -66 -25 -102 -25 -173 0 -68 24 -57 24 -108 -1z m93 -54 c54 -19 142 -19 204 2 l51 16 38 -30 c37 -29 64 -74 76 -125 l6 -28 -270 0 -270 0 0 26 c0 40 29 91 69 124 41 34 42 35 96 15z"
          }))))
      }
      var po, jo, ho, Oo, vo, Co = u.forwardRef(mo), go = (n.p,
      ["containerConfig"]), xo = ["type"], yo = function(e) {
          var t = e.type
            , n = Object(pe.a)(e, xo);
          if (!t)
              return null;
          var i, a = r[(i = t,
          i.charAt(0).toUpperCase() + i.slice(1))];
          return "chevronRight" === t ? Object(B.jsx)(a, Object(s.a)({
              style: {
                  transform: "rotate(180deg)"
              }
          }, n)) : Object(B.jsx)(a, Object(s.a)({}, n))
      }, wo = function(e) {
          var t = e.containerConfig
            , n = Object(pe.a)(e, go);
          return t ? Object(B.jsx)(f.e, Object(s.a)(Object(s.a)({
              borderRadius: "50%",
              justifyContent: "center",
              alignItems: "center"
          }, t), {}, {
              children: Object(B.jsx)(yo, Object(s.a)({}, n))
          })) : Object(B.jsx)(yo, Object(s.a)({}, n))
      }, Lo = n.p + "static/media/LogoHondaLoading.74acd62f.png", _o = n.p + "static/media/LogoHondaFinanceLoading.2a3ff94c.png", So = function(e) {
          var t = e.type
            , n = void 0 === t ? "page" : t
            , r = Object(z.l)().data;
          if (!r)
              return null;
          var i = r.locale
            , a = r.additionalLoadingLogo;
          return Object(B.jsx)(f.b, {
              minHeight: ["calc(100vh - 4rem)", "calc(100vh - 58px)"],
              bg: "page" === n ? "white" : "transparent",
              justifyContent: "center",
              alignItems: "center",
              children: Object(B.jsxs)(Kl, {
                  d: "flex",
                  flexDir: "column",
                  w: ["15rem", "25rem"],
                  mt: [-60, -150, 0],
                  animate: "active",
                  initial: "inactive",
                  variants: {
                      active: {
                          opacity: 1,
                          scale: 1,
                          y: 0,
                          transition: {
                              delay: .5
                          }
                      },
                      inactive: {
                          opacity: 0,
                          scale: .9,
                          y: 10
                      }
                  },
                  opacity: 0,
                  children: ["page" === n && Object(B.jsxs)(f.h, {
                      justifyContent: i.includes("GB") ? "space-between" : "center",
                      alignItems: "center",
                      children: [Object(B.jsx)(W.a, {
                          src: Lo,
                          width: "45%",
                          height: "auto"
                      }), i.includes("GB") && Object(B.jsx)(W.a, {
                          src: a.url || _o,
                          width: "45%",
                          height: "auto"
                      })]
                  }), Object(B.jsx)(U.b, {
                      isIndeterminate: !0,
                      colorScheme: "red",
                      bg: "gray.200",
                      height: "0.3rem",
                      mt: "3rem"
                  })]
              })
          })
      }, Eo = n(314), Io = function(e) {
          var t = e.i18n
            , n = e.isPrevVisible
            , r = e.isNextVisible
            , i = e.onClick
            , a = t.next
            , c = t.prev;
          return Object(B.jsxs)(f.h, {
              top: "2rem",
              right: "3rem",
              spacing: 5,
              position: "absolute",
              children: [Object(B.jsxs)(f.h, {
                  as: "button",
                  transition: "0.2s opacity",
                  opacity: n ? .5 : .2,
                  _hover: {
                      opacity: n ? 1 : .2,
                      color: n ? "brand.red" : ""
                  },
                  onClick: function() {
                      return i(n ? -1 : 0)
                  },
                  cursor: n ? "pointer" : "initial",
                  children: [Object(B.jsx)(wo, {
                      type: "chevronLeft",
                      width: "0.4rem",
                      fill: "currentColor"
                  }), Object(B.jsx)(he, {
                      type: "h5-caps",
                      mb: -1,
                      children: c
                  })]
              }), Object(B.jsxs)(f.h, {
                  as: "button",
                  transition: "0.2s opacity",
                  opacity: r ? .5 : .2,
                  _hover: {
                      opacity: r ? 1 : .2,
                      color: r ? "brand.red" : ""
                  },
                  onClick: function() {
                      return i(r ? 1 : 0)
                  },
                  cursor: r ? "pointer" : "initial",
                  children: [Object(B.jsx)(he, {
                      type: "h5-caps",
                      mb: -1,
                      children: a
                  }), Object(B.jsx)(wo, {
                      type: "chevronRight",
                      width: "0.4rem",
                      fill: "currentColor"
                  })]
              })]
          })
      }, To = {
          width: "100%",
          height: "100%",
          p: ["2rem 1rem 2rem", "2rem 1rem 2rem", "3rem 5rem 6rem 30rem"]
      }, Ao = {
          alignItems: "flex-end",
          spacing: "1.5rem",
          mx: "-2rem"
      }, Mo = {
          type: "large",
          startIcon: "chevronLeft",
          minW: "10rem",
          justifyContent: "space-between",
          color: "white",
          shuntStart: "-0.3rem",
          width: ["calc(100vw - 3rem)", "initial"],
          m: ["0 -2rem", 0]
      }, ko = {
          my: "3rem",
          mx: ["-2rem", 0],
          spacing: 10
      }, Ro = function(e) {
          return {
              active: {
                  opacity: 1,
                  y: 0,
                  transition: {
                      delay: .2 * e
                  }
              },
              inactive: {
                  opacity: 0,
                  y: 10
              }
          }
      }, Po = function(e) {
          return {
              position: "relative",
              flex: 1,
              flexDir: "column",
              minW: ["initial", "30rem"],
              maxW: e ? "30rem" : "initial"
          }
      }, Fo = function(e) {
          return {
              padding: e ? "0.5rem 0 2rem" : "0.5rem 0 1rem",
              type: "h5",
              width: "25rem"
          }
      }, Do = {
          spacing: [0, 5],
          direction: ["column", "row"],
          justifyContent: ["flex-start", "space-between"]
      }, No = {
          type: "h4",
          color: "brand.red",
          letterSpacing: 1,
          fontWeight: 400,
          position: "relative",
          top: [0, "-0.3rem"],
          padding: 0
      }, Bo = {
          type: "h7-caps",
          bg: "gray.1000",
          padding: "0.4rem 1rem 0.1rem",
          color: "white",
          fontWeight: "700",
          letterSpacing: 1.5,
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 5
      }, Ho = {
          flex: 2,
          spacing: 7,
          color: "gray.500",
          ml: "3rem",
          height: "10rem",
          alignSelf: "center"
      }, zo = {
          boxShadow: "0 0 10px rgba(0,0,0,0.2)",
          width: "15rem",
          minWidth: "15rem",
          pointerEvents: "none"
      }, Vo = function(e) {
          return {
              height: e ? "13rem" : "11rem",
              m: "-1rem -3rem 2rem -3rem",
              padding: "1rem 0 0"
          }
      }, Uo = function(e) {
          return {
              type: "outline",
              mt: "auto",
              noWrap: !0,
              height: "4rem",
              padding: "0 4rem",
              mb: ["1.5rem", "0.5rem"],
              onClick: e,
              width: "fit-content",
              borderColor: "brand.red"
          }
      }, Wo = function(e) {
          var t = e.accessories
            , n = e.visibleItems
            , r = e.isRow
            , i = e.offsetX
            , a = t.map((function(e) {
              var t = Object(ce.h)(e);
              return {
                  accessory: t,
                  accessoryId: e,
                  thumbnailUrl: null === t || void 0 === t ? void 0 : t.thumbnailUrl
              }
          }
          )).filter((function(e) {
              return !!e.accessory
          }
          ));
          return Object(B.jsx)(f.h, Object(s.a)(Object(s.a)({}, Ho), {}, {
              children: a.map((function(e, t) {
                  var c = e.accessory
                    , o = e.thumbnailUrl
                    , l = i + n < a.length ? i + n : a.length
                    , d = Object(B.jsxs)(u.Fragment, {
                      children: [Object(B.jsxs)(f.e, Object(s.a)(Object(s.a)({
                          position: "relative",
                          bg: "red"
                      }, zo), {}, {
                          children: [Object(B.jsx)(W.a, Object(s.a)({
                              src: o
                          }, zo)), Object(B.jsx)(Le, {
                              accessory: c,
                              context: "accessory_selector_button",
                              flexWrapperProps: {
                                  position: "absolute",
                                  width: "100%"
                              }
                          })]
                      })), t < l - 1 ? Object(B.jsx)(f.a, {
                          width: "1.5rem",
                          minW: "1.2rem",
                          children: Object(B.jsx)(wo, {
                              type: "add",
                              width: "100%",
                              fill: "currentColor"
                          })
                      }) : Object(B.jsx)(f.j, {
                          minW: "1rem"
                      })]
                  }, "accessory".concat(t));
                  return r ? t >= i && t < n + i ? d : null : d
              }
              ))
          }))
      }, Yo = function(e) {
          var t = e.config
            , n = e.i18n
            , r = e.index
            , i = Object(z.m)().width
            , a = Object(z.l)().data
            , c = (Object(j.d)((function(e) {
              return e.getSelectedVariant()
          }
          )),
          Object(u.useState)(!0))
            , o = Object(d.a)(c, 2)
            , l = o[0]
            , b = o[1]
            , m = Object(u.useState)(!1)
            , p = Object(d.a)(m, 2)
            , h = p[0]
            , O = p[1]
            , v = Object(u.useState)(0)
            , C = Object(d.a)(v, 2)
            , g = C[0]
            , x = C[1]
            , y = Object(u.useState)(3)
            , w = Object(d.a)(y, 2)
            , L = w[0]
            , _ = w[1]
            , S = Object(de.h)()
            , E = Object(de.g)()
            , I = Object(u.useRef)(null)
            , T = n.configurator_add_configuration;
          if (Object(u.useEffect)((function() {
              if (I && I.current) {
                  var e = I.current.getBoundingClientRect().width;
                  b(e > 920),
                  _(Math.round((e - 320) / 230))
              }
          }
          ), [I, i]),
          !a)
              return null;
          var A = a.locale
            , M = t.accessoryPartNumbers
            , k = t.description
            , R = t.displayName
            , P = t.strapline
            , F = Object(ce.g)(M)
            , D = Object(q.t)(F)
            , N = function() {
              Object(ce.e)(),
              Object(ce.c)(F, !0),
              E.push(S.pathname)
          };
          return Object(B.jsxs)(Kl, Object(s.a)(Object(s.a)({
              ref: I
          }, function(e) {
              return {
                  initial: "inactive",
                  animate: "active",
                  variants: Ro(e),
                  borderBottom: "solid 3px",
                  borderColor: "brand.red",
                  bg: "white",
                  boxShadow: "0 0 10px rgba(0,0,0,0.2)",
                  width: "100%",
                  opacity: 0,
                  p: ["4rem 2rem 2rem", "4rem 3rem 2rem"],
                  position: "relative",
                  overflow: "hidden",
                  flexWrap: "wrap"
              }
          }(r)), {}, {
              children: [Object(B.jsxs)(f.e, {
                  width: "100%",
                  flexShrink: 0,
                  children: [P && Object(B.jsx)(he, Object(s.a)(Object(s.a)({}, Bo), {}, {
                      children: P
                  })), l && M.length > L && Object(B.jsx)(Io, {
                      i18n: n,
                      onClick: function(e) {
                          x(g + e)
                      },
                      isPrevVisible: g > 0,
                      isNextVisible: g < M.length - L
                  }), Object(B.jsxs)(f.e, Object(s.a)(Object(s.a)({}, Po(l)), {}, {
                      children: [Object(B.jsxs)(f.l, Object(s.a)(Object(s.a)({}, Do), {}, {
                          children: [Object(B.jsx)(he, {
                              type: "h3",
                              children: R
                          }), Object(B.jsx)(he, Object(s.a)(Object(s.a)({}, No), {}, {
                              children: Object(q.f)(D, A, {
                                  trimIntegers: !0
                              })
                          }))]
                      })), Object(B.jsx)(he, Object(s.a)(Object(s.a)({}, Fo(l)), {}, {
                          children: k
                      })), !l && Object(B.jsx)(f.e, Object(s.a)(Object(s.a)({}, Vo(h)), {}, {
                          children: Object(B.jsx)(Vu, {
                              onUpdate: function(e) {
                                  var t = e.clientWidth
                                    , n = e.scrollWidth;
                                  O(t < n)
                              },
                              paddingX: 20,
                              children: Object(B.jsx)(Wo, {
                                  accessories: M,
                                  offsetX: 0,
                                  visibleItems: M.length
                              })
                          })
                      }))]
                  })), l && Object(B.jsx)(Wo, {
                      accessories: M,
                      isRow: !0,
                      offsetX: g,
                      visibleItems: L
                  })]
              }), Object(B.jsxs)(f.l, {
                  display: ["flex", "flex", "none"],
                  children: [Object(B.jsx)(Qt, Object(s.a)(Object(s.a)({
                      mr: "1rem"
                  }, Uo(N)), {}, {
                      children: "".concat(T, " (").concat(M.length, ")")
                  })), Object(B.jsx)(ye, {
                      context: "one_minute_configurator",
                      accessories: F
                  })]
              }), Object(B.jsxs)(f.h, {
                  display: ["none", "none", "flex"],
                  children: [Object(B.jsx)(Qt, Object(s.a)(Object(s.a)({
                      mr: "1rem"
                  }, Uo(N)), {}, {
                      children: "".concat(T, " (").concat(M.length, ")")
                  })), Object(B.jsx)(ye, {
                      context: "one_minute_configurator",
                      accessories: F
                  })]
              })]
          }))
      }, Go = n(35), Zo = function(e) {
          var t = e.i18n
            , n = Object(j.d)((function(e) {
              return (0,
              e.getSelectedVariant)()
          }
          ))
            , r = Object(z.m)().width
            , i = Object(de.h)()
            , a = Object(de.g)()
            , c = r < parseInt(m.a.breakpoints.sm)
            , o = t.back
            , l = t.configurator_title
            , d = t.configurator_description;
          if (!n)
              return null;
          var u = Go.isMobile || c
            , b = function() {
              a.push(i.pathname)
          };
          return Object(B.jsxs)(f.a, Object(s.a)(Object(s.a)({}, To), {}, {
              children: [u && Object(B.jsxs)(f.n, Object(s.a)(Object(s.a)({}, Ao), {}, {
                  children: [Object(B.jsx)(kt, {
                      onClick: b,
                      i18n: t
                  }), Object(B.jsx)(f.d, {
                      my: "3rem",
                      borderBottom: "solid 1px rgba(0,0,0,0.2)"
                  })]
              })), Object(B.jsxs)(f.h, {
                  spacing: 4,
                  alignItems: "flex-start",
                  mb: u ? "1rem" : 0,
                  children: [Object(B.jsx)(wo, {
                      type: "configure",
                      width: "1.3rem"
                  }), Object(B.jsx)(he, {
                      type: "h3",
                      children: l
                  })]
              }), !u && Object(B.jsx)(f.d, {
                  my: "1rem",
                  borderBottom: "solid 1px rgba(0,0,0,0.1)"
              }), Object(B.jsx)(he, {
                  type: "h4",
                  children: d
              }), Object(B.jsx)(f.n, Object(s.a)(Object(s.a)({}, ko), {}, {
                  children: n.accessoryConfigurations.map((function(e, n) {
                      return Object(B.jsx)(Yo, {
                          i18n: t,
                          config: e,
                          index: n
                      }, "config_".concat(n))
                  }
                  ))
              })), Object(B.jsx)(Qt, Object(s.a)(Object(s.a)({}, Mo), {}, {
                  onClick: b,
                  children: o
              }))]
          }))
      }, Ko = function() {
          return Object(B.jsx)(V, {})
      }, Xo = {
          flexDir: "column",
          height: "100%",
          justifyContent: ["flex-start", "center"]
      }, qo = {
          position: "absolute",
          top: 0,
          right: 0
      }, Qo = {
          spacing: 10,
          alignItems: "flex-start",
          justifySelf: "flex-end"
      }, Jo = {
          direction: ["column-reverse", "row"],
          spacing: 10,
          paddingTop: "4rem",
          width: "100%"
      }, $o = function(e) {
          return {
              padding: "2rem",
              width: "100%",
              borderRadius: "0.3rem",
              bg: "rgba(".concat(e, ",0.05)"),
              border: "solid 1px",
              borderColor: "rgba(".concat(e, ",0.1)")
          }
      }, el = {
          flex: 1,
          justifyContent: "center"
      }, tl = Object(s.a)(Object(s.a)({}, el), {}, {
          type: "large",
          bg: "brand.blueGray",
          _hover: {
              bg: "brand.slate"
          }
      }), nl = Object(s.a)(Object(s.a)({}, el), {}, {
          bg: "transparent",
          type: "outline",
          height: "5rem"
      }), rl = function(e) {
          var t = e.onClick
            , n = e.i18n
            , r = e.umbraco
            , i = Object(j.a)((function(e) {
              return e.currentPartNumber
          }
          ))
            , a = Object(j.a)((function(e) {
              return e.setCurrentPartNumber
          }
          ))
            , c = Object(j.a)((function(e) {
              return e.currentIncompatible
          }
          ))
            , o = Object(j.a)((function(e) {
              return e.setCurrentIncompatible
          }
          ))
            , l = r.locale
            , d = n.notify_incompatible_title
            , u = n.notify_incompatible_content
            , b = n.notify_incompatible_confirm
            , m = n.notify_incompatible_deny
            , p = n.price_unavailable
            , h = function(e) {
              if (e && i) {
                  Object(ce.l)(c);
                  var n = Object(ce.h)(i);
                  n && Object(ce.d)(n)
              }
              a(null),
              o([]),
              t()
          };
          return Object(B.jsxs)(f.n, Object(s.a)(Object(s.a)({}, Qo), {}, {
              children: [Object(B.jsx)(he, {
                  type: "h1",
                  children: d
              }), Object(B.jsx)(he, {
                  type: "copy",
                  children: u
              }), Object(B.jsx)(f.l, Object(s.a)(Object(s.a)({}, $o("204,0,0")), {}, {
                  children: c.map((function(e, t) {
                      return Object(B.jsxs)(f.e, {
                          justifyContent: "space-between",
                          children: [Object(B.jsx)(he, {
                              type: "spec",
                              color: "brand.red",
                              children: null === e || void 0 === e ? void 0 : e.name
                          }), Object(B.jsx)(he, {
                              type: "spec",
                              color: "brand.red",
                              children: e && e.price ? Object(q.b)(e.price, l) : p
                          })]
                      }, "incompatible_".concat(t))
                  }
                  ))
              })), Object(B.jsxs)(f.l, Object(s.a)(Object(s.a)({}, Jo), {}, {
                  children: [Object(B.jsx)(Qt, Object(s.a)(Object(s.a)({}, nl), {}, {
                      onClick: function() {
                          return h(!1)
                      },
                      children: m
                  })), Object(B.jsx)(Qt, Object(s.a)(Object(s.a)({}, tl), {}, {
                      onClick: function() {
                          return h(!0)
                      },
                      children: b
                  }))]
              }))]
          }))
      }, il = n(39), al = {
          addAccIncompatible: rl,
          addAccDependencies: function(e) {
              var t = e.onClick
                , n = e.i18n
                , r = e.umbraco
                , i = Object(j.a)((function(e) {
                  return e.currentPartNumber
              }
              ))
                , a = Object(j.a)((function(e) {
                  return e.setCurrentPartNumber
              }
              ))
                , c = Object(j.a)((function(e) {
                  return e.currentRequired
              }
              ))
                , o = Object(j.a)((function(e) {
                  return e.setCurrentRequired
              }
              ))
                , l = r.locale
                , d = n.notify_unmetdependency_title
                , u = n.notify_unmetdependency_content
                , b = n.notify_unmetdependency_confirm
                , m = n.notify_unmetdependency_deny
                , p = function(e) {
                  if (e && i) {
                      var n = Object(ce.h)(i)
                        , r = [].concat(Object(il.a)(c), [n]);
                      r && Object(ce.c)(r, !0)
                  }
                  a(null),
                  o([]),
                  t()
              };
              return Object(B.jsxs)(f.n, Object(s.a)(Object(s.a)({}, Qo), {}, {
                  children: [Object(B.jsx)(he, {
                      type: "h1",
                      children: d
                  }), Object(B.jsx)(he, {
                      type: "copy",
                      children: u
                  }), Object(B.jsx)(f.l, Object(s.a)(Object(s.a)({}, $o("200,200,200")), {}, {
                      children: c.map((function(e, t) {
                          return Object(B.jsxs)(f.e, {
                              justifyContent: "space-between",
                              children: [Object(B.jsx)(he, {
                                  type: "spec",
                                  children: null === e || void 0 === e ? void 0 : e.name
                              }), Object(B.jsx)(he, {
                                  type: "spec",
                                  children: Object(q.f)(null === e || void 0 === e ? void 0 : e.price, l)
                              }, "required_".concat(t))]
                          }, "required_".concat(t))
                      }
                      ))
                  })), Object(B.jsxs)(f.l, Object(s.a)(Object(s.a)({}, Jo), {}, {
                      children: [Object(B.jsx)(Qt, Object(s.a)(Object(s.a)({}, nl), {}, {
                          onClick: function() {
                              return p(!1)
                          },
                          children: m
                      })), Object(B.jsx)(Qt, Object(s.a)(Object(s.a)({}, tl), {}, {
                          onClick: function() {
                              return p(!0)
                          },
                          children: b
                      }))]
                  }))]
              }))
          },
          hondaContribution: function(e) {
              var t = e.i18n
                , n = t.finance_rex_honda_deposit_contribution
                , r = t.finance_rex_honda_deposit_contribution_copy;
              return Object(B.jsxs)(f.n, Object(s.a)(Object(s.a)({}, Qo), {}, {
                  children: [Object(B.jsx)(he, {
                      type: "h1",
                      children: n
                  }), Object(B.jsx)(he, {
                      type: "copy",
                      children: r
                  })]
              }))
          },
          removeAccHasDependencies: function(e) {
              var t = e.onClick
                , n = e.i18n
                , r = e.umbraco
                , i = Object(j.a)((function(e) {
                  return e.currentPartNumber
              }
              ))
                , a = Object(j.a)((function(e) {
                  return e.currentRequired
              }
              ))
                , c = Object(j.a)((function(e) {
                  return e.setCurrentRequired
              }
              ))
                , o = r.locale
                , l = n.notify_removedependencies_title
                , d = n.notify_required_accessory
                , u = n.notify_dependency_confirm
                , b = n.notify_dependency_deny
                , m = n.price_unavailable
                , p = function(e) {
                  if (e && i) {
                      var n = Object(ce.h)(i)
                        , r = [].concat(Object(il.a)(a), [n]);
                      Object(ce.l)(r, !0)
                  }
                  c([]),
                  t()
              };
              return Object(B.jsxs)(f.n, Object(s.a)(Object(s.a)({}, Qo), {}, {
                  children: [Object(B.jsx)(he, {
                      type: "h1",
                      children: l
                  }), Object(B.jsx)(he, {
                      type: "copy",
                      children: d
                  }), Object(B.jsx)(f.l, Object(s.a)(Object(s.a)({}, $o("204,0,0")), {}, {
                      children: a.map((function(e, t) {
                          return Object(B.jsxs)(f.e, {
                              justifyContent: "space-between",
                              children: [Object(B.jsx)(he, {
                                  type: "spec",
                                  color: "brand.red",
                                  children: null === e || void 0 === e ? void 0 : e.name
                              }), Object(B.jsx)(he, {
                                  type: "spec",
                                  color: "brand.red",
                                  children: e && e.price ? Object(q.b)(e.price, o) : m
                              })]
                          }, "required_".concat(t))
                      }
                      ))
                  })), Object(B.jsxs)(f.l, Object(s.a)(Object(s.a)({}, Jo), {}, {
                      children: [Object(B.jsx)(Qt, Object(s.a)(Object(s.a)({}, nl), {}, {
                          onClick: function() {
                              return p(!1)
                          },
                          children: b
                      })), Object(B.jsx)(Qt, Object(s.a)(Object(s.a)({}, tl), {}, {
                          onClick: function() {
                              return p(!0)
                          },
                          children: u
                      }))]
                  }))]
              }))
          },
          removeAccIsDependency: function(e) {
              var t = e.onClick
                , n = e.i18n
                , r = e.umbraco
                , i = Object(j.a)((function(e) {
                  return e.currentPartNumber
              }
              ))
                , a = Object(j.a)((function(e) {
                  return e.currentRequired
              }
              ))
                , c = Object(j.a)((function(e) {
                  return e.setCurrentRequired
              }
              ))
                , o = r.locale
                , l = n.notify_dependency_title
                , d = n.notify_dependency_content
                , u = n.notify_dependency_confirm
                , b = n.notify_dependency_deny
                , m = n.price_unavailable
                , p = function(e) {
                  if (e && i) {
                      var n = Object(ce.h)(i)
                        , r = [].concat(Object(il.a)(a), [n]);
                      Object(ce.l)(r, !0)
                  }
                  c([]),
                  t()
              };
              return Object(B.jsxs)(f.n, Object(s.a)(Object(s.a)({}, Qo), {}, {
                  children: [Object(B.jsx)(he, {
                      type: "h1",
                      children: l
                  }), Object(B.jsx)(he, {
                      type: "copy",
                      children: d
                  }), Object(B.jsx)(f.l, Object(s.a)(Object(s.a)({}, $o("204,0,0")), {}, {
                      children: a.map((function(e, t) {
                          return Object(B.jsxs)(f.e, {
                              justifyContent: "space-between",
                              children: [Object(B.jsx)(he, {
                                  type: "spec",
                                  color: "brand.red",
                                  children: null === e || void 0 === e ? void 0 : e.name
                              }), Object(B.jsx)(he, {
                                  type: "spec",
                                  color: "brand.red",
                                  children: e && e.price ? Object(q.b)(e.price, o) : m
                              })]
                          }, "required_".concat(t))
                      }
                      ))
                  })), Object(B.jsxs)(f.l, Object(s.a)(Object(s.a)({}, Jo), {}, {
                      children: [Object(B.jsx)(Qt, Object(s.a)(Object(s.a)({}, nl), {}, {
                          onClick: function() {
                              return p(!1)
                          },
                          children: b
                      })), Object(B.jsx)(Qt, Object(s.a)(Object(s.a)({}, tl), {}, {
                          onClick: function() {
                              return p(!0)
                          },
                          children: u
                      }))]
                  }))]
              }))
          },
          removeAccPack: function(e) {
              var t = e.onClick
                , n = e.i18n
                , r = e.umbraco
                , i = Object(j.a)((function(e) {
                  return e.currentPack
              }
              ))
                , a = Object(j.a)((function(e) {
                  return e.setCurrentPack
              }
              ))
                , c = r.locale
                , o = n.notify_packremove_title
                , l = n.notify_packremove_content
                , d = n.notify_packremove_confirm
                , u = n.notify_packremove_deny
                , b = n.price_unavailable
                , m = function(e) {
                  e && i && Object(ce.m)(i, !0),
                  a(null),
                  t()
              };
              return Object(B.jsxs)(f.n, Object(s.a)(Object(s.a)({}, Qo), {}, {
                  children: [Object(B.jsx)(he, {
                      type: "h1",
                      children: o
                  }), Object(B.jsx)(he, {
                      type: "copy",
                      children: l
                  }), Object(B.jsx)(f.l, Object(s.a)(Object(s.a)({}, $o("204,0,0")), {}, {
                      children: Object(B.jsxs)(f.e, {
                          justifyContent: "space-between",
                          children: [Object(B.jsx)(he, {
                              type: "spec",
                              color: "brand.red",
                              children: null === i || void 0 === i ? void 0 : i.name
                          }), Object(B.jsx)(he, {
                              type: "spec",
                              color: "brand.red",
                              children: i && i.price ? Object(q.b)(i.price, c) : b
                          })]
                      })
                  })), Object(B.jsxs)(f.l, Object(s.a)(Object(s.a)({}, Jo), {}, {
                      children: [Object(B.jsx)(Qt, Object(s.a)(Object(s.a)({}, nl), {}, {
                          onClick: function() {
                              return m(!1)
                          },
                          children: u
                      })), Object(B.jsx)(Qt, Object(s.a)(Object(s.a)({}, tl), {}, {
                          onClick: function() {
                              return m(!0)
                          },
                          children: d
                      }))]
                  }))]
              }))
          },
          removeAccColourNoLongerCompatible: function(e) {
              var t = e.onClick
                , n = e.i18n
                , r = e.umbraco
                , i = Object(j.a)()
                , a = i.setCurrentIncompatible
                , c = i.currentIncompatible
                , o = Object(j.e)().modalCallback
                , l = r.locale
                , d = n.notify_colourremove_content
                , u = n.notify_colourremove_title
                , b = n.notify_colourremove_confirm
                , m = n.notify_colourremove_deny
                , p = n.price_unavailable
                , h = function(e) {
                  t(),
                  e && Object(ce.l)(c, !0),
                  a([]),
                  o && o(e)
              };
              return Object(B.jsxs)(f.n, Object(s.a)(Object(s.a)({}, Qo), {}, {
                  children: [Object(B.jsx)(he, {
                      type: "h1",
                      children: u
                  }), Object(B.jsx)(he, {
                      type: "copy",
                      children: d
                  }), Object(B.jsx)(f.l, Object(s.a)(Object(s.a)({}, $o("204,0,0")), {}, {
                      children: c.map((function(e, t) {
                          return Object(B.jsxs)(f.e, {
                              justifyContent: "space-between",
                              children: [Object(B.jsx)(he, {
                                  type: "spec",
                                  color: "brand.red",
                                  children: null === e || void 0 === e ? void 0 : e.name
                              }), Object(B.jsx)(he, {
                                  type: "spec",
                                  color: "brand.red",
                                  children: e && e.price ? Object(q.b)(e.price, l) : p
                              })]
                          }, "required_".concat(t))
                      }
                      ))
                  })), Object(B.jsxs)(f.l, Object(s.a)(Object(s.a)({}, Jo), {}, {
                      children: [Object(B.jsx)(Qt, Object(s.a)(Object(s.a)({}, nl), {}, {
                          onClick: function() {
                              return h(!1)
                          },
                          children: m
                      })), Object(B.jsx)(Qt, Object(s.a)(Object(s.a)({}, tl), {}, {
                          onClick: function() {
                              return h(!0)
                          },
                          children: b
                      }))]
                  }))]
              }))
          },
          removeAccVariantNoLongerCompatible: function(e) {
              var t = e.onClick
                , n = e.i18n
                , r = e.umbraco
                , i = Object(j.a)()
                , a = i.setCurrentIncompatible
                , c = i.currentIncompatible
                , o = Object(j.e)().modalCallback
                , l = r.locale
                , d = n.notify_variantremove_content
                , u = n.notify_variantremove_title
                , b = n.notify_variantremove_confirm
                , m = n.notify_variantremove_deny
                , p = n.price_unavailable
                , h = function(e) {
                  t(),
                  e && Object(ce.l)(c, !0),
                  a([]),
                  o && o(e)
              };
              return Object(B.jsxs)(f.n, Object(s.a)(Object(s.a)({}, Qo), {}, {
                  children: [Object(B.jsx)(he, {
                      type: "h1",
                      children: u
                  }), Object(B.jsx)(he, {
                      type: "copy",
                      children: d
                  }), Object(B.jsx)(f.l, Object(s.a)(Object(s.a)({}, $o("204,0,0")), {}, {
                      children: c.map((function(e, t) {
                          return Object(B.jsxs)(f.e, {
                              justifyContent: "space-between",
                              children: [Object(B.jsx)(he, {
                                  type: "spec",
                                  color: "brand.red",
                                  children: null === e || void 0 === e ? void 0 : e.name
                              }), Object(B.jsx)(he, {
                                  type: "spec",
                                  color: "brand.red",
                                  children: e && e.price ? Object(q.f)(e.price, l) : p
                              })]
                          }, "required_".concat(t))
                      }
                      ))
                  })), Object(B.jsxs)(f.l, Object(s.a)(Object(s.a)({}, Jo), {}, {
                      children: [Object(B.jsx)(Qt, Object(s.a)(Object(s.a)({}, nl), {}, {
                          onClick: function() {
                              return h(!1)
                          },
                          children: m
                      })), Object(B.jsx)(Qt, Object(s.a)(Object(s.a)({}, tl), {}, {
                          onClick: function() {
                              return h(!0)
                          },
                          children: b
                      }))]
                  }))]
              }))
          },
          resetColourNoLongerCompatible: function(e) {
              var t = e.onClick
                , n = e.i18n
                , r = (e.umbraco,
              Object(j.e)().modalCallback)
                , i = n.notify_variantcolour_content
                , a = n.notify_variantcolour_title
                , c = n.notify_variantcolour_confirm
                , o = n.notify_colourremove_deny
                , l = function(e) {
                  t(),
                  r && r(e)
              };
              return Object(B.jsxs)(f.n, Object(s.a)(Object(s.a)({}, Qo), {}, {
                  children: [Object(B.jsx)(he, {
                      type: "h1",
                      children: a
                  }), Object(B.jsx)(he, {
                      type: "copy",
                      children: i
                  }), Object(B.jsxs)(f.l, Object(s.a)(Object(s.a)({}, Jo), {}, {
                      children: [Object(B.jsx)(Qt, Object(s.a)(Object(s.a)({}, nl), {}, {
                          onClick: function() {
                              return l(!1)
                          },
                          children: o
                      })), Object(B.jsx)(Qt, Object(s.a)(Object(s.a)({}, tl), {}, {
                          onClick: function() {
                              return l(!0)
                          },
                          children: c
                      }))]
                  }))]
              }))
          }
      }, cl = function(e) {
          var t = e.modalId
            , n = e.i18n
            , r = Object(j.e)((function(e) {
              return e.setIsModalVisible
          }
          ))
            , i = Object(z.l)().data
            , a = function() {
              r(!1, t)
          }
            , c = al[t];
          return Object(B.jsxs)(f.e, Object(s.a)(Object(s.a)({}, Xo), {}, {
              children: [Object(B.jsx)(kt, Object(s.a)({
                  onClick: a,
                  i18n: n
              }, qo)), Object(B.jsx)(c, {
                  i18n: n,
                  onClick: a,
                  umbraco: i
              })]
          }))
      }, ol = function() {
          return Object(B.jsx)(f.b, {
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 0,
              children: Object(B.jsx)(U.b, {
                  isIndeterminate: !0,
                  colorScheme: "red",
                  height: "0.3rem",
                  width: "40%"
              })
          })
      }, ll = function() {
          var e = Object(u.useRef)(null)
            , t = Object(u.useState)(0)
            , n = Object(d.a)(t, 2)
            , r = n[0]
            , i = n[1]
            , a = Object(z.m)().width
            , c = Object(j.d)((function(e) {
              return {
                  getSelectedVariant: e.getSelectedVariant(),
                  selectedColourIndex: e.selectedColourIndex
              }
          }
          ))
            , o = c.getSelectedVariant
            , l = c.selectedColourIndex
            , s = Object(j.e)((function(e) {
              return {
                  setIsModalVisible: e.setIsModalVisible
              }
          }
          )).setIsModalVisible;
          Object(u.useEffect)((function() {
              if (e && e.current) {
                  var t = e.current
                    , n = null === t || void 0 === t ? void 0 : t.getBoundingClientRect().width;
                  i(n / 1.7777)
              }
          }
          ), [e, a]);
          var b = o
            , m = null === b || void 0 === b ? void 0 : b.appDefaultParts
            , p = null === b || void 0 === b ? void 0 : b.colours[l]
            , h = {
              variant: null === b || void 0 === b ? void 0 : b.id,
              colour: null === p || void 0 === p ? void 0 : p.id,
              parts: m
          }
            , O = Object(Y.a)(h, "rider", "low");
          return O ? Object(B.jsxs)(f.e, {
              ref: e,
              height: r,
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              children: [Object(B.jsx)(Kl, {
                  as: "button",
                  animate: "active",
                  initial: "inactive",
                  variants: {
                      active: {
                          opacity: 1,
                          transition: {
                              delay: .5
                          }
                      },
                      inactive: {
                          opacity: 0
                      }
                  },
                  display: "flex",
                  flexDir: "row",
                  position: "absolute",
                  top: "2rem",
                  right: "2rem",
                  onClick: function() {
                      s(!1, "riderView")
                  },
                  cursor: "pointer",
                  alignItems: "center",
                  opacity: "0",
                  zIndex: "10",
                  border: "unset",
                  children: Object(B.jsx)(f.b, {
                      width: "3.5rem",
                      height: "3.5rem",
                      bg: "white",
                      borderRadius: "1.75rem",
                      boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                      mr: "1rem",
                      opacity: "0.8",
                      _hover: {
                          opacity: 1
                      },
                      children: Object(B.jsx)(wo, {
                          type: "close",
                          width: "1rem",
                          height: "1.5rem",
                          fill: "brand.slate"
                      })
                  })
              }), Object(B.jsx)(f.a, {
                  overflow: "hidden",
                  bg: "white",
                  children: Object(B.jsx)(W.a, {
                      src: O[0],
                      fallback: ol(),
                      height: "auto",
                      width: "100%",
                      margin: "-0.1rem",
                      position: "relative",
                      zIndex: 1
                  })
              })]
          }) : Object(B.jsx)(en, {
              text: "Rider view not available"
          })
      }, sl = n(306), dl = n(307), ul = n(308), bl = n(309), fl = function(e) {
          var t, n = e.i18n, r = Object(u.useState)("Copy"), i = Object(d.a)(r, 2), a = i[0], c = i[1], o = Object(u.useRef)(null), l = Object(z.l)().data, s = Object(j.d)((function(e) {
              return (0,
              e.getSelectedColour)()
          }
          )), b = Object(j.d)((function(e) {
              var t;
              return null === (t = (0,
              e.getSelectedVariant)()) || void 0 === t ? void 0 : t.id
          }
          )), m = Object(j.e)((function(e) {
              var t = e.setIsModalVisible;
              return function() {
                  return t(!1, "share")
              }
          }
          )), p = Object(j.b)().isAEM, h = yt(l), O = Object(z.j)(h), v = O.data, C = O.isLoading, g = O.isSuccess, x = s.bikeThumb, y = s.simpleImage, w = Object(Y.a)({
              variant: null !== b && void 0 !== b ? b : "",
              colour: null !== (t = null === s || void 0 === s ? void 0 : s.id) && void 0 !== t ? t : "",
              parts: []
          }, 0, "desktop"), L = null === v || void 0 === v ? void 0 : v.id, _ = !C && g, S = n.onwardlinks.find((function(e) {
              return "share" === e.type
          }
          ));
          if (null === S || void 0 === S || !S.url)
              return null;
          var E = S.url.replace("{ID}", L);
          if (p) {
              var I = document.location
                , T = I.origin
                , A = I.pathname;
              E = "".concat(T).concat(A, "?load=").concat(L)
          }
          var M = n.onwardlink_share
            , k = n.share_modal
            , R = n.share_tweet_content
            , P = n.share_email_content
            , F = n.share_email_subject
            , D = R.replace("{URL}", E)
            , N = P.replace("{URL}", E)
            , H = [{
              id: "facebook",
              link: "http://www.facebook.com/sharer/sharer.php?u=".concat(E)
          }, {
              id: "twitter",
              link: "https://twitter.com/intent/tweet?text=".concat(D)
          }, {
              id: "mail",
              link: "mailto:?subject=".concat(F, "&body=").concat(N)
          }]
            , V = !C && !g
            , U = !V;
          return Object(B.jsxs)(f.l, {
              flexDir: ["column", "row"],
              alignContent: "center",
              position: "relative",
              minH: "40rem",
              children: [Object(B.jsx)(f.e, {
                  justifyContent: ["center", "flex-end"],
                  m: ["2rem", "auto 0"],
                  minWidth: "30rem",
                  children: Object(B.jsx)(W.a, {
                      height: "auto",
                      width: ["80%", "30rem", "35rem"],
                      src: w.length > 0 ? w[0] : y,
                      fallbackSrc: x
                  })
              }), Object(B.jsxs)(f.e, {
                  flexDir: "column",
                  justifyContent: "center",
                  width: ["100%", "60%", "50%"],
                  position: "relative",
                  paddingLeft: [0, "5rem", "10rem"],
                  mr: [0, "auto"],
                  children: [Object(B.jsx)(he, {
                      type: "h2",
                      mb: "1.5rem",
                      children: M
                  }), Object(B.jsx)(he, {
                      type: "copy",
                      children: k
                  }), V && Object(B.jsx)(sl.a, {
                      status: "error",
                      children: Object(B.jsx)(sl.b, {})
                  }), U && Object(B.jsx)(dl.a, {
                      isLoaded: !C,
                      mt: 4,
                      children: Object(B.jsxs)(f.a, {
                          position: "relative",
                          boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
                          margin: "2rem 0 3rem",
                          width: ["100%", 8 * E.length],
                          children: [Object(B.jsx)(ul.a, {
                              ref: o,
                              value: _ ? E : "",
                              disabled: !_,
                              readOnly: !0,
                              padding: "2.1rem 6rem 1.8rem 2rem",
                              borderRadius: "0",
                              fontSize: "xl",
                              letterSpacing: 1,
                              textOverflow: "ellipsis"
                          }), Object(B.jsx)(he, {
                              as: "button",
                              type: "link",
                              position: "absolute",
                              top: "1rem",
                              right: "1.5rem",
                              zIndex: 5,
                              onClick: function() {
                                  var e = o.current;
                                  e && (e.select(),
                                  document.execCommand("copy"),
                                  c("Copied!"))
                              },
                              children: Object(B.jsx)(bl.a, {
                                  label: a,
                                  "aria-label": a,
                                  bg: "black",
                                  placement: "top-start",
                                  fontSize: "lg",
                                  closeDelay: 800,
                                  onClose: function() {
                                      c("Copy")
                                  },
                                  children: "Copy"
                              })
                          })]
                      })
                  }), U && Object(B.jsx)(dl.a, {
                      isLoaded: !C,
                      mt: 4,
                      children: Object(B.jsx)(f.h, {
                          children: H.map((function(e, t) {
                              return Object(B.jsx)(f.a, {
                                  as: "button",
                                  width: "7rem",
                                  onClick: function() {
                                      return t = e.link,
                                      void window.open(t);
                                      var t
                                  },
                                  children: Object(B.jsx)(wo, {
                                      fill: "currentColor",
                                      type: e.id,
                                      height: "2rem",
                                      width: "2rem",
                                      cursor: "pointer"
                                  })
                              }, "social".concat(t))
                          }
                          ))
                      })
                  })]
              }), Object(B.jsx)(f.e, {
                  position: "absolute",
                  top: ["0.5rem", "1%"],
                  right: ["1rem", "2rem", "8%"],
                  children: Object(B.jsx)(kt, {
                      i18n: n,
                      onClick: m
                  })
              })]
          })
      }, ml = {
          width: ["91vw", "initial"],
          direction: ["column-reverse", "column-reverse", "row"],
          justifyContent: "flex-start",
          alignItems: ["center", "center", "flex-start"],
          flex: 1,
          mt: [0, 0, "10%"],
          padding: ["0 0 2rem", "0 20rem 4rem", "0 5rem 4rem"],
          spacing: 20
      }, pl = {
          bg: "white",
          boxShadow: "0 0 20px rgba(0,0,0,0.2)",
          width: ["100vw", "100%"],
          m: ["0 0 2rem", "4rem 0 3rem", 0],
          height: ["initial", "initial"],
          flex: [1, 1, 2]
      }, jl = {
          flex: [1, 2],
          flexDir: "column",
          alignItems: "flex-start",
          width: ["100%", "100%", "auto"],
          mb: "2rem"
      }, hl = function(e) {
          return {
              marginY: "2rem",
              type: "h4",
              width: ["90%", "100%"],
              letterSpacing: 1,
              dangerouslySetInnerHTML: {
                  __html: e
              }
          }
      }, Ol = function(e, t) {
          return {
              type: e ? "dark" : "outline",
              width: ["100%", "auto"],
              onClick: t,
              justifyContent: "center",
              borderColor: "brand.red"
          }
      }, vl = {
          flexDir: "column",
          paddingX: ["3rem", "initial"],
          marginBottom: ["3rem", "initial"],
          top: 0,
          position: ["relative", "absolute"],
          bottom: ["3rem", "20%"],
          mt: ["-2rem", 0],
          left: 0,
          right: 0,
          pointerEvents: "none",
          minHeight: "15rem"
      }, Cl = {
          minHeight: "calc(100vh - 14rem)",
          m: " -1rem -2rem",
          alignItems: "space-around"
      }, gl = function(e) {
          var t, n = e.closeModal, r = Object(j.a)((function(e) {
              return e.previewAccessory
          }
          )), i = Object(j.a)((function(e) {
              return e.selectedAccessories
          }
          )), a = Object(j.a)((function(e) {
              return (0,
              e.getSelectedCategory)()
          }
          )), c = Object(j.a)((function(e) {
              return e.setPreviewAccessory
          }
          )), o = Object(z.m)().width, l = Object(u.useState)(0), b = Object(d.a)(l, 2), p = b[0], h = b[1], O = Object(u.useState)(!0), v = Object(d.a)(O, 2), C = v[0], g = v[1], x = r.name, y = r.description, w = r.price, L = r.thumbnailUrl, _ = r.partNumber, S = Object(z.l)().data, E = S.i18n, I = S.locale, T = i.findIndex((function(e) {
              return e.id === r.partNumber
          }
          )) > -1, A = a.accessories.length - 1;
          Object(u.useEffect)((function() {
              return window.scrollTo(0, 0),
              document.documentElement.style.overflowY = "hidden",
              function() {
                  document.documentElement.style.overflowY = "unset"
              }
          }
          ), []),
          Object(u.useEffect)((function() {
              g(o < parseInt(m.a.breakpoints.sm))
          }
          ), [o]);
          var M = w;
          if ((!w || w <= 0) && (M = void 0),
          !r)
              return null;
          var k, R = Object(B.jsxs)(f.l, Object(s.a)(Object(s.a)({}, ml), {}, {
              children: [Object(B.jsxs)(f.e, Object(s.a)(Object(s.a)({}, jl), {}, {
                  children: [Object(B.jsx)(he, {
                      type: ["h2", "h1"],
                      fontWeight: "100",
                      children: x
                  }), Object(B.jsxs)(he, {
                      type: "h3-caps",
                      fontWeight: "100",
                      m: "1rem 0 0 0",
                      children: [null === E || void 0 === E ? void 0 : E.part_number, ": ", _]
                  }), Object(B.jsxs)(f.e, {
                      width: "100%",
                      justifyContent: "space-between",
                      children: [Object(B.jsx)(he, {
                          textTransform: "unset",
                          type: ["h4-caps", "h3"],
                          m: [0, "1rem 0 1.2rem"],
                          children: null !== (t = Object(q.b)(M, I, !0)) && void 0 !== t ? t : E.price_unavailable
                      }), Object(B.jsx)(Le, {
                          context: "accessory_modal",
                          accessory: r
                      })]
                  }), Object(B.jsx)(f.d, {
                      m: "2rem 0 1rem",
                      borderColor: "rgba(0,0,0,0.15)",
                      width: "100%"
                  }), Object(B.jsx)(he, Object(s.a)({}, hl(y))), Object(B.jsx)(Qt, Object(s.a)(Object(s.a)({}, Ol(T, (function() {
                      T ? Object(ce.m)(r) === ce.b.Removed && n() : Object(ce.d)(r) === ce.a.Added && n()
                  }
                  ))), {}, {
                      children: T ? E.accessory_remove : E.accessory_preview_add
                  }))]
              })), Object(B.jsx)(f.e, Object(s.a)(Object(s.a)({}, pl), {}, {
                  children: Object(B.jsx)(W.a, Object(s.a)({}, (k = L,
                  {
                      src: k,
                      width: ["100%", "100%"],
                      height: "auto",
                      fit: "cover",
                      zIndex: 1,
                      mt: "-1rem"
                  })))
              }))]
          }));
          return Object(B.jsxs)(u.Fragment, {
              children: [C && R, !C && Object(B.jsx)(f.e, Object(s.a)(Object(s.a)({}, Cl), {}, {
                  children: Object(B.jsx)(Vu, {
                      noScrollX: !0,
                      children: R
                  })
              })), Object(B.jsxs)(f.e, Object(s.a)(Object(s.a)({}, vl), {}, {
                  children: [Object(B.jsx)(f.d, {
                      display: ["block", "none"],
                      m: ["4rem 0"],
                      borderColor: "rgba(0,0,0,0.15)",
                      width: "100%"
                  }), Object(B.jsx)(Dt, {
                      isBackActive: p > 0,
                      isNextActive: p < A,
                      onClick: function(e) {
                          var t = "back" === e.currentTarget.id ? -1 : 1;
                          h(p + t),
                          c(a.accessories[p + t])
                      }
                  })]
              }))]
          })
      }, xl = n(24), yl = {
          minHeight: ["calc(100vh - 1rem)", "calc(100vh - 15rem)"],
          mt: "-1rem",
          overflow: "hidden"
      }, wl = {
          direction: "column",
          spacing: 10,
          flex: 1
      }, Ll = {
          width: ["95vw", "initial"],
          direction: ["column-reverse", "column-reverse", "row"],
          justifyContent: "flex-start",
          alignItems: ["center", "center", "flex-start"],
          flex: 1,
          m: ["4rem -1rem 0", "5% 0 0"],
          padding: ["1rem 1rem 8rem", "0 10rem 4rem", "0 5rem 0"],
          spacing: 20
      }, _l = {
          bg: "white",
          boxShadow: [0, 0, "0 0 20px rgba(0,0,0,0.2)"],
          width: ["100vw", "100%"],
          m: ["0 0 2rem", "4rem 0 3rem", 0],
          height: ["initial", "initial"],
          flex: [1, 1, 2]
      }, Sl = {
          flex: 1,
          flexDir: "column",
          alignItems: "flex-start",
          width: ["100%", "100%", "50%"],
          mb: "2rem"
      }, El = function(e) {
          return {
              marginY: "2rem",
              type: "h4",
              width: ["90%", "100%"],
              letterSpacing: 1,
              dangerouslySetInnerHTML: {
                  __html: e
              }
          }
      }, Il = function(e, t) {
          return {
              type: e ? "dark" : "outline",
              width: ["100%", "100%", "auto"],
              mt: [0, "4rem"],
              justifyContent: "center",
              onClick: t,
              borderColor: "brand.red"
          }
      }, Tl = {
          width: "100%"
      }, Al = function(e, t) {
          return {
              width: "100%",
              borderBottom: e ? "none" : "1px solid rgba(0,0,0,0.05)",
              paddingX: "1rem",
              _active: {
                  outline: "none"
              },
              _focus: {
                  outline: "none"
              },
              height: "4.5rem",
              onClick: t
          }
      }, Ml = {
          textOverflow: "ellipsis",
          flex: .8,
          textAlign: "left",
          overflow: "hidden",
          type: "h4",
          fontWeight: "400",
          letterSpacing: 1,
          whiteSpace: "nowrap"
      }, kl = {
          textOverflow: "ellipsis",
          flex: .8,
          textAlign: "left",
          overflow: "hidden",
          type: "h4",
          fontWeight: "300",
          letterSpacing: 1,
          whiteSpace: "nowrap"
      }, Rl = function(e) {
          return {
              marginLeft: "auto",
              type: "h4",
              fontWeight: "400",
              letterSpacing: 1,
              whiteSpace: "nowrap",
              borderBottom: "1px solid ".concat(e ? m.a.colors.gray[600] : m.a.colors.brand.red)
          }
      }, Pl = {
          p: ["1rem", "1rem 0 2rem"]
      }, Fl = function(e) {
          return {
              width: "100%",
              allowToggle: e,
              borderColor: "rgba(0,0,0,0.1)"
          }
      }, Dl = function(e) {
          var t = e.accessory
            , n = Object(z.m)().width
            , r = Object(z.l)().data;
          if (!t)
              return null;
          var i, a = t.name, c = t.description, o = t.thumbnailUrl, l = t.partNumber, d = n < parseInt(null === m.a || void 0 === m.a ? void 0 : m.a.breakpoints.md), b = r.i18n;
          return Object(B.jsxs)(f.l, Object(s.a)(Object(s.a)({}, wl), {}, {
              children: [Object(B.jsx)(f.e, Object(s.a)(Object(s.a)({}, _l), {}, {
                  children: Object(B.jsx)(W.a, Object(s.a)({}, (i = o,
                  {
                      src: i,
                      width: ["calc(100% - 6rem)", "100%"],
                      height: "auto",
                      zIndex: 1
                  })))
              })), !d && Object(B.jsxs)(u.Fragment, {
                  children: [Object(B.jsx)(he, {
                      type: ["h2", "h1"],
                      fontWeight: "100",
                      children: a
                  }), Object(B.jsxs)(he, {
                      type: "h3-caps",
                      fontWeight: "100",
                      children: [null === b || void 0 === b ? void 0 : b.part_number, ": ", l]
                  })]
              }), Object(B.jsx)(Le, {
                  context: "packs_modal",
                  accessory: t,
                  flexWrapperProps: {
                      alignSelf: "flex-end"
                  }
              }), Object(B.jsx)(he, Object(s.a)({}, hl(c)))]
          }))
      }, Nl = function(e) {
          var t = e.accessories
            , n = e.setAccessory
            , r = Object(z.l)().data.i18n
            , i = Object(z.m)().width < parseInt(null === m.a || void 0 === m.a ? void 0 : m.a.breakpoints.md);
          return Object(B.jsx)(f.e, Object(s.a)(Object(s.a)({}, Tl), {}, {
              children: Object(B.jsx)(h.a, Object(s.a)(Object(s.a)({}, Fl(i)), {}, {
                  children: Object(il.a)(t).map((function(e) {
                      return Object(B.jsx)(h.c, {
                          padding: 0,
                          children: function(t) {
                              var a = t.isExpanded;
                              return Object(B.jsxs)(u.Fragment, {
                                  children: [Object(B.jsxs)(h.b, Object(s.a)(Object(s.a)({}, Al(a, (function() {
                                      return function(e) {
                                          n(e)
                                      }(e)
                                  }
                                  ))), {}, {
                                      children: [Object(B.jsxs)(f.e, {
                                          flexDirection: "column",
                                          alignItems: "flex-start",
                                          children: [Object(B.jsx)(he, Object(s.a)(Object(s.a)({}, Ml), {}, {
                                              children: e.name
                                          })), Object(B.jsxs)(he, Object(s.a)(Object(s.a)({}, kl), {}, {
                                              children: [null === r || void 0 === r ? void 0 : r.part_number, ": ", e.partNumber]
                                          }))]
                                      }), Object(B.jsx)(f.e, {
                                          display: ["none", "flex", "flex"],
                                          children: Object(B.jsx)(Le, {
                                              context: "packs_modal",
                                              accessory: e
                                          })
                                      }), Object(B.jsx)(f.e, {
                                          display: ["flex", "none", "none"],
                                          children: Object(B.jsx)(we, {
                                              accessory: e
                                          })
                                      }), Object(B.jsx)(he, Object(s.a)(Object(s.a)({}, Rl(a)), {}, {
                                          children: r.pack_accordion_expand
                                      }))]
                                  })), i && Object(B.jsx)(h.d, Object(s.a)(Object(s.a)({}, Pl), {}, {
                                      children: Object(B.jsx)(Dl, {
                                          accessory: e
                                      })
                                  }))]
                              })
                          }
                      }, e.partNumber)
                  }
                  ))
              }))
          }))
      }, Bl = function(e) {
          var t, n = e.closeModal, r = Object(j.a)((function(e) {
              return e.previewAccessory
          }
          )), i = Object(j.a)((function(e) {
              return e.selectedAccessories
          }
          )), a = Object(z.m)().width, c = Object(u.useState)(0), o = Object(d.a)(c, 2), l = o[0], b = o[1], p = r.partNumber, h = r.bundledAccessories, O = r.name, v = r.description, C = r.price, g = Object(u.useState)(r), x = Object(d.a)(g, 2), y = x[0], w = x[1], L = h.map((function(e) {
              return Object(ce.h)(e)
          }
          )), _ = Object(z.l)().data, S = _.i18n, E = _.locale, I = S.pack_add, T = S.pack_add_accessories, A = S.pack_remove, M = S.price_unavailable, k = i.findIndex((function(e) {
              return e.id === p
          }
          )) > -1, R = Object(u.useRef)(null);
          Object(u.useEffect)((function() {
              return window.scrollTo(0, 0),
              document.documentElement.style.overflowY = "hidden",
              function() {
                  document.documentElement.style.overflowY = "unset"
              }
          }
          ), []),
          Object(u.useEffect)((function() {
              b(a < parseInt(m.a.breakpoints.md))
          }
          ), [a]),
          Object(xl.o)({
              ref: R,
              handler: function() {
                  return w(r)
              }
          });
          var P, F = C;
          return (!C || C <= 0) && (F = void 0),
          Object(B.jsx)(f.e, Object(s.a)(Object(s.a)({}, yl), {}, {
              children: Object(B.jsx)(Vu, {
                  noScrollX: !0,
                  disableForMobile: !0,
                  children: Object(B.jsxs)(f.l, Object(s.a)(Object(s.a)({}, Ll), {}, {
                      children: [Object(B.jsxs)(f.e, Object(s.a)(Object(s.a)({}, Sl), {}, {
                          children: [Object(B.jsx)(he, {
                              type: ["h2", "h1"],
                              fontWeight: "100",
                              children: O
                          }), Object(B.jsxs)(he, {
                              type: ["h4-caps", "h3-caps"],
                              fontWeight: "100",
                              m: [0, "1rem 0 0"],
                              children: [null === S || void 0 === S ? void 0 : S.part_number, ": ", p]
                          }), Object(B.jsx)(he, {
                              textTransform: "unset",
                              type: ["h4-caps", "h3"],
                              m: [0, "1rem 0 1.2rem"],
                              children: null !== (t = Object(q.b)(F, E)) && void 0 !== t ? t : M
                          }), Object(B.jsx)(f.d, {
                              m: "2rem 0 1rem",
                              borderColor: "rgba(0,0,0,0.15)",
                              width: "100%"
                          }), Object(B.jsx)(he, Object(s.a)({}, El(v))), Object(B.jsx)(f.e, Object(s.a)(Object(s.a)({}, (P = L.length,
                          {
                              height: ["initial", "initial", "".concat(P > 5 ? 210 : 42 * P, "px")],
                              width: ["100%", "100%", "105%"],
                              paddingRight: [0, 0, "2rem"],
                              marginBottom: ["4rem", "2rem", 0]
                          })), {}, {
                              children: Object(B.jsx)(Vu, {
                                  insetY: 20,
                                  disableForMobile: !0,
                                  disableForTablet: !0,
                                  children: Object(B.jsx)(Nl, {
                                      ref: R,
                                      accessories: L,
                                      setAccessory: function(e) {
                                          w(e)
                                      }
                                  })
                              })
                          })), Object(B.jsxs)(f.l, {
                              children: [Object(B.jsx)(Qt, Object(s.a)(Object(s.a)({}, Il(k, (function() {
                                  r && (k ? Object(ce.m)(r) === ce.b.Removed && n() : Object(ce.d)(r) === ce.a.Added && n())
                              }
                              ))), {}, {
                                  children: k ? A : "".concat(I, ": ").concat(L.length, " ").concat(T)
                              })), Object(B.jsx)(ye, {
                                  context: "pack",
                                  accessories: L
                              })]
                          })]
                      })), !l && Object(B.jsx)(Dl, {
                          accessory: y
                      })]
                  }))
              })
          }))
      }, Hl = {
          flexDirection: "column",
          maxWidth: "800px",
          margin: "auto",
          height: ["calc(100vh - 6rem)", "calc(100vh - 21rem)"],
          overflow: "hidden"
      }, zl = {
          marginTop: "2rem",
          marginBottom: "2rem",
          background: "rgba(0,0,0,0.2)",
          height: "1px"
      }, Vl = function(e) {
          var t = e.closeModal
            , n = Object(Oe.b)().data;
          if (!n)
              return null;
          var r = n.customized_parts_disclaimer_heading
            , i = n.customized_parts_disclaimer_subheading
            , a = n.customized_parts_disclaimer_notice_label
            , c = n.customized_parts_disclaimer_content
            , o = n.understood_label;
          return Object(B.jsxs)(f.e, Object(s.a)(Object(s.a)({}, Hl), {}, {
              children: [Object(B.jsx)(Vu, {
                  noScrollX: !0,
                  disableForMobile: !0,
                  style: {
                      flexGrow: 1,
                      marginBottom: "6rem"
                  },
                  children: Object(B.jsxs)(f.l, {
                      mt: "4rem",
                      paddingRight: "1rem",
                      children: [Object(B.jsx)(he, {
                          type: "h1",
                          children: r
                      }), Object(B.jsx)(he, {
                          type: "h4-caps",
                          children: i
                      }), Object(B.jsx)(f.d, {
                          style: zl
                      }), Object(B.jsx)(he, {
                          type: "spec",
                          textDecoration: "underline",
                          children: a
                      }), Object(B.jsx)(he, {
                          className: "styled-innerhtml",
                          type: "copy",
                          my: "2rem",
                          dangerouslySetInnerHTML: {
                              __html: c
                          }
                      })]
                  })
              }), Object(B.jsx)(Qt, {
                  type: "large",
                  width: "22rem",
                  endIcon: "chevronRight",
                  shuntEnd: !0,
                  "data-cy": "bottom-bar--next-step",
                  alignSelf: "flex-end",
                  position: "absolute",
                  bottom: "0",
                  onClick: t,
                  children: o
              })]
          }))
      }, Ul = {
          bodyProps: {
              margin: ["2rem", "5% 15% 20%"],
              padding: ["10rem 0 0", "0 10%"],
              position: "relative"
          },
          overlayProps: {
              opacity: 0,
              position: "absolute",
              height: "100vh",
              zIndex: 9
          },
          contentProps: {
              height: "100vh",
              borderRadius: "none",
              bg: "linear-gradient(#F3F3F3,white,#F3F3F3)",
              padding: ["1rem 1rem 2rem", "0 2rem 2rem", "6rem 8% 2rem"],
              overflowY: ["auto", "hidden"],
              m: 0
          },
          size: "full"
      }, Wl = {
          addAccIncompatible: Object(s.a)(Object(s.a)({}, Ul), {}, {
              id: "addAccIncompatible",
              ContentComponent: cl
          }),
          removeAccColourNoLongerCompatible: Object(s.a)(Object(s.a)({}, Ul), {}, {
              id: "removeAccColourNoLongerCompatible",
              ContentComponent: cl
          }),
          removeAccVariantNoLongerCompatible: Object(s.a)(Object(s.a)({}, Ul), {}, {
              id: "removeAccVariantNoLongerCompatible",
              ContentComponent: cl
          }),
          resetColourNoLongerCompatible: Object(s.a)(Object(s.a)({}, Ul), {}, {
              id: "resetColourNoLongerCompatible",
              ContentComponent: cl
          }),
          addAccDependencies: Object(s.a)(Object(s.a)({}, Ul), {}, {
              id: "addAccDependencies",
              ContentComponent: cl
          }),
          removeAccHasDependencies: Object(s.a)(Object(s.a)({}, Ul), {}, {
              id: "removeAccHasDependencies",
              ContentComponent: cl
          }),
          removeAccIsDependency: Object(s.a)(Object(s.a)({}, Ul), {}, {
              id: "removeAccIsDependency",
              ContentComponent: cl
          }),
          removeAccOtherHasDependencies: Object(s.a)(Object(s.a)({}, Ul), {}, {
              id: "removeAccOtherHasDependencies",
              ContentComponent: cl
          }),
          removeAccPack: Object(s.a)(Object(s.a)({}, Ul), {}, {
              id: "removeAccPack",
              ContentComponent: cl
          }),
          hondaContribution: Object(s.a)(Object(s.a)({}, Ul), {}, {
              id: "hondaContribution",
              ContentComponent: cl
          }),
          info: {
              id: "info",
              ContentComponent: Ko,
              overlayProps: {
                  opacity: 0,
                  position: "absolute",
                  height: "inherit",
                  margin: 0
              },
              contentProps: {
                  position: "relative",
                  height: "inherit",
                  borderRadius: "none",
                  bg: "linear-gradient(#F3F3F3,white,#F3F3F3)",
                  margin: 0,
                  padding: ["1rem 1rem 10rem", "6rem 2rem 2rem", "6rem 8% 2rem"],
                  overflowY: ["auto", "hidden"],
                  overflowX: "hidden"
              },
              size: "full",
              title: "your_bike_detail"
          },
          oneMinConfig: {
              id: "oneMinConfig",
              ContentComponent: Zo,
              overlayProps: {
                  opacity: 0
              },
              contentProps: {
                  borderRadius: "none",
                  bg: "linear-gradient(#F3F3F3,white,#F3F3F3)",
                  m: 0,
                  padding: ["1rem 1rem 8rem", "1rem 1rem 8rem", "6rem 8% 2rem"],
                  overflowY: ["auto", "auto", "hidden"]
              },
              size: "full"
          },
          riderView: {
              id: "riderView",
              ContentComponent: ll,
              bodyProps: {
                  padding: 0
              },
              contentProps: {
                  height: ["initial", "initial"],
                  borderRadius: "none",
                  width: ["90%", "90%", "70%"],
                  maxW: "initial",
                  maxH: "initial",
                  padding: "1rem 0 0",
                  bg: "white",
                  top: ["8rem", "8rem", "4rem"],
                  boxShadow: "0 0 20px rgba(0,0,0,0.2)"
              }
          },
          share: {
              id: "share",
              ContentComponent: fl,
              overlayProps: {
                  opacity: 0,
                  position: "relative",
                  height: "100%"
              },
              contentProps: {
                  position: "relative",
                  height: "100%",
                  borderRadius: "none",
                  bg: "linear-gradient(#F3F3F3,white,#F3F3F3)",
                  margin: "0",
                  padding: ["1rem", "6rem 2rem 0", "6rem 8% 0"],
                  maxH: "inital",
                  overflowY: ["auto", "hidden"]
              },
              size: "full"
          },
          accessoryInfo: {
              id: "accessoryInfo",
              ContentComponent: gl,
              overlayProps: {
                  opacity: 0,
                  width: "100vw"
              },
              contentProps: {
                  borderRadius: "none",
                  bg: "linear-gradient(#F3F3F3,white,#F3F3F3)",
                  m: 0,
                  padding: ["1rem 0 2rem", "6rem 2rem 2rem", "6rem 8% 2rem"],
                  overflowY: ["auto", "hidden"],
                  width: "100vw"
              },
              size: "full",
              title: " "
          },
          packInfo: {
              id: "packInfo",
              ContentComponent: Bl,
              overlayProps: {
                  opacity: 0,
                  width: "100vw"
              },
              contentProps: {
                  borderRadius: "none",
                  bg: "linear-gradient(#F3F3F3,white,#F3F3F3)",
                  m: 0,
                  padding: ["1rem 0 2rem", "6rem 2rem 2rem", "6rem 8% 2rem"],
                  overflowY: ["auto", "hidden"],
                  width: "100vw"
              },
              size: "full",
              title: " "
          },
          customized_part: {
              id: "customized_part",
              ContentComponent: Vl,
              overlayProps: {
                  opacity: 0,
                  width: "100vw"
              },
              contentProps: {
                  borderRadius: "none",
                  bg: "linear-gradient(#F3F3F3,white,#F3F3F3)",
                  m: 0,
                  padding: ["1rem 0 2rem", "6rem 2rem 2rem", "6rem 8% 2rem"],
                  overflowY: ["auto", "hidden"],
                  width: "100vw"
              },
              size: "full",
              title: " "
          }
      }, Yl = function() {
          var e = Object(j.e)((function(e) {
              return {
                  modalId: e.selectedModal,
                  isOpen: e.isModalVisible,
                  closeModal: function() {
                      return e.setIsModalVisible(!1, e.selectedModal)
                  }
              }
          }
          ))
            , t = e.closeModal
            , n = e.modalId
            , r = e.isOpen
            , i = Object(z.l)().data;
          if (!n || !i)
              return null;
          var a = i.i18n
            , c = Wl[n]
            , o = c.bodyProps
            , l = c.contentProps
            , d = c.ContentComponent
            , u = c.overlayProps
            , b = c.size
            , m = c.title
            , p = "accessoryInfo" === n || "packInfo" === n;
          return Object(B.jsxs)(Eo.a, {
              autoFocus: !1,
              size: b,
              isOpen: r,
              onClose: t,
              preserveScrollBarGap: !0,
              blockScrollOnMount: !0,
              children: [Object(B.jsx)(Eo.e, Object(s.a)({}, u)), Object(B.jsxs)(Eo.c, Object(s.a)(Object(s.a)({}, l), {}, {
                  children: [m && Object(B.jsx)(Eo.d, {
                      paddingBottom: [0, "1rem"],
                      children: Object(B.jsxs)(f.e, {
                          borderBottom: "1px solid",
                          borderBottomColor: "gray.400",
                          justifyContent: "space-between",
                          paddingBottom: "1.5rem",
                          children: [Object(B.jsx)(he, {
                              type: "h3",
                              fontWeight: 500,
                              children: a[m]
                          }), Object(B.jsx)(f.e, {
                              justifyContent: "flex-end",
                              alignItems: "center",
                              position: "relative",
                              zIndex: 3,
                              children: Object(B.jsx)(kt, {
                                  i18n: a,
                                  onClick: t
                              })
                          })]
                      })
                  }), m && Object(B.jsx)(f.e, {
                      height: ["100vh", "calc(100vh - 20rem)"],
                      children: Object(B.jsx)(Vu, {
                          disableForMobile: !0,
                          disableForTablet: p,
                          disableForDesktop: p,
                          noScrollX: !0,
                          children: Object(B.jsx)(Eo.b, Object(s.a)(Object(s.a)({}, o), {}, {
                              children: r && Object(B.jsx)(d, {
                                  i18n: a,
                                  modalId: n,
                                  closeModal: t
                              })
                          }))
                      })
                  }), !m && Object(B.jsx)(Eo.b, Object(s.a)(Object(s.a)({}, o), {}, {
                      children: r && Object(B.jsx)(d, {
                          i18n: a,
                          modalId: n,
                          closeModal: t
                      })
                  }))]
              }))]
          })
      }, Gl = n(94), Zl = n(140), Kl = Gl.a.custom(Object(Yn.e)((function(e, t) {
          var n = Object.fromEntries(Object.entries(e).filter((function(e) {
              var t = Object(d.a)(e, 1)[0];
              return !Object(Zl.a)(t)
          }
          )));
          return Object(B.jsx)(f.e, Object(s.a)({
              ref: t
          }, n))
      }
      ))), Xl = Gl.a.custom(Object(Yn.e)((function(e, t) {
          var n = Object.fromEntries(Object.entries(e).filter((function(e) {
              var t = Object(d.a)(e, 1)[0];
              return !Object(Zl.a)(t)
          }
          )));
          return Object(B.jsx)(f.l, Object(s.a)({
              ref: t
          }, n))
      }
      ))), ql = Object(C.b)(po || (po = Object(O.a)(["\n    button {\n        display: flex;\n        margin: 0 3rem 1rem 0;\n        padding: unset;\n        width: initial;\n        border: unset;\n        background: unset;\n        font-family: inherit;\n    }\n"]))), Ql = v.a.div(jo || (jo = Object(O.a)(["\n    ", "\n"])), (function(e) {
          return e.isAEM && ql
      }
      )), Jl = function(e, t, n) {
          return {
              as: "button",
              pointerEvents: e ? "none" : "auto",
              cursor: "pointer",
              spacing: 5,
              d: t ? "inline-flex" : "flex",
              m: "0 3rem 1rem 0",
              onClick: n,
              alignItems: "center"
          }
      }, $l = function(e) {
          return {
              d: "flex",
              position: "relative",
              fill: e ? "brand.red" : "gray.800"
          }
      }, es = function(e) {
          var t = e.defaultIndex
            , n = e.direction
            , r = e.radios
            , i = e.onChange
            , a = e.isLoading
            , c = e.finance_calculator_interaction
            , o = Object(j.b)().isAEM
            , l = function(e, t) {
              i(e, t)
          };
          return Object(B.jsx)(f.l, Object(s.a)(Object(s.a)({}, function(e, t) {
              return {
                  spacing: 0,
                  direction: "column",
                  d: "row" === e ? "block" : "flex",
                  m: "2rem 0 1rem !important",
                  opacity: t ? .3 : 1,
                  transition: "0.2s opacity",
                  width: "100%"
              }
          }(n, a)), {}, {
              children: r.map((function(e, r) {
                  var i = r === t;
                  return Object(B.jsx)(Ql, {
                      isAEM: o,
                      onClick: function(t) {
                          return function(e, t, n) {
                              Object(Lt.a)({
                                  config_interaction: "finance_calculator",
                                  finance_calculator_interaction: n,
                                  finance_calculator_value: t.value
                              })
                          }(0, e, c)
                      },
                      children: Object(B.jsxs)(f.h, Object(s.a)(Object(s.a)({}, Jl(i, "row" === n, (function() {
                          return l(r, e.value)
                      }
                      ))), {}, {
                          children: [Object(B.jsxs)(f.k, Object(s.a)(Object(s.a)({}, $l(r === t)), {}, {
                              children: [!i && Object(B.jsx)(wo, {
                                  type: "radioOff"
                              }), i && Object(B.jsx)(wo, {
                                  type: "radioOn"
                              })]
                          })), Object(B.jsx)(he, {
                              type: "copy",
                              paddingTop: "0.2rem",
                              children: e.label
                          })]
                      }))
                  }, "radio".concat(r))
              }
              ))
          }))
      }, ts = n(22), ns = function(e) {
          var t, n, r, i, a = e.i18n, c = e.locale, o = e.accessories, l = e.deposit, d = e.calculated, u = Object(j.a)(), b = u.getTotalAccessoryCost, m = u.getTotalAccessoryInstallCost, p = Object(j.b)().isFinanceAvailable, h = null === d || void 0 === d ? void 0 : d.financeMonthlyPrice, O = d ? d.otrPrice - d.accessoriesCost - (null !== (t = d.accessoriesInstallationCost) && void 0 !== t ? t : 0) : null, v = a.summary_conditions, C = a.summary_table_added, g = a.summary_table_costofInstallation, x = a.summary_table_total, y = a.summary_table_from_monthly, w = a.price_breakdown, L = a.rrp, _ = a.summary_table_variant, S = a.summary_table_colour, E = a.financial_services, I = a.finance_monthly_payment_disclaimer, T = a.summary_table_servicing_fee, A = a.price_unavailable, M = a.finance_breakdown_acceptance_fee, k = b(), R = m(), P = null !== (n = null === d || void 0 === d ? void 0 : d.servicingCost) && void 0 !== n ? n : 0, F = k;
          (!k || F <= 0) && (F = void 0);
          var D = c.includes("fr")
            , N = D ? "*" : ""
            , H = !!M && !(null === d || void 0 === d || !d.financeCreditAcceptanceFee)
            , z = A;
          if (null !== d && void 0 !== d && d.otrPrice) {
              var V = d.otrPrice;
              null !== d && void 0 !== d && d.financeCreditAcceptanceFee && (V += d.financeCreditAcceptanceFee),
              z = Object(q.g)(V, c, {
                  trimIntegers: !0
              })
          }
          var U = Object(q.o)(y, c, h);
          !1 === Object(gt.e)(U) && (U += "**");
          var W = Object(q.k)(I, c, l);
          return !1 === Object(gt.e)(W) && (W = "**" + W),
          Object(B.jsxs)(Kl, {
              animate: {
                  opacity: d ? 1 : .2
              },
              flexDir: "column",
              width: "100%",
              children: [Object(B.jsx)(he, Object(s.a)(Object(s.a)({}, ts.q), {}, {
                  children: w
              })), Object(B.jsxs)(f.h, Object(s.a)(Object(s.a)({}, ts.v), {}, {
                  children: [Object(B.jsx)(he, {
                      type: "copy",
                      children: "".concat(_, " & ").concat(S)
                  }), O && Object(B.jsxs)(f.h, {
                      children: [Object(B.jsx)(he, Object(s.a)(Object(s.a)({}, ts.B), {}, {
                          children: L
                      })), Object(B.jsx)(he, {
                          type: "copy",
                          children: Object(q.f)(O, c)
                      })]
                  })]
              })), H && Object(B.jsxs)(f.h, Object(s.a)(Object(s.a)({}, ts.v), {}, {
                  children: [Object(B.jsx)(he, {
                      type: "copy",
                      children: M
                  }), Object(B.jsx)(he, {
                      type: "copy",
                      children: null !== (r = Object(q.f)(null === d || void 0 === d ? void 0 : d.financeCreditAcceptanceFee, c)) && void 0 !== r ? r : A
                  })]
              })), o.length > 0 && Object(B.jsxs)(f.h, Object(s.a)(Object(s.a)({}, ts.v), {}, {
                  children: [Object(B.jsx)(he, {
                      type: "copy",
                      children: "".concat(C, " (").concat(o.length, ")")
                  }), Object(B.jsx)(he, {
                      type: "copy",
                      children: null !== (i = Object(q.b)(F, c)) && void 0 !== i ? i : A
                  })]
              })), R > 0 && Object(B.jsxs)(f.h, Object(s.a)(Object(s.a)({}, ts.v), {}, {
                  children: [Object(B.jsx)(he, {
                      type: "copy",
                      children: g
                  }), Object(B.jsx)(he, {
                      type: "copy",
                      children: Object(q.f)(m(), c)
                  })]
              })), P > 0 && Object(B.jsxs)(f.h, Object(s.a)(Object(s.a)({}, ts.v), {}, {
                  children: [Object(B.jsx)(he, {
                      type: "copy",
                      children: T
                  }), Object(B.jsx)(he, {
                      type: "copy",
                      children: Object(q.f)(P, c)
                  })]
              })), Object(B.jsxs)(f.h, Object(s.a)(Object(s.a)({}, ts.w), {}, {
                  children: [Object(B.jsx)(he, Object(s.a)(Object(s.a)({}, ts.x), {}, {
                      children: x
                  })), q.t && Object(B.jsxs)(f.h, {
                      alignItems: "flex-end",
                      spacing: 5,
                      children: [Object(B.jsx)(he, {
                          type: ["h6", "h5"],
                          letterSpacing: .5,
                          mb: ["0.1rem", "-0.3rem"],
                          children: U
                      }), Object(B.jsxs)(he, Object(s.a)(Object(s.a)({}, ts.y), {}, {
                          children: [z, N]
                      }))]
                  })]
              })), E && Object(B.jsx)(he, {
                  type: "h4-caps",
                  color: "brand.red",
                  mb: "2rem",
                  children: E
              }), D && Object(B.jsx)(he, {
                  type: "h5",
                  mt: "2rem",
                  letterSpacing: .5,
                  children: v
              }), p && Object(B.jsx)(he, {
                  type: "h5",
                  my: "2rem",
                  letterSpacing: .5,
                  children: W
              })]
          })
      }, rs = n(112), is = function(e) {
          var t = e.locale
            , n = e.calculated
            , r = e.i18n
            , i = e.terms
            , a = e.page
            , c = r.finance_form_tsandcs
            , o = r.summary_conditions
            , l = Object(j.b)()
            , d = l.isAEM
            , b = l.setFinanceTermsAndConditionsDisplayRatio
            , m = Object(u.useRef)(null)
            , p = Object(z.f)(m)
            , O = Object(rs.b)(m);
          Object(u.useEffect)((function() {
              b(O)
          }
          ), [O]);
          var v = document.body.scrollHeight;
          return Object(u.useEffect)((function() {
              if (m && m.current && "terms" === a && !p) {
                  var e = .95 * m.current.getBoundingClientRect().top + window.scrollY;
                  window.scroll({
                      top: e,
                      behavior: "smooth"
                  })
              }
          }
          ), [m, a, v]),
          t.includes("de") ? Object(B.jsxs)(f.l, {
              ref: m,
              children: [Object(B.jsx)(f.d, {
                  borderBottom: "solid 1px rgba(0,0,0,0.2)"
              }), Object(B.jsx)(he, Object(s.a)({
                  pt: "2rem"
              }, Object(ts.h)(o, t))), Object(B.jsx)(he, Object(s.a)({
                  pt: "2rem",
                  pb: "2rem"
              }, Object(ts.h)(it(n, r), t))), Object(B.jsx)(f.d, {
                  borderBottom: "solid 1px rgba(0,0,0,0.2)"
              })]
          }) : Object(B.jsx)(h.a, Object(s.a)(Object(s.a)({
              ref: m
          }, ts.g), {}, {
              defaultIndex: [0],
              children: Object(B.jsx)(h.c, Object(s.a)(Object(s.a)({}, ts.i), {}, {
                  children: function(e) {
                      var n = e.isExpanded;
                      return Object(B.jsxs)(u.Fragment, {
                          children: [Object(B.jsx)(ts.a, {
                              isAEM: d,
                              children: Object(B.jsxs)(h.b, Object(s.a)(Object(s.a)({}, ts.d), {}, {
                                  children: [Object(B.jsx)(wo, Object(s.a)({}, Object(ts.e)(n))), Object(B.jsx)(he, Object(s.a)(Object(s.a)({}, ts.f), {}, {
                                      children: c
                                  }))]
                              }))
                          }), Object(B.jsx)(h.d, Object(s.a)(Object(s.a)({}, ts.j), {}, {
                              children: Object(B.jsx)(he, Object(s.a)({}, Object(ts.h)(i, t)))
                          }))]
                      })
                  }
              }))
          }))
      }, as = n(225), cs = function(e) {
          var t = e.i18n
            , n = e.isLoading
            , r = e.locale
            , i = e.offer
            , a = Object(j.c)()
            , c = a.depositAmount
            , o = a.depositPercent
            , l = a.setDeposit
            , b = Object(j.b)().isAEM
            , m = Object(u.useState)(null)
            , p = Object(d.a)(m, 2)
            , h = p[0]
            , O = p[1]
            , v = i.maxDepositPercent
            , C = i.minDepositPercent
            , g = i.alternateFinanceData
            , x = t.finance_form_deposit_amount
            , y = i.otrPrice
            , w = Math.ceil(C / 100 * y)
            , L = Math.floor(v / 100 * y);
          null !== g && void 0 !== g && g.minMax && (L = y - g.minMax.minAmount,
          w = Math.max(0, y - g.minMax.maxAmount)),
          Object(u.useEffect)((function() {
              if (!h && c) {
                  var e = Math.min(L, Math.max(w, c));
                  O(e)
              }
          }
          ), [c]);
          return Object(B.jsxs)(u.Fragment, {
              children: [Object(B.jsx)(he, {
                  type: "h3",
                  mb: "4rem",
                  children: x
              }), Object(B.jsxs)(as.a, Object(s.a)(Object(s.a)({
                  "aria-label": x
              }, Object(ts.C)(w, L, r, (function(e) {
                  return O(e)
              }
              ), (function(e) {
                  if (void 0 !== c && c !== e && void 0 !== o) {
                      var t = Math.min(L, Math.max(w, e));
                      l(t, o)
                  }
              }
              ), h || 0, n)), {}, {
                  marginBottom: "5rem !important",
                  marginTop: "3rem !important",
                  children: [Object(B.jsx)(as.c, {
                      bg: "gray.500"
                  }), Object(B.jsx)(ts.c, {
                      isAEM: b,
                      children: Object(B.jsx)(as.b, Object(s.a)({}, Object(ts.D)(h || 0, r)))
                  })]
              })), Object(B.jsx)(f.d, Object(s.a)({}, ts.p))]
          })
      }, os = function(e) {
          var t = e.defaultTerm
            , n = e.isLoading
            , r = Object(j.c)()
            , i = r.setFinanceTerm
            , a = r.repaymentTimes
            , c = r.setRepaymentTimeIndex
            , o = Object(u.useState)(null)
            , l = Object(d.a)(o, 2)
            , b = l[0]
            , f = l[1];
          Object(u.useEffect)((function() {
              void 0 === t || b || f(a.indexOf(t))
          }
          ), [t]);
          return Object(B.jsxs)(as.a, Object(s.a)(Object(s.a)({}, Object(ts.I)(a, (function(e) {
              null !== b && f(e)
          }
          ), (function(e) {
              t && null !== b && e !== a.indexOf(t) && (i(a[e]),
              c(e))
          }
          ), b || 0, 1, n)), {}, {
              marginBottom: "5rem !important",
              marginTop: "3rem !important",
              children: [Object(B.jsx)(as.c, {
                  bg: "gray.500"
              }), Object(B.jsx)(as.b, Object(s.a)({}, Object(ts.J)(a, b || 0)))]
          }))
      }, ls = n(103), ss = function(e) {
          var t = e.i18n
            , n = e.calculated
            , r = e.rowType
            , i = e.locale
            , a = (e.finance,
          e.offer)
            , c = Object(u.useState)([null, null])
            , o = Object(d.a)(c, 2)
            , l = o[0]
            , b = o[1];
          Object(u.useEffect)((function() {
              if (n) {
                  var e = rt(t, n, r, i, 0, a);
                  b(e)
              }
          }
          ), [n]);
          return l[1] ? Object(B.jsx)(ls.g, {
              children: function(e) {
                  return e.map((function(e, t) {
                      return Object(B.jsx)(ls.d, Object(s.a)(Object(s.a)({}, Object(ts.F)(1 === t)), {}, {
                          children: Object(B.jsx)(he, Object(s.a)(Object(s.a)({}, ts.G), {}, {
                              children: e
                          }))
                      }), "row".concat(t))
                  }
                  ))
              }(l)
          }) : null
      }, ds = function(e) {
          var t = e.i18n
            , n = e.calculated
            , r = e.locale
            , i = e.finance
            , a = e.offer
            , c = t.finance_rex_order.split("|");
          if (r.includes("de") && null !== n && void 0 !== n && n.financeType) {
              var o = "finance_rex_order_".concat(n.financeType.toLowerCase());
              c = t[o] ? t[o].split("|") : t.finance_rex_order.split("|")
          }
          return Object(B.jsx)(ls.a, Object(s.a)(Object(s.a)({}, Object(ts.H)(void 0 === n)), {}, {
              variant: "striped",
              children: Object(B.jsx)(ls.c, {
                  children: c.map((function(e, o) {
                      return Object(B.jsx)(ss, {
                          rowType: e,
                          rows: c,
                          i18n: t,
                          finance: i,
                          locale: r,
                          calculated: n,
                          offer: a
                      }, "row".concat(o))
                  }
                  ))
              })
          }))
      }, us = n(310), bs = function(e) {
          var t = e.i18n
            , n = e.isLoading
            , r = Object(j.c)()
            , i = r.isServicingIncluded
            , a = r.setIsServicingIncluded
            , c = t.finance_form_servicing
            , o = t.finance_form_servicing_copy
            , l = t.finance_form_servicing_cta;
          return Object(B.jsxs)(u.Fragment, {
              children: [Object(B.jsx)(he, {
                  type: "h3",
                  mb: "2rem",
                  children: c
              }), Object(B.jsx)(he, {
                  type: "copy",
                  mb: "1rem",
                  children: o
              }), Object(B.jsx)(f.h, {
                  mb: "4rem",
                  opacity: n ? .3 : 1,
                  transition: "0.3s opacity",
                  children: Object(B.jsx)(us.a, {
                      size: "xl",
                      colorScheme: "red",
                      onChange: function() {
                          a(!i)
                      },
                      isChecked: i,
                      children: l
                  })
              })]
          })
      }, fs = function(e) {
          var t, n = e.i18n, r = e.locale, i = (e.finance,
          e.offer), a = e.calculated, c = Object(j.e)().setIsModalVisible, o = i.financeDepositHondaContributionAmount, l = n.finance_rex_apr, d = n.finance_rex_honda_deposit_contribution, u = r.includes("de"), b = r.includes("fr"), m = r.includes("es"), p = null === a || void 0 === a ? void 0 : a.financeInterestRateRepresentative, h = !u && (null !== (t = null === a || void 0 === a ? void 0 : a.financeDepositHondaContributionAmount) && void 0 !== t ? t : 0) > 0, O = !!a;
          if (O && !1 === h && !1 === (u || b || m))
              return null;
          var v = Object(q.c)(p, r);
          return Object(B.jsx)(dl.a, {
              isLoaded: O,
              width: "100%",
              children: Object(B.jsxs)(f.h, Object(s.a)(Object(s.a)({}, ts.n), {}, {
                  children: [Object(B.jsx)(wo, Object(s.a)({}, Object(ts.z)(u))), h && Object(B.jsxs)(f.n, Object(s.a)(Object(s.a)({}, Object(ts.E)(r)), {}, {
                      children: [Object(B.jsx)(he, Object(s.a)(Object(s.a)({}, ts.m), {}, {
                          children: d
                      })), Object(B.jsxs)(f.h, {
                          spacing: 5,
                          children: [Object(B.jsx)(he, Object(s.a)(Object(s.a)({}, ts.o), {}, {
                              children: Object(q.f)(o, r, {
                                  trimIntegers: !0
                              })
                          })), Object(B.jsx)(wo, Object(s.a)({}, Object(ts.A)((function() {
                              c(!0, "hondaContribution")
                          }
                          ))))]
                      })]
                  })), Object(B.jsx)(f.a, {
                      height: "4rem",
                      children: Object(B.jsx)(f.d, Object(s.a)({}, ts.K))
                  }), Object(B.jsxs)(f.n, Object(s.a)(Object(s.a)({}, Object(ts.E)(r)), {}, {
                      children: [Object(B.jsx)(he, Object(s.a)(Object(s.a)({}, ts.m), {}, {
                          children: l
                      })), Object(B.jsx)(dl.a, {
                          isLoaded: void 0 !== p,
                          children: Object(B.jsx)(he, Object(s.a)(Object(s.a)({}, ts.o), {}, {
                              children: v
                          }))
                      })]
                  }))]
              }))
          })
      }, ms = function(e) {
          var t, n, r = e.config, i = e.locale, a = e.variant, c = e.accessories, o = e.offer, l = e.page, d = r.i18n, b = r.finance, m = Object(j.c)(), p = m.calculateQueryParams, h = m.useAlternateData, O = m.mileages, v = m.mileageIndex, C = m.financeTerm, g = m.depositAmount, x = m.repaymentTimes, y = m.repaymentTimeIndex, w = m.setFinanceTerm, L = m.setRepaymentTimeIndex, _ = m.setMileageIndex, S = o.financeType, E = o.termsAndConditions, I = a.name, T = Object(z.c)(p, h).data, A = S && S ? S.toLowerCase() : "", M = d.finance_form_average_miles, k = d.finance_form_total_mileage, R = d.finance_form_repayment_time, P = d.finance_form_tailor, F = d.finance_form_finance_details, D = d.finance_form_finance_details_leasing, N = d.finance_form_rex, H = b.displayTotalMileage, V = b.showServicingCheckbox, U = b.termSlidersAvailableFinanceTypes, W = null !== (t = null !== (n = null === T || void 0 === T ? void 0 : T.termsAndConditions) && void 0 !== n ? n : E) && void 0 !== t ? t : d.finance_form_tsandcs_content, Y = W;
          T && (Y = lt(W, T, 0, i));
          var G = x.map((function(e) {
              return {
                  label: "".concat(e),
                  value: e
              }
          }
          ))
            , Z = O.map((function(e) {
              return {
                  label: "".concat(e),
                  value: e
              }
          }
          ));
          if (H) {
              var K, X = null !== (K = o.totalMileageTermMap) && void 0 !== K ? K : [];
              Z = Array.from(new Set(X.filter((function(e) {
                  return -1 !== x.findIndex((function(t) {
                      return t === e.term
                  }
                  ))
              }
              )).map((function(e) {
                  return e.mileage
              }
              )))).map((function(e) {
                  return {
                      label: "".concat(e),
                      value: e
                  }
              }
              ))
          }
          return Object(B.jsxs)(f.n, Object(s.a)(Object(s.a)({}, Object(ts.u)(void 0 !== T)), {}, {
              children: [Object(B.jsx)(he, {
                  type: "h3",
                  children: d["finance_offertype_".concat(A)]
              }), Object(B.jsx)(he, Object(s.a)({}, Object(ts.t)(d["finance_copy_".concat(A)]))), Object(B.jsx)(fs, {
                  i18n: d,
                  locale: i,
                  offer: o,
                  finance: b,
                  calculated: T
              }), !i.includes("de") && Object(B.jsx)(ns, {
                  i18n: d,
                  locale: i,
                  accessories: c,
                  deposit: g,
                  calculated: T
              }), Object(B.jsx)(he, {
                  type: "h1",
                  padding: "3rem 0 5rem",
                  children: P
              }), V && Object(B.jsx)(bs, {
                  i18n: d,
                  isLoading: void 0 === T
              }), Object(B.jsx)(cs, {
                  i18n: d,
                  locale: i,
                  offer: o,
                  isLoading: void 0 === T
              }), Object(B.jsx)(he, {
                  type: "h3",
                  mb: "1rem",
                  children: R
              }), U.includes(S) ? Object(B.jsx)(os, {
                  defaultTerm: C,
                  isLoading: void 0 === T
              }) : Object(B.jsx)(es, {
                  radios: G,
                  direction: x.length > 4 ? "row" : "column",
                  onChange: function(e) {
                      w(x[e]),
                      L(e),
                      H && _(e)
                  },
                  defaultIndex: y,
                  isLoading: void 0 === T,
                  finance_calculator_interaction: "duration"
              }), Object(B.jsx)(f.d, Object(s.a)({}, ts.p)), O.length > 0 && Object(B.jsxs)(u.Fragment, {
                  children: [Object(B.jsx)(he, {
                      type: "h3",
                      mb: "1rem",
                      children: H ? k : M
                  }), Object(B.jsx)(es, {
                      radios: Z,
                      onChange: function(e) {
                          H ? L(e) : _(e)
                      },
                      defaultIndex: H ? y : v,
                      isLoading: void 0 === T,
                      finance_calculator_interaction: "average_mileage"
                  }), Object(B.jsx)(f.d, Object(s.a)({}, ts.p))]
              }), Object(B.jsx)(f.h, {
                  children: i.includes("de") ? Object(B.jsx)(he, {
                      type: "h3",
                      children: S.includes("KML") ? D && "".concat(D, "**") : F && "".concat(F, "**")
                  }) : Object(B.jsx)(he, {
                      type: "h3",
                      children: F
                  })
              }), Object(B.jsx)(he, {
                  type: "h3",
                  color: "brand.red",
                  mb: "2rem",
                  children: I
              }), Object(B.jsx)(he, {
                  type: "spec",
                  children: N
              }), Object(B.jsx)(f.d, {
                  borderBottom: "solid 1px rgba(0,0,0,0.2)"
              }), Object(B.jsx)(ds, {
                  i18n: d,
                  calculated: T,
                  locale: i,
                  offer: o,
                  finance: b
              }), Object(B.jsx)(is, {
                  locale: i,
                  calculated: T,
                  i18n: d,
                  terms: Y,
                  page: l
              })]
          }))
      }, ps = n(91), js = function(e) {
          var t = e.page
            , n = e.croTestTwo
            , r = Object(z.l)().data
            , i = Object(j.b)()
            , a = i.isAEM
            , c = i.setFinanceCalculatorDisplayRatio
            , o = Object(j.d)((function(e) {
              return (0,
              e.getSelectedVariant)()
          }
          ))
            , l = Object(ps.d)(o, r).data
            , d = Object(j.c)()
            , b = d.selectedOfferIndex
            , m = d.setSelectedOfferIndex
            , p = d.setMileages
            , h = d.setDeposit
            , O = d.setRepaymentTimes
            , v = Object(u.useRef)(null)
            , C = Object(z.f)(v)
            , g = Object(rs.b)(v)
            , x = Object(j.d)((function(e) {
              return (0,
              e.getSelectedColour)()
          }
          ))
            , y = Object(j.a)((function(e) {
              return e.selectedAccessories
          }
          ));
          Object(u.useEffect)((function() {
              c(g)
          }
          ), [g]),
          Object(u.useEffect)((function() {
              if (v && v.current && "finance" === t && !C) {
                  var e = .95 * v.current.getBoundingClientRect().top + window.scrollY;
                  window.scroll({
                      top: e,
                      behavior: "smooth"
                  })
              }
          }
          ), [v, t]);
          var w = (null === l || void 0 === l ? void 0 : l.financingOptions) || [];
          if (!r || !o || !x || 0 === w.length)
              return null;
          var L = r.i18n
            , _ = r.locale
            , S = r.finance.financeTypesDisplay
            , E = L.page_title_financecalculator
            , I = L.back;
          if (S) {
              var T = w.sort((function(e, t) {
                  return S.findIndex((function(t) {
                      return t.financeType.toLowerCase() === e.financeType.toLowerCase()
                  }
                  )) - S.findIndex((function(e) {
                      return e.financeType.toLowerCase() === t.financeType.toLowerCase()
                  }
                  ))
              }
              ));
              w = T
          }
          var A = w.map((function(e) {
              var t = e && e.financeType ? e.financeType.toLowerCase() : null
                , n = L["finance_offertype_".concat(t)];
              return t && n ? {
                  label: n,
                  key: t
              } : null
          }
          )).filter((function(e) {
              return null !== e
          }
          )).filter((function(e) {
              return e.label.length
          }
          ))
            , M = w.map((function(e, n) {
              return Object(B.jsx)(ms, {
                  config: r,
                  locale: _,
                  variant: o,
                  colour: x,
                  accessories: y,
                  offer: e,
                  page: t
              }, "offer".concat(n))
          }
          ))
            , k = w[Object(ot.a)(b, 0, w.length - 1)].financeType.toLowerCase();
          return Object(B.jsxs)(f.e, Object(s.a)(Object(s.a)({}, Object(ts.r)(v, a)), {}, {
              children: [a && !_.includes("de") && Object(B.jsx)(f.a, Object(s.a)(Object(s.a)({}, ts.s), {}, {
                  children: Object(B.jsx)(ts.b, {
                      children: Object(B.jsx)(nn.b, {
                          to: "/",
                          children: Object(B.jsx)(Qt, {
                              type: "large",
                              startIcon: "chevronLeft",
                              shuntStart: !0,
                              children: I
                          })
                      })
                  })
              })), Object(B.jsxs)(f.l, Object(s.a)(Object(s.a)({}, ts.s), {}, {
                  children: [Object(B.jsx)(he, {
                      type: "h1",
                      mb: "3rem",
                      children: E
                  }), Object(B.jsx)(fb, {
                      tabs: A,
                      panels: M,
                      onSwitch: function(e) {
                          var t, n, i, a = w.findIndex((function(t) {
                              return t.financeType.toLowerCase() === e.toLowerCase()
                          }
                          ));
                          a = Object(ot.a)(a, 0, w.length - 1),
                          m(a);
                          var c = w[a]
                            , o = c.defaultDepositPercent
                            , l = c.mileageOptions
                            , s = c.termOptions
                            , d = c.financeType
                            , u = c.otrPrice
                            , b = Object(q.i)(u, o);
                          p(l ? l.split(",").map(Number) : []),
                          h(b, o);
                          var f = null !== (t = null === r || void 0 === r || null === (n = r.finance) || void 0 === n || null === (i = n.termSlidersAvailableFinanceTypes) || void 0 === i ? void 0 : i.includes(d)) && void 0 !== t && t;
                          O(s.split(",").map(Number), f)
                      },
                      selectedTabKey: k
                  }), !a && Object(B.jsx)(se, {
                      croTestTwo: n
                  })]
              }))]
          }))
      }, hs = {
          d: "flex",
          flexDir: "column",
          bg: "white",
          minHeight: "100vh",
          position: "relative",
          zIndex: 50,
          alignItems: "center",
          padding: ["2rem 0", "5rem 0"],
          borderTop: "1px solid",
          borderColor: "gray.400",
          initial: "inactive",
          animate: "active",
          variants: {
              active: {
                  opacity: 1,
                  y: 0
              },
              inactive: {
                  opacity: 0,
                  y: 200
              }
          }
      }, Os = {
          direction: "column",
          position: "relative",
          width: ["100%", "85%"],
          height: ["calc(100% - 4rem)", "inherit"],
          m: ["4rem 0 0", 0],
          padding: ["1rem 1rem 2rem", "6rem 2rem 2rem", "6rem 12% 2rem 8%"],
          overflowY: ["auto", "hidden"]
      }, vs = {
          borderBottom: "1px solid",
          borderBottomColor: "gray.400",
          justifyContent: "space-between",
          paddingBottom: "1.5rem",
          marginBottom: [0, "1rem"]
      }, Cs = {
          type: "h3",
          fontWeight: 500
      }, gs = function() {
          var e = Object(z.l)().data
            , t = Object(j.b)().isAEM;
          if (!e || !t)
              return null;
          var n = e.i18n;
          return Object(B.jsx)(Kl, Object(s.a)(Object(s.a)({}, hs), {}, {
              children: Object(B.jsxs)(f.e, Object(s.a)(Object(s.a)({}, Os), {}, {
                  children: [Object(B.jsx)(f.e, Object(s.a)(Object(s.a)({}, vs), {}, {
                      children: Object(B.jsx)(he, Object(s.a)(Object(s.a)({}, Cs), {}, {
                          children: n.your_bike_detail
                      }))
                  })), Object(B.jsx)(V, {}), Object(B.jsx)(f.d, {
                      pt: "4rem"
                  })]
              }))
          }))
      }, xs = Object(C.b)(ho || (ho = Object(O.a)(["\n    button {\n        display: flex;\n        margin: initial;\n        padding: 0.5rem 1rem 0.5rem 1rem;\n        border: unset;\n        border-radius: unset;\n        background: unset;\n    }\n"]))), ys = v.a.div(Oo || (Oo = Object(O.a)(["\n    ", "\n"])), (function(e) {
          return e.isAEM && xs
      }
      )), ws = v.a.div(vo || (vo = Object(O.a)(["\n    button {\n        display: flex;\n        margin: unset;\n        padding: 0 2rem;\n        width: 10rem;\n        border: unset;\n        border-radius: unset;\n        background: #dc182d;\n    }\n"]))), Ls = {
          active: {
              opacity: 1,
              y: 0
          },
          inactive: {
              opacity: 0,
              y: 50
          }
      }, _s = {
          width: ["100%", "60%", "60rem"],
          padding: ["2rem 1rem", "2rem 0"],
          spacing: 5
      }, Ss = {
          type: "h4-caps",
          color: "brand.red",
          padding: "3rem 0",
          fontWeight: 500,
          letterSpacing: 1.2
      }, Es = {
          width: "100%",
          mb: "3rem",
          position: "relative",
          zIndex: 10
      }, Is = {
          textOverflow: "ellipsis",
          flex: .8,
          textAlign: "left",
          overflow: "hidden",
          type: "h4",
          fontWeight: "400",
          letterSpacing: 1,
          whiteSpace: "nowrap",
          paddingLeft: "1rem"
      }, Ts = {
          type: "h6",
          color: "brand.red",
          transform: "translateY(1px)"
      }, As = function(e) {
          return {
              type: "chevronDouble",
              style: {
                  transform: e ? "rotate(270deg) translate(2px,0)" : "rotate(180deg) translate(0,2px)",
                  transition: "0.3s transform"
              },
              width: "1rem",
              fill: "currentColor"
          }
      }, Ms = {
          padding: ["0 0 2rem", 0],
          border: 0
      }, ks = {
          type: "h3",
          fontWeight: "500",
          letterSpacing: 1,
          whiteSpace: "nowrap",
          mr: ["-0.2rem", "0.5rem"]
      }, Rs = {
          p: [0, "1rem 0 2rem"]
      }, Ps = {
          type: "h3",
          color: "brand.red"
      }, Fs = {
          type: "h1",
          color: "brand.blueGray"
      }, Ds = {
          my: "2rem",
          justifyContent: "space-between",
          borderBottom: "3px solid",
          borderColor: "brand.red",
          paddingBottom: "2rem"
      }, Ns = {
          border: 0
      }, Bs = function(e) {
          return {
              type: [e > 0 ? "h6" : "h6-caps", e > 0 ? "h5" : "h5-caps"],
              color: "gray.1000",
              lineHeight: 1.2
          }
      }, Hs = function(e) {
          return {
              type: e.includes("de") ? "h5" : "copy"
          }
      }, zs = function(e) {
          var t = e.rows
            , n = e.tableNum
            , r = Object(z.l)().data
            , i = function(e) {
              return e.map((function(t, i) {
                  var a, c, o, l, d = Object(B.jsxs)(he, Object(s.a)(Object(s.a)({}, Bs(n)), {}, {
                      children: [t.value, Object(B.jsx)("br", {}), Object(B.jsx)("span", {
                          "aria-label": null === r || void 0 === r || null === (a = r.i18n) || void 0 === a ? void 0 : a.part_number,
                          children: t.partNumber
                      })]
                  }));
                  return t.priceLabel && (d = Object(B.jsxs)(f.h, {
                      justifyContent: "flex-end",
                      children: [Object(B.jsxs)(he, Object(s.a)(Object(s.a)({}, Bs(n)), {}, {
                          color: "brand.red",
                          children: [t.priceLabel, ":\xa0"]
                      })), Object(B.jsx)(he, Object(s.a)(Object(s.a)({}, Bs(n)), {}, {
                          children: t.value
                      }))]
                  })),
                  "delete" === t.type && (d = Object(B.jsx)(f.h, {
                      children: Object(B.jsx)(wo, Object(s.a)({}, (c = function() {
                          return function(e) {
                              var t = Object(ce.h)(e);
                              Object(ce.m)(t)
                          }(t.value)
                      }
                      ,
                      {
                          type: "delete",
                          height: "1.3rem",
                          fill: "currentColor",
                          mr: "auto",
                          cursor: "pointer",
                          opacity: .7,
                          _hover: {
                              opacity: 1
                          },
                          onClick: c
                      })))
                  })),
                  Object(B.jsx)(ls.d, Object(s.a)(Object(s.a)({}, (o = "delete" === t.type,
                  l = i === e.length - 1,
                  {
                      width: o ? "25%" : "initial",
                      textAlign: l ? "right" : "left",
                      border: "none",
                      color: "brand.blueGray",
                      padding: ["1rem 0.8rem", "1rem 1.5rem"]
                  })), {}, {
                      children: d
                  }), "row".concat(i))
              }
              ))
          };
          return Object(B.jsx)(ls.a, Object(s.a)(Object(s.a)({}, Ns), {}, {
              children: Object(B.jsx)(ls.c, {
                  children: t.map((function(e, t) {
                      if (e)
                          return Object(B.jsx)(ls.g, {
                              children: i(e.columns)
                          }, "row".concat(t))
                  }
                  ))
              })
          }))
      };
      zs.defaultProps = {
          rows: [],
          tableNum: 0
      };
      var Vs, Us, Ws, Ys, Gs, Zs, Ks, Xs = zs, qs = function(e) {
          var t = e.colour
            , n = e.i18n
            , r = e.locale
            , i = e.variant
            , a = Object(j.a)((function(e) {
              return e.selectedAccessories
          }
          ))
            , c = Object(j.b)().isAEM
            , o = a.map((function(e) {
              return e.id
          }
          ))
            , l = Object(j.c)()
            , d = l.calculateQueryParams
            , b = l.useAlternateData
            , m = Object(le.a)(d, b).data;
          if (!i || !t || !m)
              return null;
          var p = _e(i, t, Object(ce.g)(o), n, r, m)
            , O = n.rrp
            , v = [];
          return Object(B.jsx)(h.a, Object(s.a)(Object(s.a)({
              defaultIndex: v,
              allowMultiple: !0
          }, Es), {}, {
              children: p.map((function(e, t) {
                  return v.push(t),
                  Object(B.jsx)(h.c, Object(s.a)(Object(s.a)({}, Ms), {}, {
                      children: function(n) {
                          var r, i = n.isExpanded;
                          return Object(B.jsxs)(u.Fragment, {
                              children: [Object(B.jsx)(ys, {
                                  isAEM: c,
                                  children: Object(B.jsxs)(h.b, Object(s.a)(Object(s.a)({}, (r = 0 !== e.rows.length,
                                  {
                                      width: "100%",
                                      borderBottom: "1px solid rgba(0,0,0,0.1)",
                                      paddingX: "1rem",
                                      _active: {
                                          outline: "none"
                                      },
                                      _focus: {
                                          outline: "none"
                                      },
                                      height: "4rem",
                                      color: "brand.red",
                                      pointerEvents: r ? "auto" : "none",
                                      _hover: {
                                          bg: "transparent"
                                      }
                                  })), {}, {
                                      children: [Object(B.jsx)(wo, Object(s.a)({}, As(0 !== e.rows.length && i))), Object(B.jsx)(he, Object(s.a)(Object(s.a)({}, Is), {}, {
                                          children: e.name
                                      })), Object(B.jsxs)(f.h, {
                                          spacing: 2,
                                          ml: "auto",
                                          children: [e.prefix && Object(B.jsx)(he, Object(s.a)(Object(s.a)({}, Ts), {}, {
                                              children: O
                                          })), Object(B.jsx)(he, Object(s.a)(Object(s.a)({}, ks), {}, {
                                              children: e.price
                                          }))]
                                      })]
                                  }))
                              }), Object(B.jsx)(h.d, Object(s.a)(Object(s.a)({}, Rs), {}, {
                                  children: Object(B.jsx)(Xs, {
                                      rows: e.rows,
                                      tableNum: t
                                  })
                              }))]
                          })
                      }
                  }), "accordionTable_".concat(t))
              }
              ))
          }))
      }, Qs = function(e) {
          var t = e.config
            , n = e.calculated
            , r = t.i18n
            , i = t.finance
            , a = t.locale
            , c = Object(j.c)().useAlternateData
            , o = n.financeMonthlyPrice
            , l = n.financeTotalPayablePrice
            , s = r.finance_rex_monthly_payments
            , d = r.finance_rex_total_amount_payable
            , b = r.finance_options
            , m = i.hideSummaryFinancialInfo
            , p = s.replace("{MONTHLY_TERM}", null !== n && void 0 !== n && n.financeTerm ? "".concat(null === n || void 0 === n ? void 0 : n.financeTerm) : "");
          return Object(B.jsx)(Kl, {
              animate: {
                  opacity: n ? 1 : .2
              },
              flexDir: "column",
              children: !m && Object(B.jsxs)(u.Fragment, {
                  children: [Object(B.jsxs)(he, {
                      type: "h4-caps",
                      mb: a.includes("ES") ? "2rem" : 0,
                      children: [b, a.includes("de") && "**"]
                  }), !c && Object(B.jsxs)(u.Fragment, {
                      children: [Object(B.jsxs)(f.h, {
                          justifyContent: "space-between",
                          mt: "1rem",
                          children: [Object(B.jsx)(he, {
                              type: "copy",
                              children: a.includes("de") ? "".concat(p, "**") : "".concat(s, "**")
                          }), Object(B.jsxs)(he, {
                              type: "copy",
                              children: [Object(q.f)(o, a, {
                                  trimIntegers: !0
                              }), "\xa0", a.includes("de") && "Monatliche Rate"]
                          })]
                      }), Object(B.jsxs)(f.h, {
                          justifyContent: "space-between",
                          mt: "1rem",
                          children: [Object(B.jsx)(he, {
                              type: "copy",
                              children: d
                          }), Object(B.jsx)(he, {
                              type: "copy",
                              children: Object(q.f)(l, a, {
                                  trimIntegers: !0
                              })
                          })]
                      })]
                  })]
              })
          })
      }, Js = function(e) {
          var t = e.i18n
            , n = e.locale
            , r = e.isFinanceAvailable
            , i = e.calculated
            , a = Object(u.useState)("")
            , c = Object(d.a)(a, 2)
            , o = c[0]
            , l = c[1];
          return Object(u.useEffect)((function() {
              var e = ct(t);
              l(e)
          }
          ), []),
          r && n.includes("de") ? Object(B.jsx)(he, Object(s.a)(Object(s.a)({}, Hs(n)), {}, {
              children: it(i, t)
          })) : Object(B.jsx)(he, Object(s.a)(Object(s.a)({}, Hs(n)), {}, {
              children: o
          }))
      }, $s = function(e) {
          var t = e.croTestTwo
            , n = Object(z.l)().data
            , r = Object(j.c)()
            , i = r.useAlternateData
            , a = r.depositAmount
            , c = r.calculateQueryParams
            , o = Object(j.b)()
            , l = o.isAEM
            , d = o.isFinanceAvailable
            , b = o.currentStep
            , m = Object(j.e)().setIsFloatingCTAVisible
            , p = Object(u.useRef)(null)
            , h = Object(j.d)((function(e) {
              return (0,
              e.getSelectedVariant)()
          }
          ))
            , O = Object(j.d)((function(e) {
              return (0,
              e.getSelectedColour)()
          }
          ))
            , v = Object(le.a)(c, i).data;
          if (Object(u.useEffect)((function() {
              m(!0)
          }
          ), [b]),
          !n || !h || !O)
              return null;
          var C = n.finance
            , g = n.i18n
            , x = n.locale
            , y = C.enableFinance
            , w = C.hideSummaryFinancialInfo
            , L = g.finance_monthly_payment_disclaimer
            , _ = g.financial_services
            , S = g.price_breakdown
            , E = g.summary_your_bike
            , I = g.summary_conditions
            , T = g.summary_table_total
            , A = g.finance_options
            , M = g.view_offers
            , k = g.view_offers_url
            , R = g.back
            , P = h.name
            , F = h.price
            , D = [];
          A && A.length > 0 && !i && D.push({
              type: "finance_options",
              label: g.finance_options,
              url: g.finance_options_url
          }),
          M && M.length > 0 && k.length > 0 && D.push({
              type: "view_offers",
              label: g.view_offers,
              url: g.view_offers_url
          });
          var N = F && Object(q.r)(n, h, v, i);
          if (!v)
              return null;
          var H = v.otrPrice;
          return Object(B.jsxs)(Kl, Object(s.a)(Object(s.a)({}, function(e, t, n) {
              return {
                  ref: e,
                  d: "flex",
                  flexDir: "column",
                  bg: "white",
                  position: "relative",
                  zindex: 50,
                  alignItems: "center",
                  padding: ["2rem 2rem ".concat(t || n ? "2rem" : "30rem"), "5rem 0 15rem"],
                  borderTop: "1px solid",
                  borderColor: "gray.400",
                  initial: "inactive",
                  animate: "active",
                  variants: Ls
              }
          }(p, y, l)), {}, {
              children: [l && Object(B.jsx)(f.a, Object(s.a)(Object(s.a)({}, _s), {}, {
                  children: Object(B.jsx)(ws, {
                      children: Object(B.jsx)(nn.b, {
                          to: "/",
                          children: Object(B.jsx)(Qt, {
                              type: "large",
                              startIcon: "chevronLeft",
                              shuntStart: !0,
                              children: R
                          })
                      })
                  })
              })), Object(B.jsxs)(f.l, Object(s.a)(Object(s.a)({}, _s), {}, {
                  children: [Object(B.jsx)(he, {
                      type: "h1",
                      children: E
                  }), Object(B.jsx)(he, {
                      type: "h4-caps",
                      children: P
                  }), Object(B.jsx)(he, Object(s.a)(Object(s.a)({}, Ss), {}, {
                      children: x.includes("de") ? "".concat(S, "*") : S
                  })), Object(B.jsx)(qs, {
                      variant: h,
                      colour: O,
                      i18n: g,
                      locale: x
                  }), Object(B.jsxs)(f.h, Object(s.a)(Object(s.a)({}, Ds), {}, {
                      hidden: !H,
                      children: [Object(B.jsx)(he, Object(s.a)(Object(s.a)({}, Ps), {}, {
                          children: T
                      })), Object(B.jsx)(he, Object(s.a)(Object(s.a)({}, Fs), {}, {
                          children: "".concat(Object(q.f)(H, x, {
                              trimIntegers: !0,
                              hideIfZero: !0
                          }), "*")
                      }))]
                  })), N && Object(B.jsx)(Qs, {
                      config: n,
                      calculated: v
                  }), !w && !i && Object(B.jsxs)(u.Fragment, {
                      children: [Object(B.jsx)(f.d, {
                          height: "1px",
                          bg: "rgba(0,0,0,0.2)"
                      }), !x.includes("de") && Object(B.jsx)(he, {
                          type: "h4-caps",
                          color: "brand.red",
                          mb: "2rem",
                          children: _
                      }), Object(B.jsx)(he, {
                          type: "copy",
                          my: "2rem",
                          children: d && Object(q.k)(L, x, a) && "**".concat(Object(q.k)(L, x, a))
                      })]
                  }), Object(B.jsx)(Et, {
                      columns: ["repeat(1, 1fr)", "repeat(2, 1fr)"],
                      overrideCTAs: D,
                      hvbPosition: "btf"
                  }), Object(B.jsxs)(f.n, {
                      alignItems: "flex-start",
                      pt: "2rem",
                      children: [Object(B.jsx)(he, Object(s.a)(Object(s.a)({}, Hs(x)), {}, {
                          children: I
                      })), Object(B.jsx)(Js, {
                          i18n: g,
                          locale: x,
                          isFinanceAvailable: d,
                          calculated: v
                      })]
                  }), !l && !d && Object(B.jsx)(se, {
                      croTestTwo: t
                  })]
              }))]
          }))
      }, ed = {
          spacing: ["2rem", "3rem"],
          padding: ["1rem 3rem", "1rem 4rem", "1rem 10rem"],
          mx: "auto"
      }, td = {
          position: "relative",
          flexDir: "column",
          width: "16rem",
          height: "100%"
      }, nd = function(e) {
          var t = e ? {
              outline: "1px solid",
              outlineColor: "brand.red"
          } : {
              boxShadow: "0 0 10px 0px rgba(0,0,0,0.1)"
          };
          return Object(s.a)({
              as: "button",
              bg: "white",
              alignItems: "center",
              height: "8rem",
              minHeight: "8rem",
              position: "relative",
              justifyContent: "center",
              overflow: "hidden"
          }, t)
      }, rd = {
          type: "h7-caps",
          bg: "gray.1000",
          padding: "0.4rem 1rem 0.1rem",
          color: "white",
          fontWeight: "700",
          letterSpacing: 1.5,
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 5
      }, id = {
          position: "absolute",
          bottom: "0",
          right: "0",
          zIndex: 10,
          bgColor: "gray.300",
          fill: "gray.800",
          size: "2.5rem",
          _hover: {
              bg: "gray.400",
              fill: "brand.slate"
          }
      }, ad = {
          as: "button",
          type: "h6-caps",
          color: "brand.slate",
          padding: "0.6rem 1.2rem 0.5rem",
          boxShadow: "inset 0 0 0 1px ".concat(m.a.colors.brand.red),
          letterSpacing: 1.5,
          bg: "transparent",
          _hover: {
              boxShadow: "inset 0 0 0 2px ".concat(m.a.colors.brand.red)
          }
      }, cd = Object(s.a)(Object(s.a)({}, ad), {}, {
          color: "white",
          boxShadow: "none",
          bg: "brand.blueGray",
          _hover: {
              boxShadow: "none"
          }
      }), od = function(e) {
          return e ? cd : ad
      }, ld = function(e) {
          return {
              initial: "inactive",
              animate: e ? "active" : "inactive",
              flexDir: "column",
              transition: "0.5s opacity",
              overflow: "hidden"
          }
      }, sd = Object(C.c)(Vs || (Vs = Object(O.a)(["\n    0% { transform: translateY(5px); opacity: 0; }\n    2% { transform: translateY(-10px); opacity: 0.1; }\n    4% { transform: translateY(0); opacity: 0.2; }\n    6% { transform: translateY(-5px); opacity: 0.5; }\n    8% { transform: translateY(0); opacity: 1; }\n    90% { transform: translateY(0); opacity: 1; }\n\t100% { transform: translateY(0); opacity: 0; }\n"]))), dd = function(e) {
          return {
              type: "h5",
              position: "absolute",
              height: "3rem",
              d: "flex",
              zIndex: 3,
              pointerEvents: "none",
              opacity: 0,
              left: 0,
              right: 0,
              top: "-4rem",
              justifyContent: "center",
              paddingTop: "0.2rem",
              alignItems: "center",
              bg: "brand.blueGray",
              color: "white",
              animation: "".concat(e ? sd : null, " 2.5s forwards"),
              _after: {
                  position: "absolute",
                  content: '""',
                  bottom: "-0.6rem",
                  left: "calc(50% - 0.8rem)",
                  width: 0,
                  height: 0,
                  borderStyle: "solid",
                  borderWidth: "0.8rem 0.8rem 0 0.8rem",
                  borderColor: "transparent",
                  borderTopColor: "brand.blueGray"
              }
          }
      }, ud = function(e) {
          var t, n, r = e.i18n, i = e.isHovered, a = e.isSelected, c = e.isSmall, o = e.locale, l = e.onClick, b = e.accessory, m = Object(j.a)(), p = m.getSelectedCategory, h = m.setPreviewAccessory, O = (m.getTotalAccessoryCost,
          m.selectedAccessories,
          Object(u.useState)(!1)), v = Object(d.a)(O, 2), C = v[0], g = v[1], x = Object(j.e)((function(e) {
              return e.isModalVisible
          }
          )), y = Object(j.e)((function(e) {
              var t = e.setIsModalVisible;
              return function() {
                  Object(ce.k)(b) ? t(!0, "packInfo") : t(!0, "accessoryInfo"),
                  h(b)
              }
          }
          )), w = b.thumbnailUrl, L = b.mostPopular, _ = b.name, S = b.price, E = r.accessory_added, I = r.accessory_add, T = r.accessory_remove, A = r.most_popular, M = r.short_price_unavailable, k = S && S > 0 ? Object(q.f)(S, o, {
              trimIntegers: !0
          }) : M;
          return Object(B.jsxs)(f.a, Object(s.a)(Object(s.a)({}, td), {}, {
              children: [!0 !== c && Object(B.jsx)(he, Object(s.a)(Object(s.a)({}, dd(C && a)), {}, {
                  children: E
              })), Object(B.jsx)(bl.a, Object(s.a)(Object(s.a)({}, (n = C && a && c && !x,
              Object(s.a)(Object(s.a)({}, dd(n)), {}, {
                  placement: "top-start",
                  width: "16rem",
                  isOpen: n,
                  fontSize: "1.4rem"
              }))), {}, {
                  label: E,
                  children: Object(B.jsxs)(f.b, Object(s.a)(Object(s.a)({}, nd(a)), {}, {
                      onClick: y,
                      children: [L && Object(B.jsx)(he, Object(s.a)(Object(s.a)({}, rd), {}, {
                          children: A
                      })), Object(B.jsx)(W.a, Object(s.a)(Object(s.a)({}, (t = w,
                      {
                          src: t,
                          width: t.includes("no-image") ? "70%" : "initial",
                          objectFit: "cover",
                          pointerEvents: "none"
                      })), {}, {
                          loading: "lazy"
                      })), Object(B.jsx)(f.k, Object(s.a)(Object(s.a)({}, id), {}, {
                          children: Object(B.jsx)(wo, {
                              type: "info",
                              fill: "currentColour",
                              height: "1.2rem"
                          })
                      })), Object(B.jsx)(Le, {
                          accessory: b,
                          context: "accessory_selector_button"
                      })]
                  }))
              })), Object(B.jsx)(he, {
                  type: "h6-caps",
                  fontWeight: "100",
                  isTruncated: !0,
                  m: "0.7rem 0 0.5rem",
                  letterSpacing: 1.5,
                  d: "block",
                  children: _
              }), Object(B.jsxs)(Kl, Object(s.a)(Object(s.a)({}, ld(i)), {}, {
                  children: [Object(B.jsx)(f.d, {
                      m: "0.4rem 0 0.8rem",
                      borderBottom: "1px solid rgba(0,0,0,0.1)"
                  }), Object(B.jsxs)(f.e, {
                      justifyContent: "space-between",
                      alignItems: "center",
                      children: [Object(B.jsx)(he, {
                          type: "h5",
                          children: k
                      }), Object(B.jsx)(he, Object(s.a)(Object(s.a)({
                          onClick: function() {
                              var e, t;
                              a || (g(!0),
                              setTimeout((function() {
                                  g(!1)
                              }
                              ), 2e3));
                              var n = null !== (e = null !== (t = null === b || void 0 === b ? void 0 : b.globalName) && void 0 !== t ? t : b.name) && void 0 !== e ? e : "";
                              Object(Lt.a)({
                                  config_interaction: "packs_and_accessories_click",
                                  pack_accessory_category: p().iconName.toLowerCase(),
                                  pack_accessory_name: n.toLowerCase(),
                                  pack_accessory_action: a ? "remove" : "add",
                                  pack_accessory_price: S
                              }),
                              l()
                          }
                      }, od(a)), {}, {
                          children: a ? T : I
                      }))]
                  })]
              }))]
          }))
      }, bd = function(e) {
          var t = e.arrowNav
            , n = e.isHovered
            , r = e.umbraco
            , i = e.width
            , a = Object(j.a)()
            , c = a.getSelectedCategory
            , o = a.selectedAccessories
            , l = Object(u.useState)(0)
            , b = Object(d.a)(l, 2)
            , m = b[0]
            , p = b[1]
            , h = Object(u.useState)(0)
            , O = Object(d.a)(h, 2)
            , v = O[0]
            , C = O[1]
            , g = c();
          if (Object(u.useEffect)((function() {
              if (g) {
                  var e = i - 160;
                  C(Math.floor(e / 200))
              }
          }
          ), [i, g]),
          Object(u.useEffect)((function() {
              g && p(0)
          }
          ), [g]),
          !g || !o)
              return null;
          var x = r.i18n
            , y = r.locale
            , w = g.accessories
            , L = Object(ce.f)(w);
          return Object(B.jsxs)(u.Fragment, {
              children: [t && Object(B.jsx)(Dt, {
                  isBackActive: m > 0,
                  isNextActive: m + v < L.length,
                  onClick: function(e) {
                      var t = e.currentTarget.id;
                      p(m + ("back" === t ? -1 : 1))
                  }
              }), Object(B.jsx)(f.h, Object(s.a)(Object(s.a)({}, ed), {}, {
                  children: L.map((function(e, r) {
                      var i = Object(ce.i)(o).findIndex((function(t) {
                          return t === e.partNumber
                      }
                      )) > -1
                        , a = Object(B.jsx)(ud, {
                          onClick: function() {
                              return i ? Object(ce.m)(e) : Object(ce.d)(e)
                          },
                          accessory: e,
                          locale: y,
                          i18n: x,
                          isHovered: n,
                          isSelected: i,
                          isSmall: !t
                      }, "accesssory_".concat(r));
                      return t ? r >= m && r < v + m ? a : null : a
                  }
                  ))
              }))]
          })
      }, fd = Object(C.b)(Us || (Us = Object(O.a)(["\n    button {\n        display: flex;\n        background: white;\n        margin: unset;\n        padding: initial;\n        border: unset;\n        border-radius: unset;\n    }\n    &:hover {\n        outline-color: '#DC182D';\n    }\n"]))), md = v.a.div(Ws || (Ws = Object(O.a)(["\n    ", "\n    outline: ", ";\n    outline-color: ", ";\n    flex-grow: 1;\n    flex-basis: min-content;\n"])), (function(e) {
          return e.isAEM && fd
      }
      ), (function(e) {
          var t = e.isAEM
            , n = e.isActive;
          return t && n ? "1px solid" : "0px"
      }
      ), (function(e) {
          var t = e.isAEM
            , n = e.isActive;
          return t && n ? "#DC182D" : "unset"
      }
      )), pd = function(e) {
          var t, n, r, i, a = e.isActive, c = e.onClick, o = e.variant, l = e.variantNum, d = Object(z.l)().data, u = Object(j.c)((function(e) {
              return e.getBestOfferForVariant(o)
          }
          )), b = Object(j.e)((function(e) {
              var t = e.setIsModalVisible;
              return function() {
                  return t(!0, "info")
              }
          }
          )), m = Object(j.b)().isAEM, p = j.d.getState().getSelectedColour;
          if (!d || !u)
              return null;
          var h = d.i18n
            , O = d.finance
            , v = d.locale
            , C = h.finance_monthly_price_display
            , g = h.short_price_unavailable
            , x = O.showMonthlyPrice && Object(q.a)(o)
            , y = p()
            , w = null !== (t = Object(q.q)(o, y)) && void 0 !== t ? t : 0
            , L = u.otrPrice + (null !== y && void 0 !== y && null !== (n = y.financeCode) && void 0 !== n && n.length ? 0 : w)
            , _ = Object(q.g)(L, v, {
              trimIntegers: !0,
              hideIfZero: !0,
              zeroValueLabel: g
          });
          if (null !== u && void 0 !== u && u.financeMonthlyPrice && x) {
              var S = Object(q.o)(C, v, u.financeMonthlyPrice);
              _ = "".concat(_, " ").concat(S)
          }
          var E, I = {
              outline: "1px solid",
              outlineColor: "brand.red",
              boxShadow: "none"
          }, T = a ? {
              outline: "1px solid",
              outlineColor: "brand.red"
          } : {
              boxShadow: "0 0 10px 0px rgba(0,0,0,0.1)"
          }, A = o.appDefaultParts, M = o.colours, k = o.name, R = {
              variant: null === o || void 0 === o ? void 0 : o.id,
              colour: null === (r = M[0]) || void 0 === r ? void 0 : r.id,
              parts: A
          }, P = (window.innerWidth - 150) / l, F = null === (i = M[0]) || void 0 === i ? void 0 : i.bikeThumb;
          0 === F.length && (F = null === (E = M[0]) || void 0 === E ? void 0 : E.simpleImage);
          return Object(B.jsx)(md, {
              isAEM: m,
              isMobile: Go.isMobileOnly,
              isActive: a,
              children: Object(B.jsxs)(f.e, Object(s.a)(Object(s.a)({
                  onClick: c,
                  as: "button",
                  bg: "white",
                  alignItems: "center",
                  maxW: [Go.isMobileOnly ? "80vw" : "32rem", P > 320 ? 320 : P],
                  minW: ["18rem", "30rem", "initial"],
                  height: "7rem",
                  width: "100%",
                  position: "relative",
                  _focus: I,
                  _hover: I
              }, T), {}, {
                  overflow: "hidden",
                  flex: 1,
                  justifyContent: "flex-start",
                  children: [Object(B.jsx)(f.b, {
                      minWidth: "9rem",
                      maxWidth: "9rem",
                      height: "7rem",
                      position: "relative",
                      justifyContent: "center",
                      children: Object(B.jsx)(X, {
                          angle: 0,
                          bikeConfig: R,
                          size: "192x108",
                          fallbackUrl: F,
                          style: {
                              width: "115%",
                              height: "100%",
                              alignItems: ["flex-end", "center"],
                              justifyContent: "center",
                              position: "absolute",
                              left: -3,
                              top: 1
                          },
                          isActive: a
                      })
                  }), Object(B.jsxs)(f.e, {
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "center",
                      flexGrow: 1,
                      textAlign: "left",
                      p: "0 2rem 0 0",
                      position: "relative",
                      zIndex: 1,
                      pointerEvents: "none",
                      overflowX: "hidden",
                      children: [Object(B.jsx)(he, {
                          type: "h6-caps",
                          fontWeight: "100",
                          mb: "0.3rem",
                          letterSpacing: 1.5,
                          children: k
                      }), Object(B.jsx)(dl.b, {
                          isLoaded: !!u,
                          children: Object(B.jsx)(he, {
                              paddingBottom: "0.5rem",
                              color: "brand.red",
                              type: "h5",
                              letterSpacing: 0,
                              lineHeight: 1,
                              isTruncated: !0,
                              width: "100%",
                              children: _
                          })
                      })]
                  }), Object(B.jsx)(f.k, {
                      as: "a",
                      position: "absolute",
                      bottom: "0",
                      right: "0",
                      zIndex: 10,
                      bgColor: "gray.300",
                      fill: "gray.800",
                      size: "2.5rem",
                      onClick: b,
                      _hover: {
                          bg: "gray.400",
                          fill: "brand.slate"
                      },
                      children: Object(B.jsx)(wo, {
                          type: "info",
                          fill: "currentColour",
                          height: "1.2rem"
                      })
                  })]
              }))
          })
      }, jd = function(e) {
          var t = e.selectedVariantId
            , n = e.onClick
            , r = e.variants;
          return Object(B.jsx)(f.h, {
              spacing: "2rem",
              padding: ["1rem 3rem", "1rem 4rem"],
              justifyContent: "center",
              maxW: ["initial", "initial", "100%"],
              height: "9rem",
              children: r.map((function(e, i) {
                  return Object(B.jsx)(pd, {
                      onClick: function() {
                          n(i)
                      },
                      variant: e,
                      isActive: e.id === t,
                      variantNum: r.length
                  }, e.id)
              }
              ))
          })
      }, hd = {
          type: "h4-caps",
          whiteSpace: "nowrap"
      }, Od = function(e) {
          var t, n = e.category, r = e.isActive, i = e.onClick, a = e.selectedAccessories, c = n.accessories.filter((function(e) {
              return Object(ce.i)(a).indexOf(e.partNumber) > -1
          }
          )).length, o = Object(ce.f)(n.accessories);
          return 0 === o.length ? null : Object(B.jsxs)(f.e, Object(s.a)(Object(s.a)({}, function(e, t) {
              return {
                  as: "button",
                  position: "relative",
                  padding: "1rem 0.5rem",
                  boxShadow: "inset 0 ".concat(e ? "-3px" : "0", " ").concat(m.a.colors.brand.red),
                  transition: "0.2s box-shadow",
                  cursor: "pointer",
                  onClick: function() {
                      return t()
                  }
              }
          }(r, i)), {}, {
              children: [Object(B.jsx)(f.a, Object(s.a)(Object(s.a)({}, (t = c > 0,
              {
                  d: t ? "flex" : "none",
                  position: "absolute",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "1rem",
                  bg: "gray.400",
                  borderRadius: "0.75rem",
                  width: "1.5rem",
                  height: "1.5rem",
                  top: "1.1rem",
                  right: "-1.6rem",
                  lineHeight: "1.5rem"
              })), {}, {
                  children: c
              })), Object(B.jsx)(he, Object(s.a)(Object(s.a)({}, hd), {}, {
                  children: "".concat(n.iconName, " (").concat(o.length, ")")
              }))]
          }))
      }, vd = n(311), Cd = {
          type: "configure",
          width: "1.5rem",
          fill: m.a.colors.gray[900]
      }, gd = {
          active: {
              opacity: 1,
              y: 0,
              display: "flex"
          },
          inactive: {
              opacity: 0,
              y: 20,
              transitionEnd: {
                  display: "none"
              },
              transition: {
                  type: "spring",
                  duration: .2
              }
          }
      }, xd = {
          position: "relative",
          padding: "1.5rem",
          bg: "white",
          border: "solid 1px",
          borderColor: "brand.red",
          flexDir: "column",
          justifyContent: "center",
          alignItems: "center"
      }, yd = {
          type: "configure",
          width: "1.5rem",
          fill: m.a.colors.gray[900]
      }, wd = {
          type: "h3",
          mt: "1rem",
          borderBottom: "1px solid",
          paddingBottom: "0.2rem",
          borderColor: "gray.400"
      }, Ld = {
          type: "h6",
          lineHeight: 1,
          letterSpacing: 1,
          width: "18rem",
          my: "1rem",
          textAlign: "center"
      }, _d = {
          spacing: 5,
          margin: "1rem 0.5rem 2rem"
      }, Sd = {
          type: "add",
          width: "1rem",
          fill: m.a.colors.brand.red,
          opacity: .5
      }, Ed = {
          type: "outline",
          height: "2.5rem",
          padding: "0.3rem 2rem",
          width: "initial",
          mx: "auto",
          justifyContent: "center",
          borderColor: "brand.red"
      }, Id = {
          type: "close",
          position: "absolute",
          top: 0,
          right: 0,
          size: "2.5rem",
          padding: "0.5rem"
      }, Td = {
          en_gb: "Browse our Accessory Packs",
          de_de: "Entdecken Sie unsere Zubeh\xf6rpakete",
          it_it: "Scopri i nostri kit accessori",
          es_es: "Explore nuestros packs de accesorios",
          fr_fr: "Acc\xe9dez \xe0 nos packs d\u2019accessoires",
          de_at: "Entdecke unsere Zubeh\xf6rpakete",
          nl_be: "Bekijk onze accessoire packs",
          fr_be: "Acc\xe9dez \xe0 nos packs d\u2019accessoires",
          fr_lu: "Acc\xe9dez \xe0 nos packs d\u2019accessoires",
          nl_nl: "Bekijk onze accessoire packs",
          cs_cz: "Prohl\xe9dn\u011bte si na\u0161e sady p\u0159\xedslu\u0161enstv\xed",
          sk_sk: "Prezrite si na\u0161e sady pr\xedslu\u0161enstva",
          hu_hu: "B\xf6ng\xe9sszen a kieg\xe9sz\xedt\u0151 csomagjaink k\xf6z\xf6tt!",
          pl_pl: "Przejrzyj nasze pakiety akcesori\xf3w",
          pt_pt: "Conhe\xe7a os nossos packs de acess\xf3rios",
          fr_ch: "Acc\xe9dez \xe0 nos packs d\u2019accessoires",
          de_ch: "Entdecken Sie unsere Zubeh\xf6rpakete",
          it_ch: "Scopri i nostri kit accessori"
      }, Ad = function(e) {
          return e in Td
      }, Md = function(e) {
          var t = e.i18n
            , n = e.locale
            , r = Object(z.l)().data
            , i = Object(u.useRef)(null)
            , a = Object(u.useState)(!1)
            , c = Object(d.a)(a, 2)
            , o = c[0]
            , l = c[1]
            , b = Object(j.a)().categories
            , m = t.configurator_cta_label
            , p = t.configurator_title
            , h = t.configurator_cta_description
            , O = t.configurator_promo_cta
            , v = t.packs_popup_label
            , C = t.packs_popup_description
            , g = ["comfort", "design", "luggage"];
          Object(u.useEffect)((function() {
              var e = setTimeout((function() {
                  l(!0)
              }
              ), 1e3);
              return function() {
                  return clearTimeout(e)
              }
          }
          ), []),
          Object(u.useEffect)((function() {
              function e(e) {
                  var t;
                  !i.current || null !== (t = i.current) && void 0 !== t && t.contains(e.target) || l(!1)
              }
              return document.addEventListener("mousedown", e),
              function() {
                  document.removeEventListener("mousedown", e)
              }
          }
          ), [i]);
          var x = function() {
              l(!o)
          };
          if (!r)
              return null;
          var y, w = !r.enableOneMinuteConfigurator, L = p, _ = h;
          if (w) {
              var S = b.find((function(e) {
                  return "Packs" === e.iconType
              }
              ));
              L = Object(gt.c)(v, null === S || void 0 === S ? void 0 : S.iconName, "Packs"),
              _ = Object(gt.c)(C, function(e) {
                  var t = e.toLowerCase().replace("-", "_");
                  if (Ad(t))
                      return Td[t];
                  var n = e.substring(0, 2);
                  for (var r in Td)
                      if (r.startsWith(n) && Ad(r))
                          return Td[r];
                  return ""
              }(n))
          }
          return Object(B.jsxs)(f.h, Object(s.a)(Object(s.a)({
              ref: i
          }, {
              margin: "0 2rem 0 0",
              spacing: "1rem",
              top: "0.1rem",
              onClick: x,
              borderTop: "solid 1px",
              borderColor: "brand.red",
              height: ["4rem", "3.5rem"],
              paddingRight: 0,
              cursor: "pointer",
              position: "relative"
          }), {}, {
              children: [Object(B.jsx)(Kl, Object(s.a)(Object(s.a)({}, (y = o,
              {
                  position: "absolute",
                  animate: y ? "active" : "inactive",
                  variants: gd,
                  bg: "rgba(255,255,255,0.5)",
                  top: ["-30rem", "-25rem"],
                  left: ["5rem", "0rem", "-10rem"],
                  boxShadow: "0 0 20px rgba(0,0,0,0.1)",
                  padding: "1rem",
                  opacity: 0
              })), {}, {
                  children: Object(B.jsxs)(f.e, Object(s.a)(Object(s.a)({}, xd), {}, {
                      children: [Object(B.jsx)(f.k, Object(s.a)(Object(s.a)({}, Id), {}, {
                          children: Object(B.jsx)(kt, {
                              onClick: x
                          })
                      })), Object(B.jsx)(wo, Object(s.a)({}, yd)), Object(B.jsx)(he, Object(s.a)(Object(s.a)({}, wd), {}, {
                          children: L
                      })), Object(B.jsx)(he, Object(s.a)(Object(s.a)({}, Ld), {}, {
                          children: _
                      })), Object(B.jsx)(f.h, Object(s.a)(Object(s.a)({}, _d), {}, {
                          children: function() {
                              if (w) {
                                  var e = b.find((function(e) {
                                      return "Packs" === e.iconType
                                  }
                                  ));
                                  if (e && e.accessories.length > 0) {
                                      var t = null === e || void 0 === e ? void 0 : e.accessories[0].bundledAccessories
                                        , n = Object(ce.g)(t).slice(0, 3);
                                      return n.map((function(e, t) {
                                          return Object(B.jsxs)(u.Fragment, {
                                              children: [Object(B.jsx)(W.a, {
                                                  src: null === e || void 0 === e ? void 0 : e.thumbnailUrl,
                                                  width: "4rem",
                                                  height: "4rem",
                                                  borderRadius: "2rem",
                                                  boxShadow: "0 0 10px 0px rgba(0,0,0,0.1)",
                                                  objectFit: "cover"
                                              }), t < n.length - 1 && Object(B.jsx)(wo, Object(s.a)({}, Sd))]
                                          }, "pack-image-".concat(t))
                                      }
                                      ))
                                  }
                              }
                              return g.map((function(e, t) {
                                  return Object(B.jsxs)(u.Fragment, {
                                      children: [Object(B.jsx)(wo, Object(s.a)({}, (n = e,
                                      {
                                          type: n,
                                          containerConfig: {
                                              width: "4rem",
                                              height: "4rem",
                                              borderRadius: "2rem",
                                              bg: "brand.red",
                                              fill: "white"
                                          },
                                          width: "2.5rem",
                                          height: "2.5rem"
                                      }))), t < g.length - 1 && Object(B.jsx)(wo, Object(s.a)({}, Sd))]
                                  }, "image".concat(t));
                                  var n
                              }
                              ))
                          }()
                      })), !w && Object(B.jsx)(f.i, {
                          as: nn.b,
                          to: "?config=true",
                          children: Object(B.jsx)(vd.a, Object(s.a)(Object(s.a)({}, Ed), {}, {
                              children: m
                          }))
                      })]
                  }))
              })), !w && Object(B.jsxs)(u.Fragment, {
                  children: [Object(B.jsx)(wo, Object(s.a)({}, Cd)), Object(B.jsx)(he, Object(s.a)(Object(s.a)({}, {
                      type: "h4-caps",
                      d: ["none", "none", "flex"],
                      padding: "0.2rem 0.5rem 0"
                  }), {}, {
                      children: O
                  }))]
              })]
          }))
      }, kd = {
          type: "h6-light",
          padding: ["1rem 0", "1rem"],
          textAlign: ["left", "center"],
          height: "3.5rem",
          lineHeight: 1.2,
          width: ["100%"],
          mx: ["3rem", "4rem", 0],
          borderTop: "solid 1px",
          borderColor: "rgba(0,0,0,0.15)"
      }, Rd = {
          width: ["110vw", "100%"],
          justifyContent: ["flex-start", "center"],
          ml: ["-8rem", 0]
      }, Pd = {
          paddingX: ["3rem", 0],
          spacing: ["3rem", "3rem", "4rem"],
          marginRight: ["4rem", "4rem", 0],
          justifyContent: ["flex-start", "flex-start", "center"],
          borderTop: ["none", "solid 1px rgba(0,0,0,0.15)"]
      }, Fd = function(e) {
          var t = e.isSmall
            , n = e.isHome
            , r = e.isHovered
            , i = e.umbraco
            , a = Object(j.a)((function(e) {
              return e.categories
          }
          ))
            , c = Object(j.a)((function(e) {
              return e.selectedCategoryIndex
          }
          ))
            , o = Object(j.a)((function(e) {
              return e.setSelectedCategoryIndex
          }
          ))
            , l = Object(j.a)((function(e) {
              return e.selectedAccessories
          }
          ))
            , d = Object(j.b)().currentStep
            , u = Object(j.d)((function(e) {
              return e.model
          }
          ))
            , b = a.some((function(e) {
              return "Packs" === e.iconType
          }
          ))
            , m = i.i18n
            , p = i.locale
            , h = m.page_title_model;
          return Object(B.jsxs)(f.e, Object(s.a)(Object(s.a)({}, function(e, t, n) {
              var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
              return {
                  marginX: e || n ? 0 : "auto",
                  opacity: t ? 0 : 1,
                  transition: "0.2s opacity",
                  height: [0 === r ? "3rem" : "5rem", "3.8rem"],
                  width: "100%",
                  flex: 1,
                  background: "#ECECEC",
                  position: "relative",
                  flexDir: "row",
                  justifyContent: "center",
                  padding: e ? 0 : ["0 0 0 6rem", "0 0 0 7rem", 0],
                  _after: {
                      content: '""',
                      display: [1 === r ? "block" : "none", "none"],
                      position: "absolute",
                      top: 0,
                      left: "2.8rem",
                      right: "2.8rem",
                      height: "1px",
                      bg: "rgba(0,0,0,0.15)"
                  }
              }
          }(n, r, t, d)), {}, {
              children: [n && Object(B.jsx)(he, Object(s.a)(Object(s.a)({}, kd), {}, {
                  children: "".concat(h, " - ").concat(null === u || void 0 === u ? void 0 : u.name)
              })), !n && Object(B.jsxs)(f.e, Object(s.a)(Object(s.a)({}, Rd), {}, {
                  children: [b && Object(B.jsx)(Md, {
                      i18n: m,
                      locale: p
                  }), Object(B.jsx)(Vu, {
                      noScrollY: !0,
                      disableForDesktop: !0,
                      momentum: !0,
                      className: "hide-scrollbars",
                      children: Object(B.jsx)(f.h, Object(s.a)(Object(s.a)({}, Pd), {}, {
                          children: a.map((function(e, t) {
                              var n = c === t;
                              return Object(B.jsx)(Od, {
                                  category: e,
                                  isActive: n,
                                  selectedAccessories: l,
                                  onClick: function() {
                                      return o(e = t),
                                      void a[e].fullName;
                                      var e
                                  }
                              }, e.fullName)
                          }
                          ))
                      }))
                  })]
              }))]
          }))
      }, Dd = function(e, t, n, r) {
          var i = 90;
          return e || (i = 165),
          r && (i = e ? 90 : 175),
          {
              bg: ["transparent", "white"],
              flex: ["none", "none", 1],
              position: ["relative", "initial", "relative"],
              width: "100%",
              justifyContent: ["flex-start", "center"],
              height: ["".concat(i + (n ? 10 : 0), "px"), "".concat(i + (n ? 10 : 0), "px"), "".concat(i, "px")],
              transition: "0.4s cubic-bezier(0.16, 1, 0.3, 1)",
              _hover: {
                  boxShadow: e || r ? "none" : "0 0 20px rgba(0,0,0,0.2)"
              },
              role: "group"
          }
      }, Nd = n(51), Bd = function(e) {
          var t = e.isOneMinVisible
            , n = e.page
            , r = e.width
            , i = e.variant
            , a = Object(z.l)().data
            , c = Object(j.a)().categories
            , o = Object(j.e)()
            , l = o.setBottomPadding
            , b = o.setIsModalVisible
            , p = Object(u.useState)(!1)
            , h = Object(d.a)(p, 2)
            , O = h[0]
            , v = h[1]
            , C = Object(u.useState)(!1)
            , g = Object(d.a)(C, 2)
            , x = g[0]
            , y = g[1]
            , w = Object(u.useState)(!1)
            , L = Object(d.a)(w, 2)
            , _ = L[0]
            , S = L[1]
            , E = Object(u.useState)(!1)
            , I = Object(d.a)(E, 2)
            , T = I[0]
            , A = I[1]
            , M = Object(u.useState)(!1)
            , k = Object(d.a)(M, 2)
            , R = k[0]
            , P = k[1]
            , F = Object(j.d)()
            , D = F.model
            , N = F.setSelectedVariantIndex
            , H = F.getSelectedColour
            , V = F.setSelectedColourIndex
            , U = null === D || void 0 === D ? void 0 : D.variants;
          if (Object(u.useEffect)((function() {
              r > parseInt(null === m.a || void 0 === m.a ? void 0 : m.a.breakpoints.md) ? S(!1) : S(!0);
              var e = "home" === n;
              A(e);
              var i = ("home" === n || "accessories" === n) && !t;
              P(i);
              var a = Go.isMobile ? 150 : 138;
              e || (a = Go.isMobile ? 150 : 138),
              i || (a = 0),
              l(a)
          }
          ), [n, r]),
          !U || !a)
              return null;
          var W = function(e) {
              v(!T && !_ && e)
          }
            , Y = c.length > 0
            , G = Nd.a.shouldRemoveAccessoryBannerHoverState()
            , Z = O || G || _;
          return Object(B.jsxs)(f.a, Object(s.a)(Object(s.a)({}, function(e, t, n) {
              return {
                  width: "100%",
                  opacity: e || t && n ? 1 : 0,
                  flexDir: "column",
                  zIndex: 3,
                  bottom: t ? 0 : "-100%",
                  height: t ? "auto" : 0,
                  transition: "bottom 0.8s, opacity 0.5s",
                  position: ["relative", "initial"]
              }
          }(T, R, Y)), {}, {
              children: [Object(B.jsx)(Fd, {
                  isSmall: _,
                  isHome: T,
                  umbraco: a
              }), Object(B.jsx)(f.e, Object(s.a)(Object(s.a)({}, Dd(T, 0, x, _)), {}, {
                  onMouseEnter: function() {
                      return W(!0)
                  },
                  onMouseLeave: function() {
                      return W(!1)
                  },
                  children: Object(B.jsx)(Vu, {
                      momentum: !0,
                      noScrollY: !0,
                      disableForDesktop: !0,
                      onUpdate: function(e) {
                          return function(e) {
                              var t = e.scrollXPossible;
                              y(t)
                          }(e)
                      },
                      children: Object(B.jsxs)(f.e, {
                          children: [T && Object(B.jsx)(jd, {
                              selectedVariantId: null === i || void 0 === i ? void 0 : i.id,
                              onClick: function(e) {
                                  var t = U[e]
                                    , n = H()
                                    , r = {
                                      colourId: null === n || void 0 === n ? void 0 : n.id,
                                      variantId: t.id
                                  };
                                  if (n) {
                                      var i = t.colours.map((function(e) {
                                          return e.id
                                      }
                                      )).includes(n.id);
                                      Object(ce.n)("VariantChange", r, (function(n) {
                                          if (n)
                                              if (i)
                                                  N(e);
                                              else {
                                                  var r = {
                                                      colourId: t.colours[0].id,
                                                      variantId: t.id
                                                  };
                                                  b(!0, "resetColourNoLongerCompatible", (function(t) {
                                                      t && Object(ce.n)("ColourChange", r, (function(t) {
                                                          t && (N(e),
                                                          V(0))
                                                      }
                                                      ))
                                                  }
                                                  ))
                                              }
                                      }
                                      ))
                                  }
                              },
                              umbraco: a,
                              variants: U
                          }), !T && Object(B.jsx)(bd, {
                              umbraco: a,
                              isHovered: Z,
                              width: r,
                              arrowNav: !_
                          })]
                      })
                  })
              }))]
          }))
      }, Hd = v.a.div(Ys || (Ys = Object(O.a)(["\n    button {\n        display: inline-block;\n        margin: unset;\n        padding: unset;\n        padding-bottom: 0;\n        border: unset;\n        border-radius: unset;\n        background-color: unset;\n    }\n"]))), zd = {
          spacing: "0.5rem",
          width: "100%",
          alignItems: "flex-start",
          mb: "2rem"
      }, Vd = {
          justifyContent: "space-between",
          width: "100%",
          alignItems: "center"
      }, Ud = {
          width: "2.5rem",
          my: "1.5rem",
          borderBottom: "1px solid rgba(0,0,0,0.2)"
      }, Wd = function(e) {
          return {
              type: "spec",
              width: "15rem",
              textOverflow: e ? "visible" : "ellipsis",
              overflow: e ? "visible" : "hidden",
              textDecoration: e ? "underline" : "",
              whiteSpace: "nowrap",
              justifyContent: "space-between",
              display: "flex"
          }
      }, Yd = function(e) {
          var t = e.i18n
            , n = e.locale
            , r = Object(j.a)((function(e) {
              return e.selectedAccessories
          }
          ))
            , i = t.fullcat_added;
          if (0 === r.length)
              return null;
          return Object(B.jsxs)(f.n, Object(s.a)(Object(s.a)({}, zd), {}, {
              children: [Object(B.jsx)(f.d, Object(s.a)({}, Ud)), Object(B.jsx)(he, {
                  type: "h6-light",
                  color: "brand.slate",
                  mt: "1rem",
                  children: i
              }), function() {
                  if (r.length > 3) {
                      var e, a = Object(ce.g)(r.map((function(e) {
                          return e.id
                      }
                      ))), c = Object(q.t)(a);
                      return a.filter((function(e) {
                          var t;
                          return (null !== (t = null === e || void 0 === e ? void 0 : e.price) && void 0 !== t ? t : 0) <= 0
                      }
                      )).length > 0 && (c = void 0),
                      Object(B.jsxs)(f.h, Object(s.a)(Object(s.a)({}, Vd), {}, {
                          children: [Object(B.jsx)(nn.b, {
                              to: "summary",
                              children: Object(B.jsx)(he, Object(s.a)(Object(s.a)({
                                  color: "brand.slate"
                              }, Wd(!0)), {}, {
                                  children: "".concat(i, " (").concat(r.length, ")")
                              }))
                          }), Object(B.jsx)(he, {
                              type: "spec",
                              color: "brand.slate",
                              paddingX: "0.5rem",
                              children: null !== (e = Object(q.b)(c, n)) && void 0 !== e ? e : t.short_price_unavailable
                          }), Object(B.jsx)(kt, {
                              onClick: function() {
                                  return Object(ce.e)()
                              }
                          })]
                      }))
                  }
                  return r.map((function(e) {
                      var r, i = Object(ce.h)(e.id);
                      if (!i)
                          return null;
                      var a = i.price;
                      return (!i.price || i.price <= 0) && (a = void 0),
                      Object(B.jsxs)(f.h, Object(s.a)(Object(s.a)({}, Vd), {}, {
                          children: [Object(B.jsxs)(he, Object(s.a)(Object(s.a)({}, Wd(!1)), {}, {
                              color: "brand.slate",
                              children: [i.name, Object(B.jsx)(we, {
                                  accessory: i
                              })]
                          })), Object(B.jsx)(he, {
                              type: "spec",
                              paddingX: "0.5rem",
                              color: "brand.slate",
                              children: null !== (r = Object(q.b)(a, n, !0)) && void 0 !== r ? r : t.short_price_unavailable
                          }), Object(B.jsx)(kt, {
                              onClick: function() {
                                  return Object(ce.m)(i)
                              }
                          })]
                      }), "accessory_".concat(i.partNumber))
                  }
                  ))
              }()]
          }))
      }, Gd = function(e) {
          var t = e.showForMobile
            , n = Object(j.d)((function(e) {
              return e.getSelectedVariant()
          }
          ))
            , r = Object(z.l)().data
            , i = Object(j.d)((function(e) {
              return (0,
              e.getSelectedColour)()
          }
          ))
            , a = Object(j.c)()
            , c = a.calculateQueryParams
            , o = a.useAlternateData
            , l = Object(le.a)(c, o).data
            , s = Object(j.b)()
            , d = s.currentStep
            , b = s.isAEM
            , m = s.isFinanceAvailable;
          if (!n || !r || !i)
              return null;
          var p = null === l || void 0 === l ? void 0 : l.otrPrice
            , h = null === l || void 0 === l ? void 0 : l.financeMonthlyPrice
            , O = r.i18n
            , v = r.locale
            , C = r.finance
            , g = O.finance_header_monthly_cost
            , x = O.summary_colour
            , y = O.summary_table_total
            , w = i.name
            , L = Object(q.f)(null !== h && void 0 !== h ? h : 0, v, {
              trimIntegers: !0
          })
            , _ = Object(q.g)(p, v, {
              trimIntegers: !0,
              hideIfZero: !0
          })
            , S = C.showMonthlyPrice && Object(q.a)(n)
            , E = m && S && b && v.includes("de")
            , I = m && S;
          return Object(B.jsxs)(f.e, {
              alignItems: ["flex-start"],
              flexDir: "column",
              textAlign: ["left"],
              paddingX: ["3rem", 0],
              display: [t ? "flex" : "none", t ? "none" : "flex"],
              children: [Object(B.jsx)(f.d, {
                  width: "2.5rem",
                  m: "1.5rem 0 0.5rem",
                  borderBottom: "1px solid rgba(0,0,0,0.2)",
                  hidden: !_
              }), Object(B.jsx)(he, {
                  type: "h6-light",
                  color: "brand.slate",
                  m: "1rem 0 0.3rem",
                  hidden: !_,
                  children: y
              }), Object(B.jsx)(dl.a, {
                  isLoaded: !!p,
                  children: Object(B.jsx)(he, {
                      type: ["h6", "h1"],
                      color: "brand.red",
                      children: v.includes("de") && d > 1 ? "".concat(_) : b && v.includes("fr") ? "".concat(_, "*") : _
                  })
              }), E ? Object(B.jsx)(nn.b, {
                  to: "/finance",
                  children: Object(B.jsx)(Hd, {
                      children: Object(B.jsx)(Qt, {
                          type: "link",
                          pb: "0",
                          children: Object(B.jsx)(dl.a, {
                              isLoaded: !!L,
                              children: Object(B.jsx)(he, {
                                  type: "h6",
                                  color: "brand.red",
                                  children: "".concat(g.replace("{COST}", L), "**")
                              })
                          })
                      })
                  })
              }) : I && Object(B.jsx)(dl.a, {
                  isLoaded: !!L,
                  children: Object(B.jsx)(he, {
                      type: "h6-light",
                      color: "brand.slate",
                      m: [0],
                      children: "".concat(g.replace("{COST}", L), "**")
                  })
              }), 1 === d && Object(B.jsxs)(u.Fragment, {
                  children: [Object(B.jsx)(f.d, {
                      width: "2.5rem",
                      m: "1.5rem 0 0.5rem",
                      borderBottom: "1px solid rgba(0,0,0,0.2)"
                  }), Object(B.jsx)(he, {
                      type: "h6-light",
                      color: "brand.slate",
                      mt: "1rem",
                      children: x
                  }), Object(B.jsx)(he, {
                      type: "spec",
                      color: "brand.slate",
                      children: w
                  }), Object(B.jsx)(Yd, {
                      i18n: O,
                      locale: v
                  })]
              })]
          })
      }, Zd = Object(C.b)(Gs || (Gs = Object(O.a)(["\n    button {\n        display: flex;\n        margin: unset;\n        padding: unset;\n        width: 5rem;\n        height: 5rem;\n        border-radius: 50%;\n        border: unset;\n    }\n"]))), Kd = Object(C.b)(Zs || (Zs = Object(O.a)(["\n    button {\n        height: 3.5rem;\n        width: 3.5rem;\n    }\n"]))), Xd = v.a.div(Ks || (Ks = Object(O.a)(["\n    ", "\n    ", "\n    button {\n        background: ", ";\n    }\n"])), (function(e) {
          return e.isAEM && Zd
      }
      ), (function(e) {
          var t = e.isAEM
            , n = e.isMobile;
          return t && n && Kd
      }
      ), (function(e) {
          var t = e.isAEM
            , n = e.isGradient;
          return t ? "".concat(n) : ""
      }
      )), qd = {
          active: {
              opacity: 1,
              height: 100,
              y: 0,
              transition: {
                  type: "spring",
                  damping: 20,
                  stiffness: 200
              }
          },
          inactive: {
              opacity: 0,
              height: 0,
              y: 30
          },
          mobileInactive: {
              opacity: 0,
              height: 100,
              y: 0
          }
      }, Qd = {
          position: ["relative", "relative", "absolute"],
          bottom: ["initial", 0, "-1rem"],
          left: ["initial", "initial", "50%"],
          right: [0],
          transform: ["", "", "translateX(-50%)"],
          width: "max-content",
          margin: [0, "0 auto"],
          alignSelf: "flex-end"
      }, Jd = function(e, t) {
          var n = window.innerWidth < parseInt(m.a.breakpoints.sm) ? "mobileInactive" : "inactive";
          return {
              direction: "column",
              initial: n,
              animate: e ? "active" : n,
              variants: qd,
              spacing: ["1rem", "1.2rem"],
              p: [0, 0, t ? "0 0 3rem" : "0 0 2rem"],
              alignItems: ["flex-end", "flex-end", "center"],
              justifyContent: ["flex-start", "center"],
              margin: ["0 0 -1.5rem auto", t ? "0 0 -1rem" : 0, "2rem auto 3rem"]
          }
      }, $d = {
          spacing: ["0.7rem", "1rem", "2rem"]
      }, eu = function(e) {
          return {
              as: "button",
              background: e,
              height: ["3rem", "3.6rem", "5rem"],
              width: ["3rem", "3.6rem", "5rem"],
              borderRadius: "50%"
          }
      }, tu = function(e) {
          var t = e || window.innerHeight < 900;
          return {
              spacing: [0, "-2px"],
              alignItems: ["flex-end", "flex-end", "center"],
              width: ["100%", "100%", "initial"],
              backgroundColor: ["none", "none", t ? "brand.bikeBackground" : "none"],
              padding: [0, 0, t ? "0.5rem 2rem 0.3rem" : 0],
              borderRadius: [0, 0, t ? "3rem" : 0]
          }
      }, nu = function(e) {
          var t = e.onClick
            , n = e.hexColours
            , r = e.isActive
            , i = Object(j.b)().isAEM
            , a = Object(z.m)().width < parseInt(null === m.a || void 0 === m.a ? void 0 : m.a.breakpoints.sm)
            , c = r && {
              background: "white",
              padding: "3px",
              border: "1px solid",
              borderColor: "brand.red",
              boxShadow: "0 2px 4px 0px rgba(0,0,0,0.5)",
              cursor: "pointer"
          }
            , o = (!n || !n.length) && {
              background: "brand.bikeBackground",
              border: "1px solid",
              borderColor: "gray.600"
          }
            , l = n;
          return n && Array.isArray(n) && (l = n.length > 1 ? "repeating-conic-gradient(".concat(n.toString(), ")") : n[0]),
          Object(B.jsx)(f.a, Object(s.a)(Object(s.a)(Object(s.a)({
              borderRadius: "50%"
          }, o), c), {}, {
              children: Object(B.jsx)(Xd, {
                  isAEM: i,
                  isGradient: l,
                  isMobile: a,
                  children: Object(B.jsx)(f.e, Object(s.a)(Object(s.a)({}, eu(l)), {}, {
                      onClick: t
                  }))
              })
          }))
      }, ru = function(e) {
          var t = e.colours
            , n = e.isVisible
            , r = e.selectedColour
            , i = Object(j.d)((function(e) {
              return e.setSelectedColourIndex
          }
          ))
            , a = Object(j.d)().getSelectedVariant
            , c = Object(j.e)().isSketchfab
            , o = Object(z.m)()
            , l = (o.width,
          o.height,
          Object(z.l)().data);
          return Object(B.jsx)(f.e, Object(s.a)(Object(s.a)({}, Qd), {}, {
              children: Object(B.jsxs)(Xl, Object(s.a)(Object(s.a)({}, Jd(n, c)), {}, {
                  children: [Object(B.jsxs)(f.n, Object(s.a)(Object(s.a)({}, tu(c)), {}, {
                      children: [Object(B.jsx)(he, {
                          type: ["h6-caps", "h5-caps"],
                          fontWeight: "light",
                          letterSpacing: 2,
                          textAlign: ["right", "right", "center"],
                          children: null === l || void 0 === l ? void 0 : l.i18n.page_title_colour
                      }), Object(B.jsx)(he, {
                          type: ["h6-caps", "h5-caps"],
                          letterSpacing: 2,
                          textAlign: ["right", "right", "center"],
                          children: null === r || void 0 === r ? void 0 : r.name
                      })]
                  })), Object(B.jsx)(f.h, Object(s.a)(Object(s.a)({}, $d), {}, {
                      children: t.map((function(e, t) {
                          return Object(B.jsx)(nu, {
                              isActive: e.id === (null === r || void 0 === r ? void 0 : r.id),
                              onClick: function() {
                                  return function(e) {
                                      var t = a();
                                      if (t) {
                                          var n = {
                                              colourId: t.colours[e].id,
                                              variantId: t.id
                                          };
                                          Object(ce.n)("ColourChange", n, (function(t) {
                                              t && (i(e),
                                              Object(Lt.a)({
                                                  config_interaction: "colour_change"
                                              }))
                                          }
                                          ))
                                      }
                                  }(t)
                              },
                              hexColours: e.hexColours
                          }, e.id)
                      }
                      ))
                  }))]
              }))
          }))
      }, iu = function(e) {
          var t = e.showForMobile
            , n = e.specs
            , r = Object(z.l)().data
            , i = Object(j.b)().isAEM
            , a = Object(j.e)().setIsModalVisible
            , c = Object(z.m)()
            , o = c.width
            , l = c.height
            , s = o < parseInt(null === m.a || void 0 === m.a ? void 0 : m.a.breakpoints.sm);
          if (!r)
              return null;
          var d = r.i18n.show_full_spec
            , u = !s && l < 960 || Go.isTablet;
          return Object(B.jsxs)(f.e, {
              display: [t ? "flex" : "none", t ? "none" : "flex"],
              alignItems: "flex-start",
              flexDir: "column",
              padding: ["0 0 1rem"],
              position: "relative",
              zIndex: 1,
              children: [!i && n && !u && Object(B.jsx)(f.f, {
                  templateColumns: ["repeat(2, 1fr)", "repeat(1, 1fr)"],
                  gap: 6,
                  width: "100%",
                  children: n.map((function(e, t) {
                      var n = e.label
                        , r = e.value;
                      return Object(B.jsxs)(f.g, {
                          children: [Object(B.jsx)(he, {
                              type: "h6-light",
                              children: n
                          }), Object(B.jsx)(he, {
                              type: "spec",
                              children: r
                          }), Object(B.jsx)(f.d, {
                              width: "2.5rem",
                              m: "1.5rem 0 0.5rem",
                              borderBottom: "1px solid rgba(0,0,0,0.2)"
                          })]
                      }, "spec_".concat(t))
                  }
                  ))
              }), !i && Object(B.jsx)(Qt, {
                  type: "link",
                  onClick: function() {
                      Object(Lt.a)({
                          config_interaction: "full_description"
                      }),
                      a(!0, "info")
                  },
                  m: ["1rem 0 ", "2rem 0 3rem"],
                  alignSelf: ["unset", "flex-end"],
                  children: d
              })]
          })
      }, au = function(e) {
          var t = e.page
            , n = e.variant
            , r = (e.featuredSpecs,
          Object(z.l)().data)
            , i = Object(j.c)()
            , a = i.calculateQueryParams
            , c = i.useAlternateData
            , o = Object(le.a)(a, c).data
            , l = Object(j.b)()
            , s = l.isFinanceAvailable
            , d = l.currentStep
            , u = void 0 === d ? 0 : d
            , b = l.isAEM
            , h = Object(z.m)().width < parseInt(m.a.breakpoints.sm);
          if (!n || !r)
              return null;
          var O = r.i18n
            , v = r.locale
            , C = O.summary_table_total
            , g = O.short_price_unavailable
            , x = null === o || void 0 === o ? void 0 : o.otrPrice
            , y = null === o || void 0 === o ? void 0 : o.financeMonthlyPrice
            , w = Object(q.g)(x, v, {
              trimIntegers: !0,
              hideIfZero: !0,
              zeroValueLabel: g
          })
            , L = "accessories" !== t || h
            , _ = "" === t || "home" === t || "accessories" === t;
          return Object(B.jsxs)(f.e, {
              alignItems: ["flex-start", "accessories" === t ? "flex-start" : "flex-end"],
              position: ["absolute", "relative"],
              top: [_ ? "7rem" : 0, 0],
              flexDir: "column",
              textAlign: ["left", "accessories" === t ? "left" : "right"],
              paddingTop: [0, 0, L ? 0 : "1rem"],
              paddingLeft: ["1rem", 0],
              justifyContent: ["flex-start"],
              width: ["50%", "accessories" === t ? "22rem" : "initial"],
              children: [L && Object(B.jsxs)(f.e, {
                  m: [u < 2 ? "0 0 -1rem" : "2rem 0 0", "1rem 0 1.2rem"],
                  pb: ["1rem", 0, 0],
                  children: [!b && Object(B.jsx)(dl.a, {
                      isLoaded: !!o,
                      hidden: !w,
                      children: Object(B.jsx)(he, {
                          type: ["h5-caps", "h3"],
                          color: "brand.red",
                          mr: "0.7rem",
                          children: "".concat(C, " ").concat(w)
                      })
                  }), !b && s && v.includes("de") && Object(B.jsx)(nn.b, {
                      to: "/finance",
                      children: Object(B.jsx)(Qt, {
                          type: "link",
                          pl: "0.7rem",
                          pb: "0",
                          borderLeft: "solid 1px rgba(0,0,0,0.2)",
                          children: Object(B.jsx)(dl.a, {
                              isLoaded: !!y,
                              children: Object(B.jsx)(he, {
                                  type: ["h5-caps", "h3"],
                                  color: "brand.red",
                                  children: "".concat(Object(q.n)(O.finance_offer_copy_month, v, y, null), "**")
                              })
                          })
                      })
                  })]
              }), Object(B.jsx)(he, {
                  type: ["h3", "accessories" === t ? "h4-caps" : "h2", "accessories" === t ? "h3" : "h1"],
                  dangerouslySetInnerHTML: {
                      __html: p(n.name)
                  },
                  mb: [0, "accessories" === t ? 0 : "2rem"],
                  width: ["80%", "accessories" === t ? "90%" : "100%"],
                  fontWeight: ["initial", "light", "light"]
              }), "home" === t && Object(B.jsx)(iu, {
                  showForMobile: !0
              })]
          })
      }, cu = j.e.getState(), ou = cu.isFirstLoad, lu = cu.setIsFirstLoad, su = function() {
          ou && lu(!1)
      }, du = 1.5, uu = function(e) {
          return {
              active: {
                  opacity: 1,
                  x: 0,
                  transition: {
                      delay: e ? .3 : du,
                      damping: 50,
                      transitionEnd: function() {
                          return du = 0
                      }
                  }
              },
              inactive: {
                  opacity: 0,
                  x: e ? 0 : 20,
                  transition: {
                      duration: .1
                  }
              }
          }
      }, bu = function(e, t, n, r) {
          var i = "";
          return ("home" === e || "" === e || "accessories" === e && !t) && (i = "\n\n            @keyframes fadeUp {\n                from {\n                    opacity: 0;\n                },\n                to {\n                    opacity: 1;\n                } \n            }\n\n             > div:last-child {\n                margin:  ".concat(r ? "0" : "auto 0 0", ";\n                opacity: 0;\n                animation: fadeUp 0.5s  forwards;\n            }\n        ")),
          {
              spacing: [0, "1rem"],
              justifyContent: "flex-start",
              alignItems: ["center", "stretch"],
              width: ["100%", "100%", "22rem"],
              flex: 1,
              align: "baseline",
              css: i
          }
      }, fu = function(e) {
          var t = e.page
            , n = e.featuredSpecs
            , r = e.variant
            , i = e.croTestOne
            , a = e.croTestTwo
            , c = void 0 !== a && a
            , o = Object(z.l)().data
            , l = Object(j.b)().isAEM
            , d = Object(z.m)()
            , u = d.width
            , b = d.height
            , p = Object(j.e)()
            , h = p.isMobileZoomed
            , O = (p.isSketchfab,
          Object(j.d)((function(e) {
              return (0,
              e.getSelectedColour)()
          }
          )))
            , v = Object(Ct.c)();
          if (!o)
              return null;
          var C = o.featuredCTA1
            , g = o.featuredCTA2
            , x = o.i18n
            , y = (Go.isTablet,
          u < parseInt(m.a.breakpoints.md))
            , w = u < parseInt(m.a.breakpoints.sm)
            , L = null === x || void 0 === x ? void 0 : x.onwardlinks.find((function(e) {
              return "onwardlink_".concat(e.type) === C || e.type === C
          }
          ))
            , _ = null === x || void 0 === x ? void 0 : x.onwardlinks.find((function(e) {
              return "onwardlink_".concat(e.type) === g || e.type === g
          }
          ))
            , S = [];
          !l && L && S.push(L),
          !l && _ && S.push(_);
          var E = Nd.a.shouldHideOutboundButtonsBeforeSummary()
            , I = ("home" === t || "accessories" === t) && !E && !o.hideFeaturedCtasOnExternalSite;
          if (l)
              if (r.enableReservationCallToAction) {
                  var T = x.onwardlinks.find((function(e) {
                      return "reserve" === e.type
                  }
                  ));
                  T && S.push(T)
              } else {
                  var A = x.onwardlinks.find((function(e) {
                      return "save" === e.type
                  }
                  ));
                  A && S.push(A)
              }
          var M = x.back_to_my_account_link;
          if (v && M && l) {
              var k, R = Object(s.a)(Object(s.a)({}, M), {}, {
                  url: null === (k = M.url) || void 0 === k ? void 0 : k.replaceAll("{ID}", v)
              });
              Object(gt.e)(R.label) || Object(gt.e)(R.url) || S.push(R)
          }
          var P = !h
            , F = "" === t || "home" === t;
          return Object(B.jsxs)(Xl, Object(s.a)(Object(s.a)({}, function(e, t, n) {
              return {
                  initial: "inactive",
                  animate: e ? "active" : "inactive",
                  variants: uu(n),
                  onAnimationComplete: su,
                  opacity: 0,
                  maxWidth: ["initial", "400px"],
                  width: ["100%", "100%", "initial"],
                  height: ["initial", "100%"],
                  flex: 1,
                  mr: [0, "2rem", t && "4rem"],
                  zIndex: 0,
                  direction: ["column-reverse", "column"],
                  alignItems: ["flex-start", "flex-end"],
                  m: [0, "2rem 0 3rem 0", "4rem 0 3rem 0"]
              }
          }(P, l, w)), {}, {
              children: [Object(B.jsx)(au, {
                  variant: r,
                  page: t,
                  featuredSpecs: n
              }), Object(B.jsxs)(f.n, Object(s.a)(Object(s.a)({}, bu(t, w, 0, i)), {}, {
                  pl: ["1rem", "2rem", "4rem"],
                  children: ["home" === t && Object(B.jsx)(iu, {
                      showForMobile: !1,
                      specs: n
                  }), !l && "home" !== t && Object(B.jsx)(Gd, {
                      showForMobile: !1
                  }), l && Object(B.jsx)(Gd, {}), I && !i && Object(B.jsx)(Et, {
                      overrideCTAs: S,
                      buttonType: "outline",
                      columns: ["repeat(2, 1fr)", "repeat(1, 1fr)"],
                      croTestTwo: c
                  }), y && F && Object(B.jsx)(ru, {
                      isVisible: !0,
                      colours: r.colours,
                      selectedColour: O
                  })]
              }))]
          }))
      }, mu = {
          flexDir: "column",
          justifyContent: "space-between",
          flex: 1,
          overflow: "hidden"
      }, pu = function() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
            , t = arguments.length > 2 ? arguments[2] : void 0
            , n = ["48rem", "44rem", "41rem", "41rem"]
            , r = 328
            , i = 287;
          return (arguments.length > 1 ? arguments[1] : void 0) && (n = ["50rem", "43rem", "43rem", "43rem"]),
          1 === e && (r = 424,
          i = 344),
          {
              position: "relative",
              flex: [0, "1 0 auto"],
              minHeight: [n[e], "525px"],
              height: ["unset", "calc(100vh - ".concat(r, "px)"), t ? "100%" : "calc(100vh - ".concat(i, "px)")],
              flexBasis: "auto",
              flexDir: "row",
              justifyContent: ["flex-start", "space-between"],
              overflow: ["hidden", "visible"],
              marginBottom: t && 1 == e ? "150px" : 0
          }
      }, ju = b.a.lazy((function() {
          return Promise.resolve().then(n.bind(null, 315))
      }
      )), hu = function(e) {
          var t = e.variant
            , n = e.colour
            , r = e.page
            , i = e.modelId
            , a = Object(j.b)().currentStep
            , c = Object(j.e)()
            , o = c.isMobileZoomed
            , l = c.mobileViewerHeight
            , d = c.setIsMobileZoomed
            , b = c.setMobileViewerHeight
            , p = c.isSketchfab
            , h = Object(u.useRef)()
            , O = Object(z.m)()
            , v = O.width
            , C = (O.height,
          v > parseInt(m.a.breakpoints.md));
          return Object(u.useEffect)((function() {
              d(!1)
          }
          ), [p]),
          Object(u.useEffect)((function() {
              var e = h.current;
              if (e && e.getBoundingClientRect() && e.getBoundingClientRect().height !== l) {
                  var t = e.getBoundingClientRect().height;
                  b(t)
              }
          }
          )),
          t ? Object(B.jsxs)(f.n, Object(s.a)(Object(s.a)({
              ref: h
          }, function() {
              return {
                  width: "100vw",
                  height: ["100%", "initial"],
                  padding: [0, 0],
                  justifyContent: "center",
                  maxH: [["50rem", "43rem", "43rem", "43rem"][arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0], "initial"],
                  flex: 1,
                  position: "absolute",
                  top: 0,
                  bottom: ["initial", "-2.2rem", "-1rem"],
                  left: 0,
                  css: (arguments.length > 1 ? arguments[1] : void 0) ? "\n\n            // reshape sketchfab viewer iframe to position on mobile\n            @media (max-width: ".concat(m.a.breakpoints.sm, ") {\n                 div {\n                    display: flex;\n                    align-items: flex-end;\n                 }\n\n                iframe {\n                    height: 78%;\n                }\n            }\n            \n        ") : ""
              }
          }(a, p)), {}, {
              children: [Object(B.jsx)(f.e, {
                  style: {
                      position: "relative",
                      width: "100%",
                      height: "100%"
                  },
                  children: Object(B.jsx)(u.Suspense, {
                      fallback: Object(B.jsx)(U.b, {}),
                      children: Object(B.jsx)(ju, {
                          variant: t,
                          colour: n,
                          modelId: i
                      })
                  })
              }), C && Object(B.jsx)(ru, {
                  isVisible: "home" === r && !o,
                  colours: t.colours,
                  selectedColour: n
              })]
          })) : null
      }, Ou = function(e) {
          var t = e.page
            , n = e.croTestOne
            , r = void 0 !== n && n
            , i = e.croTestTwo
            , a = void 0 !== i && i
            , c = Object(z.m)().width
            , o = Object(j.d)((function(e) {
              return (0,
              e.getSelectedVariant)()
          }
          ))
            , l = Object(j.d)((function(e) {
              return (0,
              e.getSelectedColour)()
          }
          ))
            , d = Object(j.b)()
            , b = d.currentStep
            , p = d.isFinanceAvailable
            , h = Object(j.e)()
            , O = (h.bottomPadding,
          h.isSketchfab)
            , v = h.setIsModalVisible
            , C = Object(z.l)().data
            , g = "true" === Object(z.h)().get("config")
            , x = c < parseInt(m.a.breakpoints.sm)
            , y = !x && g;
          if (Object(u.useEffect)((function() {
              g && x ? v(!0, "oneMinConfig") : v(!1)
          }
          ), [g, x]),
          !C || !o || !l)
              return null;
          var w = C.i18n
            , L = C.productId
            , _ = null === o || void 0 === o ? void 0 : o.spec
            , S = null === o || void 0 === o ? void 0 : o.featuredSpecs
            , E = null === _ || void 0 === _ ? void 0 : _.reduce((function(e, t) {
              return [].concat(Object(il.a)(e), Object(il.a)(t.table))
          }
          ), [])
            , I = S ? null === E || void 0 === E ? void 0 : E.filter((function(e) {
              return !!S.find((function(t) {
                  return t === e.id
              }
              ))
          }
          ), !0) : [];
          return Object(B.jsxs)(f.e, Object(s.a)(Object(s.a)({}, mu), {}, {
              children: [Object(B.jsxs)(f.e, Object(s.a)(Object(s.a)({}, {
                  flexDir: "column",
                  flex: 1,
                  overflow: "hidden",
                  paddingBottom: 0,
                  position: "relative"
              }), {}, {
                  children: [Object(B.jsxs)(f.e, Object(s.a)(Object(s.a)({}, pu(b, O, r)), {}, {
                      children: [!y && Object(B.jsx)(hu, {
                          variant: o,
                          colour: l,
                          modelId: L,
                          page: t,
                          i18n: w
                      }), y && Object(B.jsx)(Zo, {
                          i18n: w
                      }), Object(B.jsx)(Yu, {
                          page: t,
                          side: "right",
                          children: Object(B.jsx)(fu, {
                              featuredSpecs: I,
                              variant: o,
                              page: t,
                              croTestOne: r,
                              croTestTwo: a
                          })
                      })]
                  })), Object(B.jsx)(Bd, {
                      page: t,
                      width: c,
                      variant: o,
                      isOneMinVisible: y
                  })]
              })), x && p && Object(B.jsx)(xn, {
                  isSmall: x
              })]
          }))
      }, vu = function(e, t, n, r, i, a) {
          return {
              ref: e,
              flexDir: "column",
              justifyContent: "space-between",
              flex: 1,
              minHeight: "calc(100vh - 58px)",
              paddingBottom: r || a ? "unset" : "".concat(n, "px"),
              position: "relative",
              overflow: "hidden",
              background: i ? "brand.bikeBackground" : "transparent"
          }
      }, Cu = {
          position: "relative",
          zIndex: 2,
          overflowY: "hidden"
      }, gu = n(209), xu = n.n(gu), yu = ["", "accessories", "summary", "finance", "terms"], wu = n(155), Lu = n(46), _u = n(49), Su = function() {
          var e = Object(fe.a)(Object(be.a)().mark((function e(t) {
              var n, r;
              return Object(be.a)().wrap((function(e) {
                  for (; ; )
                      switch (e.prev = e.next) {
                      case 0:
                          return e.next = 2,
                          _u.a.get("".concat(Lu.a.AEM_HEADER, "/").concat(t));
                      case 2:
                          return n = e.sent,
                          r = n.data,
                          e.abrupt("return", r);
                      case 5:
                      case "end":
                          return e.stop()
                      }
              }
              ), e)
          }
          )));
          return function(t) {
              return e.apply(this, arguments)
          }
      }(), Eu = function() {
          var e = Object(fe.a)(Object(be.a)().mark((function e(t) {
              var n, r;
              return Object(be.a)().wrap((function(e) {
                  for (; ; )
                      switch (e.prev = e.next) {
                      case 0:
                          return e.next = 2,
                          _u.a.get("".concat(Lu.a.AEM_FOOTER, "/").concat(t));
                      case 2:
                          return n = e.sent,
                          r = n.data,
                          e.abrupt("return", r);
                      case 5:
                      case "end":
                          return e.stop()
                      }
              }
              ), e)
          }
          )));
          return function(t) {
              return e.apply(this, arguments)
          }
      }(), Iu = n(66), Tu = function(e) {
          var t = e.children
            , n = Object(u.useState)(null)
            , r = Object(d.a)(n, 2)
            , i = r[0]
            , a = r[1]
            , c = Object(u.useRef)(null);
          return Object(u.useEffect)((function() {
              var e = c.current.attachShadow({
                  mode: "open"
              });
              a(e)
          }
          ), []),
          Object(B.jsx)("div", {
              ref: c,
              children: i ? Object(Iu.createPortal)(t, i) : null
          })
      }, Au = function(e) {
          var t = e.children;
          return Object(B.jsx)("style", {
              dangerouslySetInnerHTML: {
                  __html: t
              }
          })
      }, Mu = function(e) {
          Object(Kn.a)(e);
          var t = Object(u.useState)({})
            , n = Object(d.a)(t, 2)
            , r = n[0]
            , i = n[1]
            , a = Object(u.useState)(!1)
            , c = Object(d.a)(a, 2)
            , o = c[0]
            , l = c[1]
            , s = Object(z.l)().data
            , b = Object(j.e)().footerHeight;
          Object(u.useEffect)((function() {
              var e = function() {
                  var e = Object(fe.a)(Object(be.a)().mark((function e() {
                      var t;
                      return Object(be.a)().wrap((function(e) {
                          for (; ; )
                              switch (e.prev = e.next) {
                              case 0:
                                  return e.prev = 0,
                                  e.next = 3,
                                  Eu(null === s || void 0 === s ? void 0 : s.locale);
                              case 3:
                                  t = e.sent,
                                  i(t),
                                  e.next = 10;
                                  break;
                              case 7:
                                  e.prev = 7,
                                  e.t0 = e.catch(0),
                                  l(!0);
                              case 10:
                              case "end":
                                  return e.stop()
                              }
                      }
                      ), e, null, [[0, 7]])
                  }
                  )));
                  return function() {
                      return e.apply(this, arguments)
                  }
              }();
              return e(),
              function() {
                  return i({})
              }
          }
          ), []),
          Object(u.useEffect)((function() {
              m()
          }
          ), [r]);
          var m = function() {
              var e, t, n = null === (e = document.querySelector("#footerWrapper")) || void 0 === e || null === (t = e.firstChild) || void 0 === t ? void 0 : t.shadowRoot, r = null === n || void 0 === n ? void 0 : n.querySelector(".footerHeading");
              null === r || void 0 === r || r.addEventListener("click", (function(e) {
                  var t;
                  null === r || void 0 === r || null === (t = r.parentNode) || void 0 === t || t.classList.toggle("active")
              }
              ));
              var i = null === n || void 0 === n ? void 0 : n.querySelectorAll(".optanon-show-settings");
              0 !== i.length && i.forEach((function(e) {
                  e.removeAttribute("href"),
                  e.style.cursor = "pointer",
                  e.addEventListener("click", (function() {
                      var e = document.querySelector("#optanon-popup-bg")
                        , t = document.querySelector("#optanon-popup-wrapper")
                        , n = document.querySelector(".onetrust-pc-dark-filter")
                        , r = document.querySelector("#onetrust-pc-sdk");
                      null !== e && null !== t ? (e.style.cssText = "display: block",
                      t.style.cssText = "display: block; visibility: visible; opacity: 1") : null !== n && null !== r && (n.style.cssText = "display: block !important; visibility: visible !important; opacity: 1",
                      r.style.cssText = "display: block !important; visibility: visible !important; opacity: 1")
                  }
                  ))
              }
              ))
          };
          return !o && Object(B.jsx)(f.a, {
              id: "footerWrapper",
              style: {
                  paddingBottom: b
              },
              children: Object(B.jsxs)(Tu, {
                  children: [Object(B.jsx)(Au, {
                      children: "\n            @import url('https://www.honda.co.uk/etc/designs/honda/theme_inclusive/style_baseline/common/fonts-head.css');\n            @import url('https://www.honda.co.uk/etc/designs/honda/theme_inclusive/style_baseline/common/common.css'); \n            @import url('https://www.honda.co.uk/etc/designs/honda/theme_inclusive/style_baseline/common/modules-head.css'); \n            @import url('https://www.honda.co.uk/etc/designs/honda/theme_inclusive/style_tablet_desktop/common/common.css') screen and (min-width: 621px);\n            @import url('https://www.honda.co.uk/etc/designs/honda/theme_inclusive/style_tablet_desktop/common/modules-head.css') screen and (min-width: 621px);\n            @import url('https://www.honda.co.uk/etc/designs/honda/theme_inclusive/style_print/common/allstyles-min.css') print;\n            @import url('https://www.honda.co.uk/etc/designs/honda/theme_inclusive/style_baseline/common/fonts-min.css');\n\n            @media screen and (max-width: 800px) {\n                ul.social{\n                    display: flex;\n                    padding: 30px 0 30px 0;\n                }\n\n            }\n            "
                  }), Object(B.jsx)("div", {
                      dangerouslySetInnerHTML: {
                          __html: r
                      }
                  })]
              })
          })
      }, ku = function() {
          var e, t = Object(u.useState)({
              __html: ""
          }), n = Object(d.a)(t, 2), r = n[0], i = n[1], a = Object(z.l)().data, c = Object(u.useState)(!1), o = Object(d.a)(c, 2), l = o[0], s = o[1], b = Object(u.useRef)(null);
          e = b,
          Object(u.useEffect)((function() {
              var t = function(t) {
                  if (e.current && !e.current.contains(t.target)) {
                      var n, r, i, a = null === (n = document) || void 0 === n || null === (r = n.querySelector("#headerWrapper")) || void 0 === r || null === (i = r.firstChild) || void 0 === i ? void 0 : i.shadowRoot;
                      (null === a || void 0 === a ? void 0 : a.querySelectorAll(".link--primary")).forEach((function(e) {
                          var t, n, r, i, a, c, o, l, s;
                          null === e || void 0 === e || null === (t = e.closest("li")) || void 0 === t || t.classList.remove("expand"),
                          null === e || void 0 === e || null === (n = e.nextSibling) || void 0 === n || null === (r = n.nextSibling) || void 0 === r || r.classList.remove("items--expanded"),
                          null === e || void 0 === e || null === (i = e.nextSibling) || void 0 === i || null === (a = i.nextSibling) || void 0 === a || null === (c = a.querySelector(".main-content")) || void 0 === c || null === (o = c.classList) || void 0 === o || o.remove("lazy-loaded"),
                          null === e || void 0 === e || null === (l = e.nextSibling) || void 0 === l || null === (s = l.nextSibling) || void 0 === s || s.querySelectorAll("li").forEach((function(e) {
                              var t;
                              null === e || void 0 === e || null === (t = e.classList) || void 0 === t || t.remove("items--expanded")
                          }
                          ))
                      }
                      ))
                  }
              };
              return document.addEventListener("mousedown", t),
              function() {
                  document.removeEventListener("mousedown", t)
              }
          }
          ), [e]),
          Object(u.useEffect)((function() {
              var e = function() {
                  var e = Object(fe.a)(Object(be.a)().mark((function e() {
                      var t;
                      return Object(be.a)().wrap((function(e) {
                          for (; ; )
                              switch (e.prev = e.next) {
                              case 0:
                                  return e.prev = 0,
                                  e.next = 3,
                                  Su(null === a || void 0 === a ? void 0 : a.locale);
                              case 3:
                                  t = e.sent,
                                  i({
                                      __html: t
                                  }),
                                  e.next = 10;
                                  break;
                              case 7:
                                  e.prev = 7,
                                  e.t0 = e.catch(0),
                                  s(!0);
                              case 10:
                              case "end":
                                  return e.stop()
                              }
                      }
                      ), e, null, [[0, 7]])
                  }
                  )));
                  return function() {
                      return e.apply(this, arguments)
                  }
              }();
              return e(),
              function() {
                  return i({
                      __html: ""
                  })
              }
          }
          ), []),
          Object(u.useEffect)((function() {
              m()
          }
          ), [r]);
          var m = function() {
              var e, t = null === (e = document.querySelector("#headerWrapper")) || void 0 === e ? void 0 : e.firstChild.shadowRoot, n = null === t || void 0 === t ? void 0 : t.querySelector(".search--toggle"), r = null === t || void 0 === t ? void 0 : t.querySelector(".nav"), i = null === t || void 0 === t ? void 0 : t.querySelector(".search");
              null != n && n.addEventListener("click", (function() {
                  r.classList.toggle("search-open"),
                  i.classList.toggle("visible")
              }
              )),
              (null === t || void 0 === t ? void 0 : t.querySelectorAll(".link--primary")).forEach((function(e) {
                  e.addEventListener("click", (function(n) {
                      n.preventDefault();
                      var r, i, a, c = null === t || void 0 === t ? void 0 : t.querySelector(".expand");
                      null != c && (null === c || void 0 === c || null === (r = c.classList) || void 0 === r || r.remove("expand"),
                      null === c || void 0 === c || null === (i = c.querySelector(".nav__flyout")) || void 0 === i || null === (a = i.classList) || void 0 === a || a.remove("items--expanded"));
                      var o = null === e || void 0 === e ? void 0 : e.closest("li");
                      if (c != o) {
                          var l;
                          null === o || void 0 === o || o.classList.add("expand");
                          var s = null === o || void 0 === o ? void 0 : o.querySelector(".nav__flyout");
                          null === s || void 0 === s || s.classList.add("items--expanded");
                          var d = null === s || void 0 === s ? void 0 : s.querySelector(".main-content");
                          null === d || void 0 === d || d.classList.add("lazy-loaded");
                          var u = null === s || void 0 === s ? void 0 : s.querySelector(".sidebar")
                            , b = null === u || void 0 === u ? void 0 : u.querySelectorAll("li");
                          null === b || void 0 === b || b.forEach((function(e) {
                              null === e || void 0 === e || e.classList.add("items--expanded")
                          }
                          ));
                          var f = null === d || void 0 === d ? void 0 : d.querySelectorAll("li");
                          null === f || void 0 === f || f.forEach((function(e) {
                              var t;
                              null === e || void 0 === e || null === (t = e.classList) || void 0 === t || t.add("items--expanded")
                          }
                          )),
                          null === s || void 0 === s || null === (l = s.querySelectorAll(".group")) || void 0 === l || l.forEach((function(e) {
                              null === e || void 0 === e || e.classList.add("items--expanded"),
                              (null === e || void 0 === e ? void 0 : e.querySelectorAll(".group.items--expanded > .link--secondary")).forEach((function(t) {
                                  t.addEventListener("click", (function(n) {
                                      var r;
                                      n.stopImmediatePropagation(),
                                      n.preventDefault(),
                                      null === t || void 0 === t || null === (r = t.parentNode) || void 0 === r || r.classList.toggle("expand--secondary");
                                      var i = null === e || void 0 === e ? void 0 : e.querySelector(".secondary");
                                      null === i || void 0 === i || i.classList.add("lazy-loaded")
                                  }
                                  ))
                              }
                              ))
                          }
                          ))
                      }
                  }
                  ))
              }
              )),
              (null === t || void 0 === t ? void 0 : t.querySelectorAll(".link--secondary.noLink")).forEach((function(e) {
                  e.addEventListener("click", (function(t) {
                      var n, r;
                      t.preventDefault(),
                      null === e || void 0 === e || null === (n = e.parentNode) || void 0 === n || null === (r = n.classList) || void 0 === r || r.toggle("expand--secondary")
                  }
                  ))
              }
              ));
              var a = null === t || void 0 === t ? void 0 : t.querySelector(".nav__toggle");
              null != a && a.addEventListener("click", (function() {
                  var e, n = null === t || void 0 === t ? void 0 : t.querySelector("header.nav");
                  null === n || void 0 === n || null === (e = n.classList) || void 0 === e || e.toggle("open")
              }
              ))
          };
          return l ? Object(B.jsx)(Xn, {}) : Object(B.jsx)(f.a, {
              id: "headerWrapper",
              ref: b,
              children: Object(B.jsxs)(Tu, {
                  children: [Object(B.jsx)(Au, {
                      children: "\n            @import url('https://www.honda.co.uk/etc/designs/honda/theme_inclusive/style_baseline/common/common.css');\n            @import url('https://www.honda.co.uk/etc/designs/honda/theme_inclusive/style_baseline/common/modules-head.css');\n            @import url('https://www.honda.co.uk/etc/designs/honda/theme_inclusive/style_tablet_desktop/common/common.css') screen and (min-width: 621px);\n            @import url('https://www.honda.co.uk/etc/designs/honda/theme_inclusive/style_tablet_desktop/common/modules-head.css') screen and (min-width: 621px);\n            @import url('https://www.honda.co.uk/etc/designs/honda/theme_inclusive/style_print/common/allstyles-min.css') print;\n            @import url('https://www.honda.co.uk/etc/designs/honda/theme_inclusive/style_baseline/common/fonts-min.css');\n\n            @media screen and (min-width: 1025px) {\n                .group > .link--secondary:hover{\n                    background: #c00 !important;\n                    color: white !important;\n                }\n                .group > .secondary > .items--expanded > .link--secondary:hover {\n                    background: #c00 !important;\n                    color: white !important;\n                }\n            }\n            @media screen and (min-width: 1025px) {\n                .group > .link--secondary:hover{\n                    background: #c00 !important;\n                    color: white !important;\n                }\n                .group > .secondary > .items--expanded > .link--secondary:hover {\n                    background: #c00 !important;\n                    color: white !important;\n                }\n            }\n            "
                  }), Object(B.jsx)("div", {
                      dangerouslySetInnerHTML: r
                  })]
              })
          })
      }, Ru = function() {
          var e, t, n = Object(u.useRef)(null), r = Object(u.useRef)(null), i = Object(j.d)().getSelectedVariant(), a = Object(j.b)(), c = a.steps, o = a.isAEM, l = a.setIsAEMFooterBottom, d = a.isFinanceAvailable, b = a.getFinancePageRouteForURL, p = a.setScrollY, h = a.currentStep, O = a.setStepFromPathname, v = a.setSteps, C = Object(z.l)().data, g = Object(j.e)(), x = (g.bottomPadding,
          g.footerHeight), y = g.isSketchfab, w = g.setIsSketchfab, L = Object(de.h)(), _ = Object(de.g)(), S = Object(z.i)(L, C, null === C || void 0 === C ? void 0 : C.productId), E = Object(z.m)().width;
          Object(z.k)((function() {
              if (n && n.current) {
                  var e = n.current.getBoundingClientRect().bottom
                    , t = window.innerHeight;
                  l(t >= e)
              }
          }
          )),
          Object(u.useEffect)((function() {
              Object(Lt.a)({
                  event: "bc_pageview"
              }),
              Object(wu.a)()
          }
          ), []),
          Object(u.useEffect)((function() {
              var e = C.enableSketchfabViewer;
              w(e)
          }
          ), []),
          Object(u.useEffect)((function() {
              if (C) {
                  var e = function(e, t) {
                      if (!e)
                          return [];
                      var n = e.i18n
                        , r = [n.route_1, n.route_2, n.route_3, n.route_4, ""]
                        , i = t
                        , a = [];
                      return yu.forEach((function(e, t) {
                          if ("finance" !== e || !1 !== i) {
                              var n = r[t];
                              a.push({
                                  text: n,
                                  to: "/".concat(e)
                              })
                          }
                      }
                      )),
                      a
                  }(C, d);
                  v(e)
              }
          }
          ), [C, d]),
          Object(u.useEffect)((function() {
              c && c.length > 0 && O(L.pathname)
          }
          ), [L, c]);
          var I = Object(u.useCallback)(xu()((function(e) {
              _.push(e)
          }
          ), 200), [])
            , T = Object(u.useCallback)(xu()((function(e) {
              p(e)
          }
          ), 200, {
              leading: !0
          }), []);
          Object(z.k)((function(e) {
              var t = e.y;
              if (T(t),
              h && h >= 2) {
                  var n = b();
                  n && L.pathname !== "/".concat(n) ? I("/".concat(n)) : I.cancel()
              }
          }
          ));
          var A = d && !(null !== C && void 0 !== C && null !== (e = C.finance) && void 0 !== e && null !== (t = e.externalFinanceCalculator) && void 0 !== t && t.enabled);
          if (S)
              return Object(B.jsx)(de.a, {
                  to: S
              });
          if (!C || !i)
              return null;
          var M = C.locale
            , k = C.finance.disableFinanceBanner
            , R = C.enableAemHeaderAndFooter
            , P = L.pathname.split("/")[1]
            , F = window.location.search.includes("croTest=1")
            , D = window.location.search.includes("croTest=2")
            , N = E < parseInt(null === m.a || void 0 === m.a ? void 0 : m.a.breakpoints.md);
          N && (F = !1);
          var H = window.location.search.includes("croTest=3")
            , V = c.filter((function(e) {
              return !e.to.includes("terms")
          }
          ))
            , U = !o && Object(B.jsx)(eb, {
              page: P,
              links: V,
              locale: M,
              variant: i,
              croTestOne: F,
              croTestThree: H
          });
          return Object(B.jsxs)(u.Fragment, {
              children: [!o && R && Object(B.jsx)(ku, {}), !o && !R && Object(B.jsx)(Xn, {}), N && U, Object(B.jsxs)(f.e, Object(s.a)(Object(s.a)({}, vu(n, 0, x, o, y, k)), {}, {
                  children: [Object(B.jsx)(Yu, {
                      side: "left",
                      page: P,
                      children: !N && !o && U
                  }), Object(B.jsxs)(de.d, {
                      children: [Object(B.jsxs)(de.b, {
                          exact: !0,
                          path: "/",
                          children: [Object(B.jsx)(Ou, {
                              page: "home",
                              croTestOne: F,
                              croTestTwo: D
                          }), Object(B.jsx)(gs, {})]
                      }), Object(B.jsx)(de.b, {
                          exact: !0,
                          path: "/accessories",
                          children: Object(B.jsx)(Ou, {
                              page: "accessories",
                              croTestOne: F,
                              croTestTwo: D
                          })
                      }), Object(B.jsxs)(de.b, {
                          exact: !0,
                          path: ["/summary", "/finance", "/terms"],
                          children: [Object(B.jsx)(Ou, {
                              page: P,
                              croTestTwo: D
                          }), Object(B.jsxs)(f.a, Object(s.a)(Object(s.a)({
                              ref: r
                          }, Cu), {}, {
                              children: [o ? M.includes("de") && Object(B.jsx)($s, {
                                  croTestTwo: D
                              }) : Object(B.jsx)($s, {
                                  croTestTwo: D
                              }), A && Object(B.jsx)(js, {
                                  page: P,
                                  croTestTwo: D
                              }), !o && Object(B.jsx)(tn, {
                                  croTestTwo: D
                              })]
                          }))]
                      })]
                  }), Object(B.jsx)(Yl, {}), o && Object(B.jsx)(Zn, {})]
              })), !o && R && Object(B.jsx)(Mu, {}), k || !o && Object(B.jsx)(Zn, {})]
          })
      }, Pu = n(340), Fu = ["disableCrop", "disableForDesktop", "disableForMobile", "disableForTablet", "insetY", "paddingX", "paddingY"], Du = ["elementRef"], Nu = ["elementRef"], Bu = ["elementRef"], Hu = ["elementRef"], zu = ["elementRef"], Vu = function(e) {
          var t = e.disableCrop
            , n = e.disableForDesktop
            , r = e.disableForMobile
            , i = e.disableForTablet
            , a = e.insetY
            , c = e.paddingX
            , o = e.paddingY
            , l = Object(pe.a)(e, Fu)
            , d = Object(z.m)().width
            , b = Object(u.useRef)()
            , f = l.children;
          return Object(u.useEffect)((function() {
              if (null !== b && void 0 !== b && b.current) {
                  var e = b.current;
                  t && (e.wrapperElement.style.overflowY = "visible",
                  e.scrollerElement.style.overflowY = "visible"),
                  a && (e.scrollerElement.style.paddingRight = "".concat(a, "px"))
              }
          }
          )),
          r && d < parseInt(m.a.breakpoints.sm) || i && d > parseInt(m.a.breakpoints.sm) && d < parseInt(m.a.breakpoints.md) || n && d > parseInt(m.a.breakpoints.md) ? f : Object(B.jsx)(Pu.a, Object(s.a)(Object(s.a)({
              ref: b
          }, l), {}, {
              wrapperProps: {
                  renderer: function(e) {
                      var t = e.elementRef
                        , n = Object(pe.a)(e, Du)
                        , r = n.style;
                      return Object(B.jsx)("div", Object(s.a)(Object(s.a)({
                          ref: t
                      }, n), {}, {
                          style: Object(s.a)({}, r),
                          className: "scroll-wrapper"
                      }))
                  }
              },
              trackYProps: {
                  renderer: function(e) {
                      var t = e.elementRef
                        , n = Object(pe.a)(e, Nu)
                        , r = n.style;
                      return Object(B.jsx)("div", Object(s.a)(Object(s.a)({
                          ref: t
                      }, n), {}, {
                          style: Object(s.a)(Object(s.a)({}, r), {}, {
                              background: "transparent",
                              zIndex: 10,
                              padding: "".concat(o, "px 0")
                          })
                      }))
                  }
              },
              thumbYProps: {
                  renderer: function(e) {
                      var t = e.elementRef
                        , n = Object(pe.a)(e, Bu)
                        , r = n.style;
                      return Object(B.jsx)("div", Object(s.a)(Object(s.a)({
                          ref: t
                      }, n), {}, {
                          style: Object(s.a)(Object(s.a)({}, r), {}, {
                              width: "0.6rem",
                              borderRadius: "0.3rem",
                              background: "rgba(0,0,0,0.1)"
                          })
                      }))
                  }
              },
              trackXProps: {
                  renderer: function(e) {
                      var t = e.elementRef
                        , n = Object(pe.a)(e, Hu)
                        , r = n.style;
                      return Object(B.jsx)("div", Object(s.a)(Object(s.a)({
                          ref: t
                      }, n), {}, {
                          style: Object(s.a)(Object(s.a)({}, r), {}, {
                              background: "transparent",
                              zIndex: 10,
                              position: "absolute",
                              padding: "0 ".concat(c, "px")
                          })
                      }))
                  }
              },
              thumbXProps: {
                  renderer: function(e) {
                      var t = e.elementRef
                        , n = Object(pe.a)(e, zu)
                        , r = n.style;
                      return Object(B.jsx)("div", Object(s.a)(Object(s.a)({
                          ref: t
                      }, n), {}, {
                          style: Object(s.a)(Object(s.a)({}, r), {}, {
                              height: "0.6rem",
                              borderRadius: "0.3rem",
                              background: "rgba(0,0,0,0.1)"
                          })
                      }))
                  }
              },
              children: f
          }))
      }, Uu = {
          "": 265,
          home: 265,
          accessories: 340,
          summary: 274,
          finance: 274
      }, Wu = {
          "": "16rem",
          home: "16rem",
          accessories: "12rem",
          summary: "8rem",
          finance: "8rem"
      }, Yu = function(e) {
          var t = e.children
            , n = e.page
            , r = e.side
            , i = Object(j.e)()
            , a = i.isSketchfab
            , c = i.mobileViewerHeight
            , o = "left" === r;
          return Object(B.jsxs)(f.n, Object(s.a)(Object(s.a)({}, function(e, t, n, r) {
              var i = "left" === n ? 0 : "initial"
                , a = "right" === n ? 0 : "initial"
                , c = "column";
              return "left" === n && (c = ["row", "column"]),
              {
                  position: "absolute",
                  zIndex: 1,
                  top: ["left" === n ? r - 75 : 0, 0],
                  left: [0, i, i],
                  right: [0, a, a],
                  pr: ["1rem", "right" === n ? "2rem" : 0, "right" === n ? "4rem" : 0],
                  paddingTop: [0, "left" === n ? "".concat(60, "px") : 0, 0],
                  paddingBottom: [0, "left" === n ? 0 : Uu[e] + 60, Uu[e]],
                  direction: c,
                  minH: ["left" === n ? "8rem" : Wu[e], 0, 0],
                  minW: [0, 0, "27rem"],
                  height: ["initial", "left" === n ? "initial" : "100dvh", "100dvh"],
                  width: ["initial", "left" === n ? "initial" : "24rem", "left" === n ? "27rem" : "30rem"],
                  background: t ? "rgba(225,225,225,0.5)" : "transparent",
                  backdropFilter: t ? "blur(5px)" : "none",
                  transition: "0.3s padding-bottom",
                  justifyContent: ["flex-start", "space-between"],
                  alignItems: "flex-start"
              }
          }(n, a, r, c)), {}, {
              children: [t, o && Object(B.jsx)(vb, {})]
          }))
      }, Gu = function(e, t, n) {
          return t && n && "finanzierungsrechner" === e.toLowerCase() ? {
              __html: "Finanzierungs\xadrechner"
          } : {
              __html: e.length > 15 ? e.replace(/ ([^ ]*)$/, "<br />$1") : e
          }
      }, Zu = {
          as: "nav",
          spacing: 0,
          direction: ["row", "row", "column"],
          padding: [0, 0, "3rem 4rem 0"],
          position: "relative",
          zIndex: [0, 1, 0],
          width: ["100%", "100%", "auto"],
          justifyContent: ["stretch", "stretch", "flex-start"],
          initial: "inactive",
          animate: "active",
          variants: {
              stepsVariants: {
                  active: {
                      opacity: 1,
                      x: 0,
                      transition: {
                          delay: 1,
                          damping: 50
                      }
                  },
                  inactive: {
                      opacity: 0,
                      x: -20
                  }
              }
          }
      }, Ku = function(e) {
          return {
              position: "absolute",
              top: 0,
              left: 0,
              borderColor: "brand.red",
              width: e ? "100%" : 0,
              height: 3,
              transition: "0.3s width ease-out",
              borderTopWidth: 3,
              borderBottomWidth: [0, 0, arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? 0 : 1],
              display: ["block", "block", "none"]
          }
      }, Xu = {
          height: "100%",
          spacing: [0, 0, "2rem"]
      }, qu = function(e, t, n, r) {
          return {
              display: "flex",
              pl: ["1rem", "2rem", 0],
              pr: t ? ["0.5rem", "2rem", 0] : "unset",
              pt: t ? ["1rem", "1rem", 0] : "unset",
              width: ["100%", "100%", "initial"],
              height: ["100%", "100%", "initial"],
              alignItems: ["center", "center", "initial"],
              color: "brand.slate",
              transition: ["0.2s", "0.2s", "0.5s ease-out"],
              type: [t ? e ? "h5-caps" : "h6-caps" : "h4-caps", t ? e ? "h5-caps" : "h6-caps" : "h4-caps", n ? "h3" : e ? "h2" : "h3"],
              lineHeight: [1],
              dangerouslySetInnerHTML: r,
              _groupHover: {
                  color: e ? "brand.slate" : "gray.1000"
              }
          }
      }, Qu = function(e, t, n) {
          return {
              pl: ["1rem", "2rem", 0],
              pr: n ? ["0.5rem", "2rem", 0] : [0, 0, 0, "0.5rem"],
              pt: n ? ["1rem", "1rem", 0] : "unset",
              color: e ? "brand.red" : "gray.900",
              transition: ["0.2s", "0.2s", "0.5s ease-out"],
              type: [n ? e ? "h5-caps" : "h6-caps" : "h4-caps", "h3", t ? "h3" : e ? "h2" : "h3"],
              lineHeight: 1
          }
      }, Ju = function(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return {
              display: "flex",
              borderColor: ["rgba(0,0,0,0.2)", "rgba(0,0,0,0.2)", e ? "brand.red" : "rgba(0,0,0,0.1)"],
              width: ["1px", "1px", e ? "100%" : t ? 0 : "2.5rem"],
              height: ["60%", "60%", "1px"],
              justifySelf: ["center", "center", "initial"],
              alignSelf: ["center", "center", "flex-start"],
              transition: ["none", "none", "0.5s"],
              borderRightWidth: [t ? 0 : 1, t ? 0 : 1, 0],
              borderBottomWidth: [0, 0, 1],
              _groupHover: {
                  borderColor: ["rgba(0,0,0,0.2)", "rgba(0,0,0,0.2)", "brand.red"],
                  width: ["1px", "1px", "100%"]
              },
              position: ["absolute", "absolute", "relative"],
              top: ["20%", "20%", "initial"],
              right: 0
          }
      }, $u = function(e) {
          var t = e.isActive
            , n = e.lastChild
            , r = e.to
            , i = e.text
            , a = e.locale
            , c = e.croTestThree
            , o = e.indexValue
            , l = Object(z.m)()
            , d = Object(z.l)().data
            , u = Object(j.e)().setSketchfabCameraView
            , b = "initial";
          l.width < parseInt(null === m.a || void 0 === m.a ? void 0 : m.a.breakpoints.md) && (b = "100%");
          var p = l.width < parseInt(null === m.a || void 0 === m.a ? void 0 : m.a.breakpoints.sm)
            , h = Go.isTablet && l.width < l.height
            , O = a.includes("de");
          return Object(B.jsxs)(f.l, Object(s.a)(Object(s.a)({}, function(e, t) {
              return {
                  height: ["5rem", "6rem", "auto"],
                  maxW: ["initial", "initial", "20rem"],
                  direction: ["row", "row", "column"],
                  flex: [1, 1, 0],
                  backgroundColor: [e ? "gray.50" : "gray.200", e ? "gray.50" : "gray.200", "transparent"],
                  role: "group",
                  alignItems: ["center", "center", "flex-start"],
                  position: "relative",
                  spacing: [0, 0, "2rem"]
              }
          }(t)), {}, {
              children: [Object(B.jsx)(f.e, Object(s.a)({}, Ku(t, n))), Object(B.jsx)(nn.c, {
                  exact: !0,
                  to: r,
                  style: {
                      width: b,
                      height: b
                  },
                  onClick: function() {
                      var e;
                      null !== d && void 0 !== d && null !== (e = d.finance.externalFinanceCalculator) && void 0 !== e && e.enabled && "/finance" === r && Object(q.s)(d),
                      "/accessories" !== r && u("default")
                  },
                  children: Object(B.jsxs)(f.l, Object(s.a)(Object(s.a)({}, Xu), {}, {
                      flexDir: ["row", "row", "column"],
                      children: [Object(B.jsxs)(f.e, {
                          children: [c && "" !== i && Object(B.jsx)(he, Object(s.a)(Object(s.a)({}, Qu(t, h, O)), {}, {
                              children: o
                          })), Object(B.jsx)(he, Object(s.a)({}, qu(t, O, h, Gu(i, p, O))))]
                      }), Object(B.jsx)(f.d, Object(s.a)({}, Ju(t, n)))]
                  }))
              })]
          }))
      }, eb = function(e) {
          var t = e.page
            , n = e.links
            , r = e.locale
            , i = e.croTestOne
            , a = e.croTestThree
            , c = Object(de.h)()
            , o = Object(z.l)().data
            , l = Object(j.b)().isAEM
            , d = Object(z.m)()
            , u = d.width
            , b = d.height;
          if (!o)
              return null;
          var m = o.featuredCTA1
            , p = o.featuredCTA2
            , h = o.i18n
            , O = Go.isTablet && u > b
            , v = null === h || void 0 === h ? void 0 : h.onwardlinks.find((function(e) {
              return "onwardlink_".concat(e.type) === m || e.type === m
          }
          ))
            , C = null === h || void 0 === h ? void 0 : h.onwardlinks.find((function(e) {
              return "onwardlink_".concat(e.type) === p || e.type === p
          }
          ))
            , g = [];
          !l && v && g.push(v),
          !l && C && g.push(C);
          var x = Nd.a.shouldHideOutboundButtonsBeforeSummary()
            , y = i && ("" === t || "accessories" === t) && !x && !o.hideFeaturedCtasOnExternalSite;
          return Object(B.jsxs)(Xl, Object(s.a)(Object(s.a)({}, Zu), {}, {
              children: [n.map((function(e, t) {
                  var i = e.to
                    , o = e.text
                    , l = i === c.pathname
                    , s = t === n.length - 1;
                  return Object(B.jsx)($u, {
                      to: i,
                      text: o,
                      isActive: l,
                      lastChild: s,
                      locale: r,
                      croTestThree: a,
                      indexValue: ++t
                  }, "".concat(o, "_").concat(t))
              }
              )), y && Object(B.jsx)(f.e, {
                  width: ["calc(100vw - 6rem)", "18rem"],
                  pt: O ? "1rem" : 0,
                  children: Object(B.jsx)(Et, {
                      overrideCTAs: g,
                      buttonType: "outline",
                      columns: ["repeat(2, 1fr)", "repeat(1, 1fr)"]
                  })
              })]
          }))
      }, tb = function(e) {
          var t = e.caption
            , n = e.colorScheme
            , r = e.data
            , i = e.fields
            , a = e.size
            , c = e.variant;
          return Object(B.jsxs)(ls.a, {
              size: a,
              variant: c,
              colorScheme: n,
              children: [void 0 !== t && Object(B.jsx)(ls.b, {
                  children: t
              }), void 0 !== i && Object(B.jsx)(ls.f, {
                  children: Object(B.jsx)(ls.g, {
                      children: i.map((function(e, t) {
                          return Object(u.createElement)(ls.e, Object(s.a)(Object(s.a)({}, null === e || void 0 === e ? void 0 : e.columnProps), {}, {
                              key: "table-th-".concat(t)
                          }), e.columnTitle)
                      }
                      ))
                  })
              }), Object(B.jsx)(ls.c, {
                  children: r.map((function(e, t) {
                      return Object(B.jsx)(ls.g, {
                          background: t % 2 === 0 ? "gray.300" : "",
                          children: i.map((function(t, n) {
                              return Object(B.jsx)(ls.d, Object(s.a)(Object(s.a)({}, t.rowDataProps), {}, {
                                  paddingX: "2rem",
                                  children: Object(B.jsx)(he, {
                                      type: "h4",
                                      letterSpacing: 1,
                                      children: t.dataMutator ? t.dataMutator(e) : e[t.dataKey]
                                  })
                              }), "table-tr-".concat(n))
                          }
                          ))
                      }, "table-tr-".concat(t))
                  }
                  ))
              })]
          })
      };
      tb.defaultProps = {
          data: [],
          fields: []
      };
      var nb, rb, ib, ab = tb, cb = Object(C.b)(nb || (nb = Object(O.a)(["\n    button {\n        display: flex;\n        margin: unset;\n        border: unset;\n        border-radius: unset;\n        border-bottom: 1px solid #c1c1c1;\n        background: unset;\n        padding: 0.2rem 1rem;\n        font-family: inherit;\n    }\n"]))), ob = Object(C.b)(rb || (rb = Object(O.a)(["\n    button {\n        border-bottom: 2px solid #dc182d;\n    }\n"]))), lb = v.a.div(ib || (ib = Object(O.a)(["\n    ", "\n    ", "\n"])), (function(e) {
          return e.isAEM && cb
      }
      ), (function(e) {
          var t = e.isAEM
            , n = e.isActive;
          return t && n && ob
      }
      )), sb = {
          spacing: 5,
          width: "100%"
      }, db = function(e, t) {
          return {
              as: "button",
              width: "100%",
              type: ["h6", "h4"],
              flex: 1,
              height: "100%",
              borderBottom: e ? "2px solid" : "1px solid",
              borderColor: e ? "brand.red" : "gray.500",
              transition: "0.2s border",
              alignItems: "center",
              justifyContent: "flex-end",
              cursor: "pointer",
              padding: "0.2rem 1rem",
              onClick: t
          }
      }, ub = {
          type: ["h6", "h4"],
          flex: 1,
          letterSpacing: 1,
          textAlign: "center",
          padding: "0.8rem",
          fontWeight: 500,
          lineHeight: 1,
          color: "brand.blueGray"
      }, bb = {
          active: {
              opacity: 1,
              display: "flex",
              transition: {
                  duration: .5,
                  delay: .19
              }
          },
          inactive: {
              opacity: 0,
              transition: {
                  duration: .2
              },
              transitionEnd: {
                  display: "none"
              }
          }
      }, fb = function(e) {
          var t, n = e.tabs, r = e.panels, i = e.onSwitch, a = e.selectedTabKey, c = Object(j.b)().isAEM, o = n.findIndex((function(e) {
              return e.key === a
          }
          ));
          return Object(B.jsxs)(f.n, Object(s.a)(Object(s.a)({}, sb), {}, {
              children: [n.length > 1 && Object(B.jsx)(f.f, Object(s.a)(Object(s.a)({}, (t = n.length,
              {
                  templateColumns: "repeat(".concat(t, ", 1fr)"),
                  spacing: 0,
                  alignItems: "flex-end",
                  width: "100%"
              })), {}, {
                  children: n.map((function(e, t) {
                      var n = e.key === a;
                      return Object(B.jsx)(lb, {
                          isAEM: c,
                          isActive: n,
                          children: Object(B.jsx)(f.e, Object(s.a)(Object(s.a)({}, db(n, (function() {
                              return function(e, t) {
                                  i && i(e, t)
                              }(e.key, t)
                          }
                          ))), {}, {
                              children: Object(B.jsx)(he, Object(s.a)(Object(s.a)({}, ub), {}, {
                                  children: e.label
                              }))
                          }))
                      }, "tab".concat(t))
                  }
                  ))
              })), r.map((function(e, t) {
                  return t === o && Object(B.jsx)(Kl, Object(s.a)(Object(s.a)({}, {
                      display: (n = t === o) ? "flex" : "none",
                      initial: "inactive",
                      animate: n ? "active" : "inactive",
                      variants: bb,
                      opacity: 0,
                      width: "100%"
                  }), {}, {
                      children: e
                  }), "panel".concat(t));
                  var n
              }
              ))]
          }))
      }, mb = n(317), pb = {
          inactive: {
              opacity: 0
          },
          active: {
              opacity: 1,
              delay: 1
          }
      }, jb = function(e, t) {
          var n, r, i = {
              type: e,
              width: "2rem",
              height: "2rem",
              fill: null !== (n = null === t || void 0 === t ? void 0 : t.iconColour) && void 0 !== n ? n : "#000000",
              containerConfig: {
                  width: "4.5rem",
                  height: "4.5rem",
                  bg: null !== (r = null === t || void 0 === t ? void 0 : t.backgroundColor) && void 0 !== r ? r : "white",
                  borderRadius: "2.75rem",
                  boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                  css: "\n                @keyframes pulse-ring {\n                    0% {\n                        transform: scale(.33);\n                    }\n                    80%, 100% {\n                        opacity: 0;\n                    }\n                }\n                @keyframes pulse-dot {\n                    0% {\n                        transform: scale(1);\n                    }\n                    50% {\n                        transform: scale(1.2);\n                    }\n                    100% {\n                        transform: scale(1);\n                    }\n                }\n            "
              }
          };
          return !0 === (null === t || void 0 === t ? void 0 : t.enablePulseAnimation) && (i.containerConfig._before = {
              content: '""',
              width: "13.5rem",
              height: "13.5rem",
              boxSizing: "border-box",
              position: "absolute",
              backgroundColor: "brand.red",
              borderRadius: "6.75rem",
              animation: "pulse-ring 1.25s cubic-bezier(0.215, 0.61, 0.355, 1) infinite",
              zIndex: -1
          },
          i.containerConfig.animation = "pulse-dot 1.25s cubic-bezier(0.455, 0.03, 0.515, 0.955) -.4s infinite"),
          i
      }, hb = {
          justifyContent: "center",
          cursor: "pointer",
          spacing: "1rem"
      }, Ob = {
          display: "flex",
          margin: "unset",
          padding: "var(--chakra-space-2)",
          width: "var(--close-button-size)",
          border: "unset",
          borderRadius: "var(--chakra-radii-md)",
          background: "transparent"
      }, vb = function() {
          var e = Object(Oe.b)().data
            , t = Object(j.e)()
            , n = t.isMobileZoomed
            , r = t.isSketchfab
            , i = t.setIsMobileZoomed
            , a = t.setIsModalVisible
            , c = t.setSketchfabCameraView
            , o = t.setIsSketchfab
            , l = t.sketchfabIsLoading
            , b = t.sketchfabIsReady
            , p = Object(z.m)().width
            , h = Object(u.useState)(!1)
            , O = Object(d.a)(h, 2)
            , v = O[0]
            , C = O[1];
          Object(u.useEffect)((function() {
              if (r || !b || Object(gt.e)(null === e || void 0 === e ? void 0 : e.realTimeConfigurator3dViewLabelTooltip))
                  return C(!1),
                  function() {}
                  ;
              var t = setTimeout((function() {
                  C(!0)
              }
              ), 300);
              return function() {
                  clearTimeout(t)
              }
          }
          ), [r, b]);
          parseInt(null === m.a || void 0 === m.a ? void 0 : m.a.breakpoints.md);
          var g = p < parseInt(null === m.a || void 0 === m.a ? void 0 : m.a.breakpoints.sm)
            , x = function(e, t) {
              c(e),
              Object(Lt.a)({
                  config_interaction: t
              })
          };
          if (!e)
              return null;
          var y = e.new_rider_view_label
            , w = e.zoom_in
            , L = e.zoom_out
            , _ = e.view_controls
            , S = e.reset_view
            , E = e.realTimeConfigurator3dViewLabel
            , I = e.realTimeConfigurator3dViewLabelTooltip
            , T = [{
              text: y,
              icon: "helmetFront",
              action: function() {
                  a(!0, "riderView"),
                  Object(Lt.a)({
                      config_interaction: "rider_view"
                  })
              }
          }];
          r && (T = [{
              text: S,
              icon: "reset",
              action: function() {
                  return x("default", "reset_view")
              }
          }, {
              text: y,
              icon: "helmetFront",
              action: function() {
                  return x("riderview", "rider_view")
              }
          }]),
          g && !r && T.push({
              text: n ? L : w,
              icon: n ? "minify" : "magnify",
              action: function() {
                  i(!n)
              }
          });
          var A = T.map((function(e, t) {
              var n = e.text
                , r = e.icon
                , i = e.action;
              return Object(B.jsxs)(f.h, Object(s.a)(Object(s.a)({
                  onClick: i
              }, hb), {}, {
                  children: [Object(B.jsx)(wo, Object(s.a)({}, jb(r))), Object(B.jsx)(he, {
                      type: "icon-link",
                      children: n
                  })]
              }), "viewButton".concat(t))
          }
          ));
          return Object(B.jsxs)(Xl, Object(s.a)(Object(s.a)({}, {
              position: "relative",
              padding: [0, "2rem", "2rem 4rem 3rem"],
              spacing: "2rem",
              alignItems: ["center", "flex-start"],
              initial: "inactive",
              animate: "active",
              direction: ["row", "column", "column"],
              variants: pb,
              m: ["auto", 0]
          }), {}, {
              children: [!g && Object(B.jsx)(he, {
                  type: "h6-light",
                  children: _
              }), g && A, !r && l && Object(B.jsxs)(f.h, Object(s.a)(Object(s.a)({}, hb), {}, {
                  children: [Object(B.jsx)(wo, Object(s.a)(Object(s.a)({}, jb("_3D")), {}, {
                      fill: "#959595"
                  })), Object(B.jsx)(f.n, {
                      children: Object(B.jsx)(U.b, {
                          isIndeterminate: !0,
                          colorScheme: "red",
                          bg: "gray.200",
                          width: "8rem",
                          height: "0.3rem"
                      })
                  })]
              })), !r && b && Object(B.jsxs)(mb.a, {
                  isOpen: v,
                  onClose: function() {
                      return C(!1)
                  },
                  closeOnBlur: !1,
                  placement: g ? "top-start" : "right",
                  autoFocus: !1,
                  gutter: 16,
                  computePositionOnMount: !0,
                  children: [Object(B.jsx)(mb.b, {
                      children: Object(B.jsxs)(f.h, Object(s.a)(Object(s.a)({}, hb), {}, {
                          onClick: function() {
                              return o(!0)
                          },
                          children: [Object(B.jsx)(wo, Object(s.a)({}, jb("_3D", {
                              backgroundColor: "brand.red",
                              iconColour: "white",
                              enablePulseAnimation: !0
                          }))), Object(B.jsx)(he, {
                              type: "icon-link",
                              children: E
                          })]
                      }))
                  }), Object(B.jsxs)(mb.f, {
                      width: "110px",
                      children: [Object(B.jsx)(mb.c, {}), Object(B.jsx)(mb.e, {
                          top: 0,
                          right: 0,
                          style: Ob
                      }), Object(B.jsx)(mb.d, {
                          padding: "1rem 2rem",
                          fontSize: "md",
                          children: I
                      })]
                  })]
              }), !g && A]
          }))
      }
  },
  38: function(e, t, n) {
      "use strict";
      n.d(t, "e", (function() {
          return r
      }
      )),
      n.d(t, "d", (function() {
          return i
      }
      )),
      n.d(t, "c", (function() {
          return a
      }
      )),
      n.d(t, "a", (function() {
          return c
      }
      )),
      n.d(t, "f", (function() {
          return o
      }
      )),
      n.d(t, "b", (function() {
          return l
      }
      ));
      var r = function(e) {
          return null === e || void 0 === e || null !== e.match(/^ *$/)
      }
        , i = function(e) {
          if (!e)
              return "GB";
          var t = e.split("-");
          return 2 === t.length ? t[1] : ""
      }
        , a = function() {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
          for (var i = 0; i < t.length; i++) {
              var a;
              if (!r(t[i]))
                  return null !== (a = t[i]) && void 0 !== a ? a : ""
          }
          return ""
      }
        , c = function(e) {
          return e.replace(/[\u00A0-\u9999<>\&]/g, (function(e) {
              return "&#" + e.charCodeAt(0) + ";"
          }
          ))
      }
        , o = function(e) {
          return e.endsWith("/") ? e.slice(0, -1) : e
      }
        , l = function(e) {
          return e.endsWith("/") ? e : e + "/"
      }
  },
  404: function(e, t) {},
  406: function(e, t) {},
  436: function(e, t) {},
  437: function(e, t) {},
  46: function(e, t, n) {
      "use strict";
      n.d(t, "a", (function() {
          return s
      }
      ));
      var r, i, a = n(38), c = function(e) {
          return "/api/layout/v1/".concat(e)
      }, o = {
          model: "".concat(""),
          accessories: "".concat(Object({
              NODE_ENV: "production",
              PUBLIC_URL: "/Assets/mc-spa",
              WDS_SOCKET_HOST: void 0,
              WDS_SOCKET_PATH: void 0,
              WDS_SOCKET_PORT: void 0,
              FAST_REFRESH: !0,
              REACT_APP_UMBRACO_CONFIG_URL: "",
              REACT_APP_USE_MOCK_DATA: "false",
              REACT_APP_MODEL_API_URL: ""
          }).REACT_APP_ACCESSORIES_API_URL),
          financingData: "".concat(Object({
              NODE_ENV: "production",
              PUBLIC_URL: "/Assets/mc-spa",
              WDS_SOCKET_HOST: void 0,
              WDS_SOCKET_PATH: void 0,
              WDS_SOCKET_PORT: void 0,
              FAST_REFRESH: !0,
              REACT_APP_UMBRACO_CONFIG_URL: "",
              REACT_APP_USE_MOCK_DATA: "false",
              REACT_APP_MODEL_API_URL: ""
          }).REACT_APP_FINANCING_OPTIONS_URL),
          calculateFinanceData: "".concat(Object({
              NODE_ENV: "production",
              PUBLIC_URL: "/Assets/mc-spa",
              WDS_SOCKET_HOST: void 0,
              WDS_SOCKET_PATH: void 0,
              WDS_SOCKET_PORT: void 0,
              FAST_REFRESH: !0,
              REACT_APP_UMBRACO_CONFIG_URL: "",
              REACT_APP_USE_MOCK_DATA: "false",
              REACT_APP_MODEL_API_URL: ""
          }).REACT_APP_CALCULATE_FINANCE_URL),
          umbracoConfig: "".concat(""),
          saveConfig: "".concat(Object({
              NODE_ENV: "production",
              PUBLIC_URL: "/Assets/mc-spa",
              WDS_SOCKET_HOST: void 0,
              WDS_SOCKET_PATH: void 0,
              WDS_SOCKET_PORT: void 0,
              FAST_REFRESH: !0,
              REACT_APP_UMBRACO_CONFIG_URL: "",
              REACT_APP_USE_MOCK_DATA: "false",
              REACT_APP_MODEL_API_URL: ""
          }).REACT_APP_SAVE_CONFIG_URL)
      }, l = {
          model: "".concat(o.model).concat("api/products/v1/en-GB/bikes"),
          accessories: "".concat(o.model).concat("api/products/v1/en-GB/bikes"),
          financingData: "".concat(o.financingData).concat("api/v1/GB/motorcycles/offers"),
          calculateFinanceData: "".concat(o.calculateFinanceData).concat("api/v1/GB/motorcycles/calculate"),
          umbracoConfig: "".concat(o.umbracoConfig).concat("umbracoConfigApiPath"),
          saveConfig: "".concat(o.saveConfig).concat("/api/configs/v1/save"),
          aemHeader: "".concat(Object(a.f)(null === (r = window.api) || void 0 === r ? void 0 : r.baseUrl)).concat(c("header")),
          aemFooter: "".concat(Object(a.f)(null === (i = window.api) || void 0 === i ? void 0 : i.baseUrl)).concat(c("footer"))
      }, s = function() {
          var e, t, n = window.api, r = Object(a.b)(null !== (e = null !== (t = null === n || void 0 === n ? void 0 : n.modelBasePath) && void 0 !== t ? t : null === n || void 0 === n ? void 0 : n.baseUrl) && void 0 !== e ? e : "");
          return Object.freeze({
              ACCESSORIES_DATA: l.accessories,
              MODEL_DATA: l.model,
              FINANCING_OPTIONS: l.financingData,
              CALCULATE_FINANCE: l.calculateFinanceData,
              UMBRACO_CONFIG: l.umbracoConfig,
              SAVE_CONFIG: l.saveConfig,
              MODEL_DATA_BASE_PATH: r + "api/rtc/config/",
              AEM_HEADER: l.aemHeader,
              AEM_FOOTER: l.aemFooter
          })
      }()
  },
  49: function(e, t, n) {
      "use strict";
      var r = n(318)
        , i = n.n(r).a.create();
      t.a = i
  },
  5: function(e, t, n) {
      "use strict";
      n.d(t, "a", (function() {
          return g
      }
      )),
      n.d(t, "b", (function() {
          return I
      }
      )),
      n.d(t, "c", (function() {
          return N
      }
      )),
      n.d(t, "d", (function() {
          return W
      }
      )),
      n.d(t, "e", (function() {
          return w
      }
      ));
      var r, i, a, c, o, l, s, d, u = n(79), b = n.n(u), f = n(71), m = n(18), p = n(34), j = function(e) {
          return e.reduce((function(e, t) {
              return e + t
          }
          ), 0)
      }, h = Object(f.devtools)((function(e, t) {
          return {
              customPartsDisclaimerWasDisplayedToUser: !1,
              categories: [],
              currentBundled: [],
              currentIncompatible: [],
              currentPack: null,
              currentPartNumber: null,
              currentRequired: [],
              previewAccessory: void 0,
              selectedAccessories: [],
              selectedCategoryIndex: 0,
              sketchfabViewerAccessoryList: [],
              getFullAccessories: function() {
                  var e = t().selectedAccessories.map((function(e) {
                      return e.id
                  }
                  ));
                  return Object(m.g)(e)
              },
              getSelectedCategory: function() {
                  var e;
                  return null === (e = t().categories) || void 0 === e ? void 0 : e[t().selectedCategoryIndex]
              },
              getTotalAccessoryCost: function() {
                  var e = t().getFullAccessories().map((function(e) {
                      return (null === e || void 0 === e ? void 0 : e.price) || 0
                  }
                  ));
                  return j(e)
              },
              getTotalAccessoryInstallCost: function() {
                  var e = t().getFullAccessories().map((function(e) {
                      return e && e.installationPrice ? e.installationPrice : 0
                  }
                  ));
                  return j(e)
              },
              setCurrentIncompatible: function(t) {
                  return e({
                      currentIncompatible: t
                  })
              },
              setCurrentPack: function(t) {
                  return e({
                      currentPack: t
                  })
              },
              setCurrentPartNumber: function(t) {
                  return e({
                      currentPartNumber: t
                  })
              },
              setCurrentRequired: function(t) {
                  return e({
                      currentRequired: t
                  })
              },
              setCurrentBundled: function(t) {
                  return e({
                      currentBundled: t
                  })
              },
              setSelectedCategoryIndex: function(n) {
                  var r;
                  e({
                      selectedCategoryIndex: n
                  }),
                  Object(p.a)({
                      config_interaction: "packs_and_accessories_category",
                      pack_accessory_category: null === (r = t().getSelectedCategory().iconName) || void 0 === r ? void 0 : r.toLowerCase()
                  })
              },
              setCategories: function(t) {
                  return e({
                      categories: t
                  })
              },
              setSelectedAccessories: function(t) {
                  return e({
                      selectedAccessories: t
                  })
              },
              setSketchfabViewerAccessoryList: function(t) {
                  return e({
                      sketchfabViewerAccessoryList: t
                  })
              },
              setPreviewAccessory: function(t) {
                  return e({
                      previewAccessory: t
                  })
              }
          }
      }
      )), O = null === (r = window.initialState) || void 0 === r ? void 0 : r.productId, v = null === (i = window.initialState) || void 0 === i ? void 0 : i.locale, C = Object(f.persist)(h, {
          name: "honda-mc-accessories-state-".concat(O, "-").concat(v),
          getStorage: function() {
              return sessionStorage
          }
      }), g = b()(C), x = n(39), y = Object(f.devtools)((function(e, t) {
          return {
              modalStack: [],
              bottomPadding: 0,
              carouselLoadedPct: 0,
              cursorMode: "hide",
              footerHeight: 60,
              isCarouselLoaded: !1,
              isDragTooltipVisible: !1,
              isFirstLoad: !0,
              isMobileZoomed: !1,
              isModalVisible: !1,
              isPreviewInitiated: !1,
              isSketchfab: !1,
              sketchfabIsLoading: !1,
              sketchfabIsReady: !1,
              isZoomEnabled: !1,
              mobileViewerHeight: 0,
              modalCallback: void 0,
              placeholderImage: null,
              selectedModal: null,
              sketchfabCameraView: "default",
              sketchfabUpdateCount: 0,
              sliderAngle: 24,
              startAngle: 24,
              zoomedImage: null,
              isFloatingCTAVisible: !0,
              viewerDimensions: void 0,
              setBottomPadding: function(t) {
                  return e({
                      bottomPadding: t
                  })
              },
              setCarouselLoadedPct: function(t) {
                  e({
                      carouselLoadedPct: t
                  }),
                  e({
                      isCarouselLoaded: t > 99
                  })
              },
              setCursorMode: function(t) {
                  e({
                      cursorMode: t
                  });
                  t.includes("zoom") && Object(p.a)({
                      config_interaction: {
                          zoomed: "zoom_in",
                          zoomedx2: "zoom_in_more",
                          zoomedx3: "zoom_out"
                      }[t]
                  })
              },
              setFooterHeight: function(t) {
                  return e({
                      footerHeight: t
                  })
              },
              setMobileViewerHeight: function(t) {
                  return e({
                      mobileViewerHeight: t
                  })
              },
              setIsCarouselLoaded: function(e) {
                  return {
                      isCarouselLoaded: e
                  }
              },
              setIsDragTooltipVisible: function(t) {
                  return e({
                      isDragTooltipVisible: t
                  })
              },
              setIsFirstLoad: function(t) {
                  return e({
                      isFirstLoad: t
                  })
              },
              setIsModalVisible: function(n, r, i) {
                  var a = t().modalStack;
                  if (e(n ? {
                      modalStack: [].concat(Object(x.a)(a), [{
                          selectedModal: r,
                          modalCallback: i
                      }])
                  } : {
                      modalStack: a.filter((function(e) {
                          return e.selectedModal !== r
                      }
                      ))
                  }),
                  t().selectedModal === r || n) {
                      var c = t().modalStack;
                      if (c.length > 0) {
                          var o = c[c.length - 1];
                          e({
                              isModalVisible: !0,
                              selectedModal: o.selectedModal,
                              modalCallback: o.modalCallback
                          })
                      } else
                          e({
                              isModalVisible: !1,
                              selectedModal: void 0,
                              modalCallback: void 0
                          })
                  }
              },
              setIsMobileZoomed: function(t) {
                  return e({
                      isMobileZoomed: t
                  })
              },
              setIsPreviewInitiated: function(t) {
                  return e({
                      isPreviewInitiated: t
                  })
              },
              setIsSketchfab: function(t) {
                  return e({
                      isSketchfab: t
                  })
              },
              setSketchfabCameraView: function(n) {
                  e({
                      sketchfabCameraView: n
                  }),
                  e({
                      sketchfabUpdateCount: t().sketchfabUpdateCount + 1
                  })
              },
              setSketchfabIsLoading: function(t) {
                  return e({
                      sketchfabIsLoading: t
                  })
              },
              setSketchfabIsReady: function(t) {
                  return e({
                      sketchfabIsReady: t
                  })
              },
              setPlaceholderImage: function(t) {
                  return e({
                      placeholderImage: t
                  })
              },
              setStartAngle: function(t) {
                  return e({
                      startAngle: t
                  })
              },
              setZoomedImage: function(t) {
                  e({
                      zoomedImage: t
                  }),
                  e({
                      isZoomEnabled: !!t
                  })
              },
              setIsFloatingCTAVisible: function(t) {
                  return e({
                      isFloatingCTAVisible: t
                  })
              },
              setIsZoomEnabled: function(t) {
                  return e({
                      isZoomEnabled: t
                  })
              },
              setSliderAngle: function(t) {
                  return e({
                      sliderAngle: t
                  })
              },
              setViewerDimensions: function(t) {
                  return e({
                      viewerDimensions: t
                  })
              }
          }
      }
      )), w = b()(y), L = n(155), _ = null === (a = window.initialState) || void 0 === a ? void 0 : a.productId, S = null === (c = window.initialState) || void 0 === c ? void 0 : c.locale, E = Object(f.persist)((function(e, t) {
          var n, r, i, a;
          return {
              i18n: void 0,
              isAEM: !1,
              isAEMFooterBottom: !1,
              isAEMIframe: !1,
              currentStep: void 0,
              isFinanceAvailable: !1,
              isPDFLoading: !1,
              tabbing: !1,
              steps: [],
              setCurrentStep: function(t) {
                  e({
                      currentStep: t
                  }),
                  w.getState().isFirstLoad || (Object(p.a)({
                      event: "bc_pageview"
                  }),
                  Object(L.a)())
              },
              incrementStep: function() {
                  var e = t()
                    , n = e.currentStep;
                  (0,
                  e.setCurrentStep)((null !== n && void 0 !== n ? n : 0) + 1)
              },
              setI18n: function(t) {
                  return e({
                      i18n: t
                  })
              },
              setIsPDFLoading: function(t) {
                  return e({
                      isPDFLoading: t
                  })
              },
              setFinance: function(t) {
                  return e({
                      isFinanceAvailable: t
                  })
              },
              setSteps: function(t) {
                  return e({
                      steps: t
                  })
              },
              setStepFromPathname: function(e) {
                  var n = t()
                    , r = n.steps;
                  (0,
                  n.setCurrentStep)(r.findIndex((function(t) {
                      return t.to === e
                  }
                  )))
              },
              setTabbing: function(t) {
                  return e({
                      tabbing: t
                  })
              },
              getNextStep: function() {
                  var e;
                  return t().steps[(null !== (e = t().currentStep) && void 0 !== e ? e : 0) + 1]
              },
              setIsAEM: function(t) {
                  return e({
                      isAEM: t
                  })
              },
              setIsAEMFooterBottom: function(t) {
                  return e({
                      isAEMFooterBottom: t
                  })
              },
              setIsAEMIframe: function(t) {
                  return e({
                      isAEMIframe: t
                  })
              },
              financeCalculatorDisplayRatio: void 0,
              setFinanceCalculatorDisplayRatio: function(t) {
                  return e({
                      financeCalculatorDisplayRatio: t
                  })
              },
              financeTermsAndConditionsDisplayRatio: void 0,
              setFinanceTermsAndConditionsDisplayRatio: function(t) {
                  return e({
                      financeTermsAndConditionsDisplayRatio: t
                  })
              },
              scrollY: null !== (n = null === (r = window) || void 0 === r ? void 0 : r.scrollY) && void 0 !== n ? n : 0,
              prevScrollY: null !== (i = null === (a = window) || void 0 === a ? void 0 : a.scrollY) && void 0 !== i ? i : 0,
              getFinancePageRouteForURL: function() {
                  var e = t()
                    , n = e.financeCalculatorDisplayRatio
                    , r = e.financeTermsAndConditionsDisplayRatio
                    , i = "summary";
                  return n && n > 0 && (i = "finance"),
                  r && r > .5 && (i = "terms"),
                  i
              },
              setScrollY: function(n) {
                  var r = t().scrollY;
                  e({
                      scrollY: n,
                      prevScrollY: r
                  })
              }
          }
      }
      ), {
          name: "honda-mc-app-state-".concat(_, "-").concat(S)
      }), I = b()(E), T = n(37), A = n(3), M = n(27), k = n(91), R = Object(f.devtools)((function(e, t) {
          return {
              variantOffers: {},
              variantCalculations: {},
              mileages: [],
              mileageIndex: 0,
              calculateQueryParams: void 0,
              calculated: {},
              depositAmount: void 0,
              depositPercent: void 0,
              installationCost: 0,
              financeSettings: {},
              financeTerm: void 0,
              monthlyPayment: 0,
              repaymentTimeIndex: void 0,
              repaymentTimes: [],
              selectedOfferIndex: 0,
              selectedOffer: null,
              servicingCost: 0,
              isServicingIncluded: !1,
              financeQueryParams: void 0,
              useAlternateData: !1,
              upsertVariantOffer: function(t, n) {
                  e((function(e) {
                      var r = e.variantOffers;
                      return {
                          variantOffers: Object(A.a)(Object(A.a)({}, r), {}, Object(T.a)({}, t, n))
                      }
                  }
                  ))
              },
              upsertVariantCalculation: function(t, n) {
                  e((function(e) {
                      var r = e.variantCalculations;
                      return {
                          variantCalculations: Object(A.a)(Object(A.a)({}, r), {}, Object(T.a)({}, t, n))
                      }
                  }
                  ))
              },
              getSelectedMileage: function() {
                  return t().mileages[Object(M.a)(t().mileageIndex, 0, t().mileages.length - 1)] || 0
              },
              selectedRepaymentTime: function() {
                  return t().repaymentTimes[t().repaymentTimeIndex]
              },
              selectedAverageMileages: function() {
                  return t().mileages.length > 0 ? t().mileages[t().mileageIndex] : null
              },
              setCalculated: function(t) {
                  return e({
                      calculated: t
                  })
              },
              setMileages: function(n) {
                  var r = Object(M.a)(t().mileageIndex, 0, n.length - 1);
                  e({
                      mileages: n,
                      mileageIndex: r
                  })
              },
              setMileageIndex: function(t) {
                  return e({
                      mileageIndex: t
                  })
              },
              setCalculateQueryParams: function(t) {
                  return e({
                      calculateQueryParams: t
                  })
              },
              setDeposit: function(t, n) {
                  e({
                      depositAmount: t,
                      depositPercent: n
                  }),
                  w.getState().isFirstLoad || Object(p.a)({
                      config_interaction: "finance_calculator",
                      finance_calculator_interaction: "deposit",
                      finance_calculator_value: t
                  })
              },
              setInstallationCost: function(t) {
                  return e({
                      installationCost: t
                  })
              },
              setIsServicingIncluded: function(t) {
                  return e({
                      isServicingIncluded: t
                  })
              },
              setFinanceSettings: function(t) {
                  return e({
                      financeSettings: t
                  })
              },
              setFinanceTerm: function(t) {
                  return e({
                      financeTerm: t
                  })
              },
              setFinanceQueryParams: function(t) {
                  return e({
                      financeQueryParams: t
                  })
              },
              setMonthlyPayment: function(t) {
                  return e({
                      monthlyPayment: t
                  })
              },
              setRepaymentTimes: function(n, r) {
                  if (0 !== n.length) {
                      var i = Math.min.apply(Math, Object(x.a)(n))
                        , a = Math.max.apply(Math, Object(x.a)(n))
                        , c = Array.from({
                          length: a - i + 1
                      }, (function(e, t) {
                          return t + i
                      }
                      ))
                        , o = r ? c : n
                        , l = Object(M.a)(t().repaymentTimeIndex, 0, o.length - 1);
                      e({
                          repaymentTimes: o,
                          repaymentTimeIndex: l
                      })
                  } else
                      e({
                          repaymentTimes: n,
                          repaymentTimeIndex: -1
                      })
              },
              setRepaymentTimeIndex: function(t) {
                  return e({
                      repaymentTimeIndex: t
                  })
              },
              setSelectedOfferIndex: function(t) {
                  return e({
                      selectedOfferIndex: t
                  })
              },
              setSelectedOffer: function(t) {
                  return e({
                      selectedOffer: t
                  })
              },
              setServicingCost: function(t) {
                  return e({
                      servicingCost: t
                  })
              },
              setUseAlternateData: function(t) {
                  return e({
                      useAlternateData: t
                  })
              },
              getBestOfferForVariant: function(e) {
                  var n = t().variantOffers[e.id];
                  return null !== n && void 0 !== n && n.financingOptions && 0 !== n.financingOptions.length ? 1 === n.financingOptions.length ? n.financingOptions[0] : Object(k.b)(n.financingOptions) : null
              }
          }
      }
      )), P = null === (o = window.initialState) || void 0 === o ? void 0 : o.productId, F = null === (l = window.initialState) || void 0 === l ? void 0 : l.locale, D = Object(f.persist)(R, {
          name: "honda-mc-finance-state-".concat(P, "-").concat(F)
      }), N = b()(D), B = n(10), H = Object(f.devtools)((function(e, t) {
          return {
              currentAngle: 24,
              currentPlaceholder: void 0,
              model: void 0,
              previousModelImage: void 0,
              carouselImages: [],
              totalPrice: 0,
              totalFrames: 0,
              getSelectedVariant: function() {
                  var e;
                  return null === (e = t().model) || void 0 === e ? void 0 : e.variants[t().selectedVariantIndex]
              },
              selectedVariantIndex: 0,
              selectedVariant: void 0,
              sketchfabConfig: void 0,
              previousVariant: void 0,
              useRenderServer: !0,
              setCarouselImages: function(t) {
                  return e({
                      carouselImages: t
                  })
              },
              setCurrentAngle: function(n) {
                  e({
                      currentAngle: n
                  });
                  var r = t().carouselImages;
                  if (r.length > 0) {
                      var i, a = null === (i = r[n]) || void 0 === i ? void 0 : i.image;
                      a && t().setCurrentPlaceholder(a)
                  }
                  Object(p.a)({
                      config_interaction: "360_view"
                  })
              },
              setCurrentPlaceholder: function(t) {
                  e({
                      currentPlaceholder: t
                  })
              },
              setPreviousModelImage: function(t) {
                  return e({
                      previousModelImage: t
                  })
              },
              setPreviousVariant: function(t) {
                  return e({
                      previousVariant: t
                  })
              },
              setSelectedVariantIndex: function(n) {
                  var r, i, a = t().selectedVariantIndex;
                  e({
                      previousVariant: null === (r = t().model) || void 0 === r ? void 0 : r.variants[a]
                  }),
                  e({
                      selectedVariantIndex: n
                  }),
                  e({
                      selectedVariant: null === (i = t().model) || void 0 === i ? void 0 : i.variants[n]
                  }),
                  Object(p.a)({
                      config_interaction: "change_model"
                  })
              },
              setModel: function(t) {
                  return e({
                      model: t
                  })
              },
              setSelectedColourIndex: function(n) {
                  e({
                      selectedColourIndex: n
                  });
                  var r = N.getState().calculateQueryParams
                    , i = N.getState().financeQueryParams;
                  if (r) {
                      var a, c, o = Object(B.m)([null === (a = t().getSelectedColour()) || void 0 === a ? void 0 : a.financeCode, null === (c = t().getSelectedVariant()) || void 0 === c ? void 0 : c.financeCode, r.financeCode]), l = Object(A.a)(Object(A.a)({}, r), {}, {
                          financeCode: o
                      });
                      r.financeType && N.getState().setCalculateQueryParams(l)
                  }
                  if (i) {
                      var s, d, u = Object(B.m)([null === (s = t().getSelectedColour()) || void 0 === s ? void 0 : s.financeCode, null === (d = t().getSelectedVariant()) || void 0 === d ? void 0 : d.financeCode, i.financeCodes]), b = Object(A.a)(Object(A.a)({}, i), {}, {
                          financeCodes: u
                      });
                      N.getState().setFinanceQueryParams(b)
                  }
              },
              setSketchfabConfig: function(t) {
                  return e({
                      sketchfabConfig: t
                  })
              },
              setTotalFrames: function(t) {
                  return e({
                      totalFrames: t
                  })
              },
              setTotalPrice: function(t) {
                  return e({
                      totalPrice: t
                  })
              },
              setUseRenderServer: function(t) {
                  return e({
                      useRenderServer: t
                  })
              },
              selectedColourIndex: 0,
              getSelectedColour: function() {
                  var e;
                  return null === (e = t().getSelectedVariant()) || void 0 === e ? void 0 : e.colours[t().selectedColourIndex]
              }
          }
      }
      )), z = null === (s = window.initialState) || void 0 === s ? void 0 : s.productId, V = null === (d = window.initialState) || void 0 === d ? void 0 : d.locale, U = Object(f.persist)(H, {
          name: "honda-mc-model-state-".concat(z, "-").concat(V)
      }), W = b()(U)
  },
  51: function(e, t, n) {
      "use strict";
      var r = function(e) {
          return function() {
              return "true" === new URLSearchParams(document.location.search).get(e)
          }
      }
        , i = {
          shouldUseSliderInsteadOfCursorDragForBikeSpin: r("abt1"),
          shouldRemoveAccessoryBannerHoverState: r("abt2"),
          shouldHideOutboundButtonsBeforeSummary: r("abt4")
      };
      t.a = i
  },
  518: function(e, t) {},
  54: function(e, t, n) {
      "use strict";
      var r = n(20)
        , i = n(26)
        , a = n(341)
        , c = n(49)
        , o = n(46)
        , l = n(138)
        , s = n(156)
        , d = n(5)
        , u = n(10)
        , b = Object.freeze({
          CALCULATE_FINANCE: "CALCULATE_FINANCE",
          CALCULATE_DEFAULT_FINANCE: "CALCULATE_DEFAULT_FINANCE"
      })
        , f = function() {
          var e = Object(i.a)(Object(r.a)().mark((function e(t, n, i) {
              var a, u, b, f, m, p, j, h, O, v, C, g, x, y, w, L, _, S, E, I, T, A, M, k, R, P;
              return Object(r.a)().wrap((function(e) {
                  for (; ; )
                      switch (e.prev = e.next) {
                      case 0:
                          if (t) {
                              e.next = 2;
                              break
                          }
                          throw new Error("Parameters are required");
                      case 2:
                          if (i) {
                              e.next = 6;
                              break
                          }
                          if (!t.basePrice) {
                              e.next = 5;
                              break
                          }
                          return e.abrupt("return", {
                              otrPrice: t.basePrice + (null !== (u = t.accessoriesCost) && void 0 !== u ? u : 0) + (null !== (b = t.colourCost) && void 0 !== b ? b : 0)
                          });
                      case 5:
                          return e.abrupt("return", {
                              otrPrice: 0
                          });
                      case 6:
                          if (!n) {
                              e.next = 18;
                              break
                          }
                          return h = t.basePrice + (null !== (f = t.accessoriesCost) && void 0 !== f ? f : 0) + (null !== (m = t.colourCost) && void 0 !== m ? m : 0) + (null !== (p = t.equipmentCost) && void 0 !== p ? p : 0),
                          O = {
                              amount: h,
                              deposit: Math.round(100 * t.depositAmount) / 100,
                              duration: t.financeTerm
                          },
                          e.next = 11,
                          l.b.calculate(O);
                      case 11:
                          if (v = e.sent,
                          null === (j = v.ERROR) || void 0 === j || !j.length) {
                              e.next = 15;
                              break
                          }
                          throw console.error(v),
                          new Error(v.ERROR[0]);
                      case 15:
                          return C = Object(s.b)(v, t),
                          d.c.getState().setCalculated(C),
                          e.abrupt("return", C);
                      case 18:
                          return g = o.a.CALCULATE_FINANCE,
                          null !== (a = window.api) && void 0 !== a && a.calculation && (g = window.api.calculation),
                          x = t.financeType,
                          y = t.financeCode,
                          w = t.financeTerm,
                          L = t.depositAmount,
                          _ = t.annualMileage,
                          S = t.basePrice,
                          E = t.colourCost,
                          I = t.equipmentCost,
                          T = t.accessoriesCost,
                          A = t.residualValueOption,
                          M = t.servicingCost,
                          k = {
                              financeType: x,
                              financeCode: y,
                              financeTerm: w,
                              depositAmount: L,
                              annualMileage: _,
                              basePrice: S,
                              colourCost: E,
                              equipmentCost: I,
                              accessoriesCost: T,
                              residualValueOption: A,
                              servicingCost: M
                          },
                          e.next = 24,
                          c.a.get(g, {
                              params: k
                          });
                      case 24:
                          return R = e.sent,
                          P = R.data,
                          d.c.getState().setCalculated(P),
                          e.abrupt("return", P);
                      case 28:
                      case "end":
                          return e.stop()
                      }
              }
              ), e)
          }
          )));
          return function(t, n, r) {
              return e.apply(this, arguments)
          }
      }();
      t.a = function(e, t) {
          var n = d.d.getState().getSelectedVariant()
            , r = null !== e && void 0 !== e ? e : {}
            , i = r.financeType
            , c = r.basePrice
            , o = !!n && Object(u.a)(n) && (!!i || t)
            , l = void 0 !== c;
          return Object(a.a)([b.CALCULATE_FINANCE, e], (function() {
              return f(e, t, o)
          }
          ), {
              enabled: l,
              onError: function() {
                  return console.error("failed to fetch finance calculations"),
                  void d.c.getState().setDeposit(0, 0)
              }
          })
      }
  },
  668: function(e, t, n) {},
  669: function(e, t, n) {
      "use strict";
      n.r(t);
      var r = n(0)
        , i = n(677)
        , a = n(157)
        , c = n(66)
        , o = n.n(c)
        , l = n(3)
        , s = n(16)
        , d = n(14)
        , u = n(31)
        , b = n(12)
        , f = n(5)
        , m = n(10)
        , p = f.b.getState().setTabbing
        , j = function(e) {
          "Tab" === e.code && (p(!0),
          setTimeout((function() {
              O("button", "auto"),
              O("a", "auto"),
              O("input", "auto")
          }
          ), 10),
          window.addEventListener("mousedown", h))
      }
        , h = function e() {
          p(!1),
          O("button", "none"),
          O("a", "none"),
          O("input", "none"),
          window.removeEventListener("mousedown", e),
          window.addEventListener("keydown", j)
      }
        , O = function(e, t) {
          document.querySelectorAll(e).forEach((function(e) {
              e.matches(":focus") && "auto" === t ? e.style.outline = "auto" : e.style.outline = "none"
          }
          ))
      }
        , v = n(36)
        , C = n(13)
        , g = n(18)
        , x = n(54)
        , y = n(91)
        , w = n(38)
        , L = n(162)
        , _ = n(68)
        , S = n(2)
        , E = function() {
          var e, t = Object(r.useState)({
              hasLoadedAccessories: !1,
              hasLoadedColour: !1,
              hasLoadedFinance: !1,
              hasLoadedVariant: !1
          }), n = Object(s.a)(t, 2), i = n[0], a = n[1], c = Object(b.l)().data, o = Object(w.d)(null === c || void 0 === c ? void 0 : c.locale);
          Object(b.g)(null === c || void 0 === c ? void 0 : c.regionalOneTrustScriptURL, null === c || void 0 === c ? void 0 : c.regionalOneTrustScriptDomainKey, null === c || void 0 === c ? void 0 : c.enableOneTrustAutoBlock);
          var p = Object(b.e)(null === c || void 0 === c ? void 0 : c.productId).data
            , h = Object(f.d)((function(e) {
              return e.getSelectedColour()
          }
          ))
            , O = Object(y.c)(null !== (e = null === p || void 0 === p ? void 0 : p.variants) && void 0 !== e ? e : [], o, h, null === c || void 0 === c ? void 0 : c.finance).filter((function(e) {
              return e.isSuccess
          }
          )).map((function(e) {
              return e.data
          }
          ))
            , E = Object(f.d)((function(e) {
              return e.getSelectedVariant()
          }
          ))
            , I = Object(f.d)()
            , T = I.setSelectedColourIndex
            , A = I.setSelectedVariantIndex
            , M = I.model
            , k = I.getSelectedVariant
            , R = I.setTotalFrames
            , P = Object(f.c)()
            , F = P.mileageIndex
            , D = P.repaymentTimeIndex
            , N = P.mileages
            , B = P.setMileages
            , H = P.setMileageIndex
            , z = P.setDeposit
            , V = P.calculateQueryParams
            , U = P.depositAmount
            , W = P.setFinanceSettings
            , Y = P.setFinanceTerm
            , G = P.financeTerm
            , Z = P.useAlternateData
            , K = P.setRepaymentTimes
            , X = P.setRepaymentTimeIndex
            , q = P.setSelectedOffer
            , Q = P.setSelectedOfferIndex
            , J = P.selectedOfferIndex
            , $ = P.setFinanceQueryParams
            , ee = P.setCalculateQueryParams
            , te = P.setServicingCost
            , ne = P.setIsServicingIncluded
            , re = P.setUseAlternateData
            , ie = P.upsertVariantOffer
            , ae = O.length ? O.map((function(e) {
              return "||id:".concat(null === e || void 0 === e ? void 0 : e.id, "|code:").concat(null === e || void 0 === e ? void 0 : e.financeCode)
          }
          )).reduce((function(e, t) {
              return e + t
          }
          )) : "";
          Object(r.useEffect)((function() {
              O.forEach((function(e) {
                  e && ie(e.id, e.offer)
              }
              ))
          }
          ), [ae]),
          Object(b.a)(null === c || void 0 === c ? void 0 : c.productId, null === E || void 0 === E ? void 0 : E.id);
          var ce = Object(x.a)(V, Z).data
            , oe = {
              financeCodes: null === E || void 0 === E ? void 0 : E.financeCode,
              basePrices: null === E || void 0 === E ? void 0 : E.price,
              regionCode: o
          }
            , le = Object(r.useState)(!1)
            , se = Object(s.a)(le, 2)
            , de = se[0]
            , ue = se[1]
            , be = Object(b.d)(oe, null === c || void 0 === c ? void 0 : c.finance).data
            , fe = null === be || void 0 === be ? void 0 : be.financingOptions[J]
            , me = Object(f.b)()
            , pe = me.isAEM
            , je = me.setFinance
            , he = me.setI18n
            , Oe = me.setIsAEM
            , ve = me.setIsPDFLoading
            , Ce = me.setIsAEMIframe
            , ge = Object(L.a)()
            , xe = window.location !== window.parent.location;
          Object(r.useEffect)((function() {
              window.addEventListener("keydown", j),
              Oe(ge),
              Ce(xe),
              ve(!1)
          }
          ), [ge, pe]),
          Object(r.useEffect)((function() {
              if (c && E) {
                  var e = Object(m.r)(c, E, fe, Z);
                  je(e)
              }
          }
          ), [c, E, fe, Z]);
          var ye = null === ce || void 0 === ce ? void 0 : ce.otrPrice;
          Object(r.useEffect)((function() {
              var e;
              if (fe) {
                  var t, n, r, i = fe.mileageOptions, a = fe.termOptions, o = fe.defaultDepositPercent, l = fe.financeDepositAmount, s = function(e) {
                      return e ? e.split(",").map(Number) : []
                  };
                  fe.financeTerm ? (void 0 === G && Y(fe.financeTerm),
                  void 0 === D && X(s(a).indexOf(fe.financeTerm))) : (void 0 === G && Y(s(a)[0]),
                  void 0 === D && X(0)),
                  void 0 === U && z(l, o);
                  var d = null !== (t = null === c || void 0 === c || null === (n = c.finance) || void 0 === n || null === (r = n.termSlidersAvailableFinanceTypes) || void 0 === r ? void 0 : r.includes(fe.financeType)) && void 0 !== t && t;
                  B(s(i)),
                  K(s(a), d),
                  q(fe)
              } else
                  null !== be && void 0 !== be && null !== (e = be.financingOptions) && void 0 !== e && e.length && J >= be.financingOptions.length && Q(0)
          }
          ), [null === fe || void 0 === fe ? void 0 : fe.termOptions, null === fe || void 0 === fe ? void 0 : fe.mileageOptions, null === fe || void 0 === fe ? void 0 : fe.financeTerm]),
          Object(r.useEffect)((function() {
              if (fe && ye) {
                  var e = fe.defaultDepositPercent
                    , t = fe.maxDepositPercent
                    , n = Object(m.i)(ye, e)
                    , r = Math.floor(t / 100 * ye);
                  z(n > r ? r : n, e)
              }
          }
          ), [null === fe || void 0 === fe ? void 0 : fe.financeCode, null === fe || void 0 === fe ? void 0 : fe.defaultDepositPercent, null === E || void 0 === E ? void 0 : E.id]),
          Object(r.useEffect)((function() {
              if (null !== c && void 0 !== c && c.finance) {
                  var e, t = c.finance.showServicingCheckbox || 0;
                  W(c.finance),
                  te(t),
                  re(null !== (e = window.api.enableAlternateFinanceJavascriptUrl) && void 0 !== e && e)
              }
              null !== c && void 0 !== c && c.numberOfAngles && R(null === c || void 0 === c ? void 0 : c.numberOfAngles),
              null !== c && void 0 !== c && c.i18n && he(null === c || void 0 === c ? void 0 : c.i18n)
          }
          ), [!!c]),
          Object(r.useEffect)((function() {
              oe && oe.basePrices && oe.regionCode && !de && (ue(!0),
              $(oe))
          }
          ), [oe]);
          var we, Le = Object(f.a)(), _e = Le.selectedAccessories, Se = Le.categories, Ee = (we = _e) && 0 !== we.length ? we.map((function(e) {
              return e.id
          }
          )).reduce((function(e, t) {
              return e + t
          }
          )) : "";
          Object(r.useEffect)((function() {
              var e, t, n = Object(m.h)(null !== (e = null === E || void 0 === E ? void 0 : E.price) && void 0 !== e ? e : 0, null !== (t = null === E || void 0 === E ? void 0 : E.price2) && void 0 !== t ? t : 0, null !== h && void 0 !== h ? h : null, o, U, fe);
              ee(n)
          }
          ), [Ee, o, F, D, null === E || void 0 === E ? void 0 : E.id, null === h || void 0 === h ? void 0 : h.id, U, J, null === fe || void 0 === fe ? void 0 : fe.financeCode, null === fe || void 0 === fe ? void 0 : fe.financeType]);
          var Ie = Object(_.c)().data;
          Object(r.useEffect)((function() {
              var e;
              if (Ie) {
                  var t = Ie.colour
                    , n = Ie.variant
                    , r = Ie.accessories
                    , c = Ie.annualMileage
                    , o = Ie.financeDepositAmount
                    , s = Ie.financeType
                    , d = Ie.appliedServicing
                    , u = null !== (e = null === M || void 0 === M ? void 0 : M.variants) && void 0 !== e ? e : [];
                  if (n && !i.hasLoadedVariant) {
                      var b = u.findIndex((function(e) {
                          return e.id === n
                      }
                      ));
                      -1 !== b && (A(b),
                      a((function(e) {
                          return Object(l.a)(Object(l.a)({}, e), {}, {
                              hasLoadedVariant: !0
                          })
                      }
                      )))
                  }
                  if (t && !i.hasLoadedColour) {
                      var f, m, p = (null !== (f = null === (m = k()) || void 0 === m ? void 0 : m.colours) && void 0 !== f ? f : []).findIndex((function(e) {
                          return e.id === t
                      }
                      ));
                      -1 !== p && (T(p),
                      a((function(e) {
                          return Object(l.a)(Object(l.a)({}, e), {}, {
                              hasLoadedColour: !0
                          })
                      }
                      )))
                  }
                  if (r && Se.length && !i.hasLoadedAccessories) {
                      for (var j = 0; j < r.length; j++) {
                          var h = Object(g.h)(r[j]);
                          Object(g.d)(h)
                      }
                      a((function(e) {
                          return Object(l.a)(Object(l.a)({}, e), {}, {
                              hasLoadedAccessories: !0
                          })
                      }
                      ))
                  }
                  if (!i.hasLoadedFinance) {
                      if (s && be) {
                          var O = be.financingOptions.findIndex((function(e) {
                              return e.financeType === s
                          }
                          ));
                          if (-1 !== O) {
                              var v = be.financingOptions[O];
                              Q(O),
                              q(v)
                          }
                      }
                      if (c && N && H(N.indexOf(c)),
                      o) {
                          var C, x, y = null !== (C = null !== (x = null === fe || void 0 === fe ? void 0 : fe.otrPrice) && void 0 !== x ? x : null === fe || void 0 === fe ? void 0 : fe.defaultDepositPercent) && void 0 !== C ? C : 0;
                          z(o, y)
                      }
                      ne(null !== d && void 0 !== d && d),
                      a((function(e) {
                          return Object(l.a)(Object(l.a)({}, e), {}, {
                              hasLoadedFinance: !0
                          })
                      }
                      ))
                  }
              }
          }
          ), [p, be, Se.length, Ie]);
          var Te = p && c;
          return Object(S.jsx)(d.a, {
              theme: C.a,
              children: Te ? Object(S.jsx)(r.Suspense, {
                  fallback: Object(S.jsx)(v.n, {}),
                  children: Object(S.jsx)(u.a, {
                      children: Object(S.jsx)(v.t, {})
                  })
              }) : Object(S.jsx)(v.n, {})
          })
      }
        , I = function(e) {
          e && e instanceof Function && n.e(3).then(n.bind(null, 679)).then((function(t) {
              var n = t.getCLS
                , r = t.getFID
                , i = t.getFCP
                , a = t.getLCP
                , c = t.getTTFB;
              n(e),
              r(e),
              i(e),
              a(e),
              c(e)
          }
          ))
      };
      Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
      var T, A, M = n(25), k = n(33).a.div(T || (T = Object(M.a)(["\n    @font-face {\n        font-family: 'local-proxima-nova-extra-condensed';\n        src: url('", "Assets/mc-spa/fonts/ProximaNovaExCn-RegWeb.woff') format('woff');\n        font-weight: 400;\n    }\n    @font-face {\n        font-family: 'local-proxima-nova-extra-condensed';\n        src: url('", "Assets/mc-spa/fonts/ProximaNovaExCn-LightWeb.woff') format('woff');\n        font-weight: 300;\n    }\n    @font-face {\n        font-family: 'glyphs14';\n        src: url('", "Assets/mc-spa/fonts/14px-honda.woff') format('woff');\n        font-weight: normal;\n        font-style: normal;\n        font-display: block;\n    }\n\n    @font-face {\n        font-family: 'ProximaNovaExCnLight';\n        src: url('", "Assets/mc-spa/fonts/ProximaNovaExCn-LightWeb.woff') format('woff');\n        font-weight: 400;\n    }\n\n    @font-face {\n        font-family: 'ProximaNovaExCnSReg';\n        src: url('", "Assets/mc-spa/fonts/ProximaNovaExCn-RegWeb.woff') format('woff');\n        font-weight: 400;\n    }\n\n    @font-face {\n        font-family: 'ProximaNovaExCnSBold';\n        src: url('", "Assets/mc-spa/fonts/ProximaNovaExCn-SboldWeb.woff') format('woff');\n        font-weight: 400;\n    }\n"])), (function(e) {
          return e.URL
      }
      ), (function(e) {
          return e.URL
      }
      ), (function(e) {
          return e.URL
      }
      ), (function(e) {
          return e.URL
      }
      ), (function(e) {
          return e.URL
      }
      ), (function(e) {
          return e.URL
      }
      )), R = (n(668),
      n(159));
      window.api && window.api.baseUrl && (A = window.api.baseUrl);
      var P = new i.a;
      o.a.render(Object(S.jsxs)(r.StrictMode, {
          children: [Object(S.jsx)("link", {
              rel: "stylesheet",
              href: "https://use.typekit.net/waa1dri.css"
          }), Object(S.jsx)(k, {
              URL: A
          }), Object(S.jsx)(a.a, {
              client: P,
              children: Object(S.jsx)(R.b, {
                  children: Object(S.jsx)(E, {})
              })
          })]
      }), document.getElementById("root")),
      "serviceWorker"in navigator && navigator.serviceWorker.ready.then((function(e) {
          e.unregister()
      }
      )).catch((function(e) {
          console.error(e.message)
      }
      )),
      I()
  },
  68: function(e, t, n) {
      "use strict";
      n.d(t, "b", (function() {
          return u
      }
      )),
      n.d(t, "c", (function() {
          return b
      }
      ));
      var r = n(3)
        , i = n(20)
        , a = n(26)
        , c = n(341)
        , o = n(49)
        , l = n(46)
        , s = function(e, t) {
          var n = Object(r.a)({}, e);
          for (var i in t) {
              var a = t[i];
              void 0 === n[i] && (n[i] = null !== a && void 0 !== a ? a : n[i])
          }
          return n
      }
        , d = Object.freeze({
          UMBRACO_CONFIG: "UMBRACO_CONFIG",
          UMBRACO_CONFIG_I18N: "UMBRACO_CONFIG_I18N",
          LOAD_SAVED_CONFIG: "LOAD_SAVED_CONFIG"
      })
        , u = function() {
          return Object(c.a)(d.UMBRACO_CONFIG_I18N, f)
      }
        , b = function() {
          return Object(c.a)(d.LOAD_SAVED_CONFIG, j)
      }
        , f = function() {
          var e = Object(a.a)(Object(i.a)().mark((function e() {
              var t;
              return Object(i.a)().wrap((function(e) {
                  for (; ; )
                      switch (e.prev = e.next) {
                      case 0:
                          return e.next = 2,
                          m();
                      case 2:
                          return t = e.sent,
                          e.abrupt("return", t.i18n);
                      case 4:
                      case "end":
                          return e.stop()
                      }
              }
              ), e)
          }
          )));
          return function() {
              return e.apply(this, arguments)
          }
      }()
        , m = function() {
          var e = Object(a.a)(Object(i.a)().mark((function e() {
              var t, n, a, c, o, l, d, u, b, f, m;
              return Object(i.a)().wrap((function(e) {
                  for (; ; )
                      switch (e.prev = e.next) {
                      case 0:
                          return e.next = 2,
                          p();
                      case 2:
                          return b = e.sent,
                          f = {
                              accessory_added: null !== (t = b.i18n.accessory_added) && void 0 !== t ? t : "ACCESSORY_ADDED",
                              accessory_preview_add: b.i18n.accessory_add,
                              pack_add: b.i18n.accessory_add,
                              pack_add_accessories: b.i18n.accessory_add_accessories,
                              pack_remove: b.i18n.accessory_remove,
                              pack_accordion_expand: b.i18n.view_pack_contents,
                              back: b.i18n.back,
                              prev: null !== (n = b.i18n.accessory_prev) && void 0 !== n ? n : "ACCESSORY_PREV",
                              next: null !== (a = b.i18n.accessory_next) && void 0 !== a ? a : "ACCESSORY_NEXT",
                              configurator_title: "CONFIGURATOR_TITLE",
                              configurator_description: "CONFIGURATOR_DESCRIPTION",
                              configurator_add_configuration: "CONFIGURATOR_ADD_CONFIGURATION",
                              legal_footnote: null !== (c = b.i18n.legal_footnote) && void 0 !== c ? c : "",
                              legal_footnote_randomly_selected: null !== (o = b.i18n.legal_footnote_randomly_selected) && void 0 !== o ? o : [],
                              onwardlink_bike_brochure: null !== (l = b.i18n.onwardlink_bike_brochure) && void 0 !== l ? l : "ACCESSORIES_BROCHURE",
                              short_price_unavailable: null !== (d = b.i18n.short_price_unavailable) && void 0 !== d ? d : "N/A",
                              short_drag_to_spin_label: null !== (u = b.i18n.short_drag_to_spin_label) && void 0 !== u ? u : "360\xb0",
                              understood_label: "I Understand"
                          },
                          m = s(b.i18n, f),
                          e.abrupt("return", Object(r.a)(Object(r.a)({}, b), {}, {
                              i18n: m
                          }));
                      case 6:
                      case "end":
                          return e.stop()
                      }
              }
              ), e)
          }
          )));
          return function() {
              return e.apply(this, arguments)
          }
      }()
        , p = function() {
          var e = Object(a.a)(Object(i.a)().mark((function e() {
              var t, n;
              return Object(i.a)().wrap((function(e) {
                  for (; ; )
                      switch (e.prev = e.next) {
                      case 0:
                          if (!window.initialState) {
                              e.next = 2;
                              break
                          }
                          return e.abrupt("return", window.initialState);
                      case 2:
                          return e.next = 4,
                          o.a.get(l.a.UMBRACO_CONFIG);
                      case 4:
                          return t = e.sent,
                          n = t.data,
                          e.abrupt("return", n);
                      case 7:
                      case "end":
                          return e.stop()
                      }
              }
              ), e)
          }
          )));
          return function() {
              return e.apply(this, arguments)
          }
      }()
        , j = function() {
          var e = Object(a.a)(Object(i.a)().mark((function e() {
              var t, n, r, a, c, l, s;
              return Object(i.a)().wrap((function(e) {
                  for (; ; )
                      switch (e.prev = e.next) {
                      case 0:
                          if (n = new URLSearchParams(document.location.search),
                          r = n.get("load"),
                          a = null === (t = window.api) || void 0 === t ? void 0 : t.load,
                          !r || !a) {
                              e.next = 10;
                              break
                          }
                          return e.next = 6,
                          o.a.get("".concat(a, "/").concat(r));
                      case 6:
                          if (200 !== (c = e.sent).status) {
                              e.next = 10;
                              break
                          }
                          return l = c.data,
                          e.abrupt("return", l);
                      case 10:
                          return e.next = 12,
                          p();
                      case 12:
                          return s = e.sent,
                          e.abrupt("return", s.config);
                      case 14:
                      case "end":
                          return e.stop()
                      }
              }
              ), e)
          }
          )));
          return function() {
              return e.apply(this, arguments)
          }
      }();
      t.a = function() {
          return Object(c.a)(d.UMBRACO_CONFIG, m)
      }
  },
  70: function(e, t, n) {
      "use strict";
      var r = window.RenderLibraryClientAPI
        , i = n(161);
      t.a = function(e, t, n, a, c) {
          var o = i.a[n] || n
            , l = []
            , s = a || 36
            , d = null !== c && void 0 !== c ? c : "grey";
          if ("360" === t)
              for (var u = Math.floor(360 / s), b = 0; b <= s; b++) {
                  var f = u * b;
                  l.push({
                      angle: "".concat(f, "x0x").concat(10),
                      imageFormat: o,
                      imageOptions: [d]
                  })
              }
          else if ("rider" === t)
              l.push({
                  angle: "angle09",
                  imageFormat: o,
                  imageOptions: [d]
              });
          else if ("number" === typeof t) {
              var m = Math.floor(360 / s) * t;
              l.push({
                  angle: "".concat(m, "x0x").concat(10),
                  imageFormat: o,
                  imageOptions: [d]
              })
          }
          return (r ? r.requestImageSet(e, l) : []).map((function(e) {
              return e.imageUrl
          }
          ))
      }
  },
  91: function(e, t, n) {
      "use strict";
      n.d(t, "d", (function() {
          return h
      }
      )),
      n.d(t, "c", (function() {
          return v
      }
      )),
      n.d(t, "b", (function() {
          return y
      }
      ));
      n(3);
      var r = n(20)
        , i = n(26)
        , a = n(341)
        , c = n(49)
        , o = n(46)
        , l = n(5)
        , s = n(138)
        , d = n(156)
        , u = n(10)
        , b = n(678);
      var f = n(38)
        , m = Object.freeze({
          FINANCING_OPTIONS: "FINANCING_OPTIONS"
      })
        , p = function(e) {
          if (e && e.financeCodes && e.regionCode && "FR" !== e.regionCode) {
              var t = e.financeCodes;
              if ("string" === typeof t && t.length > 1)
                  return !0;
              if (t > 0)
                  return !0
          }
          return !1
      }
        , j = function(e, t) {
          return !!(e && e.basePrices && t && s.a)
      }
        , h = function(e, t) {
          var n, r, i, c = null === t || void 0 === t ? void 0 : t.locale, o = (null === (n = window.api) || void 0 === n ? void 0 : n.enableAlternateFinanceJavascriptUrl) || l.c.getState().useAlternateData, s = Object(f.d)(c), d = {
              basePrices: null !== (r = null === e || void 0 === e ? void 0 : e.price) && void 0 !== r ? r : 0,
              financeCodes: null === e || void 0 === e ? void 0 : e.financeCode,
              regionCode: s
          }, u = (p(d) || j(d, o)) && !!t && !0 !== (null === (i = t.finance.externalFinanceCalculator) || void 0 === i ? void 0 : i.enabled) && !!e;
          return Object(a.a)([m.FINANCING_OPTIONS, d], (function() {
              return O(d, o, null === t || void 0 === t ? void 0 : t.finance)
          }
          ), {
              enabled: u
          })
      }
        , O = function() {
          var e = Object(i.a)(Object(r.a)().mark((function e(t, n, i) {
              var a, u, b, f, m, p, j, h, O, v, C, g, x;
              return Object(r.a)().wrap((function(e) {
                  for (; ; )
                      switch (e.prev = e.next) {
                      case 0:
                          if (!n) {
                              e.next = 10;
                              break
                          }
                          return u = t.basePrices || 0,
                          b = .25 * u,
                          f = l.c.getState().selectedRepaymentTime() || 48,
                          m = {
                              amount: u,
                              deposit: b,
                              duration: f
                          },
                          e.next = 7,
                          s.b.calculate(m);
                      case 7:
                          return p = e.sent,
                          j = Object(d.a)(p),
                          e.abrupt("return", j);
                      case 10:
                          return h = o.a.FINANCING_OPTIONS,
                          null !== (a = window.api) && void 0 !== a && a.financingOptions && (h = window.api.financingOptions),
                          O = t.basePrices,
                          v = t.financeCodes,
                          C = {
                              basePrices: O,
                              financeCodes: v
                          },
                          e.next = 16,
                          c.a.get(h, {
                              params: C
                          });
                      case 16:
                          return g = e.sent,
                          x = g.data,
                          i && (x.financingOptions = x.financingOptions.filter((function(e) {
                              return i.availableFinanceTypes.find((function(t) {
                                  return t === e.financeType
                              }
                              ))
                          }
                          )).sort((function(e, t) {
                              return i.financeTypesDisplay.findIndex((function(t) {
                                  return t.financeType === e.financeType
                              }
                              )) - i.financeTypesDisplay.findIndex((function(e) {
                                  return e.financeType === t.financeType
                              }
                              ))
                          }
                          ))),
                          e.abrupt("return", x);
                      case 20:
                      case "end":
                          return e.stop()
                      }
              }
              ), e)
          }
          )));
          return function(t, n, r) {
              return e.apply(this, arguments)
          }
      }()
        , v = (t.a = function(e, t) {
          var n, r, i = (null === (n = window.api) || void 0 === n ? void 0 : n.enableAlternateFinanceJavascriptUrl) || l.c.getState().useAlternateData, c = (p(e) || j(e, i)) && !!t && !(null !== (r = t.externalFinanceCalculator) && void 0 !== r && r.enabled);
          return Object(a.a)([m.FINANCING_OPTIONS, e, t], (function() {
              return O(e, i, t)
          }
          ), {
              enabled: c
          })
      }
      ,
      function(e, t, n, r) {
          var i;
          return i = e.map((function(e) {
              var i, a = e.colours.find((function(e) {
                  return e.id === (null === n || void 0 === n ? void 0 : n.id)
              }
              ));
              return !a && e.colours.length > 0 && (a = e.colours[0]),
              {
                  queryKey: ["variant", e.id, null !== (i = null === n || void 0 === n ? void 0 : n.id) && void 0 !== i ? i : ""],
                  queryFn: function() {
                      return C(e, t, r, a)
                  },
                  enabled: !!n && !!r
              }
          }
          )),
          Object(b.a)(i)
      }
      )
        , C = function() {
          var e = Object(i.a)(Object(r.a)().mark((function e(t, n, i, a) {
              var c, o;
              return Object(r.a)().wrap((function(e) {
                  for (; ; )
                      switch (e.prev = e.next) {
                      case 0:
                          if (a) {
                              e.next = 2;
                              break
                          }
                          throw new Error("Colour is required");
                      case 2:
                          return c = t.financeCode,
                          n.includes("ES") && (t.colours.find((function(e) {
                              return e.id === a.id
                          }
                          )) ? a.financeCode && (c = a.financeCode) : t.colours.length && t.colours[0].financeCode && (c = t.colours[0].financeCode)),
                          e.next = 6,
                          g(t, n, c, i);
                      case 6:
                          return o = e.sent,
                          e.abrupt("return", {
                              id: t.id,
                              offer: o,
                              financeCode: c
                          });
                      case 8:
                      case "end":
                          return e.stop()
                      }
              }
              ), e)
          }
          )));
          return function(t, n, r, i) {
              return e.apply(this, arguments)
          }
      }()
        , g = function() {
          var e = Object(i.a)(Object(r.a)().mark((function e(t, n, i, a) {
              var c, o, s, d, b, f;
              return Object(r.a)().wrap((function(e) {
                  for (; ; )
                      switch (e.prev = e.next) {
                      case 0:
                          if (!(Object(u.a)(t) && !(null !== (c = a.externalFinanceCalculator) && void 0 !== c && c.enabled))) {
                              e.next = 18;
                              break
                          }
                          return e.prev = 2,
                          d = (null === (o = window.api) || void 0 === o ? void 0 : o.enableAlternateFinanceJavascriptUrl) || l.c.getState().useAlternateData,
                          b = {
                              productType: "bikes",
                              regionCode: n,
                              financeCodes: i,
                              basePrices: null !== (s = t.price) && void 0 !== s ? s : ""
                          },
                          e.next = 7,
                          O(b, d);
                      case 7:
                          if (!((f = e.sent).financingOptions.length > 0)) {
                              e.next = 12;
                              break
                          }
                          return e.abrupt("return", f);
                      case 12:
                          console.warn("Unable to retrieve financed offers for ".concat(t.id, "/").concat(i, ". Will fallback to configured price."));
                      case 13:
                          e.next = 18;
                          break;
                      case 15:
                          e.prev = 15,
                          e.t0 = e.catch(2),
                          console.error("Error while trying to retrieve financed offers for ".concat(t.id, "/").concat(i, ". Will fallback to configured price."));
                      case 18:
                          return e.abrupt("return", {
                              financingOptions: [{
                                  otrPrice: x(t)
                              }]
                          });
                      case 19:
                      case "end":
                          return e.stop()
                      }
              }
              ), e, null, [[2, 15]])
          }
          )));
          return function(t, n, r, i) {
              return e.apply(this, arguments)
          }
      }()
        , x = function(e) {
          var t, n = l.d.getState().getSelectedColour(), r = null !== (t = null === n || void 0 === n ? void 0 : n.price) && void 0 !== t ? t : 0, i = e.price;
          return void 0 === i ? i : i + (null !== r && void 0 !== r ? r : 0)
      }
        , y = function(e) {
          return e.filter((function(e) {
              return "financeMonthlyPrice"in e
          }
          )).reduce((function(e, t) {
              return e.financeMonthlyPrice < t.financeMonthlyPrice ? e : t
          }
          ))
      }
  }
}, [[669, 1, 2]]]);
//# sourceMappingURL=main.5f422ea3.chunk.js.map
