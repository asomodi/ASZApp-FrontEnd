import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { first } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from 'src/app/_services/alert.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NewPasswordModalComponent } from 'src/app/_modals/new-password-modal/new-password-modal.component';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],

})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  registered = false;
  @Input()
  username: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService,
    private modalService: NgbModal
  ) {
    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/home']);
    }

    this.username = "";

  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';


    // show success message on registration
    if (this.route.snapshot.queryParams['registered']) {
      this.registered = true;
    }
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;

    const formData = new FormData();
    formData.append('username', this.loginForm.get('username').value);
    formData.append('password', this.loginForm.get('password').value);

    this.authenticationService.login(formData)
      .pipe(first())
      .subscribe(
        () => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
          let msg = error.exception;
          if (msg == null) {
            msg = "Something went wrong. Please try again later"
          } else if (msg == "User is disabled") {
            msg = "You can't log in until you verified your email address"
          }
          this.alertService.error(msg);
          this.loading = false;
        });
  }

  forgotPassword(): void {
    const modalRef = this.modalService.open(NewPasswordModalComponent);
    modalRef.componentInstance.username = this.username;
    modalRef.result.then(() => {
        console.log("oy");
    });
  }
}
