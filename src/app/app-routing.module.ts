import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModelosComponent } from './pages/modelos/modelos.component';
import { AgentesComponent } from './pages/agentes/agentes.component';
import { ComportamientoComponent } from './pages/comportamiento/comportamiento.component';
import { HerramientasComponent } from './pages/herramientas/herramientas.component';

const routes: Routes = [
  { path: '', redirectTo: '/modelos', pathMatch: 'full' },
  { path: 'modelos', component: ModelosComponent },
  { path: 'agentes', component: AgentesComponent },
  { path: 'comportamiento', component: ComportamientoComponent },
  { path: 'herramientas', component: HerramientasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}