## Step 10
The Material components are just like any other component and can be easily animated with the animation API.   

All you have to do is to add the `animations` section to your component decorator

_src/app/flights/flights.component.ts_
```ts
@Component({
  // ...
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
```
Note that we are querying `mat-card` and `mat-expansion-panel` in order to animate those elements.

We also set our trigger to be `results` - that means we have to add that trigger in our template.

_src/app/flights/flights.component.html_
```html
<div *ngIf="formGroup.valid && (flights | async) as flights" @results>
  ...
</div>
```

Now when the search button is clicked the `mat-card` and the `mat-expansion-panel`s will be animated in.
