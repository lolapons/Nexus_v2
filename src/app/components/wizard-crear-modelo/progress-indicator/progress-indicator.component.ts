import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progress-indicator',
  templateUrl: './progress-indicator.component.html',
  styleUrls: ['./progress-indicator.component.css'],
  standalone: false
})
export class ProgressIndicatorComponent implements OnInit {
  @Input() currentStep: number = 1;
  @Input() totalSteps: number = 5;

  constructor() { }

  ngOnInit(): void {
  }

  // Crear un array basado en el número total de pasos
  getStepsArray(): number[] {
    return Array(this.totalSteps).fill(0).map((x, i) => i + 1);
  }

  // Verificar si un paso está activo
  isActive(step: number): boolean {
    return step === this.currentStep;
  }

  // Verificar si un paso está completo
  isCompleted(step: number): boolean {
    return step < this.currentStep;
  }
} 