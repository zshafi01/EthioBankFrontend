import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferdisplayComponent } from './transferdisplay.component';

describe('TransferdisplayComponent', () => {
  let component: TransferdisplayComponent;
  let fixture: ComponentFixture<TransferdisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferdisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
