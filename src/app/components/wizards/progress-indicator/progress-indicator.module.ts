import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressIndicatorComponent } from '../wizard-crear-modelo/progress-indicator/progress-indicator.component';

@NgModule({
  declarations: [ProgressIndicatorComponent],
  imports: [CommonModule],
  exports: [ProgressIndicatorComponent]
})
export class ProgressIndicatorModule {} 