import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelosComponent } from './modelos.component';
import { WizardCrearModeloModule } from '../../components/wizard-crear-modelo/wizard-crear-modelo.module';
import { LayoutBackgroundModule } from '../../components/layout-background/layout-background.module';
import { LlmTargetModule } from '../../components/llm-target/llm-target.module';
import { SearchModule } from '../../components/search/search.module';
import { AddModelCardModule } from '../../components/add-model-card/add-model-card.module';
@NgModule({
  declarations: [ModelosComponent],
  imports: [
    CommonModule, 
    WizardCrearModeloModule,
    LayoutBackgroundModule,
    LlmTargetModule,
    SearchModule,
    AddModelCardModule
  ],
  exports: [ModelosComponent]
})
export class ModelosModule {} 