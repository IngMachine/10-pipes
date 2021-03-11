import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform{

    transform( value: string, enMayuscula: boolean = true ): string {

       /*  if ( enMayuscula === true ){
            return value.toUpperCase();
        }else {
            return value.toLocaleLowerCase();
        } */

        return (enMayuscula) ? value.toUpperCase() : value.toLocaleLowerCase();

    }

}