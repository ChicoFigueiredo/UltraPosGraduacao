import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponentEx } from '../modal/modal-ex.component';
import { MedicamentoService } from '../../../../modulos/api/api/medicamento.service';
import { Medicamento, PaginationMedicamento, MedicamentoPrecos } from '../../../../modulos/api';
import { MedicamentoApresentacao } from '../../../../modulos/api/model/medicamentoApresentacao';
import { MedicamentoClasse } from '../../../../modulos/api/model/medicamentoClasse';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'medicamentos',
  templateUrl: './medicamentos.component.html',
  styleUrls: ['./medicamentos.component.scss'],
})
export class MedicamentosComponent implements OnInit {

  public selObject: Medicamento = criarNovoMedicamento();
  public siteSelecionado: string = '';
  public pgMedicamento: PaginationMedicamento = <PaginationMedicamento>{};
  private tipoPesquisa:string = 'nome';
  private ultimaQuery:string = '';
  public enumTarja:string[] = ['Tarja Preta', 'Tarja Vermelha', 'Venda Livre'];

  constructor(
    private modalService: NgbModal,
    public medicamentos: MedicamentoService,
  ) {
    // this.medicamentos.getMedicamento(undefined,undefined,undefined,"30",1,"body",true).subscribe((lm:PaginationMedicamento) => {
    //   this.pgMedicamento = lm;
    // })
  }

  ngOnInit() {

  }

  pesquisaNomeBarraBusca(event) {
    if (event.key === "Enter") {
      this.pesquisaNome(event.target.value);
    }
  }

  pesquisaNome(valor, pagina=1){
    pagina = isNaN(pagina) ? 1 : pagina;
    this.medicamentos.getMedicamento(undefined,valor,undefined,"10",pagina,"body",true).subscribe((lm:PaginationMedicamento) => {
      this.tipoPesquisa = "nome";
      this.ultimaQuery = valor;
      this.pgMedicamento = lm;
      if (lm.total>0) {
        this.selObject = this.pgMedicamento.docs[0]
      } else  {
        this.selObject = <Medicamento>{nome:'', laboratorio:{nome:''}};
      }
        
    });
  }

  pesquisaCNPJ(value,pagina=1) {
    this.medicamentos.getMedicamento(value,undefined,undefined,"10",pagina,"body",true).subscribe((lm:PaginationMedicamento) => {
      this.tipoPesquisa = "cnpj";
      this.ultimaQuery = value;
      this.pgMedicamento = lm;
      if (lm.total>0) {
        this.selObject = this.pgMedicamento.docs[0]
      } else  {
        this.selObject = <Medicamento>{nome:'', laboratorio:{nome:''}};
      }
        
    });
  }

  pesquisaCodigo(value,pagina=1) {
    this.medicamentos.getMedicamento(undefined,undefined,value,"10",pagina,"body",true).subscribe((lm:PaginationMedicamento) => {
      this.tipoPesquisa = "codigo";
      this.ultimaQuery = value;
      this.pgMedicamento = lm;
      if (lm.total>0) {
        this.selObject = this.pgMedicamento.docs[0]
      } else  {
        this.selObject = <Medicamento>{nome:'', laboratorio:{nome:''}};
      }
        
    });
  }

  navigationChange(page){
    console.log(page);
    if(this.tipoPesquisa === 'nome'){
      this.pesquisaNome(this.ultimaQuery,Number(page))
    } else if(this.tipoPesquisa === 'cnpj'){
      this.pesquisaCNPJ(this.ultimaQuery,Number(page))
    } else if(this.tipoPesquisa === 'codigo'){
      this.pesquisaCodigo(this.ultimaQuery,Number(page))
    }
  }

  addNovoMedicamento(){
    var nm:Medicamento = criarNovoMedicamento();
    const index = this.pgMedicamento.docs.push(nm);
    this.selObject = this.pgMedicamento.docs[index-1];
  }

  deletePrincipio(princ){
    const posicao = this.selObject.principiosAtivos.indexOf(princ);
    if (posicao >= 0) {
      this.selObject.principiosAtivos.splice(posicao,1);
      this.selObject.principio = this.selObject.principiosAtivos.join(';');
    }
  }

  addPrincipioEnter(event){
    if (event.key === "Enter"){
      this.addPrincipio(event.target);
    }
  }

  addPrincipio(campo){
    const princ = campo.value;
    if (princ) {
      if (princ != undefined) {
        this.selObject.principiosAtivos.push(princ);
        this.selObject.principio = this.selObject.principiosAtivos.join(';');
        campo.value = '';
      }
    }
  }

  deleteApresentacao(a){
    const posicao = this.selObject.apresentacao.indexOf(a);
    if (posicao >= 0) {
      this.selObject.apresentacao.splice(posicao,1);
    }
  }

  adicionaApresentacao(){
    this.selObject.apresentacao.push(criaApresentacaoEmBranco());
  }

  selectObject($c) {
    this.selObject = $c;
  }

