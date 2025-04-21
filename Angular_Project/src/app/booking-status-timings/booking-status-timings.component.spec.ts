import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingStatusTimingsComponent } from './booking-status-timings.component';

describe('BookingStatusTimingsComponent', () => {
  let component: BookingStatusTimingsComponent;
  let fixture: ComponentFixture<BookingStatusTimingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingStatusTimingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookingStatusTimingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
