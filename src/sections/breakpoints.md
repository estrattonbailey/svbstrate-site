Breakpoints are defined as a SASS map, accessible via the `break()` function defined in `_breakpoints.scss`. You do not *need* to pass only predefined breakpoints to `break()`, however: the function accepts any integer.

Once passed, the `break()` function converts the integer or defined breakpoint variable to `em` units via the `em()` function.

```scss
/**
 * From _breakpoints.scss
 */

// Default
$breakpoints: (
	xs: 399,
	s: 600,
	m: 850,
	l: 1050,
	xl: 1200
) !default;

// This function converts values to ems,
// regardless of units.
@function em($value) {
	@if ($value/1) == $value {
		@if (unit($value) == 'px') {
			$unitless_value: $value/1px;
			@return ($unitless_value/16)*1em;
		} @else if (unit($value) == 'pt') {
			$unitless_value: $value/1pt;
			@return ($unitless_value/16)*1em;
		} @else {
			@return ($value/16)*1em;
		}
	}
	@warn "em(#{$value}) is not a number.";
	@return null;
}

// BREAKPOINT FUNCTION
// This function can be used with min-width or
// max-width queries, and converts the pixel
// value breakpoint variables at the top of this
// doc to ems for the rendered @media blocks.
// If passed a pixel value, it simply converts
// it to ems for use.
@function break($breakpoint, $min-width: true) {
	@if map-has-key($breakpoints, $breakpoint) {
    @if ($min-width == false) {
      @return em(map-get($breakpoints, $breakpoint) - 1);
    } @else {
      @return em(map-get($breakpoints, $breakpoint));
    }
	} @else {
    @if ($min-width == false) {
      @return em($breakpoint - 1)
    } @else {
      @return em($breakpoint)
    }
  }
	@warn "Bad value (#{$breakpoint}) in function break(#{$breakpoint}).";
	@return 'Check your break() declaration.';
}
```

By default, Svbstrate uses `min-width` based media queries. To use `max-width`, pass the optional second parameter to the `break()` function to subtract a single unit from the initial integer value:

```scss
@media (min-width: break(s)){
  /* styles */
}
@media (max-width: break(s, false)){
  /* styles */
}
