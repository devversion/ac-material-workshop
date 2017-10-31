import {Component} from '@angular/core';

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

}
