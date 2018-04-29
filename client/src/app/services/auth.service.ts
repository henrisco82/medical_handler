import { Injectable } from '@angular/core';
import { Http, Headers, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'


@Injectable()
export class AuthService {
    constructor(private http: Http) { }


    login(username: string, password: string): Observable<any> {

            var headers = new Headers();
            headers.append('Content-Type', 'application/x-www-form-urlencoded');

            var params = new URLSearchParams();
            params.append('username', username);
            params.append('password', password);

            var body = params.toString();
            return this.http.post('http://localhost:3000/api/doctors', body, { headers:headers });

    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}