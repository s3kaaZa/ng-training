import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.scss']
})
export class AddressesComponent implements OnInit {
  addressesArray = new FormArray([
    this.getFormGroup(), this.getFormGroup()
  ])

  constructor() { }

  ngOnInit(): void {
    console.log(this.addressesArray);

  }

  getFormGroup(): FormGroup {
    return new FormGroup({
      addressLine: new FormControl('', [Validators.required]),
      city: new FormControl(''),
      zip: new FormControl({ value: '', disabled: true }, [Validators.required])
    })
  }
}

