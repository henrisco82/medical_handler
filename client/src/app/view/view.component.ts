import { Component } from '@angular/core';
import {LoginComponent} from '../login/login.component';
import { PatientsService } from '../services/patients.service';
import { PatientsComponent } from '../patients/patients.component';
import { Patient } from '../patient';


@Component({
  moduleId: module.id,
  selector: 'view',
  templateUrl: 'view.component.html',
   providers: [PatientsService]

})

export class ViewComponent { 
     user:any = null;
     patients: Patient[];
     patient: Patient;

    constructor(private patientsService: PatientsService){
      this.user = JSON.parse(sessionStorage.getItem('currentUser'));
    }


     ngOnInit() {

     this.patientsService.getPatients()
            .subscribe( patients => { 
            this.patients = patients; 
      });

}
}
