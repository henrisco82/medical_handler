import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import {User} from '../user';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {

  constructor(private http: Http) { }

  getUsers(){
    return this.http.get('http://localhost:3000/users')
    .map(res => res.json());
  }

  addUser(newUser){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/users/register', newUser, {headers:headers})
    .map(res => res.json());
  }

  deleteUser(id){
      return this.http.delete('http://localhost:3000/users/delete/'+id)
       .map(res => res.json());
  }

  editUser(newUser){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let body = JSON.stringify(newUser);
    console.log(newUser);
    return this.http.put('http://localhost:3000/users/edit/'+newUser.id, newUser)
      .map(res => res.json());
}
  

}
