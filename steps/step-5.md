## Step 5
Connecting form-fields to a `FormGroup` and using datepickers.

---

To be able to use a `FormGroup` from the Angular Forms package, the `ReactiveFormsModule` needs to be added
to the root app module.

_src/app/app.module.ts_
```ts
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  ...
  imports: [
    ReactiveFormsModule,
  ]
}
```

Now that the `ReactiveFormsModule` is installed, the actual `FormGroup` instance can be created using the `FormBuilder`.

_src/app/flights/flights.component.ts_
```ts
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

export class FlightsComponent {

  ...

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
```

Each form control will be marked with the `required` validator to ensure that there is a valid flight search. The `todayDate` property
has been added for the datepickers to specify a minimum date. 

Now that the `FormGroup` is initialized, the `<form>` element can be connected to the `FormGroup` using the `[formGrop]` directive
binding.

```html
<form [formGroup]="formGroup">
```

Next step is to specify the different `FormControl`'s using the `formControlName` directive.

```html

<mat-select placeholder="Origin" formControlName="origin">

<mat-select placeholder="Destination" formControlName="destination">

<input matInput placeholder="Departure" formControlName="departure">

<input matInput placeholder="Return" formControlName="return">
```

Once that's done, the datepicker panels can be added to the last two inputs to provide a better user experience.

```html
<mat-form-field class="date-input">
  <input matInput placeholder="Departure" formControlName="departure"
         [matDatepicker]="departurePicker" [min]="todayDate">

  <mat-datepicker-toggle matSuffix [for]="departurePicker"></mat-datepicker-toggle>
  <mat-datepicker #departurePicker></mat-datepicker>
</mat-form-field>

<mat-form-field class="date-input">
  <input matInput placeholder="Return" formControlName="return"
         [matDatepicker]="returnPicker" [min]="todayDate">

  <mat-datepicker-toggle matSuffix [for]="returnPicker"></mat-datepicker-toggle>
  <mat-datepicker #returnPicker></mat-datepicker>
</mat-form-field>
```

Now the form controls and datepickers are set up. The last thing is a button that triggers the actual search.

```html
<button mat-button color="primary" type="submit" [disabled]="formGroup.invalid">
  Search
</button>
```
