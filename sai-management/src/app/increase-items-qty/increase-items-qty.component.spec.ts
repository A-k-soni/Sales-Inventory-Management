import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncreaseItemsQtyComponent } from './increase-items-qty.component';

describe('IncreaseItemsQtyComponent', () => {
  let component: IncreaseItemsQtyComponent;
  let fixture: ComponentFixture<IncreaseItemsQtyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncreaseItemsQtyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncreaseItemsQtyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
