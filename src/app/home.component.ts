import { Component } from '@angular/core';
import {AuthService} from './auth.service';

@Component({
  selector: 'home',
  template: `
  <h2>{{title}}</h2>
  <div class="panel panel-default container">
    <div class="panel-heading">
        <h3 class="panel-title">App description</h3>
    </div>
    <div class="panel-body">
       This This app showcases most of the basic functionalities of an Angular web app.
       The users page displays a list of users info (name and email). The data
       is fetched from <a href ="https://jsonplaceholder.typicode.com/">JSONPlaceholder</a>,
       an online REST API for Testing and Prototyping, by sending HTTP requests. The 
       visitor will be able to edit, add or delete users. In a real world app,
       the users credentials would be ckecked against the data server to verify
       if they are allowed to perform such actions.
       The users list and the data server will be updated accordingly.<br />
       The Posts page displays on load all users' posts. A pagination menu will be used to 
       scroll thru all the posts by displaying 10 posts per page, if any. A dropdown menu
       displays all the users' names and the related page of posts from the selected 
       name will be displayed and the pagination menu will be hidden, if the user has 
       only 10 posts or less. By clicking on a post title, the related comments will display
       on the right side along with commenters' avatars, illustrating the so called master/detail
       pattern.
    </div>
  </div>
  `,
  styles:['.panel{width: 60%;}'+ 
          '.panel-heading{background-color: #2c3e50; color: #fff; '+
          'text-align: center}']
})
export class HomeComponent  { 
  title = 'Home'; 

  constructor(private _authService: AuthService){
    //this._authService.login("username","password");
  }
}
