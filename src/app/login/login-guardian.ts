import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from "rxjs";
import { LoginServices } from './login.service';
import { Injectable } from '@angular/core';

@Injectable()

export class LoginGuardian implements CanActivate{

  constructor(private loginServicio:LoginServices, private ruta: Router){} //importamos o servicios

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if (this.loginServicio.estaLogueado()) {
      return true;
    }else{
      this.ruta.navigate(['login']);
      return false;
    }

  }


}
