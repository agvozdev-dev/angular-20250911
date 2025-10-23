import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'myCurrency',
    pure: false, // default
})
export class MyCurrencyPipe implements PipeTransform {
    transform(price: number, code = '$'): string {
        console.log('transform, Pipe');
        return `${price} ${code}`;
    }
}
