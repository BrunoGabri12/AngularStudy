import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirtsPageComponent } from './firts-page.component';

describe('FirtsPageComponent', () => {
  let component: FirtsPageComponent;
  let fixture: ComponentFixture<FirtsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirtsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirtsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
