import { Component } from '@angular/core';

import {NavBarComponent} from './nav-bar.component';
import {HomeComponent} from './home.component';
import {PostsComponent} from './posts/posts.component';
import {UsersComponent} from './users/users.component';
import {SpinnerComponent} from './shared/spinner.component';

@Component({
  selector: 'my-app',
  template: `
  <navbar></navbar>
  <router-outlet></router-outlet>
  `,
  styles:[]
})
export class AppComponent  { name = 'Angular'; }
