import { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { NavbarSepComponent } from './navbar-sep.component';
import { CommonModule } from '@angular/common';
import { NavbarItemSepModule } from '../navbar-item-sep/navbar-item-sep.module';

const meta: Meta<NavbarSepComponent> = {
  title: 'Components/NavbarSep',
  component: NavbarSepComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [CommonModule, NavbarItemSepModule],
    }),
  ],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    selectedItem: {
      control: 'select',
      options: ['robot', 'brain', 'behavior', 'tool'],
      description: 'El elemento seleccionado inicialmente'
    }
  }
};

export default meta;
type Story = StoryObj<NavbarSepComponent>;

export const Default: Story = {
  args: {
    selectedItem: 'brain'
  },
  parameters: {
    docs: {
      description: {
        story: 'Barra de navegación lateral con el elemento "Modelos" seleccionado por defecto.'
      }
    }
  }
};

export const AgentesSeleccionado: Story = {
  args: {
    selectedItem: 'robot'
  }
};

export const ComportamientoSeleccionado: Story = {
  args: {
    selectedItem: 'behavior'
  }
};

export const HerramientasSeleccionado: Story = {
  args: {
    selectedItem: 'tool'
  }
}; 