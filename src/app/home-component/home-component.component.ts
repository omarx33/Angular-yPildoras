import { Component } from '@angular/core';
import { Empleado } from '../empleado.model';
import { ServicioEmpladosService } from '../servicio-emplados.service';
import { SegundoServicioService } from '../segundo-servicio.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent {

    titulo = 'Listado de empleados';

    constructor(private miServicio:ServicioEmpladosService,
  private segundoServicio: SegundoServicioService){}

    ngOnInit(): void {
    // this.empleados=this.segundoServicio.empleados; //almacena info segundo servicio

    this.segundoServicio.obtenerEmpleados().subscribe(misEmpleados=>{ //muestra el array
      console.log(misEmpleados);

      this.empleados=Object.values(misEmpleados);

      this.segundoServicio.setEmpleados(this.empleados);

    })

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
