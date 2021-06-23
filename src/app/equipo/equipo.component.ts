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

	eliminarJugador(dorsal:Number) {
    for (let jugador of this.jugadores) {
			if (jugador.dorsal === dorsal) {
        this.jugadores.splice(this.jugadores.indexOf(jugador));
        break;
			}
		}
	}
	
	mostrarPlantilla()
	{
		// Rellena la tabla con la plantilla
		var tabla = document.createElement("table");
		tabla.id = "tablaJugadores";
		
		var cabecera = document.createElement("tr");
		var titulo1 = document.createElement("th");
		var titulo2 = document.createElement("th");
		var titulo3 = document.createElement("th");
		var titulo4 = document.createElement("th");
		
		titulo1.appendChild(document.createTextNode("Dorsal"));
		titulo2.appendChild(document.createTextNode("Nombre"));
		titulo3.appendChild(document.createTextNode("Posición"));
		titulo4.appendChild(document.createTextNode("Opciones"));
		
		cabecera.appendChild(titulo1);
		cabecera.appendChild(titulo2);
		cabecera.appendChild(titulo3);
		cabecera.appendChild(titulo4);
		
		tabla.appendChild(cabecera);
		
		for (let jugador of this.jugadores)
		{
			if (this.jugadores.length < 11)
			{
				// Crea las fila 1
				var fila = document.createElement("tr");

				var celda1 = document.createElement("td");
				var celda2 = document.createElement("td");
				var celda3 = document.createElement("td");
				var celda4 = document.createElement("td");

				var textoCelda1 = document.createTextNode(jugador.dorsal.toString());
				var textoCelda2 = document.createTextNode(jugador.nombreJugador.toString());
				var textoCelda3 = document.createTextNode(jugador.posicion.toString());

				celda1.appendChild(textoCelda1);
				celda2.appendChild(textoCelda2);
				celda3.appendChild(textoCelda3);
				celda4.innerHTML = "<img src='img/borrar.png' id='dorsal" + jugador.dorsal + "' onclick='borrarJugador(" + jugador.dorsal + ");'/>";

				fila.appendChild(celda1);
				fila.appendChild(celda2);
				fila.appendChild(celda3);
				fila.appendChild(celda4);

				// agrega la fila al final de la tabla
				tabla.appendChild(fila);
			}
			else
			{
				break;
			}
		}
		
		return tabla;
	}

}