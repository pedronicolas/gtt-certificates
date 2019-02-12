import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcertificateComponent } from './editcertificate.component';

describe('EditcertificateComponent', () => {
  let component: EditcertificateComponent;
  let fixture: ComponentFixture<EditcertificateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditcertificateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditcertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
