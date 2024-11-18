import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThoughtComponent } from './thought.component';

describe('ThoughtComponent', () => {
  let component: ThoughtComponent;
  let fixture: ComponentFixture<ThoughtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThoughtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThoughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
