import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearProdutcoComponent } from './crear-produtco.component';

describe('CrearProdutcoComponent', () => {
  let component: CrearProdutcoComponent;
  let fixture: ComponentFixture<CrearProdutcoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearProdutcoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearProdutcoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
