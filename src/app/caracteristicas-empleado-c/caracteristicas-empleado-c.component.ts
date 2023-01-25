import { Component, EventEmitter, Output } from '@angular/core';
import { ServicioEmpladosService } from '../servicio-emplados.service';

@Component({
  selector: 'app-caracteristicas-empleado-c',
  templateUrl: './caracteristicas-empleado-c.component.html',
  styleUrls: ['./caracteristicas-empleado-c.component.css']
})
export class CaracteristicasEmpleadoCComponent {

 // constructor(private servicioNieto:ServicioEmpladosService){} // jalando la clase servicio



// estos son datos fijos para output que enviara y recibira el padre
@Output() caracteristicasEmpleado = new EventEmitter<string>();

//esto manda el valor al padre
    agregaCaracteristicas(value:string){

    //this.servicioNieto.muestraMensaje(value); // usando el servcio

      this.caracteristicasEmpleado.emit(value);
    }



}
