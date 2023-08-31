import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CiudadComponent } from './@components/ciudad/ciudad.component';
import { ProvinciaComponent } from './@components/provincia/provincia.component';

@NgModule({
  declarations: [
    AppComponent,
    CiudadComponent,
    ProvinciaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
