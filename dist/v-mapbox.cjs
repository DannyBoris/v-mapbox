"use strict";/*!
* v-mapbox v5.1.0
* (c) 2024 Vinayak Kulkarni
* @license MIT
*/Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const q=require("@deck.gl/layers"),V=require("@deck.gl/mapbox"),t=require("vue"),m=require("maplibre-gl");function c(e,o){const a=t.inject(e,o);if(!a)throw new Error(`Could not resolve ${e.description}`);return a}const d=Symbol("Map"),w=t.defineComponent({__name:"VControlAttribution",props:{options:{default:void 0},position:{default:"bottom-right"}},setup(e){const o={compact:!1,customAttribution:void 0},a=e,r=t.useSlots();let l=c(d);t.onMounted(()=>{n()});const n=()=>{let u=o;a.options&&(u={...a.options}),r&&r.default?.()&&(u.customAttribution=r.default()[0].children);const f=new m.AttributionControl(u);l.value.addControl(f,a.position)};return(u,f)=>t.renderSlot(u.$slots,"default")}}),O=t.defineComponent({__name:"VControlFullscreen",props:{options:{default:void 0},position:{default:"top-left"}},setup(e){const o={container:void 0},a=e;let r=c(d);t.onMounted(()=>{l()});const l=()=>{const n=new m.FullscreenControl(a.options||o);r.value.addControl(n,a.position)};return()=>{}}}),M=["geolocate","error","outofmaxbounds","trackuserlocationstart","trackuserlocationend"],E=t.defineComponent({__name:"VControlGeolocate",props:{options:{default:void 0},position:{default:"top-left"}},emits:M,setup(e,{emit:o}){const a={fitBoundsOptions:{linear:!1,offset:[0,0],maxZoom:22},positionOptions:{enableHighAccuracy:!0,maximumAge:0,timeout:6e3},trackUserLocation:!0,showAccuracyCircle:!0,showUserLocation:!0},r=e,l=o;let n=c(d);t.onMounted(()=>{u()});const u=()=>{const f=new m.GeolocateControl(r.options||a);n.value.addControl(f,r.position),M.forEach(i=>{f.on(i,()=>{l(i)})})};return()=>{}}}),x=t.defineComponent({__name:"VControlNavigation",props:{options:{default:void 0},position:{default:"top-left"}},setup(e){const o={showCompass:!0,showZoom:!0,visualizePitch:!0},a=e,r=t.inject(d);t.onMounted(()=>{l()});const l=()=>{const n=new m.NavigationControl(a.options||o);r?.value.addControl(n,a.position)};return()=>{}}}),T=t.defineComponent({__name:"VControlScale",props:{options:{default:void 0},position:{default:"bottom-left"}},setup(e){const o={maxWidth:100,unit:"metric"},a=e,r=t.inject(d);t.onMounted(()=>{l()});const l=()=>{const n=new m.ScaleControl(a.options||o);r?.value.addControl(n,a.position)};return()=>{}}}),B=t.defineComponent({name:"VLayerDeckArc",props:{layerId:{type:String,default:"deck.gl-arc-layer",required:!0},data:{type:Object,required:!0},options:{type:Object,required:!0},before:{type:String,default:"",required:!1}},setup(e){let o=c(d),a=t.ref(!1);const r=new V.MapboxLayer({...e.options,id:e.layerId,data:e.data,type:q.ArcLayer});o.value.on("style.load",()=>{const n=()=>{o.value.isStyleLoaded()?a.value=!0:(a.value=!1,setTimeout(n,200))};n()}),t.watch(a,n=>{n&&l()}),t.onMounted(()=>{l()});function l(){o.value.addLayer(r,e.before)}}}),A=t.defineComponent({name:"VLayerDeckGeojson",props:{layerId:{type:String,default:"deck.gl-geojson-layer",required:!0},data:{type:Object,required:!0},options:{type:Object,required:!0},before:{type:String,default:"",required:!1}},setup(e){let o=c(d),a=t.ref(!1);const r=new V.MapboxLayer({...e.options,id:e.layerId,data:e.data,type:q.GeoJsonLayer});o.value.on("style.load",()=>{const n=()=>{o.value.isStyleLoaded()?a.value=!0:(a.value=!1,setTimeout(n,200))};n()}),t.watch(a,n=>{n&&l()}),t.onMounted(()=>{l()});function l(){o.value.addLayer(r,e.before)}}}),P=t.defineComponent({name:"VLayerMapboxCanvas",props:{sourceId:{type:String,default:"maplibre.gl-canvas-source",required:!0},layerId:{type:String,default:"maplibre.gl-canvas-layer",required:!0},source:{type:Object,required:!0},layer:{type:Object,default:()=>({}),required:!0},before:{type:String,default:"",required:!1}},setup(e){let o=c(d),a=t.ref(!1);const r={...e.layer,id:e.layerId,source:e.sourceId},l={type:"geojson",data:e.source};o.value.on("style.load",()=>{const u=()=>{o.value.isStyleLoaded()?a.value=!0:(a.value=!1,setTimeout(u,200))};u()}),t.watch(a,u=>{u&&n()}),t.onMounted(()=>{n()});function n(){o.value.addSource(e.sourceId,l),o.value.addLayer(r,e.before)}}}),y=(e,o)=>{const a=e.__vccOpts||e;for(const[r,l]of o)a[r]=l;return a};function G(e,o,a,r,l,n){return t.openBlock(),t.createElementBlock("div",null,[t.renderSlot(e.$slots,"default")])}const z=y(P,[["render",G]]),D=t.defineComponent({name:"VLayerMapboxGeojson",props:{sourceId:{type:String,default:"maplibre.gl-geojson-source",required:!0},layerId:{type:String,default:"maplibre.gl-geojson-layer",required:!0},source:{type:Object,required:!0},layer:{type:Object,default:()=>({}),required:!0},before:{type:String,default:"",required:!1}},setup(e){let o=c(d),a=t.ref(!1);const r={...e.layer,id:e.layerId,source:e.sourceId};o.value.on("style.load",()=>{const n=()=>{o.value.isStyleLoaded()?a.value=!0:(a.value=!1,setTimeout(n,200))};n()}),t.watch(a,n=>{n&&l()}),t.onMounted(()=>{l()}),t.onBeforeUnmount(()=>{o.value.getLayer(e.layerId)&&(o.value.removeLayer(e.layerId),o.value.removeSource(e.sourceId))});function l(){o.value.addSource(e.sourceId,e.source),o.value.addLayer(r,e.before)}}});function R(e,o,a,r,l,n){return t.openBlock(),t.createElementBlock("div",null,[t.renderSlot(e.$slots,"default")])}const U=y(D,[["render",R]]),F=t.defineComponent({name:"VLayerMapboxImage",props:{sourceId:{type:String,default:"maplibre.gl-image-source",required:!0},layerId:{type:String,default:"maplibre.gl-image-layer",required:!0},source:{type:Object,required:!0},layer:{type:Object,default:()=>({}),required:!0},before:{type:String,default:"",required:!1}},setup(e){let o=c(d),a=t.ref(!1);const r={...e.layer,id:e.layerId,source:e.sourceId};o.value.on("style.load",()=>{const n=()=>{o.value.isStyleLoaded()?a.value=!0:(a.value=!1,setTimeout(n,200))};n()}),t.watch(a,n=>{n&&l()}),t.onMounted(()=>{l()});function l(){o.value.addSource(e.sourceId,e.source),o.value.addLayer(r,e.before)}}});function N(e,o,a,r,l,n){return t.openBlock(),t.createElementBlock("div",null,[t.renderSlot(e.$slots,"default")])}const Z=y(F,[["render",N]]),H=t.defineComponent({name:"VLayerMapboxRaster",props:{sourceId:{type:String,default:"maplibre.gl-raster-source",required:!0},layerId:{type:String,default:"maplibre.gl-raster-layer",required:!0},source:{type:Object,required:!0},layer:{type:Object,default:()=>({}),required:!0},before:{type:String,default:"",required:!1}},setup(e){let o=c(d),a=t.ref(!1);const r={...e.layer,id:e.layerId,source:e.sourceId},l={type:"geojson",data:e.source};o.value.on("style.load",()=>{const u=()=>{o.value.isStyleLoaded()?a.value=!0:(a.value=!1,setTimeout(u,200))};u()}),t.watch(a,u=>{u&&n()}),t.onMounted(()=>{n()});function n(){o.value.addSource(e.sourceId,l),o.value.addLayer(r,e.before)}}});function J(e,o,a,r,l,n){return t.openBlock(),t.createElementBlock("div",null,[t.renderSlot(e.$slots,"default")])}const K=y(H,[["render",J]]),W=t.defineComponent({name:"VLayerMapboxVector",props:{sourceId:{type:String,default:"maplibre.gl-vector-source",required:!0},layerId:{type:String,default:"maplibre.gl-vector-layer",required:!0},source:{type:Object,required:!0},layer:{type:Object,default:()=>({}),required:!0},before:{type:String,default:"",required:!1}},setup(e){let o=c(d),a=t.ref(!1);const r={...e.layer,id:e.layerId,source:e.sourceId};o.value.on("style.load",()=>{const n=()=>{o.value.isStyleLoaded()?a.value=!0:(a.value=!1,setTimeout(n,200))};n()}),t.watch(a,n=>{n&&l()}),t.onMounted(()=>{l()});function l(){o.value.addSource(e.sourceId,e.source),o.value.addLayer(r,e.before)}}});function Q(e,o,a,r,l,n){return t.openBlock(),t.createElementBlock("div",null,[t.renderSlot(e.$slots,"default")])}const X=y(W,[["render",Q]]),Y=t.defineComponent({name:"VLayerMapboxVideo",props:{sourceId:{type:String,default:"maplibre.gl-video-source",required:!0},layerId:{type:String,default:"maplibre.gl-video-layer",required:!0},source:{type:Object,required:!0},layer:{type:Object,default:()=>({}),required:!0},before:{type:String,default:"",required:!1}},setup(e){let o=c(d),a=t.ref(!1);const r={...e.layer,id:e.layerId,source:e.sourceId};o.value.on("style.load",()=>{const n=()=>{o.value.isStyleLoaded()?a.value=!0:(a.value=!1,setTimeout(n,200))};n()}),t.watch(a,n=>{n&&l()}),t.onMounted(()=>{l()});function l(){o.value.addSource(e.sourceId,e.source),o.value.addLayer(r,e.before)}}});function ee(e,o,a,r,l,n){return t.openBlock(),t.createElementBlock("div",null,[t.renderSlot(e.$slots,"default")])}const te=y(Y,[["render",ee]]),C=["error","load","idle","remove","render","resize","webglcontextlost","webglcontextrestored","dataloading","data","tiledataloading","sourcedataloading","styledataloading","sourcedata","styledata","boxzoomcancel","boxzoomstart","boxzoomend","touchcancel","touchmove","touchend","touchstart","click","contextmenu","dblclick","mousemove","mouseup","mousedown","mouseout","mouseover","movestart","move","moveend","zoomstart","zoom","zoomend","rotatestart","rotate","rotateend","dragstart","drag","dragend","pitchstart","pitch","pitchend","wheel"],k=["dragstart","drag","dragend"],h=["click","mouseenter","mouseleave"],S=["open","close"],oe=["id"],ae=t.defineComponent({__name:"VMap",props:{options:{default:{container:"map"}}},emits:["loaded",...C],setup(e,{emit:o}){const a=e,r=o;let l=t.shallowRef({}),n=t.ref(!1),u=t.ref(C);t.onMounted(()=>{l.value=new m.Map(a.options),n.value=!0,t.provide(d,l),f()});const f=()=>{u.value.forEach(i=>{l.value.on(i,v=>{switch(i){case"load":r("loaded",l.value);break;default:r(i,v);break}})})};return(i,v)=>(t.openBlock(),t.createElementBlock("div",{id:`${i.options?.container}`,class:"v-map-container"},[t.renderSlot(i.$slots,"default",{},void 0,!0)],8,oe))}}),I=y(ae,[["__scopeId","data-v-75fc2869"]]),re=t.defineComponent({name:"VPopup",props:{marker:{type:Object,default:()=>({}),required:!1},options:{type:Object,default:()=>({}),required:!0},coordinates:{type:Object,default:()=>({}),required:!0}},emits:["added","removed",...S],setup(e,{emit:o}){let a=c(d),r=new m.Popup(e.options),l=t.ref(!0);const n=t.ref(null);a.value.on("style.load",()=>{const p=()=>{a.value.isStyleLoaded()?l.value=!0:(l.value=!1,setTimeout(p,200))};p()}),t.onMounted(()=>{l.value?(u(),f(),i(),$()):(v(),g())}),t.onBeforeUnmount(()=>{v(),g()});function u(){r.setDOMContent(n.value)}function f(){r.setLngLat(e.coordinates)}function i(){e.marker?e.marker.setPopup(r):r.addTo(a.value),o("added",{popup:r})}function v(){r.remove(),o("removed")}function $(){S.forEach(p=>{r.on(p,()=>{o(p)})})}function g(){S.forEach(p=>{r.off(p,()=>{o(p)})})}return{content:n}}}),ne=["id"];function le(e,o,a,r,l,n){return t.openBlock(),t.createElementBlock("section",{id:`popup-${Date.now()}`,ref:"content"},[t.renderSlot(e.$slots,"default")],8,ne)}const j=y(re,[["render",le]]),ue=t.defineComponent({name:"VMarker",components:{VPopup:j},props:{coordinates:{type:[Object,Array],default:()=>({}),required:!0},options:{type:Object,default:()=>({}),required:!1},popupOptions:{type:Object,default:()=>({}),required:!1},cursor:{type:String,default:"pointer",required:!1}},emits:["added","update:coordinates","removed",...k,...h],setup(e,{emit:o}){let a=c(d),r=t.ref({}),l=t.ref(!0),n=t.ref(!1),u=t.ref(null);const f=s=>{u.value=s};t.watch(r,s=>{"_map"in s?n.value=!0:n.value=!1}),t.onMounted(()=>{l.value?u.value!==null?(r.value=new m.Marker({element:u.value,...e.options}),i(r.value),$(r.value),v(r.value),p(r.value)):(r.value=new m.Marker(e.options),i(r.value),$(r.value),v(r.value),p(r.value)):g(r.value)}),t.onBeforeUnmount(()=>{g(r.value)}),a.value.on("style.load",()=>{const s=()=>{a.value.isStyleLoaded()?l.value=!0:(l.value=!1,setTimeout(s,200))};s()});function i(s){s.setLngLat(e.coordinates)}function v(s){s.getElement().style.cursor=e.cursor||"default"}function $(s){s.addTo(a.value),o("added",{marker:s})}function g(s){n.value&&(s.remove(),o("removed"))}function p(s){let L;k.forEach(b=>{s.on(b,_=>{b==="dragend"&&(e.coordinates instanceof Array?L=[_.target._lngLat.lng,_.target._lngLat.lat]:L=_.target._lngLat,o("update:coordinates",L)),o(b,_)})}),h.forEach(b=>{s.getElement().addEventListener(b,_=>{o(b,_)})})}return{isMarkerAvailable:n,marker:r,setSlotRef:f}}}),se=["id"];function de(e,o,a,r,l,n){const u=t.resolveComponent("v-popup");return t.openBlock(),t.createElementBlock("section",{id:`marker-${Date.now()}`,class:"absolute"},[t.renderSlot(e.$slots,"markers",{setRef:e.setSlotRef}),e.isMarkerAvailable?(t.openBlock(),t.createBlock(u,{key:0,marker:e.marker,options:e.popupOptions,coordinates:e.coordinates},{default:t.withCtx(()=>[t.renderSlot(e.$slots,"default")]),_:3},8,["marker","options","coordinates"])):t.createCommentVNode("",!0)],8,se)}const ie=y(ue,[["render",de]]);exports.VControlAttribution=w;exports.VControlFullscreen=O;exports.VControlGeolocate=E;exports.VControlNavigation=x;exports.VControlScale=T;exports.VLayerDeckArc=B;exports.VLayerDeckGeojson=A;exports.VLayerMapboxCanvas=z;exports.VLayerMapboxGeojson=U;exports.VLayerMapboxImage=Z;exports.VLayerMapboxRaster=K;exports.VLayerMapboxVector=X;exports.VLayerMapboxVideo=te;exports.VMap=I;exports.VMarker=ie;exports.VPopup=j;exports.default=I;
//# sourceMappingURL=v-mapbox.cjs.map
