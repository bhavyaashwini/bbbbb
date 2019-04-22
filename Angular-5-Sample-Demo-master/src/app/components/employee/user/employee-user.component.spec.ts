
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { employeeuserComponent } from './employee-user.component';

describe('employeeuserComponent', () => {
  let component: employeeuserComponent;
  let fixture: ComponentFixture<employeeuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ employeeuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(employeeuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

