import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dislike-modal',
  templateUrl: './dislike-modal.component.html',
  styleUrls: ['./dislike-modal.component.scss']
})
export class DislikeModalComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
