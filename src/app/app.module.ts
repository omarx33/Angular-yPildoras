import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmpleadoHijoCComponent } from './empleado-hijo-c/empleado-hijo-c.component';
import { CaracteristicasEmpleadoCComponent } from './caracteristicas-empleado-c/caracteristicas-empleado-c.component';
import { ServicioEmpladosService } from './servicio-emplados.service';
import { SegundoServicioService } from './segundo-servicio.service';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ProyectosComponentComponent } from './proyectos-component/proyectos-component.component';
import { QuienesComponentComponent } from './quienes-component/quienes-component.component';
import { ContactoComponentComponent } from './contacto-component/contacto-component.component';

import { RouterModule,Routes } from '@angular/router';
import { ActualizaComponentComponent } from './actualiza-component/actualiza-component.component'; //ruta
import { ErrorPersonalizadoComponent } from './error-personalizado/error-personalizado.component';
import { DataServices } from './data.services';

import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component'; // delclarar para post
import { LoginServices } from './login/login.service';
import { CookieService } from 'ngx-cookie-service';
import { LoginGuardian } from './login/login-guardian';

export const rutas: Routes = [

  {path:'',component:HomeComponentComponent},
  {path:'proyectos',component:ProyectosComponentComponent},
  {path:'quienes',component:QuienesComponentComponent, canActivate:[LoginGuardian]},
  {path:'contacto',component:ContactoComponentComponent, canActivate:[LoginGuardian]},
  {path:'actualiza/:id2',component:ActualizaComponentComponent},

  {path:'login',component:LoginComponent},

  {path:'**',component:ErrorPersonalizadoComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoHijoCComponent,
    CaracteristicasEmpleadoCComponent,
    HomeComponentComponent,
    ProyectosComponentComponent,
    QuienesComponentComponent,
    ContactoComponentComponent,
    ActualizaComponentComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(rutas),
    HttpClientModule // importar
  ],
  providers: [ServicioEmpladosService,SegundoServicioService,DataServices,LoginServices,
  CookieService,LoginGuardian
  ], //nuevos servicio DataServices
  bootstrap: [AppComponent]
})
export class AppModule { }
