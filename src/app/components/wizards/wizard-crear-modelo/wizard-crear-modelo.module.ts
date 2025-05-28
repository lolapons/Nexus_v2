import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WizardCrearModeloComponent } from './wizard-crear-modelo/wizard-crear-modelo.component';
import { SharedModule } from '../../shared/shared.module';
import { ProgressIndicatorComponent } from './progress-indicator/progress-indicator.component';

@NgModule({
  declarations: [
    WizardCrearModeloComponent,
    ProgressIndicatorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  exports: [
    WizardCrearModeloComponent
  ]
})
export class WizardCrearModeloModule { } 