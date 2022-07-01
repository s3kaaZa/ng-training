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
  public isPasswordsMatch: boolean = true;

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.registrationForm = formBuilder.group({
      userName: ['', [Validators.required]],
      pass: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(30)]],
      confirmPass: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(30)]]
    })

    this.registrationForm.setValidators(confirmPassValidator())
  }

  ngOnInit(): void {
  }

  submit() {
    this.isSubmittedForm = true;
    this.isPasswordsMatch = !this.passwordsMatchError;
    
    if (this.registrationForm.valid && this.isPasswordsMatch) {
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

  get passwordsMatchError() {
    return (
      this.registrationForm.getError('mismatch') &&
      this.registrationForm.get('pass')?.touched &&
      this.registrationForm.get('confirmPass')?.touched
    );
  }

  goToLoginPage() {
    this.clear();
    this.router.navigateByUrl('login');
  }
}
