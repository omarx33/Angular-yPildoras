import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginServices } from './login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  //importando el servicio LoginServices
  constructor(private loginServicio:LoginServices){}

  login(datosFormulario:NgForm){ // para formularios como serialize
    const mail = datosFormulario.value.email;
    const clave = datosFormulario.value.password;

    this.loginServicio.login(mail,clave);

  }

}
