import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { MatInputModule } from '@angular/material/input';
import { TextFieldModule } from '@angular/cdk/text-field';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    InputComponent,
  ],
  imports: [
    CommonModule,
    MatInputModule,
    TextFieldModule,
    FormsModule,
  ],
  exports: [
    InputComponent,
  ]
})
export class InputModule { }
