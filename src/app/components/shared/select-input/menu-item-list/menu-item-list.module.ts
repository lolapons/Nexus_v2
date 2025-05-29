import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItemListComponent } from './menu-item-list.component';

@NgModule({
  declarations: [
    MenuItemListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MenuItemListComponent
  ]
})
export class MenuItemListModule { }
