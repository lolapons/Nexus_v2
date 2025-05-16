import { NgModule } from '@angular/core';
import { LlmTargetComponentModule } from './llm-target/llm-target.module';

@NgModule({
  imports: [
    LlmTargetComponentModule
  ],
  exports: [
    LlmTargetComponentModule
  ]
})
export class LlmTargetModule { } 