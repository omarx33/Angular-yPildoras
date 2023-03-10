import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { ServicioEmpladosService } from '../servicio-emplados.service';
import { SegundoServicioService } from '../segundo-servicio.service';

@Component({
  selector: 'app-proyectos-component',
  templateUrl: './proyectos-component.component.html',
  styleUrls: ['./proyectos-component.component.css']
})
export class ProyectosComponentComponent {

  constructor(private ruta:Router,private miServicio:ServicioEmpladosService,
    private segundoServicio: SegundoServicioService){

  }
  empleados:Empleado[]=[];
  ngOnInit(): void {
    this.empleados=this.segundoServicio.empleados; //almacena info segundo servicio
  }

  volverHome(){
    this.ruta.navigate(['']);
  }

  agregarEmpleado(){
    let miEmpleado = new Empleado (this.cuadroNombre,this.cuadroApellido,this.cuadroCargo,this.cuadroSalario);

    //this.miServicio.muestraMensaje es equivalente al nombreclase->ejemplo(); en php
    //this.miServicio.muestraMensaje("Información del empleado: "+ miEmpleado.nombre); //usando el servicio

    this.segundoServicio.agregarEmpleadoServicio(miEmpleado); //segundo servicio
    this.ruta.navigate(['']);
  }

  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;
}
