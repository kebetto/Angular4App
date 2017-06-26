import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule }     from '@angular/http';
import {RouterModule, Router}  from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {UsersRoutingModule} from './users/users-routing-module';

import { AppComponent }      from './app.component';
import {NavBarComponent}     from './nav-bar.component';
import {PostsComponent}      from './posts/posts.component';
import {UsersComponent}      from './users/users.component';
import {AppRoutingModule}    from './app-routing.module';
import {HomeComponent}       from './home.component';
import {UsersService}        from './shared/users.service';
import {AddUserComponent}    from './users/add-user.component';
import {AuthService}         from './auth.service';
import {AuthGard}            from './auth-gard.service';
import {AwayFromPageGuard}   from './away-from-page-guard.service';
import {SpinnerComponent}    from './shared/spinner.component';
import {PaginationComponent} from './shared/pagination.component'

@NgModule({
  imports:      [ BrowserModule, HttpModule, 
                  RouterModule, UsersRoutingModule, AppRoutingModule, 
                  ReactiveFormsModule ],
  declarations: [ NavBarComponent, AppComponent, PostsComponent,
                  UsersComponent, HomeComponent, AddUserComponent, 
                  SpinnerComponent, PaginationComponent
                ],
  bootstrap:    [ AppComponent ],
  providers:    [UsersService, AuthService, AuthGard, 
                 AwayFromPageGuard]
})
export class AppModule {
  // Diagnostic only: inspect router configuration
  // constructor(router: Router) {
  //   console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  //}
}
