import { Component, OnInit, Input } from '@angular/core';
import { User } from '../interfaces/user';
import { AuthenticationService } from '../_services/authentication.service';
import { Change } from '../interfaces/change';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  @Input()
  user: User;
  currentUser: User;
  change: Change;
  loading = false;
  showerror = false;

  constructor(private authenticationService: AuthenticationService,
    private router: Router) {

    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.user = JSON.parse(JSON.stringify(this.currentUser));
    this.change = {};
  }

  ngOnInit() {

  }

  save(): void {
    this.change = {};
    this.showerror = false;
    if (this.user.newsLetter != this.currentUser.newsLetter) {
      this.change.hasNewsLetter = this.user.newsLetter;
    }

    if (this.user.lastFmUsername != this.currentUser.lastFmUsername) {
      this.change.lastFmUsername = this.user.lastFmUsername;
    }

    if (Object.keys(this.change).length != 0) {
      this.loading = true;
      this.authenticationService.saveChanges(this.change).subscribe(success => {
        localStorage.setItem('currentUser', JSON.stringify(success));
        this.router.navigate(['/home']);
      }, error => {
        this.loading = false;
        this.showerror = true;
      })
    }
  }

}
