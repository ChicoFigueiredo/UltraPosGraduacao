import { Component, OnInit, DoCheck, ChangeDetectorRef } from '@angular/core';
import { ApiUltraService } from './../../services/api-ultra.service';

@Component({
  selector: 'app-form-inscricao',
  templateUrl: './form-inscricao.component.html',
  styleUrls: ['./form-inscricao.component.scss']
})
export class FormInscricaoComponent implements OnInit, DoCheck {
  alunoAtual: any = {};
  cursosAtivos: Array<any> = [];
  private ultimaBuscaValida = '';
  ufs: Array<any> = [];
  municipios: Array<any> = [];
  categorias: Array<any> = [];
  cursos: Array<any> = [];
  cursoEscolhido: Curso = new Curso();
  valoresMensalidade: Array<ValoresMensalidade> = [];

  constructor(
    public alunoService: ApiUltraService,
    private cdr: ChangeDetectorRef,
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
    });
  }

  ngOnInit() {
    this.cursoEscolhido.pagamento.melhorDia = 5;
    this.cursoEscolhido.pagamento.parcelamento = 24;
  }

  public ngDoCheck(): void {
    this.cdr.detectChanges();
  }

  onKey($event) {
    const testCPF: RegExp = /\d\d\d[.]\d\d\d[.]\d\d\d[-]\d\d/;
    const cpf: string = $event.target.value;
    if (testCPF.test(cpf)) {
      if (cpf !== this.ultimaBuscaValida) {
        this.alunoService.findUser(cpf).subscribe((a: Array<any>) => {
          if (a.length > 0) {
            this.cursosAtivos = a[0].cursos.slice();
            a[0].cursos = [];
            this.ultimaBuscaValida = cpf;
            this.alunoAtual = a[0];
          }
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

  selectCurso(e) {
    const codigoCurso = Number(e.target.value);
    const detalheCurso = this.cursos.filter((c) => c.id === codigoCurso)[0];
    this.cursoEscolhido.pagamento.taxaMatricula = detalheCurso.variants[0].down_payment;
    this.cursoEscolhido.pagamento.valorOriginal = detalheCurso.variants[0].price;
    this.cursoEscolhido.pagamento.valorCobrado = detalheCurso.variants[0].price;
    this.gerarArrayValores(this.cursoEscolhido.pagamento.valorCobrado, 24);
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

  salvarDados() {
    this.alunoService.salvarMatricula(this.alunoAtual)
        .subscribe((res) => {
          console.log(res);
        });
  }

}

export class ValoresMensalidade {
  prestacoes: number;
  valor: number;
  display: string;
}

export class DadosCartao {
  numero: string;
  nome: string;
  bandeira: string;
  CVV: string;
}

export class CursoPagamentoCupom {
    codigoCupom: string;
    origemCupom: string;
    tipoDesconto: string;
    valorDesconto: number;
    percentualDesconto: number;
}

export class CursoPagamento {
  taxaMatricula: number;
  valorOriginal: number;
  valorCobrado: number;
  parcelamento: number;
  parcela: number;
  melhorDia: number;
  cupom: CursoPagamentoCupom;
  formaPagamento: string;
  dadosCartao: DadosCartao;

  constructor() {
    this.cupom = new CursoPagamentoCupom();
    this.dadosCartao = new DadosCartao();
  }
}

export class Curso {
  codigoCurso: number;
  codigoCategoria: number;
  nomeCurso: string;
  deAcordo: boolean;
  pagamento: CursoPagamento;

  constructor() {
    this.pagamento = new CursoPagamento();
  }
}

