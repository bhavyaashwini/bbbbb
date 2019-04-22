import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Salaryslip5Component } from './salaryslip5.component';

describe('Salaryslip5Component', () => {
  let component: Salaryslip5Component;
  let fixture: ComponentFixture<Salaryslip5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Salaryslip5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Salaryslip5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
