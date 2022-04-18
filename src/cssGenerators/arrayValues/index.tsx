import { KeyValueStringObject } from "../../types";
import { replaceVariable } from "../helpers";
import { arrayValuesCssGeneratorFn } from "./types";

const arrayValuesCssGenerator: arrayValuesCssGeneratorFn = (
    cssPropertyName, cssPropertyValue, values, startsFromZero = true
) => {
    if (typeof values[0] === "number") values.map((value) => value.toString())

    let properties: KeyValueStringObject = {};
    
    const indexAddon: number = startsFromZero ? 0 : 1;

    values.forEach((value, index) => {
        properties[replaceVariable(cssPropertyName, index + indexAddon)] = replaceVariable(cssPropertyValue, value);
    });

    return properties;
}

export default arrayValuesCssGenerator;