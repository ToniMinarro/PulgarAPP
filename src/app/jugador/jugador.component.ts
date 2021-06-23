import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jugador',
  templateUrl: './jugador.component.html',
  styleUrls: ['./jugador.component.css']
})
export class JugadorComponent implements OnInit {

  private nombreJugador:String = '';
  private dorsal:Number = 0;
  private posicion:String = '';

  constructor(nombreJugador:String, dorsal:Number, posicion:String) { 
		this.nombreJugador = nombreJugador;
		this.dorsal = dorsal;
		this.posicion = posicion;
  }

  ngOnInit() {
  }

  getNombreJugador():String { return this.nombreJugador; }
  setNombreJugador(nombre:String):void { this.nombreJugador = nombre; }
  getDorsal():Number { return this.dorsal; }
  setDorsal(dorsal:Number) { this.dorsal = dorsal; }
  getPosicion():String { return this.posicion; }
  setPosicion(posicion:String) { this.posicion = posicion; }
}