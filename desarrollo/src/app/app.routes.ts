import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { SesionComponent } from './sesion/sesion.component';

export const routes: Routes = [
  {path:'', component:InicioComponent},
  {path:'servicios', component:ServiciosComponent},
  {path:'sesion', component: SesionComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
