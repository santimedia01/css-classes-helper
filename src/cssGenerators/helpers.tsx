import { cssReplaceVariable1 } from "./variable";

const replaceVariable = (string: string, v: number | string) => string.replaceAll(cssReplaceVariable1, v.toString());

const zeroDivider = (dividend: number, divisor: number) => divisor === 0 ? 0 : dividend / divisor;

export {
    replaceVariable,
    zeroDivider,
};