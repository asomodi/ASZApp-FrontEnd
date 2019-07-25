import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DislikeModalComponent } from './dislike-modal.component';

describe('DislikeModalComponent', () => {
  let component: DislikeModalComponent;
  let fixture: ComponentFixture<DislikeModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DislikeModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DislikeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
