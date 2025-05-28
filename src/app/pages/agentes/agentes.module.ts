import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgentesComponent } from './agentes.component';
import { SharedModule } from '../../components/shared/shared.module';

@NgModule({
  declarations: [AgentesComponent],
  imports: [CommonModule, SharedModule],
  exports: [AgentesComponent]
})
export class AgentesModule {} 