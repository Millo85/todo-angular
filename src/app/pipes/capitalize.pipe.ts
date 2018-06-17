import { PipeTransform, Pipe } from "@angular/core";



@Pipe({
    name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {
    transform(value: any, ...args: any[]) {
        if (value) {
            value = value.toLowerCase();
            const last = value.substr(1, value.length - 1);
            const first = value.substr(0, 1).toUpperCase();
            return first + last;
        } else {
            return value;
        }
    }
}