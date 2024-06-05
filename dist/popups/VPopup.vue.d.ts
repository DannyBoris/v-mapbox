import type { LngLatLike, Marker, PopupOptions } from 'maplibre-gl';
import type { PropType, Ref } from 'vue';
declare const _default: import("vue").DefineComponent<{
    marker: {
        type: PropType<Marker>;
        default: () => Marker;
        required: false;
    };
    options: {
        type: PropType<PopupOptions>;
        default: () => PopupOptions;
        required: true;
    };
    coordinates: {
        type: PropType<LngLatLike>;
        default: () => {};
        required: true;
    };
}, {
    content: Ref<HTMLElement | null>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    marker: {
        type: PropType<Marker>;
        default: () => Marker;
        required: false;
    };
    options: {
        type: PropType<PopupOptions>;
        default: () => PopupOptions;
        required: true;
    };
    coordinates: {
        type: PropType<LngLatLike>;
        default: () => {};
        required: true;
    };
}>> & {
    [x: `on${Capitalize<string>}`]: ((...args: any[]) => any) | undefined;
}, {
    options: PopupOptions;
    marker: Marker;
    coordinates: LngLatLike;
}, {}>;
export default _default;
