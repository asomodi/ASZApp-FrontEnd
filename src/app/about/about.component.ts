import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  toShow = [false, false, false, false, false];



  mouseEnter(index: number) {
    this.toShow[index] = true;
  }

  mouseLeave(index: number) {
    this.toShow[index] = false;
  }

  constructor() {
  }

  ngOnInit() {
  }

}
