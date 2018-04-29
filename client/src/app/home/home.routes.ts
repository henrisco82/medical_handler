import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import {LoginComponent} from '../login/login.component';
import {UsersComponent} from '../users/users.component';
import {DoctorsComponent} from '../doctors/doctors.component';
import {PatientsComponent} from '../patients/patients.component';
import {HomeComponent} from '../home/home.component';

export const homeRoutes: Routes = [

    { path: 'Login', component: LoginComponent },
    { path: 'Register', component: DoctorsComponent },
    { path: 'SignUp', component: UsersComponent },
     { path: 'Home', component: HomeComponent },
     { path: 'Patients', component: PatientsComponent },
 
   
];
 
