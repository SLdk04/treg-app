import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OversigtComponent } from './oversigt.component';

describe('OversigtComponent', () => {
  let component: OversigtComponent;
  let fixture: ComponentFixture<OversigtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OversigtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OversigtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
