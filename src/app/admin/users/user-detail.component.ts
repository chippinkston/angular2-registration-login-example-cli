import {Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Location } from '@angular/common';

import { User } from "../../_models/";
import { UserService} from "../../_services/";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user.details.html'
})
export class UserDetailComponent implements OnInit {
  @Input() user: User;

  constructor(private route: ActivatedRoute,private userService: UserService, private location: Location) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.getUser(id)
      .subscribe(user => this.user = user);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.userService.updateUser(this.user)
      .subscribe(() => this.goBack());
  }

}
