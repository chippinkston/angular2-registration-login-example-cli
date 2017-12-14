import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;

    constructor() { }

    ngOnInit() {

    }


}
