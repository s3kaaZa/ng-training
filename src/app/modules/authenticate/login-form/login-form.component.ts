import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationCancel, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { takeWhile } from 'rxjs';
import { ErrorMessageComponent } from '../../shared/components/error-message/error-message.component';
import { AuthenticationService } from '../../shared/services/authentication.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  public loginForm!: FormGroup;
  public userName: string = "";
  public password: string = "";
  public isAuthError: boolean = false;
  public isAuthenticationUser: boolean = false;
  public isFormSubmitted: boolean = false;
  public errorMessage: string = '';
  public errorMessageComponent: ErrorMessageComponent;

  private isComponentActive: boolean = true;

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) {
    this.loginForm = formBuilder.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        console.log(`Navigation Start to "${event.url}"`)
      }

      if (event instanceof NavigationCancel) {
        console.log(`The Guard interrupted the transition to "${event.url}"`)
      }

      if (event instanceof NavigationEnd) {
        console.log(`Navigation End to "${event.url}"`)
      }
    })

    this.loginForm.valueChanges
      .pipe(
        takeWhile(() => this.isComponentActive)
      )
      .subscribe((v) => {
        this.isFormSubmitted = false;
      })
  }

  ngOnInit(): void { }

  submit() {
    this.isFormSubmitted = true;
    this.isAuthenticationUser = !!this.authService.authenticationUser(this.userName, this.password).length;

    if (this.isAuthenticationUser) {
      this.isAuthError = false;
      this.loginForm.reset();
      this.router.navigateByUrl('home');
    } else {
      this.isAuthError = true;
    }
  }

  goToRegistrationPage() {
    this.clear();
    this.router.navigateByUrl('registration');
  }

  clear() {
    this.userName = "";
    this.password = "";
  }

  ngOnDestroy(): void {
    this.isComponentActive = false;
  }
}
