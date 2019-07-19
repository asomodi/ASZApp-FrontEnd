import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Input()
  username: string;
  @Input()
  password: string;

  private readonly SERVER_URL = "http://192.168.1.210:8080/login";
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient  ) {
  }

  ngOnInit() {
      this.loginForm = this.formBuilder.group({
      username: '',
      password: ''
    });
  }

  login(): void {
      this.loginForm.get('username').setValue(this.username);
      this.loginForm.get('password').setValue(this.password);

      const formData = new FormData();
      formData.append('username', this.loginForm.get('username').value);
      formData.append('password', this.loginForm.get('password').value);

      this.httpClient.post<any>(this.SERVER_URL, formData).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }

}
