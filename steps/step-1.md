## Step 1
Installing Angular Material, Flex-Layout and the Component Dev Kit.

---

To be able to use Angular Material, Flex-Layout and the Component Dev Kit, the dependencies need to be
installed through the Node Package Manager (NPM).

```js
npm install @angular/cdk @angular/material @angular/flex-layout
```

After a successful installation, the several `NgModule`'s need to be added to our root app module.

For Angular Material there is no longer a single module that can be imported. Each component has been
moved into a single `NgModule` to ensure better treeshaking. 

This means that we thoughfully have to add the modules we are planning to use.

_src/app/material.module.ts_
```ts
import {
  MatButtonModule,
  MatCardModule,
  MatDatepickerModule,
  MatExpansionModule,
  MatInputModule,
  MatNativeDateModule,
  MatSelectModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';

...

@NgModule({
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatExpansionModule,
    MatInputModule,
    MatDatepickerModule,
    MatTabsModule,
    MatSelectModule,
    MatNativeDateModule,
  ]
})
export class MaterialModule {}
```

The Angular Material module is now set up and we can import it into our root app module along with Flex-Layout.


_src/app/app.module.ts_
```ts
import {FlexLayoutModule} from '@angular/flex-layout';
import {MaterialModule} from './material.module';

@NgModule({
  imports: [
    ...
    
    BrowserAnimationsModule,
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
  ],
  ....
```

**Note**: The `BrowserAnimationsModule` is optional for Angular Material. The `CommonModule` has been added to be able to
use directives like `NgFor`.
