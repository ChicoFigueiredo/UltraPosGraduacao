import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import {
  ParametrosRoutingModule,
  routedComponents
} from "./parametros-routing.module";
import { ThemeModule } from "../../@theme/theme.module";
import { ModalComponentEx } from "./modal/modal-ex.component";
import { NgxMaskModule } from "ngx-mask";
import { NgSelectModule } from "@ng-select/ng-select";
import { FormsModule } from "@angular/forms";
import { FileUploadModule } from "ng2-file-upload/file-upload/file-upload.module";
// import { CKEditorModule } from 'ng2-ckeditor';

import { MedicamentosComponent } from "./medicamentos/medicamentos.component";
import { MedicamentoService } from "../../../modulos/api/api/medicamento.service";
import { UsersComponent } from "./users/users.component";
import { UserService } from "../../../modulos/api/api/user.service";
import { CepService } from "../../../modulos/cep/cep.service";

@NgModule({
  imports: [
    CommonModule,
    ParametrosRoutingModule,
    ThemeModule,
    NgxMaskModule.forRoot({}),
    NgSelectModule,
    FormsModule,
    FileUploadModule
    // CKEditorModule,
  ],
  providers: [MedicamentoService, UserService, CepService],
  entryComponents: [ModalComponentEx],
  declarations: [...routedComponents]
})
export class ParametrosModule {}
