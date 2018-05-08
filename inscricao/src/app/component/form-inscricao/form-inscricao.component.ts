import { Component, OnInit, DoCheck, ChangeDetectorRef, ElementRef, ViewChild } from '@angular/core';
import { ApiUltraService } from './../../services/api-ultra.service';
import { ActivatedRoute } from '@angular/router';
// import { card, cvc, expiration } from 'creditcards';
import * as card from 'creditcards/card';
import * as cvv from 'creditcards/cvc';
import * as cardTypes from 'creditcards-types';
import * as expiration from 'creditcards/expiration';

const __cc = card(cardTypes);
const __cvv = cvv(cardTypes);
const __exp = expiration;

@Component({
  selector: 'app-form-inscricao',
  templateUrl: './form-inscricao.component.html',
  styleUrls: ['./form-inscricao.component.scss']
})
export class FormInscricaoComponent implements OnInit, DoCheck {
  alunoAtual: Aluno = new Aluno();
  cursosAtivos: Array<any> = [];
  private ultimaBuscaValidaCPF = '';
  private ultimaBuscaValidaCEP = '';
  ufs: Array<any> = [];
  municipios: Array<any> = [];
  categorias: Array<any> = [];
  cursos: Array<any> = [];
  cursoEscolhido: Curso = new Curso();
  idCursoSelecionado = '';
  valoresMensalidade: Array<ValoresMensalidade> = [];
  @ViewChild('erroCPF') private erroCPF: ElementRef;
  @ViewChild('selMatricula') private selMatricula: ElementRef;
  @ViewChild('selMensalidade') private selMensalidade: ElementRef;
  @ViewChild('txtCupom') private txtCupom: ElementRef;
  @ViewChild('btnCupom') private btnCupom: ElementRef;
  @ViewChild('formAluno') private formAluno;

  constructor(
    public alunoService: ApiUltraService,
    private cdr: ChangeDetectorRef,
    private route: ActivatedRoute,
  ) {

    this.alunoService.getUF().subscribe((x: Array<any>) => {
      x = x.sort((a, b) => a.nome > b.nome ? 1 : -1);
      this.ufs = x;
    });
    this.alunoService.getMunicipios().subscribe((x: Array<any>) => {
      x = x.sort((a, b) => a.nome > b.nome ? 1 : -1);
      this.municipios = x;
    });
    this.alunoService.getCategorias().subscribe((x: Array<any>) => {
      x = x.sort((a, b) => a.name.pt > b.name.pt ? 1 : -1);
      this.categorias = x;
    });
    this.alunoService.getCursos().subscribe((x: Array<any>) => {
      x = x.sort((a, b) => a.name.pt > b.name.pt ? 1 : -1);
           // .filter((c) => c.published );
      this.cursos = x;
      this.cursoEscolhido.codigoCategoria = Number( this.getCategoriaDoCurso(this.idCursoSelecionado).id );
      this.cursoEscolhido.codigoCurso = Number(this.idCursoSelecionado);
      this.selectCurso({ target : { value : this.idCursoSelecionado }});
    });
  }

  ngOnInit() {
    this.cursoEscolhido.pagamento.melhorDia = 5;
    this.cursoEscolhido.pagamento.parcelamento = 24;
    this.route.params.subscribe(params => {
      this.idCursoSelecionado = params['id'];
      this.cursoEscolhido.codigoCategoria = Number( this.getCategoriaDoCurso(this.idCursoSelecionado).id );
      this.cursoEscolhido.codigoCurso = Number(this.idCursoSelecionado);
      this.selectCurso({ target : { value : this.idCursoSelecionado }});
    });
  }

  public ngDoCheck(): void {
    this.cdr.detectChanges();
  }

  // http://www.geradorcpf.com
  onKeyCPF($event) {
    const testCPF: RegExp = /\d\d\d[.]\d\d\d[.]\d\d\d[-]\d\d/;
    const cpf: string = $event.target.value;
    this.alunoAtual.cpf = cpf;
    if (testCPF.test(cpf)) {
      if (this.alunoService.validarCPF(cpf)) {
        if (cpf !== this.ultimaBuscaValidaCPF) {
          // this.erroCPF.nativeElement.innerHTML = '';
          this.alunoService.findUser(cpf).subscribe((a: Array<any>) => {
            if (a.length > 0) {
              // this.cursosAtivos = a[0].cursos.slice();
              // a[0].cursos = [];
              this.ultimaBuscaValidaCPF = cpf;
              this.alunoAtual = a[0];
            }
           });
        }
      } else {
        // this.erroCPF.nativeElement.innerHTML = 'CPF com erro de validação, verifique'
      }
    }
    return false;
  }

