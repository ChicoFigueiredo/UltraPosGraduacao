import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ModalComponentEx } from "../modal/modal-ex.component";
import {
  DocumentoIdentidade,
  Farmacia,
  PaginationFarmacia,
  Endereco,
  Especialidade,
  UF,
  FarmaciaEquipe,
  CNAE,
  CNAEService,
  RedesSociais
} from "../../../../modulos/api";
import { FarmaciaService } from "../../../../modulos/api/api/farmacia.service";
import { CepService } from "../../../../modulos/cep/cep.service";
import { Observable } from "rxjs/Observable";

@Component({
  // tslint:disable-next-line:component-selector
  selector: "farmacias",
  templateUrl: "./farmacias.component.html",
  styleUrls: ["./farmacias.component.scss"]
})
export class FarmaciasComponent implements OnInit {
  public selObject: Farmacia = criarNovoFarmacia();
  public siteSelecionado: string = "";
  public pgFarmacia: PaginationFarmacia = <PaginationFarmacia>{};
  private tipoPesquisa: string = "nome";
  private ultimaQuery: string = "";
  public scopeList: string[] = [];
  public emissores: string[] = Object.values(DocumentoIdentidade.EmissorEnum);
  public ufs: string[] = Object.values(UF);
  public tiposEquipe: string[] = Object.values(FarmaciaEquipe.FuncaoEnum);
  public tiposEndereco: string[] = Object.values(Endereco.TipoEnum);
  public cnaes: Observable<CNAE[]>;

  constructor(
    private modalService: NgbModal,
    public farmacias: FarmaciaService,
    public cep: CepService,
    private sCNAE: CNAEService
  ) {
    // this.farmacias.getFarmacia(undefined,undefined,undefined,"30",1,"body",true).subscribe((lm:PaginationFarmacia) => {
    //   this.pgFarmacia = lm;
    // })
    this.navigationChange(1);
  }

  ngOnInit() {
    this.cnaes = this.sCNAE.getCNAECombo();
  }

  pesquisaNomeBarraBusca(event) {
    if (event.key === "Enter") {
      this.pesquisaNome(event.target.value);
    }
  }

  pesquisaNome(valor, pagina = 1) {
    pagina = isNaN(pagina) ? 1 : pagina;
    this.farmacias
      .getFarmacia(
        undefined,
        valor,
        undefined,
        undefined,
        10,
        pagina,
        "body",
        true
      )
      .subscribe((lm: PaginationFarmacia) => {
        this.tipoPesquisa = "nome";
        this.ultimaQuery = valor;
        this.pgFarmacia = lm;
        if (lm.total > 0) {
          this.selecionarObject(this.pgFarmacia.docs[0]);
        } else {
          this.selObject = criarNovoFarmacia();
        }
      });
  }

  // pesquisaCNPJ(value,pagina=1) {
  //   this.farmacias.getFarmacia(value,undefined,undefined,"10",pagina,"body",true).subscribe((lm:PaginationFarmacia) => {
  //     this.tipoPesquisa = "cnpj";
  //     this.ultimaQuery = value;
  //     this.pgFarmacia = lm;
  //     if (lm.total>0) {
  //       this.selObject = this.pgFarmacia.docs[0]
  //     } else  {
  //       this.selObject = <Farmacia>{nome:'', laboratorio:{nome:''}};
  //     }

  //   });
  // }

  pesquisaCodigo(value, pagina = 1) {
    this.farmacias
      .getFarmacia(
        undefined,
        undefined,
        undefined,
        value,
        10,
        pagina,
        "body",
        true
      )
      .subscribe((lm: PaginationFarmacia) => {
        this.tipoPesquisa = "codigo";
        this.ultimaQuery = value;
        this.pgFarmacia = lm;
        if (lm.total > 0) {
          this.selecionarObject(this.pgFarmacia.docs[0]);
        } else {
          this.selObject = criarNovoFarmacia();
        }
      });
  }

  navigationChange(page) {
    console.log(page);
    if(!isNaN(page)) {
      if (this.tipoPesquisa === "nome") {
        this.pesquisaNome(this.ultimaQuery, Number(page));
        // } else if(this.tipoPesquisa === 'cnpj'){
        //   this.pesquisaCNPJ(this.ultimaQuery,Number(page))
      } else if (this.tipoPesquisa === "codigo") {
        this.pesquisaCodigo(this.ultimaQuery, Number(page));
      }      
    };
  }

  addNovoFarmacia() {
    var nm: Farmacia = criarNovoFarmacia();
    const index = this.pgFarmacia.docs.push(nm);
    this.selObject = this.pgFarmacia.docs[index - 1];
    this.scopeList = [];
  }

