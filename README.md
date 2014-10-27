Stylup
======

A custom markup language for managing HTML class names for responsive designs.

The parser works by looking for certain constructs and then converts them into valid conventional HTML class names.

For example if you write

```html
<div class="hidden@sm [columns 2@md 4@lg 8@xl])"></div>
```

Stylup will convert it to valid HTML class names

```
<div class="hidden-sm columns-2-md columns-4-lg columns-8-xl"></div>
```

## Installation

At the moment stylup works in the browser but eventually I will add server side suport so that it doesn't have to run in the browser.

To make it work, add the script just before your closing body tag

```html
   <script src="stylup.js"></script>
</body>
```
## Syntax

### Groups

`[class values]`

For example:

```html
<div class="[text uppercase strikethrough]"></div>
```

### Queries

`@query(classes)`

For example:

```html
<div class="@sm([columns 2]) @md([columns 3])"></div>
```

### Shorthand

`value|class@query`

For example:

```html
<div class="hidden@sm [columns 2@md 4@lg 8@xl])"></div>
```
