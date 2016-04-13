Containing and wrapping classes are minimal, and should be configured to your project.

```scss
/** From _containers.scss */
.container {
  @extend .block-relative;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
}
.container--l {
  @extend .container;
  max-width: 1400px;
}
.container--m {
  @extend .container;
  max-width: 1200px;
}
.container--s {
  @extend .container;
  max-width: 900px;
}
.container--xs {
  @extend .container;
  max-width: 735px;
}
```

<p class="mt2">Svbstrate uses a commonplace 12-column grid. Column classes like <code>col-6</code> add widths, and have breakpoint extensions like <code>col-4_m</code> to make responsive layouts easier. Add float classes <code>float-l</code> <code>float-r</code> depending on which direction you want your grid to flow. Use a wrapping element with <code>clear</code> to define a clearfix.</p>

<div class="demo px2 clear align-c col-12">
  <div class="clear">

  <div class="float-l mv1 col-6 col-3_l"><div class="px1 mx0 bg-cg1 cg">col-6 col-3_l</div></div>
  <div class="float-l mv1 col-6 col-3_l"><div class="px1 mx0 bg-cg2 cw">col-6 col-3_l</div></div>
  <div class="float-l mv1 col-6 col-3_l"><div class="px1 mx0 bg-cg3 cw">col-6 col-3_l</div></div>
  <div class="float-l mv1 col-6 col-3_l"><div class="px1 mx0 bg-cg cw">col-6 col-3_l</div></div>

  <div class="float-l mv1 col-6 col-4_m"><div class="px1 mx0 bg-cg1 cg">col-6 col-4_m</div></div>
  <div class="float-l mv1 col-6 col-4_m"><div class="px1 mx0 bg-cg2 cw">col-6 col-4_m</div></div>
  <div class="float-l mv1 col-12 col-4_m"><div class="px1 mx0 bg-cg3 cw">col-12 col-4_m</div></div>

  <div class="float-l mv1 col-12 col-6_m"><div class="px1 mx0 bg-cg1 cg">col-12 col-6_m</div></div>
  <div class="float-l mv1 col-12 col-6_m"><div class="px1 mx0 bg-cg2 cw">col-12 col-6_m</div></div>

  <div class="float-l mv1 col-6 col-8_l"><div class="px1 mx0 bg-cg1 cg">col-6 col-8_l</div></div>
  <div class="float-l mv1 col-6 col-4_l"><div class="px1 mx0 bg-cg2 cw">col-6 col-4_l</div></div>

  </div>
</div>

```html
<div class="col-6 col-3_l float-l mv1"></div>
<div class="col-6 col-3_l float-l mv1"></div>
<div class="col-6 col-3_l float-l mv1"></div>
<div class="col-6 col-3_l float-l mv1"></div>

<div class="col-6 col-4_m float-l mv1"></div>
<div class="col-6 col-4_m float-l mv1"></div>
<div class="col-12 col-4_m float-l mv1"></div>

<div class="col-12 col-6_m float-l mv1"></div>
<div class="col-12 col-6_m float-l mv1"></div>

<div class="col-6 col-8_l float-l mv1"></div>
<div class="col-6 col-4_l float-l mv1"></div>
```

<p class="mt2">To add a gutter, use spacing utilities, combined with a offset 'row' element using a negative margin class like <code>mhn1</code>:</p>

<div class="demo px2 clear align-c col-12">
  <div class="mhn1 clear">
  <div class="ph1 float-l mv1 col-6 col-3_l"><div class="px1 mx0 bg-cg1 cg">col-6 col-3_l</div></div>
  <div class="ph1 float-l mv1 col-6 col-3_l"><div class="px1 mx0 bg-cg2 cw">col-6 col-3_l</div></div>
  <div class="ph1 float-l mv1 col-6 col-3_l"><div class="px1 mx0 bg-cg3 cw">col-6 col-3_l</div></div>
  <div class="ph1 float-l mv1 col-6 col-3_l"><div class="px1 mx0 bg-cg cw">col-6 col-3_l</div></div>

  <div class="ph1 float-l mv1 col-6 col-4_m"><div class="px1 mx0 bg-cg1 cg">col-6 col-4_m</div></div>
  <div class="ph1 float-l mv1 col-6 col-4_m"><div class="px1 mx0 bg-cg2 cw">col-6 col-4_m</div></div>
  <div class="ph1 float-l mv1 col-12 col-4_m"><div class="px1 mx0 bg-cg3 cw">col-12 col-4_m</div></div>

  <div class="ph1 float-l mv1 col-12 col-6_m"><div class="px1 mx0 bg-cg1 cg">col-12 col-6_m</div></div>
  <div class="ph1 float-l mv1 col-12 col-6_m"><div class="px1 mx0 bg-cg2 cw">col-12 col-6_m</div></div>

  <div class="ph1 float-l mv1 col-6 col-8_l"><div class="px1 mx0 bg-cg1 cg">col-6 col-8_l</div></div>
  <div class="ph1 float-l mv1 col-6 col-4_l"><div class="px1 mx0 bg-cg2 cw">col-6 col-4_l</div></div>
  </div>
</div>

```html
<div class="mhn1 clear">
  <div class="ph1 col-6 col-3_l float-l mv1"></div>
  <div class="ph1 col-6 col-3_l float-l mv1"></div>
  <div class="ph1 col-6 col-3_l float-l mv1"></div>
  <div class="ph1 col-6 col-3_l float-l mv1"></div>

  <div class="ph1 col-6 col-4_m float-l mv1"></div>
  <div class="ph1 col-6 col-4_m float-l mv1"></div>
  <div class="ph1 col-12 col-4_m float-l mv1"></div>

  <div class="ph1 col-12 col-6_m float-l mv1"></div>
  <div class="ph1 col-12 col-6_m float-l mv1"></div>

  <div class="ph1 col-6 col-8_l float-l mv1"></div>
  <div class="ph1 col-6 col-4_l float-l mv1"></div>
</div>
```

<h3 class="medium mt2">Clearing Floats</h3>

Breakpoint based `clear` classes are also available to clear floats as needed.

```css
/** Compiled output */
.clear-l {
  clear: left; 
}
@media (min-width: 24.9375em) {
  .clear-l_xs {
    clear: left; 
  }
}
@media (min-width: 37.5em) {
  .clear-l_s {
    clear: left; 
  } 
}
@media (min-width: 53.125em) {
  .clear-l_m {
    clear: left; 
  } 
}
@media (min-width: 65.625em) {
  .clear-l_l {
    clear: left; 
  } 
}
@media (min-width: 75em) {
  .clear-l_xl {
    clear: left; 
  } 
}
```
