import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenovateCertificatesComponent } from './renovate-certificates.component';

describe('RenovateCertificatesComponent', () => {
  let component: RenovateCertificatesComponent;
  let fixture: ComponentFixture<RenovateCertificatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenovateCertificatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenovateCertificatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
