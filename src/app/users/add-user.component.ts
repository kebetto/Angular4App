import { Component,
         OnInit, OnDestroy  }   from '@angular/core';
import { 
         FormControl, 
         FormGroup, Validators, 
         FormBuilder}           from '@angular/forms';
import {Response}               from '@angular/http';
import {Observable}             from 'rxjs/Rx';
import { Subject }              from 'rxjs/Subject';
import {
        ActivatedRoute, 
        Params, 
        Router}                 from '@angular/router';
import {UsersService}           from '../shared/users.service'
import { User }                 from './user';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'adduser',
  templateUrl:'./add-user-form.html' ,
  styles:['form{width:60%; height: 50%}.fence{border:1px solid #dce4ec; padding:15px; }'+
          '.btn{margin-top: 10px;} h3{text-align: center;}']
})
export class AddUserComponent implements 
             GuardInterface, OnDestroy, OnInit{ 
    title = 'Add User';
    errorMessage = "";
    id : number;
    form: FormGroup;
    user = new User();
    private ngUnsubscribe: Subject<void> = new Subject<void>();

    constructor(
        private fb : FormBuilder,
        private _activatedRoute: ActivatedRoute,
        private _usersService: UsersService,
        private _route : Router){ }
    
    ngOnInit(){
       this.form  = this.fb.group({
       'name': [this.user.name,
               [Validators.required, 
               Validators.minLength(5),
               //InputValidator.NotAllEmpty
               ]
        ] ,
       'email': [Validators.required, Validators.email],
       'phone' : [],
       'street': [],
       'suite' : [],
       'city'  : [],
       'zipcode': []
        });

        //Fetch user data 
        this.getUser();
    }
    
    save() {
        this._usersService.saveUser(this.user)
        .takeUntil(this.ngUnsubscribe)
        .subscribe(
            result => {
                //this. _route.navigate(['/users'])
                this.form.markAsPristine();
            },
            error => {
                this.errorMessage = <any>error;
            }
        );
    }

    getUser(){
       this._activatedRoute.params
       .takeUntil(this.ngUnsubscribe)
       .subscribe(params => this.id =  +params['id']);
       //console.log(this.id);
       if (this.id){
            this._usersService.getUser(this.id)
            .subscribe(user => {     
                this.user = user;
                this.title = "Edit User";
            },
            error => {
                this.errorMessage = <any>error;
            });
        }
    }

    ngOnDestroy() {
     //cleaning unused subscriptions
      this.ngUnsubscribe.next();
      this.ngUnsubscribe.complete();
    }
}

interface GuardInterface{
    form: FormGroup;
}
