import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultGComponent } from './result-g.component';

describe('ResultGComponent', () => {
  let component: ResultGComponent;
  let fixture: ComponentFixture<ResultGComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultGComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
