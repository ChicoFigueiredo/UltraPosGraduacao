import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileUploadDragDropData64Component } from './file-upload.component';

describe('CampoImagemDragDropData64Component', () => {
  let component: FileUploadDragDropData64Component;
  let fixture: ComponentFixture<FileUploadDragDropData64Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileUploadDragDropData64Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileUploadDragDropData64Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
