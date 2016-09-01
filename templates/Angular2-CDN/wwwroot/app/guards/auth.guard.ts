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
        console.log("Actaivated Route");
        return true;

        //let url: string = "";
        //this._activatedRoute.url.subscribe(res => {
        //    url = res[0].path;
        //});

        //if (this.publicRoutes[url] || tokenNotExpired('jwt')) {
        //    return true;
        //}

        //this._router.navigate(['/login']);
        //return false;
    }
}