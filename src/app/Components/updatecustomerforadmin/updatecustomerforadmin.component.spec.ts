import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatecustomerforadminComponent } from './updatecustomerforadmin.component';

describe('UpdatecustomerforadminComponent', () => {
  let component: UpdatecustomerforadminComponent;
  let fixture: ComponentFixture<UpdatecustomerforadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatecustomerforadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatecustomerforadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
