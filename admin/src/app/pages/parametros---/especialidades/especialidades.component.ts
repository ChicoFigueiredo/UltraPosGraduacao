import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponentEx } from '../modal/modal-ex.component';
import { FarmaciaAtendentes } from '../../../../modulos/api/model/farmaciaAtendentes';
import { Especialidade } from '../../../../modulos/api/model/especialidade';
import { PaginationEspecialidade } from '../../../../modulos/api/model/paginationEspecialidade';
import { EspecialidadeService } from '../../../../modulos/api/api/especialidade.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'especialidades',
  templateUrl: './especialidades.component.html',
  styleUrls: ['./especialidades.component.scss'],
})
export class EspecialidadesComponent implements OnInit {

  public selObject: Especialidade = criarNovoEspecialidade();
  public siteSelecionado: string = '';
  public pgEspecialidade: PaginationEspecialidade = <PaginationEspecialidade>{};
  private tipoPesquisa:string = 'nome';
  private ultimaQuery:string = '';
  public scopeList:string[] = [];
  public scopeSelectList:string[] = ['write:medico','read:medico','write:paciente','read:paciente','write:farmacia','read:farmacia','write:medicamento','read:medicamento','write:receita','read:receita','role:medico','role:paciente','role:farmacia','role:atendente','role:admin']

  constructor(
    private modalService: NgbModal,
    public especialidades: EspecialidadeService,
  ) {
    // this.especialidades.getEspecialidade(undefined,undefined,undefined,"30",1,"body",true).subscribe((lm:PaginationEspecialidade) => {
    //   this.pgEspecialidade = lm;
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
    this.especialidades.getEspecialidade(valor,undefined,10,pagina,"body",true).subscribe((lm:PaginationEspecialidade) => {
      this.tipoPesquisa = "nome";
      this.ultimaQuery = valor;
      this.pgEspecialidade = lm;
      if (lm.total>0) {
        this.selObject = this.pgEspecialidade.docs[0]
      } else  {
        this.selObject = criarNovoEspecialidade();
      }
        
    });
  }

  // pesquisaCNPJ(value,pagina=1) {
  //   this.especialidades.getEspecialidade(value,undefined,undefined,"10",pagina,"body",true).subscribe((lm:PaginationEspecialidade) => {
  //     this.tipoPesquisa = "cnpj";
  //     this.ultimaQuery = value;
  //     this.pgEspecialidade = lm;
  //     if (lm.total>0) {
  //       this.selObject = this.pgEspecialidade.docs[0]
  //     } else  {
  //       this.selObject = <Especialidade>{nome:'', laboratorio:{nome:''}};
  //     }
        
  //   });
  // }

  pesquisaCodigo(value,pagina=1) {
    this.especialidades.getEspecialidade(undefined,value,10,pagina,"body",true).subscribe((lm:PaginationEspecialidade) => {
      this.tipoPesquisa = "codigo";
      this.ultimaQuery = value;
      this.pgEspecialidade = lm;
      if (lm.total>0) {
        this.selObject = this.pgEspecialidade.docs[0]
      } else  {
        this.selObject = criarNovoEspecialidade();
      }
        
    });
  }

  navigationChange(page){
    console.log(page);
    if(this.tipoPesquisa === 'nome'){
      this.pesquisaNome(this.ultimaQuery,Number(page))
    // } else if(this.tipoPesquisa === 'cnpj'){
    //   this.pesquisaCNPJ(this.ultimaQuery,Number(page))
    } else if(this.tipoPesquisa === 'codigo'){
      this.pesquisaCodigo(this.ultimaQuery,Number(page))
    }
  }

  addNovoEspecialidade(){
    var nm:Especialidade = criarNovoEspecialidade();
    const index = this.pgEspecialidade.docs.push(nm);
    this.selObject = this.pgEspecialidade.docs[index-1];
    this.scopeList = [];
  }

  // deleteScope(scope){
  //   const posicao = this.scopeList.indexOf(scope);
  //   if (posicao >= 0) {
  //     this.scopeList.splice(posicao,1);
  //     this.selObject.scope = this.scopeList.join(' ');
  //   }
  // }

  // addScopeEnter(event){
  //   if (event.key === "Enter"){
  //     this.addScope(event.target);
  //   }
  // }

  // addScope(campo){
  //   const princ = campo.value;
  //   if (princ) {
  //     if (princ != undefined) {
  //       this.scopeList.push(princ);
  //       this.selObject.scope = this.scopeList.join(';');
  //       // campo.value = '';
  //     }
  //   }
  // }

  // deleteApresentacao(a){
  //   const posicao = this.selObject.apresentacao.indexOf(a);
  //   if (posicao >= 0) {
  //     this.selObject.apresentacao.splice(posicao,1);
  //   }
  // }

  // adicionaApresentacao(){
  //   this.selObject.apresentacao.push(criaApresentacaoEmBranco());
  // }

  selecionarObject($c) {
    this.selObject = $c;
    if(this.selObject){
      // if(this.selObject.scope){
      //   this.scopeList = this.selObject.scope.split(' ');
      // } else {
      //   this.scopeList = [];
      // }
    } else {
      this.scopeList = [];
    }
    
  }

  salvarObject(f,obj:Especialidade){
    if (!f.valid) {
      this.showModal('Existem ainda erros que impedem a gravação, verifique os campos circundados em vermelho');
    } else {
      if (this.selObject['_id']){
        this.especialidades.putEspecialidade(obj,"body",true).subscribe((medicamentoSalvo) => {
          if (medicamentoSalvo._id){
            alert('Especialidade Salvo');
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
        // obj.cpf = Number(obj.cpf);
        this.especialidades.postEspecialidade(obj,"body",true).subscribe((medicamentoSalvo) => {
          if (medicamentoSalvo['_id']){
            alert('Especialidade Salvo');
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

  deleteObject(obj:Especialidade) {
    if (obj) {
      this.showDeleteModal('Deseja realmente excluir esse medicamento: ' + obj.descricao + '?',
      () => {
          if (obj['_id'] != undefined) { // significa objeto existente
            this.especialidades.deleteEspecialidadeById(obj['_id'],undefined,"body",true).subscribe((obj) => {
              if(this.tipoPesquisa === 'nome'){
                this.pesquisaNome(this.ultimaQuery,Number(this.pgEspecialidade.page));
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

function criarNovoEspecialidade(){
  return <Especialidade>{
    codigo: '',
    descricao: ''
  }
}

// function criarEspecialidadeLinks(){
//   return <EspecialidadeLinks>{
//     paciente:'000000000000000000000000',
//     medico:'000000000000000000000000',
//     farmacia:[{
//       id:'000000000000000000000000',
//       funcao: 'atendente'
//     }]
//   }
// }
