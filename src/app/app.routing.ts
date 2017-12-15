import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin/index';
import {AdminGuard, AuthGuard} from './_guards/index';
import { CreditsComponent } from './credits/index';
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { UsersComponent, UserDetailComponent } from "./admin/users/index";
import {WidgetDetailsComponent, WidgetsComponent} from "./admin/widgets";

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'admin', component: AdminComponent, canActivate: [AdminGuard]},
    { path: 'admin/users', component: UsersComponent },
    { path: 'admin/users/delete/:id', component: UserDetailComponent },
    { path: 'admin/users/form/:id', component: UserDetailComponent },
    { path: 'admin/widgets', component: WidgetsComponent },
    { path: 'admin/widgets/delete/:id', component: WidgetDetailsComponent },
    { path: 'admin/widgets/form/:id', component: WidgetDetailsComponent,  },
    { path: 'credits', component: CreditsComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '/home' }
];

export const AppRoutingModule = RouterModule.forRoot(appRoutes);
