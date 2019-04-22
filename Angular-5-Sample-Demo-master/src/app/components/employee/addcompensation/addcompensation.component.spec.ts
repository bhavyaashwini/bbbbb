import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcompensationComponent } from './addcompensation.component';

describe('AddcompensationComponent', () => {
  let component: AddcompensationComponent;
  let fixture: ComponentFixture<AddcompensationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcompensationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcompensationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
