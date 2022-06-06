import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {
  @Input() formGroupAddress!: FormGroup;

  constructor() {
/*     this.formGroupAddress = new FormGroup({
      addressLine: new FormControl('', [Validators.required]),
      city: new FormControl(),
      zip: new FormControl({ value: '', disabled: true }, [Validators.required])
    })
 */    
  }

  ngOnInit(): void {
    //console.log(this.formGroupAddress);
    
  }

}
