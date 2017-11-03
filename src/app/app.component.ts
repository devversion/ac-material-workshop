import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  rtl = false;

  links = [
    {label: 'Flights', path: 'flights'},
    {label: 'Hotels', path: 'hotels'},
  ];

}
