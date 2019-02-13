import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJiraTicketComponent } from './add-jira-ticket.component';

describe('AddJiraTicketComponent', () => {
  let component: AddJiraTicketComponent;
  let fixture: ComponentFixture<AddJiraTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddJiraTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddJiraTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
