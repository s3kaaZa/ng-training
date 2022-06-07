import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.scss']
})
export class AddressesComponent implements OnInit {
  @Input() createUserForm!: FormBuilder;
  @Input() isInvalidForm!: boolean;
  addressesArray = new FormArray([
    this.getFormGroup()
  ])


  constructor() { }

  ngOnInit(): void { }

  getFormGroup(): FormGroup {
    return new FormGroup({
      addressLine: new FormControl(''),
      city: new FormControl(''),
      zip: new FormControl({ value: '', disabled: true }, [Validators.required])
    })
  }

  addNewAddress() {
    this.addressesArray.push(this.getFormGroup());
  }

  deleteAddress(addressForm: FormGroup) {
    const index = this.addressesArray.controls.indexOf(addressForm)
    this.addressesArray.removeAt(index);
  }
}

