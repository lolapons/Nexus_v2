import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { SelectInputComponent, SelectOption, SelectedItem } from './select-input.component';
import { SelectInputModule } from './select-input.module';

// Opciones de ejemplo para las stories
const sampleOptions: SelectOption[] = [
  { value: 'barcelona-diagonal', label: 'Barcelona Diagonal' },
  { value: 'madrid-centro', label: 'Madrid Centro' },
  { value: 'sevilla-plaza', label: 'Sevilla Plaza' },
  { value: 'valencia-puerto', label: 'Valencia Puerto' },
  { value: 'bilbao-centro', label: 'Bilbao Centro' },
  { value: 'malaga-costa', label: 'Málaga Costa', disabled: true },
  { value: 'zaragoza-norte', label: 'Zaragoza Norte' },
];

// Items seleccionados de ejemplo
const sampleSelectedItems: SelectedItem[] = [
  { value: 'barcelona-diagonal', label: 'Barcelona Diagonal' },
  { value: 'madrid-centro', label: 'Madrid Centro' }
];

const meta: Meta<SelectInputComponent> = {
  title: 'Components/SelectInput (Multi-Selection)',
  component: SelectInputComponent,
  decorators: [
    moduleMetadata({
      imports: [SelectInputModule],
    }),
  ],
  tags: ['autodocs'],
  argTypes: {
    selectedItemsLabel: {
      control: 'text',
      description: 'Título de la sección de elementos seleccionados',
    },
    addButtonText: {
      control: 'text',
      description: 'Texto del botón de añadir',
    },
    placeholder: {
      control: 'text',
      description: 'Texto placeholder cuando no hay selección',
    },
    options: {
      control: 'object',
      description: 'Array de opciones disponibles',
    },
    selectedItems: {
      control: 'object',
      description: 'Array de elementos ya seleccionados',
    },
    disabled: {
      control: 'boolean',
      description: 'Estado deshabilitado del componente',
    },
    required: {
      control: 'boolean',
      description: 'Campo requerido',
    },
    showIcon: {
      control: 'boolean',
      description: 'Mostrar o ocultar el ícono principal',
    },
    width: {
      control: 'text',
      description: 'Ancho del componente',
    },
    maxSelections: {
      control: 'number',
      description: 'Número máximo de selecciones permitidas (0 = ilimitado)',
    },
    selectedItemsChange: {
      action: 'selectedItemsChanged',
      description: 'Evento cuando cambia la lista de elementos seleccionados',
    },
    itemAdded: {
      action: 'itemAdded',
      description: 'Evento cuando se añade un elemento',
    },
    itemRemoved: {
      action: 'itemRemoved',
      description: 'Evento cuando se remueve un elemento',
    },
    dropdownToggle: {
      action: 'dropdownToggled',
      description: 'Evento cuando se abre/cierra el dropdown',
    },
  },
};

export default meta;
type Story = StoryObj<SelectInputComponent>;

export const Empty: Story = {
  args: {
    selectedItemsLabel: 'Tiendas seleccionadas',
    addButtonText: 'Añadir',
    placeholder: 'Selecciona una tienda',
    options: sampleOptions,
    selectedItems: [],
    disabled: false,
    required: false,
    showIcon: true,
    width: '320px',
    maxSelections: 0,
  },
};

export const WithSelectedItems: Story = {
  args: {
    selectedItemsLabel: 'Tiendas seleccionadas',
    addButtonText: 'Añadir',
    options: sampleOptions,
    selectedItems: sampleSelectedItems,
    disabled: false,
    required: false,
    showIcon: true,
    width: '320px',
    maxSelections: 0,
  },
};

export const MaxSelections: Story = {
  args: {
    selectedItemsLabel: 'Tiendas seleccionadas',
    addButtonText: 'Añadir',
    placeholder: 'Selecciona una tienda',
    options: sampleOptions,
    selectedItems: sampleSelectedItems,
    disabled: false,
    required: false,
    showIcon: true,
    width: '320px',
    maxSelections: 3,
  },
};

export const NearMaxLimit: Story = {
  args: {
    selectedItemsLabel: 'Tiendas seleccionadas',
    addButtonText: 'Añadir',
    placeholder: 'Selecciona una tienda',
    options: sampleOptions,
    selectedItems: [
      { value: 'barcelona-diagonal', label: 'Barcelona Diagonal' },
      { value: 'madrid-centro', label: 'Madrid Centro' },
      { value: 'sevilla-plaza', label: 'Sevilla Plaza' },
      { value: 'valencia-puerto', label: 'Valencia Puerto' },
    ],
    disabled: false,
    required: false,
    showIcon: true,
    width: '320px',
    maxSelections: 5,
  },
};

export const Disabled: Story = {
  args: {
    selectedItemsLabel: 'Tiendas seleccionadas',
    addButtonText: 'Añadir',
    placeholder: 'Selecciona una tienda',
    options: sampleOptions,
    selectedItems: sampleSelectedItems,
    disabled: true,
    required: false,
    showIcon: true,
    width: '320px',
    maxSelections: 0,
  },
};

export const WithoutIcon: Story = {
  args: {
    selectedItemsLabel: 'Tiendas seleccionadas',
    addButtonText: 'Añadir',
    placeholder: 'Selecciona una tienda',
    options: sampleOptions,
    selectedItems: sampleSelectedItems,
    disabled: false,
    required: false,
    showIcon: false,
    width: '320px',
    maxSelections: 0,
  },
};

export const FullWidth: Story = {
  args: {
    selectedItemsLabel: 'Tiendas seleccionadas',
    addButtonText: 'Añadir',
    placeholder: 'Selecciona una tienda',
    options: sampleOptions,
    selectedItems: sampleSelectedItems,
    disabled: false,
    required: false,
    showIcon: true,
    width: '100%',
    maxSelections: 0,
  },
};

export const CustomLabels: Story = {
  args: {
    selectedItemsLabel: 'Equipos seleccionados',
    addButtonText: 'Agregar equipo',
    placeholder: 'Elige un equipo',
    options: [
      { value: 'frontend', label: 'Equipo Frontend' },
      { value: 'backend', label: 'Equipo Backend' },
      { value: 'mobile', label: 'Equipo Mobile' },
      { value: 'design', label: 'Equipo Design' },
      { value: 'qa', label: 'Equipo QA' },
      { value: 'devops', label: 'Equipo DevOps' },
    ],
    selectedItems: [
      { value: 'frontend', label: 'Equipo Frontend' },
      { value: 'design', label: 'Equipo Design' },
    ],
    disabled: false,
    required: true,
    showIcon: true,
    width: '400px',
    maxSelections: 4,
  },
};

export const LongList: Story = {
  args: {
    selectedItemsLabel: 'Países seleccionados',
    addButtonText: 'Añadir',
    placeholder: 'Selecciona un país',
    options: [
      { value: 'ar', label: 'Argentina' },
      { value: 'br', label: 'Brasil' },
      { value: 'cl', label: 'Chile' },
      { value: 'co', label: 'Colombia' },
      { value: 'cr', label: 'Costa Rica' },
      { value: 'ec', label: 'Ecuador' },
      { value: 'mx', label: 'México' },
      { value: 'pa', label: 'Panamá' },
      { value: 'pe', label: 'Perú' },
      { value: 'uy', label: 'Uruguay' },
      { value: 've', label: 'Venezuela' },
      { value: 'es', label: 'España' },
    ],
    selectedItems: [
      { value: 'es', label: 'España' },
      { value: 'mx', label: 'México' },
    ],
    disabled: false,
    required: false,
    showIcon: true,
    width: '320px',
    maxSelections: 0,
  },
};
