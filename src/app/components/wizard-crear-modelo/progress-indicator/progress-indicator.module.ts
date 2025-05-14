import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressIndicatorComponent } from './progress-indicator.component';

@NgModule({
  declarations: [
    ProgressIndicatorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProgressIndicatorComponent
  ]
})
export class ProgressIndicatorModule { } 