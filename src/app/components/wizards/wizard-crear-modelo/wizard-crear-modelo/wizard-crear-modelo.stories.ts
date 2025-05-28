import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { WizardCrearModeloComponent } from './wizard-crear-modelo.component';


const meta: Meta<WizardCrearModeloComponent> = {
  title: 'Components/Wizard Crear Modelo',
  component: WizardCrearModeloComponent,
  decorators: [
    moduleMetadata({
      imports: [WizardCrearModeloComponent],
    }),
  ],
  tags: ['autodocs'],
  argTypes: {
    estado: {
      control: 'select',
      options: ['bienvenido', 'seleccion-modelo', 'configuracion-modelo', 'configuracion-api', 'resumen'],
      description: 'Estado actual del wizard',
    },
  },
};

export default meta;
type Story = StoryObj<WizardCrearModeloComponent>;

export const Bienvenido: Story = {
  args: {
    estado: 'bienvenido',
  },
};

export const SeleccionModelo: Story = {
  args: {
    estado: 'seleccion-modelo',
  },
};

export const ConfiguracionModelo: Story = {
  args: {
    estado: 'configuracion-modelo',
  },
};

export const ConfiguracionAPI: Story = {
  args: {
    estado: 'configuracion-api',
  },
};

export const Resumen: Story = {
  args: {
    estado: 'resumen',
  },
}; 