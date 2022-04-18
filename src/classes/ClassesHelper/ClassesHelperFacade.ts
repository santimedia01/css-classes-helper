import { KeyValueStringObject } from '../../types';
import ClassesHelper from './ClassesHelper';
import { ClassesStringProp } from './types';

export default class ClassesHelperFacade {
  static init(libraryName: string, cssClassesLibrary: KeyValueStringObject): (classes: ClassesStringProp) => string {
    return (classes: ClassesStringProp) =>
      new ClassesHelper({
        libraryName,
        cssClassesLibrary,
      }).classesHelper(classes);
  }
}
