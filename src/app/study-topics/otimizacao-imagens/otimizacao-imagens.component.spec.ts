import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtimizacaoImagensComponent } from './otimizacao-imagens.component';

describe('OtimizacaoImagensComponent', () => {
  let component: OtimizacaoImagensComponent;
  let fixture: ComponentFixture<OtimizacaoImagensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OtimizacaoImagensComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtimizacaoImagensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
