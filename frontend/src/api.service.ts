import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get('http://localhost:3000/todos/');
  }

  getById(id: any) {
    return this.http.get('http://localhost:3000/todos/' + id);
  }

  upadate(id: number, callback: any) {
    return this.http.put('http://localhost:3000/todos/' + id, callback);
  }

  post(callback: any) {
    return this.http.post('http://localhost:3000/todos/', callback);
  }

  delete(id: number) {
    return this.http.delete('http://localhost:3000/todos/' + id);
  }
}
