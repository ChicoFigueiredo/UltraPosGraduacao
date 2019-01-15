/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

 /** Atualizando angular comum and angular core para linguagem Portugues Brasil */
import { APP_BASE_HREF, registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { NgModule, LOCALE_ID } from '@angular/core';
registerLocaleData(localePt, 'pt-BR');

/** Declarações para interceptação geral de chamadas para inserção de tokens */
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from '../modulos/services/token.interceptor';

/** Middleware de autenticação angular */
import { AuthGuard } from '../modulos/auth-guard.service';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './@core/core.module';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ThemeModule } from './@theme/theme.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

/** configurando API Swagger */
import { ApiModule } from '../modulos/api/api.module';
import { Configuration, ConfigurationParameters } from '../modulos/api';
import { environment } from '../environments/environment';
export function apiConfigFactory (): Configuration {
  const params: ConfigurationParameters = {
    basePath: environment.urlApi
  }
  return new Configuration(params);
}
@NgModule({
  declarations: [AppComponent],
  imports: [
  BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,

    NgbModule.forRoot(),
    ThemeModule.forRoot(),
    CoreModule.forRoot(),

    ApiModule.forRoot(apiConfigFactory),
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    AuthGuard,
  ],
})
export class AppModule {
}
