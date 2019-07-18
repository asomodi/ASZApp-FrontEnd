import { Component, OnInit, Input } from '@angular/core';
import { NewUser } from 'src/app/interfaces/new-user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  isFirstPanelCompleted = false;
  isSecondPanelCompleted = false;
  isThirdPanelCompleted = false;

  @Input()
  newUser: NewUser;

  constructor() {

    this.newUser = {

      nickName: '',
      email: '',
      password1: '',
      password2: ''
    }

  }

  ngOnInit() {
  }

}
