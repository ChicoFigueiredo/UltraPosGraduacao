import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuponsLotesComponent } from './cupons-lotes.component';

describe('CuponsLotesComponent', () => {
  let component: CuponsLotesComponent;
  let fixture: ComponentFixture<CuponsLotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuponsLotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuponsLotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
