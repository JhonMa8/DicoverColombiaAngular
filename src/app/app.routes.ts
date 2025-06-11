import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CityDetailComponent } from './pages/city-detail/city-detail.component';
import { CurrencyConverterComponent } from './components/currency-converter/currency-converter';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'city/:id', component: CityDetailComponent },
  { path: 'converter', component: CurrencyConverterComponent },
  { path: '**', redirectTo: '' }
];
