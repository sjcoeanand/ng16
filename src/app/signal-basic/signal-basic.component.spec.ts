import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalBasicComponent } from './signal-basic.component';

describe('SignalBasicComponent', () => {
  let component: SignalBasicComponent;
  let fixture: ComponentFixture<SignalBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalBasicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignalBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
