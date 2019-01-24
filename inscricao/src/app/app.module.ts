import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import localePTBR from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';

import {NgxMaskModule} from 'ngx-mask';

import { AppComponent } from './app.component';
import { FormInscricaoComponent } from './component/form-inscricao/form-inscricao.component';
import { ApiUltraService } from './services/api-ultra.service';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { WindowRef } from './WindowRef';

registerLocaleData(localePTBR);

const options = {};

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
    NgxMaskModule.forRoot(options),
  ],
  providers: [
    ApiUltraService,
    HttpClientModule,
    { provide: LOCALE_ID, useValue: 'pt' },
    WindowRef,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
