import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  enviromentDev = 'http://localhost:3000'
  constructor(private http: HttpClient) { }

  register(data: any): Observable<any> {
    return this.http.post('http://localhost:3000/api/user/register', data)
  }

  login(data: any) {
    return this.http.post(this.enviromentDev + 'api/user/login', data)
  }
}
