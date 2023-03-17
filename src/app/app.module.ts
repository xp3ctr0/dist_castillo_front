import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './pages/Login/login.component';
import {EntradasComponent} from './pages/Entradas/entradas.component';
import {LayoutComponent} from './pages/Layout/layout.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ProductsComponent } from './pages/Products/products.component';
import { StatesPipe } from './Pipes/state/states.pipe';
import { ClientesComponent } from './pages/Clientes/clientes.component';
import { ProveedoresComponent } from './pages/Proveedores/proveedores.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EntradasComponent,
    LayoutComponent,
    ProductsComponent,
    StatesPipe,
    ClientesComponent,
    ProveedoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
