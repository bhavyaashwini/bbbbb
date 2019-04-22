import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddjobdescriptionComponent } from './addjobdescription.component';

describe('AddjobdescriptionComponent', () => {
  let component: AddjobdescriptionComponent;
  let fixture: ComponentFixture<AddjobdescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddjobdescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddjobdescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
