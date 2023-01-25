import { Component, OnInit } from '@angular/core';
import { Empleado } from './empleado.model';
import { ServicioEmpladosService } from './servicio-emplados.service';
import { SegundoServicioService } from './segundo-servicio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  titulo = 'Listado de empleados';

  // para el servicio se crea constructor

  constructor(private miServicio:ServicioEmpladosService,
  private segundoServicio: SegundoServicioService){ // inyectando en este componente el servicio creado

  }
  ngOnInit(): void {
    this.empleados=this.segundoServicio.empleados; //almacena info segundo servicio
  }

  empleados:Empleado[]=[];

  agregarEmpleado(){
    let miEmpleado = new Empleado (this.cuadroNombre,this.cuadroApellido,this.cuadroCargo,this.cuadroSalario);

    //this.miServicio.muestraMensaje es equivalente al nombreclase->ejemplo(); en php
    //this.miServicio.muestraMensaje("Información del empleado: "+ miEmpleado.nombre); //usando el servicio

    this.segundoServicio.agregarEmpleadoServicio(miEmpleado); //segundo servicio
  }

  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;

}
