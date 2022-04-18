import { cssReplaceVariable1 } from './variable';

const replaceVariable = (stringToUse: string, v: number | string) =>
  stringToUse.replaceAll(cssReplaceVariable1, v.toString());

const zeroDivider = (dividend: number, divisor: number) => (divisor === 0 ? 0 : dividend / divisor);

export { replaceVariable, zeroDivider };
