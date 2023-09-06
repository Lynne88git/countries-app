import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryListComponent } from './components/countryList/countryList.component';
import { FavouritesComponent } from './components/favourites/favourites.component';
import { SearchBarComponent } from './components/searchBar/searchBar.component';
import { FiltersComponent } from './components/filters/filters.component';
import { CountryDetailsComponent } from './components/countryDetails/countryDetails.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    CountryListComponent,
    FavouritesComponent,
    SearchBarComponent,
    FiltersComponent,
    CountryDetailsComponent,
    FooterComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
