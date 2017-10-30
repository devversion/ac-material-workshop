import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  links = [
    {label: 'Flights', path: 'flights'},
    {label: 'Hotels', path: 'hotels'},
  ];

}
