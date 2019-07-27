import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.scss']
})
export class VerifyComponent implements OnInit {

  showSuccess = false;
  showError = false;

  constructor(private spinner: NgxSpinnerService,
    private route: ActivatedRoute,
    private userService: UserService) { }

  ngOnInit() {
    this.spinner.show();
    const token = this.route.snapshot.queryParamMap.get('token');
    console.log(token);
    this.userService.verify(token).subscribe(success => {
      this.showSuccess = true;
      this.spinner.hide();
    }, error => {
      this.showError = true;
      this.spinner.hide();
    });
  }

}
