import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-address',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss']
})
export class AddressComponent implements OnInit {
  @Input() isInvalidForm!: boolean;
  @Input() formGroupAddress!: FormGroup;
  subscription!: Subscription;

  constructor() { }

  ngOnInit(): void {
    const zip = this.formGroupAddress.get('zip');
    const valueCity$ = this.formGroupAddress.get('city')!.valueChanges;
    this.subscription = valueCity$.subscribe(cityValue => {
      if (cityValue) {
        zip!.enable();
      } else {
        zip!.disable();
      }
    })
  }

  ngOnDestroyed(){
    this.subscription.unsubscribe();
  }
}
