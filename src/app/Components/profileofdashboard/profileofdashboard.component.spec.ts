import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileofdashboardComponent } from './profileofdashboard.component';

describe('ProfileofdashboardComponent', () => {
  let component: ProfileofdashboardComponent;
  let fixture: ComponentFixture<ProfileofdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileofdashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileofdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
