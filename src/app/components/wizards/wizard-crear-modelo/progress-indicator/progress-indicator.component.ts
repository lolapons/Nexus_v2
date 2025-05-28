import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress-indicator',
  templateUrl: './progress-indicator.component.html',
  styleUrls: ['./progress-indicator.component.css'],
  standalone: false
})
export class ProgressIndicatorComponent {
  @Input() currentStep: number = 1;
  @Input() totalSteps: number = 5;

  get steps(): number[] {
    return Array(this.totalSteps).fill(0).map((_, i) => i + 1);
  }

  isCompleted(step: number): boolean {
    return step < this.currentStep;
  }
} 