import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IkWilGesignaleerdWordenComponent } from './ik-wil-gesignaleerd-worden.component';

describe('IkWilGesignaleerdWordenComponent', () => {
  let component: IkWilGesignaleerdWordenComponent;
  let fixture: ComponentFixture<IkWilGesignaleerdWordenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IkWilGesignaleerdWordenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IkWilGesignaleerdWordenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
