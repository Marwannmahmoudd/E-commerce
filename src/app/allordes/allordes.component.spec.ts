import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllordesComponent } from './allordes.component';

describe('AllordesComponent', () => {
  let component: AllordesComponent;
  let fixture: ComponentFixture<AllordesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllordesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllordesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
