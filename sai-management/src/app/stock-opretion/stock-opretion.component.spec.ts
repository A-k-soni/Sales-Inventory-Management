import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockOpretionComponent } from './stock-opretion.component';

describe('StockOpretionComponent', () => {
  let component: StockOpretionComponent;
  let fixture: ComponentFixture<StockOpretionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockOpretionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockOpretionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
