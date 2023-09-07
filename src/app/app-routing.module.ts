import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryListComponent } from './components/country-list/country-list.component';
import { FavouritesComponent } from './components/favourites/favourites.component';
import { CountryDetailsModalComponent } from './components/country-details-modal/country-details-modal.component';

const routes: Routes = [
  { path: '', component: CountryListComponent }, 
  { path: 'favorites', component: FavouritesComponent }, 
  {
    path: 'country/:fifaCode',
    component: CountryDetailsModalComponent,
  }, 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
