import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import {LoginComponent} from '../login/login.component';
import {UsersComponent} from '../users/users.component';
import {DoctorsComponent} from '../doctors/doctors.component';
import {ViewComponent} from '../view/view.component';





export const viewRoutes: Routes = [

     { path: 'View', component: ViewComponent },
 
   
];
 
