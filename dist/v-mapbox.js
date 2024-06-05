import { ArcLayer as A, GeoJsonLayer as P } from "@deck.gl/layers";
import { MapboxLayer as x } from "@deck.gl/mapbox";
import { inject as k, defineComponent as d, useSlots as z, onMounted as i, renderSlot as v, ref as u, watch as _, openBlock as b, createElementBlock as g, onBeforeUnmount as O, shallowRef as D, provide as G, resolveComponent as R, createBlock as B, withCtx as F, createCommentVNode as N } from "vue";
import { AttributionControl as U, FullscreenControl as Z, GeolocateControl as H, NavigationControl as J, ScaleControl as K, Map as W, Popup as Q, Marker as j } from "maplibre-gl";
/*!
* v-mapbox v5.1.0
* (c) 2024 Vinayak Kulkarni
* @license MIT
*/
function p(e, t) {
  const o = k(e, t);
  if (!o)
    throw new Error(`Could not resolve ${e.description}`);
  return o;
}
const c = Symbol("Map"), qe = /* @__PURE__ */ d({
  __name: "VControlAttribution",
  props: {
    options: { default: void 0 },
    position: { default: "bottom-right" }
  },
  setup(e) {
    const t = {
      compact: !1,
      customAttribution: void 0
    }, o = e, a = z();
    let l = p(c);
    i(() => {
      r();
    });
    const r = () => {
      let n = t;
      o.options && (n = {
        ...o.options
      }), a && a.default?.() && (n.customAttribution = a.default()[0].children);
      const y = new U(n);
      l.value.addControl(y, o.position);
    };
    return (n, y) => v(n.$slots, "default");
  }
}), he = /* @__PURE__ */ d({
  __name: "VControlFullscreen",
  props: {
    options: { default: void 0 },
    position: { default: "top-left" }
  },
  setup(e) {
    const t = {
      container: void 0
    }, o = e;
    let a = p(c);
    i(() => {
      l();
    });
    const l = () => {
      const r = new Z(o.options || t);
      a.value.addControl(r, o.position);
    };
    return () => {
    };
  }
}), M = [
  "geolocate",
  "error",
  "outofmaxbounds",
  "trackuserlocationstart",
  "trackuserlocationend"
], Ce = /* @__PURE__ */ d({
  __name: "VControlGeolocate",
  props: {
    options: { default: void 0 },
    position: { default: "top-left" }
  },
  emits: M,
  setup(e, { emit: t }) {
    const o = {
      fitBoundsOptions: {
        linear: !1,
        offset: [0, 0],
        maxZoom: 22
      },
      positionOptions: {
        enableHighAccuracy: !0,
        maximumAge: 0,
        timeout: 6e3
      },
      trackUserLocation: !0,
      showAccuracyCircle: !0,
      showUserLocation: !0
    }, a = e, l = t;
    let r = p(c);
    i(() => {
      n();
    });
    const n = () => {
      const y = new H(a.options || o);
      r.value.addControl(y, a.position), M.forEach((f) => {
        y.on(f, () => {
          l(f);
        });
      });
    };
    return () => {
    };
  }
}), Ie = /* @__PURE__ */ d({
  __name: "VControlNavigation",
  props: {
    options: { default: void 0 },
    position: { default: "top-left" }
  },
  setup(e) {
    const t = {
      showCompass: !0,
      showZoom: !0,
      visualizePitch: !0
    }, o = e, a = k(c);
    i(() => {
      l();
    });
    const l = () => {
      const r = new J(o.options || t);
      a?.value.addControl(r, o.position);
    };
    return () => {
    };
  }
}), Ve = /* @__PURE__ */ d({
  __name: "VControlScale",
  props: {
    options: { default: void 0 },
    position: { default: "bottom-left" }
  },
  setup(e) {
    const t = {
      maxWidth: 100,
      unit: "metric"
    }, o = e, a = k(c);
    i(() => {
      l();
    });
    const l = () => {
      const r = new K(o.options || t);
      a?.value.addControl(r, o.position);
    };
    return () => {
    };
  }
}), ke = d({
  name: "VLayerDeckArc",
  props: {
    layerId: {
      type: String,
      default: "deck.gl-arc-layer",
      required: !0
    },
    data: {
      type: Object,
      required: !0
    },
    options: {
      type: Object,
      required: !0
    },
    before: {
      type: String,
      default: "",
      required: !1
    }
  },
  setup(e) {
    let t = p(c), o = u(!1);
    const a = new x({
      ...e.options,
      id: e.layerId,
      data: e.data,
      type: A
    });
    t.value.on("style.load", () => {
      const r = () => {
        t.value.isStyleLoaded() ? o.value = !0 : (o.value = !1, setTimeout(r, 200));
      };
      r();
    }), _(o, (r) => {
      r && l();
    }), i(() => {
      l();
    });
    function l() {
      t.value.addLayer(a, e.before);
    }
  }
}), Oe = d({
  name: "VLayerDeckGeojson",
  props: {
    layerId: {
      type: String,
      default: "deck.gl-geojson-layer",
      required: !0
    },
    data: {
      type: Object,
      required: !0
    },
    options: {
      type: Object,
      required: !0
    },
    before: {
      type: String,
      default: "",
      required: !1
    }
  },
  setup(e) {
    let t = p(c), o = u(!1);
    const a = new x({
      ...e.options,
      id: e.layerId,
      data: e.data,
      type: P
    });
    t.value.on("style.load", () => {
      const r = () => {
        t.value.isStyleLoaded() ? o.value = !0 : (o.value = !1, setTimeout(r, 200));
      };
      r();
    }), _(o, (r) => {
      r && l();
    }), i(() => {
      l();
    });
    function l() {
      t.value.addLayer(a, e.before);
    }
  }
}), X = d({
  name: "VLayerMapboxCanvas",
  props: {
    sourceId: {
      type: String,
      default: "maplibre.gl-canvas-source",
      required: !0
    },
    layerId: {
      type: String,
      default: "maplibre.gl-canvas-layer",
      required: !0
    },
    source: {
      type: Object,
      required: !0
    },
    layer: {
      type: Object,
      default: () => ({}),
      required: !0
    },
    before: {
      type: String,
      default: "",
      required: !1
    }
  },
  setup(e) {
    let t = p(c), o = u(!1);
    const a = {
      ...e.layer,
      id: e.layerId,
      source: e.sourceId
    }, l = {
      type: "geojson",
      data: e.source
    };
    t.value.on("style.load", () => {
      const n = () => {
        t.value.isStyleLoaded() ? o.value = !0 : (o.value = !1, setTimeout(n, 200));
      };
      n();
    }), _(o, (n) => {
      n && r();
    }), i(() => {
      r();
    });
    function r() {
      t.value.addSource(e.sourceId, l), t.value.addLayer(a, e.before);
    }
  }
}), $ = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [a, l] of t)
    o[a] = l;
  return o;
};
function Y(e, t, o, a, l, r) {
  return b(), g("div", null, [
    v(e.$slots, "default")
  ]);
}
const je = /* @__PURE__ */ $(X, [["render", Y]]), ee = d({
  name: "VLayerMapboxGeojson",
  props: {
    sourceId: {
      type: String,
      default: "maplibre.gl-geojson-source",
      required: !0
    },
    layerId: {
      type: String,
      default: "maplibre.gl-geojson-layer",
      required: !0
    },
    source: {
      type: Object,
      required: !0
    },
    layer: {
      type: Object,
      default: () => ({}),
      required: !0
    },
    before: {
      type: String,
      default: "",
      required: !1
    }
  },
  setup(e) {
    let t = p(c), o = u(!1);
    const a = {
      ...e.layer,
      id: e.layerId,
      source: e.sourceId
    };
    t.value.on("style.load", () => {
      const r = () => {
        t.value.isStyleLoaded() ? o.value = !0 : (o.value = !1, setTimeout(r, 200));
      };
      r();
    }), _(o, (r) => {
      r && l();
    }), i(() => {
      l();
    }), O(() => {
      t.value.getLayer(e.layerId) && (t.value.removeLayer(e.layerId), t.value.removeSource(e.sourceId));
    });
    function l() {
      t.value.addSource(e.sourceId, e.source), t.value.addLayer(a, e.before);
    }
  }
});
function te(e, t, o, a, l, r) {
  return b(), g("div", null, [
    v(e.$slots, "default")
  ]);
}
const Me = /* @__PURE__ */ $(ee, [["render", te]]), oe = d({
  name: "VLayerMapboxImage",
  props: {
    sourceId: {
      type: String,
      default: "maplibre.gl-image-source",
      required: !0
    },
    layerId: {
      type: String,
      default: "maplibre.gl-image-layer",
      required: !0
    },
    source: {
      type: Object,
      required: !0
    },
    layer: {
      type: Object,
      default: () => ({}),
      required: !0
    },
    before: {
      type: String,
      default: "",
      required: !1
    }
  },
  setup(e) {
    let t = p(c), o = u(!1);
    const a = {
      ...e.layer,
      id: e.layerId,
      source: e.sourceId
    };
    t.value.on("style.load", () => {
      const r = () => {
        t.value.isStyleLoaded() ? o.value = !0 : (o.value = !1, setTimeout(r, 200));
      };
      r();
    }), _(o, (r) => {
      r && l();
    }), i(() => {
      l();
    });
    function l() {
      t.value.addSource(e.sourceId, e.source), t.value.addLayer(a, e.before);
    }
  }
});
function ae(e, t, o, a, l, r) {
  return b(), g("div", null, [
    v(e.$slots, "default")
  ]);
}
const we = /* @__PURE__ */ $(oe, [["render", ae]]), re = d({
  name: "VLayerMapboxRaster",
  props: {
    sourceId: {
      type: String,
      default: "maplibre.gl-raster-source",
      required: !0
    },
    layerId: {
      type: String,
      default: "maplibre.gl-raster-layer",
      required: !0
    },
    source: {
      type: Object,
      required: !0
    },
    layer: {
      type: Object,
      default: () => ({}),
      required: !0
    },
    before: {
      type: String,
      default: "",
      required: !1
    }
  },
  setup(e) {
    let t = p(c), o = u(!1);
    const a = {
      ...e.layer,
      id: e.layerId,
      source: e.sourceId
    }, l = {
      type: "geojson",
      data: e.source
    };
    t.value.on("style.load", () => {
      const n = () => {
        t.value.isStyleLoaded() ? o.value = !0 : (o.value = !1, setTimeout(n, 200));
      };
      n();
    }), _(o, (n) => {
      n && r();
    }), i(() => {
      r();
    });
    function r() {
      t.value.addSource(e.sourceId, l), t.value.addLayer(a, e.before);
    }
  }
});
function le(e, t, o, a, l, r) {
  return b(), g("div", null, [
    v(e.$slots, "default")
  ]);
}
const Te = /* @__PURE__ */ $(re, [["render", le]]), ne = d({
  name: "VLayerMapboxVector",
  props: {
    sourceId: {
      type: String,
      default: "maplibre.gl-vector-source",
      required: !0
    },
    layerId: {
      type: String,
      default: "maplibre.gl-vector-layer",
      required: !0
    },
    source: {
      type: Object,
      required: !0
    },
    layer: {
      type: Object,
      default: () => ({}),
      required: !0
    },
    before: {
      type: String,
      default: "",
      required: !1
    }
  },
  setup(e) {
    let t = p(c), o = u(!1);
    const a = {
      ...e.layer,
      id: e.layerId,
      source: e.sourceId
    };
    t.value.on("style.load", () => {
      const r = () => {
        t.value.isStyleLoaded() ? o.value = !0 : (o.value = !1, setTimeout(r, 200));
      };
      r();
    }), _(o, (r) => {
      r && l();
    }), i(() => {
      l();
    });
    function l() {
      t.value.addSource(e.sourceId, e.source), t.value.addLayer(a, e.before);
    }
  }
});
function se(e, t, o, a, l, r) {
  return b(), g("div", null, [
    v(e.$slots, "default")
  ]);
}
const Ee = /* @__PURE__ */ $(ne, [["render", se]]), ue = d({
  name: "VLayerMapboxVideo",
  props: {
    sourceId: {
      type: String,
      default: "maplibre.gl-video-source",
      required: !0
    },
    layerId: {
      type: String,
      default: "maplibre.gl-video-layer",
      required: !0
    },
    source: {
      type: Object,
      required: !0
    },
    layer: {
      type: Object,
      default: () => ({}),
      required: !0
    },
    before: {
      type: String,
      default: "",
      required: !1
    }
  },
  setup(e) {
    let t = p(c), o = u(!1);
    const a = {
      ...e.layer,
      id: e.layerId,
      source: e.sourceId
    };
    t.value.on("style.load", () => {
      const r = () => {
        t.value.isStyleLoaded() ? o.value = !0 : (o.value = !1, setTimeout(r, 200));
      };
      r();
    }), _(o, (r) => {
      r && l();
    }), i(() => {
      l();
    });
    function l() {
      t.value.addSource(e.sourceId, e.source), t.value.addLayer(a, e.before);
    }
  }
});
function de(e, t, o, a, l, r) {
  return b(), g("div", null, [
    v(e.$slots, "default")
  ]);
}
const xe = /* @__PURE__ */ $(ue, [["render", de]]), w = [
  "error",
  "load",
  "idle",
  "remove",
  "render",
  "resize",
  "webglcontextlost",
  "webglcontextrestored",
  "dataloading",
  "data",
  "tiledataloading",
  "sourcedataloading",
  "styledataloading",
  "sourcedata",
  "styledata",
  "boxzoomcancel",
  "boxzoomstart",
  "boxzoomend",
  "touchcancel",
  "touchmove",
  "touchend",
  "touchstart",
  "click",
  "contextmenu",
  "dblclick",
  "mousemove",
  "mouseup",
  "mousedown",
  "mouseout",
  "mouseover",
  "movestart",
  "move",
  "moveend",
  "zoomstart",
  "zoom",
  "zoomend",
  "rotatestart",
  "rotate",
  "rotateend",
  "dragstart",
  "drag",
  "dragend",
  "pitchstart",
  "pitch",
  "pitchend",
  "wheel"
], T = ["dragstart", "drag", "dragend"], E = ["click", "mouseenter", "mouseleave"], V = ["open", "close"], ie = ["id"], ce = /* @__PURE__ */ d({
  __name: "VMap",
  props: {
    options: { default: { container: "map" } }
  },
  emits: ["loaded", ...w],
  setup(e, { emit: t }) {
    const o = e, a = t;
    let l = D({}), r = u(!1), n = u(w);
    i(() => {
      l.value = new W(o.options), r.value = !0, G(c, l), y();
    });
    const y = () => {
      n.value.forEach((f) => {
        l.value.on(f, (L) => {
          switch (f) {
            case "load":
              a("loaded", l.value);
              break;
            default:
              a(f, L);
              break;
          }
        });
      });
    };
    return (f, L) => (b(), g("div", {
      id: `${f.options?.container}`,
      class: "v-map-container"
    }, [
      v(f.$slots, "default", {}, void 0, !0)
    ], 8, ie));
  }
}), Ae = /* @__PURE__ */ $(ce, [["__scopeId", "data-v-75fc2869"]]), fe = d({
  name: "VPopup",
  props: {
    marker: {
      type: Object,
      default: () => ({}),
      required: !1
    },
    options: {
      type: Object,
      default: () => ({}),
      required: !0
    },
    coordinates: {
      type: Object,
      default: () => ({}),
      required: !0
    }
  },
  emits: ["added", "removed", ...V],
  setup(e, { emit: t }) {
    let o = p(c), a = new Q(e.options), l = u(!0);
    const r = u(null);
    o.value.on("style.load", () => {
      const m = () => {
        o.value.isStyleLoaded() ? l.value = !0 : (l.value = !1, setTimeout(m, 200));
      };
      m();
    }), i(() => {
      l.value ? (n(), y(), f(), C()) : (L(), h());
    }), O(() => {
      L(), h();
    });
    function n() {
      a.setDOMContent(r.value);
    }
    function y() {
      a.setLngLat(e.coordinates);
    }
    function f() {
      e.marker ? e.marker.setPopup(a) : a.addTo(o.value), t("added", { popup: a });
    }
    function L() {
      a.remove(), t("removed");
    }
    function C() {
      V.forEach((m) => {
        a.on(m, () => {
          t(m);
        });
      });
    }
    function h() {
      V.forEach((m) => {
        a.off(m, () => {
          t(m);
        });
      });
    }
    return {
      content: r
    };
  }
}), pe = ["id"];
function ye(e, t, o, a, l, r) {
  return b(), g("section", {
    id: `popup-${Date.now()}`,
    ref: "content"
  }, [
    v(e.$slots, "default")
  ], 8, pe);
}
const me = /* @__PURE__ */ $(fe, [["render", ye]]), ve = d({
  name: "VMarker",
  components: {
    VPopup: me
  },
  props: {
    coordinates: {
      type: [Object, Array],
      default: () => ({}),
      required: !0
    },
    options: {
      type: Object,
      default: () => ({}),
      required: !1
    },
    popupOptions: {
      type: Object,
      default: () => ({}),
      required: !1
    },
    cursor: {
      type: String,
      default: "pointer",
      required: !1
    }
  },
  emits: [
    "added",
    "update:coordinates",
    "removed",
    ...T,
    ...E
  ],
  setup(e, { emit: t }) {
    let o = p(c), a = u({}), l = u(!0), r = u(!1), n = u(null);
    const y = (s) => {
      n.value = s;
    };
    _(a, (s) => {
      "_map" in s ? r.value = !0 : r.value = !1;
    }), i(() => {
      l.value ? n.value !== null ? (a.value = new j({
        element: n.value,
        ...e.options
      }), f(a.value), C(a.value), L(a.value), m(a.value)) : (a.value = new j(e.options), f(a.value), C(a.value), L(a.value), m(a.value)) : h(a.value);
    }), O(() => {
      h(a.value);
    }), o.value.on("style.load", () => {
      const s = () => {
        o.value.isStyleLoaded() ? l.value = !0 : (l.value = !1, setTimeout(s, 200));
      };
      s();
    });
    function f(s) {
      s.setLngLat(e.coordinates);
    }
    function L(s) {
      s.getElement().style.cursor = e.cursor || "default";
    }
    function C(s) {
      s.addTo(o.value), t("added", { marker: s });
    }
    function h(s) {
      r.value && (s.remove(), t("removed"));
    }
    function m(s) {
      let I;
      T.forEach((S) => {
        s.on(S, (q) => {
          S === "dragend" && (e.coordinates instanceof Array ? I = [q.target._lngLat.lng, q.target._lngLat.lat] : I = q.target._lngLat, t("update:coordinates", I)), t(S, q);
        });
      }), E.forEach((S) => {
        s.getElement().addEventListener(S, (q) => {
          t(S, q);
        });
      });
    }
    return {
      isMarkerAvailable: r,
      marker: a,
      setSlotRef: y
    };
  }
}), be = ["id"];
function _e(e, t, o, a, l, r) {
  const n = R("v-popup");
  return b(), g("section", {
    id: `marker-${Date.now()}`,
    class: "absolute"
  }, [
    v(e.$slots, "markers", { setRef: e.setSlotRef }),
    e.isMarkerAvailable ? (b(), B(n, {
      key: 0,
      marker: e.marker,
      options: e.popupOptions,
      coordinates: e.coordinates
    }, {
      default: F(() => [
        v(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["marker", "options", "coordinates"])) : N("", !0)
  ], 8, be);
}
const Pe = /* @__PURE__ */ $(ve, [["render", _e]]);
export {
  qe as VControlAttribution,
  he as VControlFullscreen,
  Ce as VControlGeolocate,
  Ie as VControlNavigation,
  Ve as VControlScale,
  ke as VLayerDeckArc,
  Oe as VLayerDeckGeojson,
  je as VLayerMapboxCanvas,
  Me as VLayerMapboxGeojson,
  we as VLayerMapboxImage,
  Te as VLayerMapboxRaster,
  Ee as VLayerMapboxVector,
  xe as VLayerMapboxVideo,
  Ae as VMap,
  Pe as VMarker,
  me as VPopup,
  Ae as default
};
//# sourceMappingURL=v-mapbox.js.map
