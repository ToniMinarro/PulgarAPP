// <-*** INICIO Clase Jugador ************************************->
class Jugador
{
	// Constructor de Jugador
	constructor (nombreJugador, dorsal, posicion)
	{
		// Propiedades
		this.nombreJugador = nombreJugador;
		this.dorsal = dorsal;
		this.posicion = posicion;
	}
}
// <-*** FIN Clase Jugador ***************************************->

// <-*** INICIO Clase Equipo *************************************->
class Equipo
{
	// Constructor de Equipo
	constructor(nombreEquipo)
	{
		// Propiedades
		this.nombreEquipo = nombreEquipo;
		this.jugadores = new Array();
	}
	
	// Métodos
	ficharJugador(jugador)
	{
		longitudObjeto(this.jugadores) < 11 ? this.jugadores.push(jugador) : alert("No puedes añadir más de 11 jugadores a la plantilla");
	}
	
	listarJugadores()
	{   
		for (var jugador in this.jugadores)
		{
			alert(this.jugadores[jugador].nombreJugador + " - Dorsal " + this.jugadores[jugador].dorsal + " - Juega de " + this.jugadores[jugador].posicion);
		}
	}
	
	eliminarJugador(dorsal)
	{   
		for (var jugador in this.jugadores)
		{
			if (this.jugadores[jugador].dorsal === dorsal)
			{
			   this.jugadores.splice(jugador, 1);
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
		
		for (var jugador in this.jugadores)
		{
			if (jugador < 11)
			{
				// Crea las fila 1
				var fila = document.createElement("tr");

				var celda1 = document.createElement("td");
				var celda2 = document.createElement("td");
				var celda3 = document.createElement("td");
				var celda4 = document.createElement("td");

				var textoCelda1 = document.createTextNode(this.jugadores[jugador].dorsal);
				var textoCelda2 = document.createTextNode(this.jugadores[jugador].nombreJugador);
				var textoCelda3 = document.createTextNode(this.jugadores[jugador].posicion);

				celda1.appendChild(textoCelda1);
				celda2.appendChild(textoCelda2);
				celda3.appendChild(textoCelda3);
				celda4.innerHTML = "<img src='img/borrar.png' id='dorsal" + this.jugadores[jugador].dorsal + "' onclick='borrarJugador(" + this.jugadores[jugador].dorsal + ");'/>";

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
// <-*** FIN Clase Equipo ****************************************->