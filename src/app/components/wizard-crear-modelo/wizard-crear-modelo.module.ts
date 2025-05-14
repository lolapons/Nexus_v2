import { NgModule } from '@angular/core';
import { WizardCrearModeloComponentModule } from './wizard-crear-modelo/wizard-crear-modelo.module';

@NgModule({
  imports: [
    WizardCrearModeloComponentModule
  ],
  exports: [
    WizardCrearModeloComponentModule
  ]
})
export class WizardCrearModeloModule { } 