"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var AuthGuard = (function () {
    function AuthGuard(_router, _activatedRoute) {
        this._router = _router;
        this._activatedRoute = _activatedRoute;
        this.publicRoutes = {
            'login': true
        };
    }
    AuthGuard.prototype.canActivate = function () {
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
    };
    AuthGuard = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject(router_1.Router)),
        __param(1, core_1.Inject(router_1.ActivatedRoute)), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute])
    ], AuthGuard);
    return AuthGuard;
}());
exports.AuthGuard = AuthGuard;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImd1YXJkcy9hdXRoLmd1YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQkFBc0MsZUFBZSxDQUFDLENBQUE7QUFDdEQsdUJBQW9ELGlCQUFpQixDQUFDLENBQUE7QUFJdEU7SUFHSSxtQkFBcUMsT0FBZSxFQUNoQixlQUErQjtRQUQ5QixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ2hCLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtRQUUvRCxJQUFJLENBQUMsWUFBWSxHQUFHO1lBQ2hCLE9BQU8sRUFBRSxJQUFJO1NBQ2hCLENBQUM7SUFDTixDQUFDO0lBRUQsK0JBQVcsR0FBWDtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUNoQyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBRVosdUJBQXVCO1FBQ3ZCLDZDQUE2QztRQUM3Qyx3QkFBd0I7UUFDeEIsS0FBSztRQUVMLHlEQUF5RDtRQUN6RCxrQkFBa0I7UUFDbEIsR0FBRztRQUVILG9DQUFvQztRQUNwQyxlQUFlO0lBQ25CLENBQUM7SUEzQkw7UUFBQyxpQkFBVSxFQUFFO21CQUlLLGFBQU0sQ0FBQyxlQUFNLENBQUM7bUJBQ3ZCLGFBQU0sQ0FBQyx1QkFBYyxDQUFDOztpQkFMbEI7SUE0QmIsZ0JBQUM7QUFBRCxDQTNCQSxBQTJCQyxJQUFBO0FBM0JZLGlCQUFTLFlBMkJyQixDQUFBIiwiZmlsZSI6Imd1YXJkcy9hdXRoLmd1YXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gICAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENhbkFjdGl2YXRlLCBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgdG9rZW5Ob3RFeHBpcmVkLCBBdXRoQ29uZmlnIH0gZnJvbSAnYW5ndWxhcjItand0JztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEF1dGhHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcclxuICAgIHB1YmxpY1JvdXRlczogYW55O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCBASW5qZWN0KFJvdXRlcikgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsXHJcbiAgICAgICAgQEluamVjdChBY3RpdmF0ZWRSb3V0ZSkgcHJpdmF0ZSBfYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7XHJcblxyXG4gICAgICAgIHRoaXMucHVibGljUm91dGVzID0ge1xyXG4gICAgICAgICAgICAnbG9naW4nOiB0cnVlXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBjYW5BY3RpdmF0ZSgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkFjdGFpdmF0ZWQgUm91dGVcIik7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgICAgIC8vbGV0IHVybDogc3RyaW5nID0gXCJcIjtcclxuICAgICAgICAvL3RoaXMuX2FjdGl2YXRlZFJvdXRlLnVybC5zdWJzY3JpYmUocmVzID0+IHtcclxuICAgICAgICAvLyAgICB1cmwgPSByZXNbMF0ucGF0aDtcclxuICAgICAgICAvL30pO1xyXG5cclxuICAgICAgICAvL2lmICh0aGlzLnB1YmxpY1JvdXRlc1t1cmxdIHx8IHRva2VuTm90RXhwaXJlZCgnand0JykpIHtcclxuICAgICAgICAvLyAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAvL31cclxuXHJcbiAgICAgICAgLy90aGlzLl9yb3V0ZXIubmF2aWdhdGUoWycvbG9naW4nXSk7XHJcbiAgICAgICAgLy9yZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
