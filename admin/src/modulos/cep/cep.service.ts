import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { toObservable } from '@angular/forms/src/validators';
import { Observable } from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const API = {
  UF: '//servicodados.ibge.gov.br/api/v1/localidades/estados',
  MUNICIPIOS: '//servicodados.ibge.gov.br/api/v1/localidades/municipios',
  CEP: '//api.postmon.com.br/v1/cep/',
};

@Injectable()
export class CepService {

  public alunoAtual: any = null;
  public listaUF: Array<any> = [];
  public listaMunicipios: Array<any> = [];

  constructor(
    public http: HttpClient,
  ) {
  }

  getUF() {
    return this.http.get(API.UF)
    .map((listaUF: Array<any>) => {
      this.listaUF = listaUF;
      return listaUF;
    });
  }

  getCEP(cep) {
    return this.http.get(API.CEP + cep);
  }

  getMunicipios() {
    return this.http.get(API.MUNICIPIOS)
    .map((listaMunicipios: Array<any>) => {
      this.listaMunicipios = listaMunicipios;
      return listaMunicipios;
    });
  }

  validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, '');
    while (cpf.length < 11){
       cpf = '0' + cpf;
    }
    if (cpf === '') { return false; }
    // Elimina CPFs invalidos conhecidos
    if (cpf.length !== 11 ||
        cpf === '00000000000' ||
        cpf === '11111111111' ||
        cpf === '22222222222' ||
        cpf === '33333333333' ||
        cpf === '44444444444' ||
        cpf === '55555555555' ||
        cpf === '66666666666' ||
        cpf === '77777777777' ||
        cpf === '88888888888' ||
        cpf === '99999999999') {
            return false;
    }
    // Valida 1o digito
    let add = 0;
    for (let i = 0; i < 9; i ++) {
        add += parseInt(cpf.charAt(i), 10) * (10 - i);
    }
    let rev = 11 - (add % 11);
    if (rev === 10 || rev === 11) {
        rev = 0;
    }
    if (rev !== parseInt(cpf.charAt(9), 10)) {
        return false;
    }
    // Valida 2o digito
    add = 0;
    for (let i = 0; i < 10; i ++) {
        add += parseInt(cpf.charAt(i), 10) * (11 - i);
    }
    rev = 11 - (add % 11);
    if (rev === 10 || rev === 11) {
        rev = 0;
    }
    if (rev !== parseInt(cpf.charAt(10), 10)) {
        return false;
    }
    return true;
  }
}
