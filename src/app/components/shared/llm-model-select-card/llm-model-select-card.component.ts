import { Component, Input, Output, EventEmitter, HostBinding } from '@angular/core';

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

  isHovered = false;

  onClick() {
    this.select.emit();
  }

  onMouseEnter() {
    if (this.state !== 'model-selected') {
      this.isHovered = true;
    }
  }

  onMouseLeave() {
    this.isHovered = false;
  }

  get cardState() {
    if (this.state === 'model-selected') return 'model-selected';
    if (this.isHovered) return 'hover';
    return this.state;
  }
} 