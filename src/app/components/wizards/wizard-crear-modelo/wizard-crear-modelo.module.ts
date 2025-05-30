import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WizardCrearModeloComponent } from './wizard-crear-modelo/wizard-crear-modelo.component';
import { SharedModule } from '../../shared/shared.module';
import { ProgressIndicatorModule } from '../progress-indicator/progress-indicator.module';

@NgModule({
  declarations: [
    WizardCrearModeloComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ProgressIndicatorModule
  ],
  exports: [
    WizardCrearModeloComponent
  ]
})
export class WizardCrearModeloModule { } 