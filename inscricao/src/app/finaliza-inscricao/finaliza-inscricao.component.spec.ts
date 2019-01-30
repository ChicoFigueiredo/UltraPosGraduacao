import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalizaInscricaoComponent } from './finaliza-inscricao.component';

describe('FinalizaInscricaoComponent', () => {
  let component: FinalizaInscricaoComponent;
  let fixture: ComponentFixture<FinalizaInscricaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalizaInscricaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalizaInscricaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
