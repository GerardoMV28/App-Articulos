import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { CargarRegistroComponent } from './componentes/cargar-registro/cargar-registro.component';
import { RojoComponent } from './componentes/rojo/rojo.component';

const routes: Routes = [
  {path: 'login',component:LoginComponent},
  {path: 'registro',component:RegistroComponent},
  {path: 'cargar-registro',component:CargarRegistroComponent},
  {path: 'rojo',component:RojoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
