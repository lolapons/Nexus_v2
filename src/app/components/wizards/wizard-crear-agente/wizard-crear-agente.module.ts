import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WizardCrearAgenteComponent } from './wizard-crear-agente.component';
import { SearchModule } from '../../shared/search/search/search.module';
import { LlmModelSelectCardModule } from '../../shared/llm-model-select-card/llm-model-select-card.module';
import { ProgressIndicatorComponent } from '../wizard-crear-modelo/progress-indicator/progress-indicator.component';
import { SelectInputModule } from '../../shared/select-input/select-input/select-input.module';

@NgModule({
  declarations: [WizardCrearAgenteComponent, ProgressIndicatorComponent],
  imports: [CommonModule, FormsModule, SearchModule, LlmModelSelectCardModule, SelectInputModule],
  exports: [WizardCrearAgenteComponent]
})
export class WizardCrearAgenteModule {} 