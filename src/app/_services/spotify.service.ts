import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private readonly SPOTIFY_URL = "https://app-recordisland.herokuapp.com/api/spotify/";
  // getAlbumTracks artist, cím

  constructor(private http: HttpClient) { }

  getSpotifyTracks(): Observable<any> {
    return this.http.get(this.SPOTIFY_URL + "getTracks", { withCredentials: true });
  }

  getSpotifyAutorizationCode(): Observable<any> {
    return this.http.get(this.SPOTIFY_URL + "authorizationCodeUri", { withCredentials: true });
  }

  sendSpotifyCode(code: string): Observable<any> {
    return this.http.get(this.SPOTIFY_URL + "callback", { params: { code: code }, withCredentials: true });
  }

  addToPlaylist(artist: string, name: string): Observable<any> {
    return this.http.put(this.SPOTIFY_URL + "addAlbumToUser", { artist: artist, album: name }, { withCredentials: true });
  }

  getAlbumTracks(artist: string, name: string): Observable<any> {
    return this.http.get(this.SPOTIFY_URL + "getAlbumTracks", { params: { artist: artist, album: name }, withCredentials: true });
  }
}
