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

  utilisateur: Utilisateur;

  private isConnectedSub = new Subject<boolean>();
  isConnected: Observable<boolean> = this.isConnectedSub.asObservable();

  changeConnectionStatus(isConnected: boolean) {
    this.isConnectedSub.next(isConnected)
  }

  constructor(private _http: HttpClient, private _router: Router) { }

  createUser(utilisateur: Utilisateur): Observable<Utilisateur> {
    return this._http.post<Utilisateur>('http://localhost:8080/login', utilisateur, httpOptions);
  }

  updateUser(utilisateur: Utilisateur) {
    return this._http.post<Utilisateur>('http://localhost:8080/login/update', utilisateur, httpOptions).subscribe(
      value => {
        console.log(value)
      }, err => console.log(err)
    );
  }

  deconnect() {
    return this._http.get('http://localhost:8080/login/logMeOut', httpOptions).subscribe(
      result => {
        this.changeConnectionStatus(false)
        this._router.navigate(['/Accueil'])
        return of(result);
      }
    );
  }

  connect(utilisateur: Utilisateur) {
    let authHeader: string = btoa(utilisateur.email + ":" + utilisateur.password);
    httpOptions.headers = httpOptions.headers.set("Authorization", "Basic " + authHeader);
    return this._http.get<Utilisateur>('http://localhost:8080/login/user', httpOptions).subscribe(
      result => {
        this.changeConnectionStatus(true)
        if (result.role == "ADMIN") {
          this._router.navigate(["/Admin"])
        } else {
          this._router.navigate(["/Accueil"])
        }
        return of(result);
      }
    );
  }

  loggedInUser(): Observable<Utilisateur> {
    return this._http.get<Utilisateur>('http://localhost:8080/login/user', httpOptions);
  }

  // deconnect() {
  //   return this._http.get('http://localhost:8080/login/logMeOut', httpOptions).subscribe(
  //     result => {
  //       this.changeConnectionStatus(false);
  //       return of(result);
  //     }
  //   );
  // }

  // connect(utilisateur: Utilisateur): Observable<Utilisateur> {
  //   let authHeader: string = btoa(utilisateur.email + ":" + utilisateur.password);
  //   httpOptions.headers = httpOptions.headers.set("Authorization", "Basic " + authHeader);
  //   return this._http.get<Utilisateur>('http://localhost:8080/login/user', httpOptions).toPromise()
  //     .then(
  //       result => {  
  //         this.changeConnectionStatus(false)
  //         return of (result);
  //       }
  //     );
  // }
}
