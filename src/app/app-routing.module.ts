import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./Login/login.component";
import {EntradasComponent} from "./Entradas/entradas.component";
import {AuthGuard} from "./guards/auth/auth.guard";

const routes: Routes = [
  { path: '', canActivate:[AuthGuard], component: LoginComponent },
  { path: 'login',canActivate:[AuthGuard], component: LoginComponent },
  { path: 'entradas', component: EntradasComponent },
  { path: '**', canActivate:[AuthGuard], component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
