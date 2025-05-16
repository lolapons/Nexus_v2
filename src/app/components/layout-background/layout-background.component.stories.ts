import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { LayoutBackgroundComponent } from './layout-background.component';
import { LayoutBackgroundModule } from './layout-background.module';

const meta: Meta<LayoutBackgroundComponent> = {
  title: 'Components/LayoutBackground',
  component: LayoutBackgroundComponent,
  decorators: [
    moduleMetadata({
      imports: [LayoutBackgroundModule]
    }),
  ],
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<LayoutBackgroundComponent>;

export const Default: Story = {
  render: () => ({
    template: `
      <app-layout-background>
        <div style="padding: 40px; background-color: white; border-radius: 12px; max-width: 600px; margin: 80px auto;">
          <h2 style="margin-top: 0;">Contenido de ejemplo</h2>
          <p>Este es un ejemplo de contenido dentro del componente layout-background.</p>
        </div>
      </app-layout-background>
    `
  })
}; 