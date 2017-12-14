import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin/index';
import { AuthGuard } from './_guards/index';
import { CreditsComponent } from './credits/index';
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { UsersComponent, UserDetailComponent } from "./admin/users/index";
import {WidgetDetailsComponent, WidgetsComponent} from "./admin/widgets";

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'admin/users/delete/:id', component: UserDetailComponent },
    { path: 'admin/users/form/:id', component: UserDetailComponent },
    { path: 'admin/users/form', component: UserDetailComponent },
    { path: 'admin/users', component: UsersComponent },
    { path: 'admin/widgets/delete/:id', component: WidgetDetailsComponent },
    { path: 'admin/widgets/form/:id', component: WidgetDetailsComponent },
    { path: 'admin/widgets/form', component: WidgetDetailsComponent },
    { path: 'admin/widgets', component: WidgetsComponent },
    { path: 'admin', component: AdminComponent },
    { path: 'credits', component: CreditsComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const AppRoutingModule = RouterModule.forRoot(appRoutes);
