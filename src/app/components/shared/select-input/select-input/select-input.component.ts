import { Component, Input, Output, EventEmitter, HostListener, ElementRef, ViewChild } from '@angular/core';
import { MenuItemState } from '../menu-item-list/menu-item-list.component';

export type SelectInputState = 'default' | 'selected' | 'expanded';

export interface SelectOption {
  value: string | number;
  label: string;
  disabled?: boolean;
}

export interface SelectedItem {
  value: string | number;
  label: string;
}

export interface DisplayOption extends SelectOption {
  displayText: string;
  isAlreadySelected: boolean;
}

@Component({
  selector: 'app-select-input',
  templateUrl: './select-input.component.html',
  styleUrls: ['./select-input.component.css'],
  standalone: false
})
export class SelectInputComponent {
  @Input() label: string = 'Label Text';
  @Input() selectedItemsLabel: string = 'Tiendas seleccionadas';
  @Input() addButtonText: string = 'Añadir';
  @Input() placeholder: string = 'Insert text here';
  @Input() options: SelectOption[] = [];
  @Input() selectedItems: SelectedItem[] = [];
  @Input() disabled: boolean = false;
  @Input() required: boolean = false;
  @Input() showIcon: boolean = true;
  @Input() width: string = '320px';
  @Input() maxSelections: number = 0; // 0 = ilimitado

  @Output() selectedItemsChange = new EventEmitter<SelectedItem[]>();
  @Output() itemAdded = new EventEmitter<SelectedItem>();
  @Output() itemRemoved = new EventEmitter<SelectedItem>();
  @Output() dropdownToggle = new EventEmitter<boolean>();

  @ViewChild('dropdown') dropdown!: ElementRef;

  public isExpanded: boolean = false;
  public focusedOptionIndex: number = -1;
  public currentSelection: string | number | null = null;

  get currentState(): SelectInputState {
    if (this.isExpanded) return 'expanded';
    if (this.selectedItems.length > 0) return 'selected';
    return 'default';
  }

  get availableOptions(): SelectOption[] {
    const selectedValues = this.selectedItems.map(item => item.value);
    return this.options.filter(option => !selectedValues.includes(option.value));
  }

  get allOptionsForDisplay(): DisplayOption[] {
    const selectedValues = this.selectedItems.map(item => item.value);

    return this.options.map(option => {
      const isAlreadySelected = selectedValues.includes(option.value);
      return {
        ...option,
        displayText: isAlreadySelected ? `${option.label} (ya seleccionada)` : option.label,
        isAlreadySelected,
        disabled: option.disabled || isAlreadySelected
      };
    });
  }

  get selectedOption(): SelectOption | null {
    return this.availableOptions.find(option => option.value === this.currentSelection) || null;
  }

  get displayText(): string {
    return this.selectedOption?.label || this.placeholder;
  }

  get isPlaceholder(): boolean {
    return this.selectedOption === null;
  }

  get canAddMore(): boolean {
    return this.maxSelections === 0 || this.selectedItems.length < this.maxSelections;
  }

  get canAddCurrent(): boolean {
    return this.currentSelection !== null &&
           this.canAddMore &&
           !this.disabled;
  }

  trackByValue(index: number, item: SelectedItem): string | number {
    return item.value;
  }

  getOptionState(option: DisplayOption, index: number): MenuItemState {
    if (option.isAlreadySelected) return 'disabled';
    if (this.focusedOptionIndex === index) return 'hover';
    if (option.value === this.currentSelection) return 'selected';
    return 'default';
  }

  toggleDropdown(): void {
    if (this.disabled || !this.canAddMore) return;

    this.isExpanded = !this.isExpanded;
    this.dropdownToggle.emit(this.isExpanded);

    if (this.isExpanded) {
      this.focusedOptionIndex = this.availableOptions.findIndex(option => option.value === this.currentSelection);
      if (this.focusedOptionIndex === -1 && this.availableOptions.length > 0) {
        this.focusedOptionIndex = 0;
      }
    }
  }

  selectOption(option: SelectOption): void {
    console.log('selectOption called with:', option.label);

    // No permitir seleccionar si está deshabilitado
    if (this.disabled) {
      console.log('Component is disabled');
      return;
    }

    console.log('Option accepted, setting currentSelection to:', option.value);
    this.currentSelection = option.value;
    this.isExpanded = false;
    this.focusedOptionIndex = -1;
    this.dropdownToggle.emit(false);
  }

  doNothing(): void {
    // Método vacío para opciones ya seleccionadas que no deben hacer nada
  }

  addCurrentSelection(): void {
    if (!this.canAddCurrent) return;

    const option = this.selectedOption;
    if (!option) return;

    const newItem: SelectedItem = {
      value: option.value,
      label: option.label
    };

    const updatedItems = [...this.selectedItems, newItem];
    this.selectedItems = updatedItems;
    this.currentSelection = null;

    this.selectedItemsChange.emit(updatedItems);
    this.itemAdded.emit(newItem);
  }

  removeSelectedItem(item: SelectedItem): void {
    if (this.disabled) return;

    const updatedItems = this.selectedItems.filter(selectedItem => selectedItem.value !== item.value);
    this.selectedItems = updatedItems;

    this.selectedItemsChange.emit(updatedItems);
    this.itemRemoved.emit(item);
  }

  onKeydown(event: KeyboardEvent): void {
    if (this.disabled) return;

    switch (event.key) {
      case 'Enter':
      case ' ':
        event.preventDefault();
        if (!this.isExpanded) {
          this.toggleDropdown();
        } else if (this.focusedOptionIndex >= 0) {
          this.selectOption(this.availableOptions[this.focusedOptionIndex]);
        }
        break;

      case 'Escape':
        event.preventDefault();
        this.isExpanded = false;
        this.dropdownToggle.emit(false);
        break;

      case 'ArrowDown':
        event.preventDefault();
        if (!this.isExpanded) {
          this.toggleDropdown();
        } else {
          this.focusedOptionIndex = Math.min(this.focusedOptionIndex + 1, this.availableOptions.length - 1);
        }
        break;

      case 'ArrowUp':
        event.preventDefault();
        if (this.isExpanded) {
          this.focusedOptionIndex = Math.max(this.focusedOptionIndex - 1, 0);
        }
        break;
    }
  }

  onOptionHover(index: number): void {
    this.focusedOptionIndex = index;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    if (!this.dropdown?.nativeElement.contains(event.target)) {
      this.isExpanded = false;
      this.dropdownToggle.emit(false);
    }
  }
}
