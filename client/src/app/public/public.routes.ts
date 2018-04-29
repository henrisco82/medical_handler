import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import {LoginComponent} from '../login/login.component';
import {UsersComponent} from '../users/users.component';
import {DoctorsComponent} from '../doctors/doctors.component';
import {PatientsComponent} from '../patients/patients.component';
import {PublicComponent} from '../public/public.component';
import {ViewComponent} from '../view/view.component';

export const publicRoutes: Routes = [

    { path: 'Login', component: LoginComponent },
    { path: 'Register', component: DoctorsComponent },
    { path: 'SignUp', component: UsersComponent },
     { path: 'Public', component: PublicComponent },
       { path: 'View', component: ViewComponent },
     { path: 'Patients', component: PatientsComponent },
 
   
];
 
