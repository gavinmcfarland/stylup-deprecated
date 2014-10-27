Stylup
======

A custom markup language for managing HTML class names for responsive designs.

It works by looking for certain constructs inside each element's class attribute and then parses them into valid conventional HTML class names.

For example if you write

```html
<div class="hidden@sm [columns 2@md 4@lg 8@xl])"></div>
```

Stylup will convert the markup into valid HTML class names

```html
<div class="hidden-sm columns-2-md columns-4-lg columns-8-xl"></div>
```

Demo: http://jsbin.com/maquwo/7/edit?html,output

## Installation

At the moment stylup works in the browser but eventually I will add server side support so that it doesn't have to run in the browser.

To make it work, add the script just before your closing body tag

```html
   <script src="stylup.js"></script>
</body>
```
## Syntax

### Groups

```html
<div class="[text uppercase strikethrough]"></div>
```

### Queries

```html
<div class="@sm([columns 2]) @md([columns 3])"></div>
```

### Shorthand

```html
<div class="hidden@sm [columns 2@md 4@lg 8@xl])"></div>
```

## About / Feedback

This tool is a bit of an experiment. I started developing after trying to create my own CSS framework. I found that no matter how I organised my CSS it was still difficult to write HTML class names in a way which was quick and manageable. I looked at several different solutions and decided that creating a custom markup language was the direction I wanted to take.

I've taken inspiration from other authors who are also discussing similar things in this space. If you are interested on the subject you should also check out Glen Madderns, [Attribute Modules for CSS](http://glenmaddern.com/articles/introducing-am-css).

The current syntax I'm using was influenced by an idea Harry Roberts thought of to visually group [related class names](http://csswizardry.com/2014/05/grouping-related-classes-in-your-markup/). I decided to use this format because one it was easier to build and two it was something designers and front-end engineers might feel comfortable with.

I started writing this tool as a project to practice my coding skills and since have learned quite a lot about JavaScript and programming. Unfortunately though you may notice some problems that I couldn't foresee. If you do please find any bugs or have some feedback feel free to create an issue or get in touch with me.

Thanks to everyone who helped me write this tool and supported me along the way. A big thanks goes to [Justin Perry](https://github.com/ourmaninamsterdam), [Jim Myhrberg](https://github.com/jimeh) and Khalid Akram.
