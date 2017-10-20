## Step 8 
Adding a `<mat-icon>` element to the flights application.

---

In this step we want to build a new card below the search card that shows the flight origin and 
destination.

<img width="977" alt="screen shot 2017-11-06 at 18 23 44" src="https://user-images.githubusercontent.com/4987015/32457082-a8ac13d0-c31f-11e7-8c56-7d80f9cffc20.png">

In between the origin and the destination we can use a `<mat-icon>` element of an arrow showing
the flight direction.

```html
<div *ngIf="formGroup.valid && (flights | async) as flights">
  <mat-card>
    <mat-card-title fxLayout="row" fxLayoutAlign="center center">

      <h2>{{formGroup.value.origin.short}}</h2>
      <mat-icon class="flight-arrow">arrow_forward</mat-icon>
      <h2>{{formGroup.value.destination.short}}</h2>
    </mat-card-title>
  </mat-card>
  
  ...
</div>
```

Also Flex-Layout will be used to show the origin, destination and arrow in the middle of the card. 
Using `fxLayoutAlign="center center"` aligns it in the middle of the card.
