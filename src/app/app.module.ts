import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Login/login.component';
import { EntradasComponent } from './Entradas/entradas.component';
import { LayoutComponent } from './Layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EntradasComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
