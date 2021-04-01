import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IkWilGezienWordenComponent } from './ik-wil-gezien-worden.component';

describe('IkWilGezienWordenComponent', () => {
  let component: IkWilGezienWordenComponent;
  let fixture: ComponentFixture<IkWilGezienWordenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IkWilGezienWordenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IkWilGezienWordenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
