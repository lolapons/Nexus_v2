import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaModelosComponent } from './lista-modelos.component';
import { LlmTargetModule } from '../../../components/llm-target/llm-target.module';

@NgModule({
  declarations: [
    ListaModelosComponent
  ],
  imports: [
    CommonModule,
    LlmTargetModule
  ],
  exports: [
    ListaModelosComponent
  ]
})
export class ListaModelosModule { } 
