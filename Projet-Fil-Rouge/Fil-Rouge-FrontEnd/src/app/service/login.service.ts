import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Utilisateur } from '../model';
import { Observable } from 'rxjs';

let httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  }),
  withCredentials: true
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http: HttpClient) { }

  connect(utilisateur: Utilisateur): Observable<Utilisateur> {
    let authHeader: string = btoa(utilisateur.mail + ":" + utilisateur.password);
    httpOptions.headers = httpOptions.headers.set("Authorization", "Basic " + authHeader);
    return this._http.get<Utilisateur>('http://localhost:8080/login/user', httpOptions);
  }

  loggedInUser(): Observable<Utilisateur> {
    return this._http.get<Utilisateur>('http://localhost:8080/login/user', httpOptions);
  }
}
