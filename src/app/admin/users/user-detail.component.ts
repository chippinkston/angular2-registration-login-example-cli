import {Component, OnDestroy, OnInit} from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { User } from "../../_models/user";
import { UserService} from "../../_services/user.service";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user.details.html'
})
export class UserDetailComponent implements OnInit, OnDestroy {

  id: number;
  user: User;

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  getSelectedUser(): void {
    console.log('~~~ call to get specific user: ' + this.id + '~~~');
    this.userService.getSpecificUser(this.id)
      .subscribe(user => this.user = user);
    console.log('~~~ user returned ~~~');
  }

  ngOnInit() {
    this.sub = this.route.queryParamMap.subscribe((params: Params) => {
      this.id = +params.get('id');
      console.log(params);
    });
    console.log('~~~ UserID '+ this.id + ' ~~~')
    this.getSelectedUser();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
