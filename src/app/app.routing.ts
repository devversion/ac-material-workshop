import {RouterModule, Routes} from '@angular/router';
import {FlightsComponent} from './flights/flights.component';
import {HotelsComponent} from './hotels/hotels.component';

const routes: Routes = [
  {path: 'flights', component: FlightsComponent},
  {path: 'hotels', component: HotelsComponent},
  {path: '', redirectTo: '/flights', pathMatch: 'full'}
];

export const AppRoutingModule = RouterModule.forRoot(routes);