  onKeyWhatsapp($event) {
    this.alunoAtual.whatsapp = $event.target.value;
  }

  onKeyEmail($event) {
    this.alunoAtual.email = $event.target.value;
  }

  onKeyCEP($event) {
    const testCEP: RegExp = /\d\d\d\d\d[-]\d\d\d/;
    const cep: string = $event.target.value;
    this.alunoAtual.cep = cep;
    if (testCEP.test(cep)) {
      if (cep !== this.ultimaBuscaValidaCEP) {
        this.alunoService.getCEP(cep).subscribe((descCEP: any) => {
          this.alunoAtual.endereco = descCEP.logradouro;
          this.alunoAtual.bairro = descCEP.bairro;
          this.alunoAtual.cidade = descCEP.cidade;
          this.alunoAtual.uf = descCEP.estado;
          this.ultimaBuscaValidaCEP = cep;
        });
      }
    }
    return false;
  }

  getMunicipiosDaUF(uf) {
    return this.municipios.filter((x) => x.microrregiao.mesorregiao.UF.sigla === uf );
  }

  getCursosDaCategoria(categoria) {
    return this.cursos.filter((x) => {
      return x.categories.filter((c) => {
        if (c) {
          return c.id === Number(categoria);
        } else {
          return false;
        }
      }).length > 0;
    });
  }

  getCategoriaDoCurso(curso) {
    const cu: any = this.cursos.filter((c) => c.id === Number(curso));
    if (cu) {
      if (cu.length > 0) {
        return cu[0].categories[0];
      }
    }
    return null;
  }

  selectCurso(e) {
    const codigoCurso = Number(e.target.value);
    const detalheCurso = this.cursos.filter((c) => c.id === codigoCurso)[0];
    this.cursoEscolhido.pagamento.taxaMatricula = detalheCurso.variants[0].down_payment;
    this.cursoEscolhido.pagamento.valorOriginal = detalheCurso.variants[0].price;
    this.cursoEscolhido.pagamento.valorCobrado = detalheCurso.variants[0].price;
    this.gerarArrayValores(this.cursoEscolhido.pagamento.valorCobrado, 24);

    this.selMatricula.nativeElement.classList.remove('promotion');
    this.selMensalidade.nativeElement.classList.remove('promotion');
    this.txtCupom.nativeElement.value = '';
    this.txtCupom.nativeElement.disabled = false;
    this.btnCupom.nativeElement.disabled = false;
    return;
  }

  aplicarCupom(txtCupom) {
    txtCupom = txtCupom.toUpperCase();
    this.cursoEscolhido.pagamento.cupom.codigoCupom = txtCupom.toUpperCase();
    if (this.cursoEscolhido.pagamento.valorOriginal) {
      this.alunoService.processarCupom(
        txtCupom,
        this.cursoEscolhido.pagamento.valorOriginal,
        this.cursoEscolhido.pagamento.taxaMatricula
      ).subscribe((cupomProcessado: any) => {
        this.cursoEscolhido.pagamento.taxaMatricula = cupomProcessado.valorMatriculaCalculado;
        this.cursoEscolhido.pagamento.valorCobrado = cupomProcessado.valorCalculado;
        this.gerarArrayValores(this.cursoEscolhido.pagamento.valorCobrado, 24);

        this.cursoEscolhido.pagamento.cupom.codigoCupom = cupomProcessado.codigoCupom;
        this.cursoEscolhido.pagamento.cupom.origemCupom = cupomProcessado.origemCupom;
        this.cursoEscolhido.pagamento.cupom.tipoDesconto = cupomProcessado.tipoDesconto;
        this.cursoEscolhido.pagamento.cupom.valorDesconto = cupomProcessado.valorDesconto;
        this.cursoEscolhido.pagamento.cupom.percentualDesconto = cupomProcessado.percentualDesconto;
        this.selMatricula.nativeElement.classList.add('promotion');
        this.selMensalidade.nativeElement.classList.add('promotion');
        this.txtCupom.nativeElement.disabled = true;
        this.btnCupom.nativeElement.disabled = true;
        alert('Parabéns, CUPOM ' + txtCupom + ' válido! Os novos valores estão nos campos em azul!');
      });
    }
  }

  gerarArrayValores(valor, meses = 24) {
    this.valoresMensalidade = [];
    for ( let i = 1; i <= meses; i += 1) {
      this.valoresMensalidade.push({
        prestacoes: i,
        valor : Math.round(valor / i * 100) / 100,
        display : i + 'X de R$ ' + Math.round(valor / i * 100) / 100
      });
    }
  }

