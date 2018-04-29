import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { homeRoutes } from './home/home.routes';
import { patientRoutes } from './patients/patients.routes';
import { publicRoutes } from './public/public.routes';
import { viewRoutes } from './view/view.routes';

import {LoginComponent} from './login/login.component';
import {UsersComponent} from './users/users.component';
import {DoctorsComponent} from './doctors/doctors.component';
import {PatientsComponent} from './patients/patients.component';
import {HomeComponent} from './home/home.component';
import {ViewComponent} from './view/view.component';

export const appRoutes: Routes = [
     
     ...homeRoutes,
     ...publicRoutes,
     ...patientRoutes,
     
 
    // otherwise redirect to home
    { path: '**', component:LoginComponent  }
];
 
