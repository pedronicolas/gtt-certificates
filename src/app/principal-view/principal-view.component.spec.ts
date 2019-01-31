import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalViewComponent } from './principal-view.component';

describe('PrincipalViewComponent', () => {
  let component: PrincipalViewComponent;
  let fixture: ComponentFixture<PrincipalViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrincipalViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
