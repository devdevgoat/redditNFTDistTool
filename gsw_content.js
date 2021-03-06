/*! For license information please see index.js.LICENSE.txt */
(() => {
    var e = {
            65531: (e, t, r) => {
                "use strict";
                var n = r(87082),
                    o = r(29255);
                function i(e) {
                    return (i =
                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                            ? function (e) {
                                  return typeof e;
                              }
                            : function (e) {
                                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                              })(e);
                }
                var a,
                    c,
                    s = r(52109).codes,
                    u = s.ERR_AMBIGUOUS_ARGUMENT,
                    l = s.ERR_INVALID_ARG_TYPE,
                    f = s.ERR_INVALID_ARG_VALUE,
                    p = s.ERR_INVALID_RETURN_VALUE,
                    g = s.ERR_MISSING_ARGS,
                    y = r(79369),
                    m = r(84709).inspect,
                    d = r(84709).types,
                    A = d.isPromise,
                    b = d.isRegExp,
                    h = Object.assign ? Object.assign : r(62566).assign,
                    v = Object.is ? Object.is : r(92327);
                function E() {
                    var e = r(2061);
                    (a = e.isDeepEqual), (c = e.isDeepStrictEqual);
                }
                var w = !1,
                    x = (e.exports = _),
                    S = {};
                function O(e) {
                    if (e.message instanceof Error) throw e.message;
                    throw new y(e);
                }
                function j(e, t, r, n) {
                    if (!r) {
                        var o = !1;
                        if (0 === t) (o = !0), (n = "No value argument passed to `assert.ok()`");
                        else if (n instanceof Error) throw n;
                        var i = new y({ actual: r, expected: !0, message: n, operator: "==", stackStartFn: e });
                        throw ((i.generatedMessage = o), i);
                    }
                }
                function _() {
                    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                    j.apply(void 0, [_, t.length].concat(t));
                }
                (x.fail = function e(t, r, i, a, c) {
                    var s,
                        u = arguments.length;
                    if (0 === u) s = "Failed";
                    else if (1 === u) (i = t), (t = void 0);
                    else {
                        if (!1 === w) {
                            w = !0;
                            var l = n.emitWarning ? n.emitWarning : o.warn.bind(o);
                            l("assert.fail() with more than one argument is deprecated. Please use assert.strictEqual() instead or only pass a message.", "DeprecationWarning", "DEP0094");
                        }
                        2 === u && (a = "!=");
                    }
                    if (i instanceof Error) throw i;
                    var f = { actual: t, expected: r, operator: void 0 === a ? "fail" : a, stackStartFn: c || e };
                    void 0 !== i && (f.message = i);
                    var p = new y(f);
                    throw (s && ((p.message = s), (p.generatedMessage = !0)), p);
                }),
                    (x.AssertionError = y),
                    (x.ok = _),
                    (x.equal = function e(t, r, n) {
                        if (arguments.length < 2) throw new g("actual", "expected");
                        t != r && O({ actual: t, expected: r, message: n, operator: "==", stackStartFn: e });
                    }),
                    (x.notEqual = function e(t, r, n) {
                        if (arguments.length < 2) throw new g("actual", "expected");
                        t == r && O({ actual: t, expected: r, message: n, operator: "!=", stackStartFn: e });
                    }),
                    (x.deepEqual = function e(t, r, n) {
                        if (arguments.length < 2) throw new g("actual", "expected");
                        void 0 === a && E(), a(t, r) || O({ actual: t, expected: r, message: n, operator: "deepEqual", stackStartFn: e });
                    }),
                    (x.notDeepEqual = function e(t, r, n) {
                        if (arguments.length < 2) throw new g("actual", "expected");
                        void 0 === a && E(), a(t, r) && O({ actual: t, expected: r, message: n, operator: "notDeepEqual", stackStartFn: e });
                    }),
                    (x.deepStrictEqual = function e(t, r, n) {
                        if (arguments.length < 2) throw new g("actual", "expected");
                        void 0 === a && E(), c(t, r) || O({ actual: t, expected: r, message: n, operator: "deepStrictEqual", stackStartFn: e });
                    }),
                    (x.notDeepStrictEqual = function e(t, r, n) {
                        if (arguments.length < 2) throw new g("actual", "expected");
                        void 0 === a && E();
                        c(t, r) && O({ actual: t, expected: r, message: n, operator: "notDeepStrictEqual", stackStartFn: e });
                    }),
                    (x.strictEqual = function e(t, r, n) {
                        if (arguments.length < 2) throw new g("actual", "expected");
                        v(t, r) || O({ actual: t, expected: r, message: n, operator: "strictEqual", stackStartFn: e });
                    }),
                    (x.notStrictEqual = function e(t, r, n) {
                        if (arguments.length < 2) throw new g("actual", "expected");
                        v(t, r) && O({ actual: t, expected: r, message: n, operator: "notStrictEqual", stackStartFn: e });
                    });
                var P = function e(t, r, n) {
                    var o = this;
                    !(function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                        r.forEach(function (e) {
                            e in t && (void 0 !== n && "string" == typeof n[e] && b(t[e]) && t[e].test(n[e]) ? (o[e] = n[e]) : (o[e] = t[e]));
                        });
                };
                function R(e, t, r, n, o, i) {
                    if (!(r in e) || !c(e[r], t[r])) {
                        if (!n) {
                            var a = new P(e, o),
                                s = new P(t, o, e),
                                u = new y({ actual: a, expected: s, operator: "deepStrictEqual", stackStartFn: i });
                            throw ((u.actual = e), (u.expected = t), (u.operator = i.name), u);
                        }
                        O({ actual: e, expected: t, message: n, operator: i.name, stackStartFn: i });
                    }
                }
                function T(e, t, r, n) {
                    if ("function" != typeof t) {
                        if (b(t)) return t.test(e);
                        if (2 === arguments.length) throw new l("expected", ["Function", "RegExp"], t);
                        if ("object" !== i(e) || null === e) {
                            var o = new y({ actual: e, expected: t, message: r, operator: "deepStrictEqual", stackStartFn: n });
                            throw ((o.operator = n.name), o);
                        }
                        var c = Object.keys(t);
                        if (t instanceof Error) c.push("name", "message");
                        else if (0 === c.length) throw new f("error", t, "may not be an empty object");
                        return (
                            void 0 === a && E(),
                            c.forEach(function (o) {
                                ("string" == typeof e[o] && b(t[o]) && t[o].test(e[o])) || R(e, t, o, r, c, n);
                            }),
                            !0
                        );
                    }
                    return (void 0 !== t.prototype && e instanceof t) || (!Error.isPrototypeOf(t) && !0 === t.call({}, e));
                }
                function I(e) {
                    if ("function" != typeof e) throw new l("fn", "Function", e);
                    try {
                        e();
                    } catch (e) {
                        return e;
                    }
                    return S;
                }
                function k(e) {
                    return A(e) || (null !== e && "object" === i(e) && "function" == typeof e.then && "function" == typeof e.catch);
                }
                function N(e) {
                    return Promise.resolve().then(function () {
                        var t;
                        if ("function" == typeof e) {
                            if (!k((t = e()))) throw new p("instance of Promise", "promiseFn", t);
                        } else {
                            if (!k(e)) throw new l("promiseFn", ["Function", "Promise"], e);
                            t = e;
                        }
                        return Promise.resolve()
                            .then(function () {
                                return t;
                            })
                            .then(function () {
                                return S;
                            })
                            .catch(function (e) {
                                return e;
                            });
                    });
                }
                function L(e, t, r, n) {
                    if ("string" == typeof r) {
                        if (4 === arguments.length) throw new l("error", ["Object", "Error", "Function", "RegExp"], r);
                        if ("object" === i(t) && null !== t) {
                            if (t.message === r) throw new u("error/message", 'The error message "'.concat(t.message, '" is identical to the message.'));
                        } else if (t === r) throw new u("error/message", 'The error "'.concat(t, '" is identical to the message.'));
                        (n = r), (r = void 0);
                    } else if (null != r && "object" !== i(r) && "function" != typeof r) throw new l("error", ["Object", "Error", "Function", "RegExp"], r);
                    if (t === S) {
                        var o = "";
                        r && r.name && (o += " (".concat(r.name, ")")), (o += n ? ": ".concat(n) : ".");
                        var a = "rejects" === e.name ? "rejection" : "exception";
                        O({ actual: void 0, expected: r, operator: e.name, message: "Missing expected ".concat(a).concat(o), stackStartFn: e });
                    }
                    if (r && !T(t, r, n, e)) throw t;
                }
                function C(e, t, r, n) {
                    if (t !== S) {
                        if (("string" == typeof r && ((n = r), (r = void 0)), !r || T(t, r))) {
                            var o = n ? ": ".concat(n) : ".",
                                i = "doesNotReject" === e.name ? "rejection" : "exception";
                            O({ actual: t, expected: r, operator: e.name, message: "Got unwanted ".concat(i).concat(o, "\n") + 'Actual message: "'.concat(t && t.message, '"'), stackStartFn: e });
                        }
                        throw t;
                    }
                }
                function U() {
                    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                    j.apply(void 0, [U, t.length].concat(t));
                }
                (x.throws = function e(t) {
                    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) n[o - 1] = arguments[o];
                    L.apply(void 0, [e, I(t)].concat(n));
                }),
                    (x.rejects = function e(t) {
                        for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) n[o - 1] = arguments[o];
                        return N(t).then(function (t) {
                            return L.apply(void 0, [e, t].concat(n));
                        });
                    }),
                    (x.doesNotThrow = function e(t) {
                        for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) n[o - 1] = arguments[o];
                        C.apply(void 0, [e, I(t)].concat(n));
                    }),
                    (x.doesNotReject = function e(t) {
                        for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) n[o - 1] = arguments[o];
                        return N(t).then(function (t) {
                            return C.apply(void 0, [e, t].concat(n));
                        });
                    }),
                    (x.ifError = function e(t) {
                        if (null != t) {
                            var r = "ifError got unwanted exception: ";
                            "object" === i(t) && "string" == typeof t.message ? (0 === t.message.length && t.constructor ? (r += t.constructor.name) : (r += t.message)) : (r += m(t));
                            var n = new y({ actual: t, expected: null, operator: "ifError", message: r, stackStartFn: e }),
                                o = t.stack;
                            if ("string" == typeof o) {
                                var a = o.split("\n");
                                a.shift();
                                for (var c = n.stack.split("\n"), s = 0; s < a.length; s++) {
                                    var u = c.indexOf(a[s]);
                                    if (-1 !== u) {
                                        c = c.slice(0, u);
                                        break;
                                    }
                                }
                                n.stack = "".concat(c.join("\n"), "\n").concat(a.join("\n"));
                            }
                            throw n;
                        }
                    }),
                    (x.strict = h(U, x, { equal: x.strictEqual, deepEqual: x.deepStrictEqual, notEqual: x.notStrictEqual, notDeepEqual: x.notDeepStrictEqual })),
                    (x.strict.strict = x.strict);
            },
            79369: (e, t, r) => {
                "use strict";
                var n = r(87082);
                function o(e, t, r) {
                    return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
                }
                function i(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
                    }
                }
                function a(e, t) {
                    return !t || ("object" !== g(t) && "function" != typeof t) ? c(e) : t;
                }
                function c(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e;
                }
                function s(e) {
                    var t = "function" == typeof Map ? new Map() : void 0;
                    return (
                        (s = function (e) {
                            if (null === e || ((r = e), -1 === Function.toString.call(r).indexOf("[native code]"))) return e;
                            var r;
                            if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
                            if (void 0 !== t) {
                                if (t.has(e)) return t.get(e);
                                t.set(e, n);
                            }
                            function n() {
                                return l(e, arguments, p(this).constructor);
                            }
                            return (n.prototype = Object.create(e.prototype, { constructor: { value: n, enumerable: !1, writable: !0, configurable: !0 } })), f(n, e);
                        }),
                        s(e)
                    );
                }
                function u() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
                    } catch (e) {
                        return !1;
                    }
                }
                function l(e, t, r) {
                    return (l = u()
                        ? Reflect.construct
                        : function (e, t, r) {
                              var n = [null];
                              n.push.apply(n, t);
                              var o = new (Function.bind.apply(e, n))();
                              return r && f(o, r.prototype), o;
                          }).apply(null, arguments);
                }
                function f(e, t) {
                    return (f =
                        Object.setPrototypeOf ||
                        function (e, t) {
                            return (e.__proto__ = t), e;
                        })(e, t);
                }
                function p(e) {
                    return (p = Object.setPrototypeOf
                        ? Object.getPrototypeOf
                        : function (e) {
                              return e.__proto__ || Object.getPrototypeOf(e);
                          })(e);
                }
                function g(e) {
                    return (g =
                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                            ? function (e) {
                                  return typeof e;
                              }
                            : function (e) {
                                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                              })(e);
                }
                var y = r(84709).inspect,
                    m = r(52109).codes.ERR_INVALID_ARG_TYPE;
                function d(e, t, r) {
                    return (void 0 === r || r > e.length) && (r = e.length), e.substring(r - t.length, r) === t;
                }
                var A = "",
                    b = "",
                    h = "",
                    v = "",
                    E = {
                        deepStrictEqual: "Expected values to be strictly deep-equal:",
                        strictEqual: "Expected values to be strictly equal:",
                        strictEqualObject: 'Expected "actual" to be reference-equal to "expected":',
                        deepEqual: "Expected values to be loosely deep-equal:",
                        equal: "Expected values to be loosely equal:",
                        notDeepStrictEqual: 'Expected "actual" not to be strictly deep-equal to:',
                        notStrictEqual: 'Expected "actual" to be strictly unequal to:',
                        notStrictEqualObject: 'Expected "actual" not to be reference-equal to "expected":',
                        notDeepEqual: 'Expected "actual" not to be loosely deep-equal to:',
                        notEqual: 'Expected "actual" to be loosely unequal to:',
                        notIdentical: "Values identical but not reference-equal:",
                    };
                function w(e) {
                    var t = Object.keys(e),
                        r = Object.create(Object.getPrototypeOf(e));
                    return (
                        t.forEach(function (t) {
                            r[t] = e[t];
                        }),
                        Object.defineProperty(r, "message", { value: e.message }),
                        r
                    );
                }
                function x(e) {
                    return y(e, { compact: !1, customInspect: !1, depth: 1e3, maxArrayLength: 1 / 0, showHidden: !1, breakLength: 1 / 0, showProxy: !1, sorted: !0, getters: !0 });
                }
                function S(e, t, r) {
                    var o = "",
                        i = "",
                        a = 0,
                        c = "",
                        s = !1,
                        u = x(e),
                        l = u.split("\n"),
                        f = x(t).split("\n"),
                        p = 0,
                        y = "";
                    if (("strictEqual" === r && "object" === g(e) && "object" === g(t) && null !== e && null !== t && (r = "strictEqualObject"), 1 === l.length && 1 === f.length && l[0] !== f[0])) {
                        var m = l[0].length + f[0].length;
                        if (m <= 10) {
                            if (!(("object" === g(e) && null !== e) || ("object" === g(t) && null !== t) || (0 === e && 0 === t))) return "".concat(E[r], "\n\n") + "".concat(l[0], " !== ").concat(f[0], "\n");
                        } else if ("strictEqualObject" !== r) {
                            if (m < (n.stderr && n.stderr.isTTY ? n.stderr.columns : 80)) {
                                for (; l[0][p] === f[0][p]; ) p++;
                                p > 2 &&
                                    ((y = "\n  ".concat(
                                        (function (e, t) {
                                            if (((t = Math.floor(t)), 0 == e.length || 0 == t)) return "";
                                            var r = e.length * t;
                                            for (t = Math.floor(Math.log(t) / Math.log(2)); t; ) (e += e), t--;
                                            return e + e.substring(0, r - e.length);
                                        })(" ", p),
                                        "^"
                                    )),
                                    (p = 0));
                            }
                        }
                    }
                    for (var w = l[l.length - 1], S = f[f.length - 1]; w === S && (p++ < 2 ? (c = "\n  ".concat(w).concat(c)) : (o = w), l.pop(), f.pop(), 0 !== l.length && 0 !== f.length); ) (w = l[l.length - 1]), (S = f[f.length - 1]);
                    var O = Math.max(l.length, f.length);
                    if (0 === O) {
                        var j = u.split("\n");
                        if (j.length > 30) for (j[26] = "".concat(A, "...").concat(v); j.length > 27; ) j.pop();
                        return "".concat(E.notIdentical, "\n\n").concat(j.join("\n"), "\n");
                    }
                    p > 3 && ((c = "\n".concat(A, "...").concat(v).concat(c)), (s = !0)), "" !== o && ((c = "\n  ".concat(o).concat(c)), (o = ""));
                    var _ = 0,
                        P = E[r] + "\n".concat(b, "+ actual").concat(v, " ").concat(h, "- expected").concat(v),
                        R = " ".concat(A, "...").concat(v, " Lines skipped");
                    for (p = 0; p < O; p++) {
                        var T = p - a;
                        if (l.length < p + 1)
                            T > 1 && p > 2 && (T > 4 ? ((i += "\n".concat(A, "...").concat(v)), (s = !0)) : T > 3 && ((i += "\n  ".concat(f[p - 2])), _++), (i += "\n  ".concat(f[p - 1])), _++),
                                (a = p),
                                (o += "\n".concat(h, "-").concat(v, " ").concat(f[p])),
                                _++;
                        else if (f.length < p + 1)
                            T > 1 && p > 2 && (T > 4 ? ((i += "\n".concat(A, "...").concat(v)), (s = !0)) : T > 3 && ((i += "\n  ".concat(l[p - 2])), _++), (i += "\n  ".concat(l[p - 1])), _++),
                                (a = p),
                                (i += "\n".concat(b, "+").concat(v, " ").concat(l[p])),
                                _++;
                        else {
                            var I = f[p],
                                k = l[p],
                                N = k !== I && (!d(k, ",") || k.slice(0, -1) !== I);
                            N && d(I, ",") && I.slice(0, -1) === k && ((N = !1), (k += ",")),
                                N
                                    ? (T > 1 && p > 2 && (T > 4 ? ((i += "\n".concat(A, "...").concat(v)), (s = !0)) : T > 3 && ((i += "\n  ".concat(l[p - 2])), _++), (i += "\n  ".concat(l[p - 1])), _++),
                                      (a = p),
                                      (i += "\n".concat(b, "+").concat(v, " ").concat(k)),
                                      (o += "\n".concat(h, "-").concat(v, " ").concat(I)),
                                      (_ += 2))
                                    : ((i += o), (o = ""), (1 !== T && 0 !== p) || ((i += "\n  ".concat(k)), _++));
                        }
                        if (_ > 20 && p < O - 2) return "".concat(P).concat(R, "\n").concat(i, "\n").concat(A, "...").concat(v).concat(o, "\n") + "".concat(A, "...").concat(v);
                    }
                    return ""
                        .concat(P)
                        .concat(s ? R : "", "\n")
                        .concat(i)
                        .concat(o)
                        .concat(c)
                        .concat(y);
                }
                var O = (function (e) {
                    function t(e) {
                        var r;
                        if (
                            ((function (e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                            })(this, t),
                            "object" !== g(e) || null === e)
                        )
                            throw new m("options", "Object", e);
                        var o = e.message,
                            i = e.operator,
                            s = e.stackStartFn,
                            u = e.actual,
                            l = e.expected,
                            f = Error.stackTraceLimit;
                        if (((Error.stackTraceLimit = 0), null != o)) r = a(this, p(t).call(this, String(o)));
                        else if (
                            (n.stderr && n.stderr.isTTY && (n.stderr && n.stderr.getColorDepth && 1 !== n.stderr.getColorDepth() ? ((A = "[34m"), (b = "[32m"), (v = "[39m"), (h = "[31m")) : ((A = ""), (b = ""), (v = ""), (h = ""))),
                            "object" === g(u) && null !== u && "object" === g(l) && null !== l && "stack" in u && u instanceof Error && "stack" in l && l instanceof Error && ((u = w(u)), (l = w(l))),
                            "deepStrictEqual" === i || "strictEqual" === i)
                        )
                            r = a(this, p(t).call(this, S(u, l, i)));
                        else if ("notDeepStrictEqual" === i || "notStrictEqual" === i) {
                            var y = E[i],
                                d = x(u).split("\n");
                            if (("notStrictEqual" === i && "object" === g(u) && null !== u && (y = E.notStrictEqualObject), d.length > 30)) for (d[26] = "".concat(A, "...").concat(v); d.length > 27; ) d.pop();
                            r = 1 === d.length ? a(this, p(t).call(this, "".concat(y, " ").concat(d[0]))) : a(this, p(t).call(this, "".concat(y, "\n\n").concat(d.join("\n"), "\n")));
                        } else {
                            var O = x(u),
                                j = "",
                                _ = E[i];
                            "notDeepEqual" === i || "notEqual" === i
                                ? (O = "".concat(E[i], "\n\n").concat(O)).length > 1024 && (O = "".concat(O.slice(0, 1021), "..."))
                                : ((j = "".concat(x(l))),
                                  O.length > 512 && (O = "".concat(O.slice(0, 509), "...")),
                                  j.length > 512 && (j = "".concat(j.slice(0, 509), "...")),
                                  "deepEqual" === i || "equal" === i ? (O = "".concat(_, "\n\n").concat(O, "\n\nshould equal\n\n")) : (j = " ".concat(i, " ").concat(j))),
                                (r = a(this, p(t).call(this, "".concat(O).concat(j))));
                        }
                        return (
                            (Error.stackTraceLimit = f),
                            (r.generatedMessage = !o),
                            Object.defineProperty(c(r), "name", { value: "AssertionError [ERR_ASSERTION]", enumerable: !1, writable: !0, configurable: !0 }),
                            (r.code = "ERR_ASSERTION"),
                            (r.actual = u),
                            (r.expected = l),
                            (r.operator = i),
                            Error.captureStackTrace && Error.captureStackTrace(c(r), s),
                            r.stack,
                            (r.name = "AssertionError"),
                            a(r)
                        );
                    }
                    var r, s, u;
                    return (
                        (function (e, t) {
                            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                            (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), t && f(e, t);
                        })(t, e),
                        (r = t),
                        (s = [
                            {
                                key: "toString",
                                value: function () {
                                    return "".concat(this.name, " [").concat(this.code, "]: ").concat(this.message);
                                },
                            },
                            {
                                key: y.custom,
                                value: function (e, t) {
                                    return y(
                                        this,
                                        (function (e) {
                                            for (var t = 1; t < arguments.length; t++) {
                                                var r = null != arguments[t] ? arguments[t] : {},
                                                    n = Object.keys(r);
                                                "function" == typeof Object.getOwnPropertySymbols &&
                                                    (n = n.concat(
                                                        Object.getOwnPropertySymbols(r).filter(function (e) {
                                                            return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                                        })
                                                    )),
                                                    n.forEach(function (t) {
                                                        o(e, t, r[t]);
                                                    });
                                            }
                                            return e;
                                        })({}, t, { customInspect: !1, depth: 0 })
                                    );
                                },
                            },
                        ]),
                        s && i(r.prototype, s),
                        u && i(r, u),
                        t
                    );
                })(s(Error));
                e.exports = O;
            },
            52109: (e, t, r) => {
                "use strict";
                function n(e) {
                    return (n =
                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                            ? function (e) {
                                  return typeof e;
                              }
                            : function (e) {
                                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                              })(e);
                }
                function o(e, t) {
                    return !t || ("object" !== n(t) && "function" != typeof t)
                        ? (function (e) {
                              if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                              return e;
                          })(e)
                        : t;
                }
                function i(e) {
                    return (i = Object.setPrototypeOf
                        ? Object.getPrototypeOf
                        : function (e) {
                              return e.__proto__ || Object.getPrototypeOf(e);
                          })(e);
                }
                function a(e, t) {
                    return (a =
                        Object.setPrototypeOf ||
                        function (e, t) {
                            return (e.__proto__ = t), e;
                        })(e, t);
                }
                var c,
                    s,
                    u = {};
                function l(e, t, r) {
                    r || (r = Error);
                    var n = (function (r) {
                        function n(r, a, c) {
                            var s;
                            return (
                                (function (e, t) {
                                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                                })(this, n),
                                (s = o(
                                    this,
                                    i(n).call(
                                        this,
                                        (function (e, r, n) {
                                            return "string" == typeof t ? t : t(e, r, n);
                                        })(r, a, c)
                                    )
                                )),
                                (s.code = e),
                                s
                            );
                        }
                        return (
                            (function (e, t) {
                                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                                (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), t && a(e, t);
                            })(n, r),
                            n
                        );
                    })(r);
                    u[e] = n;
                }
                function f(e, t) {
                    if (Array.isArray(e)) {
                        var r = e.length;
                        return (
                            (e = e.map(function (e) {
                                return String(e);
                            })),
                            r > 2 ? "one of ".concat(t, " ").concat(e.slice(0, r - 1).join(", "), ", or ") + e[r - 1] : 2 === r ? "one of ".concat(t, " ").concat(e[0], " or ").concat(e[1]) : "of ".concat(t, " ").concat(e[0])
                        );
                    }
                    return "of ".concat(t, " ").concat(String(e));
                }
                l("ERR_AMBIGUOUS_ARGUMENT", 'The "%s" argument is ambiguous. %s', TypeError),
                    l(
                        "ERR_INVALID_ARG_TYPE",
                        function (e, t, o) {
                            var i, a, s, u;
                            if (
                                (void 0 === c && (c = r(65531)),
                                c("string" == typeof e, "'name' must be a string"),
                                "string" == typeof t && ((a = "not "), t.substr(!s || s < 0 ? 0 : +s, a.length) === a) ? ((i = "must not be"), (t = t.replace(/^not /, ""))) : (i = "must be"),
                                (function (e, t, r) {
                                    return (void 0 === r || r > e.length) && (r = e.length), e.substring(r - t.length, r) === t;
                                })(e, " argument"))
                            )
                                u = "The ".concat(e, " ").concat(i, " ").concat(f(t, "type"));
                            else {
                                var l = (function (e, t, r) {
                                    return "number" != typeof r && (r = 0), !(r + t.length > e.length) && -1 !== e.indexOf(t, r);
                                })(e, ".")
                                    ? "property"
                                    : "argument";
                                u = 'The "'.concat(e, '" ').concat(l, " ").concat(i, " ").concat(f(t, "type"));
                            }
                            return (u += ". Received type ".concat(n(o)));
                        },
                        TypeError
                    ),
                    l(
                        "ERR_INVALID_ARG_VALUE",
                        function (e, t) {
                            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "is invalid";
                            void 0 === s && (s = r(84709));
                            var o = s.inspect(t);
                            return o.length > 128 && (o = "".concat(o.slice(0, 128), "...")), "The argument '".concat(e, "' ").concat(n, ". Received ").concat(o);
                        },
                        TypeError,
                        RangeError
                    ),
                    l(
                        "ERR_INVALID_RETURN_VALUE",
                        function (e, t, r) {
                            var o;
                            return (
                                (o = r && r.constructor && r.constructor.name ? "instance of ".concat(r.constructor.name) : "type ".concat(n(r))),
                                "Expected ".concat(e, ' to be returned from the "').concat(t, '"') + " function but got ".concat(o, ".")
                            );
                        },
                        TypeError
                    ),
                    l(
                        "ERR_MISSING_ARGS",
                        function () {
                            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                            void 0 === c && (c = r(65531)), c(t.length > 0, "At least one arg needs to be specified");
                            var o = "The ",
                                i = t.length;
                            switch (
                                ((t = t.map(function (e) {
                                    return '"'.concat(e, '"');
                                })),
                                i)
                            ) {
                                case 1:
                                    o += "".concat(t[0], " argument");
                                    break;
                                case 2:
                                    o += "".concat(t[0], " and ").concat(t[1], " arguments");
                                    break;
                                default:
                                    (o += t.slice(0, i - 1).join(", ")), (o += ", and ".concat(t[i - 1], " arguments"));
                            }
                            return "".concat(o, " must be specified");
                        },
                        TypeError
                    ),
                    (e.exports.codes = u);
            },
            2061: (e, t, r) => {
                "use strict";
                function n(e, t) {
                    return (
                        (function (e) {
                            if (Array.isArray(e)) return e;
                        })(e) ||
                        (function (e, t) {
                            var r = [],
                                n = !0,
                                o = !1,
                                i = void 0;
                            try {
                                for (var a, c = e[Symbol.iterator](); !(n = (a = c.next()).done) && (r.push(a.value), !t || r.length !== t); n = !0);
                            } catch (e) {
                                (o = !0), (i = e);
                            } finally {
                                try {
                                    n || null == c.return || c.return();
                                } finally {
                                    if (o) throw i;
                                }
                            }
                            return r;
                        })(e, t) ||
                        (function () {
                            throw new TypeError("Invalid attempt to destructure non-iterable instance");
                        })()
                    );
                }
                function o(e) {
                    return (o =
                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                            ? function (e) {
                                  return typeof e;
                              }
                            : function (e) {
                                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                              })(e);
                }
                var i = void 0 !== /a/g.flags,
                    a = function (e) {
                        var t = [];
                        return (
                            e.forEach(function (e) {
                                return t.push(e);
                            }),
                            t
                        );
                    },
                    c = function (e) {
                        var t = [];
                        return (
                            e.forEach(function (e, r) {
                                return t.push([r, e]);
                            }),
                            t
                        );
                    },
                    s = Object.is ? Object.is : r(92327),
                    u = Object.getOwnPropertySymbols
                        ? Object.getOwnPropertySymbols
                        : function () {
                              return [];
                          },
                    l = Number.isNaN ? Number.isNaN : r(84032);
                function f(e) {
                    return e.call.bind(e);
                }
                var p = f(Object.prototype.hasOwnProperty),
                    g = f(Object.prototype.propertyIsEnumerable),
                    y = f(Object.prototype.toString),
                    m = r(84709).types,
                    d = m.isAnyArrayBuffer,
                    A = m.isArrayBufferView,
                    b = m.isDate,
                    h = m.isMap,
                    v = m.isRegExp,
                    E = m.isSet,
                    w = m.isNativeError,
                    x = m.isBoxedPrimitive,
                    S = m.isNumberObject,
                    O = m.isStringObject,
                    j = m.isBooleanObject,
                    _ = m.isBigIntObject,
                    P = m.isSymbolObject,
                    R = m.isFloat32Array,
                    T = m.isFloat64Array;
                function I(e) {
                    if (0 === e.length || e.length > 10) return !0;
                    for (var t = 0; t < e.length; t++) {
                        var r = e.charCodeAt(t);
                        if (r < 48 || r > 57) return !0;
                    }
                    return 10 === e.length && e >= Math.pow(2, 32);
                }
                function k(e) {
                    return Object.keys(e)
                        .filter(I)
                        .concat(u(e).filter(Object.prototype.propertyIsEnumerable.bind(e)));
                }
                function N(e, t) {
                    if (e === t) return 0;
                    for (var r = e.length, n = t.length, o = 0, i = Math.min(r, n); o < i; ++o)
                        if (e[o] !== t[o]) {
                            (r = e[o]), (n = t[o]);
                            break;
                        }
                    return r < n ? -1 : n < r ? 1 : 0;
                }
                function L(e, t, r, n) {
                    if (e === t) return 0 !== e || !r || s(e, t);
                    if (r) {
                        if ("object" !== o(e)) return "number" == typeof e && l(e) && l(t);
                        if ("object" !== o(t) || null === e || null === t) return !1;
                        if (Object.getPrototypeOf(e) !== Object.getPrototypeOf(t)) return !1;
                    } else {
                        if (null === e || "object" !== o(e)) return (null === t || "object" !== o(t)) && e == t;
                        if (null === t || "object" !== o(t)) return !1;
                    }
                    var a,
                        c,
                        u,
                        f,
                        p = y(e);
                    if (p !== y(t)) return !1;
                    if (Array.isArray(e)) {
                        if (e.length !== t.length) return !1;
                        var g = k(e),
                            m = k(t);
                        return g.length === m.length && U(e, t, r, n, 1, g);
                    }
                    if ("[object Object]" === p && ((!h(e) && h(t)) || (!E(e) && E(t)))) return !1;
                    if (b(e)) {
                        if (!b(t) || Date.prototype.getTime.call(e) !== Date.prototype.getTime.call(t)) return !1;
                    } else if (v(e)) {
                        if (!v(t) || ((u = e), (f = t), !(i ? u.source === f.source && u.flags === f.flags : RegExp.prototype.toString.call(u) === RegExp.prototype.toString.call(f)))) return !1;
                    } else if (w(e) || e instanceof Error) {
                        if (e.message !== t.message || e.name !== t.name) return !1;
                    } else {
                        if (A(e)) {
                            if (r || (!R(e) && !T(e))) {
                                if (
                                    !(function (e, t) {
                                        return e.byteLength === t.byteLength && 0 === N(new Uint8Array(e.buffer, e.byteOffset, e.byteLength), new Uint8Array(t.buffer, t.byteOffset, t.byteLength));
                                    })(e, t)
                                )
                                    return !1;
                            } else if (
                                !(function (e, t) {
                                    if (e.byteLength !== t.byteLength) return !1;
                                    for (var r = 0; r < e.byteLength; r++) if (e[r] !== t[r]) return !1;
                                    return !0;
                                })(e, t)
                            )
                                return !1;
                            var I = k(e),
                                L = k(t);
                            return I.length === L.length && U(e, t, r, n, 0, I);
                        }
                        if (E(e)) return !(!E(t) || e.size !== t.size) && U(e, t, r, n, 2);
                        if (h(e)) return !(!h(t) || e.size !== t.size) && U(e, t, r, n, 3);
                        if (d(e)) {
                            if (((c = t), (a = e).byteLength !== c.byteLength || 0 !== N(new Uint8Array(a), new Uint8Array(c)))) return !1;
                        } else if (
                            x(e) &&
                            !(function (e, t) {
                                return S(e)
                                    ? S(t) && s(Number.prototype.valueOf.call(e), Number.prototype.valueOf.call(t))
                                    : O(e)
                                    ? O(t) && String.prototype.valueOf.call(e) === String.prototype.valueOf.call(t)
                                    : j(e)
                                    ? j(t) && Boolean.prototype.valueOf.call(e) === Boolean.prototype.valueOf.call(t)
                                    : _(e)
                                    ? _(t) && BigInt.prototype.valueOf.call(e) === BigInt.prototype.valueOf.call(t)
                                    : P(t) && Symbol.prototype.valueOf.call(e) === Symbol.prototype.valueOf.call(t);
                            })(e, t)
                        )
                            return !1;
                    }
                    return U(e, t, r, n, 0);
                }
                function C(e, t) {
                    return t.filter(function (t) {
                        return g(e, t);
                    });
                }
                function U(e, t, r, n, o, i) {
                    if (5 === arguments.length) {
                        i = Object.keys(e);
                        var a = Object.keys(t);
                        if (i.length !== a.length) return !1;
                    }
                    for (var c = 0; c < i.length; c++) if (!p(t, i[c])) return !1;
                    if (r && 5 === arguments.length) {
                        var s = u(e);
                        if (0 !== s.length) {
                            var l = 0;
                            for (c = 0; c < s.length; c++) {
                                var f = s[c];
                                if (g(e, f)) {
                                    if (!g(t, f)) return !1;
                                    i.push(f), l++;
                                } else if (g(t, f)) return !1;
                            }
                            var y = u(t);
                            if (s.length !== y.length && C(t, y).length !== l) return !1;
                        } else {
                            var m = u(t);
                            if (0 !== m.length && 0 !== C(t, m).length) return !1;
                        }
                    }
                    if (0 === i.length && (0 === o || (1 === o && 0 === e.length) || 0 === e.size)) return !0;
                    if (void 0 === n) n = { val1: new Map(), val2: new Map(), position: 0 };
                    else {
                        var d = n.val1.get(e);
                        if (void 0 !== d) {
                            var A = n.val2.get(t);
                            if (void 0 !== A) return d === A;
                        }
                        n.position++;
                    }
                    n.val1.set(e, n.position), n.val2.set(t, n.position);
                    var b = G(e, t, r, i, n, o);
                    return n.val1.delete(e), n.val2.delete(t), b;
                }
                function F(e, t, r, n) {
                    for (var o = a(e), i = 0; i < o.length; i++) {
                        var c = o[i];
                        if (L(t, c, r, n)) return e.delete(c), !0;
                    }
                    return !1;
                }
                function D(e) {
                    switch (o(e)) {
                        case "undefined":
                            return null;
                        case "object":
                            return;
                        case "symbol":
                            return !1;
                        case "string":
                            e = +e;
                        case "number":
                            if (l(e)) return !1;
                    }
                    return !0;
                }
                function M(e, t, r) {
                    var n = D(r);
                    return null != n ? n : t.has(n) && !e.has(n);
                }
                function B(e, t, r, n, o) {
                    var i = D(r);
                    if (null != i) return i;
                    var a = t.get(i);
                    return !((void 0 === a && !t.has(i)) || !L(n, a, !1, o)) && !e.has(i) && L(n, a, !1, o);
                }
                function q(e, t, r, n, o, i) {
                    for (var c = a(e), s = 0; s < c.length; s++) {
                        var u = c[s];
                        if (L(r, u, o, i) && L(n, t.get(u), o, i)) return e.delete(u), !0;
                    }
                    return !1;
                }
                function G(e, t, r, i, s, u) {
                    var l = 0;
                    if (2 === u) {
                        if (
                            !(function (e, t, r, n) {
                                for (var i = null, c = a(e), s = 0; s < c.length; s++) {
                                    var u = c[s];
                                    if ("object" === o(u) && null !== u) null === i && (i = new Set()), i.add(u);
                                    else if (!t.has(u)) {
                                        if (r) return !1;
                                        if (!M(e, t, u)) return !1;
                                        null === i && (i = new Set()), i.add(u);
                                    }
                                }
                                if (null !== i) {
                                    for (var l = a(t), f = 0; f < l.length; f++) {
                                        var p = l[f];
                                        if ("object" === o(p) && null !== p) {
                                            if (!F(i, p, r, n)) return !1;
                                        } else if (!r && !e.has(p) && !F(i, p, r, n)) return !1;
                                    }
                                    return 0 === i.size;
                                }
                                return !0;
                            })(e, t, r, s)
                        )
                            return !1;
                    } else if (3 === u) {
                        if (
                            !(function (e, t, r, i) {
                                for (var a = null, s = c(e), u = 0; u < s.length; u++) {
                                    var l = n(s[u], 2),
                                        f = l[0],
                                        p = l[1];
                                    if ("object" === o(f) && null !== f) null === a && (a = new Set()), a.add(f);
                                    else {
                                        var g = t.get(f);
                                        if ((void 0 === g && !t.has(f)) || !L(p, g, r, i)) {
                                            if (r) return !1;
                                            if (!B(e, t, f, p, i)) return !1;
                                            null === a && (a = new Set()), a.add(f);
                                        }
                                    }
                                }
                                if (null !== a) {
                                    for (var y = c(t), m = 0; m < y.length; m++) {
                                        var d = n(y[m], 2),
                                            A = ((f = d[0]), d[1]);
                                        if ("object" === o(f) && null !== f) {
                                            if (!q(a, e, f, A, r, i)) return !1;
                                        } else if (!(r || (e.has(f) && L(e.get(f), A, !1, i)) || q(a, e, f, A, !1, i))) return !1;
                                    }
                                    return 0 === a.size;
                                }
                                return !0;
                            })(e, t, r, s)
                        )
                            return !1;
                    } else if (1 === u)
                        for (; l < e.length; l++) {
                            if (!p(e, l)) {
                                if (p(t, l)) return !1;
                                for (var f = Object.keys(e); l < f.length; l++) {
                                    var g = f[l];
                                    if (!p(t, g) || !L(e[g], t[g], r, s)) return !1;
                                }
                                return f.length === Object.keys(t).length;
                            }
                            if (!p(t, l) || !L(e[l], t[l], r, s)) return !1;
                        }
                    for (l = 0; l < i.length; l++) {
                        var y = i[l];
                        if (!L(e[y], t[y], r, s)) return !1;
                    }
                    return !0;
                }
                e.exports = {
                    isDeepEqual: function (e, t) {
                        return L(e, t, false);
                    },
                    isDeepStrictEqual: function (e, t) {
                        return L(e, t, true);
                    },
                };
            },
            91870: (e, t, r) => {
                "use strict";
                var n = r(9035),
                    o = r(70176),
                    i = o(n("String.prototype.indexOf"));
                e.exports = function (e, t) {
                    var r = n(e, !!t);
                    return "function" == typeof r && i(e, ".prototype.") > -1 ? o(r) : r;
                };
            },
            70176: (e, t, r) => {
                "use strict";
                var n = r(65152),
                    o = r(9035),
                    i = o("%Function.prototype.apply%"),
                    a = o("%Function.prototype.call%"),
                    c = o("%Reflect.apply%", !0) || n.call(a, i),
                    s = o("%Object.getOwnPropertyDescriptor%", !0),
                    u = o("%Object.defineProperty%", !0),
                    l = o("%Math.max%");
                if (u)
                    try {
                        u({}, "a", { value: 1 });
                    } catch (e) {
                        u = null;
                    }
                e.exports = function (e) {
                    var t = c(n, a, arguments);
                    if (s && u) {
                        var r = s(t, "length");
                        r.configurable && u(t, "length", { value: 1 + l(0, e.length - (arguments.length - 1)) });
                    }
                    return t;
                };
                var f = function () {
                    return c(n, i, arguments);
                };
                u ? u(e.exports, "apply", { value: f }) : (e.exports.apply = f);
            },
            29255: (e, t, r) => {
                var n = r(84709),
                    o = r(65531);
                function i() {
                    return new Date().getTime();
                }
                var a,
                    c = Array.prototype.slice,
                    s = {};
                a = void 0 !== r.g && r.g.console ? r.g.console : "undefined" != typeof window && window.console ? window.console : {};
                for (
                    var u = [
                            [function () {}, "log"],
                            [
                                function () {
                                    a.log.apply(a, arguments);
                                },
                                "info",
                            ],
                            [
                                function () {
                                    a.log.apply(a, arguments);
                                },
                                "warn",
                            ],
                            [
                                function () {
                                    a.warn.apply(a, arguments);
                                },
                                "error",
                            ],
                            [
                                function (e) {
                                    s[e] = i();
                                },
                                "time",
                            ],
                            [
                                function (e) {
                                    var t = s[e];
                                    if (!t) throw new Error("No such label: " + e);
                                    delete s[e];
                                    var r = i() - t;
                                    a.log(e + ": " + r + "ms");
                                },
                                "timeEnd",
                            ],
                            [
                                function () {
                                    var e = new Error();
                                    (e.name = "Trace"), (e.message = n.format.apply(null, arguments)), a.error(e.stack);
                                },
                                "trace",
                            ],
                            [
                                function (e) {
                                    a.log(n.inspect(e) + "\n");
                                },
                                "dir",
                            ],
                            [
                                function (e) {
                                    if (!e) {
                                        var t = c.call(arguments, 1);
                                        o.ok(!1, n.format.apply(null, t));
                                    }
                                },
                                "assert",
                            ],
                        ],
                        l = 0;
                    l < u.length;
                    l++
                ) {
                    var f = u[l],
                        p = f[0],
                        g = f[1];
                    a[g] || (a[g] = p);
                }
                e.exports = a;
            },
            71422: (e, t, r) => {
                "use strict";
                var n = r(98246),
                    o = "function" == typeof Symbol && "symbol" == typeof Symbol("foo"),
                    i = Object.prototype.toString,
                    a = Array.prototype.concat,
                    c = Object.defineProperty,
                    s = r(62086)(),
                    u = c && s,
                    l = function (e, t, r, n) {
                        var o;
                        (!(t in e) || ("function" == typeof (o = n) && "[object Function]" === i.call(o) && n())) && (u ? c(e, t, { configurable: !0, enumerable: !1, value: r, writable: !0 }) : (e[t] = r));
                    },
                    f = function (e, t) {
                        var r = arguments.length > 2 ? arguments[2] : {},
                            i = n(t);
                        o && (i = a.call(i, Object.getOwnPropertySymbols(t)));
                        for (var c = 0; c < i.length; c += 1) l(e, i[c], t[i[c]], r[i[c]]);
                    };
                (f.supportsDescriptors = !!u), (e.exports = f);
            },
            62566: (e) => {
                "use strict";
                function t(e, t) {
                    if (null == e) throw new TypeError("Cannot convert first argument to object");
                    for (var r = Object(e), n = 1; n < arguments.length; n++) {
                        var o = arguments[n];
                        if (null != o)
                            for (var i = Object.keys(Object(o)), a = 0, c = i.length; a < c; a++) {
                                var s = i[a],
                                    u = Object.getOwnPropertyDescriptor(o, s);
                                void 0 !== u && u.enumerable && (r[s] = o[s]);
                            }
                    }
                    return r;
                }
                e.exports = {
                    assign: t,
                    polyfill: function () {
                        Object.assign || Object.defineProperty(Object, "assign", { enumerable: !1, configurable: !0, writable: !0, value: t });
                    },
                };
            },
            53426: (e) => {
                var t = Object.prototype.hasOwnProperty,
                    r = Object.prototype.toString;
                e.exports = function (e, n, o) {
                    if ("[object Function]" !== r.call(n)) throw new TypeError("iterator must be a function");
                    var i = e.length;
                    if (i === +i) for (var a = 0; a < i; a++) n.call(o, e[a], a, e);
                    else for (var c in e) t.call(e, c) && n.call(o, e[c], c, e);
                };
            },
            89915: (e) => {
                "use strict";
                var t = "Function.prototype.bind called on incompatible ",
                    r = Array.prototype.slice,
                    n = Object.prototype.toString,
                    o = "[object Function]";
                e.exports = function (e) {
                    var i = this;
                    if ("function" != typeof i || n.call(i) !== o) throw new TypeError(t + i);
                    for (
                        var a,
                            c = r.call(arguments, 1),
                            s = function () {
                                if (this instanceof a) {
                                    var t = i.apply(this, c.concat(r.call(arguments)));
                                    return Object(t) === t ? t : this;
                                }
                                return i.apply(e, c.concat(r.call(arguments)));
                            },
                            u = Math.max(0, i.length - c.length),
                            l = [],
                            f = 0;
                        f < u;
                        f++
                    )
                        l.push("$" + f);
                    if (((a = Function("binder", "return function (" + l.join(",") + "){ return binder.apply(this,arguments); }")(s)), i.prototype)) {
                        var p = function () {};
                        (p.prototype = i.prototype), (a.prototype = new p()), (p.prototype = null);
                    }
                    return a;
                };
            },
            65152: (e, t, r) => {
                "use strict";
                var n = r(89915);
                e.exports = Function.prototype.bind || n;
            },
            9035: (e, t, r) => {
                "use strict";
                var n,
                    o = SyntaxError,
                    i = Function,
                    a = TypeError,
                    c = function (e) {
                        try {
                            return i('"use strict"; return (' + e + ").constructor;")();
                        } catch (e) {}
                    },
                    s = Object.getOwnPropertyDescriptor;
                if (s)
                    try {
                        s({}, "");
                    } catch (e) {
                        s = null;
                    }
                var u = function () {
                        throw new a();
                    },
                    l = s
                        ? (function () {
                              try {
                                  return u;
                              } catch (e) {
                                  try {
                                      return s(arguments, "callee").get;
                                  } catch (e) {
                                      return u;
                                  }
                              }
                          })()
                        : u,
                    f = r(69222)(),
                    p =
                        Object.getPrototypeOf ||
                        function (e) {
                            return e.__proto__;
                        },
                    g = {},
                    y = "undefined" == typeof Uint8Array ? n : p(Uint8Array),
                    m = {
                        "%AggregateError%": "undefined" == typeof AggregateError ? n : AggregateError,
                        "%Array%": Array,
                        "%ArrayBuffer%": "undefined" == typeof ArrayBuffer ? n : ArrayBuffer,
                        "%ArrayIteratorPrototype%": f ? p([][Symbol.iterator]()) : n,
                        "%AsyncFromSyncIteratorPrototype%": n,
                        "%AsyncFunction%": g,
                        "%AsyncGenerator%": g,
                        "%AsyncGeneratorFunction%": g,
                        "%AsyncIteratorPrototype%": g,
                        "%Atomics%": "undefined" == typeof Atomics ? n : Atomics,
                        "%BigInt%": "undefined" == typeof BigInt ? n : BigInt,
                        "%Boolean%": Boolean,
                        "%DataView%": "undefined" == typeof DataView ? n : DataView,
                        "%Date%": Date,
                        "%decodeURI%": decodeURI,
                        "%decodeURIComponent%": decodeURIComponent,
                        "%encodeURI%": encodeURI,
                        "%encodeURIComponent%": encodeURIComponent,
                        "%Error%": Error,
                        "%eval%": eval,
                        "%EvalError%": EvalError,
                        "%Float32Array%": "undefined" == typeof Float32Array ? n : Float32Array,
                        "%Float64Array%": "undefined" == typeof Float64Array ? n : Float64Array,
                        "%FinalizationRegistry%": "undefined" == typeof FinalizationRegistry ? n : FinalizationRegistry,
                        "%Function%": i,
                        "%GeneratorFunction%": g,
                        "%Int8Array%": "undefined" == typeof Int8Array ? n : Int8Array,
                        "%Int16Array%": "undefined" == typeof Int16Array ? n : Int16Array,
                        "%Int32Array%": "undefined" == typeof Int32Array ? n : Int32Array,
                        "%isFinite%": isFinite,
                        "%isNaN%": isNaN,
                        "%IteratorPrototype%": f ? p(p([][Symbol.iterator]())) : n,
                        "%JSON%": "object" == typeof JSON ? JSON : n,
                        "%Map%": "undefined" == typeof Map ? n : Map,
                        "%MapIteratorPrototype%": "undefined" != typeof Map && f ? p(new Map()[Symbol.iterator]()) : n,
                        "%Math%": Math,
                        "%Number%": Number,
                        "%Object%": Object,
                        "%parseFloat%": parseFloat,
                        "%parseInt%": parseInt,
                        "%Promise%": "undefined" == typeof Promise ? n : Promise,
                        "%Proxy%": "undefined" == typeof Proxy ? n : Proxy,
                        "%RangeError%": RangeError,
                        "%ReferenceError%": ReferenceError,
                        "%Reflect%": "undefined" == typeof Reflect ? n : Reflect,
                        "%RegExp%": RegExp,
                        "%Set%": "undefined" == typeof Set ? n : Set,
                        "%SetIteratorPrototype%": "undefined" != typeof Set && f ? p(new Set()[Symbol.iterator]()) : n,
                        "%SharedArrayBuffer%": "undefined" == typeof SharedArrayBuffer ? n : SharedArrayBuffer,
                        "%String%": String,
                        "%StringIteratorPrototype%": f ? p(""[Symbol.iterator]()) : n,
                        "%Symbol%": f ? Symbol : n,
                        "%SyntaxError%": o,
                        "%ThrowTypeError%": l,
                        "%TypedArray%": y,
                        "%TypeError%": a,
                        "%Uint8Array%": "undefined" == typeof Uint8Array ? n : Uint8Array,
                        "%Uint8ClampedArray%": "undefined" == typeof Uint8ClampedArray ? n : Uint8ClampedArray,
                        "%Uint16Array%": "undefined" == typeof Uint16Array ? n : Uint16Array,
                        "%Uint32Array%": "undefined" == typeof Uint32Array ? n : Uint32Array,
                        "%URIError%": URIError,
                        "%WeakMap%": "undefined" == typeof WeakMap ? n : WeakMap,
                        "%WeakRef%": "undefined" == typeof WeakRef ? n : WeakRef,
                        "%WeakSet%": "undefined" == typeof WeakSet ? n : WeakSet,
                    },
                    d = function e(t) {
                        var r;
                        if ("%AsyncFunction%" === t) r = c("async function () {}");
                        else if ("%GeneratorFunction%" === t) r = c("function* () {}");
                        else if ("%AsyncGeneratorFunction%" === t) r = c("async function* () {}");
                        else if ("%AsyncGenerator%" === t) {
                            var n = e("%AsyncGeneratorFunction%");
                            n && (r = n.prototype);
                        } else if ("%AsyncIteratorPrototype%" === t) {
                            var o = e("%AsyncGenerator%");
                            o && (r = p(o.prototype));
                        }
                        return (m[t] = r), r;
                    },
                    A = {
                        "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
                        "%ArrayPrototype%": ["Array", "prototype"],
                        "%ArrayProto_entries%": ["Array", "prototype", "entries"],
                        "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
                        "%ArrayProto_keys%": ["Array", "prototype", "keys"],
                        "%ArrayProto_values%": ["Array", "prototype", "values"],
                        "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
                        "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
                        "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
                        "%BooleanPrototype%": ["Boolean", "prototype"],
                        "%DataViewPrototype%": ["DataView", "prototype"],
                        "%DatePrototype%": ["Date", "prototype"],
                        "%ErrorPrototype%": ["Error", "prototype"],
                        "%EvalErrorPrototype%": ["EvalError", "prototype"],
                        "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
                        "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
                        "%FunctionPrototype%": ["Function", "prototype"],
                        "%Generator%": ["GeneratorFunction", "prototype"],
                        "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
                        "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
                        "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
                        "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
                        "%JSONParse%": ["JSON", "parse"],
                        "%JSONStringify%": ["JSON", "stringify"],
                        "%MapPrototype%": ["Map", "prototype"],
                        "%NumberPrototype%": ["Number", "prototype"],
                        "%ObjectPrototype%": ["Object", "prototype"],
                        "%ObjProto_toString%": ["Object", "prototype", "toString"],
                        "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
                        "%PromisePrototype%": ["Promise", "prototype"],
                        "%PromiseProto_then%": ["Promise", "prototype", "then"],
                        "%Promise_all%": ["Promise", "all"],
                        "%Promise_reject%": ["Promise", "reject"],
                        "%Promise_resolve%": ["Promise", "resolve"],
                        "%RangeErrorPrototype%": ["RangeError", "prototype"],
                        "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
                        "%RegExpPrototype%": ["RegExp", "prototype"],
                        "%SetPrototype%": ["Set", "prototype"],
                        "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
                        "%StringPrototype%": ["String", "prototype"],
                        "%SymbolPrototype%": ["Symbol", "prototype"],
                        "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
                        "%TypedArrayPrototype%": ["TypedArray", "prototype"],
                        "%TypeErrorPrototype%": ["TypeError", "prototype"],
                        "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
                        "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
                        "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
                        "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
                        "%URIErrorPrototype%": ["URIError", "prototype"],
                        "%WeakMapPrototype%": ["WeakMap", "prototype"],
                        "%WeakSetPrototype%": ["WeakSet", "prototype"],
                    },
                    b = r(65152),
                    h = r(7545),
                    v = b.call(Function.call, Array.prototype.concat),
                    E = b.call(Function.apply, Array.prototype.splice),
                    w = b.call(Function.call, String.prototype.replace),
                    x = b.call(Function.call, String.prototype.slice),
                    S = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
                    O = /\\(\\)?/g,
                    j = function (e) {
                        var t = x(e, 0, 1),
                            r = x(e, -1);
                        if ("%" === t && "%" !== r) throw new o("invalid intrinsic syntax, expected closing `%`");
                        if ("%" === r && "%" !== t) throw new o("invalid intrinsic syntax, expected opening `%`");
                        var n = [];
                        return (
                            w(e, S, function (e, t, r, o) {
                                n[n.length] = r ? w(o, O, "$1") : t || e;
                            }),
                            n
                        );
                    },
                    _ = function (e, t) {
                        var r,
                            n = e;
                        if ((h(A, n) && (n = "%" + (r = A[n])[0] + "%"), h(m, n))) {
                            var i = m[n];
                            if ((i === g && (i = d(n)), void 0 === i && !t)) throw new a("intrinsic " + e + " exists, but is not available. Please file an issue!");
                            return { alias: r, name: n, value: i };
                        }
                        throw new o("intrinsic " + e + " does not exist!");
                    };
                e.exports = function (e, t) {
                    if ("string" != typeof e || 0 === e.length) throw new a("intrinsic name must be a non-empty string");
                    if (arguments.length > 1 && "boolean" != typeof t) throw new a('"allowMissing" argument must be a boolean');
                    var r = j(e),
                        n = r.length > 0 ? r[0] : "",
                        i = _("%" + n + "%", t),
                        c = i.name,
                        u = i.value,
                        l = !1,
                        f = i.alias;
                    f && ((n = f[0]), E(r, v([0, 1], f)));
                    for (var p = 1, g = !0; p < r.length; p += 1) {
                        var y = r[p],
                            d = x(y, 0, 1),
                            A = x(y, -1);
                        if (('"' === d || "'" === d || "`" === d || '"' === A || "'" === A || "`" === A) && d !== A) throw new o("property names with quotes must have matching quotes");
                        if ((("constructor" !== y && g) || (l = !0), h(m, (c = "%" + (n += "." + y) + "%")))) u = m[c];
                        else if (null != u) {
                            if (!(y in u)) {
                                if (!t) throw new a("base intrinsic for " + e + " exists, but the property is not available.");
                                return;
                            }
                            if (s && p + 1 >= r.length) {
                                var b = s(u, y);
                                u = (g = !!b) && "get" in b && !("originalValue" in b.get) ? b.get : u[y];
                            } else (g = h(u, y)), (u = u[y]);
                            g && !l && (m[c] = u);
                        }
                    }
                    return u;
                };
            },
            62086: (e, t, r) => {
                "use strict";
                var n = r(9035)("%Object.defineProperty%", !0),
                    o = function () {
                        if (n)
                            try {
                                return n({}, "a", { value: 1 }), !0;
                            } catch (e) {
                                return !1;
                            }
                        return !1;
                    };
                (o.hasArrayLengthDefineBug = function () {
                    if (!o()) return null;
                    try {
                        return 1 !== n([], "length", { value: 1 }).length;
                    } catch (e) {
                        return !0;
                    }
                }),
                    (e.exports = o);
            },
            69222: (e, t, r) => {
                "use strict";
                var n = "undefined" != typeof Symbol && Symbol,
                    o = r(15389);
                e.exports = function () {
                    return "function" == typeof n && "function" == typeof Symbol && "symbol" == typeof n("foo") && "symbol" == typeof Symbol("bar") && o();
                };
            },
            15389: (e) => {
                "use strict";
                e.exports = function () {
                    if ("function" != typeof Symbol || "function" != typeof Object.getOwnPropertySymbols) return !1;
                    if ("symbol" == typeof Symbol.iterator) return !0;
                    var e = {},
                        t = Symbol("test"),
                        r = Object(t);
                    if ("string" == typeof t) return !1;
                    if ("[object Symbol]" !== Object.prototype.toString.call(t)) return !1;
                    if ("[object Symbol]" !== Object.prototype.toString.call(r)) return !1;
                    for (t in ((e[t] = 42), e)) return !1;
                    if ("function" == typeof Object.keys && 0 !== Object.keys(e).length) return !1;
                    if ("function" == typeof Object.getOwnPropertyNames && 0 !== Object.getOwnPropertyNames(e).length) return !1;
                    var n = Object.getOwnPropertySymbols(e);
                    if (1 !== n.length || n[0] !== t) return !1;
                    if (!Object.prototype.propertyIsEnumerable.call(e, t)) return !1;
                    if ("function" == typeof Object.getOwnPropertyDescriptor) {
                        var o = Object.getOwnPropertyDescriptor(e, t);
                        if (42 !== o.value || !0 !== o.enumerable) return !1;
                    }
                    return !0;
                };
            },
            10754: (e, t, r) => {
                "use strict";
                var n = r(15389);
                e.exports = function () {
                    return n() && !!Symbol.toStringTag;
                };
            },
            7545: (e, t, r) => {
                "use strict";
                var n = r(65152);
                e.exports = n.call(Function.call, Object.prototype.hasOwnProperty);
            },
            79344: (e) => {
                "function" == typeof Object.create
                    ? (e.exports = function (e, t) {
                          t && ((e.super_ = t), (e.prototype = Object.create(t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } })));
                      })
                    : (e.exports = function (e, t) {
                          if (t) {
                              e.super_ = t;
                              var r = function () {};
                              (r.prototype = t.prototype), (e.prototype = new r()), (e.prototype.constructor = e);
                          }
                      });
            },
            31629: (e, t, r) => {
                "use strict";
                var n = r(10754)(),
                    o = r(91870)("Object.prototype.toString"),
                    i = function (e) {
                        return !(n && e && "object" == typeof e && Symbol.toStringTag in e) && "[object Arguments]" === o(e);
                    },
                    a = function (e) {
                        return !!i(e) || (null !== e && "object" == typeof e && "number" == typeof e.length && e.length >= 0 && "[object Array]" !== o(e) && "[object Function]" === o(e.callee));
                    },
                    c = (function () {
                        return i(arguments);
                    })();
                (i.isLegacyArguments = a), (e.exports = c ? i : a);
            },
            7410: (e, t, r) => {
                "use strict";
                var n,
                    o = Object.prototype.toString,
                    i = Function.prototype.toString,
                    a = /^\s*(?:function)?\*/,
                    c = r(10754)(),
                    s = Object.getPrototypeOf;
                e.exports = function (e) {
                    if ("function" != typeof e) return !1;
                    if (a.test(i.call(e))) return !0;
                    if (!c) return "[object GeneratorFunction]" === o.call(e);
                    if (!s) return !1;
                    if (void 0 === n) {
                        var t = (function () {
                            if (!c) return !1;
                            try {
                                return Function("return function*() {}")();
                            } catch (e) {}
                        })();
                        n = !!t && s(t);
                    }
                    return s(e) === n;
                };
            },
            17576: (e) => {
                "use strict";
                e.exports = function (e) {
                    return e != e;
                };
            },
            84032: (e, t, r) => {
                "use strict";
                var n = r(70176),
                    o = r(71422),
                    i = r(17576),
                    a = r(89633),
                    c = r(43144),
                    s = n(a(), Number);
                o(s, { getPolyfill: a, implementation: i, shim: c }), (e.exports = s);
            },
            89633: (e, t, r) => {
                "use strict";
                var n = r(17576);
                e.exports = function () {
                    return Number.isNaN && Number.isNaN(NaN) && !Number.isNaN("a") ? Number.isNaN : n;
                };
            },
            43144: (e, t, r) => {
                "use strict";
                var n = r(71422),
                    o = r(89633);
                e.exports = function () {
                    var e = o();
                    return (
                        n(
                            Number,
                            { isNaN: e },
                            {
                                isNaN: function () {
                                    return Number.isNaN !== e;
                                },
                            }
                        ),
                        e
                    );
                };
            },
            98790: (e, t, r) => {
                "use strict";
                var n = r(53426),
                    o = r(36414),
                    i = r(91870),
                    a = i("Object.prototype.toString"),
                    c = r(10754)(),
                    s = "undefined" == typeof globalThis ? r.g : globalThis,
                    u = o(),
                    l =
                        i("Array.prototype.indexOf", !0) ||
                        function (e, t) {
                            for (var r = 0; r < e.length; r += 1) if (e[r] === t) return r;
                            return -1;
                        },
                    f = i("String.prototype.slice"),
                    p = {},
                    g = r(16706),
                    y = Object.getPrototypeOf;
                c &&
                    g &&
                    y &&
                    n(u, function (e) {
                        var t = new s[e]();
                        if (Symbol.toStringTag in t) {
                            var r = y(t),
                                n = g(r, Symbol.toStringTag);
                            if (!n) {
                                var o = y(r);
                                n = g(o, Symbol.toStringTag);
                            }
                            p[e] = n.get;
                        }
                    });
                e.exports = function (e) {
                    if (!e || "object" != typeof e) return !1;
                    if (!c || !(Symbol.toStringTag in e)) {
                        var t = f(a(e), 8, -1);
                        return l(u, t) > -1;
                    }
                    return (
                        !!g &&
                        (function (e) {
                            var t = !1;
                            return (
                                n(p, function (r, n) {
                                    if (!t)
                                        try {
                                            t = r.call(e) === n;
                                        } catch (e) {}
                                }),
                                t
                            );
                        })(e)
                    );
                };
            },
            23122: (e) => {
                "use strict";
                var t = function (e) {
                    return e != e;
                };
                e.exports = function (e, r) {
                    return 0 === e && 0 === r ? 1 / e == 1 / r : e === r || !(!t(e) || !t(r));
                };
            },
            92327: (e, t, r) => {
                "use strict";
                var n = r(71422),
                    o = r(70176),
                    i = r(23122),
                    a = r(69957),
                    c = r(26765),
                    s = o(a(), Object);
                n(s, { getPolyfill: a, implementation: i, shim: c }), (e.exports = s);
            },
            69957: (e, t, r) => {
                "use strict";
                var n = r(23122);
                e.exports = function () {
                    return "function" == typeof Object.is ? Object.is : n;
                };
            },
            26765: (e, t, r) => {
                "use strict";
                var n = r(69957),
                    o = r(71422);
                e.exports = function () {
                    var e = n();
                    return (
                        o(
                            Object,
                            { is: e },
                            {
                                is: function () {
                                    return Object.is !== e;
                                },
                            }
                        ),
                        e
                    );
                };
            },
            98384: (e, t, r) => {
                "use strict";
                var n;
                if (!Object.keys) {
                    var o = Object.prototype.hasOwnProperty,
                        i = Object.prototype.toString,
                        a = r(17485),
                        c = Object.prototype.propertyIsEnumerable,
                        s = !c.call({ toString: null }, "toString"),
                        u = c.call(function () {}, "prototype"),
                        l = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
                        f = function (e) {
                            var t = e.constructor;
                            return t && t.prototype === e;
                        },
                        p = {
                            $applicationCache: !0,
                            $console: !0,
                            $external: !0,
                            $frame: !0,
                            $frameElement: !0,
                            $frames: !0,
                            $innerHeight: !0,
                            $innerWidth: !0,
                            $onmozfullscreenchange: !0,
                            $onmozfullscreenerror: !0,
                            $outerHeight: !0,
                            $outerWidth: !0,
                            $pageXOffset: !0,
                            $pageYOffset: !0,
                            $parent: !0,
                            $scrollLeft: !0,
                            $scrollTop: !0,
                            $scrollX: !0,
                            $scrollY: !0,
                            $self: !0,
                            $webkitIndexedDB: !0,
                            $webkitStorageInfo: !0,
                            $window: !0,
                        },
                        g = (function () {
                            if ("undefined" == typeof window) return !1;
                            for (var e in window)
                                try {
                                    if (!p["$" + e] && o.call(window, e) && null !== window[e] && "object" == typeof window[e])
                                        try {
                                            f(window[e]);
                                        } catch (e) {
                                            return !0;
                                        }
                                } catch (e) {
                                    return !0;
                                }
                            return !1;
                        })();
                    n = function (e) {
                        var t = null !== e && "object" == typeof e,
                            r = "[object Function]" === i.call(e),
                            n = a(e),
                            c = t && "[object String]" === i.call(e),
                            p = [];
                        if (!t && !r && !n) throw new TypeError("Object.keys called on a non-object");
                        var y = u && r;
                        if (c && e.length > 0 && !o.call(e, 0)) for (var m = 0; m < e.length; ++m) p.push(String(m));
                        if (n && e.length > 0) for (var d = 0; d < e.length; ++d) p.push(String(d));
                        else for (var A in e) (y && "prototype" === A) || !o.call(e, A) || p.push(String(A));
                        if (s)
                            for (
                                var b = (function (e) {
                                        if ("undefined" == typeof window || !g) return f(e);
                                        try {
                                            return f(e);
                                        } catch (e) {
                                            return !1;
                                        }
                                    })(e),
                                    h = 0;
                                h < l.length;
                                ++h
                            )
                                (b && "constructor" === l[h]) || !o.call(e, l[h]) || p.push(l[h]);
                        return p;
                    };
                }
                e.exports = n;
            },
            98246: (e, t, r) => {
                "use strict";
                var n = Array.prototype.slice,
                    o = r(17485),
                    i = Object.keys,
                    a = i
                        ? function (e) {
                              return i(e);
                          }
                        : r(98384),
                    c = Object.keys;
                (a.shim = function () {
                    if (Object.keys) {
                        var e = (function () {
                            var e = Object.keys(arguments);
                            return e && e.length === arguments.length;
                        })(1, 2);
                        e ||
                            (Object.keys = function (e) {
                                return o(e) ? c(n.call(e)) : c(e);
                            });
                    } else Object.keys = a;
                    return Object.keys || a;
                }),
                    (e.exports = a);
            },
            17485: (e) => {
                "use strict";
                var t = Object.prototype.toString;
                e.exports = function (e) {
                    var r = t.call(e),
                        n = "[object Arguments]" === r;
                    return n || (n = "[object Array]" !== r && null !== e && "object" == typeof e && "number" == typeof e.length && e.length >= 0 && "[object Function]" === t.call(e.callee)), n;
                };
            },
            87082: (e) => {
                var t,
                    r,
                    n = (e.exports = {});
                function o() {
                    throw new Error("setTimeout has not been defined");
                }
                function i() {
                    throw new Error("clearTimeout has not been defined");
                }
                function a(e) {
                    if (t === setTimeout) return setTimeout(e, 0);
                    if ((t === o || !t) && setTimeout) return (t = setTimeout), setTimeout(e, 0);
                    try {
                        return t(e, 0);
                    } catch (r) {
                        try {
                            return t.call(null, e, 0);
                        } catch (r) {
                            return t.call(this, e, 0);
                        }
                    }
                }
                !(function () {
                    try {
                        t = "function" == typeof setTimeout ? setTimeout : o;
                    } catch (e) {
                        t = o;
                    }
                    try {
                        r = "function" == typeof clearTimeout ? clearTimeout : i;
                    } catch (e) {
                        r = i;
                    }
                })();
                var c,
                    s = [],
                    u = !1,
                    l = -1;
                function f() {
                    u && c && ((u = !1), c.length ? (s = c.concat(s)) : (l = -1), s.length && p());
                }
                function p() {
                    if (!u) {
                        var e = a(f);
                        u = !0;
                        for (var t = s.length; t; ) {
                            for (c = s, s = []; ++l < t; ) c && c[l].run();
                            (l = -1), (t = s.length);
                        }
                        (c = null),
                            (u = !1),
                            (function (e) {
                                if (r === clearTimeout) return clearTimeout(e);
                                if ((r === i || !r) && clearTimeout) return (r = clearTimeout), clearTimeout(e);
                                try {
                                    r(e);
                                } catch (t) {
                                    try {
                                        return r.call(null, e);
                                    } catch (t) {
                                        return r.call(this, e);
                                    }
                                }
                            })(e);
                    }
                }
                function g(e, t) {
                    (this.fun = e), (this.array = t);
                }
                function y() {}
                (n.nextTick = function (e) {
                    var t = new Array(arguments.length - 1);
                    if (arguments.length > 1) for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
                    s.push(new g(e, t)), 1 !== s.length || u || a(p);
                }),
                    (g.prototype.run = function () {
                        this.fun.apply(null, this.array);
                    }),
                    (n.title = "browser"),
                    (n.browser = !0),
                    (n.env = {}),
                    (n.argv = []),
                    (n.version = ""),
                    (n.versions = {}),
                    (n.on = y),
                    (n.addListener = y),
                    (n.once = y),
                    (n.off = y),
                    (n.removeListener = y),
                    (n.removeAllListeners = y),
                    (n.emit = y),
                    (n.prependListener = y),
                    (n.prependOnceListener = y),
                    (n.listeners = function (e) {
                        return [];
                    }),
                    (n.binding = function (e) {
                        throw new Error("process.binding is not supported");
                    }),
                    (n.cwd = function () {
                        return "/";
                    }),
                    (n.chdir = function (e) {
                        throw new Error("process.chdir is not supported");
                    }),
                    (n.umask = function () {
                        return 0;
                    });
            },
            41955: (e) => {
                e.exports = function (e) {
                    return e && "object" == typeof e && "function" == typeof e.copy && "function" == typeof e.fill && "function" == typeof e.readUInt8;
                };
            },
            59667: (e, t, r) => {
                "use strict";
                var n = r(31629),
                    o = r(7410),
                    i = r(2685),
                    a = r(98790);
                function c(e) {
                    return e.call.bind(e);
                }
                var s = "undefined" != typeof BigInt,
                    u = "undefined" != typeof Symbol,
                    l = c(Object.prototype.toString),
                    f = c(Number.prototype.valueOf),
                    p = c(String.prototype.valueOf),
                    g = c(Boolean.prototype.valueOf);
                if (s) var y = c(BigInt.prototype.valueOf);
                if (u) var m = c(Symbol.prototype.valueOf);
                function d(e, t) {
                    if ("object" != typeof e) return !1;
                    try {
                        return t(e), !0;
                    } catch (e) {
                        return !1;
                    }
                }
                function A(e) {
                    return "[object Map]" === l(e);
                }
                function b(e) {
                    return "[object Set]" === l(e);
                }
                function h(e) {
                    return "[object WeakMap]" === l(e);
                }
                function v(e) {
                    return "[object WeakSet]" === l(e);
                }
                function E(e) {
                    return "[object ArrayBuffer]" === l(e);
                }
                function w(e) {
                    return "undefined" != typeof ArrayBuffer && (E.working ? E(e) : e instanceof ArrayBuffer);
                }
                function x(e) {
                    return "[object DataView]" === l(e);
                }
                function S(e) {
                    return "undefined" != typeof DataView && (x.working ? x(e) : e instanceof DataView);
                }
                (t.isArgumentsObject = n),
                    (t.isGeneratorFunction = o),
                    (t.isTypedArray = a),
                    (t.isPromise = function (e) {
                        return ("undefined" != typeof Promise && e instanceof Promise) || (null !== e && "object" == typeof e && "function" == typeof e.then && "function" == typeof e.catch);
                    }),
                    (t.isArrayBufferView = function (e) {
                        return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : a(e) || S(e);
                    }),
                    (t.isUint8Array = function (e) {
                        return "Uint8Array" === i(e);
                    }),
                    (t.isUint8ClampedArray = function (e) {
                        return "Uint8ClampedArray" === i(e);
                    }),
                    (t.isUint16Array = function (e) {
                        return "Uint16Array" === i(e);
                    }),
                    (t.isUint32Array = function (e) {
                        return "Uint32Array" === i(e);
                    }),
                    (t.isInt8Array = function (e) {
                        return "Int8Array" === i(e);
                    }),
                    (t.isInt16Array = function (e) {
                        return "Int16Array" === i(e);
                    }),
                    (t.isInt32Array = function (e) {
                        return "Int32Array" === i(e);
                    }),
                    (t.isFloat32Array = function (e) {
                        return "Float32Array" === i(e);
                    }),
                    (t.isFloat64Array = function (e) {
                        return "Float64Array" === i(e);
                    }),
                    (t.isBigInt64Array = function (e) {
                        return "BigInt64Array" === i(e);
                    }),
                    (t.isBigUint64Array = function (e) {
                        return "BigUint64Array" === i(e);
                    }),
                    (A.working = "undefined" != typeof Map && A(new Map())),
                    (t.isMap = function (e) {
                        return "undefined" != typeof Map && (A.working ? A(e) : e instanceof Map);
                    }),
                    (b.working = "undefined" != typeof Set && b(new Set())),
                    (t.isSet = function (e) {
                        return "undefined" != typeof Set && (b.working ? b(e) : e instanceof Set);
                    }),
                    (h.working = "undefined" != typeof WeakMap && h(new WeakMap())),
                    (t.isWeakMap = function (e) {
                        return "undefined" != typeof WeakMap && (h.working ? h(e) : e instanceof WeakMap);
                    }),
                    (v.working = "undefined" != typeof WeakSet && v(new WeakSet())),
                    (t.isWeakSet = function (e) {
                        return v(e);
                    }),
                    (E.working = "undefined" != typeof ArrayBuffer && E(new ArrayBuffer())),
                    (t.isArrayBuffer = w),
                    (x.working = "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView && x(new DataView(new ArrayBuffer(1), 0, 1))),
                    (t.isDataView = S);
                var O = "undefined" != typeof SharedArrayBuffer ? SharedArrayBuffer : void 0;
                function j(e) {
                    return "[object SharedArrayBuffer]" === l(e);
                }
                function _(e) {
                    return void 0 !== O && (void 0 === j.working && (j.working = j(new O())), j.working ? j(e) : e instanceof O);
                }
                function P(e) {
                    return d(e, f);
                }
                function R(e) {
                    return d(e, p);
                }
                function T(e) {
                    return d(e, g);
                }
                function I(e) {
                    return s && d(e, y);
                }
                function k(e) {
                    return u && d(e, m);
                }
                (t.isSharedArrayBuffer = _),
                    (t.isAsyncFunction = function (e) {
                        return "[object AsyncFunction]" === l(e);
                    }),
                    (t.isMapIterator = function (e) {
                        return "[object Map Iterator]" === l(e);
                    }),
                    (t.isSetIterator = function (e) {
                        return "[object Set Iterator]" === l(e);
                    }),
                    (t.isGeneratorObject = function (e) {
                        return "[object Generator]" === l(e);
                    }),
                    (t.isWebAssemblyCompiledModule = function (e) {
                        return "[object WebAssembly.Module]" === l(e);
                    }),
                    (t.isNumberObject = P),
                    (t.isStringObject = R),
                    (t.isBooleanObject = T),
                    (t.isBigIntObject = I),
                    (t.isSymbolObject = k),
                    (t.isBoxedPrimitive = function (e) {
                        return P(e) || R(e) || T(e) || I(e) || k(e);
                    }),
                    (t.isAnyArrayBuffer = function (e) {
                        return "undefined" != typeof Uint8Array && (w(e) || _(e));
                    }),
                    ["isProxy", "isExternal", "isModuleNamespaceObject"].forEach(function (e) {
                        Object.defineProperty(t, e, {
                            enumerable: !1,
                            value: function () {
                                throw new Error(e + " is not supported in userland");
                            },
                        });
                    });
            },
            84709: (e, t, r) => {
                var n = r(87082),
                    o = r(29255),
                    i =
                        Object.getOwnPropertyDescriptors ||
                        function (e) {
                            for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) r[t[n]] = Object.getOwnPropertyDescriptor(e, t[n]);
                            return r;
                        },
                    a = /%[sdj%]/g;
                (t.format = function (e) {
                    if (!v(e)) {
                        for (var t = [], r = 0; r < arguments.length; r++) t.push(l(arguments[r]));
                        return t.join(" ");
                    }
                    r = 1;
                    for (
                        var n = arguments,
                            o = n.length,
                            i = String(e).replace(a, function (e) {
                                if ("%%" === e) return "%";
                                if (r >= o) return e;
                                switch (e) {
                                    case "%s":
                                        return String(n[r++]);
                                    case "%d":
                                        return Number(n[r++]);
                                    case "%j":
                                        try {
                                            return JSON.stringify(n[r++]);
                                        } catch (e) {
                                            return "[Circular]";
                                        }
                                    default:
                                        return e;
                                }
                            }),
                            c = n[r];
                        r < o;
                        c = n[++r]
                    )
                        b(c) || !x(c) ? (i += " " + c) : (i += " " + l(c));
                    return i;
                }),
                    (t.deprecate = function (e, r) {
                        if (void 0 !== n && !0 === n.noDeprecation) return e;
                        if (void 0 === n)
                            return function () {
                                return t.deprecate(e, r).apply(this, arguments);
                            };
                        var i = !1;
                        return function () {
                            if (!i) {
                                if (n.throwDeprecation) throw new Error(r);
                                n.traceDeprecation ? o.trace(r) : o.error(r), (i = !0);
                            }
                            return e.apply(this, arguments);
                        };
                    });
                var c = {},
                    s = /^$/;
                if (
                    {
                        L2_SWAP_FEE_BIPS: "100",
                        L1_SWAP_FEE_RECIPIENT: "0xF631de96F5aB74F5655CC7f6a7725e9b8b45cD76",
                        L2_SWAP_FEE_RECIPIENT_ACCOUNT_ID_GOERLI: "10992",
                        L2_SWAP_FEE_RECIPIENT_ACCOUNT_ID_MAINNET: "114196",
                        WYRE_GOERLI_ACCOUNT_ID: "AC_QTB3B77XM7H",
                        WYRE_PRODUCTION_ACCOUNT_ID: "AC_BQ9RRXVZ67T",
                        WYRE_GOERLI_BASE_URL: "https://api.testwyre.com",
                        WYRE_PRODUCTION_BASE_URL: "https://api.sendwyre.com",
                        WYRE_GOERLI_SECRET_KEY: "SK-2V7TLERB-9MCUVW83-9HYYNNU7-P7RLNDZ8",
                        WYRE_PRODUCTION_SECRET_KEY: "SK-UGXZDHMU-RRTQTZGA-REP3URVC-M8ADL4BJ",
                        WYRE_PRODUCTION_API_KEY: "AK-AG7L2AXZ-48AZ9JDF-2CBA8983-HWP248G9",
                        WYRE_REDIRECT_URL: "google.com",
                        RAMP_API_KEY: "pnz6phbppcp8gxhybkfth5j5ks25aevtqp5ffhk6",
                        RAMP_PRODUCTION_API_KEY: "vgmxu289c9ukwz6savhqae6d5dsk665u7uggqpvo",
                        NODE_ENV: "production",
                        LOOPRING_GOERLI_API_KEY: "VK1Xq1Z6VEhm3m778bPsmiarKyuFWI6GvdvUMsqZ3qO0RfYov7PyLbw8w0eLQXBn",
                        LOOPRING_MAINNET_API_KEY: "xmElM0SGw657amhSSpx85vTROhQxZZYWgdPmvx4W5fL4iEUju7vDy2GBIMw09Ejw",
                        MIXPANEL_TOKEN: "a91581c1dbf398eebb65fbe251116e8f",
                        GME_EXTENSION_BACKEND_URL: "https://api.extension.gamestop.com",
                        GME_WALLET_BACKEND_URL: "https://api.extension.gamestop.com",
                        GME_WALLET_PRICING_BACKEND_URL: "https://api.extension.gamestop.com",
                        GME_WALLET_RISK_BACKEND_URL: "https://api.extension.gamestop.com",
                        MAX_SLIPPAGE_PERCENT: "10",
                        DEFAULT_SLIPPAGE_PERCENT: "3",
                        CACHE_TTL: "30000",
                        SENTRY_DSN_URL: "https://e50a2836dee44522b2ef76b4d3c9662d@o1178273.ingest.sentry.io/6289426",
                        BUGSNAG_API_KEY: "8d77617bae6803bd249bff95b409f812",
                        CHROME_EXTENSION_PRODUCTION_ID: "mfdekmmicdfiflhjkoaddhpfdiajikpk",
                        PROVIDER_BASE_URL: "https://api.extension.gamestop.com/ethereum",
                        LR_L2_SWAP_FEE_BIPS: "30",
                        GME_L2_SWAP_FEE_BIPS: "70",
                    }.NODE_DEBUG
                ) {
                    var u = {
                        L2_SWAP_FEE_BIPS: "100",
                        L1_SWAP_FEE_RECIPIENT: "0xF631de96F5aB74F5655CC7f6a7725e9b8b45cD76",
                        L2_SWAP_FEE_RECIPIENT_ACCOUNT_ID_GOERLI: "10992",
                        L2_SWAP_FEE_RECIPIENT_ACCOUNT_ID_MAINNET: "114196",
                        WYRE_GOERLI_ACCOUNT_ID: "AC_QTB3B77XM7H",
                        WYRE_PRODUCTION_ACCOUNT_ID: "AC_BQ9RRXVZ67T",
                        WYRE_GOERLI_BASE_URL: "https://api.testwyre.com",
                        WYRE_PRODUCTION_BASE_URL: "https://api.sendwyre.com",
                        WYRE_GOERLI_SECRET_KEY: "SK-2V7TLERB-9MCUVW83-9HYYNNU7-P7RLNDZ8",
                        WYRE_PRODUCTION_SECRET_KEY: "SK-UGXZDHMU-RRTQTZGA-REP3URVC-M8ADL4BJ",
                        WYRE_PRODUCTION_API_KEY: "AK-AG7L2AXZ-48AZ9JDF-2CBA8983-HWP248G9",
                        WYRE_REDIRECT_URL: "google.com",
                        RAMP_API_KEY: "pnz6phbppcp8gxhybkfth5j5ks25aevtqp5ffhk6",
                        RAMP_PRODUCTION_API_KEY: "vgmxu289c9ukwz6savhqae6d5dsk665u7uggqpvo",
                        NODE_ENV: "production",
                        LOOPRING_GOERLI_API_KEY: "VK1Xq1Z6VEhm3m778bPsmiarKyuFWI6GvdvUMsqZ3qO0RfYov7PyLbw8w0eLQXBn",
                        LOOPRING_MAINNET_API_KEY: "xmElM0SGw657amhSSpx85vTROhQxZZYWgdPmvx4W5fL4iEUju7vDy2GBIMw09Ejw",
                        MIXPANEL_TOKEN: "a91581c1dbf398eebb65fbe251116e8f",
                        GME_EXTENSION_BACKEND_URL: "https://api.extension.gamestop.com",
                        GME_WALLET_BACKEND_URL: "https://api.extension.gamestop.com",
                        GME_WALLET_PRICING_BACKEND_URL: "https://api.extension.gamestop.com",
                        GME_WALLET_RISK_BACKEND_URL: "https://api.extension.gamestop.com",
                        MAX_SLIPPAGE_PERCENT: "10",
                        DEFAULT_SLIPPAGE_PERCENT: "3",
                        CACHE_TTL: "30000",
                        SENTRY_DSN_URL: "https://e50a2836dee44522b2ef76b4d3c9662d@o1178273.ingest.sentry.io/6289426",
                        BUGSNAG_API_KEY: "8d77617bae6803bd249bff95b409f812",
                        CHROME_EXTENSION_PRODUCTION_ID: "mfdekmmicdfiflhjkoaddhpfdiajikpk",
                        PROVIDER_BASE_URL: "https://api.extension.gamestop.com/ethereum",
                        LR_L2_SWAP_FEE_BIPS: "30",
                        GME_L2_SWAP_FEE_BIPS: "70",
                    }.NODE_DEBUG;
                    (u = u
                        .replace(/[|\\{}()[\]^$+?.]/g, "\\$&")
                        .replace(/\*/g, ".*")
                        .replace(/,/g, "$|^")
                        .toUpperCase()),
                        (s = new RegExp("^" + u + "$", "i"));
                }
                function l(e, r) {
                    var n = { seen: [], stylize: p };
                    return (
                        arguments.length >= 3 && (n.depth = arguments[2]),
                        arguments.length >= 4 && (n.colors = arguments[3]),
                        A(r) ? (n.showHidden = r) : r && t._extend(n, r),
                        E(n.showHidden) && (n.showHidden = !1),
                        E(n.depth) && (n.depth = 2),
                        E(n.colors) && (n.colors = !1),
                        E(n.customInspect) && (n.customInspect = !0),
                        n.colors && (n.stylize = f),
                        g(n, e, n.depth)
                    );
                }
                function f(e, t) {
                    var r = l.styles[t];
                    return r ? "[" + l.colors[r][0] + "m" + e + "[" + l.colors[r][1] + "m" : e;
                }
                function p(e, t) {
                    return e;
                }
                function g(e, r, n) {
                    if (e.customInspect && r && j(r.inspect) && r.inspect !== t.inspect && (!r.constructor || r.constructor.prototype !== r)) {
                        var o = r.inspect(n, e);
                        return v(o) || (o = g(e, o, n)), o;
                    }
                    var i = (function (e, t) {
                        if (E(t)) return e.stylize("undefined", "undefined");
                        if (v(t)) {
                            var r = "'" + JSON.stringify(t).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
                            return e.stylize(r, "string");
                        }
                        if (h(t)) return e.stylize("" + t, "number");
                        if (A(t)) return e.stylize("" + t, "boolean");
                        if (b(t)) return e.stylize("null", "null");
                    })(e, r);
                    if (i) return i;
                    var a = Object.keys(r),
                        c = (function (e) {
                            var t = {};
                            return (
                                e.forEach(function (e, r) {
                                    t[e] = !0;
                                }),
                                t
                            );
                        })(a);
                    if ((e.showHidden && (a = Object.getOwnPropertyNames(r)), O(r) && (a.indexOf("message") >= 0 || a.indexOf("description") >= 0))) return y(r);
                    if (0 === a.length) {
                        if (j(r)) {
                            var s = r.name ? ": " + r.name : "";
                            return e.stylize("[Function" + s + "]", "special");
                        }
                        if (w(r)) return e.stylize(RegExp.prototype.toString.call(r), "regexp");
                        if (S(r)) return e.stylize(Date.prototype.toString.call(r), "date");
                        if (O(r)) return y(r);
                    }
                    var u,
                        l = "",
                        f = !1,
                        p = ["{", "}"];
                    (d(r) && ((f = !0), (p = ["[", "]"])), j(r)) && (l = " [Function" + (r.name ? ": " + r.name : "") + "]");
                    return (
                        w(r) && (l = " " + RegExp.prototype.toString.call(r)),
                        S(r) && (l = " " + Date.prototype.toUTCString.call(r)),
                        O(r) && (l = " " + y(r)),
                        0 !== a.length || (f && 0 != r.length)
                            ? n < 0
                                ? w(r)
                                    ? e.stylize(RegExp.prototype.toString.call(r), "regexp")
                                    : e.stylize("[Object]", "special")
                                : (e.seen.push(r),
                                  (u = f
                                      ? (function (e, t, r, n, o) {
                                            for (var i = [], a = 0, c = t.length; a < c; ++a) I(t, String(a)) ? i.push(m(e, t, r, n, String(a), !0)) : i.push("");
                                            return (
                                                o.forEach(function (o) {
                                                    o.match(/^\d+$/) || i.push(m(e, t, r, n, o, !0));
                                                }),
                                                i
                                            );
                                        })(e, r, n, c, a)
                                      : a.map(function (t) {
                                            return m(e, r, n, c, t, f);
                                        })),
                                  e.seen.pop(),
                                  (function (e, t, r) {
                                      if (
                                          e.reduce(function (e, t) {
                                              return t.indexOf("\n") >= 0 && 0, e + t.replace(/\u001b\[\d\d?m/g, "").length + 1;
                                          }, 0) > 60
                                      )
                                          return r[0] + ("" === t ? "" : t + "\n ") + " " + e.join(",\n  ") + " " + r[1];
                                      return r[0] + t + " " + e.join(", ") + " " + r[1];
                                  })(u, l, p))
                            : p[0] + l + p[1]
                    );
                }
                function y(e) {
                    return "[" + Error.prototype.toString.call(e) + "]";
                }
                function m(e, t, r, n, o, i) {
                    var a, c, s;
                    if (
                        ((s = Object.getOwnPropertyDescriptor(t, o) || { value: t[o] }).get ? (c = s.set ? e.stylize("[Getter/Setter]", "special") : e.stylize("[Getter]", "special")) : s.set && (c = e.stylize("[Setter]", "special")),
                        I(n, o) || (a = "[" + o + "]"),
                        c ||
                            (e.seen.indexOf(s.value) < 0
                                ? (c = b(r) ? g(e, s.value, null) : g(e, s.value, r - 1)).indexOf("\n") > -1 &&
                                  (c = i
                                      ? c
                                            .split("\n")
                                            .map(function (e) {
                                                return "  " + e;
                                            })
                                            .join("\n")
                                            .substr(2)
                                      : "\n" +
                                        c
                                            .split("\n")
                                            .map(function (e) {
                                                return "   " + e;
                                            })
                                            .join("\n"))
                                : (c = e.stylize("[Circular]", "special"))),
                        E(a))
                    ) {
                        if (i && o.match(/^\d+$/)) return c;
                        (a = JSON.stringify("" + o)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)
                            ? ((a = a.substr(1, a.length - 2)), (a = e.stylize(a, "name")))
                            : ((a = a
                                  .replace(/'/g, "\\'")
                                  .replace(/\\"/g, '"')
                                  .replace(/(^"|"$)/g, "'")),
                              (a = e.stylize(a, "string")));
                    }
                    return a + ": " + c;
                }
                function d(e) {
                    return Array.isArray(e);
                }
                function A(e) {
                    return "boolean" == typeof e;
                }
                function b(e) {
                    return null === e;
                }
                function h(e) {
                    return "number" == typeof e;
                }
                function v(e) {
                    return "string" == typeof e;
                }
                function E(e) {
                    return void 0 === e;
                }
                function w(e) {
                    return x(e) && "[object RegExp]" === _(e);
                }
                function x(e) {
                    return "object" == typeof e && null !== e;
                }
                function S(e) {
                    return x(e) && "[object Date]" === _(e);
                }
                function O(e) {
                    return x(e) && ("[object Error]" === _(e) || e instanceof Error);
                }
                function j(e) {
                    return "function" == typeof e;
                }
                function _(e) {
                    return Object.prototype.toString.call(e);
                }
                function P(e) {
                    return e < 10 ? "0" + e.toString(10) : e.toString(10);
                }
                (t.debuglog = function (e) {
                    if (((e = e.toUpperCase()), !c[e]))
                        if (s.test(e)) {
                            var r = n.pid;
                            c[e] = function () {
                                var n = t.format.apply(t, arguments);
                                o.error("%s %d: %s", e, r, n);
                            };
                        } else c[e] = function () {};
                    return c[e];
                }),
                    (t.inspect = l),
                    (l.colors = {
                        bold: [1, 22],
                        italic: [3, 23],
                        underline: [4, 24],
                        inverse: [7, 27],
                        white: [37, 39],
                        grey: [90, 39],
                        black: [30, 39],
                        blue: [34, 39],
                        cyan: [36, 39],
                        green: [32, 39],
                        magenta: [35, 39],
                        red: [31, 39],
                        yellow: [33, 39],
                    }),
                    (l.styles = { special: "cyan", number: "yellow", boolean: "yellow", undefined: "grey", null: "bold", string: "green", date: "magenta", regexp: "red" }),
                    (t.types = r(59667)),
                    (t.isArray = d),
                    (t.isBoolean = A),
                    (t.isNull = b),
                    (t.isNullOrUndefined = function (e) {
                        return null == e;
                    }),
                    (t.isNumber = h),
                    (t.isString = v),
                    (t.isSymbol = function (e) {
                        return "symbol" == typeof e;
                    }),
                    (t.isUndefined = E),
                    (t.isRegExp = w),
                    (t.types.isRegExp = w),
                    (t.isObject = x),
                    (t.isDate = S),
                    (t.types.isDate = S),
                    (t.isError = O),
                    (t.types.isNativeError = O),
                    (t.isFunction = j),
                    (t.isPrimitive = function (e) {
                        return null === e || "boolean" == typeof e || "number" == typeof e || "string" == typeof e || "symbol" == typeof e || void 0 === e;
                    }),
                    (t.isBuffer = r(41955));
                var R = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                function T() {
                    var e = new Date(),
                        t = [P(e.getHours()), P(e.getMinutes()), P(e.getSeconds())].join(":");
                    return [e.getDate(), R[e.getMonth()], t].join(" ");
                }
                function I(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t);
                }
                (t.log = function () {
                    o.log("%s - %s", T(), t.format.apply(t, arguments));
                }),
                    (t.inherits = r(79344)),
                    (t._extend = function (e, t) {
                        if (!t || !x(t)) return e;
                        for (var r = Object.keys(t), n = r.length; n--; ) e[r[n]] = t[r[n]];
                        return e;
                    });
                var k = "undefined" != typeof Symbol ? Symbol("util.promisify.custom") : void 0;
                function N(e, t) {
                    if (!e) {
                        var r = new Error("Promise was rejected with a falsy value");
                        (r.reason = e), (e = r);
                    }
                    return t(e);
                }
                (t.promisify = function (e) {
                    if ("function" != typeof e) throw new TypeError('The "original" argument must be of type Function');
                    if (k && e[k]) {
                        var t;
                        if ("function" != typeof (t = e[k])) throw new TypeError('The "util.promisify.custom" argument must be of type Function');
                        return Object.defineProperty(t, k, { value: t, enumerable: !1, writable: !1, configurable: !0 }), t;
                    }
                    function t() {
                        for (
                            var t,
                                r,
                                n = new Promise(function (e, n) {
                                    (t = e), (r = n);
                                }),
                                o = [],
                                i = 0;
                            i < arguments.length;
                            i++
                        )
                            o.push(arguments[i]);
                        o.push(function (e, n) {
                            e ? r(e) : t(n);
                        });
                        try {
                            e.apply(this, o);
                        } catch (e) {
                            r(e);
                        }
                        return n;
                    }
                    return Object.setPrototypeOf(t, Object.getPrototypeOf(e)), k && Object.defineProperty(t, k, { value: t, enumerable: !1, writable: !1, configurable: !0 }), Object.defineProperties(t, i(e));
                }),
                    (t.promisify.custom = k),
                    (t.callbackify = function (e) {
                        if ("function" != typeof e) throw new TypeError('The "original" argument must be of type Function');
                        function t() {
                            for (var t = [], r = 0; r < arguments.length; r++) t.push(arguments[r]);
                            var o = t.pop();
                            if ("function" != typeof o) throw new TypeError("The last argument must be of type Function");
                            var i = this,
                                a = function () {
                                    return o.apply(i, arguments);
                                };
                            e.apply(this, t).then(
                                function (e) {
                                    n.nextTick(a.bind(null, null, e));
                                },
                                function (e) {
                                    n.nextTick(N.bind(null, e, a));
                                }
                            );
                        }
                        return Object.setPrototypeOf(t, Object.getPrototypeOf(e)), Object.defineProperties(t, i(e)), t;
                    });
            },
            41667: function (e, t, r) {
                var n,
                    o,
                    i,
                    a = r(29255);
                "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self,
                    (o = [e]),
                    void 0 ===
                        (i =
                            "function" ==
                            typeof (n = function (e) {
                                "use strict";
                                if ("undefined" == typeof browser || Object.getPrototypeOf(browser) !== Object.prototype) {
                                    const t = "The message port closed before a response was received.",
                                        r =
                                            "Returning a Promise is the preferred way to send a reply from an onMessage/onMessageExternal listener, as the sendResponse will be removed from the specs (See https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)",
                                        n = (e) => {
                                            const n = {
                                                alarms: { clear: { minArgs: 0, maxArgs: 1 }, clearAll: { minArgs: 0, maxArgs: 0 }, get: { minArgs: 0, maxArgs: 1 }, getAll: { minArgs: 0, maxArgs: 0 } },
                                                bookmarks: {
                                                    create: { minArgs: 1, maxArgs: 1 },
                                                    get: { minArgs: 1, maxArgs: 1 },
                                                    getChildren: { minArgs: 1, maxArgs: 1 },
                                                    getRecent: { minArgs: 1, maxArgs: 1 },
                                                    getSubTree: { minArgs: 1, maxArgs: 1 },
                                                    getTree: { minArgs: 0, maxArgs: 0 },
                                                    move: { minArgs: 2, maxArgs: 2 },
                                                    remove: { minArgs: 1, maxArgs: 1 },
                                                    removeTree: { minArgs: 1, maxArgs: 1 },
                                                    search: { minArgs: 1, maxArgs: 1 },
                                                    update: { minArgs: 2, maxArgs: 2 },
                                                },
                                                browserAction: {
                                                    disable: { minArgs: 0, maxArgs: 1, fallbackToNoCallback: !0 },
                                                    enable: { minArgs: 0, maxArgs: 1, fallbackToNoCallback: !0 },
                                                    getBadgeBackgroundColor: { minArgs: 1, maxArgs: 1 },
                                                    getBadgeText: { minArgs: 1, maxArgs: 1 },
                                                    getPopup: { minArgs: 1, maxArgs: 1 },
                                                    getTitle: { minArgs: 1, maxArgs: 1 },
                                                    openPopup: { minArgs: 0, maxArgs: 0 },
                                                    setBadgeBackgroundColor: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                                                    setBadgeText: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                                                    setIcon: { minArgs: 1, maxArgs: 1 },
                                                    setPopup: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                                                    setTitle: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                                                },
                                                browsingData: {
                                                    remove: { minArgs: 2, maxArgs: 2 },
                                                    removeCache: { minArgs: 1, maxArgs: 1 },
                                                    removeCookies: { minArgs: 1, maxArgs: 1 },
                                                    removeDownloads: { minArgs: 1, maxArgs: 1 },
                                                    removeFormData: { minArgs: 1, maxArgs: 1 },
                                                    removeHistory: { minArgs: 1, maxArgs: 1 },
                                                    removeLocalStorage: { minArgs: 1, maxArgs: 1 },
                                                    removePasswords: { minArgs: 1, maxArgs: 1 },
                                                    removePluginData: { minArgs: 1, maxArgs: 1 },
                                                    settings: { minArgs: 0, maxArgs: 0 },
                                                },
                                                commands: { getAll: { minArgs: 0, maxArgs: 0 } },
                                                contextMenus: { remove: { minArgs: 1, maxArgs: 1 }, removeAll: { minArgs: 0, maxArgs: 0 }, update: { minArgs: 2, maxArgs: 2 } },
                                                cookies: {
                                                    get: { minArgs: 1, maxArgs: 1 },
                                                    getAll: { minArgs: 1, maxArgs: 1 },
                                                    getAllCookieStores: { minArgs: 0, maxArgs: 0 },
                                                    remove: { minArgs: 1, maxArgs: 1 },
                                                    set: { minArgs: 1, maxArgs: 1 },
                                                },
                                                devtools: {
                                                    inspectedWindow: { eval: { minArgs: 1, maxArgs: 2, singleCallbackArg: !1 } },
                                                    panels: { create: { minArgs: 3, maxArgs: 3, singleCallbackArg: !0 }, elements: { createSidebarPane: { minArgs: 1, maxArgs: 1 } } },
                                                },
                                                downloads: {
                                                    cancel: { minArgs: 1, maxArgs: 1 },
                                                    download: { minArgs: 1, maxArgs: 1 },
                                                    erase: { minArgs: 1, maxArgs: 1 },
                                                    getFileIcon: { minArgs: 1, maxArgs: 2 },
                                                    open: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                                                    pause: { minArgs: 1, maxArgs: 1 },
                                                    removeFile: { minArgs: 1, maxArgs: 1 },
                                                    resume: { minArgs: 1, maxArgs: 1 },
                                                    search: { minArgs: 1, maxArgs: 1 },
                                                    show: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                                                },
                                                extension: { isAllowedFileSchemeAccess: { minArgs: 0, maxArgs: 0 }, isAllowedIncognitoAccess: { minArgs: 0, maxArgs: 0 } },
                                                history: {
                                                    addUrl: { minArgs: 1, maxArgs: 1 },
                                                    deleteAll: { minArgs: 0, maxArgs: 0 },
                                                    deleteRange: { minArgs: 1, maxArgs: 1 },
                                                    deleteUrl: { minArgs: 1, maxArgs: 1 },
                                                    getVisits: { minArgs: 1, maxArgs: 1 },
                                                    search: { minArgs: 1, maxArgs: 1 },
                                                },
                                                i18n: { detectLanguage: { minArgs: 1, maxArgs: 1 }, getAcceptLanguages: { minArgs: 0, maxArgs: 0 } },
                                                identity: { launchWebAuthFlow: { minArgs: 1, maxArgs: 1 } },
                                                idle: { queryState: { minArgs: 1, maxArgs: 1 } },
                                                management: {
                                                    get: { minArgs: 1, maxArgs: 1 },
                                                    getAll: { minArgs: 0, maxArgs: 0 },
                                                    getSelf: { minArgs: 0, maxArgs: 0 },
                                                    setEnabled: { minArgs: 2, maxArgs: 2 },
                                                    uninstallSelf: { minArgs: 0, maxArgs: 1 },
                                                },
                                                notifications: {
                                                    clear: { minArgs: 1, maxArgs: 1 },
                                                    create: { minArgs: 1, maxArgs: 2 },
                                                    getAll: { minArgs: 0, maxArgs: 0 },
                                                    getPermissionLevel: { minArgs: 0, maxArgs: 0 },
                                                    update: { minArgs: 2, maxArgs: 2 },
                                                },
                                                pageAction: {
                                                    getPopup: { minArgs: 1, maxArgs: 1 },
                                                    getTitle: { minArgs: 1, maxArgs: 1 },
                                                    hide: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                                                    setIcon: { minArgs: 1, maxArgs: 1 },
                                                    setPopup: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                                                    setTitle: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                                                    show: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                                                },
                                                permissions: { contains: { minArgs: 1, maxArgs: 1 }, getAll: { minArgs: 0, maxArgs: 0 }, remove: { minArgs: 1, maxArgs: 1 }, request: { minArgs: 1, maxArgs: 1 } },
                                                runtime: {
                                                    getBackgroundPage: { minArgs: 0, maxArgs: 0 },
                                                    getPlatformInfo: { minArgs: 0, maxArgs: 0 },
                                                    openOptionsPage: { minArgs: 0, maxArgs: 0 },
                                                    requestUpdateCheck: { minArgs: 0, maxArgs: 0 },
                                                    sendMessage: { minArgs: 1, maxArgs: 3 },
                                                    sendNativeMessage: { minArgs: 2, maxArgs: 2 },
                                                    setUninstallURL: { minArgs: 1, maxArgs: 1 },
                                                },
                                                sessions: { getDevices: { minArgs: 0, maxArgs: 1 }, getRecentlyClosed: { minArgs: 0, maxArgs: 1 }, restore: { minArgs: 0, maxArgs: 1 } },
                                                storage: {
                                                    local: {
                                                        clear: { minArgs: 0, maxArgs: 0 },
                                                        get: { minArgs: 0, maxArgs: 1 },
                                                        getBytesInUse: { minArgs: 0, maxArgs: 1 },
                                                        remove: { minArgs: 1, maxArgs: 1 },
                                                        set: { minArgs: 1, maxArgs: 1 },
                                                    },
                                                    managed: { get: { minArgs: 0, maxArgs: 1 }, getBytesInUse: { minArgs: 0, maxArgs: 1 } },
                                                    sync: {
                                                        clear: { minArgs: 0, maxArgs: 0 },
                                                        get: { minArgs: 0, maxArgs: 1 },
                                                        getBytesInUse: { minArgs: 0, maxArgs: 1 },
                                                        remove: { minArgs: 1, maxArgs: 1 },
                                                        set: { minArgs: 1, maxArgs: 1 },
                                                    },
                                                },
                                                tabs: {
                                                    captureVisibleTab: { minArgs: 0, maxArgs: 2 },
                                                    create: { minArgs: 1, maxArgs: 1 },
                                                    detectLanguage: { minArgs: 0, maxArgs: 1 },
                                                    discard: { minArgs: 0, maxArgs: 1 },
                                                    duplicate: { minArgs: 1, maxArgs: 1 },
                                                    executeScript: { minArgs: 1, maxArgs: 2 },
                                                    get: { minArgs: 1, maxArgs: 1 },
                                                    getCurrent: { minArgs: 0, maxArgs: 0 },
                                                    getZoom: { minArgs: 0, maxArgs: 1 },
                                                    getZoomSettings: { minArgs: 0, maxArgs: 1 },
                                                    goBack: { minArgs: 0, maxArgs: 1 },
                                                    goForward: { minArgs: 0, maxArgs: 1 },
                                                    highlight: { minArgs: 1, maxArgs: 1 },
                                                    insertCSS: { minArgs: 1, maxArgs: 2 },
                                                    move: { minArgs: 2, maxArgs: 2 },
                                                    query: { minArgs: 1, maxArgs: 1 },
                                                    reload: { minArgs: 0, maxArgs: 2 },
                                                    remove: { minArgs: 1, maxArgs: 1 },
                                                    removeCSS: { minArgs: 1, maxArgs: 2 },
                                                    sendMessage: { minArgs: 2, maxArgs: 3 },
                                                    setZoom: { minArgs: 1, maxArgs: 2 },
                                                    setZoomSettings: { minArgs: 1, maxArgs: 2 },
                                                    update: { minArgs: 1, maxArgs: 2 },
                                                },
                                                topSites: { get: { minArgs: 0, maxArgs: 0 } },
                                                webNavigation: { getAllFrames: { minArgs: 1, maxArgs: 1 }, getFrame: { minArgs: 1, maxArgs: 1 } },
                                                webRequest: { handlerBehaviorChanged: { minArgs: 0, maxArgs: 0 } },
                                                windows: {
                                                    create: { minArgs: 0, maxArgs: 1 },
                                                    get: { minArgs: 1, maxArgs: 2 },
                                                    getAll: { minArgs: 0, maxArgs: 1 },
                                                    getCurrent: { minArgs: 0, maxArgs: 1 },
                                                    getLastFocused: { minArgs: 0, maxArgs: 1 },
                                                    remove: { minArgs: 1, maxArgs: 1 },
                                                    update: { minArgs: 2, maxArgs: 2 },
                                                },
                                            };
                                            if (0 === Object.keys(n).length) throw new Error("api-metadata.json has not been included in browser-polyfill");
                                            class o extends WeakMap {
                                                constructor(e, t) {
                                                    super(t), (this.createItem = e);
                                                }
                                                get(e) {
                                                    return this.has(e) || this.set(e, this.createItem(e)), super.get(e);
                                                }
                                            }
                                            const i = (e) => e && "object" == typeof e && "function" == typeof e.then,
                                                c = (t, r) => (...n) => {
                                                    e.runtime.lastError ? t.reject(new Error(e.runtime.lastError.message)) : r.singleCallbackArg || (n.length <= 1 && !1 !== r.singleCallbackArg) ? t.resolve(n[0]) : t.resolve(n);
                                                },
                                                s = (e) => (1 == e ? "argument" : "arguments"),
                                                u = (e, t) =>
                                                    function (r, ...n) {
                                                        if (n.length < t.minArgs) throw new Error(`Expected at least ${t.minArgs} ${s(t.minArgs)} for ${e}(), got ${n.length}`);
                                                        if (n.length > t.maxArgs) throw new Error(`Expected at most ${t.maxArgs} ${s(t.maxArgs)} for ${e}(), got ${n.length}`);
                                                        return new Promise((o, i) => {
                                                            if (t.fallbackToNoCallback)
                                                                try {
                                                                    r[e](...n, c({ resolve: o, reject: i }, t));
                                                                } catch (i) {
                                                                    a.warn(`${e} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `, i),
                                                                        r[e](...n),
                                                                        (t.fallbackToNoCallback = !1),
                                                                        (t.noCallback = !0),
                                                                        o();
                                                                }
                                                            else t.noCallback ? (r[e](...n), o()) : r[e](...n, c({ resolve: o, reject: i }, t));
                                                        });
                                                    },
                                                l = (e, t, r) => new Proxy(t, { apply: (t, n, o) => r.call(n, e, ...o) });
                                            let f = Function.call.bind(Object.prototype.hasOwnProperty);
                                            const p = (e, t = {}, r = {}) => {
                                                    let n = Object.create(null),
                                                        o = {
                                                            has: (t, r) => r in e || r in n,
                                                            get(o, i, a) {
                                                                if (i in n) return n[i];
                                                                if (!(i in e)) return;
                                                                let c = e[i];
                                                                if ("function" == typeof c)
                                                                    if ("function" == typeof t[i]) c = l(e, e[i], t[i]);
                                                                    else if (f(r, i)) {
                                                                        let t = u(i, r[i]);
                                                                        c = l(e, e[i], t);
                                                                    } else c = c.bind(e);
                                                                else if ("object" == typeof c && null !== c && (f(t, i) || f(r, i))) c = p(c, t[i], r[i]);
                                                                else {
                                                                    if (!f(r, "*"))
                                                                        return (
                                                                            Object.defineProperty(n, i, {
                                                                                configurable: !0,
                                                                                enumerable: !0,
                                                                                get: () => e[i],
                                                                                set(t) {
                                                                                    e[i] = t;
                                                                                },
                                                                            }),
                                                                            c
                                                                        );
                                                                    c = p(c, t[i], r["*"]);
                                                                }
                                                                return (n[i] = c), c;
                                                            },
                                                            set: (t, r, o, i) => (r in n ? (n[r] = o) : (e[r] = o), !0),
                                                            defineProperty: (e, t, r) => Reflect.defineProperty(n, t, r),
                                                            deleteProperty: (e, t) => Reflect.deleteProperty(n, t),
                                                        },
                                                        i = Object.create(e);
                                                    return new Proxy(i, o);
                                                },
                                                g = (e) => ({
                                                    addListener(t, r, ...n) {
                                                        t.addListener(e.get(r), ...n);
                                                    },
                                                    hasListener: (t, r) => t.hasListener(e.get(r)),
                                                    removeListener(t, r) {
                                                        t.removeListener(e.get(r));
                                                    },
                                                }),
                                                y = new o((e) =>
                                                    "function" != typeof e
                                                        ? e
                                                        : function (t) {
                                                              const r = p(t, {}, { getContent: { minArgs: 0, maxArgs: 0 } });
                                                              e(r);
                                                          }
                                                );
                                            let m = !1;
                                            const d = new o((e) =>
                                                    "function" != typeof e
                                                        ? e
                                                        : function (t, n, o) {
                                                              let c,
                                                                  s,
                                                                  u = !1,
                                                                  l = new Promise((e) => {
                                                                      c = function (t) {
                                                                          m || (a.warn(r, new Error().stack), (m = !0)), (u = !0), e(t);
                                                                      };
                                                                  });
                                                              try {
                                                                  s = e(t, n, c);
                                                              } catch (e) {
                                                                  s = Promise.reject(e);
                                                              }
                                                              const f = !0 !== s && i(s);
                                                              if (!0 !== s && !f && !u) return !1;
                                                              const p = (e) => {
                                                                  e.then(
                                                                      (e) => {
                                                                          o(e);
                                                                      },
                                                                      (e) => {
                                                                          let t;
                                                                          (t = e && (e instanceof Error || "string" == typeof e.message) ? e.message : "An unexpected error occurred"),
                                                                              o({ __mozWebExtensionPolyfillReject__: !0, message: t });
                                                                      }
                                                                  ).catch((e) => {
                                                                      a.error("Failed to send onMessage rejected reply", e);
                                                                  });
                                                              };
                                                              return p(f ? s : l), !0;
                                                          }
                                                ),
                                                A = ({ reject: r, resolve: n }, o) => {
                                                    e.runtime.lastError ? (e.runtime.lastError.message === t ? n() : r(new Error(e.runtime.lastError.message))) : o && o.__mozWebExtensionPolyfillReject__ ? r(new Error(o.message)) : n(o);
                                                },
                                                b = (e, t, r, ...n) => {
                                                    if (n.length < t.minArgs) throw new Error(`Expected at least ${t.minArgs} ${s(t.minArgs)} for ${e}(), got ${n.length}`);
                                                    if (n.length > t.maxArgs) throw new Error(`Expected at most ${t.maxArgs} ${s(t.maxArgs)} for ${e}(), got ${n.length}`);
                                                    return new Promise((e, t) => {
                                                        const o = A.bind(null, { resolve: e, reject: t });
                                                        n.push(o), r.sendMessage(...n);
                                                    });
                                                },
                                                h = {
                                                    devtools: { network: { onRequestFinished: g(y) } },
                                                    runtime: { onMessage: g(d), onMessageExternal: g(d), sendMessage: b.bind(null, "sendMessage", { minArgs: 1, maxArgs: 3 }) },
                                                    tabs: { sendMessage: b.bind(null, "sendMessage", { minArgs: 2, maxArgs: 3 }) },
                                                },
                                                v = { clear: { minArgs: 1, maxArgs: 1 }, get: { minArgs: 1, maxArgs: 1 }, set: { minArgs: 1, maxArgs: 1 } };
                                            return (n.privacy = { network: { "*": v }, services: { "*": v }, websites: { "*": v } }), p(e, h, n);
                                        };
                                    if ("object" != typeof chrome || !chrome || !chrome.runtime || !chrome.runtime.id) throw new Error("This script should only be loaded in a browser extension.");
                                    e.exports = n(chrome);
                                } else e.exports = browser;
                            })
                                ? n.apply(t, o)
                                : n) || (e.exports = i);
            },
            2685: (e, t, r) => {
                "use strict";
                var n = r(53426),
                    o = r(36414),
                    i = r(91870),
                    a = i("Object.prototype.toString"),
                    c = r(10754)(),
                    s = "undefined" == typeof globalThis ? r.g : globalThis,
                    u = o(),
                    l = i("String.prototype.slice"),
                    f = {},
                    p = r(16706),
                    g = Object.getPrototypeOf;
                c &&
                    p &&
                    g &&
                    n(u, function (e) {
                        if ("function" == typeof s[e]) {
                            var t = new s[e]();
                            if (Symbol.toStringTag in t) {
                                var r = g(t),
                                    n = p(r, Symbol.toStringTag);
                                if (!n) {
                                    var o = g(r);
                                    n = p(o, Symbol.toStringTag);
                                }
                                f[e] = n.get;
                            }
                        }
                    });
                var y = r(98790);
                e.exports = function (e) {
                    return (
                        !!y(e) &&
                        (c && Symbol.toStringTag in e
                            ? (function (e) {
                                  var t = !1;
                                  return (
                                      n(f, function (r, n) {
                                          if (!t)
                                              try {
                                                  var o = r.call(e);
                                                  o === n && (t = o);
                                              } catch (e) {}
                                      }),
                                      t
                                  );
                              })(e)
                            : l(a(e), 8, -1))
                    );
                };
            },
            36414: (e, t, r) => {
                "use strict";
                var n = ["BigInt64Array", "BigUint64Array", "Float32Array", "Float64Array", "Int16Array", "Int32Array", "Int8Array", "Uint16Array", "Uint32Array", "Uint8Array", "Uint8ClampedArray"],
                    o = "undefined" == typeof globalThis ? r.g : globalThis;
                e.exports = function () {
                    for (var e = [], t = 0; t < n.length; t++) "function" == typeof o[n[t]] && (e[e.length] = n[t]);
                    return e;
                };
            },
            16706: (e, t, r) => {
                "use strict";
                var n = r(9035)("%Object.getOwnPropertyDescriptor%", !0);
                if (n)
                    try {
                        n([], "length");
                    } catch (e) {
                        n = null;
                    }
                e.exports = n;
            },
        },
        t = {};
    function r(n) {
        var o = t[n];
        if (void 0 !== o) return o.exports;
        var i = (t[n] = { exports: {} });
        return e[n].call(i.exports, i, i.exports, r), i.exports;
    }
    (r.n = (e) => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return r.d(t, { a: t }), t;
    }),
        (r.d = (e, t) => {
            for (var n in t) r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        }),
        (r.g = (function () {
            if ("object" == typeof globalThis) return globalThis;
            try {
                return this || new Function("return this")();
            } catch (e) {
                if ("object" == typeof window) return window;
            }
        })()),
        (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (("undefined" != typeof window ? window : void 0 !== r.g ? r.g : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = { id: "0.1.0" }),
        (() => {
            "use strict";
            var e = r(41667),
                t = r.n(e);
            const n = "gme-wallet-bridge",
                o = "gme-window-provider";
            r(29255);
            function i() {}
            function a(e) {
                return e();
            }
            function c(e) {
                e.forEach(a);
            }
            function s(e) {
                return "function" == typeof e;
            }
            function u(e) {
                return 0 === Object.keys(e).length;
            }
            function l(e, ...t) {
                if (null == e) return i;
                const r = e.subscribe(...t);
                return r.unsubscribe ? () => r.unsubscribe() : r;
            }
            new Set();
            new Map();
            Promise.resolve();
            new Set();
            new Set();
            "undefined" != typeof window ? window : "undefined" != typeof globalThis ? globalThis : global;
            new Set([
                "allowfullscreen",
                "allowpaymentrequest",
                "async",
                "autofocus",
                "autoplay",
                "checked",
                "controls",
                "default",
                "defer",
                "disabled",
                "formnovalidate",
                "hidden",
                "ismap",
                "loop",
                "multiple",
                "muted",
                "nomodule",
                "novalidate",
                "open",
                "playsinline",
                "readonly",
                "required",
                "reversed",
                "selected",
            ]);
            let f;
            function p(e, t) {
                const r = e.$$;
                null !== r.fragment && (c(r.on_destroy), r.fragment && r.fragment.d(t), (r.on_destroy = r.fragment = null), (r.ctx = []));
            }
            "function" == typeof HTMLElement &&
                (f = class extends HTMLElement {
                    constructor() {
                        super(), this.attachShadow({ mode: "open" });
                    }
                    connectedCallback() {
                        const { on_mount: e } = this.$$;
                        this.$$.on_disconnect = e.map(a).filter(s);
                        for (const e in this.$$.slotted) this.appendChild(this.$$.slotted[e]);
                    }
                    attributeChangedCallback(e, t, r) {
                        this[e] = r;
                    }
                    disconnectedCallback() {
                        c(this.$$.on_disconnect);
                    }
                    $destroy() {
                        p(this, 1), (this.$destroy = i);
                    }
                    $on(e, t) {
                        const r = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
                        return (
                            r.push(t),
                            () => {
                                const e = r.indexOf(t);
                                -1 !== e && r.splice(e, 1);
                            }
                        );
                    }
                    $set(e) {
                        this.$$set && !u(e) && ((this.$$.skip_bound = !0), this.$$set(e), (this.$$.skip_bound = !1));
                    }
                });
            const g = [];
            function y(e, t = i) {
                let r;
                const n = new Set();
                function o(t) {
                    if (((i = t), ((o = e) != o ? i == i : o !== i || (o && "object" == typeof o) || "function" == typeof o) && ((e = t), r))) {
                        const t = !g.length;
                        for (const t of n) t[1](), g.push(t, e);
                        if (t) {
                            for (let e = 0; e < g.length; e += 2) g[e][0](g[e + 1]);
                            g.length = 0;
                        }
                    }
                    var o, i;
                }
                return {
                    set: o,
                    update: function (t) {
                        o(t(e));
                    },
                    subscribe: function (a, c = i) {
                        const s = [a, c];
                        return (
                            n.add(s),
                            1 === n.size && (r = t(o) || i),
                            a(e),
                            () => {
                                n.delete(s), 0 === n.size && (r(), (r = null));
                            }
                        );
                    },
                };
            }
            const m = y();
            r(29255);
            const d = {
                log: function (...e) {
                    0;
                },
                warn: function (...e) {
                    0;
                },
                error: function (...e) {
                    const t = (function (e) {
                        let t;
                        return l(e, (e) => (t = e))(), t;
                    })(m);
                    if (t) {
                        const r = e.find((e) => "object" == typeof e);
                        r ? t.captureError(r) : t.captureError(e[0]);
                    }
                },
            };
            let A = !0;
            const b = window.location.origin;
            let h;
            function v() {
                h = chrome.runtime.connect({ name: n });
                const e = (e) => {
                    if (e.data.target === n) {
                        if (e.origin !== b) return;
                        let t = e.data.request;
                        if ("string" == typeof t) {
                            if ("get_is_default" === t) return void window.postMessage({ id: "get_is_default", result: A, target: o }, b);
                            t = { method: e.data.request };
                        }
                        h.postMessage({ target: "gme-background", id: e.data.id, request: t, hostname: window.location.hostname });
                    }
                };
                window.addEventListener("message", e);
                const t = () => {
                    window.removeEventListener("message", e), v();
                };
                h.onDisconnect.addListener(t),
                    setTimeout(() => {
                        window.removeEventListener("message", e), h.onDisconnect.removeListener(t), h?.disconnect(), (h = null), v();
                    }, 175e3),
                    h.onMessage.addListener((e) => {
                        const { target: t } = e;
                        t === n && window.postMessage({ id: e.id, result: e.result, target: o, error: e.error }, b);
                    });
            }
            (function () {
                const { doctype: e } = window.document;
                if (e && "html" !== e.name) return !1;
                const t = [/\.xml$/u, /\.pdf$/u],
                    r = window.location.pathname;
                for (let e = 0; e < t.length; e++) if (t[e].test(r)) return !1;
                const n = document.documentElement.nodeName;
                return (
                    (!n || "html" === n.toLowerCase()) &&
                    !(
                        window.location.origin.includes("hcaptcha") ||
                        window.location.origin.includes("hotjar") ||
                        window.location.origin.includes("vitals") ||
                        window.location.origin.includes("analytics") ||
                        window.location.origin.includes("marker.io") ||
                        window.location.origin.includes("sentry.io") ||
                        window.location.href.includes("recaptcha") ||
                        window.location.href.includes("go-mpulse")
                    )
                );
            })() &&
                t()
                    .storage.local.get("vault")
                    .then((e) => {
                        e.vault &&
                            t()
                                .storage.local.get("isGmeDefaultWalletExtension")
                                .then((e) => {
                                    e.isGmeDefaultWalletExtension || (A = !1),
                                        (function () {
                                            const e = document.head || document.documentElement,
                                                t = document.createElement("script");
                                            t.src = chrome.runtime.getURL("inpage/index.js");
                                            const r = chrome.runtime.id;
                                            (t.id = "gme-wallet-extension"), t.setAttribute("data-extension-id", r), e.insertBefore(t, e.children[0]);
                                        })(),
                                        v();
                                })
                                .catch((e) => {
                                    d.error(e);
                                });
                    })
                    .catch((e) => d.error(e));
        })();
})();
