///<reference path="../../../node_modules/rxjs/Observable.d.ts"/>
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { User } from '../_models/index';
import { UserService } from './user.service';
import { MessageService } from './message.service';
import {Observer} from "rxjs/Observer";

@Injectable()
export class AuthenticationService {

  users: User[];

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
    private userService: UserService
  ) { }

  login(username: string, password: string): boolean {
    let validUser: boolean = false;
    //this.users = this.userList();
    //this.userService.getUsers().subscribe(this.usersWatcher);
//     this.userService.getUsers().subscribe(function (users:User[]) {
// //      console.log(users);
//       for(let u in users) {
// //        console.log(users[u]);
//         if (users[u].username == username && users[u].password == password) {
//           localStorage.setItem('currentUser', JSON.stringify(users[u]));
// //          this.messageService.add(`User ${username} Logged in`);
//           validUser = true;
//         }
//       }
//       return validUser;
//     });
//     if(validUser){
//       this.messageService(`User ${username} Logged In`);
//     }
    console.log(`is user value: ${validUser}`)
    return validUser;
  }


  logout() {
      // remove user from local storage to log user out
      localStorage.removeItem('currentUser');
  }

}
