import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { NavbarItemModule } from '../navbar-item/navbar-item.module';

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    NavbarItemModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class NavbarModule { } 