import { Component } from '@angular/core';

interface ModelData {
  proveedor: string;
  nombre: string;
  modelo: string;
  descripcion: string;
}

@Component({
  selector: 'app-modelos',
  templateUrl: './modelos.component.html',
  styleUrls: ['./modelos.component.css'],
  standalone: false
})
export class ModelosComponent {
  searchTerm: string = '';
  showWizard: boolean = false;
  
  modelos: ModelData[] = [
    {
      proveedor: 'OpenAI',
      nombre: 'GPT-4 para Soporte',
      modelo: 'gpt-4',
      descripcion: 'Modelo optimizado para responder preguntas de soporte técnico modelo optimizado para responder preguntas de soporte técnico'
    },
    {
      proveedor: 'OpenAI',
      nombre: 'GPT-4 para Soporte',
      modelo: 'gpt-4',
      descripcion: 'Modelo optimizado para responder preguntas de soporte técnico modelo optimizado para responder preguntas de soporte técnico'
    },
    {
      proveedor: 'OpenAI',
      nombre: 'GPT-4 para Soporte',
      modelo: 'gpt-4',
      descripcion: 'Modelo optimizado para responder preguntas de soporte técnico modelo optimizado para responder preguntas de soporte técnico'
    }
  ];

  onEdit(index: number) {
    console.log('Editar modelo:', index);
  }

  onCopy(modeloOriginal: ModelData) {
    // Buscar cuántas copias existen ya con ese nombre base
    const baseName = modeloOriginal.nombre.replace(/ \d+$/, '');
    const regex = new RegExp(`^${baseName}(?: (\d+))?$`);
    let maxNum = 1;
    this.modelos.forEach(m => {
      const match = m.nombre.match(regex);
      if (match) {
        const num = match[1] ? parseInt(match[1], 10) : 1;
        if (num >= maxNum) maxNum = num + 1;
      }
    });
    const nuevoNombre = `${baseName} ${maxNum}`;
    const copia = { ...modeloOriginal, nombre: nuevoNombre };
    // Agregar la copia al final de la lista original
    this.modelos = [...this.modelos, copia];
  }

  onDelete(modeloAEliminar: ModelData) {
    this.modelos = this.modelos.filter(m => m !== modeloAEliminar);
  }

  onSearch(term: string) {
    this.searchTerm = term;
  }

  onAddModel() {
    this.showWizard = true;
  }

  closeWizard() {
    this.showWizard = false;
  }

  get filteredModelos() {
    if (!this.searchTerm) return this.modelos;
    const term = this.searchTerm.toLowerCase();
    return this.modelos.filter(modelo => 
      modelo.nombre.toLowerCase().includes(term) ||
      modelo.modelo.toLowerCase().includes(term) ||
      modelo.descripcion.toLowerCase().includes(term)
    );
  }
} 