import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'truncate'
})

export class TruncatePipe implements PipeTransform {
    transform(value: any, ...args: any[]) {

        if (value && value.length > 10) {
            return value.substr(0, 10) + '...';
        } else {
            return value;
        }
    }
}