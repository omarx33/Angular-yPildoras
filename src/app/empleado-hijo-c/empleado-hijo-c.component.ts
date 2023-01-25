import { Component, Input } from '@angular/core';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-empleado-hijo-c',
  templateUrl: './empleado-hijo-c.component.html',
  styleUrls: ['./empleado-hijo-c.component.css']
})
export class EmpleadoHijoCComponent{

// jala modelo Empleado
@Input() empleadoLista:Empleado; // si va error cancelar el uso stricta (eso obliga a iniciar las variables)
@Input() indice:number;


// para output
arrayCaracteristicas = [''];

agregarCaracteristica(nuevaCaracteristica: string){
    this.arrayCaracteristicas.push(nuevaCaracteristica);
}

}
