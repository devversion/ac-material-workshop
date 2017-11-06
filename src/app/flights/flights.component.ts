import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FlightDataService, FlightResult} from './flight-data.service';
import {Observable} from 'rxjs/Observable';
import {trigger, transition, query, style, animate, stagger} from '@angular/animations';

@Component({
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss'],
  animations: [
    trigger('results', [
      transition(':enter', [
        query('mat-card, mat-expansion-panel', [
          style({opacity: 0, transform: 'translateX(-100%)'}),
          stagger(30, [
            animate('.3s ease', style({opacity: 1, transform: 'translateX(0)'}))
          ])
        ])
      ])
    ])
  ]
})
export class FlightsComponent {

  airports = [
    {name: 'London', short: 'LHR'},
    {name: 'Munich', short: 'MUC'},
    {name: 'Tel Aviv', short: 'TLV'}
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
