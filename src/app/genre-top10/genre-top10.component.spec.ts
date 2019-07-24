import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenreTop10Component } from './genre-top10.component';

describe('GenreTop10Component', () => {
  let component: GenreTop10Component;
  let fixture: ComponentFixture<GenreTop10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenreTop10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenreTop10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
