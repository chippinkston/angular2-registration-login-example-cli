import { Injectable } from '@angular/core';
import { User } from '../_models/';
import { MessageService} from "./message.service";

@Injectable()
export class ValidationService {

  userProfile: User;
  loggedIn: boolean = false;
  validations: string[] = [];

  constructor(
    private messageService: MessageService
  ) { }

  public logIn(username: string, password: string): boolean {
    let validUsername = this.checkUsername(username);
    let validPassword = this.checkPassword(password);
    if(validUsername && validPassword){
      this.setLoginStatus(true);
      let alice = "{\"id\":1,\"username\":\"Alice\",\"password\":\"alice\",\"apikey\":\"foo-bar-baz\",\"isadmin\":false}";
      this.userProfile = JSON.parse(alice);
      localStorage.setItem('currentUser', alice);
    }else{
      this.setLoginStatus(false);
    }
    this.persistValidations();
    return this.loggedIn;
  }

  public logOut(): boolean{
    this.setLoginStatus(false);
    localStorage.removeItem('currentUser');
    return true;
  }


  private checkUsername(username: string): boolean{
    this.validations.push(`Validation: Checked Username: ${username}`);
    return true;
  }

  private checkPassword(password: string): boolean{
    this.validations.push(`Validation: Checked Password: ${password}`);
    return true;
  }

  private persistValidations(): void{
    if(this.validations.length){
      for(let error of this.validations){
        this.messageService.add(error);
      }
    }
  }

  private setLoginStatus(status: boolean) : boolean{
    this.loggedIn = status;
    return this.loggedIn;
  }

}
