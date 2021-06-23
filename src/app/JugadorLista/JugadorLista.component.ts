import { Component, Input, OnInit } from '@angular/core';
import { JugadorComponent } from '../jugador/jugador.component';

@Component({
  selector: 'app-JugadorLista',
  templateUrl: './JugadorLista.component.html',
  styleUrls: ['./JugadorLista.component.css']
})
export class JugadorListaComponent implements OnInit {

  @Input() jugadores:Array<JugadorComponent>;
  @Input() nombreEquipo:string;
  constructor() { }

  ngOnInit() {
  }

  eliminarJugador(dorsal:Number) {
    for (let jugador of this.jugadores) {
      if (jugador.dorsal === dorsal) {
        this.jugadores.splice(this.jugadores.indexOf(jugador), 1);
        break;
      }
    }
  }
}
