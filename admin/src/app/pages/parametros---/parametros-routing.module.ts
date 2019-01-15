import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../../modulos/auth-guard.service';

import { FileUploadDragDropData64Component } from '../../../modulos/file-upload/file-upload.component';
import { ModalComponentEx } from './modal/modal-ex.component';

import { MedicamentosComponent } from './medicamentos/medicamentos.component';
import { MedicosComponent } from './medicos/medicos.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { UsersComponent } from './users/users.component';
import { ParametrosComponent } from './parametros.component';
import { EspecialidadesComponent } from './especialidades/especialidades.component';
import { FarmaciasComponent } from './farmacias/farmacias.component';

const routes: Routes = [{
  path: '',
  component: ParametrosComponent,
  children: [
    {
      path: 'medicos',
      // canActivate: [AuthGuard],
      component: MedicosComponent,
    },
    {
      path: 'pacientes',
      // canActivate: [AuthGuard],
      component: PacientesComponent,
    },
    {
      path: 'farmacias',
      // canActivate: [AuthGuard],
      component: FarmaciasComponent,
    },
    {
      path: 'usuarios',
      // canActivate: [AuthGuard],
      component: UsersComponent,
    },
    {
      path: 'medicamentos',
      // canActivate: [AuthGuard],
      component: MedicamentosComponent,
    },
    {
      path: 'especialidades',
      // canActivate: [AuthGuard],
      component: EspecialidadesComponent,
    }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class ParametrosRoutingModule { }


export const routedComponents = [
  ParametrosComponent,
  UsersComponent,
  MedicosComponent,
  PacientesComponent,
  MedicamentosComponent,
  EspecialidadesComponent,
  FarmaciasComponent,
  
  ModalComponentEx,
  FileUploadDragDropData64Component,
];
