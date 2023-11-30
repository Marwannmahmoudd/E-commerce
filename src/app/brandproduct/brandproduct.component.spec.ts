import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandproductComponent } from './brandproduct.component';

describe('BrandproductComponent', () => {
  let component: BrandproductComponent;
  let fixture: ComponentFixture<BrandproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandproductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
