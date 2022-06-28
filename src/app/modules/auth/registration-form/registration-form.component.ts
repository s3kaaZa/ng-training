import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { emailValidator } from '../../users/services/create-user.validator';
import { AuthenticationService } from '../../shared/services/authentication.service';
//import { CustomValidators } from '../validators/confirm-pass.validator';
import { confirmPassValidator } from '../validators/confirm-pass.validator';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {
  public userName: string = "";
  public pass: string = "";
  public confirmPass: string = "";
  public registrationForm!: FormGroup;
  public isSubmittedForm: boolean = false;

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.registrationForm = formBuilder.group({
      userName: ['', [Validators.required]],
      pass: ['', [Validators.required]],
      confirmPass: ['', [Validators.required]]
    })

    this.registrationForm.setValidators(confirmPassValidator())
  }

  ngOnInit(): void {
  }

  submit() {
    this.isSubmittedForm = true;
    
    if (this.registrationForm.valid) {
      const userName = this.registrationForm.value.userName;
      const pass = this.registrationForm.value.pass;

      this.authService.saveNewUser(userName, pass);
      this.clear();
      this.router.navigateByUrl('login');
    }
  }

  clear() {
    this.userName = "";
    this.pass = "";
    this.confirmPass = "";
  }

  get passwordMatchError() {
    //console.log(this.registrationForm.getError('mismatch'))
    //console.log(this.registrationForm.get('confirmPass'));
    //console.log(this.registrationForm.get('confirmPass')?.untouched);
    
    return (
      this.registrationForm.getError('mismatch') &&
      this.registrationForm.get('confirmPassword')?.untouched
    );
  }
}
