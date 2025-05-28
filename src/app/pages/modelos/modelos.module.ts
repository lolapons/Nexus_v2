import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelosComponent } from './modelos.component';
import { LayoutModule } from '../../components/layout/layout.module';
import { SharedModule } from '../../components/shared/shared.module';
import { WizardCrearModeloModule } from '../../components/wizards/wizard-crear-modelo/wizard-crear-modelo.module';

@NgModule({
  declarations: [ModelosComponent],
  imports: [
    CommonModule,
    LayoutModule,
    SharedModule,
    WizardCrearModeloModule
  ],
  exports: [ModelosComponent]
})
export class ModelosModule { } 