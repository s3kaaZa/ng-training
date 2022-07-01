import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss']
})
export class ErrorMessageComponent implements OnInit {
  @Input() control: FormControl;
  @Input() form: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  getError(): string {
    if (this.form) {
      return this.getFormError(this.form);     
    } else if (this.control) {
      return this.getControlError(this.control);     
    }

    return '';
  }

  getFormError(form: FormGroup): string {
    
    if (form.status === 'INVALID' && form.errors) {
      const arrayErr = Object.keys(form.errors)
      if(arrayErr.length >= 1){
        for (let prop in form.errors) {
          console.log('return = ', this.getErrorMessage(prop, form.errors[prop]));          
          return this.getErrorMessage(prop, form.errors[prop])
        }
      }
    }
    console.log(form);          
    return ''
  }

  getControlError(control: FormControl): string {
    if (control.errors) {
      const arrayErr = Object.keys(control.errors)
      if(arrayErr.length >= 1){
        for (let prop in control.errors) {
          return this.getErrorMessage(prop, control.errors[prop])
        }
      }
    }
    return ''
  }

  getErrorMessage(prop, value){
    const config = {
      'required': 'This field is required',
      'email': 'Incorrect email',
      'domain': 'Incorrect domain',
      'uniqueEmail': 'Email must be unique',
      'min': `The value must be greater than or equal ${value.min}`,
      'max': `The value must be less than or equal ${value.max}`,
      'maxlength': `Maximum length of the input string ${value.requiredLength}`,
      'minlength': `The value must be greater than or equal ${value.requiredLength}`,
      'mismatch': 'Field values do not match',
    }

    console.log(config[prop]);
    

    return config[prop]
  }  
}
