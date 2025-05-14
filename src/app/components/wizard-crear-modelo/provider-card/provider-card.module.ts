import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProviderCardComponent } from './provider-card.component';

@NgModule({
  declarations: [
    ProviderCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProviderCardComponent
  ]
})
export class ProviderCardModule { } 