import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IkWilGehoordWordenComponent } from './ik-wil-gehoord-worden.component';

describe('IkWilGehoordWordenComponent', () => {
  let component: IkWilGehoordWordenComponent;
  let fixture: ComponentFixture<IkWilGehoordWordenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IkWilGehoordWordenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IkWilGehoordWordenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
