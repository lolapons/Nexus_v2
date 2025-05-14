import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WizardCrearModeloComponent } from './wizard-crear-modelo.component';
import { ButtonModule } from '../../button/button.module';
import { ProviderCardModule } from '../provider-card/provider-card.module';
import { ModelCardModule } from '../model-card/model-card.module';
import { ProgressIndicatorModule } from '../progress-indicator/progress-indicator.module';

@NgModule({
  declarations: [
    WizardCrearModeloComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    ProviderCardModule,
    ModelCardModule,
    ProgressIndicatorModule
  ],
  exports: [
    WizardCrearModeloComponent
  ]
})
export class WizardCrearModeloComponentModule { } 