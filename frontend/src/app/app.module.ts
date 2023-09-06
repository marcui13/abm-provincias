import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CiudadComponent } from './@components/ciudad/ciudad.component';
import { ProvinciaComponent } from './@components/provincia/provincia.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './@interceptors/auth.interceptor';
import { LoginComponent } from './@components/login/login.component';
import { AbmComponent } from './@components/abm/abm.component';

@NgModule({
  declarations: [AppComponent, CiudadComponent, ProvinciaComponent, LoginComponent, AbmComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
