import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Configuration } from './configuration';

import { CNAEService } from './api/cNAE.service';
import { EspecialidadeService } from './api/especialidade.service';
import { FarmaciaService } from './api/farmacia.service';
import { MedicamentoService } from './api/medicamento.service';
import { MedicoService } from './api/medico.service';
import { PacienteService } from './api/paciente.service';
import { ReceitaService } from './api/receita.service';
import { SubstnciasControladasAnvisaService } from './api/substnciasControladasAnvisa.service';
import { UserService } from './api/user.service';

@NgModule({
  imports:      [ CommonModule, HttpClientModule ],
  declarations: [],
  exports:      [],
  providers: [
    CNAEService,
    EspecialidadeService,
    FarmaciaService,
    MedicamentoService,
    MedicoService,
    PacienteService,
    ReceitaService,
    SubstnciasControladasAnvisaService,
    UserService ]
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders {
        return {
            ngModule: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        }
    }

    constructor( @Optional() @SkipSelf() parentModule: ApiModule) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import your base AppModule only.');
        }
    }
}
