import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfilesComponent } from './addfiles.component';

describe('AddfilesComponent', () => {
  let component: AddfilesComponent;
  let fixture: ComponentFixture<AddfilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddfilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
