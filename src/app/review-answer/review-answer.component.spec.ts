import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewAnswerComponent } from './review-answer.component';

describe('ReviewAnswerComponent', () => {
  let component: ReviewAnswerComponent;
  let fixture: ComponentFixture<ReviewAnswerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReviewAnswerComponent]
    });
    fixture = TestBed.createComponent(ReviewAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
