import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RacesComponent } from './races/races.component';
import { MenuComponent } from './menu/menu.component';
import { RaceComponent } from './race/race.component';
import { PonyComponent } from './pony/pony.component';
import { FromNowPipe } from './from-now.pipe';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AppComponent, RacesComponent, MenuComponent, RaceComponent, PonyComponent, FromNowPipe, HomeComponent],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(ROUTES)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
