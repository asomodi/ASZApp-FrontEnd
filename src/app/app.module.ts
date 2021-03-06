import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login-register/login/login.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './login-register/register/register.component';
import { HeroPanelComponent } from './hero-panel/hero-panel.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { LibraryComponent } from './library/library.component';
import { GenreTop10Component } from './genre-top10/genre-top10.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from './_helpers/error.interceptor';
import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { HomeComponent } from './home/home.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatMenuModule} from '@angular/material/menu';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

import { AlertComponent } from './alert/alert.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { ArtistsComponent } from './artists/artists.component';
import { AboutComponent } from './about/about.component';
import { DislikeModalComponent } from './_modals/dislike-modal/dislike-modal.component';
import { AlbumSearchPipe } from './_pipes/album-search.pipe';
import { VerifyComponent } from './verify/verify.component';
import { SpotifyLoginComponent } from './spotify-login/spotify-login.component';
import { AlbumModalComponent } from './_modals/album-modal/album-modal.component';
import { ProfileComponent } from './profile/profile.component';
import { NewPasswordModalComponent } from './_modals/new-password-modal/new-password-modal.component';
import { ChangePasswordComponent } from './change-password/change-password.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    RegisterComponent,
    HeroPanelComponent,
    FooterComponent,
    HomeComponent,
    GenreTop10Component,
    LibraryComponent,
    ContactComponent,
    AlertComponent,
    AboutComponent,
    ArtistsComponent,
    DislikeModalComponent,
    AlbumSearchPipe,
    VerifyComponent,
    SpotifyLoginComponent,
    AlbumModalComponent,
    ProfileComponent,
    NewPasswordModalComponent,
    ChangePasswordComponent,

  ],
  entryComponents: [
      DislikeModalComponent,
      AlbumModalComponent,
      NewPasswordModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    NgxSpinnerModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatSlideToggleModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
