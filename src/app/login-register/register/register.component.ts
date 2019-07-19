import { Component, OnInit, Input } from '@angular/core';
import { NewUser } from 'src/app/interfaces/new-user';
import { HttpClient } from '@angular/common/http';

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
  showSuccessAlert = false;
  showDangerAlert = false;


  private readonly SERVER_URL = "http://192.168.1.210:8080/register";


  constructor(private httpClient: HttpClient) {

    this.newUser = {

      username: '',
      email: '',
      password: '',
      password2: '',
      lastfm: '',
      spotify: ''

    }

  }

  ngOnInit() {
  }

  register(): void {


    let nu = {
      username: this.newUser.username,
      password: this.newUser.password,
      email: this.newUser.email
    }

    this.httpClient.post(this.SERVER_URL, nu, { withCredentials: true }).subscribe(
      (res) => {
        console.log(res);
        this.showSuccessAlert = true;
        this.showDangerAlert = false;
      },
      (err) => {
        console.log(err);
        this.showDangerAlert = true;
      });

  }

}
