import type { Meta, StoryObj } from '@storybook/angular';
import { NavbarComponent } from './navbar.component';
import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { NavbarItemModule } from '../navbar-item/navbar-item.module';

const meta: Meta<NavbarComponent> = {
  title: 'Components/Navbar/Navbar',
  component: NavbarComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, NavbarItemModule],
    }),
  ],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<NavbarComponent>;

export const Default: Story = {
  args: {},
}; 