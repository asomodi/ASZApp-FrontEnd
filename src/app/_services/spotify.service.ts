import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private readonly SPOTIFY_URL = "https://app-recordisland.herokuapp.com/api/spotify/"

  constructor(private http: HttpClient) { }

  getSpotifyTracks(): Observable<any>{
      return this.http.get(this.SPOTIFY_URL+"getTracks", {withCredentials: true});
  }

  getSpotifyAutorizationCode(): Observable<any>{
      return this.http.get(this.SPOTIFY_URL+"authorizationCodeUri", {withCredentials: true});
  }

  sendSpotifyCode(code: string): Observable<any>{
      return this.http.get(this.SPOTIFY_URL+"callback", {params: {code: code}, withCredentials: true});
  }
}
