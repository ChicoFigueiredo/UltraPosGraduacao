import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FormInscricaoComponent } from './component/form-inscricao/form-inscricao.component';
import { ApiUltraService } from './services/api-ultra.service';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    FormInscricaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    ApiUltraService,
    HttpClientModule,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
