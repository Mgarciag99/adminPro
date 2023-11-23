import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  public formSubmitted = false;

  public registerForm = this.FormBuilder.group({
    name: ['', [ Validators.required, Validators.minLength(3) ]],
    email: [ '', [ Validators.required, Validators.email]],
    password: [ '', [ Validators.required ]],
    password2: [ '', [ Validators.required ]],  
    terms: [ false, [ Validators.required ]],  

  }, {
    Validators: this.passwordEquals( 'password', 'password2' )
  })

  constructor(
    private FormBuilder: FormBuilder,
    private UserService: UserService,
    private Router: Router
  ){

  }

  passwordValidation(): boolean{
    const pass1 = this.registerForm.get('password')?.value;
    const pass2 = this.registerForm.get('password2')?.value;
    if( (pass1 === pass2) && this.formSubmitted ){
      return true;
    }else{
      return false;
    }
  }

  passwordEquals( pass1Name: string, pass2Name: string ){
    return ( FormGroup: FormGroup ) =>{
      const pass1Control = FormGroup.get(pass1Name);
      const pass2Control = FormGroup.get(pass2Name);
      if( pass1Control?.value === pass2Control?.value ){
        pass2Control?.setErrors(null);
      }else{
        pass2Control?.setErrors({ notEqual: true })
      }

    }
  }

  createUser(){
    this.formSubmitted = true;
    if( this.registerForm.invalid ){
      return;
    }
    //make the post
    this.UserService.createUser( this.registerForm.value )
    .subscribe( data => {
      this.Router.navigateByUrl('/');
    }, (err) => {
      Swal.fire('Error', err.error.msg, 'error');
    })

  }

  inputNotValid( input: string ): boolean{
    if( this.registerForm.get( input )?.invalid && this.formSubmitted ){
      return true
    }else{
      return false;
    }
  }

}
