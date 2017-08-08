import {
    GlOnResize,
    GlOnShow,
    GlOnHide,
    ILayoutItem
} from './contracts';

export const isOnResizeImplemented = (obj: any) : obj is GlOnResize => {
    return typeof obj === 'object' && typeof obj.glOnResize === 'function';
};

export const isOnShowImplemented = (obj: any) : obj is GlOnShow => {
    return typeof obj === 'object' && typeof obj.glOnShow === 'function';
};
export const isOnHideImplemented = (obj: any) : obj is GlOnHide => {
    return typeof obj === 'object' && typeof obj.glOnHide === 'function';
};

export const isLayoutItem = (obj: any) : obj is ILayoutItem => {
    return typeof obj === 'object' && typeof obj.id === 'string' && typeof obj.getState === 'function';
};