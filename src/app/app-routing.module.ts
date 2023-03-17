import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./pages/Login/login.component";
import {EntradasComponent} from "./pages/Entradas/entradas.component";
import {AuthGuard} from "./guards/auth/auth.guard";
import {ProductsComponent} from "./pages/Products/products.component";
import {ClientesComponent} from "./pages/Clientes/clientes.component";
import {ProveedoresComponent} from "./pages/Proveedores/proveedores.component";

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'productos', canActivate:[AuthGuard], component: ProductsComponent },
  { path: 'entradas',canActivate:[AuthGuard], component: EntradasComponent },
  { path: 'clientes',canActivate:[AuthGuard], component: ClientesComponent },
  { path: 'proveedores',canActivate:[AuthGuard], component: ProveedoresComponent },
  { path: '**',component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
