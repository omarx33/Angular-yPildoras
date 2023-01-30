import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


@Injectable()
export class LoginServices{
  constructor(private ruta:Router){}

      token:string;

      login(email:string,password:string){
        firebase.auth().signInWithEmailAndPassword(email,password).then( //loguearse por email y clave
          response=>{
            firebase.auth().currentUser?.getIdToken().then(
             token=>{
              this.token=token;
              this.ruta.navigate(['/']);
             }
            )
          }
        );

      }
      getIdToken(){
        return this.token;
      }
}
