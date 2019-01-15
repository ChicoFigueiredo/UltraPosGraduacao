import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponentEx } from '../modal/modal-ex.component';
import {
  Medico,
  PaginationMedico,
  Endereco,
  Especialidade,
  RedesSociais,
  MedicoCurriculo,
  MedicoComercial,
  UF,
} from '../../../../modulos/api';
import { MedicoService } from '../../../../modulos/api/api/medico.service';
import { FarmaciaAtendentes } from '../../../../modulos/api/model/farmaciaAtendentes';
import { DocumentoIdentidade } from '../../../../modulos/api/model/documentoIdentidade';
import { CepService } from '../../../../modulos/cep/cep.service';
import { Observable } from 'rxjs/Observable';
import { EspecialidadeService } from '../../../../modulos/api/api/especialidade.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'medicos',
  templateUrl: './medicos.component.html',
  styleUrls: ['./medicos.component.scss'],
})
export class MedicosComponent implements OnInit {
  public selObject: Medico = criarNovoMedico();
  public siteSelecionado: string = '';
  public pgMedico: PaginationMedico = <PaginationMedico>{};
  private tipoPesquisa: string = 'nome';
  private ultimaQuery: string = '';
  public scopeList: string[] = [];
  public ufs: string[] =  Object.values(UF);
  public tiposEndereco: string[] = Object.values(Endereco.TipoEnum);
  public especialidades: Observable<Especialidade[]>;

  constructor(
    private modalService: NgbModal,
    public medicos: MedicoService,
    public cep: CepService,
    private esp: EspecialidadeService,
  ) {
    // this.medicos.getMedico(undefined,undefined,undefined,"30",1,"body",true).subscribe((lm:PaginationMedico) => {
    //   this.pgMedico = lm;
    // })
  }

  ngOnInit() {
    this.especialidades = this.esp.getEspecialidadeCombo();
  }

  pesquisaNomeBarraBusca(event) {
    if (event.key === 'Enter') {
      this.pesquisaNome(event.target.value);
    }
  }

  pesquisaNome(valor, pagina = 1) {
    pagina = isNaN(pagina) ? 1 : pagina;
    this.medicos
      .getMedico(
        undefined,
        valor,
        undefined,
        undefined,
        10,
        pagina,
        'body',
        true,
      )
      .subscribe((lm: PaginationMedico) => {
        this.tipoPesquisa = 'nome';
        this.ultimaQuery = valor;
        this.pgMedico = lm;
        if (lm.total > 0) {
          this.selecionarObject(this.pgMedico.docs[0]);
        } else {
          this.selObject = criarNovoMedico();
        }
      });
  }

  // pesquisaCNPJ(value,pagina=1) {
  //   this.medicos.getMedico(value,undefined,undefined,"10",pagina,"body",true).subscribe((lm:PaginationMedico) => {
  //     this.tipoPesquisa = "cnpj";
  //     this.ultimaQuery = value;
  //     this.pgMedico = lm;
  //     if (lm.total>0) {
  //       this.selObject = this.pgMedico.docs[0]
  //     } else  {
  //       this.selObject = <Medico>{nome:'', laboratorio:{nome:''}};
  //     }

  //   });
  // }

  pesquisaCodigo(value, pagina = 1) {
    this.medicos
      .getMedico(
        undefined,
        undefined,
        undefined,
        value,
        10,
        pagina,
        'body',
        true,
      )
      .subscribe((lm: PaginationMedico) => {
        this.tipoPesquisa = 'codigo';
        this.ultimaQuery = value;
        this.pgMedico = lm;
        if (lm.total > 0) {
          this.selecionarObject(this.pgMedico.docs[0]);
        } else {
          this.selObject = criarNovoMedico();
        }
      });
  }

  navigationChange(page) {
    console.log(page);
    if (this.tipoPesquisa === 'nome') {
      this.pesquisaNome(this.ultimaQuery, Number(page));
      // } else if(this.tipoPesquisa === 'cnpj'){
      //   this.pesquisaCNPJ(this.ultimaQuery,Number(page))
    } else if (this.tipoPesquisa === 'codigo') {
      this.pesquisaCodigo(this.ultimaQuery, Number(page));
    }
  }

