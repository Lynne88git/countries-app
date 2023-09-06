import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private apiUrl = 'https://restcountries.com/v3.1/all'; 

  constructor(private http: HttpClient) {}

  // Fetch a list of countries
  getAllCountries(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // Fetch detailed information about a specific country by FIFA code
  getCountryByFifaCode(fifaCode: string): Observable<any> {
    const countryUrl = `https://restcountries.com/v3.1/alpha/${fifaCode}`; 
    return this.http.get(countryUrl);
  }
}
