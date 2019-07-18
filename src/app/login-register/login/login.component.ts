import { Component, OnInit, Input } from '@angular/core';
import { RecordIslandHttpService } from 'src/app/record-island-http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Input()
  email: string;
  @Input()
  password: string;

  constructor(private httpService: RecordIslandHttpService) {
  }

  ngOnInit() {
  }

  login(): void {

  }

}
