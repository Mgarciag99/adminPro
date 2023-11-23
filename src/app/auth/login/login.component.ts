import { Component, AfterViewInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import Swal from 'sweetalert2';
declare const google: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements AfterViewInit{

  @ViewChild('googleBtn') googleBtn!: ElementRef;

  constructor( 
    private FormBuilder: FormBuilder,
    private Router: Router,
    private UserService: UserService,
    private NgZone: NgZone
  ){
  }

  public formSubmitted = false;
  public loginForm = this.FormBuilder.group({
    email: [ localStorage.getItem('email') || '' , Validators.required],
    password: ['', Validators.required],
    remember: [false]
  })

  ngAfterViewInit(): void {
    this.googleInit();
  }

  googleInit(){

    google.accounts.id.initialize({
      client_id: '1008761211432-vnngpd74141rbveh8g5e0c5f698tjdgs.apps.googleusercontent.com',
      callback: (response: any) => this.handleCredentialResponse(response)
    });
    google.accounts.id.renderButton(
      this.googleBtn.nativeElement,
      { theme: "outline", size: "large" }  // customization attributes
    );
  }


  handleCredentialResponse( response: any ){
      console.log("Encoded JWT ID token: " + response.credential);
      this.UserService.loginGoogle( response.credential )
      .subscribe( resp => {
        this.Router.navigateByUrl('/');
      })
  }


  login(){
    this.UserService.login( this.loginForm.value )
    .subscribe(
      resp => {

        if( this.loginForm.get('remember')?.value ){
          let email: string = this.loginForm.get('email')?.value ?? '';
          localStorage.setItem('email', email );
        }else{
          localStorage.removeItem('email');
        }

        // this.NgZone.run(()=> {
          this.Router.navigateByUrl('/');
//        });

      }, (err) => {
        Swal.fire('Error', err.error.msg, 'error');
      }
    )
   
  }

}
