import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { OptionSelectorModule } from './components/wizard-crear-modelo/option-selector/option-selector.module';

import { AppComponent } from './app.component';
import { NavbarModule } from './components/navbar-v2/navbar/navbar.module';
import { NavbarSepModule } from './components/navbar-sep/navbar-sep/navbar-sep.module';
import { ButtonModule } from './components/button/button.module';
import { WizardCrearModeloModule } from './components/wizard-crear-modelo/wizard-crear-modelo.module';
import { ProgressBarModule } from './components/progress-bar/progress-bar.module';
import { LayoutBackgroundModule } from './components/layout-background/layout-background.module';
import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(routes),
    NavbarModule,
    NavbarSepModule,
    OptionSelectorModule,
    ButtonModule,
    WizardCrearModeloModule,
    ProgressBarModule,
    LayoutBackgroundModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } 