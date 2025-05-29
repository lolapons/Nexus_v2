import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { WizardCrearAgenteComponent } from './wizard-crear-agente.component';
import { WizardCrearAgenteModule } from './wizard-crear-agente.module';

const meta: Meta<WizardCrearAgenteComponent> = {
  title: 'Components/WizardCrearAgente',
  component: WizardCrearAgenteComponent,
  decorators: [
    moduleMetadata({
      imports: [WizardCrearAgenteModule],
    }),
  ],
  tags: ['autodocs'],
  argTypes: {
    step: {
      control: 'select',
      options: ['bienvenido', 'seleccion-llm', 'configuracion-agente', 'resumen'],
      description: 'Paso actual del wizard',
    },
  },
};
export default meta;

type Story = StoryObj<WizardCrearAgenteComponent>;

export const Bienvenido: Story = {
  args: { step: 'bienvenido' },
};

export const SeleccionLLM: Story = {
  args: { step: 'seleccion-llm' },
};

export const ConfiguracionAgente: Story = {
  args: { step: 'configuracion-agente' },
};

export const Resumen: Story = {
  args: { step: 'resumen' },
}; 