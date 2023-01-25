import { Injectable } from '@angular/core';
import { Empleado } from './empleado.model';
import { ServicioEmpladosService } from './servicio-emplados.service';

@Injectable() // este en el servicio que trae de otro servicio


export class SegundoServicioService { //export para compartirse

  constructor(private servicioVentanaEmergente: ServicioEmpladosService) { }


  empleados:Empleado[]=[
    new Empleado("omar","mori","analista",1500),
    new Empleado("josue","salas","bd admin",2500),
    new Empleado("marco","garcia","soporte",2200)
  ];

  agregarEmpleadoServicio(empleado:Empleado){

    this.servicioVentanaEmergente.muestraMensaje("nueva persona: "+ "\n" + empleado.nombre+ "\n"
    + empleado.apellido+ "\n"
    + empleado.cargo+ "\n" +empleado.salario);
    this.empleados.push(empleado);
  }

}
