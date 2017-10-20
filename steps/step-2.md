## Step 2
Theme for Angular Material

---

To be able to use Angular Material, a theme needs to be set up. Without a theme the components will have
no styling and would not look good at all.

There are a few prebuilt themes that can be used for a quick Angular Material application, but for more
flexibility, custom themes can be created using Sass too.

_src/styles.scss_
```scss
@import url('https://fonts.googleapis.com/css?family=Roboto');
@import '~@angular/material/_theming';

$primary: mat-palette($mat-blue);
$accent: mat-palette($mat-orange);

$light-theme: mat-light-theme($primary, $accent);

@include mat-core();
@include angular-material-theme($light-theme);

body {
  margin: 0;
  color: rgba(0, 0, 0, 78);
  font-family: Roboto, Arial, sans-serif;
}
```

In this project we are going to use a Material theme with a primary color of **blue** and an accent color of **orange**. 
Along with the theme, the *Roboto* font family will be added for the application.

We also need to add the `mat-app-background` class on the `<body>` element. This allows Angular Material
to set the proper background color based on the current theme.

_src/index.html_
```html
<body class="mat-app-background">
  ...
</body>
```
