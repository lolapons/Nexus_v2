import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { LlmTargetComponent } from './llm-target.component';
import { LlmTargetComponentModule } from './llm-target.module';

const meta: Meta<LlmTargetComponent> = {
  title: 'Components/LlmTarget',
  component: LlmTargetComponent,
  decorators: [
    moduleMetadata({
      imports: [LlmTargetComponentModule],
    }),
  ],
  tags: ['autodocs'],
  argTypes: {
    modelData: {
      control: 'object',
      description: 'Datos del modelo',
    },
    selected: {
      control: 'boolean',
      description: 'Si el modelo está seleccionado',
    },
    onEdit: {
      action: 'edited',
      description: 'Evento emitido al hacer clic en editar',
    },
    onCopy: {
      action: 'copied',
      description: 'Evento emitido al hacer clic en copiar',
    },
    onDelete: {
      action: 'deleted',
      description: 'Evento emitido al hacer clic en eliminar',
    },
  },
};

export default meta;
type Story = StoryObj<LlmTargetComponent>;

export const Default: Story = {
  args: {
    modelData: {
      nombre: 'GPT-4 para Soporte',
      modelo: 'gpt-4',
      descripcion: 'Modelo optimizado para responder preguntas de soporte técnico',
      proveedor: 'OpenAI'
    },
    selected: false
  },
};

export const Selected: Story = {
  args: {
    modelData: {
      nombre: 'GPT-4 para Soporte',
      modelo: 'gpt-4',
      descripcion: 'Modelo optimizado para responder preguntas de soporte técnico',
      proveedor: 'OpenAI'
    },
    selected: true
  },
};

export const LongDescription: Story = {
  args: {
    modelData: {
      nombre: 'GPT-4 para Soporte',
      modelo: 'gpt-4',
      descripcion: 'Modelo optimizado para responder preguntas de soporte técnico. Este modelo ha sido entrenado con datos específicos para proporcionar respuestas claras y precisas a problemas técnicos comunes.',
      proveedor: 'OpenAI'
    },
    selected: false
  },
};

export const DifferentProvider: Story = {
  args: {
    modelData: {
      nombre: 'Claude 3 Opus',
      modelo: 'claude-3-opus-20240229',
      descripcion: 'Modelo avanzado de Anthropic para procesamiento de lenguaje natural con capacidades multimodales',
      proveedor: 'Anthropic'
    },
    selected: false
  },
}; 