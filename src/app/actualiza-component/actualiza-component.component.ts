import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { ServicioEmpladosService } from '../servicio-emplados.service';
import { SegundoServicioService } from '../segundo-servicio.service';

@Component({
  selector: 'app-actualiza-component',
  templateUrl: './actualiza-component.component.html',
  styleUrls: ['./actualiza-component.component.css']
})
export class ActualizaComponentComponent {

  constructor(private ruta:Router,private route: ActivatedRoute,private miServicio:ServicioEmpladosService,
    private segundoServicio: SegundoServicioService){

  }
  empleados:Empleado[]=[];

  accion:number; // almacena el valor de accion del url

  ngOnInit(): void {
    this.accion=parseInt(this.route.snapshot.queryParams['accion']); //con route accedemos a la ruta de esta pagina

    this.empleados=this.segundoServicio.empleados; //almacena info segundo servicio

    this.indice=this.route.snapshot.params['id2']; // capturamos el id del url (ActivatedRoute)

    let empleado:Empleado=this.segundoServicio.encontrarEmpleado(this.indice);

    this.cuadroNombre=empleado.nombre;
    this.cuadroApellido=empleado.apellido;
    this.cuadroCargo=empleado.cargo;
    this.cuadroSalario=empleado.salario;

  }

  volverHome(){
    this.ruta.navigate(['']);
  }
  /*
  actualizaEmpleado(){
    let miEmpleado = new Empleado (this.cuadroNombre,this.cuadroApellido,this.cuadroCargo,this.cuadroSalario);

    //this.miServicio.muestraMensaje es equivalente al nombreclase->ejemplo(); en php
    //this.miServicio.muestraMensaje("Información del empleado: "+ miEmpleado.nombre); //usando el servicio

    this.segundoServicio.actualizarEmpleadoServicio(this.indice,miEmpleado); //pasamos el id y la info que remplazara, es el servicio
    this.ruta.navigate(['']); // redirecciona a home
  }

  eliminaEmpleado(){
    this.segundoServicio.eliminarEmpleadoServicio(this.indice); //es el servicio
    this.ruta.navigate(['']); // redirecciona a home
  }
  */


  actualizaEmpleado(){

    if(this.accion== 1){
      let miEmpleado = new Empleado (this.cuadroNombre,this.cuadroApellido,this.cuadroCargo,this.cuadroSalario);

      this.segundoServicio.actualizarEmpleadoServicio(this.indice,miEmpleado);
      this.ruta.navigate(['']);
    }else{
      this.segundoServicio.eliminarEmpleadoServicio(this.indice);
      this.ruta.navigate(['']);
    }




  }

  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;

  indice: number; // almacena el id
}
