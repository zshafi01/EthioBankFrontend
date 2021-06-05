import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofchequbookrequestComponent } from './listofchequbookrequest.component';

describe('ListofchequbookrequestComponent', () => {
  let component: ListofchequbookrequestComponent;
  let fixture: ComponentFixture<ListofchequbookrequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListofchequbookrequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListofchequbookrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
