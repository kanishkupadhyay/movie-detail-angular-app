import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExactMovieComponent } from './exact-movie.component';

describe('ExactMovieComponent', () => {
  let component: ExactMovieComponent;
  let fixture: ComponentFixture<ExactMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExactMovieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExactMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
