import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { merge } from 'rxjs';
import { IUser } from '../../interfaces/IUser';
import { emailValidator } from '../../services/create-user.validator';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class CreateUserComponent implements OnInit {
  @Input() formGroup!: FormGroup;
  @Input() isInvalidForm!: boolean;
  @Input() user!: IUser;

  @Output() userFormCreated = new EventEmitter<FormGroup>();

  public userForm!: FormGroup;
  public gender: boolean = false;

  constructor(_formBuilder: FormBuilder) {
    this.userForm = _formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [
        Validators.required,
        Validators.email,
        emailValidator(),
      ]],
      age: ['', [
        Validators.required,
        Validators.min(15),
        Validators.max(100),
      ]],
      companyName: ['', [
        Validators.required,
        Validators.maxLength(35)
      ]],
      department: ['', [
        Validators.required,
        Validators.minLength(6)
      ]],
      gender: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.userFormCreated.emit(this.userForm);
    this.userForm.patchValue(this.user);
    this.userForm.get('firstName')?.valueChanges.subscribe((name) => {
      let emailName = this.getMergedEmail(name, this.userForm.value.lastName);
      this.setEmail(emailName);
    })
    this.userForm.get('lastName')?.valueChanges.subscribe((name) => {
      let emailName = this.getMergedEmail(this.userForm.value.firstName, name);
      this.setEmail(emailName);
    })
  }

  private getMergedEmail(firstPartName: string, secondPartName: string) {
    let emailName = '';
    let merged = merge(firstPartName, secondPartName);

    merged.subscribe(x => {
      emailName = emailName + x;
    });
    return emailName;
  }

  private setEmail(emailName: string) {
    emailName = emailName.replace(/\s/g, '');
    this.userForm.get('email')?.patchValue(emailName + '@gmail.com');
  }

  createEmail(): void {
  }

  
}