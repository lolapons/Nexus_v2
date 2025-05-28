import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddModelCardComponent } from './add-model-card/add-model-card/add-model-card.component';
import { SearchComponent } from './search/search/search.component';
import { LlmTargetComponent } from './llm-target/llm-target/llm-target.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { ButtonComponent } from './button/button/button.component';

@NgModule({
  declarations: [
    AddModelCardComponent,
    SearchComponent,
    LlmTargetComponent,
    ProgressBarComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AddModelCardComponent,
    SearchComponent,
    LlmTargetComponent,
    ProgressBarComponent,
    ButtonComponent
  ]
})
export class SharedModule { } 