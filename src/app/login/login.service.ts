import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { CookieService } from 'ngx-cookie-service';


@Injectable()
export class LoginServices{
  constructor(private ruta:Router, private cookies:CookieService){}

      token:string;

      login(email:string,password:string){
        firebase.auth().signInWithEmailAndPassword(email,password).then( //loguearse por email y clave
          response=>{
            firebase.auth().currentUser?.getIdToken().then(
             token=>{
              this.token=token;
              this.cookies.set("token",this.token); //creando cookie y dandole el vaor y nombre token
              this.ruta.navigate(['/']); // se genera token y redirecciona
             }
            )
          }
        );

      }
      getIdToken(){
          return this.cookies.get("token"); //recuperamos la cookie con su nombre
       // return this.token;
      }

      estaLogueado(){ //para el if del nav
        return this.cookies.get("token"); //recuperamos la cookie con su nombre
        //return this.token;
      }

      logout(){
        firebase.auth().signOut().then(()=>{

          this.token="";
          this.cookies.set("token",this.token); // reescribimos el cookie
          this.ruta.navigate(['/']);
          window.location.reload();

        });
      }
}
