import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Router } from '@angular/router';

import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { PatientsComponent } from './patients/patients.component';
import {LoginComponent} from './login/login.component';
import {UsersComponent} from './users/users.component';
import {HomeComponent} from './home/home.component';
import {PublicComponent} from './public/public.component';
import {ViewComponent} from './view/view.component';
import {appRoutes} from './app.routing';



@NgModule({
  declarations: [
    AppComponent,
   DoctorsComponent,
   PatientsComponent,
   LoginComponent,
   HomeComponent,
   UsersComponent,
   PublicComponent,
   ViewComponent
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
   
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
