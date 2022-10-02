import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RacesComponent } from './races/races.component';
import { MenuComponent } from './menu/menu.component';
import { RaceComponent } from './race/race.component';
import { PonyComponent } from './pony/pony.component';

@NgModule({
  declarations: [AppComponent, RacesComponent, MenuComponent, RaceComponent, PonyComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
