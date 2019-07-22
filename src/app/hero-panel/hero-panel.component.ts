import { Component, OnInit } from '@angular/core';
//import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-hero-panel',
  templateUrl: './hero-panel.component.html',
  styleUrls: ['./hero-panel.component.scss']
})
export class HeroPanelComponent implements OnInit {

    images = [1, 2, 3, 4].map(i => `url(/assets/img/bg-img/bg-${i}.jpg)`);
    index: 0;
    path: 'url(/assets/img/bg-img/bg-2.jpg)';

    ngOnInit(): void {

        function changeBackground():void{

        }
    }


}
