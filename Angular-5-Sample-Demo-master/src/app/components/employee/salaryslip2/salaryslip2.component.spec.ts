import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Salaryslip2Component } from './salaryslip2.component';

describe('Salaryslip2Component', () => {
  let component: Salaryslip2Component;
  let fixture: ComponentFixture<Salaryslip2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Salaryslip2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Salaryslip2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
