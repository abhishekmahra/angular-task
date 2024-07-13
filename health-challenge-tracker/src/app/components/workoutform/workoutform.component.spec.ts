import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutformComponent } from './workoutform.component';

describe('WorkoutformComponent', () => {
  let component: WorkoutformComponent;
  let fixture: ComponentFixture<WorkoutformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkoutformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkoutformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
