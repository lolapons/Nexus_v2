import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: false,
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() text: string = 'Button';
  @Input() variant: 'primary' | 'secondary' | 'tertiary' = 'primary';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() icon: string = '';
  @Input() iconPosition: 'left' | 'right' = 'left';
  @Input() disabled: boolean = false;
  @Input() fullWidth: boolean = false;
  @Input() iconOnly: boolean = false;
  @Output() clicked = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(event: Event): void {
    if (!this.disabled) {
      event.preventDefault();
      this.clicked.emit();
    }
  }

  get buttonClasses(): string {
    return `button ${this.variant} ${this.size} ${this.fullWidth ? 'full-width' : ''} ${this.disabled ? 'disabled' : ''} ${this.iconOnly ? 'icon-only' : ''}`;
  }
} 