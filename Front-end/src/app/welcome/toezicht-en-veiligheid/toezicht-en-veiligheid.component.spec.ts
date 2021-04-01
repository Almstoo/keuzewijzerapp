import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToezichtEnVeiligheidComponent } from './toezicht-en-veiligheid.component';

describe('ToezichtEnVeiligheidComponent', () => {
  let component: ToezichtEnVeiligheidComponent;
  let fixture: ComponentFixture<ToezichtEnVeiligheidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToezichtEnVeiligheidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToezichtEnVeiligheidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
