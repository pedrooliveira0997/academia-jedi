import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class EstudanteDetalheGuard implements CanActivate {

    constructor(private router: Router) {}

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean | Promise<boolean> | Observable<boolean> {
        let id = +next.url[1].path;
        if (isNaN(id) || id < 1 || id > 19) {
            alert("Ops! ID do Estudante Inválido  :’(");
            this.router.navigate(['/estudantes']);
            return false;
        }
            
        return true;
    }
}
