import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recommendation } from '../interfaces/recommendation';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecommendationService {
  deleteRecommendation(id: number):Observable<any> {
    return this.http.delete(this.SERVER_URL+"/"+id, {withCredentials: true});
  }

  // private readonly SERVER_URL = "http://192.168.1.209:8080/api/allmusicRecommendation";
  private readonly SERVER_URL = "http://192.168.1.102:8080/api/userAlbumRecommendations";
  private readonly DELETE_URL = "http://192.168.1.102:8080/api/userAlbumRecommendations/id"
  constructor(private http: HttpClient) { }

  getRecommendations(): Observable<Recommendation[]> {
    return this.http.get(this.SERVER_URL, { withCredentials: true }).pipe(map(reco => {
      localStorage.setItem('recommendations', JSON.stringify(reco));
      return reco;
    })) as Observable<Recommendation[]>;
  }


}
