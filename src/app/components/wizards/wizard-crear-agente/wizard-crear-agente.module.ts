import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WizardCrearAgenteComponent } from './wizard-crear-agente.component';
import { SearchModule } from '../../shared/search/search/search.module';
import { LlmModelSelectCardModule } from '../../shared/llm-model-select-card/llm-model-select-card.module';
import { ProgressIndicatorModule } from '../progress-indicator/progress-indicator.module';
import { SelectInputModule } from '../../shared/select-input/select-input/select-input.module';
import { ButtonModule } from '../../shared/button/button/button.module';

@NgModule({
  declarations: [WizardCrearAgenteComponent],
  imports: [CommonModule, FormsModule, SearchModule, LlmModelSelectCardModule, SelectInputModule, ProgressIndicatorModule, ButtonModule],
  exports: [WizardCrearAgenteComponent]
})
export class WizardCrearAgenteModule {} 