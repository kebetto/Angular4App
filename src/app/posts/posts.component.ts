import { Component, OnInit, OnDestroy } from '@angular/core';

import { UsersService }      from '../shared/users.service';
import {Post}                from './post';
import {User}                from '../users/user';
import { Subject }           from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

declare var _: _.UnderscoreStatic;

@Component({
    templateUrl: 'app/posts/posts.component.html',
    styles: [`
        .posts li { cursor: default; }
        .posts li:hover { background: #ecf0f1; } 
        .list-group-item.active, 
        .list-group-item.active:hover, 
        .list-group-item.active:focus { 
            background-color: #ecf0f1;
            border-color: #ecf0f1; 
            color: #2c3e50;
        }
    `]
})
export class PostsComponent implements OnInit, OnDestroy {
   private ngUnsubscribe: Subject<void> = new Subject<void>();
	  posts : Post[];
    pagedPosts : Post[];
    users : User[];
    postsLoading : boolean;
    commentsLoading : boolean;
    currentPost : Post;
    pageSize = 10;
    hidePagination = false;
    
    constructor(
        //private _postService: PostService,
        private _userService: UsersService) {
	}

	ngOnInit() {
        this.loadUsers();
        this.loadPosts();        
	}
    
    private loadUsers(){
        this._userService.getUsers()
            .subscribe(users => this.users = users);
    }
    
    private loadPosts(filter? : any){
        this.postsLoading = true; 
	     	this._userService.getPosts(filter)
         //call to takeUntil() will guarantee all subscriptions will be cleaned 
        //up when the component is destroyed.
        .takeUntil(this.ngUnsubscribe)
		  	.subscribe(
            posts => {
               //console.log(this.posts);
               this.posts = posts;
               this.pagedPosts = _.take(this.posts, this.pageSize);           
            },
            null,
            //shows the spinner
            () => { this.postsLoading = false; });
    }
    
    reloadPosts(filter : any){
        // Hide pagination when loading posts from dropdown
        if (filter && filter.userId !== ""){
          this.hidePagination = true;
        }
        else this.hidePagination = false;

        this.currentPost = null;
        this.loadPosts(filter);
    }
    
    select(post : Post){
		this.currentPost = post; 
        this.commentsLoading = true;
        this._userService.getComments(post.id)
        //call to takeUntil() will guarantee all subscriptions will be cleaned 
        //up when the component is destroyed.
        .takeUntil(this.ngUnsubscribe)
			  .subscribe(
            comments => 
              this.currentPost.comments = comments,
            null,
            () => this.commentsLoading = false); 
    } 
    
	onPageChanged(page : number) {
        this.currentPost = null;
        //displays the next 10 apges, if any
        var startIndex = (page - 1) * this.pageSize;
        this.pagedPosts = _.take(_.rest(this.posts, startIndex), this.pageSize);
	}

  ngOnDestroy() {
     //cleaning unused subscriptions
      this.ngUnsubscribe.next();
      this.ngUnsubscribe.complete();
    }
}