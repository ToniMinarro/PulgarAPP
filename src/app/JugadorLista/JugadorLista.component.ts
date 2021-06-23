import { Component, Input, OnInit } from '@angular/core';
import { EquipoComponent } from '../equipo/equipo.component';
import { JugadorComponent } from '../jugador/jugador.component';

@Component({
  selector: 'app-JugadorLista',
  templateUrl: './JugadorLista.component.html',
  styleUrls: ['./JugadorLista.component.css']
})
export class JugadorListaComponent implements OnInit {

  @Input() equipo:EquipoComponent;
  @Input() jugadores:Array<JugadorComponent>;
  @Input() nombreEquipo:string;

  constructor() { }

  ngOnInit() {
  }
}