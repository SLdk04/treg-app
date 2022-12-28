import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistreringComponent } from './registrering.component';

describe('RegistreringComponent', () => {
  let component: RegistreringComponent;
  let fixture: ComponentFixture<RegistreringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistreringComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistreringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
