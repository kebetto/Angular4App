import {Injectable, Inject} from '@angular/core';
import {CanActivate, CanDeactivate} from '@angular/router';
//import {AddUserComponent} from './add-user.component';
import {AuthService} from './auth.service';

Injectable()
export class AuthGard implements CanActivate{

    constructor (@Inject(AuthService) private _authService: AuthService){
    }
    canActivate(){
       if (this._authService.isLoggedIn){
           return true;
       }
       //redirect user to login page
       //this._router.navigate(['login']);
       return false;
    }
}