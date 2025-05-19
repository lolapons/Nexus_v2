import { Meta, StoryObj } from '@storybook/angular';
import { ModelosComponent } from './modelos.component';

const meta: Meta<ModelosComponent> = {
  title: 'Pages/Modelos',
  component: ModelosComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<ModelosComponent>;

export const Default: Story = {
  args: {},
}; 