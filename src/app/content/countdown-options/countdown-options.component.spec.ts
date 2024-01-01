import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownOptionsComponent } from './countdown-options.component';

describe('CountdownOptionsComponent', () => {
  let component: CountdownOptionsComponent;
  let fixture: ComponentFixture<CountdownOptionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountdownOptionsComponent]
    });
    fixture = TestBed.createComponent(CountdownOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
