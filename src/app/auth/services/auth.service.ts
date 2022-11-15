import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { Usuario, AuthResponse } from '../interfaces/auth.interface';
import { catchError, map, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseURL;
  private _usuario!: Usuario;

  constructor( private http:HttpClient ) { }

  get usuario () {
    return { ...this._usuario };  //destructucramos el usuario para evitar su mutabilidad en la aplicacion
  }


  login( email: string, password: string ) {
    const url = `${this.baseUrl}/auth/login`;
    const body = { email, password };
    return this.http.post<AuthResponse>(url, body).pipe(
      tap( resp => {
        if (resp.ok){
        }
      }),
      map( resp => resp.ok),
      catchError( err => of(false))
    );
  }
}
