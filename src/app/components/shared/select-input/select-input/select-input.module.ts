import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectInputComponent } from './select-input.component';
import { MenuItemListModule } from '../menu-item-list/menu-item-list.module';

@NgModule({
  declarations: [
    SelectInputComponent
  ],
  imports: [
    CommonModule,
    MenuItemListModule
  ],
  exports: [
    SelectInputComponent
  ]
})
export class SelectInputModule { }
