import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesTestComponent } from './movies-test.component';

describe('MoviesTestComponent', () => {
  let component: MoviesTestComponent;
  let fixture: ComponentFixture<MoviesTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
