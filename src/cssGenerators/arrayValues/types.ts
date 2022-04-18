import { CssProperties } from '../types';

export type arrayValuesCssGeneratorFn = (
  cssPropertyName: string,
  cssPropertyValue: string,
  values: number[] | string[],
  startsFromZero?: boolean,
) => CssProperties;
