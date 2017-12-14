import { Component, OnInit } from '@angular/core';
import { User } from "../../_models/user";
import { UserService} from "../../_services/user.service";

@Component({
  selector: 'admin-users',
  templateUrl: './users.component.html'
})

export class UsersComponent implements OnInit {

  selectedUser: User;
  users: User[];

  constructor(private userService: UserService) { }

  getAll(): void {
    console.log('~~~ call to load users ~~~');
    this.userService.getUsers()
      .subscribe(users => this.users = users);
    console.log('~~~ users returned ~~~');
  }

  ngOnInit() {
    this.getAll();
  }

}
