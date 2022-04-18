import { KeyValueStringObject } from "../../types";
import ClassesHelper from "./ClassesHelper";
import { ClassesStringProp } from "./types";

export default class ClassesHelperFacade {
    static init(libraryName: string, cssClassesLibrary: KeyValueStringObject): Function
    {
        return (classes: ClassesStringProp) => new ClassesHelper({
            libraryName: libraryName,
            cssClassesLibrary: cssClassesLibrary,
        }).classesHelper(classes)
    }
}