import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionarioNovoComponent } from './funcionario-novo.component';

describe('FuncionarioNovoComponent', () => {
  let component: FuncionarioNovoComponent;
  let fixture: ComponentFixture<FuncionarioNovoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuncionarioNovoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncionarioNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
