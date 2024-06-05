import type { LngLatLike, MarkerOptions, PopupOptions } from 'maplibre-gl';
import { Marker } from 'maplibre-gl';
import type { PropType, Ref } from 'vue';
declare const _default: import("vue").DefineComponent<{
    coordinates: {
        type: PropType<LngLatLike>;
        default: () => {};
        required: true;
    };
    options: {
        type: PropType<MarkerOptions>;
        default: () => MarkerOptions;
        required: false;
    };
    popupOptions: {
        type: PropType<PopupOptions>;
        default: () => PopupOptions;
        required: false;
    };
    cursor: {
        type: PropType<string>;
        default: string;
        required: false;
    };
}, {
    isMarkerAvailable: Ref<boolean>;
    marker: Ref<Marker>;
    setSlotRef: (el: HTMLElement) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    coordinates: {
        type: PropType<LngLatLike>;
        default: () => {};
        required: true;
    };
    options: {
        type: PropType<MarkerOptions>;
        default: () => MarkerOptions;
        required: false;
    };
    popupOptions: {
        type: PropType<PopupOptions>;
        default: () => PopupOptions;
        required: false;
    };
    cursor: {
        type: PropType<string>;
        default: string;
        required: false;
    };
}>> & {
    [x: `on${Capitalize<string>}`]: ((...args: any[]) => any) | undefined;
}, {
    options: MarkerOptions;
    coordinates: LngLatLike;
    popupOptions: PopupOptions;
    cursor: string;
}, {}>;
export default _default;
