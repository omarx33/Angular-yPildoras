import { Component, OnInit } from '@angular/core';

import firebase from 'firebase/compat/app'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  titulo = '';



  constructor(){

  }
  ngOnInit(): void {

    firebase.initializeApp({
      apiKey: "AIzaSyDtcnkRTbyRDO7hefBhwtjOn9DEEa4hc4Q",
      authDomain: "clientes-b8dd7.firebaseapp.com"
    })
  }



}
