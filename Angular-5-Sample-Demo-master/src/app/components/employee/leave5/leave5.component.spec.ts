import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Leave5Component } from './leave5.component';

describe('Leave5Component', () => {
  let component: Leave5Component;
  let fixture: ComponentFixture<Leave5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Leave5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Leave5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
