import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import {Patient} from '../patient';
import 'rxjs/add/operator/map';

@Injectable()
export class PatientsService {

  constructor(private http: Http) { }

  getPatients(){
    return this.http.get('http://localhost:3000/api/patient')
    .map(res => res.json());
  }

  addPatient(newPatient){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/patient', newPatient, {headers:headers})
    .map(res => res.json());
  }

    updatePatient(Patient){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put('http://localhost:3000/api/patients'+Patient.id, JSON.stringify(Patient), {headers:headers})
    .map(res => res.json());
  }



  deletePatient(id){
      return this.http.delete('http://localhost:3000/patient/delete/'+id)
       .map(res => res.json());
  }
}
