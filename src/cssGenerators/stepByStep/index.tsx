import { stepByStepCssGeneratorFn } from "./types";
import { CssProperties } from "../types";
import { replaceVariable } from "../helpers";

const stepByStepCssGenerator: stepByStepCssGeneratorFn = (
    cssPropertyName, cssPropertyValue, { from, to, step }
) => {
    let properties: CssProperties = {};

    for (let i = from; i <= to; i += step) {
        properties[replaceVariable(cssPropertyName, i)] = replaceVariable(cssPropertyValue, i);
    }
    
    return properties;
}

export default stepByStepCssGenerator;