// <-*** INICIO Utilización de Objetos ***************************->

// Array de "objetos" Jugador
var jugadores = new Jugador(11);

// PORTERO
jugadores[0] = new Jugador("KikeT", 1, "PT");

// DEFENSAS
jugadores[1] = new Jugador("AlfonsoJ", 3, "LI");
jugadores[2] = new Jugador("RobertoL", 4, "DFC");
jugadores[3] = new Jugador("MarcosM", 5, "DFC");
jugadores[4] = new Jugador("CarlosL", 8, "LD");

// CENTROCAMPISTAS
jugadores[5] = new Jugador("JuanJ", 15, "MCD");
jugadores[6] = new Jugador("JoseL.M", 16, "MCC");
jugadores[7] = new Jugador("AndrésJ", 7, "MCC");
jugadores[8] = new Jugador("ToniM", 10, "MP");

// DELANTEROS
jugadores[9] = new Jugador("GuillermoP", 9, "SD");
jugadores[10] = new Jugador("RubénI", 12, "DC");

// Equipo Pulgara C.F.
equipo = new Equipo("PulgaraCF");

// Rellenamos el equipo con 11 jugadores
equipo.ficharJugador(jugadores[0]);
equipo.ficharJugador(jugadores[1]);
equipo.ficharJugador(jugadores[2]);
equipo.ficharJugador(jugadores[3]);
equipo.ficharJugador(jugadores[4]);
equipo.ficharJugador(jugadores[5]);
equipo.ficharJugador(jugadores[6]);
equipo.ficharJugador(jugadores[7]);
equipo.ficharJugador(jugadores[8]);
equipo.ficharJugador(jugadores[9]);
equipo.ficharJugador(jugadores[10]);

// <-*** FIN Utilización de Objetos **********************************->