import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsofcertComponent } from './detailsofcert.component';

describe('DetailsofcertComponent', () => {
  let component: DetailsofcertComponent;
  let fixture: ComponentFixture<DetailsofcertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsofcertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsofcertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
