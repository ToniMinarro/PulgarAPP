var equipo;
			
function longitudObjeto (obj)
{
	var count = 0;

	for (var property in obj)
	{
		if (Object.prototype.hasOwnProperty.call(obj, property))
		{
			count++;
		}
	}

	return count;
}

function borrarJugador (dorsal)
{
	equipo.eliminarJugador(dorsal);
	var tabla = document.getElementById('tablaJugadores');
	document.body.removeChild(tabla);
	document.body.appendChild(equipo.mostrarPlantilla());
}

function mostrarPlantilla ()
{
	var tabla = document.getElementById('tablaJugadores');
	document.body.removeChild(tabla);
	document.body.appendChild(equipo.mostrarPlantilla());
}