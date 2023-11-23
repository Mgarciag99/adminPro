import { HttpClient } from '@angular/common/http';
import {Injectable, NgZone} from '@angular/core';
import { RegisterForm } from '../interfaces/register-form.interface';
import { environment } from 'src/environments/environments';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
const base_url = environment.base_url;

declare const google: any;

@Injectable({
  providedIn: 'root'
})

export class UserService {
  
  public auth2: any;
  public user!: User;

  constructor(
    private HttpClient: HttpClient,
    private Router: Router,
    private NgZone: NgZone
    ) { 
    }
  



  logout(){
    google.accounts.id.revoke('marcopc303@gmail.com', ()=> {
      this.NgZone.run(()=> {
        this.Router.navigateByUrl('/login');
      })
    });

  }


  validateToken() : Observable<boolean>{
    const token = localStorage.getItem('token') || '';
    return this.HttpClient.get( `${ base_url }/login/renew`, {
      headers: {
        'x-token': token
      }
    }).pipe(
      tap( (resp: any) => {
        const { email, google, name, role, img, uid } = resp.user;
        this.user = new User( name, email, google, '', img, role, uid);
        localStorage.setItem( 'token', resp.token )
      }),
      map( resp => 
        true
      ),
      catchError( error => of(false))
    )
  }


  createUser( formData: RegisterForm ){
    return this.HttpClient.post( `${ base_url }/users`, formData );
  }

  login( formData: any ){
    return this.HttpClient.post( `${ base_url }/login`, formData )
    .pipe(
      tap(
        (resp: any) => {
          localStorage.setItem( 'token', resp.token )
        }
      )
    )
    ;
  }

  loginGoogle( token: string ){
    return this.HttpClient.post(`${ base_url }/login/google`, { token })
    .pipe(
      tap( 
        (resp: any) => {
          localStorage.setItem( 'token', resp.token )
        }
      )
    )
  }
}
