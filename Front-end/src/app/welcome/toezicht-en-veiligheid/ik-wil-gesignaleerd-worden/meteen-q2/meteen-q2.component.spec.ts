import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeteenQ2Component } from './meteen-q2.component';

describe('MeteenQ2Component', () => {
  let component: MeteenQ2Component;
  let fixture: ComponentFixture<MeteenQ2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeteenQ2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeteenQ2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
