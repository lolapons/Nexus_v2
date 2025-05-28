import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-add-model-card',
  templateUrl: './add-model-card.component.html',
  styleUrls: ['./add-model-card.component.css'],
  standalone: false
})
export class AddModelCardComponent {
  @Input() text: string = 'Añadir modelo';
  @Input() disabled: boolean = false;
  @Output() addModel = new EventEmitter<void>();

  onAddClick(): void {
    if (!this.disabled) {
      this.addModel.emit();
    }
  }
} 