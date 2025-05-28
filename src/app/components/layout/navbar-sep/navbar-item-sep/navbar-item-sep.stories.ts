import { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { NavbarItemSepComponent } from './navbar-item-sep.component';
import { CommonModule } from '@angular/common';

const meta: Meta<NavbarItemSepComponent> = {
  title: 'Components/NavbarItemSep',
  component: NavbarItemSepComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [CommonModule],
    }),
  ],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    icon: {
      control: 'select',
      options: ['robot', 'brain', 'behavior', 'tool', 'logout'],
      description: 'El icono que se muestra'
    },
    label: {
      control: 'text',
      description: 'El texto que aparece al hacer hover'
    },
    isSelected: {
      control: 'boolean',
      description: 'Indica si el elemento está seleccionado'
    },
    itemClick: {
      action: 'clicked',
      description: 'Evento que se dispara al hacer clic en el elemento'
    }
  }
};

export default meta;
type Story = StoryObj<NavbarItemSepComponent>;

export const Default: Story = {
  args: {
    icon: 'brain',
    label: 'Modelos',
    isSelected: false
  }
};

export const Selected: Story = {
  args: {
    icon: 'brain',
    label: 'Modelos',
    isSelected: true
  }
};

export const Robot: Story = {
  args: {
    icon: 'robot',
    label: 'Agentes',
    isSelected: false
  }
};

export const Behavior: Story = {
  args: {
    icon: 'behavior',
    label: 'Comportamiento',
    isSelected: false
  }
};

export const Tool: Story = {
  args: {
    icon: 'tool',
    label: 'Herramientas',
    isSelected: false
  }
}; 