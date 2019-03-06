import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Utilisateur } from '../model';
import { Observable, Subject, of } from 'rxjs';

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

  utilisateur: Utilisateur;

  private isConnectedSub = new Subject<boolean>();
  isConnected: Observable<boolean> = this.isConnectedSub.asObservable();

  changeConnectionStatus(isConnected: boolean) {
    this.isConnectedSub.next(isConnected)
  }

  constructor(private _http: HttpClient) { }

  createUser(utilisateur: Utilisateur): Observable<Utilisateur> {
    return this._http.post<Utilisateur>('http://localhost:8080/login', utilisateur, httpOptions);
  }

  deconnect() {
    this.changeConnectionStatus(false);
    return this._http.get('http://localhost:8080/login/logMeOut', httpOptions);
  }

  connect(utilisateur: Utilisateur): Observable<Utilisateur> {
    let authHeader: string = btoa(utilisateur.email + ":" + utilisateur.password);
    httpOptions.headers = httpOptions.headers.set("Authorization", "Basic " + authHeader);
    this._http.get<Utilisateur>('http://localhost:8080/login/user', httpOptions).subscribe(
      connectedUser => {
        sessionStorage.setItem('ROLE', connectedUser.role);
        return of(connectedUser);
      }
    );
    return this._http.get<Utilisateur>('http://localhost:8080/login/user', httpOptions);
  }

  loggedInUser(): Observable<Utilisateur> {
    return this._http.get<Utilisateur>('http://localhost:8080/login/user', httpOptions);
  }
}
