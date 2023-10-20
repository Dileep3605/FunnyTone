import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorySliderComponent } from './story-slider.component';

describe('StorySliderComponent', () => {
  let component: StorySliderComponent;
  let fixture: ComponentFixture<StorySliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StorySliderComponent]
    });
    fixture = TestBed.createComponent(StorySliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
