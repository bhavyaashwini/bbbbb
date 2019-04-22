import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Salaryslip3Component } from './salaryslip3.component';

describe('Salaryslip3Component', () => {
  let component: Salaryslip3Component;
  let fixture: ComponentFixture<Salaryslip3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Salaryslip3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Salaryslip3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
