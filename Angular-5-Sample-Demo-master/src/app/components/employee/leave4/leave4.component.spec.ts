import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Leave4Component } from './leave4.component';

describe('Leave4Component', () => {
  let component: Leave4Component;
  let fixture: ComponentFixture<Leave4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Leave4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Leave4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
