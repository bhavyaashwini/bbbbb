import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Leave3Component } from './leave3.component';

describe('Leave3Component', () => {
  let component: Leave3Component;
  let fixture: ComponentFixture<Leave3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Leave3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Leave3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
