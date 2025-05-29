import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgentesComponent } from './agentes.component';
import { SharedModule } from '../../components/shared/shared.module';
import { LlmModelSelectCardModule } from "../../components/shared/llm-model-select-card/llm-model-select-card.module";

@NgModule({
  declarations: [AgentesComponent],
  imports: [CommonModule, SharedModule, LlmModelSelectCardModule],
  exports: [AgentesComponent]
})
export class AgentesModule {} 