import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { ModulosRoutingModule } from './modulos-routing.module';
import { UsuariosListaComponent } from './usuarios/usuarios-lista/usuarios-lista.component';
import { ThemeModule } from '../@theme/theme.module';
import { PagesModule } from './../pages/pages.module';

@NgModule({
  imports: [
  ThemeModule,
    CommonModule,
    ModulosRoutingModule,
    FormsModule,
    PagesModule,
  ],
  declarations: [
    UsuariosListaComponent,
  ],
  exports: [
    UsuariosListaComponent,
  ]
})
export class ModulosModule { }
