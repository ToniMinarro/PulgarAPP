import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jugador',
  templateUrl: './jugador.component.html',
  styleUrls: ['./jugador.component.css']
})
export class JugadorComponent implements OnInit {

  nombreJugador:String = '';
  dorsal:Number = 0;
  posicion:String = '';

  constructor(nombreJugador:String, dorsal:Number, posicion:String) { 
		this.nombreJugador = nombreJugador;
		this.dorsal = dorsal;
		this.posicion = posicion;
  }

  ngOnInit() {
  }
}