import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { AddModelCardComponent } from './add-model-card.component';
import { AddModelCardModule } from './add-model-card.module';

interface AddModelCardProps {
  text: string;
  disabled: boolean;
}

const meta: Meta<AddModelCardComponent & AddModelCardProps> = {
  title: 'Components/AddModelCard',
  component: AddModelCardComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [AddModelCardModule]
    })
  ],
  argTypes: {
    text: {
      control: 'text',
      description: 'Texto a mostrar en la tarjeta'
    },
    disabled: {
      control: 'boolean',
      description: 'Estado deshabilitado de la tarjeta'
    },
    addModel: { 
      action: 'addModel clicked',
      description: 'Evento emitido al hacer clic en la tarjeta'
    }
  }
};

export default meta;
type Story = StoryObj<AddModelCardComponent & AddModelCardProps>;

export const Default: Story = {
  args: {
    text: 'Añadir modelo',
    disabled: false
  }
};

export const CustomText: Story = {
  args: {
    text: 'Crear nuevo modelo',
    disabled: false
  }
};

export const Disabled: Story = {
  args: {
    text: 'Añadir modelo',
    disabled: true
  }
}; 