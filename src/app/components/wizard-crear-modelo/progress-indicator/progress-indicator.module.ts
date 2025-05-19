import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressIndicatorComponent } from './progress-indicator.component';
import { ProgressBarModule } from '../../progress-bar/progress-bar.module';

@NgModule({
  declarations: [
    ProgressIndicatorComponent
  ],
  imports: [
    CommonModule,
    ProgressBarModule
  ],
  exports: [
    ProgressIndicatorComponent
  ]
})
export class ProgressIndicatorModule { } 