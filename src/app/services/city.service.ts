import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { City, Country } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getCitiesByCountryId(countryId: number): Observable<City[]> {
    return this.http.get<City[]>(`${this.apiUrl}/cities/${countryId}`);
  }

  addCity(city: City): Observable<City> {
    return this.http.post<City>(`${this.apiUrl}/city`, city);
  }

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}/countries`);
  }
}
