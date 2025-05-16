import { Component, Input, Output, EventEmitter } from '@angular/core';

interface Option {
  label: string;
  value: any;
}

@Component({
  selector: 'app-option-selector',
  templateUrl: './option-selector.component.html',
  styleUrls: ['./option-selector.component.css'],
  standalone: false
})
export class OptionSelectorComponent {
  @Input() options: Option[] = [
    { label: 'Modelo', value: 'modelo1' },
    { label: 'Modelo', value: 'modelo2' },
    { label: 'Modelo', value: 'modelo3' }
  ];
  
  @Input() selectedValue: any = null;
  
  @Output() selectionChange = new EventEmitter<any>();
  
  onSelectOption(value: any): void {
    this.selectedValue = value;
    this.selectionChange.emit(value);
  }
} 