import { Component, OnInit } from '@angular/core';
import { JugadorComponent } from '../jugador/jugador.component';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent implements OnInit {

  private nombreEquipo:string = 'PulgaraCF';
  private jugadores:JugadorComponent[] = new Array();

  constructor() { }

  ngOnInit() {
  }

	ficharJugador(jugador:JugadorComponent) {
		this.jugadores.length < 11 ? this.jugadores.push(jugador) : alert("No puedes añadir más de 11 jugadores a la plantilla");
	}

  getNombreEquipo():string { return this.nombreEquipo; }
  setNombreEquipo(nombre:string):void { this.nombreEquipo = nombre; }
  getJugadores():JugadorComponent[] { return this.jugadores; }
  setJugadores(jugadores:JugadorComponent[]) { this.jugadores = jugadores; }
}