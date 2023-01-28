import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Empleado } from './empleado.model';

@Injectable()

export class DataServices{

  constructor(private httpCliente:HttpClient){}

  listarEmpleados(){
    // obtener info de bd get
    return this.httpCliente.get('https://clientes-b8dd7-default-rtdb.firebaseio.com/datos.json');
  }


  guardarEmpleados(empleados:Empleado[]){
      //post para enviar informacion
   // this.httpCliente.post('https://clientes-b8dd7-default-rtdb.firebaseio.com/datos.json',empleados).subscribe(

      //put remplaza los datos que ya existen omite lo duplicado en bd
      this.httpCliente.put('https://clientes-b8dd7-default-rtdb.firebaseio.com/datos.json',empleados).subscribe(
      respuesta=>console.log("se guardo correctamente"+ respuesta),
      error=>console.log("Error: "+ error),
    )
  }

}
