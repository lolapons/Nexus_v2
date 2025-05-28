import { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { ProgressIndicatorComponent } from './progress-indicator.component';
import { CommonModule } from '@angular/common';

const meta: Meta<ProgressIndicatorComponent> = {
  title: 'Components/ProgressIndicator',
  component: ProgressIndicatorComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [CommonModule],
    }),
  ],
  argTypes: {
    currentStep: {
      control: { type: 'number', min: 1, max: 5 },
      description: 'Paso actual',
    },
    totalSteps: {
      control: { type: 'number', min: 2, max: 10 },
      description: 'Total de pasos',
    },
  },
};

export default meta;
type Story = StoryObj<ProgressIndicatorComponent>;

export const Default: Story = {
  args: {
    currentStep: 3,
    totalSteps: 5,
  },
};

export const Paso1: Story = {
  args: {
    currentStep: 1,
    totalSteps: 5,
  },
};

export const PasoFinal: Story = {
  args: {
    currentStep: 5,
    totalSteps: 5,
  },
}; 