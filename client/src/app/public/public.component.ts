import { Component } from '@angular/core';
import { DoctorsComponent } from '../doctors/doctors.component';
import {LoginComponent} from '../login/login.component';
import { Doctor } from '../doctor';


@Component({
  moduleId: module.id,
  selector: 'public',
  templateUrl: 'public.component.html',

})

export class PublicComponent { 
    user:any = null;

    constructor(){
      this.user = JSON.parse(sessionStorage.getItem('currentUser'));
    }
}
