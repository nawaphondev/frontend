import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfileUsersComponent } from './edit-profile-users.component';

describe('EditProfileUsersComponent', () => {
  let component: EditProfileUsersComponent;
  let fixture: ComponentFixture<EditProfileUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditProfileUsersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditProfileUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
