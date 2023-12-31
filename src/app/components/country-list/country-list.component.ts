import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service'


@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent implements OnInit {
  countries: any[] = [];

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {
    this.countryService.getAllCountries().subscribe((data) => {
      console.log(data); 
      this.countries = data;
    });
  }
}