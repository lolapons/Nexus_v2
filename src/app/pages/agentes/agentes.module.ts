import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgentesComponent } from './agentes.component';
import { SharedModule } from '../../components/shared/shared.module';
import { LlmModelSelectCardModule } from "../../components/shared/llm-model-select-card/llm-model-select-card.module";
import { WizardCrearAgenteModule } from '../../components/wizards/wizard-crear-agente/wizard-crear-agente.module';
@NgModule({
  declarations: [AgentesComponent],
  imports: [CommonModule, SharedModule, LlmModelSelectCardModule, WizardCrearAgenteModule],
  exports: [AgentesComponent]
})
export class AgentesModule {} 