import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IkWilAlarmerenComponent } from './ik-wil-alarmeren.component';

describe('IkWilAlarmerenComponent', () => {
  let component: IkWilAlarmerenComponent;
  let fixture: ComponentFixture<IkWilAlarmerenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IkWilAlarmerenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IkWilAlarmerenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
