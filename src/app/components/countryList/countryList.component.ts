import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service'

@Component({
  selector: 'app-countryList',
  templateUrl: './countryList.component.html',
  styleUrls: ['./countryList.component.scss']
})
export class CountryListComponent implements OnInit {
  countries: any[] = [];

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {
    this.countryService.getAllCountries().subscribe((data) => {
      this.countries = data;
    });
  }
}