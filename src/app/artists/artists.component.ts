import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent implements OnInit {

  mouseEnter(div : string){
      console.log("mouse enter : " + div);
   }

   mouseLeave(div : string){
     console.log('mouse leave :' + div);
   }

  constructor() { }

  ngOnInit() {
  }

}
