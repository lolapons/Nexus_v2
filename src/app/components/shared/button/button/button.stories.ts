import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { ButtonComponent } from './button.component';
import { ButtonModule } from './button.module';

const meta: Meta<ButtonComponent> = {
  title: 'Components/Button',
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [ButtonModule],
    }),
  ],
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary'],
      description: 'Estilo del botón',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Tamaño del botón',
    },
    text: {
      control: 'text',
      description: 'Texto del botón',
    },
    icon: {
      control: 'text',
      description: 'Nombre del ícono (sin la extensión .svg)',
    },
    iconPosition: {
      control: 'select',
      options: ['left', 'right'],
      description: 'Posición del ícono',
    },
    iconOnly: {
      control: 'boolean',
      description: 'Muestra solo el ícono sin texto',
    },
    disabled: {
      control: 'boolean',
      description: 'Estado deshabilitado',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Ancho completo',
    },
    clicked: {
      action: 'clicked',
      description: 'Evento al hacer clic',
    },
  },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const Primary: Story = {
  args: {
    text: 'Botón Primario',
    variant: 'primary',
    size: 'medium',
  },
};

export const Secondary: Story = {
  args: {
    text: 'Botón Secundario',
    variant: 'secondary',
    size: 'medium',
  },
};

export const Tertiary: Story = {
  args: {
    text: 'Botón Terciario',
    variant: 'tertiary',
    size: 'medium',
  },
};

export const Small: Story = {
  args: {
    text: 'Botón Pequeño',
    variant: 'primary',
    size: 'small',
  },
};

export const Medium: Story = {
  args: {
    text: 'Botón Mediano',
    variant: 'primary',
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    text: 'Botón Grande',
    variant: 'primary',
    size: 'large',
  },
};

export const WithIcon: Story = {
  args: {
    text: 'Botón con ícono',
    variant: 'primary',
    size: 'medium',
    icon: 'plus',
    iconPosition: 'left',
  },
};

export const IconOnly: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    icon: 'plus',
    iconOnly: true,
  },
};

export const Disabled: Story = {
  args: {
    text: 'Botón Deshabilitado',
    variant: 'primary',
    size: 'medium',
    disabled: true,
  },
};

export const FullWidth: Story = {
  args: {
    text: 'Botón Ancho Completo',
    variant: 'primary',
    size: 'medium',
    fullWidth: true,
  },
}; 