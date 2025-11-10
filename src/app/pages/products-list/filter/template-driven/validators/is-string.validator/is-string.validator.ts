import {Directive} from '@angular/core';
import {
    AbstractControl,
    AsyncValidator,
    NG_ASYNC_VALIDATORS,
    NG_VALIDATORS,
    ValidationErrors,
    Validator,
} from '@angular/forms';
import {isStringValidator} from '../../../reactive/validators/is-string.validator';

@Directive({
    selector: '[appIsStringValidator]',
    providers: [
        {
            provide: NG_VALIDATORS,
            multi: true,
            useExisting: IsStringValidator,
        },
        // {
        //   provide: NG_ASYNC_VALIDATORS,
        //   multi: true,
        //   useExisting: IsStringValidator,
        // },
    ],
})
export class IsStringValidator implements Validator {
    // export class IsStringValidator implements AsyncValidator {

    // validate(control: AbstractControl): ValidationErrors | null {
    //   return Number(control.value) ? {isStringValidator: 'Is string validator error'} : null;
    // }
    readonly validate = isStringValidator;
}
