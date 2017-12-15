import { Component } from '@angular/core';
import { AuthGuard, AdminGuard} from "./_guards";
import '../assets/app.css';

@Component({
    moduleId: module.id.toString(),
    selector: 'app',
    templateUrl: 'app.component.html'
})

export class AppComponent {

  constructor(private adminGuard: AdminGuard, private authGuard: AuthGuard) {}

}
