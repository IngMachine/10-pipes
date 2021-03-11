import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vuela'
})
export class VuelaPipe implements PipeTransform {

  transform(value: boolean): string {
    /* if( value ){
      return 'Sí';
    }else{
      return 'No';
    } */
    return ( value ) ? 'vuela' : 'no vuela';
  }

}
