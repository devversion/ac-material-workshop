## Step 9
Using the CDK to implement a bidirectional icon.


Languages such as Arabic and Hebrew are read from right-to-left (RTL). 
For RTL languages, UIs should be mirrored to display most elements in RTL. 
When a user interface is mirrored for RTL, some of the icons should also be mirrored

[Material Design Icons RTL](http://google.github.io/material-design-icons/#icons-in-rtl)

---

To be able to toggle the text direction in the application, we can use the `[dir]` directive. The `dir` attribute
is part of the HTML standard, but the Angular CDK wraps it with a custom directive to recognize changes and respond
properly.

_src/app/app.component.html_
```html
<div [dir]="rtl ? 'rtl' : 'ltr'">
  ...
</div>
```

So in that case we are wrapping everything inside of the `AppComponent` with a `<div>` element and add
the `[dir]` directive. Right now this will be the standard HTML attribute because the `BidiModule` from the
`@angular/cdk/bidi` has not been added to the root app module yet.

_src/app/material.module.ts_
```ts
import {BidiModule} from '@angular/cdk/bidi';

...

@NgModule({
  exports: [
    ...
    BidiModule,
  ]
})
export class MaterialModule {}

```

Now that we have the `BidiModule` set up, we can add a button that toggles the app layout direction.

_src/app/app.component.html_
```html
<button mat-fab class="rtl-fab-button" (click)="toggleRtl()">
  <mat-icon>compare_arrows</mat-icon>
</button>
```

Since Material doesn't apply any position styles by default, we need to add some styles to position the fab button.

_src/app/app.component.scss_
```scss
.rtl-fab-button {
  position: fixed;
  right: 25px;
  bottom: 25px;
}
```


On click the `toggleRtl()` method of the component will be executed. This method needs to be implemented by the
`AppComponent`.

_src/app/app.component.ts_
```ts
export class AppComponent {
  
  ...

  rtl = false;

  toggleRtl() {
    this.rtl = !this.rtl;
  }
}
```

Now we can implement the `BidiIcon` directive.

_src/app/bidi-icon/bidi-icon.directive.ts_
```ts
import {Directive, HostBinding} from '@angular/core';
import {Direction, Directionality} from '@angular/cdk/bidi';

@Directive({
  selector: '[bidiIcon]'
})
export class BidiIconDirective {

  @HostBinding('style.transform') transformStyle = '';

  constructor(private dir: Directionality) {
    dir.change.subscribe(() => this.setDirection(dir.value));

    this.setDirection(dir.value);
  }

  private setDirection(direction: Direction) {
    this.transformStyle = direction === 'rtl' ? 'scaleX(-1)' : '';
  }
}
```

In the directive we inject the `Directionality` service from `@angular/cdk` to subscribe to the layout direction changes.
Based on the direction, we apply styles on the host element and mirror the icon to fit the RTL layout.

All we have left to do is use the directive

_src/app/flights/flights.component.html_
```html
<mat-icon class="flight-arrow" bidiIcon>arrow_forward</mat-icon>
```
