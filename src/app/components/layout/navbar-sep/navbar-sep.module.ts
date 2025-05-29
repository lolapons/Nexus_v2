import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarSepComponent } from './navbar-sep/navbar-sep.component';
import { NavbarItemSepModule } from './navbar-item-sep/navbar-item-sep.module';

@NgModule({
  declarations: [
    NavbarSepComponent
  ],
  imports: [
    CommonModule,
    NavbarItemSepModule
  ],
  exports: [
    NavbarSepComponent
  ]
})
export class NavbarSepModule { } 