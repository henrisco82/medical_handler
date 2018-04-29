import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordValidator } from './passwordValidator';
import { LoginService } from './login.service';
import { AuthService } from '../services/auth.service';
import { Router, ActivatedRoute} from '@angular/router';


@Component({
  moduleId: module.id,
  selector: 'login',
  templateUrl: 'login.component.html',
  providers: [LoginService, AuthService]
})




export class LoginComponent implements OnInit { 

    form : FormGroup;
    
    IsLoggedIn = false;
  
    loading = false;
    returnUrl: string;

    constructor(
      fb: FormBuilder, 
      private _loginService: LoginService, 
      private router: Router,
     private route: ActivatedRoute
    ){
         
        this.form = fb.group({  
            username: ['',Validators.required],
            password: ['',Validators.compose([Validators.required,PasswordValidator.cannotContainSpace])]
     })
     

    }

   login(){
        
        this.loading = true;
        this._loginService.login(this.form.controls['username'].value,  this.form.controls['password'].value)
            .subscribe(
                data => {
                    this.IsLoggedIn = true;
                    var user = JSON.parse(sessionStorage.getItem('currentUser'));
                    console.log(user);
                    if(user.admin)
                    {
                       this.router.navigate(["/Home"]); 
                    }
                    else{
                         this.router.navigate(["/Public"]); 
                    }
                     
                },
                error => {
                    this.loading = false;
                     this.form.controls['password'].setErrors({ invalidLogin: true});
                });
     }
     
   ngOnInit(){
         // resets login status
        this._loginService.logout();

        // gets return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
   }
}
