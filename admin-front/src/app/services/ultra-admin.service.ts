import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import { Cupom } from './models/cupom';
import { Database } from './models/databases';

const URL = {
  getDatabases: `${environment.urlApi}/api/util/db/list`,
  getCupons2 : `${environment.urlApi}/api/cupom/list`,
  getCupons : (d) => `${environment.urlApi}/api/cupom/${d}/list`
}

@Injectable()
export class UltraAdminService {

  public bancos:Database[] = [new Database()];
  public bancosAtualizado:BehaviorSubject<any> = new BehaviorSubject<any>(this.bancos);

  public cupons:Map<string,Cupom[]> = new Map<string,Cupom[]>();
  public cupomAtualizado:BehaviorSubject<any> = new BehaviorSubject<any>(this.cupons);

  constructor(
    private http: HttpClient 
  ) {
    this.getDatabases().subscribe((ldb:Database[]) => {
      ldb.forEach((db) => {
        this.getCupons(db).subscribe(() => {});
      })
    })
    
  }

  getDatabases() {
    return this.http
    .get(URL.getDatabases)
    .map((d:Database[]) => {
      this.bancos = d;
      this.bancosAtualizado.next(d);
      return d;
    });
  };

  listaCupons(d){
    return this.cupons.get(d);
  }

  getCupons(d){
    return this.http
      .get(URL.getCupons(d))
      .map((c:Cupom[]) => {
        this.cupons.set(d,c);
        this.cupomAtualizado.next(c);
        return c;
      });
  }

}
