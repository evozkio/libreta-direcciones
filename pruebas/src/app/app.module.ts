import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { LetrasComponent } from './letras/letras.component';
import { SubrayadoComponent } from './subrayado/subrayado.component';
import { TresEnRayaComponent } from './tres-en-raya/tres-en-raya.component';

@NgModule({
  declarations: [
    AppComponent,
    CarruselComponent,
    CatalogoComponent,
    SubrayadoComponent,
    LetrasComponent,
    TresEnRayaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
