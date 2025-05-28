import { Component, Input, Output, EventEmitter } from '@angular/core';

interface ModeloLLM {
  id?: string;
  nombre: string;
  modelo: string;
  descripcion: string;
  proveedor: string;
  configuracion?: any;
  fecha_creacion?: string;
}

interface ProveedorColor {
  bg: string;
  text: string;
}

type ProveedorColores = {
  [key in 'OpenAI' | 'Anthropic' | 'Google' | 'Default']: ProveedorColor;
}

@Component({
  selector: 'app-llm-target',
  templateUrl: './llm-target.component.html',
  styleUrls: ['./llm-target.component.css'],
  standalone: false
})
export class LlmTargetComponent {
  @Input() modelData: ModeloLLM = {
    nombre: '',
    modelo: '',
    descripcion: '',
    proveedor: ''
  };
  @Input() selected: boolean = false;

  private proveedorColores: ProveedorColores = {
    'OpenAI': { bg: '#A2C8AC', text: '#294C2A' },
    'Anthropic': { bg: '#C8A2A2', text: '#4C2929' },
    'Google': { bg: '#A2A2C8', text: '#29294C' },
    'Default': { bg: '#E5E7EB', text: '#374151' }
  };

  get proveedorColor(): string {
    const proveedor = this.modelData.proveedor as keyof ProveedorColores;
    return (this.proveedorColores[proveedor]?.bg || this.proveedorColores['Default'].bg);
  }

  get proveedorTextColor(): string {
    const proveedor = this.modelData.proveedor as keyof ProveedorColores;
    return (this.proveedorColores[proveedor]?.text || this.proveedorColores['Default'].text);
  }

  @Output() onEdit = new EventEmitter<ModeloLLM>();
  @Output() onCopy = new EventEmitter<ModeloLLM>();
  @Output() onDelete = new EventEmitter<ModeloLLM>();

  edit(): void {
    this.onEdit.emit(this.modelData);
  }

  copy(): void {
    this.onCopy.emit(this.modelData);
  }

  delete(): void {
    this.onDelete.emit(this.modelData);
  }
} 