import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import { Cupom } from './models/cupom';
import { Site } from './models/site';
import { NbAuthService } from '@nebular/auth';

const URL = {
  getDatabases: `${environment.urlApi}/api/util/db/list`,
  getSites: `${environment.urlApi}/api/util/sites/list/cursos`,
  getCupons2 : `${environment.urlApi}/api/cupom/list`,
  getCupons : (d) => `${environment.urlApi}/api/cupom/${d}/list`,
  saveCupons : (d) => `${environment.urlApi}/api/cupom/${d}/save`,
  deleteCupons : (d,id) => `${environment.urlApi}/api/cupom/${d}/delete/${id}`
}

@Injectable()
export class UltraAdminService {

  public bancos:Site[] = [new Site()];
  public bancosAtualizado:BehaviorSubject<any> = new BehaviorSubject<any>(this.bancos);

  public cupons:Map<string,Cupom[]> = new Map<string,Cupom[]>();
  public cupomAtualizado:BehaviorSubject<any> = new BehaviorSubject<any>(this.cupons);

  constructor(
    private http: HttpClient ,
    private auth:NbAuthService
  ) {
    //this.cupons.set('',[new Cupom()]);
    this.restart();
    //this.getDatabases().subscribe(()=>{});
    this.auth.getToken().subscribe((tk) => {});
  }

  restart(){
    this.getDatabases().subscribe((ldb:Site[]) => {
      ldb.forEach((db) => {
        this.getCupons(db.valor).subscribe(() => {});
      })
    })
  }

  getDatabases() {
    return this.http
    .get(URL.getSites,{withCredentials:true})
    .map((d:Site[]) => {
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
      .get(URL.getCupons(d),{withCredentials:true})
      .map((c:Cupom[]) => {
        this.cupons.set(d,c);
        this.cupomAtualizado.next(c);
        return c;
      });
  }

  saveCupom(d,c){
    return this.http
      .post(URL.saveCupons(d),c,{withCredentials:true})
      .map((c) => {
        return c;
      });
  }

  deleteCupom(d,c){
    return this.http
      .delete(URL.deleteCupons(d,c._id),{withCredentials:true})
      .map((c) => {
        return c;
      });
  }
}
