// export const isStringValidator = (value: unknown): Error | null => {
//     return Number(value) ? new Error() : null;
// }

import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export const isStringValidator: ValidatorFn = (
    control: AbstractControl,
): ValidationErrors | null => {
    return Number(control.value) ? {isStringValidator: 'Is string validator error'} : null;
};
