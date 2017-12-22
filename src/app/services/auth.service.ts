import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

    constructor(private http: HttpClient) { }

    // login(username: string, password: string) {
    //     return this.http.post<any>('/api/authenticate', { username: username, password: password });
    // }


    // logout() {
    //     // remove user from local storage to log user out
    //     localStorage.removeItem('currentUser');
    // }

}
