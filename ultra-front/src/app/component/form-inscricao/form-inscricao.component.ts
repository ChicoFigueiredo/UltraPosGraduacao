import { Component, OnInit } from '@angular/core';
import { ApiUltraService } from './../../services/api-ultra.service';

@Component({
  selector: 'app-form-inscricao',
  templateUrl: './form-inscricao.component.html',
  styleUrls: ['./form-inscricao.component.scss']
})
export class FormInscricaoComponent implements OnInit {
  alunoAtual: any = {};
  cursosAtivos: Array<any> = [];
  private ultimaBuscaValida = '';
  ufs: Array<any> = [];
  municipios: Array<any> = [];
  categorias: Array<any> = [];
  cursos: Array<any> = [];
  cursoEscolhido: Curso = new Curso();

  constructor(
    public alunoService: ApiUltraService,
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
      x = x.sort((a, b) => a.name.pt > b.name.pt ? 1 : -1)
           // .filter((c) => c.published );
      this.cursos = x;
    });
  }

  ngOnInit() {
  }

  onKey($event) {
    const testCPF: RegExp = /\d\d\d[.]\d\d\d[.]\d\d\d[-]\d\d/;
    const cpf: string = $event.target.value;
    if (testCPF.test(cpf)) {
      if (cpf !== this.ultimaBuscaValida) {
        this.alunoService.findUser(cpf).subscribe((a: Array<any>) => {
          if (a.length > 0) {
            this.alunoAtual = a[0];
            this.cursosAtivos = this.alunoAtual.cursos.slice();
            this.alunoAtual.cursos = [];
            this.ultimaBuscaValida = cpf;
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
    console.log(categoria);
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

  salvarDados() {
    this.alunoService.salvarMatricula(this.alunoAtual)
        .subscribe((res) => {
          console.log(res);
        });
  }

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
  parcelamento: number;
  parcela: number;
  melhorDia: number;
  cupom: CursoPagamentoCupom;
  formaPagamento: string;
  dadosCartao: DadosCartao;
}

export class Curso {
  codigoCurso: number;
  codigoCategoria: number;
  nomeCurso: string;
  deAcordo: boolean;
  pagamento: CursoPagamento;
}