import {Injectable, Inject} from '@angular/core';
import {CanActivate, CanDeactivate, 
        ActivatedRouteSnapshot, RouterStateSnapshot} 
        from '@angular/router';
import {FormGroup} from '@angular/forms'
import {AddUserComponent} from './users/add-user.component';

Injectable()
export class AwayFromPageGuard implements CanDeactivate<any>{

    constructor(){

    }
    canDeactivate(component: AddUserComponent){
       //return false;
       //console.log(component.form);
       if (component.form.dirty){
           return confirm("Are you sure?");
       }
       return true;
    }
}
