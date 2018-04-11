import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardModule } from '../pages/dashboard/dashboard.module';
import { PagesRoutingModule } from '../pages/pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';


import { ModulosRoutingModule } from './modulos-routing.module';
import { UsuariosListaComponent } from './usuarios/usuarios-lista/usuarios-lista.component';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    DashboardModule,
    CommonModule,
    ModulosRoutingModule,
  ],
  declarations: [
    UsuariosListaComponent,
  ],
  exports: [
    UsuariosListaComponent,
  ]
})
export class ModulosModule { }
