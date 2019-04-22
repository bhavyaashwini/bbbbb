import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefiningthejobComponent } from './definingthejob.component';

describe('DefiningthejobComponent', () => {
  let component: DefiningthejobComponent;
  let fixture: ComponentFixture<DefiningthejobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefiningthejobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefiningthejobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
