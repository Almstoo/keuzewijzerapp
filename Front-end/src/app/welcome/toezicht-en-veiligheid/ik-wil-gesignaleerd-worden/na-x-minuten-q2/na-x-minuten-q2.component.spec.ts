import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NaXMinutenQ2Component } from './na-x-minuten-q2.component';

describe('NaXMinutenQ2Component', () => {
  let component: NaXMinutenQ2Component;
  let fixture: ComponentFixture<NaXMinutenQ2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaXMinutenQ2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NaXMinutenQ2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
