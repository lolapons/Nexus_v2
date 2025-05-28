import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ModelosModule } from './pages/modelos/modelos.module';
import { AgentesModule } from './pages/agentes/agentes.module';
import { ComportamientoModule } from './pages/comportamiento/comportamiento.module';
import { HerramientasModule } from './pages/herramientas/herramientas.module';
import { LayoutModule } from './components/layout/layout.module';
import { WizardCrearModeloModule } from "./components/wizards/wizard-crear-modelo/wizard-crear-modelo.module";
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    ModelosModule,
    AgentesModule,
    ComportamientoModule,
    HerramientasModule,
    LayoutModule,
    WizardCrearModeloModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } 