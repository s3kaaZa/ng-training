import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function emailValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      let emailRegExp: RegExp = /^[a-z0-9](\.?[a-z0-9]){5,29}@g(oogle)?mail\.com$/i
      let valid =
        !control.value || emailRegExp.test(control.value)
      return valid ? null : { email: true }
    }
  }