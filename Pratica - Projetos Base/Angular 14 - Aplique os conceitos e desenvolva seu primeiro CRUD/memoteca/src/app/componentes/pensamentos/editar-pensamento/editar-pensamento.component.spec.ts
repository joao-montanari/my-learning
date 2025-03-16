import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPensamentoComponent } from './editar-pensamento.component';

describe('EditarPensamentoComponent', () => {
  let component: EditarPensamentoComponent;
  let fixture: ComponentFixture<EditarPensamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarPensamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarPensamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
