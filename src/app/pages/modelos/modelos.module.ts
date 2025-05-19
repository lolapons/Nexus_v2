import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelosComponent } from './modelos.component';
import { WizardCrearModeloModule } from '../../components/wizard-crear-modelo/wizard-crear-modelo.module';
import { LayoutBackgroundModule } from '../../components/layout-background/layout-background.module';

@NgModule({
  declarations: [ModelosComponent],
  imports: [
    CommonModule, 
    WizardCrearModeloModule,
    LayoutBackgroundModule
  ],
  exports: [ModelosComponent]
})
export class ModelosModule {} 