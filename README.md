# The Grid

A CSS Grid based on the [`flex`] display property written entirely in [Sass] respecting the [rscss] system.

# Install

`npm install --save @gridonic/grid`


# Use 

All you need to remember is **row** → **column** → your content.  

Responsive modifiers (e.g. `-xs`, `-sm`, `-md` etc) enable you to specify different column sizes, offsets, alignments and distributions at different viewports. Those modifiers _may_ differ depending on _your_ configuration.

## Sass

Depending on your build process you can import the grid as easily as this:

```scss
// Put your variables before the import 
// in order to override the default settings.

$grid-columns: 24;
$grid-gutter-width: 30px;
$grid-outer-margin: 14px;

@import "~@gridonic/grid";
```

If your build process does not support resolving the `~` you may need to write it like that:

```scss
@import "../path-to-your-node_modules/@gridonic/grid";
```

## Configuration

Below you see the default configuration values.

```scss
// Set the number of columns you want to use on your layout.
$grid-columns: 12;

// Set the gutter size between columns.
$grid-gutter-width: 1rem;

// Set a margin for the container sides.
$grid-outer-margin: 2rem;

// Set the breakpoints for the grid.
$grid-breakpoints: (
    xs: null,
    sm: 576px,
    md: 768px,
    lg: 992px,
    xl: 1200px
);

// Set the maximum width for the container.
$grid-max-width: 1440px;

// Set the prefix for all grid related classes.
$grid-classes-prefix: "grid-";
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
