import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcessorioDetalheComponent } from './acessorio-detalhe.component';

describe('AcessorioDetalheComponent', () => {
  let component: AcessorioDetalheComponent;
  let fixture: ComponentFixture<AcessorioDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcessorioDetalheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcessorioDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
