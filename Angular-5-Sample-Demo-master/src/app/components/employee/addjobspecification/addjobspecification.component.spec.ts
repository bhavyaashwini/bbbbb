import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddjobspecificationComponent } from './addjobspecification.component';

describe('AddjobspecificationComponent', () => {
  let component: AddjobspecificationComponent;
  let fixture: ComponentFixture<AddjobspecificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddjobspecificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddjobspecificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
