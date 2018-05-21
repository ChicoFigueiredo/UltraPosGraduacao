import { Component, OnInit } from '@angular/core';
import { UltraAdminService } from './../../../services/ultra-admin.service';
import { Cupom } from './../../../services/models/cupom';

@Component({
  selector: 'cupons',
  templateUrl: './cupons.component.html',
  styleUrls: ['./cupons.component.scss']
})
export class CuponsComponent implements OnInit {

  public selCupom:Cupom = new Cupom();

  constructor(
    public ultra: UltraAdminService
  ) { 
    this.ultra.cupomAtualizado.subscribe((c) => {
      if(this.ultra.cupons){
        if(this.ultra.cupons[0]){
          this.selCupom = this.ultra.cupons[0];
        }
      }
    })
  }

  ngOnInit() {
  }

  selectCupom($c){
    this.selCupom = $c;
  }

  chPercent(campo,valor){
    const v2 = Number(valor.replace(/[^0-9,]/gmi,'').replace(/[,]/gmi,'.'));
    if (v2){
      if(v2 < 1) {
        this.selCupom[campo]  = v2
      } else {
        this.selCupom[campo]  = v2 / 100
      }
    }
  }

  chValor(campo,valor){
    const v2 = Number(valor.replace(/[^0-9,]/gmi,'').replace(/[,]/gmi,'.'));
    if (v2){
      this.selCupom[campo] = v2;
    }
  }

  addNewCupom() {
    const n = this.ultra.cupons.push(new Cupom());
    this.selCupom = this.ultra.cupons[n-1];
  }

  onSubmit(f){
    
  }
}
