import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { MessageService} from "../_services";
import { User } from '../_models/'

@Injectable()
export class AdminGuard implements CanActivate {

  currentUser: User;

  constructor(private router: Router, private messageService: MessageService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let data = localStorage.getItem('currentUser');
      if(data){
        this.currentUser = JSON.parse(data);
        console.log(this.currentUser);
        if (this.currentUser.isadmin) {
          this.messageService.add('Security: Admin Logged In');
          return true;
        }
      }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/home'], { queryParams: { returnUrl: state.url }});
    this.messageService.add('Security: Access Denied');
    return false;
  }
}
