import { Inject, Injectable }    from '@angular/core';
import { CanActivate, Router, ActivatedRoute } from '@angular/router';
import { tokenNotExpired, AuthConfig } from 'angular2-jwt';

@Injectable()
export class AuthGuard implements CanActivate {
    publicRoutes: any;

    constructor( @Inject(Router) private _router: Router,
        @Inject(ActivatedRoute) private _activatedRoute: ActivatedRoute) {

        this.publicRoutes = {
            'login': true
        };
    }

    canActivate() {
        console.log("Activated Route");

        return true;
    }
}