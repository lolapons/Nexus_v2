import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WizardCrearModeloComponent } from './wizard-crear-modelo.component';
import { ButtonModule } from '../../button/button.module';
import { ProviderCardModule } from '../provider-card/provider-card.module';
import { OptionSelectorModule } from '../option-selector/option-selector.module';
import { ProgressBarModule } from '../../progress-bar/progress-bar.module';

@NgModule({
  declarations: [
    WizardCrearModeloComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    ProviderCardModule,
    OptionSelectorModule,
    ProgressBarModule
  ],
  exports: [
    WizardCrearModeloComponent
  ]
})
export class WizardCrearModeloComponentModule { } 