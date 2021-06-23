import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EquipoComponent } from './equipo/equipo.component';
import { JugadorComponent } from './jugador/jugador.component';
import { JugadorListaComponent } from './JugadorLista/JugadorLista.component';

@NgModule({
  declarations: [			
    AppComponent,
      EquipoComponent,
      JugadorComponent,
      JugadorListaComponent
   ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}