import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login-register/login/login.component';
import { RegisterComponent } from './login-register/register/register.component';
import { HeroPanelComponent } from './hero-panel/hero-panel.component';

import { HomeComponent } from './home/home.component';
import { AuthGuard } from './_helpers/auth.guard';
import { LibraryComponent } from './library/library.component';
import { ContactComponent } from './contact/contact.component';
import { ArtistsComponent } from './artists/artists.component';
import { AboutComponent } from './about/about.component';
import { VerifyComponent } from './verify/verify.component';
import { SpotifyLoginComponent } from './spotify-login/spotify-login.component';
import { ProfileComponent } from './profile/profile.component';



const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'index' },
  { path: 'index', component: HeroPanelComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'albums', component: LibraryComponent, canActivate: [AuthGuard] },
  { path: 'contact', component: ContactComponent },
  { path: 'artists', component: ArtistsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'verify', component: VerifyComponent },
  { path: 'api/spotify/callback', component: SpotifyLoginComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },

  { path: '**', redirectTo: 'index' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
