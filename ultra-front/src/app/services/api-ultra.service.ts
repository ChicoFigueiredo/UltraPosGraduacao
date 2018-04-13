import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const API = {
  FIND_USER : `{$environment.rootApi}/api/alunos/find/`
};

@Injectable()
export class ApiUltraService {

  alunoAtual: any = null;

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

}
