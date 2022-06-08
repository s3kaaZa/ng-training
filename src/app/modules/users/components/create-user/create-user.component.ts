import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { emailAsyncValidator, emailValidator } from '../../services/create-user.validator';
import { AddressesComponent } from '../addresses/addresses.component';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  @Input() formGroup!: FormGroup;
  @Input() isInvalidForm!: boolean;
  @Input() addresses!: FormGroup;

  @Output() userFormCreated = new EventEmitter<FormGroup>();

  @ViewChild(AddressesComponent, {static: false}) 
  private addressesComponent!: AddressesComponent;

  public userForm!: FormGroup;
  public gender: boolean = false;

  constructor(_formBuilder: FormBuilder) {
    this.userForm = _formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['@gmail.com', [
        Validators.required,
        Validators.email,
        emailValidator(),
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
    this.userFormCreated.emit(this.userForm);
  }
}