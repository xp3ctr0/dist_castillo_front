import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./pages/Login/login.component";
import {EntradasComponent} from "./pages/Entradas/entradas.component";
import {AuthGuard} from "./guards/auth/auth.guard";
import {ProductsComponent} from "./pages/products/products.component";

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'productos', canActivate:[AuthGuard], component: ProductsComponent },
  { path: 'entradas',canActivate:[AuthGuard], component: EntradasComponent },
  { path: '**',component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
