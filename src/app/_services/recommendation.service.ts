import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recommendation } from '../interfaces/recommendation';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecommendationService {

  private readonly SERVER_URL = "https://app-recordisland.herokuapp.com/api/userAlbumRecommendations";
  private readonly SPOTIFY_URL = "https://app-recordisland.herokuapp.com/api/spotify/"

  constructor(private http: HttpClient) { }

  getRecommendations(): Observable<Recommendation[]> {
    return this.http.get(this.SERVER_URL, { withCredentials: true }).pipe(map(reco => {
      localStorage.setItem('recommendations', JSON.stringify(reco));
      return reco;
    })) as Observable<Recommendation[]>;
  }

  deleteRecommendation(id: number): Observable<any> {
    return this.http.delete(this.SERVER_URL + "/" + id, { withCredentials: true });
  }

  likeRecommendation(id: number): Observable<any> {
    return this.http.post(this.SERVER_URL + "/" + id, {}, { withCredentials: true });
  }

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
