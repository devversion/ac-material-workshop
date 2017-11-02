import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FlightDataService, FlightResult} from './flight-data.service';
import {Observable} from 'rxjs/Observable';

@Component({
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss']
})
export class FlightsComponent {

  airports = [
    { name: 'London', short: 'LHR' },
    { name: 'Munich', short: 'MUC' },
    { name: 'Tel Aviv', short: 'TLV'}
  ];

  formGroup: FormGroup;

  todayDate = new Date();

  flights: Observable<FlightResult>;

  constructor(formBuilder: FormBuilder, private flightData: FlightDataService) {
    this.formGroup = formBuilder.group({
      origin: ['', Validators.required],
      destination: ['', Validators.required],
      departure: ['', Validators.required],
      return: ['', Validators.required],
    });
  }

  loadFlights() {
    this.flights = this.flightData.getFlights(this.formGroup.value);
  }
}
