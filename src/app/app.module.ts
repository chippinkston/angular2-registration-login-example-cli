import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { AlertService, AuthenticationService, UserService, OrderService, MessageService, WidgetService } from './_services/index';
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { AdminComponent } from './admin/index';
import { CreditsComponent } from './credits/index';
import { UsersComponent, UserDetailComponent } from './admin/users/index';
import { WidgetsComponent } from './admin/widgets/index';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        AdminComponent,
        CreditsComponent,
        UsersComponent,
        WidgetsComponent,
        UserDetailComponent
    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        WidgetService,
        OrderService,
        MessageService,
        // providers used to create fake backend
        fakeBackendProvider,
        MockBackend,
        BaseRequestOptions
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }


/*

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { OrdersComponent } from './orders/orders.component';
import { WidgetsComponent } from './widgets/widgets.component';
import { AdminComponent } from './admin/admin.component';
import {UserService} from "./user.service";
import {WidgetService} from "./widget.service";
import {OrderService} from "./order.service";
import { MessageService } from './message.service';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    OrdersComponent,
    WidgetsComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    UserService,
    WidgetService,
    OrderService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
*/
