import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Empleado } from './empleado.model';
import { LoginServices } from './login/login.service';

@Injectable()

export class DataServices{

  constructor(private httpCliente:HttpClient,private loginServicio:LoginServices){}

  listarEmpleados(){
    const token=this.loginServicio.getIdToken();
    // obtener info de bd get
    return this.httpCliente.get('https://clientes-b8dd7-default-rtdb.firebaseio.com/datos.json?auth='+ token);
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

  actualizarEmpleado(id:number,empleado:Empleado){
      let url='https://clientes-b8dd7-default-rtdb.firebaseio.com/datos/'+id+'.json'; // en el url concatena el id

      this.httpCliente.put(url,empleado).subscribe(
        respuesta=>console.log("se guardo correctamente"+ respuesta),
        error=>console.log("Error: "+ error),
      )
  }

  eliminarEmpleado(id:number){
    let url='https://clientes-b8dd7-default-rtdb.firebaseio.com/datos/'+id+'.json'; // en el url concatena el id

    this.httpCliente.delete(url).subscribe(
      respuesta=>console.log("se elimino correctamente"+ respuesta),
      error=>console.log("Error: "+ error),
    )
}


}
