import { Component } from '@angular/core';
import { SelectOption } from '../../shared/select-input/select-input/select-input.component';

export type WizardStep = 'bienvenido' | 'configuracion-agente' | 'seleccion-llm' | 'resumen';

interface LlmModel {
  title: string;
  provider: string;
  model: string;
  description: string;
}

@Component({
  selector: 'app-wizard-crear-agente',
  templateUrl: './wizard-crear-agente.component.html',
  styleUrls: ['./wizard-crear-agente.component.css'],
  standalone: false
})
export class WizardCrearAgenteComponent {
  step: WizardStep = 'bienvenido';

  // Datos del wizard
  agente = {
    nombre: '',
    descripcion: '',
    comportamiento: '',
    herramienta: '',
    modelo: null as null | LlmModel
  };

  // Modelos LLM mock
  searchTerm: string = '';
  llmModels: LlmModel[] = [
    {
      title: 'GPT-4 para Soporte',
      provider: 'OpenAI',
      model: 'gpt-4o',
      description: 'Modelo de lenguaje avanzado optimizado para tareas de generación de texto, comprensión de lenguaje natural y conversaciones contextuales ...'
    },
    {
      title: 'GPT-4 para Soporte',
      provider: 'OpenAI',
      model: 'gpt-4o',
      description: 'Modelo de lenguaje avanzado optimizado para tareas de generación de texto, comprensión de lenguaje natural y conversaciones contextuales ...'
    },
    {
      title: 'GPT-4 para Soporte',
      provider: 'OpenAI',
      model: 'gpt-4o',
      description: 'Modelo de lenguaje avanzado optimizado para tareas de generación de texto, comprensión de lenguaje natural y conversaciones contextuales ...'
    }
  ];

  get filteredLlmModels(): LlmModel[] {
    if (!this.searchTerm) return this.llmModels;
    return this.llmModels.filter(m =>
      m.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      m.provider.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      m.model.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  selectLlmModel(model: LlmModel) {
    this.agente.modelo = model;
  }

  nextStep() {
    if (this.step === 'bienvenido') this.step = 'configuracion-agente';
    else if (this.step === 'configuracion-agente') this.step = 'seleccion-llm';
    else if (this.step === 'seleccion-llm') this.step = 'resumen';
  }

  prevStep() {
    if (this.step === 'resumen') this.step = 'seleccion-llm';
    else if (this.step === 'seleccion-llm') this.step = 'configuracion-agente';
    else if (this.step === 'configuracion-agente') this.step = 'bienvenido';
  }

  comportamientos: SelectOption[] = [
    { value: 'option1', label: 'Comportamiento 1' },
    { value: 'option2', label: 'Comportamiento 2' },
    { value: 'option3', label: 'Comportamiento 3' }
  ];

  herramientas: SelectOption[] = [
    { value: 'option1', label: 'Herramienta 1' },
    { value: 'option2', label: 'Herramienta 2' },
    { value: 'option3', label: 'Herramienta 3' }
  ];
} 