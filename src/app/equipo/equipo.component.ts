import { Component, OnInit } from '@angular/core';
import { JugadorComponent } from '../jugador/jugador.component';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent implements OnInit {

  nombreEquipo:string = 'PulgaraCF';
  jugadores:JugadorComponent[] = new Array();

  constructor() { }

  ngOnInit() {
  }

	ficharJugador(jugador:JugadorComponent) {
		this.jugadores.length < 11 ? this.jugadores.push(jugador) : alert("No puedes añadir más de 11 jugadores a la plantilla");
	}
	
	listarJugadores() {   
		for (let jugador of this.jugadores) {
			alert(jugador.nombreJugador + " - Dorsal " + jugador.dorsal + " - Juega de " + jugador.posicion);
		}
	}
}