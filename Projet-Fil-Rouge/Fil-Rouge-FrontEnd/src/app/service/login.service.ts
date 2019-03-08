import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Utilisateur } from '../model';
import { Observable, Subject, of } from 'rxjs';
import { Router } from '@angular/router';

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


  private isConnectedSub = new Subject<boolean>();
  isConnected: Observable<boolean> = this.isConnectedSub.asObservable();

  changeConnectionStatus(isConnected: boolean) {
    this.isConnectedSub.next(isConnected)
  }

  constructor(private _http: HttpClient, private _router: Router) { }

  createUser(utilisateur: Utilisateur): Observable<Utilisateur> {
    // this.getUserbyEmail(utilisateur.email).subscribe(
    //   value => console.log(value)
    // )
    return this._http.post<Utilisateur>('http://localhost:8080/login', utilisateur, httpOptions);
  }

  updateUser(utilisateur: Utilisateur) {
    return this._http.post<Utilisateur>('http://localhost:8080/login/update', utilisateur, httpOptions).subscribe(
      value => {
        console.log(value)
        this._router.navigate(["/Accueil"])
      }, err => console.log(err)
    );
  }

  deconnect() {
    return this._http.get('http://localhost:8080/login/logMeOut', httpOptions).subscribe(
      result => {
        this.changeConnectionStatus(false)
        this._router.navigate(['/Accueil'])
        sessionStorage.setItem('ROLE', 'GUEST')
        location.reload()
        return of(result);
      }
    );
  }

  connect(utilisateur: Utilisateur) {
    let authHeader: string = btoa(utilisateur.email + ":" + utilisateur.password);
    let httpOptionsWithCredentials = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": "Basic " + authHeader
      }),
      withCredentials: true
    };
    return this._http.get<Utilisateur>('http://localhost:8080/login/user', httpOptionsWithCredentials).subscribe(
      result => {
        this.changeConnectionStatus(true)
        if (result.role == "ADMIN") {
          sessionStorage.setItem('ROLE', 'ADMIN');
          this._router.navigate(["/Admin"])
        } else {
          sessionStorage.setItem('ROLE', 'GUEST');
          this._router.navigate(["/Accueil"])

        }
        location.reload()
        return of(result);
      }
    );
  }

  loggedInUser(): Observable<Utilisateur> {
    return this._http.get<Utilisateur>('http://localhost:8080/login/user', httpOptions);
  }

  getUserbyEmail(email: string): Observable<Utilisateur> {
    return this._http.post<Utilisateur>('http://localhost:8080/login/email', email, httpOptions);
  }
}
