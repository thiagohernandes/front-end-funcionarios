import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionarioEdicaoComponent } from './funcionario-edicao.component';

describe('FuncionarioEdicaoComponent', () => {
  let component: FuncionarioEdicaoComponent;
  let fixture: ComponentFixture<FuncionarioEdicaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuncionarioEdicaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncionarioEdicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
