import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { ProgressBarComponent } from './progress-bar.component';
import { ProgressBarModule } from './progress-bar.module';

const meta: Meta<ProgressBarComponent> = {
  title: 'Components/ProgressBar',
  component: ProgressBarComponent,
  decorators: [
    moduleMetadata({
      imports: [ProgressBarModule]
    }),
  ],
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'fill'],
      description: 'Variante de la barra de progreso'
    },
    height: {
      control: { type: 'range', min: 4, max: 20, step: 1 },
      description: 'Altura de la barra en píxeles'
    }
  }
};

export default meta;
type Story = StoryObj<ProgressBarComponent>;

export const Default: Story = {
  args: {
    variant: 'default',
    height: 8
  }
};

export const Fill: Story = {
  args: {
    variant: 'fill',
    height: 8
  }
}; 