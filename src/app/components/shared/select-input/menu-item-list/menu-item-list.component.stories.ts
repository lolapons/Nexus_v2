import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { MenuItemListComponent } from './menu-item-list.component';
import { MenuItemListModule } from './menu-item-list.module';

const meta: Meta<MenuItemListComponent> = {
  title: 'Components/MenuItemList',
  component: MenuItemListComponent,
  decorators: [
    moduleMetadata({
      imports: [MenuItemListModule],
    }),
  ],
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: 'select',
      options: ['default', 'hover', 'selected', 'disabled'],
      description: 'Estado visual del elemento de menú',
    },
    text: {
      control: 'text',
      description: 'Texto mostrado en el elemento',
    },
    disabled: {
      control: 'boolean',
      description: 'Estado deshabilitado (alternativa al state)',
    },
    selected: {
      control: 'boolean',
      description: 'Estado seleccionado (alternativa al state)',
    },
    showIcon: {
      control: 'boolean',
      description: 'Mostrar o ocultar el ícono',
    },
    itemClick: {
      action: 'clicked',
      description: 'Evento al hacer clic en el elemento',
    },
    itemHover: {
      action: 'hovered',
      description: 'Evento al pasar el mouse sobre el elemento',
    },
  },
};

export default meta;
type Story = StoryObj<MenuItemListComponent>;

export const Default: Story = {
  args: {
    text: 'Option text here',
    state: 'default',
    disabled: false,
    selected: false,
    showIcon: true,
  },
};

export const Hover: Story = {
  args: {
    text: 'Option text here',
    state: 'hover',
    disabled: false,
    selected: false,
    showIcon: true,
  },
};

export const Selected: Story = {
  args: {
    text: 'Option text here',
    state: 'selected',
    disabled: false,
    selected: false,
    showIcon: true,
  },
};

export const Disabled: Story = {
  args: {
    text: 'Option text here',
    state: 'disabled',
    disabled: false,
    selected: false,
    showIcon: true,
  },
};

// Alternativas usando los inputs booleanos
export const SelectedAlternative: Story = {
  name: 'Selected (usando input boolean)',
  args: {
    text: 'Option text here',
    state: 'default',
    disabled: false,
    selected: true,
    showIcon: true,
  },
};

export const DisabledAlternative: Story = {
  name: 'Disabled (usando input boolean)',
  args: {
    text: 'Option text here',
    state: 'default',
    disabled: true,
    selected: false,
    showIcon: true,
  },
};

export const WithoutIcon: Story = {
  args: {
    text: 'Option text here',
    state: 'default',
    disabled: false,
    selected: false,
    showIcon: false,
  },
};

export const CustomText: Story = {
  args: {
    text: 'Texto personalizado para la opción',
    state: 'default',
    disabled: false,
    selected: false,
    showIcon: true,
  },
};

export const LongText: Story = {
  args: {
    text: 'Este es un texto muy largo para probar cómo se comporta el componente con contenido extenso',
    state: 'default',
    disabled: false,
    selected: false,
    showIcon: true,
  },
};
