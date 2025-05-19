import { Meta, StoryObj } from '@storybook/angular';
import { HerramientasComponent } from './herramientas.component';

const meta: Meta<HerramientasComponent> = {
  title: 'Pages/Herramientas',
  component: HerramientasComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<HerramientasComponent>;

export const Default: Story = {
  args: {},
}; 