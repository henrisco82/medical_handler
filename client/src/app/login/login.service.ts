import {Injectable} from '@angular/core';
import { Http, Headers, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'



@Injectable()
export class LoginService {
    constructor(private http: Http) { }

/*

    login(username: string, password: string): Observable<any> {

            var headers = new Headers();
            headers.append('Content-Type', 'application/x-www-form-urlencoded');

            var params = new URLSearchParams();
            params.append('username', username);
            params.append('password', password);

            var body = params.toString();
            return this.http.post('http://localhost:3000/api/doctors', body, { headers:headers });

    }

*/

    login(username: string, password: string): Observable<any>{
        return this.http.post('http://localhost:3000/users/login', { username: username, password: password })
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let json = response.json();
                let user = json.user;
                if (user && json.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    sessionStorage.setItem('currentUser', JSON.stringify(user));
                }
                return user;
            });
    }

    logout() {
        // remove user from local storage to log user out
        sessionStorage.removeItem('currentUser');
    }
}