import { Component, EventEmitter, Input, OnInit, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IAddress } from '../../interfaces/IAddress';
import { IUser } from '../../interfaces/IUser';

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.scss']
})
export class AddressesComponent implements OnInit, OnChanges {
  @Input() createUserForm!: FormBuilder;
  @Input() isInvalidForm!: boolean;
  @Input() addressesList!: IAddress[];
  @Input() user!: IUser;

  @Output() addressesFormCreated = new EventEmitter<FormArray>();

  addressesArray = new FormArray([]);


  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes['user']) {
      const user = changes['user'].currentValue as IUser;
      if (user) {
        let addressesListIndex = 0;

        do {
          addressesListIndex = addressesListIndex + 1;
          this.addressesArray.push(this.getFormGroup());
        } while (addressesListIndex < user.addresses?.length);

        this.addressesArray.patchValue(user.addresses);
        this.addressesFormCreated.emit(this.addressesArray);
      }
    } else {
      this.addressesArray.push(this.getFormGroup());
      this.addressesFormCreated.emit(this.addressesArray);
    }
  }

  getFormGroup(): FormGroup {
    return new FormGroup({
      addressLine: new FormControl(''),
      city: new FormControl(''),
      zip: new FormControl({ value: '', disabled: true }, [Validators.required])
    });
  }

  addNewAddress() {
    this.addressesArray.push(this.getFormGroup());
  }

  deleteAddress(addressForm: FormGroup) {
    const index = this.addressesArray.controls.indexOf(addressForm);
    this.addressesArray.removeAt(index);
  }
}

