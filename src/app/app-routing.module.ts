import { NgModule }             from '@angular/core';
import { RouterModule, Routes}  from '@angular/router';
import {UsersRoutingModule}     from './users/users-routing-module';

import { AppComponent }    from './app.component';
import {NavBarComponent}   from './nav-bar.component';
import {PostsComponent}    from './posts/posts.component';
import {UsersComponent}    from './users/users.component';
import {HomeComponent}     from './home.component';
import {AddUserComponent}  from './users/add-user.component';
//import {EditUserComponent} from './users/edit-user.component';
import {AuthGard}          from './auth-gard.service';
import {AwayFromPageGuard} from './away-from-page-guard.service';

const appRoutes: Routes = [
  { path: 'posts', component: PostsComponent },
  { path: 'home', component: HomeComponent },

  { 
    path: 'adduser/new', component: AddUserComponent,
    canDeactivate: [AwayFromPageGuard],
    //canActivate: [AuthGard]
  },
  
  { path: '', redirectTo: '/home', pathMatch: 'full'  }, 
  { path: '**', component: HomeComponent }
]
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}