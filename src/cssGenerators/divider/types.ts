import { CssProperties } from '../types';

export type DividerParams = {
  dividend: number;
  divisor: number;
  decimals?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20;
  hasToHaveZero?: boolean;
};

export type DividerCssGeneratorFn = (
  cssPropertyName: string,
  cssPropertyValue: string,
  params: DividerParams,
) => CssProperties;
