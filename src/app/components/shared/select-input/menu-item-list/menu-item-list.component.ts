import { Component, Input, Output, EventEmitter } from '@angular/core';

export type MenuItemState = 'default' | 'hover' | 'selected' | 'disabled';

@Component({
  selector: 'app-menu-item-list',
  templateUrl: './menu-item-list.component.html',
  styleUrls: ['./menu-item-list.component.css'],
  standalone: false
})
export class MenuItemListComponent {
  @Input() text: string = 'Option text here';
  @Input() state: MenuItemState = 'default';
  @Input() disabled: boolean = false;
  @Input() selected: boolean = false;
  @Input() showIcon: boolean = true;

  @Output() itemClick = new EventEmitter<void>();
  @Output() itemHover = new EventEmitter<void>();

  get currentState(): MenuItemState {
    if (this.disabled) return 'disabled';
    if (this.selected) return 'selected';
    return this.state;
  }

  get isDisabled(): boolean {
    return this.disabled || this.state === 'disabled';
  }

  get isSelected(): boolean {
    return this.selected || this.state === 'selected';
  }

  onItemClick(): void {
    if (!this.isDisabled) {
      this.itemClick.emit();
    }
  }

  onMouseEnter(): void {
    if (!this.isDisabled && !this.isSelected && this.state === 'default') {
      this.state = 'hover';
      this.itemHover.emit();
    }
  }

  onMouseLeave(): void {
    if (!this.isDisabled && !this.isSelected && this.state === 'hover') {
      this.state = 'default';
    }
  }
}
