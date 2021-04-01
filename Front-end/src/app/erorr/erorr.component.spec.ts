import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErorrComponent } from './erorr.component';

describe('ErorrComponent', () => {
  let component: ErorrComponent;
  let fixture: ComponentFixture<ErorrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErorrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErorrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
