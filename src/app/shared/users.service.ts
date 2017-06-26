import {Injectable, Inject} from '@angular/core';
import {Http, Response, Headers, RequestOptions,
     RequestOptionsArgs} from '@angular/http';
import {User} from '../users/user';
import {Post} from '../posts/post';
import {Comment} from '../posts/comment';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';


Injectable()
export class UsersService{
    private _baseUrl = "https://jsonplaceholder.typicode.com/users";
    private _postUrl = "https://jsonplaceholder.typicode.com/posts";
    private _commentUrl = "https://jsonplaceholder.typicode.com/comments"; 
    private _avatartUrl = "http://lorempixel.com/100/100/people/?1";   

    constructor(@Inject(Http) private _http : Http){
    }
    getUsers() : Observable<User[]>{
        return this._http.get(this._baseUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }
    
    private extractData(res: Response) {
        let body = res.json();
        return body || { };
    }

    private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            //errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
            errMsg = `There was a problem fetching the 
                      data from the server with error code: ${ error.status}`;
                      
        } else {
             errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

    getUser(id:number) : Observable<User>{
        return this._http.get(this._baseUrl +"/"+id)
            .map(this.extractData)
            .catch(this.handleError);
    }
    saveUser(user:User) :Observable<Response> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.post(this._baseUrl, 
                               JSON.stringify(user), options)
           .map(res  => res.json())
           .catch(this.handleError);
    }
    deleteUser(id:number){
        return this._http.delete(this._baseUrl +"/"+id)
       .map(res => res.json())
       .catch(this.handleError);
    }

    getPosts(filter? : any) : Observable<Post[]>{
        
        var url = this._postUrl;      
        if (filter && filter.userId)
            url += "?userId=" + filter.userId;

        return this._http.get(url)
            .map(this.extractData)
            .catch(this.handleError);
    }

    getComments(postId : number){
        //fetch only comments related to currently selected post
        let options = new RequestOptions({search:{postId:postId}});
        return this._http.get(this._commentUrl, options )
        .map(this.extractData)
        .catch(this.handleError);
    }

    getRandomAvatar(){
        return this._http.get(this._avatartUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }

    getUserPosts(userId : number){
        //fetch only posts related to currently selected user
        let options = new RequestOptions({search:{userId:userId}});
        return this._http.get(this._postUrl, options )
        .map(this.extractData)
        .catch(this.handleError);
    }
}