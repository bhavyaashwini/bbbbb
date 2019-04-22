import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Employee4Component } from './employee4.component';

describe('Employee4Component', () => {
  let component: Employee4Component;
  let fixture: ComponentFixture<Employee4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Employee4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Employee4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
