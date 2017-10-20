## Step 4
Create a centered card with input fields.


---

For a better looking application, add a small padding for the content in the `AppComponent`. 

_src/app/app.component.scss_
```scss
.app-content {
  padding: 18px 12px;
}
```

For the flights page we want to have a centered `<mat-card>` that has some form fields that can be used
to search for a flight. The aim is to center the card using Angular's Flex-Layout.

For simplicity the *origin* and *destination* form fields will be a `<mat-select>` instead of a `<mat-autocomplete>`
which would make more sense in a real-world application.

_src/app/flights/flights.component.html_
```html
<div fxLayout="row" fxLayoutAlign="center">

  <mat-card>
    <h3 matCardTitle>Flights</h3>
    <mat-card-content>
      <p>Find your perfect flight on Angular Flights!</p>

      <form>
        <mat-form-field>
          <mat-select placeholder="Origin">
            <mat-option *ngFor="let airport of airports" [value]="airport">
              {{airport.name }} ({{airport.short}})
            </mat-option>
          </mat-select>
        </mat-form-field>

        <mat-form-field>
          <mat-select placeholder="Destination">
            <mat-option *ngFor="let airport of airports" [value]="airport">
              {{airport.name }} ({{airport.short}})
            </mat-option>
          </mat-select>
        </mat-form-field>

        <mat-form-field class="date-input">
          <input matInput placeholder="Departure">
        </mat-form-field>

        <mat-form-field class="date-input">
          <input matInput placeholder="Return">
        </mat-form-field>
      </form>
      
    </mat-card-content>
  </mat-card>
</div>
```

Now that we have a centered `<mat-card>` with the necessary `<mat-form-field>` elements, we can make some design improvements
and reduce the width of the date inputs, because those don't need to be that wide.

_src/app/flights/flights.component.scss_
```scss
.mat-form-field {
  padding: 0 4px;
}

.date-input {
  width: 120px;
}
```

Since this is a sample application we will use a hard-coded list of airports we are going to provide flights for.

_src/app/flights/flights.component.ts_
```ts
export class FlightsComponent {

  airports = [
    { name: 'London', short: 'LHR' },
    { name: 'Munich', short: 'MUC' },
    { name: 'Tel Aviv', short: 'TLV'}
  ];

}
```
