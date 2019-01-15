import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ModalComponentEx } from "../modal/modal-ex.component";
import {
  DocumentoIdentidade,
  Paciente,
  PaginationPaciente,
  Endereco,
  Especialidade,
  PacienteDadosMedicos,
  PacienteFiliacao,
  PacienteDadosMedicosTipoSanguineo,
  UF,
  PacienteRepresentantesLegais
} from "../../../../modulos/api";
import { PacienteService } from "../../../../modulos/api/api/paciente.service";
import { CepService } from "../../../../modulos/cep/cep.service";
import { Observable } from "rxjs/Observable";
import { EspecialidadeService } from "../../../../modulos/api/api/especialidade.service";
@Component({
  // tslint:disable-next-line:component-selector
  selector: "pacientes",
  templateUrl: "./pacientes.component.html",
  styleUrls: ["./pacientes.component.scss"]
})
export class PacientesComponent implements OnInit {
  public selObject: Paciente = criarNovoPaciente();
  public siteSelecionado: string = "";
  public pgPaciente: PaginationPaciente = <PaginationPaciente>{};
  private tipoPesquisa: string = "nome";
  private ultimaQuery: string = "";
  public scopeList: string[] = [];
  public emissores: string[] = Object.values(DocumentoIdentidade.EmissorEnum);
  public ufs: string[] = Object.values(UF);
  public sexos: string[] = Object.values(Paciente.SexoEnum);
  public estadoscivies: string[] = Object.values(Paciente.EstadoCivilEnum);
  public etnias: string[] = Object.values(Paciente.EtniaEnum);
  public escolaridades: string[] = Object.values(Paciente.EscolaridadeEnum);
  public tiposEndereco: string[] = Object.values(Endereco.TipoEnum);
  public abos: string[] = Object.values(PacienteDadosMedicosTipoSanguineo.AboEnum);
  public rhs: string[] = Object.values(PacienteDadosMedicosTipoSanguineo.RhEnum);
  public especialidades: Observable<Especialidade[]>;

  constructor(
    private modalService: NgbModal,
    public pacientes: PacienteService,
    public cep: CepService,
    private esp: EspecialidadeService
  ) {
    // this.pacientes.getPaciente(undefined,undefined,undefined,"30",1,"body",true).subscribe((lm:PaginationPaciente) => {
    //   this.pgPaciente = lm;
    // })
  }

  ngOnInit() {
    this.especialidades = this.esp.getEspecialidadeCombo();
  }

  pesquisaNomeBarraBusca(event) {
    if (event.key === "Enter") {
      this.pesquisaNome(event.target.value);
    }
  }

  pesquisaNome(valor, pagina = 1) {
    pagina = isNaN(pagina) ? 1 : pagina;
    this.pacientes
      .getPaciente(
        undefined,
        valor,
        undefined,
        undefined,
        10,
        pagina,
        "body",
        true
      )
      .subscribe((lm: PaginationPaciente) => {
        this.tipoPesquisa = "nome";
        this.ultimaQuery = valor;
        this.pgPaciente = lm;
        if (lm.total > 0) {
          this.selecionarObject(this.pgPaciente.docs[0]);
        } else {
          this.selObject = criarNovoPaciente();
        }
      });
  }

  // pesquisaCNPJ(value,pagina=1) {
  //   this.pacientes.getPaciente(value,undefined,undefined,"10",pagina,"body",true).subscribe((lm:PaginationPaciente) => {
  //     this.tipoPesquisa = "cnpj";
  //     this.ultimaQuery = value;
  //     this.pgPaciente = lm;
  //     if (lm.total>0) {
  //       this.selObject = this.pgPaciente.docs[0]
  //     } else  {
  //       this.selObject = <Paciente>{nome:'', laboratorio:{nome:''}};
  //     }

  //   });
  // }

  pesquisaCodigo(value, pagina = 1) {
    this.pacientes
      .getPaciente(
        undefined,
        undefined,
        undefined,
        value,
        10,
        pagina,
        "body",
        true
      )
      .subscribe((lm: PaginationPaciente) => {
        this.tipoPesquisa = "codigo";
        this.ultimaQuery = value;
        this.pgPaciente = lm;
        if (lm.total > 0) {
          this.selecionarObject(this.pgPaciente.docs[0]);
        } else {
          this.selObject = criarNovoPaciente();
        }
      });
  }

  navigationChange(page) {
    console.log(page);
    if (this.tipoPesquisa === "nome") {
      this.pesquisaNome(this.ultimaQuery, Number(page));
      // } else if(this.tipoPesquisa === 'cnpj'){
      //   this.pesquisaCNPJ(this.ultimaQuery,Number(page))
    } else if (this.tipoPesquisa === "codigo") {
      this.pesquisaCodigo(this.ultimaQuery, Number(page));
    }
  }

