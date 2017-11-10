import { Observable } from 'rxjs/Observable';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, CanActivateChild } from '@angular/router';

import { AcessoService } from './../services/acesso.service';

@Injectable()
export class SmarketAuthChildGuard implements CanActivateChild {

    constructor(
        private acessoService: AcessoService,
        private router: Router
    ) {

    }

    canActivateChild(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot)
        : boolean | Observable<boolean> | Promise<boolean> {
        if(this.acessoService.usuarioSmarketEstaAutenticado()){
            return true;
        }
        else{
            this.router.navigate(['/login-smarket']);
        }        
    }
}