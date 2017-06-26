import { NgModule }      from '@angular/core';
import { RouterModule, Routes}  from '@angular/router';
import {UsersComponent}    from './users.component';
import {AddUserComponent}  from './add-user.component';
import {AuthGard}          from '../auth-gard.service';
import {AwayFromPageGuard} from '../away-from-page-guard.service';

const usersRoutes: Routes = [
  { 
    path: 'adduser/new', component: AddUserComponent,
    canDeactivate: [AwayFromPageGuard],
    //canActivate: [AuthGard]
  },
  {
      path: 'users', 
      component: UsersComponent
  },
  {
      path:'users/:id', component:AddUserComponent
  }
]
@NgModule({
  imports: [
    RouterModule.forChild(usersRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class UsersRoutingModule {}