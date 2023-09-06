import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryListComponent } from './components/countryList/countryList.component';
import { FavouritesComponent } from './components/favourites/favourites.component';
import { CountryDetailsComponent } from './components/countryDetails/countryDetails.component';

const routes: Routes = [
  { path: '', component: CountryListComponent }, 
  { path: 'favorites', component: FavouritesComponent }, 
  {
    path: 'country/:fifaCode',
    component: CountryDetailsComponent,
  }, 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
