import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfRenovatesComponent } from './list-of-renovates.component';

describe('ListOfRenovatesComponent', () => {
  let component: ListOfRenovatesComponent;
  let fixture: ComponentFixture<ListOfRenovatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfRenovatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfRenovatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