  onKeyCC($event) {
    this.cursoEscolhido.pagamento.dadosCartao.bandeira = __cc.type($event.target.value.replace(/\D/gmi, ''));
    // const __f = __cc.format(this.cursoEscolhido.pagamento.dadosCartao.numero.replace(/\D/gmi, '')).replace(/\d/gmi, '0');
    // $event.target.setAttribute('mask',__f);
    // $event.target.setAttribute('ng-reflect-mask-expression',__f);
  }

  efeturarMatricula(tipoPagamento: string = 'cartao') {
    if (this.validarFormulario()) {
      if (tipoPagamento === 'cartao') {
        const ccValid = __cc.isValid(this.cursoEscolhido.pagamento.dadosCartao.numero.replace(/\D/gmi, ''));
        const ccType = __cc.type(this.cursoEscolhido.pagamento.dadosCartao.numero.replace(/\D/gmi, ''));
        const cvvValid = __cvv.isValid(this.cursoEscolhido.pagamento.dadosCartao.CVV.replace(/\D/gmi, ''), ccType);
        const expValir =
            __exp.month.isValid(Number(this.cursoEscolhido.pagamento.dadosCartao.vencimento.substr(0, 2))) &&
            __exp.year.isValid(Number(this.cursoEscolhido.pagamento.dadosCartao.vencimento.substr(2, 4))) &&
            !__exp.isPast(Number(this.cursoEscolhido.pagamento.dadosCartao.vencimento.substr(0, 2)),
                          Number(this.cursoEscolhido.pagamento.dadosCartao.vencimento.substr(2, 4)) );
        alert (ccValid + '/' + ccType + '/' + cvvValid + '/' + expValir);
      } else {
        const saveObj = {
          aluno: this.alunoAtual,
          curso: this.cursoEscolhido,
        };
        saveObj.curso.pagamento.formaPagamento = tipoPagamento;
        this.alunoService.salvarMatricula(saveObj)
            .subscribe((res) => {
              console.log(res);
            });
      }
    } else {
      // alert('Existem erros no formulário, verifique!');
    }
  }

  validarFormulario(): boolean {
    const al = this.alunoAtual;
    if ( ! this.formAluno.form.valid ) {
      alert('Alguns campos obrigatórios do aluno ainda não preenchidos, verifique os campos com asteristico vermelho.');
      return false;
    }
    if ( al.email !== al.email_validado || al.email === '' || al.email === null ) {
      alert('e-mail e vericação de e-mail divergentes, verifique.');
      return false;
    }
    if ( this.cursoEscolhido.codigoCurso === null ) {
      alert('Escolha o curso desejado.');
      return false;
    }
    if (! al.leuAcordo) {
      alert('Para prosseguir é necessário aceitar os Termos do Contrato.');
      return false;
    }
    return true;
  }

  // salvarDados() {
  //   this.alunoService.salvarMatricula(this.alunoAtual)
  //       .subscribe((res) => {
  //         console.log(res);
  //       });
  // }

}

export class Aluno {
  cpf = '';
  nome = '';
  email = '';
  email_validado = '';
  whatsapp = '';
  celular = '';
  opcaoSMS = false;
  cep = '';
  endereco = '';
  numero = '';
  complemento = '';
  bairro = '';
  cidade = '';
  uf = '';
  ufNaturalidade = '';
  cidadeNaturalidade = '';
  sexoMasculino = '';
  dataNascimento = '';
  estadoCivil = '';
  numeroIdentidade = '';
  orgaoExpedidor = '';
  sexo = 'F';
  nomeMae = '';
  nomePai = '';
  leuAcordo = false;
}

export class ValoresMensalidade {
  prestacoes: number;
  valor: number;
  display = '';
}

export class DadosCartao {
  numero = '';
  nome = '';
  bandeira = '';
  CVV = '';
  vencimento = '';
}

export class CursoPagamentoCupom {
    codigoCupom = '';
    origemCupom = '';
    tipoDesconto = '';
    valorDesconto = 0;
    percentualDesconto = 0;
}

export class CursoPagamento {
  taxaMatricula: number;
  valorOriginal: number;
  valorCobrado: number;
  parcelamento: number;
  parcela: number;
  melhorDia: number;
  cupom: CursoPagamentoCupom;
  formaPagamento = '';
  dadosCartao: DadosCartao;

  constructor() {
    this.cupom = new CursoPagamentoCupom();
    this.dadosCartao = new DadosCartao();
  }
}

export class Curso {
  codigoCurso: number;
  codigoCategoria: number;
  nomeCurso;
  deAcordo: boolean;
  pagamento: CursoPagamento;

  constructor() {
    this.pagamento = new CursoPagamento();
  }
}

