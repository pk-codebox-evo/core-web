import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from './login-service';

@Injectable()
export class DotRouterService {
    constructor(private router: Router, private loginService: LoginService) {
    }

    public goToMain(): void {
        this.router.navigate(['/c']);
    }

    public goToLogin(parameters?: any): void {
        this.router.navigate(['/public/login'], parameters);
    }

    public goToURL(url: string): void {
        this.router.navigate([url]);
    }

    public isPublicUrl(url: string): boolean {
        return url.startsWith('/public');
    }

    public isFromCoreUrl(url: string): boolean {
        return url.startsWith('/fromCore');
    }

    public isRootUrl(url: string): boolean {
        return url === '/';
    }

    public goToRoot(): void {
        if (!this.loginService.isLogin) {
            this.goToLogin();
        } else {
            this.goToMain();
        }
    }

    public gotoPortlet(portletId: string): void {
        this.router.navigate([`c/${portletId.replace(' ', '_')}`]);
    }

    public goToForgotPassword(): void {
        this.router.navigate(['/public/forgotPassword']);
    }

    public goToNotLicensed(): void {
        this.router.navigate(['c/notLicensed']);
    }
}
