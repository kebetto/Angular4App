import {Injectable} from '@angular/core';

@Injectable()
export class AuthService{
   isLoggedIn = true;
   // In a real world app, we will check the user's credentials
   // with the server
   login(username:string, password:string){
       this.isLoggedIn = true;
   }

   logout(){
       this.isLoggedIn = false;
   }
}