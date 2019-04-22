import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Employee5Component } from './employee5.component';

describe('Employee5Component', () => {
  let component: Employee5Component;
  let fixture: ComponentFixture<Employee5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Employee5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Employee5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
