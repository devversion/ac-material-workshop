import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

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

  constructor(formBuilder: FormBuilder) {
    this.formGroup = formBuilder.group({
      origin: ['', Validators.required],
      destination: ['', Validators.required],
      departure: ['', Validators.required],
      return: ['', Validators.required],
    });
  }
}
