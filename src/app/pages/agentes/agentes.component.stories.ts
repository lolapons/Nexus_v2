import { Meta, StoryObj } from '@storybook/angular';
import { AgentesComponent } from './agentes.component';

const meta: Meta<AgentesComponent> = {
  title: 'Pages/Agentes',
  component: AgentesComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<AgentesComponent>;

export const Default: Story = {
  args: {},
}; 