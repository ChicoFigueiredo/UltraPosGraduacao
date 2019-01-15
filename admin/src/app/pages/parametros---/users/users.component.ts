import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponentEx } from '../modal/modal-ex.component';
import { User, PaginationUser, UserLinks } from '../../../../modulos/api';
import { UserService } from '../../../../modulos/api/api/user.service';
import { FarmaciaAtendentes } from '../../../../modulos/api/model/farmaciaAtendentes';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {

  public selObject: User = criarNovoUser();
  public siteSelecionado: string = '';
  public pgUser: PaginationUser = <PaginationUser>{};
  private tipoPesquisa:string = 'nome';
  private ultimaQuery:string = '';
  public scopeList:string[] = [];
  public scopeSelectList:string[] = ['write:medico','read:medico','write:paciente','read:paciente','write:farmacia','read:farmacia','write:medicamento','read:medicamento','write:receita','read:receita','role:medico','role:paciente','role:farmacia','role:atendente','role:admin']

  constructor(
    private modalService: NgbModal,
    public users: UserService,
  ) {
    // this.users.getUser(undefined,undefined,undefined,"30",1,"body",true).subscribe((lm:PaginationUser) => {
    //   this.pgUser = lm;
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
    this.users.getUser(valor,undefined,10,pagina,"body",true).subscribe((lm:PaginationUser) => {
      this.tipoPesquisa = "nome";
      this.ultimaQuery = valor;
      this.pgUser = lm;
      if (lm.total>0) {
        this.selObject = this.pgUser.docs[0]
      } else  {
        this.selObject = criarNovoUser();
      }
        
    });
  }

  // pesquisaCNPJ(value,pagina=1) {
  //   this.users.getUser(value,undefined,undefined,"10",pagina,"body",true).subscribe((lm:PaginationUser) => {
  //     this.tipoPesquisa = "cnpj";
  //     this.ultimaQuery = value;
  //     this.pgUser = lm;
  //     if (lm.total>0) {
  //       this.selObject = this.pgUser.docs[0]
  //     } else  {
  //       this.selObject = <User>{nome:'', laboratorio:{nome:''}};
  //     }
        
  //   });
  // }

  pesquisaCodigo(value,pagina=1) {
    this.users.getUser(undefined,value,10,pagina,"body",true).subscribe((lm:PaginationUser) => {
      this.tipoPesquisa = "codigo";
      this.ultimaQuery = value;
      this.pgUser = lm;
      if (lm.total>0) {
        this.selObject = this.pgUser.docs[0]
      } else  {
        this.selObject = criarNovoUser();
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

  addNovoUser(){
    var nm:User = criarNovoUser();
    const index = this.pgUser.docs.push(nm);
    this.selObject = this.pgUser.docs[index-1];
    this.scopeList = [];
  }

  deleteScope(scope){
    const posicao = this.scopeList.indexOf(scope);
    if (posicao >= 0) {
      this.scopeList.splice(posicao,1);
      this.selObject.scope = this.scopeList.join(' ');
    }
  }

  addScopeEnter(event){
    if (event.key === "Enter"){
      this.addScope(event.target);
    }
  }

  addScope(campo){
    const princ = campo.value;
    if (princ) {
      if (princ != undefined) {
        this.scopeList.push(princ);
        this.selObject.scope = this.scopeList.join(';');
        // campo.value = '';
      }
    }
  }

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
      if(this.selObject.scope){
        this.scopeList = this.selObject.scope.split(' ');
      } else {
        this.scopeList = [];
      }
    } else {
      this.scopeList = [];
    }
    
  }

  salvarObject(f,obj:User){
    if (!f.valid) {
      this.showModal('Existem ainda erros que impedem a gravação, verifique os campos circundados em vermelho');
    } else {
      if (this.selObject['_id']){
        this.users.putUser(obj,"body",true).subscribe((medicamentoSalvo) => {
          if (medicamentoSalvo._id){
            alert('User Salvo');
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
        this.users.postUser(obj,"body",true).subscribe((medicamentoSalvo) => {
          if (medicamentoSalvo['_id']){
            alert('User Salvo');
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

  deleteObject(obj:User) {
    if (obj) {
      this.showDeleteModal('Deseja realmente excluir esse medicamento: ' + obj.nome + '?',
      () => {
          if (obj['_id'] != undefined) { // significa objeto existente
            this.users.deleteUserById(obj['_id'],undefined,"body",true).subscribe((obj) => {
              if(this.tipoPesquisa === 'nome'){
                this.pesquisaNome(this.ultimaQuery,Number(this.pgUser.page));
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

function criarNovoUser(){
  return <User>{
    cpf: '',
    username:'',
    email:'',
    celular:'',
    nome:'',
    password:'',
    scope:'',
    links: criarUserLinks()
  }
}

function criarUserLinks(){
  return <UserLinks>{
    paciente:'000000000000000000000000',
    medico:'000000000000000000000000',
    farmacia:[{
      id:'000000000000000000000000',
      funcao: 'atendente'
    }]
  }
}
