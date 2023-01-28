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

export const rutas: Routes = [ // url creadas ruta lo que esta dentro de apostrofes

  {path:'',component:HomeComponentComponent},
  {path:'proyectos',component:ProyectosComponentComponent},
  {path:'quienes',component:QuienesComponentComponent},
  {path:'contacto',component:ContactoComponentComponent},
  {path:'actualiza/:id2',component:ActualizaComponentComponent},
  {path:'**',component:ErrorPersonalizadoComponent} //cualquier ruta errada ira aqui

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
    ActualizaComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(rutas) //ruta
  ],
  providers: [ServicioEmpladosService,SegundoServicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
