import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Salaryslip4Component } from './salaryslip4.component';

describe('Salaryslip4Component', () => {
  let component: Salaryslip4Component;
  let fixture: ComponentFixture<Salaryslip4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Salaryslip4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Salaryslip4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
