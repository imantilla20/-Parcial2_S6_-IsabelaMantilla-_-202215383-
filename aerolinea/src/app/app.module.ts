import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VuelosModule } from './vuelos/vuelos.module';
import { AerolineaModule } from './aerolinea/aerolinea.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, VuelosModule, AerolineaModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}