## Step 6
Using a fake flight data service for search results

---

In the previous step we added the `<button>` element that is responsible for submitting the form. Now we need
to use the `ngSubmit` callback on the `<form>` element to execute the search.

```html
<form [formGroup]="formGroup" (ngSubmit)="loadFlights()">
```

Now the `loadFlights` method in the `FlightsComponent` will be executed on form submit and needs to be implementd
by the component.

_src/app/flights/flights.component.ts_
```ts
loadFlights() {
  this.flights = this.flightData.getFlights(this.formGroup.value);
}
```

The `loadFlights` method is very simple, it just delegates the search value to a predefined flight data service. To be able
to use that data service, it needs to be injected in the `constructor`.

```ts
constructor(formBuilder: FormBuilder, private flightData: FlightDataService) {
```

Also since the results of the search will be stored in a variable, we need to create a proper property in the class.

```ts
import {FlightDataService, FlightResult} from './flight-data.service';
import {Observable} from 'rxjs/Observable';

export class FlightsComponent {

 ...
 
 flights: Observable<FlightResult>;
```

The last thing for this step is displaying the flight results from the data service. For now the results will be
just displayed using the `json` pipe.

_src/app/flights/flights.component.html_
```html
<div *ngIf="formGroup.valid && (flights | async) as flights">
  {{ flights.departure | json }}
</div>
```
