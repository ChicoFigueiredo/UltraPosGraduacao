webpackJsonp(["modulos.module"],{

/***/ "./src/app/modulos/modulos-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModulosRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__usuarios_usuarios_lista_usuarios_lista_component__ = __webpack_require__("./src/app/modulos/usuarios/usuarios-lista/usuarios-lista.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_pages_component__ = __webpack_require__("./src/app/pages/pages.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        children: [{
                path: 'usuario',
                component: __WEBPACK_IMPORTED_MODULE_3__pages_pages_component__["a" /* PagesComponent */],
                children: [
                    {
                        path: 'lista',
                        component: __WEBPACK_IMPORTED_MODULE_2__usuarios_usuarios_lista_usuarios_lista_component__["a" /* UsuariosListaComponent */],
                    }
                ],
            },
        ],
    },
];
var ModulosRoutingModule = /** @class */ (function () {
    function ModulosRoutingModule() {
    }
    ModulosRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */],
            ]
        })
    ], ModulosRoutingModule);
    return ModulosRoutingModule;
}());



/***/ }),

/***/ "./src/app/modulos/modulos.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModulosModule", function() { return ModulosModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modulos_routing_module__ = __webpack_require__("./src/app/modulos/modulos-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__usuarios_usuarios_lista_usuarios_lista_component__ = __webpack_require__("./src/app/modulos/usuarios/usuarios-lista/usuarios-lista.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__theme_theme_module__ = __webpack_require__("./src/app/@theme/theme.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_pages_module__ = __webpack_require__("./src/app/pages/pages.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ModulosModule = /** @class */ (function () {
    function ModulosModule() {
    }
    ModulosModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__theme_theme_module__["a" /* ThemeModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__modulos_routing_module__["a" /* ModulosRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_6__pages_pages_module__["PagesModule"],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__usuarios_usuarios_lista_usuarios_lista_component__["a" /* UsuariosListaComponent */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__usuarios_usuarios_lista_usuarios_lista_component__["a" /* UsuariosListaComponent */],
            ]
        })
    ], ModulosModule);
    return ModulosModule;
}());



/***/ }),

/***/ "./src/app/modulos/usuarios/usuarios-lista/usuarios-lista.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-12\">\n        Hai\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/modulos/usuarios/usuarios-lista/usuarios-lista.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modulos/usuarios/usuarios-lista/usuarios-lista.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuariosListaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UsuariosListaComponent = /** @class */ (function () {
    function UsuariosListaComponent() {
    }
    UsuariosListaComponent.prototype.ngOnInit = function () {
    };
    UsuariosListaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-usuarios-lista',
            template: __webpack_require__("./src/app/modulos/usuarios/usuarios-lista/usuarios-lista.component.html"),
            styles: [__webpack_require__("./src/app/modulos/usuarios/usuarios-lista/usuarios-lista.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], UsuariosListaComponent);
    return UsuariosListaComponent;
}());



/***/ })

});
//# sourceMappingURL=modulos.module.chunk.js.map