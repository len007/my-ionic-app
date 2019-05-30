import { Pipe, PipeTransform } from '@angular/core';
import { Language } from '../core/language';
/**
 * Generated class for the TranslatePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'translate',
  pure: false
})
export class TranslatePipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  constructor(){
    
  }
  transform(value: string, ...args) {
    let lan = Language.getLanguage();
    return lan.getTrans(value);
  }
}
