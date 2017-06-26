import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Rx';
import {UsersService} from "../shared/users.service";
import {User} from './user';
//import 'rxjs/add/operator/map';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styles:['.btn{margin-bottom:10px;} a{cursor:pointer}']
})
export class UsersComponent implements OnInit { 
    title = 'Users';
    errorMessage = "";
    errorExists = false;
    users: any[];
    constructor(
        private _usersService : UsersService, 
        private _route : Router
        ){
    }
    ngOnInit(){
        this._usersService.getUsers().subscribe(
            res => {
               this.users = res;
            },
            error =>  {
                this.errorMessage = <any>error;
                this.errorExists = true;
            }
        );
    }
    addUser(){
        this._route.navigate(['adduser/new']);
        
    }
   
    deleteUser(user:any, index:number){
        if (!confirm("Are you sure you want to delete " + user.name + "?")){
            return;
        }
        //var index = this.users.indexOf(user)
			// Here, with the splice method, we remove 1 object
            // at the given index.
        this.users.splice(index, 1);

		this._usersService.deleteUser(user.id)
			.subscribe(
            null, 
			err => 
            {
				alert("Could not delete the user.");
                // Revert the view back to its original state
                // by putting the user object at the index
                // it used to be.
				this.users.splice(index, 0, user);
			}
        );
    }
}
