import { Component, OnInit, Input } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  showSuccess = false;
  showError = false;
  showInputs = false;
  token: string;
  id: string;
  errors: string[];
  @Input()
  password: string;
  @Input()
  confirmPassword: string;

  constructor(private spinner: NgxSpinnerService,
    private route: ActivatedRoute,
    private authenticationService: AuthenticationService,
    private router: Router) {
    this.password = "";
    this.confirmPassword = "";
  }

  isPasswordvalid(): boolean {
    return (this.password.length >= 8);
  }

  isConfirmPasswordvalid(): boolean {
    return (this.confirmPassword == this.password);
  }

  ngOnInit() {
    this.spinner.show();
    this.token = this.route.snapshot.queryParamMap.get('token');
    this.id = this.route.snapshot.queryParamMap.get('id');
    //this.authenticationService.sendToken(id, token).subscribe(success => {
    this.showInputs = true;
    this.spinner.hide();
    this.errors = [];
    //    });
  }

  save(): void {
    this.authenticationService.sendToken(this.id, this.token, this.password).subscribe(() => {
      this.router.navigate(['/login']);
    }, error => {
      this.showError = true;
    });
  }

}
