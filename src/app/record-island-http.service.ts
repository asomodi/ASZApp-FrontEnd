import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { User } from './interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class RecordIslandHttpService {

  private readonly SERVER_URL = "http://192.168.1.210:8080";
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

  loginUser(user: User) {

  }

}
