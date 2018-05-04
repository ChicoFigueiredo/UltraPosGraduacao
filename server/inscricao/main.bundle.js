webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__component_form_inscricao_form_inscricao_component__ = __webpack_require__("./src/app/component/form-inscricao/form-inscricao.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__component_form_inscricao_form_inscricao_component__["a" /* FormInscricaoComponent */] },
    { path: ':id', component: __WEBPACK_IMPORTED_MODULE_2__component_form_inscricao_form_inscricao_component__["a" /* FormInscricaoComponent */] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <app-form-inscricao></app-form-inscricao> -->\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_locales_pt__ = __webpack_require__("./node_modules/@angular/common/locales/pt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_mask__ = __webpack_require__("./node_modules/ngx-mask/esm5/ngx-mask.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__component_form_inscricao_form_inscricao_component__ = __webpack_require__("./src/app/component/form-inscricao/form-inscricao.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_api_ultra_service__ = __webpack_require__("./src/app/services/api-ultra.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











Object(__WEBPACK_IMPORTED_MODULE_3__angular_common__["j" /* registerLocaleData */])(__WEBPACK_IMPORTED_MODULE_2__angular_common_locales_pt__["a" /* default */]);
var options = {};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__component_form_inscricao_form_inscricao_component__["a" /* FormInscricaoComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5_ngx_mask__["a" /* NgxMaskModule */].forRoot(options),
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__services_api_ultra_service__["a" /* ApiUltraService */],
                __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["b" /* HttpClientModule */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["G" /* LOCALE_ID */], useValue: 'pt' },
            ],
            bootstrap: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/component/form-inscricao/form-inscricao.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <!-- Form Aluno: {{ formAluno.form.valid | json }} / CPF {{cpfInput.errors | json}} / CPF {{cpfInput.hasError('pattern') | json}} / CPF {{cpfInput.value | json}}<br>\r\n    WhatsApp: {{whatsappInput.errors | json}} | CEP: {{cepInput.errors | json}}| e-mail: {{emailInput.errors | json}} -->\r\n    <div class=\"row\">\r\n        <div class=\"container-fluid shadow\">\r\n            <div class=\"row\">\r\n                <div id=\"valErr\" class=\"row viewerror clearfix hidden\">\r\n                    <div class=\"alert alert-danger\">Oops! Seems there are some errors..</div>\r\n                </div>\r\n                <div id=\"valOk\" class=\"row viewerror clearfix hidden\">\r\n                    <div class=\"alert alert-success\">Yay! ..</div>\r\n                </div>\r\n\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                        <div class=\"form-group brdbot\">\r\n                            <h3>Fomulário de Matricula</h3>\r\n                            <div class=\"controls col-sm-9\">\r\n\r\n                                <p id=\"field1\" data-default-label=\"Header\" data-default-is-header=\"true\" data-control-type=\"header\"></p><span id=\"errId1\" class=\"error\"></span></div>\r\n\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-6\">\r\n                                <div id=\"panel2\" class=\"panelcepInput panel-default\" data-role=\"panel\">\r\n                                    <div class=\"panel-heading\">Dados do aluno</div>\r\n                                    <div class=\"panel-body\">\r\n                                        <form #formAluno=\"ngForm\" action=\"../submit\" id=\"formentry\" class=\"form-horizontal\" role=\"form\" data-parsley-validate novalidate>\r\n\r\n                                            <div class=\"form-group\">\r\n                                                <label class=\"control-label-left\" for=\"cpf\">CPF:<span class=\"req\"> *</span></label>\r\n                                                <div class=\"controls\">\r\n                                                    <input #cpfInput=\"ngModel\" id=\"cpf\" [(ngModel)]='alunoAtual.cpf' type=\"text\" class=\"form-control k-textbox\" data-role=\"mask\" data-mask=\"999.999.999-99\" placeholder=\"Digite seu CPF\" maxlength=\"28\" required=\"required\" name=\"cpf\" data-parsley-errors-container=\"#errId2\"\r\n                                                        (keyup)=\"onKeyCPF($event)\" pattern=\"[0-9]{3}\\.[0-9]{3}\\.[0-9]{3}-[0-9]{2}\">\r\n                                                    <span #erroCPF id=\"errId2\" class=\"error\" *ngIf=\"(cpfInput.invalid || !alunoService.validarCPF(cpfInput.value)) && (cpfInput.dirty || cpfInput.touched)\">CPF inválido ou incompleto</span>\r\n                                                </div>\r\n\r\n                                            </div>\r\n                                            <div class=\"form-group\">\r\n                                                <label class=\"control-label-left\" for=\"nome\">Nome:<span class=\"req\"> *</span></label>\r\n                                                <div class=\"controls\">\r\n\r\n                                                    <input #nomeInput=\"ngModel\" id=\"nome\" [(ngModel)]='alunoAtual.nome' type=\"text\" class=\"form-control k-textbox\" data-role=\"text\" placeholder=\"Digite seu nome\" required=\"required\" name=\"nome\" data-parsley-errors-container=\"#errId3\">\r\n                                                    <span id=\"errId3\" class=\"error\" *ngIf=\"nomeInput.invalid && (nomeInput.dirty || nomeInput.touched)\">Nome deve ser preenchido</span>\r\n                                                </div>\r\n\r\n                                            </div>\r\n                                            <div class=\"form-group\">\r\n                                                <label class=\"control-label-left\" for=\"email\">e-mail:<span class=\"req\"> *</span></label>\r\n                                                <div class=\"controls\">\r\n\r\n                                                    <input #emailInput=\"ngModel\" id=\"email\" [(ngModel)]='alunoAtual.email' type=\"text\" class=\"form-control k-textbox\" data-role=\"text\" placeholder=\"Digite seu e-mail\" required=\"required\" name=\"email\" data-parsley-errors-container=\"#errId4\" pattern='^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'>\r\n                                                    <span id=\"errId4\" class=\"error\" *ngIf=\"emailInput.invalid && (emailInput.dirty || emailInput.touched)\">e-mail não validado</span>\r\n                                                </div>\r\n\r\n                                            </div>\r\n                                            <div class=\"form-group\">\r\n                                                <label class=\"control-label-left\" for=\"whatsapp\">WhatsApp:<span class=\"req\"> *</span></label>\r\n                                                <div class=\"controls\">\r\n\r\n                                                    <input #whatsappInput=\"ngModel\" id=\"whatsapp\" [(ngModel)]='alunoAtual.whatsapp' type=\"text\" class=\"form-control k-textbox\" data-role=\"mask\" placeholder=\"Digite seu celular com WhatsApp\" data-mask=\"(99) 99999-9999\" required=\"required\" name=\"whatsapp\" data-parsley-errors-container=\"#errId5\"\r\n                                                        pattern=\"[(][0-9]{2}[)] [0-9]{5}[-][0-9]{3,4}[_]{0,1}\" (keyup)='onKeyWhatsapp($event)'>\r\n                                                    <span id=\"errId5\" class=\"error\" *ngIf=\"whatsappInput.invalid && (whatsappInput.dirty || whatsappInput.touched)\">Telefone invalido</span>\r\n                                                </div>\r\n\r\n                                            </div>\r\n                                            <div class=\"form-group\">\r\n                                                <label class=\"control-label-left\" for=\"celularAlternativo\">Celular:</label>\r\n                                                <div class=\"controls\">\r\n\r\n                                                    <input #celularInput=\"ngModel\" id=\"celularAlternativo\" [(ngModel)]='alunoAtual.celular' type=\"text\" class=\"form-control k-textbox\" data-role=\"mask\" data-mask=\"(99) 99999-9999\" placeholder=\"Digite o número do celular (alternativo)\" name=\"celularAlternativo\"\r\n                                                        data-parsley-errors-container=\"#errId6\">\r\n                                                    <span id=\"errId6\" class=\"error\"></span>\r\n                                                </div>\r\n\r\n                                            </div>\r\n                                            <div class=\"form-group\" style=\"display: block;\">\r\n                                                <label class=\"control-label-left sr-only\"></label>\r\n                                                <div class=\"controls\">\r\n\r\n                                                    <label class=\"checkbox\" for=\"opcaoSMS\"><input type=\"checkbox\" [(ngModel)]='alunoAtual.opcaoSMS'  value=\"Ao marcar esta opção, você receberá novidades e promoções do Portal por E-mail, SMS e Telefone.\" id=\"opcaoSMS\" name=\"field11\" data-parsley-errors-container=\"#errId7\">Ao marcar esta opção, você receberá novidades e promoções do Portal por E-mail, SMS e Telefone.</label>\r\n                                                    <span id=\"errId7\" class=\"error\"></span>\r\n                                                </div>\r\n\r\n                                            </div>\r\n                                            <div class=\"form-group\">\r\n                                                <label class=\"control-label-left\" for=\"cep\">CEP:<span class=\"req\"> *</span></label>\r\n                                                <div class=\"controls\">\r\n\r\n                                                    <input #cepInput=\"ngModel\" id=\"cep\" type=\"text\" [(ngModel)]='alunoAtual.cep' class=\"form-control k-textbox\" data-role=\"mask\" data-mask=\"99999-999\" required=\"required\" placeholder=\"Digite seu CEP (o formulário se auto-completará\" name=\"cep\" data-parsley-errors-container=\"#errId8\"\r\n                                                        pattern=\"\\d{5}[-]\\d{3}\" (keyup)='onKeyCEP($event)'>\r\n                                                    <span id=\"errId8\" class=\"error\" *ngIf=\"cepInput.invalid && (cepInput.dirty || cepInput.touched)\">CEP inválido</span>\r\n                                                </div>\r\n\r\n                                            </div>\r\n                                            <div class=\"form-group\">\r\n                                                <label class=\"control-label-left\" for=\"endereco\">endereço:<span class=\"req\"> *</span></label>\r\n                                                <div class=\"controls\">\r\n\r\n                                                    <input #enderecoInput=\"ngModel\" id=\"endereco\" [(ngModel)]='alunoAtual.endereco' type=\"text\" class=\"form-control k-textbox\" data-role=\"text\" required=\"required\" placeholder=\"Digite o endereço onde mora\" name=\"endereco\" data-parsley-errors-container=\"#errId9\">\r\n                                                    <span id=\"errId9\" class=\"error\" *ngIf=\"enderecoInput.invalid && (enderecoInput.dirty || enderecoInput.touched)\">Necessário preencher o endereço</span>\r\n                                                </div>\r\n\r\n                                            </div>\r\n                                            <div class=\"form-group\">\r\n                                                <label class=\"control-label-left\" for=\"numero\">número:<span class=\"req\"> *</span></label>\r\n                                                <div class=\"controls\">\r\n\r\n                                                    <input #numeroInput=\"ngModel\" id=\"numero\" [(ngModel)]='alunoAtual.numero' type=\"text\" class=\"form-control k-textbox\" data-role=\"text\" required=\"required\" name=\"numero\" placeholder=\"Digite o número de sua casa\" data-parsley-errors-container=\"#errId10\">\r\n                                                    <span id=\"errId10\" class=\"error\"></span>\r\n                                                </div>\r\n\r\n                                            </div>\r\n                                            <div class=\"form-group\">\r\n                                                <label class=\"control-label-left\" for=\"complemento\">Complemento:</label>\r\n                                                <div class=\"controls\">\r\n\r\n                                                    <input id=\"complemento\" [(ngModel)]='alunoAtual.complemento' type=\"text\" class=\"form-control k-textbox\" data-role=\"text\" name=\"complemento\" placeholder=\"Digite a complementação do seu endereço\" data-parsley-errors-container=\"#errId11\">\r\n                                                    <span id=\"errId11\" class=\"error\"></span>\r\n                                                </div>\r\n\r\n                                            </div>\r\n                                            <div class=\"form-group\">\r\n                                                <label class=\"control-label-left\" for=\"bairro\">Bairro:<span class=\"req\"> *</span></label>\r\n                                                <div class=\"controls\">\r\n\r\n                                                    <input #bairroInput=\"ngModel\" id=\"bairro\" [(ngModel)]='alunoAtual.bairro' type=\"text\" class=\"form-control k-textbox\" data-role=\"text\" required=\"required\" name=\"bairro\" placeholder=\"Digite o bairro onde mora\" data-parsley-errors-container=\"#errId12\">\r\n                                                    <span id=\"errId12\" class=\"error\"></span>\r\n                                                </div>\r\n\r\n                                            </div>\r\n                                            <div class=\"form-group\">\r\n                                                <label class=\"control-label-left\" for=\"cidade\">Cidade:<span class=\"req\"> *</span></label>\r\n                                                <div class=\"controls\">\r\n\r\n                                                    <input #cidadeInput=\"ngModel\" id=\"cidade\" [(ngModel)]='alunoAtual.cidade' type=\"text\" class=\"form-control k-textbox\" data-role=\"text\" required=\"required\" name=\"cidade\" placeholder=\"Digite a cidade onde mora\" data-parsley-errors-container=\"#errId13\">\r\n                                                    <span id=\"errId13\" class=\"error\"></span>\r\n                                                </div>\r\n\r\n                                            </div>\r\n                                            <div class=\"form-group\">\r\n                                                <label class=\"control-label\" for=\"uf\">UF:<span class=\"req\"> *</span></label>\r\n                                                <div class=\"controls\">\r\n                                                    <select #ufInput=\"ngModel\" id=\"uf\" [(ngModel)]=\"alunoAtual.uf\" class=\"form-control\" required=\"required\" name=\"uf\" data-parsley-errors-container=\"#errId14\">\r\n                                                      <option *ngFor='let u of ufs' [value]=\"u.sigla\" [selected]=\"alunoAtual.uf == u.sigla\" >{{u.nome}}</option>\r\n                                                    </select><span id=\"errId14\" class=\"error\"></span>\r\n                                                </div>\r\n\r\n                                            </div>\r\n                                            <div class=\"form-group\">\r\n                                                <label class=\"control-label-left\" for=\"ufNaturalidade\">UF Naturalidade:<span class=\"req\"> *</span></label>\r\n                                                <div class=\"controls\">\r\n\r\n                                                    <select #ufNatural=\"ngModel\" id=\"ufNaturalidade\" [(ngModel)]=\"alunoAtual.ufNaturalidade\" class=\"form-control\" required=\"required\" name=\"ufNaturalidade\" data-parsley-errors-container=\"#errId15\">\r\n                                                        <option *ngFor='let u of ufs' [value]=\"u.sigla\" [selected]=\"alunoAtual.uf == u.sigla\" >{{u.nome}}</option>\r\n                                                    </select><span id=\"errId15\" class=\"error\"></span>\r\n                                                </div>\r\n\r\n                                            </div>\r\n                                            <div class=\"form-group\">\r\n                                                <label class=\"control-label-left\" for=\"cidadeNaturalidade\">Cidade Naturalidade:<span class=\"req\"> *</span></label>\r\n                                                <div class=\"controls\">\r\n\r\n                                                    <select #cidadeNaturalidadeInput=\"ngModel\" id=\"cidadeNaturalidade\" [(ngModel)]=\"alunoAtual.cidadeNaturalidade\" class=\"form-control\" required=\"required\" name=\"cidadeNaturalidade\" data-parsley-errors-container=\"#errId16\">\r\n                                                        <option *ngFor='let u of getMunicipiosDaUF(ufNatural.value)' [value]=\"u.nome\" >{{u.nome}}</option>\r\n                                                    </select><span id=\"errId16\" class=\"error\"></span>\r\n                                                </div>\r\n\r\n                                            </div>\r\n                                            <div class=\"form-group\">\r\n                                                <label class=\"control-label control-label-left col-sm-3\">Sexo:</label>\r\n                                                <div class=\"controls col-sm-9\">\r\n\r\n                                                    <label class=\"radio col-md-6\" for=\"sexoFeminino\">\r\n                                                    <input type=\"radio\"  [(ngModel)]=\"alunoAtual.sexo\" [value]=\"'F'\" id=\"sexoFeminino\" name=\"sexo\" data-parsley-errors-container=\"#errId17\">Feminino</label>\r\n                                                    <label class=\"radio col-md-6\" for=\"sexoMasculino\">\r\n                                                    <input type=\"radio\" [(ngModel)]=\"alunoAtual.sexo\" [value]=\"'M'\" id=\"sexoMasculino\" name=\"sexo\" data-parsley-errors-container=\"#errId17\">Masculino</label>\r\n                                                    <span id=\"errId17\" class=\"error\"></span></div>\r\n\r\n                                            </div>\r\n\r\n                                            <div class=\"form-group\">\r\n                                                <label class=\"control-label-left\" for=\"dataNascimento\">Data Nascimento:<span class=\"req\"> *</span></label>\r\n                                                <div class=\"controls\">\r\n                                                    <input #dataNascimentoInput=\"ngModel\" id=\"dataNascimento\" [(ngModel)]='alunoAtual.dataNascimento' type=\"date\" class=\"form-control k-input\" data-error-container=\"#errfield95\" required=\"required\" style=\"width: 100%;\" name=\"dataNascimento\" data-parsley-errors-container=\"#errId18\">\r\n\r\n                                                    <span id=\"errId18\" class=\"error\"></span>\r\n                                                </div>\r\n\r\n                                            </div>\r\n                                            <div class=\"form-group\">\r\n                                                <label class=\"control-label-left\" for=\"estadoCivil\">Estado Civil:<span class=\"req\"> *</span></label>\r\n                                                <div class=\"controls\">\r\n\r\n                                                    <select #estadoCivilInput=\"ngModel\" id=\"estadoCivil\" [(ngModel)]='alunoAtual.estadoCivil' class=\"form-control\" selected=\"selected\" name=\"estadoCivil\" required=\"required\" data-parsley-errors-container=\"#errId19\">\r\n                                                        <option value=\"Selecione\" selected=\"selected\">Selecione</option>\r\n                                                        <option value=\"Solteira(o)\">Solteira(o)</option>\r\n                                                        <option value=\"Casada(o)\">Casada(o)</option>\r\n                                                        <option value=\"União estável\">União estável</option>\r\n                                                        <option value=\"Divorciada(o)\">Divorciada(o)</option>\r\n                                                        <option value=\"Viúva(o)\">Viúva(o)</option></select>\r\n                                                    <span id=\"errId19\" class=\"error\"></span>\r\n                                                </div>\r\n\r\n                                            </div>\r\n                                            <div class=\"form-group\">\r\n                                                <label class=\"control-label-left\" for=\"identidade\">número da Identidade<span class=\"req\"> *</span></label>\r\n                                                <div class=\"controls\">\r\n\r\n                                                    <input #identidadeInput=\"ngModel\" id=\"identidade\" [(ngModel)]='alunoAtual.numeroIdentidade' type=\"text\" class=\"form-control k-textbox\" data-role=\"text\" placeholder=\"Digite o número da identidade\" name=\"identidade\" required=\"required\" data-parsley-errors-container=\"#errId20\">\r\n                                                    <span id=\"errId20\" class=\"error\"></span>\r\n                                                </div>\r\n\r\n                                            </div>\r\n                                            <div class=\"form-group\">\r\n                                                <label class=\"control-label-left\" for=\"orgaoIdentidade\">Orgão Expedidor<span class=\"req\"> *</span></label>\r\n                                                <div class=\"controls\">\r\n\r\n                                                    <input #orgaoIdentidadeInput=\"ngModel\" id=\"orgaoIdentidade\" [(ngModel)]='alunoAtual.orgaoExpedidor' type=\"text\" class=\"form-control k-textbox\" data-role=\"text\" placeholder=\"Digite o orgão expedidor da identidade\" name=\"orgaoIdentidade\" required=\"required\"\r\n                                                        data-parsley-errors-container=\"#errId21\">\r\n                                                    <span id=\"errId21\" class=\"error\"></span>\r\n                                                </div>\r\n\r\n                                            </div>\r\n                                            <div class=\"form-group\" style=\"display: block;\">\r\n                                                <label class=\"control-label-left\" for=\"mae\">Nome da Mãe<span class=\"req\"> *</span></label>\r\n                                                <div class=\"controls\">\r\n\r\n                                                    <input #maeInput=\"ngModel\" id=\"mae\" [(ngModel)]='alunoAtual.nomeMae' type=\"text\" class=\"form-control k-textbox\" data-role=\"text\" placeholder=\"Digite o nome da mãe\" name=\"mae\" required=\"required\" data-parsley-errors-container=\"#errId22\">\r\n                                                    <span id=\"errId22\" class=\"error\"></span>\r\n                                                </div>\r\n\r\n                                            </div>\r\n                                            <div class=\"form-group\">\r\n                                                <label class=\"control-label-left\" for=\"pai\">Nome do Pai:</label>\r\n                                                <div class=\"controls\">\r\n\r\n                                                    <input id=\"pai\" [(ngModel)]='alunoAtual.nomePai' type=\"text\" class=\"form-control k-textbox\" data-role=\"text\" placeholder=\"Digite o nome do pai\" name=\"pai\" data-parsley-errors-container=\"#errId23\">\r\n                                                    <span id=\"errId23\" class=\"error\"></span>\r\n                                                </div>\r\n\r\n                                            </div>\r\n                                        </form>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-6\">\r\n                                <div id=\"panel3\" class=\"panel panel-default\" data-role=\"panel\">\r\n                                    <div class=\"panel-heading\">Financeiro</div>\r\n                                    <div class=\"panel-body\">\r\n\r\n                                        <div class=\"form-group\">\r\n                                            <label class=\"control-label-left\" for=\"categoriaSelecionado\">Categoria de cursos:</label>\r\n                                            <div class=\"controls\">\r\n                                                <select [(ngModel)]='cursoEscolhido.codigoCategoria' #vCategoria id=\"categoriaSelecionado\" class=\"form-control\" name=\"categoriaSelecionado\" data-parsley-errors-container=\"#errId24\">\r\n                                                            <option *ngFor='let c of categorias' [value]=\"c.id\" >{{c.name.pt}}</option>\r\n                                                    </select><span id=\"errId24\" class=\"error\"></span>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <div class=\"form-group\">\r\n                                            <label class=\"control-label-left\" for=\"cursoSelecionado\">Escolha o curso:</label>\r\n                                            <div class=\"controls\">\r\n\r\n                                                <select [(ngModel)]='cursoEscolhido.codigoCurso' id=\"cursoSelecionado\" class=\"form-control\" name=\"cursoSelecionado\" data-parsley-errors-container=\"#errId24\" (change)='selectCurso($event)'>\r\n                                                            <option *ngFor='let c of getCursosDaCategoria(vCategoria.value)' [value]=\"c.id\" >{{c.name.pt}}</option>\r\n                                                    </select><span id=\"errId24\" class=\"error\"></span>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"form-group\">\r\n                                            <label class=\"control-label-left sr-only\"></label>\r\n                                            <div class=\"controls\">\r\n\r\n                                                <label class=\"checkbox\" for=\"marcaConcordo\"><input type=\"checkbox\" value=\"Li e estou de acordo com os Termos do Contrato\" id=\"marcaConcordo\" name=\"field181\" data-parsley-errors-container=\"#errId25\">Li e estou de acordo com os Termos do Contrato</label>\r\n                                                <span id=\"errId25\" class=\"error\"></span>\r\n                                            </div>\r\n\r\n                                        </div>\r\n                                        <div class=\"form-group\" style=\"display: block;\">\r\n                                            <label class=\"control-label-left\" for=\"matricula\">Taxa de Matricula<span class=\"req\"> *</span></label>\r\n                                            <div class=\"controls\">\r\n\r\n                                                <select #selMatricula id=\"matricula\" [(ngModel)]='cursoEscolhido.pagamento.taxaMatricula' class=\"form-control\" selected=\"selected\" name=\"matricula\" required=\"required\" data-parsley-errors-container=\"#errId26\">\r\n                                                        <option value=\"{{cursoEscolhido.pagamento.taxaMatricula}}\" selected=\"selected\">{{cursoEscolhido.pagamento.taxaMatricula | currency:'BRL':'symbol':'.2-2'}}</option>\r\n                                                    </select>\r\n                                                <span id=\"errId26\" class=\"error\"></span>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <div class=\"form-group\" style=\"display: block;\">\r\n                                            <label class=\"control-label-left\" for=\"mensalidade\">Valor da Mensalidade<span class=\"req\"> *</span></label>\r\n                                            <div class=\"controls\">\r\n                                                <select #selMensalidade [(ngModel)]='cursoEscolhido.pagamento.parcelamento' id=\"mensalidade\" class=\"form-control\" selected=\"selected\" name=\"mensalidade\" required=\"required\" data-parsley-errors-container=\"#errId27\">\r\n                                                        <option *ngFor='let m of valoresMensalidade' [value]=\"m.prestacoes\" selected=\"selected\">{{m.prestacoes | number:'2.0-0'}}X de {{m.valor | currency:'BRL':'symbol':'.2-2'}}</option>\r\n                                                    </select>\r\n                                                <span id=\"errId27\" class=\"error\"></span>\r\n                                            </div>\r\n\r\n                                        </div>\r\n                                        <div class=\"form-group\">\r\n                                            <label class=\"control-label-left\" for=\"melhorDiaPrestacao\">Melhor dia para pagamento da mensalidade:<span class=\"req\"> *</span></label>\r\n                                            <div class=\"controls\">\r\n\r\n                                                <select [(ngModel)]='cursoEscolhido.pagamento.melhorDia' id=\"melhorDiaPrestacao\" class=\"form-control\" required=\"required\" name=\"melhorDiaPrestacao\" data-parsley-errors-container=\"#errId28\">\r\n                                                        <option value=\"5\">todo dia 05 do mês</option>\r\n                                                        <option value=\"10\">todo dia 10 do mês</option>\r\n                                                        <option value=\"15\">todo dia 15 do mês</option>\r\n                                                        <option value=\"20\">todo dia 20 do mês</option>\r\n                                                        <option value=\"25\">todo dia 25 do mês</option>\r\n                                                    </select><span id=\"errId28\" class=\"error\"></span></div>\r\n\r\n                                        </div>\r\n                                        <div class=\"form-group\" style=\"display: block;\">\r\n                                            <label class=\"control-label-left\" for=\"cupom\">Aplicar o cupom</label>\r\n                                            <div class=\"controls\">\r\n                                                <input #txtCupom [(ngModel)]='cursoEscolhido.pagamento.cupom.codigoCupom' id=\"cupom\" type=\"text\" class=\"form-control k-textbox\" data-role=\"text\" placeholder=\"Digite o cupom e clique em aplicar\" name=\"cupom\" data-parsley-errors-container=\"#errId29\">\r\n                                                <span id=\"errId29\" class=\"error\"></span>\r\n                                            </div>\r\n\r\n                                        </div>\r\n                                        <div class=\"form-group btn-group group-inline\" style=\"display: block;\">\r\n                                            <div class=\"controls\">\r\n                                                <button #btnCupom id=\"btnCupom\" type=\"button\" class=\"btn btn-primary\" name=\"Aplicar Cupom!\" (click)='aplicarCupom(txtCupom.value)'>Aplicar Cupom!</button>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <div class=\"form-group\" style=\"display: block;\">\r\n                                            <label class=\"control-label-left\" for=\"cupom\">FORMA DE PAGAMENTO</label>\r\n                                        </div>\r\n                                        <div class=\"row\" id=\"tab188\" data-role=\"tab\" style=\"display: block;\" *ngIf=\"cursoEscolhido.pagamento.taxaMatricula || cursoEscolhido.pagamento.valorCobrado || false\">\r\n                                            <ul class=\"nav nav-tabs\">\r\n                                                <li class=\"\">\r\n                                                    <a href=\"#tabContent189\" data-toggle=\"tab\" id=\"tabLabel189\"><img class=\"icon\" src=\"assets/images/icons/boleto.svg\"> Boleto Bancário</a>\r\n                                                </li>\r\n                                                <li class=\"active\">\r\n                                                    <a data-toggle=\"tab\" href=\"#tabContent190\" id=\"tabLabel190\"><img class=\"icon\" src=\"assets/images/icons/credit-card.svg\"> Cartão de Crédito</a>\r\n                                                </li>\r\n\r\n                                            </ul>\r\n                                            <div class=\"tab-content\">\r\n                                                <div class=\"tab-pane\" id=\"tabContent189\">\r\n                                                    <div class=\"\">\r\n                                                        <div class=\"form-group\">\r\n                                                            <label class=\"control-label\">Será gerado:</label>\r\n                                                            <div class=\"controls\">\r\n\r\n                                                                <label class=\"checkbox\" for=\"primeiroBoleto\">\r\n                                                                        <input checked=\"checked\" disabled type=\"checkbox\" value=\"266,67\" id=\"primeiroBoleto\" name=\"field228\" data-parsley-errors-container=\"#errId30\">\r\n                                                                        Primeiro boleto {{cursoEscolhido.pagamento.taxaMatricula + (cursoEscolhido.pagamento.valorCobrado / cursoEscolhido.pagamento.parcelamento) | currency:'BRL':'symbol':'.2-2' }}\r\n                                                                    </label>\r\n                                                                <label class=\"checkbox\" for=\"valorMensalidadeBoleto\">\r\n                                                                        <input checked=\"checked\" disabled type=\"checkbox\" value=\"166,67\" id=\"valorMensalidadeBoleto\" name=\"field228\" data-parsley-errors-container=\"#errId30\">\r\n                                                                        {{ cursoEscolhido.pagamento.parcelamento - 1 }} boletos de {{ cursoEscolhido.pagamento.valorCobrado / cursoEscolhido.pagamento.parcelamento | currency:'BRL':'symbol':'.2-2' }}\r\n                                                                    </label>\r\n                                                                <span id=\"errId30\" class=\"error\"></span>\r\n                                                            </div>\r\n\r\n                                                        </div>\r\n\r\n                                                        <div class=\"form-group btn-group group-inline\" style=\"display: block;\">\r\n                                                            <button id=\"btnMatricularPorBoleto\" type=\"button\" class=\"btn btn-primary\" name=\"Salva\" (click)='efeturarMatricula(\"boleto\")'>Efetuar Matrícula</button>\r\n                                                        </div>\r\n\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"tab-pane active\" id=\"tabContent190\">\r\n                                                    <div class=\"\">\r\n                                                        <div class=\"form-group\">\r\n                                                            <label class=\"control-label-left\" for=\"numeroCartaoCredito\">Número do Cartão de Crédito</label>\r\n                                                            <div class=\"controls\">\r\n                                                                <input #ccInput='ngModel' [(ngModel)]='cursoEscolhido.pagamento.dadosCartao.numero' id=\"numeroCartaoCredito\" type='text' class=\"form-control k-textbox\" placeholder=\"Digite o número do Cartão de Crédito\" name=\"numeroCartaoCredito\" dropSpecialCharacters=\"true \"\r\n                                                                    mask=\"0000 0000 0000 0000\">\r\n                                                                <!-- <input type=\"tel\" autocomplete=\"cc-number\" id=\"cc-number\" ccNum> -->\r\n                                                                <!-- <input #ccCarai='ngModel' [(ngModel)]='cursoEscolhido.pagamento.dadosCartao.numero' id=\"numeroCartaoCredito\" type=\"tel\" class=\"form-control k-textbox\" data-role=\"mask\" data-mask=\"9999 9999 9999 9999\" placeholder=\"Digite o número do Cartão de Crédito\"\r\n                                                                    name=\"numeroCartaoCredito\" data-parsley-errors-container=\"#errId31\" required minlength=\"4\" ccNumber> -->\r\n                                                                <!-- <input id=\"numeroCartaoCredito\" type=\"text\" class=\"form-control k-textbox\" data-role=\"mask\" data-mask=\"9999 9999 9999 9999\" placeholder=\"Digite o número do Cartão de Crédito\" name=\"numeroCartaoCredito\" data-parsley-errors-container=\"#errId31\"> -->\r\n                                                                <!-- <input id=\"cc-number\" type=\"tel\" autocomplete=\"cc-number\" ccNumber> -->\r\n                                                                <span id=\"errId31\" class=\"error\"></span>\r\n                                                            </div>\r\n                                                            <!-- Um: {{ccCarai.creditCard | json}} -->\r\n                                                        </div>\r\n                                                        <div class=\"form-group\">\r\n                                                            <label class=\"control-label-left\" for=\"nomeImpressoCartao\">Vencimento do Cartão (ano/mes)</label>\r\n                                                            <div class=\"controls\">\r\n                                                                <input #ccMesAnoInput='ngModel' [(ngModel)]='cursoEscolhido.pagamento.dadosCartao.vencimento' mask='00/0099' id=\"mesAnoVencimento\" type=\"text\" class=\"form-control k-textbox\" data-role=\"text\" placeholder=\"Digite o mês e ano Cartão de Crédito, como no exemplo 08/2012\"\r\n                                                                    name=\"mesAnoVencimento\" data-parsley-errors-container=\"#errId32\">\r\n                                                                <span id=\"errId32\" class=\"error\"></span>\r\n                                                            </div>\r\n\r\n                                                        </div>\r\n                                                        <div class=\"form-group\">\r\n                                                            <label class=\"control-label-left\" for=\"nomeImpressoCartao\">Nome impresso no Cartão</label>\r\n                                                            <div class=\"controls\">\r\n\r\n                                                                <input id=\"nomeImpressoCartao\" type=\"text\" class=\"form-control k-textbox\" data-role=\"text\" placeholder=\"Digite o nome que está no Cartão de Crédito\" name=\"nomeImpressoCartao\" data-parsley-errors-container=\"#errId32\">\r\n                                                                <span id=\"errId32\" class=\"error\"></span>\r\n                                                            </div>\r\n\r\n                                                        </div>\r\n                                                        <div class=\"form-group\">\r\n                                                            <label class=\"control-label-left\" for=\"bandeiraCartaoCredito\">Bandeira Cartão:</label>\r\n                                                            <div class=\"controls\">\r\n\r\n                                                                <select id=\"bandeiraCartaoCredito\" class=\"form-control\" name=\"bandeiraCartaoCredito\" data-parsley-errors-container=\"#errId33\">\r\n                                                                        <option value=\"Mastercard\">Mastercard</option>\r\n                                                                        <option value=\"Visa\">Visa</option>\r\n                                                                        <option value=\"Elo\">Elo</option>\r\n                                                                        <option value=\"American Express\">American Express</option>\r\n                                                                        <option value=\"Dinners\">Dinners</option>\r\n                                                                    </select><span id=\"errId33\" class=\"error\"></span></div>\r\n\r\n                                                        </div>\r\n                                                        <div class=\"form-group\">\r\n                                                            <label class=\"control-label-left\" for=\"cvvCartaoCredito\">CVV</label>\r\n                                                            <div class=\"controls\">\r\n\r\n                                                                <input id=\"cvvCartaoCredito\" type=\"text\" class=\"form-control k-textbox\" data-role=\"text\" placeholder=\"Digite o código CVV atrás do Cartão\" data-parsley-errors-container=\"#errId34\">\r\n                                                                <span id=\"errId34\" class=\"error\"></span>\r\n                                                            </div>\r\n\r\n                                                        </div>\r\n                                                        <div class=\"form-group btn-group group-inline\" style=\"display: block;\">\r\n                                                            <button id=\"btnSalvarFormulario\" type=\"button\" class=\"btn btn-primary\" name=\"Salva\" (click)='efeturarMatricula(\"cartao\")'>Efetuar Matrícula</button>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n\r\n\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/component/form-inscricao/form-inscricao.component.scss":
/***/ (function(module, exports) {

module.exports = "img.icon {\n  width: 2.5em; }\n\n.nav-tabs > li.active > a,\n.nav-tabs > li.active > a:hover,\n.nav-tabs > li.active > a:focus {\n  background-color: #ffe0a6; }\n\nselect.promotion {\n  background-color: blue;\n  color: white; }\n"

/***/ }),

/***/ "./src/app/component/form-inscricao/form-inscricao.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormInscricaoComponent; });
/* unused harmony export Aluno */
/* unused harmony export ValoresMensalidade */
/* unused harmony export DadosCartao */
/* unused harmony export CursoPagamentoCupom */
/* unused harmony export CursoPagamento */
/* unused harmony export Curso */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_ultra_service__ = __webpack_require__("./src/app/services/api-ultra.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FormInscricaoComponent = /** @class */ (function () {
    function FormInscricaoComponent(alunoService, cdr, route) {
        var _this = this;
        this.alunoService = alunoService;
        this.cdr = cdr;
        this.route = route;
        this.alunoAtual = new Aluno();
        this.cursosAtivos = [];
        this.ultimaBuscaValidaCPF = '';
        this.ultimaBuscaValidaCEP = '';
        this.ufs = [];
        this.municipios = [];
        this.categorias = [];
        this.cursos = [];
        this.cursoEscolhido = new Curso();
        this.idCursoSelecionado = '';
        this.valoresMensalidade = [];
        this.alunoService.getUF().subscribe(function (x) {
            x = x.sort(function (a, b) { return a.nome > b.nome ? 1 : -1; });
            _this.ufs = x;
        });
        this.alunoService.getMunicipios().subscribe(function (x) {
            x = x.sort(function (a, b) { return a.nome > b.nome ? 1 : -1; });
            _this.municipios = x;
        });
        this.alunoService.getCategorias().subscribe(function (x) {
            x = x.sort(function (a, b) { return a.name.pt > b.name.pt ? 1 : -1; });
            _this.categorias = x;
        });
        this.alunoService.getCursos().subscribe(function (x) {
            x = x.sort(function (a, b) { return a.name.pt > b.name.pt ? 1 : -1; });
            // .filter((c) => c.published );
            _this.cursos = x;
            _this.cursoEscolhido.codigoCategoria = Number(_this.getCategoriaDoCurso(_this.idCursoSelecionado).id);
            _this.cursoEscolhido.codigoCurso = Number(_this.idCursoSelecionado);
            _this.selectCurso({ target: { value: _this.idCursoSelecionado } });
        });
    }
    FormInscricaoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cursoEscolhido.pagamento.melhorDia = 5;
        this.cursoEscolhido.pagamento.parcelamento = 24;
        this.route.params.subscribe(function (params) {
            _this.idCursoSelecionado = params['id'];
            _this.cursoEscolhido.codigoCategoria = Number(_this.getCategoriaDoCurso(_this.idCursoSelecionado).id);
            _this.cursoEscolhido.codigoCurso = Number(_this.idCursoSelecionado);
            _this.selectCurso({ target: { value: _this.idCursoSelecionado } });
        });
    };
    FormInscricaoComponent.prototype.ngDoCheck = function () {
        this.cdr.detectChanges();
    };
    FormInscricaoComponent.prototype.onKeyCPF = function ($event) {
        var _this = this;
        var testCPF = /\d\d\d[.]\d\d\d[.]\d\d\d[-]\d\d/;
        var cpf = $event.target.value;
        this.alunoAtual.cpf = cpf;
        if (testCPF.test(cpf)) {
            if (this.alunoService.validarCPF(cpf)) {
                if (cpf !== this.ultimaBuscaValidaCPF) {
                    // this.erroCPF.nativeElement.innerHTML = '';
                    this.alunoService.findUser(cpf).subscribe(function (a) {
                        if (a.length > 0) {
                            _this.cursosAtivos = a[0].cursos.slice();
                            a[0].cursos = [];
                            _this.ultimaBuscaValidaCPF = cpf;
                            _this.alunoAtual = a[0];
                        }
                    });
                }
            }
            else {
                // this.erroCPF.nativeElement.innerHTML = 'CPF com erro de validação, verifique'
            }
        }
        return false;
    };
    FormInscricaoComponent.prototype.onKeyWhatsapp = function ($event) {
        this.alunoAtual.whatsapp = $event.target.value;
    };
    FormInscricaoComponent.prototype.onKeyEmail = function ($event) {
        this.alunoAtual.email = $event.target.value;
    };
    FormInscricaoComponent.prototype.onKeyCEP = function ($event) {
        var _this = this;
        var testCEP = /\d\d\d\d\d[-]\d\d\d/;
        var cep = $event.target.value;
        this.alunoAtual.cep = cep;
        if (testCEP.test(cep)) {
            if (cep !== this.ultimaBuscaValidaCEP) {
                this.alunoService.getCEP(cep).subscribe(function (descCEP) {
                    _this.alunoAtual.endereco = descCEP.logradouro;
                    _this.alunoAtual.bairro = descCEP.bairro;
                    _this.alunoAtual.cidade = descCEP.cidade;
                    _this.alunoAtual.uf = descCEP.estado;
                    _this.ultimaBuscaValidaCEP = cep;
                });
            }
        }
        return false;
    };
    FormInscricaoComponent.prototype.getMunicipiosDaUF = function (uf) {
        return this.municipios.filter(function (x) { return x.microrregiao.mesorregiao.UF.sigla === uf; });
    };
    FormInscricaoComponent.prototype.getCursosDaCategoria = function (categoria) {
        return this.cursos.filter(function (x) {
            return x.categories.filter(function (c) {
                if (c) {
                    return c.id === Number(categoria);
                }
                else {
                    return false;
                }
            }).length > 0;
        });
    };
    FormInscricaoComponent.prototype.getCategoriaDoCurso = function (curso) {
        var cu = this.cursos.filter(function (c) { return c.id === Number(curso); });
        if (cu) {
            if (cu.length > 0) {
                return cu[0].categories[0];
            }
        }
        return null;
    };
    FormInscricaoComponent.prototype.selectCurso = function (e) {
        var codigoCurso = Number(e.target.value);
        var detalheCurso = this.cursos.filter(function (c) { return c.id === codigoCurso; })[0];
        this.cursoEscolhido.pagamento.taxaMatricula = detalheCurso.variants[0].down_payment;
        this.cursoEscolhido.pagamento.valorOriginal = detalheCurso.variants[0].price;
        this.cursoEscolhido.pagamento.valorCobrado = detalheCurso.variants[0].price;
        this.gerarArrayValores(this.cursoEscolhido.pagamento.valorCobrado, 24);
        this.selMatricula.nativeElement.classList.remove('promotion');
        this.selMensalidade.nativeElement.classList.remove('promotion');
        this.txtCupom.nativeElement.value = '';
        this.txtCupom.nativeElement.disabled = false;
        this.btnCupom.nativeElement.disabled = false;
        return;
    };
    FormInscricaoComponent.prototype.aplicarCupom = function (txtCupom) {
        var _this = this;
        txtCupom = txtCupom.toUpperCase();
        this.cursoEscolhido.pagamento.cupom.codigoCupom = txtCupom.toUpperCase();
        if (this.cursoEscolhido.pagamento.valorOriginal) {
            this.alunoService.processarCupom(txtCupom, this.cursoEscolhido.pagamento.valorOriginal, this.cursoEscolhido.pagamento.taxaMatricula).subscribe(function (cupomProcessado) {
                _this.cursoEscolhido.pagamento.taxaMatricula = cupomProcessado.valorMatriculaCalculado;
                _this.cursoEscolhido.pagamento.valorCobrado = cupomProcessado.valorCalculado;
                _this.gerarArrayValores(_this.cursoEscolhido.pagamento.valorCobrado, 24);
                _this.cursoEscolhido.pagamento.cupom.codigoCupom = cupomProcessado.codigoCupom;
                _this.cursoEscolhido.pagamento.cupom.origemCupom = cupomProcessado.origemCupom;
                _this.cursoEscolhido.pagamento.cupom.tipoDesconto = cupomProcessado.tipoDesconto;
                _this.cursoEscolhido.pagamento.cupom.valorDesconto = cupomProcessado.valorDesconto;
                _this.cursoEscolhido.pagamento.cupom.percentualDesconto = cupomProcessado.percentualDesconto;
                _this.selMatricula.nativeElement.classList.add('promotion');
                _this.selMensalidade.nativeElement.classList.add('promotion');
                _this.txtCupom.nativeElement.disabled = true;
                _this.btnCupom.nativeElement.disabled = true;
                alert('Parabéns, CUPOM ' + txtCupom + ' válido! Os novos valores estão nos campos em azul!');
            });
        }
    };
    FormInscricaoComponent.prototype.gerarArrayValores = function (valor, meses) {
        if (meses === void 0) { meses = 24; }
        this.valoresMensalidade = [];
        for (var i = 1; i <= meses; i += 1) {
            this.valoresMensalidade.push({
                prestacoes: i,
                valor: Math.round(valor / i * 100) / 100,
                display: i + 'X de R$ ' + Math.round(valor / i * 100) / 100
            });
        }
    };
    FormInscricaoComponent.prototype.efeturarMatricula = function (tipoPagamento) {
        if (tipoPagamento === void 0) { tipoPagamento = 'cartao'; }
        this.alunoService.salvarMatricula(this.alunoAtual)
            .subscribe(function (res) {
            console.log(res);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('erroCPF'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], FormInscricaoComponent.prototype, "erroCPF", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('selMatricula'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], FormInscricaoComponent.prototype, "selMatricula", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('selMensalidade'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], FormInscricaoComponent.prototype, "selMensalidade", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('txtCupom'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], FormInscricaoComponent.prototype, "txtCupom", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('btnCupom'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], FormInscricaoComponent.prototype, "btnCupom", void 0);
    FormInscricaoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-form-inscricao',
            template: __webpack_require__("./src/app/component/form-inscricao/form-inscricao.component.html"),
            styles: [__webpack_require__("./src/app/component/form-inscricao/form-inscricao.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_api_ultra_service__["a" /* ApiUltraService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], FormInscricaoComponent);
    return FormInscricaoComponent;
}());

var Aluno = /** @class */ (function () {
    function Aluno() {
        this.cpf = '';
        this.nome = '';
        this.email = '';
        this.whatsapp = '';
        this.celular = '';
        this.opcaoSMS = false;
        this.cep = '';
        this.endereco = '';
        this.numero = '';
        this.complemento = '';
        this.bairro = '';
        this.cidade = '';
        this.uf = '';
        this.ufNaturalidade = '';
        this.cidadeNaturalidade = '';
        this.sexoMasculino = '';
        this.dataNascimento = '';
        this.estadoCivil = '';
        this.numeroIdentidade = '';
        this.orgaoExpedidor = '';
        this.sexo = 'F';
        this.nomeMae = '';
        this.nomePai = '';
    }
    return Aluno;
}());

var ValoresMensalidade = /** @class */ (function () {
    function ValoresMensalidade() {
    }
    return ValoresMensalidade;
}());

var DadosCartao = /** @class */ (function () {
    function DadosCartao() {
        this.numero = '';
        this.nome = '';
        this.bandeira = '';
        this.CVV = '';
        this.vencimento = '';
    }
    return DadosCartao;
}());

var CursoPagamentoCupom = /** @class */ (function () {
    function CursoPagamentoCupom() {
        this.codigoCupom = '';
        this.origemCupom = '';
        this.tipoDesconto = '';
        this.valorDesconto = 0;
        this.percentualDesconto = 0;
    }
    return CursoPagamentoCupom;
}());

var CursoPagamento = /** @class */ (function () {
    function CursoPagamento() {
        this.cupom = new CursoPagamentoCupom();
        this.dadosCartao = new DadosCartao();
    }
    return CursoPagamento;
}());

var Curso = /** @class */ (function () {
    function Curso() {
        this.pagamento = new CursoPagamento();
    }
    return Curso;
}());



/***/ }),

/***/ "./src/app/services/api-ultra.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiUltraService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var API = {
    FIND_USER: __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].rootApi + 'api/alunos/find/',
    SAVE_USER: __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].rootApi + 'api/alunos/save',
    GET_CATEGORIAS: __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].rootApi + 'api/categorias/list',
    GET_CURSOS: __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].rootApi + 'api/cursos/list',
    POST_PROCESS_CUPOM: __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].rootApi + 'api/cupom/calcula',
    UF: '//servicodados.ibge.gov.br/api/v1/localidades/estados',
    MUNICIPIOS: '//servicodados.ibge.gov.br/api/v1/localidades/municipios',
    CEP: '//api.postmon.com.br/v1/cep/',
};
var ApiUltraService = /** @class */ (function () {
    function ApiUltraService(http) {
        this.http = http;
        this.alunoAtual = null;
        this.listaUF = [];
        this.listaMunicipios = [];
    }
    ApiUltraService.prototype.findUser = function (cpf) {
        var _this = this;
        return this.http.get(API.FIND_USER + cpf)
            .map(function (aluno) {
            _this.alunoAtual = aluno;
            return aluno;
        });
    };
    ApiUltraService.prototype.getUF = function () {
        var _this = this;
        return this.http.get(API.UF)
            .map(function (listaUF) {
            _this.listaUF = listaUF;
            return listaUF;
        });
    };
    ApiUltraService.prototype.getCEP = function (cep) {
        return this.http.get(API.CEP + cep);
    };
    ApiUltraService.prototype.getMunicipios = function () {
        var _this = this;
        return this.http.get(API.MUNICIPIOS)
            .map(function (listaMunicipios) {
            _this.listaMunicipios = listaMunicipios;
            return listaMunicipios;
        });
    };
    ApiUltraService.prototype.getCursos = function () {
        return this.http.get(API.GET_CURSOS);
    };
    ApiUltraService.prototype.getCategorias = function () {
        return this.http.get(API.GET_CATEGORIAS);
    };
    ApiUltraService.prototype.processarCupom = function (Cupom, valorCobrado, taxaMatricula) {
        return this.http.post(API.POST_PROCESS_CUPOM
            + '/' + Cupom
            + '/' + valorCobrado.toString()
            + '/' + taxaMatricula.toString(), {});
    };
    ApiUltraService.prototype.salvarMatricula = function (obj) {
        return this.http.post(API.SAVE_USER, obj);
    };
    ApiUltraService.prototype.validarCPF = function (cpf) {
        cpf = cpf.replace(/[^\d]+/g, '');
        if (cpf == '')
            return false;
        // Elimina CPFs invalidos conhecidos    
        if (cpf.length != 11 ||
            cpf == "00000000000" ||
            cpf == "11111111111" ||
            cpf == "22222222222" ||
            cpf == "33333333333" ||
            cpf == "44444444444" ||
            cpf == "55555555555" ||
            cpf == "66666666666" ||
            cpf == "77777777777" ||
            cpf == "88888888888" ||
            cpf == "99999999999")
            return false;
        // Valida 1o digito 
        var add = 0;
        for (var i = 0; i < 9; i++)
            add += parseInt(cpf.charAt(i)) * (10 - i);
        var rev = 11 - (add % 11);
        if (rev == 10 || rev == 11)
            rev = 0;
        if (rev != parseInt(cpf.charAt(9)))
            return false;
        // Valida 2o digito 
        add = 0;
        for (var i = 0; i < 10; i++)
            add += parseInt(cpf.charAt(i)) * (11 - i);
        rev = 11 - (add % 11);
        if (rev == 10 || rev == 11)
            rev = 0;
        if (rev != parseInt(cpf.charAt(10)))
            return false;
        return true;
    };
    ApiUltraService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ApiUltraService);
    return ApiUltraService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    // rootApi : 'https://inscricao.ultraposgraduacao.com.br/'
    rootApi: 'http://localhost:3002/'
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map