  private ultimaBuscaValidaCEP: string;
  onKeyCEP($event, e: Endereco) {
    const testCEP: RegExp = /\d\d\d\d\d[-]\d\d\d/;
    const cep: string = $event.target.value;
    if (testCEP.test(cep)) {
      if (cep !== this.ultimaBuscaValidaCEP) {
        this.cep.getCEP(cep).subscribe((c: any) => {
          e.logradouro = c.logradouro;
          e.bairro = c.bairro;
          e.cidade = c.cidade;
          e.uf = c.estado;
          this.ultimaBuscaValidaCEP = cep;
        });
      }
    }
    return false;
  }

  // deleteTelefone(scope) {
  //   const posicao = this.selObject.telefones.indexOf(scope);
  //   if (posicao >= 0) {
  //     this.selObject.telefones.splice(posicao, 1);
  //   }
  // }

  // addTelefoneEnter(event) {
  //   if (event.key === "Enter") {
  //     this.addTelefone(event.target);
  //   }
  // }

  // addTelefone(campo) {
  //   const princ = campo.value;
  //   if (princ) {
  //     if (princ != undefined) {
  //       this.selObject.telefones.push(princ);
  //     }
  //   }
  // }

  // deleteEmail(scope) {
  //   const posicao = this.selObject.emails.indexOf(scope);
  //   if (posicao >= 0) {
  //     this.selObject.emails.splice(posicao, 1);
  //   }
  // }

  // addEmailEnter(event) {
  //   if (event.key === "Enter") {
  //     this.addEmail(event.target);
  //   }
  // }

  // addEmail(campo) {
  //   const princ = campo.value;
  //   if (princ) {
  //     if (princ != undefined) {
  //       this.selObject.emails.push(princ);
  //     }
  //   }
  // }

  // deleteHistorico(a) {
  //   const posicao = this.selObject.dadosMedicos.historicoMedico.indexOf(a);
  //   if (posicao >= 0) {
  //     this.selObject.dadosMedicos.historicoMedico.splice(posicao, 1);
  //   }
  // }

  // adicionaHistorico() {
  //   this.selObject.dadosMedicos.historicoMedico.push({data:'',descricao:''});
  // }

  deleteEquipe(a) {
    const posicao = this.selObject.equipe.indexOf(a);
    if (posicao >= 0) {
      this.selObject.equipe.splice(posicao, 1);
    }
  }

  adicionaEquipe() {
    this.selObject.equipe.push(criaEquipeLegalEmBranco());
  }

  selecionarObject($c) {
    this.selObject = $c;
    if (this.selObject) {
      if (!this.selObject.endereco)
        this.selObject.endereco = criaEnderecoEmBranco();
      if (!this.selObject.redesSociais)
        this.selObject.redesSociais = criaRedesSociaisEmBranco();
    } else {
      this.selObject = criarNovoFarmacia();
    }
  }

  salvarObject(f, obj: Farmacia) {
    if (!f.valid) {
      this.showModal(
        "Existem ainda erros que impedem a gravação, verifique os campos circundados em vermelho"
      );
    } else {
      if (obj.equipe){
        obj.equipe.forEach(e => {
          e.identidade.numero = Number(e.identidade.numero);
          e.identidade.validade = e.identidade.validade || "";
        });
      }
      console.log(JSON.stringify(obj, null, 3));
      if (this.selObject["_id"]) {
  
        this.farmacias.putFarmacia(obj, "body", true).subscribe(
          farmaciaSalvo => {
            if (farmaciaSalvo._id) {
              alert("Farmacia Salvo");
              this.selObject = farmaciaSalvo;
            }
          },
          err => {
            if (err) {
              console.log(err);
              alert("erro");
            }
          }
        );
      } else {

        this.farmacias.postFarmacia(obj, "body", true).subscribe(
          farmaciaSalvo => {
            if (farmaciaSalvo["_id"]) {
              alert("Farmacia Salvo");
              this.selObject = farmaciaSalvo;
            }
          },
          err => {
            if (err) {
              console.log(err);
              alert("erro");
            }
          }
        );
      }
    }
  }

  deleteObject(obj: Farmacia) {
    if (obj) {
      this.showDeleteModal(
        "Deseja realmente excluir esse médico: " + obj.nome + "?",
        () => {
          if (obj["_id"] != undefined) {
            // significa objeto existente
            this.farmacias
              .deleteFarmaciaById(obj["_id"], undefined, "body", true)
              .subscribe(obj => {
                if (this.tipoPesquisa === "nome") {
                  this.pesquisaNome(
                    this.ultimaQuery,
                    Number(this.pgFarmacia.page)
                  );
                }
                return true;
              });
            return true;
          } else {
            // deletar do array
            return true;
          }
        }
      );
    }
  }

