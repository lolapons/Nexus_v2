import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-llm-target',
  templateUrl: './llm-target.component.html',
  styleUrls: ['./llm-target.component.css'],
  standalone: false
})
export class LlmTargetComponent {
  @Input() nombre: string = 'GPT-4 para Soporte';
  @Input() modelo: string = 'gpt-4';
  @Input() descripcion: string = 'Modelo optimizado para responder preguntas de soporte técnico modelo optimizado para responder preguntas de soporte técnico';
  @Input() proveedor: string = 'OpenAI';
  @Input() selected: boolean = false;
  @Input() proveedorColor: string = '#A2C8AC';
  @Input() proveedorTextColor: string = '#294C2A';

  @Output() onEdit = new EventEmitter<void>();
  @Output() onCopy = new EventEmitter<void>();
  @Output() onDelete = new EventEmitter<void>();

  constructor() { }

  edit(): void {
    this.onEdit.emit();
  }

  copy(): void {
    this.onCopy.emit();
  }

  delete(): void {
    this.onDelete.emit();
  }
} 