import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CuponsComponent } from './cupons/cupons.component';
import { AuthGuard } from '../../@core/auth-guard.service';

const routes: Routes = [{
  path: '',
  component: CuponsComponent,
  children: [{
    path: 'cupons',
    canActivate: [AuthGuard],
    component: CuponsComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class ParametrosRoutingModule { }
