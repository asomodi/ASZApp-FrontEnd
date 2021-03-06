import { Component, OnInit } from '@angular/core';
import { GenreService } from '../_services/genre.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-genre-top10',
  templateUrl: './genre-top10.component.html',
  styleUrls: ['./genre-top10.component.scss']
})
export class GenreTop10Component implements OnInit {
  numberOfGenre = 0;
  typeOfGenres: string[];
  added: boolean[];

  constructor(private genreService: GenreService, private router: Router) {
    this.typeOfGenres = [];
    this.added=[];

    for (let i = 0; i < 8; i++) {
        this.added[i]=false;
    }

  }

  ngOnInit() {
  }

  addToGenres(genre: string, id:number) {
    if(!this.typeOfGenres.includes(genre)) {
      this.typeOfGenres.push(genre);
      this.numberOfGenre++;
      this.added[id]=true;
    }
  }

  saveGenres() {
    this.genreService.saveGenres(this.typeOfGenres).subscribe(
      success =>{
        this.router.navigate(['/login']);
      }
    );
  }

}
