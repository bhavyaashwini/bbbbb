import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchingforjobComponent } from './searchingforjob.component';

describe('SearchingforjobComponent', () => {
  let component: SearchingforjobComponent;
  let fixture: ComponentFixture<SearchingforjobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchingforjobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchingforjobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
