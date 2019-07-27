import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotifyLoginComponent } from './spotify-login.component';

describe('SpotifyLoginComponent', () => {
  let component: SpotifyLoginComponent;
  let fixture: ComponentFixture<SpotifyLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpotifyLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotifyLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
