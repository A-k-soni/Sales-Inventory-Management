import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecreaseitemsComponent } from './decreaseitems.component';

describe('DecreaseitemsComponent', () => {
  let component: DecreaseitemsComponent;
  let fixture: ComponentFixture<DecreaseitemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecreaseitemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecreaseitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
