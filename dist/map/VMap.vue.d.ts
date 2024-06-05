import type { MapOptions } from 'maplibre-gl';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToOption<{
    options: MapOptions;
}>, {
    options: {
        container: string;
    };
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    data: (...args: any[]) => void;
    error: (...args: any[]) => void;
    render: (...args: any[]) => void;
    load: (...args: any[]) => void;
    idle: (...args: any[]) => void;
    remove: (...args: any[]) => void;
    resize: (...args: any[]) => void;
    webglcontextlost: (...args: any[]) => void;
    webglcontextrestored: (...args: any[]) => void;
    dataloading: (...args: any[]) => void;
    tiledataloading: (...args: any[]) => void;
    sourcedataloading: (...args: any[]) => void;
    styledataloading: (...args: any[]) => void;
    sourcedata: (...args: any[]) => void;
    styledata: (...args: any[]) => void;
    styleimagemissing: (...args: any[]) => void;
    dataabort: (...args: any[]) => void;
    sourcedataabort: (...args: any[]) => void;
    boxzoomcancel: (...args: any[]) => void;
    boxzoomstart: (...args: any[]) => void;
    boxzoomend: (...args: any[]) => void;
    touchcancel: (...args: any[]) => void;
    touchmove: (...args: any[]) => void;
    touchend: (...args: any[]) => void;
    touchstart: (...args: any[]) => void;
    click: (...args: any[]) => void;
    contextmenu: (...args: any[]) => void;
    dblclick: (...args: any[]) => void;
    mousemove: (...args: any[]) => void;
    mouseup: (...args: any[]) => void;
    mousedown: (...args: any[]) => void;
    mouseout: (...args: any[]) => void;
    mouseover: (...args: any[]) => void;
    movestart: (...args: any[]) => void;
    move: (...args: any[]) => void;
    moveend: (...args: any[]) => void;
    zoomstart: (...args: any[]) => void;
    zoom: (...args: any[]) => void;
    zoomend: (...args: any[]) => void;
    rotatestart: (...args: any[]) => void;
    rotate: (...args: any[]) => void;
    rotateend: (...args: any[]) => void;
    dragstart: (...args: any[]) => void;
    drag: (...args: any[]) => void;
    dragend: (...args: any[]) => void;
    pitchstart: (...args: any[]) => void;
    pitch: (...args: any[]) => void;
    pitchend: (...args: any[]) => void;
    wheel: (...args: any[]) => void;
    terrain: (...args: any[]) => void;
    loaded: (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<{
    options: MapOptions;
}>, {
    options: {
        container: string;
    };
}>>> & {
    onDrag?: ((...args: any[]) => any) | undefined;
    onDragend?: ((...args: any[]) => any) | undefined;
    onDragstart?: ((...args: any[]) => any) | undefined;
    onLoad?: ((...args: any[]) => any) | undefined;
    onError?: ((...args: any[]) => any) | undefined;
    onClick?: ((...args: any[]) => any) | undefined;
    onContextmenu?: ((...args: any[]) => any) | undefined;
    onDblclick?: ((...args: any[]) => any) | undefined;
    onMousedown?: ((...args: any[]) => any) | undefined;
    onMousemove?: ((...args: any[]) => any) | undefined;
    onMouseout?: ((...args: any[]) => any) | undefined;
    onMouseover?: ((...args: any[]) => any) | undefined;
    onMouseup?: ((...args: any[]) => any) | undefined;
    onTouchcancel?: ((...args: any[]) => any) | undefined;
    onTouchend?: ((...args: any[]) => any) | undefined;
    onTouchmove?: ((...args: any[]) => any) | undefined;
    onTouchstart?: ((...args: any[]) => any) | undefined;
    onWheel?: ((...args: any[]) => any) | undefined;
    onData?: ((...args: any[]) => any) | undefined;
    onRender?: ((...args: any[]) => any) | undefined;
    onIdle?: ((...args: any[]) => any) | undefined;
    onRemove?: ((...args: any[]) => any) | undefined;
    onResize?: ((...args: any[]) => any) | undefined;
    onWebglcontextlost?: ((...args: any[]) => any) | undefined;
    onWebglcontextrestored?: ((...args: any[]) => any) | undefined;
    onDataloading?: ((...args: any[]) => any) | undefined;
    onTiledataloading?: ((...args: any[]) => any) | undefined;
    onSourcedataloading?: ((...args: any[]) => any) | undefined;
    onStyledataloading?: ((...args: any[]) => any) | undefined;
    onSourcedata?: ((...args: any[]) => any) | undefined;
    onStyledata?: ((...args: any[]) => any) | undefined;
    onStyleimagemissing?: ((...args: any[]) => any) | undefined;
    onDataabort?: ((...args: any[]) => any) | undefined;
    onSourcedataabort?: ((...args: any[]) => any) | undefined;
    onBoxzoomcancel?: ((...args: any[]) => any) | undefined;
    onBoxzoomstart?: ((...args: any[]) => any) | undefined;
    onBoxzoomend?: ((...args: any[]) => any) | undefined;
    onMovestart?: ((...args: any[]) => any) | undefined;
    onMove?: ((...args: any[]) => any) | undefined;
    onMoveend?: ((...args: any[]) => any) | undefined;
    onZoomstart?: ((...args: any[]) => any) | undefined;
    onZoom?: ((...args: any[]) => any) | undefined;
    onZoomend?: ((...args: any[]) => any) | undefined;
    onRotatestart?: ((...args: any[]) => any) | undefined;
    onRotate?: ((...args: any[]) => any) | undefined;
    onRotateend?: ((...args: any[]) => any) | undefined;
    onPitchstart?: ((...args: any[]) => any) | undefined;
    onPitch?: ((...args: any[]) => any) | undefined;
    onPitchend?: ((...args: any[]) => any) | undefined;
    onTerrain?: ((...args: any[]) => any) | undefined;
    onLoaded?: ((...args: any[]) => any) | undefined;
}, {
    options: MapOptions;
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToOption<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
