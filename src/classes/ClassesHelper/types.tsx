import { KeyValueStringObject } from "../../types";

export interface ClassesHelperProperties
{
    libraryName: string;
    cssClassesLibrary: KeyValueStringObject;
};

export type ClassesStringProp = string | TemplateStringsArray;

export interface ClassesHelperInterface
{
    classesHelper(classesString: ClassesStringProp): string;
}