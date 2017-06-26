import { Component } from '@angular/core';

@Component({
  selector: 'navbar',
  template: `
  <nav class="navbar navbar-default">
     <div class="container-fluid">
        <div class="navbar-header">
           <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" routerLink="/home" 
            routerLinkActive="active-link">ngProject</a>
          <a class="navbar-brand" routerLink="/users" 
            routerLinkActive="active-link">Users</a>
          <a class="navbar-brand" routerLink="/posts" 
            routerLinkActive="active-link">Posts</a>
       </div>
    </div>
  </nav>
  `,
  styles:['.active-link{background-color: #000}' +
           'nav{position:fixed; top: 0px; width: 100%; z-index: 100}']
})
export class NavBarComponent  { }
