import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewUser } from '../interfaces/new-user';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {

  private readonly SERVER_URL = "https://app-recordisland.herokuapp.com/register";
  // private readonly SERVER_URL = "http://localhost:8080/register";

  constructor(private http: HttpClient) { }

  register(user: NewUser): Observable<any> {
    return this.http.post(this.SERVER_URL, user, {withCredentials: true});
  }

}
