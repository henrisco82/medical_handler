import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import {Doctor} from '../doctor';
import 'rxjs/add/operator/map';

@Injectable()
export class DoctorsService {

  constructor(private http: Http) { }

  getDoctors(){
    return this.http.get('http://localhost:3000/api/doctors')
    .map(res => res.json());
  }

  addDoctor(newDoctor){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/signup', newDoctor, {headers:headers})
    .map(res => res.json());
  }

  deleteDoctor(id){
      return this.http.delete('http://localhost:3000/api/doctors/'+id)
       .map(res => res.json());
  }
}
