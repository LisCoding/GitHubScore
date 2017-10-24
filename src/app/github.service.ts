import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import "rxjs";

@Injectable()
export class GithubService {

  // I need to create an instance of http  in my constructor
  constructor(private _http: Http) { }  // creates an instance of Http object called '_http' that can be used below

  retrieveUser(username) {  //we can this function from app.component.ts
    console.log(this._http.get(`https://api.github.com/users/${username}`) )
    return this._http.get(`https://api.github.com/users/${username}`)
    .map( data => data.json() )
    .toPromise();
  }
}
