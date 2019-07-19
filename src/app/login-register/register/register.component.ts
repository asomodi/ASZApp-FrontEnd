import { Component, OnInit, Input } from '@angular/core';
import { NewUser } from 'src/app/interfaces/new-user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  @Input()
  checkboxSpotify: string;
  @Input()
  checkboxLastfm: string;
  @Input()
  newUser: NewUser;

  constructor() {

    this.newUser = {

      userName: '',
      email: '',
      password1: '',
      password2: '',
      lastfm: '',
      spotify: ''

    }

  }

  ngOnInit() {

  }

}