  salvarObject(f,obj:Medicamento){
    if (!f.valid || this.selObject.principiosAtivos.length == 0) {
      this.showModal('Existem ainda erros que impedem a gravação, verifique os campos circundados em vermelho');
    } else {
      if (this.selObject['_id']){
        this.medicamentos.putMedicamento(obj,"body",true).subscribe((medicamentoSalvo) => {
          if (medicamentoSalvo._id){
            alert('Medicamento Salvo');
            this.selObject = medicamentoSalvo;
          }
        },
        (err) => {
          if (err) {
            console.log(err);
            alert('erro')
          }
        })
      } else {
        obj.laboratorio.cnpj = Number(obj.laboratorio.cnpj);
        this.medicamentos.postMedicamento(obj,"body",true).subscribe((medicamentoSalvo) => {
          if (medicamentoSalvo['_id']){
            alert('Medicamento Salvo');
            this.selObject = medicamentoSalvo;
          }
        },
        (err) => {
          if (err) {
            console.log(err);
            alert('erro')
          }
        })
      }    
    }
  }

  deleteObject(obj:Medicamento) {
    if (obj) {
      this.showDeleteModal('Deseja realmente excluir esse medicamento: ' + obj.nome + '?',
      () => {
          if (obj['_id'] != undefined) { // significa objeto existente
            this.medicamentos.deleteMedicamentoById(obj['_id'],undefined,"body",true).subscribe((obj) => {
              if(this.tipoPesquisa === 'nome'){
                this.pesquisaNome(this.ultimaQuery,Number(this.pgMedicamento.page));
              }
              return true;
            });
            return true;
          } else {
            // deletar do array
            return true;
          }
        },
      )
    }
    
  }

  // chPercent(campo, valor) {
  //   const v2 = Number(valor.replace(/[^0-9,]/gmi, '').replace(/[,]/gmi, '.'));
  //   if (v2) {
  //     if (v2 < 1) {
  //       this.selCupom[campo]  = v2
  //     } else {
  //       this.selCupom[campo]  = v2 / 100
  //     }
  //   }
  // }

  // chValor2(campo, valor) {
  //   const v2 = Number(valor.replace(/[^0-9,-]/gmi, '').replace(/[,]/gmi, '.'));
  //   if (v2) {
  //     this.selCupom[campo] = v2;
  //   }
  // }

  chValor(ev) {
    const v2 = Number(ev.target.value.replace(/[^0-9,-]/gmi, '').replace(/[,]/gmi, '.'));
    if (v2) {
      //this.selCupom[campo] = v2;
    }
  }

  onSubmit(f, d) {
    return false;
    // if (!f.valid) {
    //   this.showModal('Existem ainda erros na gravação, verifique');
    // } else {
    // }
  }

  showDeleteModal(msg, evExcluir) {
    const activeModal =
      this.modalService.open(ModalComponentEx, {size: 'sm', backdrop: 'static', container: 'nb-layout'});

    activeModal.componentInstance.addButtom('Excluir', evExcluir);
    activeModal.componentInstance.addButtom('Cancelar', 'close');
    activeModal.componentInstance.modalHeader = 'Alerta';
    activeModal.componentInstance.modalContent = msg;
  }

  showModal(msg, titulo = 'Alerta') {
    const activeModal =
      this.modalService.open(ModalComponentEx, {size: 'sm', backdrop: 'static', container: 'nb-layout' });

    activeModal.componentInstance.addButtom('Fechar', 'close');
    activeModal.componentInstance.modalHeader = titulo;
    activeModal.componentInstance.modalContent = msg;
  }


  showStaticModal() {
    const activeModal =
      this.modalService.open(ModalComponentEx, {size: 'sm', backdrop: 'static', container: 'nb-layout'});

    activeModal.componentInstance.addButtom('Fechar', 'close');
    activeModal.componentInstance.modalHeader = 'Alerta';
    activeModal.componentInstance.modalContent = `Ainda existem erros no cupom, verifique os campos em vermelho!`;
  }

  mensagem(){
    alert('comming-soon');
  }
}

function criarNovoMedicamento(){
  return <Medicamento>{
    laboratorio : { cnpj: 0, nome: ''},
    principiosAtivos: [],
    tarja: 'Venda Livre',
    apresentacao : [criaApresentacaoEmBranco()],
    classe: { codigo: '00', descricao: 'desc' },
    tipo: 'Genérico',
    restricaoHospitalar: false,
    medicamentoReferencia: {_id:'5b3e098351fd6b437cf42b06', nome:'A SAÚDE DA MULHER'},
    tags: [{id:0, name:'uai'}]
  }
}

function criaApresentacaoEmBranco(){
  return <MedicamentoApresentacao>{
    precos: [
      { classe: 'fabrica-custo', preco: 0.0 },
      { classe: 'fabrica-12', preco: 0.0 },
      { classe: 'fabrica-17', preco: 0.0 },
      { classe: 'fabrica-17-alc', preco: 0.0 },
      { classe: 'fabrica-17,5', preco: 0.0 },
      { classe: 'fabrica-17,5-alc', preco: 0.0 },
      { classe: 'fabrica-18', preco: 0.0 },
      { classe: 'fabrica-18-alc', preco: 0.0 },
      { classe: 'fabrica-20', preco: 0.0 },
      { classe: 'consumidor-custo', preco: 0.0 },
      { classe: 'consumidor-12', preco: 0.0 },
      { classe: 'consumidor-17', preco: 0.0 },
      { classe: 'consumidor-17-alc', preco: 0.0 },
      { classe: 'consumidor-17,5', preco: 0.0 },
      { classe: 'consumidor-17,5-alc', preco: 0.0 },
      { classe: 'consumidor-18', preco: 0.0 },
      { classe: 'consumidor-18-alc', preco: 0.0 },
      { classe: 'consumidor-20', preco: 0.0 },
    ]
  }
}
