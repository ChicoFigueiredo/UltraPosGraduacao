import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormInscricaoComponent } from './component/form-inscricao/form-inscricao.component';

const routes: Routes = [
  { path: '', component: FormInscricaoComponent},
  { path: ':id', component: FormInscricaoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
