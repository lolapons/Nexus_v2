import { NgModule } from '@angular/core';
import { ButtonModule as ButtonComponentModule } from './button/button.module';

@NgModule({
  imports: [
    ButtonComponentModule
  ],
  exports: [
    ButtonComponentModule
  ]
})
export class ButtonModule { } 