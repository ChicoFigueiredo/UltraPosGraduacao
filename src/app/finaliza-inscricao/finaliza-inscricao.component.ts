import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-finaliza-inscricao',
  templateUrl: './finaliza-inscricao.component.html',
  styleUrls: ['./finaliza-inscricao.component.scss']
})
export class FinalizaInscricaoComponent implements OnInit {

  TituloModal = '';
  msgRetorno = '';

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.TituloModal = params['TituloModal'];
      this.msgRetorno = params['msgRetorno'];
    });
  }

}
