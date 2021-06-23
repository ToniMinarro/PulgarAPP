import { Component } from '@angular/core';
import { EquipoComponent } from './equipo/equipo.component';
import { JugadorComponent } from './jugador/jugador.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pulgara C.F.';
  tabla:any = document.getElementById('tablaJugadores');
  jugadores:Array<JugadorComponent> = new Array();
  equipo:EquipoComponent = new EquipoComponent();

onInit() {

  // PORTERO
  this.jugadores.push(new JugadorComponent("KikeT", 1, "PT"));

  // DEFENSAS
  this.jugadores.push(new JugadorComponent("AlfonsoJ", 3, "LI"));
  this.jugadores.push(new JugadorComponent("RobertoL", 4, "DFC"));
  this.jugadores.push(new JugadorComponent("MarcosM", 5, "DFC"));
  this.jugadores.push(new JugadorComponent("CarlosL", 8, "LD"));

  // CENTROCAMPISTAS
  this.jugadores.push(new JugadorComponent("JuanJ", 15, "MCD"));
  this.jugadores.push(new JugadorComponent("JoseL.M", 16, "MCC"));
  this.jugadores.push(new JugadorComponent("AndrésJ", 7, "MCC"));
  this.jugadores.push(new JugadorComponent("ToniM", 10, "MP"));

  // DELANTEROS
  this.jugadores.push(new JugadorComponent("GuillermoP", 9, "SD"));
  this.jugadores.push(new JugadorComponent("RubénI", 12, "DC"));


  // Rellenamos el equipo con 11 jugadores
  for(let jugador of this.jugadores) { this.equipo.ficharJugador(jugador); }

  this.mostrarPlantilla();
}

  
  mostrarPlantilla () {
    this.tabla = <HTMLElement>document.getElementById('tablaJugadores');
    if (this.tabla != null) {
      document.body.removeChild(this.tabla);
      document.body.appendChild(this.equipo.mostrarPlantilla());
    }
  }
  

  /*
  borrarJugador (equipo:EquipoComponent, dorsal:number) {
    equipo.eliminarJugador(dorsal);
    var tabla = document.getElementById('tablaJugadores');
    if (tabla != null) {
      document.body.removeChild(tabla);
      document.body.appendChild(equipo.mostrarPlantilla());
    }
  }
  */
}