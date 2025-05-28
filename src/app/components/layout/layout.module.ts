import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarSepModule } from './navbar-sep/navbar-sep.module';
import { LayoutBackgroundModule } from './layout-background/layout-background.module';

@NgModule({
  imports: [
    CommonModule,
    NavbarSepModule,
    LayoutBackgroundModule
  ],
  exports: [
    NavbarSepModule,
    LayoutBackgroundModule
  ]
})
export class LayoutModule { } 