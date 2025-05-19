import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ModelosModule } from './pages/modelos/modelos.module';
import { AgentesModule } from './pages/agentes/agentes.module';
import { ComportamientoModule } from './pages/comportamiento/comportamiento.module';
import { HerramientasModule } from './pages/herramientas/herramientas.module';
import { NavbarSepModule } from './components/navbar-sep/navbar-sep/navbar-sep.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModelosModule,
    AgentesModule,
    ComportamientoModule,
    HerramientasModule,
    NavbarSepModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {} 