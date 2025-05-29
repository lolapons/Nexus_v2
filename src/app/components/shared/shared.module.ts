import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddModelCardModule } from './add-model-card/add-model-card/add-model-card.module';
import { SearchModule } from './search/search/search.module';
import { LlmTargetComponentModule } from './llm-target/llm-target/llm-target.module';
import { ProgressBarModule } from './progress-bar/progress-bar.module';
import { ButtonModule } from './button/button/button.module';
import { TargetModelCardModule } from './target-model-card/target-model-card.module';

@NgModule({
  imports: [
    CommonModule,
    AddModelCardModule,
    SearchModule,
    LlmTargetComponentModule,
    ProgressBarModule,
    ButtonModule,
    TargetModelCardModule
  ],
  exports: [
    AddModelCardModule,
    SearchModule,
    LlmTargetComponentModule,
    ProgressBarModule,
    ButtonModule,
    TargetModelCardModule
  ]
})
export class SharedModule { } 