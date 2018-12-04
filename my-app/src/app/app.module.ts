import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { Routes } from '@angular/router';
import {RouterModule}from '@angular/router';

import { HomeComponent } from './home/home.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { PrincipalComponent } from './principal/principal.component';


const appRoutes: Routes = [

  { path: '', component: HomeComponent },

  { path: 'inscription', component: InscriptionComponent },
  
  { path: 'principal', component: PrincipalComponent},


];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InscriptionComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
