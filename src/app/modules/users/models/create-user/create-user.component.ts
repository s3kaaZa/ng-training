import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { emailValidator } from '../../services/create-user.validator';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  @Input() formGroup!: FormGroup;

  public userForm!: FormGroup;
  public gender: boolean = false;


  constructor(private _formBuilder: FormBuilder) {
    this.userForm = _formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [
        Validators.required,
        Validators.email,
        emailValidator(),    //(control.value.substring(control.value.indexOf('@') + 1) == 'gmail.com')
      ]],
      age: ['', [
        Validators.required,
        Validators.min(15),
        Validators.max(100),
      ]],
      company: ['', [
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
    this.formGroup.addControl('user', this.userForm)
  }
}