  // private _timer_change_field_CRMValidade;
  // retardChangeFieldCRMValidade(value, time) {
  //   var value2 = value,
  //     __this = this;
  //   clearTimeout(this._timer_change_field_CRMValidade);
  //   this._timer_change_field_CRMValidade = setTimeout(() => {
  //     __this.selObject.identidade.validade = value2;
  //   }, time);
  // }

  // private _timer_change_field_Nascimento;
  // retardChangeFieldNascimento(value, time) {
  //   var value2 = value,
  //     __this = this;
  //   clearTimeout(this._timer_change_field_Nascimento);
  //   this._timer_change_field_Nascimento = setTimeout(() => {
  //     __this.selObject.nascimento = value2;
  //   }, time);
  // }


  // private _timer_change_field_DataHistorico;
  // retardChangeFieldDataHistorico(i,value, time) {
  //   var value2 = value,
  //     __this = this;
  //   clearTimeout(this._timer_change_field_DataHistorico);
  //   this._timer_change_field_DataHistorico = setTimeout(() => {
  //     if(__this.selObject.dadosMedicos.historicoMedico[i]){
  //       __this.selObject.dadosMedicos.historicoMedico[i].data = value2;
  //     }
  //   }, time);
  // }

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
    const v2 = Number(
      ev.target.value.replace(/[^0-9,-]/gim, "").replace(/[,]/gim, ".")
    );
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
    const activeModal = this.modalService.open(ModalComponentEx, {
      size: "sm",
      backdrop: "static",
      container: "nb-layout"
    });

    activeModal.componentInstance.addButtom("Excluir", evExcluir);
    activeModal.componentInstance.addButtom("Cancelar", "close");
    activeModal.componentInstance.modalHeader = "Alerta";
    activeModal.componentInstance.modalContent = msg;
  }

  showModal(msg, titulo = "Alerta") {
    const activeModal = this.modalService.open(ModalComponentEx, {
      size: "sm",
      backdrop: "static",
      container: "nb-layout"
    });

    activeModal.componentInstance.addButtom("Fechar", "close");
    activeModal.componentInstance.modalHeader = titulo;
    activeModal.componentInstance.modalContent = msg;
  }

  showStaticModal() {
    const activeModal = this.modalService.open(ModalComponentEx, {
      size: "sm",
      backdrop: "static",
      container: "nb-layout"
    });

    activeModal.componentInstance.addButtom("Fechar", "close");
    activeModal.componentInstance.modalHeader = "Alerta";
    activeModal.componentInstance.modalContent = `Ainda existem erros no cupom, verifique os campos em vermelho!`;
  }

  mensagem() {
    alert("comming-soon");
  }

  customSearchFn(term: string, item: Especialidade) {
    term = term.toLocaleLowerCase();
    return (
      item.descricao.toLocaleLowerCase().indexOf(term) > -1 ||
      item.sinonimos.filter(e => e.toLocaleLowerCase().indexOf(term) > -1)
        .length > 0
    );
  }

  concatArray(arr) {
    var strRes = "";
    arr.forEach(e => {
      strRes += (strRes.length > 0 ? ", " : "") + e;
    });
    return strRes;
  }
}

function criarNovoFarmacia() {
  return <Farmacia>{
    cnpj: null,
    nome: null,
    nomeFantasia:null,
    email: null,
    nascimento: null,
    numeroAutorizacao: "",
    licencaFuncionamento: "",
    inscricaoEstadual:"",
    endereco: criaEnderecoEmBranco(),
    equipe:[],
    foto: ""
  };
}

function criaEnderecoEmBranco() {
  return <Endereco>{
    tipo: "consultorio",
    cep: "",
    logradouro: "",
    numero: "",
    complemento: "",
    bairro: "",
    cidade: "",
    uf: "RJ",
    redesSociais: criaRedesSociaisEmBranco(),
    telefones: [],
    localizacao: { latitude: 0, longitude: 0 }
  };
}

function criaEquipeLegalEmBranco(){
  return <FarmaciaEquipe>{
    funcao:'atendente',
    cpf:null,
    nome:'',
    identidade:{
      numero:null,
      emissor: 'SSP',
      uf:'RJ',
      validade:null
    }
  }
}


function criaRedesSociaisEmBranco() {
  return <RedesSociais>{
    linkedin: "",
    facebook: "",
    instagram: "",
    snapchat: ""
  };
}
