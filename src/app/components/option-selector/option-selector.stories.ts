import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';
import { OptionSelectorComponent } from './option-selector.component';
import { OptionSelectorModule } from './option-selector.module';

const meta: Meta<OptionSelectorComponent> = {
  title: 'Components/Option Selector',
  component: OptionSelectorComponent,
  decorators: [
    moduleMetadata({
      imports: [OptionSelectorModule]
    })
  ],
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    options: { control: 'object' },
    selectedValue: { control: 'text' },
    selectionChange: { action: 'selected' }
  }
};

export default meta;
type Story = StoryObj<OptionSelectorComponent>;

export const Default: Story = {
  args: {
    options: [
      { label: 'Modelo', value: 'modelo1' },
      { label: 'Modelo', value: 'modelo2' },
      { label: 'Modelo', value: 'modelo3' }
    ],
    selectedValue: null
  }
};

export const WithSelection: Story = {
  args: {
    options: [
      { label: 'Modelo', value: 'modelo1' },
      { label: 'Modelo', value: 'modelo2' },
      { label: 'Modelo', value: 'modelo3' }
    ],
    selectedValue: 'modelo2'
  }
}; 