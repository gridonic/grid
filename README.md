# The Grid

A CSS Grid based on the [`flex`] display property written entirely in [Sass] respecting the [rscss] system.

# Install

`npm install --save @gridonic/grid`

# Use 

All you need to remember is **row** → **column** → your content.  

Responsive modifiers (e.g. `-xs`, `-sm`, `-md` etc.) enable you to specify different column sizes, offsets, alignments and distributions at different viewports. Those modifiers _may_ differ depending on _your_ configuration.

## Sass

Depending on your build process you can import the grid as easily as this:

```scss
// You want to customize the grid?
// Put your variables before the import in order to override the 
// default settings.

$grid-columns: 24;
$grid-gutter-width: 10px 20px 40px; // Responsive gutter width
$grid-outer-margin: 0.625rem 1.125rem; // Responsive outer margin

@import "~@gridonic/grid";
```

If your build process does not support resolving the `~` you may need to write it like that:

```scss
@import "../path-to-your-node_modules/@gridonic/grid";
```

## Configuration

Below you see the default configuration values.

```scss
// Set the number of columns you want to use in your layout.
$grid-columns: 12 !default;

// Set the gutter size between columns. You may provide a list of
// values for each breakpoint.
//
// If there are more breakpoints than values in your list, the last
// value will be used for all remaining breakpoints.
$grid-gutter-width: 30px !default;

// Set a margin for the container sides. This may also be a list of
// values. See gutter width for explanation.
$grid-outer-margin: 15px !default;

// Set the breakpoints for the grid. You should always provide at
// least one breakpoint without a resolution. This one will be used for
// naming of the initial classes.
$grid-breakpoints: (
    xs: null,
    sm: 576px,
    md: 768px,
    lg: 992px,
    xl: 1200px
) !default;

// Set the maximum width for the container. There is a class
// modifier available to disable the maximum width in case you don’t
// need it. See the official documentation for details.
$grid-max-width: 1440px !default;

// Set the prefix for all grid related classes. Use this in case you
// have conflicting class names.
$grid-classes-prefix: "grid-" !default;

```

# About

This grid is heavily inspired by the work of [@kristoferjoseph] and [@hugeinc]. Thank you guys! :heart:

<br>

#  
<p align="center">
  <a href="https://gridonic.ch">gridonic.ch</a> ・
  <a href="https://gridonic.github.io">gridonic.github.io</a> ・
  <a href="https://twitter.com/gridonic">@gridonic</a>
</p>


[@kristoferjoseph]: https://github.com/kristoferjoseph
[@hugeinc]: https://github.com/hugeinc
[rscss]: http://rscss.io/
[Sass]: https://sass-lang.com/
[`flex`]: https://www.w3.org/TR/css-flexbox-1/
