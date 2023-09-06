import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private apiUrl = 'https://restcountries.com/v3.1/all'; // Replace with the actual API URL

  constructor(private http: HttpClient) {}

  // Method to fetch a list of countries
  getAllCountries(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // Method to fetch detailed information about a specific country by FIFA code
  getCountryByFifaCode(fifaCode: string): Observable<any> {
    const countryUrl = `https://restcountries.com/v3.1/alpha/${fifaCode}`; // Adjust the API URL
    return this.http.get(countryUrl);
  }
}
