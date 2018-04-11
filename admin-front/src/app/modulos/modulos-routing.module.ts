import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuariosListaComponent } from './usuarios/usuarios-lista/usuarios-lista.component';

const routes: Routes = [
  {
    path: 'usuario',
      component: UsuariosListaComponent,
      children: [
        {
          path: 'lista',
          component: UsuariosListaComponent,
        }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule,
  ]
})
export class ModulosRoutingModule { }
