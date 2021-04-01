import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultAComponent } from './result-a.component';

describe('ResultAComponent', () => {
  let component: ResultAComponent;
  let fixture: ComponentFixture<ResultAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
