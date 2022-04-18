import { KeyValueStringObject } from '../../types';
import { ClassesHelperInterface, ClassesHelperProperties, ClassesStringProp } from './types';

export default class ClassesHelper implements ClassesHelperInterface {
  private libraryName: string;
  private cssClassesLibrary: KeyValueStringObject;

  constructor({ libraryName, cssClassesLibrary }: ClassesHelperProperties) {
    this.libraryName = libraryName;
    this.cssClassesLibrary = cssClassesLibrary;
  }

  classesHelper(classesString: ClassesStringProp): string {
    const classes = classesString.toString().split(' ');

    /*
        let generatedCss = classes.map((cssClass) => {
            if (this.cssClassesLibrary[cssClass] === undefined) 
                console.warn(`The primeflex class '${cssClass}' does not exist. PrimeFlex Macro Utility for Styled Components Warn.`);
            return this.cssClassesLibrary[cssClass];
        }).join(' ');
        */

    const generatedCss = classes.reduce((previousClass, currentClass) => {
      let propertyValue = this.cssClassesLibrary[currentClass];
      if (propertyValue === undefined) {
        this.warn(`The ${this.libraryName} class '${currentClass}' does not exist.`);
        propertyValue = '';
      }

      return previousClass + ' ' + propertyValue;
    }, '');

    return generatedCss;
  }

  private warn(message: string) {
    console.warn(`${message} - CSS Classes Helper for Styled Components Warn.`);
  }
}
