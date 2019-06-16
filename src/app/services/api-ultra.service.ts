import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'


// import { toObservable } from '@angular/forms/src/validators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const API = {
  FIND_USER : environment.rootApi + 'api/alunos/find/',
  SAVE_USER : environment.rootApi + 'api/matricula/inscrever',
  GET_CATEGORIAS: environment.rootApi + 'api/categorias/list',
  GET_CURSOS: environment.rootApi + 'api/cursos/list',
  POST_PROCESS_CUPOM: environment.rootApi + 'api/cupom/calcula',
  UF: '//servicodados.ibge.gov.br/api/v1/localidades/estados',
  MUNICIPIOS: '//servicodados.ibge.gov.br/api/v1/localidades/municipios',
  CEP: '//api.postmon.com.br/v1/cep/',
};

@Injectable()
export class ApiUltraService {

  public alunoAtual: any = null;
  public listaUF: Array<any> = [];
  public listaMunicipios: Array<any> = [];

  constructor(
    public http: HttpClient,
  ) {
  }

  findUser(cpf): Observable<any> {
    return this.http.get<any>(API.FIND_USER + cpf).pipe(
      map((aluno) => {
        this.alunoAtual = aluno;
        return aluno;
      }));
  }

  getUF() {
    return this.http.get(API.UF).pipe(
    map((listaUF: Array<any>) => {
      this.listaUF = listaUF;
      return listaUF;
    }));
  }

  getCEP(cep) {
    return this.http.get(API.CEP + cep).pipe(map(cep => cep));
  }

  getMunicipios() {
    return this.http.get(API.MUNICIPIOS).pipe(
    map((listaMunicipios: Array<any>) => {
      this.listaMunicipios = listaMunicipios;
      return listaMunicipios;
    }));
  }

  getCursos() {
    return this.http.get(API.GET_CURSOS).pipe(
      map((cursos) => {
        return cursos;
      }));
  }

  getCategorias() {
    return this.http.get(API.GET_CATEGORIAS).pipe(
      map((categorias) => {
        return categorias;
      }));
  }

  processarCupom(Cupom: string, valorCobrado: number, taxaMatricula: number) {
    return this.http.post(API.POST_PROCESS_CUPOM
      + '/' + Cupom
      + '/' + valorCobrado.toString()
      + '/' + taxaMatricula.toString(), {}
        ).pipe(
          map((cupom) => {
            return cupom;
          }));;
        // .catch((err, c: any) => {
        //   return new Observable<any>(err); // err.error;
        // });
  }

  salvarMatricula(obj) {
    return this.http.post(API.SAVE_USER, obj);
  }

  validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, '');
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
