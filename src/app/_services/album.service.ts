import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Album } from '../interfaces/album';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private readonly SERVER_URL = "http://192.168.1.209:8080/api/allmusicRecommendation";

  constructor(private http: HttpClient) { }

  getAlbums(): Observable<Album[]> {
    return this.http.get(this.SERVER_URL, { withCredentials: true }) as Observable<Album[]>;
  }

}
