import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'mayus'
})
export class MayusculasPipe implements PipeTransform{

    transform( value: string, enMayusculas:boolean = true ):string{

        return( enMayusculas ) ? value.toLocaleUpperCase() : value.toLowerCase();
    }
}