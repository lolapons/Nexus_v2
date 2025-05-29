import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-llm-model-select-card',
  templateUrl: './llm-model-select-card.component.html',
  styleUrls: ['./llm-model-select-card.component.css'],
  standalone: false
})
export class LlmModelSelectCardComponent {
  @Input() title: string = '';
  @Input() provider: string = '';
  @Input() model: string = '';
  @Input() description: string = '';
  @Input() state: 'default' | 'hover' | 'selected' | 'model-selected' = 'default';
  @Output() select = new EventEmitter<void>();

  onClick() {
    this.select.emit();
  }
} 