  addNovoMedico() {
    const nm: Medico = criarNovoMedico();
    const index = this.pgMedico.docs.push(nm);
    this.selObject = this.pgMedico.docs[index - 1];
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

  deleteTelefone(scope) {
    const posicao = this.selObject.telefones.indexOf(scope);
    if (posicao >= 0) {
      this.selObject.telefones.splice(posicao, 1);
    }
  }

  addTelefoneEnter(event) {
    if (event.key === 'Enter') {
      this.addTelefone(event.target);
    }
  }

  addTelefone(campo) {
    const princ = campo.value;
    if (princ) {
      if (princ !== undefined) {
        this.selObject.telefones.push(princ);
      }
    }
  }

  deleteEmail(scope) {
    const posicao = this.selObject.emails.indexOf(scope);
    if (posicao >= 0) {
      this.selObject.emails.splice(posicao, 1);
    }
  }

  addEmailEnter(event) {
    if (event.key === 'Enter') {
      this.addEmail(event.target);
    }
  }

  addEmail(campo) {
    const princ = campo.value;
    if (princ) {
      if (princ !== undefined) {
        this.selObject.emails.push(princ);
      }
    }
  }

  deleteEndereco(a) {
    const posicao = this.selObject.enderecos.indexOf(a);
    if (posicao >= 0) {
      this.selObject.enderecos.splice(posicao, 1);
    }
  }

  adicionaEndereco() {
    this.selObject.enderecos.push(criaEnderecoEmBranco());
  }

  deleteLocal(a) {
    const posicao = this.selObject.comercial.indexOf(a);
    if (posicao >= 0) {
      this.selObject.comercial.splice(posicao, 1);
    }
  }

  adicionaLocal() {
    this.selObject.comercial.push(criaComercialEmBranco());
  }

  selecionarObject($c) {
    this.selObject = $c;
    if (this.selObject) {
      if (!this.selObject.curriculo)
        this.selObject.curriculo = criaCurriculoEmBranco();
      if (!this.selObject.redesSociais)
        this.selObject.redesSociais = criaRedesSociaisEmBranco();
      if (!this.selObject.comercial)
        this.selObject.comercial = [criaComercialEmBranco()];
      if (!this.selObject.especialidades) this.selObject.especialidades = [];
      if (!this.selObject.emails) this.selObject.emails = [];
      if (!this.selObject.telefones) this.selObject.telefones = [];
      if (!this.selObject.foto) this.selObject.foto = '';
      if (!this.selObject.certificadoA1) this.selObject.certificadoA1 = '';
    } else {
      this.scopeList = [];
    }
  }

  salvarObject(f, obj: Medico) {
    if (!f.valid) {
      this.showModal(
        'Existem ainda erros que impedem a gravação, verifique os campos circundados em vermelho',
      );
    } else {
      // obj.cpf = Number(obj.cpf)
      console.log(JSON.stringify(obj, null, 3));
      if (this.selObject['_id']) {
        obj.especialidades.forEach(e => {
          e.codigo = String(e.codigo);
        });
        this.medicos.putMedico(obj, 'body', true).subscribe(
          medicoSalvo => {
            if (medicoSalvo._id) {
              alert('Medico Salvo');
              this.selObject = medicoSalvo;
            }
          },
          err => {
            if (err) {
              console.log(err);
              alert('erro');
            }
          },
        );
      } else {
        obj.crm.numero = Number(obj.crm.numero);
        this.medicos.postMedico(obj, 'body', true).subscribe(
          medicoSalvo => {
            if (medicoSalvo['_id']) {
              alert('Medico Salvo');
              this.selObject = medicoSalvo;
            }
          },
          err => {
            if (err) {
              console.log(err);
              alert('erro');
            }
          },
        );
      }
    }
  }

  deleteObject(obj: Medico) {
    if (obj) {
      this.showDeleteModal(
        'Deseja realmente excluir esse médico: ' + obj.nome + '?',
        () => {
          if (obj['_id'] !== undefined) {
            // significa objeto existente
            this.medicos
              .deleteMedicoById(obj['_id'], undefined, 'body', true)
              .subscribe(resObj => {
                if (this.tipoPesquisa === 'nome') {
                  this.pesquisaNome(
                    this.ultimaQuery,
                    Number(this.pgMedico.page),
                  );
                }
                return true;
              });
            return true;
          } else {
            // deletar do array
            return true;
          }
        },
      );
    }
  }

  private _timer_change_field_CRMValidade;
  retardChangeFieldCRMValidade(value, time) {
    let value2 = value,
      __this = this;
    clearTimeout(this._timer_change_field_CRMValidade);
    this._timer_change_field_CRMValidade = setTimeout(() => {
      __this.selObject.crm.validade = value2;
    }, time);
  }

  private _timer_change_field_Nascimento;
  retardChangeFieldNascimento(value, time) {
    let value2 = value,
      __this = this;
    clearTimeout(this._timer_change_field_Nascimento);
    this._timer_change_field_Nascimento = setTimeout(() => {
      __this.selObject.nascimento = value2;
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
      ev.target.value.replace(/[^0-9,-]/gim, '').replace(/[,]/gim, '.'),
    );
    if (v2) {
      // this.selCupom[campo] = v2;
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
      size: 'sm',
      backdrop: 'static',
      container: 'nb-layout',
    });

    activeModal.componentInstance.addButtom('Excluir', evExcluir);
    activeModal.componentInstance.addButtom('Cancelar', 'close');
    activeModal.componentInstance.modalHeader = 'Alerta';
    activeModal.componentInstance.modalContent = msg;
  }

  showModal(msg, titulo = 'Alerta') {
    const activeModal = this.modalService.open(ModalComponentEx, {
      size: 'sm',
      backdrop: 'static',
      container: 'nb-layout',
    });

    activeModal.componentInstance.addButtom('Fechar', 'close');
    activeModal.componentInstance.modalHeader = titulo;
    activeModal.componentInstance.modalContent = msg;
  }

  showStaticModal() {
    const activeModal = this.modalService.open(ModalComponentEx, {
      size: 'sm',
      backdrop: 'static',
      container: 'nb-layout',
    });

    activeModal.componentInstance.addButtom('Fechar', 'close');
    activeModal.componentInstance.modalHeader = 'Alerta';
    activeModal.componentInstance.modalContent = `Ainda existem erros no cupom, verifique os campos em vermelho!`;
  }

  mensagem() {
    alert('comming-soon');
  }
}

function criarNovoMedico() {
  return <Medico>{
    cpf: null,
    crm: <DocumentoIdentidade>{
      numero: null,
      emissor: 'CRM',
      uf: 'RJ',
      validade: '',
    },
    celular: '',
    nome: '',
    email: '',
    nascimento: '',
    telefones: [],
    emails: [],
    enderecos: [criaEnderecoEmBranco()],
    curriculo: criaCurriculoEmBranco(),
    redesSociais: criaRedesSociaisEmBranco(),
    comercial: [criaComercialEmBranco()],
    certificadoA1: '',
    foto: '',
  };
}

function criaEnderecoEmBranco() {
  return <Endereco>{
    tipo: 'consultorio',
    cep: '',
    logradouro: '',
    numero: '',
    complemento: '',
    bairro: '',
    cidade: '',
    uf: 'RJ',
    telefones: [],
    localizacao: { latitude: 0, longitude: 0 },
  };
}

function criaCurriculoEmBranco() {
  return <MedicoCurriculo>{
    titulos: [],
    descricao: '',
  };
}

function criaRedesSociaisEmBranco() {
  return <RedesSociais>{
    linkedin: '',
    facebook: '',
    instagram: '',
    snapchat: '',
  };
}

function criaComercialEmBranco() {
  return <MedicoComercial>{
    local: '',
    cargo: '',
    endereco: criaEnderecoEmBranco(),
    telefones: [],
    emails: [],
    sites: [],
  };
}
