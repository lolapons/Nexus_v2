import { Meta, StoryObj } from '@storybook/angular';
import { ComportamientoComponent } from './comportamiento.component';

const meta: Meta<ComportamientoComponent> = {
  title: 'Pages/Comportamiento',
  component: ComportamientoComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<ComportamientoComponent>;

export const Default: Story = {
  args: {},
}; 