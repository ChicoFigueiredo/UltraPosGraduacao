import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import { Cupom } from './models/cupom';

const URL = {
  getCupons : `${environment.urlApi}/api/cupom/list`
}

@Injectable()
export class UltraAdminService {

  public cupons:Cupom[] = [new Cupom()];
  public cupomAtualizado:BehaviorSubject<any> = new BehaviorSubject<any>(this.cupons);

  constructor(
    private http: HttpClient 
  ) { 
    this.getCupons().subscribe(() => {});
  }


  getCupons(){
    return this.http
      .get(URL.getCupons)
      .map((c:Cupom[]) => {
        this.cupons = c;
        this.cupomAtualizado.next(c);
        return c;
      });
  }

}
