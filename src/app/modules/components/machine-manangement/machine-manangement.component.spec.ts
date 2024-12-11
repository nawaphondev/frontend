import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineManangementComponent } from './machine-manangement.component';

describe('MachineManangementComponent', () => {
  let component: MachineManangementComponent;
  let fixture: ComponentFixture<MachineManangementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MachineManangementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MachineManangementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
