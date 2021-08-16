import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountEmployComponent } from './count-employ.component';

describe('CountEmployComponent', () => {
  let component: CountEmployComponent;
  let fixture: ComponentFixture<CountEmployComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountEmployComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountEmployComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
