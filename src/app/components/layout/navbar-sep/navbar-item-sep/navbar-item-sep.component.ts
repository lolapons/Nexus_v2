import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-navbar-item-sep',
  standalone: false,
  templateUrl: './navbar-item-sep.component.html',
  styleUrls: ['./navbar-item-sep.component.css']
})
export class NavbarItemSepComponent {
  @Input() icon: string = '';
  @Input() label: string = '';
  @Input() isSelected: boolean = false;
  @Output() itemClick = new EventEmitter<void>();
  
  isHovering: boolean = false;

  handleClick(): void {
    this.itemClick.emit();
    this.isHovering = false;
  }
  
  mouseEnter(): void {
    if (!this.isSelected) {
      this.isHovering = true;
    }
  }
  
  mouseLeave(): void {
    this.isHovering = false;
  }
} 