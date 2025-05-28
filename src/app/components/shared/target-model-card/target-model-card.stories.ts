import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { TargetModelCardComponent, TargetModelCardData } from './target-model-card.component';
import { TargetModelCardModule } from './target-model-card.module';

const meta: Meta<TargetModelCardComponent> = {
  title: 'Components/TargetModelCard',
  component: TargetModelCardComponent,
  decorators: [
    moduleMetadata({
      imports: [TargetModelCardModule],
    }),
  ],
  tags: ['autodocs'],
  argTypes: {
    data: {
      control: 'object',
      description: 'Datos de la tarjeta',
    },
    edit: { action: 'edit', description: 'Editar modelo' },
    copy: { action: 'copy', description: 'Copiar modelo' },
    delete: { action: 'delete', description: 'Eliminar modelo' },
  },
};

export default meta;
type Story = StoryObj<TargetModelCardComponent>;

const defaultData: TargetModelCardData = {
  nombre: 'Asistente',
  descripcion: 'Agente especializado en resolver problemas técnicos y proporcionar soporte a usuarios',
  proveedor: 'OpenAi',
  modelo: 'gpt-4',
  fechaCreacion: '15/10/2025',
};

export const Default: Story = {
  args: {
    data: { ...defaultData },
  },
};

export const LongDescription: Story = {
  args: {
    data: {
      ...defaultData,
      descripcion: 'Agente especializado en resolver problemas técnicos y proporcionar soporte a usuarios. Este agente puede ayudarte a resolver incidencias, responder preguntas frecuentes y guiarte en el uso de la plataforma de manera eficiente y rápida.',
    },
  },
};

export const DifferentProvider: Story = {
  args: {
    data: {
      ...defaultData,
      proveedor: 'Anthropic',
      modelo: 'claude-3-opus-20240229',
    },
  },
}; 