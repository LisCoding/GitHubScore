import { Component } from '@angular/core';
import { GithubService } from './github.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  userExists: boolean = null;
  score: number = null;
  username: string = null;
  promise;

  constructor(private _githubService: GithubService){} // injecting our service and will give us access to methods in github.service.ts

  calculateScore(){
    console.log("are u here!!!")
    this.promise = this._githubService.retrieveUser(this.username);
    if(this.promise){
      this.promise.then(user => {
      if(user.id){
        this.userExists = true;
        this.score = user.public_rep + user.followers;
      } else {
          this.userExists = false;
          this.score = null;
      }
      this.username = null
      })
      .catch( err => {
        this.userExists = false;
      });
    }else{
      this.userExists = false;
    }
  }
}
