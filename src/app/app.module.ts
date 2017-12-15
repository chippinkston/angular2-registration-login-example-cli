import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from "./_services/in-memory-data.service";

import { AppComponent }  from './app.component';
import { AppRoutingModule } from './app.routing';

import { AlertComponent } from './_directives/';
import { AuthGuard, AdminGuard } from './_guards/';
import { AlertService, AuthenticationService, UserService, OrderService, MessageService, WidgetService, ValidationService } from './_services/';
import { HomeComponent } from './home/';
import { LoginComponent } from './login/';
import { RegisterComponent } from './register/';
import { AdminComponent } from './admin/';
import { CreditsComponent } from './credits/';
import { UsersComponent, UserDetailComponent } from './admin/users/';
import { WidgetsComponent, WidgetDetailsComponent } from './admin/widgets/';
import { MessagesComponent } from './messages/messages.component';

// used to create fake backend
import { fakeBackendProvider } from './_helpers/';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        HttpClientInMemoryWebApiModule.forRoot(
          InMemoryDataService, { dataEncapsulation: false }
        ),
        AppRoutingModule
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
        UserDetailComponent,
        MessagesComponent,
        WidgetDetailsComponent
    ],
    providers: [
        AuthGuard,
        AdminGuard,
        AlertService,
        AuthenticationService,
        UserService,
        WidgetService,
        OrderService,
        MessageService,
        ValidationService,

        // providers used to create fake backend
        fakeBackendProvider,
        MockBackend,
        BaseRequestOptions
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
