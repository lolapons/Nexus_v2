import type { Meta, StoryObj } from '@storybook/angular';
import { NavbarItemComponent } from './navbar-item.component';
import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';

const meta: Meta<NavbarItemComponent> = {
  title: 'Components/Navbar/NavbarItem',
  component: NavbarItemComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule],
    }),
  ],
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: 'text',
      description: 'Nombre del icono a mostrar',
    },
    label: {
      control: 'text',
      description: 'Texto a mostrar cuando está seleccionado',
    },
    isSelected: {
      control: 'boolean',
      description: 'Si el elemento está seleccionado',
    },
    itemClick: {
      action: 'clicked',
      description: 'Evento emitido al hacer clic',
    },
  },
};

export default meta;
type Story = StoryObj<NavbarItemComponent>;

export const Default: Story = {
  args: {
    icon: 'brain',
    label: 'Modelos',
    isSelected: false,
  },
};

export const Selected: Story = {
  args: {
    icon: 'brain',
    label: 'Modelos',
    isSelected: true,
  },
}; 