import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages/pages.component';

import {NopagefoundComponent} from './shared/nopagefound/nopagefound.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';

import { Graficas1Component } from './pages/graficas1/graficas1.component';


const appRoutes: Routes = [
    {
        path: '',
        component: PagesComponent ,
        children: [
            { path: 'dashboard', component: DashboardComponent},
            { path: 'progess', component: ProgressComponent },
            { path: 'graficas1', component: Graficas1Component },
            { path: '', redirectTo: '/dashboard', pathMatch: 'full'}
        ]
    },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
       // { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
    { path: '**', component: NopagefoundComponent }
];

// tslint:disable-next-line: eofline
export const APP_ROUTES = RouterModule.forRoot( appRoutes, {useHash : true} );