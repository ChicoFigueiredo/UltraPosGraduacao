import { Component, OnInit } from '@angular/core';
import { ApiUltraService } from './../../services/api-ultra.service';

@Component({
  selector: 'app-form-inscricao',
  templateUrl: './form-inscricao.component.html',
  styleUrls: ['./form-inscricao.component.scss']
})
export class FormInscricaoComponent implements OnInit {
  alunoAtual: any ;

  constructor(
    public aluno: ApiUltraService,
  ) { }

  ngOnInit() {
  }

  buscaCPF(cpf) {
    this.aluno.findUser(cpf).subscribe((a) => {
      this.alunoAtual = a;
    });
  }

}
