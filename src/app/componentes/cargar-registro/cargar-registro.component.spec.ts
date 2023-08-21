import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargarRegistroComponent } from './cargar-registro.component';

describe('CargarRegistroComponent', () => {
  let component: CargarRegistroComponent;
  let fixture: ComponentFixture<CargarRegistroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CargarRegistroComponent]
    });
    fixture = TestBed.createComponent(CargarRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
