import { AbstractControl, ValidatorFn } from "@angular/forms";

export function emailValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: string } | null => {
      let emailRegExp: RegExp = /^[a-z0-9](\.?[a-z0-9]){5,29}@g(oogle)?mail\.com$/i
      let valid = !control.value || emailRegExp.test(control.value)
      return valid ? null : { notGoogle: 'This is not google mail' }
    }
  }