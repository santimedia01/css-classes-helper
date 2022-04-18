import { KeyValueStringObject } from '../../types';
import { replaceVariable, zeroDivider as divide } from '../helpers';
import { DividerCssGeneratorFn } from './types';

const dividerCssGenerator: DividerCssGeneratorFn = (
  cssPropertyName,
  cssPropertyValue,
  { dividend, divisor, decimals = 4, hasToHaveZero = true },
) => {
  const properties: KeyValueStringObject = {};
  const step = divide(dividend, divisor);

  for (let i = 0; i <= divisor; i++) {
    let value = step * i;

    if (!hasToHaveZero && value === 0) continue;

    if (!Number.isInteger(value)) value = parseFloat(value.toFixed(decimals));

    properties[replaceVariable(cssPropertyName, i)] = replaceVariable(cssPropertyValue, value);
  }

  return properties;
};

export default dividerCssGenerator;
