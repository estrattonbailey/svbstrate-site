These classes exist to make it painless to add base properties to an element, so that it might accept further styling such as `margin` or `z-index`. They also consequently make it easier to read the HTML and know what piece does what.

```scss
/** From _display.scss */
.block {
	display: block;
}
.inline {
	display: inline;
}
.inline-block {
	display: inline-block;
}
.relative {
	position: relative;
}
.absolute {
	position: absolute;
}
.fixed {
	position: fixed;
}
.static {
	position: static;
}
.block-relative {
	@extend .block;
	@extend .relative;
}
.inline-relative {
	@extend .inline-block;
	@extend .relative;
}
.block-fixed {
	@extend .block;
	@extend .fixed;
}
.block-absolute {
	@extend .block;
	@extend .absolute;
}
```
