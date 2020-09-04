import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddItmesComponent } from './add-itmes.component';

describe('AddItmesComponent', () => {
  let component: AddItmesComponent;
  let fixture: ComponentFixture<AddItmesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddItmesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddItmesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
