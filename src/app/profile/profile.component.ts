import { Component, OnInit, Input } from '@angular/core';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  @Input()
  user: User;

  constructor() {
      this.user = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {

  }

}
