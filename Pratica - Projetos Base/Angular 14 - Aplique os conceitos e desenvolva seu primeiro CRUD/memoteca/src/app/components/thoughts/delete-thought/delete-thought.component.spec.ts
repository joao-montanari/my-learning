import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteThoughtComponent } from './delete-thought.component';

describe('DeleteThoughtComponent', () => {
  let component: DeleteThoughtComponent;
  let fixture: ComponentFixture<DeleteThoughtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteThoughtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteThoughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
