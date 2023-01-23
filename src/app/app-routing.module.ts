import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './components/formulario/formulario.component';
import { DatosUComponent } from './components/datos-u/datos-u.component';


const routes: Routes = [
  {
    path:'',component:FormularioComponent
  },
  {
    path:'2',component:DatosUComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
