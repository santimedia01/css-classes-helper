import { CssProperties } from "../types";

export type StepByStepParams = {
    from: number,
    to: number,
    step: number,
}

export type stepByStepCssGeneratorFn = (
    cssPropertyName: string,
    cssPropertyValue: string,
    params: StepByStepParams,
) => CssProperties;