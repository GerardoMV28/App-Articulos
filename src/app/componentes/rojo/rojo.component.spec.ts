import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RojoComponent } from './rojo.component';

describe('RojoComponent', () => {
  let component: RojoComponent;
  let fixture: ComponentFixture<RojoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RojoComponent]
    });
    fixture = TestBed.createComponent(RojoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
