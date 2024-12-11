import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfileCompanyComponent } from './edit-profile-company.component';

describe('EditProfileCompanyComponent', () => {
  let component: EditProfileCompanyComponent;
  let fixture: ComponentFixture<EditProfileCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditProfileCompanyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditProfileCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
