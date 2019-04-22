import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobopeningmanagementComponent } from './jobopeningmanagement.component';

describe('JobopeningmanagementComponent', () => {
  let component: JobopeningmanagementComponent;
  let fixture: ComponentFixture<JobopeningmanagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobopeningmanagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobopeningmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
