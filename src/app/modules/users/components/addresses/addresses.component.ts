import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { IAddress } from '../../interfaces/IAddress';

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.scss']
})
export class AddressesComponent implements OnInit {
  @Input() createUserForm!: FormBuilder;
  @Input() isInvalidForm!: boolean;
  @Input() addressesList!: IAddress[];

  @Output() addressesFormCreated = new EventEmitter<FormArray>();

  addressesArray = new FormArray([]);


  constructor() { }

  ngOnInit(): void {
    let addressesListIndex = 0;

    do {
      addressesListIndex = addressesListIndex + 1;
      this.addressesArray.push(this.getFormGroup());
    } while (addressesListIndex < this.addressesList?.length);

    this.addressesArray.patchValue(this.addressesList)
    this.addressesFormCreated.emit(this.addressesArray);
  }

  getFormGroup(): FormGroup {
    return new FormGroup({
      addressLine: new FormControl(''),
      city: new FormControl(''),
      zip: new FormControl({ value: '', disabled: true }, [Validators.required])
    });
  }

  addNewAddress() {
    let addressesListIndex = 0;

    do {
      addressesListIndex = addressesListIndex + 1;
    } while (addressesListIndex < this.addressesArray.controls.length);
    this.addressesArray.push(this.getFormGroup());
  }

  deleteAddress(addressForm: FormGroup) {
    const index = this.addressesArray.controls.indexOf(addressForm);
    this.addressesArray.removeAt(index);
  }
}

