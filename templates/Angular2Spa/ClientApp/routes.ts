import { RouterConfig } from '@angular/router';
import { Home } from './components/home/home';
import { FetchData } from './components/fetch-data/fetch-data';
import { Counter } from './components/counter/counter';

import {AuthGuard} from 'shared/guards/auth.guard';

export const routes: RouterConfig = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: Home },
    { path: 'counter', component: Counter, canActivate: [AuthGuard] },
    { path: 'fetch-data', component: FetchData, canActivate: [AuthGuard] },
    { path: '**', redirectTo: 'home' }
];
