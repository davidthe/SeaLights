import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<Person[]> {
    return this.http.get<Person[]>(`${this.apiUrl}/persons`);
  }

  addUser(user: Person): Observable<Person> {
    return this.http.post<Person>(`${this.apiUrl}/person`, user);
  }
}
