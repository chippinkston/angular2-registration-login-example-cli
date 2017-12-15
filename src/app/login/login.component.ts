import {Component, Input, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { Location } from '@angular/common';

import { User } from "../_models/";
import { AuthenticationService, MessageService, ValidationService } from "../_services/";


@Component({
    moduleId: module.id.toString(),
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
  @Input() user: User;
    model: any = {};
    loading = false;
    returnUrl: string = 'home';

    constructor(
      private route: ActivatedRoute,
      private router: Router,
      private authenticationService: AuthenticationService,
      private validationService: ValidationService,
      private messageService: MessageService,
      private location: Location
    ) { }

  ngOnInit() {
    // reset login status
    this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
    this.loading = true;
    if(this.validationService.logIn(this.model.username, this.model.password)){
      this.router.navigate([this.returnUrl]);
    }else{
      this.loading = false;
    }
  }

}
