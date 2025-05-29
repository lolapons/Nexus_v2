import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { LlmModelSelectCardComponent } from './llm-model-select-card.component';
import { LlmModelSelectCardModule } from './llm-model-select-card.module';

const meta: Meta<LlmModelSelectCardComponent> = {
  title: 'Components/LlmModelSelectCard',
  component: LlmModelSelectCardComponent,
  decorators: [
    moduleMetadata({
      imports: [LlmModelSelectCardModule],
    }),
  ],
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: 'select',
      options: ['default', 'hover', 'selected', 'model-selected'],
      description: 'Estado visual de la tarjeta',
    },
    select: { action: 'select', description: 'Seleccionar modelo' },
  },
};
export default meta;

type Story = StoryObj<LlmModelSelectCardComponent>;

export const Default: Story = {
  args: {
    title: 'GPT-4 para Soporte',
    provider: 'OpenAI',
    model: 'gpt-4o',
    description: 'Modelo de lenguaje avanzado optimizado para tareas de generación de texto, comprensión de lenguaje natural y conversaciones contextuales ...',
    state: 'default',
  },
};

export const Hover: Story = {
  args: {
    ...Default.args,
    state: 'hover',
  },
};

export const Selected: Story = {
  args: {
    ...Default.args,
    state: 'selected',
  },
};

export const ModelSelected: Story = {
  args: {
    ...Default.args,
    state: 'model-selected',
    title: 'Modelo seleccionado: GPT-4 para Soporte',
    description: 'Modelo de lenguaje avanzado optimizado para tareas de generación de texto, comprensión de lenguaje natural y conversaciones contextuales ...',
  },
}; 