import { Component, Input, Output, EventEmitter } from '@angular/core';

export interface TargetModelCardData {
  nombre: string;
  descripcion: string;
  proveedor: string;
  modelo: string;
  fechaCreacion: string;
}

@Component({
  selector: 'app-target-model-card',
  templateUrl: './target-model-card.component.html',
  styleUrls: ['./target-model-card.component.css'],
  standalone: false
})
export class TargetModelCardComponent {
  @Input() data!: TargetModelCardData;
  @Output() edit = new EventEmitter<void>();
  @Output() copy = new EventEmitter<void>();
  @Output() delete = new EventEmitter<void>();

onEdit() {
  
}

  onCopy() {
  
  }
onDelete() {

}
} 