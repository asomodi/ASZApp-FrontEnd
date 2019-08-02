import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthenticationService } from 'src/app/_services/authentication.service';

@Component({
  selector: 'app-new-password-modal',
  templateUrl: './new-password-modal.component.html',
  styleUrls: ['./new-password-modal.component.scss']
})
export class NewPasswordModalComponent implements OnInit {

  @Input()
  username: string;
  loading = false;

  constructor(public activeModal: NgbActiveModal,
    private authenticationService: AuthenticationService) {
    this.username = ""
  }

  ngOnInit() {
  }

  sendEmail() {
    this.loading = true;
    this.authenticationService.resetPassword(this.username.trim()).subscribe(() => {
      this.activeModal.close();
      this.loading = false;
  }, error=>{
      this.loading= false;
  });
  }

}
