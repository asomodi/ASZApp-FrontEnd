import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
//import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-hero-panel',
  templateUrl: './hero-panel.component.html',
  styleUrls: ['./hero-panel.component.scss']
})
export class HeroPanelComponent implements OnInit {

  images = [1, 2, 3, 4, 5, 6, 7].map(i => `url(/assets/img/bg-img/bg-${i}.jpg)`);
  index = 1;

  ngOnInit(): void {
    const source = interval(10000);
    const subscribe = source.subscribe(val => {
      if (this.index == this.images.length-1) {
        this.index = 0;
      } else {
        this.index++;
      }
    });
  }


}
