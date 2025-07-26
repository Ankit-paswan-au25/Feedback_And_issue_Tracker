import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ResuestService {
  enviromentDev = 'http://localhost:3000'
  constructor(private http: HttpClient) { }


  getAllRequest(data: any): Observable<any> {
    return this.http.get('http://localhost:3000/api/request/getAll', data)
  }

  getSingleRequest(data: any): Observable<any> {
    return this.http.get('http://localhost:3000/api/request/getSingle/:id', data)
  }

  createRequest(data: any): Observable<any> {
    return this.http.post('http://localhost:3000/api/request/createRequest', data)
  }

  updateRequest(data: any): Observable<any> {
    return this.http.patch('http://localhost:3000/api/request/updateRequest/:id', data)
  }

  deleteRequest(data: any): Observable<any> {
    return this.http.delete('http://localhost:3000/api/request/deleteSingle/:id', data)
  }
}
