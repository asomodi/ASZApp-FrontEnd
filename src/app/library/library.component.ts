import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {

  dislikeColor: string;
  likeColor: string;

  isThisDislikeClicked = false;
  isThisLikeClicked = false;

  likeClick(event: Event) {
    console.log('like', event);
    this.isThisLikeClicked = true;
  }

  dislikeClick(event: Event) {
    console.log('dislike', event);
    this.isThisDislikeClicked = true;
  }

  isDislikeClicked(): boolean {
    return this.isThisDislikeClicked;

  }

  isLikeClicked(): boolean {
    return this.isThisLikeClicked;
  }


  constructor() { }

  ngOnInit() {


  }

}
