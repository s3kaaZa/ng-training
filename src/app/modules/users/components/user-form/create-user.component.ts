import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { emailValidator } from '../../services/create-user.validator';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  @Input() formGroup!: FormGroup;
  @Input() isInvalidForm!: boolean;

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
  }
}