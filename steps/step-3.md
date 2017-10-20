## Step 3
Routing using Angular Material's Tab Navigation Bar in combination with a Toolbar.

---

In our application we want to let users search for flights or hotels. Because of that we need to provide a way
for users to switch between those different pages. 

In that case we are going to use a `mat-tab-nav-bar` in combination with a `<mat-toolbar>`.

<img src="https://user-images.githubusercontent.com/4987015/32405666-06a0c204-c16a-11e7-98ae-db457e358d3c.PNG">

_src/app/app.component.html_
```html
<div class="mat-elevation-z2">
  <mat-toolbar color="primary">Angular Flights</mat-toolbar>

  <nav mat-tab-nav-bar backgroundColor="primary">
    <a mat-tab-link *ngFor="let link of links"
       [routerLink]="link.path" [active]="route.isActive" routerLinkActive #route="routerLinkActive">
      <span>{{link.label}}</span>
    </a>
  </nav>
</div>

<div class="app-content">
  <router-outlet></router-outlet>
</div>
```

First of all we are going to create a `<div>` element with an evelvation. This `<div>` element will be
the container for the `<mat-toolbar>` and `mat-tab-nav-bar` since those two elements should be grouped.

Both elements will use the same color palette (*primary*) to look as similar as possible. 

For the `mat-tab-nav-bar` the `[backgroundColor]` input needs to be used instead of the `[color]` input.
Otherwise only the `ink-bar` will have a different color, but the background will be still the default (~white)

_src/app/app.component.ts_
```ts
...
export class AppComponent {

  links = [
    {label: 'Flights', path: 'flights'},
    {label: 'Hotels', path: 'hotels'},
  ];
}
```

With the list of links inside of our component, we can use `NgFor` to iterate through those and display them as part of the
`mat-tab-nav-bar`.

#### Implementing the routes

For the **flights** and **hotels**, two new empty components need to be created. In our case
the `FlightsComponent` and `HotelsComponent`.

* `npm run ng generate component Flights`
* `npm run ng generate component Hotels`

> Note: Normally you would use the `ng` command (angular-cli) directly without using `npm run` but since you might not have the cli installed globally and installed locally we wanted to make sure this command would run.  

As soon as those components have been created, we can proceed to create the `RouterModule`.
For that we are creating a new `app.routing.ts` file
next to our module file.

_src/app/app.routing.ts_
```ts
import {RouterModule, Routes} from '@angular/router';
import {FlightsComponent} from './flights/flights.component';
import {HotelsComponent} from './hotels/hotels.component';

const routes: Routes = [
  {path: 'flights', component: FlightsComponent},
  {path: 'hotels', component: HotelsComponent},
  {path: '', redirectTo: '/flights', pathMatch: 'full'}
];

export const AppRoutingModule = RouterModule.forRoot(routes);
```

Now the new `AppRoutingModule` can be imported by the root app module.

_src/app/app.module.ts_
```ts
imports: [
  ...
  AppRoutingModule,
] 
```

To finish the routing setup, the two components that will be rendered dynamically need to be added to the `declarations`
and `entryComponents` section in the root `NgModule`.

_src/app/app.module.ts_
```ts
declarations: [
  AppComponent,
  FlightsComponent,
  HotelsComponent
],
entryComponents: [
  FlightsComponent,
  HotelsComponent
]
```
