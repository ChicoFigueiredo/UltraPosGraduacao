import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParametrosRoutingModule } from './parametros-routing.module';
import { CuponsComponent } from './cupons/cupons.component';
import { ThemeModule } from './../../@theme/theme.module';

@NgModule({
  imports: [
  CommonModule,
    ParametrosRoutingModule,
    ThemeModule
  ],
  declarations: [CuponsComponent]
})
export class ParametrosModule { }
