import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarSepComponent } from './navbar-sep/navbar-sep.component';
import { NavbarItemSepComponent } from './navbar-item-sep/navbar-item-sep.component';

@NgModule({
  declarations: [
    NavbarSepComponent,
    NavbarItemSepComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarSepComponent,
    NavbarItemSepComponent
  ]
})
export class NavbarSepModule { } 