import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationmanagementComponent } from './applicationmanagement.component';

describe('ApplicationmanagementComponent', () => {
  let component: ApplicationmanagementComponent;
  let fixture: ComponentFixture<ApplicationmanagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationmanagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
