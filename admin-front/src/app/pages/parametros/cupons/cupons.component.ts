import { Component, OnInit } from '@angular/core';
import { UltraAdminService } from './../../../services/ultra-admin.service';
import { Cupom } from './../../../services/models/cupom';
import { Database } from './../../../services/models/databases';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponentEx } from './modal/modal-ex.component';

@Component({
  selector: 'cupons',
  templateUrl: './cupons.component.html',
  styleUrls: ['./cupons.component.scss']
})
export class CuponsComponent implements OnInit {

  public selCupom:Cupom = new Cupom();
  public siteSelecionado:string='';

  constructor(
    public ultra: UltraAdminService,
    private modalService: NgbModal,
  ) { 
    this.ultra.bancosAtualizado.subscribe((d:Database[]) => {
      this.siteSelecionado = d[0].value;
      this.ultra.cupomAtualizado.subscribe((c) => {
        if(this.ultra.cupons.get(this.siteSelecionado)){
          if(this.ultra.cupons.get(this.siteSelecionado)[0]){
            this.selCupom = this.ultra.cupons.get(this.siteSelecionado)[0];
          }
        }
      })
    });
    
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
    const v2 = Number(valor.replace(/[^0-9,-]/gmi,'').replace(/[,]/gmi,'.'));
    if (v2){
      this.selCupom[campo] = v2;
    }
  }

  addNewCupom(d) {
    let n = this.ultra.cupons.get(d).push(new Cupom());
    this.selCupom = this.ultra.cupons.get(d)[n-1];
  }

  onSubmit(f){
    if (!f.valid) {
      this.showStaticModal()
      // alert('Existem ainda erros na gravação, verifique');
    }
  }

  
  showStaticModal() {
    const activeModal = this.modalService.open(ModalComponentEx, {size: 'sm', backdrop: 'static', container: 'nb-layout',});

    activeModal.componentInstance.addButtom('Fechar','close');
    activeModal.componentInstance.modalHeader = 'Alerta';
    activeModal.componentInstance.modalContent = `Ainda existem erros no cupom, verifique os campos em vermelho!`;
  }

}
