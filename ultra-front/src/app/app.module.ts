import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FormInscricaoComponent } from './component/form-inscricao/form-inscricao.component';
import { ApiUltraService } from './services/api-ultra.service';


@NgModule({
  declarations: [
    AppComponent,
    FormInscricaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ApiUltraService
  ],
  providers: [
    ApiUltraService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
