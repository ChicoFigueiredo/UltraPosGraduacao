import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormInscricaoComponent } from './component/form-inscricao/form-inscricao.component';
import { FinalizaInscricaoComponent } from './finaliza-inscricao/finaliza-inscricao.component';

const routes: Routes = [
  { path: '', component: FormInscricaoComponent},
  { path: 'finish', component: FinalizaInscricaoComponent},
  { path: ':id', component: FormInscricaoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
