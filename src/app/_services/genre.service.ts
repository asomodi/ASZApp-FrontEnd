import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  private readonly SERVER_URL = "https://app-recordisland.herokuapp.com/api/lastfmtopartists";

  constructor(private http: HttpClient) { }

  saveGenres(genres: string[]) {
    return this.http.post(this.SERVER_URL, genres, {withCredentials: true});
  }
}
