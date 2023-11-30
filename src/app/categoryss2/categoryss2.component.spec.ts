import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Categoryss2Component } from './categoryss2.component';

describe('Categoryss2Component', () => {
  let component: Categoryss2Component;
  let fixture: ComponentFixture<Categoryss2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Categoryss2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Categoryss2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
