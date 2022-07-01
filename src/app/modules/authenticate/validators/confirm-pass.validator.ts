import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms"

export function confirmPassValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const pass = control.get('pass').value;
        const confirmPass = control.get('confirmPass').value;

        return pass === confirmPass ? null : { mismatch: true }
    }
}