## Step 7
Create expansion panels for the flight results.

![image](https://user-images.githubusercontent.com/4987015/32413690-5a1f5e1a-c217-11e7-8e8e-a4dcaf36faff.png)


---

First of all the simple JSON output will be replaced by the following markup that uses `<mat-expansion-panel>` elements.

_src/app/flights/flights.component.html_
```html
<div *ngIf="formGroup.valid && (flights | async) as flights">
  <mat-expansion-panel *ngFor="let flight of flights.departure">
    <mat-expansion-panel-header>
      <mat-panel-title>{{flight.price}}$</mat-panel-title>

      <mat-panel-description fxLayout="row" fxLayoutAlign="space-between">
        <span>{{flight.airline}}</span>
        <div>
          <span>{{flight.departure | date:'shortTime' }}</span>
          <span> - </span>
          <span>{{flight.arrival | date:'shortTime' }}</span>
        </div>
      </mat-panel-description>
    </mat-expansion-panel-header>
    <span>Leaving from {{flight.terminal}}</span>
  </mat-expansion-panel>
</div>
```

Due to the `*ngIf` statement that stores the unwrapped async data in another local variable called `flights`, the flights
can be display synchronously using a `*ngFor` without the `async` pipe.

Now the `<mat-expansion-panel>` elements are not aligned below the card with
`<mat-form-field>` elements. To be able to show them beneath the card element the layout needs to change from `row` to `column`.

This can be simply done by replacing `fxLayout="row"` with `fxLayout="column"`.

```html
<!-- <div fxLayout="row" fxLayoutAlign="center"> -->

<div fxLayout="column">
```

Now the expansion panels are being displayed below the card, but the whole content is no longer displayed in the `center`. 
This can be archived by just aligning the whole `column` `<div>` in the center.

_src/app/flights/flights.component.scss_
```scss
:host {
  display: flex;
  justify-content: center;
}
```

While we edit the SCSS of the flights component, an extra top/bottom margin of `8px` can be added to the expansion panels
to look better.

```scss
.mat-expansion-panel {
  margin: 8px 0;
}
```

For better acceptability we can improve the contrast of the application. The white card on a nearly white background
can on some screens seem the same, and it would be better to raise the elevation of the card elements. Because of that we are changing the background to
a custom color with `#eee`.

To be able to do that, we are removing the `mat-app-background` class on the `<body>` element.

_src/index.html_
```html
<body>
  ...
</body>
```

Now the background from Angular Material has been removed and we can set our custom background in the `styles.scss` file.

_src/syles.scss_
```scss
body {
  background-color: #eee;
   ...
}
```
