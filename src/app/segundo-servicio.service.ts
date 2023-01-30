import { Injectable } from '@angular/core';
import { Empleado } from './empleado.model';
import { ServicioEmpladosService } from './servicio-emplados.service';
import { DataServices } from './data.services';

@Injectable() // este en el servicio que trae de otro servicio


export class SegundoServicioService {
//inyectar los servicios que usará
  constructor(private servicioVentanaEmergente: ServicioEmpladosService, private dataService:DataServices) { }

  setEmpleados(misEmpleados:Empleado[]){
    this.empleados=misEmpleados; // se agrega a la lista de empleados cada que llega 1 nuevo
  }

  obtenerEmpleados(){
    return this.dataService.listarEmpleados(); //observable son operaciones ascincronas
  }
  empleados:Empleado[]=[];
/*
  empleados:Empleado[]=[
    new Empleado("omar","mori","analista",1500),
    new Empleado("josue","salas","bd admin",2500),
    new Empleado("marco","garcia","soporte",2200)
  ]; */

  agregarEmpleadoServicio(empleado:Empleado){

    this.servicioVentanaEmergente.muestraMensaje("nueva persona: "+ "\n" + empleado.nombre+ "\n"
    + empleado.apellido+ "\n"
    + empleado.cargo+ "\n" +empleado.salario);
    this.empleados.push(empleado);

    this.dataService.guardarEmpleados(this.empleados); //envia al post del servicio y registra

  }

  encontrarEmpleado(id:number){
      let empleado:Empleado=this.empleados[id];
      return empleado;
  }

  actualizarEmpleadoServicio(id:number,empleado:Empleado){ // creando el array para bd
    let empleadoModificado=this.empleados[id];
    empleadoModificado.nombre=empleado.nombre;
    empleadoModificado.apellido=empleado.apellido;
    empleadoModificado.cargo=empleado.cargo;
    empleadoModificado.salario=empleado.salario;

    this.dataService.actualizarEmpleado(id,empleado);

  }

  eliminarEmpleadoServicio(id:number){
     this.empleados.splice(id,1); //splice eliminar 1 empleado en el array visual

     this.dataService.eliminarEmpleado(id); // en bd

   // volver a guardar los empleados para reconstruir el indice, esto si en ves de id usas contador atumatico de js
   if(this.empleados!= null){
    this.dataService.guardarEmpleados(this.empleados);
   }

  }

}
