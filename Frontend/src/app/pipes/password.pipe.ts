import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'passwordHashed'
})
export class PasswordPipe implements PipeTransform {

    transform(value: string) {
        return "*".repeat(value.length)
    }
}