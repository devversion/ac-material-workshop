import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/observable/range';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/combineAll';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/forkJoin';

export interface FlightSearch {
  origin: string;
  destination: string;
  departure: Date;
  return: Date;
}

export interface FlightResult {
  departure: FlightInfo[];
  return: FlightInfo[];
}

export interface FlightInfo {
  airline: string;
  departure: Date;
  arrival: Date;
  duration: number;
  terminal: string;
  price: number;
}

@Injectable()
export class FlightDataService {

  airlines = [
    'Rxthansa',
    'Lufthansa',
    'KLM',
    'Delta',
    'United',
    'Fly Elements',
    'Arab Wingulars',
    'NgJet',
  ];

  getFlights(search: FlightSearch): Observable<FlightResult> {
    return Observable
      .forkJoin(this.createFlights(search.departure), this.createFlights(search.return))
      .map(([departureData, returnData]) => ({ departure: departureData, return: returnData}));
  }

  private createFlights(date: Date): Observable<FlightInfo[]> {
    return Observable
      .range(0, Math.random() * 10 % 3 + 3)
      .map(() => this.createFlight(date))
      .combineAll();
  }

  private createFlight(date: Date): Observable<FlightInfo> {
    const duration = Math.round(Math.random() * 100 * 60 * 1000 + 3600000);
    const departure = this.createRandomDate(date);
    const airline = this.airlines[Math.round((Math.random() * 10)) % this.airlines.length];
    const terminal = `Terminal ${Math.round(1 + Math.random() * 10 % 5)}`;
    const price = Math.round(Math.random() * 100);
    const arrival = new Date(departure);

    arrival.setMilliseconds(duration);

    return Observable.of({duration, departure, arrival, terminal, airline, price});
  }

  private createRandomDate(date: Date) {
    const newDate = new Date(date.getTime());
    newDate.setHours(date.getHours() + (Math.round(Math.random() * 10)));
    return newDate;
  }
}
