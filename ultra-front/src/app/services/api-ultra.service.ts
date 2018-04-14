import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const API = {
  FIND_USER : environment.rootApi + 'api/alunos/find/',
  SAVE_USER : environment.rootApi + 'api/alunos/save',
  GET_CATEGORIAS: environment.rootApi + 'api/categorias/list',
  GET_CURSOS: environment.rootApi + 'api/cursos/list',
  UF: '//servicodados.ibge.gov.br/api/v1/localidades/estados',
  MUNICIPIOS: '//servicodados.ibge.gov.br/api/v1/localidades/municipios'
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

  findUser(cpf) {
    return this.http.get(API.FIND_USER + cpf)
      .map((aluno) => {
        this.alunoAtual = aluno;
        return aluno;
      });
  }

  getUF() {
    return this.http.get(API.UF)
    .map((listaUF: Array<any>) => {
      this.listaUF = listaUF;
      return listaUF;
    });
  }

  getMunicipios() {
    return this.http.get(API.MUNICIPIOS)
    .map((listaMunicipios: Array<any>) => {
      this.listaMunicipios = listaMunicipios;
      return listaMunicipios;
    });
  }

  getCursos() {
    return this.http.get(API.GET_CURSOS);
  }

  getCategorias() {
    return this.http.get(API.GET_CATEGORIAS);
  }

  salvarMatricula(obj) {
    return this.http.post(API.SAVE_USER, obj);
  }

}