  addNovoPaciente() {
    var nm: Paciente = criarNovoPaciente();
    const index = this.pgPaciente.docs.push(nm);
    this.selObject = this.pgPaciente.docs[index - 1];
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

  deleteHistorico(a) {
    const posicao = this.selObject.dadosMedicos.historicoMedico.indexOf(a);
    if (posicao >= 0) {
      this.selObject.dadosMedicos.historicoMedico.splice(posicao, 1);
    }
  }

  adicionaHistorico() {
    this.selObject.dadosMedicos.historicoMedico.push({data:'',descricao:''});
  }

  deleteRepresentante(a) {
    const posicao = this.selObject.representantesLegais.indexOf(a);
    if (posicao >= 0) {
      this.selObject.representantesLegais.splice(posicao, 1);
    }
  }

  adicionaRepresentante() {
    this.selObject.representantesLegais.push(criaRepresentanteLegalEmBranco());
  }

  selecionarObject($c) {
    this.selObject = $c;
    if (this.selObject) {
      if (!this.selObject.dadosMedicos)
        this.selObject.dadosMedicos = criaDadosMedicosEmBranco();
      if (!this.selObject.representantesLegais)
        this.selObject.representantesLegais = [];
      if (!this.selObject.filiacao)
        this.selObject.filiacao = { mae: "", pai: "" };
      if (!this.selObject.endereco)
        this.selObject.endereco = criaEnderecoEmBranco();
    } else {
      this.scopeList = [];
    }
  }

  salvarObject(f, obj: Paciente) {
    if (!f.valid) {
      this.showModal(
        "Existem ainda erros que impedem a gravação, verifique os campos circundados em vermelho"
      );
    } else {
      // obj.cpf = Number(obj.cpf)
      console.log(JSON.stringify(obj, null, 3));
      if (this.selObject["_id"]) {
        obj.identidade.numero = Number(obj.identidade.numero);
        obj.dadosMedicos.peso = Number(obj.dadosMedicos.peso);
        obj.dadosMedicos.altura = Number(obj.dadosMedicos.altura);
        if (obj.representantesLegais.length>0){
          obj.representantesLegais.forEach(r => {
            r.identidade.numero = Number(r.identidade.numero);
          });
        }
        this.pacientes.putPaciente(obj, "body", true).subscribe(
          pacienteSalvo => {
            if (pacienteSalvo._id) {
              alert("Paciente Salvo");
              this.selObject = pacienteSalvo;
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
        obj.identidade.numero = Number(obj.identidade.numero);
        obj.identidade.numero = Number(obj.identidade.numero);
        obj.dadosMedicos.peso = Number(obj.dadosMedicos.peso);
        obj.dadosMedicos.altura = Number(obj.dadosMedicos.altura);
        if (obj.representantesLegais.length>0){
          obj.representantesLegais.forEach(r => {
            r.identidade.numero = Number(r.identidade.numero);
          });
        }
        this.pacientes.postPaciente(obj, "body", true).subscribe(
          pacienteSalvo => {
            if (pacienteSalvo["_id"]) {
              alert("Paciente Salvo");
              this.selObject = pacienteSalvo;
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

  deleteObject(obj: Paciente) {
    if (obj) {
      this.showDeleteModal(
        "Deseja realmente excluir esse médico: " + obj.nome + "?",
        () => {
          if (obj["_id"] != undefined) {
            // significa objeto existente
            this.pacientes
              .deletePacienteById(obj["_id"], undefined, "body", true)
              .subscribe(obj => {
                if (this.tipoPesquisa === "nome") {
                  this.pesquisaNome(
                    this.ultimaQuery,
                    Number(this.pgPaciente.page)
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

  private _timer_change_field_CRMValidade;
  retardChangeFieldCRMValidade(value, time) {
    var value2 = value,
      __this = this;
    clearTimeout(this._timer_change_field_CRMValidade);
    this._timer_change_field_CRMValidade = setTimeout(() => {
      __this.selObject.identidade.validade = value2;
    }, time);
  }

  private _timer_change_field_Nascimento;
  retardChangeFieldNascimento(value, time) {
    var value2 = value,
      __this = this;
    clearTimeout(this._timer_change_field_Nascimento);
    this._timer_change_field_Nascimento = setTimeout(() => {
      __this.selObject.nascimento = value2;
    }, time);
  }


  private _timer_change_field_DataHistorico;
  retardChangeFieldDataHistorico(i,value, time) {
    var value2 = value,
      __this = this;
    clearTimeout(this._timer_change_field_DataHistorico);
    this._timer_change_field_DataHistorico = setTimeout(() => {
      if(__this.selObject.dadosMedicos.historicoMedico[i]){
        __this.selObject.dadosMedicos.historicoMedico[i].data = value2;
      }
    }, time);
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

function criarNovoPaciente() {
  return <Paciente>{
    cpf: null,
    nome: null,
    celular: null,
    email: null,
    nascimento: null,
    identidade: <DocumentoIdentidade>{
      numero: null,
      emissor: "SSP",
      uf: "RJ",
      validade: ""
    },
    sexo: "Feminino",
    filiacao: <PacienteFiliacao>{
      mae: null,
      pai: null
    },
    estadoCivil: "Solteiro(a)",
    etnia: "Não Sei",
    escolaridade: "Médio - Completo",
    profissao: null,
    endereco: criaEnderecoEmBranco(),
    dadosMedicos: criaDadosMedicosEmBranco(),
    representantesLegais: [],
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
    telefones: [],
    localizacao: { latitude: 0, longitude: 0 }
  };
}

function criaDadosMedicosEmBranco() {
  return <PacienteDadosMedicos>{
    peso: 0,
    altura: 0,
    tipoSanguineo: {
      abo: "",
      rh: ""
    },
    alergiasMedicamentosas: [],
    alergiasDiversas: [],
    historicoMedico: []
  };
}

function criaRepresentanteLegalEmBranco(){
  return <PacienteRepresentantesLegais>{
    cpf:"",
    email:"",
    celular:"",
    nome:"",
    identidade:<DocumentoIdentidade>{
      numero: null,
      emissor: "SSP",
      uf: "RJ",
      validade: ""
    }
  }
}